(function() {
  'use strict';

  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery-private', 'underscore', 'backbone', 'sha1', 'firebase'], function($_, _, Backbone, sha1, __Firebase__) {
    var AppView, Command, CommandQueue, Connection, RabbitRemote, Remote, RemoteControlDriver, ScribdRemote, Slide, SlideshareRemote, SpeakerdeskRemote, ToggleView, WelcomeView;
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
    Command = Backbone.Model.extend({
      initialize: function() {
        return (typeof console !== "undefined" && console !== null) && console.log('New command');
      },
      destroy: function() {}
    });
    CommandQueue = Backbone.Collection.extend({
      model: Command
    });
    ToggleView = Backbone.View.extend({
      tagName: 'div',
      className: 'qslide',
      id: 'qslideSwitch',
      template: _.template('<h4>QSlider</h4><div>Control By: <%= device %></div>\
    <a class="js-toggle-board" href="#">Show Info</a>'),
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
        this.$el.css('position', 'fixed').css('text-align', 'center').css('zIndex', 9999).css('left', 10).css('bottom', 30).css('background', '#666').css('color', '#ccc').css('width', '7em').css('height', '6em');
        this.$el.html(this.template({
          device: this.device
        }));
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
    <h4 class="js-close-welcome" style="cursor: pointer">Close</h4>\
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
    <h4 class="js-close-welcome" style="position: absolute; right: 5px; top: 10px; text-align: right; cursor: pointer;">Close</h4>\
    <!-- <h4>More detail help</h4> -->\
    <h1>Slide ID: <%= token %> </h1>\
    <img src="<%= bc %>" alt="Waiting for token" />\
    '),
      uuid: function() {
        var S4;
        S4 = function() {
          return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return ("" + (sha1(S4() + new Date().getTime()))).substr(0, 6);
      },
      genUUID: function() {
        var rootRef, that, uuid;
        that = this;
        if (this.localStorage('token') != null) {
          uuid = this.localStorage('token');
          return this.showConnectionBoard(uuid);
        }
        uuid = this.uuid();
        rootRef = new Firebase("https://qcommander.firebaseio-demo.com/");
        return rootRef.child("" + uuid + "/token").on('value', function(snapshot) {
          if (snapshot.val() != null) {
            return that.genUUID();
          }
          return that.showConnectionBoard(uuid);
        });
      },
      localStorage: function(k, v) {
        var s;
        s = sha1(window.location.pathname).substr(0, 10);
        if (v != null) {
          return localStorage.setItem("" + s + "." + k, v);
        } else {
          return localStorage.getItem("" + s + "." + k);
        }
      },
      initialize: function() {
        var that;
        this.isConnected = false;
        this.toggleView = new ToggleView({
          mainBoard: this
        });
        this.queue = new CommandQueue();
        that = this;
        this.queue.on('add', function(model) {
          var r;
          that.exec(model);
          (typeof console !== "undefined" && console !== null) && console.log("" + this.url + (model.get('name')));
          r = new Firebase("" + this.url + (model.get('name')));
          r.remove();
          return model.destroy();
        });
        return this.genUUID();
      },
      exec: function(model) {
        var message;
        message = model.toJSON();
        switch (message.cmd) {
          case 'handshake':
            if (!this.isConnected) {
              this.localStorage('allow', message.from);
              this.localStorage('at', new Date().getTime());
              this.localStorage('device_priority', 1);
              return this.closeWelcome();
            } else {
              if (message.from === this.localStorage('allow')) {
                return (typeof console !== "undefined" && console !== null) && console.log("Reconnect");
              } else {
                return (typeof console !== "undefined" && console !== null) && console.log("Connected before from " + (this.localStorage('allow')));
              }
            }
            break;
          case 'next':
            this.remote.next((function(data) {
              return this.saveCurrentSlide(data);
            }).bind(this));
            return this.closeWelcome();
          case 'prev':
          case 'previous':
            this.remote.previous((function(data) {
              return this.saveCurrentSlide(data);
            }).bind(this));
            return this.closeWelcome();
          case 'last':
            this.remote.jump(this.remote.driver.quantity, (function(data) {
              return this.saveCurrentSlide(data);
            }).bind(this));
            return this.closeWelcome();
          case 'first':
            this.remote.jump(0, (function(data) {
              return this.saveCurrentSlide(data);
            }).bind(this));
            return this.closeWelcome();
          case 'jump':
            this.remote.jump(message.data.number, (function(data) {
              return this.saveCurrentSlide(data);
            }).bind(this));
            return this.closeWelcome();
          default:
            return (typeof console !== "undefined" && console !== null) && console.log("Not implement");
        }
      },
      saveCurrentSlide: function(data) {
        var info;
        (typeof console !== "undefined" && console !== null) && console.log(this);
        info = new Firebase("https://qcommander.firebaseio-demo.com/" + (this.connection.get('token')) + "/info");
        info.child('currentSlideUrl').set(data.url);
        return info.child('currentSlideNumber').set(data.currentSlideNumber);
      },
      presenceNoty: function() {
        var connectedRef, connectionRef, lastOnlineRef;
        connectionRef = new Firebase("" + this.baseFirebaseUrl + "info/connection");
        lastOnlineRef = new Firebase("" + this.baseFirebaseUrl + "info/lastOnline");
        connectedRef = new Firebase("https://qcommander.firebaseio-demo.com/.info/connected");
        return connectedRef.on('value', function(s) {
          var conn;
          (typeof console !== "undefined" && console !== null) && console.log("Connected");
          if (s.val() === true) {
            conn = connectionRef.push(true);
            conn.onDisconnect().remove();
            return lastOnlineRef.onDisconnect().set(Firebase.ServerValue.TIMESTAMP);
          }
        });
      },
      showConnectionBoard: function(uuid) {
        var baseFirebaseUrl, bc, code, slideInfo, that;
        that = this;
        code = {
          token: uuid,
          url: escape(window.location.href),
          provider: window.location.host
        };
        this.localStorage('token', code.token);
        bc = "https://chart.googleapis.com/chart?chs=350x350&cht=qr&chl=" + (encodeURI(JSON.stringify(code))) + "&choe=UTF-8";
        this.connection = new Connection(code);
        this.connection.set('bc', bc);
        this.remote = new Remote(code.url);
        this.connection.set('author', this.remote.getAuthor());
        this.connection.set('currentSlideUrl', this.remote.driver.getCurrentSlideScreenshot());
        this.connection.set('currentSlideNumber', this.remote.driver.getCurrentSlideNumber());
        this.connection.set('quantity', this.remote.driver.quantity);
        this.connection.set('title', this.remote.driver.getTitle());
        baseFirebaseUrl = this.baseFirebaseUrl = "https://qcommander.firebaseio-demo.com/" + (this.connection.get('token')) + "/";
        this.queue.url = "" + baseFirebaseUrl + "qc/";
        (typeof console !== "undefined" && console !== null) && console.log(this.queue);
        slideInfo = new Firebase("" + baseFirebaseUrl + "info/");
        slideInfo.set(this.connection.toJSON(), function(e) {
          if (e) {
            alert("Cannot connec to server. Check internet connection");
            return false;
          } else {
            return that.presenceNoty();
          }
        });
        this.remoteQueu = new Firebase("" + baseFirebaseUrl + "qc/");
        this.remoteQueu.limit(200).on('child_added', function(snapshot) {
          var message;
          message = snapshot.val();
          return that.queue.add(new Command({
            name: snapshot.name(),
            cmd: message.cmd,
            data: message
          }));
        });
        return this.render();
      },
      render: function() {
        this.$el.css('position', 'fixed').css('text-align', 'center').css('zIndex', 9999).css('width', 800).css('height', 700).css('left', '50%').css('margin-left', '-350px').css('top', 0).css('padding-top', '2em').css('background', '#666').css('color', '#ccc');
        this.$el.html(this.template(this.connection.attributes));
        (typeof console !== "undefined" && console !== null) && console.log(this.$el);
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

      RemoteControlDriver.prototype.getAuthor = function() {};

      RemoteControlDriver.prototype.getTitle = function() {
        return $(document).prop('title');
      };

      return RemoteControlDriver;

    })();
    SpeakerdeskRemote = (function(_super) {

      __extends(SpeakerdeskRemote, _super);

      function SpeakerdeskRemote() {
        SpeakerdeskRemote.__super__.constructor.apply(this, arguments);
        this.container = $('.speakerdeck-iframe ').contents();
        this.quantity = this.getSlideQuantity();
        (typeof console !== "undefined" && console !== null) && console.log(this.container);
      }

      SpeakerdeskRemote.prototype.getAuthor = function() {
        return $('#talk-details h2 a').html();
      };

      SpeakerdeskRemote.prototype.getTitle = function() {
        return $(document).prop('title').replace("// Speaker Deck", '').trim();
      };

      SpeakerdeskRemote.prototype.getSlideQuantity = function() {
        return $('.previews > img', this.container).length;
      };

      SpeakerdeskRemote.prototype.getCurrentSlideNumber = function() {
        var current_url, m, r;
        current_url = $('#player-content-wrapper > #slide_image', this.container).prop('src');
        r = /\/slide_([0-9]+)\./gi;
        if (m = r.exec(current_url)) {
          return 1 + parseInt(m[1]);
        }
        return false;
      };

      SpeakerdeskRemote.prototype.getCurrentSlideScreenshot = function() {
        return $('#player-content-wrapper > #slide_image', this.container).prop('src');
      };

      SpeakerdeskRemote.prototype.jump = function(num) {
        return $('.speakerdeck-iframe ')[0].contentWindow.player.goToSlide(num);
      };

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
        this.quantity = this.getSlideQuantity();
        (typeof console !== "undefined" && console !== null) && console.log(this.container);
      }

      SlideshareRemote.prototype.getAuthor = function() {
        return $('.title .h-author-name').html();
      };

      SlideshareRemote.prototype.getSlideQuantity = function() {
        if ($('.slide_container').length > 0) {
          return $('.slide_container .slide', this.container).length;
        }
        if ($('.slidesContainer').length > 0) {
          return $('.slidesContainer .jsplBgColorBigfoot').length;
        }
      };

      SlideshareRemote.prototype.getCurrentSlideNumber = function() {
        return 1 + parseInt($('.goToSlideLabel > input', this.container).val());
      };

      SlideshareRemote.prototype.getCurrentSlideScreenshot = function() {
        if ($('.slide_container > .slide').eq(this.getCurrentSlideNumber()).find('img').length > 0) {
          return $('.slide_container > .slide').eq(this.getCurrentSlideNumber()).find('img').prop('src');
        }
        return '';
      };

      SlideshareRemote.prototype.jump = function(num) {
        var e;
        e = $.Event('keyup');
        e.which = 13;
        e.keyCode = 13;
        return $('.navActions .goToSlideLabel input', this.container).val(num).trigger(e);
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
