(function() {
  'use strict';

  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery-private', 'underscore', 'backbone', 'firebase', 'localStorage'], function($_, _, Backbone, __Firebase__) {
    var AppView, Connection, RabbitRemote, Remote, RemoteControlDriver, ScribdRemote, Slide, SlideshareRemote, SpeakerdeskRemote, ToggleView, WelcomeView;
    Connection = Backbone.Model.extend({
      defaults: {
        from: 'unknow'
      },
      initialize: function() {
        console && console.log("Start a connection");
        return this.on('change:from', function(model) {});
      }
    });
    Slide = Backbone.Model.extend({});
    ToggleView = Backbone.View.extend({
      tagName: 'div',
      className: 'qslide',
      id: 'qslideSwitch',
      template: _.template('<a class="js-toggle-board" href="#">Show</a>'),
      initialize: function(options) {
        var k, v;
        if (options != null) {
          for (k in options) {
            v = options[k];
            this[k] = v;
          }
        }
        return this.render();
      },
      events: {
        "click .js-toggle-board": 'toggleBoard'
      },
      render: function() {
        this.$el.css('position', 'fixed').css('text-align', 'center').css('zIndex', 9999).css('width', 30).css('height', 10).css('left', 10).css('bottom', 30).css('background', '#FEE19B').css('color', '#ccc');
        this.$el.html(this.template());
        console.log(this.$el);
        $('body').append(this.$el);
        return this;
      },
      toggleBoard: function() {
        return $('#qcommander').show();
      }
    });
    WelcomeView = Backbone.View.extend({
      tagName: 'div',
      className: 'qcommander',
      id: 'qcommander',
      template: _.template('\
    <h4 class="js-close-welcome">Close</h4>\
\
    <h4>More detail help</h4>\
    <h4>Slideshow Token: <%= token %> </h4><img src="<%= bc %>" alt="Waiting for token" />\
    ')
    });
    AppView = Backbone.View.extend({
      tagName: 'div',
      className: 'qcommander',
      id: 'qcommander',
      template: _.template('\
    <h4 class="js-close-welcome">Close</h4>\
\
    <h4>More detail help</h4>\
    <h4>Slideshow Token: <%= token %> </h4><img src="<%= bc %>" alt="Waiting for token" />\
    '),
      uuid: function() {
        var S4;
        S4 = function() {
          return (((1 + Math.random()) * 0x1000) | 0).toString(10).substring(1);
        };
        return "" + (S4());
      },
      genUUID: function() {
        var rootRef, that, uuid;
        that = this;
        if (localStorage['token'] != null) {
          uuid = localStorage['token'];
          return this.showConnectionBoard(uuid);
        }
        uuid = this.uuid();
        rootRef = new Firebase("https://qcommander.firebaseio-demo.com/");
        return rootRef.child(uuid).on('value', function(snapshot) {
          if (snapshot.val() != null) {
            return that.genUUID();
          }
          return that.showConnectionBoard(uuid);
        });
      },
      initialize: function() {
        this.isConnected = false;
        this.toggleView = new ToggleView({
          mainBoard: this
        });
        return this.genUUID();
      },
      showConnectionBoard: function(uuid) {
        var baseFirebaseUrl, bc, code, connection, remote, remoteQueu, saveCurrentSlide, slideInfo, that;
        that = this;
        code = {
          token: uuid,
          url: window.location.href,
          title: $(document).prop('title')
        };
        localStorage['token'] = code.token;
        bc = "https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=" + (encodeURI(JSON.stringify(code))) + "&choe=UTF-8";
        connection = this.connection = new Connection(code);
        connection.set('bc', bc);
        remote = this.remote = new Remote(code.url);
        baseFirebaseUrl = "https://qcommander.firebaseio-demo.com/" + (this.connection.get('token')) + "/";
        saveCurrentSlide = function(data) {
          var info;
          info = new Firebase("https://qcommander.firebaseio-demo.com/" + (connection.get('token')) + "/info");
          return info.child('currentSlideUrl').set(data.url);
        };
        slideInfo = new Firebase("" + baseFirebaseUrl + "info/");
        slideInfo.set(code);
        remoteQueu = new Firebase("" + baseFirebaseUrl + "qc/");
        remoteQueu.limit(200).on('child_added', function(snapshot) {
          var message, r;
          console.log(snapshot);
          message = snapshot.val();
          console.log(message);
          switch (message.cmd) {
            case 'handshake':
              if (!that.isConnected) {
                localStorage['allow'] = message.from;
                localStorage['device_priority'] = 1;
                that.closeWelcome();
              } else {
                (typeof console !== "undefined" && console !== null) && console.log("Connected before from " + localStorage['allow']);
              }
              break;
            case 'next':
              remote.next(saveCurrentSlide);
              break;
            case 'prev':
            case 'previous':
              remote.previous(saveCurrentSlide);
              break;
            default:
              console.log("Not implement");
          }
          r = new Firebase(("https://qcommander.firebaseio-demo.com//" + (connection.get('token')) + "/qc/").concat(snapshot.name()));
          return r.remove();
        });
        return this.render();
      },
      render: function() {
        this.$el.css('position', 'fixed').css('text-align', 'center').css('zIndex', 9999).css('width', 800).css('height', 700).css('left', '50%').css('margin-left', '-350px').css('top', 0).css('background', '#FEE19B').css('color', '#ccc');
        this.$el.html(this.template(this.connection.attributes));
        console.log(this.$el);
        $('body').append(this.$el);
        return this;
      },
      events: {
        "click .js-close-welcome": 'closeWelcome',
        "hover #spin": "animatePlayButton"
      },
      closeWelcome: function() {
        (typeof console !== "undefined" && console !== null) && console.log('Close welcome form');
        return this.$el.hide();
      },
      animatePlayButton: function() {
        return this.playButton.transform({
          rotate: 90
        });
      },
      resetData: function() {
        return this.r.setAwards(Rewards);
      }
    });
    Remote = (function() {

      function Remote(url) {
        this.url = url;
        this.driver = {};
        this.setupRemote();
      }

      Remote.prototype.setupRemote = function() {
        return this.driver = (function() {
          switch (false) {
            case !(this.url.indexOf('speakerdeck.com/') > 1):
              return new SpeakerdeskRemote;
            case !(this.url.indexOf('slideshare.net/') > 1):
              return new SlideshareRemote;
            case !(this.url.indexOf('scribd.com/') > 1):
              return new ScribdRemote;
            default:
              return new RabbitRemote;
          }
        }).call(this);
      };

      Remote.prototype.getCurrentSlide = function() {
        var url;
        url = this.driver.getCurrentSlideScreenshot();
        return console.log(url);
      };

      Remote.prototype.previous = function(cb) {
        this.driver.previous();
        return cb({
          url: this.driver.getCurrentSlideScreenshot()
        });
      };

      Remote.prototype.next = function(cb) {
        this.driver.next();
        return cb({
          url: this.driver.getCurrentSlideScreenshot()
        });
      };

      Remote.prototype.jump = function(num) {
        return this.driver.jump(num);
      };

      return Remote;

    })();
    RemoteControlDriver = (function() {

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

      return RemoteControlDriver;

    })();
    SpeakerdeskRemote = (function(_super) {

      __extends(SpeakerdeskRemote, _super);

      function SpeakerdeskRemote() {
        SpeakerdeskRemote.__super__.constructor.apply(this, arguments);
        this.container = $('.speakerdeck-iframe ').contents();
        (typeof console !== "undefined" && console !== null) && console.log(this.container);
      }

      SpeakerdeskRemote.prototype.getCurrentSlideNumber = function() {
        var current_url, m, r;
        current_url = $('#player-content-wrapper > #slide_image', this.container).prop('src');
        r = /\/slide_([0-9]+)\./gi;
        if (m = r.exec(current_url)) {
          return m[1];
        }
        return false;
      };

      SpeakerdeskRemote.prototype.getCurrentSlideScreenshot = function() {
        return $('#player-content-wrapper > #slide_image', this.container).prop('src');
      };

      SpeakerdeskRemote.prototype.first = function() {};

      SpeakerdeskRemote.prototype.last = function() {};

      SpeakerdeskRemote.prototype.next = function() {
        return $('.overnav > .next', this.container)[0].click();
      };

      SpeakerdeskRemote.prototype.previous = function() {
        return $('.overnav > .prev', this.container)[0].click();
      };

      return SpeakerdeskRemote;

    })(RemoteControlDriver);
    SlideshareRemote = (function(_super) {

      __extends(SlideshareRemote, _super);

      function SlideshareRemote() {
        SlideshareRemote.__super__.constructor.apply(this, arguments);
        this.container = $('#svPlayerId');
        (typeof console !== "undefined" && console !== null) && console.log(this.container);
      }

      SlideshareRemote.prototype.getCurrentSlideNumber = function() {
        return $('.goToSlideLabel > input', this.container).val();
      };

      SlideshareRemote.prototype.getCurrentSlideScreenshot = function() {
        return $('.slide_container > .slide').eq(this.getCurrentSlideNumber()).find('img').prop('src');
      };

      SlideshareRemote.prototype.first = function() {
        return $('.nav > .btnFirst', this.container)[0].click();
      };

      SlideshareRemote.prototype.last = function() {
        return $('.nav > .btnLast', this.container)[0].click();
      };

      SlideshareRemote.prototype.next = function() {
        return $('.nav > .btnNext', this.container)[0].click();
      };

      SlideshareRemote.prototype.previous = function() {
        return $('.nav > .btnPrevious', this.container)[0].click();
      };

      return SlideshareRemote;

    })(RemoteControlDriver);
    ScribdRemote = (function(_super) {

      __extends(ScribdRemote, _super);

      function ScribdRemote() {
        return ScribdRemote.__super__.constructor.apply(this, arguments);
      }

      return ScribdRemote;

    })(RemoteControlDriver);
    RabbitRemote = (function(_super) {

      __extends(RabbitRemote, _super);

      function RabbitRemote() {
        return RabbitRemote.__super__.constructor.apply(this, arguments);
      }

      return RabbitRemote;

    })(RemoteControlDriver);
    return {
      init: function() {
        var appView;
        return appView = new AppView();
      }
    };
  });

}).call(this);
