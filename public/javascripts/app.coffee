'use strict'

define ['jquery-private', 'underscore', 'backbone',  'firebase', 'buzz', 'localStorage', 'bootstrap'],  ($_, _, Backbone, buzz, __Firebase__) ->
  
  Connection = Backbone.Model.extend({})

  AppView = Backbone.View.extend
    tagName: 'div'
    className: 'qcommander'
    id: '#qcommander'
    template: _.template '<div style="text-align: center"><img src="https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=<%= token%>" alt="Waiting for token" /></div>'

    uuid: ()->
      S4 = () ->
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1)
      return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())

    initialize: () ->
      remote = new Remote 'https://speakerdeck.com/addyosmani/automating-front-end-workflow'
      remoteQueu = new Firebase('https://qcommander.firebaseio-demo.com/command_queues')
      remoteQueu.limit(200).on 'child_added', (snapshot) ->
        console.log(snapshot)
        message = snapshot.val()
        console.log(message)
        switch message.cmd
          when 'next'
            remote.next
          when 'prev'
            remote.previous
          else
            console.log "Not implement"
        #Okay, remove that command
        r = new Firebase("https://qcommander.firebaseio-demo.com/command_queues/".concat(snapshot.name()))
        r.remove()
      this.showConnectionBoard() 

    showConnectionBoard: () ->
      uuid = this.uuid
      bc = "https://chart.googleapis.com/chart?chs=600x600&cht=qr&chl=#{code}&choe=UTF-8"
      code = JSON.stringify(
        code: uuid
        count: 12
      )
      connection = new Connection(
        token: uuid
        code: code
        bc: bc
      )

    render: ()->
      this.$el.html this.template({token: '3sa4'})
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
      @driver = nil
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
