define([
  'remotedriver',
  'jquery-private'
  ], 
  (RemoteControlDriver, $j) ->
    class PreziRemote extends RemoteControlDriver
      constructor: () ->
        super
        @container = $j('.punch-viewer-nav .punch-viewer-nav-rounded-container') 
        #@quantity = this.getSlideQuantity()
        console? && console.log @container
      
      getAuthor: () ->
        "NA"
        #$j('.title .h-author-name').html()

      getSlideQuantity: () ->
        if $j('.goog-menu.goog-menu-vertical').length == 0
          return 0
        
        $j('div', $j('.goog-menu.goog-menu-vertical')[0]).length


      getCurrentSlideNumber: () ->
        if $j('.goToSlideLabel > input', this.container).length == 0
          throw new Error("This page doesn't contain a valid slide.")
        n = parseInt($j('.goToSlideLabel > input', @container).val())
        if n<=1
          return 1
        return n

      getCurrentSlideScreenshot: () ->
        n = this.getCurrentSlideNumber()
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
