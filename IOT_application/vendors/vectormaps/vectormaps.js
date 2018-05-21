var _Mathabs=Math.abs,_Mathround=Math.round,_Mathsqrt=Math.sqrt,_Mathpow=Math.pow;(function b(g,h,j){function m(v,w){if(!h[v]){if(!g[v]){var x="function"==typeof require&&require;if(!w&&x)return x(v,!0);if(p)return p(v,!0);var y=new Error("Cannot find module '"+v+"'");throw y.code="MODULE_NOT_FOUND",y}var z=h[v]={exports:{}};g[v][0].call(z.exports,function(A){var B=g[v][1][A];return m(B?B:A)},z,z.exports,b,g,h,j)}return h[v].exports}for(var p="function"==typeof require&&require,q=0;q<j.length;q++)m(j[q]);return m})({1:[function(){"use strict";var j=function(v,w,x){if(this.mode=window.SVGAngle?"svg":"vml",this.params=x,"svg"===this.mode)this.createSvgNode=function(y){return document.createElementNS(this.svgns,y)};else{try{document.namespaces.rvml||document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),this.createVmlNode=function(y){return document.createElement("<rvml:"+y+" class=\"rvml\">")}}catch(y){this.createVmlNode=function(z){return document.createElement("<"+z+" xmlns=\"urn:schemas-microsoft.com:vml\" class=\"rvml\">")}}document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)")}"svg"===this.mode?this.canvas=this.createSvgNode("svg"):(this.canvas=this.createVmlNode("group"),this.canvas.style.position="absolute"),this.setSize(v,w)};j.prototype={svgns:"http://www.w3.org/2000/svg",mode:"svg",width:0,height:0,canvas:null};var m=function(v,w,x,y){v&&this.setColors(v),w&&this.setNormalizeFunction(w),x&&this.setMin(x),x&&this.setMax(y)};m.prototype={colors:[]};var p=function q(v){v=v||{};var y,w=this,x=q.maps[v.map];if(!x)throw new Error("Invalid \""+v.map+"\" map parameter. Please make sure you have loaded this map file in your HTML.");for(var z in this.selectedRegions=[],this.multiSelectRegion=v.multiSelectRegion,this.container=v.container,this.defaultWidth=x.width,this.defaultHeight=x.height,this.color=v.color,this.selectedColor=v.selectedColor,this.hoverColor=v.hoverColor,this.hoverColors=v.hoverColors,this.hoverOpacity=v.hoverOpacity,this.setBackgroundColor(v.backgroundColor),this.width=v.container.width(),this.height=v.container.height(),this.resize(),jQuery(window).resize(function(){var D=v.container.width(),E=v.container.height();if(D&&E){w.width=D,w.height=E,w.resize(),w.canvas.setSize(w.width,w.height),w.applyTransform();var F=jQuery.Event("resize.jqvmap");jQuery(v.container).trigger(F,[D,E]),y&&(jQuery(".jqvmap-pin").remove(),w.pinHandlers=!1,w.placePins(y.pins,y.mode))}}),this.canvas=new j(this.width,this.height,v),v.container.append(this.canvas.canvas),this.makeDraggable(),this.rootGroup=this.canvas.createGroup(!0),this.index=q.mapIndex,this.label=jQuery("<div/>").addClass("jqvmap-label").appendTo(jQuery("body")).hide(),v.enableZoom&&(jQuery("<div/>").addClass("jqvmap-zoomin").text("+").appendTo(v.container),jQuery("<div/>").addClass("jqvmap-zoomout").html("&#x2212;").appendTo(v.container)),w.countries=[],x.paths){var A=this.canvas.createPath({path:x.paths[z].path});A.setFill(this.color),A.id=w.getCountryId(z),w.countries[z]=A,"svg"===this.canvas.mode?A.setAttribute("class","jqvmap-region"):jQuery(A).addClass("jqvmap-region"),jQuery(this.rootGroup).append(A)}if(jQuery(v.container).delegate("svg"===this.canvas.mode?"path":"shape","mouseover mouseout",function(D){var E=D.target,F=D.target.id.split("_").pop(),G=jQuery.Event("labelShow.jqvmap"),H=jQuery.Event("regionMouseOver.jqvmap");F=F.toLowerCase(),"mouseover"===D.type?(jQuery(v.container).trigger(H,[F,x.paths[F].name]),!H.isDefaultPrevented()&&w.highlight(F,E),v.showTooltip&&(w.label.text(x.paths[F].name),jQuery(v.container).trigger(G,[w.label,F]),!G.isDefaultPrevented()&&(w.label.show(),w.labelWidth=w.label.width(),w.labelHeight=w.label.height()))):(w.unhighlight(F,E),w.label.hide(),jQuery(v.container).trigger("regionMouseOut.jqvmap",[F,x.paths[F].name]))}),jQuery(v.container).delegate("svg"===this.canvas.mode?"path":"shape","click",function(D){var E=D.target,F=D.target.id.split("_").pop(),G=jQuery.Event("regionClick.jqvmap");if(F=F.toLowerCase(),jQuery(v.container).trigger(G,[F,x.paths[F].name]),!v.multiSelectRegion&&!G.isDefaultPrevented())for(var H in x.paths)w.countries[H].currentFillColor=w.countries[H].getOriginalFill(),w.countries[H].setFill(w.countries[H].getOriginalFill());G.isDefaultPrevented()||(w.isSelected(F)?w.deselect(F,E):w.select(F,E))}),v.showTooltip&&v.container.mousemove(function(D){if(w.label.is(":visible")){var E=D.pageX-15-w.labelWidth,F=D.pageY-15-w.labelHeight;0>E&&(E=D.pageX+15),0>F&&(F=D.pageY+15),w.label.css({left:E,top:F})}}),this.setColors(v.colors),this.canvas.canvas.appendChild(this.rootGroup),this.applyTransform(),this.colorScale=new m(v.scaleColors,v.normalizeFunction,v.valueMin,v.valueMax),v.values&&(this.values=v.values,this.setValues(v.values)),v.selectedRegions)if(v.selectedRegions instanceof Array)for(var B in v.selectedRegions)this.select(v.selectedRegions[B].toLowerCase());else this.select(v.selectedRegions.toLowerCase());if(this.bindZoomButtons(),v.pins&&(y={pins:v.pins,mode:v.pinMode},this.pinHandlers=!1,this.placePins(v.pins,v.pinMode)),v.showLabels){this.pinHandlers=!1;var C={};for(z in w.countries)"function"!=typeof w.countries[z]&&(v.pins&&v.pins[z]||(C[z]=z.toUpperCase()));y={pins:C,mode:"content"},this.placePins(C,"content")}q.mapIndex++};p.prototype={transX:0,transY:0,scale:1,baseTransX:0,baseTransY:0,baseScale:1,width:0,height:0,countries:{},countriesColors:{},countriesData:{},zoomStep:1.4,zoomMaxStep:4,zoomCurStep:1},p.xlink="http://www.w3.org/1999/xlink",p.mapIndex=1,p.maps={},function(){var q={colors:1,values:1,backgroundColor:1,scaleColors:1,normalizeFunction:1,enableZoom:1,showTooltip:1,borderColor:1,borderWidth:1,borderOpacity:1,selectedRegions:1,multiSelectRegion:1},v={onLabelShow:"labelShow",onLoad:"load",onRegionOver:"regionMouseOver",onRegionOut:"regionMouseOut",onRegionClick:"regionClick",onRegionSelect:"regionSelect",onRegionDeselect:"regionDeselect",onResize:"resize"};jQuery.fn.vectorMap=function(w){var x={map:"world_en",backgroundColor:"#a5bfdd",color:"#f4f3f0",hoverColor:"#c9dfaf",hoverColors:{},selectedColor:"#c9dfaf",scaleColors:["#b6d6ff","#005ace"],normalizeFunction:"linear",enableZoom:!0,showTooltip:!0,borderColor:"#818181",borderWidth:1,borderOpacity:0.25,selectedRegions:null,multiSelectRegion:!1},y=this.data("mapObject");if("addMap"===w)p.maps[arguments[1]]=arguments[2];else if("set"===w&&q[arguments[1]])y["set"+arguments[1].charAt(0).toUpperCase()+arguments[1].substr(1)].apply(y,Array.prototype.slice.call(arguments,2));else{if("string"==typeof w&&"function"==typeof y[w])return y[w].apply(y,Array.prototype.slice.call(arguments,1));for(var z in jQuery.extend(x,w),x.container=this,this.css({position:"relative",overflow:"hidden"}),y=new p(x),this.data("mapObject",y),this.unbind(".jqvmap"),v)x[z]&&this.bind(v[z]+".jqvmap",x[z]);var A=jQuery.Event("load.jqvmap");return jQuery(x.container).trigger(A,y),y}}}(jQuery),m.arrayToRgb=function(q){for(var w,v="#",x=0;x<q.length;x++)w=q[x].toString(16),v+=1===w.length?"0"+w:w;return v},m.prototype.getColor=function(q){"function"==typeof this.normalize&&(q=this.normalize(q));for(var x,v=[],w=0,y=0;y<this.colors.length-1;y++)x=this.vectorLength(this.vectorSubtract(this.colors[y+1],this.colors[y])),v.push(x),w+=x;var z=(this.maxValue-this.minValue)/w;for(y=0;y<v.length;y++)v[y]*=z;for(y=0,q-=this.minValue;0<=q-v[y];)q-=v[y],y++;var A;for(A=y===this.colors.length-1?this.vectorToNum(this.colors[y]).toString(16):this.vectorToNum(this.vectorAdd(this.colors[y],this.vectorMult(this.vectorSubtract(this.colors[y+1],this.colors[y]),q/v[y]))).toString(16);6>A.length;)A="0"+A;return"#"+A},m.rgbToArray=function(q){return q=q.substr(1),[parseInt(q.substr(0,2),16),parseInt(q.substr(2,2),16),parseInt(q.substr(4,2),16)]},m.prototype.setColors=function(q){for(var v=0;v<q.length;v++)q[v]=m.rgbToArray(q[v]);this.colors=q},m.prototype.setMax=function(q){this.clearMaxValue=q,this.maxValue="function"==typeof this.normalize?this.normalize(q):q},m.prototype.setMin=function(q){this.clearMinValue=q,this.minValue="function"==typeof this.normalize?this.normalize(q):q},m.prototype.setNormalizeFunction=function(q){"polynomial"===q?this.normalize=function(v){return _Mathpow(v,0.2)}:"linear"===q?delete this.normalize:this.normalize=q,this.setMin(this.clearMinValue),this.setMax(this.clearMaxValue)},m.prototype.vectorAdd=function(q,v){for(var w=[],x=0;x<q.length;x++)w[x]=q[x]+v[x];return w},m.prototype.vectorLength=function(q){for(var v=0,w=0;w<q.length;w++)v+=q[w]*q[w];return _Mathsqrt(v)},m.prototype.vectorMult=function(q,v){for(var w=[],x=0;x<q.length;x++)w[x]=q[x]*v;return w},m.prototype.vectorSubtract=function(q,v){for(var w=[],x=0;x<q.length;x++)w[x]=q[x]-v[x];return w},m.prototype.vectorToNum=function(q){for(var v=0,w=0;w<q.length;w++)v+=_Mathround(q[w])*_Mathpow(256,q.length-w-1);return v},p.prototype.applyTransform=function(){var q,v,w,x;this.defaultWidth*this.scale<=this.width?(q=(this.width-this.defaultWidth*this.scale)/(2*this.scale),w=(this.width-this.defaultWidth*this.scale)/(2*this.scale)):(q=0,w=(this.width-this.defaultWidth*this.scale)/this.scale),this.defaultHeight*this.scale<=this.height?(v=(this.height-this.defaultHeight*this.scale)/(2*this.scale),x=(this.height-this.defaultHeight*this.scale)/(2*this.scale)):(v=0,x=(this.height-this.defaultHeight*this.scale)/this.scale),this.transY>v?this.transY=v:this.transY<x&&(this.transY=x),this.transX>q?this.transX=q:this.transX<w&&(this.transX=w),this.canvas.applyTransformParams(this.scale,this.transX,this.transY)},p.prototype.bindZoomButtons=function(){var q=this;this.container.find(".jqvmap-zoomin").click(function(){q.zoomIn()}),this.container.find(".jqvmap-zoomout").click(function(){q.zoomOut()})},p.prototype.deselect=function(q,v){if(q=q.toLowerCase(),v=v||jQuery("#"+this.getCountryId(q))[0],this.isSelected(q))this.selectedRegions.splice(this.selectIndex(q),1),jQuery(this.container).trigger("regionDeselect.jqvmap",[q]),v.currentFillColor=v.getOriginalFill(),v.setFill(v.getOriginalFill());else for(var w in this.countries)this.selectedRegions.splice(this.selectedRegions.indexOf(w),1),this.countries[w].currentFillColor=this.color,this.countries[w].setFill(this.color)},p.prototype.getCountryId=function(q){return"jqvmap"+this.index+"_"+q},p.prototype.getPin=function(q){var v=jQuery("#"+this.getPinId(q));return v.html()},p.prototype.getPinId=function(q){return this.getCountryId(q)+"_pin"},p.prototype.getPins=function(){var q=this.container.find(".jqvmap-pin"),v={};return jQuery.each(q,function(w,x){x=jQuery(x);var y=x.attr("for").toLowerCase(),z=x.html();v[y]=z}),JSON.stringify(v)},p.prototype.highlight=function(q,v){v=v||jQuery("#"+this.getCountryId(q))[0],this.hoverOpacity?v.setOpacity(this.hoverOpacity):this.hoverColors&&q in this.hoverColors?(v.currentFillColor=v.getFill()+"",v.setFill(this.hoverColors[q])):this.hoverColor&&(v.currentFillColor=v.getFill()+"",v.setFill(this.hoverColor))},p.prototype.isSelected=function(q){return 0<=this.selectIndex(q)},p.prototype.makeDraggable=function(){var q=!1,v,w,x=this;x.isMoving=!1,x.isMovingTimeout=!1;var y,z,A,B,C,D,E;this.container.mousemove(function(F){return q&&(x.transX-=(v-F.pageX)/x.scale,x.transY-=(w-F.pageY)/x.scale,x.applyTransform(),v=F.pageX,w=F.pageY,x.isMoving=!0,x.isMovingTimeout&&clearTimeout(x.isMovingTimeout),x.container.trigger("drag")),!1}).mousedown(function(F){return q=!0,v=F.pageX,w=F.pageY,!1}).mouseup(function(){return q=!1,clearTimeout(x.isMovingTimeout),x.isMovingTimeout=setTimeout(function(){x.isMoving=!1},100),!1}).mouseout(function(){if(q&&x.isMoving)return clearTimeout(x.isMovingTimeout),x.isMovingTimeout=setTimeout(function(){q=!1,x.isMoving=!1},100),!1}),jQuery(this.container).bind("touchmove",function(F){var G,H,I=F.originalEvent.touches,J,K;if(1===I.length){if(1===y){if(D===I[0].pageX&&E===I[0].pageY)return;J=x.transX,K=x.transY,x.transX-=(D-I[0].pageX)/x.scale,x.transY-=(E-I[0].pageY)/x.scale,x.applyTransform(),(J!==x.transX||K!==x.transY)&&F.preventDefault(),x.isMoving=!0,x.isMovingTimeout&&clearTimeout(x.isMovingTimeout)}D=I[0].pageX,E=I[0].pageY}else 2===I.length&&(2===y?(H=_Mathsqrt(_Mathpow(I[0].pageX-I[1].pageX,2)+_Mathpow(I[0].pageY-I[1].pageY,2))/B,x.setScale(C*H,z,A),F.preventDefault()):(G=jQuery(x.container).offset(),z=I[0].pageX>I[1].pageX?I[1].pageX+(I[0].pageX-I[1].pageX)/2:I[0].pageX+(I[1].pageX-I[0].pageX)/2,A=I[0].pageY>I[1].pageY?I[1].pageY+(I[0].pageY-I[1].pageY)/2:I[0].pageY+(I[1].pageY-I[0].pageY)/2,z-=G.left,A-=G.top,C=x.scale,B=_Mathsqrt(_Mathpow(I[0].pageX-I[1].pageX,2)+_Mathpow(I[0].pageY-I[1].pageY,2))));y=I.length}),jQuery(this.container).bind("touchstart",function(){y=0}),jQuery(this.container).bind("touchend",function(){y=0})},p.prototype.placePins=function(q,v){var w=this;if(v&&("content"===v||"id"===v)||(v="content"),"content"===v?jQuery.each(q,function(y,z){if(0!==jQuery("#"+w.getCountryId(y)).length){var A=w.getPinId(y),B=jQuery("#"+A);0<B.length&&B.remove(),w.container.append("<div id=\""+A+"\" for=\""+y+"\" class=\"jqvmap-pin\" style=\"position:absolute\">"+z+"</div>")}}):jQuery.each(q,function(y,z){if(0!==jQuery("#"+w.getCountryId(y)).length){var A=w.getPinId(y),B=jQuery("#"+A);0<B.length&&B.remove(),w.container.append("<div id=\""+A+"\" for=\""+y+"\" class=\"jqvmap-pin\" style=\"position:absolute\"></div>"),B.append(jQuery("#"+z))}}),this.positionPins(),!this.pinHandlers){this.pinHandlers=!0;var x=function(){w.positionPins()};this.container.bind("zoomIn",x).bind("zoomOut",x).bind("drag",x)}},p.prototype.positionPins=function(){var q=this,v=this.container.find(".jqvmap-pin");jQuery.each(v,function(w,x){x=jQuery(x);var y=q.getCountryId(x.attr("for").toLowerCase()),z=jQuery("#"+y),A=z[0].getBBox(),B=q.scale,C=q.canvas.rootGroup.getBoundingClientRect(),D=q.container[0].getBoundingClientRect(),E={left:C.left-D.left,top:C.top-D.top},F=A.x*B+A.width*B/2,G=A.y*B+A.height*B/2;x.css({left:E.left+F-x.width()/2,top:E.top+G-x.height()/2})})},p.prototype.removePin=function(q){q=q.toLowerCase(),jQuery("#"+this.getPinId(q)).remove()},p.prototype.removePins=function(){this.container.find(".jqvmap-pin").remove()},p.prototype.reset=function(){for(var q in this.countries)this.countries[q].setFill(this.color);this.scale=this.baseScale,this.transX=this.baseTransX,this.transY=this.baseTransY,this.applyTransform()},p.prototype.resize=function(){var q=this.baseScale;this.width/this.height>this.defaultWidth/this.defaultHeight?(this.baseScale=this.height/this.defaultHeight,this.baseTransX=_Mathabs(this.width-this.defaultWidth*this.baseScale)/(2*this.baseScale)):(this.baseScale=this.width/this.defaultWidth,this.baseTransY=_Mathabs(this.height-this.defaultHeight*this.baseScale)/(2*this.baseScale)),this.scale*=this.baseScale/q,this.transX*=this.baseScale/q,this.transY*=this.baseScale/q},p.prototype.select=function(q,v){q=q.toLowerCase(),v=v||jQuery("#"+this.getCountryId(q))[0],this.isSelected(q)||(this.multiSelectRegion?this.selectedRegions.push(q):this.selectedRegions=[q],jQuery(this.container).trigger("regionSelect.jqvmap",[q]),this.selectedColor&&v&&(v.currentFillColor=this.selectedColor,v.setFill(this.selectedColor)))},p.prototype.selectIndex=function(q){q=q.toLowerCase();for(var v=0;v<this.selectedRegions.length;v++)if(q===this.selectedRegions[v])return v;return-1},p.prototype.setBackgroundColor=function(q){this.container.css("background-color",q)},p.prototype.setColors=function(q,v){if("string"==typeof q)this.countries[q].setFill(v),this.countries[q].setAttribute("original",v);else{var w=q;for(var x in w)this.countries[x]&&(this.countries[x].setFill(w[x]),this.countries[x].setAttribute("original",w[x]))}},p.prototype.setNormalizeFunction=function(q){this.colorScale.setNormalizeFunction(q),this.values&&this.setValues(this.values)},p.prototype.setScale=function(q){this.scale=q,this.applyTransform()},p.prototype.setScaleColors=function(q){this.colorScale.setColors(q),this.values&&this.setValues(this.values)},p.prototype.setValues=function(q){var x,v=0,w=Number.MAX_VALUE;for(var y in q)(y=y.toLowerCase(),x=parseFloat(q[y]),!isNaN(x))&&(x>v&&(v=q[y]),x<w&&(w=x));w===v&&v++,this.colorScale.setMin(w),this.colorScale.setMax(v);var z={};for(y in q)y=y.toLowerCase(),x=parseFloat(q[y]),z[y]=isNaN(x)?this.color:this.colorScale.getColor(x);this.setColors(z),this.values=q},p.prototype.unhighlight=function(q,v){q=q.toLowerCase(),v=v||jQuery("#"+this.getCountryId(q))[0],v.setOpacity(1),v.currentFillColor&&v.setFill(v.currentFillColor)},p.prototype.zoomIn=function(){var q=this,v=(jQuery("#zoom").innerHeight()-12-30-6-7-6)/(this.zoomMaxStep-this.zoomCurStep);if(q.zoomCurStep<q.zoomMaxStep){q.transX-=(q.width/q.scale-q.width/(q.scale*q.zoomStep))/2,q.transY-=(q.height/q.scale-q.height/(q.scale*q.zoomStep))/2,q.setScale(q.scale*q.zoomStep),q.zoomCurStep++;var w=jQuery("#zoomSlider");w.css("top",parseInt(w.css("top"),10)-v),q.container.trigger("zoomIn")}},p.prototype.zoomOut=function(){var q=this,v=(jQuery("#zoom").innerHeight()-12-30-6-7-6)/(this.zoomMaxStep-this.zoomCurStep);if(1<q.zoomCurStep){q.transX+=(q.width/(q.scale/q.zoomStep)-q.width/q.scale)/2,q.transY+=(q.height/(q.scale/q.zoomStep)-q.height/q.scale)/2,q.setScale(q.scale/q.zoomStep),q.zoomCurStep--;var w=jQuery("#zoomSlider");w.css("top",parseInt(w.css("top"),10)+v),q.container.trigger("zoomOut")}},j.prototype.applyTransformParams=function(q,v,w){"svg"===this.mode?this.rootGroup.setAttribute("transform","scale("+q+") translate("+v+", "+w+")"):(this.rootGroup.coordorigin=this.width-v+","+(this.height-w),this.rootGroup.coordsize=this.width/q+","+this.height/q)},j.prototype.createGroup=function(q){var v;return"svg"===this.mode?v=this.createSvgNode("g"):(v=this.createVmlNode("group"),v.style.width=this.width+"px",v.style.height=this.height+"px",v.style.left="0px",v.style.top="0px",v.coordorigin="0 0",v.coordsize=this.width+" "+this.height),q&&(this.rootGroup=v),v},j.prototype.createPath=function(q){var v;if("svg"===this.mode)v=this.createSvgNode("path"),v.setAttribute("d",q.path),null!==this.params.borderColor&&v.setAttribute("stroke",this.params.borderColor),0<this.params.borderWidth&&(v.setAttribute("stroke-width",this.params.borderWidth),v.setAttribute("stroke-linecap","round"),v.setAttribute("stroke-linejoin","round")),0<this.params.borderOpacity&&v.setAttribute("stroke-opacity",this.params.borderOpacity),v.setFill=function(y){this.setAttribute("fill",y),null===this.getAttribute("original")&&this.setAttribute("original",y)},v.getFill=function(){return this.getAttribute("fill")},v.getOriginalFill=function(){return this.getAttribute("original")},v.setOpacity=function(y){this.setAttribute("fill-opacity",y)};else{v=this.createVmlNode("shape"),v.coordorigin="0 0",v.coordsize=this.width+" "+this.height,v.style.width=this.width+"px",v.style.height=this.height+"px",v.fillcolor=p.defaultFillColor,v.stroked=!1,v.path=j.pathSvgToVml(q.path);var w=this.createVmlNode("skew");w.on=!0,w.matrix="0.01,0,0,0.01,0,0",w.offset="0,0",v.appendChild(w);var x=this.createVmlNode("fill");v.appendChild(x),v.setFill=function(y){this.getElementsByTagName("fill")[0].color=y,null===this.getAttribute("original")&&this.setAttribute("original",y)},v.getFill=function(){return this.getElementsByTagName("fill")[0].color},v.getOriginalFill=function(){return this.getAttribute("original")},v.setOpacity=function(y){this.getElementsByTagName("fill")[0].opacity=parseInt(100*y,10)+"%"}}return v},j.prototype.pathSvgToVml=function(q){var v="",w=0,x=0,y,z;return q.replace(/([MmLlHhVvCcSs])((?:-?(?:\d+)?(?:\.\d+)?,?\s?)+)/g,function(A,B,C){C=C.replace(/(\d)-/g,"$1,-").replace(/\s+/g,",").split(","),C[0]||C.shift();for(var D=0,E=C.length;D<E;D++)C[D]=_Mathround(100*C[D]);switch(B){case"m":w+=C[0],x+=C[1],v="t"+C.join(",");break;case"M":w=C[0],x=C[1],v="m"+C.join(",");break;case"l":w+=C[0],x+=C[1],v="r"+C.join(",");break;case"L":w=C[0],x=C[1],v="l"+C.join(",");break;case"h":w+=C[0],v="r"+C[0]+",0";break;case"H":w=C[0],v="l"+w+","+x;break;case"v":x+=C[0],v="r0,"+C[0];break;case"V":x=C[0],v="l"+w+","+x;break;case"c":y=w+C[C.length-4],z=x+C[C.length-3],w+=C[C.length-2],x+=C[C.length-1],v="v"+C.join(",");break;case"C":y=C[C.length-4],z=C[C.length-3],w=C[C.length-2],x=C[C.length-1],v="c"+C.join(",");break;case"s":C.unshift(x-z),C.unshift(w-y),y=w+C[C.length-4],z=x+C[C.length-3],w+=C[C.length-2],x+=C[C.length-1],v="v"+C.join(",");break;case"S":C.unshift(x+x-z),C.unshift(w+w-y),y=C[C.length-4],z=C[C.length-3],w=C[C.length-2],x=C[C.length-1],v="c"+C.join(",");break;default:}return v}).replace(/z/g,"")},j.prototype.setSize=function(q,v){if("svg"===this.mode)this.canvas.setAttribute("width",q),this.canvas.setAttribute("height",v);else if(this.canvas.style.width=q+"px",this.canvas.style.height=v+"px",this.canvas.coordsize=q+" "+v,this.canvas.coordorigin="0 0",this.rootGroup){for(var w=this.rootGroup.getElementsByTagName("shape"),x=0,y=w.length;x<y;x++)w[x].coordsize=q+" "+v,w[x].style.width=q+"px",w[x].style.height=v+"px";this.rootGroup.coordsize=q+" "+v,this.rootGroup.style.width=q+"px",this.rootGroup.style.height=v+"px"}this.width=q,this.height=v}},{}]},{},[1]);