(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['remotedriver', 'jquery-private'], function(RemoteControlDriver, $j) {
    var SlideshareRemote;
    return SlideshareRemote = (function(_super) {

      __extends(SlideshareRemote, _super);

      function SlideshareRemote() {
        SlideshareRemote.__super__.constructor.apply(this, arguments);
        this.container = $j('#svPlayerId');
        this.quantity = this.getSlideQuantity();
        (typeof console !== "undefined" && console !== null) && console.log(this.container);
      }

      SlideshareRemote.prototype.getAuthor = function() {
        return $j('.title .h-author-name').html();
      };

      SlideshareRemote.prototype.getSlideQuantity = function() {
        if ($j('.slide_container').length > 0) {
          return $j('.slide_container .slide', this.container).length;
        }
        if ($j('.slidesContainer').length > 0) {
          return $j('.slidesContainer .jsplBgColorBigfoot').length;
        }
      };

      SlideshareRemote.prototype.getCurrentSlideNumber = function() {
        var n;
        if ($j('.goToSlideLabel > input', this.container).length === 0) {
          throw new Error("This page doesn't contain a valid slide.");
        }
        n = parseInt($j('.goToSlideLabel > input', this.container).val());
        if (n <= 1) {
          return 1;
        }
        return n;
      };

      SlideshareRemote.prototype.getCurrentSlideScreenshot = function() {
        var n, url;
        n = this.getCurrentSlideNumber();
        if ($j('.slide_container > .slide').eq(n - 1).find('img').length > 0) {
          url = $j('.slide_container > .slide').eq(n - 1).find('img').prop('src');
          if (url.indexOf('image') >= 1) {
            return url;
          }
        }
        return "http://placehold.it/320&text=" + n;
      };

      SlideshareRemote.prototype.jump = function(num) {
        var e;
        e = $.Event('keyup');
        e.which = 13;
        e.keyCode = 13;
        return $j('.navActions .goToSlideLabel input', this.container).val(num).trigger(e);
      };

      SlideshareRemote.prototype.next = function() {
        return $j('.nav > .btnNext', this.container)[0].click();
      };

      SlideshareRemote.prototype.previous = function() {
        return $j('.nav > .btnPrevious', this.container)[0].click();
      };

      return SlideshareRemote;

    })(RemoteControlDriver);
  });

}).call(this);
