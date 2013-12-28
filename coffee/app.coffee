'use strict'

define ['jquery-private', 'underscore', 'backbone',  'firebase', 'localStorage'],  ($_, _, Backbone,  __Firebase__) ->
  
  Connection = Backbone.Model.extend({})
  Slide = Backbone.Model.extend({})
  
  ToggleView = Backbone.View.extend 
    tagName: 'div'
    className: 'qslide'
    id: 'qslideSwitch'
    template: _.template '<a class="" href="#">Show</a>'

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
        return (((1+Math.random())*0x10000)|0).toString(10).substring(1)
      return "#{S4()}#{S4()}"

    initialize: () ->
      code =
        token: if localStorage['token']? then localStorage['token'] else this.uuid()
        url: window.location.href

      localStorage['token'] = code.token
      bc = "https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=#{encodeURI(JSON.stringify(code))
}&choe=UTF-8"
      code.bc = bc
      connection = @connection = new Connection code
      remote = new Remote code.url
      baseFirebaseUrl = "https://qcommander.firebaseio-demo.com/#{@connection.get('token')}/"
      
      # Push slide info
      slideInfo = new Firebase "#{baseFirebaseUrl}info/"
      slideInfo.set code

      remoteQueu = new Firebase "#{baseFirebaseUrl}qc/"
      console.log remoteQueu
      
      this.showConnectionBoard() 
      remoteQueu.limit(200).on 'child_added', (snapshot) ->
        console.log(snapshot)
        message = snapshot.val()
        console.log(message)
        switch message.cmd
          when 'handshake'
            #if localStorage['allow']? and message.from == localStorage['allow']
              #return true

            if confirm("Allow connection from #{message.name}?")
              connection.set('connected_from', message.from)
              localStorage['allow'] = message.from
          when 'next'
            remote.next()
          when 'prev', 'previous'
            remote.previous()
          when 'current'
            remote.getCurrentSlide()
          else
            console.log "Not implement"
        #Okay, remove that command
        r = new Firebase("https://qcommander.firebaseio-demo.com//#{connection.get('token')}/qc/".concat(snapshot.name()))
        r.remove()

    showConnectionBoard: () ->
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

    previous: () ->
      #@driver.jump(@driver.currentSlide() - 1a
      @driver.previous()
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
  class ScribdRemote extends RemoteControlDriver
  class RabbitRemote extends RemoteControlDriver

  return {
    init: ()->
      appView = new AppView()
  }
  # other stuff
  # 
