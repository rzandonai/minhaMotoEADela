window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function o(e,t){return r(z.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&b[o]!==n)return"pfx"==t?o:!0}return!1}function s(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return r===!1?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+S.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?c(o,t):(o=(e+" "+T.join(r+" ")+r).split(" "),s(o,t,n))}function u(){m.input=function(n){for(var r=0,o=n.length;o>r;r++)P[n[r]]=n[r]in x;return P.list&&(P.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),P}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(e){for(var r,o,i,a=0,c=e.length;c>a;a++)x.setAttribute("type",o=e[a]),r="text"!==x.type,r&&(x.value=w,x.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&x.style.WebkitAppearance!==n?(g.appendChild(x),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(x,null).WebkitAppearance&&0!==x.offsetHeight,g.removeChild(x)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?x.checkValidity&&x.checkValidity()===!1:x.value!=w)),j[e[a]]=!!r;return j}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,p="2.8.1",m={},h=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,x=t.createElement("input"),w=":)",E={}.toString,z=" -webkit- -moz- -o- -ms- ".split(" "),M="Webkit Moz O ms",S=M.split(" "),T=M.toLowerCase().split(" "),C={svg:"http://www.w3.org/2000/svg"},k={},j={},P={},A=[],N=A.slice,F=function(e,n,r,o){var i,a,c,s,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:v+(r+1),l.appendChild(c);return i=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),l.id=v,(u?l:d).innerHTML+=i,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",s=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),a=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),g.style.overflow=s),!!a},L=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return F("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},O=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=i(o[e],"function"),i(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),_={}.hasOwnProperty;f=i(_,"undefined")||i(_.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return _.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=N.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(N.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(N.call(arguments)))};return r}),k.flexbox=function(){return l("flexWrap")},k.flexboxlegacy=function(){return l("boxDirection")},k.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},k.canvastext=function(){return!!m.canvas&&!!i(t.createElement("canvas").getContext("2d").fillText,"function")},k.webgl=function(){return!!e.WebGLRenderingContext},k.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:F(["@media (",z.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},k.geolocation=function(){return"geolocation"in navigator},k.postmessage=function(){return!!e.postMessage},k.websqldatabase=function(){return!!e.openDatabase},k.indexedDB=function(){return!!l("indexedDB",e)},k.hashchange=function(){return O("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},k.history=function(){return!!e.history&&!!history.pushState},k.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},k.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},k.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(b.backgroundColor,"rgba")},k.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(b.backgroundColor,"rgba")||a(b.backgroundColor,"hsla")},k.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},k.backgroundsize=function(){return l("backgroundSize")},k.borderimage=function(){return l("borderImage")},k.borderradius=function(){return l("borderRadius")},k.boxshadow=function(){return l("boxShadow")},k.textshadow=function(){return""===t.createElement("div").style.textShadow},k.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},k.cssanimations=function(){return l("animationName")},k.csscolumns=function(){return l("columnCount")},k.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+z.join(n+e)).slice(0,-e.length)),a(b.backgroundImage,"gradient")},k.cssreflections=function(){return l("boxReflect")},k.csstransforms=function(){return!!l("transform")},k.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in g.style&&F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},k.csstransitions=function(){return l("transition")},k.fontface=function(){var e;return F('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},k.generatedcontent=function(){var e;return F(["#",v,"{font:0/0 a}#",v,':after{content:"',w,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},k.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},k.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},k.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},k.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},k.webworkers=function(){return!!e.Worker},k.applicationcache=function(){return!!e.applicationCache},k.svg=function(){return!!t.createElementNS&&!!t.createElementNS(C.svg,"svg").createSVGRect},k.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==C.svg},k.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(E.call(t.createElementNS(C.svg,"animate")))},k.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(E.call(t.createElementNS(C.svg,"clipPath")))};for(var D in k)f(k,D)&&(d=D.toLowerCase(),m[d]=k[D](),A.push((m[d]?"":"no-")+d));return m.input||u(),m.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&m.addTest(r,e[r]);else{if(e=e.toLowerCase(),m[e]!==n)return m;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(g.className+=" "+(t?"":"no-")+e),m[e]=t}return m},r(""),y=x=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function i(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||p.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),s=c.length;s>a;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function s(e){e||(e=t);var r=o(e);return y.shivCSS&&!l&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||c(e,r),e}var l,u,d="3.7.0",f=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,u=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:u,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:s,createElement:i,createDocumentFragment:a};e.html5=y,s(t)}(this,t),m._version=p,m._prefixes=z,m._domPrefixes=T,m._cssomPrefixes=S,m.mq=L,m.hasEvent=O,m.testProp=function(e){return c([e])},m.testAllProps=l,m.testStyles=F,m.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+A.join(" "):""),m}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=v.shift();y=1,e?e.t?m(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):y=0}function s(e,n,r,o,i,s,l){function u(t){if(!p&&a(d.readyState)&&(b.r=p=1,!y&&c(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&m(function(){w.removeChild(d)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var l=l||f.errorTimeout,d=t.createElement(e),p=0,g=0,b={t:r,s:n,e:i,a:s,x:l};1===T[n]&&(g=1,T[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},v.splice(o,0,b),"img"!=e&&(g||2===T[n]?(w.insertBefore(d,x?null:h),m(u,l)):T[n].push(d))}function l(e,t,n,r,i){return y=0,t=t||"j",o(e)?s("c"==t?z:E,e,t,this.i++,n,r,i):(v.splice(this.i++,0,e),1==v.length&&c()),this}function u(){var e=f;return e.loader={load:l,i:0},e}var d,f,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in p.style,x=b&&!!t.createRange().compareNode,w=x?p:h.parentNode,p=e.opera&&"[object Opera]"==g.call(e.opera),p=!!t.attachEvent&&!p,E=b?"object":p?"script":"img",z=p?"script":E,M=Array.isArray||function(e){return"[object Array]"==g.call(e)},S=[],T={},C={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,r,e=e.split("!"),o=S.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=C[r.shift()])&&(i=t(i,r));for(n=0;o>n;n++)i=S[n](i);return i}function a(e,o,i,a,c){var s=t(e),l=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),s.instead?s.instead(e,o,i,a,c):(T[s.url]?s.noexec=!0:T[s.url]=1,i.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(r(o)||r(l))&&i.load(function(){u(),o&&o(s.origUrl,c,a),l&&l(s.origUrl,c,a),T[s.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}),a(e,d,t,0,l);else if(Object(e)===e)for(s in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(s)&&(!n&&!--c&&(r(d)?d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}:d[s]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(f[s])),a(e[s],d,t,s,l))}else!n&&p()}var c,s,l=!!e.test,u=e.load||e.both,d=e.callback||i,f=d,p=e.complete||i;n(l?e.yep:e.nope,!!u),u&&n(u)}var s,l,d=this.yepnope.loader;if(o(e))a(e,0,d,0);else if(M(e))for(s=0;s<e.length;s++)l=e[s],o(l)?a(l,0,d,0):M(l)?f(l):Object(l)===l&&c(l,d);else Object(e)===e&&c(e,d)},f.addPrefix=function(e,t){C[e]=t},f.addFilter=function(e){S.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,s,l){var u,d,p=t.createElement("script"),o=o||f.errorTimeout;p.src=e;for(d in r)p.setAttribute(d,r[d]);n=l?c:n||i,p.onreadystatechange=p.onload=function(){!u&&a(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},m(function(){u||(u=1,n(1))},o),s?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,o,a,s){var l,o=t.createElement("link"),n=s?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in r)o.setAttribute(l,r[l]);a||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("adownload","download"in document.createElement("a")),Modernizr.testStyles("#modernizr{background-size:cover}",function(e){var t=window.getComputedStyle?window.getComputedStyle(e,null):e.currentStyle;Modernizr.addTest("bgsizecover","cover"==t.backgroundSize)}),Modernizr.addTest("boxsizing",function(){return Modernizr.testAllProps("boxSizing")&&(void 0===document.documentMode||document.documentMode>7)}),Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=document.createElement("div");return n.style.cssText=e+Modernizr._prefixes.join(t+e),!!n.style.length}),Modernizr.addTest("cubicbezierrange",function(){var e=document.createElement("div");return e.style.cssText=Modernizr._prefixes.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!e.style.length}),Modernizr.addTest("cssfilters",function(){var e=document.createElement("div");return e.style.cssText=Modernizr._prefixes.join("filter:blur(2px); "),!!e.style.length&&(void 0===document.documentMode||document.documentMode>9)}),Modernizr.addTest("lastchild",function(){return Modernizr.testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){return e.lastChild.offsetWidth>e.firstChild.offsetWidth},2)}),Modernizr.addTest("mediaqueries",Modernizr.mq("only all")),Modernizr.addTest("overflowscrolling",function(){return Modernizr.testAllProps("overflowScrolling")}),Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=document.createElement("modernizr"),r=n.style;return r.cssText=e+Modernizr._prefixes.join(t+";"+e).slice(0,-e.length),-1!==r.position.indexOf(t)}),Modernizr.addTest("regions",function(){var e=Modernizr.prefixed("flowFrom"),t=Modernizr.prefixed("flowInto");if(!e||!t)return!1;var n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),i="modernizr_flow_for_regions_check";r.innerText="M",n.style.cssText="top: 150px; left: 150px; padding: 0px;",o.style.cssText="width: 50px; height: 50px; padding: 42px;",o.style[e]=i,n.appendChild(r),n.appendChild(o),document.documentElement.appendChild(n);var a,c,s=r.getBoundingClientRect();return r.style[t]=i,a=r.getBoundingClientRect(),c=a.left-s.left,document.documentElement.removeChild(n),r=o=n=void 0,42==c}),Modernizr.addTest("cssresize",Modernizr.testAllProps("resize")),Modernizr.addTest("cssscrollbar",function(){var e,t="#modernizr{overflow: scroll; width: 40px }#"+Modernizr._prefixes.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}";return Modernizr.testStyles(t,function(t){e="scrollWidth"in t&&40==t.scrollWidth}),e}),Modernizr.addTest("shapes",Modernizr.testAllProps("shapeOutside","content-box",!0)),Modernizr.addTest("subpixelfont",function(){var e,t="#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}";return Modernizr.testStyles(t,function(t){var n=t.firstChild;n.innerHTML="This is a text written in Arial",e=window.getComputedStyle?"44px"!==window.getComputedStyle(n,null).getPropertyValue("width"):!1},1,["subpixel"]),e}),Modernizr.addTest("supports","CSSSupportsRule"in window),Modernizr.addTest("userselect",function(){return Modernizr.testAllProps("user-select")}),Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&7===document.documentMode}),Modernizr.addTest("svgfilters",function(){var e=!1;try{e=void 0!==typeof SVGFEColorMatrixElement&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(t){}return e});
/** @preserve
 *
 * slippry v1.2.7 - Responsive content slider for jQuery
 * http://slippry.com
 *
 * Authors: Lukas Jakob Hafner - @saftsaak
 *          Thomas Hurd - @SeenNotHurd
 *
 * Copyright 2014, booncon oy - http://booncon.com
 *
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */

(function ($) {
  "use strict";
  var defaults;

  defaults = {
    // general elements & wrapper
    slippryWrapper: '<div class="sy-box" />', // wrapper to wrap everything, including pager
    slideWrapper: '<div class="sy-slides-wrap" />', // wrapper to wrap sildes & controls
    slideCrop: '<div class="sy-slides-crop" />', //additional wrapper around just the slides
    boxClass: 'sy-list', // class that goes to original element
    elements: 'li', // elments cointaining slide content
    activeClass: 'sy-active', // class for current slide
    fillerClass: 'sy-filler', // class for element that acts as intrinsic placholder
    loadingClass: 'sy-loading',

    // options
    adaptiveHeight: true, // height of the sliders adapts to current slide
    start: 1, // num (starting from 1), random
    loop: true, // first -> last & last -> first arrows
    captionsSrc: 'img', // img, el [img takes caption from alt or title, el from title of slide element]
    captions: 'overlay', // Position: overlay, below, custom, false
    captionsEl: '.sy-caption', // $ selector for captions wrapper
    initSingle: true, // initialise even if there is only one slide
    responsive: true,
    preload: 'visible', // visible, all | resources to wait for until showing slider

    // pager
    pager: true,
    pagerClass: 'sy-pager',

    // controls
    controls: true,
    controlClass: 'sy-controls',
    prevClass: 'sy-prev',
    prevText: 'Previous',
    nextClass: 'sy-next',
    nextText: 'Next',
    hideOnEnd: true,

    // transitions
    transition: 'fade', // fade, horizontal, vertical, kenburns, false
    kenZoom: 120, // max zoom for kenburns (in %)
    slideMargin: 0, // spacing between slides (in %)
    transClass: 'transition', // [Class applied to [element] while a transition is taking place.]
    speed: 800, // time the transition takes (ms)
    easing: 'swing', // easing to use in the animation [(see... [jquery www])]
    continuous: true, // seamless first/ last transistion, only works with loop
    useCSS: true, // true, false -> fallback to js if no browser support

    //slideshow
    auto: true,
    autoDirection: 'next',
    autoHover: true,
    autoHoverDelay: 100,
    autoDelay: 500,
    pause: 4000,

    // callback functions
    onSliderLoad: function () { // when slider loaded
      return this;
    },
    onSlideBefore: function () { // before page transition starts
      return this;
    },
    onSlideAfter: function () {  // after page transition happened
      return this;
    }
  };

  $.fn.slippry = function (options) {
    var slip, el, prepareFiller, getFillerProportions, init, updateCaption, initPager, initControls, ready, transitionDone, whichTransitionEvent,
      initCaptions, updatePager, setFillerProportions, doTransition, updateSlide, openSlide, updateControls, updatePos, supports, preload, start, elFromSel, doKens;

    // reference to the object calling the function
    el = this;

    // if no elements just stop
    if (el.length === 0) {
      return this;
    }
    // support mutltiple elements
    if (el.length > 1) {
      el.each(function () {
        $(this).slippry(options);
      });
      return this;
    }

    // variable to access the slider settings across the plugin
    slip = {};
    slip.vars = {};

    whichTransitionEvent = function () { // Thanks! http://stackoverflow.com/a/18672988
      var t, div, transitions;
      div = document.createElement('div');
      transitions = {
        'WebkitTransition' : 'webkitTransitionEnd',
        'MozTransition'    : 'transitionend',
        'MSTransition'     : 'msTransitionEnd',
        'OTransition'      : 'oTransitionEnd',
        'transition'       : 'transitionEnd transitionend'
      };
      for (t in transitions) {
        if (div.style[t] !== undefined) {
          return transitions[t];
        }
      }
    };

    supports = (function () {  // Thanks! http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-detect-css-support-in-browsers-with-javascript/
      var div = document.createElement('div'),
        vendors = ['Khtml', 'Ms', 'O', 'Moz', 'Webkit'],
        len = vendors.length;
      return function (prop) {
        if (prop in div.style) {
          return true;
        }
        prop = prop.replace(/^[a-z]/, function (val) {
          return val.toUpperCase();
        });
        while (len--) {
          if (vendors[len] + prop in div.style) {
            return true;
          }
        }
        return false;
      };
    }());

    elFromSel = function (sel, prop) {
      var props, newelement, id, className;
      props = prop.split('.');
      newelement = $(sel);
      id = '';
      className = '';
      $.each(props, function (i, val) {
        if (val.indexOf('#') >= 0) {
          id += val.replace(/^#/, '');
        } else {
          className += val + ' ';
        }
      });
      if (id.length) {
        newelement.attr('id', id);
      }
      if (className.length) {
        newelement.attr('class', $.trim(className));
      }
      return newelement;
    };

    doKens = function () {
      var kenStart, kenTime, animProp, cssProp;
      animProp = {};
      cssProp = {};
      kenStart = 100 - slip.settings.kenZoom;
      cssProp.width = slip.settings.kenZoom + '%';
      if (slip.vars.active.index() % 2 === 0) {
        cssProp.left = kenStart + '%';
        cssProp.top = kenStart + '%';
        animProp.left = '0%';
        animProp.top = '0%';
      } else {
        cssProp.left = '0%';
        cssProp.top = '0%';
        animProp.left = kenStart + '%';
        animProp.top = kenStart + '%';
      }
      kenTime = slip.settings.pause + slip.settings.speed * 2;
      slip.vars.active.css(cssProp);
      slip.vars.active.animate(animProp, {duration: kenTime, easing: slip.settings.easing, queue: false});
    };

    ready = function () {
      if (slip.vars.fresh) {
        slip.vars.slippryWrapper.removeClass(slip.settings.loadingClass);
        slip.vars.fresh = false;
        if (slip.settings.auto) {
          el.startAuto();
        }
        if (!slip.settings.useCSS && slip.settings.transition === 'kenburns') {
          doKens();
        }
        slip.settings.onSliderLoad.call(undefined, slip.vars.active.index());
      } else {
        $('.' + slip.settings.fillerClass, slip.vars.slideWrapper).addClass('ready');
      }
    };

    setFillerProportions = function (width, height) {
      var ratio, p_top, $filler;
      ratio = width / height;
      p_top = 1 / ratio * 100 + '%';  //cool intrinsic trick: http://alistapart.com/article/creating-intrinsic-ratios-for-video
      $filler = $('.' + slip.settings.fillerClass, slip.vars.slideWrapper);
      $filler.css({paddingTop: p_top}); // resizing without the need of js, true responsiveness :)
      ready();
    };

    // gets the aspect ratio of the filler element
    getFillerProportions = function ($slide) {
      var width, height;
      if (($('img', $slide).attr("src") !== undefined)) {
        $("<img />").load(function () {
          width = $slide.width();
          height = $slide.height();
          setFillerProportions(width, height);
        }).attr("src", $('img', $slide).attr("src"));
      } else {
        width = $slide.width();
        height = $slide.height();
        setFillerProportions(width, height);
      }
    };

    // prepares a div to occupy the needed space
    prepareFiller = function () {
      if ($('.' + slip.settings.fillerClass, slip.vars.slideWrapper).length === 0) {
        slip.vars.slideWrapper.append($('<div class="' + slip.settings.fillerClass + '" />'));
      }
      if (slip.settings.adaptiveHeight === true) {  // if the slides shoud alwas adapt to their content
        getFillerProportions($('.' + slip.settings.activeClass, el));  // set the filler height on the active element
      } else {  // otherwise get the highest element
        var $highest, height, loop;
        height = 0;
        loop = 0;
        $(slip.vars.slides).each(function () {
          if ($(this).height() > height) {
            $highest = $(this);
            height = $highest.height();
          }
          loop = loop + 1;
          if (loop === slip.vars.count) {
            if ($highest === undefined) {
              $highest = $($(slip.vars.slides)[0]);
            }
            getFillerProportions($highest);
          }
        });
      }
    };

    updatePager = function () {
      if (slip.settings.pager) {
        $('.' + slip.settings.pagerClass + ' li', slip.vars.slippryWrapper).removeClass(slip.settings.activeClass);
        $($('.' + slip.settings.pagerClass + ' li', slip.vars.slippryWrapper)[slip.vars.active.index()]).addClass(slip.settings.activeClass);
      }
    };

    updateControls = function () {
      if (!slip.settings.loop && slip.settings.hideOnEnd) {
        $('.' + slip.settings.prevClass, slip.vars.slippryWrapper)[slip.vars.first ? 'hide' : 'show']();
        $('.' + slip.settings.nextClass, slip.vars.slippryWrapper)[slip.vars.last ? 'hide' : 'show']();
      }
    };

    updateCaption = function () {
      var caption, wrapper;
      if (slip.settings.captions !== false) {
        if (slip.settings.captionsSrc !== 'img') {
          caption = slip.vars.active.attr('title');
        } else {
          caption = $('img', slip.vars.active).attr('title') !== undefined ? $('img', slip.vars.active).attr('title') : $('img', slip.vars.active).attr('alt');
        }
        if (slip.settings.captions !== 'custom') {
          wrapper = $(slip.settings.captionsEl, slip.vars.slippryWrapper);
        } else {
          wrapper = $(slip.settings.captionsEl);
        }
        if ((caption !== undefined) && (caption !== '')) {
          wrapper.html(caption).show();
        } else {
          wrapper.hide();
        }
      }
    };

    el.startAuto = function () {
      if ((slip.vars.timer === undefined) && (slip.vars.delay === undefined)) {
        slip.vars.delay = window.setTimeout(function () {
          slip.vars.autodelay = false;
          slip.vars.timer = window.setInterval(function () {
            slip.vars.trigger = 'auto';
            openSlide(slip.settings.autoDirection);
          }, slip.settings.pause);
        }, slip.vars.autodelay ? slip.settings.autoHoverDelay : slip.settings.autoDelay);
        if (slip.settings.autoHover) {
          slip.vars.slideWrapper.unbind('mouseenter').unbind('mouseleave').bind('mouseenter', function () {
            if (slip.vars.timer !== undefined) {
              slip.vars.hoverStop = true;
              el.stopAuto();
            } else {
              slip.vars.hoverStop = false;
            }
          }).bind('mouseleave', function () {
            if (slip.vars.hoverStop) {
              slip.vars.autodelay = true;
              el.startAuto();
            }
          });
        }
      }
    };

    el.stopAuto = function () {
      window.clearInterval(slip.vars.timer);
      slip.vars.timer = undefined;
      window.clearTimeout(slip.vars.delay);
      slip.vars.delay = undefined;
    };

    // refreshes the already initialised slider
    el.refresh = function () {
      slip.vars.slides.removeClass(slip.settings.activeClass);
      slip.vars.active.addClass(slip.settings.activeClass);
      if (slip.settings.responsive) {
        prepareFiller();
      } else {
        ready();
      }
      updateControls();
      updatePager();
      updateCaption();
    };

    updateSlide = function () {
      el.refresh();
    };

    transitionDone = function () {
      slip.vars.moving = false;
      slip.vars.active.removeClass(slip.settings.transClass);
      if (!slip.vars.fresh) {
        slip.vars.old.removeClass('sy-ken');
      }
      slip.vars.old.removeClass(slip.settings.transClass);
      slip.settings.onSlideAfter.call(undefined, slip.vars.active, slip.vars.old.index(), slip.vars.active.index());
      if (slip.settings.auto) {
        if (!slip.vars.hoverStop || slip.vars.hoverStop === undefined){
          el.startAuto();
        }
      }
    };

    doTransition = function () {
      var pos, jump, old_left, old_pos, kenTime, ref, cssProp;
      slip.settings.onSlideBefore.call(undefined, slip.vars.active, slip.vars.old.index(), slip.vars.active.index());
      if (slip.settings.transition !== false) {
        slip.vars.moving = true;
        if ((slip.settings.transition === 'fade') || (slip.settings.transition === 'kenburns')) {
          if (slip.vars.fresh) {
            if (slip.settings.useCSS) {
              slip.vars.slides.css({transitionDuration: slip.settings.speed + 'ms', opacity: 0});
            } else {
              slip.vars.slides.css({opacity: 0});
            }
            slip.vars.active.css('opacity', 1);
            if (slip.settings.transition === 'kenburns') {
              if (slip.settings.useCSS) {
                kenTime = slip.settings.pause + slip.settings.speed * 2;
                slip.vars.slides.css({animationDuration: kenTime + 'ms'});
                slip.vars.active.addClass('sy-ken');
              }
            }
            transitionDone();
          } else {
            if (slip.settings.useCSS) {
              slip.vars.old.addClass(slip.settings.transClass).css('opacity', 0);
              slip.vars.active.addClass(slip.settings.transClass).css('opacity', 1);
              if (slip.settings.transition === 'kenburns') {
                slip.vars.active.addClass('sy-ken');
              }
              $(window).off('focus').on('focus', function () { // bugfix for safari 7 which doesn't always trigger ontransitionend when switching tab
                if (slip.vars.moving) {
                  slip.vars.old.trigger(slip.vars.transition);
                }
              });
              slip.vars.old.one(slip.vars.transition, function () {
                transitionDone();
                return this;
              });
            } else {
              if (slip.settings.transition === 'kenburns') {
                doKens();
              }
              slip.vars.old.addClass(slip.settings.transClass).animate({
                opacity: 0
              }, slip.settings.speed, slip.settings.easing, function () {
                transitionDone();
              });
              slip.vars.active.addClass(slip.settings.transClass).css('opacity', 0).animate({
                opacity: 1
              }, slip.settings.speed, slip.settings.easing);
            }
          }
          updateSlide();
        } else if ((slip.settings.transition === 'horizontal') || (slip.settings.transition === 'vertical')) {
          ref = (slip.settings.transition === 'horizontal') ? 'left' : 'top';
          pos = '-' + slip.vars.active.index() * (100 + slip.settings.slideMargin) + '%';
          if (slip.vars.fresh) {
            el.css(ref, pos);
            transitionDone();
          } else {
            cssProp = {};
            if (slip.settings.continuous) {
              if (slip.vars.jump && ((slip.vars.trigger === 'controls') || (slip.vars.trigger === 'auto'))) {
                jump = true;
                old_pos = pos;
                if (slip.vars.first) {
                  old_left = 0;
                  slip.vars.active.css(ref, slip.vars.count * (100 + slip.settings.slideMargin) + '%');
                  pos = '-' + slip.vars.count * (100 + slip.settings.slideMargin) + '%';
                } else {
                  old_left = (slip.vars.count - 1) * (100 + slip.settings.slideMargin) + '%';
                  slip.vars.active.css(ref, -(100 + slip.settings.slideMargin) + '%');
                  pos = (100 + slip.settings.slideMargin) + '%';
                }
              }
            }
            slip.vars.active.addClass(slip.settings.transClass);
            if (slip.settings.useCSS) {
              cssProp[ref] = pos;
              cssProp.transitionDuration = slip.settings.speed + 'ms';
              el.addClass(slip.settings.transition);
              el.css(cssProp);
              $(window).off('focus').on('focus', function () { // bugfix for safari 7 which doesn't always trigger ontransitionend when switching tab
                if (slip.vars.moving) {
                  el.trigger(slip.vars.transition);
                }
              });
              el.one(slip.vars.transition, function () {
                el.removeClass(slip.settings.transition);
                if (jump) {
                  slip.vars.active.css(ref, old_left);
                  cssProp[ref] = old_pos;
                  cssProp.transitionDuration = '0ms';
                  el.css(cssProp);
                }
                transitionDone();
                return this;
              });
            } else {
              cssProp[ref] = pos;
              el.stop().animate(cssProp, slip.settings.speed, slip.settings.easing, function () {
                if (jump) {
                  slip.vars.active.css(ref, old_left);
                  el.css(ref, old_pos);
                }
                transitionDone();
                return this;
              });
            }
          }
          updateSlide();
        }
      } else {
        updateSlide();
        transitionDone();
      }
    };

    updatePos = function (slide) {
      slip.vars.first = slip.vars.last = false;
      if ((slide === 'prev') || (slide === 0)) {
        slip.vars.first = true;
      } else if ((slide === 'next') || (slide === slip.vars.count - 1)) {
        slip.vars.last = true;
      }
    };

    openSlide = function (slide) {
      var current;
      if (!slip.vars.moving) {
        if (slip.vars.trigger !== 'auto') {
          el.stopAuto();
        }
        current = slip.vars.active.index();
        if (slide === 'prev') {
          if (current > 0) {
            slide = current - 1;
          } else if (slip.settings.loop) {
            slide = slip.vars.count - 1;
          }
        } else if (slide === 'next') {
          if (current < slip.vars.count - 1) {
            slide = current + 1;
          } else if (slip.settings.loop) {
            slide = 0;
          }
        } else {
          slide = slide - 1;
        }
        slip.vars.jump = false;
        if ((slide !== 'prev') && (slide !== 'next') && ((slide !== current) || (slip.vars.fresh))) {
          updatePos(slide);
          slip.vars.old = slip.vars.active;
          slip.vars.active = $(slip.vars.slides[slide]);
          if (((current === 0) && (slide === slip.vars.count - 1)) || ((current === slip.vars.count - 1) && (slide === 0))) {
            slip.vars.jump = true;
          }
          doTransition();
        }
      }
    };

    el.goToSlide = function (slide) {
      slip.vars.trigger = 'external';
      openSlide(slide);
    };

    el.goToNextSlide = function () {
      slip.vars.trigger = 'external';
      openSlide('next');
    };

    el.goToPrevSlide = function () {
      slip.vars.trigger = 'external';
      openSlide('prev');
    };

    initPager = function () {
      if ((slip.settings.pager) && (slip.vars.count > 1)) {
        var count, loop, pager;
        count = slip.vars.slides.length;
        pager = $('<ul class="' + slip.settings.pagerClass + '" />');
        for (loop = 1; loop < count + 1; loop = loop + 1) {
          pager.append($('<li />').append($('<a href="#' + loop + '">' + loop + '</a>')));
        }
        slip.vars.slippryWrapper.append(pager);
        $('.' + slip.settings.pagerClass + ' a', slip.vars.slippryWrapper).click(function () {
          slip.vars.trigger = 'pager';
          openSlide(parseInt(this.hash.split('#')[1], 10));
          return false;
        });
        updatePager();
      }
    };

    initControls = function () {
      if ((slip.settings.controls) && (slip.vars.count > 1)) {
        slip.vars.slideWrapper.append(
          $('<ul class="' + slip.settings.controlClass + '" />')
            .append('<li class="' + slip.settings.prevClass + '"><a href="#prev">' + slip.settings.prevText + '</a></li>')
            .append('<li class="' + slip.settings.nextClass + '"><a href="#next">' + slip.settings.nextText + '</a></li>')
        );
        $('.' + slip.settings.controlClass + ' a', slip.vars.slippryWrapper).click(function () {
          slip.vars.trigger = 'controls';
          openSlide(this.hash.split('#')[1]);
          return false;
        });
        updateControls();
      }
    };

    initCaptions = function () {
      if (slip.settings.captions !== false) {
        if (slip.settings.captions === 'overlay') {
          slip.vars.slideWrapper.append($('<div class="sy-caption-wrap" />').html(elFromSel('<div />', slip.settings.captionsEl)));
        } else if (slip.settings.captions === 'below') {
          slip.vars.slippryWrapper.append($('<div class="sy-caption-wrap" />').html(elFromSel('<div />', slip.settings.captionsEl)));
        }
      }
    };

    // actually show the first slide
    start = function () {
      openSlide(slip.vars.active.index() + 1);
    };

    // wait for images, iframes to be loaded
    preload = function (slides) {
      var count, loop, elements, container;
      container = (slip.settings.preload === 'all') ? slides : slip.vars.active;
      elements = $('img, iframe', container);
      count = elements.length;
      if (count === 0) {
        start();
        return;
      }
      loop = 0;
      elements.each(function () {
        $(this).one('load error', function () {
          if (++loop === count) {
            start();
          }
        }).each(function () {
          if (this.complete) {
            $(this).load();
          }
        });
      });
    };

    el.getCurrentSlide = function () {
      return slip.vars.active;
    };

    el.getSlideCount = function () {
      return slip.vars.count;
    };

    el.destroySlider = function () {
      if (slip.vars.fresh === false) {
        el.stopAuto();
        slip.vars.moving = false;
        slip.vars.slides.each(function () {
          if ($(this).data("sy-cssBckup") !== undefined) {
            $(this).attr("style", $(this).data("sy-cssBckup"));
          } else {
            $(this).removeAttr('style');
          }
          if ($(this).data("sy-classBckup") !== undefined) {
            $(this).attr("class", $(this).data("sy-classBckup"));
          } else {
            $(this).removeAttr('class');
          }
        });
        if (el.data("sy-cssBckup") !== undefined) {
          el.attr("style", el.data("sy-cssBckup"));
        } else {
          el.removeAttr('style');
        }
        if (el.data("sy-classBckup") !== undefined) {
          el.attr("class", el.data("sy-classBckup"));
        } else {
          el.removeAttr('class');
        }
        slip.vars.slippryWrapper.before(el);
        slip.vars.slippryWrapper.remove();
        slip.vars.fresh = undefined;
      }
    };

    el.reloadSlider = function () {
      el.destroySlider();
      init();
    };

    // initialises the slider, creates needed markup
    init = function () {
      var first;
      slip.settings = $.extend({}, defaults, options);
      slip.vars.slides = $(slip.settings.elements, el);
      slip.vars.count = slip.vars.slides.length;
      if (slip.settings.useCSS) { // deactivate css transitions on unsupported browsers
        if (!supports('transition')) {
          slip.settings.useCSS = false;
        }
        slip.vars.transition = whichTransitionEvent();
      }
      el.data('sy-cssBckup', el.attr('style'));
      el.data('sy-classBackup', el.attr('class'));
      el.addClass(slip.settings.boxClass).wrap(slip.settings.slippryWrapper).wrap(slip.settings.slideWrapper).wrap(slip.settings.slideCrop);
      slip.vars.slideWrapper = el.parent().parent();
      slip.vars.slippryWrapper = slip.vars.slideWrapper.parent().addClass(slip.settings.loadingClass);
      slip.vars.fresh = true;
      slip.vars.slides.each(function () {
        $(this).addClass('sy-slide ' + slip.settings.transition);
        if (slip.settings.useCSS) {
          $(this).addClass('useCSS');
        }
        if (slip.settings.transition === 'horizontal') {
          $(this).css('left', $(this).index() * (100 + slip.settings.slideMargin) + '%');
        } else if (slip.settings.transition === 'vertical') {
          $(this).css('top', $(this).index() * (100 + slip.settings.slideMargin) + '%');
        }
      });
      if ((slip.vars.count > 1) || (slip.settings.initSingle)) {
        if ($('.' + slip.settings.activeClass, el).index() === -1) {
          if (slip.settings.start === 'random') {
            first = Math.round(Math.random() * (slip.vars.count - 1));
          } else if (slip.settings.start > 0 && slip.settings.start <= slip.vars.count) {
            first = slip.settings.start - 1;
          } else {
            first = 0;
          }
          slip.vars.active = $(slip.vars.slides[first]).addClass(slip.settings.activeClass);
        } else {
          slip.vars.active = $('.' + slip.settings.activeClass, el);
        }
        initControls();
        initPager();
        initCaptions();
        preload(slip.vars.slides);
      } else {
        return this;
      }
    };

    init(); // on startup initialise the slider

    return this;
  };
}(jQuery));
$(function() {

    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
            .done(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
            })
            .fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });

    });

});
/*
 * Theme name: Dragonfly
 * Description: Additional scripts
 * Version: 1.5
 * Last update: September 6 2014
 * Author: Jiri Cermak
 * */

