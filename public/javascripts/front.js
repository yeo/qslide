(function() {
  'use strict';

  define(['jquery-private', 'underscore', 'backbone' ], function($j, _, Backbone) {
    var $ = $j
    Backbone.$ = $j

    var Guider = Backbone.View.extend({
      el: '#appro',
      pointer: '<div class="twinkle"></div>',
      
      initialize: function () {
        this.onLoad()
        this.render()
      },
      
      events: {
        "load"    : 'onLoad',
        'click .twinkle' : 'click',
        'click img'      : 'click'
      },

      click: function () {
        mixpanel.track("Guider.Click")
      },
      
      onLoad: function () {
        this.startGuider()
      },

      startGuider: function () {
        mixpanel.track("Guider.Start")
        var that = this
        setInterval(function() { 
          var p = $j('img', that.el).first().data('g-tip').split(',')
          that.pointer.css({left: p[0]+'px', top: p[1]+'px'}).fadeIn(500, function () {

            that.pointer.css({left: (parseInt(p[0]) + 1)+'px', top: (parseInt(p[1])+1)+'px'})
            //setTimeout(function() {
              that.pointer.fadeOut(100, function () {
                $('#appro > img:first')
                  .fadeOut(1000)
                  .next()
                  .fadeIn(1000)
                  .end()
                  .appendTo('#appro')
              })
            //}, 500)   
          
          })
        },  3000); 
      },

      render: function () {
        $j("#appro > img:gt(0)").hide();
        this.pointer = $(this.pointer).appendTo($(this.el)).hide()
      },
    })

    var AppView = Backbone.View.extend({
      el: '#container',

      initialize: function () {
        this.render()    
        this.onLoad()
      },

      render: function () {
      },

      events: {
          "load"      : "onLoad"
      },

      onLoad: function () {
        this.loadMixPanel()
        this.loadOlark()
      },

      loadMixPanel: function () {
        (function(e,b){if(!b.__SV){var a,f,i,g;window.mixpanel=b;a=e.createElement("script");a.type="text/javascript";a.async=!0;a.src=("https:"===e.location.protocol?"https:":"http:")+'//cdn.mxpnl.com/libs/mixpanel-2.2.min.js';f=e.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f);b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==
typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" ");for(g=0;g<i.length;g++)f(c,i[g]);
b._i.push([a,e,d])};b.__SV=1.2}})(document,window.mixpanel||[])
        mixpanel.init("84eb485c78ee0ff32702d547f911594b")
        mixpanel.track("Page.Load");
      },

      loadOlark: function () {
        window.olark||(function(c){var f=window,d=document,l=f.location.protocol=="https:"?"https:":"http:",z=c.name,r="load";var nt=function(){
        f[z]=function(){
        (a.s=a.s||[]).push(arguments)};var a=f[z]._={
        },q=c.methods.length;while(q--){(function(n){f[z][n]=function(){
        f[z]("call",n,arguments)}})(c.methods[q])}a.l=c.loader;a.i=nt;a.p={
        0:+new Date};a.P=function(u){
        a.p[u]=new Date-a.p[0]};function s(){
        a.P(r);f[z](r)}f.addEventListener?f.addEventListener(r,s,false):f.attachEvent("on"+r,s);var ld=function(){function p(hd){
        hd="head";return["<",hd,"></",hd,"><",i,' onl' + 'oad="var d=',g,";d.getElementsByTagName('head')[0].",j,"(d.",h,"('script')).",k,"='",l,"//",a.l,"'",'"',"></",i,">"].join("")}var i="body",m=d[i];if(!m){
        return setTimeout(ld,100)}a.P(1);var j="appendChild",h="createElement",k="src",n=d[h]("div"),v=n[j](d[h](z)),b=d[h]("iframe"),g="document",e="domain",o;n.style.display="none";m.insertBefore(n,m.firstChild).id=z;b.frameBorder="0";b.id=z+"-loader";if(/MSIE[ ]+6/.test(navigator.userAgent)){
        b.src="javascript:false"}b.allowTransparency="true";v[j](b);try{
        b.contentWindow[g].open()}catch(w){
        c[e]=d[e];o="javascript:var d="+g+".open();d.domain='"+d.domain+"';";b[k]=o+"void(0);"}try{
        var t=b.contentWindow[g];t.write(p());t.close()}catch(x){
        b[k]=o+'d.write("'+p().replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'}a.P(2)};ld()};nt()})({
        loader: "static.olark.com/jsclient/loader0.js",name:"olark",methods:["configure","extend","declare","identify"]});
        /* custom configuration goes here (www.olark.com/documentation) */
        olark.identify('6861-706-10-5495')
      }
      
    })

    return {
      init: function() {
        new AppView()
        new Guider()
        return this
      }
    }
  })
}).call(this);
