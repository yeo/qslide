(function() {
  'use strict';

  define(['jquery-private', 'underscore', 'backbone', 'firebase', 'localStorage'], function($, _, Backbone,  __Firebase__) {
  
    var AppView = Backbone.View.extend({
      el: $('#container'),

      initialize: function () {
        $("#appro > img:gt(0)").hide();
        setInterval(function() { 
          $('#appro > img:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#appro');
        },  2000);      
      }
    })  

    return {
      init: function() {
        var appView;
        return appView = new AppView();
      }
    }
  })
}).call(this);
