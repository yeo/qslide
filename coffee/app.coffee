'use strict'

define ['jquery-private', 'underscore', 'backbone',  'firebase', 'buzz', 'localStorage', 'bootstrap'],  ($_, _, Backbone, buzz, __Firebase__) ->

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
      remoteQueu = new Firebase('https://qcommander.firebaseio-demo.com/command_queues')
      remoteQueu.limit(200).on 'child_added', (snapshot) ->
        console.log(snapshot)
        message = snapshot.val()
        console.log(message)
        switch message.cmd
          when 'next'
            f = $('.speakerdeck-iframe');
            #// $('.controls > a.next', f.contents()).click()
            console.log($('.controls > a.next'))
            $('.controls > a.next').click();

            $('.nav .btnNext').length && $('.nav .btnNext').click()
          when 'prev'
            f = $('.speakerdeck-iframe');
            $('.controls > a.prev').click();

            $('.nav .btnPrevious').length && $('.nav .btnNext').click()
          else
            console.log "Not implement"
        #Okay, remove that command
        r = new Firebase("https://qcommander.firebaseio-demo.com/command_queues/".concat(snapshot.name()))
        r.remove()
      this.render() 

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


  # other stuff