$(document).ready(function() {

    /*
     * ===================================
     * Back To Top
     * ===================================
     * */

    var offset = 220,
        duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });

    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    });


    /*
     * ===================================
     * Smooth scroll - from href to id
     * ===================================
     * */

    // Must add the class "scroll" to the link - <a href="#someID" class="scroll">
    $('a.scroll').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    /*
     * ===================================
     * Removing conflicts
     * ===================================
     * */

    // example: when click on filter menu, it will be removed class of loading animation

    $(".filter").on("click", function() {
        $(".hover-content").removeClass("easeUp easePulse switchOnTv wow animated");
    });



    /*
     * ===================================
     * Sidebar
     * ===================================
     * */


    /* close sidebar */
    $("#sidebar-close").click(function() {
        $(".sidebar-off").removeClass("sidebar-on");
    });
    $('html').click(function() {
        $(".sidebar-off").removeClass("sidebar-on");
    });

    $(".sidebar-off").click(function(event) {
        event.stopPropagation();
    });

    /* open sidebar */
    $("#sidebar-btn").on("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        $(".sidebar-off").toggleClass("sidebar-on");
    });



    /*
     * ===================================
     * Smooth scrolling
     * ===================================
     * */

    //not active for Internet Explorer (version 9 and 10), only for version 11 and higher
    var $noIE = $("html").hasClass("ie");
    if ($noIE) {
        $("#IEremove").remove();
        $("html").css({
            "overflow": "visible"
        });
    } else {

        //setting for smooth scrolling
        $("html").niceScroll({
            cursorcolor: "#999",
            cursorwidth: "8px",
            cursorborder: "none",
            cursorborderradius: "0px",
            scrollspeed: 60,
            mousescrollstep: 15 * 3,
            hwacceleration: true,
            background: "#ddd",
            preservenativescrolling: true,
            bouncescroll: true,
            spacebarenabled: true,
            disableoutline: true,
            smoothscroll: true,
            sensitiverail: true,
            hidecursordelay: 500,
            cursordragspeed: 0.3,
            zindex: 999999
        });
    }



    /*
     * ===================================
     * Style Switcher
     * ===================================
     * */


    //=== show/hide style-switcher by the class "active" ===//
    $(".switcher-icon").on("click", function() {
        $(".style-switcher").toggleClass("active");
    });


    //=== navigation settings ===//

    //dark, light or transparent
    var navbar = $("#navbarSettings"),
        navbarSpace = $("#navbarSpaceBottom");

    $("#navDark").click(function() {
        navbar.removeStyle("background-color");;
        navbar.removeClass("navbar-default navbar-trn").addClass("navbar-inverse");
        if (navbar.hasClass("navbar-fixed-top")) {
            navbarSpace.css({
                "height": "70px"
            });
        } else {
            navbarSpace.removeStyle("height");
        }
    });
    $("#navLight").click(function() {
        navbar.removeStyle("background-color");
        navbar.removeClass("navbar-inverse navbar-trn").addClass("navbar-default");
        if (navbar.hasClass("navbar-fixed-top")) {
            navbarSpace.css({
                "height": "70px"
            });
        } else {
            navbarSpace.removeStyle("height");
        }
    });
    $("#navTrn").click(function() {
        navbarSpace.removeStyle("height");
        navbar.removeClass("navbar-inverse navbar-default").addClass("navbar-trn");
    });


    // Fixed or relative position of navbar
    $("#navRelative").click(function() {
        navbar.removeClass("navbar-fixed-top");
        navbarSpace.removeStyle("height");
    });
    $("#navFixed").click(function() {
        if (navbar.hasClass("navbar-trn")) {
            navbarSpace.removeStyle("height");
        } else {
            navbarSpace.css({
                "height": "70px"
            });
        }
        navbar.addClass("navbar-fixed-top");
    });



    /*=== Colors Themes ===*/

    var $knobs = $("#GreenKnobs, #YellowKnobs, #RedKnobs, #LightBlueKnobs, #BlueKnobs");
    //gKnob = green knob - when you choose a color theme, this function will hide all other ID of the knobs

    $(".light-blue").on("click", function() {
        $("#colors").attr("href", "assets/css/themes/light-blue.css");
        $knobs.hide();
        $("#LightBlueKnobs").show();
        return false;
    });

    $(".blue").on("click", function() {
        $("#colors").attr("href", "assets/css/themes/blue.css");
        $knobs.hide();
        $("#BlueKnobs").show();
        return false;
    });
    $(".red").on("click", function() {
        $("#colors").attr("href", "assets/css/themes/red.css");
        $knobs.hide();
        $("#RedKnobs").show();
        return false;
    });
    $(".yellow").on("click", function() {
        $("#colors").attr("href", "assets/css/themes/yellow.css");
        $knobs.hide();
        $("#YellowKnobs").show();
        return false;
    });
    $(".green").on("click", function() {
        $("#colors").attr("href", "assets/css/themes/green.css");
        $knobs.hide();
        $("#GreenKnobs").show();
        return false;
    });

    /*=== Transparent navigation ===*/

    // add background color to transparent navbar after scrolling 90px
    $(window).scroll(function() {
        var $navbarTrn = $(".navbar-trn"),
            $nav = $(".navbar");
        if (navbar.hasClass("navbar-fixed-top")) {
            if ($(window).scrollTop() > 150) {
                $navbarTrn.css({
                    "background-color": "rgba(0, 0, 0, 0.8)"
                });
            } else {
                $navbarTrn.css({
                    "background-color": "transparent"
                });
            }
        } else {
            $navbarTrn.css({
                "background-color": "transparent"
            });
        }
        // add box-shadow
        if (navbar.hasClass("navbar-fixed-top")) {
            if ($(window).scrollTop() > 150) {
                $nav.css({
                    "box-shadow": "0 2px 5px rgba(0, 0, 0, 0.2)"
                });
            } else {
                $nav.css({
                    "box-shadow": "none"
                });
            }
        } else {
            $nav.css({
                "box-shadow": "none"
            });
        }
    });



    /*
     * ===================================
     * Settings for plugins
     * ===================================
     * */


    /*=== WOW - Loading animations ===*/
    new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false
    }).init();


    /*=== Mixitup - Filterable portfolio ===*/
    $('#Grid').mixitup();


    /*=== Slippry Slideshow in frame of Macbook Pro - using on Services III ===*/
    var thumbs = $('#mb-slideshow').slippry({
        // general elements & wrapper
        slideWrapper: '<div class="frame sy-slides-wrap" />',
        slippryWrapper: '<div class="slippry_box thumbnails" />',
        // options
        transition: 'horizontal',
        pager: false,
        auto: true,
        onSlideBefore: function(el, index_old, index_new) {
            $('.thumbs a img').removeClass('active');
            $('img', $('.thumbs a')[index_new]).addClass('active');
        }
    });

    $('.thumbs a').click(function() {
        thumbs.goToSlide($(this).data('slide'));
        return false;
    });


    /*=== Slippry Slideshow - using on the page About us I ===*/
    $('#slider-aboutUs').slippry({
        slideWrapper: '<div class="normal sy-slides-wrap" />',
        transition: 'fade',
        auto: true,
        useCSS: true,
        pause: 5000
    });


    /*=== Sticky - Make every elements sticky, just set a class or ID ===*/
    $(".sticker").sticky({
        topSpacing: 0
    });


    /*=== Knobs - our skills ===*/

    // Light Blue Knob
    $(".lbKnob").knob({
        fgColor: "#1eb9c1",
        min: 0,
        max: 100,
        step: 5,
        angleOffset: 0,
        angleArc: 360,
        stopper: true,
        readOnly: true,
        cursor: false,
        lineCap: 'none',
        thickness: '0.03',
        width: 150,
        displayInput: true,
        displayPrevious: true,
        inputColor: '#999999',
        font: 'Lato',
        fontWeight: 'normal',
        bgColor: '#EEEEEE',
        draw: function() {
            if (this.$.data('skin') == 'tron') {
                var a = this.angle(this.cv), // Angle

                    sa = this.startAngle, // Previous start angle

                    sat = this.startAngle, // Start angle

                    ea, // Previous end angle
                    eat = sat + a, // End angle

                    r = 1;
                this.g.lineWidth = this.lineWidth;
                this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);
                if (this.o.displayPrevious) {
                    ea = this.startAngle + this.angle(this.v);
                    this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
                    this.g.beginPath();
                    this.g.strokeStyle = this.pColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                    this.g.stroke();
                }
                this.g.beginPath();
                this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                this.g.stroke();
                this.g.lineWidth = 2;
                this.g.beginPath();
                this.g.strokeStyle = this.o.fgColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                this.g.stroke();
                return false;
            }

        }
    });

    //Blue Knob
    $(".bKnob").knob({
        fgColor: "#1a99aa",
        min: 0,
        max: 100,
        step: 5,
        angleOffset: 0,
        angleArc: 360,
        stopper: true,
        readOnly: true,
        cursor: false,
        lineCap: 'none',
        thickness: '0.03',
        width: 150,
        displayInput: true,
        displayPrevious: true,
        inputColor: '#999999',
        font: 'Lato',
        fontWeight: 'normal',
        bgColor: '#EEEEEE',
        draw: function() {
            if (this.$.data('skin') == 'tron') {
                var a = this.angle(this.cv), // Angle

                    sa = this.startAngle, // Previous start angle

                    sat = this.startAngle, // Start angle

                    ea, // Previous end angle
                    eat = sat + a, // End angle

                    r = 1;
                this.g.lineWidth = this.lineWidth;
                this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);
                if (this.o.displayPrevious) {
                    ea = this.startAngle + this.angle(this.v);
                    this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
                    this.g.beginPath();
                    this.g.strokeStyle = this.pColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                    this.g.stroke();
                }
                this.g.beginPath();
                this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                this.g.stroke();
                this.g.lineWidth = 2;
                this.g.beginPath();
                this.g.strokeStyle = this.o.fgColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                this.g.stroke();
                return false;
            }

        }
    });

    // Green Knob
    $(".gKnob").knob({
        fgColor: "#3c948b",
        min: 0,
        max: 100,
        step: 5,
        angleOffset: 0,
        angleArc: 360,
        stopper: true,
        readOnly: true,
        cursor: false,
        lineCap: 'none',
        thickness: '0.03',
        width: 150,
        displayInput: true,
        displayPrevious: true,
        inputColor: '#999999',
        font: 'Lato',
        fontWeight: 'normal',
        bgColor: '#EEEEEE',
        draw: function() {
            if (this.$.data('skin') == 'tron') {
                var a = this.angle(this.cv), // Angle

                    sa = this.startAngle, // Previous start angle

                    sat = this.startAngle, // Start angle

                    ea, // Previous end angle
                    eat = sat + a, // End angle

                    r = 1;
                this.g.lineWidth = this.lineWidth;
                this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);
                if (this.o.displayPrevious) {
                    ea = this.startAngle + this.angle(this.v);
                    this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
                    this.g.beginPath();
                    this.g.strokeStyle = this.pColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                    this.g.stroke();
                }
                this.g.beginPath();
                this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                this.g.stroke();
                this.g.lineWidth = 2;
                this.g.beginPath();
                this.g.strokeStyle = this.o.fgColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                this.g.stroke();
                return false;
            }

        }
    });

    // Red Knob
    $(".rKnob").knob({
        fgColor: "#df6c4f",
        min: 0,
        max: 100,
        step: 5,
        angleOffset: 0,
        angleArc: 360,
        stopper: true,
        readOnly: true,
        cursor: false,
        lineCap: 'none',
        thickness: '0.03',
        width: 150,
        displayInput: true,
        displayPrevious: true,
        inputColor: '#999999',
        font: 'Lato',
        fontWeight: 'normal',
        bgColor: '#EEEEEE',
        draw: function() {
            if (this.$.data('skin') == 'tron') {
                var a = this.angle(this.cv), // Angle

                    sa = this.startAngle, // Previous start angle

                    sat = this.startAngle, // Start angle

                    ea, // Previous end angle
                    eat = sat + a, // End angle

                    r = 1;
                this.g.lineWidth = this.lineWidth;
                this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);
                if (this.o.displayPrevious) {
                    ea = this.startAngle + this.angle(this.v);
                    this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
                    this.g.beginPath();
                    this.g.strokeStyle = this.pColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                    this.g.stroke();
                }
                this.g.beginPath();
                this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                this.g.stroke();
                this.g.lineWidth = 2;
                this.g.beginPath();
                this.g.strokeStyle = this.o.fgColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                this.g.stroke();
                return false;
            }

        }
    });

    // Yellow Knob
    $(".yKnob").knob({
        fgColor: "#ecd06f",
        min: 0,
        max: 100,
        step: 5,
        angleOffset: 0,
        angleArc: 360,
        stopper: true,
        readOnly: true,
        cursor: false,
        lineCap: 'none',
        thickness: '0.03',
        width: 150,
        displayInput: true,
        displayPrevious: true,
        inputColor: '#999999',
        font: 'Lato',
        fontWeight: 'normal',
        bgColor: '#EEEEEE',
        draw: function() {
            if (this.$.data('skin') == 'tron') {
                var a = this.angle(this.cv), // Angle

                    sa = this.startAngle, // Previous start angle

                    sat = this.startAngle, // Start angle

                    ea, // Previous end angle
                    eat = sat + a, // End angle

                    r = 1;
                this.g.lineWidth = this.lineWidth;
                this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);
                if (this.o.displayPrevious) {
                    ea = this.startAngle + this.angle(this.v);
                    this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
                    this.g.beginPath();
                    this.g.strokeStyle = this.pColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                    this.g.stroke();
                }
                this.g.beginPath();
                this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                this.g.stroke();
                this.g.lineWidth = 2;
                this.g.beginPath();
                this.g.strokeStyle = this.o.fgColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                this.g.stroke();
                return false;
            }

        }
    });
});