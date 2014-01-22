({
  baseUrl: "../",
  paths: {
    jquery: 'jquery.min',
    underscore: 'underscore-min',
    backbone: 'backbone-min',
    firebase: 'firebase',
    requireLib: 'require'
  },
  name: "site",
  out: "../site-min.js",
  include: "requireLib"
})
