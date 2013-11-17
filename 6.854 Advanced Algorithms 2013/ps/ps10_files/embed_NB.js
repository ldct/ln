/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);
/*! jQuery UI - v1.9.2 - 2012-11-23
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.slider.js, jquery.ui.sortable.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().andSelf().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e(function(){var t=document.body,n=t.appendChild(n=document.createElement("div"));n.offsetHeight,e.extend(n.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=n.offsetHeight===100,e.support.selectstart="onselectstart"in n,t.removeChild(n).style.display="none"}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),function(){var t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];e.ui.ie=t.length?!0:!1,e.ui.ie6=parseFloat(t[1],10)===6}(),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},contains:e.contains,hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)},isOverAxis:function(e,t,n){return e>t&&e<t+n},isOver:function(t,n,r,i,s,o){return e.ui.isOverAxis(t,r,s)&&e.ui.isOverAxis(n,i,o)}})})(jQuery);(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a=t.split(".")[0];t=t.split(".")[1],i=a+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[a]=e[a]||{},s=e[a][t],o=e[a][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,i){e.isFunction(i)&&(r[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},r=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=r,s=i.apply(this,arguments),this._super=t,this._superApply=n,s}}())}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},r,{constructor:o,namespace:a,widgetName:t,widgetBaseClass:i,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetName,this),e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&(e.effects.effect[u]||e.uiBackCompat!==!1&&e.effects[u])?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}}),e.uiBackCompat!==!1&&(e.Widget.prototype._getCreateOptions=function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]})})(jQuery);(function(e,t){var n=!1;e(document).mouseup(function(e){n=!1}),e.widget("ui.mouse",{version:"1.9.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(t){return!e.ui.ie||document.documentMode>=9||!!t.button?this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted):this._mouseUp(t)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(e){return this.mouseDelayMet},_mouseStart:function(e){},_mouseDrag:function(e){},_mouseStop:function(e){},_mouseCapture:function(e){return!0}})})(jQuery);(function(e,t){function h(e,t,n){return[parseInt(e[0],10)*(l.test(e[0])?t/100:1),parseInt(e[1],10)*(l.test(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}e.ui=e.ui||{};var n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/,a=/[\+\-]\d+%?/,f=/^\w+/,l=/%$/,c=e.fn.position;e.position={scrollbarWidth:function(){if(n!==t)return n;var r,i,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return e("body").append(s),r=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,r===i&&(i=s[0].clientWidth),s.remove(),n=r-i},getScrollInfo:function(t){var n=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:i?e.position.scrollbarWidth():0,height:s?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]);return{element:n,isWindow:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r?n.width():n.outerWidth(),height:r?n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return c.apply(this,arguments);t=e.extend({},t);var n,l,d,v,m,g=e(t.of),y=e.position.getWithinInfo(t.within),b=e.position.getScrollInfo(y),w=g[0],E=(t.collision||"flip").split(" "),S={};return w.nodeType===9?(l=g.width(),d=g.height(),v={top:0,left:0}):e.isWindow(w)?(l=g.width(),d=g.height(),v={top:g.scrollTop(),left:g.scrollLeft()}):w.preventDefault?(t.at="left top",l=d=0,v={top:w.pageY,left:w.pageX}):(l=g.outerWidth(),d=g.outerHeight(),v=g.offset()),m=e.extend({},v),e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,r;e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center",n=a.exec(e[0]),r=a.exec(e[1]),S[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]}),E.length===1&&(E[1]=E[0]),t.at[0]==="right"?m.left+=l:t.at[0]==="center"&&(m.left+=l/2),t.at[1]==="bottom"?m.top+=d:t.at[1]==="center"&&(m.top+=d/2),n=h(S.at,l,d),m.left+=n[0],m.top+=n[1],this.each(function(){var o,u,a=e(this),f=a.outerWidth(),c=a.outerHeight(),w=p(this,"marginLeft"),x=p(this,"marginTop"),T=f+w+p(this,"marginRight")+b.width,N=c+x+p(this,"marginBottom")+b.height,C=e.extend({},m),k=h(S.my,a.outerWidth(),a.outerHeight());t.my[0]==="right"?C.left-=f:t.my[0]==="center"&&(C.left-=f/2),t.my[1]==="bottom"?C.top-=c:t.my[1]==="center"&&(C.top-=c/2),C.left+=k[0],C.top+=k[1],e.support.offsetFractions||(C.left=s(C.left),C.top=s(C.top)),o={marginLeft:w,marginTop:x},e.each(["left","top"],function(r,i){e.ui.position[E[r]]&&e.ui.position[E[r]][i](C,{targetWidth:l,targetHeight:d,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:T,collisionHeight:N,offset:[n[0]+k[0],n[1]+k[1]],my:t.my,at:t.at,within:y,elem:a})}),e.fn.bgiframe&&a.bgiframe(),t.using&&(u=function(e){var n=v.left-C.left,s=n+l-f,o=v.top-C.top,u=o+d-c,h={target:{element:g,left:v.left,top:v.top,width:l,height:d},element:{element:a,left:C.left,top:C.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};l<f&&i(n+s)<l&&(h.horizontal="center"),d<c&&i(o+u)<d&&(h.vertical="middle"),r(i(n),i(s))>r(i(o),i(u))?h.important="horizontal":h.important="vertical",t.using.call(this,e,h)}),a.offset(e.extend(C,{using:u}))})},e.ui.position={fit:{left:function(e,t){var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;t.collisionWidth>s?u>0&&a<=0?(f=e.left+u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)},top:function(e,t){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;t.collisionHeight>s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top)}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],p,d;if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a))e.left+=l+c+h}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||i(d)<f)e.left+=l+c+h}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,p=-2*t.offset[1],d,v;a<0?(v=e.top+c+h+p+t.collisionHeight-s-r,e.top+c+h+p>a&&(v<0||v<i(a))&&(e.top+=c+h+p)):f>0&&(d=e.top-t.collisionPosition.marginTop+c+h+p-o,e.top+c+h+p>f&&(d>0||i(d)<f)&&(e.top+=c+h+p))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,r,i,s,o=document.getElementsByTagName("body")[0],u=document.createElement("div");t=document.createElement(o?"div":"body"),r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&e.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in r)t.style[s]=r[s];t.appendChild(u),n=o||document.documentElement,n.insertBefore(t,n.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",i=e(u).offset().left,e.support.offsetFractions=i>10&&i<11,t.innerHTML="",n.removeChild(t)}(),e.uiBackCompat!==!1&&function(e){var n=e.fn.position;e.fn.position=function(r){if(!r||!r.offset)return n.call(this,r);var i=r.offset.split(" "),s=r.at.split(" ");return i.length===1&&(i[1]=i[0]),/^\d/.test(i[0])&&(i[0]="+"+i[0]),/^\d/.test(i[1])&&(i[1]="+"+i[1]),s.length===1&&(/left|center|right/.test(s[0])?s[1]="center":(s[1]=s[0],s[0]="center")),n.call(this,e.extend(r,{at:s[0]+i[0]+" "+s[1]+i[1],offset:t}))}}(jQuery)})(jQuery);(function(e,t){var n=0,r={},i={};r.height=r.paddingTop=r.paddingBottom=r.borderTopWidth=r.borderBottomWidth="hide",i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="show",e.widget("ui.accordion",{version:"1.9.2",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var t=this.accordionId="ui-accordion-"+(this.element.attr("id")||++n),r=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset"),this.headers=this.element.find(r.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this._hoverable(this.headers),this._focusable(this.headers),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(),!r.collapsible&&(r.active===!1||r.active==null)&&(r.active=0),r.active<0&&(r.active+=this.headers.length),this.active=this._findActive(r.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"),this.active.next().addClass("ui-accordion-content-active").show(),this._createIcons(),this.refresh(),this.element.attr("role","tablist"),this.headers.attr("role","tab").each(function(n){var r=e(this),i=r.attr("id"),s=r.next(),o=s.attr("id");i||(i=t+"-header-"+n,r.attr("id",i)),o||(o=t+"-panel-"+n,s.attr("id",o)),r.attr("aria-controls",o),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._on(this.headers,{keydown:"_keydown"}),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._setupEvents(r.event)},_getCreateEventData:function(){return{header:this.active,content:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this.options.heightStyle!=="content"&&e.css("height","")},_setOption:function(e,t){if(e==="active"){this._activate(t);return}e==="event"&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),e==="collapsible"&&!t&&this.options.active===!1&&this._activate(0),e==="icons"&&(this._destroyIcons(),t&&this._createIcons()),e==="disabled"&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)},_keydown:function(t){if(t.altKey||t.ctrlKey)return;var n=e.ui.keyCode,r=this.headers.length,i=this.headers.index(t.target),s=!1;switch(t.keyCode){case n.RIGHT:case n.DOWN:s=this.headers[(i+1)%r];break;case n.LEFT:case n.UP:s=this.headers[(i-1+r)%r];break;case n.SPACE:case n.ENTER:this._eventHandler(t);break;case n.HOME:s=this.headers[0];break;case n.END:s=this.headers[r-1]}s&&(e(t.target).attr("tabIndex",-1),e(s).attr("tabIndex",0),s.focus(),t.preventDefault())},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t,n,r=this.options.heightStyle,i=this.element.parent();r==="fill"?(e.support.minHeight||(n=i.css("overflow"),i.css("overflow","hidden")),t=i.height(),this.element.siblings(":visible").each(function(){var n=e(this),r=n.css("position");if(r==="absolute"||r==="fixed")return;t-=n.outerHeight(!0)}),n&&i.css("overflow",n),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):r==="auto"&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var n=this._findActive(t)[0];if(n===this.active[0])return;n=n||this.active[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return typeof t=="number"?this.headers.eq(t):e()},_setupEvents:function(t){var n={};if(!t)return;e.each(t.split(" "),function(e,t){n[t]="_eventHandler"}),this._on(this.headers,n)},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i[0]===r[0],o=s&&n.collapsible,u=o?e():i.next(),a=r.next(),f={oldHeader:r,oldPanel:a,newHeader:o?e():i,newPanel:u};t.preventDefault();if(s&&!n.collapsible||this._trigger("beforeActivate",t,f)===!1)return;n.active=o?!1:this.headers.index(i),this.active=s?e():i,this._toggle(f),r.removeClass("ui-accordion-header-active ui-state-active"),n.icons&&r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header),s||(i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),n.icons&&i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader),i.next().addClass("ui-accordion-content-active"))},_toggle:function(t){var n=t.newPanel,r=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=n,this.prevHide=r,this.options.animate?this._animate(n,r,t):(r.hide(),n.show(),this._toggleComplete(t)),r.attr({"aria-expanded":"false","aria-hidden":"true"}),r.prev().attr("aria-selected","false"),n.length&&r.length?r.prev().attr("tabIndex",-1):n.length&&this.headers.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),n.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(e,t,n){var s,o,u,a=this,f=0,l=e.length&&(!t.length||e.index()<t.index()),c=this.options.animate||{},h=l&&c.down||c,p=function(){a._toggleComplete(n)};typeof h=="number"&&(u=h),typeof h=="string"&&(o=h),o=o||h.easing||c.easing,u=u||h.duration||c.duration;if(!t.length)return e.animate(i,u,o,p);if(!e.length)return t.animate(r,u,o,p);s=e.show().outerHeight(),t.animate(r,{duration:u,easing:o,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(i,{duration:u,easing:o,complete:p,step:function(e,n){n.now=Math.round(e),n.prop!=="height"?f+=n.now:a.options.heightStyle!=="content"&&(n.now=Math.round(s-t.outerHeight()-f),f=0)}})},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}}),e.uiBackCompat!==!1&&(function(e,t){e.extend(t.options,{navigation:!1,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}});var n=t._create;t._create=function(){if(this.options.navigation){var t=this,r=this.element.find(this.options.header),i=r.next(),s=r.add(i).find("a").filter(this.options.navigationFilter)[0];s&&r.add(i).each(function(n){if(e.contains(this,s))return t.options.active=Math.floor(n/2),!1})}n.call(this)}}(jQuery,jQuery.ui.accordion.prototype),function(e,t){e.extend(t.options,{heightStyle:null,autoHeight:!0,clearStyle:!1,fillSpace:!1});var n=t._create,r=t._setOption;e.extend(t,{_create:function(){this.options.heightStyle=this.options.heightStyle||this._mergeHeightStyle(),n.call(this)},_setOption:function(e){if(e==="autoHeight"||e==="clearStyle"||e==="fillSpace")this.options.heightStyle=this._mergeHeightStyle();r.apply(this,arguments)},_mergeHeightStyle:function(){var e=this.options;if(e.fillSpace)return"fill";if(e.clearStyle)return"content";if(e.autoHeight)return"auto"}})}(jQuery,jQuery.ui.accordion.prototype),function(e,t){e.extend(t.options.icons,{activeHeader:null,headerSelected:"ui-icon-triangle-1-s"});var n=t._createIcons;t._createIcons=function(){this.options.icons&&(this.options.icons.activeHeader=this.options.icons.activeHeader||this.options.icons.headerSelected),n.call(this)}}(jQuery,jQuery.ui.accordion.prototype),function(e,t){t.activate=t._activate;var n=t._findActive;t._findActive=function(e){return e===-1&&(e=!1),e&&typeof e!="number"&&(e=this.headers.index(this.headers.filter(e)),e===-1&&(e=!1)),n.call(this,e)}}(jQuery,jQuery.ui.accordion.prototype),jQuery.ui.accordion.prototype.resize=jQuery.ui.accordion.prototype.refresh,function(e,t){e.extend(t.options,{change:null,changestart:null});var n=t._trigger;t._trigger=function(e,t,r){var i=n.apply(this,arguments);return i?(e==="beforeActivate"?i=n.call(this,"changestart",t,{oldHeader:r.oldHeader,oldContent:r.oldPanel,newHeader:r.newHeader,newContent:r.newPanel}):e==="activate"&&(i=n.call(this,"change",t,{oldHeader:r.oldHeader,oldContent:r.oldPanel,newHeader:r.newHeader,newContent:r.newPanel})),i):!1}}(jQuery,jQuery.ui.accordion.prototype),function(e,t){e.extend(t.options,{animate:null,animated:"slide"});var n=t._create;t._create=function(){var e=this.options;e.animate===null&&(e.animated?e.animated==="slide"?e.animate=300:e.animated==="bounceslide"?e.animate={duration:200,down:{easing:"easeOutBounce",duration:1e3}}:e.animate=e.animated:e.animate=!1),n.call(this)}}(jQuery,jQuery.ui.accordion.prototype))})(jQuery);(function(e,t){var n=0;e.widget("ui.autocomplete",{version:"1.9.2",defaultElement:"<input>",options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var t,n,r;this.isMultiLine=this._isMultiLine(),this.valueMethod=this.element[this.element.is("input,textarea")?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(i){if(this.element.prop("readOnly")){t=!0,r=!0,n=!0;return}t=!1,r=!1,n=!1;var s=e.ui.keyCode;switch(i.keyCode){case s.PAGE_UP:t=!0,this._move("previousPage",i);break;case s.PAGE_DOWN:t=!0,this._move("nextPage",i);break;case s.UP:t=!0,this._keyEvent("previous",i);break;case s.DOWN:t=!0,this._keyEvent("next",i);break;case s.ENTER:case s.NUMPAD_ENTER:this.menu.active&&(t=!0,i.preventDefault(),this.menu.select(i));break;case s.TAB:this.menu.active&&this.menu.select(i);break;case s.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(i),i.preventDefault());break;default:n=!0,this._searchTimeout(i)}},keypress:function(r){if(t){t=!1,r.preventDefault();return}if(n)return;var i=e.ui.keyCode;switch(r.keyCode){case i.PAGE_UP:this._move("previousPage",r);break;case i.PAGE_DOWN:this._move("nextPage",r);break;case i.UP:this._keyEvent("previous",r);break;case i.DOWN:this._keyEvent("next",r)}},input:function(e){if(r){r=!1,e.preventDefault();return}this._searchTimeout(e)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching),this.close(e),this._change(e)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo||"body")[0]).menu({input:e(),role:null}).zIndex(this.element.zIndex()+1).hide().data("menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var n=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(r){r.target!==t.element[0]&&r.target!==n&&!e.contains(n,r.target)&&t.close()})})},menufocus:function(t,n){if(this.isNewMenu){this.isNewMenu=!1;if(t.originalEvent&&/^mouse/.test(t.originalEvent.type)){this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)});return}}var r=n.item.data("ui-autocomplete-item")||n.item.data("item.autocomplete");!1!==this._trigger("focus",t,{item:r})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(r.value):this.liveRegion.text(r.value)},menuselect:function(e,t){var n=t.item.data("ui-autocomplete-item")||t.item.data("item.autocomplete"),r=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=r,this._delay(function(){this.previous=r,this.selectedItem=n})),!1!==this._trigger("select",e,{item:n})&&this._value(n.value),this.term=this._value(),this.close(e),this.selectedItem=n}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element),e.fn.bgiframe&&this.menu.element.bgiframe(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),e==="source"&&this._initSource(),e==="appendTo"&&this.menu.element.appendTo(this.document.find(t||"body")[0]),e==="disabled"&&t&&this.xhr&&this.xhr.abort()},_isMultiLine:function(){return this.element.is("textarea")?!0:this.element.is("input")?!1:this.element.prop("isContentEditable")},_initSource:function(){var t,n,r=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(n,r){r(e.ui.autocomplete.filter(t,n.term))}):typeof this.options.source=="string"?(n=this.options.source,this.source=function(t,i){r.xhr&&r.xhr.abort(),r.xhr=e.ajax({url:n,data:t,dataType:"json",success:function(e){i(e)},error:function(){i([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){e=e!=null?e:this._value(),this.term=this._value();if(e.length<this.options.minLength)return this.close(t);if(this._trigger("search",t)===!1)return;return this._search(e)},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var e=this,t=++n;return function(r){t===n&&e.__response(r),e.pending--,e.pending||e.element.removeClass("ui-autocomplete-loading")}},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return typeof t=="string"?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var n=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(n,t),this.menu.refresh(),n.show(),this._resizeMenu(),n.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,n){var r=this;e.each(n,function(e,n){r._renderItemData(t,n)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,n){return e("<li>").append(e("<a>").text(n.label)).appendTo(t)},_move:function(e,t){if(!this.menu.element.is(":visible")){this.search(null,t);return}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){this._value(this.term),this.menu.blur();return}this.menu[e](t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(e,t),t.preventDefault()}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,n){var r=new RegExp(e.ui.autocomplete.escapeRegex(n),"i");return e.grep(t,function(e){return r.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments);if(this.options.disabled||this.cancelSearch)return;e&&e.length?t=this.options.messages.results(e.length):t=this.options.messages.noResults,this.liveRegion.text(t)}})})(jQuery);(function(e,t){var n,r,i,s,o="ui-button ui-widget ui-state-default ui-corner-all",u="ui-state-hover ui-state-active ",a="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",f=function(){var t=e(this).find(":ui-button");setTimeout(function(){t.button("refresh")},1)},l=function(t){var n=t.name,r=t.form,i=e([]);return n&&(r?i=e(r).find("[name='"+n+"']"):i=e("[name='"+n+"']",t.ownerDocument).filter(function(){return!this.form})),i};e.widget("ui.button",{version:"1.9.2",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,f),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,u=this.options,a=this.type==="checkbox"||this.type==="radio",c=a?"":"ui-state-active",h="ui-state-focus";u.label===null&&(u.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(o).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(u.disabled)return;this===n&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){if(u.disabled)return;e(this).removeClass(c)}).bind("click"+this.eventNamespace,function(e){u.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){t.buttonElement.addClass(h)}).bind("blur"+this.eventNamespace,function(){t.buttonElement.removeClass(h)}),a&&(this.element.bind("change"+this.eventNamespace,function(){if(s)return;t.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(e){if(u.disabled)return;s=!1,r=e.pageX,i=e.pageY}).bind("mouseup"+this.eventNamespace,function(e){if(u.disabled)return;if(r!==e.pageX||i!==e.pageY)s=!0})),this.type==="checkbox"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1;e(this).toggleClass("ui-state-active"),t.buttonElement.attr("aria-pressed",t.element[0].checked)}):this.type==="radio"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var n=t.element[0];l(n).not(n).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).addClass("ui-state-active"),n=this,t.document.one("mouseup",function(){n=null})}).bind("mouseup"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(t){if(u.disabled)return!1;(t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",u.disabled),this._resetButton()},_determineButtonType:function(){var e,t,n;this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button",this.type==="checkbox"||this.type==="radio"?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),n=this.element.is(":checked"),n&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",n)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(o+" "+u+" "+a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){this._super(e,t);if(e==="disabled"){t?this.element.prop("disabled",!0):this.element.prop("disabled",!1);return}this._resetButton()},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),this.type==="radio"?l(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var t=this.buttonElement.removeClass(a),n=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),r=this.options.icons,i=r.primary&&r.secondary,s=[];r.primary||r.secondary?(this.options.text&&s.push("ui-button-text-icon"+(i?"s":r.primary?"-primary":"-secondary")),r.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+r.primary+"'></span>"),r.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+r.secondary+"'></span>"),this.options.text||(s.push(i?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(n)))):s.push("ui-button-text-only"),t.addClass(s.join(" "))}}),e.widget("ui.buttonset",{version:"1.9.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){e==="disabled"&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function($,undefined){function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function bindHover(e){var t="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(t,"mouseout",function(){$(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!=-1&&$(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!=-1&&$(this).removeClass("ui-datepicker-next-hover")}).delegate(t,"mouseover",function(){$.datepicker._isDisabledDatepicker(instActive.inline?e.parent()[0]:instActive.input[0])||($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),$(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!=-1&&$(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!=-1&&$(this).addClass("ui-datepicker-next-hover"))})}function extendRemove(e,t){$.extend(e,t);for(var n in t)if(t[n]==null||t[n]==undefined)e[n]=t[n];return e}$.extend($.ui,{datepicker:{version:"1.9.2"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return extendRemove(this._defaults,e||{}),this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline=nodeName=="div"||nodeName=="span";target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(e,t){var n=e[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:t,dpDiv:t?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(e,t){var n=$(e);t.append=$([]),t.trigger=$([]);if(n.hasClass(this.markerClassName))return;this._attachments(n,t),n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(e,n,r){t.settings[n]=r}).bind("getData.datepicker",function(e,n){return this._get(t,n)}),this._autoSize(t),$.data(e,PROP_NAME,t),t.settings.disabled&&this._disableDatepicker(e)},_attachments:function(e,t){var n=this._get(t,"appendText"),r=this._get(t,"isRTL");t.append&&t.append.remove(),n&&(t.append=$('<span class="'+this._appendClass+'">'+n+"</span>"),e[r?"before":"after"](t.append)),e.unbind("focus",this._showDatepicker),t.trigger&&t.trigger.remove();var i=this._get(t,"showOn");(i=="focus"||i=="both")&&e.focus(this._showDatepicker);if(i=="button"||i=="both"){var s=this._get(t,"buttonText"),o=this._get(t,"buttonImage");t.trigger=$(this._get(t,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:o,alt:s,title:s}):$('<button type="button"></button>').addClass(this._triggerClass).html(o==""?s:$("<img/>").attr({src:o,alt:s,title:s}))),e[r?"before":"after"](t.trigger),t.trigger.click(function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput==e[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=e[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(e[0])):$.datepicker._showDatepicker(e[0]),!1})}},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t=new Date(2009,11,20),n=this._get(e,"dateFormat");if(n.match(/[DM]/)){var r=function(e){var t=0,n=0;for(var r=0;r<e.length;r++)e[r].length>t&&(t=e[r].length,n=r);return n};t.setMonth(r(this._get(e,n.match(/MM/)?"monthNames":"monthNamesShort"))),t.setDate(r(this._get(e,n.match(/DD/)?"dayNames":"dayNamesShort"))+20-t.getDay())}e.input.attr("size",this._formatDate(e,t).length)}},_inlineDatepicker:function(e,t){var n=$(e);if(n.hasClass(this.markerClassName))return;n.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker",function(e,n,r){t.settings[n]=r}).bind("getData.datepicker",function(e,n){return this._get(t,n)}),$.data(e,PROP_NAME,t),this._setDate(t,this._getDefaultDate(t),!0),this._updateDatepicker(t),this._updateAlternate(t),t.settings.disabled&&this._disableDatepicker(e),t.dpDiv.css("display","block")},_dialogDatepicker:function(e,t,n,r,i){var s=this._dialogInst;if(!s){this.uuid+=1;var o="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+o+'" style="position: absolute; top: -100px; width: 0px;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),s=this._dialogInst=this._newInst(this._dialogInput,!1),s.settings={},$.data(this._dialogInput[0],PROP_NAME,s)}extendRemove(s.settings,r||{}),t=t&&t.constructor==Date?this._formatDate(s,t):t,this._dialogInput.val(t),this._pos=i?i.length?i:[i.pageX,i.pageY]:null;if(!this._pos){var u=document.documentElement.clientWidth,a=document.documentElement.clientHeight,f=document.documentElement.scrollLeft||document.body.scrollLeft,l=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[u/2-100+f,a/2-150+l]}return this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),s.settings.onSelect=n,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,s),this},_destroyDatepicker:function(e){var t=$(e),n=$.data(e,PROP_NAME);if(!t.hasClass(this.markerClassName))return;var r=e.nodeName.toLowerCase();$.removeData(e,PROP_NAME),r=="input"?(n.append.remove(),n.trigger.remove(),t.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(r=="div"||r=="span")&&t.removeClass(this.markerClassName).empty()},_enableDatepicker:function(e){var t=$(e),n=$.data(e,PROP_NAME);if(!t.hasClass(this.markerClassName))return;var r=e.nodeName.toLowerCase();if(r=="input")e.disabled=!1,n.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(r=="div"||r=="span"){var i=t.children("."+this._inlineClass);i.children().removeClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)}this._disabledInputs=$.map(this._disabledInputs,function(t){return t==e?null:t})},_disableDatepicker:function(e){var t=$(e),n=$.data(e,PROP_NAME);if(!t.hasClass(this.markerClassName))return;var r=e.nodeName.toLowerCase();if(r=="input")e.disabled=!0,n.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(r=="div"||r=="span"){var i=t.children("."+this._inlineClass);i.children().addClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)}this._disabledInputs=$.map(this._disabledInputs,function(t){return t==e?null:t}),this._disabledInputs[this._disabledInputs.length]=e},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;t<this._disabledInputs.length;t++)if(this._disabledInputs[t]==e)return!0;return!1},_getInst:function(e){try{return $.data(e,PROP_NAME)}catch(t){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,t,n){var r=this._getInst(e);if(arguments.length==2&&typeof t=="string")return t=="defaults"?$.extend({},$.datepicker._defaults):r?t=="all"?$.extend({},r.settings):this._get(r,t):null;var i=t||{};typeof t=="string"&&(i={},i[t]=n);if(r){this._curInst==r&&this._hideDatepicker();var s=this._getDateDatepicker(e,!0),o=this._getMinMaxDate(r,"min"),u=this._getMinMaxDate(r,"max");extendRemove(r.settings,i),o!==null&&i.dateFormat!==undefined&&i.minDate===undefined&&(r.settings.minDate=this._formatDate(r,o)),u!==null&&i.dateFormat!==undefined&&i.maxDate===undefined&&(r.settings.maxDate=this._formatDate(r,u)),this._attachments($(e),r),this._autoSize(r),this._setDate(r,s),this._updateAlternate(r),this._updateDatepicker(r)}},_changeDatepicker:function(e,t,n){this._optionDatepicker(e,t,n)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var n=this._getInst(e);n&&(this._setDate(n,t),this._updateDatepicker(n),this._updateAlternate(n))},_getDateDatepicker:function(e,t){var n=this._getInst(e);return n&&!n.inline&&this._setDateFromField(n,t),n?this._getDate(n):null},_doKeyDown:function(e){var t=$.datepicker._getInst(e.target),n=!0,r=t.dpDiv.is(".ui-datepicker-rtl");t._keyEvent=!0;if($.datepicker._datepickerShowing)switch(e.keyCode){case 9:$.datepicker._hideDatepicker(),n=!1;break;case 13:var i=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",t.dpDiv);i[0]&&$.datepicker._selectDay(e.target,t.selectedMonth,t.selectedYear,i[0]);var s=$.datepicker._get(t,"onSelect");if(s){var o=$.datepicker._formatDate(t);s.apply(t.input?t.input[0]:null,[o,t])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(e.target,e.ctrlKey?-$.datepicker._get(t,"stepBigMonths"):-$.datepicker._get(t,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(e.target,e.ctrlKey?+$.datepicker._get(t,"stepBigMonths"):+$.datepicker._get(t,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&$.datepicker._clearDate(e.target),n=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&$.datepicker._gotoToday(e.target),n=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,r?1:-1,"D"),n=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&$.datepicker._adjustDate(e.target,e.ctrlKey?-$.datepicker._get(t,"stepBigMonths"):-$.datepicker._get(t,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,-7,"D"),n=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,r?-1:1,"D"),n=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&$.datepicker._adjustDate(e.target,e.ctrlKey?+$.datepicker._get(t,"stepBigMonths"):+$.datepicker._get(t,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,7,"D"),n=e.ctrlKey||e.metaKey;break;default:n=!1}else e.keyCode==36&&e.ctrlKey?$.datepicker._showDatepicker(this):n=!1;n&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var t=$.datepicker._getInst(e.target);if($.datepicker._get(t,"constrainInput")){var n=$.datepicker._possibleChars($.datepicker._get(t,"dateFormat")),r=String.fromCharCode(e.charCode==undefined?e.keyCode:e.charCode);return e.ctrlKey||e.metaKey||r<" "||!n||n.indexOf(r)>-1}},_doKeyUp:function(e){var t=$.datepicker._getInst(e.target);if(t.input.val()!=t.lastVal)try{var n=$.datepicker.parseDate($.datepicker._get(t,"dateFormat"),t.input?t.input.val():null,$.datepicker._getFormatConfig(t));n&&($.datepicker._setDateFromField(t),$.datepicker._updateAlternate(t),$.datepicker._updateDatepicker(t))}catch(r){$.datepicker.log(r)}return!0},_showDatepicker:function(e){e=e.target||e,e.nodeName.toLowerCase()!="input"&&(e=$("input",e.parentNode)[0]);if($.datepicker._isDisabledDatepicker(e)||$.datepicker._lastInput==e)return;var t=$.datepicker._getInst(e);$.datepicker._curInst&&$.datepicker._curInst!=t&&($.datepicker._curInst.dpDiv.stop(!0,!0),t&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var n=$.datepicker._get(t,"beforeShow"),r=n?n.apply(e,[e,t]):{};if(r===!1)return;extendRemove(t.settings,r),t.lastVal=null,$.datepicker._lastInput=e,$.datepicker._setDateFromField(t),$.datepicker._inDialog&&(e.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(e),$.datepicker._pos[1]+=e.offsetHeight);var i=!1;$(e).parents().each(function(){return i|=$(this).css("position")=="fixed",!i});var s={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null,t.dpDiv.empty(),t.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(t),s=$.datepicker._checkOffset(t,s,i),t.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":i?"fixed":"absolute",display:"none",left:s.left+"px",top:s.top+"px"});if(!t.inline){var o=$.datepicker._get(t,"showAnim"),u=$.datepicker._get(t,"duration"),a=function(){var e=t.dpDiv.find("iframe.ui-datepicker-cover");if(!!e.length){var n=$.datepicker._getBorders(t.dpDiv);e.css({left:-n[0],top:-n[1],width:t.dpDiv.outerWidth(),height:t.dpDiv.outerHeight()})}};t.dpDiv.zIndex($(e).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&($.effects.effect[o]||$.effects[o])?t.dpDiv.show(o,$.datepicker._get(t,"showOptions"),u,a):t.dpDiv[o||"show"](o?u:null,a),(!o||!u)&&a(),t.input.is(":visible")&&!t.input.is(":disabled")&&t.input.focus(),$.datepicker._curInst=t}},_updateDatepicker:function(e){this.maxRows=4;var t=$.datepicker._getBorders(e.dpDiv);instActive=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var n=e.dpDiv.find("iframe.ui-datepicker-cover");!n.length||n.css({left:-t[0],top:-t[1],width:e.dpDiv.outerWidth(),height:e.dpDiv.outerHeight()}),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();var r=this._getNumberOfMonths(e),i=r[1],s=17;e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),i>1&&e.dpDiv.addClass("ui-datepicker-multi-"+i).css("width",s*i+"em"),e.dpDiv[(r[0]!=1||r[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e==$.datepicker._curInst&&$.datepicker._datepickerShowing&&e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&e.input[0]!=document.activeElement&&e.input.focus();if(e.yearshtml){var o=e.yearshtml;setTimeout(function(){o===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),o=e.yearshtml=null},0)}},_getBorders:function(e){var t=function(e){return{thin:1,medium:2,thick:3}[e]||e};return[parseFloat(t(e.css("border-left-width"))),parseFloat(t(e.css("border-top-width")))]},_checkOffset:function(e,t,n){var r=e.dpDiv.outerWidth(),i=e.dpDiv.outerHeight(),s=e.input?e.input.outerWidth():0,o=e.input?e.input.outerHeight():0,u=document.documentElement.clientWidth+(n?0:$(document).scrollLeft()),a=document.documentElement.clientHeight+(n?0:$(document).scrollTop());return t.left-=this._get(e,"isRTL")?r-s:0,t.left-=n&&t.left==e.input.offset().left?$(document).scrollLeft():0,t.top-=n&&t.top==e.input.offset().top+o?$(document).scrollTop():0,t.left-=Math.min(t.left,t.left+r>u&&u>r?Math.abs(t.left+r-u):0),t.top-=Math.min(t.top,t.top+i>a&&a>i?Math.abs(i+o):0),t},_findPos:function(e){var t=this._getInst(e),n=this._get(t,"isRTL");while(e&&(e.type=="hidden"||e.nodeType!=1||$.expr.filters.hidden(e)))e=e[n?"previousSibling":"nextSibling"];var r=$(e).offset();return[r.left,r.top]},_hideDatepicker:function(e){var t=this._curInst;if(!t||e&&t!=$.data(e,PROP_NAME))return;if(this._datepickerShowing){var n=this._get(t,"showAnim"),r=this._get(t,"duration"),i=function(){$.datepicker._tidyDialog(t)};$.effects&&($.effects.effect[n]||$.effects[n])?t.dpDiv.hide(n,$.datepicker._get(t,"showOptions"),r,i):t.dpDiv[n=="slideDown"?"slideUp":n=="fadeIn"?"fadeOut":"hide"](n?r:null,i),n||i(),this._datepickerShowing=!1;var s=this._get(t,"onClose");s&&s.apply(t.input?t.input[0]:null,[t.input?t.input.val():"",t]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(!$.datepicker._curInst)return;var t=$(e.target),n=$.datepicker._getInst(t[0]);(t[0].id!=$.datepicker._mainDivId&&t.parents("#"+$.datepicker._mainDivId).length==0&&!t.hasClass($.datepicker.markerClassName)&&!t.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||t.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=n)&&$.datepicker._hideDatepicker()},_adjustDate:function(e,t,n){var r=$(e),i=this._getInst(r[0]);if(this._isDisabledDatepicker(r[0]))return;this._adjustInstDate(i,t+(n=="M"?this._get(i,"showCurrentAtPos"):0),n),this._updateDatepicker(i)},_gotoToday:function(e){var t=$(e),n=this._getInst(t[0]);if(this._get(n,"gotoCurrent")&&n.currentDay)n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear;else{var r=new Date;n.selectedDay=r.getDate(),n.drawMonth=n.selectedMonth=r.getMonth(),n.drawYear=n.selectedYear=r.getFullYear()}this._notifyChange(n),this._adjustDate(t)},_selectMonthYear:function(e,t,n){var r=$(e),i=this._getInst(r[0]);i["selected"+(n=="M"?"Month":"Year")]=i["draw"+(n=="M"?"Month":"Year")]=parseInt(t.options[t.selectedIndex].value,10),this._notifyChange(i),this._adjustDate(r)},_selectDay:function(e,t,n,r){var i=$(e);if($(r).hasClass(this._unselectableClass)||this._isDisabledDatepicker(i[0]))return;var s=this._getInst(i[0]);s.selectedDay=s.currentDay=$("a",r).html(),s.selectedMonth=s.currentMonth=t,s.selectedYear=s.currentYear=n,this._selectDate(e,this._formatDate(s,s.currentDay,s.currentMonth,s.currentYear))},_clearDate:function(e){var t=$(e),n=this._getInst(t[0]);this._selectDate(t,"")},_selectDate:function(e,t){var n=$(e),r=this._getInst(n[0]);t=t!=null?t:this._formatDate(r),r.input&&r.input.val(t),this._updateAlternate(r);var i=this._get(r,"onSelect");i?i.apply(r.input?r.input[0]:null,[t,r]):r.input&&r.input.trigger("change"),r.inline?this._updateDatepicker(r):(this._hideDatepicker(),this._lastInput=r.input[0],typeof r.input[0]!="object"&&r.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var t=this._get(e,"altField");if(t){var n=this._get(e,"altFormat")||this._get(e,"dateFormat"),r=this._getDate(e),i=this.formatDate(n,r,this._getFormatConfig(e));$(t).each(function(){$(this).val(i)})}},noWeekends:function(e){var t=e.getDay();return[t>0&&t<6,""]},iso8601Week:function(e){var t=new Date(e.getTime());t.setDate(t.getDate()+4-(t.getDay()||7));var n=t.getTime();return t.setMonth(0),t.setDate(1),Math.floor(Math.round((n-t)/864e5)/7)+1},parseDate:function(e,t,n){if(e==null||t==null)throw"Invalid arguments";t=typeof t=="object"?t.toString():t+"";if(t=="")return null;var r=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff;r=typeof r!="string"?r:(new Date).getFullYear()%100+parseInt(r,10);var i=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,s=(n?n.dayNames:null)||this._defaults.dayNames,o=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,u=(n?n.monthNames:null)||this._defaults.monthNames,a=-1,f=-1,l=-1,c=-1,h=!1,p=function(t){var n=y+1<e.length&&e.charAt(y+1)==t;return n&&y++,n},d=function(e){var n=p(e),r=e=="@"?14:e=="!"?20:e=="y"&&n?4:e=="o"?3:2,i=new RegExp("^\\d{1,"+r+"}"),s=t.substring(g).match(i);if(!s)throw"Missing number at position "+g;return g+=s[0].length,parseInt(s[0],10)},v=function(e,n,r){var i=$.map(p(e)?r:n,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)}),s=-1;$.each(i,function(e,n){var r=n[1];if(t.substr(g,r.length).toLowerCase()==r.toLowerCase())return s=n[0],g+=r.length,!1});if(s!=-1)return s+1;throw"Unknown name at position "+g},m=function(){if(t.charAt(g)!=e.charAt(y))throw"Unexpected literal at position "+g;g++},g=0;for(var y=0;y<e.length;y++)if(h)e.charAt(y)=="'"&&!p("'")?h=!1:m();else switch(e.charAt(y)){case"d":l=d("d");break;case"D":v("D",i,s);break;case"o":c=d("o");break;case"m":f=d("m");break;case"M":f=v("M",o,u);break;case"y":a=d("y");break;case"@":var b=new Date(d("@"));a=b.getFullYear(),f=b.getMonth()+1,l=b.getDate();break;case"!":var b=new Date((d("!")-this._ticksTo1970)/1e4);a=b.getFullYear(),f=b.getMonth()+1,l=b.getDate();break;case"'":p("'")?m():h=!0;break;default:m()}if(g<t.length){var w=t.substr(g);if(!/^\s+/.test(w))throw"Extra/unparsed characters found in date: "+w}a==-1?a=(new Date).getFullYear():a<100&&(a+=(new Date).getFullYear()-(new Date).getFullYear()%100+(a<=r?0:-100));if(c>-1){f=1,l=c;do{var E=this._getDaysInMonth(a,f-1);if(l<=E)break;f++,l-=E}while(!0)}var b=this._daylightSavingAdjust(new Date(a,f-1,l));if(b.getFullYear()!=a||b.getMonth()+1!=f||b.getDate()!=l)throw"Invalid date";return b},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(e,t,n){if(!t)return"";var r=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,i=(n?n.dayNames:null)||this._defaults.dayNames,s=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,o=(n?n.monthNames:null)||this._defaults.monthNames,u=function(t){var n=h+1<e.length&&e.charAt(h+1)==t;return n&&h++,n},a=function(e,t,n){var r=""+t;if(u(e))while(r.length<n)r="0"+r;return r},f=function(e,t,n,r){return u(e)?r[t]:n[t]},l="",c=!1;if(t)for(var h=0;h<e.length;h++)if(c)e.charAt(h)=="'"&&!u("'")?c=!1:l+=e.charAt(h);else switch(e.charAt(h)){case"d":l+=a("d",t.getDate(),2);break;case"D":l+=f("D",t.getDay(),r,i);break;case"o":l+=a("o",Math.round(((new Date(t.getFullYear(),t.getMonth(),t.getDate())).getTime()-(new Date(t.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":l+=a("m",t.getMonth()+1,2);break;case"M":l+=f("M",t.getMonth(),s,o);break;case"y":l+=u("y")?t.getFullYear():(t.getYear()%100<10?"0":"")+t.getYear()%100;break;case"@":l+=t.getTime();break;case"!":l+=t.getTime()*1e4+this._ticksTo1970;break;case"'":u("'")?l+="'":c=!0;break;default:l+=e.charAt(h)}return l},_possibleChars:function(e){var t="",n=!1,r=function(t){var n=i+1<e.length&&e.charAt(i+1)==t;return n&&i++,n};for(var i=0;i<e.length;i++)if(n)e.charAt(i)=="'"&&!r("'")?n=!1:t+=e.charAt(i);else switch(e.charAt(i)){case"d":case"m":case"y":case"@":t+="0123456789";break;case"D":case"M":return null;case"'":r("'")?t+="'":n=!0;break;default:t+=e.charAt(i)}return t},_get:function(e,t){return e.settings[t]!==undefined?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()==e.lastVal)return;var n=this._get(e,"dateFormat"),r=e.lastVal=e.input?e.input.val():null,i,s;i=s=this._getDefaultDate(e);var o=this._getFormatConfig(e);try{i=this.parseDate(n,r,o)||s}catch(u){this.log(u),r=t?"":r}e.selectedDay=i.getDate(),e.drawMonth=e.selectedMonth=i.getMonth(),e.drawYear=e.selectedYear=i.getFullYear(),e.currentDay=r?i.getDate():0,e.currentMonth=r?i.getMonth():0,e.currentYear=r?i.getFullYear():0,this._adjustInstDate(e)},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(e,t,n){var r=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},i=function(t){try{return $.datepicker.parseDate($.datepicker._get(e,"dateFormat"),t,$.datepicker._getFormatConfig(e))}catch(n){}var r=(t.toLowerCase().match(/^c/)?$.datepicker._getDate(e):null)||new Date,i=r.getFullYear(),s=r.getMonth(),o=r.getDate(),u=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,a=u.exec(t);while(a){switch(a[2]||"d"){case"d":case"D":o+=parseInt(a[1],10);break;case"w":case"W":o+=parseInt(a[1],10)*7;break;case"m":case"M":s+=parseInt(a[1],10),o=Math.min(o,$.datepicker._getDaysInMonth(i,s));break;case"y":case"Y":i+=parseInt(a[1],10),o=Math.min(o,$.datepicker._getDaysInMonth(i,s))}a=u.exec(t)}return new Date(i,s,o)},s=t==null||t===""?n:typeof t=="string"?i(t):typeof t=="number"?isNaN(t)?n:r(t):new Date(t.getTime());return s=s&&s.toString()=="Invalid Date"?n:s,s&&(s.setHours(0),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0)),this._daylightSavingAdjust(s)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,n){var r=!t,i=e.selectedMonth,s=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),(i!=e.selectedMonth||s!=e.selectedYear)&&!n&&this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(r?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&e.input.val()==""?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(e){var t=this._get(e,"stepMonths"),n="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(n,-t,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(n,+t,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(n)},selectDay:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectDay(n,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(n,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(n,this,"Y"),!1}};$(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t=new Date;t=this._daylightSavingAdjust(new Date(t.getFullYear(),t.getMonth(),t.getDate()));var n=this._get(e,"isRTL"),r=this._get(e,"showButtonPanel"),i=this._get(e,"hideIfNoPrevNext"),s=this._get(e,"navigationAsDateFormat"),o=this._getNumberOfMonths(e),u=this._get(e,"showCurrentAtPos"),a=this._get(e,"stepMonths"),f=o[0]!=1||o[1]!=1,l=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),c=this._getMinMaxDate(e,"min"),h=this._getMinMaxDate(e,"max"),p=e.drawMonth-u,d=e.drawYear;p<0&&(p+=12,d--);if(h){var v=this._daylightSavingAdjust(new Date(h.getFullYear(),h.getMonth()-o[0]*o[1]+1,h.getDate()));v=c&&v<c?c:v;while(this._daylightSavingAdjust(new Date(d,p,1))>v)p--,p<0&&(p=11,d--)}e.drawMonth=p,e.drawYear=d;var m=this._get(e,"prevText");m=s?this.formatDate(m,this._daylightSavingAdjust(new Date(d,p-a,1)),this._getFormatConfig(e)):m;var g=this._canAdjustMonth(e,-1,d,p)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+m+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"e":"w")+'">'+m+"</span></a>":i?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+m+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"e":"w")+'">'+m+"</span></a>",y=this._get(e,"nextText");y=s?this.formatDate(y,this._daylightSavingAdjust(new Date(d,p+a,1)),this._getFormatConfig(e)):y;var b=this._canAdjustMonth(e,1,d,p)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+y+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"w":"e")+'">'+y+"</span></a>":i?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+y+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"w":"e")+'">'+y+"</span></a>",w=this._get(e,"currentText"),E=this._get(e,"gotoCurrent")&&e.currentDay?l:t;w=s?this.formatDate(w,E,this._getFormatConfig(e)):w;var S=e.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(e,"closeText")+"</button>",x=r?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(n?S:"")+(this._isInRange(e,E)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+w+"</button>":"")+(n?"":S)+"</div>":"",T=parseInt(this._get(e,"firstDay"),10);T=isNaN(T)?0:T;var N=this._get(e,"showWeek"),C=this._get(e,"dayNames"),k=this._get(e,"dayNamesShort"),L=this._get(e,"dayNamesMin"),A=this._get(e,"monthNames"),O=this._get(e,"monthNamesShort"),M=this._get(e,"beforeShowDay"),_=this._get(e,"showOtherMonths"),D=this._get(e,"selectOtherMonths"),P=this._get(e,"calculateWeek")||this.iso8601Week,H=this._getDefaultDate(e),B="";for(var j=0;j<o[0];j++){var F="";this.maxRows=4;for(var I=0;I<o[1];I++){var q=this._daylightSavingAdjust(new Date(d,p,e.selectedDay)),R=" ui-corner-all",U="";if(f){U+='<div class="ui-datepicker-group';if(o[1]>1)switch(I){case 0:U+=" ui-datepicker-group-first",R=" ui-corner-"+(n?"right":"left");break;case o[1]-1:U+=" ui-datepicker-group-last",R=" ui-corner-"+(n?"left":"right");break;default:U+=" ui-datepicker-group-middle",R=""}U+='">'}U+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+R+'">'+(/all|left/.test(R)&&j==0?n?b:g:"")+(/all|right/.test(R)&&j==0?n?g:b:"")+this._generateMonthYearHeader(e,p,d,c,h,j>0||I>0,A,O)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var z=N?'<th class="ui-datepicker-week-col">'+this._get(e,"weekHeader")+"</th>":"";for(var W=0;W<7;W++){var X=(W+T)%7;z+="<th"+((W+T+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+C[X]+'">'+L[X]+"</span></th>"}U+=z+"</tr></thead><tbody>";var V=this._getDaysInMonth(d,p);d==e.selectedYear&&p==e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,V));var J=(this._getFirstDayOfMonth(d,p)-T+7)%7,K=Math.ceil((J+V)/7),Q=f?this.maxRows>K?this.maxRows:K:K;this.maxRows=Q;var G=this._daylightSavingAdjust(new Date(d,p,1-J));for(var Y=0;Y<Q;Y++){U+="<tr>";var Z=N?'<td class="ui-datepicker-week-col">'+this._get(e,"calculateWeek")(G)+"</td>":"";for(var W=0;W<7;W++){var et=M?M.apply(e.input?e.input[0]:null,[G]):[!0,""],tt=G.getMonth()!=p,nt=tt&&!D||!et[0]||c&&G<c||h&&G>h;Z+='<td class="'+((W+T+6)%7>=5?" ui-datepicker-week-end":"")+(tt?" ui-datepicker-other-month":"")+(G.getTime()==q.getTime()&&p==e.selectedMonth&&e._keyEvent||H.getTime()==G.getTime()&&H.getTime()==q.getTime()?" "+this._dayOverClass:"")+(nt?" "+this._unselectableClass+" ui-state-disabled":"")+(tt&&!_?"":" "+et[1]+(G.getTime()==l.getTime()?" "+this._currentClass:"")+(G.getTime()==t.getTime()?" ui-datepicker-today":""))+'"'+((!tt||_)&&et[2]?' title="'+et[2]+'"':"")+(nt?"":' data-handler="selectDay" data-event="click" data-month="'+G.getMonth()+'" data-year="'+G.getFullYear()+'"')+">"+(tt&&!_?"&#xa0;":nt?'<span class="ui-state-default">'+G.getDate()+"</span>":'<a class="ui-state-default'+(G.getTime()==t.getTime()?" ui-state-highlight":"")+(G.getTime()==l.getTime()?" ui-state-active":"")+(tt?" ui-priority-secondary":"")+'" href="#">'+G.getDate()+"</a>")+"</td>",G.setDate(G.getDate()+1),G=this._daylightSavingAdjust(G)}U+=Z+"</tr>"}p++,p>11&&(p=0,d++),U+="</tbody></table>"+(f?"</div>"+(o[0]>0&&I==o[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),F+=U}B+=F}return B+=x+($.ui.ie6&&!e.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),e._keyEvent=!1,B},_generateMonthYearHeader:function(e,t,n,r,i,s,o,u){var a=this._get(e,"changeMonth"),f=this._get(e,"changeYear"),l=this._get(e,"showMonthAfterYear"),c='<div class="ui-datepicker-title">',h="";if(s||!a)h+='<span class="ui-datepicker-month">'+o[t]+"</span>";else{var p=r&&r.getFullYear()==n,d=i&&i.getFullYear()==n;h+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var v=0;v<12;v++)(!p||v>=r.getMonth())&&(!d||v<=i.getMonth())&&(h+='<option value="'+v+'"'+(v==t?' selected="selected"':"")+">"+u[v]+"</option>");h+="</select>"}l||(c+=h+(s||!a||!f?"&#xa0;":""));if(!e.yearshtml){e.yearshtml="";if(s||!f)c+='<span class="ui-datepicker-year">'+n+"</span>";else{var m=this._get(e,"yearRange").split(":"),g=(new Date).getFullYear(),y=function(e){var t=e.match(/c[+-].*/)?n+parseInt(e.substring(1),10):e.match(/[+-].*/)?g+parseInt(e,10):parseInt(e,10);return isNaN(t)?g:t},b=y(m[0]),w=Math.max(b,y(m[1]||""));b=r?Math.max(b,r.getFullYear()):b,w=i?Math.min(w,i.getFullYear()):w,e.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';for(;b<=w;b++)e.yearshtml+='<option value="'+b+'"'+(b==n?' selected="selected"':"")+">"+b+"</option>";e.yearshtml+="</select>",c+=e.yearshtml,e.yearshtml=null}}return c+=this._get(e,"yearSuffix"),l&&(c+=(s||!a||!f?"&#xa0;":"")+h),c+="</div>",c},_adjustInstDate:function(e,t,n){var r=e.drawYear+(n=="Y"?t:0),i=e.drawMonth+(n=="M"?t:0),s=Math.min(e.selectedDay,this._getDaysInMonth(r,i))+(n=="D"?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(r,i,s)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),(n=="M"||n=="Y")&&this._notifyChange(e)},_restrictMinMax:function(e,t){var n=this._getMinMaxDate(e,"min"),r=this._getMinMaxDate(e,"max"),i=n&&t<n?n:t;return i=r&&i>r?r:i,i},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return t==null?[1,1]:typeof t=="number"?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return(new Date(e,t,1)).getDay()},_canAdjustMonth:function(e,t,n,r){var i=this._getNumberOfMonths(e),s=this._daylightSavingAdjust(new Date(n,r+(t<0?t:i[0]*i[1]),1));return t<0&&s.setDate(this._getDaysInMonth(s.getFullYear(),s.getMonth())),this._isInRange(e,s)},_isInRange:function(e,t){var n=this._getMinMaxDate(e,"min"),r=this._getMinMaxDate(e,"max");return(!n||t.getTime()>=n.getTime())&&(!r||t.getTime()<=r.getTime())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t=typeof t!="string"?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,n,r){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var i=t?typeof t=="object"?t:this._daylightSavingAdjust(new Date(r,n,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),i,this._getFormatConfig(e))}}),$.fn.datepicker=function(e){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv),$.datepicker.initialized=!0);var t=Array.prototype.slice.call(arguments,1);return typeof e!="string"||e!="isDisabled"&&e!="getDate"&&e!="widget"?e=="option"&&arguments.length==2&&typeof arguments[1]=="string"?$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this[0]].concat(t)):this.each(function(){typeof e=="string"?$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this].concat(t)):$.datepicker._attachDatepicker(this,e)}):$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this[0]].concat(t))},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.9.2",window["DP_jQuery_"+dpuuid]=$})(jQuery);(function(e,t){var n="ui-dialog ui-widget ui-widget-content ui-corner-all ",r={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};e.widget("ui.dialog",{version:"1.9.2",options:{autoOpen:!0,buttons:{},closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:!1,maxWidth:!1,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var n=e(this).css(t).offset().top;n<0&&e(this).css("top",t.top-n)}},resizable:!0,show:null,stack:!0,title:"",width:300,zIndex:1e3},_create:function(){this.originalTitle=this.element.attr("title"),typeof this.originalTitle!="string"&&(this.originalTitle=""),this.oldPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.options.title=this.options.title||this.originalTitle;var t=this,r=this.options,i=r.title||"&#160;",s,o,u,a,f;s=(this.uiDialog=e("<div>")).addClass(n+r.dialogClass).css({display:"none",outline:0,zIndex:r.zIndex}).attr("tabIndex",-1).keydown(function(n){r.closeOnEscape&&!n.isDefaultPrevented()&&n.keyCode&&n.keyCode===e.ui.keyCode.ESCAPE&&(t.close(n),n.preventDefault())}).mousedown(function(e){t.moveToTop(!1,e)}).appendTo("body"),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(s),o=(this.uiDialogTitlebar=e("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown",function(){s.focus()}).prependTo(s),u=e("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role","button").click(function(e){e.preventDefault(),t.close(e)}).appendTo(o),(this.uiDialogTitlebarCloseText=e("<span>")).addClass("ui-icon ui-icon-closethick").text(r.closeText).appendTo(u),a=e("<span>").uniqueId().addClass("ui-dialog-title").html(i).prependTo(o),f=(this.uiDialogButtonPane=e("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),(this.uiButtonSet=e("<div>")).addClass("ui-dialog-buttonset").appendTo(f),s.attr({role:"dialog","aria-labelledby":a.attr("id")}),o.find("*").add(o).disableSelection(),this._hoverable(u),this._focusable(u),r.draggable&&e.fn.draggable&&this._makeDraggable(),r.resizable&&e.fn.resizable&&this._makeResizable(),this._createButtons(r.buttons),this._isOpen=!1,e.fn.bgiframe&&s.bgiframe(),this._on(s,{keydown:function(t){if(!r.modal||t.keyCode!==e.ui.keyCode.TAB)return;var n=e(":tabbable",s),i=n.filter(":first"),o=n.filter(":last");if(t.target===o[0]&&!t.shiftKey)return i.focus(1),!1;if(t.target===i[0]&&t.shiftKey)return o.focus(1),!1}})},_init:function(){this.options.autoOpen&&this.open()},_destroy:function(){var e,t=this.oldPosition;this.overlay&&this.overlay.destroy(),this.uiDialog.hide(),this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},close:function(t){var n=this,r,i;if(!this._isOpen)return;if(!1===this._trigger("beforeClose",t))return;return this._isOpen=!1,this.overlay&&this.overlay.destroy(),this.options.hide?this._hide(this.uiDialog,this.options.hide,function(){n._trigger("close",t)}):(this.uiDialog.hide(),this._trigger("close",t)),e.ui.dialog.overlay.resize(),this.options.modal&&(r=0,e(".ui-dialog").each(function(){this!==n.uiDialog[0]&&(i=e(this).css("z-index"),isNaN(i)||(r=Math.max(r,i)))}),e.ui.dialog.maxZ=r),this},isOpen:function(){return this._isOpen},moveToTop:function(t,n){var r=this.options,i;return r.modal&&!t||!r.stack&&!r.modal?this._trigger("focus",n):(r.zIndex>e.ui.dialog.maxZ&&(e.ui.dialog.maxZ=r.zIndex),this.overlay&&(e.ui.dialog.maxZ+=1,e.ui.dialog.overlay.maxZ=e.ui.dialog.maxZ,this.overlay.$el.css("z-index",e.ui.dialog.overlay.maxZ)),i={scrollTop:this.element.scrollTop(),scrollLeft:this.element.scrollLeft()},e.ui.dialog.maxZ+=1,this.uiDialog.css("z-index",e.ui.dialog.maxZ),this.element.attr(i),this._trigger("focus",n),this)},open:function(){if(this._isOpen)return;var t,n=this.options,r=this.uiDialog;return this._size(),this._position(n.position),r.show(n.show),this.overlay=n.modal?new e.ui.dialog.overlay(this):null,this.moveToTop(!0),t=this.element.find(":tabbable"),t.length||(t=this.uiDialogButtonPane.find(":tabbable"),t.length||(t=r)),t.eq(0).focus(),this._isOpen=!0,this._trigger("open"),this},_createButtons:function(t){var n=this,r=!1;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),typeof t=="object"&&t!==null&&e.each(t,function(){return!(r=!0)}),r?(e.each(t,function(t,r){var i,s;r=e.isFunction(r)?{click:r,text:t}:r,r=e.extend({type:"button"},r),s=r.click,r.click=function(){s.apply(n.element[0],arguments)},i=e("<button></button>",r).appendTo(n.uiButtonSet),e.fn.button&&i.button()}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog)):this.uiDialog.removeClass("ui-dialog-buttons")},_makeDraggable:function(){function r(e){return{position:e.position,offset:e.offset}}var t=this,n=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(n,i){e(this).addClass("ui-dialog-dragging"),t._trigger("dragStart",n,r(i))},drag:function(e,n){t._trigger("drag",e,r(n))},stop:function(i,s){n.position=[s.position.left-t.document.scrollLeft(),s.position.top-t.document.scrollTop()],e(this).removeClass("ui-dialog-dragging"),t._trigger("dragStop",i,r(s)),e.ui.dialog.overlay.resize()}})},_makeResizable:function(n){function u(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}n=n===t?this.options.resizable:n;var r=this,i=this.options,s=this.uiDialog.css("position"),o=typeof n=="string"?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:i.maxWidth,maxHeight:i.maxHeight,minWidth:i.minWidth,minHeight:this._minHeight(),handles:o,start:function(t,n){e(this).addClass("ui-dialog-resizing"),r._trigger("resizeStart",t,u(n))},resize:function(e,t){r._trigger("resize",e,u(t))},stop:function(t,n){e(this).removeClass("ui-dialog-resizing"),i.height=e(this).height(),i.width=e(this).width(),r._trigger("resizeStop",t,u(n)),e.ui.dialog.overlay.resize()}}).css("position",s).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var e=this.options;return e.height==="auto"?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(t){var n=[],r=[0,0],i;if(t){if(typeof t=="string"||typeof t=="object"&&"0"in t)n=t.split?t.split(" "):[t[0],t[1]],n.length===1&&(n[1]=n[0]),e.each(["left","top"],function(e,t){+n[e]===n[e]&&(r[e]=n[e],n[e]=t)}),t={my:n[0]+(r[0]<0?r[0]:"+"+r[0])+" "+n[1]+(r[1]<0?r[1]:"+"+r[1]),at:n.join(" ")};t=e.extend({},e.ui.dialog.prototype.options.position,t)}else t=e.ui.dialog.prototype.options.position;i=this.uiDialog.is(":visible"),i||this.uiDialog.show(),this.uiDialog.position(t),i||this.uiDialog.hide()},_setOptions:function(t){var n=this,s={},o=!1;e.each(t,function(e,t){n._setOption(e,t),e in r&&(o=!0),e in i&&(s[e]=t)}),o&&this._size(),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",s)},_setOption:function(t,r){var i,s,o=this.uiDialog;switch(t){case"buttons":this._createButtons(r);break;case"closeText":this.uiDialogTitlebarCloseText.text(""+r);break;case"dialogClass":o.removeClass(this.options.dialogClass).addClass(n+r);break;case"disabled":r?o.addClass("ui-dialog-disabled"):o.removeClass("ui-dialog-disabled");break;case"draggable":i=o.is(":data(draggable)"),i&&!r&&o.draggable("destroy"),!i&&r&&this._makeDraggable();break;case"position":this._position(r);break;case"resizable":s=o.is(":data(resizable)"),s&&!r&&o.resizable("destroy"),s&&typeof r=="string"&&o.resizable("option","handles",r),!s&&r!==!1&&this._makeResizable(r);break;case"title":e(".ui-dialog-title",this.uiDialogTitlebar).html(""+(r||"&#160;"))}this._super(t,r)},_size:function(){var t,n,r,i=this.options,s=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0}),i.minWidth>i.width&&(i.width=i.minWidth),t=this.uiDialog.css({height:"auto",width:i.width}).outerHeight(),n=Math.max(0,i.minHeight-t),i.height==="auto"?e.support.minHeight?this.element.css({minHeight:n,height:"auto"}):(this.uiDialog.show(),r=this.element.css("height","auto").height(),s||this.uiDialog.hide(),this.element.height(Math.max(r,n))):this.element.height(Math.max(i.height-t,0)),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}}),e.extend(e.ui.dialog,{uuid:0,maxZ:0,getTitleId:function(e){var t=e.attr("id");return t||(this.uuid+=1,t=this.uuid),"ui-dialog-title-"+t},overlay:function(t){this.$el=e.ui.dialog.overlay.create(t)}}),e.extend(e.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(e){return e+".dialog-overlay"}).join(" "),create:function(t){this.instances.length===0&&(setTimeout(function(){e.ui.dialog.overlay.instances.length&&e(document).bind(e.ui.dialog.overlay.events,function(t){if(e(t.target).zIndex()<e.ui.dialog.overlay.maxZ)return!1})},1),e(window).bind("resize.dialog-overlay",e.ui.dialog.overlay.resize));var n=this.oldInstances.pop()||e("<div>").addClass("ui-widget-overlay");return e(document).bind("keydown.dialog-overlay",function(r){var i=e.ui.dialog.overlay.instances;i.length!==0&&i[i.length-1]===n&&t.options.closeOnEscape&&!r.isDefaultPrevented()&&r.keyCode&&r.keyCode===e.ui.keyCode.ESCAPE&&(t.close(r),r.preventDefault())}),n.appendTo(document.body).css({width:this.width(),height:this.height()}),e.fn.bgiframe&&n.bgiframe(),this.instances.push(n),n},destroy:function(t){var n=e.inArray(t,this.instances),r=0;n!==-1&&this.oldInstances.push(this.instances.splice(n,1)[0]),this.instances.length===0&&e([document,window]).unbind(".dialog-overlay"),t.height(0).width(0).remove(),e.each(this.instances,function(){r=Math.max(r,this.css("z-index"))}),this.maxZ=r},height:function(){var t,n;return e.ui.ie?(t=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),n=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight),t<n?e(window).height()+"px":t+"px"):e(document).height()+"px"},width:function(){var t,n;return e.ui.ie?(t=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),n=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth),t<n?e(window).width()+"px":t+"px"):e(document).width()+"px"},resize:function(){var t=e([]);e.each(e.ui.dialog.overlay.instances,function(){t=t.add(this)}),t.css({width:0,height:0}).css({width:e.ui.dialog.overlay.width(),height:e.ui.dialog.overlay.height()})}}),e.extend(e.ui.dialog.overlay.prototype,{destroy:function(){e.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);(function(e,t){e.widget("ui.draggable",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var n=this.options;return this.helper||n.disabled||e(t.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(t),this.handle?(e(n.iframeFix===!0?"iframe":n.iframeFix).each(function(){e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),n.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,n){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var n=!1;e.ui.ddmanager&&!this.options.dropBehaviour&&(n=e.ui.ddmanager.drop(this,t)),this.dropped&&(n=this.dropped,this.dropped=!1);var r=this.element[0],i=!1;while(r&&(r=r.parentNode))r==document&&(i=!0);if(!i&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!n||this.options.revert=="valid"&&n||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,n)){var s=this;e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){s._trigger("stop",t)!==!1&&s._clear()})}else this._trigger("stop",t)!==!1&&this._clear();return!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){var n=!this.options.handle||!e(this.options.handle,this.element).length?!0:!1;return e(this.options.handle,this.element).find("*").andSelf().each(function(){this==t.target&&(n=!0)}),n},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper=="clone"?this.element.clone().removeAttr("id"):this.element;return r.parents("body").length||r.appendTo(n.appendTo=="parent"?this.element[0].parentNode:n.appendTo),r[0]!=this.element[0]&&!/(fixed|absolute)/.test(r.css("position"))&&r.css("position","absolute"),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t=this.options;t.containment=="parent"&&(t.containment=this.helper[0].parentNode);if(t.containment=="document"||t.containment=="window")this.containment=[t.containment=="document"?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t.containment=="document"?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(t.containment=="document"?0:e(window).scrollLeft())+e(t.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(t.containment=="document"?0:e(window).scrollTop())+(e(t.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(t.containment)&&t.containment.constructor!=Array){var n=e(t.containment),r=n[0];if(!r)return;var i=n.offset(),s=e(r).css("overflow")!="hidden";this.containment=[(parseInt(e(r).css("borderLeftWidth"),10)||0)+(parseInt(e(r).css("paddingLeft"),10)||0),(parseInt(e(r).css("borderTopWidth"),10)||0)+(parseInt(e(r).css("paddingTop"),10)||0),(s?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(e(r).css("borderLeftWidth"),10)||0)-(parseInt(e(r).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(s?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(e(r).css("borderTopWidth"),10)||0)-(parseInt(e(r).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=n}else t.containment.constructor==Array&&(this.containment=t.containment)},_convertPositionTo:function(t,n){n||(n=this.position);var r=t=="absolute"?1:-1,i=this.options,s=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(s[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():o?0:s.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*r}},_generatePosition:function(t){var n=this.options,r=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(r[0].tagName),s=t.pageX,o=t.pageY;if(this.originalPosition){var u;if(this.containment){if(this.relative_container){var a=this.relative_container.offset();u=[this.containment[0]+a.left,this.containment[1]+a.top,this.containment[2]+a.left,this.containment[3]+a.top]}else u=this.containment;t.pageX-this.offset.click.left<u[0]&&(s=u[0]+this.offset.click.left),t.pageY-this.offset.click.top<u[1]&&(o=u[1]+this.offset.click.top),t.pageX-this.offset.click.left>u[2]&&(s=u[2]+this.offset.click.left),t.pageY-this.offset.click.top>u[3]&&(o=u[3]+this.offset.click.top)}if(n.grid){var f=n.grid[1]?this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1]:this.originalPageY;o=u?f-this.offset.click.top<u[1]||f-this.offset.click.top>u[3]?f-this.offset.click.top<u[1]?f+n.grid[1]:f-n.grid[1]:f:f;var l=n.grid[0]?this.originalPageX+Math.round((s-this.originalPageX)/n.grid[0])*n.grid[0]:this.originalPageX;s=u?l-this.offset.click.left<u[0]||l-this.offset.click.left>u[2]?l-this.offset.click.left<u[0]?l+n.grid[0]:l-n.grid[0]:l:l}}return{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():i?0:r.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:r.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,n,r){return r=r||this._uiHash(),e.ui.plugin.call(this,t,[n,r]),t=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash:function(e){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n){var r=e(this).data("draggable"),i=r.options,s=e.extend({},n,{item:r.element});r.sortables=[],e(i.connectToSortable).each(function(){var n=e.data(this,"sortable");n&&!n.options.disabled&&(r.sortables.push({instance:n,shouldRevert:n.options.revert}),n.refreshPositions(),n._trigger("activate",t,s))})},stop:function(t,n){var r=e(this).data("draggable"),i=e.extend({},n,{item:r.element});e.each(r.sortables,function(){this.instance.isOver?(this.instance.isOver=0,r.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,r.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,i))})},drag:function(t,n){var r=e(this).data("draggable"),i=this,s=function(t){var n=this.offset.click.top,r=this.offset.click.left,i=this.positionAbs.top,s=this.positionAbs.left,o=t.height,u=t.width,a=t.top,f=t.left;return e.ui.isOver(i+n,s+r,a,f,o,u)};e.each(r.sortables,function(s){var o=!1,u=this;this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(o=!0,e.each(r.sortables,function(){return this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this!=u&&this.instance._intersectsWith(this.instance.containerCache)&&e.ui.contains(u.instance.element[0],this.instance.element[0])&&(o=!1),o})),o?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return n.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=r.offset.click.top,this.instance.offset.click.left=r.offset.click.left,this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top,r._trigger("toSortable",t),r.dropped=this.instance.element,r.currentItem=r.element,this.instance.fromOutside=r),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),r._trigger("fromSortable",t),r.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,n){var r=e("body"),i=e(this).data("draggable").options;r.css("cursor")&&(i._cursor=r.css("cursor")),r.css("cursor",i.cursor)},stop:function(t,n){var r=e(this).data("draggable").options;r._cursor&&e("body").css("cursor",r._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n){var r=e(n.helper),i=e(this).data("draggable").options;r.css("opacity")&&(i._opacity=r.css("opacity")),r.css("opacity",i.opacity)},stop:function(t,n){var r=e(this).data("draggable").options;r._opacity&&e(n.helper).css("opacity",r._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(t,n){var r=e(this).data("draggable");r.scrollParent[0]!=document&&r.scrollParent[0].tagName!="HTML"&&(r.overflowOffset=r.scrollParent.offset())},drag:function(t,n){var r=e(this).data("draggable"),i=r.options,s=!1;if(r.scrollParent[0]!=document&&r.scrollParent[0].tagName!="HTML"){if(!i.axis||i.axis!="x")r.overflowOffset.top+r.scrollParent[0].offsetHeight-t.pageY<i.scrollSensitivity?r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop+i.scrollSpeed:t.pageY-r.overflowOffset.top<i.scrollSensitivity&&(r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop-i.scrollSpeed);if(!i.axis||i.axis!="y")r.overflowOffset.left+r.scrollParent[0].offsetWidth-t.pageX<i.scrollSensitivity?r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft+i.scrollSpeed:t.pageX-r.overflowOffset.left<i.scrollSensitivity&&(r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft-i.scrollSpeed)}else{if(!i.axis||i.axis!="x")t.pageY-e(document).scrollTop()<i.scrollSensitivity?s=e(document).scrollTop(e(document).scrollTop()-i.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<i.scrollSensitivity&&(s=e(document).scrollTop(e(document).scrollTop()+i.scrollSpeed));if(!i.axis||i.axis!="y")t.pageX-e(document).scrollLeft()<i.scrollSensitivity?s=e(document).scrollLeft(e(document).scrollLeft()-i.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<i.scrollSensitivity&&(s=e(document).scrollLeft(e(document).scrollLeft()+i.scrollSpeed))}s!==!1&&e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(r,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,n){var r=e(this).data("draggable"),i=r.options;r.snapElements=[],e(i.snap.constructor!=String?i.snap.items||":data(draggable)":i.snap).each(function(){var t=e(this),n=t.offset();this!=r.element[0]&&r.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:n.top,left:n.left})})},drag:function(t,n){var r=e(this).data("draggable"),i=r.options,s=i.snapTolerance,o=n.offset.left,u=o+r.helperProportions.width,a=n.offset.top,f=a+r.helperProportions.height;for(var l=r.snapElements.length-1;l>=0;l--){var c=r.snapElements[l].left,h=c+r.snapElements[l].width,p=r.snapElements[l].top,d=p+r.snapElements[l].height;if(!(c-s<o&&o<h+s&&p-s<a&&a<d+s||c-s<o&&o<h+s&&p-s<f&&f<d+s||c-s<u&&u<h+s&&p-s<a&&a<d+s||c-s<u&&u<h+s&&p-s<f&&f<d+s)){r.snapElements[l].snapping&&r.options.snap.release&&r.options.snap.release.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item})),r.snapElements[l].snapping=!1;continue}if(i.snapMode!="inner"){var v=Math.abs(p-f)<=s,m=Math.abs(d-a)<=s,g=Math.abs(c-u)<=s,y=Math.abs(h-o)<=s;v&&(n.position.top=r._convertPositionTo("relative",{top:p-r.helperProportions.height,left:0}).top-r.margins.top),m&&(n.position.top=r._convertPositionTo("relative",{top:d,left:0}).top-r.margins.top),g&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c-r.helperProportions.width}).left-r.margins.left),y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h}).left-r.margins.left)}var b=v||m||g||y;if(i.snapMode!="outer"){var v=Math.abs(p-a)<=s,m=Math.abs(d-f)<=s,g=Math.abs(c-o)<=s,y=Math.abs(h-u)<=s;v&&(n.position.top=r._convertPositionTo("relative",{top:p,left:0}).top-r.margins.top),m&&(n.position.top=r._convertPositionTo("relative",{top:d-r.helperProportions.height,left:0}).top-r.margins.top),g&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c}).left-r.margins.left),y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h-r.helperProportions.width}).left-r.margins.left)}!r.snapElements[l].snapping&&(v||m||g||y||b)&&r.options.snap.snap&&r.options.snap.snap.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item})),r.snapElements[l].snapping=v||m||g||y||b}}}),e.ui.plugin.add("draggable","stack",{start:function(t,n){var r=e(this).data("draggable").options,i=e.makeArray(e(r.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(!i.length)return;var s=parseInt(i[0].style.zIndex)||0;e(i).each(function(e){this.style.zIndex=s+e}),this[0].style.zIndex=s+i.length}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n){var r=e(n.helper),i=e(this).data("draggable").options;r.css("zIndex")&&(i._zIndex=r.css("zIndex")),r.css("zIndex",i.zIndex)},stop:function(t,n){var r=e(this).data("draggable").options;r._zIndex&&e(n.helper).css("zIndex",r._zIndex)}})})(jQuery);(function(e,t){e.widget("ui.droppable",{version:"1.9.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create:function(){var t=this.options,n=t.accept;this.isover=0,this.isout=1,this.accept=e.isFunction(n)?n:function(e){return e.is(n)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];for(var n=0;n<t.length;n++)t[n]==this&&t.splice(n,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,n){t=="accept"&&(this.accept=e.isFunction(n)?n:function(e){return e.is(n)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),n&&this._trigger("activate",t,this.ui(n))},_deactivate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),n&&this._trigger("deactivate",t,this.ui(n))},_over:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]==this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(n)))},_out:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]==this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(n)))},_drop:function(t,n){var r=n||e.ui.ddmanager.current;if(!r||(r.currentItem||r.element)[0]==this.element[0])return!1;var i=!1;return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"droppable");if(t.options.greedy&&!t.options.disabled&&t.options.scope==r.options.scope&&t.accept.call(t.element[0],r.currentItem||r.element)&&e.ui.intersect(r,e.extend(t,{offset:t.element.offset()}),t.options.tolerance))return i=!0,!1}),i?!1:this.accept.call(this.element[0],r.currentItem||r.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(r)),this.element):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(t,n,r){if(!n.offset)return!1;var i=(t.positionAbs||t.position.absolute).left,s=i+t.helperProportions.width,o=(t.positionAbs||t.position.absolute).top,u=o+t.helperProportions.height,a=n.offset.left,f=a+n.proportions.width,l=n.offset.top,c=l+n.proportions.height;switch(r){case"fit":return a<=i&&s<=f&&l<=o&&u<=c;case"intersect":return a<i+t.helperProportions.width/2&&s-t.helperProportions.width/2<f&&l<o+t.helperProportions.height/2&&u-t.helperProportions.height/2<c;case"pointer":var h=(t.positionAbs||t.position.absolute).left+(t.clickOffset||t.offset.click).left,p=(t.positionAbs||t.position.absolute).top+(t.clickOffset||t.offset.click).top,d=e.ui.isOver(p,h,l,a,n.proportions.height,n.proportions.width);return d;case"touch":return(o>=l&&o<=c||u>=l&&u<=c||o<l&&u>c)&&(i>=a&&i<=f||s>=a&&s<=f||i<a&&s>f);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,n){var r=e.ui.ddmanager.droppables[t.options.scope]||[],i=n?n.type:null,s=(t.currentItem||t.element).find(":data(droppable)").andSelf();e:for(var o=0;o<r.length;o++){if(r[o].options.disabled||t&&!r[o].accept.call(r[o].element[0],t.currentItem||t.element))continue;for(var u=0;u<s.length;u++)if(s[u]==r[o].element[0]){r[o].proportions.height=0;continue e}r[o].visible=r[o].element.css("display")!="none";if(!r[o].visible)continue;i=="mousedown"&&r[o]._activate.call(r[o],n),r[o].offset=r[o].element.offset(),r[o].proportions={width:r[o].element[0].offsetWidth,height:r[o].element[0].offsetHeight}}},drop:function(t,n){var r=!1;return e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options)return;!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(r=this._drop.call(this,n)||r),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,n))}),r},dragStart:function(t,n){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)})},drag:function(t,n){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,n),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var r=e.ui.intersect(t,this,this.options.tolerance),i=!r&&this.isover==1?"isout":r&&this.isover==0?"isover":null;if(!i)return;var s;if(this.options.greedy){var o=this.options.scope,u=this.element.parents(":data(droppable)").filter(function(){return e.data(this,"droppable").options.scope===o});u.length&&(s=e.data(u[0],"droppable"),s.greedyChild=i=="isover"?1:0)}s&&i=="isover"&&(s.isover=0,s.isout=1,s._out.call(s,n)),this[i]=1,this[i=="isout"?"isover":"isout"]=0,this[i=="isover"?"_over":"_out"].call(this,n),s&&i=="isout"&&(s.isout=0,s.isover=1,s._over.call(s,n))})},dragStop:function(t,n){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)}}})(jQuery);jQuery.effects||function(e,t){var n=e.uiBackCompat!==!1,r="ui-effects-";e.effects={effect:{}},function(t,n){function p(e,t,n){var r=a[t.type]||{};return e==null?n||!t.def?null:t.def:(e=r.floor?~~e:parseFloat(e),isNaN(e)?t.def:r.mod?(e+r.mod)%r.mod:0>e?0:r.max<e?r.max:e)}function d(e){var n=o(),r=n._rgba=[];return e=e.toLowerCase(),h(s,function(t,i){var s,o=i.re.exec(e),a=o&&i.parse(o),f=i.space||"rgba";if(a)return s=n[f](a),n[u[f].cache]=s[u[f].cache],r=n._rgba=s._rgba,!1}),r.length?(r.join()==="0,0,0,0"&&t.extend(r,c.transparent),n):c[e]}function v(e,t,n){return n=(n+1)%1,n*6<1?e+(t-e)*n*6:n*2<1?t:n*3<2?e+(t-e)*(2/3-n)*6:e}var r="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),i=/^([\-+])=\s*(\d+\.?\d*)/,s=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],o=t.Color=function(e,n,r,i){return new t.Color.fn.parse(e,n,r,i)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},a={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},f=o.support={},l=t("<p>")[0],c,h=t.each;l.style.cssText="background-color:rgba(1,1,1,.5)",f.rgba=l.style.backgroundColor.indexOf("rgba")>-1,h(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),o.fn=t.extend(o.prototype,{parse:function(r,i,s,a){if(r===n)return this._rgba=[null,null,null,null],this;if(r.jquery||r.nodeType)r=t(r).css(i),i=n;var f=this,l=t.type(r),v=this._rgba=[];i!==n&&(r=[r,i,s,a],l="array");if(l==="string")return this.parse(d(r)||c._default);if(l==="array")return h(u.rgba.props,function(e,t){v[t.idx]=p(r[t.idx],t)}),this;if(l==="object")return r instanceof o?h(u,function(e,t){r[t.cache]&&(f[t.cache]=r[t.cache].slice())}):h(u,function(t,n){var i=n.cache;h(n.props,function(e,t){if(!f[i]&&n.to){if(e==="alpha"||r[e]==null)return;f[i]=n.to(f._rgba)}f[i][t.idx]=p(r[e],t,!0)}),f[i]&&e.inArray(null,f[i].slice(0,3))<0&&(f[i][3]=1,n.from&&(f._rgba=n.from(f[i])))}),this},is:function(e){var t=o(e),n=!0,r=this;return h(u,function(e,i){var s,o=t[i.cache];return o&&(s=r[i.cache]||i.to&&i.to(r._rgba)||[],h(i.props,function(e,t){if(o[t.idx]!=null)return n=o[t.idx]===s[t.idx],n})),n}),n},_space:function(){var e=[],t=this;return h(u,function(n,r){t[r.cache]&&e.push(n)}),e.pop()},transition:function(e,t){var n=o(e),r=n._space(),i=u[r],s=this.alpha()===0?o("transparent"):this,f=s[i.cache]||i.to(s._rgba),l=f.slice();return n=n[i.cache],h(i.props,function(e,r){var i=r.idx,s=f[i],o=n[i],u=a[r.type]||{};if(o===null)return;s===null?l[i]=o:(u.mod&&(o-s>u.mod/2?s+=u.mod:s-o>u.mod/2&&(s-=u.mod)),l[i]=p((o-s)*t+s,r))}),this[r](l)},blend:function(e){if(this._rgba[3]===1)return this;var n=this._rgba.slice(),r=n.pop(),i=o(e)._rgba;return o(t.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var e="rgba(",n=t.map(this._rgba,function(e,t){return e==null?t>2?1:0:e});return n[3]===1&&(n.pop(),e="rgb("),e+n.join()+")"},toHslaString:function(){var e="hsla(",n=t.map(this.hsla(),function(e,t){return e==null&&(e=t>2?1:0),t&&t<3&&(e=Math.round(e*100)+"%"),e});return n[3]===1&&(n.pop(),e="hsl("),e+n.join()+")"},toHexString:function(e){var n=this._rgba.slice(),r=n.pop();return e&&n.push(~~(r*255)),"#"+t.map(n,function(e){return e=(e||0).toString(16),e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),o.fn.parse.prototype=o.fn,u.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),o=Math.min(t,n,r),u=s-o,a=s+o,f=a*.5,l,c;return o===s?l=0:t===s?l=60*(n-r)/u+360:n===s?l=60*(r-t)/u+120:l=60*(t-n)/u+240,f===0||f===1?c=f:f<=.5?c=u/a:c=u/(2-a),[Math.round(l)%360,c,f,i==null?1:i]},u.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/360,n=e[1],r=e[2],i=e[3],s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;return[Math.round(v(o,s,t+1/3)*255),Math.round(v(o,s,t)*255),Math.round(v(o,s,t-1/3)*255),i]},h(u,function(e,r){var s=r.props,u=r.cache,a=r.to,f=r.from;o.fn[e]=function(e){a&&!this[u]&&(this[u]=a(this._rgba));if(e===n)return this[u].slice();var r,i=t.type(e),l=i==="array"||i==="object"?e:arguments,c=this[u].slice();return h(s,function(e,t){var n=l[i==="object"?e:t.idx];n==null&&(n=c[t.idx]),c[t.idx]=p(n,t)}),f?(r=o(f(c)),r[u]=c,r):o(c)},h(s,function(n,r){if(o.fn[n])return;o.fn[n]=function(s){var o=t.type(s),u=n==="alpha"?this._hsla?"hsla":"rgba":e,a=this[u](),f=a[r.idx],l;return o==="undefined"?f:(o==="function"&&(s=s.call(this,f),o=t.type(s)),s==null&&r.empty?this:(o==="string"&&(l=i.exec(s),l&&(s=f+parseFloat(l[2])*(l[1]==="+"?1:-1))),a[r.idx]=s,this[u](a)))}})}),h(r,function(e,n){t.cssHooks[n]={set:function(e,r){var i,s,u="";if(t.type(r)!=="string"||(i=d(r))){r=o(i||r);if(!f.rgba&&r._rgba[3]!==1){s=n==="backgroundColor"?e.parentNode:e;while((u===""||u==="transparent")&&s&&s.style)try{u=t.css(s,"backgroundColor"),s=s.parentNode}catch(a){}r=r.blend(u&&u!=="transparent"?u:"_default")}r=r.toRgbaString()}try{e.style[n]=r}catch(l){}}},t.fx.step[n]=function(e){e.colorInit||(e.start=o(e.elem,n),e.end=o(e.end),e.colorInit=!0),t.cssHooks[n].set(e.elem,e.start.transition(e.end,e.pos))}}),t.cssHooks.borderColor={expand:function(e){var t={};return h(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e}),t}},c=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(){var t=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,n={},r,i;if(t&&t.length&&t[0]&&t[t[0]]){i=t.length;while(i--)r=t[i],typeof t[r]=="string"&&(n[e.camelCase(r)]=t[r])}else for(r in t)typeof t[r]=="string"&&(n[r]=t[r]);return n}function s(t,n){var i={},s,o;for(s in n)o=n[s],t[s]!==o&&!r[s]&&(e.fx.step[s]||!isNaN(parseFloat(o)))&&(i[s]=o);return i}var n=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr)jQuery.style(e.elem,n,e.end),e.setAttr=!0}}),e.effects.animateClass=function(t,r,o,u){var a=e.speed(r,o,u);return this.queue(function(){var r=e(this),o=r.attr("class")||"",u,f=a.children?r.find("*").andSelf():r;f=f.map(function(){var t=e(this);return{el:t,start:i.call(this)}}),u=function(){e.each(n,function(e,n){t[n]&&r[n+"Class"](t[n])})},u(),f=f.map(function(){return this.end=i.call(this.el[0]),this.diff=s(this.start,this.end),this}),r.attr("class",o),f=f.map(function(){var t=this,n=e.Deferred(),r=jQuery.extend({},a,{queue:!1,complete:function(){n.resolve(t)}});return this.el.animate(this.diff,r),n.promise()}),e.when.apply(e,f.get()).done(function(){u(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),a.complete.call(r[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{add:t},n,r,i):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{remove:t},n,r,i):this._removeClass(t)},_toggleClass:e.fn.toggleClass,toggleClass:function(n,r,i,s,o){return typeof r=="boolean"||r===t?i?e.effects.animateClass.call(this,r?{add:n}:{remove:n},i,s,o):this._toggleClass(n,r):e.effects.animateClass.call(this,{toggle:n},r,i,s)},switchClass:function(t,n,r,i,s){return e.effects.animateClass.call(this,{add:n,remove:t},r,i,s)}})}(),function(){function i(t,n,r,i){e.isPlainObject(t)&&(n=t,t=t.effect),t={effect:t},n==null&&(n={}),e.isFunction(n)&&(i=n,r=null,n={});if(typeof n=="number"||e.fx.speeds[n])i=r,r=n,n={};return e.isFunction(r)&&(i=r,r=null),n&&e.extend(t,n),r=r||n.duration,t.duration=e.fx.off?0:typeof r=="number"?r:r in e.fx.speeds?e.fx.speeds[r]:e.fx.speeds._default,t.complete=i||n.complete,t}function s(t){return!t||typeof t=="number"||e.fx.speeds[t]?!0:typeof t=="string"&&!e.effects.effect[t]?n&&e.effects[t]?!1:!0:!1}e.extend(e.effects,{version:"1.9.2",save:function(e,t){for(var n=0;n<t.length;n++)t[n]!==null&&e.data(r+t[n],e[0].style[t[n]])},restore:function(e,n){var i,s;for(s=0;s<n.length;s++)n[s]!==null&&(i=e.data(r+n[s]),i===t&&(i=""),e.css(n[s],i))},setMode:function(e,t){return t==="toggle"&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var n,r;switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=e[1]/t.width}return{x:r,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var n={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},r=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i={width:t.width(),height:t.height()},s=document.activeElement;try{s.id}catch(o){s=document.body}return t.wrap(r),(t[0]===s||e.contains(t[0],s))&&e(s).focus(),r=t.parent(),t.css("position")==="static"?(r.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,r){n[r]=t.css(r),isNaN(parseInt(n[r],10))&&(n[r]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(i),r.css(n).show()},removeWrapper:function(t){var n=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===n||e.contains(t[0],n))&&e(n).focus()),t},setTransition:function(t,n,r,i){return i=i||{},e.each(n,function(e,n){var s=t.cssUnit(n);s[0]>0&&(i[n]=s[0]*r+s[1])}),i}}),e.fn.extend({effect:function(){function a(n){function u(){e.isFunction(i)&&i.call(r[0]),e.isFunction(n)&&n()}var r=e(this),i=t.complete,s=t.mode;(r.is(":hidden")?s==="hide":s==="show")?u():o.call(r[0],t,u)}var t=i.apply(this,arguments),r=t.mode,s=t.queue,o=e.effects.effect[t.effect],u=!o&&n&&e.effects[t.effect];return e.fx.off||!o&&!u?r?this[r](t.duration,t.complete):this.each(function(){t.complete&&t.complete.call(this)}):o?s===!1?this.each(a):this.queue(s||"fx",a):u.call(this,{options:t,duration:t.duration,callback:t.complete,mode:t.mode})},_show:e.fn.show,show:function(e){if(s(e))return this._show.apply(this,arguments);var t=i.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(s(e))return this._hide.apply(this,arguments);var t=i.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(s(t)||typeof t=="boolean"||e.isFunction(t))return this.__toggle.apply(this,arguments);var n=i.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)},cssUnit:function(t){var n=this.css(t),r=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(r=[parseFloat(n),t])}),r}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11);return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}}),e.each(t,function(t,n){e.easing["easeIn"+t]=n,e.easing["easeOut"+t]=function(e){return 1-n(1-e)},e.easing["easeInOut"+t]=function(e){return e<.5?n(e*2)/2:1-n(e*-2+2)/2}})}()}(jQuery);(function(e,t){var n=/up|down|vertical/,r=/up|left|vertical|horizontal/;e.effects.effect.blind=function(t,i){var s=e(this),o=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(s,t.mode||"hide"),a=t.direction||"up",f=n.test(a),l=f?"height":"width",c=f?"top":"left",h=r.test(a),p={},d=u==="show",v,m,g;s.parent().is(".ui-effects-wrapper")?e.effects.save(s.parent(),o):e.effects.save(s,o),s.show(),v=e.effects.createWrapper(s).css({overflow:"hidden"}),m=v[l](),g=parseFloat(v.css(c))||0,p[l]=d?m:0,h||(s.css(f?"bottom":"right",0).css(f?"top":"left","auto").css({position:"absolute"}),p[c]=d?g:m+g),d&&(v.css(l,0),h||v.css(c,g+m)),v.animate(p,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){u==="hide"&&s.hide(),e.effects.restore(s,o),e.effects.removeWrapper(s),i()}})}})(jQuery);(function(e,t){e.effects.effect.bounce=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"effect"),o=s==="hide",u=s==="show",a=t.direction||"up",f=t.distance,l=t.times||5,c=l*2+(u||o?1:0),h=t.duration/c,p=t.easing,d=a==="up"||a==="down"?"top":"left",v=a==="up"||a==="left",m,g,y,b=r.queue(),w=b.length;(u||o)&&i.push("opacity"),e.effects.save(r,i),r.show(),e.effects.createWrapper(r),f||(f=r[d==="top"?"outerHeight":"outerWidth"]()/3),u&&(y={opacity:1},y[d]=0,r.css("opacity",0).css(d,v?-f*2:f*2).animate(y,h,p)),o&&(f/=Math.pow(2,l-1)),y={},y[d]=0;for(m=0;m<l;m++)g={},g[d]=(v?"-=":"+=")+f,r.animate(g,h,p).animate(y,h,p),f=o?f*2:f/2;o&&(g={opacity:0},g[d]=(v?"-=":"+=")+f,r.animate(g,h,p)),r.queue(function(){o&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}),w>1&&b.splice.apply(b,[1,0].concat(b.splice(w,c+1))),r.dequeue()}})(jQuery);(function(e,t){e.effects.effect.clip=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=t.direction||"vertical",a=u==="vertical",f=a?"height":"width",l=a?"top":"left",c={},h,p,d;e.effects.save(r,i),r.show(),h=e.effects.createWrapper(r).css({overflow:"hidden"}),p=r[0].tagName==="IMG"?h:r,d=p[f](),o&&(p.css(f,0),p.css(l,d/2)),c[f]=o?d:0,c[l]=o?0:d/2,p.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){o||r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(jQuery);(function(e,t){e.effects.effect.drop=function(t,n){var r=e(this),i=["position","top","bottom","left","right","opacity","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=t.direction||"left",a=u==="up"||u==="down"?"top":"left",f=u==="up"||u==="left"?"pos":"neg",l={opacity:o?1:0},c;e.effects.save(r,i),r.show(),e.effects.createWrapper(r),c=t.distance||r[a==="top"?"outerHeight":"outerWidth"](!0)/2,o&&r.css("opacity",0).css(a,f==="pos"?-c:c),l[a]=(o?f==="pos"?"+=":"-=":f==="pos"?"-=":"+=")+c,r.animate(l,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(jQuery);(function(e,t){e.effects.effect.explode=function(t,n){function y(){c.push(this),c.length===r*i&&b()}function b(){s.css({visibility:"visible"}),e(c).remove(),u||s.hide(),n()}var r=t.pieces?Math.round(Math.sqrt(t.pieces)):3,i=r,s=e(this),o=e.effects.setMode(s,t.mode||"hide"),u=o==="show",a=s.show().css("visibility","hidden").offset(),f=Math.ceil(s.outerWidth()/i),l=Math.ceil(s.outerHeight()/r),c=[],h,p,d,v,m,g;for(h=0;h<r;h++){v=a.top+h*l,g=h-(r-1)/2;for(p=0;p<i;p++)d=a.left+p*f,m=p-(i-1)/2,s.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-p*f,top:-h*l}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:f,height:l,left:d+(u?m*f:0),top:v+(u?g*l:0),opacity:u?0:1}).animate({left:d+(u?0:m*f),top:v+(u?0:g*l),opacity:u?1:0},t.duration||500,t.easing,y)}}})(jQuery);(function(e,t){e.effects.effect.fade=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"toggle");r.animate({opacity:i},{queue:!1,duration:t.duration,easing:t.easing,complete:n})}})(jQuery);(function(e,t){e.effects.effect.fold=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=s==="hide",a=t.size||15,f=/([0-9]+)%/.exec(a),l=!!t.horizFirst,c=o!==l,h=c?["width","height"]:["height","width"],p=t.duration/2,d,v,m={},g={};e.effects.save(r,i),r.show(),d=e.effects.createWrapper(r).css({overflow:"hidden"}),v=c?[d.width(),d.height()]:[d.height(),d.width()],f&&(a=parseInt(f[1],10)/100*v[u?0:1]),o&&d.css(l?{height:0,width:a}:{height:a,width:0}),m[h[0]]=o?v[0]:a,g[h[1]]=o?v[1]:0,d.animate(m,p,t.easing).animate(g,p,t.easing,function(){u&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()})}})(jQuery);(function(e,t){e.effects.effect.highlight=function(t,n){var r=e(this),i=["backgroundImage","backgroundColor","opacity"],s=e.effects.setMode(r,t.mode||"show"),o={backgroundColor:r.css("backgroundColor")};s==="hide"&&(o.opacity=0),e.effects.save(r,i),r.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),n()}})}})(jQuery);(function(e,t){e.effects.effect.pulsate=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"show"),s=i==="show",o=i==="hide",u=s||i==="hide",a=(t.times||5)*2+(u?1:0),f=t.duration/a,l=0,c=r.queue(),h=c.length,p;if(s||!r.is(":visible"))r.css("opacity",0).show(),l=1;for(p=1;p<a;p++)r.animate({opacity:l},f,t.easing),l=1-l;r.animate({opacity:l},f,t.easing),r.queue(function(){o&&r.hide(),n()}),h>1&&c.splice.apply(c,[1,0].concat(c.splice(h,a+1))),r.dequeue()}})(jQuery);(function(e,t){e.effects.effect.puff=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"hide"),s=i==="hide",o=parseInt(t.percent,10)||150,u=o/100,a={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:i,complete:n,percent:s?o:100,from:s?a:{height:a.height*u,width:a.width*u,outerHeight:a.outerHeight*u,outerWidth:a.outerWidth*u}}),r.effect(t)},e.effects.effect.scale=function(t,n){var r=e(this),i=e.extend(!0,{},t),s=e.effects.setMode(r,t.mode||"effect"),o=parseInt(t.percent,10)||(parseInt(t.percent,10)===0?0:s==="hide"?0:100),u=t.direction||"both",a=t.origin,f={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()},l={y:u!=="horizontal"?o/100:1,x:u!=="vertical"?o/100:1};i.effect="size",i.queue=!1,i.complete=n,s!=="effect"&&(i.origin=a||["middle","center"],i.restore=!0),i.from=t.from||(s==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:f),i.to={height:f.height*l.y,width:f.width*l.x,outerHeight:f.outerHeight*l.y,outerWidth:f.outerWidth*l.x},i.fade&&(s==="show"&&(i.from.opacity=0,i.to.opacity=1),s==="hide"&&(i.from.opacity=1,i.to.opacity=0)),r.effect(i)},e.effects.effect.size=function(t,n){var r,i,s,o=e(this),u=["position","top","bottom","left","right","width","height","overflow","opacity"],a=["position","top","bottom","left","right","overflow","opacity"],f=["width","height","overflow"],l=["fontSize"],c=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],h=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(o,t.mode||"effect"),d=t.restore||p!=="effect",v=t.scale||"both",m=t.origin||["middle","center"],g=o.css("position"),y=d?u:a,b={height:0,width:0,outerHeight:0,outerWidth:0};p==="show"&&o.show(),r={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},t.mode==="toggle"&&p==="show"?(o.from=t.to||b,o.to=t.from||r):(o.from=t.from||(p==="show"?b:r),o.to=t.to||(p==="hide"?b:r)),s={from:{y:o.from.height/r.height,x:o.from.width/r.width},to:{y:o.to.height/r.height,x:o.to.width/r.width}};if(v==="box"||v==="both")s.from.y!==s.to.y&&(y=y.concat(c),o.from=e.effects.setTransition(o,c,s.from.y,o.from),o.to=e.effects.setTransition(o,c,s.to.y,o.to)),s.from.x!==s.to.x&&(y=y.concat(h),o.from=e.effects.setTransition(o,h,s.from.x,o.from),o.to=e.effects.setTransition(o,h,s.to.x,o.to));(v==="content"||v==="both")&&s.from.y!==s.to.y&&(y=y.concat(l).concat(f),o.from=e.effects.setTransition(o,l,s.from.y,o.from),o.to=e.effects.setTransition(o,l,s.to.y,o.to)),e.effects.save(o,y),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),m&&(i=e.effects.getBaseline(m,r),o.from.top=(r.outerHeight-o.outerHeight())*i.y,o.from.left=(r.outerWidth-o.outerWidth())*i.x,o.to.top=(r.outerHeight-o.to.outerHeight)*i.y,o.to.left=(r.outerWidth-o.to.outerWidth)*i.x),o.css(o.from);if(v==="content"||v==="both")c=c.concat(["marginTop","marginBottom"]).concat(l),h=h.concat(["marginLeft","marginRight"]),f=u.concat(c).concat(h),o.find("*[width]").each(function(){var n=e(this),r={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()};d&&e.effects.save(n,f),n.from={height:r.height*s.from.y,width:r.width*s.from.x,outerHeight:r.outerHeight*s.from.y,outerWidth:r.outerWidth*s.from.x},n.to={height:r.height*s.to.y,width:r.width*s.to.x,outerHeight:r.height*s.to.y,outerWidth:r.width*s.to.x},s.from.y!==s.to.y&&(n.from=e.effects.setTransition(n,c,s.from.y,n.from),n.to=e.effects.setTransition(n,c,s.to.y,n.to)),s.from.x!==s.to.x&&(n.from=e.effects.setTransition(n,h,s.from.x,n.from),n.to=e.effects.setTransition(n,h,s.to.x,n.to)),n.css(n.from),n.animate(n.to,t.duration,t.easing,function(){d&&e.effects.restore(n,f)})});o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){o.to.opacity===0&&o.css("opacity",o.from.opacity),p==="hide"&&o.hide(),e.effects.restore(o,y),d||(g==="static"?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],function(e,t){o.css(t,function(t,n){var r=parseInt(n,10),i=e?o.to.left:o.to.top;return n==="auto"?i+"px":r+i+"px"})})),e.effects.removeWrapper(o),n()}})}})(jQuery);(function(e,t){e.effects.effect.shake=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"effect"),o=t.direction||"left",u=t.distance||20,a=t.times||3,f=a*2+1,l=Math.round(t.duration/f),c=o==="up"||o==="down"?"top":"left",h=o==="up"||o==="left",p={},d={},v={},m,g=r.queue(),y=g.length;e.effects.save(r,i),r.show(),e.effects.createWrapper(r),p[c]=(h?"-=":"+=")+u,d[c]=(h?"+=":"-=")+u*2,v[c]=(h?"-=":"+=")+u*2,r.animate(p,l,t.easing);for(m=1;m<a;m++)r.animate(d,l,t.easing).animate(v,l,t.easing);r.animate(d,l,t.easing).animate(p,l/2,t.easing).queue(function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}),y>1&&g.splice.apply(g,[1,0].concat(g.splice(y,f+1))),r.dequeue()}})(jQuery);(function(e,t){e.effects.effect.slide=function(t,n){var r=e(this),i=["position","top","bottom","left","right","width","height"],s=e.effects.setMode(r,t.mode||"show"),o=s==="show",u=t.direction||"left",a=u==="up"||u==="down"?"top":"left",f=u==="up"||u==="left",l,c={};e.effects.save(r,i),r.show(),l=t.distance||r[a==="top"?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(r).css({overflow:"hidden"}),o&&r.css(a,f?isNaN(l)?"-"+l:-l:l),c[a]=(o?f?"+=":"-=":f?"-=":"+=")+l,r.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(jQuery);(function(e,t){e.effects.effect.transfer=function(t,n){var r=e(this),i=e(t.to),s=i.css("position")==="fixed",o=e("body"),u=s?o.scrollTop():0,a=s?o.scrollLeft():0,f=i.offset(),l={top:f.top-u,left:f.left-a,height:i.innerHeight(),width:i.innerWidth()},c=r.offset(),h=e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.className).css({top:c.top-u,left:c.left-a,height:r.innerHeight(),width:r.innerWidth(),position:s?"fixed":"absolute"}).animate(l,t.duration,t.easing,function(){h.remove(),n()})}})(jQuery);(function(e,t){var n=!1;e.widget("ui.menu",{version:"1.9.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,e.proxy(function(e){this.options.disabled&&e.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(e){e.preventDefault()},"click .ui-state-disabled > a":function(e){e.preventDefault()},"click .ui-menu-item:has(a)":function(t){var r=e(t.target).closest(".ui-menu-item");!n&&r.not(".ui-state-disabled").length&&(n=!0,this.select(t),r.has(".ui-menu").length?this.expand(t):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&this.active.parents(".ui-menu").length===1&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){var n=e(t.currentTarget);n.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(t,n)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var n=this.active||this.element.children(".ui-menu-item").eq(0);t||this.focus(e,n)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){e(t.target).closest(".ui-menu").length||this.collapseAll(t),n=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){function a(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var n,r,i,s,o,u=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:u=!1,r=this.previousFilter||"",i=String.fromCharCode(t.keyCode),s=!1,clearTimeout(this.filterTimer),i===r?s=!0:i=r+i,o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())}),n=s&&n.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):n,n.length||(i=String.fromCharCode(t.keyCode),o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())})),n.length?(this.focus(t,n),n.length>1?(this.previousFilter=i,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}u&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var t,n=this.options.icons.submenu,r=this.element.find(this.options.menus);r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),r=t.prev("a"),i=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);r.attr("aria-haspopup","true").prepend(i),t.attr("aria-labelledby",r.attr("id"))}),t=r.add(this.element),t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),t.children(":not(.ui-menu-item)").each(function(){var t=e(this);/[^\-—–\s]/.test(t.text())||t.addClass("ui-widget-content ui-menu-divider")}),t.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},focus:function(e,t){var n,r;this.blur(e,e&&e.type==="focus"),this._scrollIntoView(t),this.active=t.first(),r=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",r.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),e&&e.type==="keydown"?this._close():this.timer=this._delay(function(){this._close()},this.delay),n=t.children(".ui-menu"),n.length&&/^mouse/.test(e.type)&&this._startOpening(n),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var n,r,i,s,o,u;this._hasScroll()&&(n=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,r=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,i=t.offset().top-this.activeMenu.offset().top-n-r,s=this.activeMenu.scrollTop(),o=this.activeMenu.height(),u=t.height(),i<0?this.activeMenu.scrollTop(s+i):i+u>o&&this.activeMenu.scrollTop(s+i-o+u))},blur:function(e,t){t||clearTimeout(this.timer);if(!this.active)return;this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active})},_startOpening:function(e){clearTimeout(this.timer);if(e.attr("aria-hidden")!=="true")return;this.timer=this._delay(function(){this._close(),this._open(e)},this.delay)},_open:function(t){var n=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(n)},collapseAll:function(t,n){clearTimeout(this.timer),this.timer=this._delay(function(){var r=n?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));r.length||(r=this.element),this._close(r),this.blur(t),this.activeMenu=r},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,n){var r;this.active&&(e==="first"||e==="last"?r=this.active[e==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1):r=this.active[e+"All"](".ui-menu-item").eq(0));if(!r||!r.length||!this.active)r=this.activeMenu.children(".ui-menu-item")[t]();this.focus(n,r)},nextPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isLastItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r-i<0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())},previousPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isFirstItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r+i>0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item").first())},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var n={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,n)}})})(jQuery);(function(e,t){e.widget("ui.progressbar",{version:"1.9.2",options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this.oldValue=this._value(),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(e){return e===t?this._value():(this._setOption("value",e),this)},_setOption:function(e,t){e==="value"&&(this.options.value=t,this._refreshValue(),this._value()===this.options.max&&this._trigger("complete")),this._super(e,t)},_value:function(){var e=this.options.value;return typeof e!="number"&&(e=0),Math.min(this.options.max,Math.max(this.min,e))},_percentage:function(){return 100*this._value()/this.options.max},_refreshValue:function(){var e=this.value(),t=this._percentage();this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),this.valueDiv.toggle(e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(t.toFixed(0)+"%"),this.element.attr("aria-valuenow",e)}})})(jQuery);(function(e,t){e.widget("ui.resizable",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1e3},_create:function(){var t=this,n=this.options;this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!n.aspectRatio,aspectRatio:n.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:n.helper||n.ghost||n.animate?n.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("resizable",this.element.data("resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=n.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");if(this.handles.constructor==String){this.handles=="all"&&(this.handles="n,e,s,w,se,sw,ne,nw");var r=this.handles.split(",");this.handles={};for(var i=0;i<r.length;i++){var s=e.trim(r[i]),o="ui-resizable-"+s,u=e('<div class="ui-resizable-handle '+o+'"></div>');u.css({zIndex:n.zIndex}),"se"==s&&u.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(u)}}this._renderAxis=function(t){t=t||this.element;for(var n in this.handles){this.handles[n].constructor==String&&(this.handles[n]=e(this.handles[n],this.element).show());if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var r=e(this.handles[n],this.element),i=0;i=/sw|ne|nw|se|n|s/.test(n)?r.outerHeight():r.outerWidth();var s=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("");t.css(s,i),this._proportionallyResize()}if(!e(this.handles[n]).length)continue}},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){if(!t.resizing){if(this.className)var e=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);t.axis=e&&e[1]?e[1]:"se"}}),n.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(n.disabled)return;e(this).removeClass("ui-resizable-autohide"),t._handles.show()}).mouseleave(function(){if(n.disabled)return;t.resizing||(e(this).addClass("ui-resizable-autohide"),t._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){t(this.element);var n=this.element;this.originalElement.css({position:n.css("position"),width:n.outerWidth(),height:n.outerHeight(),top:n.css("top"),left:n.css("left")}).insertAfter(n),n.remove()}return this.originalElement.css("resize",this.originalResizeStyle),t(this.originalElement),this},_mouseCapture:function(t){var n=!1;for(var r in this.handles)e(this.handles[r])[0]==t.target&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(t){var r=this.options,i=this.element.position(),s=this.element;this.resizing=!0,this.documentScroll={top:e(document).scrollTop(),left:e(document).scrollLeft()},(s.is(".ui-draggable")||/absolute/.test(s.css("position")))&&s.css({position:"absolute",top:i.top,left:i.left}),this._renderProxy();var o=n(this.helper.css("left")),u=n(this.helper.css("top"));r.containment&&(o+=e(r.containment).scrollLeft()||0,u+=e(r.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:o,top:u},this.size=this._helper?{width:s.outerWidth(),height:s.outerHeight()}:{width:s.width(),height:s.height()},this.originalSize=this._helper?{width:s.outerWidth(),height:s.outerHeight()}:{width:s.width(),height:s.height()},this.originalPosition={left:o,top:u},this.sizeDiff={width:s.outerWidth()-s.width(),height:s.outerHeight()-s.height()},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio=typeof r.aspectRatio=="number"?r.aspectRatio:this.originalSize.width/this.originalSize.height||1;var a=e(".ui-resizable-"+this.axis).css("cursor");return e("body").css("cursor",a=="auto"?this.axis+"-resize":a),s.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(e){var t=this.helper,n=this.options,r={},i=this,s=this.originalMousePosition,o=this.axis,u=e.pageX-s.left||0,a=e.pageY-s.top||0,f=this._change[o];if(!f)return!1;var l=f.apply(this,[e,u,a]);this._updateVirtualBoundaries(e.shiftKey);if(this._aspectRatio||e.shiftKey)l=this._updateRatio(l,e);return l=this._respectSize(l,e),this._propagate("resize",e),t.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"}),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),this._updateCache(l),this._trigger("resize",e,this.ui()),!1},_mouseStop:function(t){this.resizing=!1;var n=this.options,r=this;if(this._helper){var i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),o=s&&e.ui.hasScroll(i[0],"left")?0:r.sizeDiff.height,u=s?0:r.sizeDiff.width,a={width:r.helper.width()-u,height:r.helper.height()-o},f=parseInt(r.element.css("left"),10)+(r.position.left-r.originalPosition.left)||null,l=parseInt(r.element.css("top"),10)+(r.position.top-r.originalPosition.top)||null;n.animate||this.element.css(e.extend(a,{top:l,left:f})),r.helper.height(r.size.height),r.helper.width(r.size.width),this._helper&&!n.animate&&this._proportionallyResize()}return e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t=this.options,n,i,s,o,u;u={minWidth:r(t.minWidth)?t.minWidth:0,maxWidth:r(t.maxWidth)?t.maxWidth:Infinity,minHeight:r(t.minHeight)?t.minHeight:0,maxHeight:r(t.maxHeight)?t.maxHeight:Infinity};if(this._aspectRatio||e)n=u.minHeight*this.aspectRatio,s=u.minWidth/this.aspectRatio,i=u.maxHeight*this.aspectRatio,o=u.maxWidth/this.aspectRatio,n>u.minWidth&&(u.minWidth=n),s>u.minHeight&&(u.minHeight=s),i<u.maxWidth&&(u.maxWidth=i),o<u.maxHeight&&(u.maxHeight=o);this._vBoundaries=u},_updateCache:function(e){var t=this.options;this.offset=this.helper.offset(),r(e.left)&&(this.position.left=e.left),r(e.top)&&(this.position.top=e.top),r(e.height)&&(this.size.height=e.height),r(e.width)&&(this.size.width=e.width)},_updateRatio:function(e,t){var n=this.options,i=this.position,s=this.size,o=this.axis;return r(e.height)?e.width=e.height*this.aspectRatio:r(e.width)&&(e.height=e.width/this.aspectRatio),o=="sw"&&(e.left=i.left+(s.width-e.width),e.top=null),o=="nw"&&(e.top=i.top+(s.height-e.height),e.left=i.left+(s.width-e.width)),e},_respectSize:function(e,t){var n=this.helper,i=this._vBoundaries,s=this._aspectRatio||t.shiftKey,o=this.axis,u=r(e.width)&&i.maxWidth&&i.maxWidth<e.width,a=r(e.height)&&i.maxHeight&&i.maxHeight<e.height,f=r(e.width)&&i.minWidth&&i.minWidth>e.width,l=r(e.height)&&i.minHeight&&i.minHeight>e.height;f&&(e.width=i.minWidth),l&&(e.height=i.minHeight),u&&(e.width=i.maxWidth),a&&(e.height=i.maxHeight);var c=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,p=/sw|nw|w/.test(o),d=/nw|ne|n/.test(o);f&&p&&(e.left=c-i.minWidth),u&&p&&(e.left=c-i.maxWidth),l&&d&&(e.top=h-i.minHeight),a&&d&&(e.top=h-i.maxHeight);var v=!e.width&&!e.height;return v&&!e.left&&e.top?e.top=null:v&&!e.top&&e.left&&(e.left=null),e},_proportionallyResize:function(){var t=this.options;if(!this._proportionallyResizeElements.length)return;var n=this.helper||this.element;for(var r=0;r<this._proportionallyResizeElements.length;r++){var i=this._proportionallyResizeElements[r];if(!this.borderDif){var s=[i.css("borderTopWidth"),i.css("borderRightWidth"),i.css("borderBottomWidth"),i.css("borderLeftWidth")],o=[i.css("paddingTop"),i.css("paddingRight"),i.css("paddingBottom"),i.css("paddingLeft")];this.borderDif=e.map(s,function(e,t){var n=parseInt(e,10)||0,r=parseInt(o[t],10)||0;return n+r})}i.css({height:n.height()-this.borderDif[0]-this.borderDif[2]||0,width:n.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var t=this.element,n=this.options;this.elementOffset=t.offset();if(this._helper){this.helper=this.helper||e('<div style="overflow:hidden;"></div>');var r=e.ui.ie6?1:0,i=e.ui.ie6?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+i,height:this.element.outerHeight()+i,position:"absolute",left:this.elementOffset.left-r+"px",top:this.elementOffset.top-r+"px",zIndex:++n.zIndex}),this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(e,t,n){return{width:this.originalSize.width+t}},w:function(e,t,n){var r=this.options,i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,n){var r=this.options,i=this.originalSize,s=this.originalPosition;return{top:s.top+n,height:i.height-n}},s:function(e,t,n){return{height:this.originalSize.height+n}},se:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},sw:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,n,r]))},ne:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},nw:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,n,r]))}},_propagate:function(t,n){e.ui.plugin.call(this,t,[n,this.ui()]),t!="resize"&&this._trigger(t,n,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","alsoResize",{start:function(t,n){var r=e(this).data("resizable"),i=r.options,s=function(t){e(t).each(function(){var t=e(this);t.data("resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};typeof i.alsoResize=="object"&&!i.alsoResize.parentNode?i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)}):s(i.alsoResize)},resize:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r.originalSize,o=r.originalPosition,u={height:r.size.height-s.height||0,width:r.size.width-s.width||0,top:r.position.top-o.top||0,left:r.position.left-o.left||0},a=function(t,r){e(t).each(function(){var t=e(this),i=e(this).data("resizable-alsoresize"),s={},o=r&&r.length?r:t.parents(n.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var n=(i[t]||0)+(u[t]||0);n&&n>=0&&(s[t]=n||null)}),t.css(s)})};typeof i.alsoResize=="object"&&!i.alsoResize.nodeType?e.each(i.alsoResize,function(e,t){a(e,t)}):a(i.alsoResize)},stop:function(t,n){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","animate",{stop:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r._proportionallyResizeElements,o=s.length&&/textarea/i.test(s[0].nodeName),u=o&&e.ui.hasScroll(s[0],"left")?0:r.sizeDiff.height,a=o?0:r.sizeDiff.width,f={width:r.size.width-a,height:r.size.height-u},l=parseInt(r.element.css("left"),10)+(r.position.left-r.originalPosition.left)||null,c=parseInt(r.element.css("top"),10)+(r.position.top-r.originalPosition.top)||null;r.element.animate(e.extend(f,c&&l?{top:c,left:l}:{}),{duration:i.animateDuration,easing:i.animateEasing,step:function(){var n={width:parseInt(r.element.css("width"),10),height:parseInt(r.element.css("height"),10),top:parseInt(r.element.css("top"),10),left:parseInt(r.element.css("left"),10)};s&&s.length&&e(s[0]).css({width:n.width,height:n.height}),r._updateCache(n),r._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(t,r){var i=e(this).data("resizable"),s=i.options,o=i.element,u=s.containment,a=u instanceof e?u.get(0):/parent/.test(u)?o.parent().get(0):u;if(!a)return;i.containerElement=e(a);if(/document/.test(u)||u==document)i.containerOffset={left:0,top:0},i.containerPosition={left:0,top:0},i.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight};else{var f=e(a),l=[];e(["Top","Right","Left","Bottom"]).each(function(e,t){l[e]=n(f.css("padding"+t))}),i.containerOffset=f.offset(),i.containerPosition=f.position(),i.containerSize={height:f.innerHeight()-l[3],width:f.innerWidth()-l[1]};var c=i.containerOffset,h=i.containerSize.height,p=i.containerSize.width,d=e.ui.hasScroll(a,"left")?a.scrollWidth:p,v=e.ui.hasScroll(a)?a.scrollHeight:h;i.parentData={element:a,left:c.left,top:c.top,width:d,height:v}}},resize:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r.containerSize,o=r.containerOffset,u=r.size,a=r.position,f=r._aspectRatio||t.shiftKey,l={top:0,left:0},c=r.containerElement;c[0]!=document&&/static/.test(c.css("position"))&&(l=o),a.left<(r._helper?o.left:0)&&(r.size.width=r.size.width+(r._helper?r.position.left-o.left:r.position.left-l.left),f&&(r.size.height=r.size.width/r.aspectRatio),r.position.left=i.helper?o.left:0),a.top<(r._helper?o.top:0)&&(r.size.height=r.size.height+(r._helper?r.position.top-o.top:r.position.top),f&&(r.size.width=r.size.height*r.aspectRatio),r.position.top=r._helper?o.top:0),r.offset.left=r.parentData.left+r.position.left,r.offset.top=r.parentData.top+r.position.top;var h=Math.abs((r._helper?r.offset.left-l.left:r.offset.left-l.left)+r.sizeDiff.width),p=Math.abs((r._helper?r.offset.top-l.top:r.offset.top-o.top)+r.sizeDiff.height),d=r.containerElement.get(0)==r.element.parent().get(0),v=/relative|absolute/.test(r.containerElement.css("position"));d&&v&&(h-=r.parentData.left),h+r.size.width>=r.parentData.width&&(r.size.width=r.parentData.width-h,f&&(r.size.height=r.size.width/r.aspectRatio)),p+r.size.height>=r.parentData.height&&(r.size.height=r.parentData.height-p,f&&(r.size.width=r.size.height*r.aspectRatio))},stop:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r.position,o=r.containerOffset,u=r.containerPosition,a=r.containerElement,f=e(r.helper),l=f.offset(),c=f.outerWidth()-r.sizeDiff.width,h=f.outerHeight()-r.sizeDiff.height;r._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:l.left-u.left-o.left,width:c,height:h}),r._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:l.left-u.left-o.left,width:c,height:h})}}),e.ui.plugin.add("resizable","ghost",{start:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r.size;r.ghost=r.originalElement.clone(),r.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof i.ghost=="string"?i.ghost:""),r.ghost.appendTo(r.helper)},resize:function(t,n){var r=e(this).data("resizable"),i=r.options;r.ghost&&r.ghost.css({position:"relative",height:r.size.height,width:r.size.width})},stop:function(t,n){var r=e(this).data("resizable"),i=r.options;r.ghost&&r.helper&&r.helper.get(0).removeChild(r.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(t,n){var r=e(this).data("resizable"),i=r.options,s=r.size,o=r.originalSize,u=r.originalPosition,a=r.axis,f=i._aspectRatio||t.shiftKey;i.grid=typeof i.grid=="number"?[i.grid,i.grid]:i.grid;var l=Math.round((s.width-o.width)/(i.grid[0]||1))*(i.grid[0]||1),c=Math.round((s.height-o.height)/(i.grid[1]||1))*(i.grid[1]||1);/^(se|s|e)$/.test(a)?(r.size.width=o.width+l,r.size.height=o.height+c):/^(ne)$/.test(a)?(r.size.width=o.width+l,r.size.height=o.height+c,r.position.top=u.top-c):/^(sw)$/.test(a)?(r.size.width=o.width+l,r.size.height=o.height+c,r.position.left=u.left-l):(r.size.width=o.width+l,r.size.height=o.height+c,r.position.top=u.top-c,r.position.left=u.left-l)}});var n=function(e){return parseInt(e,10)||0},r=function(e){return!isNaN(parseInt(e,10))}})(jQuery);(function(e,t){e.widget("ui.selectable",e.ui.mouse,{version:"1.9.2",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch"},_create:function(){var t=this;this.element.addClass("ui-selectable"),this.dragged=!1;var n;this.refresh=function(){n=e(t.options.filter,t.element[0]),n.addClass("ui-selectee"),n.each(function(){var t=e(this),n=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:n.left,top:n.top,right:n.left+t.outerWidth(),bottom:n.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=n.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var n=this;this.opos=[t.pageX,t.pageY];if(this.options.disabled)return;var r=this.options;this.selectees=e(r.filter,this.element[0]),this._trigger("start",t),e(r.appendTo).append(this.helper),this.helper.css({left:t.clientX,top:t.clientY,width:0,height:0}),r.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var r=e.data(this,"selectable-item");r.startselected=!0,!t.metaKey&&!t.ctrlKey&&(r.$element.removeClass("ui-selected"),r.selected=!1,r.$element.addClass("ui-unselecting"),r.unselecting=!0,n._trigger("unselecting",t,{unselecting:r.element}))}),e(t.target).parents().andSelf().each(function(){var r=e.data(this,"selectable-item");if(r){var i=!t.metaKey&&!t.ctrlKey||!r.$element.hasClass("ui-selected");return r.$element.removeClass(i?"ui-unselecting":"ui-selected").addClass(i?"ui-selecting":"ui-unselecting"),r.unselecting=!i,r.selecting=i,r.selected=i,i?n._trigger("selecting",t,{selecting:r.element}):n._trigger("unselecting",t,{unselecting:r.element}),!1}})},_mouseDrag:function(t){var n=this;this.dragged=!0;if(this.options.disabled)return;var r=this.options,i=this.opos[0],s=this.opos[1],o=t.pageX,u=t.pageY;if(i>o){var a=o;o=i,i=a}if(s>u){var a=u;u=s,s=a}return this.helper.css({left:i,top:s,width:o-i,height:u-s}),this.selectees.each(function(){var a=e.data(this,"selectable-item");if(!a||a.element==n.element[0])return;var f=!1;r.tolerance=="touch"?f=!(a.left>o||a.right<i||a.top>u||a.bottom<s):r.tolerance=="fit"&&(f=a.left>i&&a.right<o&&a.top>s&&a.bottom<u),f?(a.selected&&(a.$element.removeClass("ui-selected"),a.selected=!1),a.unselecting&&(a.$element.removeClass("ui-unselecting"),a.unselecting=!1),a.selecting||(a.$element.addClass("ui-selecting"),a.selecting=!0,n._trigger("selecting",t,{selecting:a.element}))):(a.selecting&&((t.metaKey||t.ctrlKey)&&a.startselected?(a.$element.removeClass("ui-selecting"),a.selecting=!1,a.$element.addClass("ui-selected"),a.selected=!0):(a.$element.removeClass("ui-selecting"),a.selecting=!1,a.startselected&&(a.$element.addClass("ui-unselecting"),a.unselecting=!0),n._trigger("unselecting",t,{unselecting:a.element}))),a.selected&&!t.metaKey&&!t.ctrlKey&&!a.startselected&&(a.$element.removeClass("ui-selected"),a.selected=!1,a.$element.addClass("ui-unselecting"),a.unselecting=!0,n._trigger("unselecting",t,{unselecting:a.element})))}),!1},_mouseStop:function(t){var n=this;this.dragged=!1;var r=this.options;return e(".ui-unselecting",this.element[0]).each(function(){var r=e.data(this,"selectable-item");r.$element.removeClass("ui-unselecting"),r.unselecting=!1,r.startselected=!1,n._trigger("unselected",t,{unselected:r.element})}),e(".ui-selecting",this.element[0]).each(function(){var r=e.data(this,"selectable-item");r.$element.removeClass("ui-selecting").addClass("ui-selected"),r.selecting=!1,r.selected=!0,r.startselected=!0,n._trigger("selected",t,{selected:r.element})}),this._trigger("stop",t),this.helper.remove(),!1}})})(jQuery);(function(e,t){var n=5;e.widget("ui.slider",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var t,r,i=this.options,s=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),o="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",u=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(i.disabled?" ui-slider-disabled ui-disabled":"")),this.range=e([]),i.range&&(i.range===!0&&(i.values||(i.values=[this._valueMin(),this._valueMin()]),i.values.length&&i.values.length!==2&&(i.values=[i.values[0],i.values[0]])),this.range=e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(i.range==="min"||i.range==="max"?" ui-slider-range-"+i.range:""))),r=i.values&&i.values.length||1;for(t=s.length;t<r;t++)u.push(o);this.handles=s.add(e(u.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(e){e.preventDefault()}).mouseenter(function(){i.disabled||e(this).addClass("ui-state-hover")}).mouseleave(function(){e(this).removeClass("ui-state-hover")}).focus(function(){i.disabled?e(this).blur():(e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),e(this).addClass("ui-state-focus"))}).blur(function(){e(this).removeClass("ui-state-focus")}),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)}),this._on(this.handles,{keydown:function(t){var r,i,s,o,u=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:t.preventDefault();if(!this._keySliding){this._keySliding=!0,e(t.target).addClass("ui-state-active"),r=this._start(t,u);if(r===!1)return}}o=this.options.step,this.options.values&&this.options.values.length?i=s=this.values(u):i=s=this.value();switch(t.keyCode){case e.ui.keyCode.HOME:s=this._valueMin();break;case e.ui.keyCode.END:s=this._valueMax();break;case e.ui.keyCode.PAGE_UP:s=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(i===this._valueMax())return;s=this._trimAlignValue(i+o);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i===this._valueMin())return;s=this._trimAlignValue(i-o)}this._slide(t,u,s)},keyup:function(t){var n=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,n),this._change(t,n),e(t.target).removeClass("ui-state-active"))}}),this._refreshValue(),this._animateOff=!1},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var n,r,i,s,o,u,a,f,l=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),n={x:t.pageX,y:t.pageY},r=this._normValueFromMouse(n),i=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var n=Math.abs(r-l.values(t));i>n&&(i=n,s=e(this),o=t)}),c.range===!0&&this.values(1)===c.min&&(o+=1,s=e(this.handles[o])),u=this._start(t,o),u===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,s.addClass("ui-state-active").focus(),a=s.offset(),f=!e(t.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=f?{left:0,top:0}:{left:t.pageX-a.left-s.width()/2,top:t.pageY-a.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,r),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,n),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,n,r,i,s;return this.orientation==="horizontal"?(t=this.elementSize.width,n=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,n=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),r=n/t,r>1&&(r=1),r<0&&(r=0),this.orientation==="vertical"&&(r=1-r),i=this._valueMax()-this._valueMin(),s=this._valueMin()+r*i,this._trimAlignValue(s)},_start:function(e,t){var n={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("start",e,n)},_slide:function(e,t,n){var r,i,s;this.options.values&&this.options.values.length?(r=this.values(t?0:1),this.options.values.length===2&&this.options.range===!0&&(t===0&&n>r||t===1&&n<r)&&(n=r),n!==this.values(t)&&(i=this.values(),i[t]=n,s=this._trigger("slide",e,{handle:this.handles[t],value:n,values:i}),r=this.values(t?0:1),s!==!1&&this.values(t,n,!0))):n!==this.value()&&(s=this._trigger("slide",e,{handle:this.handles[t],value:n}),s!==!1&&this.value(n))},_stop:function(e,t){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("stop",e,n)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("change",e,n)}},value:function(e){if(arguments.length){this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(t,n){var r,i,s;if(arguments.length>1){this.options.values[t]=this._trimAlignValue(n),this._refreshValue(),this._change(null,t);return}if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();r=this.options.values,i=arguments[0];for(s=0;s<r.length;s+=1)r[s]=this._trimAlignValue(i[s]),this._change(null,s);this._refreshValue()},_setOption:function(t,n){var r,i=0;e.isArray(this.options.values)&&(i=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments);switch(t){case"disabled":n?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.prop("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.prop("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(r=0;r<i;r+=1)this._change(null,r);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e),e},_values:function(e){var t,n,r;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t),t;n=this.options.values.slice();for(r=0;r<n.length;r+=1)n[r]=this._trimAlignValue(n[r]);return n},_trimAlignValue:function(e){if(e<=this._valueMin())return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,n=(e-this._valueMin())%t,r=e-n;return Math.abs(n)*2>=t&&(r+=n>0?t:-t),parseFloat(r.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,n,r,i,s,o=this.options.range,u=this.options,a=this,f=this._animateOff?!1:u.animate,l={};this.options.values&&this.options.values.length?this.handles.each(function(r){n=(a.values(r)-a._valueMin())/(a._valueMax()-a._valueMin())*100,l[a.orientation==="horizontal"?"left":"bottom"]=n+"%",e(this).stop(1,1)[f?"animate":"css"](l,u.animate),a.options.range===!0&&(a.orientation==="horizontal"?(r===0&&a.range.stop(1,1)[f?"animate":"css"]({left:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({width:n-t+"%"},{queue:!1,duration:u.animate})):(r===0&&a.range.stop(1,1)[f?"animate":"css"]({bottom:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({height:n-t+"%"},{queue:!1,duration:u.animate}))),t=n}):(r=this.value(),i=this._valueMin(),s=this._valueMax(),n=s!==i?(r-i)/(s-i)*100:0,l[this.orientation==="horizontal"?"left":"bottom"]=n+"%",this.handle.stop(1,1)[f?"animate":"css"](l,u.animate),o==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[f?"animate":"css"]({width:n+"%"},u.animate),o==="max"&&this.orientation==="horizontal"&&this.range[f?"animate":"css"]({width:100-n+"%"},{queue:!1,duration:u.animate}),o==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[f?"animate":"css"]({height:n+"%"},u.animate),o==="max"&&this.orientation==="vertical"&&this.range[f?"animate":"css"]({height:100-n+"%"},{queue:!1,duration:u.animate}))}})})(jQuery);(function(e,t){e.widget("ui.sortable",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?e.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_setOption:function(t,n){t==="disabled"?(this.options[t]=n,this.widget().toggleClass("ui-sortable-disabled",!!n)):e.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(t,n){var r=this;if(this.reverting)return!1;if(this.options.disabled||this.options.type=="static")return!1;this._refreshItems(t);var i=null,s=e(t.target).parents().each(function(){if(e.data(this,r.widgetName+"-item")==r)return i=e(this),!1});e.data(t.target,r.widgetName+"-item")==r&&(i=e(t.target));if(!i)return!1;if(this.options.handle&&!n){var o=!1;e(this.options.handle,i).find("*").andSelf().each(function(){this==t.target&&(o=!0)});if(!o)return!1}return this.currentItem=i,this._removeCurrentsFromItems(),!0},_mouseStart:function(t,n,r){var i=this.options;this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),i.containment&&this._setContainment(),i.cursor&&(e("body").css("cursor")&&(this._storedCursor=e("body").css("cursor")),e("body").css("cursor",i.cursor)),i.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",i.opacity)),i.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",i.zIndex)),this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();if(!r)for(var s=this.containers.length-1;s>=0;s--)this.containers[s]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs);if(this.options.scroll){var n=this.options,r=!1;this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<n.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+n.scrollSpeed:t.pageY-this.overflowOffset.top<n.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-n.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<n.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+n.scrollSpeed:t.pageX-this.overflowOffset.left<n.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-n.scrollSpeed)):(t.pageY-e(document).scrollTop()<n.scrollSensitivity?r=e(document).scrollTop(e(document).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<n.scrollSensitivity&&(r=e(document).scrollTop(e(document).scrollTop()+n.scrollSpeed)),t.pageX-e(document).scrollLeft()<n.scrollSensitivity?r=e(document).scrollLeft(e(document).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<n.scrollSensitivity&&(r=e(document).scrollLeft(e(document).scrollLeft()+n.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(var i=this.items.length-1;i>=0;i--){var s=this.items[i],o=s.item[0],u=this._intersectsWithPointer(s);if(!u)continue;if(s.instance!==this.currentContainer)continue;if(o!=this.currentItem[0]&&this.placeholder[u==1?"next":"prev"]()[0]!=o&&!e.contains(this.placeholder[0],o)&&(this.options.type=="semi-dynamic"?!e.contains(this.element[0],o):!0)){this.direction=u==1?"down":"up";if(this.options.tolerance!="pointer"&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,n){if(!t)return;e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t);if(this.options.revert){var r=this,i=this.placeholder.offset();this.reverting=!0,e(this.helper).animate({left:i.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:i.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){r._clear(t)})}else this._clear(t,n);return!1},cancel:function(){if(this.dragging){this._mouseUp({target:null}),this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];return t=t||{},e(n).each(function(){var n=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[-=_](.+)/);n&&r.push((t.key||n[1]+"[]")+"="+(t.key&&t.expression?n[1]:n[2]))}),!r.length&&t.key&&r.push(t.key+"="),r.join("&")},toArray:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];return t=t||{},n.each(function(){r.push(e(t.item||this).attr(t.attribute||"id")||"")}),r},_intersectsWith:function(e){var t=this.positionAbs.left,n=t+this.helperProportions.width,r=this.positionAbs.top,i=r+this.helperProportions.height,s=e.left,o=s+e.width,u=e.top,a=u+e.height,f=this.offset.click.top,l=this.offset.click.left,c=r+f>u&&r+f<a&&t+l>s&&t+l<o;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?c:s<t+this.helperProportions.width/2&&n-this.helperProportions.width/2<o&&u<r+this.helperProportions.height/2&&i-this.helperProportions.height/2<a},_intersectsWithPointer:function(t){var n=this.options.axis==="x"||e.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),r=this.options.axis==="y"||e.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),i=n&&r,s=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return i?this.floating?o&&o=="right"||s=="down"?2:1:s&&(s=="down"?2:1):!1},_intersectsWithSides:function(t){var n=e.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),r=e.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),i=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection();return this.floating&&s?s=="right"&&r||s=="left"&&!r:i&&(i=="down"&&n||i=="up"&&!n)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return e!=0&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return e!=0&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor==String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){var n=[],r=[],i=this._connectWith();if(i&&t)for(var s=i.length-1;s>=0;s--){var o=e(i[s]);for(var u=o.length-1;u>=0;u--){var a=e.data(o[u],this.widgetName);a&&a!=this&&!a.options.disabled&&r.push([e.isFunction(a.options.items)?a.options.items.call(a.element):e(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a])}}r.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var s=r.length-1;s>=0;s--)r[s][0].each(function(){n.push(this)});return e(n)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var n=0;n<t.length;n++)if(t[n]==e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var n=this.items,r=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],i=this._connectWith();if(i&&this.ready)for(var s=i.length-1;s>=0;s--){var o=e(i[s]);for(var u=o.length-1;u>=0;u--){var a=e.data(o[u],this.widgetName);a&&a!=this&&!a.options.disabled&&(r.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a))}}for(var s=r.length-1;s>=0;s--){var f=r[s][1],l=r[s][0];for(var u=0,c=l.length;u<c;u++){var h=e(l[u]);h.data(this.widgetName+"-item",f),n.push({item:h,instance:f,width:0,height:0,left:0,top:0})}}},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var n=this.items.length-1;n>=0;n--){var r=this.items[n];if(r.instance!=this.currentContainer&&this.currentContainer&&r.item[0]!=this.currentItem[0])continue;var i=this.options.toleranceElement?e(this.options.toleranceElement,r.item):r.item;t||(r.width=i.outerWidth(),r.height=i.outerHeight());var s=i.offset();r.left=s.left,r.top=s.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(var n=this.containers.length-1;n>=0;n--){var s=this.containers[n].element.offset();this.containers[n].containerCache.left=s.left,this.containers[n].containerCache.top=s.top,this.containers[n].containerCache.width=this.containers[n].element.outerWidth(),this.containers[n].containerCache.height=this.containers[n].element.outerHeight()}return this},_createPlaceholder:function(t){t=t||this;var n=t.options;if(!n.placeholder||n.placeholder.constructor==String){var r=n.placeholder;n.placeholder={element:function(){var n=e(document.createElement(t.currentItem[0].nodeName)).addClass(r||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return r||(n.style.visibility="hidden"),n},update:function(e,i){if(r&&!n.forcePlaceholderSize)return;i.height()||i.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),i.width()||i.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10))}}}t.placeholder=e(n.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),n.placeholder.update(t,t.placeholder)},_contactContainers:function(t){var n=null,r=null;for(var i=this.containers.length-1;i>=0;i--){if(e.contains(this.currentItem[0],this.containers[i].element[0]))continue;if(this._intersectsWith(this.containers[i].containerCache)){if(n&&e.contains(this.containers[i].element[0],n.element[0]))continue;n=this.containers[i],r=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0)}if(!n)return;if(this.containers.length===1)this.containers[r]._trigger("over",t,this._uiHash(this)),this.containers[r].containerCache.over=1;else{var s=1e4,o=null,u=this.containers[r].floating?"left":"top",a=this.containers[r].floating?"width":"height",f=this.positionAbs[u]+this.offset.click[u];for(var l=this.items.length-1;l>=0;l--){if(!e.contains(this.containers[r].element[0],this.items[l].item[0]))continue;if(this.items[l].item[0]==this.currentItem[0])continue;var c=this.items[l].item.offset()[u],h=!1;Math.abs(c-f)>Math.abs(c+this.items[l][a]-f)&&(h=!0,c+=this.items[l][a]),Math.abs(c-f)<s&&(s=Math.abs(c-f),o=this.items[l],this.direction=h?"up":"down")}if(!o&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[r],o?this._rearrange(t,o,null,!0):this._rearrange(t,null,this.containers[r].element,!0),this._trigger("change",t,this._uiHash()),this.containers[r]._trigger("change",t,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[r]._trigger("over",t,this._uiHash(this)),this.containers[r].containerCache.over=1}},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t,this.currentItem])):n.helper=="clone"?this.currentItem.clone():this.currentItem;return r.parents("body").length||e(n.appendTo!="parent"?n.appendTo:this.currentItem[0].parentNode)[0].appendChild(r[0]),r[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(r[0].style.width==""||n.forceHelperSize)&&r.width(this.currentItem.width()),(r[0].style.height==""||n.forceHelperSize)&&r.height(this.currentItem.height()),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t=this.options;t.containment=="parent"&&(t.containment=this.helper[0].parentNode);if(t.containment=="document"||t.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e(t.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e(t.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(t.containment)){var n=e(t.containment)[0],r=e(t.containment).offset(),i=e(n).css("overflow")!="hidden";this.containment=[r.left+(parseInt(e(n).css("borderLeftWidth"),10)||0)+(parseInt(e(n).css("paddingLeft"),10)||0)-this.margins.left,r.top+(parseInt(e(n).css("borderTopWidth"),10)||0)+(parseInt(e(n).css("paddingTop"),10)||0)-this.margins.top,r.left+(i?Math.max(n.scrollWidth,n.offsetWidth):n.offsetWidth)-(parseInt(e(n).css("borderLeftWidth"),10)||0)-(parseInt(e(n).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,r.top+(i?Math.max(n.scrollHeight,n.offsetHeight):n.offsetHeight)-(parseInt(e(n).css("borderTopWidth"),10)||0)-(parseInt(e(n).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(t,n){n||(n=this.position);var r=t=="absolute"?1:-1,i=this.options,s=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(s[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():o?0:s.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*r}},_generatePosition:function(t){var n=this.options,r=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(r[0].tagName);this.cssPosition=="relative"&&(this.scrollParent[0]==document||this.scrollParent[0]==this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset());var s=t.pageX,o=t.pageY;if(this.originalPosition){this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(s=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(s=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top));if(n.grid){var u=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1];o=this.containment?u-this.offset.click.top<this.containment[1]||u-this.offset.click.top>this.containment[3]?u-this.offset.click.top<this.containment[1]?u+n.grid[1]:u-n.grid[1]:u:u;var a=this.originalPageX+Math.round((s-this.originalPageX)/n.grid[0])*n.grid[0];s=this.containment?a-this.offset.click.left<this.containment[0]||a-this.offset.click.left>this.containment[2]?a-this.offset.click.left<this.containment[0]?a+n.grid[0]:a-n.grid[0]:a:a}}return{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():i?0:r.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:r.scrollLeft())}},_rearrange:function(e,t,n,r){n?n[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var i=this.counter;this._delay(function(){i==this.counter&&this.refreshPositions(!r)})},_clear:function(t,n){this.reverting=!1;var r=[];!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var i in this._storedCSS)if(this._storedCSS[i]=="auto"||this._storedCSS[i]=="static")this._storedCSS[i]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!n&&r.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!n&&r.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(n||(r.push(function(e){this._trigger("remove",e,this._uiHash())}),r.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),r.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer))));for(var i=this.containers.length-1;i>=0;i--)n||r.push(function(e){return function(t){e._trigger("deactivate",t,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over&&(r.push(function(e){return function(t){e._trigger("out",t,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over=0);this._storedCursor&&e("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex),this.dragging=!1;if(this.cancelHelperRemoval){if(!n){this._trigger("beforeStop",t,this._uiHash());for(var i=0;i<r.length;i++)r[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}n||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!=this.currentItem[0]&&this.helper.remove(),this.helper=null;if(!n){for(var i=0;i<r.length;i++)r[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var n=t||this;return{helper:n.helper,placeholder:n.placeholder||e([]),position:n.position,originalPosition:n.originalPosition,offset:n.positionAbs,item:n.currentItem,sender:t?t.element:null}}})})(jQuery);(function(e){function t(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}e.widget("ui.spinner",{version:"1.9.2",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},n=this.element;return e.each(["min","max","step"],function(e,r){var i=n.attr(r);i!==undefined&&i.length&&(t[r]=i)}),t},_events:{keydown:function(e){this._start(e)&&this._keydown(e)&&e.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;return}this._refresh(),this.previous!==this.element.val()&&this._trigger("change",e)},mousewheel:function(e,t){if(!t)return;if(!this.spinning&&!this._start(e))return!1;this._spin((t>0?1:-1)*this.options.step,e),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(e)},100),e.preventDefault()},"mousedown .ui-spinner-button":function(t){function r(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=n,this._delay(function(){this.previous=n}))}var n;n=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),r.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,r.call(this)});if(this._start(t)===!1)return;this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){if(!e(t.currentTarget).hasClass("ui-state-active"))return;if(this._start(t)===!1)return!1;this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(e.height()*.5)&&e.height()>0&&e.height(e.height()),this.options.disabled&&this.disable()},_keydown:function(t){var n=this.options,r=e.ui.keyCode;switch(t.keyCode){case r.UP:return this._repeat(null,1,t),!0;case r.DOWN:return this._repeat(null,-1,t),!0;case r.PAGE_UP:return this._repeat(null,n.page,t),!0;case r.PAGE_DOWN:return this._repeat(null,-n.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(e){return!this.spinning&&this._trigger("start",e)===!1?!1:(this.counter||(this.counter=1),this.spinning=!0,!0)},_repeat:function(e,t,n){e=e||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,t,n)},e),this._spin(t*this.options.step,n)},_spin:function(e,t){var n=this.value()||0;this.counter||(this.counter=1),n=this._adjustValue(n+e*this._increment(this.counter));if(!this.spinning||this._trigger("spin",t,{value:n})!==!1)this._value(n),this.counter++},_increment:function(t){var n=this.options.incremental;return n?e.isFunction(n)?n(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var e=this._precisionOf(this.options.step);return this.options.min!==null&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=e.toString(),n=t.indexOf(".");return n===-1?0:t.length-n-1},_adjustValue:function(e){var t,n,r=this.options;return t=r.min!==null?r.min:0,n=e-t,n=Math.round(n/r.step)*r.step,e=t+n,e=parseFloat(e.toFixed(this._precision())),r.max!==null&&e>r.max?r.max:r.min!==null&&e<r.min?r.min:e},_stop:function(e){if(!this.spinning)return;clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",e)},_setOption:function(e,t){if(e==="culture"||e==="numberFormat"){var n=this._parse(this.element.val());this.options[e]=t,this.element.val(this._format(n));return}(e==="max"||e==="min"||e==="step")&&typeof t=="string"&&(t=this._parse(t)),this._super(e,t),e==="disabled"&&(t?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:t(function(e){this._super(e),this._value(this.element.val())}),_parse:function(e){return typeof e=="string"&&e!==""&&(e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e),e===""||isNaN(e)?null:e},_format:function(e){return e===""?"":window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(e,t){var n;e!==""&&(n=this._parse(e),n!==null&&(t||(n=this._adjustValue(n)),e=this._format(n))),this.element.val(e),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:t(function(e){this._stepUp(e)}),_stepUp:function(e){this._spin((e||1)*this.options.step)},stepDown:t(function(e){this._stepDown(e)}),_stepDown:function(e){this._spin((e||1)*-this.options.step)},pageUp:t(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:t(function(e){this._stepDown((e||1)*this.options.page)}),value:function(e){if(!arguments.length)return this._parse(this.element.val());t(this._value).call(this,e)},widget:function(){return this.uiSpinner}})})(jQuery);(function(e,t){function i(){return++n}function s(e){return e.hash.length>1&&e.href.replace(r,"")===location.href.replace(r,"").replace(/\s/g,"%20")}var n=0,r=/#.*$/;e.widget("ui.tabs",{version:"1.9.2",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var t=this,n=this.options,r=n.active,i=location.hash.substring(1);this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",n.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs();if(r===null){i&&this.tabs.each(function(t,n){if(e(n).attr("aria-controls")===i)return r=t,!1}),r===null&&(r=this.tabs.index(this.tabs.filter(".ui-tabs-active")));if(r===null||r===-1)r=this.tabs.length?0:!1}r!==!1&&(r=this.tabs.index(this.tabs.eq(r)),r===-1&&(r=n.collapsible?!1:0)),n.active=r,!n.collapsible&&n.active===!1&&this.anchors.length&&(n.active=0),e.isArray(n.disabled)&&(n.disabled=e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.options.active!==!1&&this.anchors.length?this.active=this._findActive(this.options.active):this.active=e(),this._refresh(),this.active.length&&this.load(n.active)},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var n=e(this.document[0].activeElement).closest("li"),r=this.tabs.index(n),i=!0;if(this._handlePageNav(t))return;switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:r++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:i=!1,r--;break;case e.ui.keyCode.END:r=this.anchors.length-1;break;case e.ui.keyCode.HOME:r=0;break;case e.ui.keyCode.SPACE:t.preventDefault(),clearTimeout(this.activating),this._activate(r);return;case e.ui.keyCode.ENTER:t.preventDefault(),clearTimeout(this.activating),this._activate(r===this.options.active?!1:r);return;default:return}t.preventDefault(),clearTimeout(this.activating),r=this._focusNextTab(r,i),t.ctrlKey||(n.attr("aria-selected","false"),this.tabs.eq(r).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",r)},this.delay))},_panelKeydown:function(t){if(this._handlePageNav(t))return;t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP)return this._activate(this._focusNextTab(this.options.active-1,!1)),!0;if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN)return this._activate(this._focusNextTab(this.options.active+1,!0)),!0},_findNextTab:function(t,n){function i(){return t>r&&(t=0),t<0&&(t=r),t}var r=this.tabs.length-1;while(e.inArray(i(),this.options.disabled)!==-1)t=n?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){if(e==="active"){this._activate(t);return}if(e==="disabled"){this._setupDisabled(t);return}this._super(e,t),e==="collapsible"&&(this.element.toggleClass("ui-tabs-collapsible",t),!t&&this.options.active===!1&&this._activate(0)),e==="event"&&this._setupEvents(t),e==="heightStyle"&&this._setupHeightStyle(t)},_tabId:function(e){return e.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,n=this.tablist.children(":has(a[href])");t.disabled=e.map(n.filter(".ui-state-disabled"),function(e){return n.index(e)}),this._processTabs(),t.active===!1||!this.anchors.length?(t.active=!1,this.active=e()):this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(n,r){var i,o,u,a=e(r).uniqueId().attr("id"),f=e(r).closest("li"),l=f.attr("aria-controls");s(r)?(i=r.hash,o=t.element.find(t._sanitizeSelector(i))):(u=t._tabId(f),i="#"+u,o=t.element.find(i),o.length||(o=t._createPanel(u),o.insertAfter(t.panels[n-1]||t.tablist)),o.attr("aria-live","polite")),o.length&&(t.panels=t.panels.add(o)),l&&f.data("ui-tabs-aria-controls",l),f.attr({"aria-controls":i.substring(1),"aria-labelledby":a}),o.attr("aria-labelledby",a)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var n=0,r;r=this.tabs[n];n++)t===!0||e.inArray(n,t)!==-1?e(r).addClass("ui-state-disabled").attr("aria-disabled","true"):e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var n={click:function(e){e.preventDefault()}};t&&e.each(t.split(" "),function(e,t){n[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,n),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var n,r,i=this.element.parent();t==="fill"?(e.support.minHeight||(r=i.css("overflow"),i.css("overflow","hidden")),n=i.height(),this.element.siblings(":visible").each(function(){var t=e(this),r=t.css("position");if(r==="absolute"||r==="fixed")return;n-=t.outerHeight(!0)}),r&&i.css("overflow",r),this.element.children().not(this.panels).each(function(){n-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,n-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):t==="auto"&&(n=0,this.panels.each(function(){n=Math.max(n,e(this).height("").height())}).height(n))},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i.closest("li"),o=s[0]===r[0],u=o&&n.collapsible,a=u?e():this._getPanelForTab(s),f=r.length?this._getPanelForTab(r):e(),l={oldTab:r,oldPanel:f,newTab:u?e():s,newPanel:a};t.preventDefault();if(s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||o&&!n.collapsible||this._trigger("beforeActivate",t,l)===!1)return;n.active=u?!1:this.tabs.index(s),this.active=o?e():s,this.xhr&&this.xhr.abort(),!f.length&&!a.length&&e.error("jQuery UI Tabs: Mismatching fragment identifier."),a.length&&this.load(this.tabs.index(s),t),this._toggle(t,l)},_toggle:function(t,n){function o(){r.running=!1,r._trigger("activate",t,n)}function u(){n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),i.length&&r.options.show?r._show(i,r.options.show,o):(i.show(),o())}var r=this,i=n.newPanel,s=n.oldPanel;this.running=!0,s.length&&this.options.hide?this._hide(s,this.options.hide,function(){n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),u()}):(n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),s.hide(),u()),s.attr({"aria-expanded":"false","aria-hidden":"true"}),n.oldTab.attr("aria-selected","false"),i.length&&s.length?n.oldTab.attr("tabIndex",-1):i.length&&this.tabs.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),i.attr({"aria-expanded":"true","aria-hidden":"false"}),n.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(t){var n,r=this._findActive(t);if(r[0]===this.active[0])return;r.length||(r=this.active),n=r.find(".ui-tabs-anchor")[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return typeof e=="string"&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),n=t.data("ui-tabs-aria-controls");n?t.attr("aria-controls",n):t.removeAttr("aria-controls")}),this.panels.show(),this.options.heightStyle!=="content"&&this.panels.css("height","")},enable:function(n){var r=this.options.disabled;if(r===!1)return;n===t?r=!1:(n=this._getIndex(n),e.isArray(r)?r=e.map(r,function(e){return e!==n?e:null}):r=e.map(this.tabs,function(e,t){return t!==n?t:null})),this._setupDisabled(r)},disable:function(n){var r=this.options.disabled;if(r===!0)return;if(n===t)r=!0;else{n=this._getIndex(n);if(e.inArray(n,r)!==-1)return;e.isArray(r)?r=e.merge([n],r).sort():r=[n]}this._setupDisabled(r)},load:function(t,n){t=this._getIndex(t);var r=this,i=this.tabs.eq(t),o=i.find(".ui-tabs-anchor"),u=this._getPanelForTab(i),a={tab:i,panel:u};if(s(o[0]))return;this.xhr=e.ajax(this._ajaxSettings(o,n,a)),this.xhr&&this.xhr.statusText!=="canceled"&&(i.addClass("ui-tabs-loading"),u.attr("aria-busy","true"),this.xhr.success(function(e){setTimeout(function(){u.html(e),r._trigger("load",n,a)},1)}).complete(function(e,t){setTimeout(function(){t==="abort"&&r.panels.stop(!1,!0),i.removeClass("ui-tabs-loading"),u.removeAttr("aria-busy"),e===r.xhr&&delete r.xhr},1)}))},_ajaxSettings:function(t,n,r){var i=this;return{url:t.attr("href"),beforeSend:function(t,s){return i._trigger("beforeLoad",n,e.extend({jqXHR:t,ajaxSettings:s},r))}}},_getPanelForTab:function(t){var n=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+n))}}),e.uiBackCompat!==!1&&(e.ui.tabs.prototype._ui=function(e,t){return{tab:e,panel:t,index:this.anchors.index(e)}},e.widget("ui.tabs",e.ui.tabs,{url:function(e,t){this.anchors.eq(e).attr("href",t)}}),e.widget("ui.tabs",e.ui.tabs,{options:{ajaxOptions:null,cache:!1},_create:function(){this._super();var t=this;this._on({tabsbeforeload:function(n,r){if(e.data(r.tab[0],"cache.tabs")){n.preventDefault();return}r.jqXHR.success(function(){t.options.cache&&e.data(r.tab[0],"cache.tabs",!0)})}})},_ajaxSettings:function(t,n,r){var i=this.options.ajaxOptions;return e.extend({},i,{error:function(e,t){try{i.error(e,t,r.tab.closest("li").index(),r.tab[0])}catch(n){}}},this._superApply(arguments))},_setOption:function(e,t){e==="cache"&&t===!1&&this.anchors.removeData("cache.tabs"),this._super(e,t)},_destroy:function(){this.anchors.removeData("cache.tabs"),this._super()},url:function(e){this.anchors.eq(e).removeData("cache.tabs"),this._superApply(arguments)}}),e.widget("ui.tabs",e.ui.tabs,{abort:function(){this.xhr&&this.xhr.abort()}}),e.widget("ui.tabs",e.ui.tabs,{options:{spinner:"<em>Loading&#8230;</em>"},_create:function(){this._super(),this._on({tabsbeforeload:function(e,t){if(e.target!==this.element[0]||!this.options.spinner)return;var n=t.tab.find("span"),r=n.html();n.html(this.options.spinner),t.jqXHR.complete(function(){n.html(r)})}})}}),e.widget("ui.tabs",e.ui.tabs,{options:{enable:null,disable:null},enable:function(t){var n=this.options,r;if(t&&n.disabled===!0||e.isArray(n.disabled)&&e.inArray(t,n.disabled)!==-1)r=!0;this._superApply(arguments),r&&this._trigger("enable",null,this._ui(this.anchors[t],this.panels[t]))},disable:function(t){var n=this.options,r;if(t&&n.disabled===!1||e.isArray(n.disabled)&&e.inArray(t,n.disabled)===-1)r=!0;this._superApply(arguments),r&&this._trigger("disable",null,this._ui(this.anchors[t],this.panels[t]))}}),e.widget("ui.tabs",e.ui.tabs,{options:{add:null,remove:null,tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},add:function(n,r,i){i===t&&(i=this.anchors.length);var s,o,u=this.options,a=e(u.tabTemplate.replace(/#\{href\}/g,n).replace(/#\{label\}/g,r)),f=n.indexOf("#")?this._tabId(a):n.replace("#","");return a.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy",!0),a.attr("aria-controls",f),s=i>=this.tabs.length,o=this.element.find("#"+f),o.length||(o=this._createPanel(f),s?i>0?o.insertAfter(this.panels.eq(-1)):o.appendTo(this.element):o.insertBefore(this.panels[i])),o.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(),s?a.appendTo(this.tablist):a.insertBefore(this.tabs[i]),u.disabled=e.map(u.disabled,function(e){return e>=i?++e:e}),this.refresh(),this.tabs.length===1&&u.active===!1&&this.option("active",0),this._trigger("add",null,this._ui(this.anchors[i],this.panels[i])),this},remove:function(t){t=this._getIndex(t);var n=this.options,r=this.tabs.eq(t).remove(),i=this._getPanelForTab(r).remove();return r.hasClass("ui-tabs-active")&&this.anchors.length>2&&this._activate(t+(t+1<this.anchors.length?1:-1)),n.disabled=e.map(e.grep(n.disabled,function(e){return e!==t}),function(e){return e>=t?--e:e}),this.refresh(),this._trigger("remove",null,this._ui(r.find("a")[0],i[0])),this}}),e.widget("ui.tabs",e.ui.tabs,{length:function(){return this.anchors.length}}),e.widget("ui.tabs",e.ui.tabs,{options:{idPrefix:"ui-tabs-"},_tabId:function(t){var n=t.is("li")?t.find("a[href]"):t;return n=n[0],e(n).closest("li").attr("aria-controls")||n.title&&n.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF\-]/g,"")||this.options.idPrefix+i()}}),e.widget("ui.tabs",e.ui.tabs,{options:{panelTemplate:"<div></div>"},_createPanel:function(t){return e(this.options.panelTemplate).attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)}}),e.widget("ui.tabs",e.ui.tabs,{_create:function(){var e=this.options;e.active===null&&e.selected!==t&&(e.active=e.selected===-1?!1:e.selected),this._super(),e.selected=e.active,e.selected===!1&&(e.selected=-1)},_setOption:function(e,t){if(e!=="selected")return this._super(e,t);var n=this.options;this._super("active",t===-1?!1:t),n.selected=n.active,n.selected===!1&&(n.selected=-1)},_eventHandler:function(){this._superApply(arguments),this.options.selected=this.options.active,this.options.selected===!1&&(this.options.selected=-1)}}),e.widget("ui.tabs",e.ui.tabs,{options:{show:null,select:null},_create:function(){this._super(),this.options.active!==!1&&this._trigger("show",null,this._ui(this.active.find(".ui-tabs-anchor")[0],this._getPanelForTab(this.active)[0]))},_trigger:function(e,t,n){var r,i,s=this._superApply(arguments);return s?(e==="beforeActivate"?(r=n.newTab.length?n.newTab:n.oldTab,i=n.newPanel.length?n.newPanel:n.oldPanel,s=this._super("select",t,{tab:r.find(".ui-tabs-anchor")[0],panel:i[0],index:r.closest("li").index()})):e==="activate"&&n.newTab.length&&(s=this._super("show",t,{tab:n.newTab.find(".ui-tabs-anchor")[0],panel:n.newPanel[0],index:n.newTab.closest("li").index()})),s):!1}}),e.widget("ui.tabs",e.ui.tabs,{select:function(e){e=this._getIndex(e);if(e===-1){if(!this.options.collapsible||this.options.selected===-1)return;e=this.options.selected}this.anchors.eq(e).trigger(this.options.event+this.eventNamespace)}}),function(){var t=0;e.widget("ui.tabs",e.ui.tabs,{options:{cookie:null},_create:function(){var e=this.options,t;e.active==null&&e.cookie&&(t=parseInt(this._cookie(),10),t===-1&&(t=!1),e.active=t),this._super()},_cookie:function(n){var r=[this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+ ++t)];return arguments.length&&(r.push(n===!1?-1:n),r.push(this.options.cookie)),e.cookie.apply(null,r)},_refresh:function(){this._super(),this.options.cookie&&this._cookie(this.options.active,this.options.cookie)},_eventHandler:function(){this._superApply(arguments),this.options.cookie&&this._cookie(this.options.active,this.options.cookie)},_destroy:function(){this._super(),this.options.cookie&&this._cookie(null,this.options.cookie)}})}(),e.widget("ui.tabs",e.ui.tabs,{_trigger:function(t,n,r){var i=e.extend({},r);return t==="load"&&(i.panel=i.panel[0],i.tab=i.tab.find(".ui-tabs-anchor")[0]),this._super(t,n,i)}}),e.widget("ui.tabs",e.ui.tabs,{options:{fx:null},_getFx:function(){var t,n,r=this.options.fx;return r&&(e.isArray(r)?(t=r[0],n=r[1]):t=n=r),r?{show:n,hide:t}:null},_toggle:function(e,t){function o(){n.running=!1,n._trigger("activate",e,t)}function u(){t.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),r.length&&s.show?r.animate(s.show,s.show.duration,function(){o()}):(r.show(),o())}var n=this,r=t.newPanel,i=t.oldPanel,s=this._getFx();if(!s)return this._super(e,t);n.running=!0,i.length&&s.hide?i.animate(s.hide,s.hide.duration,function(){t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),u()}):(t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),i.hide(),u())}}))})(jQuery);(function(e){function n(t,n){var r=(t.attr("aria-describedby")||"").split(/\s+/);r.push(n),t.data("ui-tooltip-id",n).attr("aria-describedby",e.trim(r.join(" ")))}function r(t){var n=t.data("ui-tooltip-id"),r=(t.attr("aria-describedby")||"").split(/\s+/),i=e.inArray(n,r);i!==-1&&r.splice(i,1),t.removeData("ui-tooltip-id"),r=e.trim(r.join(" ")),r?t.attr("aria-describedby",r):t.removeAttr("aria-describedby")}var t=0;e.widget("ui.tooltip",{version:"1.9.2",options:{content:function(){return e(this).attr("title")},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(t,n){var r=this;if(t==="disabled"){this[n?"_disable":"_enable"](),this.options[t]=n;return}this._super(t,n),t==="content"&&e.each(this.tooltips,function(e,t){r._updateContent(t)})},_disable:function(){var t=this;e.each(this.tooltips,function(n,r){var i=e.Event("blur");i.target=i.currentTarget=r[0],t.close(i,!0)}),this.element.find(this.options.items).andSelf().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).andSelf().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var n=this,r=e(t?t.target:this.element).closest(this.options.items);if(!r.length||r.data("ui-tooltip-id"))return;r.attr("title")&&r.data("ui-tooltip-title",r.attr("title")),r.data("ui-tooltip-open",!0),t&&t.type==="mouseover"&&r.parents().each(function(){var t=e(this),r;t.data("ui-tooltip-open")&&(r=e.Event("blur"),r.target=r.currentTarget=this,n.close(r,!0)),t.attr("title")&&(t.uniqueId(),n.parents[this.id]={element:this,title:t.attr("title")},t.attr("title",""))}),this._updateContent(r,t)},_updateContent:function(e,t){var n,r=this.options.content,i=this,s=t?t.type:null;if(typeof r=="string")return this._open(t,e,r);n=r.call(e[0],function(n){if(!e.data("ui-tooltip-open"))return;i._delay(function(){t&&(t.type=s),this._open(t,e,n)})}),n&&this._open(t,e,n)},_open:function(t,r,i){function f(e){a.of=e;if(s.is(":hidden"))return;s.position(a)}var s,o,u,a=e.extend({},this.options.position);if(!i)return;s=this._find(r);if(s.length){s.find(".ui-tooltip-content").html(i);return}r.is("[title]")&&(t&&t.type==="mouseover"?r.attr("title",""):r.removeAttr("title")),s=this._tooltip(r),n(r,s.attr("id")),s.find(".ui-tooltip-content").html(i),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:f}),f(t)):s.position(e.extend({of:r},this.options.position)),s.hide(),this._show(s,this.options.show),this.options.show&&this.options.show.delay&&(u=setInterval(function(){s.is(":visible")&&(f(a.of),clearInterval(u))},e.fx.interval)),this._trigger("open",t,{tooltip:s}),o={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var n=e.Event(t);n.currentTarget=r[0],this.close(n,!0)}},remove:function(){this._removeTooltip(s)}};if(!t||t.type==="mouseover")o.mouseleave="close";if(!t||t.type==="focusin")o.focusout="close";this._on(!0,r,o)},close:function(t){var n=this,i=e(t?t.currentTarget:this.element),s=this._find(i);if(this.closing)return;i.data("ui-tooltip-title")&&i.attr("title",i.data("ui-tooltip-title")),r(i),s.stop(!0),this._hide(s,this.options.hide,function(){n._removeTooltip(e(this))}),i.removeData("ui-tooltip-open"),this._off(i,"mouseleave focusout keyup"),i[0]!==this.element[0]&&this._off(i,"remove"),this._off(this.document,"mousemove"),t&&t.type==="mouseleave"&&e.each(this.parents,function(t,r){e(r.element).attr("title",r.title),delete n.parents[t]}),this.closing=!0,this._trigger("close",t,{tooltip:s}),this.closing=!1},_tooltip:function(n){var r="ui-tooltip-"+t++,i=e("<div>").attr({id:r,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return e("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),e.fn.bgiframe&&i.bgiframe(),this.tooltips[r]=n,i},_find:function(t){var n=t.data("ui-tooltip-id");return n?e("#"+n):e()},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(n,r){var i=e.Event("blur");i.target=i.currentTarget=r[0],t.close(i,!0),e("#"+n).remove(),r.data("ui-tooltip-title")&&(r.attr("title",r.data("ui-tooltip-title")),r.removeData("ui-tooltip-title"))})}})})(jQuery);
/* Concierge Plugin v.1
 Author 
 cf AUTHORS.txt 

 License
 Copyright (c) 2010-2012 Massachusetts Institute of Technology.
 MIT License (cf. MIT-LICENSE.txt or http://www.opensource.org/licenses/mit-license.php)

*/
/*global jQuery:true console:true*/
var NB$ = jQuery.noConflict();

(function($) {   
 var Concierge = function(){
    var self = this;
    this.providers = {};
    this.listeners={};
    this.transitions={};
    this.state = {a:{}, o:{}};//a: active state, o: stored states
    this.factories={};
    this.features={};
    this.views={};
    this.constants = {};
    this.components = {};
    this.allowed_repeat_event={};
    this.keydown_block = true;
    this.historyHelper = {
        ptr: null,
        log: {}, 
        fct: null, 
        T: null, 
        latestentrytime:(new Date()).getTime(), 
        T_idle: 120000,
        latesteventtime: false, 
        timeout: 0
    };
    this.activeView = null;
    /*
    this.keydown = function(event){
        if (self.activeView !== null){
        return self.activeView._keydown(event);
        }
    };
    */
    //keypress is better in mozilla, since we get repeated strokes, but doesn't work in other browsers
    var f_key_cb = function(event){
        if (document.activeElement !== document.body && document.activeElement.tagName !== "A"){
        return true; //a "non-anchor" focusable element has the focus: let's not interfere
        }
        if ("activeView" in self && self.activeView !== null){
        return self.activeView._keydown(event);
        }
        else{
        return !(self.keydown_block); // do NOT propagate by default.
        }
    };
    if ( $.browser.mozilla){
        $(document.documentElement).keypress(f_key_cb);
    }
    else{
        $(document.documentElement).keydown(f_key_cb);
    }
    };
    Concierge.prototype.allowRepeatedEvents = function(list){
    for (var i in list){
        this.allowed_repeat_event[list[i]]=true;
    }
    };
    Concierge.prototype.addListeners = function(view, o, _id){
    /*
     * pre: view is a object that has a:  
     *  - _defaultHandler method, or that passed a specific listener function. See step??.js for an example where ui.perspective?.js is used as a view, 
     *     although perspectives don't have a _defaultHandler method
     *  - an id that can be retrieved by  element[0].id that is passed explicitely as a third optional parameter
     * In any case it DOESN'T need to be a class derived from ui.view
    */
        var id = _id === undefined ? view.element[0].id : _id;
    var x = this.listeners;
    for (var i in o){
        if (!(i in x)){
        x[i]={};
        }
        x[i][id]={l:view, cb:o[i]};
    }
    };
    Concierge.prototype.setConstants = function(o){
    this.constants = o;
    };
    Concierge.prototype.addConstants = function(o){
    for (var k in o){
        this.constants[k]=o[k];
    }
    };
    Concierge.prototype.addComponents = function(o){
    for (var k in o){
        this.components[k]=o[k];
    }
    };
    Concierge.prototype.get_component = function(key){
    //return an component
    return this.components[key];
    };

    Concierge.prototype.__updateIdleStatus = function(){
    var now = (new Date()).getTime();
    if (this.historyHelper.latesteventtime &&(now-this.historyHelper.latesteventtime>this.historyHelper.T_idle)){
        this.logHistory("idle", this.historyHelper.latesteventtime);
    }
    this.historyHelper.latesteventtime = now;
    };
    Concierge.prototype.setHistoryHelper = function(fct, T, cb, timeout){
    //cb and timeout are optional
    var self=this;
    self.historyHelper.T = T;
    if (timeout){
        self.historyHelper.timeout = timeout;
    }
    var f = function(){
        var now = (new Date()).getTime();
        var delta = now-self.historyHelper.latestentrytime;
        if ((self.historyHelper.latestentrytime && delta<T) || 
        (self.historyHelper.timeout && delta > self.historyHelper.timeout)){
        //there have been some events or a timeout        
        fct(self.historyHelper.log, cb || function(){});
        self.historyHelper.log={};
        }
    };
    $(window).unload(function(){
        self.__updateIdleStatus();
        f();
        });
    setInterval(f, T);
    };
    Concierge.prototype.logHistory = function(name, id){
    var now = (new Date()).getTime();
    if (!(name in this.historyHelper.log)){
        this.historyHelper.log[name]={};
    }
    this.historyHelper.log[name][id]=now;
    this.historyHelper.latestentrytime = now;
    };
    Concierge.prototype.addProviders =  function(id, o){
    var i;
    var x = this.providers;
    for (i in o){
        if (!(o[i] in x)){
        x[o[i]]={};
        }
        x[o[i]][id]=true;
    }
    };
    Concierge.prototype.get_state = function(key){
    return this.state.a[key];
    };
    Concierge.prototype.get_previous_state = function(key){
    //return an previous state variable. 
    return this.state.p[key];
    };
    Concierge.prototype.get_constant = function(key){
    //return an constant
    return this.constants[key];
    };
    Concierge.prototype.setTransitions = function(id, o){
    this.transitions[id] = o;
    };
    Concierge.prototype.addFactory=function(prop_type, feature, factory){
    if (!(prop_type in this.factories)){
        this.factories[prop_type]={};
    }
    if (!(feature in this.features)){
        this.features[feature]={};
    }
    this.factories[prop_type][feature]=factory;
    };
    Concierge.prototype.trigger = function(evt, view){
    /*
     * view is optional and used for transitions. 
     */
    //        $.L("---- event trigger: "+ evt.type +" (val="+evt.value+")");
    this.__updateIdleStatus();
    var O = this.state.o;
    var A = this.state.a;
    //set active state: 
        //    if ((evt.value !== A[evt.type]) || (evt.type in this.allowed_repeat_event)){
        A[evt.type] = evt.value;
        if (evt.type in this.listeners){
        var x = this.listeners[evt.type];
        for (var i in x){
            if (x[i].cb===null){//shorthand for views
            //            $.L("calling default evthandler for ", i);
            x[i].l._defaultHandler(evt);
            }
            else{
            x[i].cb(evt);
            }
        }
        }
        /*
            }
    else {
        $.L("[view] not propagating event resulting in same state: "+evt.type+", val="+evt.value);
    }
        */
    //do views need to be created ? If so, create them now. 
    if (evt.type in this.factories){
        for (var feature in  this.factories[evt.type]){
        if (!(evt.value in this.features[feature])){
            this.features[feature][evt.value]=null;
            this.factories[evt.type][feature](evt.value);
        }
        }
    }
    };
 $.concierge = new Concierge(); //singleton pattern
    var popup = $("<div class='ui-view-popup'/>");

    $.L = function(){
        if (window.console){
            console.log(arguments);
        }
    };

    $.I = function(msg, do_html, time_ms){
        if (time_ms === undefined){
            time_ms = 5000;
        }

        if (do_html === undefined){
            do_html = false;
        }

        var display_fct = do_html ? "html":"text";
        $("body").append(popup);

        popup[display_fct](msg).stop(true).hide().fadeIn(400).delay(time_ms).fadeOut(400, function() {$(this).remove();});

    };
    $.E = function(s){
        return s ? s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : "None";
    };
    $.ellipsis = function(s, n){
    var l = s.length;
    return (l>n) ? s.substring(0,n) + "...": s;
    };
    $.pluralize = function(n, plural, singular){
    if (n === 1){
        return singular || "";
    }
    return plural || "s";
    };
      
})(NB$);

/* View Plugin v.5
 * Depends:
 *    ui.core.js
 *      concierge
 Author 
 cf AUTHORS.txt 

 License
 Copyright (c) 2010-2012 Massachusetts Institute of Technology.
 MIT License (cf. MIT-LICENSE.txt or http://www.opensource.org/licenses/mit-license.php)

*/
/*global jQuery:true*/
(function($) {   
    /*
     * The view object
     * options.headless set to false if the view is not meant to be displayed
     */
    var V_OBJ = {
    HEIGHT_MARGIN: 5,
    SERVICE: null,
    _create: function() {
        var self = this;
        var init = true;
        // initialization from scratch
        if (init) {            
        if (self.options.provides){
            $.concierge.addProviders(self.element[0].id, self.options.provides);
        }
        if (self.options.listens){
            $.concierge.addListeners(self, self.options.listens);
        }
        if (self.options.transitions){
            $.concierge.setTransitions(self.element[0].id, self.options.transitions);
        }
        if (!(self.options.headless)){
            self.element.addClass("view");

            //implement a concept of "active view"
            self.element.mouseenter(function(evt){        
                $.concierge.activeView = self;
                $("div.view").removeClass("active-view");
                self.element.addClass("active-view");
            });

            //register for perspective events: 
            self.element.closest("div.perspective").bind("resize_perspective", function(evt,directions){
                self.repaint();
            });
            
        }
        // $.L("setting view ", this.element[0].id, " to " , this);
        $.concierge.views[this.element[0].id]=this;
        }
    }, 
    defaultHandler: function(evt){
        $.L("[View]: default handler... override me !, evt=", evt);
    },
    beforeMove: function(evt){
        $.L("[View]: default beforemove... override me !, evt=", evt);
    },
    afterMove: function(evt){
        $.L("[View]: default aftermmove... override me !, evt=", evt);
    },
    set_model: function(model){
        this._model = model;
        //for now, we don't register to receive any particular updates.
        model.register($.ui.view.prototype.get_adapter.call(this),  {});
    },
    repaint: function(){
        //PRE: not a headless view
        var self = this;
        /*
          var outerview = self.element.parent("div.outerview");        
          var vp = outerview.parent("div.viewport");
          if(outerview.length && vp.length){
          //make sure we get offset of a visible component: 
          var y0 = vp.children(".outerview:visible").offset().top - vp.offset().top;
          outerview.height(vp.height()-y0);
          }
        */
        self._update();
    },
    _update: function(){
            /*
             * If you override this function in your view, don't forget to either: 
             * - to call this method to automatically use all the available space: 
             *   $.ui.view.prototype._update.call(this);
             * - or to expand your view manually to fit the new space in the way you need
             * 
             */
              
        this.element.height(this.element.parent().height());
        this.element.width(this.element.parent().width());
        this._expand();
    },
    _keydown: function(event){
        $.L("[view._keydown] override me for ", this.element);
     }, 
    get_adapter: function(){
        /* enables a view to be called by the methods of an mvc.model */
        var self = this;
        var adapter = {
        update: function(action, payload, items_fieldname){
            self.update(action, payload, items_fieldname);
        }
        };
        return adapter;
    },
    close: function(){
        var self = this;
        $.L("[View]: default closer ...override me !");
        delete $.concierge.views[self.element[0].id];
    },
    provides: function(){
        var self = this;
        return self.options.provides || {};
    },
    select: function(){
        $.L("[view]: selected ", this.element[0].id);
    }, 
    sayHello: function(){
        $.L("Hello, I'm view ", this.element.id);
    }, 
    update: function(action, payload, items_fieldname){
        $.L("[view] updating view:, ", action, payload);
    }, 
    keyboard_grabber: function(){
        return $("input.focusgrabber", this.element);
    },
    _expand: function(){
        //pre: this.option.expand, is defined, refers to selectors for some children of the element
        if (!(this.options.expand)){
        return;
        }
        var parent = this.element;                
        var $expand    = parent.children(this.options.expand);
        if ($expand.length === 0){
        return;
        }
        if ($expand.length === 1){ //allocate the whole available space
            var s0          = $expand.offset().top+parseInt($expand.css("margin-top")||0, 10)+parseInt($expand.css("margin-bottom")||0, 10)+parseInt($expand.css("border-top")||0, 10)+parseInt($expand.css("border-bottom")||0, 10) - this.element.offset().top;
        var new_height = this.element.height() - s0;
        $expand.height(new_height);
        return;
        }
        //expand refers to more than one element, so we'll allocate each height based on the expand elements' current heights.    
        var $others = parent.children().not(this.options.expand);
        var h_others = 0;
        $others.each(function(i){
            var $elt = $(this);
            h_others+=$elt.height()+parseInt($elt.css("margin-top")||0, 10)+parseInt($elt.css("margin-bottom")||0, 10)+parseInt($elt.css("border-top")||0, 10)+parseInt($elt.css("border-bottom")||0, 10);
        });
        var h_available = parent.height()-parseInt(parent.css("padding-top")||0, 10)-parseInt(parent.css("padding-bottom")||0, 10)-h_others;
        var $expand_visible = $expand.filter(":visible");
        var FIXED_PART = 0.3; //percentage assigned equally to each widget (intedepent of its current height)
        var h_available_fixed = h_available*FIXED_PART;
        var h_available_proportional = h_available - h_available_fixed;
        //now get a sense of how much each widget needs:
        var h_expands = 0;
        $expand_visible.each(function(i){            
            this.style.height = ""; //reset previous resize
            var $elt  = $(this);
            var h    = $elt.height();
            var m    = parseInt($elt.css("margin-top")||0, 10)+parseInt($elt.css("margin-bottom")||0, 10)+parseInt($elt.css("border-top")||0, 10)+parseInt($elt.css("border-bottom")||0, 10);
            h_expands += h+m;
            //        heights.push(h);
            //            margins.push(m);
        });
        //now resize. 
        var frac = h_available_proportional/h_expands;
        var fixed = parseInt(h_available_fixed/$expand_visible.length, 10);
        $expand_visible.each(function(i){            
            var $elt  = $(this);
            $elt.height(fixed+parseInt(frac*$elt.height(), 10));
        });
    }
    };
    
    $.widget("ui.view",V_OBJ );
    $.ui.view.prototype.options = {};
    $.extend($.ui.view, {
        version: '1.8',
        service: null, 
        provides: null,
        listens: null, 
        transitions: null
        });
})(jQuery);

/* Perspective Plugin v.5
 * Depends:
 *    ui.core.js
 Author 
 cf AUTHORS.txt 

 License
 Copyright (c) 2010-2012 Massachusetts Institute of Technology.
 MIT License (cf. MIT-LICENSE.txt or http://www.opensource.org/licenses/mit-license.php)

 Example usage: 
 In your HTML: 
 <div id="pers1" label="Home">
   <div id="view-1" style="min-width: 250px;"  ></div>
   <div class="separator" orientation="vertical"/>
   <div class="pers-protection">
     <div id="view-2" style="min-height: 150px;" ></div>
     <div class="separator" orientation="horizontal"/>
     <div id="view-3"></div>      
   </div>
 </div>

 In your JS: 
 $("#pers1").perspective();
*/
/*global alert:true jQuery:true console:false*/
(function($) {
    var P_OBJ = {
    SEP_TOTAL_SIZE: 4,
    SEP_INSIDE_SIZE:4, 
    ORIENTATIONS: { 
            vertical:  {axis: "x", dir:  "left", dim: "width",  dim2:"height", cursor: "col-resize", margin: "margin-right" }, 
            horizontal:{axis: "y", dir:  "top" , dim: "height", dim2:"width",  cursor: "ns-resize", margin: "margin-bottom"}
    }, 
    CP_PARAMS : {
        width: {
        orientation1: "vertical", 
        orientation2: "horizontal", 
        cp : "_cpw", 
        scp : "_scpw", 
        dim: "_min_width"
        }, 
        height: {
        orientation1: "horizontal", 
        orientation2: "vertical", 
        cp : "_cph",
        scp : "_scph", 
         dim: "_min_height"
        }
    }, 
    CLA_PARAMS : {
        width: {
        dir: "_width", 
        cp : "_cpw", 
        scp : "_scpw", 
        d_min: "_min_width", 
        frac: "_frac_desired_width", 
        alloc: "_allocated_width", 
        des: "_desired_width", 
        mem: "_memorized_width"
        }, 
        height: {
        dir: "_height", 
        cp : "_cph",
         scp : "_scph", 
        d_min: "_min_height", 
        frac: "_frac_desired_height", 
        alloc: "_allocated_height", 
        des: "_desired_height", 
        mem:  "_memorized_height"
        }
    }, 
    PROPAGATE_PARAMS : {
        width: {
        alloc: "_allocated_width", 
        cp: "_cpw"

        },
        height: {
        alloc: "_allocated_height", 
        cp : "_cph"
        }
    }, 
    PREFIX_KEYS: ["v1", "v2"], 
    PREFIXES: {v1: 1, v2: 2},
    _protect: function($sep){
        /*
         * embeds each viewpane, vp1 and vp2 in a protection "cage" div (i.e position=relative), itself embedded in a widget
         * This way, embedded views can use regular coordinates, width=100% etc... without intererferting with other views. 
         */        
        var self = this;
        if ($sep.length===0){
        return;
        }    
        if ($sep.length !== 1){
        alert("There are "+ $sep.length +" separators in here... There should be at most 1"); 
        return;
        }
        var $p = $sep.parent();
        var $vp1 = $sep.prev();
        var $vp2 = $sep.next();
        var $sibs =  $sep.siblings();
        $sibs.not("div.pers-protection").wrap("<div class='pers-widget'><div class='pers-protection'/></div>");
        $sibs.filter("div.pers-protection").wrap("<div class='pers-widget'></div>");
        self._adjust($sep, true); //don't recurse...
        self._protect($vp1.children("div.separator"));
        self._protect($vp2.children("div.separator"));
    },
    _adjust: function($SEPS, dont_recurse){
        //PRE: containers have been embedded in their protection div and their widgets
        if ($SEPS.length===0){
        return;
        }
        var self = this;
        var f_adjust = function(i, sep){
        var $sep = $(sep);
        var $p = $sep.parent();
        var $prev = $sep.prev();
        var $next = $sep.next();
        var size1, margin, o_css ; //size1: desired size of prev
        var v = self.ORIENTATIONS[$sep.attr("orientation")];
        size1 = ($sep.attr("end")) ?  $p[v.dim]()-parseInt($sep.attr("end"), 10)-self.SEP_TOTAL_SIZE : $prev[v.dim]();
        margin = self.SEP_TOTAL_SIZE + Number(size1);
        o_css            = {};
        o_css[v.dim2]        = $p[v.dim2]()+"px";
        o_css[v.dim]        = size1+"px";
        $sep.prev().css(o_css);
        o_css            = {};        
        o_css["margin-"+v.dir]    =  margin + "px";
        o_css[v.dim2]        = $p[v.dim2]()+"px";
        o_css[v.dim]        = ($p[v.dim]()-margin)+"px";
        $sep.next().css(o_css);        
        o_css            = {};        
        o_css[v.dir]        = size1 + "px";
        o_css[v.dim2]        = $p[v.dim2]()+"px";
        o_css[v.dim]        = self.SEP_INSIDE_SIZE+"px";
        o_css["cursor"]        = v.cursor;
        //o_css["border-"+v.dir]    = "thin solid #FEFCFB";
        $sep.css(o_css);    
        };
        $SEPS.each(f_adjust); 
        if (!(dont_recurse)){
        self._adjust($(">div.pers-protection>div.separator",$SEPS.prev().add($SEPS.next())));
        }
    },
    _adjust_outerview_height: function(i, elt){
        var $elt=$(elt);
        var $p = $elt.parent();
        $elt.height($p.height()-$p.children("ul").height());
    },
    _f_new_draggable: function(o){
        var self = this;
        var v =  self.ORIENTATIONS[o];
        $("div.separator[orientation="+o+"]").draggable({
            axis: v.axis, 
            stop: function(event, ui){
            var VD    = self._views_data;
            var x1 = parseInt(this.style[v.dir], 10);
            var $elt = $(this);
            var $prev = $elt.prev();
            var $next = $elt.next(); 
            var leaf;
            $prev.css(v.dim, x1);
            //memorize if leaf: 
            leaf  = $(">div.pers-protection>div.view", $prev);
            if (leaf.length){
                VD["_memorized_"+v.dim][leaf[0].id] = x1;
            }        
            var o_css = {};
            o_css["margin-"+v.dir] = (x1+self.SEP_TOTAL_SIZE)+"px";
            var x2 = $elt.parent()[v.dim]()-self.SEP_TOTAL_SIZE-x1;
            leaf = $(">div.pers-protection>div.view", $next);
            if (leaf.length){
                VD["_memorized_"+v.dim][leaf[0].id] = x2;
            }
            o_css[v.dim] = x2 + "px";
            $next.css(o_css);
            self._adjust($(">div.pers-protection>div.separator",$prev.add($next)));
            self.element.trigger("resize_perspective", [v.axis]);
            }
        });
    }, 
    _fill_alloc_opts: function(prefix, views){
        var self    = this;
        var newprefix, id;
        var elt_id    = self.element[0].id+"_";
        //        var O    = self.options;
        var VD    = self._views_data;
        var W    = self._width();
        var H    = self._height();
        for (var v in self.PREFIXES){
        newprefix    = prefix+self.PREFIXES[v];
        id        = elt_id + newprefix;
        if ("data" in views[v]){//found a leaf
            VD._min_width[id]    =  "min_width" in views[v].data ?  views[v].data.min_width : W;
            VD._min_height[id]=  "min_height" in views[v].data ?  views[v].data.min_height : H;
            var priority        =  views[v].data.priority;
            if (priority !== 1 && priority !== 2){
            throw new Error("priority="+priority+"  but can only be 1 or 2 for now");
            }
            VD._pr2id[priority][id]    = null;
            VD._priority[id]        = views[v].data.priority;
            VD._desired_width[id]    = "desired_width" in views[v].data ?  views[v].data.desired_width*W/100: W;
            VD._desired_height[id]    = "desired_height" in views[v].data ?  views[v].data.desired_height*H/100: H;
            VD._frac_desired_width[id]    = Math.max(VD._desired_width[id]/VD._min_width[id], 1);           
            VD._frac_desired_height[id]    = Math.max(VD._desired_height[id]/VD._min_height[id], 1);           
            if ("transcient" in views[v].data && views[v].data.transcient){
            //existence of a key means the view is transcient and boolean value encodes for current visibility
            VD._transcient[id]        = false;
            }
        }
        else{//need to recurse
            self._fill_alloc_opts(newprefix, views[v].children);
        }
        }
        
    }, 
    _find_cp: function(prefix, views, orientation){
        //computes (an approximation of) the critical path in 'orientation' (width or height). 
        var self    = this;
        //        var O    = self.options;
        var VD    = self._views_data;
        var P    = self.CP_PARAMS[orientation];
        var newprefix, id;
        var elt_id    = self.element[0].id+"_";
        if (prefix === ""){ //reinit
        VD[P.cp] = {};
        }
        for (var v in self.PREFIXES){
        newprefix    = prefix+self.PREFIXES[v];
        id        = elt_id + newprefix;
        if ("data" in views[v]){//found a leaf
            if (views[v].data.priority === 1 && views.orientation === P.orientation1){
            //here we make the approx that this IS on the critical path
            VD[P.cp][id] = null;               
            }
        }
        else{            
            self._find_cp(newprefix, views[v].children, orientation);
        }
        }
        //"max" case (approx): leaves with separator in between
        //TODO: don't ignore transcient windows !
        if ( views.orientation === P.orientation2 && "data" in views.v1 && "data" in views.v2){                
        var id1 =  elt_id+prefix+self.PREFIXES.v1;
        var id2 =  elt_id+prefix+self.PREFIXES.v2;
        if ((VD[P.dim][id1] >  VD[P.dim][id2]) || (id2 in VD._transcient && VD._transcient[id2] === false)){
            VD[P.cp][id1] = null;
            VD[P.scp][id2] = id1;
        }
        else{
            VD[P.cp][id2] = null;
            VD[P.scp][id1] = id2;
        }
        }    
    }, 
    _propagate_allocations: function(prefix, views, orientation){
        var self = this;
        //        var O    = self.options;
        var VD    = self._views_data;
        var P    = self.PROPAGATE_PARAMS[orientation];        
        var newprefix, id;
        var elt_id = self.element[0].id+"_";
        var output = 0;
        for (var v in self.PREFIXES){
        newprefix = prefix+self.PREFIXES[v];
        id = elt_id + newprefix; 
        if (id in VD[P.alloc] && id in VD[P.cp]){
            output+=VD[P.alloc][id];
        }
        if ("children" in views[v]){
            output+= self._propagate_allocations(newprefix, views[v].children, orientation);           
        }
        }
        VD[P.alloc][elt_id+prefix] = output;
        return output;
    }, 
    _compute_leaves_allocations: function(orientation, use_memorized){
        var self = this;
        //        var O    = self.options;
        var VD    = self._views_data;
        var P    = self.CLA_PARAMS[orientation];
        //can we satisfy P1 minimum assignt ? 
        var D        = self[P.dir]();
        var available    = D;
        var remaining    = available;
        var P1        = VD._pr2id[1];
        var P2        = VD._pr2id[2];
        var req        = 0;
        var total_req_frac    = 0;
        var allocated    = 0;
        var v;
        if (!(use_memorized)){ //reinit
        VD[P.mem] = {};
        }
        for (v in  P1){
        if (v in  VD[P.cp] && ((!(v in VD._transcient)) || VD._transcient[v])){ //it's on the critical path
            req+=  VD[P.d_min][v];
        }
        }
        if (req<available){//every P1 widget will get at least min size
        remaining = available-req;
        for (v in  P2){ //every P2 widget
            if ((!(v in VD._transcient)) || VD._transcient[v]){
            req+=  VD[P.d_min][v];
            }
        }    
        if (req<available) {//the P1 widgets will get some extra space, since P1 and P2 already getting their min
            remaining = available-req;
            for (v in  P1){
            if ((!(v in VD._transcient)) || VD._transcient[v]){
                total_req_frac+=VD[P.frac][v];
            }
            }
            for (v in  P1){
            VD[P.alloc][v] =  ((!(v in VD._transcient)) || VD._transcient[v]) ? ((use_memorized && v in VD[P.mem]) ? VD[P.mem][v] : Math.min(VD[P.d_min][v] + Math.floor(remaining*VD[P.frac][v]/total_req_frac),VD[P.des][v]*D/100)) : 0;
            //TODO: we should check that the widget that isn't on the critical path didn't allocate more that the one that's on the critical path. 
            if (v in  VD[P.cp]){
                allocated+=VD[P.alloc][v];
            }
            }
            for (v in  P2){/// and for now, P2 views get their min
            VD[P.alloc][v] = ((!(v in VD._transcient)) || VD._transcient[v]) ? VD[P.d_min][v]: 0;
            allocated+=VD[P.alloc][v];
            }
            //anything left ? 
            if (allocated < available){
            remaining = available - allocated;
            //now give extra space to P2 widgets (//TODO refactor)
            total_req_frac = 0;
            for (v in  P2){
                if ((!(v in VD._transcient)) || VD._transcient[v]){
                total_req_frac+=VD[P.frac][v];
                }
            }
            for (v in  P2){
                allocated-=VD[P.alloc][v]; //remove current P2 size i.e. minsize 
                VD[P.alloc][v] =  ((!(v in VD._transcient)) || VD._transcient[v]) ? Math.min(VD[P.d_min][v] + Math.floor(remaining*VD[P.frac][v]/total_req_frac),VD[P.des][v]*D/100) : 0;
                allocated+=VD[P.alloc][v];                
            }
            }            
        }
        else{ //P2 widgets get less than their min
            req = 0;
            for (v in  P2){
            if ((!(v in VD._transcient)) || VD._transcient[v]){                                
                req += VD[P.d_min][v];            
                VD[P.alloc][v] = Math.floor(remaining*VD[P.d_min][v]/req);
            }
            else{
                VD[P.alloc][v] = 0;
            }
            }
            for (v in  P1){/// and for now, P2 views get their min
            VD[P.alloc][v] = ((!(v in VD._transcient)) || VD._transcient[v]) ?  ((use_memorized && v in VD[P.mem]) ? VD[P.mem][v] : VD[P.d_min][v]) : 0;
            if (v in  VD[P.cp]){
                allocated+=VD[P.alloc][v];
            }
            }
        }        
        }
        else{ //P1 widget gets less than min, and P2 are collapsed
        for (v in  P1){
            if (v in VD[P.cp]){
            VD[P.alloc][v] =  ((!(v in VD._transcient)) || VD._transcient[v]) ?  ((use_memorized && v in VD[P.mem]) ? VD[P.mem][v] : Math.floor(available*VD[P.d_min][v]/req)): 0;
            }            
            else if (v in  VD[P.scp]){ //this view has a sibling that's on the critical path for this orientation. Use sibling's size
            VD[P.alloc][v] = ((!(v in VD._transcient)) || VD._transcient[v]) ? Math.floor(available*VD[P.d_min][VD[P.scp][v]]/req): 0;
            }
            else{ //TODO: this is an approx. For now, just allocate desired size
            VD[P.alloc][v] = ((!(v in VD._transcient)) || VD._transcient[v]) ? VD[P.des][v]: 0;
            }
        }
        for (v in  P2){
            VD[P.alloc][v] = 0;
        }
        }
    }, 
    _create_ext_separator: function(){ 
            var self = this;
            if (self._ext_separator){
                var v =  self.ORIENTATIONS[self._ext_separator.orientation];
                var $p=$(self._ext_separator.container);      
                var  o_css            = {};        
                o_css[v.dir]        = 0;
                o_css[v.dim2]        = "100%";
                o_css[v.dim]        = self.SEP_INSIDE_SIZE+"px";
                o_css["cursor"]        = v.cursor;
                //o_css["border-"+v.dir]    = "thin solid #FEFCFB";
                var sep = $("<div class='external-separator' orientation='"+self._ext_separator.orientation+"'/>").css(o_css).draggable({
                         axis: v.axis, 
            stop: function(event, ui){
            var VD    = self._views_data;
            var x1 = parseInt(this.style[v.dir], 10);
            var $elt = $(this);           
            var $p = $elt.parent();
            var newdim = $p[v.dim]()-$elt.position()[v.dir];
            $p[v.dim](newdim);
            $p.parent().css(v.margin, newdim+"px");
            $elt.css(v.dir, 0);
            self.f_on_window_resize();
                        }
                    });
                $p.prepend(sep);
            }    
        },
    _create_contents: function(prefix, elt, views){
        var self        = this;
        var VD        = self._views_data;
        var elt_id        = self.element[0].id+"_";
        var did_sep        = false;
        var newprefix, id, $div;
        var key;
        var f_transcient = function(id, do_transcient){
            return function(){
                VD._transcient[id] = do_transcient;
                self._resize_contents(true);
                self._adjust(self.element.children("div.separator"));
                self.element.trigger("resize_perspective", ["xy"]);
            };
        };

        for (var i in self.PREFIX_KEYS){
        key = self.PREFIX_KEYS[i];     
        newprefix = prefix+self.PREFIXES[key];
        id = elt_id + newprefix;
        if ("data" in views[key]){
            $div = $("<div id='"+id+"' style='width: "+VD._allocated_width[id]+"px; height: "+VD._allocated_height[id]+"px;'/>");
            elt.append($div);
            if ("content" in views[key].data){
            views[key].data.content($div);
            if (id in VD._transcient){
                $div.bind({minimize: f_transcient(id, false), restore:  f_transcient(id, true)});
            }
            }
            else{
            $div.append("No contents for view <i>"+id+"</i>");
            }
        }
        else{
            var p = $("<div class='pers-protection'/>");
            elt.append(p);
            self._create_contents(newprefix, p, views[key].children);
        }
        if (!(did_sep )){
            did_sep = true;
            elt.append("<div class='separator' orientation='"+views.orientation+"'/>");
        }
        }
    },
    _resize_contents: function(use_memorized){ //resizes contents if the window has been resized. 
        var self    = this;
        var VD    = self._views_data;
        if (self._views){    
        self._find_cp("", self._views, "width"); //critical path for width
        self._find_cp("", self._views, "height"); //critical path for width
        self._compute_leaves_allocations("width", use_memorized);
        self._compute_leaves_allocations("height", use_memorized);
        self._propagate_allocations("", self._views, "width");
        self._propagate_allocations("", self._views, "height");
                
        for (var v in VD._allocated_width){
            //resize the view and the  correspoding pers-widget
            $("#"+v).css({width: VD._allocated_width[v]+"px", height: VD._allocated_height[v]+"px"}).parent().parent(".pers-widget").css({width: VD._allocated_width[v]+"px", height: VD._allocated_height[v]+"px"});
        }
        }
    },
    _create: function() {
        var self = this;
        self.element.addClass("perspective");//.css({width: self.options.width(self.element), height: self.options.height(self.element)});
        //stuff in options gets shared bewteen each instance, so let's make our own copy now (at creation time) before another instance changes it ! 
        self._views        = self.options.views;
        self._width        = self.options.width || function(){return self.element.parent().width();};
        self._height    = self.options.height || function(){return self.element.parent().height();};
        self._orientation    = self.options.orientation;
        self._listens    = self.options.listens;
        self._ext_separator = self.options.ext_separator;
        if (self._views){//are we creating any contents ? 
        var views_data = {
            _min_width: {}, 
            _desired_width: {}, 
            _frac_desired_width: {},
            _allocated_width: {}, 
            _min_height: {}, 
            _desired_height: {}, 
            _frac_desired_height: {},
            _allocated_height: {},             
            _priority:{}, 
            _pr2id:{1:{}, 2:{}}, 
            _cpw: {}, 
            _cph: {}, 
            _scpw: {}, //sibling of a view that's in the critical path for its width 
            _scph: {}, 
            _transcient: {}, 
            _memorized_width: {}, 
            _memorized_height: {}
        };
        self._views_data = views_data;
        self._fill_alloc_opts("", self._views);
        self._find_cp("", self._views, "width"); //critical path for width
        self._find_cp("", self._views, "height"); //critical path for width
        self._compute_leaves_allocations("width", false);
        self._compute_leaves_allocations("height", false);
        self._propagate_allocations("", self._views, "width");
        self._propagate_allocations("", self._views, "height");
        self._create_contents("", self.element, self._views);        
        self._create_ext_separator();
        if (self._listens){
            $.concierge.addListeners(self, self._listens);
        }
        }

        //self.element.addClass("perspective");
        self._protect(self.element.children("div.separator"));        
        for (var o in self.ORIENTATIONS){
        /* here it's necessary to put the loop code into a function so that the 
           parameter (o) gets copied, because if we inlined the code, the callback 
           function declared in _f_new_draggable ("stop") would only have the value
           of the closure variable at the last iteration */
            self._f_new_draggable(o); 
        }            
        window.addEventListener("resize", self.f_on_window_resize.bind(self), false);           
        if (self._views){
            //this is needed when opening a 3rd perspective for instance
            self._resize_contents(true);
            self._adjust(self.element.children("div.separator"));
            self.element.trigger("resize_perspective", ["xy"]); 
        }
        },
    f_on_window_resize: function(evt){
            var self = this;
            var $vp = self.element.closest("div.viewport");
            if ($vp.length){
                $vp.viewport("adjust_height");
            }
            self._resize_contents(false);
            self._adjust(self.element.children("div.separator"));
            self.element.trigger("resize_perspective", ["xy"]);
        },
    update: function(){
        var self=this;
        self._adjust(self.element.children("div.separator"));
        //send update to all registered observers: 
        self.element.trigger("resize_perspective", ["xy"]);
    }
    };   
    $.widget("ui.perspective",P_OBJ );
    $.ui.perspective.prototype.options = {
    width:  null, 
    height: null,
    orientation: null, 
    views: null
    };
    $.extend($.ui.perspective, {
        version: '1.8'
    });
})(jQuery);

// jQuery Context Menu Plugin
//
// Version 1.00
//
// Cory S.N. LaViska
// A Beautiful Site (http://abeautifulsite.net/)
//
// Visit http://abeautifulsite.net/notebook/80 for usage and more information
//
// Terms of Use
//
// This software is licensed under a Creative Commons License and is copyrighted
// (C)2008 by Cory S.N. LaViska.
//
// For details, visit http://creativecommons.org/licenses/by/3.0/us/
//
if(jQuery)( function($) {
	$.extend($.fn, {
		
		contextMenu: function(o, callback) {
			// Defaults
			if( o.menu == undefined ) return false;
			if( o.inSpeed == undefined ) o.inSpeed = 150;
			if( o.outSpeed == undefined ) o.outSpeed = 75;
			if (o.leftButton == undefined) o.leftButton = false; 
			// 0 needs to be -1 for expected results (no fade)
			if( o.inSpeed == 0 ) o.inSpeed = -1;
			if( o.outSpeed == 0 ) o.outSpeed = -1;
			// Loop each context menu
			$(this).each( function() {
				var el = $(this);
				var offset = $(el).offset();
				// Add contextMenu class
				$('#' + o.menu).addClass('contextMenu');
				// Simulate a true right click
				$(this).mousedown( function(e) {
					var evt = e;
					$(this).mouseup( function(e) {
						var srcElement = $(this);
						$(this).unbind('mouseup');
						if( evt.button == 2 ||o.leftButton == true ) {

							// Hide context menus that may be showing
							$(".contextMenu").hide();
							// Get this context menu
							var menu = $('#' + o.menu);
							
							if( $(el).hasClass('disabled') ) return false;
							
							// Detect mouse position
							var d = {}, x, y;
							if( self.innerHeight ) {
								d.pageYOffset = self.pageYOffset;
								d.pageXOffset = self.pageXOffset;
								d.innerHeight = self.innerHeight;
								d.innerWidth = self.innerWidth;
							} else if( document.documentElement &&
								document.documentElement.clientHeight ) {
								d.pageYOffset = document.documentElement.scrollTop;
								d.pageXOffset = document.documentElement.scrollLeft;
								d.innerHeight = document.documentElement.clientHeight;
								d.innerWidth = document.documentElement.clientWidth;
							} else if( document.body ) {
								d.pageYOffset = document.body.scrollTop;
								d.pageXOffset = document.body.scrollLeft;
								d.innerHeight = document.body.clientHeight;
								d.innerWidth = document.body.clientWidth;
							}
							(e.pageX) ? x = e.pageX : x = e.clientX + d.scrollLeft;
							(e.pageY) ? y = e.pageY : x = e.clientY + d.scrollTop;
							
							// Show the menu
							$(document).unbind('click');
							//SACHA: to avoid contextmenu appearing outside of page
							var B = $("body");
							var W = B.width();
							var w = menu.width();
							var H = B.height();
							var h = menu.height();

							if(x+w>W){
							    x=W-w;
							}
							if(y+h>H){
							    y=H-h;
							}
							//SACHA: Send custom event: 
							menu.trigger("beforeShow", [srcElement]);
							menu.css({ top: y, left: x }).fadeIn(o.inSpeed);
							// Hover events
							menu.find('a').mouseover( function() {
								menu.find('li.hover').removeClass('hover');
								$(this).parent().addClass('hover');
							}).mouseout( function() {
								menu.find('li.hover').removeClass('hover');
							});
							
							// Keyboard
							$(document).keypress( function(e) {
								switch( e.keyCode ) {
									case 38: // up
										if( menu.find('li.hover').size() == 0 ) {
											menu.find('li:last').addClass('hover');
										} else {
											menu.find('li.hover').removeClass('hover').prevAll('li:not(.disabled)').eq(0).addClass('hover');
											if( menu.find('li.hover').size() == 0 ) menu.find('li:last').addClass('hover');
										}
									break;
									case 40: // down
										if( menu.find('li.hover').size() == 0 ) {
											menu.find('li:first').addClass('hover');
										} else {
											menu.find('li.hover').removeClass('hover').nextAll('li:not(.disabled)').eq(0).addClass('hover');
											if( menu.find('li.hover').size() == 0 ) menu.find('li:first').addClass('hover');
										}
									break;
									case 13: // enter
										menu.find('li.hover a').trigger('click');
									break;
									case 27: // esc
										$(document).trigger('click');
									break
								}
							});
							
							// When items are selected
							$('#' + o.menu).find('a').unbind('click');
							$('#' + o.menu).find('li:not(.disabled) a').click( function() {
								$(document).unbind('click').unbind('keypress');
								$(".contextMenu").hide();
								// Callback
								if( callback ) callback( $(this).attr('href').substr(1), $(srcElement), {x: x - offset.left, y: y - offset.top, docX: x, docY: y} );
								return false;
							});
							
							// Hide bindings
							setTimeout( function() { // Delay for Mozilla
								$(document).click( function() {
									$(document).unbind('click').unbind('keypress');
									menu.fadeOut(o.outSpeed);
									return false;
								});
							}, 0);
						}
					});
				});
				
				// Disable text selection
				if( $.browser.mozilla ) {
					$('#' + o.menu).each( function() { $(this).css({ 'MozUserSelect' : 'none' }); });
				} else if( $.browser.msie ) {
					$('#' + o.menu).each( function() { $(this).bind('selectstart.disableTextSelect', function() { return false; }); });
				} else {
					$('#' + o.menu).each(function() { $(this).bind('mousedown.disableTextSelect', function() { return false; }); });
				}
				// Disable browser context menu (requires both selectors to work in IE/Safari + FF/Chrome)
				$(el).add('ul.contextMenu').bind('contextmenu', function() { return false; });
				
			});
			return $(this);
		},
		
		// Disable context menu items on the fly
		disableContextMenuItems: function(o) {
			if( o == undefined ) {
				// Disable all
				$(this).find('li').addClass('disabled');
				return( $(this) );
			}
			$(this).each( function() {
				if( o != undefined ) {
					var d = o.split(',');
					for( var i = 0; i < d.length; i++ ) {
						$(this).find('a[href="' + d[i] + '"]').parent().addClass('disabled');
						
					}
				}
			});
			return( $(this) );
		},
		
		// Enable context menu items on the fly
		enableContextMenuItems: function(o) {
			if( o == undefined ) {
				// Enable all
				$(this).find('li.disabled').removeClass('disabled');
				return( $(this) );
			}
			$(this).each( function() {
				if( o != undefined ) {
					var d = o.split(',');
					for( var i = 0; i < d.length; i++ ) {
						$(this).find('a[href="' + d[i] + '"]').parent().removeClass('disabled');
						
					}
				}
			});
			return( $(this) );
		},
		
		// Disable context menu(s)
		disableContextMenu: function() {
			$(this).each( function() {
				$(this).addClass('disabled');
			});
			return( $(this) );
		},
		
		// Enable context menu(s)
		enableContextMenu: function() {
			$(this).each( function() {
				$(this).removeClass('disabled');
			});
			return( $(this) );
		},
		
		// Destroy context menu(s)
		destroyContextMenu: function() {
			// Destroy specified context menus
			$(this).each( function() {
				// Disable action
				$(this).unbind('mousedown').unbind('mouseup');
			});
			return( $(this) );
		}
		
	});
    })(jQuery);
/* filterwizard Plugin
 * Depends:
 *    ui.core.js
 *     ui.view.js
 *
*/
/*global jQuery:true NB$:true */
(function($) {
    var $str        = "NB$" in window ? "NB$" : "jQuery";
    var V_OBJ = $.extend({},$.ui.view.prototype,{
        _create: function() {
            $.ui.view.prototype._create.call(this);
            var self = this;
            self.element.addClass("filterWizard");
            self._model = null;
            self._render();
        },
        _defaultHandler: function(evt){
            this._render();
        },
        _render: function(){
            var self=this;
            self.element.empty();

            var $h = $("<h3>Filter Threads&hellip;</h3>");
            var $e = $("<p>").addClass("error-message");
            var $p = $("<p>");

            self.element.append($h).append($e).append($p);

            // Basic Idea:
            // The controls for these text fields are:
            //  - $n : number (raw or %, according to $r)
            //  - $r : ratio? (either "percentage" or "total")
            //  - $filterType : type of filter ["random", "reply", "students", "longest"]

            var $n = $("<input>").attr("type", "text").addClass("filter-number").val(10);
            var $r = $("<select>")
                .append("<option value='threads'>threads</option>")
                .append("<option value='percent'>% of all threads</option>");
            var $filterType = $("<select>")
                .append("<option value='random'>randomly</option>")
                .append("<option value='reply'>that have the most responses</option>")
                .append("<option value='students'>that have the most student participation</option>")
                .append("<option value='longest'>that have the longest initial post</option>");
            var $go = $("<input>").attr("type", "button").attr("value", "Go");

            $p.append("Show me&nbsp;")
                .append($n).append("&nbsp;")
                .append($r).append("&nbsp;")
                .append($filterType).append(".&nbsp;")
                .append($go);

            $go.click(function() {
                // Step 1: validate [formatting + n/r compatibility]
                var n = parseInt($n.val(), 10);
                var r = $r.val();
                var filterType = $filterType.val();

                $(".input-error", self.element).removeClass("input-error");

                if (isNaN(n) || n < 0) {
                    $n.addClass("input-error");
                    $e.text("You must enter a valid number or percentage of posts.");
                    return;
                }

                if (r === "percent") {
                    if (n > 100) {
                        $n.addClass("input-error");
                        $e.text("You must enter a valid percentage between 0 and 100.");
                        return;
                     }
                } else if (r === "threads") {
                    // any thread-specific checking
                } else {
                    $r.addClass("input-error");
                    $e.text("You must choose a valid quantity.");
                    return;
                }

                // Step 2: fire event
                $.concierge.trigger({
                    type: "filter_threads",
                    value: {
                        n: n,
                        r: r,
                        type: filterType
                    }
                });

                // Step 3: call callback if set
                if (self.options.callbacks.onOk) {
                    self.options.callbacks.onOk();
                }

            });

        },
        set_model: function(model){
            var self=this;
            self._model = model;
            model.register(
                $.ui.view.prototype.get_adapter.call(this),
                {
                    file: null,
                    folder: null,
                    file_stats: null,
                    replyrating: null,
                    question: null
                });

        },
        update: function(action, payload, items_fieldname){

        }
    });

    $.widget("ui.filterWizard",V_OBJ );
    $.ui.filterWizard.prototype.options = {
	listens: {
	},
	admin: false,
        callbacks: {
            onOk: null
        }
    };
})(jQuery);

/* notepaneView Plugin
 * Depends:
 *    ui.core.js
 *     ui.view.js
 *

 Author 
 cf AUTHORS.txt 

 License
 Copyright (c) 2010-2012 Massachusetts Institute of Technology.
 MIT License (cf. MIT-LICENSE.txt or http://www.opensource.org/licenses/mit-license.php)
*/
/*global jQuery:true NB$:true*/
(function($) {
    var $str = "NB$" in window ? "NB$" : "jQuery";
    var V_OBJ = $.extend({},$.ui.view.prototype,{
        _f_location_seen: function(id_location){
        var self = this;
        return function(){
            var m = self._model;
            var o = m.get("comment", {ID_location: id_location}).items;
            var i;
            var new_seen = {};
            for (i in o){
            if (!(i in m.o.seen)){
                new_seen[i] = {id: i, id_location: id_location};
                $.concierge.logHistory("seen", i);
            }
            }            
            //            $.L("Marking thread " + id_location + " as seen !");
            self._model.add("seen", new_seen);
        };
        },
        _create: function() {
            $.ui.view.prototype._create.call(this);
            var self = this;
            self._pages =  {}; //pages that have been rendered
            self._maxpage =  0; //last (i.e. max page number of) page that has been rendered
            self._page = null; 
            self._scrollTimerID = null;
            self._seenTimerID = null;
            self._id_location = null; //location_id of selected thread
            self._is_first_stroke = true;
            self._rendered = false;
            self._filters = {me: false, star: false, question: false, advanced: false};
            self.QUESTION = null;
            self.STAR = null;

            self.element.addClass("notepaneView");

            var $header = $("<div>").addClass("notepaneView-header");
            var $filters = $("<div>").addClass("filter-controls");
            var $filter_me = $("<a>")
                .addClass("filter")
                .attr("title", "toggle filter: threads I participated in")
                .attr("action", "me")
                .html("<span>me</span><div class='filter-count'>0</div>")
                .click(function() {
                    $.concierge.trigger({
                        type: 'filter_toggle',
                        value: 'me'
                    });
                });
            var $filter_star = $("<a>")
                .addClass("filter")
                .attr("title", "toggle filter: starred threads")
                .attr("action", "star")
                .html("<span><div class='nbicon staricon' /></span><div class='filter-count'>...</div>")
                .click(function() {
                    $.concierge.trigger({
                        type: 'filter_toggle',
                        value: 'star'
                    });
                });
            var $filter_question = $("<a>")
                .addClass("filter")
                .attr("title", "toggle filter: threads with standing questions")
                .attr("action", "question")
                .html("<span><div class='nbicon questionicon' /></span><div class='filter-count'>...</div>")
                .click(function() {
                    $.concierge.trigger({
                        type: 'filter_toggle',
                        value: 'question'
                    });
                });
            var $filter_advanced = $("<a>")
                .addClass("filter")
                .attr("title", "toggle filter: toggle by advanced features")
                .attr("action", "advanced")
                .html("<div class='filter-count'>advanced</div>")
                .click(function() {
                    if ($(this).hasClass("active")) {
                        $(this).removeClass("active");
                        self._filters.advanced = false;
                        self._page = 1;
                        self._pages = {};
                        self._maxpage = 0;
                        self._render(true);
                    } else {
                        $wizard.dialog("open");
                    }
                });

            var $filtered_message = $("<span class='filter-msg-filtered'><span class='n_filtered'>0</span> threads out of <span class='n_total'>0</span></span>");
            var $unfiltered_message = $("<span class='filter-msg-unfiltered'><span class='n_unfiltered'>0</span> threads</span>");
            var $notepaneView_pages = $("<div>").addClass("notepaneView-pages");

            $filters.append($filter_me).append($filter_star).append($filter_question).append($filter_advanced);
            $header.append($filters).append($filtered_message).append($unfiltered_message);
            self.element.append($header).append($notepaneView_pages);

            if (window.location.href.indexOf("?filter") === -1) {
                $filter_advanced.remove();
            }

            $("body").append(
                "<ul id='contextmenu_notepaneView' class='contextMenu'>" +
                "<li class='context export-top'><a href='#export-top'>Export Original Post</a></li>"+
                "<li class='context export-all'><a href='#export-all'>Export Entire Thread</a></li>"+
                "</ul>");

            $("body").append(
                $("<div>").attr("id", "filterWizardDialog")
                );

            var $wizard = $("#filterWizardDialog");
            $wizard.filterWizard({
                admin: true, // TODO: use 'admin' variable
                callbacks: {
                    onOk: function() { $wizard.dialog("close"); }
                }
            }).dialog({
                width: 800,
                height: 200,
                modal: true,
                autoOpen: false
            });

            $("#contextmenu_notepaneView").bind("beforeShow", function(event, el) {
                var id_item = el.closest("div.location-lens").attr("id_item");
                var m = self._model;
                var c = m.o.comment[id_item];
                $("li", this).show();
            });

        },
        _defaultHandler: function(evt){
        var self=this;
        if (self._id_source ===  $.concierge.get_state("file")){
            var sel, container, delta_top, delta_bottom, o, h, H, scrollby;
            switch (evt.type){
            case "page":
                if (self._page !== parseInt(evt.value, 10)){
                    self._page =  parseInt(evt.value, 10);            
            self._render();

            container = $("div.notepaneView-pages", self.element);
            sel = $("div.notepaneView-comments[page="+evt.value+"]",self.element);
            delta_top = sel.offset().top - container.offset().top;
            container.stop(true).animate({scrollTop: (delta_top>0?"+="+delta_top:"-="+(-delta_top))  + 'px'}, 300); 
            }
            break;
            case "filter_threads":
                $.concierge.get_component("advanced_filter")({
                    id_source: self._id_source,
                    n: evt.value.n,
                    r: evt.value.r,
                    type: evt.value.type
                }, function(result) {
                    self._filters.advanced = result.locs;
                    self._page = 1;
                    self._pages = {};
                    self._maxpage = 0;
                    self._render(true);
                });

            break;
            case "filter_toggle": 
            if (evt.value in self._filters){
                self._filters[evt.value] = (!(self._filters[evt.value]));
                self._page =  1;
                self._pages = {};
                self._maxpage = 0;
                self._render(true);
            }
            break;
            case "note_hover": 
            $("div.location-lens[id_item="+evt.value+"]", self.element).addClass("hovered");
            break;
            case "note_out": 
            $("div.location-lens[id_item="+evt.value+"]", self.element).removeClass("hovered");        
            break;
            case "warn_page_change": 
            o = self._model.o.location[evt.value];
            var page_summary;
            if (o.page > self._page){
            self._render_one(o.page);
            page_summary = o.page;
            }
            else{
                page_summary = self._page;
            }
            sel = $("div.location-pagesummary[page="+page_summary+"]", self.element).addClass("selected");
            container = $("div.notepaneView-pages", self.element);
            if (sel.length>0){

            h = sel.height() ;
            H = container.height();
            delta_top = sel.offset().top - container.offset().top;
            delta_bottom = delta_top + h - H;
            if (delta_top > 0){ //selected note is not too high
                if (delta_bottom > 0) {//but it's too low... scroll down
                scrollby = delta_bottom + H/2-h; //delta_bottom is how much to scroll so that bottom of lens coincides with bottom of widget. 
                container.stop(true).animate({scrollTop: '+=' + scrollby  + 'px'}, 300);     
                }
            }
            else{ //too high: recenter: 
                scrollby = delta_top + (h-H)/2;
                container.stop(true).animate({scrollTop: '+=' + scrollby + 'px'}, 300);     
            }
            }
            break;
            case "select_thread": 
            $("div.location-pagesummary.selected", self.element).removeClass("selected");
            if (self._seenTimerID !== null){
            window.clearTimeout(self._seenTimerID);
            }
            self._seenTimerID = window.setTimeout(self._f_location_seen(evt.value), 1000);
            o = self._model.o.location[evt.value];
            if (o.page !==  self._page){
            self._page =  o.page;
            self._render();
            }
            $("div.location-lens[id_item="+self._id_location+"]", self.element).removeClass("selected");
            self._id_location = evt.value;
            sel = $("div.location-lens[id_item="+evt.value+"]",self.element).addClass("selected");
            container = $("div.notepaneView-pages", self.element);
            if (sel.length>0){
            
            h = sel.height() ;
            H = container.height();
            delta_top = sel.offset().top - container.offset().top;
            delta_bottom = delta_top + h - H;
            if (delta_top > 0){ //selected note is not too high
                if (delta_bottom > 0) {//but it's too low... scroll down
                scrollby = delta_bottom + H/2-h; //delta_bottom is how much to scroll so that bottom of lens coincides with bottom of widget. 
                container.stop(true).animate({scrollTop: '+=' + scrollby  + 'px'}, 300);     
                }
            }
            else{ //too high: recenter: 
                scrollby = delta_top + (h-H)/2;
                container.stop(true).animate({scrollTop: '+=' + scrollby + 'px'}, 300);     
            }
            }
            break;
            case "keydown": 
            self._keydown(evt.value);
            break;
            }    
        }    
        },
        _update_filters: function(){
        var self = this;
        var m = self._model;
        var locs = m.get("location", {id_source:  self._id_source});
        var me = $.concierge.get_component("get_userinfo")();
        var n_unfiltered = locs.length();
        var filters_on = false;
        var $filters = $("a.filter", self.element).removeClass("active");
        var $filter_me = $filters.filter("[action=me]");
        var $filter_star = $filters.filter("[action=star]");
        var $filter_question = $filters.filter("[action=question]");
        var $filter_advanced = $filters.filter("[action=advanced]");

        var locs_me        = locs.intersect(m.get("comment", {id_author: me.id}).values("ID_location"));
        var locs_star        = m.get("threadmark", {active: true, type: self._STAR });
        var locs_question    = m.get("threadmark", {active: true, type: self._QUESTION });

        var locs_filtered = locs;
        if (self._filters.me){
            $filter_me.addClass("active");
            filters_on = true;
            locs_filtered = locs_filtered.intersect(locs_me.items);
        }
        if (self._filters.star){
            $filter_star.addClass("active");
            filters_on = true;
            locs_filtered = locs_filtered.intersect(locs_star.values("location_id"));
        }
        if (self._filters.question){
            $filter_question.addClass("active");
            filters_on = true;
            locs_filtered = locs_filtered.intersect(locs_question.values("location_id"));
        }
        if (self._filters.advanced) {
            $filter_advanced.addClass("active");
        }
        var n_me =  locs_me;
        var n_star = locs_star;
        var n_question = locs_question;

        $("div.filter-count", $filter_me).text(n_me.length());
        $("div.filter-count", $filter_star).text(n_star.length());                               
        $("div.filter-count", $filter_question).text(n_question.length());                               
        if (filters_on){
            $("span.filter-msg-unfiltered", self.element).hide();
            $("span.filter-msg-filtered", self.element).show();
            $("span.n_total", self.element).text(n_unfiltered);
            $("span.n_filtered", self.element).text(locs_filtered.length());
        } 
        else{
            $("span.filter-msg-unfiltered", self.element).show();
            $("span.filter-msg-filtered", self.element).hide();    
            $("span.n_unfiltered", self.element).text(locs.length());
        }
        },
        _lens: function(l){
        var self = this;
        var m = self._model;
        var me = $.concierge.get_component("get_userinfo")();
        var numnotes = m.get("comment", {ID_location: l.ID}).length();
        var numseen = m.get("seen", {id_location: l.ID}).length();
        var numstar = m.get("threadmark",  {active: true, type: self._STAR, location_id: l.ID }).length();
        var numquestion = m.get("threadmark",  {active: true, type: self._QUESTION, location_id: l.ID }).length();

        var unseen_me = m.get("comment", {ID_location: l.ID, id_author: me.id}).length() -  m.get("seen", {ID_location: l.ID, id_author: me.id}).length(); 
        var numnew    = numnotes - numseen - unseen_me; //so that notes that I've authored but that I haven't seen don't count.     
        var lf_numnotes =  "<ins class='locationflag "+(numnew>0?"lf-numnewnotes":"lf-numnotes")+"'>"+numnotes+"</ins>";
        var lf_admin    = m.get("comment", {ID_location: l.ID, admin:1}).is_empty() ? "" : "<ins class='locationflag'><div class='nbicon adminicon' title='An instructor/admin has participated to this thread'>&nbsp;</div></ins>";
        var lf_me_private =  m.get("comment", {ID_location: l.ID, id_author:me.id}).is_empty() ? "": (m.get("comment", {ID_location: l.ID, type:1}).is_empty() ?  "<ins class='locationflag'><div class='nbicon meicon' title='I participated to this thread'/></ins>" : "<ins class='locationflag'><div class='nbicon privateicon' title='I have private comments in  this thread'/></ins>" );
        var bold_cl    = numnew > 0 ? "location-bold" : "";
        var lf_star    = numstar > 0 ? "<ins class='locationflag'><div class='nbicon staricon-hicontrast' title='This thread has been starred'/></ins>" : "";
        var lf_question    = numquestion > 0 ? "<ins class='locationflag'><div class='nbicon questionicon-hicontrast' title='A reply is requested on this thread'/></ins>" : "";
        var root =  m.get("comment", {ID_location: l.ID, id_parent: null}).first();
        
        var body = (root===null || root.body.replace(/\s/g, "") === "") ? "<span class='empty_comment'>Empty Comment</span>" : $.E(root.body.substring(0, 200));
        return "<div class='location-flags'>"+lf_numnotes+lf_admin+lf_me_private+lf_star+lf_question+"</div><div class='location-shortbody "+(numquestion>0?"replyrequested":"")+"'><div class='location-shortbody-text "+bold_cl+"'>"+body+"</div></div>";
        }, 
        _keydown: function(event){
        var self=this;
        var codes = {37: {sel: "prev", no_sel: "last", dir: "up", msg:"No more comments above..."}, 39: {sel: "next", no_sel:"first", dir: "down", msg:"No more comments below..."}}; 
        var new_sel, id_item, id_new;

        if (event.shiftKey || event.altKey || event.ctrlKey) {
            // We aren ot expecting shift, alt, or ctrl with our key codes, so we let others handle this
            return true;
        }

        if (event.keyCode in codes){
            var sel = $("div.location-lens.selected", self.element);
            if (sel.length){
            new_sel = sel[codes[event.keyCode].sel]("div.location-lens");
            if (new_sel.length){
                self._is_first_stroke = true;
                new_sel.click();
            }        
            else { // we need to find a following location on subsequent pages
                id_item = sel.attr("id_item");
                id_new = $.concierge.get_component("location_closestpage")({id: Number(id_item), model: self._model, direction: codes[event.keyCode].dir, filters: self._filters}); 
                if (id_new !== null){
                if (self._is_first_stroke){//add an extra keystroke between changing pages
                    self._is_first_stroke = false;                
                    $.concierge.trigger({type:"warn_page_change", value: id_new});
                }
                else{
                    self._is_first_stroke = true;                    
                    $.concierge.trigger({type:"select_thread", value: id_new});
                }
                }
                else{
                $.I( codes[event.keyCode].msg);
                }
            }
            }
            else{ // no selection on the page
            new_sel = $("div.location-lens")[codes[event.keyCode].no_sel](); 
            if (new_sel.length){
                new_sel.click();
                //                $.L("moving selection");
            }
            }
            return false;
        }
        else{
            return true; // let the event be captured for other stuff
        }
        //        $.L("keypressed");
        }, 
        _f_location_click : function(event){
        var id_item = event.currentTarget.getAttribute("id_item");
        $.concierge.trigger({type:"select_thread", value: id_item});
        },
        _f_location_hover : function(event){
        var id_item = event.currentTarget.getAttribute("id_item");
        $.concierge.trigger({type:"note_hover", value: id_item});
        }, 
        _f_location_out : function(event){
        var id_item = event.currentTarget.getAttribute("id_item");
        $.concierge.trigger({type:"note_out", value: id_item});
        },
        _render: function(do_erase){
        /*
         * this is where we implement the caching strategy we want...
         */
        var self = this;
        if (do_erase){
            self.element.children("div.notepaneView-pages").children("div.notepaneView-comments").empty();
        }
        //first, render the current page...
        var f = this._model.o.file[ this._id_source];
        var p = this._page;
        var p_after = p; 
        var p_before = p;
        this._render_one(p);        
        this._update_filters();
        //estimate how much space taken by annotations, and render 120% of a whole screen of them if not enough on current page
        var container =     $("div.notepaneView-pages", this.element);        
        while ( container.children().last().offset().top - container.offset().top < container.height() ){
            p_after++;
            if (p_after<=f.numpages){
            this._render_one(p_after);
            }            
            p_before--;
            if (p_before>0){
            this._render_one(p_before);
            }
            if (p_before<1 && p_after >= f.numpages){
            //There's just not enough annotations to render a whole screen 
            return;
            }
        }
        }, 
        _render_one: function(page){

        var self    = this;        
        var nosummary = false;

        if (page > self._maxpage){
            self._maxpage =  page;
        }

        // If we only have one page, no need to display the page summary
        if (self._maxpage <= 1) {
            nosummary = true;
        }

        if (!(page in self._pages)){
            var m    = self._model;
            var $pane    = $("div.notepaneView-comments[page="+page+"]", self.element).empty();
            var locs    = m.get("location", {id_source:  self._id_source, page: page });
            var me = $.concierge.get_component("get_userinfo")();
            if (self._filters.me){
            locs = locs.intersect(m.get("comment", {id_author: me.id}).values("ID_location"));
            }
            if (self._filters.star){
            locs = locs.intersect(m.get("threadmark", {active: true, type: self._STAR }).values("location_id"));
            }
            if (self._filters.question){
            locs = locs.intersect(m.get("threadmark", {active: true, type: self._QUESTION }).values("location_id"));
            }
            if (self._filters.advanced){
                locs = locs.intersect(self._filters.advanced);
            }
            var locs_array = locs.sort(self.options.loc_sort_fct);
            var o;
            if (locs_array.length && !nosummary){
            $pane.append("<div class='location-pagesummary' page='"+page+"'>"+locs_array.length+" thread"+$.pluralize(locs_array.length)+" on page "+page+"</div>");
            }

            var admin = m.get("ensemble", {}).first().admin === true;

            locs_array.forEach(function(o) {
                var loc_lens =
                    $("<div class='location-lens' id_item='"+o.ID+"'>"+self._lens(o)+"</div>");
                $pane.append(loc_lens);

                if (admin === true) {
                    loc_lens.contextMenu({menu: "contextmenu_notepaneView"}, function(action, el, pos) {
                        var $loc = $(el).closest("div.location-lens");
                        var id_item = $loc.attr("id_item");
                        if (action === "export-top" || action === "export-all") {
                            var text = "@import(" + id_item + ", " + ((action === "export-top") ? "top" : "all") + ")";
                            window.prompt("Copy the text below and insert it as a new annotation to import it.", text);
                        }
                    });
                }
            });

            $("div.location-lens", $pane).click(self._f_location_click).mouseenter(self._f_location_hover).mouseleave(self._f_location_out).removeClass("lens-odd").filter(":odd").addClass("lens-odd");
            if (self._id_location in locs.items && locs.items[self._id_location].page === page){//highlight selection
            $("div.location-lens[id_item="+self._id_location+"]",self.element).addClass("selected");
            }
            self._pages[page] = true;           
            self._rendered = true;
            return locs;
        }
        self._rendered = true;
        return null;
        }, 
        set_model: function(model){
        var self=this;
        self._STAR = $.concierge.get_constant("STAR");
        self._QUESTION =  $.concierge.get_constant("QUESTION");
        self._model =  model;
        var id_source = $.concierge.get_state("file");
        self._id_source =  id_source ; 
        model.register($.ui.view.prototype.get_adapter.call(this),  {location: null, seen: null, threadmark: null});
        //make placeholders for each page: 
        var f = model.o.file[id_source];
        var $pane = $("div.notepaneView-pages", self.element);
        $pane.scroll(function(evt){
            var timerID = self._scrollTimerID;
            if (timerID !== null){
                window.clearTimeout(timerID);
            }            
            timerID = window.setTimeout(function(){
                //Are we within 20px from the bottom of scrolling ?
                while ($pane.children().last().offset().top - $pane.offset().top - $pane.height() < 20){
                    var maxpage = self._maxpage;
                    $.L("scroll: maxpage="+maxpage);
                    if (maxpage < f.numpages){
                    self._render_one(maxpage+1);
                    }
                    else{
                    return; //last page has been rendered. 
                    }
                }
                }, 300);
            self._scrollTimerID =  timerID;   
            
            });
        for (var i = 1;i<=f.numpages;i++){
            $pane.append("<div class='notepaneView-comments' page='"+i+"'/>");
        }
        self._update();    
        }, 
        update: function(action, payload, items_fieldname){
        var self = this;
        var m = self._model;
        var i, D, loc, pages_done, id_source, page, pages, pages_to_render;
        if (action === "add" && items_fieldname === "location"){
            id_source    = self._id_source; 
            page        = self._page;
            if (page === null || id_source === null ){
            //initial rendering: Let's render the first page. We don't check the id_source here since other documents will most likely have their page variable already set. 
            self._page =  1;
            self._pages = {};
            self._maxpage = 0;
            self._render();
            //TODO: in other  "add location" cases we may have to use different method, that forces a to redraw the pages that have been rendered already. 
            }
            else{
            //send signal to redraw pages that needs to be redrawn: 
            D        = payload.diff;
            pages    = self._pages;
            pages_to_render = {};
            for (i in D){
                if (D[i].id_source === id_source){
                delete pages[D[i].page];
                pages_to_render[[D[i].page]] = null;
                }
            }
            for (i in pages_to_render){
                self._render_one(i);
            }
            }
        }
        else if (action === "add" && items_fieldname === "seen" && self._rendered){
            D        = payload.diff;
            var locs_done = {};
            for (i in D){
            loc = m.get("location", {ID: D[i].id_location}).first();
            if (loc !== null && loc.id_source === self._id_source && (!(loc.ID in locs_done))){
                locs_done[loc.ID] = null;
                $("div.location-lens[id_item="+loc.ID+"]",self.element).html(self._lens(loc));
            }
            }           
        }
        else if (action === "remove" && items_fieldname === "location"){ //just re-render the pages where locations were just removed. 
            D        = payload.diff;
            pages_done    = {};

            for (i in D){
            page = D[i].page;
            if (! (page in pages_done)){
                pages_done[page] = null;
                delete self._pages[page];
                self._render_one(page);
            }
            }
        }
        else if (action === "add" && items_fieldname === "threadmark" && self._rendered){
            D = payload.diff;
            
            pages_done    = {};
            for (i in D){
            loc = m.get("location", {ID: D[i].location_id}).first();
            if (loc!= null){
                page = loc.page;
                if (! (page in pages_done)){
                delete self._pages[page];
                self._render_one(page);
                }
            }
            }
            self._update_filters();
        }
        }    
    });
    $.widget("ui.notepaneView",V_OBJ );
    $.ui.notepaneView.prototype.options = {
    loc_sort_fct: function(o1, o2){return o1.top-o2.top;},
    expand: "div.notepaneView-pages", 
    listens: {
        page: null, 
        note_hover: null, 
        note_out: null, 
        select_thread: null, 
        warn_page_change: null, 
        keydown: null,
        filter_toggle: null,
	filter_threads: null
    }            
    };
})(jQuery);

/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

var dateFormat = function () {
	var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) val = "0" + val;
			return val;
		};

	// Regexes and supporting functions are cached through closure
	return function (date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		if (isNaN(date)) throw SyntaxError("invalid date");

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		var	_ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d:    d,
				dd:   pad(d),
				ddd:  dF.i18n.dayNames[D],
				dddd: dF.i18n.dayNames[D + 7],
				m:    m + 1,
				mm:   pad(m + 1),
				mmm:  dF.i18n.monthNames[m],
				mmmm: dF.i18n.monthNames[m + 12],
				yy:   String(y).slice(2),
				yyyy: y,
				h:    H % 12 || 12,
				hh:   pad(H % 12 || 12),
				H:    H,
				HH:   pad(H),
				M:    M,
				MM:   pad(M),
				s:    s,
				ss:   pad(s),
				l:    pad(L, 3),
				L:    pad(L > 99 ? Math.round(L / 10) : L),
				t:    H < 12 ? "a"  : "p",
				tt:   H < 12 ? "am" : "pm",
				T:    H < 12 ? "A"  : "P",
				TT:   H < 12 ? "AM" : "PM",
				Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace(token, function ($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
dateFormat.masks = {
	"default":      "ddd mmm dd yyyy HH:MM:ss",
	shortDate:      "m/d/yy",
	mediumDate:     "mmm d, yyyy",
	longDate:       "mmmm d, yyyy",
	fullDate:       "dddd, mmmm d, yyyy",
	shortTime:      "h:MM TT",
	mediumTime:     "h:MM:ss TT",
	longTime:       "h:MM:ss TT Z",
	isoDate:        "yyyy-mm-dd",
	isoTime:        "HH:MM:ss",
	isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
	dayNames: [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
	return dateFormat(this, mask, utc);
};


/**
 * Additions
 */

var getWeekNumber = function(d) {
    // Copy date so don't modify original
    d = new Date(d);
    d.setHours(0,0,0);
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setDate(d.getDate() + 4 - (d.getDay()||7));
    // Get first day of year
    var yearStart = new Date(d.getFullYear(),0,1);
    // Calculate full weeks to nearest Thursday
    return Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
}

Date.prototype.getWeek = function() {
        return getWeekNumber(this);
};

Date.prototype.toPrettyString = function () {
        var current_date = new Date();

        if (this.getFullYear() !== current_date.getFullYear()) { // Not even this year
            return this.format("d mmm yyyy", true);
        } else if (this.getWeek() !== current_date.getWeek()) { // This year but not this week
            return this.format("d mmm, hh:MMTT", true);
        } else if (this.getDay() !== current_date.getDay()) { // This week but not today
            return this.format("ddd hh:MMTT", true);
        }

        // Today
        return this.format("hh:MMTT");

};

/* threadview Plugin
 * Depends:
 *    ui.core.js
 *     ui.view.js
 *

 Author 
 cf AUTHORS.txt 

 License
 Copyright (c) 2010-2012 Massachusetts Institute of Technology.
 MIT License (cf. MIT-LICENSE.txt or http://www.opensource.org/licenses/mit-license.php)
*/
/*global jQuery:true confirm:true*/
(function($) {
    var V_OBJ = $.extend({},$.ui.view.prototype,{
        _create: function() {
        $.ui.view.prototype._create.call(this);
        var self = this;
        self._location =  null; 
        //SACHA: FIXME (HACK) the 2 vars below are needed in order to defer rendering if code hasn't been loaded yet. For instance, when we have ?c=id_comment in the URL
        self._ready = false;
        self._doDelayedRender = false;
        self._STAR = null;
        self._QUESTION = null;

        /*
          self.element.addClass("threadview").append("<div class='threadview-header'><button action='prev'>Prev</button> <button action='next'>Next</button> </div><div class='threadview-pane'/>");
          
          $("button[action=prev]", self.element).click(function(){
          alert("todo");
          });
          $("button[action=next]", self.element).click(function(){
          alert("todo");
          });
        */
        self.element.addClass("threadview").append("<div class='threadview-header'><div class='threadview-header-sectioninfo'/><div class='threadview-filter-controls'> <div class='nbicon questionicon' /><button class='mark-toggle' arg='add' action='question'>+</button><span class='n_question'>...</span><button class='mark-toggle' arg='remove' action='question'>-</button> <span id='thread_request_reply'>replies requested</span>  <!--<button class='mark-toggle' action='star'><div class='nbicon staricon-hicontrast' /><span class='n_star'>...</span><span id='thread_mark_favorite'>Mark as Favorite.</span></button>--></div></div><div class='threadview-pane'/>");
        var star_button = $("button.mark-toggle[action=star]", self.element).click(function(event){
            var comment_id = self._model.get("comment", {ID_location: self._location, id_parent: null }).first().ID;
            $.concierge.get_component("mark_thread")({comment_id: comment_id, id_location: self._location, type: self._STAR}, function(p){                
                self._model.add("threadmark", p.threadmarks);
                var i, tm;
                for ( i in p.threadmarks){
                    tm = p.threadmarks[i];
                    $.I("Thread #"+tm.location_id+ " has been "+(tm.active ? "":"un")+"marked as favorite.");
                }
                });
            }); 
        var question_button = $("button.mark-toggle[action=question]", self.element).click(function(event){
            //var comment_id = event.target.getAttribute("arg")=="remove" ? null : self._model.get("comment", {ID_location: self._location, id_parent: null }).first().ID;
            var comment_id = self._model.get("comment", {ID_location: self._location, id_parent: null }).first().ID;
            var active =  event.target.getAttribute("arg") !== "remove";
            $.concierge.get_component("mark_thread")({active: active, comment_id: comment_id, id_location: self._location, type: self._QUESTION}, function(p){                
                self._model.add("threadmark", p.threadmarks);
                var i, tm;
                for ( i in p.threadmarks){
                    tm = p.threadmarks[i];
                    $.I("Thread #"+tm.location_id+ " has been "+(tm.active ? "":"un")+"marked as 'Reply Requested'.");
                }
                });
            }); 

        //splash screen: 
        $("div.threadview-pane", self.element).append($.concierge.get_component("mini_splashscreen")());        
        $("div.threadview-header", self.element).hide();
        self._ready = true;
        if (self._doDelayedRender){
            self._render();
        }
        $("body").append("<ul id='contextmenu_threadview' class='contextMenu'> "+
                         "<li class='context thanks'><a href='#thanks'>That helped. Thanks !</a></li>"+
                         "<li class='context edit'><a href='#edit'>Edit</a></li> <li class='context reply'><a href='#reply'>Reply</a></li>"+
                         "<li class='context question menu-separator'><a href='#question'>Request a reply</a></li> "+
                         "<li class='context noquestion menu-separator'><a href='#noquestion'>Remove 'reply requested'</a></li> "+
                         "<li class='context star'><a href='#star'>Mark as favorite</a></li> "+
                         "<li class='context nostar'><a href='#nostar'>Remove from favorites</a></li> "+
                         "<li class='context delete menu-separator'><a href='#delete'>Delete</a></li></ul>");                   
        },
        _defaultHandler: function(evt){
        if (this._file ===  $.concierge.get_state("file")){
            switch (evt.type){
            case "select_thread":
            this._location =  evt.value;
            this._render();
            break;
            case "foo":
            break;
            }    
        }    
        },
        _commentLabelsFactory : function(o, scope ){
            //o: comment for which to draw labels
            //scope: 
            //  1 to draw them for the specified comment 
            //  2 to draw them for the whole thread. 
            var self = this;
            var m = self._model;
             if (self.options.commentLabels){
            var cl_container = ["<div style='position: relative'><div class='commentlabel_container' scope='"+scope+"' id_item='"+o.ID+"'>"];
            var cats = m.get("labelcategory", {scope: scope}).items;
            var i, j, label, tags = [], cat, caption; 
            //tags are categories for which pointgrade=2: we just want to display the tag,
            //instead of displaying the name and the list of grades, we just want to display the name and whether it's toggled or not.            
            for (i in cats){
                cat = cats[i];
                if (cat.pointscale === 2){
                    tags.push(i);
                }
                else{
                    label = m.get("commentlabel", {comment_id: o.ID, category_id: cat.id}).first();
                    cl_container.push("<div class='commentlabel_cat' id_item='"+i+"'><div class='cat_name'>"+$.E(cat.name)+"</div>");
                    for (j=0;j<cat.pointscale;j++){
                        try{
                            caption = m.get("labelcategorycaption", {category_id: cat.id, grade: j}).first().caption;
                        }catch(e){
                            caption = j;
                        }
                        cl_container.push("<span class='cat_elt"+((label !== null && label.category_id===cat.id &&  label.grade===j)? " selected":"" )+"' val='"+j+"'>"+caption+"</span>");
                    }
                    cl_container.push("</div>");
                }              
            }
            //now display tags: 
            cl_container.push("<div>");
            for (j=0;j<tags.length;j++){
                cat = cats[tags[j]];
                label = m.get("commentlabel", {comment_id: o.ID, category_id: cat.id}).first();
                cl_container.push("<span id_item='"+tags[j]+"' class='tag cat_elt"+((label !== null && label.category_id===cat.id &&  label.grade===1)? " selected":"" )+"'>"+$.E(cat.name)+"</span>");

            }
            cl_container.push("</div>");            
            cl_container.push("</div></div>");
            return  cl_container.join("");
             }
            return "";
        }, 
        _lens: function(o){
        var self        = this;
        var m            = self._model;
        var bold_cl        = (m.get("seen", {id: o.ID}).is_empty()===false || o.id_author === self._me.id) ? "" : "note-bold";
        var admin_info        = o.admin ? " <div class='nbicon adminicon'  title='This user is an instructor/admin for this class' /> ": " ";
        var me_info        = (o.id_author === self._me.id) ? " <div class='nbicon meicon' title='I am the author of this comment'/> ":" ";
        var question_info_me    = (m.get("threadmark", {comment_id: o.ID, user_id: self._me.id, active: true, type: self._QUESTION }).is_empty()) ? " " : " <div class='nbicon questionicon-hicontrast' title='I am requesting a reply on this comment'/> " ;

        var tms            = m.get("threadmark", {comment_id: o.ID,  active: true, type: self._QUESTION });        
        var tms_me        = tms.intersect( self._me.id, "user_id");
        var tms_me_label    = tms_me.is_empty() ? "" : ", including mine"; 
        var tms_me_class    = tms_me.is_empty() ? "" : "active";
        var question_info    = tms.is_empty()  ? " " : "<div class='stat-count "+tms_me_class+"' title='"+tms.length()+" "+ $.pluralize(tms.length(), "replies", "reply") +" requested on this comment"+tms_me_label+" '><div class='nbicon questionicon' /> "+tms.length()+" </div>";

        var type_info        = "";
        if (o.type === 1) {
            type_info        = " <div class='nbicon privateicon' title='[me] This comment is private'/> ";
        }
        else if (o.type === 2){
            type_info        = " <div class='nbicon stafficon' title='[staff] This comment is for Instructors and TAs'/> ";
        }            
        var author_name;
        if (!o.signed && self.is_admin) {
            author_name = " <span class='author author-revealed' title='anonymous comment'>"+o.fullname+"</span> ";
        } else {
            author_name = " <span class='author'>"+o.fullname+"</span> ";
        }
        var creation_info = " <span class='created'> &ndash; " + (new Date(o.created * 1000)).toPrettyString() + "</span> ";
        var replymenu        = "<a class='replymenu' href='javascript:void(0)'><div class='nbicon replyicon' title='Reply' /></a>";
        var optionmenu        = " <a class='optionmenu' href='javascript:void(0)'><div title='Actions'>&middot;&middot;&middot;</div></a> ";
        var url_regex = /(\b(https?|ftp|file):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z0-9+&@#\/%=~_|])/ig;
        var body        = o.body.replace(/\s/g, "") === "" ? "<span class='empty_comment'>Empty Comment</span>" : $.E(o.body).replace(/\n/g, "<br/>").replace(url_regex, "<a href=\"$1\">$1</a>");
        var commentlabels = self._commentLabelsFactory(o,1 );
       
        return ["<div class='note-lens ",tms.is_empty() ? "":"replyrequested" , "' id_item='",o.ID,"'><div class='lensmenu'>", replymenu, optionmenu,"</div>",commentlabels,"<span class='note-body ",bold_cl,"'>",body,"</span><div class='authorship-info'>", author_name,admin_info, me_info, question_info, type_info, creation_info,"</div>", "</div>"].join("");
        },
        _comment_sort_fct: function(o1, o2){return o1.ID-o2.ID;},
        _fill_tree: function(m, c){
        var $div = $("<div class='threadview-branch'>"+this._lens(c)+"</div>");
        var children = m.get("comment", {ID_location: c.ID_location, id_parent: c.ID}).sort(this._comment_sort_fct);        
        for (var i = 0; i<children.length;i++){
            $div.append(this._fill_tree(m,children[i]));
        }
        return $div;
        },
        _render_header: function(){
        var self = this;
        var header = $("div.threadview-header", self.element);
        var m = self._model;
        var tm_star = m.get("threadmark", {location_id: self._location, active:true, type: self._STAR});
        var tm_star_me = m.get("threadmark", {location_id: self._location, active:true, type: self._STAR, user_id: self._me.id});
        var tm_question = m.get("threadmark", {location_id: self._location, active:true, type: self._QUESTION});
        var tm_question_me = m.get("threadmark", {location_id: self._location, active:true, type: self._QUESTION, user_id: self._me.id});
        var buttons = $("button.mark-toggle", header).removeClass("active");
        if (tm_star_me.length()>0){
            buttons.filter("[action=star]", header).addClass("active");
        }
        $("span.n_star", header).text(tm_star.length());
        if (tm_question_me.length()>0){
            buttons.filter("[action=question][arg=add]").attr("disabled", "disabled");
            buttons.filter("[action=question][arg=remove]").removeAttr("disabled");            
            }
        else{          
            buttons.filter("[action=question][arg=remove]").attr("disabled", "disabled");
            buttons.filter("[action=question][arg=add]").removeAttr("disabled");
        }
        $("span.n_question", header).text(tm_question.length());
        $("#thread_request_reply").text($.pluralize(tm_question.length(), "replies requested", "reply requested"));
            //indicate the section name if this thread is section-based: 
            var section_header =  $(".threadview-header-sectioninfo", header);
            section_header.text("");
            var section_id = m.o.location[self._location].section_id;
            if (section_id !== null){
                var section = m.o.section[section_id];
                if (section){
                    section_header.text(section.name);
                }              
            }
        }, 
        _render: function(){    
        var self    = this;
        self._me =  $.concierge.get_component("get_userinfo")();
        if (self._ready === false){
            self._doDelayedRender = true;
            return;
        }
        var model    = self._model;     
        self.is_admin    = model.get("ensemble", {}).first().admin;
        $("div.threadview-header", self.element).show();
        self._render_header();
        var $pane    = $("div.threadview-pane", self.element).empty();
        var root    = model.get("comment", {ID_location: self._location, id_parent: null}).first();
        if (root === undefined){ //happens after deleting a thread that only contains 1 annotation
            return;
        }
        $pane.append(this._commentLabelsFactory(root, 2));
        $pane.append(this._fill_tree(model, root));
        var f_on_delete = function(p){
            $.I("Note #"+p.id_comment+" has been deleted");
            var c = model.o.comment[p.id_comment];
            model.remove("comment", p.id_comment);

            if (c.id_parent === null){
                model.remove("location", c.ID_location);
                // model.remove("html5location", c.ID_location); FIXME: This is not working, but it should.
            } else {
                //we force an update of locations in case some styling needs to be changed. 
                var locs = {};
                locs[c.ID_location] = model.o.location[c.ID_location];
                model.add("location", locs);
            }
        };
        var f_context = function(action, el, pos){
            var $el    = $(el);
            var $note    =  $el.closest("div.note-lens");
            var id_item =  $note.attr("id_item");
            switch (action){
            case "reply":             
            $.concierge.trigger({type: "reply_thread", value: id_item});
            break;
            case "edit": 
            $.concierge.trigger({type: "edit_thread", value: id_item});
            break;
            case "question": 
            case "noquestion": 
            $.concierge.get_component("mark_thread")({id_location: self._location, type: self._QUESTION, comment_id: id_item}, function(p){                
                self._model.add("threadmark", p.threadmarks);
                var i, tm;
                for ( i in p.threadmarks){
                    tm = p.threadmarks[i];
                    $.I("Comment #"+tm.comment_id+ " has been "+(tm.active ? "":"un")+"marked as 'Reply Requested'.");
                }
                });
            break;
            
            case "star": 
            case "nostar": 
            $.concierge.get_component("mark_thread")({id_location: self._location, type: self._STAR, comment_id: id_item}, function(p){                
                self._model.add("threadmark", p.threadmarks);
                var i, tm;
                for ( i in p.threadmarks){
                    tm = p.threadmarks[i];
                    $.I("Comment #"+tm.comment_id+ " has been "+(tm.active ? "":"un")+"marked as favorite.");
                }
                });
            break;
            case "thanks": 
            $.L("TODO: " + action);
            break;
            case "delete":
            if (confirm("Are you sure you want to delete this note ?")){
                $.concierge.get_component("note_deleter")({id_comment: id_item}, f_on_delete);
            }
            break;
            }
        };
        var f_reply = function(event){
            var id_item = $(event.target).closest("div.note-lens").attr("id_item");
            $.concierge.trigger({type: "reply_thread", value: id_item});
        };
        var f_comment_label = function(event){
            var t = $(event.target), 
            comment_id = parseInt(t.closest("div.commentlabel_container").attr("id_item"), 10), grade, category_id;
            if (t.hasClass("cat_elt")){
                if (t.hasClass("tag")){
                    grade = t.hasClass("selected") ? 0 : 1; //toggle 
                    category_id = parseInt(t.attr("id_item"), 10);
                }
                else{
                    grade = parseInt(t.attr("val"), 10);
                    category_id = parseInt(t.parent().attr("id_item"), 10);
                }
                $.concierge.get_component("set_comment_label")({grade: grade, category_id:category_id, comment_id:comment_id}, function(P){ 
                        var m    = self._model;                   
                        m.add("commentlabel", P.commentlabels);
                    });
            }
        };
        $("div.note-lens", $pane).contextMenu({menu: "contextmenu_threadview"}, f_context);
        $("a.replymenu", $pane).click(f_reply);
        $("div.commentlabel_container", $pane).click(f_comment_label);
        $("a.optionmenu", $pane).contextMenu({menu: "contextmenu_threadview", leftButton: true}, f_context);
        $("#contextmenu_threadview").bind("beforeShow", function(event, el){
            var id_item = el.closest("div.note-lens").attr("id_item");
            var m    = self._model;                   
            var c = m.o.comment[id_item];
            $("li", this).show();

            //edit and delete: 
            if ((c.id_author !== self._me.id) || (!(m.get("comment", {id_parent: id_item}).is_empty()))){
                $("li.context.edit, li.context.delete", this).hide();
            }        
            //star and question: 
            var tms_location = m.get("threadmark", {location_id: c.ID_location, user_id: self._me.id, active: true, type: self._QUESTION });    
            var tms_comment = tms_location.intersect(c.ID, "comment_id");
            //is this one of my active questions: if so, hide context.question
            var to_hide = [];
            to_hide.push(tms_comment.is_empty() ?  "li.context.noquestion": "li.context.question");
            to_hide.push(m.get("threadmark", {comment_id: c.ID, user_id: self._me.id, active: true, type:self._STAR }).is_empty() ?"li.context.nostar": "li.context.star" );
            // can't thank a comment for which I'm the author or where I haven't any replyrequested or which was authored before the comment I marked as "reply requested".
            if ( tms_location.is_empty() || c.id_author === self._me.id || tms_comment.is_empty() || tms_comment.first().comment_id>=c.ID){
                to_hide.push("li.context.thanks");
            }
            $(to_hide.join(","), this).hide();            
            });
        }, 
        set_model: function(model){
        var self=this;
        self._model =  model;
        self._me = null;
        var id_source = $.concierge.get_state("file");
        self._file =  id_source ; 
        self._QUESTION = $.concierge.get_constant("QUESTION");
        self._STAR = $.concierge.get_constant("STAR");
        model.register($.ui.view.prototype.get_adapter.call(this),  {comment: null, threadmark: null, commentlabel: null});
        },
        _keydown: function(event){ // same as ui.noteview8.js
        //just proxy to other view if any interested. 
        $.concierge.trigger({type: "keydown", value: event});
        return true;
        }, 
        update: function(action, payload, items_fieldname){
        if ((action === "add"|| action === "remove") && (items_fieldname ==="comment" || items_fieldname ==="threadmark" || items_fieldname==="commentlabel") && this._location){
            this._render();
        }
        }
    });
             
    $.widget("ui.threadview",V_OBJ );
    $.ui.threadview.prototype.options = {
    loc_sort_fct: function(o1, o2){return o1.top-o2.top;},
    listens: {
        select_thread: null
    }, 
    commentLabels: false
    };
})(jQuery);

/* editorview Plugin
 * Depends:
 *    ui.core.js
 *     ui.view.js
 *

 Author 
 cf AUTHORS.txt 

 License
 Copyright (c) 2010-2012 Massachusetts Institute of Technology.
 MIT License (cf. MIT-LICENSE.txt or http://www.opensource.org/licenses/mit-license.php)
*/
/*global jQuery:true NB$:true*/
/*global console:false*/

(function($) {
    var $str        = "NB$" in window ? "NB$" : "jQuery";
    var FILETYPES = {TYPE_PDF: 1, TYPE_YOUTUBE: 2, TYPE_HTML5VIDEO: 3, TYPE_HTML5: 4};
    var V_OBJ = $.extend({},$.ui.view.prototype,{
            _create: function() {
                $.ui.view.prototype._create.call(this);
                var self = this;
                var O        = self.options;
                self._allowStaffOnly = O.allowStaffOnly;
                self._allowAnonymous = O.allowAnonymous;
            }, 
            _defaultHandler: function(evt){
                var self        = this;
                var model        = self._model;
                var me            = $.concierge.get_component("get_userinfo")();
                var guest_msg    = "<span>You need to <a href='javascript:"+$str+".concierge.get_component(\"register_user_menu\")()'>register</a>  or  <a href='javascript:"+$str+".concierge.get_component(\"login_user_menu\")()'>login</a> in order to post a reply...</span>";
                var id_item, draft, drafts;
                switch (evt.type){
                case "new_thread":
                    if (me.guest === 1){
                        $.I("<span>You need to <a href='javascript:"+$str+".concierge.get_component(\"register_user_menu\")()'>register</a>  or  <a href='javascript:"+$str+".concierge.get_component(\"login_user_menu\")()'>login</a> in order to write annotations...</span>", true, 10000);
                        return;
                    }

                    // only allow one current editor if draft is not empty
                    if (self.element.children().length){
                        if ($("textarea", self.element).val().length > 0) {
                            $.I("You have an active comment being authored right now. If you want to create a new one, please either save or cancel this draft.");
                            return;
                        } else {
                            $("button[action=discard]", self.element).click(); // HACK: get f_discard to work from our scope.
                        }
                    }

                    //TODO: if existting draft, sync its content w/ its model
                    //now create new draft: 
                    id_item        = (new Date()).getTime();
                    draft        = {};
                    draft[id_item]        = id_item;
                    drafts            = {};
                    drafts[id_item]        = draft;
                    self._doEdit        = false;
                    self._inReplyTo        = 0 ;
                    self._selection        = evt.value.selection;
                    self._html5range    = evt.value.html5range; 
                    self._sel        = null;
                    self._note        = null;
                    model.add("draft", drafts);
                    self._render(id_item, evt.value.suppressFocus);
                    break;
                case "reply_thread": 
                    if (me.guest === 1){
                        $.I("<span>You need to <a href='javascript:"+$str+".concierge.get_component(\"register_user_menu\")()'>register</a>  or  <a href='javascript:"+$str+".concierge.get_component(\"login_user_menu\")()'>login</a> in order to write annotations...</span>", true, 10000);
                        return;
                    }

                    // only allow one current editor if draft is not empty
                    if (self.element.children().length){
                        if ($("textarea", self.element).val().length > 0) {
                            $.I("You have an active comment being authored right now. If you want to create a new one, please either save or cancel this draft.");
                            return;
                        } else {
                            $("button[action=discard]", self.element).click(); // HACK: get f_discard to work from our scope.
                        }
                    }

                    id_item        = (new Date()).getTime();
                    draft        = {};
                    draft[id_item]        = id_item;
                    drafts            = {};
                    drafts[id_item]        = draft;
                    self._doEdit        = false;
                    self._inReplyTo        = evt.value;
                    self._selection        = null;
                    self._sel        = null;
                    self._note        = model.o.comment[evt.value];
                    model.add("draft", drafts);
                    self._render(id_item);    
                    break;
                case "edit_thread": 

                    // only allow one current editor if draft is not empty
                    if (self.element.children().length){
                        if ($("textarea", self.element).val().length > 0) {
                            $.I("You have an active comment being authored right now. If you want to create a new one, please either save or cancel this draft.");
                            return;
                        } else {
                            $("button[action=discard]", self.element).click(); // HACK: get f_discard to work from our scope.
                        }
                    }

                    id_item        = (new Date()).getTime();
                    draft        = {};
                    draft[id_item]        = id_item;
                    drafts            = {};
                    drafts[id_item]        = draft;
                    self._doEdit        = true;
                    self._inReplyTo        = 0 ;
                    self._selection        = null;
                    self._sel        = null;
                    self._note        = model.o.comment[evt.value];
                    model.add("draft", drafts);
                    self._render(id_item);    
                    break;
                case "focus_thread":
                    // We assume the thread is already rendered, we simply focus
                    $("textarea", self.element).focus();
                    break;
                case "discard_if_empty":
                    // only allow one current editor if draft is not empty
                    if (self.element.children().length){
                        if ($("textarea", self.element).val().length === 0) {
                            $("button[action=discard]", self.element).click(); // HACK: get f_discard to work from our scope.
                        }
                    }
                    break;
                }
            },
            _render: function(id_item, suppress_focus){
                var self        = this;
                var model        = self._model;
                self.element.trigger("restore");
                //Various ways to create a selection
                if (self._selection){ //editor connected to a location
                    self._sel = self._selection.clone();
                }
                else if (self._inReplyTo){ //
            
                }
    
                //TODO: maybe other case to see if we should create selection from draft

                //Now construct the editor. 
                var timeout_save_button;
                var timeout_func = function(self) { $("button[action=save]", self.element).removeAttr("disabled"); };

                var f_cleanup = function(){
                    window.clearTimeout(timeout_save_button);
                    self.element.trigger("before_cleanup", true);
                    self.element.trigger("minimize");
                    self.element.empty();
                    model.remove("draft", id_item);
                    if (self._sel){
                        self._sel.remove();
                    }            
                };
                var staffoption    = self._allowStaffOnly ? "<option value='2'>Instructors and TAs</option>" : " ";
                var signoption    = self._allowAnonymous ? "<span id='signoption' title=\"check to keep this comment anonymous to other students\"><input type='checkbox' id='checkbox_sign' value='anonymous'/><label for='checkbox_sign'>Anonymous to students</label></div>": " ";
                var questionoption = self._doEdit ? " " : "<span><input type='checkbox' id='checkbox_question' value='question'/><label for='checkbox_question'>Reply Requested</label></span><br/> ";
                var checkbox_options = questionoption+signoption;
                var header    = self._inReplyTo ? "Re: "+$.E($.ellipsis(self._note.body, 100)) : "New note...";

                var contents = $([
                                  "<div class='editor-header'>",header,"</div><div class='notebox'><div class='notebox-body'><div><a class='ui-view-tab-close ui-corner-all ui-view-semiopaque' role='button' href='#'><span class='ui-icon ui-icon-close'></span></a></div><textarea/><br/></div><div class='editor-footer'><table class='editorcontrols'><tr><td class='group'><label for='share_to'>Shared&nbsp;with:&nbsp;</label><select id='share_to' name='vis_", id_item, "'><option value='3'>The entire class</option>", staffoption, 
                                  "<option value='1'>Myself only</option></select><br/>"+checkbox_options+"</td><td class='save-cancel'><button action='save' >Submit</button><button action='discard' >Cancel</button></td></tr> </table></div></div>"].join(""));
                self.element.append(contents);
                $("a[role='button']", self.element).click(f_cleanup).hover(function(e){$(this).addClass('ui-state-hover').removeClass('ui-view-semiopaque');},function(e){$(this).removeClass('ui-state-hover').addClass('ui-view-semiopaque');} );
                var $textarea = $("textarea", self.element).keypress(function(e){
                        if(e.keyCode === 27 && this.value.length === 0){
                            f_cleanup();
                        }
                    });
                $textarea.css('minHeight', $textarea.height() + self.element.height() - $("div.notebox", self.element).height() - 42);
                var f_sel = function(evt, ui){
                    $.L("sel has moved to", self._sel.width(), "x",  self._sel.height(), "+" ,  self._sel.css("left"), "+", self._sel.css("top"));
                };

                var f_discard = function(evt){
                    f_cleanup();
                };
                var f_on_save = function(payload){
                    model.add("comment", payload["comments"]);
                    model.add("threadmark", payload["threadmarks"]);

                    if ("html5locations" in payload){
                        model.add("html5location", payload["html5locations"]);
                    }

                    //important to add location even when edit or reply since it can change styling (if adding private comment etc...)
                    if ("locations" in payload){
                        model.add("location", payload["locations"]);
                    }
                    else{
                        var id_comment; for (id_comment in payload["comments"]){break;}
                        var id_loc = model.o.comment[id_comment]["ID_location"];
                        if (id_loc in model.o.location){
                            var locs = {};
                            locs[id_loc] = model.o.location[id_loc];
                            model.add("location", locs);
                        }
                    }
                    f_cleanup();
                };
                var f_save = function(evt){
                    $("button[action=save]", self.element).attr("disabled", "disabled");
                    timeout_save_button = window.setTimeout(function() { timeout_func(self); } , 3000);
                    var msg = {
                        type: $("select[name=vis_"+id_item+"]", self.element).val(),
                        body:  $("textarea", self.element)[0].value,            
                        signed: self._allowAnonymous ? $("input[value=anonymous]:not(:checked)", self.element).length : 1,
                        marks: {}
                    };
                    
                    
                    if ($("input[value=question]:checked", self.element).length){
                        msg.marks.question = true;
                    }
                    var component_name;
                    if (!(self._note)){ //new note, local or global
                        var file = model.o.file[self._file], s_inv, fudge, drawingarea, s_inv_w, s_inv_h;
                        msg.id_ensemble =file.ID_ensemble;
                        msg.id_source=self._file;
                        switch (file.filetype){
                        case FILETYPES.TYPE_PDF: 
                            s_inv =        100*$.concierge.get_constant("RESOLUTION_COORDINATES") / ($.concierge.get_constant("res")*$.concierge.get_state("scale")+0.0);
                            fudge = (file.rotation === 90 || file.rotation === 270 ? file.h : file.w)/612.0;
                            s_inv = s_inv/fudge;
                            msg.top = self._sel ? s_inv*parseInt(self._sel.css("top"), 10):0;
                            msg.left= self._sel ? s_inv*parseInt(self._sel.css("left"), 10):0;
                            msg.w =  self._sel ? s_inv*self._sel.width():0;
                            msg.h =  self._sel ? s_inv*self._sel.height():0;
                            msg.x0= 0;
                            msg.y0= 0;
                            msg.page= self._sel ? self._sel.parent().attr("page"):0;
                            break;
                        case FILETYPES.TYPE_HTML5: 
                            msg.top = self._html5range.apparent_height;
                            msg.left= 0;
                            msg.w = 0;
                            msg.h = 0;
                            msg.x0= 0;
                            msg.y0= 0;
                            msg.page= 1;
                            delete self._html5range.apparent_height;
                            msg.html5range = self._html5range;
                            break;
                        case FILETYPES.TYPE_HTML5VIDEO:
                            throw "editorview: HTML5VIDEO not implemented";
                        case FILETYPES.TYPE_YOUTUBE:
                            drawingarea = self._sel.parent();
                            s_inv_w = 1000.0/drawingarea.width();
                            s_inv_h = 1000.0/drawingarea.height();
                            msg.top = self._sel ? s_inv_h*parseInt(self._sel.css("top"), 10):0;
                            msg.left= self._sel ? s_inv_w*parseInt(self._sel.css("left"), 10):0;
                            msg.w =  self._sel ? s_inv_w*self._sel.width():0;
                            msg.h =  self._sel ? s_inv_h*self._sel.height():0;
                            msg.x0= 0;
                            msg.y0= 0;
                            msg.page= self._sel ? drawingarea.attr("page"):0;
                            break;
                        }
                        component_name =  "note_creator";
                    }
                    else{ //reply or edit
                        msg.id_location = self._note.ID_location;
                        msg.id_ensemble = model.o.location[msg.id_location].id_ensemble;
                        if  (self._doEdit){
                            msg.id_comment = self._note.ID;
                            component_name =  "note_editor";
                        }
                        else{
                            msg.id_parent = self._note.ID;
                            component_name =  "note_creator";
                        }
                    }
                    $.concierge.get_component(component_name)(msg, f_on_save);
                    $.concierge.trigger({type: "editor_saving", value: 0});
                };
                $("button[action=save]",self.element).click(f_save);
                $("button[action=discard]",self.element).click(f_discard);
                if (self._sel){
                    var p = self._selection.parent();
                    self._sel.addClass("ui-drawable-selection").removeClass("ui-drawable-helper").appendTo(p).draggable({drag: f_sel, containment: 'parent' });
                    //animate transition so user understands that the editor is connected to the selection
                    self._sel.effect("transfer",{to: self.element} , 500);
                }        
                self.element.addClass("editor");

                //if editing: fill in w/ exising values. 
                if (self._doEdit){
                    $("textarea", self.element)[0].value = self._note.body;
                    $("input[name=vis_"+id_item+"]:checked", self.element).removeAttr("checked");
                    $("input[name=vis_"+id_item+"][value="+self._note.type+"]", self.element).attr("checked", "checked");
                    if (self._note.signed){
                        $("input[value=anonymous]", self.element).removeAttr("checked");
                    }
                    else{
                        $("input[value=anonymous]", self.element).attr("checked", "checked");
                    }
                }

                if (suppress_focus !== true || typeof suppress_focus === 'undefined') {
                    $("textarea", self.element).focus();
                }
            },
            set_model: function(model){
                var self=this;
                self._model =  model;
                var id_source = $.concierge.get_state("file");
                self._file =  id_source ; 
                // add this to be notified of model events: 
                //model.register($.ui.view.prototype.get_adapter.call(this),  {YOUR_EVENT1: null});
            },
            update: function(action, payload, items_fieldname){
            }
        });
             
    $.widget("ui.editorview",V_OBJ );
    $.ui.editorview.prototype.options = {
        listens: {
            new_thread: null, 
            reply_thread: null, 
            edit_thread: null,
            focus_thread: null,
            discard_if_empty: null
        },
        id_source: null, 
        note: null, 
        doEdit: false, 
        selection: null, 
        model: null, 
        allowAnonymous: false, 
        allowStaffOnly: false
    };
})(jQuery);

/**
 * NB.js: Main module file
 *
Author 
    cf AUTHORS.txt 

License
    Copyright (c) 2010-2012 Massachusetts Institute of Technology.
    MIT License (cf. MIT-LICENSE.txt or http://www.opensource.org/licenses/mit-license.php)

 */
var NB;

if (NB && (typeof NB !== "object")){
    alert("Error: NB already exists and isn't an object!");
}

NB = {};

NB.log = function(){
    if (window.console){
	console.log(arguments);
    }
};

NB.warn = function(){
    if (window.console){
	console.warn(arguments);
    }
};

NB.error = function(){
    if (window.console){
	console.error(arguments);
    }
};

NB.len = function(o){
    var i = 0;
    for (i in o){
	i++;
    }
    return i;
};




/**
 * auth.js: Convenience fcts for AUTH manipulation
 * see: http://www.elated.com/articles/javascript-and-cookies
 Author 
 cf AUTHORS.txt 

 License
 Copyright (c) 2010-2012 Massachusetts Institute of Technology.
 MIT License (cf. MIT-LICENSE.txt or http://www.opensource.org/licenses/mit-license.php)

*/

(function(GLOB){
    GLOB.auth = {};
    GLOB.auth.set_cookie = function( name, value, expires_year, expires_month, expires_day, path, domain, secure ){
	var cookie_string = name + "=" + escape ( value );
    
	if ( expires_year )  {
	    var expires = new Date ( expires_year, expires_month, expires_day );
	    cookie_string += "; expires=" + expires.toGMTString();
	}

	if ( path ){
	    cookie_string += "; path=" + escape ( path );
	}

	if ( domain ){
	    cookie_string += "; domain=" + escape ( domain );
	}
	if ( secure ){
	    cookie_string += "; secure";
	}
	document.cookie = cookie_string;
    };

    GLOB.auth.delete_cookie =function( cookie_name ){
	document.cookie = cookie_name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"; 
    };

    GLOB.auth.get_cookie = function ( cookie_name ){
	var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
	if ( results ){
	    return ( unescape ( results[2] ) );
	}
	else{
	    return null;
	}
    };
})(NB);
/**
 * dom.js: Convenience fcts for DOM manipulation
 Author 
 cf AUTHORS.txt 

 License
 Copyright (c) 2010-2012 Massachusetts Institute of Technology.
 MIT License (cf. MIT-LICENSE.txt or http://www.opensource.org/licenses/mit-license.php)

*/

(function(GLOB){
    if ("NB$" in window){
	var $ = NB$;
    };
    GLOB.dom = {};
    GLOB.dom.elementItem = function(node, n){ //0-based    
	var i=0;
	var child = node.firstChild;
	while(true){
	    while (child.nodeType != 1){
		child = child.nextSibling;
	    }
	    if (i==n){
		return child;
	    }
	    else{
		i++;
		child = child.nextSibling;
	    }
	}
    };



    GLOB.dom.firstElement = function(node){
	var child = node.firstChild;
	while (child.nodeType != 1){
	    child = child.nextSibling;
	}
	return child;
    };

    GLOB.dom.previousElement = function(node){
	var n = node.previousSibling;
	while(n){
	    if (n.nodeType == 1){
		return n;
	    }
	    else{
		n = n.previousSibling;
	    }
	}
	return null;
    };


    GLOB.dom.nextElement = function(node){
	var n = node.nextSibling;
	while(n){
	    if (n.nodeType == 1){
		return n;
	    }
	    else{
		n = n.nextSibling;
	    }
	}
	return null;
    };

    GLOB.dom.elementPosition = function(node){ 
	/**
	 * returns the 0-based element-position of 'node',
	 * i.e. the number of DOM **elements** that are before 'node'
	 *
	 **/
	var i = 0;
	var n = GLOB.dom.previousElement(node);
	while(n){
	    i++;
	    n= GLOB.dom.previousElement(n);
	}
	return i;
    };


    GLOB.dom.getAncestorByHasAttribute = function(elt, name){
	var parent = elt.parentNode; 	
	while(parent && (!(parent.hasAttribute(name)))){	
	    parent = parent.parentNode;
	}
	return parent;
    };

    GLOB.dom.getParams = function(){
	var s = document.location.search;
	var params = {};
	if (s != ""){	
	    s = s.substring(1);
	    var a = s.split("&");	
	    for (var i in a){
		var pos = a[i].search("=");
		var len = a[i].length;
		if (pos != -1){
		    params[a[i].substring(0,pos)] = a[i].substring(pos+1, len);
		}
	    }
	}
	return params;
    };


    GLOB.dom.__sections = {
	do_toc: false, 
	toc_id: "toc", 
	do_b2t: false
    }; //parameters. 
    GLOB.dom.addSection = function(){
	/*
	 * inspired from sections.js in stats2
	 * just need to initialize it with
	 *     $("div.section").each(GLOB.dom.addSection);
	 */
	var title = this.getAttribute("label");
	if (GLOB.dom.__sections.do_toc){
	    $("#"+GLOB.dom.__sections.toc_id).append("<a href='#"+this.id+"'>"+title+"</a>");
	}
	$(this).children().wrapAll("<div class='section-body'></div>");
	var b2t = (GLOB.dom.__sections.do_b2t) ? "<a class=\"navlink\"  href=\"#"+GLOB.dom.__sections.toc_id+"\">back to top </a>" : "";
	$(this).prepend("<div class='section-header'>"+b2t+title+"</div>");
    };
})(NB);
/**
 * mvc.js: Generic definitions for models and views
 *		NB
 Author 
 cf AUTHORS.txt 

 License
 Copyright (c) 2010-2012 Massachusetts Institute of Technology.
 MIT License (cf. MIT-LICENSE.txt or http://www.opensource.org/licenses/mit-license.php)

*/

(function(GLOB){
    GLOB.mvc = {};

    GLOB.mvc.model = function(){
	this.observers = []; 
	this.logger = null;
    };
    GLOB.mvc.model.prototype.register = function(obs, propList){
	this.observers.push({o:obs, p:propList||{}});
	//by default, relay the logger if the model has one and the view doesn't
	if ((obs.logger === null )  && (this.logger !== null)){
	    obs.setLogger(this.logger);
	}
	if (propList){
	    //transmit current state to observer, if we know what to transmit
	    obs.update("create", {model: this}, propList);
	}
    };
    GLOB.mvc.model.prototype.unregister = function(obs){
	var i;
	for (i in this.observers){
	    if (this.observers[i] == obs){
		delete this.observers[i];
		return;
	    }
	}
    };

    GLOB.mvc.model.prototype.setLogger = function(logger){
	this.logger = logger;
    };

    GLOB.mvc.model.prototype.info = function(msg){
	if (this.logger !== null){
	    this.logger.info(msg);
	}
    };


    GLOB.mvc.model.prototype.warning = function(msg){
	if (this.logger !== null){
	    this.logger.warning(msg);
	}
    };

    GLOB.mvc.model.prototype.error = function(msg){
	if (this.logger !== null){
	    this.logger.error(msg);
	}
    };

    //GLOB.mvc.model.prototype.modify = function(){alert("[GLOB.mvc.model.prototype.modify] I'm virtual");};

    GLOB.mvc.view = function(){
	this.id = (new Date()).getTime(); //this will generate a default id for the view
	this.logger = null;
    };

    GLOB.mvc.view.prototype.setLogger = function(logger){
	this.logger = logger;
    };

    GLOB.mvc.view.prototype.info = function(msg){
	if (this.logger !== null){
	    this.logger.info(msg);
	}
    };


    GLOB.mvc.view.prototype.warning = function(msg){
	if (this.logger !== null){
	    this.logger.warning(msg);
	}
    };

    GLOB.mvc.view.prototype.error = function(msg){
	if (this.logger !== null){
	    this.logger.error(msg);
	}
    };

    //GLOB.mvc.view.prototype.update = function(){alert("[GLOB.mvc.view.prototype.update] I'm virtual");};

    /** 
     * COLLECTION: Collection of objects that have an unique "id" field
     * note: the current implemetation can return undefinied items if they have been deleted
     */
    GLOB.mvc.collection = function(type){
	this.superclass();
	this.items = {};//indexed by item.id
	this.type = type; //sometimes useful to specify a collection of what...
    }; 
    GLOB.mvc.collection.prototype = new GLOB.mvc.model();
    GLOB.mvc.collection.prototype.constructor = GLOB.mvc.collection;
    GLOB.mvc.collection.prototype.superclass = GLOB.mvc.model;
    GLOB.mvc.collection.prototype.modify = function(action, payload, items_fieldname){
	var i;
	var items = payload[items_fieldname];
	if (action == "create"){	
	    for (i=0;i<items.length;i++){
		this.items[items[i].id] = items[i];
	    }
	}
	else if (action == "add" || action == "update"){
	    for (i=0;i<items.length;i++){
		this.items[items[i].id] = items[i];
	    }
	}
	else if (action == "delete"){
	    for (i=0;i<items.length;i++){
		delete this.items[items[i].id];
	    }
	}
	else{
	    alert("[GLOB.mvc.collection.modify] unknown action: " + action);
	    return;
	}
	for (i in this.observers){
	    this.observers[i].o.update(action, {"model": this, "diff": payload}, items_fieldname);
	}
    };

    GLOB.mvc.collection.prototype.getItems = function(){
	return this.items;
    };

    GLOB.mvc.collection.prototype.get = function(id){
	return this.items[id];
    };

})(NB);


/**
 * models.js: Useful models for documents, annotations etc...
 * This module defines the namespace NB.models
 * It requires the following modules:
 *        Module
 *        NB
 *        NB.mvc
 Author 
 cf AUTHORS.txt 

 License
 Copyright (c) 2010-2012 Massachusetts Institute of Technology.
 MIT License (cf. MIT-LICENSE.txt or http://www.opensource.org/licenses/mit-license.php)
*/
/*global console:true NB:true */
(function(GLOB){
    //require: mvc;
    GLOB.models = {};

    /*
     * Collections of Tables relevant to document management
     */
    GLOB.models.Store = function(){
    this.superclass();
    this.o = {}; //objects
    this.indexes = {}; //existing indexes
    this.rangeindex_info = {}; // index name -> {fieldname, width}
    this.schema =null;
    }; 
    GLOB.models.Store.prototype = new GLOB.mvc.model();
    GLOB.models.Store.prototype.constructor = GLOB.models.Store;
    GLOB.models.Store.prototype.superclass = GLOB.mvc.model;
    GLOB.models.Store.prototype.create = function(payload, schema){
    /*
     * schema: null (default behavior) or dictionary {String type_name: Object tabledef}
     * where: 
     *  - type_name is the name of the table to be created in Store
     *  - tabledef is either null (default behavior) or a dictionary that can contain the following (all optional): 
     *        - pFieldName    name of the correponding field in payload
     *        - obj_type    contructor function to apply 
     *                if not specified, the created object will just be a javascript Object, lazily copied from payload
     *        - references    dictionary: {String fieldname: String target_tablename}
     * the code can add the __ref field to schema, in order to keep track of indexes that aren't references to other tables. 
     */
    var self=this;
    var tabledef, pFieldName, obs;
    if (schema === undefined){
        schema = {};
        //make up a default schema: just use all the fields from payload
        for (var k in payload){
        schema[k] = null;
        }
    }
    this.schema = schema;
    for (var type_name in schema){
        if  (type_name.substring(0,2) === "__"){
        throw new Error("table names can't start w/ '__' , tablename="+type_name); 
        }
        tabledef = schema[type_name];    
        if (tabledef===null){
        tabledef = {pFieldName: type_name};
        }
        pFieldName = tabledef.pFieldName;
        if (pFieldName in payload){
        /*
         * this can cover scenarios like: 
         * this.ensembles = payload.channels
         * OR
         * this.Ensembles = {123: new Ensemble(payload.channels[123], ...}
         */
        if ("obj_type" in tabledef){//need to apply constructor
            for (var id in payload[pFieldName]){
            this.o[type_name][id] = new tabledef.obj_type(payload[pFieldName][id]);
            }
        }
        else{//just lazy copy
            this.o[type_name] =  payload[pFieldName];
        }
        
        }
        else{ //just create an empty table
        if (!(type_name in this.o)){
            this.o[type_name]={};
        }
        }
        for (var i in this.observers){
        obs = self.observers[i];
        if (type_name in obs.p){
            obs.o.update("create", {model: self, diff: this.o[type_name]}, type_name);
        }
        }
    }
    };


    GLOB.models.Store.prototype.__get_indexes = function(type_name){
    //PRE: Schema already defined. 
    var self = this, 
    indexes = {}, 
    rangeindexes = {}, 
    tabledef = self.schema[type_name], 
    ref,refs, i;
    if ("references" in tabledef){
        for (i in tabledef.references){
        ref =  tabledef.references[i];
        if (ref in self.indexes && type_name in self.indexes[ref]){
            indexes[i] =  self.indexes[ref][type_name];
        }
        }
    }
    if ("__ref" in tabledef){
        var r=/__in(\d*)$/;
        for (i in tabledef.__ref){
            refs =  tabledef.__ref[i];
            for (ref in refs){
                if (ref in self.indexes && type_name in self.indexes[ref]){
                    if (r.exec(ref)==null){
                        indexes[i]=  self.indexes[ref][type_name];
                    }
                    else{
                        rangeindexes[i] = {index: self.indexes[ref][type_name], info: self.rangeindex_info[ref]};
                    }
                }
            }
        } 
    }
    return [indexes, rangeindexes];
    };

    GLOB.models.Store.prototype.set = function(type_name, objs){
    //PRE: Schema already defined. 
    var self=this;
    if (type_name in self.schema){
        self.__dropIndexes(type_name);
        self.o[type_name] = {};
        self.add(type_name, objs);
    }
    else{
        console.log(type_name, " not found in schema: ", self.schema);
    }

    };



    GLOB.models.Store.prototype.add = function(type_name, objs){
    //PRE: Schema already defined. 
    var self=this;
    var is_update;
    if (type_name in self.schema){
        var all_indexes = self.__get_indexes(type_name);
        var regular_indexes = all_indexes[0];
        var range_indexes = all_indexes[1];
        var index,index_info, v_new, v_old, newbin, oldbin, pk, fk, fieldname;        
        for (pk in objs){
        is_update = pk in this.o[type_name];    
        //now, update existing indexes if any
        if (is_update){

            for (fieldname in  regular_indexes){
            index = regular_indexes[fieldname];            
            v_new = objs[pk][fieldname];
            v_old = this.o[type_name][pk][fieldname];
            //if the foreign key has changed, propagate the change: 
            if (v_new !== v_old){
                //regular index
                delete(index[v_old][pk]);
                if  (!(v_new in index)){
                index[v_new] = {};
                }
                index[v_new][pk]=null;
            }
            }
            for (fieldname in  range_indexes){
            index = range_indexes[fieldname].index;            
            index_info = range_indexes[fieldname].info;
            v_new = objs[pk][fieldname];
            v_old = this.o[type_name][pk][fieldname];
            //if the foreign key has changed, propagate the change: 
            if (v_new !== v_old){
                //will the new val end up affecting the bin ? 
                newbin = Math.floor(v_new/index_info.width);
                if ((!(newbin in index))||(!(pk in index[newbin]))){
                oldbin = Math.floor(v_old/index_info.width);
                delete index[oldbin][pk];
                if (!(newbin in index)){
                    index[newbin]={};
                }
                index[newbin][pk]=v_new;
                }
                else{ //still, update value;
                index[oldbin][pk]=v_new;
                }
            }
            }
        }
        else{
            for (fieldname in  regular_indexes){
            index = regular_indexes[fieldname];            
            fk = objs[pk][fieldname];
            if (!(fk in index)){
                index[fk]={};
            }
            index[fk][pk] = null;
            }
            for (fieldname in  range_indexes){
            index = range_indexes[fieldname].index;            
            index_info = range_indexes[fieldname].info;
            fk = objs[pk][fieldname];
            newbin = Math.floor(fk/index_info.width);
            if (!(newbin in index)){
                index[newbin]={};
            }
            index[newbin][pk]=fk;
            }
        }
        this.o[type_name][pk]=objs[pk];
        }
        var obs;
        for (var i in this.observers){
        obs = self.observers[i];
        if (type_name in obs.p){
            obs.o.update("add", {diff: objs}, type_name);
        }
        }
    }
    else{
        console.error(type_name, " not found in schema: ", self.schema);
    }
    };


    GLOB.models.Store.prototype.remove = function(type_name, pkeys){
    /* 
       pkeys can either be 
       - in integer (i.e. the primary key of a single object to remove)
       - dictionary of integer keys (values are disregarded): in this case, we only issue 1 notification to the observers (for performance), once all the objects have been removed. 
    */
    var self = this;
    var ids = {};
    if (typeof(pkeys) === "object"){
        ids = pkeys;
    }
    else{
        ids[pkeys] = null;
    }
    var id = null;
    var objs_deleted = {}, index, val, index_info;
    var bin; //for range index
    for (id in ids){
        if ((type_name in this.o) && (id in this.o[type_name])){
        objs_deleted[id]=this.o[type_name][id];
        var all_indexes = self.__get_indexes(type_name);
        var regular_indexes = all_indexes[0];
        var range_indexes = all_indexes[1];
        for (var fieldname in regular_indexes){
            index = regular_indexes[fieldname];            
            val = this.o[type_name][id][fieldname];
            delete(index[val][id]);
        }
        for (fieldname in range_indexes){
            index = range_indexes[fieldname].index;            
            index_info = range_indexes[fieldname].info;
            val = this.o[type_name][id][fieldname];
            bin =  Math.floor(val/index_info.width);
            delete(index[bin][id]);
        }
        delete(this.o[type_name][id]);
        }
        var did_delete = false;
        for (var i in objs_deleted){
        did_delete = true;
        break;
        }
        if (did_delete){
        var obs;
        for (i in this.observers){
            obs = self.observers[i];
            if (type_name in obs.p){
            obs.o.update("remove", {diff: objs_deleted}, type_name);
            }
        }
        }
    }
    };

    GLOB.models.Store.prototype.__dropIndexes = function(type_name){
        var self = this;
        var tabledef = self.schema[type_name];
        var ref, i, j, refs;
        if ("references" in tabledef){
            for (i in tabledef.references){
                ref =  tabledef.references[i];
                if (ref in self.indexes && type_name in self.indexes[ref]){
                    delete self.indexes[ref][type_name];
                }
            }
        }
        if ("__ref" in tabledef){
            for (i in tabledef.__ref){
                refs =  tabledef.__ref[i];
                for (ref in refs){
                    if (ref in self.indexes && type_name in self.indexes[ref]){
                        delete self.indexes[ref][type_name];
                    }
                }
            } 
        }
    };


    /**
     * Constructs an index 
     * ex: table:"location", o:"comment", fieldname:"id_location", which assumes that 
     * this.schema.comment.references.id_location = "location";
     *
     * or for just building a lookup table on a field that's not a foreign key: 
     * table should be of the form "__"+fieldname: 
     * table: __page, o: "comment", fieldname: "page"
     *
     * note: to perform a range search, use a rangeIndex constructed with _addRangeIndex
     */
    GLOB.models.Store.prototype.__addIndex = function(table, o, fieldname){
    var self = this;
    // '__..." is a reserved family of tablenames so we can add indexes on fields that aren't references. 
    
    if (table.substring(0,2) !== "__" && ((!(table in self.o))||(!(o in self.o)))){
        throw new Error("missing table, args="+table+", "+o ); 
    }
    
    if (table.substring(0,2) === "__"){
        if (!("__ref" in self.schema[o])){
            self.schema[o].__ref = {};
        }    
        if (!(self.schema[o].__ref[fieldname])){
            self.schema[o].__ref[fieldname] = {};
        } 
        self.schema[o].__ref[fieldname][table] = null;
    }
    
    if (!(table in self.indexes)){
        self.indexes[table]={};
    }
    if (!(o in self.indexes[table])){
        self.indexes[table][o]={};
    }
    var objects =  self.o[o];
    for (var i in objects){
        var key = objects[i][fieldname];
        if (!(key in self.indexes[table][o])){
        self.indexes[table][o][key] = {};
        }
        self.indexes[table][o][key][i]=null;
    }
    };

    /**
     * Same as add index except that this one is used to perform lookups with a range of keys
     *
     */
    GLOB.models.Store.prototype.__addRangeIndex = function(table, o, fieldname, width){  
    var self = this;

    if (!("__ref" in self.schema[o])){
        self.schema[o].__ref = {};
    }    
    if (!(self.schema[o].__ref[fieldname])){
        self.schema[o].__ref[fieldname] = {};
    }
     self.schema[o].__ref[fieldname][table] = null;
    
    if (!(table in self.indexes)){
        self.indexes[table]={};
    }
    if (!(o in self.indexes[table])){
        self.indexes[table][o]={};
    }
    var key, i, bin;
    var objects =  self.o[o];
    for (i in objects){
        key = objects[i][fieldname];
        bin = Math.floor(key/width);
        if (!(bin in self.indexes[table][o])){
        self.indexes[table][o][bin] = {};
        }
        self.indexes[table][o][bin][i]=key;
    }
    self.rangeindex_info[table] = {fieldname: fieldname, width: width};
    };
    GLOB.models.QuerySet = function(model, type){
    this.model = model;
    this.type = type;
    this.__length = null;
    this.items = {};
    };



    GLOB.models.QuerySet.prototype.is_empty = function(){
    var items = this.items;
    for (var i in items){
        return false;
    }
    return true;
    };

    GLOB.models.QuerySet.prototype.length = function(){
    if (this.__length !== null){ //speedup if gets called multiple times
        return this.__length;
    }
    var l=0; 
    var items = this.items;
    for (var i in items){
        l++;
    }
    this.__length = l;
    return l;
    };

    GLOB.models.QuerySet.prototype.sort = function(sortfct){
    //returns an array of sorted objects. 
    var output = [];
    var items = this.items;
    for (var i in items){
        output.push(items[i]);
    }
    output.sort(sortfct);
    return output;
    };

    GLOB.models.QuerySet.prototype.min = function(attr){
    // returns pk of record which has the min value for attr
    var x = Number.POSITIVE_INFINITY;
    var items = this.items;
    var output = null;
    for (var i in items){
        if (items[i][attr]<x){
        x = items[i][attr];
        output = i;
        }
    }
    return output;
    };


    GLOB.models.QuerySet.prototype.max = function(attr){
    // returns pk of record which has the max value for attr
    var x = Number.NEGATIVE_INFINITY;
    var output = null;
    var items = this.items;
    for (var i in items){
        if (items[i][attr]>x){
        x = items[i][attr];
        output = i;
        }
    }
    return output;
    };


    GLOB.models.QuerySet.prototype.first = function(){
    /*caution: this doesn't imply any order: it just picks the 1st record it finds*/
    var output = null;
    var items = this.items;
    for (var i in items){
        return items[i];
    }
    return null;
    };

    GLOB.models.QuerySet.prototype.values = function(fieldname){
    var output = {};
    var items = this.items;
    for (var i in items){
        output[items[i][fieldname]] = null;
    } 
    return output;
    };

    GLOB.models.QuerySet.prototype.intersect = function(ids, field){
    /**
     *  ids: a dictionary (only keys matter, not values), or just a single value
     */    
    var model = this.model, 
    output = new GLOB.models.QuerySet(this.model, this.type), 
    items = this.items, 
    new_items = output.items, 
    i;
    
    if (!(ids instanceof Object)){
        var new_ids = {};
        new_ids[ids] = null;
        ids = new_ids;
    }
    if (field !== undefined){ 
        for (i in items){
        if (items[i][field] in ids){
            new_items[i] =items[i];
        }
        }
    }
    else{
        for (i in items){
        if (i in ids){
            new_items[i] =items[i];
        }
        } 
    }
    return output;
    };

    GLOB.models.QuerySet.prototype.exclude = function(where){
    /** Exclude records from a QuerySet
     * - This method alters the QuerySet 
     * - The where clauses are ANDed. For instance o.exclude({page:20, author_id:1} will 
     *     ONLY remove the records for which (page=20 AND author_id=1). To remove all the 
     *     records for which page=2 and the ones for which id_author=1, use the following: 
     *     o.exclude({page:20}).exclude({id_author: 1};
     * - Arguments: 
     *        - where: a key, value mapping, where key is the name of a field 
     *          and value is the value to exclude. 
     */
    var model = this.model;
    var i=null;
    var ref; 
    var references = model.schema[this.type].references || {};
    var from = this.type;
    var o = {};
    var o_old = null;
    for (i in where){
        ref = i in references ?  references[i] : "__"+i;
        if ( (!(ref in model.indexes)) || (!(from in model.indexes[ref])) ){
        model.__addIndex(ref, from, i);
        }
        o = model.indexes[ref][from][where[i]] || {};
        o = GLOB.models.__intersect(o_old, o);
        o_old = o;
    }
    if (i==null){ //there was no where clause: return all objects
        o = this.o[from];
    }
    //Now remove objects that have an id in o: 
    var items = this.items;   
    var n_removed = 0;
    for (i in o){
        delete items[i];
        n_removed++;
    }
    if (this.__length !== null){ //update length if already computed
        this.__length-=n_removed;
    }
    return this;
    };

    GLOB.models.__intersect = function(o1, o2){
    if (o1==null){ return o2 || {};}
    if (o2==null){   return o1 || {};}
    var o = {};
    for (var i in o1){
        if (i in o2){o[i] = null;}
    }
    return o;
    };
    
    GLOB.models.Store.prototype.get = function(from, where){
    var self = this;
    var o_old = null;
    var o = {};
    var output = new GLOB.models.QuerySet(self, from);
    var f = this;
    var ref; 
    var references = self.schema[from].references || {};
    var i=null;
    var r = /(.*)__in$/; //for range querying
    var matches, v, width, bin, idx;
    for (i in where){
        matches = r.exec(i);
        if (matches !== null){ //range query
        v = (where[i][0] + where[i][1])>>1; //half-point. 
        width = where[i][1] - where[i][0];
        ref = "__"+i+width;
        if (!(ref in self.indexes)){
            self.__addRangeIndex(ref, from ,matches[1], width );
        }
        o = {};
        var bins = [Math.floor(where[i][0]/width), Math.floor(where[i][1]/width)];
        for (var b = 0;b<bins.length;b++){
            bin = bins[b];
            idx = self.indexes[ref][from][bin];
            for (var oid in idx){
            if (idx[oid] >= where[i][0] && idx[oid] <= where[i][1]){
                o[oid] = null;
            }
            }
        }
        
        }
        else{
        v = where[i];
        ref = i in references ?  references[i] : "__"+i;
        if ( (!(ref in self.indexes)) || (!(from in self.indexes[ref])) ){
            self.__addIndex(ref, from, i);
        }
        o =  self.indexes[ref][from][v] || {};
        }
        o = GLOB.models.__intersect(o_old, o);
        o_old = o;
    }
    if (i==null){ //there was no where clause: return all objects
        o = self.o[from];
    }

    //we now have a list of IDs in o. Just need to attach the objects: 
    var items = output.items;
    for (i in o){
        items[i] = self.o[from][i];
    }
    return output;
    };
})(NB);
/**
 * Rangy, a cross-browser JavaScript range and selection library
 * http://code.google.com/p/rangy/
 *
 * Copyright 2013, Tim Down
 * Licensed under the MIT license.
 * Version: 1.3alpha.751
 * Build date: 25 January 2013
 */
var rangy;rangy=rangy||function(){function h(c,d){var e=typeof c[d];return e==b||e==a&&!!c[d]||e=="unknown"}function i(b,c){return typeof b[c]==a&&!!b[c]}function j(a,b){return typeof a[b]!=c}function k(a){return function(b,c){var d=c.length;while(d--)if(!a(b,c[d]))return!1;return!0}}function o(a){return a&&l(a,g)&&n(a,f)}function r(a,b){b?window.alert(a):typeof window.console!=c&&typeof window.console.log!=c&&window.console.log(a)}function s(a){q.initialized=!0,q.supported=!1,r("Rangy is not supported on this page in your browser. Reason: "+a,q.config.alertOnFail)}function t(a){r("Rangy warning: "+a,q.config.alertOnWarn)}function w(a){i(window,"console")&&h(window.console,"log")&&window.console.log(a)}function x(a){return a.message||a.description||String(a)}function y(){if(q.initialized)return;var a,b=!1,c=!1;h(document,"createRange")&&(a=document.createRange(),l(a,e)&&n(a,d)&&(b=!0),a.detach());var f=i(document,"body")?document.body:document.getElementsByTagName("body")[0];if(!f||f.nodeName.toLowerCase()!="body"){s("No body element found");return}f&&h(f,"createTextRange")&&(a=f.createTextRange(),o(a)&&(c=!0));if(!b&&!c){s("Neither Range nor TextRange are available");return}q.initialized=!0,q.features={implementsDomRange:b,implementsTextRange:c};var g,j;for(var k in p)(g=p[k])instanceof B&&g.init();for(var m=0,r=v.length;m<r;++m)try{v[m](q)}catch(t){j="Rangy init listener threw an exception. Continuing. Detail: "+x(t),w(j)}}function A(a){a=a||window,y();for(var b=0,c=z.length;b<c;++b)z[b](a)}function B(a,b){this.name=a,this.initialized=!1,this.supported=!1,this.init=b}var a="object",b="function",c="undefined",d=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],e=["setStart","setStartBefore","setStartAfter","setEnd","setEndBefore","setEndAfter","collapse","selectNode","selectNodeContents","compareBoundaryPoints","deleteContents","extractContents","cloneContents","insertNode","surroundContents","cloneRange","toString","detach"],f=["boundingHeight","boundingLeft","boundingTop","boundingWidth","htmlText","text"],g=["collapse","compareEndPoints","duplicate","moveToElementText","parentElement","select","setEndPoint","getBoundingClientRect"],l=k(h),m=k(i),n=k(j),p={},q={version:"1.3alpha.751",initialized:!1,supported:!0,util:{isHostMethod:h,isHostObject:i,isHostProperty:j,areHostMethods:l,areHostObjects:m,areHostProperties:n,isTextRange:o},features:{},modules:p,config:{alertOnFail:!0,alertOnWarn:!1,preferTextRange:!1}};q.fail=s,q.warn=t,{}.hasOwnProperty?q.util.extend=function(a,b,c){var d,e;for(var f in b)b.hasOwnProperty(f)&&(d=a[f],e=b[f],c&&d!==null&&typeof d=="object"&&e!==null&&typeof e=="object"&&q.util.extend(d,e,!0),a[f]=e);return a}:s("hasOwnProperty not supported"),function(){var a=document.createElement("div");a.appendChild(document.createElement("span"));var b=[].slice,c;try{b.call(a.childNodes,0)[0].nodeType==1&&(c=function(a){return b.call(a,0)})}catch(d){}c||(c=function(a){var b=[];for(var c=0,d=a.length;c<d;++c)b[c]=a[c];return b}),q.util.toArray=c}();var u;h(document,"addEventListener")?u=function(a,b,c){a.addEventListener(b,c,!1)}:h(document,"attachEvent")?u=function(a,b,c){a.attachEvent("on"+b,c)}:s("Document does not have required addEventListener or attachEvent method"),q.util.addListener=u;var v=[];q.init=y,q.addInitListener=function(a){q.initialized?a(q):v.push(a)};var z=[];q.addCreateMissingNativeApiListener=function(a){z.push(a)},q.createMissingNativeApi=A,B.prototype={fail:function(a){throw this.initialized=!0,this.supported=!1,new Error("Module '"+this.name+"' failed to load: "+a)},warn:function(a){q.warn("Module "+this.name+": "+a)},deprecationNotice:function(a,b){q.warn("DEPRECATED: "+a+" in module "+this.name+"is deprecated. Please use "+b+" instead")},createError:function(a){return new Error("Error in Rangy "+this.name+" module: "+a)}},q.createModule=function(a,b){var c=new B(a,function(){if(!c.initialized){c.initialized=!0;try{b(q,c),c.supported=!0}catch(d){var e="Module '"+a+"' failed to load: "+x(d);w(e)}}});p[a]=c},q.requireModules=function(a){for(var b=0,c=a.length,d,e;b<c;++b){e=a[b],d=p[e];if(!d||!(d instanceof B))throw new Error("required module '"+e+"' not found");d.init();if(!d.supported)throw new Error("required module '"+e+"' not supported")}};var C=!1,D=function(a){C||(C=!0,q.initialized||y())};if(typeof window==c){s("No window found");return}if(typeof document==c){s("No document found");return}return h(document,"addEventListener")&&document.addEventListener("DOMContentLoaded",D,!1),u(window,"load",D),q}(),rangy.createModule("DomUtil",function(a,b){function h(a){var b;return typeof a.namespaceURI==c||(b=a.namespaceURI)===null||b=="http://www.w3.org/1999/xhtml"}function i(a){var b=a.parentNode;return b.nodeType==1?b:null}function j(a){var b=0;while(a=a.previousSibling)++b;return b}function k(a){switch(a.nodeType){case 7:case 10:return 0;case 3:case 8:return a.length;default:return a.childNodes.length}}function l(a,b){var c=[],d;for(d=a;d;d=d.parentNode)c.push(d);for(d=b;d;d=d.parentNode)if(g(c,d))return d;return null}function m(a,b,c){var d=c?b:b.parentNode;while(d){if(d===a)return!0;d=d.parentNode}return!1}function n(a,b){return m(a,b,!0)}function o(a,b,c){var d,e=c?a:a.parentNode;while(e){d=e.parentNode;if(d===b)return e;e=d}return null}function p(a){var b=a.nodeType;return b==3||b==4||b==8}function q(a){if(!a)return!1;var b=a.nodeType;return b==3||b==8}function r(a,b){var c=b.nextSibling,d=b.parentNode;return c?d.insertBefore(a,c):d.appendChild(a),a}function s(a,b,c){var d=a.cloneNode(!1);d.deleteData(0,b),a.deleteData(b,a.length-b),r(d,a);if(c)for(var e=0,f;f=c[e++];)f.node==a&&f.offset>b?(f.node=d,f.offset-=b):f.node==a.parentNode&&f.offset>j(a)&&++f.offset;return d}function t(a){if(a.nodeType==9)return a;if(typeof a.ownerDocument!=c)return a.ownerDocument;if(typeof a.document!=c)return a.document;if(a.parentNode)return t(a.parentNode);throw b.createError("getDocument: no document found for node")}function u(a){var d=t(a);if(typeof d.defaultView!=c)return d.defaultView;if(typeof d.parentWindow!=c)return d.parentWindow;throw b.createError("Cannot get a window object for node")}function v(a){if(typeof a.contentDocument!=c)return a.contentDocument;if(typeof a.contentWindow!=c)return a.contentWindow.document;throw b.createError("getIframeDocument: No Document object found for iframe element")}function w(a){if(typeof a.contentWindow!=c)return a.contentWindow;if(typeof a.contentDocument!=c)return a.contentDocument.defaultView;throw b.createError("getIframeWindow: No Window object found for iframe element")}function x(a){return d.isHostObject(a,"body")?a.body:a.getElementsByTagName("body")[0]}function y(a){return a&&d.isHostMethod(a,"setTimeout")&&d.isHostObject(a,"document")}function z(a,b,c){var e;a?d.isHostProperty(a,"nodeType")?e=a.nodeType==1&&a.tagName.toLowerCase()=="iframe"?v(a):t(a):y(a)&&(e=a.document):e=document;if(!e)throw b.createError(c+"(): Parameter must be a Window object or DOM node");return e}function A(a){var b;while(b=a.parentNode)a=b;return a}function B(a,c,d,e){var f,g,h,i,k;if(a==d)return c===e?0:c<e?-1:1;if(f=o(d,a,!0))return c<=j(f)?-1:1;if(f=o(a,d,!0))return j(f)<e?-1:1;g=l(a,d),h=a===g?g:o(a,g,!0),i=d===g?g:o(d,g,!0);if(h===i)throw b.createError("comparePoints got to case 4 and childA and childB are the same!");k=g.firstChild;while(k){if(k===h)return-1;if(k===i)return 1;k=k.nextSibling}}function C(a){if(!a)return"[No node]";if(p(a))return'"'+a.data+'"';if(a.nodeType==1){var b=a.id?' id="'+a.id+'"':"";return"<"+a.nodeName+b+">["+a.childNodes.length+"]["+a.innerHTML.slice(0,20)+"]"}return a.nodeName}function D(a){var b=t(a).createDocumentFragment(),c;while(c=a.firstChild)b.appendChild(c);return b}function F(a){this.root=a,this._next=a}function G(a){return new F(a)}function H(a,b){this.node=a,this.offset=b}function I(a){this.code=this[a],this.codeName=a,this.message="DOMException: "+this.codeName}var c="undefined",d=a.util;d.areHostMethods(document,["createDocumentFragment","createElement","createTextNode"])||b.fail("document missing a Node creation method"),d.isHostMethod(document,"getElementsByTagName")||b.fail("document missing getElementsByTagName method");var e=document.createElement("div");d.areHostMethods(e,["insertBefore","appendChild","cloneNode"]||!d.areHostObjects(e,["previousSibling","nextSibling","childNodes","parentNode"]))||b.fail("Incomplete Element implementation"),d.isHostProperty(e,"innerHTML")||b.fail("Element is missing innerHTML property");var f=document.createTextNode("test");d.areHostMethods(f,["splitText","deleteData","insertData","appendData","cloneNode"]||!d.areHostObjects(e,["previousSibling","nextSibling","childNodes","parentNode"])||!d.areHostProperties(f,["data"]))||b.fail("Incomplete Text Node implementation");var g=function(a,b){var c=a.length;while(c--)if(a[c]===b)return!0;return!1},E;typeof window.getComputedStyle!=c?E=function(a,b){return u(a).getComputedStyle(a,null)[b]}:typeof document.documentElement.currentStyle!=c?E=function(a,b){return a.currentStyle[b]}:b.fail("No means of obtaining computed style properties found"),F.prototype={_current:null,hasNext:function(){return!!this._next},next:function(){var a=this._current=this._next,b,c;if(this._current){b=a.firstChild;if(b)this._next=b;else{c=null;while(a!==this.root&&!(c=a.nextSibling))a=a.parentNode;this._next=c}}return this._current},detach:function(){this._current=this._next=this.root=null}},H.prototype={equals:function(a){return!!a&&this.node===a.node&&this.offset==a.offset},inspect:function(){return"[DomPosition("+C(this.node)+":"+this.offset+")]"},toString:function(){return this.inspect()}},I.prototype={INDEX_SIZE_ERR:1,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INVALID_STATE_ERR:11},I.prototype.toString=function(){return this.message},a.dom={arrayContains:g,isHtmlNamespace:h,parentElement:i,getNodeIndex:j,getNodeLength:k,getCommonAncestor:l,isAncestorOf:m,isOrIsAncestorOf:n,getClosestAncestorIn:o,isCharacterDataNode:p,isTextOrCommentNode:q,insertAfter:r,splitDataNode:s,getDocument:t,getWindow:u,getIframeWindow:w,getIframeDocument:v,getBody:x,isWindow:y,getContentDocument:z,getRootContainer:A,comparePoints:B,inspectNode:C,getComputedStyleProperty:E,fragmentFromNodeChildren:D,createIterator:G,DomPosition:H},a.DOMException=I}),rangy.createModule("DomRange",function(a,b){function g(a,b){return a.nodeType!=3&&(c.isOrIsAncestorOf(a,b.startContainer)||c.isOrIsAncestorOf(a,b.endContainer))}function h(a){return c.getDocument(a.startContainer)}function i(a){return new e(a.parentNode,c.getNodeIndex(a))}function j(a){return new e(a.parentNode,c.getNodeIndex(a)+1)}function k(a,b,d){var e=a.nodeType==11?a.firstChild:a;return c.isCharacterDataNode(b)?d==b.length?c.insertAfter(a,b):b.parentNode.insertBefore(a,d==0?b:c.splitDataNode(b,d)):d>=b.childNodes.length?b.appendChild(a):b.insertBefore(a,b.childNodes[d]),e}function l(a,b,d){O(a),O(b);if(h(b)!=h(a))throw new f("WRONG_DOCUMENT_ERR");var e=c.comparePoints(a.startContainer,a.startOffset,b.endContainer,b.endOffset),g=c.comparePoints(a.endContainer,a.endOffset,b.startContainer,b.startOffset);return d?e<=0&&g>=0:e<0&&g>0}function m(a){var b;for(var c,d=h(a.range).createDocumentFragment(),e;c=a.next();){b=a.isPartiallySelectedSubtree(),c=c.cloneNode(!b),b&&(e=a.getSubtreeIterator(),c.appendChild(m(e)),e.detach(!0));if(c.nodeType==10)throw new f("HIERARCHY_REQUEST_ERR");d.appendChild(c)}return d}function n(a,b,d){var e,f;d=d||{stop:!1};for(var g,h;g=a.next();)if(a.isPartiallySelectedSubtree()){if(b(g)===!1){d.stop=!0;return}h=a.getSubtreeIterator(),n(h,b,d),h.detach(!0);if(d.stop)return}else{e=c.createIterator(g);while(f=e.next())if(b(f)===!1){d.stop=!0;return}}}function o(a){var b;while(a.next())a.isPartiallySelectedSubtree()?(b=a.getSubtreeIterator(),o(b),b.detach(!0)):a.remove()}function p(a){for(var b,c=h(a.range).createDocumentFragment(),d;b=a.next();){a.isPartiallySelectedSubtree()?(b=b.cloneNode(!1),d=a.getSubtreeIterator(),b.appendChild(p(d)),d.detach(!0)):a.remove();if(b.nodeType==10)throw new f("HIERARCHY_REQUEST_ERR");c.appendChild(b)}return c}function q(a,b,c){var d=!!b&&!!b.length,e,f=!!c;d&&(e=new RegExp("^("+b.join("|")+")$"));var g=[];return n(new s(a,!1),function(a){(!d||e.test(a.nodeType))&&(!f||c(a))&&g.push(a)}),g}function r(a){var b=typeof a.getName=="undefined"?"Range":a.getName();return"["+b+"("+c.inspectNode(a.startContainer)+":"+a.startOffset+", "+c.inspectNode(a.endContainer)+":"+a.endOffset+")]"}function s(a,b){this.range=a,this.clonePartiallySelectedTextNodes=b;if(!a.collapsed){this.sc=a.startContainer,this.so=a.startOffset,this.ec=a.endContainer,this.eo=a.endOffset;var d=a.commonAncestorContainer;this.sc===this.ec&&c.isCharacterDataNode(this.sc)?(this.isSingleCharacterDataNode=!0,this._first=this._last=this._next=this.sc):(this._first=this._next=this.sc===d&&!c.isCharacterDataNode(this.sc)?this.sc.childNodes[this.so]:c.getClosestAncestorIn(this.sc,d,!0),this._last=this.ec===d&&!c.isCharacterDataNode(this.ec)?this.ec.childNodes[this.eo-1]:c.getClosestAncestorIn(this.ec,d,!0))}}function t(a){this.code=this[a],this.codeName=a,this.message="RangeException: "+this.codeName}function z(a){return function(b,d){var e,f=d?b:b.parentNode;while(f){e=f.nodeType;if(c.arrayContains(a,e))return f;f=f.parentNode}return null}}function E(a,b){if(D(a,b))throw new t("INVALID_NODE_TYPE_ERR")}function F(a){if(!a.startContainer)throw new f("INVALID_STATE_ERR")}function G(a,b){if(!c.arrayContains(b,a.nodeType))throw new t("INVALID_NODE_TYPE_ERR")}function H(a,b){if(b<0||b>(c.isCharacterDataNode(a)?a.length:a.childNodes.length))throw new f("INDEX_SIZE_ERR")}function I(a,b){if(B(a,!0)!==B(b,!0))throw new f("WRONG_DOCUMENT_ERR")}function J(a){if(C(a,!0))throw new f("NO_MODIFICATION_ALLOWED_ERR")}function K(a,b){if(!a)throw new f(b)}function L(a){return!c.arrayContains(v,a.nodeType)&&!B(a,!0)}function M(a,b){return b<=(c.isCharacterDataNode(a)?a.length:a.childNodes.length)}function N(a){return!!a.startContainer&&!!a.endContainer&&!L(a.startContainer)&&!L(a.endContainer)&&M(a.startContainer,a.startOffset)&&M(a.endContainer,a.endOffset)}function O(a){F(a);if(!N(a))throw new Error("Range error: Range is no longer valid after DOM mutation ("+a.inspect()+")")}function T(a,b){O(a);var d=a.startContainer,e=a.startOffset,f=a.endContainer,g=a.endOffset,h=d===f;c.isCharacterDataNode(f)&&g>0&&g<f.length&&c.splitDataNode(f,g,b),c.isCharacterDataNode(d)&&e>0&&e<d.length&&(d=c.splitDataNode(d,e,b),h?(g-=e,f=d):f==d.parentNode&&g>=c.getNodeIndex(d)&&g++,e=0),a.setStartAndEnd(d,e,f,g)}function bb(){}function cb(a){a.START_TO_START=V,a.START_TO_END=W,a.END_TO_END=X,a.END_TO_START=Y,a.NODE_BEFORE=Z,a.NODE_AFTER=$,a.NODE_BEFORE_AND_AFTER=_,a.NODE_INSIDE=ab}function db(a){cb(a),cb(a.prototype)}function eb(a,b){return function(){O(this);var d=this.startContainer,e=this.startOffset,f=this.commonAncestorContainer,g=new s(this,!0),h,i;d!==f&&(h=c.getClosestAncestorIn(d,f,!0),i=j(h),d=i.node,e=i.offset),n(g,J),g.reset();var k=a(g);return g.detach(),b(this,d,e,d,e),k}}function fb(a,b,e){function f(a,b){return function(c){F(this),G(c,u),G(A(c),v);var d=(a?i:j)(c);(b?h:k)(this,d.node,d.offset)}}function h(a,d,e){var f=a.endContainer,g=a.endOffset;if(d!==a.startContainer||e!==a.startOffset){if(A(d)!=A(f)||c.comparePoints(d,e,f,g)==1)f=d,g=e;b(a,d,e,f,g)}}function k(a,d,e){var f=a.startContainer,g=a.startOffset;if(d!==a.endContainer||e!==a.endOffset){if(A(d)!=A(f)||c.comparePoints(d,e,f,g)==-1)f=d,g=e;b(a,f,g,d,e)}}a.prototype=new bb,d.extend(a.prototype,{setStart:function(a,b){F(this),E(a,!0),H(a,b),h(this,a,b)},setEnd:function(a,b){F(this),E(a,!0),H(a,b),k(this,a,b)},setStartAndEnd:function(){F(this);var a=arguments,c=a[0],d=a[1],e=c,f=d;switch(a.length){case 3:f=a[2];break;case 4:e=a[2],f=a[3]}b(this,c,d,e,f)},setBoundary:function(a,b,c){this["set"+(c?"Start":"End")](a,b)},setStartBefore:f(!0,!0),setStartAfter:f(!1,!0),setEndBefore:f(!0,!1),setEndAfter:f(!1,!1),collapse:function(a){O(this),a?b(this,this.startContainer,this.startOffset,this.startContainer,this.startOffset):b(this,this.endContainer,this.endOffset,this.endContainer,this.endOffset)},selectNodeContents:function(a){F(this),E(a,!0),b(this,a,0,a,c.getNodeLength(a))},selectNode:function(a){F(this),E(a,!1),G(a,u);var c=i(a),d=j(a);b(this,c.node,c.offset,d.node,d.offset)},extractContents:eb(p,b),deleteContents:eb(o,b),canSurroundContents:function(){O(this),J(this.startContainer),J(this.endContainer);var a=new s(this,!0),b=a._first&&g(a._first,this)||a._last&&g(a._last,this);return a.detach(),!b},detach:function(){e(this)},splitBoundaries:function(){T(this)},splitBoundariesPreservingPositions:function(a){T(this,a)},normalizeBoundaries:function(){O(this);var a=this.startContainer,d=this.startOffset,e=this.endContainer,f=this.endOffset,g=function(a){var b=a.nextSibling;b&&b.nodeType==a.nodeType&&(e=a,f=a.length,a.appendData(b.data),b.parentNode.removeChild(b))},h=function(b){var g=b.previousSibling;if(g&&g.nodeType==b.nodeType){a=b;var h=b.length;d=g.length,b.insertData(0,g.data),g.parentNode.removeChild(g);if(a==e)f+=d,e=a;else if(e==b.parentNode){var i=c.getNodeIndex(b);f==i?(e=b,f=h):f>i&&f--}}},i=!0;if(c.isCharacterDataNode(e))e.length==f&&g(e);else{if(f>0){var j=e.childNodes[f-1];j&&c.isCharacterDataNode(j)&&g(j)}i=!this.collapsed}if(i){if(c.isCharacterDataNode(a))d==0&&h(a);else if(d<a.childNodes.length){var k=a.childNodes[d];k&&c.isCharacterDataNode(k)&&h(k)}}else a=e,d=f;b(this,a,d,e,f)},collapseToPoint:function(a,b){F(this),E(a,!0),H(a,b),this.setStartAndEnd(a,b)}}),db(a)}function gb(a){a.collapsed=a.startContainer===a.endContainer&&a.startOffset===a.endOffset,a.commonAncestorContainer=a.collapsed?a.startContainer:c.getCommonAncestor(a.startContainer,a.endContainer)}function hb(a,b,c,d,e){a.startContainer=b,a.startOffset=c,a.endContainer=d,a.endOffset=e,gb(a)}function ib(a){F(a),a.startContainer=a.startOffset=a.endContainer=a.endOffset=null,a.collapsed=a.commonAncestorContainer=null}function jb(a){this.startContainer=a,this.startOffset=0,this.endContainer=a,this.endOffset=0,gb(this)}a.requireModules(["DomUtil"]);var c=a.dom,d=a.util,e=c.DomPosition,f=a.DOMException;s.prototype={_current:null,_next:null,_first:null,_last:null,isSingleCharacterDataNode:!1,reset:function(){this._current=null,this._next=this._first},hasNext:function(){return!!this._next},next:function(){var a=this._current=this._next;return a&&(this._next=a!==this._last?a.nextSibling:null,c.isCharacterDataNode(a)&&this.clonePartiallySelectedTextNodes&&(a===this.ec&&(a=a.cloneNode(!0)).deleteData(this.eo,a.length-this.eo),this._current===this.sc&&(a=a.cloneNode(!0)).deleteData(0,this.so))),a},remove:function(){var a=this._current,b,d;!c.isCharacterDataNode(a)||a!==this.sc&&a!==this.ec?a.parentNode&&a.parentNode.removeChild(a):(b=a===this.sc?this.so:0,d=a===this.ec?this.eo:a.length,b!=d&&a.deleteData(b,d-b))},isPartiallySelectedSubtree:function(){var a=this._current;return g(a,this.range)},getSubtreeIterator:function(){var a;if(this.isSingleCharacterDataNode)a=this.range.cloneRange(),a.collapse(!1);else{a=new jb(h(this.range));var b=this._current,d=b,e=0,f=b,g=c.getNodeLength(b);c.isOrIsAncestorOf(b,this.sc)&&(d=this.sc,e=this.so),c.isOrIsAncestorOf(b,this.ec)&&(f=this.ec,g=this.eo),hb(a,d,e,f,g)}return new s(a,this.clonePartiallySelectedTextNodes)},detach:function(a){a&&this.range.detach(),this.range=this._current=this._next=this._first=this._last=this.sc=this.so=this.ec=this.eo=null}},t.prototype={BAD_BOUNDARYPOINTS_ERR:1,INVALID_NODE_TYPE_ERR:2},t.prototype.toString=function(){return this.message};var u=[1,3,4,5,7,8,10],v=[2,9,11],w=[5,6,10,12],x=[1,3,4,5,7,8,10,11],y=[1,3,4,5,7,8],A=c.getRootContainer,B=z([9,11]),C=z(w),D=z([6,10,12]),P=document.createElement("style"),Q=!1;try{P.innerHTML="<b>x</b>",Q=P.firstChild.nodeType==3}catch(R){}a.features.htmlParsingConforms=Q;var S=Q?function(a){var b=this.startContainer,d=c.getDocument(b);if(!b)throw new f("INVALID_STATE_ERR");var e=null;return b.nodeType==1?e=b:c.isCharacterDataNode(b)&&(e=c.parentElement(b)),e===null||e.nodeName=="HTML"&&c.isHtmlNamespace(c.getDocument(e).documentElement)&&c.isHtmlNamespace(e)?e=d.createElement("body"):e=e.cloneNode(!1),e.innerHTML=a,c.fragmentFromNodeChildren(e)}:function(a){F(this);var b=h(this),d=b.createElement("body");return d.innerHTML=a,c.fragmentFromNodeChildren(d)},U=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],V=0,W=1,X=2,Y=3,Z=0,$=1,_=2,ab=3;bb.prototype={compareBoundaryPoints:function(a,b){O(this),I(this.startContainer,b.startContainer);var d,e,f,g,h=a==Y||a==V?"start":"end",i=a==W||a==V?"start":"end";return d=this[h+"Container"],e=this[h+"Offset"],f=b[i+"Container"],g=b[i+"Offset"],c.comparePoints(d,e,f,g)},insertNode:function(a){O(this),G(a,x),J(this.startContainer);if(c.isOrIsAncestorOf(a,this.startContainer))throw new f("HIERARCHY_REQUEST_ERR");var b=k(a,this.startContainer,this.startOffset);this.setStartBefore(b)},cloneContents:function(){O(this);var a,b;if(this.collapsed)return h(this).createDocumentFragment();if(this.startContainer===this.endContainer&&c.isCharacterDataNode(this.startContainer))return a=this.startContainer.cloneNode(!0),a.data=a.data.slice(this.startOffset,this.endOffset),b=h(this).createDocumentFragment(),b.appendChild(a),b;var d=new s(this,!0);return a=m(d),d.detach(),a},canSurroundContents:function(){O(this),J(this.startContainer),J(this.endContainer);var a=new s(this,!0),b=a._first&&g(a._first,this)||a._last&&g(a._last,this);return a.detach(),!b},surroundContents:function(a){G(a,y);if(!this.canSurroundContents())throw new t("BAD_BOUNDARYPOINTS_ERR");var b=this.extractContents();if(a.hasChildNodes())while(a.lastChild)a.removeChild(a.lastChild);k(a,this.startContainer,this.startOffset),a.appendChild(b),this.selectNode(a)},cloneRange:function(){O(this);var a=new jb(h(this)),b=U.length,c;while(b--)c=U[b],a[c]=this[c];return a},toString:function(){O(this);var a=this.startContainer;if(a===this.endContainer&&c.isCharacterDataNode(a))return a.nodeType==3||a.nodeType==4?a.data.slice(this.startOffset,this.endOffset):"";var b=[],d=new s(this,!0);return n(d,function(a){(a.nodeType==3||a.nodeType==4)&&b.push(a.data)}),d.detach(),b.join("")},compareNode:function(a){O(this);var b=a.parentNode,d=c.getNodeIndex(a);if(!b)throw new f("NOT_FOUND_ERR");var e=this.comparePoint(b,d),g=this.comparePoint(b,d+1);return e<0?g>0?_:Z:g>0?$:ab},comparePoint:function(a,b){return O(this),K(a,"HIERARCHY_REQUEST_ERR"),I(a,this.startContainer),c.comparePoints(a,b,this.startContainer,this.startOffset)<0?-1:c.comparePoints(a,b,this.endContainer,this.endOffset)>0?1:0},createContextualFragment:S,toHtml:function(){O(this);var a=this.commonAncestorContainer.parentNode.cloneNode(!1);return a.appendChild(this.cloneContents()),a.innerHTML},intersectsNode:function(a,b){O(this),K(a,"NOT_FOUND_ERR");if(c.getDocument(a)!==h(this))return!1;var d=a.parentNode,e=c.getNodeIndex(a);K(d,"NOT_FOUND_ERR");var f=c.comparePoints(d,e,this.endContainer,this.endOffset),g=c.comparePoints(d,e+1,this.startContainer,this.startOffset);return b?f<=0&&g>=0:f<0&&g>0},isPointInRange:function(a,b){return O(this),K(a,"HIERARCHY_REQUEST_ERR"),I(a,this.startContainer),c.comparePoints(a,b,this.startContainer,this.startOffset)>=0&&c.comparePoints(a,b,this.endContainer,this.endOffset)<=0},intersectsRange:function(a){return l(this,a,!1)},intersectsOrTouchesRange:function(a){return l(this,a,!0)},intersection:function(a){if(this.intersectsRange(a)){var b=c.comparePoints(this.startContainer,this.startOffset,a.startContainer,a.startOffset),d=c.comparePoints(this.endContainer,this.endOffset,a.endContainer,a.endOffset),e=this.cloneRange();return b==-1&&e.setStart(a.startContainer,a.startOffset),d==1&&e.setEnd(a.endContainer,a.endOffset),e}return null},union:function(a){if(this.intersectsOrTouchesRange(a)){var b=this.cloneRange();return c.comparePoints(a.startContainer,a.startOffset,this.startContainer,this.startOffset)==-1&&b.setStart(a.startContainer,a.startOffset),c.comparePoints(a.endContainer,a.endOffset,this.endContainer,this.endOffset)==1&&b.setEnd(a.endContainer,a.endOffset),b}throw new t("Ranges do not intersect")},containsNode:function(a,b){return b?this.intersectsNode(a,!1):this.compareNode(a)==ab},containsNodeContents:function(a){return this.comparePoint(a,0)>=0&&this.comparePoint(a,c.getNodeLength(a))<=0},containsRange:function(a){var b=this.intersection(a);return b!==null&&a.equals(b)},containsNodeText:function(a){var b=this.cloneRange();b.selectNode(a);var c=b.getNodes([3]);if(c.length>0){b.setStart(c[0],0);var d=c.pop();b.setEnd(d,d.length);var e=this.containsRange(b);return b.detach(),e}return this.containsNodeContents(a)},getNodes:function(a,b){return O(this),q(this,a,b)},getDocument:function(){return h(this)},collapseBefore:function(a){F(this),this.setEndBefore(a),this.collapse(!1)},collapseAfter:function(a){F(this),this.setStartAfter(a),this.collapse(!0)},getName:function(){return"DomRange"},equals:function(a){return jb.rangesEqual(this,a)},isValid:function(){return N(this)},inspect:function(){return r(this)}},fb(jb,hb,ib),a.rangePrototype=bb.prototype,d.extend(jb,{rangeProperties:U,RangeIterator:s,copyComparisonConstants:db,createPrototypeRange:fb,inspect:r,getRangeDocument:h,rangesEqual:function(a,b){return a.startContainer===b.startContainer&&a.startOffset===b.startOffset&&a.endContainer===b.endContainer&&a.endOffset===b.endOffset}}),a.DomRange=jb,a.RangeException=t}),rangy.createModule("WrappedRange",function(a,b){a.requireModules(["DomUtil","DomRange"]);var c,d,e=a.dom,f=a.util,g=e.DomPosition,h=a.DomRange;a.features.implementsDomRange&&function(){function i(a){var b=g.length,c;while(b--)c=g[b],a[c]=a.nativeRange[c];a.collapsed=a.startContainer===a.endContainer&&a.startOffset===a.endOffset}function j(a,b,c,d,e){var f=a.startContainer!==b||a.startOffset!=c,g=a.endContainer!==d||a.endOffset!=e,h=!a.equals(a.nativeRange);if(f||g||h)a.setEnd(d,e),a.setStart(b,c)}function k(a){a.nativeRange.detach(),a.detached=!0;var b=g.length;while(b--)a[g[b]]=null}var d,g=h.rangeProperties,l;c=function(a){if(!a)throw b.createError("WrappedRange: Range must be specified");this.nativeRange=a,i(this)},h.createPrototypeRange(c,j,k),d=c.prototype,d.selectNode=function(a){this.nativeRange.selectNode(a),i(this)},d.cloneContents=function(){return this.nativeRange.cloneContents()},d.surroundContents=function(a){this.nativeRange.surroundContents(a),i(this)},d.collapse=function(a){this.nativeRange.collapse(a),i(this)},d.cloneRange=function(){return new c(this.nativeRange.cloneRange())},d.refresh=function(){i(this)},d.toString=function(){return this.nativeRange.toString()};var m=document.createTextNode("test");e.getBody(document).appendChild(m);var n=document.createRange();n.setStart(m,0),n.setEnd(m,0);try{n.setStart(m,1),d.setStart=function(a,b){this.nativeRange.setStart(a,b),i(this)},d.setEnd=function(a,b){this.nativeRange.setEnd(a,b),i(this)},l=function(a){return function(b){this.nativeRange[a](b),i(this)}}}catch(o){d.setStart=function(a,b){try{this.nativeRange.setStart(a,b)}catch(c){this.nativeRange.setEnd(a,b),this.nativeRange.setStart(a,b)}i(this)},d.setEnd=function(a,b){try{this.nativeRange.setEnd(a,b)}catch(c){this.nativeRange.setStart(a,b),this.nativeRange.setEnd(a,b)}i(this)},l=function(a,b){return function(c){try{this.nativeRange[a](c)}catch(d){this.nativeRange[b](c),this.nativeRange[a](c)}i(this)}}}d.setStartBefore=l("setStartBefore","setEndBefore"),d.setStartAfter=l("setStartAfter","setEndAfter"),d.setEndBefore=l("setEndBefore","setStartBefore"),d.setEndAfter=l("setEndAfter","setStartAfter"),n.selectNodeContents(m),n.startContainer==m&&n.endContainer==m&&n.startOffset==0&&n.endOffset==m.length?d.selectNodeContents=function(a){this.nativeRange.selectNodeContents(a),i(this)}:d.selectNodeContents=function(a){this.setStartAndEnd(a,0,e.getNodeLength(a))},n.selectNodeContents(m),n.setEnd(m,3);var p=document.createRange();p.selectNodeContents(m),p.setEnd(m,4),p.setStart(m,2),n.compareBoundaryPoints(n.START_TO_END,p)==-1&&n.compareBoundaryPoints(n.END_TO_START,p)==1?d.compareBoundaryPoints=function(a,b){return b=b.nativeRange||b,a==b.START_TO_END?a=b.END_TO_START:a==b.END_TO_START&&(a=b.START_TO_END),this.nativeRange.compareBoundaryPoints(a,b)}:d.compareBoundaryPoints=function(a,b){return this.nativeRange.compareBoundaryPoints(a,b.nativeRange||b)};var q=document.createElement("div");q.innerHTML="123";var r=q.firstChild;document.body.appendChild(q),n.setStart(r,1),n.setEnd(r,2),n.deleteContents(),r.data=="13"&&(d.deleteContents=function(){this.nativeRange.deleteContents(),i(this)},d.extractContents=function(){var a=this.nativeRange.extractContents();return i(this),a}),document.body.removeChild(q),f.isHostMethod(n,"createContextualFragment")&&(d.createContextualFragment=function(a){return this.nativeRange.createContextualFragment(a)}),e.getBody(document).removeChild(m),n.detach(),p.detach(),d.getName=function(){return"WrappedRange"},a.WrappedRange=c,a.createNativeRange=function(a){return a=e.getContentDocument(a,b,"createNativeRange"),a.createRange()}}();if(a.features.implementsTextRange){var i=function(a){var b=a.parentElement(),c=a.duplicate();c.collapse(!0);var d=c.parentElement();c=a.duplicate(),c.collapse(!1);var f=c.parentElement(),g=d==f?d:e.getCommonAncestor(d,f);return g==b?g:e.getCommonAncestor(b,g)},j=function(a){return a.compareEndPoints("StartToEnd",a)==0},k=function(a,b,c,d,f){var h=a.duplicate();h.collapse(c);var i=h.parentElement();e.isOrIsAncestorOf(b,i)||(i=b);if(!i.canHaveHTML){var j=new g(i.parentNode,e.getNodeIndex(i));return{boundaryPosition:j,nodeInfo:{nodeIndex:j.offset,containerElement:j.node}}}var k=e.getDocument(i).createElement("span");k.parentNode&&k.parentNode.removeChild(k);var l,m=c?"StartToStart":"StartToEnd",n,o,p,q,r=f&&f.containerElement==i?f.nodeIndex:0,s=i.childNodes.length,t=s,u=t;for(;;){u==s?i.appendChild(k):i.insertBefore(k,i.childNodes[u]),h.moveToElementText(k),l=h.compareEndPoints(m,a);if(l==0||r==t)break;if(l==-1){if(t==r+1)break;r=u}else t=t==r+1?r:u;u=Math.floor((r+t)/2),i.removeChild(k)}q=k.nextSibling;if(l==-1&&q&&e.isCharacterDataNode(q)){h.setEndPoint(c?"EndToStart":"EndToEnd",a);var v;if(/[\r\n]/.test(q.data)){var w=h.duplicate(),x=w.text.replace(/\r\n/g,"\r").length;v=w.moveStart("character",x);while((l=w.compareEndPoints("StartToEnd",w))==-1)v++,w.moveStart("character",1)}else v=h.text.length;p=new g(q,v)}else n=(d||!c)&&k.previousSibling,o=(d||c)&&k.nextSibling,o&&e.isCharacterDataNode(o)?p=new g(o,0):n&&e.isCharacterDataNode(n)?p=new g(n,n.data.length):p=new g(i,e.getNodeIndex(k));return k.parentNode.removeChild(k),{boundaryPosition:p,nodeInfo:{nodeIndex:u,containerElement:i}}},l=function(a,b){var c,d,f=a.offset,g=e.getDocument(a.node),h,i,j=g.body.createTextRange(),k=e.isCharacterDataNode(a.node);return k?(c=a.node,d=c.parentNode):(i=a.node.childNodes,c=f<i.length?i[f]:null,d=a.node),h=g.createElement("span"),h.innerHTML="&#feff;",c?d.insertBefore(h,c):d.appendChild(h),j.moveToElementText(h),j.collapse(!b),d.removeChild(h),k&&j[b?"moveStart":"moveEnd"]("character",f),j};d=function(a){this.textRange=a,this.refresh()},d.prototype=new h(document),d.prototype.refresh=function(){var a,b,c,d=i(this.textRange);j(this.textRange)?b=a=k(this.textRange,d,!0,!0).boundaryPosition:(c=k(this.textRange,d,!0,!1),a=c.boundaryPosition,b=k(this.textRange,d,!1,!1,c.nodeInfo).boundaryPosition),this.setStart(a.node,a.offset),this.setEnd(b.node,b.offset)},d.prototype.getName=function(){return"WrappedTextRange"},h.copyComparisonConstants(d),d.rangeToTextRange=function(a){if(a.collapsed)return l(new g(a.startContainer,a.startOffset),!0);var b=l(new g(a.startContainer,a.startOffset),!0),c=l(new g(a.endContainer,a.endOffset),!1),d=e.getDocument(a.startContainer).body.createTextRange();return d.setEndPoint("StartToStart",b),d.setEndPoint("EndToEnd",c),d},a.WrappedTextRange=d;if(!a.features.implementsDomRange||a.config.preferTextRange){var m=function(){return this}();typeof m.Range=="undefined"&&(m.Range=d),a.createNativeRange=function(a){return a=e.getContentDocument(a,b,"createNativeRange"),a.body.createTextRange()},a.WrappedRange=d}}a.createRange=function(c){return c=e.getContentDocument(c,b,"createRange"),new a.WrappedRange(a.createNativeRange(c))},a.createRangyRange=function(a){return a=e.getContentDocument(a,b,"createRangyRange"),new h(a)},a.createIframeRange=function(c){return b.deprecationNotice("createIframeRange()","createRange(iframeEl)"),a.createRange(c)},a.createIframeRangyRange=function(c){return b.deprecationNotice("createIframeRangyRange()","createRangyRange(iframeEl)"),a.createRangyRange(c)},a.addCreateMissingNativeApiListener(function(b){var c=b.document;typeof c.createRange=="undefined"&&(c.createRange=function(){return a.createRange(c)}),c=b=null})}),rangy.createModule("WrappedSelection",function(a,b){function q(a){return typeof a=="string"?a=="backward":!!a}function r(a,c){if(!a)return window;if(d.isWindow(a))return a;if(a instanceof S)return a.win;var e=d.getContentDocument(a,b,c);return d.getWindow(e)}function s(a){return r(a,"getWinSelection").getSelection()}function t(a){return r(a,"getDocSelection").document.selection}function H(a,b,c){var d=c?"end":"start",e=c?"start":"end";a.anchorNode=b[d+"Container"],a.anchorOffset=b[d+"Offset"],a.focusNode=b[e+"Container"],a.focusOffset=b[e+"Offset"]}function I(a){var b=a.nativeSelection;a.anchorNode=b.anchorNode,a.anchorOffset=b.anchorOffset,a.focusNode=b.focusNode,a.focusOffset=b.focusOffset}function J(a){a.anchorNode=a.focusNode=null,a.anchorOffset=a.focusOffset=0,a.rangeCount=0,a.isCollapsed=!0,a._ranges.length=0}function K(b){var c;return b instanceof g?(c=a.createNativeRange(b.getDocument()),c.setEnd(b.endContainer,b.endOffset),c.setStart(b.startContainer,b.startOffset)):b instanceof h?c=b.nativeRange:n.implementsDomRange&&b instanceof d.getWindow(b.startContainer).Range&&(c=b),c}function L(a){if(!a.length||a[0].nodeType!=1)return!1;for(var b=1,c=a.length;b<c;++b)if(!d.isAncestorOf(a[0],a[b]))return!1;return!0}function M(a){var c=a.getNodes();if(!L(c))throw b.createError("getSingleElementFromRange: range "+a.inspect()+" did not consist of a single element");return c[0]}function N(a){return!!a&&typeof a.text!="undefined"}function O(a,b){var c=new h(b);a._ranges=[c],H(a,c,!1),a.rangeCount=1,a.isCollapsed=c.collapsed}function P(b){b._ranges.length=0;if(b.docSelection.type=="None")J(b);else{var c=b.docSelection.createRange();if(N(c))O(b,c);else{b.rangeCount=c.length;var d,e=p(c.item(0));for(var f=0;f<b.rangeCount;++f)d=a.createRange(e),d.selectNode(c.item(f)),b._ranges.push(d);b.isCollapsed=b.rangeCount==1&&b._ranges[0].collapsed,H(b,b._ranges[b.rangeCount-1],!1)}}}function Q(a,c){var e=a.docSelection.createRange(),f=M(c),g=p(e.item(0)),h=d.getBody(g).createControlRange();for(var i=0,j=e.length;i<j;++i)h.add(e.item(i));try{h.add(f)}catch(k){throw b.createError("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)")}h.select(),P(a)}function S(a,b,c){this.nativeSelection=a,this.docSelection=b,this._ranges=[],this.win=c,this.refresh()}function T(a){a.win=a.anchorNode=a.focusNode=a._ranges=null,a.rangeCount=a.anchorOffset=a.focusOffset=0,a.detached=!0}function V(a,b){var c=U.length,d,e;while(c--){d=U[c],e=d.selection;if(b=="deleteAll")T(e);else if(d.win==a)return b=="delete"?(U.splice(c,1),!0):e}return b=="deleteAll"&&(U.length=0),null}function Y(a,c){var e=p(c[0].startContainer),f=d.getBody(e).createControlRange();for(var g=0,h;g<rangeCount;++g){h=M(c[g]);try{f.add(h)}catch(i){throw b.createError("setRanges(): Element within the one of the specified Ranges could not be added to control selection (does it have layout?)")}}f.select(),P(a)}function bb(a,b){if(a.anchorNode&&p(a.anchorNode)!==p(b))throw new j("WRONG_DOCUMENT_ERR")}function cb(b){return function(c,d){var e;this.rangeCount?(e=this.getRangeAt(0),e["set"+(b?"Start":"End")](c,d)):(e=a.createRange(this.win.document),e.setStartAndEnd(c,d)),this.setSingleRange(e,this.isBackward())}}function db(a){var b=[],c=new k(a.anchorNode,a.anchorOffset),d=new k(a.focusNode,a.focusOffset),e=typeof a.getName=="function"?a.getName():"Selection";if(typeof a.rangeCount!="undefined")for(var f=0,h=a.rangeCount;f<h;++f)b[f]=g.inspect(a.getRangeAt(f));return"["+e+"(Ranges: "+b.join(", ")+")(anchor: "+c.inspect()+", focus: "+d.inspect()+"]"}a.requireModules(["DomUtil","DomRange","WrappedRange"]),a.config.checkSelectionRanges=!0;var c="boolean",d=a.dom,e=a.util,f=e.isHostMethod,g=a.DomRange,h=a.WrappedRange,j=a.DOMException,k=d.DomPosition,l,m,n=a.features,o="Control",p=d.getDocument,u=f(window,"getSelection"),v=e.isHostObject(document,"selection");n.implementsWinGetSelection=u,n.implementsDocSelection=v;var w=v&&(!u||a.config.preferTextRange);w?(l=t,a.isSelectionValid=function(a){var b=r(a,"isSelectionValid").document,c=b.selection;return c.type!="None"||p(c.createRange().parentElement())==b}):u?(l=s,a.isSelectionValid=function(){return!0}):b.fail("Neither document.selection or window.getSelection() detected."),a.getNativeSelection=l;var x=l(),y=a.createNativeRange(document),z=d.getBody(document),A=e.areHostProperties(x,["anchorNode","focusNode","anchorOffset","focusOffset"]);n.selectionHasAnchorAndFocus=A;var B=f(x,"extend");n.selectionHasExtend=B;var C=typeof x.rangeCount=="number";n.selectionHasRangeCount=C;var D=!1,E=!0;e.areHostMethods(x,["addRange","getRangeAt","removeAllRanges"])&&typeof x.rangeCount=="number"&&n.implementsDomRange&&function(){var a=window.getSelection();if(a){var b=d.getBody(document),c=b.appendChild(document.createElement("div"));c.contentEditable="false";var e=c.appendChild(document.createTextNode("\u00a0\u00a0\u00a0")),f=document.createRange();f.setStart(e,1),f.collapse(!0),a.addRange(f),E=a.rangeCount==1,a.removeAllRanges();var g=f.cloneRange();f.setStart(e,0),g.setEnd(e,3),g.setStart(e,2),a.addRange(f),a.addRange(g),D=a.rangeCount==2,b.removeChild(c),a.removeAllRanges(),f.detach(),g.detach()}}(),n.selectionSupportsMultipleRanges=D,n.collapsedNonEditableSelectionsSupported=E;var F=!1,G;z&&f(z,"createControlRange")&&(G=z.createControlRange(),e.areHostProperties(G,["item","add"])&&(F=!0)),n.implementsControlRange=F,A?m=function(a){return a.anchorNode===a.focusNode&&a.anchorOffset===a.focusOffset}:m=function(a){return a.rangeCount?a.getRangeAt(a.rangeCount-1).collapsed:!1};var R;f(x,"getRangeAt")?R=function(a,b){try{return a.getRangeAt(b)}catch(c){return null}}:A&&(R=function(b){var c=p(b.anchorNode),d=a.createRange(c);return d.setStartAndEnd(b.anchorNode,b.anchorOffset,b.focusNode,b.focusOffset),d.collapsed!==this.isCollapsed&&d.setStartAndEnd(b.focusNode,b.focusOffset,b.anchorNode,b.anchorOffset),d});var U=[],W=function(a){if(a&&a instanceof S)return a.refresh(),a;a=r(a,"getNativeSelection");var b=V(a),c=l(a),d=v?t(a):null;return b?(b.nativeSelection=c,b.docSelection=d,b.refresh()):(b=new S(c,d,a),U.push({win:a,selection:b})),b};a.getSelection=W,a.getIframeSelection=function(c){return b.deprecationNotice("getIframeSelection()","getSelection(iframeEl)"),a.getSelection(d.getIframeWindow(c))};var X=S.prototype;if(!w&&A&&e.areHostMethods(x,["removeAllRanges","addRange"])){X.removeAllRanges=function(){this.nativeSelection.removeAllRanges(),J(this)};var Z=function(b,c){var d=g.getRangeDocument(c),e=a.createRange(d);e.collapseToPoint(c.endContainer,c.endOffset),b.nativeSelection.addRange(K(e)),b.nativeSelection.extend(c.startContainer,c.startOffset),b.refresh()};C?X.addRange=function(b,c){if(F&&v&&this.docSelection.type==o)Q(this,b);else if(q(c)&&B)Z(this,b);else{var d;D?d=this.rangeCount:(this.removeAllRanges(),d=0),this.nativeSelection.addRange(K(b).cloneRange()),this.rangeCount=this.nativeSelection.rangeCount;if(this.rangeCount==d+1){if(a.config.checkSelectionRanges){var e=R(this.nativeSelection,this.rangeCount-1);e&&!g.rangesEqual(e,b)&&(b=new h(e))}this._ranges[this.rangeCount-1]=b,H(this,b,ab(this.nativeSelection)),this.isCollapsed=m(this)}else this.refresh()}}:X.addRange=function(a,b){q(b)&&B?Z(this,a):(this.nativeSelection.addRange(K(a)),this.refresh())},X.setRanges=function(a){if(F&&a.length>1)Y(this,a);else{this.removeAllRanges();for(var b=0,c=a.length;b<c;++b)this.addRange(a[b])}}}else{if(!(f(x,"empty")&&f(y,"select")&&F&&w))return b.fail("No means of selecting a Range or TextRange was found"),!1;X.removeAllRanges=function(){try{this.docSelection.empty();if(this.docSelection.type!="None"){var a;if(this.anchorNode)a=p(this.anchorNode);else if(this.docSelection.type==o){var b=this.docSelection.createRange();b.length&&(a=p(b.item(0)).body.createTextRange())}if(a){var c=a.body.createTextRange();c.select(),this.docSelection.empty()}}}catch(d){}J(this)},X.addRange=function(a){this.docSelection.type==o?Q(this,a):(h.rangeToTextRange(a).select(),this._ranges[0]=a,this.rangeCount=1,this.isCollapsed=this._ranges[0].collapsed,H(this,a,!1))},X.setRanges=function(a){this.removeAllRanges();var b=a.length;b>1?Y(this,a):b&&this.addRange(a[0])}}X.getRangeAt=function(a){if(a<0||a>=this.rangeCount)throw new j("INDEX_SIZE_ERR");return this._ranges[a].cloneRange()};var $;if(w)$=function(b){var c;a.isSelectionValid(b.win)?c=b.docSelection.createRange():(c=d.getBody(b.win.document).createTextRange(),c.collapse(!0)),b.docSelection.type==o?P(b):N(c)?O(b,c):J(b)};else if(f(x,"getRangeAt")&&typeof x.rangeCount=="number")$=function(b){if(F&&v&&b.docSelection.type==o)P(b);else{b._ranges.length=b.rangeCount=b.nativeSelection.rangeCount;if(b.rangeCount){for(var c=0,d=b.rangeCount;c<d;++c)b._ranges[c]=new a.WrappedRange(b.nativeSelection.getRangeAt(c));H(b,b._ranges[b.rangeCount-1],ab(b.nativeSelection)),b.isCollapsed=m(b)}else J(b)}};else{if(!A||typeof x.isCollapsed!=c||typeof y.collapsed!=c||!n.implementsDomRange)return b.fail("No means of obtaining a Range or TextRange from the user's selection was found"),!1;$=function(a){var b,c=a.nativeSelection;c.anchorNode?(b=R(c,0),a._ranges=[b],a.rangeCount=1,I(a),a.isCollapsed=m(a)):J(a)}}X.refresh=function(a){var b=a?this._ranges.slice(0):null,c=this.anchorNode,d=this.anchorOffset;$(this);if(a){var e=b.length;if(e!=this._ranges.length)return!0;if(this.anchorNode!=c||this.anchorOffset!=d)return!0;while(e--)if(!g.rangesEqual(b[e],this._ranges[e]))return!0;return!1}};var _=function(b,c){var d=b.getAllRanges();b.removeAllRanges();for(var e=0,f=d.length;e<f;++e)a.DomRange.rangesEqual(c,d[e])||b.addRange(d[e]);b.rangeCount||J(b)};F?X.removeRange=function(a){if(this.docSelection.type==o){var b=this.docSelection.createRange(),c=M(a),e=p(b.item(0)),f=d.getBody(e).createControlRange(),g,h=!1;for(var i=0,j=b.length;i<j;++i)g=b.item(i),g!==c||h?f.add(b.item(i)):h=!0;f.select(),P(this)}else _(this,a)}:X.removeRange=function(a){_(this,a)};var ab;!w&&A&&n.implementsDomRange?(ab=function(a){var b=!1;return a.anchorNode&&(b=d.comparePoints(a.anchorNode,a.anchorOffset,a.focusNode,a.focusOffset)==1),b},X.isBackward=function(){return ab(this)}):ab=X.isBackward=function(){return!1},X.isBackwards=X.isBackward,X.toString=function(){var a=[];for(var b=0,c=this.rangeCount;b<c;++b)a[b]=""+this._ranges[b];return a.join("")},X.collapse=function(b,c){bb(this,b);var d=a.createRange(b);d.collapseToPoint(b,c),this.setSingleRange(d),this.isCollapsed=!0},X.collapseToStart=function(){if(!this.rangeCount)throw new j("INVALID_STATE_ERR");var a=this._ranges[0];this.collapse(a.startContainer,a.startOffset)},X.collapseToEnd=function(){if(!this.rangeCount)throw new j("INVALID_STATE_ERR");var a=this._ranges[this.rangeCount-1];this.collapse(a.endContainer,a.endOffset)},X.selectAllChildren=function(b){bb(this,b);var c=a.createRange(b);c.selectNodeContents(b),this.removeAllRanges(),this.addRange(c)},X.deleteFromDocument=function(){if(F&&v&&this.docSelection.type==o){var a=this.docSelection.createRange(),b;while(a.length)b=a.item(0),a.remove(b),b.parentNode.removeChild(b);this.refresh()}else if(this.rangeCount){var c=this.getAllRanges();if(c.length){this.removeAllRanges();for(var d=0,e=c.length;d<e;++d)c[d].deleteContents();this.addRange(c[e-1])}}},X.eachRange=function(a,b){for(var c=0,d=this._ranges.length;c<d;++c)if(a(this.getRangeAt(c)))return b},X.getAllRanges=function(){var a=[];return this.eachRange(function(b){a.push(b)}),a},X.setSingleRange=function(a,b){this.removeAllRanges(),this.addRange(a,b)},X.callMethodOnEachRange=function(a,b){var c=[];return this.eachRange(function(d){c[i]=d[a](b)}),c},X.setStart=cb(!0),X.setEnd=cb(!1),a.rangePrototype.select=function(a){W(this.getDocument()).setSingleRange(this,a)},X.changeEachRange=function(a){var b=[],c=this.isBackward();this.eachRange(function(c){a(c),b.push(c)}),this.removeAllRanges(),c&&b.length==1?this.addRange(b[0],"backward"):this.setRanges(b)},X.containsNode=function(a,b){return this.eachRange(function(c){return c.containsNode(a,b)},!0)},X.toHtml=function(){return this.callMethodOnEachRange("toHtml").join("")},X.getName=function(){return"WrappedSelection"},X.inspect=function(){return db(this)},X.detach=function(){V(this.win,"delete"),T(this)},S.detachAll=function(){V(null,"deleteAll")},S.inspect=db,S.isDirectionBackward=q,a.Selection=S,a.selectionPrototype=X,a.addCreateMissingNativeApiListener(function(a){typeof a.getSelection=="undefined"&&(a.getSelection=function(){return W(a)}),a=null})})
/**
 * CSS Class Applier module for Rangy.
 * Adds, removes and toggles CSS classes on Ranges and Selections
 *
 * Part of Rangy, a cross-browser JavaScript range and selection library
 * http://code.google.com/p/rangy/
 *
 * Depends on Rangy core.
 *
 * Copyright 2013, Tim Down
 * Licensed under the MIT license.
 * Version: 1.3alpha.751
 * Build date: 25 January 2013
 */
rangy.createModule("CssClassApplier",function(a,b){function f(a){return a.replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function g(a,b){return a.className&&(new RegExp("(?:^|\\s)"+b+"(?:\\s|$)")).test(a.className)}function h(a,b){a.className?g(a,b)||(a.className+=" "+b):a.className=b}function j(a){return a.split(/\s+/).sort().join(" ")}function k(a){return j(a.className)}function l(a,b){return k(a)==k(b)}function m(a,b){return a.compareBoundaryPoints(b.START_TO_START,b)}function n(a,b,c,d,e){var f=a.node,g=a.offset,h=f,i=g;f==d&&g>e&&i++,f==b&&(g==c||g==c+1)&&(h=d,i+=e-c),f==b&&g>c+1&&i--,a.node=h,a.offset=i}function o(a,b,d,e){d==-1&&(d=b.childNodes.length);var f=a.parentNode,g=c.getNodeIndex(a);for(var h=0,i;i=e[h++];)n(i,f,g,b,d);b.childNodes.length==d?b.appendChild(a):b.insertBefore(a,b.childNodes[d])}function p(a,b,c,d,e){var f,g=[];while(f=a.firstChild)o(f,b,c++,e),g.push(f);return d&&a.parentNode.removeChild(a),g}function q(a,b){return p(a,a.parentNode,c.getNodeIndex(a),!0,b)}function r(a,b){var c=a.cloneRange();c.selectNodeContents(b);var d=c.intersection(a),e=d?d.toString():"";return c.detach(),e!=""}function s(a){var b=a.getNodes([3]),c=0,d;while((d=b[c])&&!r(a,d))++c;var e=b.length-1;while((d=b[e])&&!r(a,d))--e;return b.slice(c,e+1)}function t(a,b){if(a.attributes.length!=b.attributes.length)return!1;for(var c=0,d=a.attributes.length,e,f,g;c<d;++c){e=a.attributes[c],g=e.name;if(g!="class"){f=b.attributes.getNamedItem(g);if(e.specified!=f.specified)return!1;if(e.specified&&e.nodeValue!==f.nodeValue)return!1}}return!0}function u(a,b){for(var d=0,e=a.attributes.length,f;d<e;++d){f=a.attributes[d].name;if((!b||!c.arrayContains(b,f))&&a.attributes[d].specified&&f!="class")return!0}return!1}function v(a,b){var c;for(var d in b)if(b.hasOwnProperty(d)){c=b[d];if(typeof c=="object"){if(!v(a[d],c))return!1}else if(a[d]!==c)return!1}return!0}function y(a){var b;return a&&a.nodeType==1&&((b=a.parentNode)&&b.nodeType==9&&b.designMode=="on"||x(a)&&!x(a.parentNode))}function z(a){return(x(a)||a.nodeType!=1&&x(a.parentNode))&&!y(a)}function B(a){return a&&a.nodeType==1&&!A.test(w(a,"display"))}function D(a){if(a.data.length==0)return!0;if(C.test(a.data))return!1;var b=w(a.parentNode,"whiteSpace");switch(b){case"pre":case"pre-wrap":case"-moz-pre-wrap":return!1;case"pre-line":if(/[\r\n]/.test(a.data))return!1}return B(a.previousSibling)||B(a.nextSibling)}function E(a){var b=[],c,e;for(c=0;e=a[c++];)b.push(new d(e.startContainer,e.startOffset),new d(e.endContainer,e.endOffset));return b}function F(a,b){for(var c=0,d,e,f,g=a.length;c<g;++c)d=a[c],e=b[c*2],f=b[c*2+1],d.setStartAndEnd(e.node,e.offset,f.node,f.offset)}function G(a,b){return c.isCharacterDataNode(a)?b==0?!!a.previousSibling:b==a.length?!!a.nextSibling:!0:b>0&&b<a.childNodes.length}function H(a,d,e,f){var g,h,i=e==0;if(c.isAncestorOf(d,a))return a;if(c.isCharacterDataNode(d)){var j=c.getNodeIndex(d);if(e==0)e=j;else{if(e!=d.length)throw b.createError("splitNodeAt() should not be called with offset in the middle of a data node ("+e+" in "+d.data);e=j+1}d=d.parentNode}if(G(d,e)){g=d.cloneNode(!1),h=d.parentNode,g.id&&g.removeAttribute("id");var k,l=0;while(k=d.childNodes[e])o(k,g,l++,f);return o(g,h,c.getNodeIndex(d)+1,f),d==a?g:H(a,h,c.getNodeIndex(g),f)}if(a!=d){g=d.parentNode;var m=c.getNodeIndex(d);return i||m++,H(a,g,m,f)}return a}function I(a,b){return a.tagName==b.tagName&&l(a,b)&&t(a,b)&&w(a,"display")=="inline"&&w(b,"display")=="inline"}function J(a){var b=a?"nextSibling":"previousSibling";return function(c,d){var e=c.parentNode,f=c[b];if(f){if(f&&f.nodeType==3)return f}else if(d){f=e[b];if(f&&f.nodeType==1&&I(e,f))return f[a?"firstChild":"lastChild"]}return null}}function M(a){this.isElementMerge=a.nodeType==1,this.textNodes=[];var b=this.isElementMerge?a.lastChild:a;b&&(this.textNodes[0]=b)}function P(a,b,c){this.cssClass=a;var d,e,g,h,i=null;if(typeof b=="object"&&b!==null){c=b.tagNames,i=b.elementProperties;for(e=0;h=N[e++];)b.hasOwnProperty(h)&&(this[h]=b[h]);d=b.normalize}else d=b;this.normalize=typeof d=="undefined"?!0:d,this.attrExceptions=[];var j=document.createElement(this.elementTagName);this.elementProperties=this.copyPropertiesToElement(i,j,!0),this.elementSortedClassName=this.elementProperties.hasOwnProperty("className")?this.elementProperties.className:a,this.applyToAnyTagName=!1;var k=typeof c;if(k=="string")c=="*"?this.applyToAnyTagName=!0:this.tagNames=f(c.toLowerCase()).split(/\s*,\s*/);else if(k=="object"&&typeof c.length=="number"){this.tagNames=[];for(e=0,g=c.length;e<g;++e)c[e]=="*"?this.applyToAnyTagName=!0:this.tagNames.push(c[e].toLowerCase())}else this.tagNames=[this.elementTagName]}function Q(a,b,c){return new P(a,b,c)}a.requireModules(["WrappedSelection","WrappedRange"]);var c=a.dom,d=c.DomPosition,e="span",i=function(){function a(a,b,c){return b&&c?" ":""}return function(b,c){b.className&&(b.className=b.className.replace(new RegExp("(^|\\s)"+c+"(\\s|$)"),a))}}(),w=c.getComputedStyleProperty,x;(function(){var a=document.createElement("div");typeof a.isContentEditable=="boolean"?x=function(a){return a&&a.nodeType==1&&a.isContentEditable}:x=function(a){return!a||a.nodeType!=1||a.contentEditable=="false"?!1:a.contentEditable=="true"||x(a.parentNode)}})();var A=/^inline(-block|-table)?$/i,C=/[^\r\n\t\f \u200B]/,K=J(!1),L=J(!0);M.prototype={doMerge:function(a){var b=this.textNodes,c=b[0];if(b.length>1){var d=[],e=0,f,g;for(var h=0,i=b.length,j,k;h<i;++h){f=b[h],g=f.parentNode;if(h>0){g.removeChild(f),g.hasChildNodes()||g.parentNode.removeChild(g);if(a)for(j=0;k=a[j++];)k.node==f&&(k.node=c,k.offset+=e)}d[h]=f.data,e+=f.data.length}c.data=d.join("")}return c.data},getLength:function(){var a=this.textNodes.length,b=0;while(a--)b+=this.textNodes[a].length;return b},toString:function(){var a=[];for(var b=0,c=this.textNodes.length;b<c;++b)a[b]="'"+this.textNodes[b].data+"'";return"[Merge("+a.join(",")+")]"}};var N=["elementTagName","ignoreWhiteSpace","applyToEditableOnly","useExistingElements","removeEmptyElements"],O={};P.prototype={elementTagName:e,elementProperties:{},ignoreWhiteSpace:!0,applyToEditableOnly:!1,useExistingElements:!0,removeEmptyElements:!0,copyPropertiesToElement:function(a,b,c){var d,e,f={},g,i,k,l;for(var m in a)if(a.hasOwnProperty(m)){i=a[m],k=b[m];if(m=="className")h(b,i),h(b,this.cssClass),b[m]=j(b[m]),c&&(f[m]=b[m]);else if(m=="style"){e=k,c&&(f[m]=g={});for(d in a[m])e[d]=i[d],c&&(g[d]=e[d]);this.attrExceptions.push(m)}else b[m]=i,c&&(f[m]=b[m],l=O.hasOwnProperty(m)?O[m]:m,this.attrExceptions.push(l))}return c?f:""},hasClass:function(a){return a.nodeType==1&&c.arrayContains(this.tagNames,a.tagName.toLowerCase())&&g(a,this.cssClass)},getSelfOrAncestorWithClass:function(a){while(a){if(this.hasClass(a))return a;a=a.parentNode}return null},isModifiable:function(a){return!this.applyToEditableOnly||z(a)},isIgnorableWhiteSpaceNode:function(a){return this.ignoreWhiteSpace&&a&&a.nodeType==3&&D(a)},postApply:function(a,b,c,d){var e=a[0],f=a[a.length-1],g=[],h,i=e,j=f,k=0,l=f.length,m,n;for(var o=0,p=a.length;o<p;++o)m=a[o],n=K(m,!d),n?(h||(h=new M(n),g.push(h)),h.textNodes.push(m),m===e&&(i=h.textNodes[0],k=i.length),m===f&&(j=h.textNodes[0],l=h.getLength())):h=null;var q=L(f,!d);q&&(h||(h=new M(f),g.push(h)),h.textNodes.push(q));if(g.length){for(o=0,p=g.length;o<p;++o)g[o].doMerge(c);b.setStartAndEnd(i,k,j,l)}},createContainer:function(a){var b=a.createElement(this.elementTagName);return this.copyPropertiesToElement(this.elementProperties,b,!1),h(b,this.cssClass),b},applyToTextNode:function(a,b){var d=a.parentNode;if(d.childNodes.length==1&&this.useExistingElements&&c.arrayContains(this.tagNames,d.tagName.toLowerCase())&&v(d,this.elementProperties))h(d,this.cssClass);else{var e=this.createContainer(c.getDocument(a));a.parentNode.insertBefore(e,a),e.appendChild(a)}},isRemovable:function(a){return a.tagName.toLowerCase()==this.elementTagName&&k(a)==this.elementSortedClassName&&v(a,this.elementProperties)&&!u(a,this.attrExceptions)&&this.isModifiable(a)},isEmptyContainer:function(a){var b=a.childNodes.length;return a.nodeType==1&&this.isRemovable(a)&&(b==0||b==1&&this.isEmptyContainer(a.firstChild))},removeEmptyContainers:function(a){var b=this,c=a.getNodes([1],function(a){return b.isEmptyContainer(a)});for(var d=0,e;e=c[d++];)e.parentNode.removeChild(e)},undoToTextNode:function(a,b,c,d){if(!b.containsNode(c)){var e=b.cloneRange();e.selectNode(c),e.isPointInRange(b.endContainer,b.endOffset)&&(H(c,b.endContainer,b.endOffset,d),b.setEndAfter(c)),e.isPointInRange(b.startContainer,b.startOffset)&&(c=H(c,b.startContainer,b.startOffset,d))}this.isRemovable(c)?q(c,d):i(c,this.cssClass)},applyToRange:function(a,b){b=b||[];var c=E(b||[]);a.splitBoundariesPreservingPositions(c),this.removeEmptyElements&&this.removeEmptyContainers(a);var d=s(a);if(d.length){for(var e=0,f;f=d[e++];)!this.isIgnorableWhiteSpaceNode(f)&&!this.getSelfOrAncestorWithClass(f)&&this.isModifiable(f)&&this.applyToTextNode(f,c);f=d[d.length-1],a.setStartAndEnd(d[0],0,f,f.length),this.normalize&&this.postApply(d,a,c,!1),F(b,c)}},applyToRanges:function(a){var b=a.length;while(b--)this.applyToRange(a[b],a);return a},applyToSelection:function(b){var c=a.getSelection(b);c.setRanges(this.applyToRanges(c.getAllRanges()))},undoToRange:function(a,b){b=b||[];var c=E(b);a.splitBoundariesPreservingPositions(c),this.removeEmptyElements&&this.removeEmptyContainers(a,c);var d=s(a),e,f,g=d[d.length-1];if(d.length){for(var h=0,i=d.length;h<i;++h)e=d[h],f=this.getSelfOrAncestorWithClass(e),f&&this.isModifiable(e)&&this.undoToTextNode(e,a,f,c),a.setStartAndEnd(d[0],0,g,g.length);this.normalize&&this.postApply(d,a,c,!0),F(b,c)}},undoToRanges:function(a){var b=a.length;while(b--)this.undoToRange(a[b],a);return a},undoToSelection:function(b){var c=a.getSelection(b),d=a.getSelection(b).getAllRanges();this.undoToRanges(d),c.setRanges(d)},getTextSelectedByRange:function(a,b){var c=b.cloneRange();c.selectNodeContents(a);var d=c.intersection(b),e=d?d.toString():"";return c.detach(),e},isAppliedToRange:function(a){if(a.collapsed)return!!this.getSelfOrAncestorWithClass(a.commonAncestorContainer);var b=a.getNodes([3]);for(var c=0,d;d=b[c++];)if(!this.isIgnorableWhiteSpaceNode(d)&&r(a,d)&&this.isModifiable(d)&&!this.getSelfOrAncestorWithClass(d))return!1;return!0},isAppliedToRanges:function(a){var b=a.length;while(b--)if(!this.isAppliedToRange(a[b]))return!1;return!0},isAppliedToSelection:function(b){var c=a.getSelection(b);return this.isAppliedToRanges(c.getAllRanges())},toggleRange:function(a){this.isAppliedToRange(a)?this.undoToRange(a):this.applyToRange(a)},toggleRanges:function(a){this.isAppliedToRanges(a)?this.undoToRanges(a):this.applyToRanges(a)},toggleSelection:function(a){this.isAppliedToSelection(a)?this.undoToSelection(a):this.applyToSelection(a)},detach:function(){}},P.util={hasClass:g,addClass:h,removeClass:i,hasSameClasses:l,replaceWithOwnChildren:q,elementsHaveSameNonClassAttributes:t,elementHasNonClassAttributes:u,splitNodeAt:H,isEditableElement:x,isEditingHost:y,isEditable:z},a.CssClassApplier=P,a.createCssClassApplier=Q})
/**
 * Text range module for Rangy.
 * Text-based manipulation and searching of ranges and selections.
 *
 * Features
 *
 * - Ability to move range boundaries by character or word offsets
 * - Customizable word tokenizer
 * - Ignores text nodes inside <script> or <style> elements or those hidden by CSS display and visibility properties
 * - Range findText method to search for text or regex within the page or within a range. Flags for whole words and case
 *   sensitivity
 * - Selection and range save/restore as text offsets within a node
 * - Methods to return visible text within a range or selection
 * - innerText method for elements
 *
 * References
 *
 * https://www.w3.org/Bugs/Public/show_bug.cgi?id=13145
 * http://aryeh.name/spec/innertext/innertext.html
 * http://dvcs.w3.org/hg/editing/raw-file/tip/editing.html
 *
 * Part of Rangy, a cross-browser JavaScript range and selection library
 * http://code.google.com/p/rangy/
 *
 * Depends on Rangy core.
 *
 * Copyright 2013, Tim Down
 * Licensed under the MIT license.
 * Version: 1.3alpha.751
 * Build date: 25 January 2013
 */
rangy.createModule("TextRange",function(a,b){function s(a,b){function f(b,c,d){var f=a.slice(b,c),g={isWord:d,chars:f,toString:function(){return f.join("")}};for(var h=0,i=f.length;h<i;++h)f[h].token=g;e.push(g)}var c=a.join(""),d,e=[],g=0,h,i;while(d=b.wordRegex.exec(c)){h=d.index,i=h+d[0].length,h>g&&f(g,h,!1);if(b.includeTrailingSpace)while(l.test(a[i]))++i;f(h,i,!0),g=i}return g<a.length&&f(g,a.length,!1),e}function w(a,b){if(!a)return b;var c={};return h(c,b),h(c,a),c}function x(a){var b,c;return a?(b=a.language||n,c={},h(c,v[b]||v[n]),h(c,a),c):v[n]}function y(a){return w(a,t)}function z(a){return w(a,u)}function H(a,b){var c=E(a,"display",b),d=a.tagName.toLowerCase();return c=="block"&&F&&G.hasOwnProperty(d)?G[d]:c}function I(a){var b=O(a);for(var c=0,d=b.length;c<d;++c)if(b[c].nodeType==1&&H(b[c])=="none")return!0;return!1}function J(a){var b;return a.nodeType==3&&(b=a.parentNode)&&E(b,"visibility")=="hidden"}function K(a){return a&&(a.nodeType==1&&!/^(inline(-block|-table)?|none)$/.test(H(a))||a.nodeType==9||a.nodeType==11)}function L(a){var b=a.lastChild;return b?L(b):a}function M(a){return f.isCharacterDataNode(a)||!/^(area|base|basefont|br|col|frame|hr|img|input|isindex|link|meta|param)$/i.test(a.nodeName)}function N(a){var b=[];while(a.parentNode)b.unshift(a.parentNode),a=a.parentNode;return b}function O(a){return N(a).concat([a])}function P(a){var b;return typeof (b=a.namespaceURI)==c||b===null||b=="http://www.w3.org/1999/xhtml"}function Q(a,b){if(!a||a.nodeType!=1||!P(a))return!1;switch(typeof b){case"string":return a.tagName.toLowerCase()==b.toLowerCase();case"object":return(new RegExp("^("+b.join("|S")+")$","i")).test(a.tagName);default:return!0}}function R(a){while(a&&!a.nextSibling)a=a.parentNode;return a?a.nextSibling:null}function S(a,b){return!b&&a.hasChildNodes()?a.firstChild:R(a)}function T(a){var b=a.previousSibling;if(b){a=b;while(a.hasChildNodes())a=a.lastChild;return a}var c=a.parentNode;return c&&c.nodeType==1?c:null}function U(a){if(!a||a.nodeType!=3)return!1;var b=a.data;if(b==="")return!0;var c=a.parentNode;if(!c||c.nodeType!=1)return!1;var d=E(a.parentNode,"whiteSpace");return/^[\t\n\r ]+$/.test(b)&&/^(normal|nowrap)$/.test(d)||/^[\t\r ]+$/.test(b)&&d=="pre-line"}function V(a){if(a.data==="")return!0;if(!U(a))return!1;var b=a.parentNode;return b?I(a)?!0:!1:!0}function W(a){var b=a.nodeType;return b==7||b==8||I(a)||/^(script|style)$/i.test(a.nodeName)||J(a)||V(a)}function X(a,b){var c=a.nodeType;return c==7||c==8||c==1&&H(a,b)=="none"}function Y(){this.store={}}function _(a,b,c){return function(d){var e=this.cache;if(e.hasOwnProperty(a))return Z++,e[a];$++;var f=b.call(this,c?this[c]:this,d);return e[a]=f,f}}function ab(a,b){this.node=a,this.session=b,this.cache=new Y,this.positions=new Y}function jb(a,b){this.offset=b,this.nodeWrapper=a,this.node=a.node,this.session=a.session,this.cache=new Y}function kb(){return"[Position("+f.inspectNode(this.node)+":"+this.offset+")]"}function ob(){return qb(),mb=new nb}function pb(){return mb||ob()}function qb(){mb&&mb.detach(),mb=null}function rb(a,c,d,e){function h(){var a=null,b=null;return c?(b=f,g||(f=f.previousVisible(),g=!f||d&&f.equals(d))):g||(b=f=f.nextVisible(),g=!f||d&&f.equals(d)),g&&(f=null),b}d&&(c?W(d.node)&&(d=a.previousVisible()):W(d.node)&&(d=d.nextVisible()));var f=a,g=!1,i,j=!1;return{next:function(){if(j)return j=!1,i;var a,b;while(a=h()){b=a.getCharacter(e);if(b)return i=a,a}return null},rewind:function(){if(!i)throw b.createError("createCharacterIterator: cannot rewind. Only one position can be rewound.");j=!0},dispose:function(){a=d=null}}}function tb(a,b,c){function g(a){var b,c,f=[],g=a?d:e,h=!1,i=!1;while(b=g.next()){c=b.character;if(k.test(c))i&&(i=!1,h=!0);else{if(h){g.rewind();break}i=!0}f.push(b)}return f}function n(a){var b=["["+a.length+"]"];for(var c=0;c<a.length;++c)b.push("(word: "+a[c]+", is word: "+a[c].isWord+")");return b}var d=rb(a,!1,null,b),e=rb(a,!0,null,b),f=c.tokenizer,h=g(!0),i=g(!1).reverse(),j=f(i.concat(h),c),l=h.length?j.slice(sb(j,h[0].token)):[],m=i.length?j.slice(0,sb(j,i.pop().token)+1):[];return{nextEndToken:function(){var a,b;while(l.length==1&&!(a=l[0]).isWord&&(b=g(!0)).length>0)l=f(a.chars.concat(b),c);return l.shift()},previousStartToken:function(){var a,b;while(m.length==1&&!(a=m[0]).isWord&&(b=g(!1)).length>0)m=f(b.reverse().concat(a.chars),c);return m.pop()},dispose:function(){d.dispose(),e.dispose(),l=m=null}}}function ub(a,b,c,f,g){var h=0,i,j=a,k,l,m=Math.abs(c),n;if(c!==0){var o=c<0;switch(b){case d:k=rb(a,o,null,f);while((i=k.next())&&h<m)++h,j=i;l=i,k.dispose();break;case e:var p=tb(a,f,g),q=o?p.previousStartToken:p.nextEndToken;while((n=q())&&h<m)n.isWord&&(++h,j=o?n.chars[0]:n.chars[n.chars.length-1]);break;default:throw new Error("movePositionBy: unit '"+b+"' not implemented")}o?(j=j.previousVisible(),h=-h):j&&j.isLeadingSpace&&(b==e&&(k=rb(a,!1,null,f),l=k.next(),k.dispose()),l&&(j=l.previousVisible()))}return{position:j,unitsMoved:h}}function vb(a,b,c,d){var e=a.getRangeBoundaryPosition(b,!0),f=a.getRangeBoundaryPosition(b,!1),g=d?f:e,h=d?e:f;return rb(g,!!d,h,c)}function wb(a,b,c){var d=[],e=vb(a,b,c),f;while(f=e.next())d.push(f);return e.dispose(),d}function xb(b,c,d){var e=a.createRange(b.node);e.setStartAndEnd(b.node,b.offset,c.node,c.offset);var f=!e.expand("word",d);return e.detach(),f}function yb(a,b,c,d,e){function r(a,b){var c=i[a].previousVisible(),d=i[b-1],f=!e.wholeWordsOnly||xb(c,d,e.wordOptions);return{startPos:c,endPos:d,valid:f}}var f=o(e.direction),g=rb(a,f,a.session.getRangeBoundaryPosition(d,f),e),h="",i=[],j,k,l,m,n,p,q=null;while(j=g.next()){k=j.character,!c&&!e.caseSensitive&&(k=k.toLowerCase()),f?(i.unshift(j),h=k+h):(i.push(j),h+=k);if(c){n=b.exec(h);if(n)if(p){l=n.index,m=l+n[0].length;if(!f&&m<h.length||f&&l>0){q=r(l,m);break}}else p=!0}else if((l=h.indexOf(b))!=-1){q=r(l,l+b.length);break}}return p&&(q=r(l,m)),g.dispose(),q}function zb(a){return function(){var b=!!mb,c=pb(),d=[c].concat(g.toArray(arguments)),e=a.apply(this,d);return b||qb(),e}}function Ab(a,b){return zb(function(c,e,f,g){typeof f=="undefined"&&(f=e,e=d),g=w(g,B);var h=y(g.characterOptions),i=x(g.wordOptions),j=a;b&&(j=f>=0,this.collapse(!j));var k=ub(c.getRangeBoundaryPosition(this,j),e,f,h,i),l=k.position;return this[j?"setStart":"setEnd"](l.node,l.offset),k.unitsMoved})}function Bb(a){return zb(function(b,c){c=y(c);var d,e=vb(b,this,c,!a),f=0;while((d=e.next())&&k.test(d.character))++f;e.dispose();var g=f>0;return g&&this[a?"moveStart":"moveEnd"]("character",a?f:-f,{characterOptions:c}),g})}function Cb(a){return zb(function(b,c){var d=!1;return this.changeEachRange(function(b){d=b[a](c)||d}),d})}a.requireModules(["WrappedSelection"]);var c="undefined",d="character",e="word",f=a.dom,g=a.util,h=g.extend,i=/^[ \t\f\r\n]+$/,j=/^[ \t\f\r]+$/,k=/^[\t-\r \u0085\u00A0\u1680\u180E\u2000-\u200B\u2028\u2029\u202F\u205F\u3000]+$/,l=/^[\t \u00A0\u1680\u180E\u2000-\u200B\u202F\u205F\u3000]+$/,m=/^[\n-\r\u0085\u2028\u2029]$/,n="en",o=a.Selection.isDirectionBackward,p=!1,q=!1,r=!0;(function(){var b=document.createElement("div");b.contentEditable="true",b.innerHTML="<p>1 </p><p></p>";var c=document.body,d=b.firstChild,e=a.getSelection();c.appendChild(b),e.collapse(d.lastChild,2),e.setStart(d.firstChild,0),p=(""+e).length==1,b.innerHTML="1 <br>",e.collapse(b,2),e.setStart(b.firstChild,0),q=(""+e).length==1,c.removeChild(b),e.removeAllRanges()})();var t={includeBlockContentTrailingSpace:!0,includeSpaceBeforeBr:!0,includePreLineTrailingSpace:!0},u={includeBlockContentTrailingSpace:!r,includeSpaceBeforeBr:!q,includePreLineTrailingSpace:!0},v={en:{wordRegex:/[a-z0-9]+('[a-z0-9]+)*/gi,includeTrailingSpace:!1,tokenizer:s}},A={caseSensitive:!1,withinRange:null,wholeWordsOnly:!1,wrap:!1,direction:"forward",wordOptions:null,characterOptions:null},B={wordOptions:null,characterOptions:null},C={wordOptions:null,characterOptions:null,trim:!1,trimStart:!0,trimEnd:!0},D={wordOptions:null,characterOptions:null,direction:"forward"},E=f.getComputedStyleProperty,F;(function(){var a=document.createElement("table");document.body.appendChild(a),F=E(a,"display")=="block",document.body.removeChild(a)})(),a.features.tableCssDisplayBlock=F;var G={table:"table",caption:"table-caption",colgroup:"table-column-group",col:"table-column",thead:"table-header-group",tbody:"table-row-group",tfoot:"table-footer-group",tr:"table-row",td:"table-cell",th:"table-cell"};Y.prototype={get:function(a){return this.store.hasOwnProperty(a)?this.store[a]:null},set:function(a,b){return this.store[a]=b}};var Z=0,$=0;a.report=function(){console.log("Cached: "+Z+", uncached: "+$)};var bb={getPosition:function(a){var b=this.positions;return b.get(a)||b.set(a,new jb(this,a))},toString:function(){return"[NodeWrapper("+f.inspectNode(this.node)+")]"}};ab.prototype=bb;var cb="EMPTY",db="NON_SPACE",eb="UNCOLLAPSIBLE_SPACE",fb="COLLAPSIBLE_SPACE",gb="TRAILING_SPACE_IN_BLOCK",hb="TRAILING_SPACE_BEFORE_BR",ib="PRE_LINE_TRAILING_SPACE_BEFORE_LINE_BREAK";h(bb,{isCharacterDataNode:_("isCharacterDataNode",f.isCharacterDataNode,"node"),getNodeIndex:_("nodeIndex",f.getNodeIndex,"node"),getLength:_("nodeLength",f.getNodeLength,"node"),containsPositions:_("containsPositions",M,"node"),isWhitespace:_("isWhitespace",U,"node"),isCollapsedWhitespace:_("isCollapsedWhitespace",V,"node"),getComputedDisplay:_("computedDisplay",H,"node"),isCollapsed:_("collapsed",W,"node"),isIgnored:_("ignored",X,"node"),next:_("nextPos",S,"node"),previous:_("previous",T,"node"),getTextNodeInfo:_("textNodeInfo",function(a){var b=null,c=!1,d=E(a.parentNode,"whiteSpace"),e=d=="pre-line";if(e)b=j,c=!0;else if(d=="normal"||d=="nowrap")b=i,c=!0;return{node:a,text:a.data,spaceRegex:b,collapseSpaces:c,preLine:e}},"node"),hasInnerText:_("hasInnerText",function(a,b){var c=this.session,d=c.getPosition(a.parentNode,this.getNodeIndex()+1),e=c.getPosition(a,0),f=b?d:e,g=b?e:d;while(f!==g){f.prepopulateChar();if(f.isDefinitelyNonEmpty())return!0;f=b?f.previousVisible():f.nextVisible()}return!1},"node"),getTrailingSpace:_("trailingSpace",function(a){if(a.tagName.toLowerCase()=="br")return"";switch(this.getComputedDisplay()){case"inline":var b=a.lastChild;while(b){if(!X(b))return b.nodeType==1?this.session.getNodeWrapper(b).getTrailingSpace():"";b=b.previousSibling}break;case"inline-block":case"inline-table":case"none":case"table-column":case"table-column-group":break;case"table-cell":return"	";default:return this.hasInnerText(!0)?"\n":""}return""},"node"),getLeadingSpace:_("leadingSpace",function(a){switch(this.getComputedDisplay()){case"inline":case"inline-block":case"inline-table":case"none":case"table-column":case"table-column-group":case"table-cell":break;default:return this.hasInnerText(!1)?"\n":""}return""},"node")});var lb={character:"",characterType:cb,isBr:!1,prepopulateChar:function(){var a=this;if(!a.prepopulatedChar){var b=a.node,c=a.offset,d="",e=cb,f=!1;if(c>0)if(b.nodeType==3){var g=b.data,h=g.charAt(c-1),i=a.nodeWrapper.getTextNodeInfo(),j=i.spaceRegex;i.collapseSpaces?j.test(h)?c>1&&j.test(g.charAt(c-2))||(i.preLine&&g.charAt(c)==="\n"?(d=" ",e=ib):(d=" ",e=fb)):(d=h,e=db,f=!0):(d=h,e=eb,f=!0)}else{var k=b.childNodes[c-1];k&&k.nodeType==1&&!W(k)&&(k.tagName.toLowerCase()=="br"?(d="\n",a.isBr=!0,e=fb,f=!1):a.checkForTrailingSpace=!0);if(!d){var l=b.childNodes[c];l&&l.nodeType==1&&!W(l)&&(a.checkForLeadingSpace=!0)}}a.prepopulatedChar=!0,a.character=d,a.characterType=e,a.isCharInvariant=f}},isDefinitelyNonEmpty:function(){var a=this.characterType;return a==db||a==eb},resolveLeadingAndTrailingSpaces:function(){this.prepopulatedChar||this.prepopulateChar();if(this.checkForTrailingSpace){var a=this.session.getNodeWrapper(this.node.childNodes[this.offset-1]).getTrailingSpace();a&&(this.isTrailingSpace=!0,this.character=a,this.characterType=fb),this.checkForTrailingSpace=!1}if(this.checkForLeadingSpace){var b=this.session.getNodeWrapper(this.node.childNodes[this.offset]).getLeadingSpace();b&&(this.isLeadingSpace=!0,this.character=b,this.characterType=fb),this.checkForLeadingSpace=!1}},getPrecedingUncollapsedPosition:function(a){var b=this,c;while(b=b.previousVisible()){c=b.getCharacter(a);if(c!=="")return b}return null},getCharacter:function(a){function j(){return h||(g=i.getPrecedingUncollapsedPosition(a),h=!0),g}this.resolveLeadingAndTrailingSpaces();if(this.isCharInvariant)return this.character;var b=["character",a.includeSpaceBeforeBr,a.includeBlockContentTrailingSpace,a.includePreLineTrailingSpace].join("_"),c=this.cache.get(b);if(c!==null)return c;var d="",e=this.characterType==fb,f,g,h=!1,i=this;if(e){if(this.character!=" "||!!j()&&!g.isTrailingSpace&&g.character!="\n")if(this.character=="\n"&&this.isLeadingSpace)j()&&g.character!="\n"&&(d="\n");else{f=this.nextUncollapsed();if(f){f.isBr?this.type=hb:f.isTrailingSpace&&f.character=="\n"&&(this.type=gb);if(f.character==="\n"){if(this.type!=hb||!!a.includeSpaceBeforeBr)if(this.type!=gb||!f.isTrailingSpace||!!a.includeBlockContentTrailingSpace)if(this.type!=ib||f.type!=db||!!a.includePreLineTrailingSpace)this.character==="\n"?f.isTrailingSpace?this.isTrailingSpace||!this.isBr:d="\n":this.character===" "&&(d=" ")}else d=this.character}}}else this.character!=="\n"||!!(f=this.nextUncollapsed())&&!f.isTrailingSpace;return this.cache.set(b,d),d},equals:function(a){return!!a&&this.node===a.node&&this.offset===a.offset},inspect:kb,toString:function(){return this.character}};jb.prototype=lb,h(lb,{next:_("nextPos",function(a){var b=a.nodeWrapper,c=a.node,d=a.offset,e=b.session;if(!c)return null;var f,g,h;return d==b.getLength()?(f=c.parentNode,g=f?b.getNodeIndex()+1:0):b.isCharacterDataNode()?(f=c,g=d+1):(h=c.childNodes[d],e.getNodeWrapper(h).containsPositions()?(f=h,g=0):(f=c,g=d+1)),f?e.getPosition(f,g):null}),previous:_("previous",function(a){var b=a.nodeWrapper,c=a.node,d=a.offset,e=b.session,g,h,i;return d==0?(g=c.parentNode,h=g?b.getNodeIndex():0):b.isCharacterDataNode()?(g=c,h=d-1):(i=c.childNodes[d-1],e.getNodeWrapper(i).containsPositions()?(g=i,h=f.getNodeLength(i)):(g=c,h=d-1)),g?e.getPosition(g,h):null}),nextVisible:_("nextVisible",function(a){var b=a.next();if(!b)return null;var c=b.nodeWrapper,d=b.node,e=b;return c.isCollapsed()&&(e=c.session.getPosition(d.parentNode,c.getNodeIndex()+1)),e}),nextUncollapsed:_("nextUncollapsed",function(a){var b=a;while(b=b.nextVisible()){b.resolveLeadingAndTrailingSpaces();if(b.character!=="")return b}return null}),previousVisible:_("previousVisible",function(a){var b=a.previous();if(!b)return null;var c=b.nodeWrapper,d=b.node,e=b;return c.isCollapsed()&&(e=c.session.getPosition(d.parentNode,c.getNodeIndex())),e})});var mb=null,nb=function(){function a(a){var b=new Y;return{get:function(c){var d=b.get(c[a]);if(d)for(var e=0,f;f=d[e++];)if(f.node===c)return f;return null},set:function(c){var d=c.node[a],e=b.get(d)||b.set(d,[]);e.push(c)}}}function c(){this.initCaches()}var b=g.isHostProperty(document.documentElement,"uniqueID");return c.prototype={initCaches:function(){this.elementCache=b?function(){var a=new Y;return{get:function(b){return a.get(b.uniqueID)},set:function(b){a.set(b.node.uniqueID,b)}}}():a("tagName"),this.textNodeCache=a("data"),this.otherNodeCache=a("nodeName")},getNodeWrapper:function(a){var b;switch(a.nodeType){case 1:b=this.elementCache;break;case 3:b=this.textNodeCache;break;default:b=this.otherNodeCache}var c=b.get(a);return c||(c=new ab(a,this),b.set(c)),c},getPosition:function(a,b){return this.getNodeWrapper(a).getPosition(b)},getRangeBoundaryPosition:function(a,b){var c=b?"start":"end";return this.getPosition(a[c+"Container"],a[c+"Offset"])},detach:function(){this.elementCache=this.textNodeCache=this.otherNodeCache=null}},c}();h(f,{nextNode:S,previousNode:T});var sb=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;c<d;++c)if(a[c]===b)return c;return-1};h(a.rangePrototype,{moveStart:Ab(!0,!1),moveEnd:Ab(!1,!1),move:Ab(!0,!0),trimStart:Bb(!0),trimEnd:Bb(!1),trim:zb(function(a,b){var c=this.trimStart(b),d=this.trimEnd(b);return c||d}),expand:zb(function(a,b,c){var f=!1;c=w(c,C);var g=y(c.characterOptions);b||(b=d);if(b==e){var h=x(c.wordOptions),i=a.getRangeBoundaryPosition(this,!0),j=a.getRangeBoundaryPosition(this,!1),k=tb(i,g,h),l=k.nextEndToken(),m=l.chars[0].previousVisible(),n,o;if(this.collapsed)n=l;else{var p=tb(j,g,h);n=p.previousStartToken()}return o=n.chars[n.chars.length-1],m.equals(i)||(this.setStart(m.node,m.offset),f=!0),o&&!o.equals(j)&&(this.setEnd(o.node,o.offset),f=!0),c.trim&&(c.trimStart&&(f=this.trimStart(g)||f),c.trimEnd&&(f=this.trimEnd(g)||f)),f}return this.moveEnd(d,1,c)}),text:zb(function(a,b){return this.collapsed?"":wb(a,this,y(b)).join("")}),selectCharacters:zb(function(a,b,c,d,e){var f={characterOptions:e};b||(b=this.getDocument().body),this.selectNodeContents(b),this.collapse(!0),this.moveStart("character",c,f),this.collapse(!0),this.moveEnd("character",d-c,f)}),toCharacterRange:zb(function(a,b,c){b||(b=this.getDocument().body);var d=b.parentNode,e=f.getNodeIndex(b),g=f.comparePoints(this.startContainer,this.endContainer,d,e)==-1,h=this.cloneRange(),i,j;return g?(h.setStartAndEnd(this.startContainer,this.startOffset,d,e),i=-h.text(c).length):(h.setStartAndEnd(d,e,this.startContainer,this.startOffset),i=h.text(c).length),j=i+this.text(c).length,{start:i,end:j}}),findText:zb(function(b,c,d){d=w(d,A),d.wholeWordsOnly&&(d.wordOptions=x(d.wordOptions),d.wordOptions.includeTrailingSpace=!1);var e=o(d.direction),f=d.withinRange;f||(f=a.createRange(),f.selectNodeContents(this.getDocument()));var g=c,h=!1;typeof g=="string"?d.caseSensitive||(g=g.toLowerCase()):h=!0;var i=b.getRangeBoundaryPosition(this,!e),j=f.comparePoint(i.node,i.offset);j===-1?i=b.getRangeBoundaryPosition(f,!0):j===1&&(i=b.getRangeBoundaryPosition(f,!1));var k=i,l=!1,m;for(;;){m=yb(k,g,h,f,d);if(m){if(m.valid)return this.setStartAndEnd(m.startPos.node,m.startPos.offset,m.endPos.node,m.endPos.offset),!0;k=e?m.startPos:m.endPos}else{if(!d.wrap||!!l)return!1;f=f.cloneRange(),k=b.getRangeBoundaryPosition(f,!e),f.setBoundary(i.node,i.offset,e),l=!0}}}),pasteHtml:function(a){this.deleteContents();if(a){var b=this.createContextualFragment(a),c=b.lastChild;this.insertNode(b),this.collapseAfter(c)}}}),h(a.selectionPrototype,{expand:zb(function(a,b,c){this.changeEachRange(function(a){a.expand(b,c)})}),move:zb(function(a,b,c,d){var e=0;if(this.focusNode){this.collapse(this.focusNode,this.focusOffset);var f=this.getRangeAt(0);d||(d={}),d.characterOptions=z(d.characterOptions),e=f.move(b,c,d),this.setSingleRange(f)}return e}),trimStart:Cb("trimStart"),trimEnd:Cb("trimEnd"),trim:Cb("trim"),selectCharacters:zb(function(b,c,d,e,f,g){var h=a.createRange(c);h.selectCharacters(c,d,e,g),this.setSingleRange(h,f)}),saveCharacterRanges:zb(function(a,b,c){var d=this.getAllRanges(),e=d.length,f=[],g=e==1&&this.isBackward();for(var h=0,i=d.length;h<i;++h)f[h]={characterRange:d[h].toCharacterRange(b,c),backward:g,characterOptions:c};return f}),restoreCharacterRanges:zb(function(b,c,d){this.removeAllRanges();for(var e=0,f=d.length,g,h,i;e<f;++e)h=d[e],i=h.characterRange,g=a.createRange(c),g.selectCharacters(c,i.start,i.end,h.characterOptions),this.addRange(g,h.backward)}),text:zb(function(a,b){var c=[];for(var d=0,e=this.rangeCount;d<e;++d)c[d]=this.getRangeAt(d).text(b);return c.join("")})}),a.innerText=function(b,c){var d=a.createRange(b);d.selectNodeContents(b);var e=d.text(c);return d.detach(),e},a.createWordIterator=function(a,b,c){var d=pb();c=w(c,D);var e=y(c.characterOptions),f=x(c.wordOptions),g=d.getPosition(a,b),h=tb(g,e,f),i=o(c.direction);return{next:function(){return i?h.previousStartToken():h.nextEndToken()},dispose:function(){h.dispose(),this.next=function(){}}}},a.noMutation=function(a){var b=pb();a(b),qb()},a.noMutation.createEntryPointFunction=zb,a.textRange={isBlockNode:K,isCollapsedWhitespaceNode:V,createPosition:zb(function(a,b,c){return a.getPosition(b,c)})}})
;//'
(function(){function h(a){throw a;}var i=void 0,j=!0,k=null,l=!1;function m(a){return function(){return this[a]}}function aa(a){return function(){return a}}var n=this;function p(a){return"string"==typeof a}Math.floor(2147483648*Math.random()).toString(36);function q(a){var b=t;function c(){}c.prototype=b.prototype;a.t=b.prototype;a.prototype=new c};var u,ba,ca,da;function ea(){return n.navigator?n.navigator.userAgent:k}da=ca=ba=u=l;var fa;if(fa=ea()){var ga=n.navigator;u=0==fa.indexOf("Opera");ba=!u&&-1!=fa.indexOf("MSIE");ca=!u&&-1!=fa.indexOf("WebKit");da=!u&&!ca&&"Gecko"==ga.product}var w=ba,ha=da,ia=ca,ja;
a:{var ka="",y;if(u&&n.opera)var la=n.opera.version,ka="function"==typeof la?la():la;else if(ha?y=/rv\:([^\);]+)(\)|;)/:w?y=/MSIE\s+([^\);]+)(\)|;)/:ia&&(y=/WebKit\/(\S+)/),y)var ma=y.exec(ea()),ka=ma?ma[1]:"";if(w){var na,oa=n.document;na=oa?oa.documentMode:i;if(na>parseFloat(ka)){ja=String(na);break a}}ja=ka}var pa=ja,qa={};
function ra(a){if(!qa[a]){for(var b=0,c=String(pa).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",r=d[f]||"",v=RegExp("(\\d*)(\\D*)","g"),J=RegExp("(\\d*)(\\D*)","g");do{var s=v.exec(g)||["","",""],x=J.exec(r)||["","",""];if(0==s[0].length&&0==x[0].length)break;b=((0==s[1].length?0:parseInt(s[1],10))<(0==x[1].length?0:parseInt(x[1],10))?-1:(0==s[1].length?0:parseInt(s[1],10))>
(0==x[1].length?0:parseInt(x[1],10))?1:0)||((0==s[2].length)<(0==x[2].length)?-1:(0==s[2].length)>(0==x[2].length)?1:0)||(s[2]<x[2]?-1:s[2]>x[2]?1:0)}while(0==b)}qa[a]=0<=b}}var sa={};function z(a){return sa[a]||(sa[a]=w&&!!document.documentMode&&document.documentMode>=a)};function A(a,b,c){this.a=a;this.b=b||1;this.d=c||1};var B=Array.prototype,ta=B.indexOf?function(a,b,c){return B.indexOf.call(a,b,c)}:function(a,b,c){c=c==k?0:0>c?Math.max(0,a.length+c):c;if(p(a))return!p(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=B.forEach?function(a,b,c){B.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ua=B.filter?function(a,b,c){return B.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?a.split(""):
a,r=0;r<d;r++)if(r in g){var v=g[r];b.call(c,v,r,a)&&(e[f++]=v)}return e};function va(a,b,c){if(a.reduce)return a.reduce(b,c);var d=c;C(a,function(c,f){d=b.call(i,d,c,f,a)});return d}var wa=B.some?function(a,b,c){return B.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return j;return l};function xa(a){return B.concat.apply(B,arguments)}function ya(a,b,c){return 2>=arguments.length?B.slice.call(a,b):B.slice.call(a,b,c)};!w||z(9);!ha&&!w||w&&z(9)||ha&&ra("1.9.1");w&&ra("9");function za(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Aa(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if(w&&!z(9)){if(9==a.nodeType)return-1;if(9==b.nodeType)return 1}if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?Ba(a,b):!c&&za(e,b)?-1*Ca(a,b):!d&&za(f,a)?Ca(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=9==a.nodeType?a:a.ownerDocument||
a.document;c=d.createRange();c.selectNode(a);c.collapse(j);d=d.createRange();d.selectNode(b);d.collapse(j);return c.compareBoundaryPoints(n.Range.START_TO_END,d)}function Ca(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return Ba(d,a)}function Ba(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1};var D=w&&!z(9),Da=w&&!z(8);function E(a,b,c,d){this.a=a;this.nodeName=c;this.nodeValue=d;this.nodeType=2;this.parentNode=this.ownerElement=b}function Ea(a,b){var c=Da&&"href"==b.nodeName?a.getAttribute(b.nodeName,2):b.nodeValue;return new E(b,a,b.nodeName,c)};function Fa(a){this.b=a;this.a=0}var Ga=RegExp("\\$?(?:(?![0-9-])[\\w-]+:)?(?![0-9-])[\\w-]+|\\/\\/|\\.\\.|::|\\d+(?:\\.\\d*)?|\\.\\d+|\"[^\"]*\"|'[^']*'|[!<>]=|\\s+|.","g"),Ha=/^\s/;function F(a,b){return a.b[a.a+(b||0)]}function G(a){return a.b[a.a++]};function H(a){var b=k,c=a.nodeType;1==c&&(b=a.textContent,b=b==i||b==k?a.innerText:b,b=b==i||b==k?"":b);if("string"!=typeof b)if(D&&"title"==a.nodeName.toLowerCase()&&1==c)b=a.text;else if(9==c||1==c)for(var a=9==c?a.documentElement:a.firstChild,c=0,d=[],b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),D&&"title"==a.nodeName.toLowerCase()&&(b+=a.text),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}else b=a.nodeValue;return""+b}
function I(a,b,c){if(b===k)return j;try{if(!a.getAttribute)return l}catch(d){return l}Da&&"class"==b&&(b="className");return c==k?!!a.getAttribute(b):a.getAttribute(b,2)==c}function Ia(a,b,c,d,e){return(D?Ja:Ka).call(k,a,b,p(c)?c:k,p(d)?d:k,e||new K)}
function Ja(a,b,c,d,e){if(a instanceof L||8==a.b||c&&a.b===k){var f=b.all;if(!f)return e;a=La(a);if("*"!=a&&(f=b.getElementsByTagName(a),!f))return e;if(c){for(var g=[],r=0;b=f[r++];)I(b,c,d)&&g.push(b);f=g}for(r=0;b=f[r++];)("*"!=a||"!"!=b.tagName)&&M(e,b);return e}Ma(a,b,c,d,e);return e}
function Ka(a,b,c,d,e){b.getElementsByName&&d&&"name"==c&&!w?(b=b.getElementsByName(d),C(b,function(b){a.a(b)&&M(e,b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),C(b,function(b){b.className==d&&a.a(b)&&M(e,b)})):a instanceof N?Ma(a,b,c,d,e):b.getElementsByTagName&&(b=b.getElementsByTagName(a.d()),C(b,function(a){I(a,c,d)&&M(e,a)}));return e}
function Na(a,b,c,d,e){var f;if((a instanceof L||8==a.b||c&&a.b===k)&&(f=b.childNodes)){var g=La(a);if("*"!=g&&(f=ua(f,function(a){return a.tagName&&a.tagName.toLowerCase()==g}),!f))return e;c&&(f=ua(f,function(a){return I(a,c,d)}));C(f,function(a){("*"!=g||"!"!=a.tagName&&!("*"==g&&1!=a.nodeType))&&M(e,a)});return e}return Oa(a,b,c,d,e)}function Oa(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)I(b,c,d)&&a.a(b)&&M(e,b);return e}
function Ma(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)I(b,c,d)&&a.a(b)&&M(e,b),Ma(a,b,c,d,e)}function La(a){if(a instanceof N){if(8==a.b)return"!";if(a.b===k)return"*"}return a.d()};function K(){this.b=this.a=k;this.i=0}function Pa(a){this.b=a;this.a=this.d=k}function Qa(a,b){if(a.a){if(!b.a)return a}else return b;for(var c=a.a,d=b.a,e=k,f=k,g=0;c&&d;)c.b==d.b||c.b instanceof E&&d.b instanceof E&&c.b.a==d.b.a?(f=c,c=c.a,d=d.a):0<Aa(c.b,d.b)?(f=d,d=d.a):(f=c,c=c.a),(f.d=e)?e.a=f:a.a=f,e=f,g++;for(f=c||d;f;)f.d=e,e=e.a=f,g++,f=f.a;a.b=e;a.i=g;return a}function Ra(a,b){var c=new Pa(b);c.a=a.a;a.b?a.a.d=c:a.a=a.b=c;a.a=c;a.i++}
function M(a,b){var c=new Pa(b);c.d=a.b;a.a?a.b.a=c:a.a=a.b=c;a.b=c;a.i++}function Sa(a){return(a=a.a)?a.b:k}function Ta(a){return(a=Sa(a))?H(a):""}function O(a,b){return new Ua(a,!!b)}function Ua(a,b){this.d=a;this.b=(this.c=b)?a.b:a.a;this.a=k}function P(a){var b=a.b;if(b==k)return k;var c=a.a=b;a.b=a.c?b.d:b.a;return c.b};function t(a){this.g=a;this.b=this.f=l;this.d=k}function Q(a,b){var c=a.a(b);return c instanceof K?+Ta(c):+c}function R(a,b){var c=a.a(b);return c instanceof K?Ta(c):""+c}function S(a,b){var c=a.a(b);return c instanceof K?!!c.i:!!c};function Va(a,b,c){t.call(this,a.g);this.c=a;this.e=b;this.j=c;this.f=b.f||c.f;this.b=b.b||c.b;this.c==Wa&&(!c.b&&!c.f&&4!=c.g&&0!=c.g&&b.d?this.d={name:b.d.name,l:c}:!b.b&&(!b.f&&4!=b.g&&0!=b.g&&c.d)&&(this.d={name:c.d.name,l:b}))}q(Va);
function T(a,b,c,d,e){var b=b.a(d),c=c.a(d),f;if(b instanceof K&&c instanceof K){f=O(b);for(b=P(f);b;b=P(f)){e=O(c);for(d=P(e);d;d=P(e))if(a(H(b),H(d)))return j}return l}if(b instanceof K||c instanceof K){b instanceof K?e=b:(e=c,c=b);e=O(e);b=typeof c;for(d=P(e);d;d=P(e)){switch(b){case "number":f=+H(d);break;case "boolean":f=!!H(d);break;case "string":f=H(d);break;default:h(Error("Illegal primitive type for comparison."))}if(a(f,c))return j}return l}return e?"boolean"==typeof b||"boolean"==typeof c?
a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}Va.prototype.a=function(a){return this.c.k(this.e,this.j,a)};Va.prototype.toString=function(a){var a=a||"",b=a+"binary expression: "+this.c+"\n",a=a+"  ",b=b+(this.e.toString(a)+"\n");return b+=this.j.toString(a)};function Xa(a,b,c,d){this.a=a;this.p=b;this.g=c;this.k=d}Xa.prototype.toString=m("a");var Ya={};
function U(a,b,c,d){a in Ya&&h(Error("Binary operator already created: "+a));a=new Xa(a,b,c,d);return Ya[a.toString()]=a}U("div",6,1,function(a,b,c){return Q(a,c)/Q(b,c)});U("mod",6,1,function(a,b,c){return Q(a,c)%Q(b,c)});U("*",6,1,function(a,b,c){return Q(a,c)*Q(b,c)});U("+",5,1,function(a,b,c){return Q(a,c)+Q(b,c)});U("-",5,1,function(a,b,c){return Q(a,c)-Q(b,c)});U("<",4,2,function(a,b,c){return T(function(a,b){return a<b},a,b,c)});
U(">",4,2,function(a,b,c){return T(function(a,b){return a>b},a,b,c)});U("<=",4,2,function(a,b,c){return T(function(a,b){return a<=b},a,b,c)});U(">=",4,2,function(a,b,c){return T(function(a,b){return a>=b},a,b,c)});var Wa=U("=",3,2,function(a,b,c){return T(function(a,b){return a==b},a,b,c,j)});U("!=",3,2,function(a,b,c){return T(function(a,b){return a!=b},a,b,c,j)});U("and",2,2,function(a,b,c){return S(a,c)&&S(b,c)});U("or",1,2,function(a,b,c){return S(a,c)||S(b,c)});function Za(a,b){b.a.length&&4!=a.g&&h(Error("Primary expression must evaluate to nodeset if filter has predicate(s)."));t.call(this,a.g);this.c=a;this.e=b;this.f=a.f;this.b=a.b}q(Za);Za.prototype.a=function(a){a=this.c.a(a);return $a(this.e,a)};Za.prototype.toString=function(a){var a=a||"",b=a+"Filter: \n",a=a+"  ",b=b+this.c.toString(a);return b+=this.e.toString(a)};function ab(a,b){b.length<a.o&&h(Error("Function "+a.h+" expects at least"+a.o+" arguments, "+b.length+" given"));a.n!==k&&b.length>a.n&&h(Error("Function "+a.h+" expects at most "+a.n+" arguments, "+b.length+" given"));a.s&&C(b,function(b,d){4!=b.g&&h(Error("Argument "+d+" to function "+a.h+" is not of type Nodeset: "+b))});t.call(this,a.g);this.e=a;this.c=b;this.f=a.f||wa(b,function(a){return a.f});this.b=a.r&&!b.length||a.q&&!!b.length||wa(b,function(a){return a.b})}q(ab);
ab.prototype.a=function(a){return this.e.k.apply(k,xa(a,this.c))};ab.prototype.toString=function(a){var b=a||"",a=b+"Function: "+this.e+"\n",b=b+"  ";this.c.length&&(a+=b+"Arguments:",b+="  ",a=va(this.c,function(a,d){return a+"\n"+d.toString(b)},a));return a};function bb(a,b,c,d,e,f,g,r,v){this.h=a;this.g=b;this.f=c;this.r=d;this.q=e;this.k=f;this.o=g;this.n=r!==i?r:g;this.s=!!v}bb.prototype.toString=m("h");var cb={};
function V(a,b,c,d,e,f,g,r){a in cb&&h(Error("Function already created: "+a+"."));cb[a]=new bb(a,b,c,d,l,e,f,g,r)}V("boolean",2,l,l,function(a,b){return S(b,a)},1);V("ceiling",1,l,l,function(a,b){return Math.ceil(Q(b,a))},1);V("concat",3,l,l,function(a,b){var c=ya(arguments,1);return va(c,function(b,c){return b+R(c,a)},"")},2,k);V("contains",2,l,l,function(a,b,c){b=R(b,a);a=R(c,a);return-1!=b.indexOf(a)},2);V("count",1,l,l,function(a,b){return b.a(a).i},1,1,j);V("false",2,l,l,aa(l),0);
V("floor",1,l,l,function(a,b){return Math.floor(Q(b,a))},1);
V("id",4,l,l,function(a,b){function c(a){if(D){var b=e.all[a];if(b){if(b.nodeType&&a==b.id)return b;if(b.length){var c;a:{c=function(b){return a==b.id};for(var d=b.length,f=p(b)?b.split(""):b,g=0;g<d;g++)if(g in f&&c.call(i,f[g])){c=g;break a}c=-1}return 0>c?k:p(b)?b.charAt(c):b[c]}}return k}return e.getElementById(a)}var d=a.a,e=9==d.nodeType?d:d.ownerDocument,d=R(b,a).split(/\s+/),f=[];C(d,function(a){(a=c(a))&&!(0<=ta(f,a))&&f.push(a)});f.sort(Aa);var g=new K;C(f,function(a){M(g,a)});return g},
1);V("lang",2,l,l,aa(l),1);V("last",1,j,l,function(a){1!=arguments.length&&h(Error("Function last expects ()"));return a.d},0);V("local-name",3,l,j,function(a,b){var c=b?Sa(b.a(a)):a.a;return c?c.nodeName.toLowerCase():""},0,1,j);V("name",3,l,j,function(a,b){var c=b?Sa(b.a(a)):a.a;return c?c.nodeName.toLowerCase():""},0,1,j);V("namespace-uri",3,j,l,aa(""),0,1,j);V("normalize-space",3,l,j,function(a,b){return(b?R(b,a):H(a.a)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);
V("not",2,l,l,function(a,b){return!S(b,a)},1);V("number",1,l,j,function(a,b){return b?Q(b,a):+H(a.a)},0,1);V("position",1,j,l,function(a){return a.b},0);V("round",1,l,l,function(a,b){return Math.round(Q(b,a))},1);V("starts-with",2,l,l,function(a,b,c){b=R(b,a);a=R(c,a);return 0==b.lastIndexOf(a,0)},2);V("string",3,l,j,function(a,b){return b?R(b,a):H(a.a)},0,1);V("string-length",1,l,j,function(a,b){return(b?R(b,a):H(a.a)).length},0,1);
V("substring",3,l,l,function(a,b,c,d){c=Q(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?Q(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";var c=Math.round(c)-1,e=Math.max(c,0),a=R(b,a);if(Infinity==d)return a.substring(e);b=Math.round(d);return a.substring(e,c+b)},2,3);V("substring-after",3,l,l,function(a,b,c){b=R(b,a);a=R(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
V("substring-before",3,l,l,function(a,b,c){b=R(b,a);a=R(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);V("sum",1,l,l,function(a,b){for(var c=O(b.a(a)),d=0,e=P(c);e;e=P(c))d+=+H(e);return d},1,1,j);V("translate",3,l,l,function(a,b,c,d){for(var b=R(b,a),c=R(c,a),e=R(d,a),a=[],d=0;d<c.length;d++){var f=c.charAt(d);f in a||(a[f]=e.charAt(d))}c="";for(d=0;d<b.length;d++)f=b.charAt(d),c+=f in a?a[f]:f;return c},3);V("true",2,l,l,aa(j),0);function N(a,b){this.e=a;this.c=b!==i?b:k;this.b=k;switch(a){case "comment":this.b=8;break;case "text":this.b=3;break;case "processing-instruction":this.b=7;break;case "node":break;default:h(Error("Unexpected argument"))}}function db(a){return"comment"==a||"text"==a||"processing-instruction"==a||"node"==a}N.prototype.a=function(a){return this.b===k||this.b==a.nodeType};N.prototype.d=m("e");
N.prototype.toString=function(a){var a=a||"",b=a+"kindtest: "+this.e;this.c===k||(b+="\n"+this.c.toString(a+"  "));return b};function eb(a){t.call(this,3);this.c=a.substring(1,a.length-1)}q(eb);eb.prototype.a=m("c");eb.prototype.toString=function(a){return(a||"")+"literal: "+this.c};function L(a){this.h=a.toLowerCase()}L.prototype.a=function(a){var b=a.nodeType;if(1==b||2==b)return"*"==this.h||this.h==a.nodeName.toLowerCase()?j:this.h==(a.namespaceURI||"http://www.w3.org/1999/xhtml")+":*"};L.prototype.d=m("h");L.prototype.toString=function(a){return(a||"")+"nametest: "+this.h};function fb(a){t.call(this,1);this.c=a}q(fb);fb.prototype.a=m("c");fb.prototype.toString=function(a){return(a||"")+"number: "+this.c};function gb(a,b){t.call(this,a.g);this.e=a;this.c=b;this.f=a.f;this.b=a.b;if(1==this.c.length){var c=this.c[0];!c.m&&c.e==hb&&(c=c.j,"*"!=c.d()&&(this.d={name:c.d(),l:k}))}}q(gb);function ib(){t.call(this,4)}q(ib);ib.prototype.a=function(a){var b=new K,a=a.a;9==a.nodeType?M(b,a):M(b,a.ownerDocument);return b};ib.prototype.toString=function(a){return a+"RootHelperExpr"};function jb(){t.call(this,4)}q(jb);jb.prototype.a=function(a){var b=new K;M(b,a.a);return b};
jb.prototype.toString=function(a){return a+"ContextHelperExpr"};gb.prototype.a=function(a){var b=this.e.a(a);b instanceof K||h(Error("FilterExpr must evaluate to nodeset."));for(var a=this.c,c=0,d=a.length;c<d&&b.i;c++){var e=a[c],f=O(b,e.e.a),g;if(!e.f&&e.e==kb){for(g=P(f);(b=P(f))&&(!g.contains||g.contains(b))&&b.compareDocumentPosition(g)&8;g=b);b=e.a(new A(g))}else if(!e.f&&e.e==lb)g=P(f),b=e.a(new A(g));else{g=P(f);for(b=e.a(new A(g));(g=P(f))!=k;)g=e.a(new A(g)),b=Qa(b,g)}}return b};
gb.prototype.toString=function(a){var b=a||"",c=b+"PathExpr:\n",b=b+"  ",c=c+this.e.toString(b);this.c.length&&(c+=b+"Steps:\n",b+="  ",C(this.c,function(a){c+=a.toString(b)}));return c};function mb(a,b){this.a=a;this.b=!!b}function $a(a,b,c){for(c=c||0;c<a.a.length;c++)for(var d=a.a[c],e=O(b),f=b.i,g,r=0;g=P(e);r++){var v=a.b?f-r:r+1;g=d.a(new A(g,v,f));var J;"number"==typeof g?J=v==g:"string"==typeof g||"boolean"==typeof g?J=!!g:g instanceof K?J=0<g.i:h(Error("Predicate.evaluate returned an unexpected type."));if(!J){v=e;g=v.d;var s=v.a;s||h(Error("Next must be called at least once before remove."));var x=s.d,s=s.a;x?x.a=s:g.a=s;s?s.d=x:g.b=x;g.i--;v.a=k}}return b}
mb.prototype.toString=function(a){var b=a||"",a=b+"Predicates:",b=b+"  ";return va(this.a,function(a,d){return a+"\n"+b+d.toString(b)},a)};function W(a,b,c,d){t.call(this,4);this.e=a;this.j=b;this.c=c||new mb([]);this.m=!!d;b=0<this.c.a.length?this.c.a[0].d:k;a.b&&b&&(a=b.name,a=D?a.toLowerCase():a,this.d={name:a,l:b.l});a:{a=this.c;for(b=0;b<a.a.length;b++)if(c=a.a[b],c.f||1==c.g||0==c.g){a=j;break a}a=l}this.f=a}q(W);
W.prototype.a=function(a){var b=a.a,c=k,c=this.d,d=k,e=k,f=0;c&&(d=c.name,e=c.l?R(c.l,a):k,f=1);if(this.m)if(!this.f&&this.e==nb)c=Ia(this.j,b,d,e),c=$a(this.c,c,f);else if(a=O((new W(ob,new N("node"))).a(a)),b=P(a))for(c=this.k(b,d,e,f);(b=P(a))!=k;)c=Qa(c,this.k(b,d,e,f));else c=new K;else c=this.k(a.a,d,e,f);return c};W.prototype.k=function(a,b,c,d){a=this.e.d(this.j,a,b,c);return a=$a(this.c,a,d)};
W.prototype.toString=function(a){var a=a||"",b=a+"Step: \n",a=a+"  ",b=b+(a+"Operator: "+(this.m?"//":"/")+"\n");this.e.h&&(b+=a+"Axis: "+this.e+"\n");b+=this.j.toString(a);if(this.c.length)for(var b=b+(a+"Predicates: \n"),c=0;c<this.c.length;c++)var d=c<this.c.length-1?", ":"",b=b+(this.c[c].toString(a)+d);return b};function pb(a,b,c,d){this.h=a;this.d=b;this.a=c;this.b=d}pb.prototype.toString=m("h");var qb={};
function X(a,b,c,d){a in qb&&h(Error("Axis already created: "+a));b=new pb(a,b,c,!!d);return qb[a]=b}X("ancestor",function(a,b){for(var c=new K,d=b;d=d.parentNode;)a.a(d)&&Ra(c,d);return c},j);X("ancestor-or-self",function(a,b){var c=new K,d=b;do a.a(d)&&Ra(c,d);while(d=d.parentNode);return c},j);
var hb=X("attribute",function(a,b){var c=new K,d=a.d();if("style"==d&&b.style&&D)return M(c,new E(b.style,b,"style",b.style.cssText)),c;var e=b.attributes;if(e)if(a instanceof N&&a.b===k||"*"==d)for(var d=0,f;f=e[d];d++)D?f.nodeValue&&M(c,Ea(b,f)):M(c,f);else(f=e.getNamedItem(d))&&(D?f.nodeValue&&M(c,Ea(b,f)):M(c,f));return c},l),nb=X("child",function(a,b,c,d,e){return(D?Na:Oa).call(k,a,b,p(c)?c:k,p(d)?d:k,e||new K)},l,j);X("descendant",Ia,l,j);
var ob=X("descendant-or-self",function(a,b,c,d){var e=new K;I(b,c,d)&&a.a(b)&&M(e,b);return Ia(a,b,c,d,e)},l,j),kb=X("following",function(a,b,c,d){var e=new K;do for(var f=b;f=f.nextSibling;)I(f,c,d)&&a.a(f)&&M(e,f),e=Ia(a,f,c,d,e);while(b=b.parentNode);return e},l,j);X("following-sibling",function(a,b){for(var c=new K,d=b;d=d.nextSibling;)a.a(d)&&M(c,d);return c},l);X("namespace",function(){return new K},l);
var rb=X("parent",function(a,b){var c=new K;if(9==b.nodeType)return c;if(2==b.nodeType)return M(c,b.ownerElement),c;var d=b.parentNode;a.a(d)&&M(c,d);return c},l),lb=X("preceding",function(a,b,c,d){var e=new K,f=[];do f.unshift(b);while(b=b.parentNode);for(var g=1,r=f.length;g<r;g++){for(var v=[],b=f[g];b=b.previousSibling;)v.unshift(b);for(var J=0,s=v.length;J<s;J++)b=v[J],I(b,c,d)&&a.a(b)&&M(e,b),e=Ia(a,b,c,d,e)}return e},j,j);
X("preceding-sibling",function(a,b){for(var c=new K,d=b;d=d.previousSibling;)a.a(d)&&Ra(c,d);return c},j);var sb=X("self",function(a,b){var c=new K;a.a(b)&&M(c,b);return c},l);function tb(a){t.call(this,1);this.c=a;this.f=a.f;this.b=a.b}q(tb);tb.prototype.a=function(a){return-Q(this.c,a)};tb.prototype.toString=function(a){var a=a||"",b=a+"UnaryExpr: -\n";return b+=this.c.toString(a+"  ")};function ub(a){t.call(this,4);this.c=a;this.f=wa(this.c,function(a){return a.f});this.b=wa(this.c,function(a){return a.b})}q(ub);ub.prototype.a=function(a){var b=new K;C(this.c,function(c){c=c.a(a);c instanceof K||h(Error("PathExpr must evaluate to NodeSet."));b=Qa(b,c)});return b};ub.prototype.toString=function(a){var b=a||"",c=b+"UnionExpr:\n",b=b+"  ";C(this.c,function(a){c+=a.toString(b)+"\n"});return c.substring(0,c.length)};function vb(a){this.a=a}function wb(a){for(var b,c=[];;){Y(a,"Missing right hand side of binary expression.");b=xb(a);var d=G(a.a);if(!d)break;var e=(d=Ya[d]||k)&&d.p;if(!e){a.a.a--;break}for(;c.length&&e<=c[c.length-1].p;)b=new Va(c.pop(),c.pop(),b);c.push(b,d)}for(;c.length;)b=new Va(c.pop(),c.pop(),b);return b}function Y(a,b){a.a.b.length<=a.a.a&&h(Error(b))}function yb(a,b){var c=G(a.a);c!=b&&h(Error("Bad token, expected: "+b+" got: "+c))}
function zb(a){a=G(a.a);")"!=a&&h(Error("Bad token: "+a))}function Ab(a){a=G(a.a);2>a.length&&h(Error("Unclosed literal string"));return new eb(a)}function Bb(a){return"*"!=F(a.a)&&":"==F(a.a,1)&&"*"==F(a.a,2)?new L(G(a.a)+G(a.a)+G(a.a)):new L(G(a.a))}
function Cb(a){var b,c=[],d;if("/"==F(a.a)||"//"==F(a.a)){b=G(a.a);d=F(a.a);if("/"==b&&(a.a.b.length<=a.a.a||"."!=d&&".."!=d&&"@"!=d&&"*"!=d&&!/(?![0-9])[\w]/.test(d)))return new ib;d=new ib;Y(a,"Missing next location step.");b=Db(a,b);c.push(b)}else{a:{b=F(a.a);d=b.charAt(0);switch(d){case "$":h(Error("Variable reference not allowed in HTML XPath"));case "(":G(a.a);b=wb(a);Y(a,'unclosed "("');yb(a,")");break;case '"':case "'":b=Ab(a);break;default:if(isNaN(+b))if(!db(b)&&/(?![0-9])[\w]/.test(d)&&
"("==F(a.a,1)){b=G(a.a);b=cb[b]||k;G(a.a);for(d=[];")"!=F(a.a);){Y(a,"Missing function argument list.");d.push(wb(a));if(","!=F(a.a))break;G(a.a)}Y(a,"Unclosed function argument list.");zb(a);b=new ab(b,d)}else{b=k;break a}else b=new fb(+G(a.a))}"["==F(a.a)&&(d=new mb(Eb(a)),b=new Za(b,d))}if(b)if("/"==F(a.a)||"//"==F(a.a))d=b;else return b;else b=Db(a,"/"),d=new jb,c.push(b)}for(;"/"==F(a.a)||"//"==F(a.a);)b=G(a.a),Y(a,"Missing next location step."),b=Db(a,b),c.push(b);return new gb(d,c)}
function Db(a,b){var c,d,e;"/"!=b&&"//"!=b&&h(Error('Step op should be "/" or "//"'));if("."==F(a.a))return d=new W(sb,new N("node")),G(a.a),d;if(".."==F(a.a))return d=new W(rb,new N("node")),G(a.a),d;var f;"@"==F(a.a)?(f=hb,G(a.a),Y(a,"Missing attribute name")):"::"==F(a.a,1)?(/(?![0-9])[\w]/.test(F(a.a).charAt(0))||h(Error("Bad token: "+G(a.a))),e=G(a.a),(f=qb[e]||k)||h(Error("No axis with name: "+e)),G(a.a),Y(a,"Missing node name")):f=nb;e=F(a.a);if(/(?![0-9])[\w]/.test(e.charAt(0)))if("("==F(a.a,
1)){db(e)||h(Error("Invalid node type: "+e));c=G(a.a);db(c)||h(Error("Invalid type name: "+c));yb(a,"(");Y(a,"Bad nodetype");e=F(a.a).charAt(0);var g=k;if('"'==e||"'"==e)g=Ab(a);Y(a,"Bad nodetype");zb(a);c=new N(c,g)}else c=Bb(a);else"*"==e?c=Bb(a):h(Error("Bad token: "+G(a.a)));e=new mb(Eb(a),f.a);return d||new W(f,c,e,"//"==b)}function Eb(a){for(var b=[];"["==F(a.a);){G(a.a);Y(a,"Missing predicate expression.");var c=wb(a);b.push(c);Y(a,"Unclosed predicate expression.");yb(a,"]")}return b}
function xb(a){if("-"==F(a.a))return G(a.a),new tb(xb(a));var b=Cb(a);if("|"!=F(a.a))a=b;else{for(b=[b];"|"==G(a.a);)Y(a,"Missing next union location path."),b.push(Cb(a));a.a.a--;a=new ub(b)}return a};function Fb(a){a.length||h(Error("Empty XPath expression."));for(var a=a.match(Ga),b=0;b<a.length;b++)Ha.test(a[b])&&a.splice(b,1);a=new Fa(a);a.b.length<=a.a&&h(Error("Invalid XPath expression."));var c=wb(new vb(a));a.b.length<=a.a||h(Error("Bad token: "+G(a)));this.evaluate=function(a,b){var f=c.a(new A(a));return new Z(f,b)}}
function Z(a,b){0==b&&(a instanceof K?b=4:"string"==typeof a?b=2:"number"==typeof a?b=1:"boolean"==typeof a?b=3:h(Error("Unexpected evaluation result.")));2!=b&&(1!=b&&3!=b&&!(a instanceof K))&&h(Error("value could not be converted to the specified type"));this.resultType=b;var c;switch(b){case 2:this.stringValue=a instanceof K?Ta(a):""+a;break;case 1:this.numberValue=a instanceof K?+Ta(a):+a;break;case 3:this.booleanValue=a instanceof K?0<a.i:!!a;break;case 4:case 5:case 6:case 7:var d=O(a);c=[];
for(var e=P(d);e;e=P(d))c.push(e instanceof E?e.a:e);this.snapshotLength=a.i;this.invalidIteratorState=l;break;case 8:case 9:d=Sa(a);this.singleNodeValue=d instanceof E?d.a:d;break;default:h(Error("Unknown XPathResult type."))}var f=0;this.iterateNext=function(){4!=b&&5!=b&&h(Error("iterateNext called with wrong result type"));return f>=c.length?k:c[f++]};this.snapshotItem=function(a){6!=b&&7!=b&&h(Error("snapshotItem called with wrong result type"));return a>=c.length||0>a?k:c[a]}}Z.ANY_TYPE=0;
Z.NUMBER_TYPE=1;Z.STRING_TYPE=2;Z.BOOLEAN_TYPE=3;Z.UNORDERED_NODE_ITERATOR_TYPE=4;Z.ORDERED_NODE_ITERATOR_TYPE=5;Z.UNORDERED_NODE_SNAPSHOT_TYPE=6;Z.ORDERED_NODE_SNAPSHOT_TYPE=7;Z.ANY_UNORDERED_NODE_TYPE=8;Z.FIRST_ORDERED_NODE_TYPE=9;function Gb(a){var a=a||n,b=a.document;b.evaluate||(a.XPathResult=Z,b.evaluate=function(a,b,e,f){return(new Fb(a)).evaluate(b,f)},b.createExpression=function(a){return new Fb(a)})}var Hb=["wgxpath","install"],$=n;!(Hb[0]in $)&&$.execScript&&$.execScript("var "+Hb[0]);for(var Ib;Hb.length&&(Ib=Hb.shift());)!Hb.length&&Gb!==i?$[Ib]=Gb:$=$[Ib]?$[Ib]:$[Ib]={};})()

;//'
/**
 * conf.js
 * Configuration Parameters for NB api 
 * This module defines the namespace NB.conf
 *
 Author 
 cf AUTHORS.txt 

 License
 Copyright (c) 2010-2012 Massachusetts Institute of Technology.
 MIT License (cf. MIT-LICENSE.txt or http://www.opensource.org/licenses/mit-license.php)
*/
/*global  NB:true*/

(function(GLOB){
    GLOB.conf = {};
    GLOB.conf.servers = {
    rpc: "",
    img: "",
    upload: ""

    };

    /*************************************************************************************
     * Replace "" (right below) with your invite key if you'd live to be automatically authenticated
     ************************************************************************************/
    GLOB.conf.identity = "";
})(NB);

/*
 * pers.js: common fct for perspective-based views
 * This module defines the namespace NB.pers
 * It requires the following modules:
 *        Module
 *        NB
 *        NB.auth
 *        jquery
 *
 *
 Author 
 cf AUTHORS.txt 

 License
 Copyright (c) 2010-2012 Massachusetts Institute of Technology.
 MIT License (cf. MIT-LICENSE.txt or http://www.opensource.org/licenses/mit-license.php)
*/
/*global unescape:true NB:true NB$:true jQuery:true alert:false*/
(function(GLOB){
    //require auth
    if ("NB$" in window){
    var $ = NB$;
    }    
    // it would be great to use document.currentScript, but it only seems to be supported 
    // on firefox for now, so we match by filename. 
    var scriptname = "_NB.js";
    var nb_script = jQuery("script[src$='"+scriptname+"']");
    if (nb_script.length===0){
        alert("Error: Couldn't find  NB script, i.e ending in : "+ scriptname); 
        return;
    }
    if (nb_script.length>1){
        alert("Warning: Found more than one  NB script, i.e ending in : "+ scriptname + "using the last one: " + nb_script[nb_script.length-1] ); 
    }
    GLOB.pers = {
        currentScript: nb_script[nb_script.length-1],
        embedded: false
    };
    var $str        = "NB$" in window ? "NB$" : "jQuery";

    /* trick for browsers that don't support document.activeElement 
       adapted from http://ajaxandxml.blogspot.com/2007/11/emulating-activeelement-property-with.html
    */
    if (!("activeElement" in document)){
    document.activeElement = document.body;
    document.addEventListener("focus",function(evt){ 
        document.activeElement = evt.target === document ? document.body : evt.target;
        } ,true);
    document.addEventListener("blur",function(evt){ 
        document.activeElement = document.body;
        } ,true);
    }

    GLOB.pers.connection_id = 0;
    GLOB.pers.first_connection = true;
    GLOB.pers.connection_T = 1000;  // in msec
    var server_info =  GLOB.pers.currentScript.src.match(/([^:]*):\/\/([^\/]*)/);    
    GLOB.pers.server_url = server_info[1]+"://"+server_info[2];
    GLOB.pers.call = function(fctname, dict, callback, errback){
    if ((!GLOB.pers.first_connection) && GLOB.pers.connection_id === 0) {
        // we haven't received a reply yet so put this function to wait for a while
        $.L("waiting until we get a connection id...");
        window.setTimeout(function(){
            GLOB.pers.call(fctname, dict, callback, errback);
        }, GLOB.pers.connection_T);
        return;
    }
    GLOB.pers.first_connection = false;
    var cb = function(x){
        if ("CID" in x.status){
        GLOB.pers.connection_id = x.status.CID;
        }
        if (x.status.errno){
        //just display that there was an error for now
        if (errback !== undefined){
            errback(x.status, x.payload);
        }
        $.L(x.status.msg);
        return;
        }
        //     console.log("cb w/ x=", x);
        callback(x.payload);
    };
    var auth_str = GLOB.conf.userinfo.guest ? "guest=1" : "ckey="+GLOB.conf.userinfo.ckey;
    $.post(GLOB.conf.servers.rpc+"/pdf4/rpc?"+auth_str ,{"cid": GLOB.pers.connection_id, "f": fctname, "a": JSON.stringify(dict)}, cb, "json");
    };


    GLOB.pers.__authenticate = function(init_ui){
    var uinfo = GLOB.conf.userinfo = JSON.parse(unescape(GLOB.auth.get_cookie("userinfo"))) || {guest: true}; 
    var $login_contents;
    if (uinfo.guest){
        $login_contents = $("<ul class='dropdown-menu'><li><a id='login-name' href='#'>Guest</a><ul><li><a href='javascript:"+$str+".concierge.get_component(\"login_user_menu\")()'>Log in</a></li><li><a href='javascript:"+$str+".concierge.get_component(\"register_user_menu\")()'>Register</a></li><li><a href='javascript:"+$str+".concierge.get_component(\"logout\")()'>Log out</a></li></ul></li></ul>");
        var $util_window = $.concierge.get_component("get_util_window")();
        $("#register_user_dialog, #login_user_dialog").remove();    
        $util_window.append("<div id=\"register_user_dialog\">   <div id='reg_welcome'>Welcome to NB !</div><div id='reg_benefits'>Registering only takes a few seconds and lets you annotate online PDFs...</div>  <table> <tr><td>Firstname</td><td><input type=\"text\" id=\"register_user_firstname\" /></td></tr> <tr><td>Lastname</td><td><input type=\"text\" id=\"register_user_lastname\" /></td></tr> <tr style=\"display: none;\"><td>Pseudonym</td><td><input type=\"text\" id=\"register_user_pseudonym\" /></td></tr><tr><td>Email</td><td><input type=\"text\" id=\"register_user_email\" /></td></tr><tr><td>Password</td><td><input type=\"password\" id=\"register_user_password1\" /></td></tr><tr><td>Confirm Password</td><td><input type=\"password\" id=\"register_user_password2\" /></td></tr>  <tr><td><span>Or use</span> </td><td><button title='Register using your Google account' onclick='if("+$str+"(\"#termsandconditions:checked\").length){document.location=\"/openid/login?next="+(document.location.pathname==="/welcome" ? "/": document.location.pathname)+"\";}else{alert(\"In order to register with your Google account, please agree with NB Terms and Conditions by checking the checkbox below\");}'><img style='vertical-align: middle;' src='/content/data/icons/png/1345558452_social_google_box.png' alt='your Google account'/></button><button  title='Register using your Facebook account' onclick='if("+$str+"(\"#termsandconditions:checked\").length){document.location=\"/openid/login?next="+(document.location.pathname==="/welcome" ? "/": document.location.pathname)+"\";}else{alert(\"In order to register with your Facebook account, please agree with NB Terms and Conditions by checking the checkbox below\");}'><img style='vertical-align: middle;' src='/content/data/icons/png/1345558472_social_facebook_box_blue.png' alt='your Facebook account'/></button> </td></tr> </table> <div>     <input type=\"checkbox\" id=\"termsandconditions\" />      <label for=\"termsandconditions\">I agree with <a target=\"_blank\" href=\"/terms_public_site\">NB Terms and Conditions</a></label></div>  <div class=\"form_errors\"></div> </div>").append($.concierge.get_component("get_login_dialog_markup")());
        if (init_ui){
        $("#login_user_password").keypress(function(e) {if(e.keyCode === 13 && this.value.length>0) {
                $.L("using shortcut");
                $("#login_user_dialog").parent().find("button:contains('Ok')").click();}});    
        }
    }
    else{
        var screenname = uinfo.firstname === null ? $.E(uinfo.email): $.E(uinfo.firstname) + " " + $.E(uinfo.lastname); 
        $login_contents = $("<ul class='dropdown-menu'><li><a id='login-name' title='"+$.E(uinfo.email)+"' href='#'>"+screenname+"</a><ul><li id='menu_settings'><a target='_blank' href='/settings'>Settings</a></li><li id='menu_logout'><a href='javascript:"+$str+".concierge.get_component(\"logout\")()'>Log out</a></li></ul></li></ul>");
    }
    if (init_ui){
        $("#login-window").remove();
        var $login_window = $("<div id='login-window'/>");
        $login_contents.append($("<li><a href='#'>Help</a><ul><li><a href='/tutorial'>Tutorial</a></li><li><a href='/faq'>FAQ</a></li><li><a href='/contact'>Contact Us</a></li><li><a href='/disclaimer'>Disclaimer</a></li></ul></li>"));
        $login_window.append($login_contents);
        $("body").append($login_window);
    }
    GLOB.pers.params = GLOB.dom.getParams();
    };

    GLOB.pers.add_css = function(url){
        var o = document.createElement("link");
        o.type = "text/css";
        o.href = url;
        o.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(o);
    };

    GLOB.pers.preinit = function(init_ui){
    if (init_ui === undefined){
        init_ui = true;
    }
    $.concierge.addComponents(GLOB.pers.__components);
    GLOB.pers.__authenticate(init_ui);   
    if ("init" in GLOB.pers){ 
        GLOB.pers.init();
    }
    };
    
    /* stuff that can be used in various views */
    GLOB.pers.__components = {
        logout: function(p,cb){
            GLOB.auth.delete_cookie("userinfo");
            GLOB.auth.delete_cookie("ckey");
            if (GLOB.pers.embedded){
                document.location = document.location; //simply reload
            }
            else{
                document.location.pathname ="/logout";
            }

        },
        location_closestpage:  function(p, cb){ 
        /* given a location and id (in payload) returns "closest" location id found on a different page: 
           - if "direction" is "down": "closest" is the location at the top-most position of the next page which has a location
           - if "direction" is "up": "closest" is the location at the bottom-most position of the previous page which has a location
        */
        var m = p.model;
        var loc = m.o.location[p.id];
        var me = $.concierge.get_component("get_userinfo")();
        var file = m.o.file[loc.id_source];
        var page = loc.page;
        var f_sort_down = function(o1, o2){return o1.top-o2.top;};    
        var TYPE_STAR = $.concierge.get_constant("STAR");
        var TYPE_QUESTION = $.concierge.get_constant("QUESTION");
        var new_id = null;    
        var i, ids;
        var locs;
        if (p.direction === "down"){
        i = page+1;
        while (i<=file.numpages){
            locs = m.get("location", {id_source: loc.id_source, page: i});
            if (p.filters){
            if (p.filters.me){
                locs = locs.intersect(m.get("comment", {id_author: me.id}).values("ID_location"));
            }
            if (p.filters.star){
                locs = locs.intersect(m.get("threadmark", {active: true, type: TYPE_STAR }).values("location_id"));
            }
            if (p.filters.question){
                locs = locs.intersect(m.get("threadmark", {active: true, type: TYPE_QUESTION }).values("location_id"));
            }
            }
            if (locs.length()){
            new_id = locs.min("top");
            break;
            }
            i++;
        }
        }
        else{
        i = page-1;
        while (i>0){
            locs = m.get("location", {id_source: loc.id_source, page: i});
            if (p.filters){
            if (p.filters.me){
                locs = locs.intersect(m.get("comment", {id_author: me.id}).values("ID_location"));
            }
            if (p.filters.star){
                locs = locs.intersect(m.get("threadmark", {active: true, type: TYPE_STAR }).values("location_id"));
            }
            if (p.filters.question){
                locs = locs.intersect(m.get("threadmark", {active: true, type: TYPE_QUESTION }).values("location_id"));
            }
            }
            if (locs.length()){
            new_id = locs.max("top");
            break;
            }
            i--;
        }
        }
        return new_id;
    }, 
    register_user_menu : function(P, cb){
        $.L("register_user_menu");
        $('#register_user_dialog').dialog({
            title: "Register for a new account...", 
            width: 400,
            buttons: { 
            "Cancel": function() { 
                $(this).find("div.form_errors").empty();
                $(this).dialog("destroy");  
            },
                "Ok": function() {
                var $dlg = $(this);
                var err = function(msg){
                    $dlg.find("div.form_errors").hide().text(msg).show("fast");
                };
                if ($("#register_user_password1")[0].value !== $("#register_user_password2")[0].value){
                    err("passwords don't match: please retype them");
                    return;
                }
                if ($("#register_user_firstname")[0].value.length === 0){
                    err("Please enter your firstname");
                    return;
                }
                if ($("#register_user_lastname")[0].value.length === 0){
                    err("Please enter your lastname");
                    return;
                }
                if ($("#register_user_email")[0].value.match(/^([^@ ]+)@+([^@ ]+)$/)==null){
                    err("Please enter a valid e-mail address");
                    return;
                }
                if ($("#termsandconditions:checked").length === 0){
                    err("You need to accept NB terms and conditions in order to register.");
                    return;
                }
                var payload = {
                    firstname: $("#register_user_firstname")[0].value, 
                    lastname: $("#register_user_lastname")[0].value, 
                    email: $("#register_user_email")[0].value, 
                    pseudonym: $("#register_user_pseudonym")[0].value,
                    password: $("#register_user_password1")[0].value, 
                    ckey: GLOB.conf.userinfo.ckey};
                $.concierge.get_component("register_user")(payload, function(p){
                    $.I("Thanks for registering... You should receive a confirmation code by email in less than a minute...");
                    $dlg.dialog("destroy");
                    }, function(status, p){
                    err(status.msg);});
                }
            }
        });
        $('#register_user_dialog').dialog("open");
    }, 
    login_user_menu: function(P,cb){
        $.L("login_user_menu");
        $('#login_user_dialog').dialog({
            title: "Log in...", 
            width: 390,
            buttons: { 
            "Cancel": function() { 
                $(this).find("div.form_errors").empty();
                $(this).dialog("destroy");  
            },
                "Ok": function() { 
                var $dlg = $(this);
                var err = function(msg){
                    $dlg.find("div.form_errors").hide().text(msg).show("fast");
                };
                var payload = { 
                    email: $("#login_user_email")[0].value,
                    password: $("#login_user_password")[0].value
                };
                $.concierge.get_component("login_user")(payload , function(p){
                    if (p.ckey !== null){
                        $.concierge.trigger({type:"successful_login", value: p});
                        $dlg.find("div.form_errors").empty();
                        $dlg.dialog("destroy");  
                    }
                    else{
                        err("email or password doesn't match. Please try again");
                    }
                    });
                }
            }
        });    
        $('#login_user_dialog').dialog("open");
    }, 
    get_util_window: function(P, cb){
        var $util_window = $("div.util_windows");
    
        if ($util_window.length === 0){
        $util_window = $("<div class='util_windows' style='display:none'/>");
        }
        $("body").append($util_window);
        return $util_window;
    }, 
    register_user: function(P, cb, eb){
        GLOB.pers.call("register_user", P, cb, eb);
    },
    advanced_filter: function(P, cb, eb){
        GLOB.pers.call("advanced_filter", P, cb, eb);
    },
    login_user: function(P, cb){
        GLOB.pers.call("login_user", P, cb);
    }, 
    get_userinfo: function(P, cb){
        return GLOB.conf.userinfo;
    }, 
    mini_splashscreen: function(P,cb){
        var widget;
        if (GLOB.conf.userinfo.guest){ //splashscreen for non-registered user
        widget =  "<div class=\"minisplashscreen ui-corner-all\">  <div id=\"splash-welcome\">Welcome to NB !</div><div id=\"nb-def\">...a forum on top of every PDF.</div> <ul id=\"splash-list-instructions\"> <li>Use your mouse or the <span class=\"ui-icon ui-icon-circle-triangle-w\"></span> and <span class=\"ui-icon ui-icon-circle-triangle-e\"></span> keys to move from discussion to discussion.</li> <li>Use your mouse or the  <span class=\"ui-icon ui-icon-circle-triangle-n\"></span> and  <span class=\"ui-icon ui-icon-circle-triangle-s\"></span> keys to scroll up and down the document.</li> <li>New user ? <a href='javascript:$.concierge.get_component(\"register_user_menu\")()'>Register</a> now to be able to post comments...</li> <li>Existing user ? <a href='javascript:$.concierge.get_component(\"login_user_menu\")()'>Log in</a> now...</li> </ul>  <a target=\"_blank\" href=\"/help\">More help...</a>  </div>       ";
        }
        else{ //splashscreen for registered user
        widget = "<div class=\"minisplashscreen ui-corner-all\">  <div id=\"splash-welcome\">Welcome to NB !</div> <ul id=\"splash-list-instructions\"> <li>Use your mouse or the <span class=\"ui-icon ui-icon-circle-triangle-w\"></span> and <span class=\"ui-icon ui-icon-circle-triangle-e\"></span> keys to move from discussion to discussion.</li> <li>Use your mouse or the  <span class=\"ui-icon ui-icon-circle-triangle-n\"></span> and  <span class=\"ui-icon ui-icon-circle-triangle-s\"></span> keys to scroll up and down the document.</li> <li>Drag across any region on the pdf to create a new discussion</li> <li>Right-click on any comment to post a reply</li> </ul>  <a target=\"_blank\" href=\"/help\">More help...</a>  </div>       ";
        }
        return widget;
    },
    note_deleter: function(P, cb){GLOB.pers.call("deleteNote", P, cb);},
    rate_reply: function(P,cb){GLOB.pers.call("rate_reply", P, cb);}, 
    mark_thread: function(P,cb){GLOB.pers.call("markThread", P, cb);},
    get_login_window: function(P,cb){
        return $("#login-window");
    }, 
    get_file_stats: function(P,cb){
        var payload_objects = {types: ["file_stats"]};
        if ("id_ensemble" in P){
        payload_objects["payload"]= {id_ensemble: P.id_ensemble};
        }
        GLOB.pers.call("getObjects",payload_objects, cb);
    }, 
    in_progress: function(P,cb){
        var msg="Loading in progress...";
        if (P !== undefined && "msg" in P){
        msg = P.msg;
        }
        return "<div align='center' class='loadingpane'><img src='content/data/icons/gif/loader1.gif'/><div class='loadingpane-msg'>"+msg+"</div></div>";
    }, 
    pretty_print_timedelta: function(P,cb){
        var d = new Date(P.t);
        var now = new Date();
        var delta_s = parseInt((now-d)/1000, 10);    
        var s = "";
        if (delta_s<3600){       
            s += (parseInt(delta_s/60, 10) + " minutes ago");
        }
        else if (delta_s < 3600*24){
            s += (parseInt(delta_s/3600, 10) + " hours ago");
        }
        else{
            s += (parseInt(delta_s/(3600*24), 10) + " days ago");
        }
        return s;
    }, 
    get_login_dialog_markup: function(P,cb){
        return "<div id='login_user_dialog' > <table cellspacing='5px'> <tr><td>Email</td><td><input type='text'  id='login_user_email' ></input></td></tr><tr><td>Password</td><td><input type='password'  id='login_user_password' ></input></td></tr><tr><td/><td><span id='loginbutton_classic'/><a style='padding-left: 10px;  font-size: x-small' href='/password_reminder'>Lost password ?</a></td></tr><tr style='display: none'><td style='font-size: small'>Or use</td><td id='loginbuttons_sso'><button title='Login using your Google account' onclick='document.location=\"/openid/login?next="+(document.location.pathname==="/welcome" ? "/": document.location.pathname)+"\"'><img style='vertical-align: middle;' src='/content/data/icons/png/1345558452_social_google_box.png' alt='your Google account'/></button><button title='Login using your Facebook account' onclick='document.location=\"/facebook/login?next="+(document.location.pathname==="/welcome" ? "/": document.location.pathname)+"\"'><img style='vertical-align: middle;' src='/content/data/icons/png/1345558472_social_facebook_box_blue.png' alt='your Facebook account'/></button></td></tr></table><div class='form_errors'/></div>";
        }, 
    get_sec_mult_factor: function(){
	return 100;
    }, 
    get_metronome_period_s: function(){
	return 1;
    }
    };
})(NB);

/*global NB:true NB$:true $:true rangy:true alert:true wgxpath:true jQuery:true getElementCSSSelector:true console:true */
(function(GLOB){
    var _scrollTimerID=null;
    var _scrollCounter=0;
    if ("NB$" in window){
        var $ = NB$;
    }

    var $str        = "NB$" in window ? "NB$" : "jQuery";
    var cssApplier = null;
    var lastClicked = {set: [], clicked: null};

    var restore = function(loc) {
        var sel = rangy.getSelection();
        sel.restoreCharacterRanges(getElementsByXPath(document, loc.path1)[0], 
                                   [{backward: loc.path2 === "true",
                                               characterRange: {
                                               start: loc.offset1,
                                               end: loc.offset2
                                           }
                                       }]);
        placeAnnotation(sel, loc);
    };

    var restoreBatch = function(object, callback) {
        var start = (new Date()).getTime();
        var current;

        for (var key in object) {
            current = (new Date()).getTime();
            if (current - start > 150) {
                window.setTimeout(restoreBatch, 10, object, callback);
                return;
            }

            restore(object[key]);
            delete object[key];
        }

        callback();
    };

    GLOB.html = {
        id: "docviewHtml5"
    };

    GLOB.html.init = function () {

        var countChildChars = function(_char, _this) {
            var char = _char;

            // count text nodes as well (includes whitespace)
            $(_this).contents().each(function() {
                  if (this.nodeType === 1) {
                      $(this).attr("data_char", char);
                      countChildChars(char, this);
                  }
                  char += ($(this).text()).length;
            });
        };

        countChildChars(0, $("body")[0]);

        $.concierge.addListeners(GLOB.html,{
                page: function(evt){
                   // _render();
                }, 
                note_hover: function(event){
                    $(".nb-comment-highlight[id_item="+event.value+"]").addClass("hovered");
                }, 
                note_out: function(event){
                    $(".nb-comment-highlight[id_item="+event.value+"]").removeClass("hovered");
                }, 
                visibility: function(event){
                    console.warn("TODO", event);
                },
                select_thread: function(event){
                    $(".nb-comment-highlight.selected").removeClass("selected");
                    $(".nb-comment-highlight[id_item="+event.value+"]").addClass("selected");

                    var viewTop = $(window).scrollTop();
                    // use window.innerHeight if available, else use document.body.clientHeight,
                    // else use documentElement.clientHeight
                    var viewHeight =
                        window.innerHeight || document.body.clientHeight || window.document.documentElement.clientHeight;
                    var viewBottom =
                        viewTop +
                        (viewHeight) * 0.9;
                    var elementTop = $(".nb-comment-highlight[id_item="+event.value+"]").offset().top;

                    if (viewTop > elementTop || viewBottom < elementTop) {

                        $("body, html").animate({
                            scrollTop: $(".nb-comment-highlight[id_item="+event.value+"]").offset().top - viewHeight / 4
                        });
                     }
                }
            }, 
            GLOB.html.id);

        rangy.init();
        
        $(window).scroll(function(evt){
                var timerID = _scrollTimerID;
                if (timerID !== null){
                    window.clearTimeout(timerID);
                    _scrollTimerID =  null;
                }
                timerID = window.setTimeout(function(){
                        $.concierge.logHistory("scrolling", ["s",$("html").scrollTop(),$(window).height(), _scrollCounter++, $("body").height(),$.concierge.get_state("file") ].join(","));
                    }, 300);               
                _scrollTimerID =  timerID;    
            });
        
        // Wrap elements with nb-comment-fresh which is then selected by jQuery and operated on properly;
        // the styled element must have an nb-comment-highlight class.
        cssApplier = rangy.createCssClassApplier("nb-comment-fresh", { normalize: true });

        // Make sure concierge won't steal our keys!
        $.concierge.keydown_block = false;

        // Global key-down monitor
        $(document).keydown(function(event) {
            // If there are no current drafts, we don't interfere.
            if ($(".nb-placeholder").length === 0) {
                return true;
            }

            // If we are currently interacting with an input, button, or textarea, we don't interfere.
            if (document.activeElement.nodeType === "INPUT" ||
                document.activeElement.nodeType === "BUTTON" ||
                document.activeElement.nodeType === "TEXTAREA") {
                return true;
            }

            // If certain key combinations are being pressed, do not interfere.
            if (event.altKey === true || event.ctrlKey === true) {
                return true;
            }

            // If the key is an escape, we discard the draft if it is empty
            if (event.keyCode === 27) {
                $.concierge.trigger({ type: "discard_if_empty", value: {}});
                return true;
            }

            // If the key is not a chracter, do not interfere.
            if (event.keyCode < 48 ||
               (event.keyCode > 90 && event.keyCoe < 96) ||
               (event.keyCode > 111 && event.keyCode < 186)) {
                return true;
            }

            // Keypress only has characters pressed, so we do not neet check for
            // arrow keys, or CTRL+C and other combinations
            $.concierge.trigger({ type: "focus_thread", value: {}});

        });

        // Initialize Highlighting Event
        $("body>*").not(".nb_sidebar").mouseup(function (event) {
                var sel = rangy.getSelection();

                if (sel.isCollapsed){
                    $.concierge.trigger({ type: "discard_if_empty", value: {}});
                    return;
                }

                if (sel.containsNode($(".nb_sidebar")[0], true)) {
                    $.concierge.trigger({ type: "discard_if_empty", value: {}});
                    return;
                }

                // must call before applyToRanges, otherwise sel is gone
                var element = event.target;

                if ($(element).hasClass("nb-comment-highlight")) {
                    element = ($(element).parents("*:not(.nb-comment-highlight)"))[0];
                }

                var range = sel.saveCharacterRanges(element);

                var target = getElementXPath(element);

                insertPlaceholderAnnotation(sel);

                if ( $(element).attr("data_char") === undefined) {
                    // we have a problem
                    $.L("Error: target does not have data_char attribute", element);
                }

                $.concierge.trigger({
                    type: "new_thread",
                    value: {
                        html5range:{
                            path1: target,
                            path2: range[0].backward,
                            offset1: range[0].characterRange.start, 
                            offset2: range[0].characterRange.end,
                            apparent_height: parseInt($(element).attr("data_char"), 10) +
                                Math.min(range[0].characterRange.start, range[0].characterRange.end)
                        },
                        suppressFocus: true
                    }
                });

                sel.restoreCharacterRanges(element, range);

            });

        GLOB.pers.store.register({
            update: function (action, payload, items_fieldname) {
                var key;

                if (items_fieldname === "draft") {
                    var draft;
                    for (draft in payload.diff) { break; }

                    if (action === "remove") {
                        $(".nb-comment-highlight.nb-placeholder[id_item=" + draft + "]").contents().unwrap();
                    } else if (action === "add") {
                        $(".nb-comment-highlight.nb-placeholder").attr("id_item", draft);
                    }

                }

                if (action === "remove" && items_fieldname === "location") {
                    for (key in payload.diff) {
                        $(".nb-comment-highlight[id_item=" + key + "]").contents().unwrap();
                    }
                }

                if (action === "add" && items_fieldname === "html5location") {
                    restoreBatch($.extend(true, {}, payload.diff), function(){ });
                }

        }}, {html5location: null, draft: null, location: null});

        // fix IE XPath implementation
        wgxpath.install();

    };

    // must be called only on inner-most element
    var hasConflicts = function (element) {
        return ($(element).parents(".nb-comment-highlight").length > 0);
    };

    // TODO: refactor such that there is more code re-use between placeAnnotation
    // on the one hand, and insert/activatePlaceholderAnnotation on the other.
    var placeAnnotation = function (selection, loc) {
        var uid = loc.id_location;

        // quit if annotation already placed
        if ($(".nb-comment-highlight[id_item=" + uid + "]").length > 0) {
            return;
        }

        // apply nb-comment-fresh to ranges
        cssApplier.applyToSelection(selection);
        selection.removeAllRanges();

        // jQuery Treatment
        $("span.nb-comment-fresh.nb-comment-highlight").removeClass("nb-comment-fresh").wrapInner('<span class="nb-comment-fresh" />');
        $("span.nb-comment-fresh")
            .addClass("nb-comment-highlight")
            .removeClass("nb-comment-fresh")
            .attr("id_item", uid)
            .hover(
                function(){$.concierge.trigger({type:"note_hover", value: uid});},
                function(){$.concierge.trigger({type:"note_out", value: uid});})
            .click(
                function (event) {
                    if (!rangy.getSelection().isCollapsed){ return;}

                    if (hasConflicts(this)) {
                        var ids = [];
                        var id = 0;

                        ids.push($(this).attr("id_item"));

                        $(this).parents(".nb-comment-highlight").each(function () {
                                ids.push($(this).attr("id_item"));
                        });

                        if ($(lastClicked.set).not(ids).length === 0 && $(ids).not(lastClicked.set).length === 0) {
                            for (id = 0; id < ids.length; id++) {
                                if (ids[id] === lastClicked.clicked) { break; }
                            }
                            id = (id + 1) % ids.length;
                        }

                        $.concierge.trigger({type:"select_thread", value: ids[id]});
                        lastClicked = {set: ids, clicked: ids[id]};

                    } else {
                        $.concierge.trigger({type:"select_thread", value: uid});
                        lastClicked = {set: [uid], clicked: uid};
                    }
                    event.stopPropagation();
            });
    };

    var insertPlaceholderAnnotation = function (selection) {
        // apply nb-comment-fresh to ranges
        cssApplier.applyToSelection(selection);
        selection.removeAllRanges();

        // jQuery Treatment
        $("span.nb-comment-fresh.nb-comment-highlight").removeClass("nb-comment-fresh").wrapInner('<span class="nb-comment-fresh" />');
        $("span.nb-comment-fresh")
            .addClass("nb-comment-highlight")
            .addClass("nb-placeholder")
            .removeClass("nb-comment-fresh")
            .attr("id_item", 0);

        // remove placeholder comment after 0.25 seconds if we do not receive a "draft created" event (i.e. the concierge
        // did not allow the creation of the draft). We check this by seeing if id_item is still 0.
        window.setTimeout(function() {
            $(".nb-placeholder[id_item=0]").contents().unwrap();
        }, 250);
    };

    GLOB.html.clearAnnotations = function () {
        $(".nb-comment-highlight").contents().unwrap();
    };

    var trim = function (text) {
        return text.replace(/^\s*|\s*$/g, "");
    };

    var trimLeft = function (text) {
        return text.replace(/^\s+/, "");
    };

    var trimRight = function (text) {
        return text.replace(/\s+$/, "");
    };

    // ************************************************************************************************
    // XPath

    /**
     * Gets an XPath for an element which describes its hierarchical location.
     */
    var getElementXPath = function (element) {
        if (element && element.id){
            return '//*[@id="' + element.id + '"]';
        }
        else{
            return getElementTreeXPath(element);
        }
    };

    var getElementTreeXPath = function (element) {
        var paths = [];

        // Use nodeName (instead of localName) so namespace prefix is included (if any).
        for (; element && element.nodeType === 1; element = element.parentNode) {
            var index = 0;
            var tagName, pathIndex, fullName;
            var terminate = false;

            if (element.id) {
                fullName = '/*[@id="' + element.id + '"]';
                terminate = true;
            } else {

                for (var sibling = element.previousSibling; sibling; sibling = sibling.previousSibling) {
                    // Ignore document type declaration.
                    if (sibling.nodeType === Node.DOCUMENT_TYPE_NODE){
                        continue;
                    }

                    if (sibling.nodeName === element.nodeName){
                        ++index;
                    }
                }

                tagName = element.nodeName.toLowerCase();
                pathIndex = (index ? "[" + (index + 1) + "]" : "");
                fullName = tagName + pathIndex;

            }

            paths.splice(0, 0, fullName);

            if (terminate) {
                break;
            }
        }

        return paths.length ? "/" + paths.join("/") : null;
    };

    var getElementsByXPath = function (doc, xpath) {
        var nodes = [];

        try {
            var result = doc.evaluate(xpath, doc, null, XPathResult.ANY_TYPE, null);
            for (var item = result.iterateNext() ; item; item = result.iterateNext()){
                nodes.push(item);}
        }
        catch (exc) {
            // Invalid xpath expressions make their way here sometimes.  If that happens,
            // we still want to return an empty set without an exception.
        }

        return nodes;
    };

})(NB);

/*
 * buildEmbed.js: build embedded NB 
 *
 Author 
 cf AUTHORS.txt 

 License
 Copyright (c) 2010-2012 Massachusetts Institute of Technology.
 MIT License (cf. MIT-LICENSE.txt or http://www.opensource.org/licenses/mit-license.php)
*/
/*global jQuery:true $:true NB$:true NB:true alert:true escape:false console:false*/

(function(GLOB){
    
    if ("NB$" in window){
        var $ = NB$;
    }
    var $str        = "NB$" in window ? "NB$" : "jQuery";

    
    var $vp;
    var id_ensemble = null;  
    GLOB.pers.iframe_id = "nb_iframe";
    var f_after_successful_login = function(){
        //SACHA: TODO. Do a better job that just displaying the user name, and maybe refactor with pers2._authenticate.
        //for now, just update user name and email on hover. :
        var uinfo = GLOB.conf.userinfo;
        if (!uinfo.guest){
            var screenname = uinfo.firstname === null ? $.E(uinfo.email): $.E(uinfo.firstname) + " " + $.E(uinfo.lastname);         
            $("#login-name").text(screenname).attr("title", $.E(uinfo.email));
        }
        
        //now move stuff here it's supposed to be: 
        $vp = $("<div class='nb-viewport'><div class='nb-widget-header' style='height:24px;' /></div>").prependTo(".nb_sidebar");
        $("#login-window").appendTo(".nb-widget-header"); // add this here so it's fixed as well
        //TODO: get id_ensemble from cookie or localStorage if available. 
        $.concierge.addConstants({res: 288, scale: 25, QUESTION: 1, STAR: 2 });
        $.concierge.addComponents({
                notes_loader:    function(P, cb){GLOB.pers.call("getNotes", P, cb);}, 
                    note_creator:    function(P, cb){GLOB.pers.call("saveNote", P, cb);},
                    note_editor:    function(P, cb){GLOB.pers.call("editNote", P, cb);}
            });   
        GLOB.pers.store = new GLOB.models.Store();
        GLOB.pers.call(
                   "getHTML5Info", {id_ensemble: id_ensemble, url: document.location.href}, 
                   function(payload){
                       //TODO: refactor (same as in step16.js:createStore)
                       GLOB.pers.store.create(payload, {
                               ensemble:    {pFieldName: "ensembles"}, 
            section:    {pFieldName: "sections", references: {id_ensemble: "ensemble"}},            
                                   file:    {pFieldName: "files", references: {id_ensemble: "ensemble", id_folder: "folder"}}, 
                                   folder: {pFieldName: "folders", references: {id_ensemble: "ensemble", id_parent: "folder"}}, 
                                   comment:{references: {id_location: "location"}},
                                   location:{references: {id_ensemble: "ensemble", id_source: "file"}}, 
                                   html5location:{references: {id_location: "location"}}, 
                                   link: {pFieldName: "links"}, 
                                   mark: {}, 
                                   threadmark: {pFieldName: "threadmarks", references: {location_id: "location"}},
                                   draft: {},
                                   seen:{references: {id_location: "location"}}
                           });
                       
                       //get the section info as well as info whether user is admin: 
                       GLOB.pers.call("getSectionsInfo", {id_ensemble: NB.pers.store.get("ensemble", {}).first().ID}, function(P3){
                           var m = GLOB.pers.store;
                           m.add("section", P3["sections"]);
                           NB.pers.store.get("ensemble", {}).first().admin=true; //we only get a callback if we're an admin for this ensemble
                       });
                       
                       //TODO: Take something else than first id_source
                       var source = GLOB.pers.id_source = NB.pers.store.get("file").first();
                       if (source === null){
                           $("<div class=\"nb-error\"><p>The URL for this page isn't registered on NB. Click this message to close the NB sidebar.</p></div>").
                             appendTo(".nb_sidebar>.nb-viewport").click(function() {
                                 $(".nb_sidebar").fadeOut(400);
                             });
                           return;
                       }
                       var id_source = GLOB.pers.id_source = NB.pers.store.get("file").first().ID;
                       $.concierge.setHistoryHelper(function(_payload, cb){
                               _payload["__return"] = {type:"newNotesOnFile", a:{id_source: GLOB.pers.id_source}};
                               GLOB.pers.call("log_history", _payload, cb);
                           }, 120000,  function(P2){    
                               //here we override the callback so that we can get new notes.
                                   
                               var m = GLOB.pers.store;
                               m.add("comment", P2["comments"]);
                               m.add("location", P2["locations"]);
                               m.add("html5location", P2["html5locations"]);
                               var msg="";
                               var l,c;
                               for (var i in P2["comments"]){
                                   c = m.o.comment[i];
                                   l = m.o.location[c.ID_location];
                                   if (c.id_author !==  $.concierge.get_component("get_userinfo")().id){    //do nothing if I'm the author:         
                                       msg+="<a href='javascript:"+$str+".concierge.trigger({type: \"select_thread\", value:\""+l.ID+"\"})'>New comment on page "+l.page+"</a><br/>";
                                   }
                               }
                               if (msg !== ""){
                                   $.I(msg, true);
                               }
                           });    
                       $.concierge.trigger({type:"file", value: id_source});

                       //let's create perspective here: 
                       var $pers        = $("<div id='pers_"+id_source+"'/>").appendTo($vp);

                       var notesview = {
                           priority: 1, 
                           min_width: 650, 
                           desired_width: 35, 
                           min_height: 1000, 
                           desired_height: 50, 
                           content: function($div){
                               $div.notepaneView();
                               $div.notepaneView("set_model",GLOB.pers.store );
                           }
                       }; 
                       var threadview = {
                           priority: 1, 
                           min_width: 650, 
                           desired_width: 35,  
                           min_height: 1000, 
                           desired_height: 50, 
                           content: function($div){
                               $div.threadview();
                               $div.threadview("set_model",GLOB.pers.store );                
                           }
                       };
                       var editorview = {
                           priority: 1, 
                           min_width: 650, 
                           desired_width: 35,  
                           min_height: 1500, 
                           desired_height: 50, 
                           transcient: true,  
                           content: function($div){
                               var m = GLOB.pers.store;
                               var ensemble = m.o.ensemble[m.o.file[id_source].id_ensemble];                    
                               $div.editorview({allowStaffOnly: ensemble.allow_staffonly, allowAnonymous: ensemble.allow_anonymous});
                               $div.editorview("set_model",GLOB.pers.store );                
                           }
                       };
                      
                       
                       //SACHA FIXME: Hack we embed the following into a delay because FF doesn't compute the right window height if we execute this right away
                       setTimeout(function(){                               
                          $pers.perspective({
                                  ext_separator: {
                                      container: ".nb_sidebar", 
                                          orientation: "vertical"
                                      
                                          },
                               height: function(){
                                   return $vp.height() - ($pers.offset().top - $vp.offset().top);
                               }, //3rd term is to account for the fact we have NB embedded as part of widget that has a 'fixed' position
                               listens: {
                                   page_peek: function(evt){
                                       //need to add 1 value for uniqueness
                                       $.concierge.logHistory("page", evt.value+"|"+id_source+"|"+(new Date()).getTime());
                                   }, 
                                   close_view: function(evt){
                                       if (evt.value === this.l.element[0].id){
                                           delete($.concierge.features.doc_viewer[id_source]);
                                       }
                                       $.L("closeview: ", evt, this.l.element[0].id);
                                   }                    
                               }, 
                               views: {
                                   v1: { data: notesview }, 
                                   v2: {
                                       children: {
                                           v1: { data: threadview},
                                           v2: {data: editorview},
                                           orientation: "horizontal"
                                   }},
                                   orientation: "horizontal"
                                   }
                           });
                       
                       //end of perspective creation code

                       var f = GLOB.pers.store.o.file[id_source];
                       $.concierge.get_component("notes_loader")( {file:id_source }, function(P){
                               var m = GLOB.pers.store;
                               m.add("seen", P["seen"]);
                               m.add("comment", P["comments"]);
                               m.add("location", P["locations"]);
                               m.add("html5location", P["html5locations"]);
                               m.add("link", P["links"]);
                               m.add("threadmark", P["threadmarks"]);
                               //now check if need to move to a given annotation: 
                               if ("c" in GLOB.pers.params){
                                   window.setTimeout(function(){
                                           var id =  GLOB.pers.params.c;
                                           var c = m.get("comment", {ID: id}).items[id];
                                           if ("reply" in GLOB.pers.params){
                                               $.concierge.trigger({type: "reply_thread", value: c.ID});
                                           }            
                                           $.concierge.trigger({type: "select_thread", value: c.ID_location});
                                           

                                       }, 300);
                               }
                               else if ("p" in GLOB.pers.params){
                                   window.setTimeout(function(){
                                           var page = GLOB.pers.params.p;
                                           $.concierge.trigger({type: "page", value: page});
                                       }, 300);
                               }
                               else{
                                   window.setTimeout(function(){
                                           $.concierge.trigger({type: "page", value: 1});
                                       }, 300);
                               }
                           });
                           }, 1000);

                       $("body").addClass("nb-active");
                       $(function(){GLOB.html.init();});
                   },
                   function(P){
                       $(".nb-widget-header").append("<button id='login_to_nb'>Login to NB</button>");
                       $("#login_to_nb").click(function(evt){
                               //sacha: disable this for now. 
                               //console.log("opening iframe");
                               //                               $("#"+GLOB.pers.iframe_id).removeClass("nb_hidden");
                               $.concierge.get_component("login_user_menu")();
                               
                       });
                   });    

};
    GLOB.pers.ckey_from_iframe = null;
    GLOB.pers.f_poll_iframe = function(){
        console.log("polling iframe");
        $("#"+GLOB.pers.iframe_id)[0].contentWindow.postMessage("confkey", "http://localhost:8001");
        if (GLOB.pers.ckey_from_iframe === null){
            setTimeout(GLOB.pers.f_poll_iframe, 500);
        }
        else{
            console.log("got ckey - no more polling", GLOB.pers.ckey_from_iframe);
        }
    }; 
    GLOB.pers.init = function(){
        GLOB.pers.connection_id = 0;
        GLOB.pers.embedded = true;
        //add our CSS
        var cur =  GLOB.pers.currentScript;
        var server_info =  cur.src.match(/([^:]*):\/\/([^\/]*)/);    
        var server_url = server_info[1]+"://"+server_info[2];
        GLOB.pers.add_css(server_url+"/content/compiled/embed_NB.css");
        //GLOB.pers.openid_url=server_url+"/openid/login?next=/embedopenid";
        //sacha: disabled this as well for now. 
        GLOB.pers.openid_url="";

        // Make sure concierge won't steal our keys!
        $.concierge.keydown_block = false;

        //register for some events: 
        $.concierge.addListeners(GLOB.pers, {
                successful_login: function(evt){
                    GLOB.auth.set_cookie("ckey", evt.value.ckey);
                    GLOB.auth.set_cookie("userinfo", escape(JSON.stringify(evt.value)));
                    GLOB.conf.userinfo = evt.value;
                    $.L("Welcome TO NB !");
                    $("#splash-welcome").parent().dialog("destroy");
                    
                    f_after_successful_login();
                    
                    
                }
            }, "globalPersObject");
        
        //tell who to make rpc requests to
        GLOB.conf.servers.rpc=GLOB.pers.server_url;

        $("body").append("<div class='nb_sidebar' class='nb_inactive'></div><iframe src='"+GLOB.pers.openid_url+"' class='nb_iframe nb_hidden' id='"+GLOB.pers.iframe_id+"'></iframe>");
        
        $("#nb_loginbutton").click(function(){
                $.concierge.get_component("login_user_menu")();
            });

        //if authenticated already, let's proceed: 
        if (GLOB.conf.userinfo){
            f_after_successful_login();
        }

        window.addEventListener('message', function(e){
                console.log("got event: ", e);
                //TODO: clearTimeout
            }, false);

        

    }; 
    
    jQuery(function(){
            GLOB.pers.params = GLOB.dom.getParams(); 
            GLOB.pers.preinit();
        });

    })(NB);
