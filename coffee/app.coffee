'use strict'

define ['jquery-private', 'underscore', 'backbone',  'firebase', 'localStorage'],  ($_, _, Backbone,  __Firebase__) ->
  
  Connection = Backbone.Model.extend({})
  Slide = Backbone.Model.extend({})
 

  ToggleView = Backbone.View.extend 
    tagName: 'div'
    className: 'qslide'
    id: 'qslideSwitch'
    template: _.template '<a class="js-toggle-board" href="#">Show</a>'
    
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
        
      this.$el.html(this.template())
      console.log this.$el
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
        #return (((1+Math.random())*0x10000)|0).toString(16).substring(1)
        return ( ((1+Math.random()) * 0x1000) | 0 ).toString(10).substring(1)
      return "#{S4()}"
  
    genUUID: () ->
      # @TODO Store token for 8 hours only
      that = this
      if localStorage['token']?
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
      @toggleView = new ToggleView(
        mainBoard: this
      )
      #@welcomeView = new WelcomeView()
      this.genUUID()
      
    showConnectionBoard: (uuid) ->
      code =
        token: uuid 
        url: window.location.href

      localStorage['token'] = code.token

      bc = "https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=#{encodeURI(JSON.stringify(code))
}&choe=UTF-8"
      
      connection = @connection = new Connection code
      connection.set('bc', bc)
      remote = @remote = new Remote code.url
      baseFirebaseUrl = "https://qcommander.firebaseio-demo.com/#{@connection.get('token')}/"
      #remote.bind 'transitionSlide', (e) ->  
        #info = new Firebase("https://qcommander.firebaseio-demo.com/#{connection.get('token')}/info")
        #info.child('currentSlideUrl').set e.url

      # Push slide info
      slideInfo = new Firebase "#{baseFirebaseUrl}info/"
      slideInfo.set code

      remoteQueu = new Firebase "#{baseFirebaseUrl}qc/"
      remoteQueu.limit(200).on 'child_added', (snapshot) ->
        console.log(snapshot)
        message = snapshot.val()
        console.log(message)
        switch message.cmd
          when 'handshake'
            #if localStorage['allow']? and message.from == localStorage['allow']
              #return true
            # First time connection, just alow it. make it simple
            # The second connection coming, let iOS handle it
            # if locaStprage['allow']?
            
            localStorage['allow'] = message.from
            localStorage['device_priority'] = 1
            #if confirm("Allow connection from #{message.name}?")
              #connection.set('connected_from', message.from)
              #localStorage['allow'] = message.from
          when 'next'
            remote.next()
            remote.updateCurrentSlide()
          when 'prev', 'previous'
            remote.previous()
            remote.updateCurrentSlide()
          else
            console.log "Not implement"
        #Okay, remove that command
        r = new Firebase("https://qcommander.firebaseio-demo.com//#{connection.get('token')}/qc/".concat(snapshot.name()))
        r.remove()

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
        when @url.indexOf('://speakerdeck.com/') > 1 then new SpeakerdeskRemote
        when @url.indexOf('://slideshare.net/') > 1  then new SlideshareRemote
        when @url.indexOf('://www.scribd.com/') > 1  then new ScribdRemote
        else new RabbitRemote

    getCurrentSlide: () ->
      url = @driver.getCurrentSlideScreenshot()
      console.log url

    previous: () ->
      #@driver.jump(@driver.currentSlide() - 1a
      @driver.previous()
      this.trigger('transitionSLide', {url: this.getCurrentSlide()})
    next: () ->
      #@driver.jump(@driver.currentSlide() + 1)
      @driver.next()
    jump: (num) ->
      @driver.jump(num)

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


  class SpeakerdeskRemote extends RemoteControlDriver 
    constructor: () ->
      super
      @container = $('.speakerdeck-iframe ').contents()
      console? && console.log @container

    getCurrentSlideScreenshot: () ->
      $('#player-content-wrapper > #slide_image', @container).prop('src')

    next: () ->
      $('.overnav > .next', @container)[0].click()
    previous: () ->
      $('.overnav > .prev', @container)[0].click()

  class SlideshareRemote extends RemoteControlDriver
    constructor: () ->
      super
      @container = $('.speakerdeck-iframe ').contents()
      console? && console.log @container

    getCurrentSlideScreenshot: () ->
      $('#player-content-wrapper > #slide_image', @container).prop('src')

    next: () ->
      $('.overnav > .next', @container)[0].click()
    previous: () ->
      $('.overnav > .prev', @container)[0].click()

  class ScribdRemote extends RemoteControlDriver
  class RabbitRemote extends RemoteControlDriver

  return {
    init: ()->
      appView = new AppView()
  }
  # other stuff
  # 
