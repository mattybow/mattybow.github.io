!function t(e,r,n){function i(s,a){if(!r[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=r[s]={exports:{}};e[s][0].call(c.exports,function(t){var r=e[s][1][t];return i(r?r:t)},c,c.exports,t,e,r,n)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}({1:[function(t){(function(t,e){!function(t){"use strict";function e(t){return{configurable:!0,enumerable:!1,value:t,writable:!0}}function r(){return"__$"+Math.floor(1e9*Math.random())+"$"+ ++H+"$__"}function n(){var t=r();return z[t]=!0,t}function i(t){return"object"==typeof t&&t instanceof a}function o(t){return i(t)?"symbol":typeof t}function s(t){var e=new a(t);if(!(this instanceof s))return e;throw new TypeError("Symbol cannot be new'ed")}function a(t){var e=r();P(this,q,{value:this}),P(this,D,{value:e}),P(this,U,{value:t}),c(this),W[e]=this}function u(t){var e=t[Y];return e&&e.self===t?e:B(t)?(X.hash.value=V++,X.self.value=t,K.value=_(null,X),P(t,Y,K),K.value):void 0}function c(t){return u(t),A.apply(this,arguments)}function l(t){return u(t),L.apply(this,arguments)}function f(t){return u(t),I.apply(this,arguments)}function h(t){return i(t)?t[D]:t}function p(t){for(var e=[],r=C(t),n=0;n<r.length;n++){var i=r[n];W[i]||z[i]||e.push(i)}return e}function d(t,e){return M(t,h(e))}function m(t){for(var e=[],r=C(t),n=0;n<r.length;n++){var i=W[r[n]];i&&e.push(i)}return e}function g(t){return $.call(this,h(t))}function v(e){return t.traceur&&t.traceur.options[e]}function b(t,e,r){var n,o;return i(e)&&(n=e,e=e[D]),t[e]=r,n&&(o=M(t,e))&&P(t,e,{enumerable:!1}),r}function y(t,e,r){return i(e)&&(r.enumerable&&(r=_(r,{enumerable:{value:!1}})),e=e[D]),P(t,e,r),t}function j(t){P(t,"defineProperty",{value:y}),P(t,"getOwnPropertyNames",{value:p}),P(t,"getOwnPropertyDescriptor",{value:d}),P(t.prototype,"hasOwnProperty",{value:g}),P(t,"freeze",{value:c}),P(t,"preventExtensions",{value:l}),P(t,"seal",{value:f}),t.getOwnPropertySymbols=m}function O(t){for(var e=1;e<arguments.length;e++)for(var r=C(arguments[e]),n=0;n<r.length;n++){var i=r[n];z[i]||!function(e,r){P(t,r,{get:function(){return e[r]},enumerable:!0})}(arguments[e],r[n])}return t}function w(t){return null!=t&&("object"==typeof t||"function"==typeof t)}function x(t){if(null==t)throw k();return E(t)}function S(t){if(!w(t))throw k(t+" is not an Object");return t}function R(t){t.Symbol=s,j(t.Object)}if(!t.$traceurRuntime){var E=Object,k=TypeError,_=E.create,T=E.defineProperties,P=E.defineProperty,A=E.freeze,M=E.getOwnPropertyDescriptor,C=E.getOwnPropertyNames,N=E.keys,$=E.prototype.hasOwnProperty,L=(E.prototype.toString,Object.preventExtensions),I=Object.seal,B=Object.isExtensible,F={"void":function(){},any:function(){},string:function(){},number:function(){},"boolean":function(){}},G=e,H=0,D=r(),U=r(),q=r(),W=_(null),z=_(null);P(s.prototype,"constructor",e(s)),P(s.prototype,"toString",G(function(){var t=this[q];if(!v("symbols"))return t[D];if(!t)throw TypeError("Conversion from symbol to string");var e=t[U];return void 0===e&&(e=""),"Symbol("+e+")"})),P(s.prototype,"valueOf",G(function(){var t=this[q];if(!t)throw TypeError("Conversion from symbol to string");return v("symbols")?t:t[D]})),P(a.prototype,"constructor",e(s)),P(a.prototype,"toString",{value:s.prototype.toString,enumerable:!1}),P(a.prototype,"valueOf",{value:s.prototype.valueOf,enumerable:!1});var Y=n(),K={value:void 0},X={hash:{value:void 0},self:{value:void 0}},V=0;s.iterator=s(),c(a.prototype),R(t),t.$traceurRuntime={assertObject:S,createPrivateName:n,exportStar:O,getOwnHashObject:u,privateNames:z,setProperty:b,setupGlobals:R,toObject:x,toProperty:h,type:F,"typeof":o,defineProperties:T,defineProperty:P,getOwnPropertyDescriptor:M,getOwnPropertyNames:C,keys:N}}}("undefined"!=typeof e?e:this),function(){"use strict";function t(){for(var t=[],r=0,n=0;n<arguments.length;n++)for(var i=e(arguments[n]),o=0;o<i.length;o++)t[r++]=i[o];return t}var e=$traceurRuntime.toObject;$traceurRuntime.spread=t}(),function(){"use strict";function t(t,e){var r=m(t);do{var n=p(r,e);if(n)return n;r=m(r)}while(r);return void 0}function e(t,e,n,i){return r(t,e,n).apply(t,i)}function r(e,r,n){var i=t(r,n);return i?i.get?i.get.call(e):i.value:void 0}function n(e,r,n,i){var o=t(r,n);if(o&&o.set)return o.set.call(e,i),i;throw c("super has no setter '"+n+"'.")}function i(t){for(var e,r={},n=d(t),i=0;i<n.length;i++){var e=n[i];r[e]=p(t,e)}return r}function o(t,e,r,n){return h(e,"constructor",{value:t,configurable:!0,enumerable:!1,writable:!0}),arguments.length>3?("function"==typeof n&&(t.__proto__=n),t.prototype=l(s(n),i(e))):t.prototype=e,h(t,"prototype",{configurable:!1,writable:!1}),f(t,i(r))}function s(t){if("function"==typeof t){var e=t.prototype;if(u(e)===e||null===e)return t.prototype}if(null===t)return null;throw new c}function a(t,r,n){null!==m(r)&&e(t,r,"constructor",n)}var u=Object,c=TypeError,l=u.create,f=$traceurRuntime.defineProperties,h=$traceurRuntime.defineProperty,p=$traceurRuntime.getOwnPropertyDescriptor,d=$traceurRuntime.getOwnPropertyNames,m=Object.getPrototypeOf;$traceurRuntime.createClass=o,$traceurRuntime.defaultSuperCall=a,$traceurRuntime.superCall=e,$traceurRuntime.superGet=r,$traceurRuntime.superSet=n}(),function(){"use strict";function t(t){return{configurable:!0,enumerable:!1,value:t,writable:!0}}function e(t){return new Error("Traceur compiler bug: invalid state in state machine: "+t)}function r(){this.state=0,this.GState=v,this.storedException=void 0,this.finallyFallThrough=void 0,this.sent_=void 0,this.returnValue=void 0,this.tryStack_=[]}function n(t,e,r,n){switch(t.GState){case b:throw new Error('"'+r+'" on executing generator');case j:if("next"==r)return{value:void 0,done:!0};throw new Error('"'+r+'" on closed generator');case v:if("throw"===r)throw t.GState=j,n;if(void 0!==n)throw g("Sent value to newborn generator");case y:t.GState=b,t.action=r,t.sent=n;var i=e(t),o=i===t;return o&&(i=t.returnValue),t.GState=o?j:y,{value:i,done:o}}}function i(){}function o(){}function s(t,e,n){var i=l(t,n),o=new r,s=m(e.prototype);return s[x]=o,s[S]=i,s}function a(t){return t.prototype=m(o.prototype),t.__proto__=o,t}function u(){r.call(this),this.err=void 0;var t=this;t.result=new Promise(function(e,r){t.resolve=e,t.reject=r})}function c(t,e){var r=l(t,e),n=new u;return n.createCallback=function(t){return function(e){n.state=t,n.value=e,r(n)}},n.errback=function(t){f(n,t),r(n)},r(n),n.result}function l(t,e){return function(r){for(;;)try{return t.call(e,r)}catch(n){f(r,n)}}}function f(t,e){t.storedException=e;var r=t.tryStack_[t.tryStack_.length-1];return r?(t.state=void 0!==r.catch?r.catch:r.finally,void 0!==r.finallyFallThrough&&(t.finallyFallThrough=r.finallyFallThrough),void 0):(t.handleException(e),void 0)}var h=$traceurRuntime.createPrivateName,p=$traceurRuntime.defineProperties,d=$traceurRuntime.defineProperty,m=Object.create,g=TypeError,v=0,b=1,y=2,j=3,O=-2,w=-3;r.prototype={pushTry:function(t,e){if(null!==e){for(var r=null,n=this.tryStack_.length-1;n>=0;n--)if(void 0!==this.tryStack_[n].catch){r=this.tryStack_[n].catch;break}null===r&&(r=w),this.tryStack_.push({"finally":e,finallyFallThrough:r})}null!==t&&this.tryStack_.push({"catch":t})},popTry:function(){this.tryStack_.pop()},get sent(){return this.maybeThrow(),this.sent_},set sent(t){this.sent_=t},get sentIgnoreThrow(){return this.sent_},maybeThrow:function(){if("throw"===this.action)throw this.action="next",this.sent_},end:function(){switch(this.state){case O:return this;case w:throw this.storedException;default:throw e(this.state)}},handleException:function(t){throw this.GState=j,this.state=O,t}};var x=h(),S=h();i.prototype=o,d(o,"constructor",t(i)),o.prototype={constructor:o,next:function(t){return n(this[x],this[S],"next",t)},"throw":function(t){return n(this[x],this[S],"throw",t)}},p(o.prototype,{constructor:{enumerable:!1},next:{enumerable:!1},"throw":{enumerable:!1}}),Object.defineProperty(o.prototype,Symbol.iterator,t(function(){return this})),u.prototype=m(r.prototype),u.prototype.end=function(){switch(this.state){case O:this.resolve(this.returnValue);break;case w:this.reject(this.storedException);break;default:this.reject(e(this.state))}},u.prototype.handleException=function(){this.state=w},$traceurRuntime.asyncWrap=c,$traceurRuntime.initGeneratorFunction=a,$traceurRuntime.createGeneratorInstance=s}(),function(){function t(t,e,r,n,i,o,s){var a=[];return t&&a.push(t,":"),r&&(a.push("//"),e&&a.push(e,"@"),a.push(r),n&&a.push(":",n)),i&&a.push(i),o&&a.push("?",o),s&&a.push("#",s),a.join("")}function e(t){return t.match(a)}function r(t){if("/"===t)return"/";for(var e="/"===t[0]?"/":"",r="/"===t.slice(-1)?"/":"",n=t.split("/"),i=[],o=0,s=0;s<n.length;s++){var a=n[s];switch(a){case"":case".":break;case"..":i.length?i.pop():o++;break;default:i.push(a)}}if(!e){for(;o-->0;)i.unshift("..");0===i.length&&i.push(".")}return e+i.join("/")+r}function n(e){var n=e[u.PATH]||"";return n=r(n),e[u.PATH]=n,t(e[u.SCHEME],e[u.USER_INFO],e[u.DOMAIN],e[u.PORT],e[u.PATH],e[u.QUERY_DATA],e[u.FRAGMENT])}function i(t){var r=e(t);return n(r)}function o(t,r){var i=e(r),o=e(t);if(i[u.SCHEME])return n(i);i[u.SCHEME]=o[u.SCHEME];for(var s=u.SCHEME;s<=u.PORT;s++)i[s]||(i[s]=o[s]);if("/"==i[u.PATH][0])return n(i);var a=o[u.PATH],c=a.lastIndexOf("/");return a=a.slice(0,c+1)+i[u.PATH],i[u.PATH]=a,n(i)}function s(t){if(!t)return!1;if("/"===t[0])return!0;var r=e(t);return r[u.SCHEME]?!0:!1}var a=new RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),u={SCHEME:1,USER_INFO:2,DOMAIN:3,PORT:4,PATH:5,QUERY_DATA:6,FRAGMENT:7};$traceurRuntime.canonicalizeUrl=i,$traceurRuntime.isAbsolute=s,$traceurRuntime.removeDotSegments=r,$traceurRuntime.resolveUrl=o}(),function(t){"use strict";function e(t){if(t){var e=d.normalize(t);return u[e]}}function r(t){var e=arguments[1],r=Object.create(null);return Object.getOwnPropertyNames(t).forEach(function(n){var i,o;if(e===p){var s=Object.getOwnPropertyDescriptor(t,n);s.get&&(i=s.get)}i||(o=t[n],i=function(){return o}),Object.defineProperty(r,n,{get:i,enumerable:!0})}),Object.preventExtensions(r),r}var n,i=$traceurRuntime.assertObject($traceurRuntime),o=i.canonicalizeUrl,s=i.resolveUrl,a=i.isAbsolute,u=Object.create(null);n=t.location&&t.location.href?s(t.location.href,"./"):"";var c=function(t,e){this.url=t,this.value_=e};$traceurRuntime.createClass(c,{},{});var l=function(t,e){$traceurRuntime.superCall(this,f.prototype,"constructor",[t,null]),this.func=e},f=l;$traceurRuntime.createClass(l,{getUncoatedModule:function(){return this.value_?this.value_:this.value_=this.func.call(t)}},{},c);var h=Object.create(null),p={},d={normalize:function(t,e){if("string"!=typeof t)throw new TypeError("module name must be a string, not "+typeof t);if(a(t))return o(t);if(/[^\.]\/\.\.\//.test(t))throw new Error("module name embeds /../: "+t);return"."===t[0]&&e?s(e,t):o(t)},get:function(t){var n=e(t);if(!n)return void 0;var i=h[n.url];return i?i:(i=r(n.getUncoatedModule(),p),h[n.url]=i)},set:function(t,e){t=String(t),u[t]=new l(t,function(){return e}),h[t]=e},get baseURL(){return n},set baseURL(t){n=String(t)},registerModule:function(t,e){var r=d.normalize(t);if(u[r])throw new Error("duplicate module named "+r);u[r]=new l(r,e)},bundleStore:Object.create(null),register:function(t,e,r){e&&(e.length||r.length)?this.bundleStore[t]={deps:e,execute:function(){var t=arguments,n={};e.forEach(function(e,r){return n[e]=t[r]});var i=r.call(this,n);return i.execute.call(this),i.exports}}:this.registerModule(t,r)},getAnonymousModule:function(e){return new r(e.call(t),p)},getForTesting:function(t){var e=this;return this.testingPrefix_||Object.keys(h).some(function(t){var r=/(traceur@[^\/]*\/)/.exec(t);return r?(e.testingPrefix_=r[1],!0):void 0}),this.get(this.testingPrefix_+t)}};d.set("@traceur/src/runtime/ModuleStore",new r({ModuleStore:d}));var m=$traceurRuntime.setupGlobals;$traceurRuntime.setupGlobals=function(t){m(t)},$traceurRuntime.ModuleStore=d,t.System={register:d.register.bind(d),get:d.get,set:d.set,normalize:d.normalize},$traceurRuntime.getModuleImpl=function(t){var r=e(t);return r&&r.getUncoatedModule()}}("undefined"!=typeof e?e:this),System.register("traceur-runtime@0.0.42/src/runtime/polyfills/utils",[],function(){"use strict";function t(t){return 0|t}function e(t){return t&&("object"==typeof t||"function"==typeof t)}function r(t){return"function"==typeof t}function n(t){return t=+t,isNaN(t)?0:isFinite(t)&&0!==t?t>0?Math.floor(t):Math.ceil(t):t}function i(t){var e=n(t);return 0>e?0:Math.min(e,s)}var o=$traceurRuntime.toObject,s=Math.pow(2,53)-1;return{get toObject(){return o},get toUint32(){return t},get isObject(){return e},get isCallable(){return r},get toInteger(){return n},get toLength(){return i}}}),System.register("traceur-runtime@0.0.42/src/runtime/polyfills/Array",[],function(){"use strict";function t(t){var e=void 0!==arguments[1]?arguments[1]:0,r=arguments[2],n=a(this),i=s(n.length),u=o(e),c=void 0!==r?o(r):i;for(u=0>u?Math.max(i+u,0):Math.min(u,i),c=0>c?Math.max(i+c,0):Math.min(c,i);c>u;)n[u]=t,u++;return n}function e(t){var e=arguments[1];return n(this,t,e)}function r(t){var e=arguments[1];return n(this,t,e,!0)}function n(t,e){var r=arguments[2],n=void 0!==arguments[3]?arguments[3]:!1,i=a(t),o=s(i.length);if(!u(e))throw TypeError();for(var c=0;o>c;c++)if(c in i){var l=i[c];if(e.call(r,l,c,i))return n?c:l}return n?-1:void 0}var i=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/utils")),o=i.toInteger,s=i.toLength,a=i.toObject,u=i.isCallable;return{get fill(){return t},get find(){return e},get findIndex(){return r}}}),System.register("traceur-runtime@0.0.42/src/runtime/polyfills/ArrayIterator",[],function(){"use strict";function t(t,e){var r=a(t),n=new h;return n.iteratorObject_=r,n.arrayIteratorNextIndex_=0,n.arrayIterationKind_=e,n}function e(t,e){return{value:t,done:e}}function r(){return t(this,f)}function n(){return t(this,c)}function i(){return t(this,l)}var o,s=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/utils")),a=s.toObject,u=s.toUint32,c=1,l=2,f=3,h=function(){};return $traceurRuntime.createClass(h,(o={},Object.defineProperty(o,"next",{value:function(){var t=a(this),r=t.iteratorObject_;if(!r)throw new TypeError("Object is not an ArrayIterator");var n=t.arrayIteratorNextIndex_,i=t.arrayIterationKind_,o=u(r.length);return n>=o?(t.arrayIteratorNextIndex_=1/0,e(void 0,!0)):(t.arrayIteratorNextIndex_=n+1,i==l?e(r[n],!1):i==f?e([n,r[n]],!1):e(n,!1))},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(o,Symbol.iterator,{value:function(){return this},configurable:!0,enumerable:!0,writable:!0}),o),{}),{get entries(){return r},get keys(){return n},get values(){return i}}}),System.register("traceur-runtime@0.0.42/src/runtime/polyfills/Map",[],function(){"use strict";function t(t,e){if(r(e)){var i=n(e);return i&&t.objectIndex_[i.hash]}return"string"==typeof e?t.stringIndex_[e]:t.primitiveIndex_[e]}function e(t){t.entries_=[],t.objectIndex_=Object.create(null),t.stringIndex_=Object.create(null),t.primitiveIndex_=Object.create(null),t.deletedCount_=0}var r=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/utils")).isObject,n=$traceurRuntime.getOwnHashObject,i=Object.prototype.hasOwnProperty,o={},s=function(){var t=arguments[0];if(!r(this))throw new TypeError("Constructor Map requires 'new'");if(i.call(this,"entries_"))throw new TypeError("Map can not be reentrantly initialised");if(e(this),null!==t&&void 0!==t){var n=t[Symbol.iterator];if(void 0!==n)for(var o,s=t[Symbol.iterator]();!(o=s.next()).done;){var a=$traceurRuntime.assertObject(o.value),u=a[0],c=a[1];this.set(u,c)}}};return $traceurRuntime.createClass(s,{get size(){return this.entries_.length/2-this.deletedCount_},get:function(e){var r=t(this,e);return void 0!==r?this.entries_[r+1]:void 0},set:function(e,i){var o=r(e),s="string"==typeof e,a=t(this,e);if(void 0!==a)this.entries_[a+1]=i;else if(a=this.entries_.length,this.entries_[a]=e,this.entries_[a+1]=i,o){var u=n(e),c=u.hash;this.objectIndex_[c]=a}else s?this.stringIndex_[e]=a:this.primitiveIndex_[e]=a;return this},has:function(e){return void 0!==t(this,e)},"delete":function(t){var e,i,s=r(t),a="string"==typeof t;if(s){var u=n(t);u&&(e=this.objectIndex_[i=u.hash],delete this.objectIndex_[i])}else a?(e=this.stringIndex_[t],delete this.stringIndex_[t]):(e=this.primitiveIndex_[t],delete this.primitiveIndex_[t]);void 0!==e&&(this.entries_[e]=o,this.entries_[e+1]=void 0,this.deletedCount_++)},clear:function(){e(this)},forEach:function(t){for(var e=arguments[1],r=0,n=this.entries_.length;n>r;r+=2){var i=this.entries_[r],s=this.entries_[r+1];i!==o&&t.call(e,s,i,this)}}},{}),{get Map(){return s}}}),System.register("traceur-runtime@0.0.42/src/runtime/polyfills/Object",[],function(){"use strict";function t(t,e){return t===e?0!==t||1/t===1/e:t!==t&&e!==e}function e(t){for(var e=1;e<arguments.length;e++){var r,n=arguments[e],i=a(n),o=i.length;for(r=0;o>r;r++){var s=i[r];u[s]||(t[s]=n[s])}}return t}function r(t,e){var r,n,a=s(e),c=a.length;for(r=0;c>r;r++){var l=a[r];u[l]||(n=o(e,a[r]),i(t,a[r],n))}return t}var n=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/utils")),n=(n.toInteger,n.toLength,n.toObject,n.isCallable,$traceurRuntime.assertObject($traceurRuntime)),i=n.defineProperty,o=n.getOwnPropertyDescriptor,s=n.getOwnPropertyNames,a=n.keys,u=n.privateNames;return{get is(){return t},get assign(){return e},get mixin(){return r}}}),System.register("traceur-runtime@0.0.42/node_modules/rsvp/lib/rsvp/asap",[],function(){"use strict";function e(){return function(){t.nextTick(i)}}function r(){var t=0,e=new u(i),r=document.createTextNode("");return e.observe(r,{characterData:!0}),function(){r.data=t=++t%2}}function n(){return function(){setTimeout(i,1)}}function i(){for(var t=0;t<c.length;t++){var e=c[t],r=e[0],n=e[1];r(n)}c=[]}var o,s=function(t,e){var r=c.push([t,e]);1===r&&o()},a="undefined"!=typeof window?window:{},u=a.MutationObserver||a.WebKitMutationObserver,c=[];return o="undefined"!=typeof t&&"[object process]"==={}.toString.call(t)?e():u?r():n(),{get default(){return s}}}),System.register("traceur-runtime@0.0.42/src/runtime/polyfills/Promise",[],function(){"use strict";function t(t){return t&&"object"==typeof t&&void 0!==t.status_}function e(t){return t}function r(t){throw t}function n(t){var n=void 0!==arguments[1]?arguments[1]:e,o=void 0!==arguments[2]?arguments[2]:r,s=i(t.constructor);switch(t.status_){case void 0:throw TypeError;case 0:t.onResolve_.push(n,s),t.onReject_.push(o,s);break;case 1:l(t.value_,[n,s]);break;case-1:l(t.value_,[o,s])}return s.promise}function i(t){if(this===v){var e=s(new v(m));return{promise:e,resolve:function(t){a(e,t)},reject:function(t){u(e,t)}}}var r={};return r.promise=new t(function(t,e){r.resolve=t,r.reject=e}),r}function o(t,e,r,n,i){return t.status_=e,t.value_=r,t.onResolve_=n,t.onReject_=i,t}function s(t){return o(t,0,void 0,[],[])}function a(t,e){c(t,1,e,t.onResolve_)}function u(t,e){c(t,-1,e,t.onReject_)}function c(t,e,r,n){0===t.status_&&(l(r,n),o(t,e,r))}function l(t,e){d(function(){for(var r=0;r<e.length;r+=2)f(t,e[r],e[r+1])})}function f(e,r,i){try{var o=r(e);if(o===i.promise)throw new TypeError;t(o)?n(o,i.resolve,i.reject):i.resolve(o)}catch(s){try{i.reject(s)}catch(s){}}}function h(t){return t&&("object"==typeof t||"function"==typeof t)}function p(e,r){if(!t(r)&&h(r)){var n;try{n=r.then}catch(o){var s=b.call(e,o);return r[y]=s,s}if("function"==typeof n){var a=r[y];if(a)return a;var u=i(e);r[y]=u.promise;try{n.call(r,u.resolve,u.reject)}catch(o){u.reject(o)}return u.promise}}return r}var d=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/node_modules/rsvp/lib/rsvp/asap")).default,m={},g=function(t){if(t!==m){if("function"!=typeof t)throw new TypeError;var e=s(this);try{t(function(t){a(e,t)},function(t){u(e,t)})}catch(r){u(e,r)}}};$traceurRuntime.createClass(g,{"catch":function(t){return this.then(void 0,t)},then:function(i,o){"function"!=typeof i&&(i=e),"function"!=typeof o&&(o=r);var s=this,a=this.constructor;return n(this,function(e){return e=p(a,e),e===s?o(new TypeError):t(e)?e.then(i,o):i(e)},o)}},{resolve:function(t){return this===v?o(new v(m),1,t):new this(function(e){e(t)})},reject:function(t){return this===v?o(new v(m),-1,t):new this(function(e,r){r(t)})},cast:function(e){if(e instanceof this)return e;if(t(e)){var r=i(this);return n(e,r.resolve,r.reject),r.promise}return this.resolve(e)},all:function(t){var e=i(this),r=[];try{var n=t.length;if(0===n)e.resolve(r);else for(var o=0;o<t.length;o++)this.resolve(t[o]).then(function(t,i){r[t]=i,0===--n&&e.resolve(r)}.bind(void 0,o),function(t){e.reject(t)})}catch(s){e.reject(s)}return e.promise},race:function(t){var e=i(this);try{for(var r=0;r<t.length;r++)this.resolve(t[r]).then(function(t){e.resolve(t)},function(t){e.reject(t)})}catch(n){e.reject(n)}return e.promise}});var v=g,b=v.reject,y="@@thenable";return{get Promise(){return g}}}),System.register("traceur-runtime@0.0.42/src/runtime/polyfills/String",[],function(){"use strict";function t(t){var e=String(this);if(null==this||"[object RegExp]"==a.call(t))throw TypeError();var r=e.length,n=String(t),i=(n.length,arguments.length>1?arguments[1]:void 0),o=i?Number(i):0;isNaN(o)&&(o=0);var s=Math.min(Math.max(o,0),r);return u.call(e,n,o)==s}function e(t){var e=String(this);if(null==this||"[object RegExp]"==a.call(t))throw TypeError();var r=e.length,n=String(t),i=n.length,o=r;if(arguments.length>1){var s=arguments[1];void 0!==s&&(o=s?Number(s):0,isNaN(o)&&(o=0))}var u=Math.min(Math.max(o,0),r),l=u-i;return 0>l?!1:c.call(e,n,l)==l}function r(t){if(null==this)throw TypeError();var e=String(this),r=e.length,n=String(t),i=(n.length,arguments.length>1?arguments[1]:void 0),o=i?Number(i):0;isNaN(o)&&(o=0);Math.min(Math.max(o,0),r);return-1!=u.call(e,n,o)}function n(t){if(null==this)throw TypeError();var e=String(this),r=t?Number(t):0;if(isNaN(r)&&(r=0),0>r||1/0==r)throw RangeError();if(0==r)return"";for(var n="";r--;)n+=e;return n}function i(t){if(null==this)throw TypeError();var e=String(this),r=e.length,n=t?Number(t):0;if(isNaN(n)&&(n=0),0>n||n>=r)return void 0;var i,o=e.charCodeAt(n);return o>=55296&&56319>=o&&r>n+1&&(i=e.charCodeAt(n+1),i>=56320&&57343>=i)?1024*(o-55296)+i-56320+65536:o}function o(t){var e=t.raw,r=e.length>>>0;if(0===r)return"";for(var n="",i=0;;){if(n+=e[i],i+1===r)return n;n+=arguments[++i]}}function s(){var t,e,r=[],n=Math.floor,i=-1,o=arguments.length;if(!o)return"";for(;++i<o;){var s=Number(arguments[i]);if(!isFinite(s)||0>s||s>1114111||n(s)!=s)throw RangeError("Invalid code point: "+s);65535>=s?r.push(s):(s-=65536,t=(s>>10)+55296,e=s%1024+56320,r.push(t,e))}return String.fromCharCode.apply(null,r)}var a=Object.prototype.toString,u=String.prototype.indexOf,c=String.prototype.lastIndexOf;return{get startsWith(){return t},get endsWith(){return e},get contains(){return r},get repeat(){return n},get codePointAt(){return i},get raw(){return o},get fromCodePoint(){return s}}}),System.register("traceur-runtime@0.0.42/src/runtime/polyfills/polyfills",[],function(){"use strict";function t(t,e,r){e in t||Object.defineProperty(t,e,{value:r,configurable:!0,enumerable:!1,writable:!0})}function e(e,r){for(var n=0;n<r.length;n+=2){var i=r[n],o=r[n+1];t(e,i,o)}}function r(t){t.Promise||(t.Promise=c)}function n(t){t.Map||(t.Map=u)}function i(t){e(t.prototype,["codePointAt",f,"contains",h,"endsWith",p,"startsWith",v,"repeat",m]),e(t,["fromCodePoint",d,"raw",g])}function o(t,r){e(t.prototype,["entries",O,"keys",w,"values",x,"fill",b,"find",y,"findIndex",j]),r&&r.iterator&&Object.defineProperty(t.prototype,r.iterator,{value:x,configurable:!0,enumerable:!1,writable:!0})}function s(t){e(t,["assign",S,"is",R,"mixin",E])}function a(t){r(t),n(t),i(t.String),o(t.Array,t.Symbol),s(t.Object)}var u=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/Map")).Map,c=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/Promise")).Promise,l=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/String")),f=l.codePointAt,h=l.contains,p=l.endsWith,d=l.fromCodePoint,m=l.repeat,g=l.raw,v=l.startsWith,l=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/Array")),b=l.fill,y=l.find,j=l.findIndex,l=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/ArrayIterator")),O=l.entries,w=l.keys,x=l.values,l=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/Object")),S=l.assign,R=l.is,E=l.mixin;a(this);var k=$traceurRuntime.setupGlobals;return $traceurRuntime.setupGlobals=function(t){k(t),a(t)},{}}),System.register("traceur-runtime@0.0.42/src/runtime/polyfill-import",[],function(){"use strict";$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/polyfills"));return{}}),System.get("traceur-runtime@0.0.42/src/runtime/polyfill-import")}).call(this,t("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"1YiZ5S":2}],2:[function(t,e){function r(){}var n=e.exports={};n.nextTick=function(){var t="undefined"!=typeof window&&window.setImmediate,e="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(t)return function(t){return window.setImmediate(t)};if(e){var r=[];return window.addEventListener("message",function(t){var e=t.source;if((e===window||null===e)&&"process-tick"===t.data&&(t.stopPropagation(),r.length>0)){var n=r.shift();n()}},!0),function(t){r.push(t),window.postMessage("process-tick","*")}}return function(t){setTimeout(t,0)}}(),n.title="browser",n.browser=!0,n.env={},n.argv=[],n.on=r,n.addListener=r,n.once=r,n.off=r,n.removeListener=r,n.removeAllListeners=r,n.emit=r,n.binding=function(){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(){throw new Error("process.chdir is not supported")}},{}],3:[function(t,e,r){"use strict";Object.defineProperties(r,{"default":{get:function(){return u}},__esModule:{value:!0}});var n=$traceurRuntime.assertObject(t("./gif.js")).default,i=$traceurRuntime.assertObject(t("./stream_reader.js")).default,o=$traceurRuntime.assertObject(t("./utils.js")).Promises,s=URL&&URL.createObjectURL?URL:webkitURL,a=new Map,u=function(){var t=function(t){this.file=t};return $traceurRuntime.createClass(t,{load:function(){var t=this,e=a.get(this.file);if(e)return e;var r=o.xhrGet(this.file,"*/*","arraybuffer").then(function(e){return t.explode(e)});return a.set(this.file,r),r},explode:function(t){return console.debug("EXPLODING "+this.file),new Promise(function(e,r){var o=[],a=new i(t);if("GIF89a"!=a.readAscii(6))return r(Error("Not a GIF!")),void 0;if(a.skipBytes(4),a.peekBit(1)){a.log("GLOBAL COLOR TABLE");var u=7&a.readByte();a.log("GLOBAL COLOR TABLE IS "+3*Math.pow(2,u+1)+" BYTES"),a.skipBytes(2),a.skipBytes(3*Math.pow(2,u+1))}else a.log("NO GLOBAL COLOR TABLE");for(var c=t.slice(0,a.index),l=!0,f=!1;l;)if(a.isNext([33,255])){a.log("APPLICATION EXTENSION"),a.skipBytes(2);var h=a.readByte();if(a.log(a.readAscii(h)),a.isNext([3,1]))a.skipBytes(5);else{for(a.log("A weird application extension. Skip until we have 2 NULL bytes");0!==a.readByte()||0!==a.peekByte(););a.log("OK moving on"),a.skipBytes(1)}}else if(a.isNext([33,254])){for(a.log("COMMENT EXTENSION"),a.skipBytes(2);!a.isNext([0]);){var h=a.readByte();a.log(a.readAscii(h))}a.skipBytes(1)}else if(a.isNext([44])){if(a.log("IMAGE DESCRIPTOR!"),f||o.push({index:a.index,delay:0}),f=!1,a.skipBytes(9),a.peekBit(1)){a.log("LOCAL COLOR TABLE");var u=7&a.readByte();a.log("LOCAL COLOR TABLE IS "+3*Math.pow(2,u+1)+" BYTES"),a.skipBytes(3*Math.pow(2,u+1))}else a.log("NO LOCAL TABLE PHEW"),a.skipBytes(1);for(a.log("MIN CODE SIZE "+a.readByte()),a.log("DATA START");!a.isNext([0]);){var h=a.readByte();a.skipBytes(h)}a.log("DATA END"),a.skipBytes(1)}else if(a.isNext([33,249,4])){a.log("GRAPHICS CONTROL EXTENSION!");var p=a.index;a.skipBytes(3);var d=a.readByte()>>2;a.log("DISPOSAL "+d);var m=a.readByte()+256*a.readByte();o.push({index:p,delay:m,disposal:d}),a.log("FRAME DELAY "+m),a.skipBytes(2),f=!0}else{for(var g=a.index;!a.finished()&&!a.isNext([33,249,4]);)a.readByte();a.finished()?(a.index=g,a.log("WE END"),l=!1):a.log("UNKNOWN DATA FROM "+g)}for(var v=a.index,b=t.slice(-1),y=0;y<o.length;y++){var j=o[y],O=y<o.length-1?o[y+1].index:v;j.blob=new Blob([c,t.slice(j.index,O),b],{type:"image/gif"}),j.url=s.createObjectURL(j.blob)}e(new n(o))})}},{})}()},{"./gif.js":5,"./stream_reader.js":8,"./utils.js":9}],4:[function(t){"use strict";var e=$traceurRuntime.assertObject(t("./playback.js")).default,r=($traceurRuntime.assertObject(t("./strategies.js")).default,(document._currentScript||document.currentScript).ownerDocument),n=function(t){this.xgif=t,this.setupComponent(),this.srcChanged(this.xgif.getAttribute("src"))};$traceurRuntime.createClass(n,{setupComponent:function(){this.shadow=this.xgif.createShadowRoot();var t=r.querySelector("#template").content.cloneNode(!0);this.shadow.appendChild(t)},srcChanged:function(t){var r=this;t&&(console.log("Loading "+t),this.playback=new e(this,this.shadow.querySelector("#frames"),t,this.xgif.options),this.playback.ready.then(function(){"speed"==r.xgif.playbackMode?r.playback.startSpeed(r.xgif.speed):"bpm"==r.xgif.playbackMode&&r.playback.startBpm(r.xgif.bpm)}))},speedChanged:function(t){this.playback&&(this.playback.speed=t)},bpmChanged:function(t){this.playback&&this.playback.changeBpm(t)},snapChanged:function(t){this.playback&&(this.playback.snap=t)},nTimesChanged:function(t){this.playback&&(this.playback.nTimes=t)},stoppedChanged:function(t){this.playback&&(t&&!this.playback.stopped?this.playback.stop():!t&&this.playback.stopped&&this.playback.start())},pingPongChanged:function(t){this.playback&&(this.playback.pingPong=t)},clock:function(t,e,r){this.playback&&this.playback.gif&&this.playback.fromClock(t,e,r)},relayout:function(){this.playback&&this.xgif.options.fill&&this.playback.scaleToFill()}},{});var i=function(){$traceurRuntime.defaultSuperCall(this,o.prototype,arguments)},o=i;$traceurRuntime.createClass(i,{createdCallback:function(){this.determinePlaybackMode(),this.determinePlaybackOptions(),this.addStoppedOnNTimesFinishing(),this.controller=new n(this)},determinePlaybackMode:function(){if(this.hasAttribute("exploded")||this.hasAttribute("sync"))return this.playbackMode=void 0,void 0;var t=parseFloat(this.getAttribute("bpm"));if(!isNaN(t))return this.playbackMode="bpm",this.bpm=t,void 0;var e=parseFloat(this.getAttribute("speed"));this.speed=isNaN(e)?1:e,this.playbackMode="speed"},determinePlaybackOptions:function(){var t=parseFloat(this.getAttribute("n-times"));this.options={stopped:this.hasAttribute("stopped"),fill:this.hasAttribute("fill"),nTimes:isNaN(t)?null:t,snap:this.hasAttribute("snap"),pingPong:this.hasAttribute("ping-pong")}},attributeChangedCallback:function(t,e,r){"src"==t?this.controller.srcChanged(r):"speed"==t?(this.determinePlaybackMode(),this.controller.speedChanged(this.speed)):"bpm"==t?(this.determinePlaybackMode(),this.controller.bpmChanged(this.bpm)):"stopped"==t?(this.determinePlaybackOptions(),this.controller.stoppedChanged(this.options.stopped)):"ping-pong"==t?(this.determinePlaybackOptions(),this.controller.pingPongChanged(this.options.pingPong)):"snap"==t?(this.determinePlaybackOptions(),this.controller.snapChanged(this.options.snap)):"n-times"==t&&(this.determinePlaybackOptions(),this.controller.nTimesChanged(this.options.nTimes))},clock:function(t,e,r){this.controller.clock(t,e,r)},relayout:function(){this.controller.relayout()},addStoppedOnNTimesFinishing:function(){var t=this;this.addEventListener("x-gif-finished",function(){t.setAttribute("stopped","")})}},{},HTMLElement),document.registerElement("x-gif",i)},{"./playback.js":6,"./strategies.js":7}],5:[function(t,e,r){"use strict";
Object.defineProperties(r,{"default":{get:function(){return i}},__esModule:{value:!0}});var n=10,i=function(){var t=function(t){var e=this;this.frames=t,this.length=0,this.offsets=[],t.forEach(function(t){e.offsets.push(e.length),e.length+=t.delay||n})};return $traceurRuntime.createClass(t,{frameAt:function(t){for(var e=t*this.length,r=1,n=this.offsets.length;n>r&&!(this.offsets[r]>e);r++);return r-1}},{})}()},{}],6:[function(t,e,r){"use strict";function n(t,e){t.classList.add("frame"),2==e.disposal&&t.classList.add("disposal-restore")}Object.defineProperties(r,{"default":{get:function(){return s}},__esModule:{value:!0}});var i=$traceurRuntime.assertObject(t("./exploder.js")).default,o=function(t){var e=new Image;return e.src=t.url,n(e,t),e},s=function(){var t=function(t,e,r,n){var s=this;this.xgif=t,this.element=e,this.onReady=n.onReady,this.pingPong=n.pingPong,this.fill=n.fill,this.stopped=n.stopped,this.snap=n.snap,this.nTimes=n.nTimes,this.ready=new Promise(function(t){var e=new i(r);e.load().then(function(e){console.debug("Received "+e.frames.length+" frames of gif "+r),s.gif=e,s.element.innerHTML="";var n=o;e.frames.map(n).forEach(s.element.appendChild,s.element),s.fill&&requestAnimationFrame(s.scaleToFill.bind(s)),t()})})};return $traceurRuntime.createClass(t,{scaleToFill:function(){if(this.element.offsetWidth&&this.element.offsetHeight){var t=this.element.parentElement.offsetWidth/this.element.offsetWidth,e=this.element.parentElement.offsetHeight/this.element.offsetHeight;this.element.style.webkitTransform="scale("+1.1*Math.max(t,e)+")"}else requestAnimationFrame(this.scaleToFill.bind(this))},setFrame:function(t,e){var r=this.pingPong&&e%2>=1?this.gif.frameAt(1-t):this.gif.frameAt(t);this.element.dataset.frame=r},start:function(){this.stopped=!1,this.startTime=performance.now(),this.animationLoop&&this.animationLoop()},stop:function(){this.stopped=!0},startSpeed:function(t){var e=this;this.speed=t,this.animationLoop=function(){var t=10*e.gif.length/e.speed,r=performance.now()-e.startTime,n=r/t,i=n%1;e.nTimes&&n>=e.nTimes?(e.setFrame(e.nTimes%1||1,n),e.element.dispatchEvent(new CustomEvent("x-gif-finished"),!0)):(e.setFrame(i,n),e.stopped||requestAnimationFrame(e.animationLoop))},this.stopped||this.start()},fromClock:function(t,e,r){var n=1.5,i=this.snap?1:Math.max(1,Math.round(1/n*10*this.gif.length/e)),o=t%i,s=t/i,a=r/i+o/i;this.setFrame(a,s)},changeBpm:function(t){this.beatLength=6e4/t},startBpm:function(t){var e=this;this.changeBpm(t),this.animationLoop=function(){var t=performance.now()-e.startTime,r=Math.floor(t/e.beatLength),n=t%e.beatLength/e.beatLength;e.fromClock(r,e.beatLength,n),e.stopped||requestAnimationFrame(e.animationLoop)},this.stopped||this.start()}},{})}()},{"./exploder.js":3}],7:[function(t,e,r){"use strict";Object.defineProperties(r,{"default":{get:function(){return i}},__esModule:{value:!0}});var n={speed:function(){this.playback.startSpeed(this.speed,this.context.getAttribute("n-times"))},hardBpm:function(){this.playback.startHardBpm(parseFloat(this.context.getAttribute("hard-bpm")))},bpm:function(){this.playback.startBpm(parseFloat(this.context.getAttribute("bpm")))},noop:function(){}},i=n},{}],8:[function(t,e,r){"use strict";Object.defineProperties(r,{"default":{get:function(){return n}},__esModule:{value:!0}});var n=function(){var t=function(t){this.data=new Uint8Array(t),this.index=0,this.log("TOTAL LENGTH: "+this.data.length)};return $traceurRuntime.createClass(t,{finished:function(){return this.index>=this.data.length},readByte:function(){return this.data[this.index++]},peekByte:function(){return this.data[this.index]},skipBytes:function(t){this.index+=t},peekBit:function(t){return!!(this.peekByte()&1<<8-t)},readAscii:function(t){for(var e="",r=0;t>r;r++)e+=String.fromCharCode(this.readByte());return e},isNext:function(t){for(var e=0;e<t.length;e++)if(t[e]!==this.data[this.index+e])return!1;return!0},log:function(){},error:function(t){console.error(this.index+": "+t)}},{})}()},{}],9:[function(t,e,r){"use strict";Object.defineProperties(r,{Promises:{get:function(){return n}},__esModule:{value:!0}});var n={xhrGet:function(t,e,r){return new Promise(function(n,i){var o=new XMLHttpRequest;o.open("GET",t,!0),o.setRequestHeader("Accept",e),o.responseType=r,o.onload=function(){200==this.status?n(this.response):i(Error(this.statusText))},o.onerror=function(){i(Error("Network Error"))},o.send()})}}},{}]},{},[1,4]);