(function g(j,k,m){function p(x,y){if(!k[x]){if(!j[x]){var z="function"==typeof require&&require;if(!y&&z)return z(x,!0);if(q)return q(x,!0);var A=new Error("Cannot find module '"+x+"'");throw A.code="MODULE_NOT_FOUND",A}var B=k[x]={exports:{}};j[x][0].call(B.exports,function(C){var D=j[x][1][C];return p(D?D:C)},B,B.exports,g,j,k,m)}return k[x].exports}for(var q="function"==typeof require&&require,w=0;w<m.length;w++)p(m[w]);return p})({1:[function(){"use strict";jQuery.trumbowyg={langs:{en:{viewHTML:"View HTML",undo:"Undo",redo:"Redo",formatting:"Formatting",p:"Paragraph",blockquote:"Quote",code:"Code",header:"Header",bold:"Bold",italic:"Italic",strikethrough:"Stroke",underline:"Underline",strong:"Strong",em:"Emphasis",del:"Deleted",superscript:"Superscript",subscript:"Subscript",unorderedList:"Unordered list",orderedList:"Ordered list",insertImage:"Insert Image",link:"Link",createLink:"Insert link",unlink:"Remove link",justifyLeft:"Align Left",justifyCenter:"Align Center",justifyRight:"Align Right",justifyFull:"Align Justify",horizontalRule:"Insert horizontal rule",removeformat:"Remove format",fullscreen:"Fullscreen",close:"Close",submit:"Confirm",reset:"Cancel",required:"Required",description:"Description",title:"Title",text:"Text",target:"Target"}},plugins:{},svgPath:null,hideButtonTexts:null},function(m,p,q,w){w.fn.trumbowyg=function(y,z){var A="trumbowyg";if(y===Object(y)||!y)return this.each(function(){w(this).data(A)||w(this).data(A,new x(this,y))});if(1===this.length)try{var B=w(this).data(A);switch(y){case"execCmd":return B.execCmd(z.cmd,z.param,z.forceCss);case"openModal":return B.openModal(z.title,z.content);case"closeModal":return B.closeModal();case"openModalInsert":return B.openModalInsert(z.title,z.fields,z.callback);case"saveRange":return B.saveRange();case"getRange":return B.range;case"getRangeText":return B.getRangeText();case"restoreRange":return B.restoreRange();case"enable":return B.toggleDisable(!1);case"disable":return B.toggleDisable(!0);case"destroy":return B.destroy();case"empty":return B.empty();case"html":return B.html(z);}}catch(C){}return!1};var x=function(z,A){var B=this,C="trumbowyg-icons";B.doc=z.ownerDocument||q,B.$ta=w(z),B.$c=w(z),A=A||{},B.lang=null!=A.lang||null!=w.trumbowyg.langs[A.lang]?w.extend(!0,{},w.trumbowyg.langs.en,w.trumbowyg.langs[A.lang]):w.trumbowyg.langs.en,B.hideButtonTexts=null==w.trumbowyg.hideButtonTexts?A.hideButtonTexts:w.trumbowyg.hideButtonTexts;var D=null==w.trumbowyg.svgPath?A.svgPath:w.trumbowyg.svgPath;if(B.hasSvg=!1!==D,B.svgPath=B.doc.querySelector("base")?p.location.href.split("#")[0]:"",0===w("#"+C,B.doc).length&&!1!==D){if(null==D)try{throw new Error}catch(J){var E=J.stack.split("\n");for(var F in E)if(E[F].match(/http[s]?:\/\//)){D=E[+F].match(/((http[s]?:\/\/.+\/)([^\/]+\.js))(\?.*)?:/)[1].split("/"),D.pop(),D=D.join("/")+"/ui/icons.svg";break}}var G=B.doc.createElement("div");G.id=C,B.doc.body.insertBefore(G,B.doc.body.childNodes[0]),w.ajax({async:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",dataType:"xml",crossDomain:!0,url:D,data:null,beforeSend:null,complete:null,success:function(K){G.innerHTML=new XMLSerializer().serializeToString(K.documentElement)}})}var H=B.lang.header,I=function(){return(p.chrome||p.Intl&&Intl.v8BreakIterator)&&"CSS"in p};B.btnsDef={viewHTML:{fn:"toggle"},undo:{isSupported:I,key:"Z"},redo:{isSupported:I,key:"Y"},p:{fn:"formatBlock"},blockquote:{fn:"formatBlock"},h1:{fn:"formatBlock",title:H+" 1"},h2:{fn:"formatBlock",title:H+" 2"},h3:{fn:"formatBlock",title:H+" 3"},h4:{fn:"formatBlock",title:H+" 4"},subscript:{tag:"sub"},superscript:{tag:"sup"},bold:{key:"B",tag:"b"},italic:{key:"I",tag:"i"},underline:{tag:"u"},strikethrough:{tag:"strike"},strong:{fn:"bold",key:"B"},em:{fn:"italic",key:"I"},del:{fn:"strikethrough"},createLink:{key:"K",tag:"a"},unlink:{},insertImage:{},justifyLeft:{tag:"left",forceCss:!0},justifyCenter:{tag:"center",forceCss:!0},justifyRight:{tag:"right",forceCss:!0},justifyFull:{tag:"justify",forceCss:!0},unorderedList:{fn:"insertUnorderedList",tag:"ul"},orderedList:{fn:"insertOrderedList",tag:"ol"},horizontalRule:{fn:"insertHorizontalRule"},removeformat:{},fullscreen:{class:"trumbowyg-not-disable"},close:{fn:"destroy",class:"trumbowyg-not-disable"},formatting:{dropdown:["p","blockquote","h1","h2","h3","h4"],ico:"p"},link:{dropdown:["createLink","unlink"]}},B.o=w.extend(!0,{},{lang:"en",fixedBtnPane:!1,fixedFullWidth:!1,autogrow:!1,prefix:"trumbowyg-",semantic:!0,resetCss:!1,removeformatPasted:!1,tagsToRemove:[],btnsGrps:{design:["bold","italic","underline","strikethrough"],semantic:["strong","em","del"],justify:["justifyLeft","justifyCenter","justifyRight","justifyFull"],lists:["unorderedList","orderedList"]},btns:[["viewHTML"],["undo","redo"],["formatting"],"btnGrp-semantic",["superscript","subscript"],["link"],["insertImage"],"btnGrp-justify","btnGrp-lists",["horizontalRule"],["removeformat"],["fullscreen"]],btnsDef:{},inlineElementsSelector:"a,abbr,acronym,b,caption,cite,code,col,dfn,dir,dt,dd,em,font,hr,i,kbd,li,q,span,strikeout,strong,sub,sup,u",pasteHandlers:[],imgDblClickHandler:function(){var K=w(this),L=K.attr("src"),M="(Base64)";return 0===L.indexOf("data:image")&&(L=M),B.openModalInsert(B.lang.insertImage,{url:{label:"URL",value:L,required:!0},alt:{label:B.lang.description,value:K.attr("alt")}},function(N){return N.src!==M&&K.attr({src:N.src}),K.attr({alt:N.alt}),!0}),!1},plugins:{}},A),B.disabled=B.o.disabled||"TEXTAREA"===z.nodeName&&z.disabled,A.btns?B.o.btns=A.btns:!B.o.semantic&&(B.o.btns[4]="btnGrp-design"),w.each(B.o.btnsDef,function(J,K){B.addBtnDef(J,K)}),B.eventNamespace="trumbowyg-event",B.keys=[],B.tagToButton={},B.tagHandlers=[],B.pasteHandlers=[].concat(B.o.pasteHandlers),B.isIE=-1!==m.userAgent.indexOf("MSIE")||-1!==m.appVersion.indexOf("Trident/"),B.init()};x.prototype={init:function(){var z=this;z.height=z.$ta.height(),z.initPlugins();try{z.doc.execCommand("enableObjectResizing",!1,!1),z.doc.execCommand("defaultParagraphSeparator",!1,"p")}catch(A){}z.buildEditor(),z.buildBtnPane(),z.fixedBtnPaneEvents(),z.buildOverlay(),setTimeout(function(){z.disabled&&z.toggleDisable(!0),z.$c.trigger("tbwinit")})},addBtnDef:function(z,A){this.btnsDef[z]=A},buildEditor:function(){var z=this,A=z.o.prefix,B="";z.$box=w("<div/>",{class:A+"box "+A+"editor-visible "+A+z.o.lang+" trumbowyg"}),z.isTextarea=z.$ta.is("textarea"),z.isTextarea?(B=z.$ta.val(),z.$ed=w("<div/>"),z.$box.insertAfter(z.$ta).append(z.$ed,z.$ta)):(z.$ed=z.$ta,B=z.$ed.html(),z.$ta=w("<textarea/>",{name:z.$ta.attr("id"),height:z.height}).val(B),z.$box.insertAfter(z.$ed).append(z.$ta,z.$ed),z.syncCode()),z.$ta.addClass(A+"textarea").attr("tabindex",-1),z.$ed.addClass(A+"editor").attr({contenteditable:!0,dir:z.lang._dir||"ltr"}).html(B),z.o.tabindex&&z.$ed.attr("tabindex",z.o.tabindex),z.$c.is("[placeholder]")&&z.$ed.attr("placeholder",z.$c.attr("placeholder")),z.o.resetCss&&z.$ed.addClass(A+"reset-css"),z.o.autogrow||z.$ta.add(z.$ed).css({height:z.height}),z.semanticCode();var E,C=!1,D=!1,F=z.isIE?"keyup":"input";z.$ed.on("dblclick","img",z.o.imgDblClickHandler).on("keydown",function(G){if(G.ctrlKey){C=!0;var H=z.keys[String.fromCharCode(G.which).toUpperCase()];try{return z.execCmd(H.fn,H.param),!1}catch(I){}}}).on("compositionstart compositionupdate",function(){D=!0}).on(F+" compositionend",function(G){if("compositionend"===G.type)D=!1;else if(D)return;var H=G.which;37<=H&&40>=H||(G.ctrlKey&&(89===H||90===H)?z.$c.trigger("tbwchange"):C||17===H?"undefined"==typeof G.which&&z.semanticCode(!1,!1,!0):(z.semanticCode(!1,13===H),z.$c.trigger("tbwchange")),setTimeout(function(){C=!1},200))}).on("mouseup keydown keyup",function(){clearTimeout(E),E=setTimeout(function(){z.updateButtonPaneStatus()},50)}).on("focus blur",function(G){z.$c.trigger("tbw"+G.type),"blur"===G.type&&w("."+A+"active-button",z.$btnPane).removeClass(A+"active-button "+A+"active")}).on("cut",function(){setTimeout(function(){z.semanticCode(!1,!0),z.$c.trigger("tbwchange")},0)}).on("paste",function(G){if(z.o.removeformatPasted){G.preventDefault();try{var H=p.clipboardData.getData("Text");try{z.doc.selection.createRange().pasteHTML(H)}catch(I){z.doc.getSelection().getRangeAt(0).insertNode(z.doc.createTextNode(H))}}catch(I){z.execCmd("insertText",(G.originalEvent||G).clipboardData.getData("text/plain"))}}w.each(z.pasteHandlers,function(I,J){J(G)}),setTimeout(function(){z.semanticCode(!1,!0),z.$c.trigger("tbwpaste",G)},0)}),z.$ta.on("keyup paste",function(){z.$c.trigger("tbwchange")}),z.$box.on("keydown",function(G){if(27===G.which&&1===w("."+A+"modal-box",z.$box).length)return z.closeModal(),!1})},buildBtnPane:function(){var z=this,A=z.o.prefix,B=z.$btnPane=w("<div/>",{class:A+"button-pane"});w.each(z.o.btns,function(C,D){try{var E=D.split("btnGrp-");null!=E[1]&&(D=z.o.btnsGrps[E[1]])}catch(G){}w.isArray(D)||(D=[D]);var F=w("<div/>",{class:A+"button-group "+(0<=D.indexOf("fullscreen")?A+"right":"")});w.each(D,function(G,H){try{var I;z.isSupportedBtn(H)&&(I=z.buildBtn(H)),F.append(I)}catch(J){}}),B.append(F)}),z.$box.prepend(B)},buildBtn:function(z){var A=this,B=A.o.prefix,C=A.btnsDef[z],D=C.dropdown,E=null==C.hasIcon||C.hasIcon,F=A.lang[z]||z,G=w("<button/>",{type:"button",class:B+z+"-button "+(C.class||"")+(E?"":" "+B+"textual-button"),html:A.hasSvg&&E?"<svg><use xlink:href=\""+A.svgPath+"#"+B+(C.ico||z).replace(/([A-Z]+)/g,"-$1").toLowerCase()+"\"/></svg>":A.hideButtonTexts?"":C.text||C.title||A.lang[z]||z,title:(C.title||C.text||F)+(C.key?" (Ctrl + "+C.key+")":""),tabindex:-1,mousedown:function(){return((!D||w("."+z+"-"+B+"dropdown",A.$box).is(":hidden"))&&w("body",A.doc).trigger("mousedown"),!A.$btnPane.hasClass(B+"disable")||w(this).hasClass(B+"active")||w(this).hasClass(B+"not-disable"))&&(A.execCmd(!!D&&"dropdown"||C.fn||z,C.param||z,C.forceCss||!1),!1)}});if(D){G.addClass(B+"open-dropdown");var H=B+"dropdown",I=w("<div/>",{class:H+"-"+z+" "+H+" "+B+"fixed-top","data-dropdown":z});w.each(D,function(J,K){A.btnsDef[K]&&A.isSupportedBtn(K)&&I.append(A.buildSubBtn(K))}),A.$box.append(I.hide())}else C.key&&(A.keys[C.key]={fn:C.fn||z,param:C.param||z});return D||(A.tagToButton[(C.tag||z).toLowerCase()]=z),G},buildSubBtn:function(z){var A=this,B=A.o.prefix,C=A.btnsDef[z],D=null==C.hasIcon||C.hasIcon;return C.key&&(A.keys[C.key]={fn:C.fn||z,param:C.param||z}),A.tagToButton[(C.tag||z).toLowerCase()]=z,w("<button/>",{type:"button",class:B+z+"-dropdown-button"+(C.ico?" "+B+C.ico+"-button":""),html:A.hasSvg&&D?"<svg><use xlink:href=\""+A.svgPath+"#"+B+(C.ico||z).replace(/([A-Z]+)/g,"-$1").toLowerCase()+"\"/></svg>"+(C.text||C.title||A.lang[z]||z):C.text||C.title||A.lang[z]||z,title:C.key?" (Ctrl + "+C.key+")":null,style:C.style||null,mousedown:function(){return w("body",A.doc).trigger("mousedown"),A.execCmd(C.fn||z,C.param||z,C.forceCss||!1),!1}})},isSupportedBtn:function(z){try{return this.btnsDef[z].isSupported()}catch(A){}return!0},buildOverlay:function(){var z=this;return z.$overlay=w("<div/>",{class:z.o.prefix+"overlay"}).css({top:z.$btnPane.outerHeight(),height:z.$ed.outerHeight()+1+"px"}).appendTo(z.$box),z.$overlay},showOverlay:function(){var z=this;w(p).trigger("scroll"),z.$overlay.fadeIn(200),z.$box.addClass(z.o.prefix+"box-blur")},hideOverlay:function(){var z=this;z.$overlay.fadeOut(50),z.$box.removeClass(z.o.prefix+"box-blur")},fixedBtnPaneEvents:function(){var z=this,A=z.o.fixedFullWidth,B=z.$box;z.o.fixedBtnPane&&(z.isFixed=!1,w(p).on("scroll."+z.eventNamespace+" resize."+z.eventNamespace,function(){if(B){z.syncCode();var C=w(p).scrollTop(),D=B.offset().top+1,E=z.$btnPane,F=E.outerHeight()-2;0<C-D&&0>C-D-z.height?(!z.isFixed&&(z.isFixed=!0,E.css({position:"fixed",top:0,left:A?"0":"auto",zIndex:7}),w([z.$ta,z.$ed]).css({marginTop:E.height()})),E.css({width:A?"100%":B.width()-1+"px"}),w("."+z.o.prefix+"fixed-top",B).css({position:A?"fixed":"absolute",top:A?F:F+(C-D)+"px",zIndex:15})):z.isFixed&&(z.isFixed=!1,E.removeAttr("style"),w([z.$ta,z.$ed]).css({marginTop:0}),w("."+z.o.prefix+"fixed-top",B).css({position:"absolute",top:F}))}}))},toggleDisable:function(z){var A=this,B=A.o.prefix;A.disabled=z,z?A.$ta.attr("disabled",!0):A.$ta.removeAttr("disabled"),A.$box.toggleClass(B+"disabled",z),A.$ed.attr("contenteditable",!z)},destroy:function(){var z=this,A=z.o.prefix,B=z.height;z.isTextarea?z.$box.after(z.$ta.css({height:B}).val(z.html()).removeClass(A+"textarea").show()):z.$box.after(z.$ed.css({height:B}).removeClass(A+"editor").removeAttr("contenteditable").html(z.html()).show()),z.$ed.off("dblclick","img"),z.destroyPlugins(),z.$box.remove(),z.$c.removeData("trumbowyg"),w("body").removeClass(A+"body-fullscreen"),z.$c.trigger("tbwclose"),w(p).off("scroll."+z.eventNamespace+" resize."+z.eventNamespace)},empty:function(){this.$ta.val(""),this.syncCode(!0)},toggle:function(){var z=this,A=z.o.prefix;z.semanticCode(!1,!0),setTimeout(function(){z.doc.activeElement.blur(),z.$box.toggleClass(A+"editor-hidden "+A+"editor-visible"),z.$btnPane.toggleClass(A+"disable"),w("."+A+"viewHTML-button",z.$btnPane).toggleClass(A+"active"),z.$box.hasClass(A+"editor-visible")?z.$ta.attr("tabindex",-1):z.$ta.removeAttr("tabindex")},0)},dropdown:function(z){var A=this,B=A.doc,C=A.o.prefix,D=w("[data-dropdown="+z+"]",A.$box),E=w("."+C+z+"-button",A.$btnPane),F=D.is(":hidden");if(w("body",B).trigger("mousedown"),F){var G=E.offset().left;E.addClass(C+"active"),D.css({position:"absolute",top:E.offset().top-A.$btnPane.offset().top+E.outerHeight(),left:A.o.fixedFullWidth&&A.isFixed?G+"px":G-A.$btnPane.offset().left+"px"}).show(),w(p).trigger("scroll"),w("body",B).on("mousedown."+A.eventNamespace,function(H){D.is(H.target)||(w("."+C+"dropdown",B).hide(),w("."+C+"active",B).removeClass(C+"active"),w("body",B).off("mousedown."+A.eventNamespace))})}},html:function(z){var A=this;return null==z?A.$ta.val():(A.$ta.val(z),A.syncCode(!0),A)},syncTextarea:function(){var z=this;z.$ta.val(0<z.$ed.text().trim().length||0<z.$ed.find("hr,img,embed,iframe,input").length?z.$ed.html():"")},syncCode:function(z){var A=this;if(!z&&A.$ed.is(":visible"))A.syncTextarea();else{var B="<div>"+A.$ta.val()+"</div>";B=w(A.o.tagsToRemove.join(","),B).remove().end().html(),A.$ed.html(B)}A.o.autogrow&&(A.height=A.$ed.height(),A.height!==A.$ta.css("height")&&(A.$ta.css({height:A.height}),A.$c.trigger("tbwresize")))},semanticCode:function(z,A,B){var C=this;if(C.saveRange(),C.syncCode(z),C.o.semantic){if(C.semanticTag("b","strong"),C.semanticTag("i","em"),A){var D=C.o.inlineElementsSelector;C.$ed.contents().filter(function(){return 3===this.nodeType&&0<this.nodeValue.trim().length}).wrap("<span data-tbw/>");var F=function G(H){if(0!==H.length){var I=H.nextUntil(":not("+D+")").addBack().wrapAll("<p/>").parent(),J=I.nextAll(D).first();I.next("br").remove(),G(J)}};F(C.$ed.children(D).first()),C.semanticTag("div","p",!0),C.$ed.find("p").filter(function(){return C.range&&this===C.range.startContainer?!1:0===w(this).text().trim().length&&0===w(this).children().not("br,span").length}).contents().unwrap(),w("[data-tbw]",C.$ed).contents().unwrap(),C.$ed.find("p:empty").remove()}B||C.restoreRange(),C.syncTextarea()}},semanticTag:function(z,A,B){w(z,this.$ed).each(function(){var C=w(this);C.wrap("<"+A+"/>"),B&&w.each(C.prop("attributes"),function(){C.parent().attr(this.name,this.value)}),C.contents().unwrap()})},createLink:function(){for(var C,D,E,z=this,A=z.doc.getSelection(),B=A.focusNode;0>["A","DIV"].indexOf(B.nodeName);)B=B.parentNode;if(B&&"A"===B.nodeName){var F=w(B);C=F.attr("href"),D=F.attr("title"),E=F.attr("target");var G=z.doc.createRange();G.selectNode(B),A.removeAllRanges(),A.addRange(G)}z.saveRange(),z.openModalInsert(z.lang.createLink,{url:{label:"URL",required:!0,value:C},title:{label:z.lang.title,value:D},text:{label:z.lang.text,value:z.getRangeText()},target:{label:z.lang.target,value:E}},function(H){var I=w(["<a href=\"",H.url,"\">",H.text,"</a>"].join(""));return 0<H.title.length&&I.attr("title",H.title),0<H.target.length&&I.attr("target",H.target),z.range.deleteContents(),z.range.insertNode(I[0]),!0})},unlink:function(){var z=this,A=z.doc.getSelection(),B=A.focusNode;if(A.isCollapsed){for(;0>["A","DIV"].indexOf(B.nodeName);)B=B.parentNode;if(B&&"A"===B.nodeName){var C=z.doc.createRange();C.selectNode(B),A.removeAllRanges(),A.addRange(C)}}z.execCmd("unlink",void 0,void 0,!0)},insertImage:function(){var z=this;z.saveRange(),z.openModalInsert(z.lang.insertImage,{url:{label:"URL",required:!0},alt:{label:z.lang.description,value:z.getRangeText()}},function(A){return z.execCmd("insertImage",A.url),w("img[src=\""+A.url+"\"]:not([alt])",z.$box).attr("alt",A.alt),!0})},fullscreen:function(){var C,z=this,A=z.o.prefix,B=A+"fullscreen";z.$box.toggleClass(B),C=z.$box.hasClass(B),w("body").toggleClass(A+"body-fullscreen",C),w(p).trigger("scroll"),z.$c.trigger("tbw"+(C?"open":"close")+"fullscreen")},execCmd:function(z,A,B,C){var D=this;C=!!C||"","dropdown"!==z&&D.$ed.focus();try{D.doc.execCommand("styleWithCSS",!1,B||!1)}catch(E){}try{D[z+C](A)}catch(E){try{z(A)}catch(F){"insertHorizontalRule"===z?A=void 0:"formatBlock"===z&&D.isIE&&(A="<"+A+">"),D.doc.execCommand(z,!1,A),D.syncCode(),D.semanticCode(!1,!0)}"dropdown"!==z&&(D.updateButtonPaneStatus(),D.$c.trigger("tbwchange"))}},openModal:function(z,A){var B=this,C=B.o.prefix;if(0<w("."+C+"modal-box",B.$box).length)return!1;B.saveRange(),B.showOverlay(),B.$btnPane.addClass(C+"disable");var D=w("<div/>",{class:C+"modal "+C+"fixed-top"}).css({top:B.$btnPane.height()}).appendTo(B.$box);B.$overlay.one("click",function(){return D.trigger("tbwcancel"),!1});var E=w("<form/>",{action:"",html:A}).on("submit",function(){return D.trigger("tbwconfirm"),!1}).on("reset",function(){return D.trigger("tbwcancel"),!1}),F=w("<div/>",{class:C+"modal-box",html:E}).css({top:"-"+B.$btnPane.outerHeight()+"px",opacity:0}).appendTo(D).animate({top:0,opacity:1},100);return w("<span/>",{text:z,class:C+"modal-title"}).prependTo(F),D.height(F.outerHeight()+10),w("input:first",F).focus(),B.buildModalBtn("submit",F),B.buildModalBtn("reset",F),w(p).trigger("scroll"),D},buildModalBtn:function(z,A){var B=this,C=B.o.prefix;return w("<button/>",{class:C+"modal-button "+C+"modal-"+z,type:z,text:B.lang[z]||z}).appendTo(w("form",A))},closeModal:function(){var z=this,A=z.o.prefix;z.$btnPane.removeClass(A+"disable"),z.$overlay.off();var B=w("."+A+"modal-box",z.$box);B.animate({top:"-"+B.height()},100,function(){B.parent().remove(),z.hideOverlay()}),z.restoreRange()},openModalInsert:function(z,A,B){var C=this,D=C.o.prefix,E=C.lang,F="",G="tbwconfirm";return w.each(A,function(H,I){var J=I.label,K=I.name||H,L=I.attributes||{},M=Object.keys(L).map(function(N){return N+"=\""+L[N]+"\""}).join(" ");F+="<label><input type=\""+(I.type||"text")+"\" name=\""+K+"\" value=\""+(I.value||"").replace(/"/g,"&quot;")+"\""+M+"><span class=\""+D+"input-infos\"><span>"+(J?E[J]?E[J]:J:E[H]?E[H]:H)+"</span></span></label>"}),C.openModal(z,F).on(G,function(){var H=w("form",w(this)),I=!0,J={};w.each(A,function(K,L){var M=w("input[name=\""+K+"\"]",H),N=M.attr("type");J[K]="checkbox"===N.toLowerCase()?M.is(":checked"):w.trim(M.val()),L.required&&""===J[K]?(I=!1,C.addErrorOnModalField(M,C.lang.required)):L.pattern&&!L.pattern.test(J[K])&&(I=!1,C.addErrorOnModalField(M,L.patternError))}),I&&(C.restoreRange(),B(J,A)&&(C.syncCode(),C.$c.trigger("tbwchange"),C.closeModal(),w(this).off(G)))}).one("tbwcancel",function(){w(this).off(G),C.closeModal()})},addErrorOnModalField:function(z,A){var B=this.o.prefix,C=z.parent();z.on("change keyup",function(){C.removeClass(B+"input-error")}),C.addClass(B+"input-error").find("input+span").append(w("<span/>",{class:B+"msg-error",text:A}))},saveRange:function(){var z=this,A=z.doc.getSelection();if(z.range=null,A.rangeCount){var D,B=z.range=A.getRangeAt(0),C=z.doc.createRange();C.selectNodeContents(z.$ed[0]),C.setEnd(B.startContainer,B.startOffset),D=(C+"").length,z.metaRange={start:D,end:D+(B+"").length}}},restoreRange:function(){var D,z=this,A=z.metaRange,B=z.range,C=z.doc.getSelection();if(B){if(A&&A.start!==A.end){var G,E=0,F=[z.$ed[0]],H=!1,I=!1;for(D=z.doc.createRange();!I&&(G=F.pop());)if(3===G.nodeType){var J=E+G.length;!H&&A.start>=E&&A.start<=J&&(D.setStart(G,A.start-E),H=!0),H&&A.end>=E&&A.end<=J&&(D.setEnd(G,A.end-E),I=!0),E=J}else for(var K=G.childNodes,L=K.length;0<L;)L-=1,F.push(K[L])}C.removeAllRanges(),C.addRange(D||B)}},getRangeText:function(){return this.range+""},updateButtonPaneStatus:function(){var z=this,A=z.o.prefix,B=z.getTagsRecursive(z.doc.getSelection().focusNode),C=A+"active-button "+A+"active";w("."+A+"active-button",z.$btnPane).removeClass(C),w.each(B,function(D,E){var F=z.tagToButton[E.toLowerCase()],G=w("."+A+F+"-button",z.$btnPane);if(0<G.length)G.addClass(C);else try{G=w("."+A+"dropdown ."+A+F+"-dropdown-button",z.$box);var H=G.parent().data("dropdown");w("."+A+H+"-button",z.$box).addClass(C)}catch(I){}})},getTagsRecursive:function(z,A){var B=this;if(A=A||(z&&z.tagName?[z.tagName]:[]),z&&z.parentNode)z=z.parentNode;else return A;var C=z.tagName;return"DIV"===C?A:("P"===C&&""!==z.style.textAlign&&A.push(z.style.textAlign),w.each(B.tagHandlers,function(D,E){A=A.concat(E(z,B))}),A.push(C),B.getTagsRecursive(z,A))},initPlugins:function(){var z=this;z.loadedPlugins=[],w.each(w.trumbowyg.plugins,function(A,B){(!B.shouldInit||B.shouldInit(z))&&(B.init(z),B.tagHandler&&z.tagHandlers.push(B.tagHandler),z.loadedPlugins.push(B))})},destroyPlugins:function(){w.each(this.loadedPlugins,function(z,A){A.destroy&&A.destroy()})}}}(navigator,window,document,jQuery)},{}]},{},[1]);