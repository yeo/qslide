define(
  [
    'remotedriver',
    'jquery-private'
  ], 
  (RemoteControlDriver, $j) ->
    class SpeakerdeskRemote extends RemoteControlDriver 
      constructor: () ->
        super
        # The player is put inside a iframe so, let get its contents
        @container = $j('.speakerdeck-iframe ').contents()
        @quantity = this.getSlideQuantity()
        console? && console.log @container

      getAuthor: () ->
        $j('#talk-details h2 a').html()
            #when window.location.host.indexOf('slideshare.net')  then   $j('#talk-details h2 a').html()
      getTitle: () ->
          $j(document).prop('title').replace("// Speaker Deck", '').trim()

      getSlideQuantity: () ->
        $j('.previews > img', @container).length

      getCurrentSlideNumber: () ->
        current_url = $j('#player-content-wrapper > #slide_image', @container).prop('src')
        r = /\/slide_([0-9]+)\./gi
        if m = r.exec(current_url)
          return 1 + parseInt(m[1])
        return false 

      getCurrentSlideScreenshot: () ->
        $j('#player-content-wrapper > #slide_image', @container).prop('src')
      
      jump: (num) ->
        $j('.speakerdeck-iframe ')[0].contentWindow.player.goToSlide num
      next: () ->
        $j('.overnav > .next', @container)[0].click()
      previous: () ->
        $j('.overnav > .prev', @container)[0].click()


)
