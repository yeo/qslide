'use strict'

define ['jquery-private', 'underscore', 'backbone',  'firebase', 'localStorage'],  ($_, _, Backbone,  __Firebase__) ->
  
  Connection = Backbone.Model.extend({})
  Slide = Backbone.Model.extend({})
  
  AppView = Backbone.View.extend
    tagName: 'div'
    className: 'qcommander'
    id: 'qcommander'
    template: _.template '
    <h4>More detail help</h4>
    <h4>Slideshow Token: <%= code.token %> </h4><img src="<%= bc %>" alt="Waiting for token" />
    '

    uuid: ()->
      S4 = () ->
        #return (((1+Math.random())*0x10000)|0).toString(16).substring(1)
        return (((1+Math.random())*0x10000)|0).toString(10).substring(1)
      return "#{S4()}#{S4()}"

    initialize: () ->
      code =
        token: if localStorage['token']? then localStorage['token'] else this.uuid()
        count: 12

      localStorage['token'] = code.token
      bc = "https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=#{encodeURI(JSON.stringify(code))
}&choe=UTF-8"
      @connection = new Connection(
        code: code
        bc: bc
      )
      url = window.location
      remote = new Remote url 
      #remoteQueu = new Firebase "https://qcommander.firebaseio-demo.com/command_queues/#{window.btoa(url)}"
      remoteQueu = new Firebase "https://qcommander.firebaseio-demo.com/command_queues/#{@connection.get('code').token}/"
      remoteQueu.limit(200).on 'child_added', (snapshot) ->
        console.log(snapshot)
        message = snapshot.val()
        console.log(message)
        switch message.cmd
          when 'handshake'
            # decide if we scan allow this
            if confirm("Allow connection from? #{message.from}")
              @connection.set('connected_from', message.from)
              return true
            end
          when 'next'
            remote.next
          when 'prev'
            remote.previous
          else
            console.log "Not implement"
        #Okay, remove that command
        r = new Firebase("https://qcommander.firebaseio-demo.com/command_queues/#{@connection.get('code').token}/".concat(snapshot.name()))
        r.remove()
      this.showConnectionBoard() 

    showConnectionBoard: () ->
      return this.render()

    render: ()->
      this.$el
          .css('opacity', 0.8)
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
      "click #spin": "doPlay"
      "hover #spin": "animatePlayButton"
    
    doPlay: ()-> this.r.spin

    animatePlayButton: ()->
        this.playButton.transform
            rotate: 90

    resetData:  ()->
      this.r.setAwards(Rewards)
  
  class Remote 
    constructor: (@url) ->
      @driver = {}
      this.setupRemote
    # Based on url, load corresponding remote driver  
    setupRemote: () ->  
    previous: () ->
      @driver.jump(@driver.currentSlide() - 1)
    next: () ->
      @driver.jump(@driver.currentSlide() + 1)
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
    getCurrentSlide: () ->

  class SpeakerdeskRemote extends Remote
    constructor: () ->
      super
    next: () ->
      f = $('.speakerdeck-iframe');
      console.log($('.controls > a.next'))
      $('.controls > a.next').click();
      $('.nav .btnNext').length && $('.nav .btnNext').click()
    previous: () ->
      f = $('.speakerdeck-iframe');
      $('.controls > a.prev').click();
      $('.nav .btnPrevious').length && $('.nav .btnNext').click()


  class SlideshareRemote extends Remote
  class ScribdRemote extends Remote
  class RabbitRemote extends Remote
    

  return {
    init: ()->
      appView = new AppView()
  }
  # other stuff
  # 
