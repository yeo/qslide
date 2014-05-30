'use strict'

define([
  'jquery-private', 
  'underscore',
  'backbone',
  'sha1',
  'firebase',
  'remote'
],  (
  $j, 
  _, 
  Backbone, 
  sha1, 
  __Firebase__, 
  Remote
  ) ->
  $=$j
  BACKEND_DATA_HOST = "https://qslider.firebaseio.com/"
  Connection = Backbone.Model.extend
    defaults: 
      from: 'unknow'
    initialize: () ->
      console && console.log "Start a connection"
      this.on 'change:from', (model) ->

  Slide = Backbone.Model.extend({})

  Command = Backbone.Model.extend({
    initialize: () ->
      console? && console.log 'New command'
    #remove: () ->
      #this.destroy()
    destroy: () ->

  })

  CommandQueue = Backbone.Collection.extend({
    model: Command
    
  })

  ToggleView = Backbone.View.extend 
    tagName: 'div'
    className: 'qslide'
    id: 'qslideSwitch'
    template: _.template '<div>Control By <a href="https://axcoto.com/qslider" style="color: #fff !important;">QSlider</a> <%= device %></div>
    <a class="js-toggle-board" href="#" style="color: #fff !important; tex-decoration: underline !important;">Show Info</a>'
    
    initialize: (options) ->
      if options? 
        (this[k] = v) for k,v of options
      this.render()
    
    events:
      "click .js-toggle-board": 'toggleBoard'

    render: ()->
      this.$el
          .css('position', 'fixed')
          .css('text-align', 'center')
          .css('zIndex', 9999)
          .css('left', 10)
          .css('top', 100)
          .css('background', '#666')
          .css('color', '#ccc')
          .css('width', '9em')
          .css('height', '3em')
          .css('padding', '0.5em')
        
      this.$el.html(this.template({device: @device}))
      $j('body').append this.$el
      return this
    
    toggleBoard: () ->
      $j('#qcommander').show()

  WelcomeView = Backbone.View.extend   
    tagName: 'div'
    className: 'qcommander'
    id: 'qcommander'
    template: _.template '
    <h4 class="js-close-welcome" style="cursor: pointer">Close</h4>

    <h4>More detail help</h4>
    <h4>Slideshow Token: <%= token %> </h4><img src="<%= bc %>" alt="Waiting for token" />
    '

  AppView = Backbone.View.extend
    tagName: 'div'
    className: 'qcommander'
    id: 'qcommander'
    template: _.template '
    <h4 class="js-close-welcome" style="position: absolute; right: 5px; top: 10px; text-align: right; cursor: pointer; font-size: 1.5em;">Close</h4>
    <!-- <h4>More detail help</h4> -->
    <h1>Slide ID: <%= token %> </h1>
    <img src="<%= bc %>" alt="Waiting for token" />
    '
    uuid: ()->
      S4 = () ->
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1)
      return "#{sha1(S4()+ new Date().getTime())}".substr(0, 6)
    
    # Generate URl. RUn showConnectionBoard whe finish
    genUUID: () ->
      that = this
      if this.localStorage('token')?
        #if (new Date().getTime() - localStorage['at']) / 1000 / 60  > 5 
          ## we only keep it for 8 hours
          #localStorage = null
        #else 
        uuid = this.localStorage('token')
        return this.showConnectionBoard(uuid) 

      uuid = this.uuid()
      rootRef = new Firebase "#{BACKEND_DATA_HOST}"
      rootRef.child("#{uuid}/token").on(
        'value', (snapshot) ->
          return that.genUUID() if snapshot.val()? 
          that.showConnectionBoard(uuid) 
      )
    
    localStorage: (k,v ) ->
      s = sha1(window.location.pathname).substr(0, 10)
      if v? 
        localStorage.setItem("#{s}.#{k}", v)
      else
        return localStorage.getItem("#{s}.#{k}")

    initialize: () ->
      @isConnected = false
      @toggleView = new ToggleView(
        mainBoard: this
      )
      @queue = new CommandQueue()
      that = this
      @queue.on 'add', (model) ->
        that.exec model
        #Okay, remove that command
        console? && console.log "#{this.url}#{model.get('name')}"
        r = new Firebase "#{this.url}#{model.get('name')}"
        #r = new Firebase("#{BACKEND_DATA_HOST}#{connection.get('token')}/qc/".concat(snapshot.name()))
        r.remove() 
        model.destroy()
      this.genUUID()
    
    # Exec a command from queue.
    exec: (model) ->
      message = model.toJSON()
      switch message.cmd
        when 'handshake'
          #if localStorage['allow']? and message.from == localStorage['allow']
            #return true
          # First time connection, just alow it. make it simple
          # The second connection coming, let iOS handle it
          # if locaStprage['allow']?
          if !this.isConnected
            this.localStorage('allow', message.data.from)
            this.localStorage('at' ,new Date().getTime())
            this.localStorage('device_priority', 1)
            this.closeWelcome()
            try 
              this.saveConnectFrom(message.data.name)
            catch e
              console? && console.log(e)
          #if confirm("Allow connection from #{message.name}?")
            #connection.set('connected_from', message.from)
            #localStorage['allow'] = message.from
          else 
            if (message.data.from == this.localStorage('allow'))
              console? && console.log "Reconnect"
            else 
              console? && console.log("Connected before from #{this.localStorage('allow')}")
        when 'next'
          @remote.next(
            ((data) -> 
              this.saveCurrentSlide(data)
            ).bind this  
          )    
          this.closeWelcome()
        when 'prev', 'previous'
          @remote.previous(
            ((data) ->
              this.saveCurrentSlide(data)
            ).bind this  
          )
          this.closeWelcome()
        when 'last'
          @remote.jump(@remote.driver.quantity, 
            ((data) ->
              this.saveCurrentSlide data
            ).bind this
          )
          this.closeWelcome()
        when 'first'
          @remote.jump(0, 
            ((data) ->
              this.saveCurrentSlide data
            ).bind this
          )
          this.closeWelcome()
        when 'jump'
          @remote.jump(message.data.number, 
            ((data) ->
              this.saveCurrentSlide data
            ).bind this
          )
          this.closeWelcome()
        else
          console? && console.log "Not implement"
      #connection.re
    
    saveCurrentSlide: (data) ->
      console? && console.log this
      info = new Firebase("#{BACKEND_DATA_HOST}#{@connection.get('token')}/info")
      info.child('currentSlideUrl').set data.url
      info.child('currentSlideNumber').set data.currentSlideNumber
    
    saveConnectFrom: (from) ->
      console? && console.log this
      info = new Firebase("#{BACKEND_DATA_HOST}#{@connection.get('token')}/info")
      info.child('from').set from

    presenceNoty: () ->
      connectionRef = new Firebase "#{@baseFirebaseUrl}info/connection"
      lastOnlineRef = new Firebase "#{@baseFirebaseUrl}info/lastOnline"
      connectedRef  = new Firebase "#{BACKEND_DATA_HOST}.info/connected"
      connectedRef.on 'value', (s) ->
        console? && console.log "Connected"
        if s.val() == true
          conn = connectionRef.push true
          conn.onDisconnect().remove()
          lastOnlineRef.onDisconnect().set Firebase.ServerValue.TIMESTAMP

    # Init the app, setup connection, show the welcome board
    showConnectionBoard: (uuid) ->
      that = this
      code =
        token: uuid 
        url: escape(window.location.href)
        provider: window.location.host
         
      this.localStorage 'token', code.token
      bc = "https://chart.googleapis.com/chart?chs=350x350&cht=qr&chl=#{encodeURI(JSON.stringify(code))
}&choe=UTF-8"
      
      @connection = new Connection code
      @connection.set('bc', bc)
      try 
        @remote = new Remote code.url
        @connection.set 'author', @remote.getAuthor()
        @connection.set 'currentSlideUrl', @remote.driver.getCurrentSlideScreenshot() 
        @connection.set 'currentSlideNumber', @remote.driver.getCurrentSlideNumber() 
        @connection.set 'quantity', @remote.driver.quantity
        @connection.set 'title',    @remote.driver.getTitle()

      catch error
        alert(error)
        return false

      baseFirebaseUrl = @baseFirebaseUrl = "#{BACKEND_DATA_HOST}#{@connection.get('token')}/"
      @queue.url = "#{baseFirebaseUrl}qc/"
      console? && console.log @queue
      
      # Push slide info
      slideInfo = new Firebase "#{baseFirebaseUrl}info/"
      slideInfo.set @connection.toJSON(), (e) ->
        if e
          alert "Cannot connec to server. Check internet connection"
          return false
        else
          that.presenceNoty()

      @remoteQueu = new Firebase "#{baseFirebaseUrl}qc/"
      @remoteQueu.limit(200).on 'child_added', (snapshot) ->
        message = snapshot.val()
        console.log(message)
        that.queue.add new Command
          name: snapshot.name()
          cmd: message.cmd
          data: message 

      return this.render()

    render: ()->
      this.$el
          #.css('opacity', 0.8)
          .css('position', 'fixed')
          .css('text-align', 'center')
          .css('zIndex', 9999)
          .css('width', 800)
          .css('height', 700)
          .css('left', '50%')
          .css('margin-left', '-350px')
          .css('top', 0)
          .css('padding-top', '2em')
          .css('background', '#666')
          .css('color', '#ccc')
        
      this.$el.html(this.template(@connection.attributes))
      console? && console.log this.$el
      $j('body').append this.$el
      return this

    events:
      "click .js-close-welcome": 'closeWelcome'
      "hover #spin": "animatePlayButton"

      
    closeWelcome: ()->
      console? && console.log 'Close welcome form'
      this.$el.hide()

    animatePlayButton: ()->
        this.playButton.transform
            rotate: 90

    resetData:  ()->
      this.r.setAwards(Rewards)
  
  return {
    init: ()->
      appView = new AppView()
  }
)
