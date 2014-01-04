'use strict'

define ['jquery-private', 'underscore', 'backbone', 'sha1', 'firebase', 'localStorage'],  ($_, _, Backbone, sha1, __Firebase__) ->
  Connection = Backbone.Model.extend
    defaults: 
      from: 'unknow'
    initialize: () ->
      console && console.log "Start a connection"
      this.on 'change:from', (model) ->

        

  Slide = Backbone.Model.extend({})

  Command = Backbone.Model.extend({
    initialize: () ->
      console.log 'New command'
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
    template: _.template '<div>Via: <%= device %></div>
    <a class="js-toggle-board" href="#">Show</a>'
    
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
          .css('width', 30)
          .css('height', 10)
          .css('left', 10)
          .css('bottom', 30)
          .css('background', '#FEE19B')
          .css('color', '#ccc')
        
      this.$el.html(this.template({device: @device}))
      $('body').append this.$el
      return this
    
    toggleBoard: () ->
      $('#qcommander').show()

  WelcomeView = Backbone.View.extend   
    tagName: 'div'
    className: 'qcommander'
    id: 'qcommander'
    template: _.template '
    <h4 class="js-close-welcome">Close</h4>

    <h4>More detail help</h4>
    <h4>Slideshow Token: <%= token %> </h4><img src="<%= bc %>" alt="Waiting for token" />
    '

  AppView = Backbone.View.extend
    tagName: 'div'
    className: 'qcommander'
    id: 'qcommander'
    template: _.template '
    <h4 class="js-close-welcome">Close</h4>

    <h4>More detail help</h4>
    <h4>Slideshow Token: <%= token %> </h4><img src="<%= bc %>" alt="Waiting for token" />
    '
    uuid: ()->
      S4 = () ->
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1)
      return "#{sha1(S4()+ new Date().getTime())}".substr(0, 6)
    
    # Generate URl. RUn showConnectionBoard whe finish
    genUUID: () ->
      that = this
      if localStorage['token']?
        #if (new Date().getTime() - localStorage['at']) / 1000 / 60  > 5 
          ## we only keep it for 8 hours
          #localStorage = null
        #else 
        uuid = localStorage['token']  
        return this.showConnectionBoard(uuid) 

      uuid = this.uuid()
      rootRef = new Firebase "https://qcommander.firebaseio-demo.com/"
      rootRef.child(uuid).on(
        'value', (snapshot) ->
          return that.genUUID() if snapshot.val()?
          that.showConnectionBoard(uuid) 
      )
    
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
        #r = new Firebase("https://qcommander.firebaseio-demo.com//#{connection.get('token')}/qc/".concat(snapshot.name()))
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
            localStorage['allow'] = message.from
            localStorage['at'] = new Date().getTime()
            localStorage['device_priority'] = 1
            this.closeWelcome()
          #if confirm("Allow connection from #{message.name}?")
            #connection.set('connected_from', message.from)
            #localStorage['allow'] = message.from
          else 
            if (message.from == localStorage['allow'])
              console? && console.log "Reconnect"
            else 
              console? && console.log("Connected before from #{localStorage['allow']}")
        when 'next'
          @remote.next(
            ((data) -> 
              this.saveCurrentSlide(data)
            ).bind this  
          )    
        when 'prev', 'previous'
          @remote.previous(
            ((data) ->
              this.saveCurrentSlide(data)
            ).bind this  
          )
        when 'last'
          @remote.jump(@remote.driver.quantity, 
            ((data) ->
              this.saveCurrentSlide data
            ).bind this
          )
        when 'first'
          @remote.jump(0, 
            ((data) ->
              this.saveCurrentSlide data
            ).bind this
          )
        else
          console.log "Not implement"
      #connection.re
    
    saveCurrentSlide: (data) ->
      console.log this
      info = new Firebase("https://qcommander.firebaseio-demo.com/#{@connection.get('token')}/info")
      info.child('currentSlideUrl').set data.url
   
    presenceNoty: () ->
      connectionRef = new Firebase "#{@baseFirebaseUrl}info/connection"
      lastOnlineRef = new Firebase "#{@baseFirebaseUrl}info/lastOnline"
      connectedRef  = new Firebase "https://qcommander.firebaseio-demo.com/.info/connected"
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
        url: window.location.href
        title: $(document).prop('title')
        provider: window.location.host
         
      localStorage['token'] = code.token
      bc = "https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=#{encodeURI(JSON.stringify(code))
}&choe=UTF-8"
      
      @connection = new Connection code
      @connection.set('bc', bc)
      @remote = new Remote code.url
      @connection.set 'author', @remote.getAuthor()
      @connection.set 'currentSlideUrl', @remote.driver.getCurrentSlideScreenshot() 
      @connection.set 'currentSlideNumber', @remote.driver.getCurrentSlideNumber() 
      
      baseFirebaseUrl = @baseFirebaseUrl = "https://qcommander.firebaseio-demo.com/#{@connection.get('token')}/"
      @queue.url = "#{baseFirebaseUrl}qc/"
      console.log @queue
      

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
          .css('background', '#FEE19B')
          .css('color', '#ccc')
        
      this.$el.html(this.template(@connection.attributes))
      console.log this.$el
      $('body').append this.$el
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
  
      
  class Remote 
    constructor: (@url) ->
      @driver = {}
      this.setupRemote()
    # Based on url, load corresponding remote driver  
    setupRemote: () -> 
      @driver = switch
        when @url.indexOf('speakerdeck.com/') > 1 then new SpeakerdeskRemote
        when @url.indexOf('slideshare.net/') > 1  then new SlideshareRemote
        when @url.indexOf('scribd.com/') > 1  then new ScribdRemote
        else new RabbitRemote
    

    control: () ->
      @driver

    getCurrentSlide: () ->
      url = @driver.getCurrentSlideScreenshot()
      console.log url

    getAuthor: () ->
      @driver.getAuthor()

    previous: (cb) ->
      #@driver.jump(@driver.currentSlide() - 1a
      @driver.previous()
      cb({url: @driver.getCurrentSlideScreenshot()})
      #this.trigger('transitionSLide', {url: this.getCurrentSlide()})
    next: (cb) ->
      #@driver.jump(@driver.currentSlide() + 1)
      @driver.next()
      cb({url: @driver.getCurrentSlideScreenshot()})
    jump: (num, cb) ->
      @driver.jump num
      cb({url: @driver.getCurrentSlideScreenshot()})

  # Base control class 
  class RemoteControlDriver
    constructor: () ->
      @currentSlide = 0
      @container = {}

    # which driver will be used for this URL
    match: (url) ->
         
    jump: () ->
    next: () ->
    previous: () ->
    getCurrentSlideNumber: () ->
    getCurrentSlideScreenshot: () ->
    getAuthor: () ->

  class SpeakerdeskRemote extends RemoteControlDriver 
    constructor: () ->
      super
      # The player is put inside a iframe so, let get its contents
      @container = $('.speakerdeck-iframe ').contents()
      @quantity = this.getSlideQuantity()
      console? && console.log @container

    getAuthor: () ->
      $('#talk-details h2 a').html()
          #when window.location.host.indexOf('slideshare.net')  then   $('#talk-details h2 a').html()
    
    getSlideQuantity: () ->
      $('.previews > img', @container).length

    getCurrentSlideNumber: () ->
      current_url = $('#player-content-wrapper > #slide_image', @container).prop('src')
      r = /\/slide_([0-9]+)\./gi
      if m = r.exec(current_url)
        return 1 + parseInt(m[1])
      return false 

    getCurrentSlideScreenshot: () ->
      $('#player-content-wrapper > #slide_image', @container).prop('src')
    
    jump: (num) ->
      $('.speakerdeck-iframe ')[0].contentWindow.player.goToSlide num
    next: () ->
      $('.overnav > .next', @container)[0].click()
    previous: () ->
      $('.overnav > .prev', @container)[0].click()

  class SlideshareRemote extends RemoteControlDriver
    constructor: () ->
      super
      @container = $('#svPlayerId') 
      @quantity = this.getSlideQuantity()
      console? && console.log @container
    
    getAuthor: () ->
      $('.title .h-author-name').html()

    getSlideQuantity: () ->
      $('.previews > img', @container).length

    getCurrentSlideNumber: () ->
      1 + parseInt($('.goToSlideLabel > input', @container).val())

    getCurrentSlideScreenshot: () ->
      $('.slide_container > .slide').eq(this.getCurrentSlideNumber()).find('img').prop('src')

    jump: (num) ->
      e = $.Event 'keydown'
      e.which = 13
      e.keyCode = 13
      $('.navActions .goToSlideLabel input', @container).val(num).trigger e

    next: () ->
      $('.nav > .btnNext', @container)[0].click()
    previous: () ->
      $('.nav > .btnPrevious', @container)[0].click()
    
  class ScribdRemote extends RemoteControlDriver
  class RabbitRemote extends RemoteControlDriver

  return {
    init: ()->
      appView = new AppView()
  }
  # RequireJS 
