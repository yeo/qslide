({
  baseUrl: ".",
  paths: {
    jquery: 'jquery.min',
    underscore: 'underscore-min',
    backbone: 'backbone-min',
    firebase: 'firebase',
    requireLib: 'require'
  },
  name: "main",
  out: "main-min.js",
  include: requireLib
})
