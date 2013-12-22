(function() {
  'use strict';

  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery-private', 'underscore', 'backbone', 'firebase', 'buzz', 'localStorage', 'bootstrap'], function($_, _, Backbone, buzz, __Firebase__) {
    var AppView, Connection, RabbitRemote, Remote, RemoteControlDriver, ScribdRemote, Slide, SlideshareRemote, SpeakerdeskRemote;
    Connection = Backbone.Model.extend({});
    Slide = Backbone.Model.extend({});
    AppView = Backbone.View.extend({
      tagName: 'div',
      className: 'qcommander',
      id: 'qcommander',
      template: _.template('<h4>Token: </h4><img src="<%= bc %>" alt="Waiting for token" />'),
      uuid: function() {
        var S4;
        S4 = function() {
          return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
      },
      initialize: function() {
        var remote, remoteQueu;
        remote = new Remote('https://speakerdeck.com/addyosmani/automating-front-end-workflow');
        remoteQueu = new Firebase('https://qcommander.firebaseio-demo.com/command_queues');
        remoteQueu.limit(200).on('child_added', function(snapshot) {
          var message, r;
          console.log(snapshot);
          message = snapshot.val();
          console.log(message);
          switch (message.cmd) {
            case 'next':
              remote.next;
              break;
            case 'prev':
              remote.previous;
              break;
            default:
              console.log("Not implement");
          }
          r = new Firebase("https://qcommander.firebaseio-demo.com/command_queues/".concat(snapshot.name()));
          return r.remove();
        });
        return this.showConnectionBoard();
      },
      showConnectionBoard: function() {
        var bc, code;
        code = JSON.stringify({
          token: this.uuid(),
          count: 12
        });
        code = encodeURI(code);
        bc = "https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=" + code + "&choe=UTF-8";
        this.connection = new Connection({
          code: code,
          bc: bc
        });
        return this.render();
      },
      render: function() {
        this.$el.css('position', 'fixed').css('text-align', 'center').css('zIndex', 9999).css('width', 800).css('height', 700);
        this.$el.html(this.template(this.connection.attributes));
        console.log(this.$el);
        $('body').append(this.$el);
        return this;
      },
      events: {
        "click #spin": "doPlay",
        "hover #spin": "animatePlayButton"
      },
      doPlay: function() {
        return this.r.spin;
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
        this.setupRemote;
      }

      Remote.prototype.setupRemote = function() {};

      Remote.prototype.previous = function() {
        return this.driver.jump(this.driver.currentSlide() - 1);
      };

      Remote.prototype.next = function() {
        return this.driver.jump(this.driver.currentSlide() + 1);
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

      RemoteControlDriver.prototype.getCurrentSlide = function() {};

      return RemoteControlDriver;

    })();
    SpeakerdeskRemote = (function(_super) {

      __extends(SpeakerdeskRemote, _super);

      function SpeakerdeskRemote() {
        SpeakerdeskRemote.__super__.constructor.apply(this, arguments);
      }

      SpeakerdeskRemote.prototype.next = function() {
        var f;
        f = $('.speakerdeck-iframe');
        console.log($('.controls > a.next'));
        $('.controls > a.next').click();
        return $('.nav .btnNext').length && $('.nav .btnNext').click();
      };

      SpeakerdeskRemote.prototype.previous = function() {
        var f;
        f = $('.speakerdeck-iframe');
        $('.controls > a.prev').click();
        return $('.nav .btnPrevious').length && $('.nav .btnNext').click();
      };

      return SpeakerdeskRemote;

    })(Remote);
    SlideshareRemote = (function(_super) {

      __extends(SlideshareRemote, _super);

      function SlideshareRemote() {
        return SlideshareRemote.__super__.constructor.apply(this, arguments);
      }

      return SlideshareRemote;

    })(Remote);
    ScribdRemote = (function(_super) {

      __extends(ScribdRemote, _super);

      function ScribdRemote() {
        return ScribdRemote.__super__.constructor.apply(this, arguments);
      }

      return ScribdRemote;

    })(Remote);
    RabbitRemote = (function(_super) {

      __extends(RabbitRemote, _super);

      function RabbitRemote() {
        return RabbitRemote.__super__.constructor.apply(this, arguments);
      }

      return RabbitRemote;

    })(Remote);
    return {
      init: function() {
        var appView;
        return appView = new AppView();
      }
    };
  });

}).call(this);
