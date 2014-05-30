(function() {

  define(['jquery-private', 'speakerdeck', 'slideshare', 'google', 'prezi'], function($j, SpeakerdeskRemote, SlideshareRemote, GoogleRemote, PreziRemote) {
    var Remote;
    return Remote = (function() {

      function Remote(url) {
        this.url = url;
        this.driver = {};
        this.setupRemote();
      }

      Remote.prototype.setupRemote = function() {
        try {
          this.driver = (function() {
            switch (false) {
              case !(this.url.indexOf('speakerdeck.com/') > 1):
                return new SpeakerdeskRemote;
              case !(this.url.indexOf('slideshare.net/') > 1):
                return new SlideshareRemote;
              case !(this.url.indexOf('scribd.com/') > 1):
                return new ScribdRemote;
              case !(this.url.indexOf('google.com/') > 1):
                return new GoogleRemote;
              default:
                throw new Error("Not supported yet");
            }
          }).call(this);
          return this;
        } catch (error) {
          throw error;
        }
      };

      Remote.prototype.control = function() {
        return this.driver;
      };

      Remote.prototype.getCurrentSlide = function() {
        var url;
        url = this.driver.getCurrentSlideScreenshot();
        return (typeof console !== "undefined" && console !== null) && console.log(url);
      };

      Remote.prototype.getAuthor = function() {
        return this.driver.getAuthor();
      };

      Remote.prototype.previous = function(cb) {
        this.driver.previous();
        return cb({
          url: this.driver.getCurrentSlideScreenshot(),
          currentSlideNumber: this.driver.getCurrentSlideNumber()
        });
      };

      Remote.prototype.next = function(cb) {
        this.driver.next();
        return cb({
          url: this.driver.getCurrentSlideScreenshot(),
          currentSlideNumber: this.driver.getCurrentSlideNumber()
        });
      };

      Remote.prototype.jump = function(num, cb) {
        this.driver.jump(num);
        return cb({
          url: this.driver.getCurrentSlideScreenshot(),
          currentSlideNumber: this.driver.getCurrentSlideNumber()
        });
      };

      return Remote;

    })();
  });

}).call(this);
