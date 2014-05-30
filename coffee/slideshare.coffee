define([
  'remotedriver',
  'jquery-private'
], (RemoteControlDriver,$j) ->
  class SlideshareRemote extends RemoteControlDriver
    constructor: () ->
      super
      @container = $j('#svPlayerId') 
      @quantity = this.getSlideQuantity()
      console? && console.log @container
    
    getAuthor: () ->
      $j('.title .h-author-name').html()

    getSlideQuantity: () ->
      if $j('.slide_container').length > 0
        return $j('.slide_container .slide', @container).length 
      if $j('.slidesContainer').length > 0 
        return $j('.slidesContainer .jsplBgColorBigfoot').length

    getCurrentSlideNumber: () ->
      if $j('.goToSlideLabel > input', this.container).length == 0
        throw new Error("This page doesn't contain a valid slide.")
      n = parseInt($j('.goToSlideLabel > input', @container).val())
      if n<=1
        return 1
      return n

    getCurrentSlideScreenshot: () ->
      n = this.getCurrentSlideNumber()
      if $j('.slide_container > .slide').eq(n-1).find('img').length > 0 
        url = $j('.slide_container > .slide').eq(n-1).find('img').prop('src')
        if url.indexOf('image')>=1
          return url
      return "http://placehold.it/320&text=#{n}"

    jump: (num) ->
      e = $.Event 'keyup'
      e.which = 13
      e.keyCode = 13
      $j('.navActions .goToSlideLabel input', @container).val(num).trigger e

    next: () ->
      $j('.nav > .btnNext', @container)[0].click()
    previous: () ->
      $j('.nav > .btnPrevious', @container)[0].click()
 
)
