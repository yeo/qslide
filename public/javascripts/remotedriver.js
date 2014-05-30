(function() {

  define(['jquery-private'], function($j) {
    var RemoteControlDriver;
    return RemoteControlDriver = (function() {

      function RemoteControlDriver() {
        this.currentSlide = 0;
        this.container = {};
      }

      RemoteControlDriver.prototype.match = function(url) {};

      RemoteControlDriver.prototype.jump = function() {};

      RemoteControlDriver.prototype.next = function() {};

      RemoteControlDriver.prototype.previous = function() {};

      RemoteControlDriver.prototype.getCurrentSlideNumber = function() {};

      RemoteControlDriver.prototype.getCurrentSlideScreenshot = function() {};

      RemoteControlDriver.prototype.getAuthor = function() {};

      RemoteControlDriver.prototype.getTitle = function() {
        return $j(document).prop('title');
      };

      return RemoteControlDriver;

    })();
  });

}).call(this);
