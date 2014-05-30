(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['remotedriver', 'jquery-private'], function(RemoteControlDriver, $j) {
    var GoogleRemote;
    return GoogleRemote = (function(_super) {

      __extends(GoogleRemote, _super);

      function GoogleRemote() {
        GoogleRemote.__super__.constructor.apply(this, arguments);
        this.container = $j('.punch-viewer-nav .punch-viewer-nav-rounded-container');
        (typeof console !== "undefined" && console !== null) && console.log(this.container);
      }

      GoogleRemote.prototype.getAuthor = function() {
        return "NA";
      };

      GoogleRemote.prototype.getSlideQuantity = function() {
        if ($j('.goog-menu.goog-menu-vertical').length === 0) {
          return 0;
        }
        return $j('div', $j('.goog-menu.goog-menu-vertical')[0]).length;
      };

      GoogleRemote.prototype.getCurrentSlideNumber = function() {
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

      GoogleRemote.prototype.getCurrentSlideScreenshot = function() {
        var n;
        n = this.getCurrentSlideNumber();
        return "http://placehold.it/320&text=" + n;
      };

      GoogleRemote.prototype.jump = function(num) {
        var e;
        e = $.Event('keyup');
        e.which = 13;
        e.keyCode = 13;
        return $j('.navActions .goToSlideLabel input', this.container).val(num).trigger(e);
      };

      GoogleRemote.prototype.next = function() {
        return $j('.nav > .btnNext', this.container)[0].click();
      };

      GoogleRemote.prototype.previous = function() {
        return $j('.nav > .btnPrevious', this.container)[0].click();
      };

      return GoogleRemote;

    })(RemoteControlDriver);
  });

}).call(this);
