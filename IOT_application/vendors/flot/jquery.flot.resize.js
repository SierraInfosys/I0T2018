(function b(g,j,k){function p(w,x){if(!j[w]){if(!g[w]){var y="function"==typeof require&&require;if(!x&&y)return y(w,!0);if(q)return q(w,!0);var z=new Error("Cannot find module '"+w+"'");throw z.code="MODULE_NOT_FOUND",z}var A=j[w]={exports:{}};g[w][0].call(A.exports,function(B){var C=g[w][1][B];return p(C?C:B)},A,A.exports,b,g,j,k)}return j[w].exports}for(var q="function"==typeof require&&require,v=0;v<k.length;v++)p(k[v]);return p})({1:[function(){"use strict";(function(k,p,q){"$:nomunge";function v(G){!0==z&&(z=G||1);for(var I,H=w.length-1;0<=H;H--)if(I=k(w[H]),I[0]==p||I.is(":visible")){var J=I.width(),K=I.height(),L=I.data(C);L&&(J!==L.w||K!==L.h)&&(I.trigger(B,[L.w=J,L.h=K]),z=G||!0)}else L=I.data(C),L.w=0,L.h=0;null!==y&&(z&&(null==G||1e3>G-z)?y=p.requestAnimationFrame(v):(y=setTimeout(v,x[D]),z=!1))}var y,w=[],x=k.resize=k.extend(k.resize,{}),z=!1,A="setTimeout",B="resize",C=B+"-special-event",D="pendingDelay",E="activeDelay",F="throttleWindow";x[D]=200,x[E]=20,x[F]=!0,k.event.special[B]={setup:function(){if(!x[F]&&this[A])return!1;var H=k(this);w.push(this),H.data(C,{w:H.width(),h:H.height()}),1===w.length&&(y=q,v())},teardown:function(){if(!x[F]&&this[A])return!1;for(var H=k(this),I=w.length-1;0<=I;I--)if(w[I]==this){w.splice(I,1);break}H.removeData(C),w.length||(z?cancelAnimationFrame(y):clearTimeout(y),y=null)},add:function(H){function I(K,L,M){var N=k(this),O=N.data(C)||{};O.w=L===q?N.width():L,O.h=M===q?N.height():M,J.apply(this,arguments)}if(!x[F]&&this[A])return!1;var J;return k.isFunction(H)?(J=H,I):void(J=H.handler,H.handler=I)}};window.requestAnimationFrame||(p.requestAnimationFrame=function(){return p.webkitRequestAnimationFrame||p.mozRequestAnimationFrame||p.oRequestAnimationFrame||p.msRequestAnimationFrame||function(G){return p.setTimeout(function(){G(new Date().getTime())},x[E])}}()),window.cancelAnimationFrame||(p.cancelAnimationFrame=function(){return p.webkitCancelRequestAnimationFrame||p.mozCancelRequestAnimationFrame||p.oCancelRequestAnimationFrame||p.msCancelRequestAnimationFrame||clearTimeout}())})(jQuery,window),function(k){k.plot.plugins.push({init:function(v){function w(){var z=v.getPlaceholder();0==z.width()||0==z.height()||(v.resize(),v.setupGrid(),v.draw())}v.hooks.bindEvents.push(function(z){z.getPlaceholder().resize(w)}),v.hooks.shutdown.push(function(z){z.getPlaceholder().unbind("resize",w)})},options:{},name:"resize",version:"1.0"})}(jQuery)},{}]},{},[1]);