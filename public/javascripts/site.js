require.config({
    baseUrl: "/javascripts"
    
    // Libraries
    ,paths: {
        jquery: 'jquery.min',
        bootstrap: 'bootstrap.min',
        'underscore': 'underscore-min',
        'backbone': 'backbone-min',
        'localStorage': 'backbone.localStorage-min',
        firebase: '//cdn.firebase.com/v0/firebase'
    }

    ,shim: {
        '*': { 'jquery': 'jquery-private' },
        'jquery-private': { 'jquery': 'jquery' },

        "jquery": {
            "exports": "$j"
        },

        "underscore": {
            "exports": "_"
        },

        "easing" : {
            // "deps": ["jquery"],
        },

        "bootstrap" : {
            // "deps": ["jquery"],
        },

        "backbone": {
            // Depends on underscore/lodash and jQuery
            "deps": ["underscore"], //, "jquery"],
            // "deps": ["underscore", "jquery"],

            // Exports the global window.Backbone object
            "exports": "Backbone"
        },

        "firebase": {
          "exports": "Firebase"  
        },

        "localStorage" : {
            // Depends on underscore/lodash and jQuery
            "deps": ["backbone"]
        },

        'transform': {
            deps: [
                // 'jquery'
            ]
             //,"exports": "transform"
        }

    }
})

require(['front'], function (app) {
  app.init()
})
