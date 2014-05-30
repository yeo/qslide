define([
  'jquery-private',
  'speakerdeck',
  'slideshare',
  'google',
  'prezi'
], () -> 
   class Remote 
    constructor: (@url) ->
      @driver = {}
      this.setupRemote()
    # Based on url, load corresponding remote driver  
    setupRemote: () -> 
      try 
        @driver = switch
          when @url.indexOf('speakerdeck.com/') > 1 then new SpeakerdeskRemote
          when @url.indexOf('slideshare.net/') > 1  then new SlideshareRemote
          when @url.indexOf('scribd.com/') > 1  then new ScribdRemote
          when @url.indexOf('google.com/') > 1  then new GoogleRemote
          else throw new Error("Not supported yet")
        return this    
      catch error
        throw error

    control: () ->
      @driver

    getCurrentSlide: () ->
      url = @driver.getCurrentSlideScreenshot()
      console? && console.log url

    getAuthor: () ->
      @driver.getAuthor()

    previous: (cb) ->
      #@driver.jump(@driver.currentSlide() - 1a
      @driver.previous()
      cb(
        url: @driver.getCurrentSlideScreenshot()
        currentSlideNumber: @driver.getCurrentSlideNumber()
      )
      #this.trigger('transitionSLide', {url: this.getCurrentSlide()})
    next: (cb) ->
      #@driver.jump(@driver.currentSlide() + 1)
      @driver.next()
      cb(
        url: @driver.getCurrentSlideScreenshot()
        currentSlideNumber: @driver.getCurrentSlideNumber()
      )
    jump: (num, cb) ->
      @driver.jump num
      cb(
        url: @driver.getCurrentSlideScreenshot()
        currentSlideNumber: @driver.getCurrentSlideNumber()
      )
)
