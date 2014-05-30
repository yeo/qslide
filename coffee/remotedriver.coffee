define(
  [
    'jquery-private'
  ],
  ($j) ->
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
      getTitle: () ->
        $j(document).prop('title')
)
