(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['remotedriver', 'jquery-private'], function(RemoteControlDriver, $j) {
    var SpeakerdeskRemote;
    return SpeakerdeskRemote = (function(_super) {

      __extends(SpeakerdeskRemote, _super);

      function SpeakerdeskRemote() {
        SpeakerdeskRemote.__super__.constructor.apply(this, arguments);
        this.container = $j('.speakerdeck-iframe ').contents();
        this.quantity = this.getSlideQuantity();
        (typeof console !== "undefined" && console !== null) && console.log(this.container);
      }

      SpeakerdeskRemote.prototype.getAuthor = function() {
        return $j('#talk-details h2 a').html();
      };

      SpeakerdeskRemote.prototype.getTitle = function() {
        return $j(document).prop('title').replace("// Speaker Deck", '').trim();
      };

      SpeakerdeskRemote.prototype.getSlideQuantity = function() {
        return $j('.previews > img', this.container).length;
      };

      SpeakerdeskRemote.prototype.getCurrentSlideNumber = function() {
        var current_url, m, r;
        current_url = $j('#player-content-wrapper > #slide_image', this.container).prop('src');
        r = /\/slide_([0-9]+)\./gi;
        if (m = r.exec(current_url)) {
          return 1 + parseInt(m[1]);
        }
        return false;
      };

      SpeakerdeskRemote.prototype.getCurrentSlideScreenshot = function() {
        return $j('#player-content-wrapper > #slide_image', this.container).prop('src');
      };

      SpeakerdeskRemote.prototype.jump = function(num) {
        return $j('.speakerdeck-iframe ')[0].contentWindow.player.goToSlide(num);
      };

      SpeakerdeskRemote.prototype.next = function() {
        return $j('.overnav > .next', this.container)[0].click();
      };

      SpeakerdeskRemote.prototype.previous = function() {
        return $j('.overnav > .prev', this.container)[0].click();
      };

      return SpeakerdeskRemote;

    })(RemoteControlDriver);
  });

}).call(this);
