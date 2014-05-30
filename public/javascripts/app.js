(function() {
  'use strict';

  define(['jquery-private', 'underscore', 'backbone', 'sha1', 'firebase', 'remote'], function($j, _, Backbone, sha1, __Firebase__, Remote) {
    var $, AppView, BACKEND_DATA_HOST, Command, CommandQueue, Connection, Slide, ToggleView, WelcomeView;
    $ = $j;
    BACKEND_DATA_HOST = "https://qslider.firebaseio.com/";
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
      template: _.template('<div>Control By <a href="https://axcoto.com/qslider" style="color: #fff !important;">QSlider</a> <%= device %></div>\
    <a class="js-toggle-board" href="#" style="color: #fff !important; tex-decoration: underline !important;">Show Info</a>'),
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
        this.$el.css('position', 'fixed').css('text-align', 'center').css('zIndex', 9999).css('left', 10).css('top', 100).css('background', '#666').css('color', '#ccc').css('width', '9em').css('height', '3em').css('padding', '0.5em');
        this.$el.html(this.template({
          device: this.device
        }));
        $j('body').append(this.$el);
        return this;
      },
      toggleBoard: function() {
        return $j('#qcommander').show();
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
    <h4 class="js-close-welcome" style="position: absolute; right: 5px; top: 10px; text-align: right; cursor: pointer; font-size: 1.5em;">Close</h4>\
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
        rootRef = new Firebase("" + BACKEND_DATA_HOST);
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
              this.localStorage('allow', message.data.from);
              this.localStorage('at', new Date().getTime());
              this.localStorage('device_priority', 1);
              this.closeWelcome();
              try {
                return this.saveConnectFrom(message.data.name);
              } catch (e) {
                return (typeof console !== "undefined" && console !== null) && console.log(e);
              }
            } else {
              if (message.data.from === this.localStorage('allow')) {
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
        info = new Firebase("" + BACKEND_DATA_HOST + (this.connection.get('token')) + "/info");
        info.child('currentSlideUrl').set(data.url);
        return info.child('currentSlideNumber').set(data.currentSlideNumber);
      },
      saveConnectFrom: function(from) {
        var info;
        (typeof console !== "undefined" && console !== null) && console.log(this);
        info = new Firebase("" + BACKEND_DATA_HOST + (this.connection.get('token')) + "/info");
        return info.child('from').set(from);
      },
      presenceNoty: function() {
        var connectedRef, connectionRef, lastOnlineRef;
        connectionRef = new Firebase("" + this.baseFirebaseUrl + "info/connection");
        lastOnlineRef = new Firebase("" + this.baseFirebaseUrl + "info/lastOnline");
        connectedRef = new Firebase("" + BACKEND_DATA_HOST + ".info/connected");
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
        try {
          this.remote = new Remote(code.url);
          this.connection.set('author', this.remote.getAuthor());
          this.connection.set('currentSlideUrl', this.remote.driver.getCurrentSlideScreenshot());
          this.connection.set('currentSlideNumber', this.remote.driver.getCurrentSlideNumber());
          this.connection.set('quantity', this.remote.driver.quantity);
          this.connection.set('title', this.remote.driver.getTitle());
        } catch (error) {
          alert(error);
          return false;
        }
        baseFirebaseUrl = this.baseFirebaseUrl = "" + BACKEND_DATA_HOST + (this.connection.get('token')) + "/";
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
          console.log(message);
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
        $j('body').append(this.$el);
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
    return {
      init: function() {
        var appView;
        return appView = new AppView();
      }
    };
  });

}).call(this);
