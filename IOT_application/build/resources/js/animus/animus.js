(function b(c,d,g){function h(m,p){if(!d[m]){if(!c[m]){var q="function"==typeof require&&require;if(!p&&q)return q(m,!0);if(j)return j(m,!0);var v=new Error("Cannot find module '"+m+"'");throw v.code="MODULE_NOT_FOUND",v}var w=d[m]={exports:{}};c[m][0].call(w.exports,function(x){var y=c[m][1][x];return h(y?y:x)},w,w.exports,b,c,d,g)}return d[m].exports}for(var j="function"==typeof require&&require,k=0;k<g.length;k++)h(g[k]);return h})({1:[function(){"use strict";(function(){var g=[].indexOf||function(h){for(var j=0,k=this.length;j<k;j++)if(j in this&&this[j]===h)return j;return-1};(function(h){h.animus=function(m){var p;p={},p.duration=600,p.defaults={opacity:1,rotationX:0,rotationY:0,rotationZ:0,x:0,y:0,z:0,xPercent:0,yPercent:0,scale:1,scaleX:1,scaleY:1,scaleZ:1,skewX:0,skewY:0,easing:"Quad.easeOut"},this.parameters=["scale","scaleX","scaleY","scaleZ","x","y","z","skewX","skewY","rotation","rotationX","rotationY","rotationZ","perspective","xPercent","yPercent","shortRotation","shortRotationX","shortRotationY","shortRotationZ","transformOrigin","svgOrigin","transformPerspective","directionalRotation","parseTransform","force3D","skewType","smoothOrigin","boxShadow","borderRadius","backgroundPosition","backgroundSize","perspectiveOrigin","transformStyle","backfaceVisibility","userSelect","margin","padding","color","clip","textShadow","autoRound","strictUnits","border","borderWidth","float","cssFloat","styleFloat","perspectiveOrigin","transformStyle","backfaceVisibility","userSelect","opacity","alpha","autoAlpha","className","clearProps"],this.init=function(){h.extend(p,m)},this.get=function(q){var v;return(v={},v.state={z:0},v.duration=p.duration/1e3,v.timeline=null,""===q||null==q||!q)?v:(q=q.split(/(\,\s*)/),h.each(q,function(w){return function(x,y){var z,A,B;z=0,y=h.trim(y),/\(.*\)/.test(y)&&(y=y.replace(/\s*\(\s*/," ").replace(/\s*\)\s*/," ")),y=y.split(/\s+/),y=h.grep(y,function(C){return""!==C}),A=y.shift(),B=y.join(" "),-1===["duration","speed"].indexOf(A)?-1===["ease","easing"].indexOf(A)?0<=g.call(w.parameters,A)?(null!=B&&!/.+(\s+.+)+/.test(B)&&(/px/.test(B)?B=parseFloat(B.replace("px",""),10):/deg/.test(B)&&(B=parseFloat(B.replace("deg",""),10)),/^[0-9](\.[0-9]+)?$/.test(B)&&(B=parseFloat(B,10))),v.state[A]=B):A in h.animus.presets&&(v.state=A):v.state.ease=B:v.duration=parseFloat(B,10)/1e3}}(this)),v)},this.reset=function(q,v){var w,x;return w=function(z){return /\%$/.test(z)?"%":""},x={},h.each(v,function(){"string"===h.type(this.state)||h.each(this.state,function(z,A){!(z in x)&&z in p.defaults&&(x[z]=p.defaults[z]+w(A))})}),h.extend({},x,q)},this.init()},h.animus.presets={},h.animus.register_preset=function(m,p){h.animus.presets[m]=p}})(jQuery,window,document)}).call(void 0)},{}]},{},[1]);