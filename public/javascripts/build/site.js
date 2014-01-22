({
  baseUrl: "../",
  paths: {
    jquery: 'jquery.min',
    underscore: 'underscore-min',
    backbone: 'backbone-min',
    firebase: 'firebase',
    requireLib: 'require'
  },

  shim: {
    '*': { 'jquery': 'jquery-private' },
    'jquery-private': { 'jquery': 'jquery' },

    "jquery": {
      "exports": "$j"
    },

    "underscore": {
      "exports": "_"
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
  },
  name: "site",
  out: "../prod/site-min.js",
  include: "requireLib",
  optimize:"none"
})
