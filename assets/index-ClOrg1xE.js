var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function T(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function E(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function O(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var k=/\/+/g;function A(e,t){return typeof e==`object`&&e&&e.key!=null?O(``+e.key):t.toString(36)}function j(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+A(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(k,`$&/`)+`/`),j(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(k,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+A(s,l);c+=j(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+A(s,l++),c+=j(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function M(e,t,n){if(e==null)return e;var r=[],i=0;return j(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function N(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var P={current:null},ee={transition:null},te={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:ee,ReactCurrentOwner:C};function F(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:M,forEach:function(e,t,n){M(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,e.act=F,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=T,e.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:N}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=ee.transition;ee.transition={};try{e()}finally{ee.transition=t}},e.unstable_act=F,e.useCallback=function(e,t){return P.current.useCallback(e,t)},e.useContext=function(e){return P.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return P.current.useDeferredValue(e)},e.useEffect=function(e,t){return P.current.useEffect(e,t)},e.useId=function(){return P.current.useId()},e.useImperativeHandle=function(e,t,n){return P.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return P.current.useMemo(e,t)},e.useReducer=function(e,t,n){return P.current.useReducer(e,t,n)},e.useRef=function(e){return P.current.useRef(e)},e.useState=function(e){return P.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return P.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return P.current.useTransition()},e.version=`18.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m)if(n(c)!==null)m=!0,M(x);else{var t=n(l);t!==null&&N(b,t.startTime-e)}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!D());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&N(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,T=5,E=-1;function D(){return!(e.unstable_now()-E<T)}function O(){if(C!==null){var t=e.unstable_now();E=t;var n=!0;try{n=C(!0,t)}finally{n?k():(S=!1,C=null)}}else S=!1}var k;if(typeof v==`function`)k=function(){v(O)};else if(typeof MessageChannel<`u`){var A=new MessageChannel,j=A.port2;A.port1.onmessage=O,k=function(){j.postMessage(null)}}else k=function(){g(O,0)};function M(e){C=e,S||(S=!0,k())}function N(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,M(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):T=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,N(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,M(x))),r},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u(),n=f();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e){return l.call(m,e)?!0:l.call(p,e)?!1:d.test(e)?m[e]=!0:(p[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),T=Symbol.for(`react.portal`),E=Symbol.for(`react.fragment`),D=Symbol.for(`react.strict_mode`),O=Symbol.for(`react.profiler`),k=Symbol.for(`react.provider`),A=Symbol.for(`react.context`),j=Symbol.for(`react.forward_ref`),M=Symbol.for(`react.suspense`),N=Symbol.for(`react.suspense_list`),P=Symbol.for(`react.memo`),ee=Symbol.for(`react.lazy`),te=Symbol.for(`react.offscreen`),F=Symbol.iterator;function ne(e){return typeof e!=`object`||!e?null:(e=F&&e[F]||e[`@@iterator`],typeof e==`function`?e:null)}var I=Object.assign,re;function ie(e){if(re===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);re=t&&t[1]||``}return`
`+re+e}var L=!1;function ae(e,t){if(!e||L)return``;L=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{L=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?ie(e):``}function oe(e){switch(e.tag){case 5:return ie(e.type);case 16:return ie(`Lazy`);case 13:return ie(`Suspense`);case 19:return ie(`SuspenseList`);case 0:case 2:case 15:return e=ae(e.type,!1),e;case 11:return e=ae(e.type.render,!1),e;case 1:return e=ae(e.type,!0),e;default:return``}}function se(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case E:return`Fragment`;case T:return`Portal`;case O:return`Profiler`;case D:return`StrictMode`;case M:return`Suspense`;case N:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case A:return(e.displayName||`Context`)+`.Consumer`;case k:return(e._context.displayName||`Context`)+`.Provider`;case j:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case P:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case ee:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}function ce(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return se(t);case 8:return t===D?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function R(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function le(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function ue(e){var t=le(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function z(e){e._valueTracker||=ue(e)}function B(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=le(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function de(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function fe(e,t){var n=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pe(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=R(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function me(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function he(e,t){me(e,t);var n=R(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?H(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&H(e,t.type,R(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function V(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function H(e,t,n){(t!==`number`||de(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var U=Array.isArray;function W(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+R(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ge(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return I({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function _e(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(U(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:R(n)}}function ve(e,t){var n=R(t.value),r=R(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function ye(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function G(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function be(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?G(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var xe,Se=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(xe||=document.createElement(`div`),xe.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=xe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ce(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Te=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(we).forEach(function(e){Te.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),we[t]=we[e]})});function Ee(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||we.hasOwnProperty(e)&&we[e]?(``+t).trim():t+`px`}function De(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Ee(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var Oe=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ke(e,t){if(t){if(Oe[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Ae(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var je=null;function Me(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ne=null,Pe=null,Fe=null;function Ie(e){if(e=Ni(e)){if(typeof Ne!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Fi(t),Ne(e.stateNode,e.type,t))}}function Le(e){Pe?Fe?Fe.push(e):Fe=[e]:Pe=e}function Re(){if(Pe){var e=Pe,t=Fe;if(Fe=Pe=null,Ie(e),t)for(e=0;e<t.length;e++)Ie(t[e])}}function ze(e,t){return e(t)}function Be(){}var Ve=!1;function He(e,t,n){if(Ve)return e(t,n);Ve=!0;try{return ze(e,t,n)}finally{Ve=!1,(Pe!==null||Fe!==null)&&(Be(),Re())}}function Ue(e,t){var n=e.stateNode;if(n===null)return null;var i=Fi(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var We=!1;if(c)try{var Ge={};Object.defineProperty(Ge,"passive",{get:function(){We=!0}}),window.addEventListener(`test`,Ge,Ge),window.removeEventListener(`test`,Ge,Ge)}catch{We=!1}function Ke(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var qe=!1,Je=null,Ye=!1,Xe=null,Ze={onError:function(e){qe=!0,Je=e}};function Qe(e,t,n,r,i,a,o,s,c){qe=!1,Je=null,Ke.apply(Ze,arguments)}function $e(e,t,n,i,a,o,s,c,l){if(Qe.apply(this,arguments),qe){if(qe){var u=Je;qe=!1,Je=null}else throw Error(r(198));Ye||(Ye=!0,Xe=u)}}function et(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function tt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nt(e){if(et(e)!==e)throw Error(r(188))}function rt(e){var t=e.alternate;if(!t){if(t=et(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return nt(a),e;if(o===i)return nt(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function it(e){return e=rt(e),e===null?null:at(e)}function at(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=at(e);if(t!==null)return t;e=e.sibling}return null}var ot=n.unstable_scheduleCallback,st=n.unstable_cancelCallback,ct=n.unstable_shouldYield,lt=n.unstable_requestPaint,ut=n.unstable_now,dt=n.unstable_getCurrentPriorityLevel,ft=n.unstable_ImmediatePriority,pt=n.unstable_UserBlockingPriority,mt=n.unstable_NormalPriority,ht=n.unstable_LowPriority,gt=n.unstable_IdlePriority,_t=null,vt=null;function yt(e){if(vt&&typeof vt.onCommitFiberRoot==`function`)try{vt.onCommitFiberRoot(_t,e,void 0,(e.current.flags&128)==128)}catch{}}var bt=Math.clz32?Math.clz32:Ct,xt=Math.log,St=Math.LN2;function Ct(e){return e>>>=0,e===0?32:31-(xt(e)/St|0)|0}var wt=64,Tt=4194304;function Et(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Dt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Et(a))):r=Et(s)}else o=n&~i,o===0?a!==0&&(r=Et(a)):r=Et(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bt(t),i=1<<n,r|=e[n],t&=~i;return r}function Ot(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kt(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-bt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ot(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function At(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function jt(){var e=wt;return wt<<=1,!(wt&4194240)&&(wt=64),e}function Mt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function Pt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Ft(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var K=0;function q(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var It,Lt,Rt,zt,Bt,Vt=!1,Ht=[],Ut=null,Wt=null,Gt=null,Kt=new Map,qt=new Map,Jt=[],Yt=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function Xt(e,t){switch(e){case`focusin`:case`focusout`:Ut=null;break;case`dragenter`:case`dragleave`:Wt=null;break;case`mouseover`:case`mouseout`:Gt=null;break;case`pointerover`:case`pointerout`:Kt.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:qt.delete(t.pointerId)}}function Zt(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ni(t),t!==null&&Lt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Qt(e,t,n,r,i){switch(t){case`focusin`:return Ut=Zt(Ut,e,t,n,r,i),!0;case`dragenter`:return Wt=Zt(Wt,e,t,n,r,i),!0;case`mouseover`:return Gt=Zt(Gt,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Kt.set(a,Zt(Kt.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,qt.set(a,Zt(qt.get(a)||null,e,t,n,r,i)),!0}return!1}function $t(e){var t=Mi(e.target);if(t!==null){var n=et(t);if(n!==null){if(t=n.tag,t===13){if(t=tt(n),t!==null){e.blockedOn=t,Bt(e.priority,function(){Rt(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function en(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);je=r,n.target.dispatchEvent(r),je=null}else return t=Ni(n),t!==null&&Lt(t),e.blockedOn=n,!1;t.shift()}return!0}function tn(e,t,n){en(e)&&n.delete(t)}function nn(){Vt=!1,Ut!==null&&en(Ut)&&(Ut=null),Wt!==null&&en(Wt)&&(Wt=null),Gt!==null&&en(Gt)&&(Gt=null),Kt.forEach(tn),qt.forEach(tn)}function rn(e,t){e.blockedOn===t&&(e.blockedOn=null,Vt||(Vt=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,nn)))}function an(e){function t(t){return rn(t,e)}if(0<Ht.length){rn(Ht[0],e);for(var n=1;n<Ht.length;n++){var r=Ht[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ut!==null&&rn(Ut,e),Wt!==null&&rn(Wt,e),Gt!==null&&rn(Gt,e),Kt.forEach(t),qt.forEach(t),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)$t(n),n.blockedOn===null&&Jt.shift()}var on=C.ReactCurrentBatchConfig,sn=!0;function cn(e,t,n,r){var i=K,a=on.transition;on.transition=null;try{K=1,ln(e,t,n,r)}finally{K=i,on.transition=a}}function J(e,t,n,r){var i=K,a=on.transition;on.transition=null;try{K=4,ln(e,t,n,r)}finally{K=i,on.transition=a}}function ln(e,t,n,r){if(sn){var i=dn(e,t,n,r);if(i===null)ii(e,t,r,un,n),Xt(e,r);else if(Qt(i,e,t,n,r))r.stopPropagation();else if(Xt(e,r),t&4&&-1<Yt.indexOf(e)){for(;i!==null;){var a=Ni(i);if(a!==null&&It(a),a=dn(e,t,n,r),a===null&&ii(e,t,r,un,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else ii(e,t,r,null,n)}}var un=null;function dn(e,t,n,r){if(un=null,e=Me(r),e=Mi(e),e!==null)if(t=et(e),t===null)e=null;else if(n=t.tag,n===13){if(e=tt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return un=e,null}function fn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(dt()){case ft:return 1;case pt:return 4;case mt:case ht:return 16;case gt:return 536870912;default:return 16}default:return 16}}var pn=null,mn=null,hn=null;function gn(){if(hn)return hn;var e,t=mn,n=t.length,r,i=`value`in pn?pn.value:pn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return hn=i.slice(e,1<r?1-r:void 0)}function _n(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vn(){return!0}function yn(){return!1}function bn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?vn:yn,this.isPropagationStopped=yn,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=vn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=vn)},persist:function(){},isPersistent:vn}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sn=bn(xn),Cn=I({},xn,{view:0,detail:0}),wn=bn(Cn),Tn,En,Dn,On=I({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Dn&&(Dn&&e.type===`mousemove`?(Tn=e.screenX-Dn.screenX,En=e.screenY-Dn.screenY):En=Tn=0,Dn=e),Tn)},movementY:function(e){return`movementY`in e?e.movementY:En}}),kn=bn(On),An=bn(I({},On,{dataTransfer:0})),jn=bn(I({},Cn,{relatedTarget:0})),Mn=bn(I({},xn,{animationName:0,elapsedTime:0,pseudoElement:0})),Nn=bn(I({},xn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Pn=bn(I({},xn,{data:0})),Fn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},In={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Ln={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Rn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ln[e])?!!t[e]:!1}function zn(){return Rn}var Bn=bn(I({},Cn,{key:function(e){if(e.key){var t=Fn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=_n(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?In[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zn,charCode:function(e){return e.type===`keypress`?_n(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?_n(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Vn=bn(I({},On,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Hn=bn(I({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zn})),Un=bn(I({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Wn=bn(I({},On,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Gn=[9,13,27,32],Kn=c&&`CompositionEvent`in window,qn=null;c&&`documentMode`in document&&(qn=document.documentMode);var Jn=c&&`TextEvent`in window&&!qn,Yn=c&&(!Kn||qn&&8<qn&&11>=qn),Xn=` `,Zn=!1;function Qn(e,t){switch(e){case`keyup`:return Gn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function $n(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var er=!1;function tr(e,t){switch(e){case`compositionend`:return $n(t);case`keypress`:return t.which===32?(Zn=!0,Xn):null;case`textInput`:return e=t.data,e===Xn&&Zn?null:e;default:return null}}function nr(e,t){if(er)return e===`compositionend`||!Kn&&Qn(e,t)?(e=gn(),hn=mn=pn=null,er=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Yn&&t.locale!==`ko`?null:t.data;default:return null}}var rr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!rr[e.type]:t===`textarea`}function ar(e,t,n,r){Le(r),t=oi(t,`onChange`),0<t.length&&(n=new Sn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var or=null,sr=null;function cr(e){Qr(e,0)}function lr(e){if(B(Pi(e)))return e}function ur(e,t){if(e===`change`)return t}var dr=!1;if(c){var fr;if(c){var pr=`oninput`in document;if(!pr){var mr=document.createElement(`div`);mr.setAttribute(`oninput`,`return;`),pr=typeof mr.oninput==`function`}fr=pr}else fr=!1;dr=fr&&(!document.documentMode||9<document.documentMode)}function hr(){or&&(or.detachEvent(`onpropertychange`,gr),sr=or=null)}function gr(e){if(e.propertyName===`value`&&lr(sr)){var t=[];ar(t,sr,e,Me(e)),He(cr,t)}}function _r(e,t,n){e===`focusin`?(hr(),or=t,sr=n,or.attachEvent(`onpropertychange`,gr)):e===`focusout`&&hr()}function vr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return lr(sr)}function yr(e,t){if(e===`click`)return lr(t)}function br(e,t){if(e===`input`||e===`change`)return lr(t)}function xr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Sr=typeof Object.is==`function`?Object.is:xr;function Cr(e,t){if(Sr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Sr(e[i],t[i]))return!1}return!0}function wr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tr(e,t){var n=wr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=wr(n)}}function Y(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Y(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Er(){for(var e=window,t=de();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=de(e.document)}return t}function Dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Or(e){var t=Er(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Y(n.ownerDocument.documentElement,n)){if(r!==null&&Dr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Tr(n,a);var o=Tr(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kr=c&&`documentMode`in document&&11>=document.documentMode,Ar=null,jr=null,Mr=null,Nr=!1;function Pr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nr||Ar==null||Ar!==de(r)||(r=Ar,`selectionStart`in r&&Dr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mr&&Cr(Mr,r)||(Mr=r,r=oi(jr,`onSelect`),0<r.length&&(t=new Sn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ar)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ir={animationend:Fr(`Animation`,`AnimationEnd`),animationiteration:Fr(`Animation`,`AnimationIteration`),animationstart:Fr(`Animation`,`AnimationStart`),transitionend:Fr(`Transition`,`TransitionEnd`)},Lr={},Rr={};c&&(Rr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),`TransitionEvent`in window||delete Ir.transitionend.transition);function zr(e){if(Lr[e])return Lr[e];if(!Ir[e])return e;var t=Ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rr)return Lr[e]=t[n];return e}var Br=zr(`animationend`),Vr=zr(`animationiteration`),Hr=zr(`animationstart`),Ur=zr(`transitionend`),Wr=new Map,Gr=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function Kr(e,t){Wr.set(e,t),o(t,[e])}for(var qr=0;qr<Gr.length;qr++){var Jr=Gr[qr];Kr(Jr.toLowerCase(),`on`+(Jr[0].toUpperCase()+Jr.slice(1)))}Kr(Br,`onAnimationEnd`),Kr(Vr,`onAnimationIteration`),Kr(Hr,`onAnimationStart`),Kr(`dblclick`,`onDoubleClick`),Kr(`focusin`,`onFocus`),Kr(`focusout`,`onBlur`),Kr(Ur,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Yr=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Xr=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(Yr));function Zr(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,$e(r,t,void 0,e),e.currentTarget=null}function Qr(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;Zr(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;Zr(i,s,l),a=c}}}if(Ye)throw e=Xe,Ye=!1,Xe=null,e}function $r(e,t){var n=t[ki];n===void 0&&(n=t[ki]=new Set);var r=e+`__bubble`;n.has(r)||(ri(t,e,2,!1),n.add(r))}function ei(e,t,n){var r=0;t&&(r|=4),ri(n,e,r,t)}var ti=`_reactListening`+Math.random().toString(36).slice(2);function ni(e){if(!e[ti]){e[ti]=!0,i.forEach(function(t){t!==`selectionchange`&&(Xr.has(t)||ei(t,!1,e),ei(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ti]||(t[ti]=!0,ei(`selectionchange`,!1,t))}}function ri(e,t,n,r){switch(fn(t)){case 1:var i=cn;break;case 4:i=J;break;default:i=ln}n=i.bind(null,t,n,e),i=void 0,!We||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function ii(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Mi(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}He(function(){var r=a,i=Me(n),o=[];a:{var s=Wr.get(e);if(s!==void 0){var c=Sn,l=e;switch(e){case`keypress`:if(_n(n)===0)break a;case`keydown`:case`keyup`:c=Bn;break;case`focusin`:l=`focus`,c=jn;break;case`focusout`:l=`blur`,c=jn;break;case`beforeblur`:case`afterblur`:c=jn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=kn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=An;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Hn;break;case Br:case Vr:case Hr:c=Mn;break;case Ur:c=Un;break;case`scroll`:c=wn;break;case`wheel`:c=Wn;break;case`copy`:case`cut`:case`paste`:c=Nn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Vn}var u=(t&4)!=0,d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=Ue(p,f),h!=null&&u.push(ai(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==je&&(l=n.relatedTarget||n.fromElement)&&(Mi(l)||l[Oi]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Mi(l):null,l!==null&&(d=et(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=kn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=Vn,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Pi(c),m=l==null?s:Pi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Mi(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=si(m))p++;for(m=0,h=f;h;h=si(h))m++;for(;0<p-m;)u=si(u),p--;for(;0<m-p;)f=si(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=si(u),f=si(f)}u=null}else u=null;c!==null&&ci(o,s,c,u,!1),l!==null&&d!==null&&ci(o,d,l,u,!0)}}a:{if(s=r?Pi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=ur;else if(ir(s))if(dr)g=br;else{g=vr;var _=_r}else (c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=yr);if(g&&=g(e,r)){ar(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&H(s,`number`,s.value)}switch(_=r?Pi(r):window,e){case`focusin`:(ir(_)||_.contentEditable===`true`)&&(Ar=_,jr=r,Mr=null);break;case`focusout`:Mr=jr=Ar=null;break;case`mousedown`:Nr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Nr=!1,Pr(o,n,i);break;case`selectionchange`:if(kr)break;case`keydown`:case`keyup`:Pr(o,n,i)}var v;if(Kn)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else er?Qn(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(Yn&&n.locale!==`ko`&&(er||y!==`onCompositionStart`?y===`onCompositionEnd`&&er&&(v=gn()):(pn=i,mn=`value`in pn?pn.value:pn.textContent,er=!0)),_=oi(r,y),0<_.length&&(y=new Pn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=$n(n),v!==null&&(y.data=v)))),(v=Jn?tr(e,n):nr(e,n))&&(r=oi(r,`onBeforeInput`),0<r.length&&(i=new Pn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}Qr(o,t)})}function ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ue(e,n),a!=null&&r.unshift(ai(e,a,i)),a=Ue(e,t),a!=null&&r.push(ai(e,a,i))),e=e.return}return r}function si(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ci(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=Ue(n,a),c!=null&&o.unshift(ai(n,c,s))):i||(c=Ue(n,a),c!=null&&o.push(ai(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var li=/\r\n?/g,ui=/\u0000|\uFFFD/g;function di(e){return(typeof e==`string`?e:``+e).replace(li,`
`).replace(ui,``)}function fi(e,t,n){if(t=di(t),di(e)!==t&&n)throw Error(r(425))}function pi(){}var mi=null,hi=null;function gi(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _i=typeof setTimeout==`function`?setTimeout:void 0,vi=typeof clearTimeout==`function`?clearTimeout:void 0,yi=typeof Promise==`function`?Promise:void 0,bi=typeof queueMicrotask==`function`?queueMicrotask:yi===void 0?_i:function(e){return yi.resolve(null).then(e).catch(xi)};function xi(e){setTimeout(function(){throw e})}function Si(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),an(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++;n=i}while(n);an(t)}function Ci(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function wi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Ti=Math.random().toString(36).slice(2),Ei=`__reactFiber$`+Ti,Di=`__reactProps$`+Ti,Oi=`__reactContainer$`+Ti,ki=`__reactEvents$`+Ti,Ai=`__reactListeners$`+Ti,ji=`__reactHandles$`+Ti;function Mi(e){var t=e[Ei];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Oi]||n[Ei]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wi(e);e!==null;){if(n=e[Ei])return n;e=wi(e)}return t}e=n,n=e.parentNode}return null}function Ni(e){return e=e[Ei]||e[Oi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Fi(e){return e[Di]||null}var X=[],Z=-1;function Ii(e){return{current:e}}function Li(e){0>Z||(e.current=X[Z],X[Z]=null,Z--)}function Ri(e,t){Z++,X[Z]=e.current,e.current=t}var zi={},Bi=Ii(zi),Vi=Ii(!1),Hi=zi;function Ui(e,t){var n=e.type.contextTypes;if(!n)return zi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Wi(e){return e=e.childContextTypes,e!=null}function Gi(){Li(Vi),Li(Bi)}function Ki(e,t,n){if(Bi.current!==zi)throw Error(r(168));Ri(Bi,t),Ri(Vi,n)}function qi(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,ce(e)||`Unknown`,a));return I({},n,i)}function Ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zi,Hi=Bi.current,Ri(Bi,e),Ri(Vi,Vi.current),!0}function Yi(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=qi(e,t,Hi),i.__reactInternalMemoizedMergedChildContext=e,Li(Vi),Li(Bi),Ri(Bi,e)):Li(Vi),Ri(Vi,n)}var Xi=null,Zi=!1,Qi=!1;function $i(e){Xi===null?Xi=[e]:Xi.push(e)}function ea(e){Zi=!0,$i(e)}function ta(){if(!Qi&&Xi!==null){Qi=!0;var e=0,t=K;try{var n=Xi;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xi=null,Zi=!1}catch(t){throw Xi!==null&&(Xi=Xi.slice(e+1)),ot(ft,ta),t}finally{K=t,Qi=!1}}return null}var na=[],ra=0,ia=null,aa=0,oa=[],sa=0,ca=null,la=1,ua=``;function da(e,t){na[ra++]=aa,na[ra++]=ia,ia=e,aa=t}function fa(e,t,n){oa[sa++]=la,oa[sa++]=ua,oa[sa++]=ca,ca=e;var r=la;e=ua;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var a=32-bt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,la=1<<32-bt(t)+i|n<<i|r,ua=a+e}else la=1<<a|n<<i|r,ua=e}function pa(e){e.return!==null&&(da(e,1),fa(e,1,0))}function ma(e){for(;e===ia;)ia=na[--ra],na[ra]=null,aa=na[--ra],na[ra]=null;for(;e===ca;)ca=oa[--sa],oa[sa]=null,ua=oa[--sa],oa[sa]=null,la=oa[--sa],oa[sa]=null}var ha=null,ga=null,_a=!1,va=null;function ya(e,t){var n=Kl(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ba(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t===null?!1:(e.stateNode=t,ha=e,ga=Ci(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t===null?!1:(e.stateNode=t,ha=e,ga=null,!0);case 13:return t=t.nodeType===8?t:null,t===null?!1:(n=ca===null?null:{id:la,overflow:ua},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Kl(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ha=e,ga=null,!0);default:return!1}}function xa(e){return(e.mode&1)!=0&&(e.flags&128)==0}function Sa(e){if(_a){var t=ga;if(t){var n=t;if(!ba(e,t)){if(xa(e))throw Error(r(418));t=Ci(n.nextSibling);var i=ha;t&&ba(e,t)?ya(i,n):(e.flags=e.flags&-4097|2,_a=!1,ha=e)}}else{if(xa(e))throw Error(r(418));e.flags=e.flags&-4097|2,_a=!1,ha=e}}}function Ca(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ha=e}function wa(e){if(e!==ha)return!1;if(!_a)return Ca(e),_a=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!gi(e.type,e.memoizedProps)),t&&=ga){if(xa(e))throw Ta(),Error(r(418));for(;t;)ya(e,t),t=Ci(t.nextSibling)}if(Ca(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){ga=Ci(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}ga=null}}else ga=ha?Ci(e.stateNode.nextSibling):null;return!0}function Ta(){for(var e=ga;e;)e=Ci(e.nextSibling)}function Ea(){ga=ha=null,_a=!1}function Da(e){va===null?va=[e]:va.push(e)}var Oa=C.ReactCurrentBatchConfig;function ka(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Aa(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function ja(e){var t=e._init;return t(e._payload)}function Ma(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Yl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=$l(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===E?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ee&&ja(i)===t.type)?(r=a(t,n.props),r.ref=ka(e,t,n),r.return=e,r):(r=Xl(n.type,n.key,n.props,null,e.mode,r),r.ref=ka(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=eu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Zl(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=$l(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=Xl(t.type,t.key,t.props,null,e.mode,n),n.ref=ka(e,null,t),n.return=e,n;case T:return t=eu(t,e.mode,n),t.return=e,t;case ee:var r=t._init;return f(e,r(t._payload),n)}if(U(t)||ne(t))return t=Zl(t,e.mode,n,null),t.return=e,t;Aa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case T:return n.key===i?u(e,t,n,r):null;case ee:return i=n._init,p(e,t,i(n._payload),r)}if(U(n)||ne(n))return i===null?d(e,t,n,r,null):null;Aa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case T:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ee:var a=r._init;return m(e,t,n,a(r._payload),i)}if(U(r)||ne(r))return e=e.get(n)||null,d(t,e,r,i,null);Aa(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),_a&&da(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return _a&&da(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),_a&&da(r,h),l}function g(a,s,c,l){var u=ne(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),_a&&da(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return _a&&da(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),_a&&da(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===E&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===E){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===ee&&ja(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=ka(e,l,i),r.return=e,e=r;break a}n(e,l);break}else t(e,l);l=l.sibling}i.type===E?(r=Zl(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Xl(i.type,i.key,i.props,null,e.mode,o),o.ref=ka(e,r,i),o.return=e,e=o)}return s(e);case T:a:{for(l=i.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}else{n(e,r);break}else t(e,r);r=r.sibling}r=eu(i,e.mode,o),r.return=e,e=r}return s(e);case ee:return l=i._init,_(e,r,l(i._payload),o)}if(U(i))return h(e,r,i,o);if(ne(i))return g(e,r,i,o);Aa(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=$l(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Na=Ma(!0),Pa=Ma(!1),Fa=Ii(null),Ia=null,La=null,Ra=null;function za(){Ra=La=Ia=null}function Ba(e){var t=Fa.current;Li(Fa),e._currentValue=t}function Va(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ha(e,t){Ia=e,Ra=La=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ms=!0),e.firstContext=null)}function Ua(e){var t=e._currentValue;if(Ra!==e)if(e={context:e,memoizedValue:t,next:null},La===null){if(Ia===null)throw Error(r(308));La=e,Ia.dependencies={lanes:0,firstContext:e}}else La=La.next=e;return t}var Wa=null;function Ga(e){Wa===null?Wa=[e]:Wa.push(e)}function Ka(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ga(t)):(n.next=i.next,i.next=n),t.interleaved=n,qa(e,r)}function qa(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ja=!1;function Ya(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Za(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,qa(e,n)}return i=r.interleaved,i===null?(t.next=t,Ga(r)):(t.next=i.next,i.next=t),r.interleaved=t,qa(e,n)}function $a(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ft(e,n)}}function eo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function to(e,t,n,r){var i=e.updateQueue;Ja=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=I({},d,f);break a;case 2:Ja=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Jc|=o,e.lanes=o,e.memoizedState=d}}function no(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var ro={},io=Ii(ro),ao=Ii(ro),oo=Ii(ro);function so(e){if(e===ro)throw Error(r(174));return e}function co(e,t){switch(Ri(oo,t),Ri(ao,e),Ri(io,ro),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:be(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=be(t,e)}Li(io),Ri(io,t)}function lo(){Li(io),Li(ao),Li(oo)}function uo(e){so(oo.current);var t=so(io.current),n=be(t,e.type);t!==n&&(Ri(ao,e),Ri(io,n))}function fo(e){ao.current===e&&(Li(io),Li(ao))}var po=Ii(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ho=[];function go(){for(var e=0;e<ho.length;e++)ho[e]._workInProgressVersionPrimary=null;ho.length=0}var _o=C.ReactCurrentDispatcher,vo=C.ReactCurrentBatchConfig,yo=0,bo=null,xo=null,So=null,Co=!1,wo=!1,To=0,Eo=0;function Do(){throw Error(r(321))}function Oo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Sr(e[n],t[n]))return!1;return!0}function ko(e,t,n,i,a,o){if(yo=o,bo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_o.current=e===null||e.memoizedState===null?fs:ps,e=n(i,a),wo){o=0;do{if(wo=!1,To=0,25<=o)throw Error(r(301));o+=1,So=xo=null,t.updateQueue=null,_o.current=ms,e=n(i,a)}while(wo)}if(_o.current=ds,t=xo!==null&&xo.next!==null,yo=0,So=xo=bo=null,Co=!1,t)throw Error(r(300));return e}function Ao(){var e=To!==0;return To=0,e}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return So===null?bo.memoizedState=So=e:So=So.next=e,So}function Mo(){if(xo===null){var e=bo.alternate;e=e===null?null:e.memoizedState}else e=xo.next;var t=So===null?bo.memoizedState:So.next;if(t!==null)So=t,xo=e;else{if(e===null)throw Error(r(310));xo=e,e={memoizedState:xo.memoizedState,baseState:xo.baseState,baseQueue:xo.baseQueue,queue:xo.queue,next:null},So===null?bo.memoizedState=So=e:So=So.next=e}return So}function No(e,t){return typeof t==`function`?t(e):t}function Po(e){var t=Mo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=xo,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((yo&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,bo.lanes|=d,Jc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Sr(i,t.memoizedState)||(Ms=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,bo.lanes|=o,Jc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fo(e){var t=Mo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Sr(o,t.memoizedState)||(Ms=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Io(){}function Lo(e,t){var n=bo,i=Mo(),a=t(),o=!Sr(i.memoizedState,a);if(o&&(i.memoizedState=a,Ms=!0),i=i.queue,Yo(Bo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||So!==null&&So.memoizedState.tag&1){if(n.flags|=2048,Wo(9,zo.bind(null,n,i,a,t),void 0,null),Vc===null)throw Error(r(349));yo&30||Ro(n,t,a)}return a}function Ro(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=bo.updateQueue,t===null?(t={lastEffect:null,stores:null},bo.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zo(e,t,n,r){t.value=n,t.getSnapshot=r,Vo(t)&&Ho(e)}function Bo(e,t,n){return n(function(){Vo(t)&&Ho(e)})}function Vo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Sr(e,n)}catch{return!0}}function Ho(e){var t=qa(e,1);t!==null&&ml(t,e,1,-1)}function Uo(e){var t=jo();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t.queue=e,e=e.dispatch=ss.bind(null,bo,e),[t.memoizedState,e]}function Wo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=bo.updateQueue,t===null?(t={lastEffect:null,stores:null},bo.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Go(){return Mo().memoizedState}function Ko(e,t,n,r){var i=jo();bo.flags|=e,i.memoizedState=Wo(1|t,n,void 0,r===void 0?null:r)}function qo(e,t,n,r){var i=Mo();r=r===void 0?null:r;var a=void 0;if(xo!==null){var o=xo.memoizedState;if(a=o.destroy,r!==null&&Oo(r,o.deps)){i.memoizedState=Wo(t,n,a,r);return}}bo.flags|=e,i.memoizedState=Wo(1|t,n,a,r)}function Jo(e,t){return Ko(8390656,8,e,t)}function Yo(e,t){return qo(2048,8,e,t)}function Xo(e,t){return qo(4,2,e,t)}function Zo(e,t){return qo(4,4,e,t)}function Qo(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $o(e,t,n){return n=n==null?null:n.concat([e]),qo(4,4,Qo.bind(null,t,e),n)}function es(){}function ts(e,t){var n=Mo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ns(e,t){var n=Mo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rs(e,t,n){return yo&21?(Sr(n,t)||(n=jt(),bo.lanes|=n,Jc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ms=!0),e.memoizedState=n)}function is(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=vo.transition;vo.transition={};try{e(!1),t()}finally{K=n,vo.transition=r}}function as(){return Mo().memoizedState}function os(e,t,n){var r=pl(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cs(e))ls(t,n);else if(n=Ka(e,t,n,r),n!==null){var i=fl();ml(n,e,r,i),us(n,t,r)}}function ss(e,t,n){var r=pl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cs(e))ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Sr(s,o)){var c=t.interleaved;c===null?(i.next=i,Ga(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=Ka(e,t,i,r),n!==null&&(i=fl(),ml(n,e,r,i),us(n,t,r))}}function cs(e){var t=e.alternate;return e===bo||t!==null&&t===bo}function ls(e,t){wo=Co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function us(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ft(e,n)}}var ds={readContext:Ua,useCallback:Do,useContext:Do,useEffect:Do,useImperativeHandle:Do,useInsertionEffect:Do,useLayoutEffect:Do,useMemo:Do,useReducer:Do,useRef:Do,useState:Do,useDebugValue:Do,useDeferredValue:Do,useTransition:Do,useMutableSource:Do,useSyncExternalStore:Do,useId:Do,unstable_isNewReconciler:!1},fs={readContext:Ua,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:Ua,useEffect:Jo,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),Ko(4194308,4,Qo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ko(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ko(4,2,e,t)},useMemo:function(e,t){var n=jo();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jo();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=os.bind(null,bo,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:Uo,useDebugValue:es,useDeferredValue:function(e){return jo().memoizedState=e},useTransition:function(){var e=Uo(!1),t=e[0];return e=is.bind(null,e[1]),jo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=bo,a=jo();if(_a){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Vc===null)throw Error(r(349));yo&30||Ro(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Jo(Bo.bind(null,i,o,e),[e]),i.flags|=2048,Wo(9,zo.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=jo(),t=Vc.identifierPrefix;if(_a){var n=ua,r=la;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=To++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Eo++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},ps={readContext:Ua,useCallback:ts,useContext:Ua,useEffect:Yo,useImperativeHandle:$o,useInsertionEffect:Xo,useLayoutEffect:Zo,useMemo:ns,useReducer:Po,useRef:Go,useState:function(){return Po(No)},useDebugValue:es,useDeferredValue:function(e){return rs(Mo(),xo.memoizedState,e)},useTransition:function(){return[Po(No)[0],Mo().memoizedState]},useMutableSource:Io,useSyncExternalStore:Lo,useId:as,unstable_isNewReconciler:!1},ms={readContext:Ua,useCallback:ts,useContext:Ua,useEffect:Yo,useImperativeHandle:$o,useInsertionEffect:Xo,useLayoutEffect:Zo,useMemo:ns,useReducer:Fo,useRef:Go,useState:function(){return Fo(No)},useDebugValue:es,useDeferredValue:function(e){var t=Mo();return xo===null?t.memoizedState=e:rs(t,xo.memoizedState,e)},useTransition:function(){return[Fo(No)[0],Mo().memoizedState]},useMutableSource:Io,useSyncExternalStore:Lo,useId:as,unstable_isNewReconciler:!1};function hs(e,t){if(e&&e.defaultProps){for(var n in t=I({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:I({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _s={isMounted:function(e){return(e=e._reactInternals)?et(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fl(),i=pl(e),a=Za(r,i);a.payload=t,n!=null&&(a.callback=n),t=Qa(e,a,i),t!==null&&(ml(t,e,i,r),$a(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fl(),i=pl(e),a=Za(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Qa(e,a,i),t!==null&&(ml(t,e,i,r),$a(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fl(),r=pl(e),i=Za(n,r);i.tag=2,t!=null&&(i.callback=t),t=Qa(e,i,r),t!==null&&(ml(t,e,r,n),$a(t,e,r))}};function vs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(i,a):!0}function ys(e,t,n){var r=!1,i=zi,a=t.contextType;return typeof a==`object`&&a?a=Ua(a):(i=Wi(t)?Hi:Bi.current,r=t.contextTypes,a=(r=r!=null)?Ui(e,i):zi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_s,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function bs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_s.enqueueReplaceState(t,t.state,null)}function xs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ya(e);var a=t.contextType;typeof a==`object`&&a?i.context=Ua(a):(a=Wi(t)?Hi:Bi.current,i.context=Ui(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(gs(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&_s.enqueueReplaceState(i,i.state,null),to(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function Ss(e,t){try{var n=``,r=t;do n+=oe(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function Cs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ws(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Ts=typeof WeakMap==`function`?WeakMap:Map;function Es(e,t,n){n=Za(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){nl||(nl=!0,rl=r),ws(e,t)},n}function Ds(e,t,n){n=Za(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ws(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){ws(e,t),typeof r!=`function`&&(il===null?il=new Set([this]):il.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Os(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ts;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zl.bind(null,e,t,n),t.then(e,e))}function ks(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null?!0:t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function As(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Za(-1,1),t.tag=2,Qa(n,t,1))),n.lanes|=1),e)}var js=C.ReactCurrentOwner,Ms=!1;function Ns(e,t,n,r){t.child=e===null?Pa(t,null,n,r):Na(t,e.child,n,r)}function Ps(e,t,n,r,i){n=n.render;var a=t.ref;return Ha(t,i),r=ko(e,t,n,r,a,i),n=Ao(),e!==null&&!Ms?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ec(e,t,i)):(_a&&n&&pa(t),t.flags|=1,Ns(e,t,r,i),t.child)}function Fs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ql(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Is(e,t,a,r,i)):(e=Xl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Cr:n,n(o,r)&&e.ref===t.ref)return ec(e,t,i)}return t.flags|=1,e=Yl(a,r),e.ref=t.ref,e.return=t,t.child=e}function Is(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Cr(a,r)&&e.ref===t.ref)if(Ms=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ms=!0);else return t.lanes=e.lanes,ec(e,t,i)}return zs(e,t,n,r,i)}function Ls(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`)if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ri(Gc,Wc),Wc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ri(Gc,Wc),Wc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,Ri(Gc,Wc),Wc|=r}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),Ri(Gc,Wc),Wc|=r;return Ns(e,t,i,n),t.child}function Rs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zs(e,t,n,r,i){var a=Wi(n)?Hi:Bi.current;return a=Ui(t,a),Ha(t,i),n=ko(e,t,n,r,a,i),r=Ao(),e!==null&&!Ms?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ec(e,t,i)):(_a&&r&&pa(t),t.flags|=1,Ns(e,t,n,i),t.child)}function Bs(e,t,n,r,i){if(Wi(n)){var a=!0;Ji(t)}else a=!1;if(Ha(t,i),t.stateNode===null)$s(e,t),ys(t,n,r),xs(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=Ua(l):(l=Wi(n)?Hi:Bi.current,l=Ui(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&bs(t,o,r,l),Ja=!1;var f=t.memoizedState;o.state=f,to(t,r,o,i),c=t.memoizedState,s!==r||f!==c||Vi.current||Ja?(typeof u==`function`&&(gs(t,n,u,r),c=t.memoizedState),(s=Ja||vs(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Xa(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:hs(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=Ua(c):(c=Wi(n)?Hi:Bi.current,c=Ui(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&bs(t,o,r,c),Ja=!1,f=t.memoizedState,o.state=f,to(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||Vi.current||Ja?(typeof p==`function`&&(gs(t,n,p,r),m=t.memoizedState),(l=Ja||vs(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Vs(e,t,n,r,a,i)}function Vs(e,t,n,r,i,a){Rs(e,t);var o=(t.flags&128)!=0;if(!r&&!o)return i&&Yi(t,n,!1),ec(e,t,a);r=t.stateNode,js.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Na(t,e.child,null,a),t.child=Na(t,null,s,a)):Ns(e,t,s,a),t.memoizedState=r.state,i&&Yi(t,n,!0),t.child}function Hs(e){var t=e.stateNode;t.pendingContext?Ki(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ki(e,t.context,!1),co(e,t.containerInfo)}function Us(e,t,n,r,i){return Ea(),Da(i),t.flags|=256,Ns(e,t,n,r),t.child}var Ws={dehydrated:null,treeContext:null,retryLane:0};function Gs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ks(e,t,n){var r=t.pendingProps,i=po.current,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!=0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ri(po,i&1),e===null)return Sa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data===`$!`?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ql(o,r,0,null),e=Zl(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Gs(n),t.memoizedState=Ws,e):qs(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Ys(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Yl(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=Zl(a,o,n,null),a.flags|=2):a=Yl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Gs(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Ws,r}return a=e.child,e=a.sibling,r=Yl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function qs(e,t){return t=Ql({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function Js(e,t,n,r){return r!==null&&Da(r),Na(t,e.child,null,n),e=qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ys(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Cs(Error(r(422))),Js(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=Ql({mode:`visible`,children:i.children},a,0,null),o=Zl(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Na(t,e.child,null,s),t.child.memoizedState=Gs(s),t.memoizedState=Ws,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return Js(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=Cs(o,i,void 0),Js(e,t,s,i)}if(c=(s&e.childLanes)!==0,Ms||c){if(i=Vc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,qa(e,a),ml(i,e,a,-1))}return Ol(),i=Cs(Error(r(421))),Js(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Vl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ga=Ci(a.nextSibling),ha=t,_a=!0,va=null,e!==null&&(oa[sa++]=la,oa[sa++]=ua,oa[sa++]=ca,la=e.id,ua=e.overflow,ca=t),t=qs(t,i.children),t.flags|=4096,t)}function Xs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Va(e.return,t,n)}function Zs(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Qs(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ns(e,t,r.children,n),r=po.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xs(e,n,t);else if(e.tag===19)Xs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ri(po,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Zs(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Zs(t,!0,n,null,a);break;case`together`:Zs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $s(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ec(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Yl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function tc(e,t,n){switch(t.tag){case 3:Hs(t),Ea();break;case 5:uo(t);break;case 1:Wi(t.type)&&Ji(t);break;case 4:co(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ri(Fa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Ri(po,po.current&1),e=ec(e,t,n),e===null?null:e.sibling):Ks(e,t,n):(Ri(po,po.current&1),t.flags|=128,null);Ri(po,po.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Qs(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ri(po,po.current),r)break;return null;case 22:case 23:return t.lanes=0,Ls(e,t,n)}return ec(e,t,n)}var nc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},rc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,so(io.current);var o=null;switch(n){case`input`:i=fe(e,i),r=fe(e,r),o=[];break;case`select`:i=I({},i,{value:void 0}),r=I({},r,{value:void 0}),o=[];break;case`textarea`:i=ge(e,i),r=ge(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=pi)}ke(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null));for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u===`style`)if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l;else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&$r(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},ic=function(e,t,n,r){n!==r&&(t.flags|=4)};function ac(e,t){if(!_a)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sc(e,t,n){var i=t.pendingProps;switch(ma(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oc(t),null;case 1:return Wi(t.type)&&Gi(),oc(t),null;case 3:return i=t.stateNode,lo(),Li(Vi),Li(Bi),go(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(wa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,va!==null&&(vl(va),va=null))),oc(t),null;case 5:fo(t);var o=so(oo.current);if(n=t.type,e!==null&&t.stateNode!=null)rc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return oc(t),null}if(e=so(io.current),wa(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Ei]=t,i[Di]=s,e=(t.mode&1)!=0,n){case`dialog`:$r(`cancel`,i),$r(`close`,i);break;case`iframe`:case`object`:case`embed`:$r(`load`,i);break;case`video`:case`audio`:for(o=0;o<Yr.length;o++)$r(Yr[o],i);break;case`source`:$r(`error`,i);break;case`img`:case`image`:case`link`:$r(`error`,i),$r(`load`,i);break;case`details`:$r(`toggle`,i);break;case`input`:pe(i,s),$r(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},$r(`invalid`,i);break;case`textarea`:_e(i,s),$r(`invalid`,i)}for(var c in ke(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&fi(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&fi(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&$r(`scroll`,i)}switch(n){case`input`:z(i),V(i,s,!0);break;case`textarea`:z(i),ye(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=pi)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=G(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Ei]=t,e[Di]=i,nc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Ae(n,i),n){case`dialog`:$r(`cancel`,e),$r(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:$r(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<Yr.length;o++)$r(Yr[o],e);o=i;break;case`source`:$r(`error`,e),o=i;break;case`img`:case`image`:case`link`:$r(`error`,e),$r(`load`,e),o=i;break;case`details`:$r(`toggle`,e),o=i;break;case`input`:pe(e,i),o=fe(e,i),$r(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=I({},i,{value:void 0}),$r(`invalid`,e);break;case`textarea`:_e(e,i),o=ge(e,i),$r(`invalid`,e);break;default:o=i}for(s in ke(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?De(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Se(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&Ce(e,u):typeof u==`number`&&Ce(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&$r(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:z(e),V(e,i,!1);break;case`textarea`:z(e),ye(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+R(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&W(e,!!i.multiple,i.defaultValue,!0):W(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=pi)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oc(t),null;case 6:if(e&&t.stateNode!=null)ic(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=so(oo.current),so(io.current),wa(t)){if(i=t.stateNode,n=t.memoizedProps,i[Ei]=t,(s=i.nodeValue!==n)&&(e=ha,e!==null))switch(e.tag){case 3:fi(i.nodeValue,n,(e.mode&1)!=0);break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&fi(i.nodeValue,n,(e.mode&1)!=0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ei]=t,t.stateNode=i}return oc(t),null;case 13:if(Li(po),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_a&&ga!==null&&t.mode&1&&!(t.flags&128))Ta(),Ea(),t.flags|=98560,s=!1;else if(s=wa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Ei]=t}else Ea(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oc(t),s=!1}else va!==null&&(vl(va),va=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||po.current&1?Kc===0&&(Kc=3):Ol())),t.updateQueue!==null&&(t.flags|=4),oc(t),null);case 4:return lo(),e===null&&ni(t.stateNode.containerInfo),oc(t),null;case 10:return Ba(t.type._context),oc(t),null;case 17:return Wi(t.type)&&Gi(),oc(t),null;case 19:if(Li(po),s=t.memoizedState,s===null)return oc(t),null;if(i=(t.flags&128)!=0,c=s.rendering,c===null)if(i)ac(s,!1);else{if(Kc!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=mo(e),c!==null){for(t.flags|=128,ac(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ri(po,po.current&1|2),t.child}e=e.sibling}s.tail!==null&&ut()>el&&(t.flags|=128,i=!0,ac(s,!1),t.lanes=4194304)}else{if(!i)if(e=mo(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ac(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!_a)return oc(t),null}else 2*ut()-s.renderingStartTime>el&&n!==1073741824&&(t.flags|=128,i=!0,ac(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(oc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ut(),t.sibling=null,n=po.current,Ri(po,i?n&1|2:n&1),t);case 22:case 23:return wl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Wc&1073741824&&(oc(t),t.subtreeFlags&6&&(t.flags|=8192)):oc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function cc(e,t){switch(ma(t),t.tag){case 1:return Wi(t.type)&&Gi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return lo(),Li(Vi),Li(Bi),go(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fo(t),null;case 13:if(Li(po),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ea()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Li(po),null;case 4:return lo(),null;case 10:return Ba(t.type._context),null;case 22:case 23:return wl(),null;case 24:return null;default:return null}}var lc=!1,uc=!1,dc=typeof WeakSet==`function`?WeakSet:Set,Q=null;function fc(e,t){var n=e.ref;if(n!==null)if(typeof n==`function`)try{n(null)}catch(n){Rl(e,t,n)}else n.current=null}function pc(e,t,n){try{n()}catch(n){Rl(e,t,n)}}var mc=!1;function hc(e,t){if(mi=sn,e=Er(),Dr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(hi={focusedElem:e,selectionRange:n},sn=!1,Q=t;Q!==null;)if(t=Q,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:hs(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){Rl(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return h=mc,mc=!1,h}function gc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&pc(t,n,a)}i=i.next}while(i!==r)}}function _c(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function yc(e){var t=e.alternate;t!==null&&(e.alternate=null,yc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ei],delete t[Di],delete t[ki],delete t[Ai],delete t[ji])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bc(e){return e.tag===5||e.tag===3||e.tag===4}function xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||bc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pi));else if(r!==4&&(e=e.child,e!==null))for(Sc(e,t,n),e=e.sibling;e!==null;)Sc(e,t,n),e=e.sibling}function Cc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Cc(e,t,n),e=e.sibling;e!==null;)Cc(e,t,n),e=e.sibling}var wc=null,Tc=!1;function Ec(e,t,n){for(n=n.child;n!==null;)Dc(e,t,n),n=n.sibling}function Dc(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount==`function`)try{vt.onCommitFiberUnmount(_t,n)}catch{}switch(n.tag){case 5:uc||fc(n,t);case 6:var r=wc,i=Tc;wc=null,Ec(e,t,n),wc=r,Tc=i,wc!==null&&(Tc?(e=wc,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):wc.removeChild(n.stateNode));break;case 18:wc!==null&&(Tc?(e=wc,n=n.stateNode,e.nodeType===8?Si(e.parentNode,n):e.nodeType===1&&Si(e,n),an(e)):Si(wc,n.stateNode));break;case 4:r=wc,i=Tc,wc=n.stateNode.containerInfo,Tc=!0,Ec(e,t,n),wc=r,Tc=i;break;case 0:case 11:case 14:case 15:if(!uc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&pc(n,t,o),i=i.next}while(i!==r)}Ec(e,t,n);break;case 1:if(!uc&&(fc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Rl(n,t,e)}Ec(e,t,n);break;case 21:Ec(e,t,n);break;case 22:n.mode&1?(uc=(r=uc)||n.memoizedState!==null,Ec(e,t,n),uc=r):Ec(e,t,n);break;default:Ec(e,t,n)}}function Oc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dc),t.forEach(function(t){var r=Hl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function kc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:wc=c.stateNode,Tc=!1;break a;case 3:wc=c.stateNode.containerInfo,Tc=!0;break a;case 4:wc=c.stateNode.containerInfo,Tc=!0;break a}c=c.return}if(wc===null)throw Error(r(160));Dc(o,s,a),wc=null,Tc=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){Rl(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ac(t,e),t=t.sibling}function Ac(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kc(t,e),jc(e),i&4){try{gc(3,e,e.return),_c(3,e)}catch(t){Rl(e,e.return,t)}try{gc(5,e,e.return)}catch(t){Rl(e,e.return,t)}}break;case 1:kc(t,e),jc(e),i&512&&n!==null&&fc(n,n.return);break;case 5:if(kc(t,e),jc(e),i&512&&n!==null&&fc(n,n.return),e.flags&32){var a=e.stateNode;try{Ce(a,``)}catch(t){Rl(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&me(a,o),Ae(c,s);var u=Ae(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?De(a,f):d===`dangerouslySetInnerHTML`?Se(a,f):d===`children`?Ce(a,f):S(a,d,f,u)}switch(c){case`input`:he(a,o);break;case`textarea`:ve(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?W(a,!!o.multiple,o.multiple?[]:``,!1):W(a,!!o.multiple,o.defaultValue,!0)):W(a,!!o.multiple,m,!1)}a[Di]=o}catch(t){Rl(e,e.return,t)}}break;case 6:if(kc(t,e),jc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){Rl(e,e.return,t)}}break;case 3:if(kc(t,e),jc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{an(t.containerInfo)}catch(t){Rl(e,e.return,t)}break;case 4:kc(t,e),jc(e);break;case 13:kc(t,e),jc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||($c=ut())),i&4&&Oc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(uc=(u=uc)||d,kc(t,e),uc=u):kc(t,e),jc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Q=e,d=e.child;d!==null;){for(f=Q=d;Q!==null;){switch(p=Q,m=p.child,p.tag){case 0:case 11:case 14:case 15:gc(4,p,p.return);break;case 1:fc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Rl(i,n,e)}}break;case 5:fc(p,p.return);break;case 22:if(p.memoizedState!==null){Fc(f);continue}}m===null?Fc(f):(m.return=p,Q=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=Ee(`display`,s))}catch(t){Rl(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){Rl(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:kc(t,e),jc(e),i&4&&Oc(e);break;case 21:break;default:kc(t,e),jc(e)}}function jc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(bc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Ce(a,``),i.flags&=-33),Cc(e,xc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Sc(e,xc(e),o);break;default:throw Error(r(161))}}catch(t){Rl(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mc(e,t,n){Q=e,Nc(e,t,n)}function Nc(e,t,n){for(var r=(e.mode&1)!=0;Q!==null;){var i=Q,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||lc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||uc;s=lc;var l=uc;if(lc=o,(uc=c)&&!l)for(Q=i;Q!==null;)o=Q,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Ic(i):(c.return=o,Q=c);for(;a!==null;)Q=a,Nc(a,t,n),a=a.sibling;Q=i,lc=s,uc=l}Pc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Q=a):Pc(e,t,n)}}function Pc(e){for(;Q!==null;){var t=Q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:uc||_c(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!uc)if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:hs(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&no(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}no(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&an(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}uc||t.flags&512&&vc(t)}catch(e){Rl(t,t.return,e)}}if(t===e){Q=null;break}if(n=t.sibling,n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Fc(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Ic(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_c(4,t)}catch(e){Rl(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){Rl(t,i,e)}}var a=t.return;try{vc(t)}catch(e){Rl(t,a,e)}break;case 5:var o=t.return;try{vc(t)}catch(e){Rl(t,o,e)}}}catch(e){Rl(t,t.return,e)}if(t===e){Q=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Q=s;break}Q=t.return}}var Lc=Math.ceil,Rc=C.ReactCurrentDispatcher,zc=C.ReactCurrentOwner,Bc=C.ReactCurrentBatchConfig,$=0,Vc=null,Hc=null,Uc=0,Wc=0,Gc=Ii(0),Kc=0,qc=null,Jc=0,Yc=0,Xc=0,Zc=null,Qc=null,$c=0,el=1/0,tl=null,nl=!1,rl=null,il=null,al=!1,ol=null,sl=0,cl=0,ll=null,ul=-1,dl=0;function fl(){return $&6?ut():ul===-1?ul=ut():ul}function pl(e){return e.mode&1?$&2&&Uc!==0?Uc&-Uc:Oa.transition===null?(e=K,e===0?(e=window.event,e=e===void 0?16:fn(e.type),e):e):(dl===0&&(dl=jt()),dl):1}function ml(e,t,n,i){if(50<cl)throw cl=0,ll=null,Error(r(185));Nt(e,n,i),(!($&2)||e!==Vc)&&(e===Vc&&(!($&2)&&(Yc|=n),Kc===4&&bl(e,Uc)),hl(e,i),n===1&&$===0&&!(t.mode&1)&&(el=ut()+500,Zi&&ta()))}function hl(e,t){var n=e.callbackNode;kt(e,t);var r=Dt(e,e===Vc?Uc:0);if(r===0)n!==null&&st(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&st(n),t===1)e.tag===0?ea(xl.bind(null,e)):$i(xl.bind(null,e)),bi(function(){!($&6)&&ta()}),n=null;else{switch(q(r)){case 1:n=ft;break;case 4:n=pt;break;case 16:n=mt;break;case 536870912:n=gt;break;default:n=mt}n=Wl(n,gl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gl(e,t){if(ul=-1,dl=0,$&6)throw Error(r(327));var n=e.callbackNode;if(Il()&&e.callbackNode!==n)return null;var i=Dt(e,e===Vc?Uc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=kl(e,i);else{t=i;var a=$;$|=2;var o=Dl();(Vc!==e||Uc!==t)&&(tl=null,el=ut()+500,Tl(e,t));do try{jl();break}catch(t){El(e,t)}while(1);za(),Rc.current=o,$=a,Hc===null?(Vc=null,Uc=0,t=Kc):t=0}if(t!==0){if(t===2&&(a=At(e),a!==0&&(i=a,t=_l(e,a))),t===1)throw n=qc,Tl(e,0),bl(e,i),hl(e,ut()),n;if(t===6)bl(e,i);else{if(a=e.current.alternate,!(i&30)&&!yl(a)&&(t=kl(e,i),t===2&&(o=At(e),o!==0&&(i=o,t=_l(e,o))),t===1))throw n=qc,Tl(e,0),bl(e,i),hl(e,ut()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Pl(e,Qc,tl);break;case 3:if(bl(e,i),(i&130023424)===i&&(t=$c+500-ut(),10<t)){if(Dt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){fl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=_i(Pl.bind(null,e,Qc,tl),t);break}Pl(e,Qc,tl);break;case 4:if(bl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-bt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=ut()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Lc(i/1960))-i,10<i){e.timeoutHandle=_i(Pl.bind(null,e,Qc,tl),i);break}Pl(e,Qc,tl);break;case 5:Pl(e,Qc,tl);break;default:throw Error(r(329))}}}return hl(e,ut()),e.callbackNode===n?gl.bind(null,e):null}function _l(e,t){var n=Zc;return e.current.memoizedState.isDehydrated&&(Tl(e,t).flags|=256),e=kl(e,t),e!==2&&(t=Qc,Qc=n,t!==null&&vl(t)),e}function vl(e){Qc===null?Qc=e:Qc.push.apply(Qc,e)}function yl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Sr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bl(e,t){for(t&=~Xc,t&=~Yc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function xl(e){if($&6)throw Error(r(327));Il();var t=Dt(e,0);if(!(t&1))return hl(e,ut()),null;var n=kl(e,t);if(e.tag!==0&&n===2){var i=At(e);i!==0&&(t=i,n=_l(e,i))}if(n===1)throw n=qc,Tl(e,0),bl(e,t),hl(e,ut()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pl(e,Qc,tl),hl(e,ut()),null}function Sl(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(el=ut()+500,Zi&&ta())}}function Cl(e){ol!==null&&ol.tag===0&&!($&6)&&Il();var t=$;$|=1;var n=Bc.transition,r=K;try{if(Bc.transition=null,K=1,e)return e()}finally{K=r,Bc.transition=n,$=t,!($&6)&&ta()}}function wl(){Wc=Gc.current,Li(Gc)}function Tl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vi(n)),Hc!==null)for(n=Hc.return;n!==null;){var r=n;switch(ma(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gi();break;case 3:lo(),Li(Vi),Li(Bi),go();break;case 5:fo(r);break;case 4:lo();break;case 13:Li(po);break;case 19:Li(po);break;case 10:Ba(r.type._context);break;case 22:case 23:wl()}n=n.return}if(Vc=e,Hc=e=Yl(e.current,null),Uc=Wc=t,Kc=0,qc=null,Xc=Yc=Jc=0,Qc=Zc=null,Wa!==null){for(t=0;t<Wa.length;t++)if(n=Wa[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Wa=null}return e}function El(e,t){do{var n=Hc;try{if(za(),_o.current=ds,Co){for(var i=bo.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Co=!1}if(yo=0,So=xo=bo=null,wo=!1,To=0,zc.current=null,n===null||n.return===null){Kc=1,qc=t,Hc=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Uc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=ks(s);if(m!==null){m.flags&=-257,As(m,s,c,o,t),m.mode&1&&Os(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}else{if(!(t&1)){Os(o,u,t),Ol();break a}l=Error(r(426))}}else if(_a&&c.mode&1){var _=ks(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),As(_,s,c,o,t),Da(Ss(l,c));break a}}o=l=Ss(l,c),Kc!==4&&(Kc=2),Zc===null?Zc=[o]:Zc.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Es(o,l,t);eo(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(il===null||!il.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Ds(o,c,t);eo(o,x);break a}}o=o.return}while(o!==null)}Nl(n)}catch(e){t=e,Hc===n&&n!==null&&(Hc=n=n.return);continue}break}while(1)}function Dl(){var e=Rc.current;return Rc.current=ds,e===null?ds:e}function Ol(){(Kc===0||Kc===3||Kc===2)&&(Kc=4),Vc===null||!(Jc&268435455)&&!(Yc&268435455)||bl(Vc,Uc)}function kl(e,t){var n=$;$|=2;var i=Dl();(Vc!==e||Uc!==t)&&(tl=null,Tl(e,t));do try{Al();break}catch(t){El(e,t)}while(1);if(za(),$=n,Rc.current=i,Hc!==null)throw Error(r(261));return Vc=null,Uc=0,Kc}function Al(){for(;Hc!==null;)Ml(Hc)}function jl(){for(;Hc!==null&&!ct();)Ml(Hc)}function Ml(e){var t=Ul(e.alternate,e,Wc);e.memoizedProps=e.pendingProps,t===null?Nl(e):Hc=t,zc.current=null}function Nl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cc(n,t),n!==null){n.flags&=32767,Hc=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Kc=6,Hc=null;return}}else if(n=sc(n,t,Wc),n!==null){Hc=n;return}if(t=t.sibling,t!==null){Hc=t;return}Hc=t=e}while(t!==null);Kc===0&&(Kc=5)}function Pl(e,t,n){var r=K,i=Bc.transition;try{Bc.transition=null,K=1,Fl(e,t,n,r)}finally{Bc.transition=i,K=r}return null}function Fl(e,t,n,i){do Il();while(ol!==null);if($&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Pt(e,o),e===Vc&&(Hc=Vc=null,Uc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||al||(al=!0,Wl(mt,function(){return Il(),null})),o=(n.flags&15990)!=0,n.subtreeFlags&15990||o){o=Bc.transition,Bc.transition=null;var s=K;K=1;var c=$;$|=4,zc.current=null,hc(e,n),Ac(n,e),Or(hi),sn=!!mi,hi=mi=null,e.current=n,Mc(n,e,a),lt(),$=c,K=s,Bc.transition=o}else e.current=n;if(al&&(al=!1,ol=e,sl=a),o=e.pendingLanes,o===0&&(il=null),yt(n.stateNode,i),hl(e,ut()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(nl)throw nl=!1,e=rl,rl=null,e;return sl&1&&e.tag!==0&&Il(),o=e.pendingLanes,o&1?e===ll?cl++:(cl=0,ll=e):cl=0,ta(),null}function Il(){if(ol!==null){var e=q(sl),t=Bc.transition,n=K;try{if(Bc.transition=null,K=16>e?16:e,ol===null)var i=!1;else{if(e=ol,ol=null,sl=0,$&6)throw Error(r(331));var a=$;for($|=4,Q=e.current;Q!==null;){var o=Q,s=o.child;if(Q.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(Q=u;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:gc(8,d,o)}var f=d.child;if(f!==null)f.return=d,Q=f;else for(;Q!==null;){d=Q;var p=d.sibling,m=d.return;if(yc(d),d===u){Q=null;break}if(p!==null){p.return=m,Q=p;break}Q=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}Q=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Q=s;else b:for(;Q!==null;){if(o=Q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:gc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,Q=v;break b}Q=o.return}}var y=e.current;for(Q=y;Q!==null;){s=Q;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,Q=b;else b:for(s=y;Q!==null;){if(c=Q,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:_c(9,c)}}catch(e){Rl(c,c.return,e)}if(c===s){Q=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,Q=x;break b}Q=c.return}}if($=a,ta(),vt&&typeof vt.onPostCommitFiberRoot==`function`)try{vt.onPostCommitFiberRoot(_t,e)}catch{}i=!0}return i}finally{K=n,Bc.transition=t}}return!1}function Ll(e,t,n){t=Ss(n,t),t=Es(e,t,1),e=Qa(e,t,1),t=fl(),e!==null&&(Nt(e,1,t),hl(e,t))}function Rl(e,t,n){if(e.tag===3)Ll(e,e,n);else for(;t!==null;){if(t.tag===3){Ll(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(il===null||!il.has(r))){e=Ss(n,e),e=Ds(t,e,1),t=Qa(t,e,1),e=fl(),t!==null&&(Nt(t,1,e),hl(t,e));break}}t=t.return}}function zl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fl(),e.pingedLanes|=e.suspendedLanes&n,Vc===e&&(Uc&n)===n&&(Kc===4||Kc===3&&(Uc&130023424)===Uc&&500>ut()-$c?Tl(e,0):Xc|=n),hl(e,t)}function Bl(e,t){t===0&&(e.mode&1?(t=Tt,Tt<<=1,!(Tt&130023424)&&(Tt=4194304)):t=1);var n=fl();e=qa(e,t),e!==null&&(Nt(e,t,n),hl(e,n))}function Vl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bl(e,n)}function Hl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Bl(e,n)}var Ul=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Vi.current)Ms=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Ms=!1,tc(e,t,n);Ms=!!(e.flags&131072)}else Ms=!1,_a&&t.flags&1048576&&fa(t,aa,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;$s(e,t),e=t.pendingProps;var a=Ui(t,Bi.current);Ha(t,n),a=ko(null,t,i,e,a,n);var o=Ao();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Wi(i)?(o=!0,Ji(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ya(t),a.updater=_s,t.stateNode=a,a._reactInternals=t,xs(t,i,e,n),t=Vs(null,t,i,!0,o,n)):(t.tag=0,_a&&o&&pa(t),Ns(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch($s(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Jl(i),e=hs(i,e),a){case 0:t=zs(null,t,i,e,n);break a;case 1:t=Bs(null,t,i,e,n);break a;case 11:t=Ps(null,t,i,e,n);break a;case 14:t=Fs(null,t,i,hs(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:hs(i,a),zs(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:hs(i,a),Bs(e,t,i,a,n);case 3:a:{if(Hs(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,Xa(e,t),to(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Ss(Error(r(423)),t),t=Us(e,t,i,n,a);break a}else if(i!==a){a=Ss(Error(r(424)),t),t=Us(e,t,i,n,a);break a}else for(ga=Ci(t.stateNode.containerInfo.firstChild),ha=t,_a=!0,va=null,n=Pa(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ea(),i===a){t=ec(e,t,n);break a}Ns(e,t,i,n)}t=t.child}return t;case 5:return uo(t),e===null&&Sa(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,gi(i,a)?s=null:o!==null&&gi(i,o)&&(t.flags|=32),Rs(e,t),Ns(e,t,s,n),t.child;case 6:return e===null&&Sa(t),null;case 13:return Ks(e,t,n);case 4:return co(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Na(t,null,i,n):Ns(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:hs(i,a),Ps(e,t,i,a,n);case 7:return Ns(e,t,t.pendingProps,n),t.child;case 8:return Ns(e,t,t.pendingProps.children,n),t.child;case 12:return Ns(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,Ri(Fa,i._currentValue),i._currentValue=s,o!==null)if(Sr(o.value,s)){if(o.children===a.children&&!Vi.current){t=ec(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Za(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Va(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Va(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ns(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Ha(t,n),a=Ua(a),i=i(a),t.flags|=1,Ns(e,t,i,n),t.child;case 14:return i=t.type,a=hs(i,t.pendingProps),a=hs(i.type,a),Fs(e,t,i,a,n);case 15:return Is(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:hs(i,a),$s(e,t),t.tag=1,Wi(i)?(e=!0,Ji(t)):e=!1,Ha(t,n),ys(t,i,a),xs(t,i,a,n),Vs(null,t,i,!0,e,n);case 19:return Qs(e,t,n);case 22:return Ls(e,t,n)}throw Error(r(156,t.tag))};function Wl(e,t){return ot(e,t)}function Gl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kl(e,t,n,r){return new Gl(e,t,n,r)}function ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jl(e){if(typeof e==`function`)return+!!ql(e);if(e!=null){if(e=e.$$typeof,e===j)return 11;if(e===P)return 14}return 2}function Yl(e,t){var n=e.alternate;return n===null?(n=Kl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xl(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)ql(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case E:return Zl(n.children,a,o,t);case D:s=8,a|=8;break;case O:return e=Kl(12,n,t,a|2),e.elementType=O,e.lanes=o,e;case M:return e=Kl(13,n,t,a),e.elementType=M,e.lanes=o,e;case N:return e=Kl(19,n,t,a),e.elementType=N,e.lanes=o,e;case te:return Ql(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case k:s=10;break a;case A:s=9;break a;case j:s=11;break a;case P:s=14;break a;case ee:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Kl(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function Zl(e,t,n,r){return e=Kl(7,e,r,t),e.lanes=n,e}function Ql(e,t,n,r){return e=Kl(22,e,r,t),e.elementType=te,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=Kl(6,e,null,t),e.lanes=n,e}function eu(e,t,n){return t=Kl(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mt(0),this.expirationTimes=Mt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nu(e,t,n,r,i,a,o,s,c){return e=new tu(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Kl(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ya(a),e}function ru(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function iu(e){if(!e)return zi;e=e._reactInternals;a:{if(et(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(Wi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(Wi(n))return qi(e,n,t)}return t}function au(e,t,n,r,i,a,o,s,c){return e=nu(n,r,!0,e,i,a,o,s,c),e.context=iu(null),n=e.current,r=fl(),i=pl(n),a=Za(r,i),a.callback=t??null,Qa(n,a,i),e.current.lanes=i,Nt(e,i,r),hl(e,r),e}function ou(e,t,n,r){var i=t.current,a=fl(),o=pl(i);return n=iu(n),t.context===null?t.context=n:t.pendingContext=n,t=Za(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qa(i,t,o),e!==null&&(ml(e,i,o,a),$a(e,i,o)),o}function su(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lu(e,t){cu(e,t),(e=e.alternate)&&cu(e,t)}function uu(){return null}var du=typeof reportError==`function`?reportError:function(e){console.error(e)};function fu(e){this._internalRoot=e}pu.prototype.render=fu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));ou(e,t,null,null)},pu.prototype.unmount=fu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cl(function(){ou(null,e,null,null)}),t[Oi]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=zt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&$t(e)}};function mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function gu(){}function _u(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=su(o);a.call(e)}}var o=au(t,r,e,0,null,!1,!1,``,gu);return e._reactRootContainer=o,e[Oi]=o.current,ni(e.nodeType===8?e.parentNode:e),Cl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=su(c);s.call(e)}}var c=nu(e,0,!1,null,null,!1,!1,``,gu);return e._reactRootContainer=c,e[Oi]=c.current,ni(e.nodeType===8?e.parentNode:e),Cl(function(){ou(t,c,n,r)}),c}function vu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=su(o);s.call(e)}}ou(t,o,e,i)}else o=_u(n,t,e,i,r);return su(o)}It=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Et(t.pendingLanes);n!==0&&(Ft(t,n|1),hl(t,ut()),!($&6)&&(el=ut()+500,ta()))}break;case 13:Cl(function(){var t=qa(e,1);t!==null&&ml(t,e,1,fl())}),lu(e,1)}},Lt=function(e){if(e.tag===13){var t=qa(e,134217728);t!==null&&ml(t,e,134217728,fl()),lu(e,134217728)}},Rt=function(e){if(e.tag===13){var t=pl(e),n=qa(e,t);n!==null&&ml(n,e,t,fl()),lu(e,t)}},zt=function(){return K},Bt=function(e,t){var n=K;try{return K=e,t()}finally{K=n}},Ne=function(e,t,n){switch(t){case`input`:if(he(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Fi(i);if(!a)throw Error(r(90));B(i),he(i,a)}}}break;case`textarea`:ve(e,n);break;case`select`:t=n.value,t!=null&&W(e,!!n.multiple,t,!1)}},ze=Sl,Be=Cl;var yu={usingClientEntryPoint:!1,Events:[Ni,Pi,Fi,Le,Re,Sl]},bu={findFiberByHostInstance:Mi,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},xu={bundleType:bu.bundleType,version:bu.version,rendererPackageName:bu.rendererPackageName,rendererConfig:bu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=it(e),e===null?null:e.stateNode},findFiberByHostInstance:bu.findFiberByHostInstance||uu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{_t=Su.inject(xu),vt=Su}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(t))throw Error(r(200));return ru(e,t,null,n)},e.createRoot=function(e,t){if(!mu(e))throw Error(r(299));var n=!1,i=``,a=du;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=nu(e,1,!1,null,null,n,!1,i,a),e[Oi]=t.current,ni(e.nodeType===8?e.parentNode:e),new fu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=it(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return Cl(e)},e.hydrate=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!mu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=du;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=au(t,null,e,1,n??null,a,!1,o,s),e[Oi]=t.current,ni(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new pu(t)},e.render=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!hu(e))throw Error(r(40));return e._reactRootContainer?(Cl(function(){vu(null,null,e,!1,function(){e._reactRootContainer=null,e[Oi]=null})}),!0):!1},e.unstable_batchedUpdates=Sl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!hu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return vu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=m();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),g=c(u(),1),_=c(h(),1),v={NO:{name:`Norway (TEK17)`,flag:`🇳🇴`,riserMin:50,riserMax:180,treadMin:280,widthMin:900,headroomMin:2e3,formulaRange:[595,665],formulaLabel:`2R + T = 595–665 mm`,notes:`TEK17 §12-16 · Public: riser ≤150 mm, tread ≥300 mm`,idealRiser:170,idealTread:290},US:{name:`USA (IBC 2021)`,flag:`🇺🇸`,riserMin:102,riserMax:197,treadMin:254,widthMin:914,headroomMin:2032,formulaRange:null,formulaLabel:`Riser 4–7.75 in · Tread ≥10 in`,notes:`IBC 2021 §1011 · Residential (IRC R311.7): width ≥ 36 in (914 mm)`,idealRiser:180,idealTread:270},GB:{name:`UK (Part K)`,flag:`🇬🇧`,riserMin:50,riserMax:220,treadMin:220,widthMin:800,headroomMin:2e3,formulaRange:[550,700],formulaLabel:`2R + T = 550–700 mm`,notes:`Approved Document K · Private stair · Going measured horizontally`,idealRiser:170,idealTread:250},DE:{name:`Germany (DIN 18065)`,flag:`🇩🇪`,riserMin:140,riserMax:200,treadMin:230,widthMin:800,headroomMin:2e3,formulaRange:[590,650],formulaLabel:`2R + T = 590–650 mm`,notes:`DIN 18065 · Ideal step: R = 170 mm, T = 290 mm`,idealRiser:170,idealTread:290},EU:{name:`EU General (EN 14975)`,flag:`🇪🇺`,riserMin:120,riserMax:210,treadMin:240,widthMin:800,headroomMin:1900,formulaRange:[600,660],formulaLabel:`2R + T = 600–660 mm`,notes:`EN 14975 general guideline · Verify local amendments`,idealRiser:175,idealTread:280}},y={straight:{id:`straight`,label:`Straight`,icon:`⬆`,description:`Single uninterrupted flight. Most common and easiest to build.`,inputs:[`totalRise`,`totalRun`,`stairWidth`]},lshaped:{id:`lshaped`,label:`L-Shaped`,icon:`↱`,description:`Quarter turn (90°) with a flat landing. Compact and easier to navigate than straight stairs.`,inputs:[`totalRise`,`run1`,`run2`,`stairWidth`,`landingDepth`]},ushaped:{id:`ushaped`,label:`U-Shaped`,icon:`⇅`,description:`Two parallel flights with a 180° landing (switchback). Efficient footprint for full-storey rise.`,inputs:[`totalRise`,`flightRun`,`stairWidth`,`landingDepth`]},spiral:{id:`spiral`,label:`Spiral`,icon:`↻`,description:`Treads radiate around a central pole. Minimal footprint — ideal for lofts or accent stairs.`,inputs:[`totalRise`,`diameter`,`stairWidth`]}};function b(e,t,n,r,i,a,o=null){let s=[{label:`Riser height`,val:e.toFixed(1)+` mm`,pass:e>=a.riserMin&&e<=a.riserMax,req:`${a.riserMin}–${a.riserMax} mm`},{label:`Tread depth`,val:t.toFixed(1)+` mm`,pass:t>=a.treadMin,req:`≥ ${a.treadMin} mm`},{label:`Stair angle`,val:r.toFixed(1)+`°`,pass:r>=20&&r<=45,req:`20°–45° recommended`},{label:`Stair width`,val:n.toFixed(0)+` mm`,pass:n>=a.widthMin,req:`≥ ${a.widthMin} mm`}];return a.formulaRange&&i!==null&&s.push({label:`2R + T formula`,val:i.toFixed(1)+` mm`,pass:i>=a.formulaRange[0]&&i<=a.formulaRange[1],req:`${a.formulaRange[0]}–${a.formulaRange[1]} mm`}),o!==null&&s.push({label:`Headroom clearance`,val:o.toFixed(0)+` mm`,pass:o>=a.headroomMin,req:`≥ ${a.headroomMin} mm`}),s}function x(e,t){if(!e||e.ok)return[];let n=[],{checks:r=[],nSteps:i,riser:a,angle:o,formula:s,totalRise:c,idealN:l}=e;for(let l of r)if(!l.pass)switch(l.label){case`Riser height`:if(a>t.riserMax){let e=Math.ceil(c/t.riserMax);n.push(`Riser ${a.toFixed(0)} mm exceeds max ${t.riserMax} mm — try ${e}+ steps (${e} steps → ${(c/e).toFixed(0)} mm riser)`)}else{let e=Math.floor(c/t.riserMin);n.push(`Riser ${a.toFixed(0)} mm below min ${t.riserMin} mm — try ≤${e} steps (${e} steps → ${(c/e).toFixed(0)} mm riser)`)}break;case`Tread depth`:case`Tread (inner arc)`:{let r=e.tread||e.tread1||0;if(e.type===`straight`)n.push(`Tread ${r.toFixed(0)} mm below min ${t.treadMin} mm — increase run to ≥${Math.ceil(t.treadMin*i)} mm`);else if(e.type===`lshaped`)n.push(`Tread too shallow — increase run1 + run2 to ≥${Math.ceil(t.treadMin*i)} mm total`);else if(e.type===`ushaped`){let r=e.stepsPerFlight||Math.ceil(i/2);n.push(`Tread too shallow — increase flight run to ≥${Math.ceil(t.treadMin*r)} mm (${t.treadMin} × ${r} steps)`)}else n.push(`Tread too narrow — increase diameter or reduce step count`);break}case`Stair angle`:o>45?e.type===`straight`&&e.totalRun?n.push(`Angle ${o.toFixed(1)}° too steep — increase run to ≥${Math.ceil(c)} mm, or add more steps`):n.push(`Angle ${o.toFixed(1)}° too steep — increase run length or add more steps`):n.push(`Angle ${o.toFixed(1)}° too shallow (min 20°) — reduce run or increase rise`);break;case`Stair width`:n.push(`Width too narrow — increase stair width to ≥${t.widthMin} mm`);break;case`2R + T formula`:if(t.formulaRange){let[e,r]=t.formulaRange;s<e?n.push(`2R+T = ${s.toFixed(0)} mm (need ${e}–${r}) — increase tread to ≥${Math.ceil(e-2*a)} mm`):n.push(`2R+T = ${s.toFixed(0)} mm (need ${e}–${r}) — reduce tread to ≤${Math.floor(r-2*a)} mm`)}break;case`Landing depth`:{let t=Math.max(e.stairWidth||900,900);n.push(`Landing too shallow — increase landing depth to ≥${t} mm`);break}case`Headroom clearance`:n.push(`Headroom insufficient — verify ceiling height along stair path (need ≥${t.headroomMin} mm)`);break;default:break}return l&&l!==i&&n.push(`Optimal: ${l} steps → riser ≈${(c/l).toFixed(0)} mm (code target: ${t.idealRiser} mm)`),n}function S(e,t){let n=parseFloat(e.totalRise),r=parseFloat(e.totalRun),i=parseFloat(e.stairWidth)||0;if(!n||!r||n<=0||r<=0)return null;let a=e.numStepsOverride?Math.max(2,Math.min(50,parseInt(e.numStepsOverride))):Math.max(2,Math.round(n/t.riserMax)),o=n/a,s=r/a,c=Math.atan2(o,s)*180/Math.PI,l=Math.sqrt(n*n+r*r),u=2*o+s,d=t.headroomMin,f=b(o,s,i,c,u,t,d),p=Math.round(n/t.idealRiser),m={type:`straight`,nSteps:a,riser:o,tread:s,angle:c,stringer:l,formula:u,checks:f,ok:f.every(e=>e.pass),idealN:p,totalRise:n,totalRun:r,stairWidth:i};return m.recommendations=x(m,t),m}function C(e,t){let n=parseFloat(e.totalRise),r=parseFloat(e.run1),i=parseFloat(e.run2),a=parseFloat(e.stairWidth)||0,o=parseFloat(e.landingDepth)||a;if(!n||!r||!i)return null;let s=r+i,c=e.numStepsOverride?Math.max(2,Math.min(50,parseInt(e.numStepsOverride))):Math.max(2,Math.round(n/t.riserMax)),l=n/c,u=Math.min(r,i)/Math.round(c*Math.min(r,i)/s),d=Math.atan2(l,u)*180/Math.PI,f=2*l+u,p=Math.max(1,Math.round(c*r/s)),m=c-p,h=r/p,g=i/m,_=b(l,Math.min(h,g),a,d,f,t,t.headroomMin),v={label:`Landing depth`,val:o.toFixed(0)+` mm`,pass:o>=Math.max(a,900),req:`≥ ${Math.max(a,900)} mm`};_.push(v);let y=Math.round(n/t.idealRiser),S={type:`lshaped`,nSteps:c,stepsF1:p,stepsF2:m,riser:l,tread1:h,tread2:g,angle:d,formula:f,checks:_,ok:_.every(e=>e.pass),idealN:y,totalRise:n,run1:r,run2:i,totalRun:s,stairWidth:a,landingDepth:o};return S.recommendations=x(S,t),S}function w(e,t){let n=parseFloat(e.totalRise),r=parseFloat(e.flightRun),i=parseFloat(e.stairWidth)||0,a=parseFloat(e.landingDepth)||i;if(!n||!r)return null;let o=e.numStepsOverride?Math.max(2,Math.min(50,parseInt(e.numStepsOverride))):Math.max(2,Math.round(n/t.riserMax)),s=n/o,c=Math.ceil(o/2),l=r/c,u=Math.atan2(s,l)*180/Math.PI,d=2*s+l,f=b(s,l,i,u,d,t,t.headroomMin),p={label:`Landing depth`,val:a.toFixed(0)+` mm`,pass:a>=Math.max(i,900),req:`≥ ${Math.max(i,900)} mm`};f.push(p);let m=Math.round(n/t.idealRiser),h=Math.max(100,i*.15),g=2*i+h,_=r+a,v={type:`ushaped`,nSteps:o,stepsPerFlight:c,riser:s,tread:l,angle:u,formula:d,checks:f,ok:f.every(e=>e.pass),idealN:m,totalRise:n,flightRun:r,stairWidth:i,landingDepth:a,totalWidth:g,totalDepth:_,wellGap:h};return v.recommendations=x(v,t),v}function T(e,t){let n=parseFloat(e.totalRise),r=parseFloat(e.diameter)||1600,i=parseFloat(e.stairWidth)||r/2*.6;if(!n)return null;let a=e.numStepsOverride?Math.max(4,Math.min(50,parseInt(e.numStepsOverride))):Math.max(4,Math.round(n/t.riserMax)),o=n/a,s=r/2,c=Math.max(60,s-i),l=(s+c)/2,u=360/a,d=l*(u*Math.PI/180),f=c*(u*Math.PI/180),p=Math.atan2(o,f)*180/Math.PI,m=2*o+f,h=b(o,f,s-c,p,m,t,t.headroomMin);h[1]={...h[1],label:`Tread (inner arc)`,val:f.toFixed(1)+` mm`};let g=a/(360/u),_=Math.round(n/t.idealRiser),v={type:`spiral`,nSteps:a,riser:o,tread:d,innerTread:f,angle:p,formula:m,checks:h,ok:h.every(e=>e.pass),idealN:_,totalRise:n,diameter:r,outerRadius:s,innerRadius:c,midRadius:l,degPerStep:u,turnsTotal:g,stairWidth:s-c};return v.recommendations=x(v,t),v}function E(e,t,n){switch(e){case`straight`:return S(t,n);case`lshaped`:return C(t,n);case`ushaped`:return w(t,n);case`spiral`:return T(t,n);default:return null}}var D={bg:`#06111C`,panel:`#08182A`,border:`#0A2030`,borderHover:`#0E2A40`,text:`#A8C8E0`,textDim:`#2A5070`,textBright:`#D8ECF8`,accent:`#E8A030`,accentDim:`#3A2800`,blue:`#3CB0F0`,blueDim:`#06111C`,green:`#27C06A`,red:`#EF4444`,amber:`#E8A030`,teal:`#44C899`,gridLine:`#0A1E2E`,stepFill:`#09202F`,stepStroke:`#3CB0F0`},O={ui:`'Space Grotesk', system-ui, sans-serif`,mono:`'JetBrains Mono', 'Fira Mono', monospace`},k={background:D.bg,border:`1px solid ${D.border}`,borderRadius:5,color:D.text,padding:`7px 10px`,fontSize:13,fontFamily:O.mono,width:`100%`,boxSizing:`border-box`,outline:`none`,transition:`border-color 0.15s`},A={display:`block`,fontSize:9.5,color:D.textDim,fontFamily:O.mono,letterSpacing:`0.12em`,textTransform:`uppercase`,marginBottom:4},j={fontSize:9,color:`#152E44`,fontFamily:O.mono,marginTop:3,lineHeight:1.45},M={padding:`13px 15px`,borderBottom:`1px solid ${D.border}`},N={fontSize:9,color:D.accent,fontFamily:O.mono,letterSpacing:`0.14em`,textTransform:`uppercase`,marginBottom:9},P=e=>({background:e?D.accent:`transparent`,color:e?D.bg:D.textDim,border:`1px solid ${e?D.accent:D.border}`,borderRadius:4,padding:`4px 13px`,fontSize:10,fontFamily:O.mono,fontWeight:700,cursor:`pointer`,letterSpacing:`0.12em`,textTransform:`uppercase`,transition:`all 0.12s`}),ee=e=>({display:`flex`,alignItems:`center`,gap:7,marginBottom:13,padding:`6px 9px`,background:D.bg,borderRadius:5,border:`1px solid ${e}22`}),te=o((e=>{var t=u(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),F=o(((e,t)=>{t.exports=te()}))();function ne({value:e,onChange:t}){return(0,F.jsxs)(`div`,{style:{padding:`13px 15px`,borderBottom:`1px solid ${D.border}`},children:[(0,F.jsx)(`div`,{style:N,children:`Staircase Type`}),(0,F.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:6},children:Object.values(y).map(n=>{let r=e===n.id;return(0,F.jsxs)(`button`,{onClick:()=>t(n.id),title:n.description,style:{background:r?`#071D2E`:`transparent`,border:`1px solid ${r?D.accent:D.border}`,borderRadius:5,padding:`7px 6px`,cursor:`pointer`,textAlign:`left`,transition:`all 0.12s`},children:[(0,F.jsx)(`div`,{style:{fontSize:17,marginBottom:2,color:D.accent},children:n.icon}),(0,F.jsx)(`div`,{style:{fontSize:9.5,fontFamily:O.mono,color:r?D.accent:D.textDim,fontWeight:700,letterSpacing:`0.06em`},children:n.label})]},n.id)})}),(0,F.jsx)(`div`,{style:{marginTop:8,fontSize:9,fontFamily:O.mono,color:`#122B3E`,lineHeight:1.55},children:y[e]?.description})]})}var I={straight:[{key:`totalRise`,label:`Total Rise (mm)`,hint:`Floor-to-floor vertical height`},{key:`totalRun`,label:`Total Run (mm)`,hint:`Available horizontal distance`},{key:`stairWidth`,label:`Stair Width (mm)`,hint:e=>`Min ${e.widthMin} mm required`},{key:`numStepsOverride`,label:`Step Count Override`,hint:`Leave blank to auto-calculate`,optional:!0,placeholder:`Auto`}],lshaped:[{key:`totalRise`,label:`Total Rise (mm)`,hint:`Floor-to-floor vertical height`},{key:`run1`,label:`Flight 1 Run (mm)`,hint:`Horizontal run of the first flight`},{key:`run2`,label:`Flight 2 Run (mm)`,hint:`Horizontal run of the second flight (after turn)`},{key:`stairWidth`,label:`Stair Width (mm)`,hint:e=>`Min ${e.widthMin} mm required`},{key:`landingDepth`,label:`Landing Depth (mm)`,hint:`Flat landing at the 90° turn (≥ stair width)`},{key:`numStepsOverride`,label:`Step Count Override`,hint:`Leave blank to auto-calculate`,optional:!0,placeholder:`Auto`}],ushaped:[{key:`totalRise`,label:`Total Rise (mm)`,hint:`Floor-to-floor vertical height`},{key:`flightRun`,label:`Single Flight Run (mm)`,hint:`Horizontal run of one flight (both flights equal)`},{key:`stairWidth`,label:`Stair Width (mm)`,hint:e=>`Min ${e.widthMin} mm required`},{key:`landingDepth`,label:`Landing Depth (mm)`,hint:`Flat landing between flights (≥ stair width)`},{key:`numStepsOverride`,label:`Step Count Override`,hint:`Leave blank to auto-calculate`,optional:!0,placeholder:`Auto`}],spiral:[{key:`totalRise`,label:`Total Rise (mm)`,hint:`Floor-to-floor vertical height`},{key:`diameter`,label:`Overall Diameter (mm)`,hint:`Outer diameter of the spiral (min ~1200 mm)`},{key:`stairWidth`,label:`Tread Width (mm)`,hint:`Walkable tread width (outer – inner radius)`},{key:`numStepsOverride`,label:`Step Count Override`,hint:`Leave blank to auto-calculate`,optional:!0,placeholder:`Auto`}]};function re({stairType:e,region:t,inputs:n,onInputChange:r,onRegionChange:i}){let a=v[t],o=I[e]||I.straight;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(`div`,{style:M,children:[(0,F.jsx)(`div`,{style:N,children:`Building Code`}),(0,F.jsx)(`select`,{value:t,onChange:e=>i(e.target.value),style:{...k,cursor:`pointer`},children:Object.entries(v).map(([e,t])=>(0,F.jsxs)(`option`,{value:e,children:[t.flag,`  `,t.name]},e))}),(0,F.jsx)(`div`,{style:{...j,marginTop:6,lineHeight:1.55},children:a.notes}),(0,F.jsx)(`div`,{style:{marginTop:5,fontSize:9,color:`#0E3050`,fontFamily:O.mono},children:a.formulaLabel})]}),(0,F.jsxs)(`div`,{style:M,children:[(0,F.jsx)(`div`,{style:N,children:`Measurements`}),o.map(({key:e,label:t,hint:i,optional:o,placeholder:s})=>(0,F.jsxs)(`div`,{style:{marginBottom:11},children:[(0,F.jsxs)(`label`,{style:A,children:[t,o&&(0,F.jsx)(`span`,{style:{color:`#0A2030`,marginLeft:4},children:`(opt.)`})]}),(0,F.jsx)(`input`,{type:`number`,value:n[e]??``,onChange:t=>r(e,t.target.value),placeholder:s||``,style:k,min:`1`}),(0,F.jsx)(`div`,{style:j,children:typeof i==`function`?i(a):i})]},e))]})]})}var ie={ok:D.green,err:D.red,warn:D.amber};function L({label:e,value:t,unit:n}){return(0,F.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`baseline`,padding:`4px 0`,borderBottom:`1px solid #071520`},children:[(0,F.jsx)(`span`,{style:{fontSize:9.5,fontFamily:O.mono,color:D.textDim},children:e}),(0,F.jsxs)(`span`,{style:{fontSize:13,fontFamily:O.mono,color:`#C0DCF0`,fontWeight:500},children:[t,(0,F.jsx)(`span`,{style:{fontSize:9,color:D.textDim},children:n})]})]})}function ae({r:e}){return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(L,{label:`Steps`,value:e.nSteps,unit:``}),(0,F.jsx)(L,{label:`Riser`,value:e.riser.toFixed(1),unit:` mm`}),(0,F.jsx)(L,{label:`Tread`,value:e.tread.toFixed(1),unit:` mm`}),(0,F.jsx)(L,{label:`Angle`,value:e.angle.toFixed(2),unit:`°`}),(0,F.jsx)(L,{label:`Stringer`,value:(e.stringer/1e3).toFixed(3),unit:` m`}),(0,F.jsx)(L,{label:`2R + T`,value:e.formula.toFixed(1),unit:` mm`})]})}function oe({r:e}){return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(L,{label:`Total Steps`,value:e.nSteps,unit:``}),(0,F.jsx)(L,{label:`Flight 1 Steps`,value:e.stepsF1,unit:``}),(0,F.jsx)(L,{label:`Flight 2 Steps`,value:e.stepsF2,unit:``}),(0,F.jsx)(L,{label:`Riser`,value:e.riser.toFixed(1),unit:` mm`}),(0,F.jsx)(L,{label:`Tread F1`,value:e.tread1.toFixed(1),unit:` mm`}),(0,F.jsx)(L,{label:`Tread F2`,value:e.tread2.toFixed(1),unit:` mm`}),(0,F.jsx)(L,{label:`Angle`,value:e.angle.toFixed(2),unit:`°`}),(0,F.jsx)(L,{label:`2R + T`,value:e.formula.toFixed(1),unit:` mm`})]})}function se({r:e}){return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(L,{label:`Total Steps`,value:e.nSteps,unit:``}),(0,F.jsx)(L,{label:`Steps / Flight`,value:e.stepsPerFlight,unit:``}),(0,F.jsx)(L,{label:`Riser`,value:e.riser.toFixed(1),unit:` mm`}),(0,F.jsx)(L,{label:`Tread`,value:e.tread.toFixed(1),unit:` mm`}),(0,F.jsx)(L,{label:`Angle`,value:e.angle.toFixed(2),unit:`°`}),(0,F.jsx)(L,{label:`Total Width`,value:e.totalWidth.toFixed(0),unit:` mm`}),(0,F.jsx)(L,{label:`Total Depth`,value:e.totalDepth.toFixed(0),unit:` mm`}),(0,F.jsx)(L,{label:`2R + T`,value:e.formula.toFixed(1),unit:` mm`})]})}function ce({r:e}){return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(L,{label:`Total Steps`,value:e.nSteps,unit:``}),(0,F.jsx)(L,{label:`Turns`,value:e.turnsTotal.toFixed(2),unit:`×`}),(0,F.jsx)(L,{label:`Deg / Step`,value:e.degPerStep.toFixed(1),unit:`°`}),(0,F.jsx)(L,{label:`Riser`,value:e.riser.toFixed(1),unit:` mm`}),(0,F.jsx)(L,{label:`Tread (mid)`,value:e.tread.toFixed(1),unit:` mm`}),(0,F.jsx)(L,{label:`Tread (inner)`,value:e.innerTread.toFixed(1),unit:` mm`}),(0,F.jsx)(L,{label:`Outer Radius`,value:e.outerRadius.toFixed(0),unit:` mm`}),(0,F.jsx)(L,{label:`Angle`,value:e.angle.toFixed(2),unit:`°`})]})}var R={straight:ae,lshaped:oe,ushaped:se,spiral:ce};function le({result:e,region:t}){if(v[t],!e)return(0,F.jsx)(`div`,{style:{padding:`13px 15px`,color:`#122B3E`,fontSize:10,fontFamily:O.mono,lineHeight:1.7},children:`Enter measurements to calculate staircase`});let n=e.ok?ie.ok:ie.err,r=R[e.type]||ae;return(0,F.jsxs)(`div`,{style:{padding:`13px 15px`},children:[(0,F.jsxs)(`div`,{style:ee(n),children:[(0,F.jsx)(`div`,{style:{width:6,height:6,borderRadius:`50%`,background:n,flexShrink:0,boxShadow:`0 0 5px ${n}`}}),(0,F.jsx)(`span`,{style:{fontSize:9.5,fontFamily:O.mono,color:n,letterSpacing:`0.1em`,textTransform:`uppercase`},children:e.ok?`Code Compliant`:`Violations Found`})]}),(0,F.jsx)(`div`,{style:N,children:`Results`}),(0,F.jsx)(r,{r:e}),e.recommendations?.length>0&&(0,F.jsxs)(`div`,{style:{marginTop:13,padding:`10px 11px`,background:`#0C1E10`,border:`1px solid #1A4020`,borderRadius:6},children:[(0,F.jsx)(`div`,{style:{fontSize:9,fontFamily:O.mono,color:`#44A050`,letterSpacing:`0.12em`,textTransform:`uppercase`,marginBottom:8},children:`💡 Recommendations`}),e.recommendations.map((e,t)=>(0,F.jsxs)(`div`,{style:{display:`flex`,gap:6,marginBottom:6,alignItems:`flex-start`},children:[(0,F.jsx)(`span`,{style:{fontSize:9,color:ie.warn,flexShrink:0,marginTop:1},children:`→`}),(0,F.jsx)(`div`,{style:{fontSize:9.5,fontFamily:O.mono,color:`#C07830`,lineHeight:1.65},children:e})]},t))]}),(0,F.jsxs)(`div`,{style:{marginTop:13},children:[(0,F.jsx)(`div`,{style:N,children:`Compliance`}),e.checks.map(e=>(0,F.jsxs)(`div`,{style:{display:`flex`,gap:6,marginBottom:7,alignItems:`flex-start`},children:[(0,F.jsx)(`span`,{style:{fontSize:11,color:e.pass?ie.ok:ie.err,flexShrink:0,marginTop:1},children:e.pass?`✓`:`✗`}),(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{style:{fontSize:10,fontFamily:O.mono,color:e.pass?ie.ok:ie.err,lineHeight:1.3},children:[e.label,`: `,e.val]}),(0,F.jsx)(`div`,{style:{fontSize:9,fontFamily:O.mono,color:`#122B3E`},children:e.req})]})]},e.label))]})]})}function ue({stairType:e,region:t,inputs:n,result:r,onTypeChange:i,onInputChange:a,onRegionChange:o,className:s}){return(0,F.jsxs)(`div`,{className:s,style:{width:268,background:D.panel,borderRight:`1px solid ${D.border}`,display:`flex`,flexDirection:`column`,overflowY:`auto`,flexShrink:0},children:[(0,F.jsxs)(`div`,{style:{padding:`18px 15px 14px`,borderBottom:`1px solid ${D.border}`},children:[(0,F.jsx)(`div`,{style:{fontSize:9,fontFamily:O.mono,color:D.accent,letterSpacing:`0.18em`,textTransform:`uppercase`,marginBottom:2},children:`Structural`}),(0,F.jsxs)(`div`,{style:{fontSize:21,fontWeight:700,color:D.textBright,letterSpacing:-.5,lineHeight:1.15,fontFamily:O.ui},children:[`Staircase`,(0,F.jsx)(`br`,{}),`Calculator`]}),(0,F.jsx)(`div`,{style:{marginTop:7,fontSize:9,fontFamily:O.mono,color:`#1A3F5C`,letterSpacing:`0.08em`},children:`TEK17 · IBC · Part K · DIN 18065`})]}),(0,F.jsx)(ne,{value:e,onChange:i}),(0,F.jsx)(re,{stairType:e,region:t,inputs:n,onInputChange:a,onRegionChange:o}),(0,F.jsx)(le,{result:r,region:t})]})}var z=620,B=420,de=72,fe=36,pe=36,me=16,he=28,V=80,H=z-fe-me/2,U=120,W=B-pe-me/2,ge=H-V,_e=W-U,ve=628,ye=840;function G(e,t,n){return Math.min(Math.max(e,t),n)}function be(e){return G(e,108,H-he)}function xe(e){return G(e,148,W-he)}function Se({children:e,badge:t,result:n}){return(0,F.jsxs)(`svg`,{width:`100%`,viewBox:`0 0 ${ye} ${B}`,preserveAspectRatio:`xMidYMid meet`,overflow:`hidden`,style:{overflow:`hidden`},children:[(0,F.jsx)(`style`,{children:`text { font-size: 50%; }`}),(0,F.jsxs)(`defs`,{children:[(0,F.jsx)(`marker`,{id:`bpa`,markerWidth:`7`,markerHeight:`7`,refX:`6`,refY:`3.5`,orient:`auto`,children:(0,F.jsx)(`path`,{d:`M0,0 L7,3.5 L0,7 Z`,fill:`#E8A030`})}),(0,F.jsx)(`marker`,{id:`bpas`,markerWidth:`7`,markerHeight:`7`,refX:`1`,refY:`3.5`,orient:`auto-start-reverse`,children:(0,F.jsx)(`path`,{d:`M0,0 L7,3.5 L0,7 Z`,fill:`#E8A030`})})]}),(0,F.jsx)(`rect`,{width:ye,height:B,fill:D.bg}),[...Array(22)].map((e,t)=>(0,F.jsx)(`line`,{x1:t*30,y1:0,x2:t*30,y2:B,stroke:D.gridLine,strokeWidth:`1`},`vg${t}`)),[...Array(15)].map((e,t)=>(0,F.jsx)(`line`,{x1:0,y1:t*30,x2:z,y2:t*30,stroke:D.gridLine,strokeWidth:`1`},`hg${t}`)),e,(0,F.jsx)(`rect`,{x:623,y:0,width:ye-z-3,height:B,fill:D.bg}),(0,F.jsx)(`line`,{x1:622,y1:0,x2:622,y2:B,stroke:`#0D2840`,strokeWidth:`1`}),n&&(0,F.jsx)(ke,{result:n}),t&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`rect`,{x:z-120,y:6,width:114,height:20,rx:3,fill:`#0A2030`}),(0,F.jsx)(`text`,{x:z-63,y:20,fill:`#2A6EA8`,fontSize:`10`,fontFamily:`monospace`,textAnchor:`middle`,children:t})]})]})}function Ce({x1:e,x2:t,y:n,label:r,textAbove:i=!1}){let a=G(e,V,H),o=G(t,V,H),s=G(n,144,W-(i?18:34)),c=i?s-8:s+14,l=G((a+o)/2,100,H-20);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`line`,{x1:a,y1:s,x2:o,y2:s,stroke:`#E8A030`,strokeWidth:`1`}),(0,F.jsx)(`line`,{x1:a,y1:s-4,x2:a,y2:s+4,stroke:`#E8A030`,strokeWidth:`1`}),(0,F.jsx)(`line`,{x1:o,y1:s-4,x2:o,y2:s+4,stroke:`#E8A030`,strokeWidth:`1`}),(0,F.jsx)(`text`,{x:l,y:c,fill:`#E8A030`,fontSize:`10`,fontFamily:`monospace`,textAnchor:`middle`,children:r})]})}function we({x:e,y1:t,y2:n,label:r}){let i=G(e,100,H-20),a=G(t,132,W-12),o=G(n,132,W-12),s=G(i-16,100,H-20),c=G((a+o)/2+4,140,W-20);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`line`,{x1:i,y1:a,x2:i,y2:o,stroke:`#E8A030`,strokeWidth:`1`}),(0,F.jsx)(`line`,{x1:i-4,y1:a,x2:i+4,y2:a,stroke:`#E8A030`,strokeWidth:`1`}),(0,F.jsx)(`line`,{x1:i-4,y1:o,x2:i+4,y2:o,stroke:`#E8A030`,strokeWidth:`1`}),(0,F.jsx)(`text`,{x:s,y:c,fill:`#E8A030`,fontSize:`10`,fontFamily:`monospace`,textAnchor:`middle`,transform:`rotate(-90 ${s} ${c})`,children:r})]})}function Te({ox:e,oy0:t,nSteps:n,riser:r,tread:i,sc:a,fill:o=D.stepFill,stroke:s=D.stepStroke}){let c=`M ${e} ${t}`,l=t;for(let t=0;t<n;t++){let n=e+(t+1)*i*a;l-=r*a,c+=` V ${l} H ${n}`}return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`path`,{d:`${c} L ${e+n*i*a} ${t} Z`,fill:o,opacity:`0.85`}),(0,F.jsx)(`path`,{d:c,fill:`none`,stroke:s,strokeWidth:`2.2`,strokeLinejoin:`miter`}),(0,F.jsx)(`path`,{d:c,fill:`none`,stroke:`#7ACFFF`,strokeWidth:`0.7`,strokeLinejoin:`miter`,opacity:`0.5`})]})}function Ee({ox:e,oy:t,angle:n,size:r}){let i=n*Math.PI/180,a=e+r*Math.cos(i),o=t-r*Math.sin(i);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`path`,{d:`M ${e+r} ${t} A ${r} ${r} 0 0 0 ${a} ${o}`,fill:`none`,stroke:D.teal,strokeWidth:`1.3`}),(0,F.jsxs)(`text`,{x:be(e+r*.65*Math.cos(i/2)),y:xe(t-r*.65*Math.sin(i/2)+4),fill:D.teal,fontSize:`11`,fontFamily:`monospace`,textAnchor:`middle`,children:[n.toFixed(1),`°`]})]})}function De({title:e,totalRise:t,angle:n,diameter:r}){let i=[e,`Total Rise: ${t?.toFixed(0)??`--`} mm`];typeof n==`number`&&i.push(`Angle: ${n.toFixed(1)}°`),typeof r==`number`&&i.push(`Diameter: ${r.toFixed(0)} mm`);let a=8+i.length*16;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`rect`,{x:310-178/2,y:46,width:178,height:a,rx:8,fill:`rgba(6,22,40,0.88)`,stroke:`#2A6EA8`,strokeWidth:`1`}),i.map((e,t)=>(0,F.jsx)(`text`,{x:310,y:50+t*16+12,fill:t===0?`#82C4FF`:`#C7E7FF`,fontSize:t===0?11:10,fontFamily:`monospace`,textAnchor:`middle`,children:e},e))]})}function Oe(e){switch(e.type){case`lshaped`:return[{label:`Total Height`,value:`${e.totalRise?.toFixed(0)} mm`},{label:`Total Run`,value:`${e.totalRun?.toFixed(0)} mm`},{label:`Total Steps`,value:`${e.nSteps}`},{label:`F1 Steps`,value:`${e.stepsF1}`},{label:`F2 Steps`,value:`${e.stepsF2}`},{label:`Riser`,value:`${e.riser?.toFixed(1)} mm`},{label:`Tread F1`,value:`${e.tread1?.toFixed(1)} mm`},{label:`Tread F2`,value:`${e.tread2?.toFixed(1)} mm`},{label:`Angle`,value:`${e.angle?.toFixed(1)}°`},{label:`2R + T`,value:`${e.formula?.toFixed(1)} mm`}];case`ushaped`:return[{label:`Total Height`,value:`${e.totalRise?.toFixed(0)} mm`},{label:`Flight Run`,value:`${e.flightRun?.toFixed(0)} mm`},{label:`Total Steps`,value:`${e.nSteps}`},{label:`Steps/Flight`,value:`${e.stepsPerFlight}`},{label:`Riser`,value:`${e.riser?.toFixed(1)} mm`},{label:`Tread`,value:`${e.tread?.toFixed(1)} mm`},{label:`Angle`,value:`${e.angle?.toFixed(1)}°`},{label:`Total Width`,value:`${e.totalWidth?.toFixed(0)} mm`},{label:`Total Depth`,value:`${e.totalDepth?.toFixed(0)} mm`},{label:`2R + T`,value:`${e.formula?.toFixed(1)} mm`}];case`spiral`:return[{label:`Total Height`,value:`${e.totalRise?.toFixed(0)} mm`},{label:`Total Steps`,value:`${e.nSteps}`},{label:`Turns`,value:`${e.turnsTotal?.toFixed(2)}×`},{label:`Deg/Step`,value:`${e.degPerStep?.toFixed(1)}°`},{label:`Riser`,value:`${e.riser?.toFixed(1)} mm`},{label:`Tread (mid)`,value:`${e.tread?.toFixed(1)} mm`},{label:`Tread (inner)`,value:`${e.innerTread?.toFixed(1)} mm`},{label:`Outer Radius`,value:`${e.outerRadius?.toFixed(0)} mm`},{label:`Angle`,value:`${e.angle?.toFixed(1)}°`}];default:return[{label:`Total Height`,value:`${e.totalRise?.toFixed(0)} mm`},{label:`Total Run`,value:`${e.totalRun?.toFixed(0)} mm`},{label:`Steps`,value:`${e.nSteps}`},{label:`Riser`,value:`${e.riser?.toFixed(1)} mm`},{label:`Tread`,value:`${e.tread?.toFixed(1)} mm`},{label:`Angle`,value:`${e.angle?.toFixed(1)}°`},{label:`Stringer`,value:`${e.stringer?(e.stringer/1e3).toFixed(3):`--`} m`},{label:`2R + T`,value:`${e.formula?.toFixed(1)} mm`}]}}function ke({result:e}){if(!e)return null;let t=ve,n=Oe(e),r=e.ok?`#44C899`:`#F06060`,i=75+n.length*13+12,a=i+13;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`rect`,{x:t-2,y:6,width:208,height:B-12,rx:3,fill:`#040E18`,stroke:`#0D2840`,strokeWidth:`1`}),(0,F.jsx)(`text`,{x:730,y:22,fill:`#82C4FF`,fontSize:`9`,fontFamily:`monospace`,textAnchor:`middle`,letterSpacing:`1.5`,children:`RESULTS`}),(0,F.jsx)(`line`,{x1:632,y1:26,x2:828,y2:26,stroke:`#0D2E4A`,strokeWidth:`0.8`}),(0,F.jsx)(`text`,{x:730,y:40,fill:r,fontSize:`8.5`,fontFamily:`monospace`,textAnchor:`middle`,children:e.ok?`✓  COMPLIANT`:`✗  VIOLATIONS`}),(0,F.jsx)(`line`,{x1:632,y1:44,x2:828,y2:44,stroke:`#0D2E4A`,strokeWidth:`0.8`}),(0,F.jsx)(`text`,{x:636,y:62,fill:`#1E5080`,fontSize:`7.5`,fontFamily:`monospace`,letterSpacing:`1`,children:`METRICS`}),n.map(({label:e,value:t},n)=>(0,F.jsxs)(`g`,{children:[(0,F.jsx)(`line`,{x1:632,y1:75+n*13-10,x2:828,y2:75+n*13-10,stroke:`#060F1A`,strokeWidth:`0.5`}),(0,F.jsx)(`text`,{x:636,y:75+n*13,fill:`#4A8AAA`,fontSize:`8`,fontFamily:`monospace`,children:e}),(0,F.jsx)(`text`,{x:826,y:75+n*13,fill:`#C0DCF0`,fontSize:`8.5`,fontFamily:`monospace`,textAnchor:`end`,children:t})]},`sm${n}`)),(0,F.jsx)(`line`,{x1:632,y1:i-4,x2:828,y2:i-4,stroke:`#0D2E4A`,strokeWidth:`0.8`}),(0,F.jsx)(`text`,{x:636,y:i,fill:`#1E5080`,fontSize:`7.5`,fontFamily:`monospace`,letterSpacing:`1`,children:`COMPLIANCE`}),(e.checks||[]).map((e,t)=>{let n=e.pass?`#44C899`:`#F06060`,r=a+t*22;return(0,F.jsxs)(`g`,{children:[(0,F.jsx)(`text`,{x:636,y:r,fill:n,fontSize:`9`,fontFamily:`monospace`,children:e.pass?`✓`:`✗`}),(0,F.jsxs)(`text`,{x:647,y:r,fill:n,fontSize:`7.5`,fontFamily:`monospace`,children:[e.label,`: `,e.val]}),(0,F.jsx)(`text`,{x:647,y:r+11,fill:`#1A3F5C`,fontSize:`7`,fontFamily:`monospace`,children:e.req})]},`sc${t}`)})]})}function Ae({message:e=`ENTER MEASUREMENTS`}){return(0,F.jsxs)(Se,{children:[(0,F.jsx)(`text`,{x:z/2,y:B/2-8,fill:`#193450`,fontSize:`12`,fontFamily:`monospace`,textAnchor:`middle`,children:e}),(0,F.jsx)(`text`,{x:z/2,y:224,fill:`#122840`,fontSize:`10`,fontFamily:`monospace`,textAnchor:`middle`,children:`to generate blueprint`})]})}function je({result:e}){if(!e)return(0,F.jsx)(Ae,{});let{nSteps:t,riser:n,tread:r,angle:i,totalRise:a,totalRun:o,stairWidth:s}=e,c=o||t*r,l=ge/c,u=_e/a,d=Math.min(l,u)*.65,f=c*d,p=a*d,m=V+(ge-f)/2,h=U+(_e-p)/2+p;return(0,F.jsxs)(Se,{badge:`${t} STEPS · ${i.toFixed(1)}°`,result:e,children:[(0,F.jsx)(`line`,{x1:G(m-24,V,H),y1:G(h,U,W),x2:G(m+f+16,V,H),y2:G(h,U,W),stroke:`#174870`,strokeWidth:`1.5`,strokeDasharray:`8,4`}),(0,F.jsx)(`line`,{x1:G(m,V,H),y1:G(h-p-16,U,W),x2:G(m,V,H),y2:G(h+24,U,W),stroke:`#174870`,strokeWidth:`1.5`,strokeDasharray:`8,4`}),(0,F.jsx)(`line`,{x1:G(m,V,H),y1:G(h,U,W),x2:G(m+f,V,H),y2:G(h-p,U,W),stroke:`#0F3A5C`,strokeWidth:`1.5`,strokeDasharray:`6,3`}),(0,F.jsx)(Te,{ox:m,oy0:h,nSteps:t,riser:n,tread:r,sc:d}),(0,F.jsx)(Ee,{ox:m,oy:h,angle:i,size:Math.min(f,p)*.22}),(0,F.jsx)(we,{x:m-38,y1:h-p,y2:h,label:`Total Rise: ${a.toFixed(0)} mm`}),(0,F.jsx)(Ce,{x1:m,x2:m+f,y:h+34,label:`Total Run: ${c.toFixed(0)} mm`}),(0,F.jsx)(De,{title:`ELEVATION VIEW`,totalRise:a,angle:i}),n*d>20&&(0,F.jsxs)(`text`,{x:be(m+6),y:xe(h-n*d/2+4),fill:`#6DB8E0`,fontSize:`9.5`,fontFamily:`monospace`,children:[`Riser `,n.toFixed(0),` mm`]}),r*d>30&&(0,F.jsxs)(`text`,{x:be(m+r*d/2),y:xe(h-6),fill:`#6DB8E0`,fontSize:`9.5`,fontFamily:`monospace`,textAnchor:`middle`,children:[`Tread `,r.toFixed(0),` mm`]})]})}function Me({result:e}){if(!e)return(0,F.jsx)(Ae,{message:`ENTER RISE & RUNS`});let{nSteps:t,stepsF1:n,stepsF2:r,riser:i,tread1:a,tread2:o,angle:s,totalRise:c,run1:l,run2:u,landingDepth:d,stairWidth:f}=e,p=l+d,m=c,h=ge/p,g=_e/m,_=Math.min(h,g)*.62,v=V+(ge-p*_)/2,y=U+(_e-m*_)/2+m*_,b=n*i,x=r*i,S=l*_,C=d*_,w=`M ${v} ${y}`,T=y;for(let e=0;e<n;e++){let t=v+(e+1)*a*_;T-=i*_,w+=` V ${T} H ${t}`}let E=`${w} L ${v+S} ${y} Z`,O=v+S,k=T,A=O,j=C,M=x*_,N=k-M;return(0,F.jsxs)(Se,{badge:`${t} STEPS · 90° TURN`,result:e,children:[(0,F.jsx)(`line`,{x1:G(v-20,V,H),y1:G(y,U,W),x2:G(v+p*_+20,V,H),y2:G(y,U,W),stroke:`#174870`,strokeWidth:`1.5`,strokeDasharray:`8,4`}),(0,F.jsx)(`line`,{x1:G(v,V,H),y1:G(y-c*_-16,U,W),x2:G(v,V,H),y2:G(y+24,U,W),stroke:`#174870`,strokeWidth:`1.5`,strokeDasharray:`8,4`}),(0,F.jsx)(`line`,{x1:G(v,V,H),y1:G(y,U,W),x2:G(v+S,V,H),y2:G(y-b*_,U,W),stroke:`#0F3A5C`,strokeWidth:`1.5`,strokeDasharray:`6,3`}),(0,F.jsx)(`path`,{d:E,fill:D.stepFill,opacity:`0.85`}),(0,F.jsx)(`path`,{d:w,fill:`none`,stroke:D.stepStroke,strokeWidth:`2.2`,strokeLinejoin:`miter`}),(0,F.jsx)(`path`,{d:w,fill:`none`,stroke:`#7ACFFF`,strokeWidth:`0.7`,strokeLinejoin:`miter`,opacity:`0.5`}),(0,F.jsx)(`rect`,{x:O,y:k,width:C,height:i*_,fill:`#0B2A3E`,stroke:`#2A6080`,strokeWidth:`1.5`,strokeDasharray:`4,3`}),(0,F.jsx)(`text`,{x:be(O+C/2),y:xe(k+i*_/2+4),fill:`#1A4060`,fontSize:`8`,fontFamily:`monospace`,textAnchor:`middle`,children:`LANDING`}),(0,F.jsx)(`text`,{x:be(O+C/2),y:xe(k+i*_+14),fill:`#44C899`,fontSize:`11`,fontFamily:`monospace`,textAnchor:`middle`,children:`90°↱`}),(0,F.jsx)(`rect`,{x:A,y:N,width:j,height:M,fill:D.stepFill,opacity:`0.85`}),[...Array(r-1)].map((e,t)=>{let n=k-(t+1)*i*_;return(0,F.jsx)(`line`,{x1:A,y1:n,x2:A+j,y2:n,stroke:D.stepStroke,strokeWidth:`2`},t)}),(0,F.jsx)(`path`,{d:`M ${A} ${N} L ${A+j} ${N} L ${A+j} ${k} L ${A} ${k} Z`,fill:`none`,stroke:D.stepStroke,strokeWidth:`2.2`}),(0,F.jsx)(Ee,{ox:v,oy:y,angle:s,size:Math.min(S,b*_)*.22}),(0,F.jsx)(Ce,{x1:v,x2:v+S,y:y+34,label:`Run 1: ${l.toFixed(0)} mm`}),(0,F.jsx)(Ce,{x1:O,x2:O+C,y:y+34,label:`Landing: ${d.toFixed(0)} mm`}),(0,F.jsx)(we,{x:v-38,y1:y-c*_,y2:y,label:`${c.toFixed(0)} mm`}),(0,F.jsx)(we,{x:A+j+28,y1:y,y2:k,label:`Flight 1: ${b.toFixed(0)} mm`}),(0,F.jsx)(we,{x:A+j+28,y1:k,y2:N,label:`Flight 2: ${x.toFixed(0)} mm`}),(0,F.jsx)(De,{title:`ELEVATION VIEW`,totalRise:c,angle:s}),(0,F.jsx)(`text`,{x:be(v+S*.65),y:xe(y-b*_/2),fill:`#44C899`,fontSize:`8.5`,fontFamily:`monospace`,textAnchor:`middle`,children:`Flight 1`}),(0,F.jsx)(`text`,{x:be(A+j*.5),y:xe(k-M/2),fill:`#44C899`,fontSize:`8.5`,fontFamily:`monospace`,textAnchor:`middle`,children:`Flight 2`})]})}function Ne({result:e}){if(!e)return(0,F.jsx)(Ae,{});let{nSteps:t,tread:n,stairWidth:r,totalRun:i,totalRise:a,angle:o}=e,s=i||t*n,c=r,l=ge/s,u=_e/c,d=Math.min(l,u)*.62,f=s*d,p=c*d,m=V+(ge-f)/2,h=U+(_e-p)/2;return(0,F.jsxs)(Se,{badge:`${t} STEPS · TOP-DOWN`,result:e,children:[(0,F.jsx)(`line`,{x1:G(m-24,V,H),y1:G(h,U,W),x2:G(m+f+16,V,H),y2:G(h,U,W),stroke:`#174870`,strokeWidth:`1.5`,strokeDasharray:`8,4`}),(0,F.jsx)(`line`,{x1:G(m,V,H),y1:G(h-16,U,W),x2:G(m,V,H),y2:G(h+p+24,U,W),stroke:`#174870`,strokeWidth:`1.5`,strokeDasharray:`8,4`}),(0,F.jsx)(`rect`,{x:m,y:h,width:f,height:p,fill:D.stepFill,opacity:`0.85`,stroke:D.stepStroke,strokeWidth:`2.2`}),[...Array(t-1)].map((e,t)=>(0,F.jsx)(`line`,{x1:m+(t+1)*n*d,y1:h,x2:m+(t+1)*n*d,y2:h+p,stroke:D.stepStroke,strokeWidth:`1.5`},t)),(0,F.jsx)(Ce,{x1:m,x2:m+f,y:h+p+24,label:`Run: ${s.toFixed(0)} mm`}),(0,F.jsx)(we,{x:m-24,y1:h,y2:h+p,label:`Width: ${c.toFixed(0)} mm`}),(0,F.jsx)(De,{title:`TOP-DOWN VIEW`,totalRise:a,angle:o})]})}function Pe({result:e}){if(!e)return(0,F.jsx)(Ae,{message:`ENTER RISE & RUNS`});let{stepsF1:t,stepsF2:n,riser:r,tread1:i,tread2:a,totalRise:o,run1:s,run2:c,landingDepth:l,stairWidth:u,angle:d}=e,f=u,p=s+Math.max(l,f),m=f+c,h=ge/p,g=_e/m,_=Math.min(h,g)*.62,v=V+(ge-p*_)/2,y=U+(_e-m*_)/2,b=y+c*_,x=v+s*_;return(0,F.jsxs)(Se,{badge:`${t+n} STEPS · TOP-DOWN`,result:e,children:[(0,F.jsx)(`line`,{x1:G(v-20,V,H),y1:G(y,U,W),x2:G(v+p*_+20,V,H),y2:G(y,U,W),stroke:`#174870`,strokeWidth:`1.5`,strokeDasharray:`8,4`}),(0,F.jsx)(`line`,{x1:G(v,V,H),y1:G(y-16,U,W),x2:G(v,V,H),y2:G(y+m*_+24,U,W),stroke:`#174870`,strokeWidth:`1.5`,strokeDasharray:`8,4`}),(0,F.jsx)(`rect`,{x:v,y:b,width:s*_,height:f*_,fill:D.stepFill,opacity:`0.85`,stroke:D.stepStroke,strokeWidth:`2.2`}),[...Array(t-1)].map((e,t)=>(0,F.jsx)(`line`,{x1:v+(t+1)*i*_,y1:b,x2:v+(t+1)*i*_,y2:b+f*_,stroke:D.stepStroke,strokeWidth:`1.5`},`f1-${t}`)),(0,F.jsx)(`rect`,{x:v+s*_,y:b,width:l*_,height:f*_,fill:`#0B2A3E`,stroke:`#2A6080`,strokeWidth:`1.5`,strokeDasharray:`4,3`}),(0,F.jsx)(`rect`,{x,y,width:f*_,height:c*_,fill:D.stepFill,opacity:`0.85`,stroke:D.stepStroke,strokeWidth:`2.2`}),[...Array(n-1)].map((e,t)=>{let n=y+(t+1)*a*_;return(0,F.jsx)(`line`,{x1:x,y1:n,x2:x+f*_,y2:n,stroke:D.stepStroke,strokeWidth:`1.5`},`f2-${t}`)}),(0,F.jsx)(`text`,{x:be(v+s*_/2),y:xe(b+f*_/2+4),fill:`#44C899`,fontSize:`9`,fontFamily:`monospace`,textAnchor:`middle`,children:`Flight 1`}),(0,F.jsx)(`text`,{x:be(x+f*_/2),y:xe(y+c*_/2+4),fill:`#44C899`,fontSize:`9`,fontFamily:`monospace`,textAnchor:`middle`,children:`Flight 2`}),(0,F.jsx)(Ce,{x1:v,x2:v+s*_,y:b+f*_+24,label:`Run 1: ${s.toFixed(0)} mm`}),(0,F.jsx)(Ce,{x1:v+s*_,x2:v+s*_+l*_,y:b+f*_+24,label:`Landing: ${l.toFixed(0)} mm`}),(0,F.jsx)(we,{x:v-24,y1:b,y2:b+f*_,label:`Width: ${f.toFixed(0)} mm`}),(0,F.jsx)(we,{x:x+f*_+24,y1:y,y2:y+c*_,label:`Run 2: ${c.toFixed(0)} mm`}),(0,F.jsx)(De,{title:`TOP-DOWN VIEW`,totalRise:o,angle:d})]})}function Fe({result:e}){if(!e)return(0,F.jsx)(Ae,{message:`ENTER RISE & RUN`});let{stepsPerFlight:t,riser:n,tread:r,flightRun:i,landingDepth:a,stairWidth:o,angle:s}=e,c=i*2+a,l=o,u=ge/c,d=_e/l,f=Math.min(u,d)*.62,p=V+(ge-c*f)/2,m=U+(_e-l*f)/2;return(0,F.jsxs)(Se,{badge:`${t*2} STEPS · TOP-DOWN`,result:e,children:[(0,F.jsx)(`line`,{x1:G(p-20,V,H),y1:G(m,U,W),x2:G(p+c*f+20,V,H),y2:G(m,U,W),stroke:`#174870`,strokeWidth:`1.5`,strokeDasharray:`8,4`}),(0,F.jsx)(`line`,{x1:G(p,V,H),y1:G(m-16,U,W),x2:G(p,V,H),y2:G(m+l*f+24,U,W),stroke:`#174870`,strokeWidth:`1.5`,strokeDasharray:`8,4`}),(0,F.jsx)(`rect`,{x:p,y:m,width:i*f,height:o*f,fill:D.stepFill,opacity:`0.85`,stroke:D.stepStroke,strokeWidth:`2.2`}),(0,F.jsx)(`rect`,{x:p+i*f,y:m,width:a*f,height:o*f,fill:`#0B2A3E`,stroke:`#2A6080`,strokeWidth:`1.5`,strokeDasharray:`4,3`}),(0,F.jsx)(`rect`,{x:p+(i+a)*f,y:m,width:i*f,height:o*f,fill:D.stepFill,opacity:`0.85`,stroke:D.stepStroke,strokeWidth:`2.2`}),[...Array(t-1)].map((e,t)=>(0,F.jsx)(`line`,{x1:p+(t+1)*r*f,y1:m,x2:p+(t+1)*r*f,y2:m+o*f,stroke:D.stepStroke,strokeWidth:`1.5`},`l1-${t}`)),[...Array(t-1)].map((e,t)=>(0,F.jsx)(`line`,{x1:p+(i+a)*f+(t+1)*r*f,y1:m,x2:p+(i+a)*f+(t+1)*r*f,y2:m+o*f,stroke:D.stepStroke,strokeWidth:`1.5`},`l2-${t}`)),(0,F.jsx)(`text`,{x:be(p+i*f/2),y:xe(m+o*f/2+4),fill:`#44C899`,fontSize:`9`,fontFamily:`monospace`,textAnchor:`middle`,children:`Flight 1`}),(0,F.jsx)(`text`,{x:be(p+(i+a)*f+i*f/2),y:xe(m+o*f/2+4),fill:`#44C899`,fontSize:`9`,fontFamily:`monospace`,textAnchor:`middle`,children:`Flight 2`}),(0,F.jsx)(Ce,{x1:p,x2:p+i*f,y:m+o*f+24,label:`Flight 1: ${i.toFixed(0)} mm`}),(0,F.jsx)(Ce,{x1:p+i*f,x2:p+(i+a)*f,y:m+o*f+24,label:`Landing: ${a.toFixed(0)} mm`}),(0,F.jsx)(Ce,{x1:p+(i+a)*f,x2:p+c*f,y:m-16,label:`Flight 2: ${i.toFixed(0)} mm`}),(0,F.jsx)(we,{x:p-24,y1:m,y2:m+o*f,label:`Width: ${o.toFixed(0)} mm`}),(0,F.jsx)(De,{title:`TOP-DOWN VIEW`,totalRise:e.totalRise,angle:s})]})}function Ie({result:e}){if(!e)return(0,F.jsx)(Ae,{message:`ENTER RISE & RUN`});let{stepsPerFlight:t,riser:n,tread:r,angle:i,totalRise:a,flightRun:o,landingDepth:s,stairWidth:c,wellGap:l}=e,u=a,d=o*2+s,f=ge/d,p=_e/u,m=Math.min(f,p)*.62,h=V+(ge-d*m)/2,g=376-(_e-u*m)/2,_=o*m,v=s*m,y=`M ${h} ${g}`,b=g;for(let e=0;e<t;e++){let t=h+(e+1)*r*m;b-=n*m,y+=` V ${b} H ${t}`}let x=`${y} L ${h+_} ${g} Z`,S=b,C=h+_,w=`M ${C} ${S}`,T=S;for(let e=0;e<t;e++){T-=n*m;let t=C-(e+1)*r*m;w+=` V ${T} H ${t}`}let E=T,O=t*n*m,k=h+_*.65,A=C-_*.6,j=g-O*.42,M=S-O*.42,N=E-12,P=`${w} L ${C-_} ${S} Z`;return(0,F.jsxs)(Se,{badge:`${t*2} STEPS · 180° TURN`,result:e,children:[(0,F.jsx)(`line`,{x1:h-20,y1:g,x2:h+d*m+20,y2:g,stroke:`#174870`,strokeWidth:`1.5`,strokeDasharray:`8,4`}),(0,F.jsx)(`line`,{x1:G(h,V,H),y1:G(g-a*m-16,U,W),x2:G(h,V,H),y2:G(g+24,U,W),stroke:`#174870`,strokeWidth:`1.5`,strokeDasharray:`8,4`}),(0,F.jsx)(`line`,{x1:G(h,V,H),y1:G(g,U,W),x2:G(h+_,V,H),y2:G(S,U,W),stroke:`#0F3A5C`,strokeWidth:`1.5`,strokeDasharray:`6,3`}),(0,F.jsx)(`path`,{d:x,fill:D.stepFill,opacity:`0.85`}),(0,F.jsx)(`path`,{d:y,fill:`none`,stroke:D.stepStroke,strokeWidth:`2.2`,strokeLinejoin:`miter`}),(0,F.jsx)(`path`,{d:y,fill:`none`,stroke:`#7ACFFF`,strokeWidth:`0.7`,strokeLinejoin:`miter`,opacity:`0.5`}),(0,F.jsx)(`rect`,{x:C,y:S,width:v,height:n*m,fill:`#0B2A3E`,stroke:`#2A6080`,strokeWidth:`1.5`,strokeDasharray:`4,3`}),(0,F.jsx)(`text`,{x:be(C+v/2),y:xe(S+n*m/2+4),fill:`#1A4060`,fontSize:`8`,fontFamily:`monospace`,textAnchor:`middle`,children:`LANDING`}),(0,F.jsx)(`text`,{x:be(C+v/2),y:xe(S-12),fill:`#44C899`,fontSize:`11`,fontFamily:`monospace`,textAnchor:`middle`,children:`180°↩`}),(0,F.jsx)(`path`,{d:P,fill:D.stepFill,opacity:`0.85`}),(0,F.jsx)(`path`,{d:w,fill:`none`,stroke:D.stepStroke,strokeWidth:`2.2`,strokeLinejoin:`miter`}),(0,F.jsx)(`path`,{d:w,fill:`none`,stroke:`#7ACFFF`,strokeWidth:`0.7`,strokeLinejoin:`miter`,opacity:`0.5`}),(0,F.jsx)(Ee,{ox:h,oy:g,angle:i,size:_*.22}),(0,F.jsx)(Ce,{x1:h,x2:h+_,y:g+34,label:`Flight 1: ${o.toFixed(0)} mm`}),(0,F.jsx)(Ce,{x1:C-_,x2:C,y:N,label:`Flight 2: ${o.toFixed(0)} mm`,textAbove:!0}),(0,F.jsx)(Ce,{x1:C,x2:C+v,y:g+34,label:`Landing: ${s.toFixed(0)} mm`}),(0,F.jsx)(we,{x:h-38,y1:g-a*m,y2:g,label:`Total Rise: ${a.toFixed(0)} mm`}),(0,F.jsx)(we,{x:C+v+28,y1:g,y2:S,label:`Flight 1: ${(t*n).toFixed(0)} mm`}),(0,F.jsx)(we,{x:C+v+28,y1:S,y2:E,label:`Flight 2: ${(t*n).toFixed(0)} mm`}),(0,F.jsx)(`text`,{x:be(k),y:xe(j),fill:`#44C899`,fontSize:`9`,fontFamily:`monospace`,textAnchor:`middle`,children:`Flight 1`}),(0,F.jsx)(`text`,{x:be(A),y:xe(M),fill:`#44C899`,fontSize:`9`,fontFamily:`monospace`,textAnchor:`middle`,children:`Flight 2`}),(0,F.jsx)(De,{title:`ELEVATION VIEW`,totalRise:a,angle:i})]})}function Le({result:e}){if(!e)return(0,F.jsx)(Ae,{message:`ENTER RISE & DIAMETER`});let{nSteps:t,riser:n,degPerStep:r,outerRadius:i,innerRadius:a,totalRise:o}=e,s=t*r/360,c=Math.min(_e*.65,o*.65),l=c/o,u=ge*.55,d=191.6,f=376-(_e-c)/2,p=251.61599999999999,m=u*.3,h=u*.18,g=Math.max(24,Math.round(s*16)),_=[],v=[];for(let e=0;e<=g;e++){let t=e/g,n=f-t*c,r=Math.PI*2*s*t-Math.PI/2,i=p+m*Math.cos(r),a=p+h*Math.cos(r);e===0?(_.push(`M ${i} ${n}`),v.push(`M ${a} ${n}`)):(_.push(`L ${i} ${n}`),v.push(`L ${a} ${n}`))}let y=[...Array(t)].map((e,r)=>{let i=f-(r+.5)*n*l,a=Math.PI*2*s*((r+.5)/t)-Math.PI/2;return{x:p+m*Math.cos(a),y:i}});return(0,F.jsxs)(Se,{badge:`${t} STEPS · SPIRAL ELEVATION`,result:e,children:[(0,F.jsx)(`line`,{x1:G(d-16,V,H),y1:G(f,U,W),x2:G(480.4,V,H),y2:G(f,U,W),stroke:`#174870`,strokeWidth:`1.5`,strokeDasharray:`8,4`}),(0,F.jsx)(`line`,{x1:G(d,V,H),y1:G(f-c-16,U,W),x2:G(d,V,H),y2:G(f+24,U,W),stroke:`#174870`,strokeWidth:`1.5`,strokeDasharray:`8,4`}),(0,F.jsx)(`line`,{x1:p,y1:f,x2:p,y2:f-c,stroke:`#7ACFFF`,strokeWidth:`4`}),(0,F.jsx)(`path`,{d:_.join(` `),fill:`none`,stroke:`#E8A030`,strokeWidth:`2.4`}),(0,F.jsx)(`path`,{d:v.join(` `),fill:`none`,stroke:`#E8A030`,strokeWidth:`2.4`}),(0,F.jsx)(De,{title:`ELEVATION VIEW`,totalRise:o,diameter:i*2}),(0,F.jsxs)(`text`,{x:be(p),y:xe(f-c-14),fill:`#E8A030`,fontSize:`10`,fontFamily:`monospace`,textAnchor:`middle`,children:[s.toFixed(1),` turns · ⌀`,(i*2).toFixed(0),` mm`]}),y.map((e,t)=>(0,F.jsx)(`line`,{x1:p,y1:e.y,x2:e.x,y2:e.y,stroke:D.stepStroke,strokeWidth:`2`},t)),(0,F.jsx)(`circle`,{cx:p,cy:f-c,r:6,fill:`#44C899`}),(0,F.jsx)(we,{x:d-36,y1:f-c,y2:f,label:`Height: ${o.toFixed(0)} mm`})]})}function Re({result:e}){if(!e)return(0,F.jsx)(Ae,{message:`ENTER RISE & DIAMETER`});let{nSteps:t,riser:n,tread:r,degPerStep:i,outerRadius:a,innerRadius:o,totalRise:s}=e,c=a,l=Math.min(ge,_e)*.3/c,u=a*l,d=o*l,f=Math.min(t,16),p=[];for(let e=0;e<f;e++){let t=(e*i-90)*Math.PI/180,n=((e+1)*i-90)*Math.PI/180,r=328+u*Math.cos(t),a=248+u*Math.sin(t),o=328+u*Math.cos(n),s=248+u*Math.sin(n),c=328+d*Math.cos(t),l=248+d*Math.sin(t),m=328+d*Math.cos(n),h=248+d*Math.sin(n),g=+(n-t>Math.PI),_=`M ${c} ${l} L ${r} ${a} A ${u} ${u} 0 ${g} 1 ${o} ${s} L ${m} ${h} A ${d} ${d} 0 ${g} 0 ${c} ${l} Z`,v=.3+e/f*.55;p.push((0,F.jsx)(`path`,{d:_,fill:`rgba(30,90,140,${v})`,stroke:D.stepStroke,strokeWidth:`0.8`},e)),p.push((0,F.jsx)(`line`,{x1:c,y1:l,x2:r,y2:a,stroke:`#7ACFFF`,strokeWidth:`0.6`,opacity:`0.4`},`n${e}`))}return(0,F.jsxs)(Se,{badge:`${t} STEPS · ${(t*i/360).toFixed(1)} TURNS`,result:e,children:[(0,F.jsx)(`line`,{x1:G(328-u-16,V,H),y1:G(248,U,W),x2:G(328+u+16,V,H),y2:G(248,U,W),stroke:`#174870`,strokeWidth:`1.5`,strokeDasharray:`8,4`}),(0,F.jsx)(`line`,{x1:G(328,V,H),y1:G(248-u-16,U,W),x2:G(328,V,H),y2:G(248+u+16,U,W),stroke:`#174870`,strokeWidth:`1.5`,strokeDasharray:`8,4`}),(0,F.jsx)(`circle`,{cx:328,cy:248,r:u,fill:`none`,stroke:`#174870`,strokeWidth:`1.5`,strokeDasharray:`6,3`}),(0,F.jsx)(`circle`,{cx:328,cy:248,r:d,fill:`#07192A`,stroke:`#0E3050`,strokeWidth:`1.5`}),(0,F.jsx)(`circle`,{cx:328,cy:248,r:Math.max(3,d*.25),fill:`#1A4060`}),p,(0,F.jsx)(`line`,{x1:328,y1:248,x2:328+u,y2:248,stroke:`#E8A030`,strokeWidth:`1`}),(0,F.jsxs)(`text`,{x:be(328+u/2),y:xe(242),fill:`#E8A030`,fontSize:`9`,fontFamily:`monospace`,textAnchor:`middle`,children:[`⌀`,(a*2).toFixed(0),` mm`]}),(0,F.jsx)(`line`,{x1:G(320,V,H),y1:G(248,U,W),x2:G(336,V,H),y2:G(248,U,W),stroke:`#44C899`,strokeWidth:`1`}),(0,F.jsx)(`line`,{x1:G(328,V,H),y1:G(240,U,W),x2:G(328,V,H),y2:G(256,U,W),stroke:`#44C899`,strokeWidth:`1`}),(0,F.jsxs)(`text`,{x:be(328),y:xe(248+u+22),fill:`#6DB8E0`,fontSize:`9.5`,fontFamily:`monospace`,textAnchor:`middle`,children:[`Riser `,n.toFixed(0),` mm · `,i.toFixed(1),`° / step`]}),(0,F.jsx)(De,{title:`TOP-DOWN VIEW`,totalRise:s}),(0,F.jsx)(we,{x:de-18,y1:134,y2:134+_e*.6*s/s,label:`${s.toFixed(0)} mm`})]})}function ze({result:e,stairType:t,viewMode:n=`elevation`}){switch(t){case`lshaped`:return n===`topdown`?(0,F.jsx)(Pe,{result:e}):(0,F.jsx)(Me,{result:e});case`ushaped`:return n===`topdown`?(0,F.jsx)(Fe,{result:e}):(0,F.jsx)(Ie,{result:e});case`spiral`:return n===`topdown`?(0,F.jsx)(Re,{result:e}):(0,F.jsx)(Le,{result:e});default:return n===`topdown`?(0,F.jsx)(Ne,{result:e}):(0,F.jsx)(je,{result:e})}}var Be=1e3,Ve=1001,He=1002,Ue=1003,We=1004,Ge=1005,Ke=1006,qe=1007,Je=1008,Ye=1009,Xe=1014,Ze=1015,Qe=1016,$e=1020,et=1023,tt=1026,nt=1027,rt=2300,it=2301,at=2302,ot=2400,st=2401,ct=2402,lt=3e3,ut=3001,dt=3200,ft=3201,pt=`srgb`,mt=`srgb-linear`,ht=`display-p3`,gt=`display-p3-linear`,_t=`linear`,vt=`srgb`,yt=`rec709`,bt=7680,xt=35044,St=1035,Ct=2e3,wt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},Tt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Et=Math.PI/180,Dt=180/Math.PI;function Ot(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tt[e&255]+Tt[e>>8&255]+Tt[e>>16&255]+Tt[e>>24&255]+`-`+Tt[t&255]+Tt[t>>8&255]+`-`+Tt[t>>16&15|64]+Tt[t>>24&255]+`-`+Tt[n&63|128]+Tt[n>>8&255]+`-`+Tt[n>>16&255]+Tt[n>>24&255]+Tt[r&255]+Tt[r>>8&255]+Tt[r>>16&255]+Tt[r>>24&255]).toLowerCase()}function kt(e,t,n){return Math.max(t,Math.min(n,e))}function At(e,t){return(e%t+t)%t}function jt(e,t,n){return(1-n)*e+n*t}function Mt(e){return(e&e-1)==0&&e!==0}function Nt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Pt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function Ft(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var K=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},q=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(It.makeScale(e,t)),this}rotate(e){return this.premultiply(It.makeRotation(-e)),this}translate(e,t){return this.premultiply(It.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},It=new q;function Lt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Rt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function zt(){let e=Rt(`canvas`);return e.style.display=`block`,e}var Bt={};function Vt(e){e in Bt||(Bt[e]=!0,console.warn(e))}var Ht=new q().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ut=new q().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wt={[mt]:{transfer:_t,primaries:yt,toReference:e=>e,fromReference:e=>e},[pt]:{transfer:vt,primaries:yt,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[gt]:{transfer:_t,primaries:`p3`,toReference:e=>e.applyMatrix3(Ut),fromReference:e=>e.applyMatrix3(Ht)},[ht]:{transfer:vt,primaries:`p3`,toReference:e=>e.convertSRGBToLinear().applyMatrix3(Ut),fromReference:e=>e.applyMatrix3(Ht).convertLinearToSRGB()}},Gt=new Set([mt,gt]),Kt={enabled:!0,_workingColorSpace:mt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Gt.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let r=Wt[t].toReference,i=Wt[n].fromReference;return i(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Wt[e].primaries},getTransfer:function(e){return e===``?_t:Wt[e].transfer}};function qt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Jt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Yt,Xt=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yt===void 0&&(Yt=Rt(`canvas`)),Yt.width=e.width,Yt.height=e.height;let n=Yt.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yt}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Rt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=qt(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(qt(t[e]/255)*255):t[e]=qt(t[e]);return{data:t,width:e.width,height:e.height}}else return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Zt=0,Qt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zt++}),this.uuid=Ot(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push($t(r[t].image)):e.push($t(r[t]))}else e=$t(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function $t(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Xt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var en=0,tn=class e extends wt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Ve,i=Ve,a=Ke,o=Je,s=et,c=Ye,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:en++}),this.uuid=Ot(),this.name=``,this.source=new Qt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new q,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u==`string`?this.colorSpace=u:(Vt(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace=u===3001?pt:``),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Be:e.x-=Math.floor(e.x);break;case Ve:e.x=e.x<0?0:1;break;case He:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Be:e.y-=Math.floor(e.y);break;case Ve:e.y=e.y<0?0:1;break;case He:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Vt(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace===`srgb`?ut:lt}set encoding(e){Vt(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace=e===3001?pt:``}};tn.DEFAULT_IMAGE=null,tn.DEFAULT_MAPPING=300,tn.DEFAULT_ANISOTROPY=1;var nn=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rn=class extends wt{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t);let r={width:e,height:t,depth:1};n.encoding!==void 0&&(Vt(`THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace.`),n.colorSpace=n.encoding===3001?pt:``),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new tn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Qt(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},an=class extends rn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},on=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Ve,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},sn=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Ve,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(i),n*Math.cos(i),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},J=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(un.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(un.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ln.copy(this).projectOnVector(e),this.sub(ln)}reflect(e){return this.sub(ln.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ln=new J,un=new cn,dn=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,pn):pn.fromBufferAttribute(r,t),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),mn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),mn.copy(e.boundingBox)),mn.applyMatrix4(e.matrixWorld),this.union(mn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xn),Sn.subVectors(this.max,xn),hn.subVectors(e.a,xn),gn.subVectors(e.b,xn),_n.subVectors(e.c,xn),vn.subVectors(gn,hn),yn.subVectors(_n,gn),bn.subVectors(hn,_n);let t=[0,-vn.z,vn.y,0,-yn.z,yn.y,0,-bn.z,bn.y,vn.z,0,-vn.x,yn.z,0,-yn.x,bn.z,0,-bn.x,-vn.y,vn.x,0,-yn.y,yn.x,0,-bn.y,bn.x,0];return!Tn(t,hn,gn,_n,Sn)||(t=[1,0,0,0,1,0,0,0,1],!Tn(t,hn,gn,_n,Sn))?!1:(Cn.crossVectors(vn,yn),t=[Cn.x,Cn.y,Cn.z],Tn(t,hn,gn,_n,Sn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},fn=[new J,new J,new J,new J,new J,new J,new J,new J],pn=new J,mn=new dn,hn=new J,gn=new J,_n=new J,vn=new J,yn=new J,bn=new J,xn=new J,Sn=new J,Cn=new J,wn=new J;function Tn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){wn.fromArray(e,a);let o=i.x*Math.abs(wn.x)+i.y*Math.abs(wn.y)+i.z*Math.abs(wn.z),s=t.dot(wn),c=n.dot(wn),l=r.dot(wn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var En=new dn,Dn=new J,On=new J,kn=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?En.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dn.subVectors(e,this.center);let t=Dn.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Dn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(On.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dn.copy(e.center).add(On)),this.expandByPoint(Dn.copy(e.center).sub(On))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},An=new J,jn=new J,Mn=new J,Nn=new J,Pn=new J,Fn=new J,In=new J,Ln=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){jn.copy(e).add(t).multiplyScalar(.5),Mn.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub(jn);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Mn),o=Nn.dot(this.direction),s=-Nn.dot(Mn),c=Nn.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(jn).addScaledVector(Mn,d),f}intersectSphere(e,t){An.subVectors(e.center,this.origin);let n=An.dot(this.direction),r=An.dot(An)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,r,i){Pn.subVectors(t,e),Fn.subVectors(n,e),In.crossVectors(Pn,Fn);let a=this.direction.dot(In),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,e);let s=o*this.direction.dot(Fn.crossVectors(Nn,Fn));if(s<0)return null;let c=o*this.direction.dot(Pn.cross(Nn));if(c<0||s+c>a)return null;let l=-o*Nn.dot(In);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rn=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/zn.setFromMatrixColumn(e,0).length(),i=1/zn.setFromMatrixColumn(e,1).length(),a=1/zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vn,e,Hn)}lookAt(e,t,n){let r=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Un.crossVectors(n,Gn),Un.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Un.crossVectors(n,Gn)),Un.normalize(),Wn.crossVectors(Gn,Un),r[0]=Un.x,r[4]=Wn.x,r[8]=Gn.x,r[1]=Un.y,r[5]=Wn.y,r[9]=Gn.y,r[2]=Un.z,r[6]=Wn.z,r[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],ee=r[11],te=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*ee,i[12]=a*w+o*O+s*M+c*te,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*ee,i[13]=l*w+u*O+d*M+f*te,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*ee,i[14]=p*w+m*O+h*M+g*te,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*ee,i[15]=_*w+v*O+y*M+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=zn.set(r[0],r[1],r[2]).length(),a=zn.set(r[4],r[5],r[6]).length(),o=zn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);let s=1/i,c=1/a,l=1/o;return Bn.elements[0]*=s,Bn.elements[1]*=s,Bn.elements[2]*=s,Bn.elements[4]*=c,Bn.elements[5]*=c,Bn.elements[6]*=c,Bn.elements[8]*=l,Bn.elements[9]*=l,Bn.elements[10]*=l,t.setFromRotationMatrix(Bn),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=Ct){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ct){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},zn=new J,Bn=new Rn,Vn=new J(0,0,0),Hn=new J(1,1,1),Un=new J,Wn=new J,Gn=new J,Kn=new Rn,qn=new cn,Jn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-kt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(kt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qn.setFromEuler(this),this.setFromQuaternion(qn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER=`XYZ`;var Yn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Xn=0,Zn=new J,Qn=new cn,$n=new Rn,er=new J,tr=new J,nr=new J,rr=new cn,ir=new J(1,0,0),ar=new J(0,1,0),or=new J(0,0,1),sr={type:`added`},cr={type:`removed`},lr=class e extends wt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xn++}),this.uuid=Ot(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new J,n=new Jn,r=new cn,i=new J(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Rn},normalMatrix:{value:new q}}),this.matrix=new Rn,this.matrixWorld=new Rn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.premultiply(Qn),this}rotateX(e){return this.rotateOnAxis(ir,e)}rotateY(e){return this.rotateOnAxis(ar,e)}rotateZ(e){return this.rotateOnAxis(or,e)}translateOnAxis(e,t){return Zn.copy(e).applyQuaternion(this.quaternion),this.position.add(Zn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ir,e)}translateY(e){return this.translateOnAxis(ar,e)}translateZ(e){return this.translateOnAxis(or,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?er.copy(e):er.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(tr,er,this.up):$n.lookAt(er,tr,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),Qn.setFromRotationMatrix($n),this.quaternion.premultiply(Qn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sr)):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cr)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,nr),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,rr,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++){let n=e[t];n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};lr.DEFAULT_UP=new J(0,1,0),lr.DEFAULT_MATRIX_AUTO_UPDATE=!0,lr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ur=new J,dr=new J,fr=new J,pr=new J,mr=new J,hr=new J,gr=new J,_r=new J,vr=new J,yr=new J,br=!1,xr=class e{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ur.subVectors(e,t),r.cross(ur);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){ur.subVectors(r,t),dr.subVectors(n,t),fr.subVectors(e,t);let a=ur.dot(ur),o=ur.dot(dr),s=ur.dot(fr),c=dr.dot(dr),l=dr.dot(fr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getUV(e,t,n,r,i,a,o,s){return br===!1&&(console.warn(`THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().`),br=!0),this.getInterpolation(e,t,n,r,i,a,o,s)}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,pr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,pr.x),s.addScaledVector(a,pr.y),s.addScaledVector(o,pr.z),s)}static isFrontFacing(e,t,n,r){return ur.subVectors(n,t),dr.subVectors(e,t),ur.cross(dr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ur.subVectors(this.c,this.b),dr.subVectors(this.a,this.b),ur.cross(dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,r,i,a){return br===!1&&(console.warn(`THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().`),br=!0),e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;mr.subVectors(r,n),hr.subVectors(i,n),_r.subVectors(e,n);let s=mr.dot(_r),c=hr.dot(_r);if(s<=0&&c<=0)return t.copy(n);vr.subVectors(e,r);let l=mr.dot(vr),u=hr.dot(vr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(mr,a);yr.subVectors(e,i);let f=mr.dot(yr),p=hr.dot(yr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(hr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return gr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(gr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(mr,a).addScaledVector(hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},wr={h:0,s:0,l:0};function Tr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Y=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Kt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Kt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Kt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Kt.workingColorSpace){if(e=At(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Tr(i,r,e+1/3),this.g=Tr(i,r,e),this.b=Tr(i,r,e-1/3)}return Kt.toWorkingColorSpace(this,r),this}setStyle(e,t=pt){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let n=Sr[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qt(e.r),this.g=qt(e.g),this.b=qt(e.b),this}copyLinearToSRGB(e){return this.r=Jt(e.r),this.g=Jt(e.g),this.b=Jt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return Kt.fromWorkingColorSpace(Er.copy(this),e),Math.round(kt(Er.r*255,0,255))*65536+Math.round(kt(Er.g*255,0,255))*256+Math.round(kt(Er.b*255,0,255))}getHexString(e=pt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Er.copy(this),t);let n=Er.r,r=Er.g,i=Er.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Er.copy(this),t),e.r=Er.r,e.g=Er.g,e.b=Er.b,e}getStyle(e=pt){Kt.fromWorkingColorSpace(Er.copy(this),e);let t=Er.r,n=Er.g,r=Er.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(wr);let n=jt(Cr.h,wr.h,t),r=jt(Cr.s,wr.s,t),i=jt(Cr.l,wr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Er=new Y;Y.NAMES=Sr;var Dr=0,Or=class extends wt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dr++}),this.uuid=Ot(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Y(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bt,this.stencilZFail=bt,this.stencilZPass=bt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},kr=class extends Or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ar=new J,jr=new K,Mr=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=xt,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ze,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn(`THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.`),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix4(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyNormalMatrix(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.transformDirection(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Nr=class extends Mr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Pr=class extends Mr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Fr=class extends Mr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ir=0,Lr=new Rn,Rr=new lr,zr=new J,Br=new dn,Vr=new dn,Hr=new J,Ur=class e extends wt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ir++}),this.uuid=Ot(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lt(e)?Pr:Nr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new q().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Lr.makeRotationFromQuaternion(e),this.applyMatrix4(Lr),this}rotateX(e){return Lr.makeRotationX(e),this.applyMatrix4(Lr),this}rotateY(e){return Lr.makeRotationY(e),this.applyMatrix4(Lr),this}rotateZ(e){return Lr.makeRotationZ(e),this.applyMatrix4(Lr),this}translate(e,t,n){return Lr.makeTranslation(e,t,n),this.applyMatrix4(Lr),this}scale(e,t,n){return Lr.makeScale(e,t,n),this.applyMatrix4(Lr),this}lookAt(e){return Rr.lookAt(e),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new Fr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Br.setFromBufferAttribute(n),this.morphTargetsRelative?(Hr.addVectors(this.boundingBox.min,Br.min),this.boundingBox.expandByPoint(Hr),Hr.addVectors(this.boundingBox.max,Br.max),this.boundingBox.expandByPoint(Hr)):(this.boundingBox.expandByPoint(Br.min),this.boundingBox.expandByPoint(Br.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingSphere.set(new J,1/0);return}if(e){let n=this.boundingSphere.center;if(Br.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Vr.setFromBufferAttribute(n),this.morphTargetsRelative?(Hr.addVectors(Br.min,Vr.min),Br.expandByPoint(Hr),Hr.addVectors(Br.max,Vr.max),Br.expandByPoint(Hr)):(Br.expandByPoint(Vr.min),Br.expandByPoint(Vr.max))}Br.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Hr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Hr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Hr.fromBufferAttribute(a,t),o&&(zr.fromBufferAttribute(e,t),Hr.add(zr)),r=Math.max(r,n.distanceToSquared(Hr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=e.array,r=t.position.array,i=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new Mr(new Float32Array(4*o),4));let s=this.getAttribute(`tangent`).array,c=[],l=[];for(let e=0;e<o;e++)c[e]=new J,l[e]=new J;let u=new J,d=new J,f=new J,p=new K,m=new K,h=new K,g=new J,_=new J;function v(e,t,n){u.fromArray(r,e*3),d.fromArray(r,t*3),f.fromArray(r,n*3),p.fromArray(a,e*2),m.fromArray(a,t*2),h.fromArray(a,n*2),d.sub(u),f.sub(u),m.sub(p),h.sub(p);let i=1/(m.x*h.y-h.x*m.y);isFinite(i)&&(g.copy(d).multiplyScalar(h.y).addScaledVector(f,-m.y).multiplyScalar(i),_.copy(f).multiplyScalar(m.x).addScaledVector(d,-h.x).multiplyScalar(i),c[e].add(g),c[t].add(g),c[n].add(g),l[e].add(_),l[t].add(_),l[n].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)v(n[e+0],n[e+1],n[e+2])}let b=new J,x=new J,S=new J,C=new J;function w(e){S.fromArray(i,e*3),C.copy(S);let t=c[e];b.copy(t),b.sub(S.multiplyScalar(S.dot(t))).normalize(),x.crossVectors(C,t);let n=x.dot(l[e])<0?-1:1;s[e*4]=b.x,s[e*4+1]=b.y,s[e*4+2]=b.z,s[e*4+3]=n}for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)w(n[e+0]),w(n[e+1]),w(n[e+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new Mr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new J,i=new J,a=new J,o=new J,s=new J,c=new J,l=new J,u=new J;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Hr.fromBufferAttribute(e,t),Hr.normalize(),e.setXYZ(t,Hr.x,Hr.y,Hr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Mr(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Wr=new Rn,Gr=new Ln,Kr=new kn,qr=new J,Jr=new J,Yr=new J,Xr=new J,Zr=new J,Qr=new J,$r=new K,ei=new K,ti=new K,ni=new J,ri=new J,ii=new J,ai=new J,oi=new J,si=class extends lr{constructor(e=new Ur,t=new kr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Qr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Zr.fromBufferAttribute(s,e),a?Qr.addScaledVector(Zr,r):Qr.addScaledVector(Zr.sub(t),r))}t.add(Qr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),Gr.copy(e.ray).recast(e.near),!(Kr.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(Kr,qr)===null||Gr.origin.distanceToSquared(qr)>(e.far-e.near)**2))&&(Wr.copy(i).invert(),Gr.copy(e.ray).applyMatrix4(Wr),!(n.boundingBox!==null&&Gr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=li(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=li(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=li(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=li(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function ci(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;oi.copy(s),oi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(oi);return l<n.near||l>n.far?null:{distance:l,point:oi.clone(),object:e}}function li(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Jr),e.getVertexPosition(c,Yr),e.getVertexPosition(l,Xr);let u=ci(e,t,n,r,Jr,Yr,Xr,ai);if(u){i&&($r.fromBufferAttribute(i,s),ei.fromBufferAttribute(i,c),ti.fromBufferAttribute(i,l),u.uv=xr.getInterpolation(ai,Jr,Yr,Xr,$r,ei,ti,new K)),a&&($r.fromBufferAttribute(a,s),ei.fromBufferAttribute(a,c),ti.fromBufferAttribute(a,l),u.uv1=xr.getInterpolation(ai,Jr,Yr,Xr,$r,ei,ti,new K),u.uv2=u.uv1),o&&(ni.fromBufferAttribute(o,s),ri.fromBufferAttribute(o,c),ii.fromBufferAttribute(o,l),u.normal=xr.getInterpolation(ai,Jr,Yr,Xr,ni,ri,ii,new J),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let e={a:s,b:c,c:l,normal:new J,materialIndex:0};xr.getNormal(Jr,Yr,Xr,e.normal),u.face=e}return u}var ui=class e extends Ur{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Fr(c,3)),this.setAttribute(`normal`,new Fr(l,3)),this.setAttribute(`uv`,new Fr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new J;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function di(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function fi(e){let t={};for(let n=0;n<e.length;n++){let r=di(e[n]);for(let e in r)t[e]=r[e]}return t}function pi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function mi(e){return e.getRenderTarget()===null?e.outputColorSpace:Kt.workingColorSpace}var hi={clone:di,merge:fi},gi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_i=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vi=class extends Or{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gi,this.fragmentShader=_i,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.uniformsGroups=pi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},yi=class extends lr{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Rn,this.projectionMatrix=new Rn,this.projectionMatrixInverse=new Rn,this.coordinateSystem=Ct}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bi=class extends yi{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Dt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Et*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dt*2*Math.atan(Math.tan(Et*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Et*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xi=-90,Si=1,Ci=class extends lr{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new bi(xi,Si,e,t);r.layers=this.layers,this.add(r);let i=new bi(xi,Si,e,t);i.layers=this.layers,this.add(i);let a=new bi(xi,Si,e,t);a.layers=this.layers,this.add(a);let o=new bi(xi,Si,e,t);o.layers=this.layers,this.add(o);let s=new bi(xi,Si,e,t);s.layers=this.layers,this.add(s);let c=new bi(xi,Si,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},wi=class extends tn{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ti=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Vt(`THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace.`),t.colorSpace=t.encoding===3001?pt:``),this.texture=new wi(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps===void 0?!1:t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?Ke:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ui(5,5,5),i=new vi({name:`CubemapFromEquirect`,uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new si(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Ke),new Ci(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Ei=new J,Di=new J,Oi=new q,ki=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ei.subVectors(n,t).cross(Di.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ei),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Oi.getNormalMatrix(e),r=this.coplanarPoint(Ei).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ai=new kn,ji=new J,Mi=class{constructor(e=new ki,t=new ki,n=new ki,r=new ki,i=new ki,a=new ki){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ct){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ji.x=r.normal.x>0?e.max.x:e.min.x,ji.y=r.normal.y>0?e.max.y:e.min.y,ji.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ji)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ni(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Pi(e,t){let n=t.isWebGL2,r=new WeakMap;function i(t,r){let i=t.array,a=t.usage,o=i.byteLength,s=e.createBuffer();e.bindBuffer(r,s),e.bufferData(r,i,a),t.onUploadCallback();let c;if(i instanceof Float32Array)c=e.FLOAT;else if(i instanceof Uint16Array)if(t.isFloat16BufferAttribute)if(n)c=e.HALF_FLOAT;else throw Error(`THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.`);else c=e.UNSIGNED_SHORT;else if(i instanceof Int16Array)c=e.SHORT;else if(i instanceof Uint32Array)c=e.UNSIGNED_INT;else if(i instanceof Int32Array)c=e.INT;else if(i instanceof Int8Array)c=e.BYTE;else if(i instanceof Uint8Array)c=e.UNSIGNED_BYTE;else if(i instanceof Uint8ClampedArray)c=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+i);return{buffer:s,type:c,bytesPerElement:i.BYTES_PER_ELEMENT,version:t.version,size:o}}function a(t,r,i){let a=r.array,o=r._updateRange,s=r.updateRanges;if(e.bindBuffer(i,t),o.count===-1&&s.length===0&&e.bufferSubData(i,0,a),s.length!==0){for(let t=0,r=s.length;t<r;t++){let r=s[t];n?e.bufferSubData(i,r.start*a.BYTES_PER_ELEMENT,a,r.start,r.count):e.bufferSubData(i,r.start*a.BYTES_PER_ELEMENT,a.subarray(r.start,r.start+r.count))}r.clearUpdateRanges()}o.count!==-1&&(n?e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a,o.offset,o.count):e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a.subarray(o.offset,o.offset+o.count)),o.count=-1),r.onUploadCallback()}function o(e){return e.isInterleavedBufferAttribute&&(e=e.data),r.get(e)}function s(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=r.get(t);n&&(e.deleteBuffer(n.buffer),r.delete(t))}function c(e,t){if(e.isGLBufferAttribute){let t=r.get(e);(!t||t.version<e.version)&&r.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}e.isInterleavedBufferAttribute&&(e=e.data);let n=r.get(e);if(n===void 0)r.set(e,i(e,t));else if(n.version<e.version){if(n.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);a(n.buffer,e,t),n.version=e.version}}return{get:o,remove:s,update:c}}var Fi=class e extends Ur{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Fr(p,3)),this.setAttribute(`normal`,new Fr(m,3)),this.setAttribute(`uv`,new Fr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},X={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Z={common:{diffuse:{value:new Y(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new q}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new q}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new q}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new q},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new q},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new q},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new q}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new q}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new q}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Y(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Y(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0},uvTransform:{value:new q}},sprite:{diffuse:{value:new Y(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}}},Ii={basic:{uniforms:fi([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:X.meshbasic_vert,fragmentShader:X.meshbasic_frag},lambert:{uniforms:fi([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new Y(0)}}]),vertexShader:X.meshlambert_vert,fragmentShader:X.meshlambert_frag},phong:{uniforms:fi([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new Y(0)},specular:{value:new Y(1118481)},shininess:{value:30}}]),vertexShader:X.meshphong_vert,fragmentShader:X.meshphong_frag},standard:{uniforms:fi([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new Y(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag},toon:{uniforms:fi([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new Y(0)}}]),vertexShader:X.meshtoon_vert,fragmentShader:X.meshtoon_frag},matcap:{uniforms:fi([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:X.meshmatcap_vert,fragmentShader:X.meshmatcap_frag},points:{uniforms:fi([Z.points,Z.fog]),vertexShader:X.points_vert,fragmentShader:X.points_frag},dashed:{uniforms:fi([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:X.linedashed_vert,fragmentShader:X.linedashed_frag},depth:{uniforms:fi([Z.common,Z.displacementmap]),vertexShader:X.depth_vert,fragmentShader:X.depth_frag},normal:{uniforms:fi([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:X.meshnormal_vert,fragmentShader:X.meshnormal_frag},sprite:{uniforms:fi([Z.sprite,Z.fog]),vertexShader:X.sprite_vert,fragmentShader:X.sprite_frag},background:{uniforms:{uvTransform:{value:new q},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:X.background_vert,fragmentShader:X.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:X.backgroundCube_vert,fragmentShader:X.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:X.cube_vert,fragmentShader:X.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:X.equirect_vert,fragmentShader:X.equirect_frag},distanceRGBA:{uniforms:fi([Z.common,Z.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:X.distanceRGBA_vert,fragmentShader:X.distanceRGBA_frag},shadow:{uniforms:fi([Z.lights,Z.fog,{color:{value:new Y(0)},opacity:{value:1}}]),vertexShader:X.shadow_vert,fragmentShader:X.shadow_frag}};Ii.physical={uniforms:fi([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new q},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new q},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new q},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new q},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new q},sheen:{value:0},sheenColor:{value:new Y(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new q},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new q},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new q},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new q},attenuationDistance:{value:0},attenuationColor:{value:new Y(0)},specularColor:{value:new Y(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new q},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new q},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new q}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag};var Li={r:0,b:0,g:0};function Ri(e,t,n,r,i,a,o){let s=new Y(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(a,m){let g=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?n:t).get(_)),_===null?h(s,c):_&&_.isColor&&(h(_,1),g=!0);let v=e.xr.getEnvironmentBlendMode();v===`additive`?r.buffers.color.setClear(0,0,0,1,o):v===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||g)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),_&&(_.isCubeTexture||_.mapping===306)?(u===void 0&&(u=new si(new ui(1,1,1),new vi({name:`BackgroundCubeMaterial`,uniforms:di(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=Kt.getTransfer(_.colorSpace)!==vt,(d!==_||f!==_.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,p=e.toneMapping),u.layers.enableAll(),a.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new si(new Fi(2,2),new vi({name:`BackgroundMaterial`,uniforms:di(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(_.colorSpace)!==vt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=_,f=_.version,p=e.toneMapping),l.layers.enableAll(),a.unshift(l,l.geometry,l.material,0,0,null))}function h(t,n){t.getRGB(Li,mi(e)),r.buffers.color.setClear(Li.r,Li.g,Li.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,h(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,h(s,c)},render:m}}function zi(e,t,n,r){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:t.get(`OES_vertex_array_object`),o=r.isWebGL2||a!==null,s={},c=g(null),l=c,u=!1;function d(t,r,i,a,s){let c=!1;if(o){let e=h(a,i,r);l!==e&&(l=e,p(l.object)),c=_(t,a,i,s),c&&v(t,a,i,s)}else{let e=r.wireframe===!0;(l.geometry!==a.id||l.program!==i.id||l.wireframe!==e)&&(l.geometry=a.id,l.program=i.id,l.wireframe=e,c=!0)}s!==null&&n.update(s,e.ELEMENT_ARRAY_BUFFER),(c||u)&&(u=!1,w(t,r,i,a),s!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(s).buffer))}function f(){return r.isWebGL2?e.createVertexArray():a.createVertexArrayOES()}function p(t){return r.isWebGL2?e.bindVertexArray(t):a.bindVertexArrayOES(t)}function m(t){return r.isWebGL2?e.deleteVertexArray(t):a.deleteVertexArrayOES(t)}function h(e,t,n){let r=n.wireframe===!0,i=s[e.id];i===void 0&&(i={},s[e.id]=i);let a=i[t.id];a===void 0&&(a={},i[t.id]=a);let o=a[r];return o===void 0&&(o=g(f()),a[r]=o),o}function g(e){let t=[],n=[],r=[];for(let e=0;e<i;e++)t[e]=0,n[e]=0,r[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:n,attributeDivisors:r,object:e,attributes:{},index:null}}function _(e,t,n,r){let i=l.attributes,a=t.attributes,o=0,s=n.getAttributes();for(let t in s)if(s[t].location>=0){let n=i[t],r=a[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;o++}return l.attributesNum!==o||l.index!==r}function v(e,t,n,r){let i={},a=t.attributes,o=0,s=n.getAttributes();for(let t in s)if(s[t].location>=0){let n=a[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,o++}l.attributes=i,l.attributesNum=o,l.index=r}function y(){let e=l.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function b(e){x(e,0)}function x(n,i){let a=l.newAttributes,o=l.enabledAttributes,s=l.attributeDivisors;a[n]=1,o[n]===0&&(e.enableVertexAttribArray(n),o[n]=1),s[n]!==i&&((r.isWebGL2?e:t.get(`ANGLE_instanced_arrays`))[r.isWebGL2?`vertexAttribDivisor`:`vertexAttribDivisorANGLE`](n,i),s[n]=i)}function S(){let t=l.newAttributes,n=l.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function C(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function w(i,a,o,s){if(r.isWebGL2===!1&&(i.isInstancedMesh||s.isInstancedBufferGeometry)&&t.get(`ANGLE_instanced_arrays`)===null)return;y();let c=s.attributes,l=o.getAttributes(),u=a.defaultAttributeValues;for(let t in l){let a=l[t];if(a.location>=0){let o=c[t];if(o===void 0&&(t===`instanceMatrix`&&i.instanceMatrix&&(o=i.instanceMatrix),t===`instanceColor`&&i.instanceColor&&(o=i.instanceColor)),o!==void 0){let t=o.normalized,c=o.itemSize,l=n.get(o);if(l===void 0)continue;let u=l.buffer,d=l.type,f=l.bytesPerElement,p=r.isWebGL2===!0&&(d===e.INT||d===e.UNSIGNED_INT||o.gpuType===1013);if(o.isInterleavedBufferAttribute){let n=o.data,r=n.stride,l=o.offset;if(n.isInstancedInterleavedBuffer){for(let e=0;e<a.locationSize;e++)x(a.location+e,n.meshPerAttribute);i.isInstancedMesh!==!0&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=n.meshPerAttribute*n.count)}else for(let e=0;e<a.locationSize;e++)b(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)C(a.location+e,c/a.locationSize,d,t,r*f,(l+c/a.locationSize*e)*f,p)}else{if(o.isInstancedBufferAttribute){for(let e=0;e<a.locationSize;e++)x(a.location+e,o.meshPerAttribute);i.isInstancedMesh!==!0&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=o.meshPerAttribute*o.count)}else for(let e=0;e<a.locationSize;e++)b(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)C(a.location+e,c/a.locationSize,d,t,c*f,c/a.locationSize*e*f,p)}}else if(u!==void 0){let n=u[t];if(n!==void 0)switch(n.length){case 2:e.vertexAttrib2fv(a.location,n);break;case 3:e.vertexAttrib3fv(a.location,n);break;case 4:e.vertexAttrib4fv(a.location,n);break;default:e.vertexAttrib1fv(a.location,n)}}}}S()}function T(){O();for(let e in s){let t=s[e];for(let e in t){let n=t[e];for(let e in n)m(n[e].object),delete n[e];delete t[e]}delete s[e]}}function E(e){if(s[e.id]===void 0)return;let t=s[e.id];for(let e in t){let n=t[e];for(let e in n)m(n[e].object),delete n[e];delete t[e]}delete s[e.id]}function D(e){for(let t in s){let n=s[t];if(n[e.id]===void 0)continue;let r=n[e.id];for(let e in r)m(r[e].object),delete r[e];delete n[e.id]}}function O(){k(),u=!0,l!==c&&(l=c,p(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:O,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:b,disableUnusedAttributes:S}}function Bi(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}function s(t,r){e.drawArrays(a,t,r),n.update(r,a,1)}function c(r,o,s){if(s===0)return;let c,l;if(i)c=e,l=`drawArraysInstanced`;else if(c=t.get(`ANGLE_instanced_arrays`),l=`drawArraysInstancedANGLE`,c===null){console.error(`THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}c[l](a,r,o,s),n.update(o,a,s)}function l(e,r,i){if(i===0)return;let o=t.get(`WEBGL_multi_draw`);if(o===null)for(let t=0;t<i;t++)this.render(e[t],r[t]);else{o.multiDrawArraysWEBGL(a,e,0,r,0,i);let t=0;for(let e=0;e<i;e++)t+=r[e];n.update(t,a,1)}}this.setMode=o,this.render=s,this.renderInstances=c,this.renderMultiDraw=l}function Vi(e,t,n){let r;function i(){if(r!==void 0)return r;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);r=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let o=typeof WebGL2RenderingContext<`u`&&e.constructor.name===`WebGL2RenderingContext`,s=n.precision===void 0?`highp`:n.precision,c=a(s);c!==s&&(console.warn(`THREE.WebGLRenderer:`,s,`not supported, using`,c,`instead.`),s=c);let l=o||t.has(`WEBGL_draw_buffers`),u=n.logarithmicDepthBuffer===!0,d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),f=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,b=o||t.has(`OES_texture_float`),x=y&&b,S=o?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:x,maxSamples:S}}function Hi(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ki,s=new q,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Ui(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304)if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}else{let a=r.image;if(a&&a.height>0){let o=new Ti(a.height/2);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}else return null}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Wi=class extends yi{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gi=4,Ki=[.125,.215,.35,.446,.526,.582],qi=20,Ji=new Wi,Yi=new Y,Xi=null,Zi=0,Qi=0,$i=(1+Math.sqrt(5))/2,ea=1/$i,ta=[new J(1,1,1),new J(-1,1,1),new J(1,1,-1),new J(-1,1,-1),new J(0,$i,ea),new J(0,$i,-ea),new J(ea,0,$i),new J(-ea,0,$i),new J($i,ea,0),new J(-$i,ea,0)],na=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Xi=this._renderer.getRenderTarget(),Zi=this._renderer.getActiveCubeFace(),Qi=this._renderer.getActiveMipmapLevel(),this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ca(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xi,Zi,Qi),e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xi=this._renderer.getRenderTarget(),Zi=this._renderer.getActiveCubeFace(),Qi=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Qe,format:et,colorSpace:mt,depthBuffer:!1},r=ia(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ia(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ra(r)),this._blurMaterial=oa(r,e,t)}return r}_compileMaterial(e){let t=new si(this._lodPlanes[0],e);this._renderer.compile(t,Ji)}_sceneToCubeUV(e,t,n,r){let i=new bi(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(Yi),s.toneMapping=0,s.autoClear=!1;let u=new kr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new si(new ui,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(Yi),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;aa(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ca()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sa());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new si(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;aa(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ji)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let t=1;t<this._lodPlanes.length;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),r=ta[(t-1)%ta.length];this._blur(e,t-1,t,n,r)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new si(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*qi-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):qi;m>qi&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);let h=[],g=0;for(let e=0;e<qi;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];aa(t,3*v*(r>_-Gi?r-_+Gi:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Ji)}};function ra(e){let t=[],n=[],r=[],i=e,a=e-Gi+1+Ki.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-Gi?s=Ki[o-e+Gi-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Ur;h.setAttribute(`position`,new Mr(f,3)),h.setAttribute(`uv`,new Mr(p,2)),h.setAttribute(`faceIndex`,new Mr(m,1)),t.push(h),i>Gi&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function ia(e,t,n){let r=new an(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function aa(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function oa(e,t,n){let r=new Float32Array(qi),i=new J(0,1,0);return new vi({name:`SphericalGaussianBlur`,defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function sa(){return new vi({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ca(){return new vi({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function la(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ua(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let i=t.get(r);return n===null&&(n=new na(e)),i=s?n.fromEquirectangular(r,i):n.fromCubemap(r,i),t.set(r,i),i.texture}else if(t.has(r))return t.get(r).texture;else{let o=r.image;if(s&&o&&o.height>0||c&&o&&i(o)){n===null&&(n=new na(e));let i=s?n.fromEquirectangular(r):n.fromCubemap(r);return t.set(r,i),r.addEventListener(`dispose`,a),i.texture}else return null}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function da(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(e){e.isWebGL2?(n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`)):(n(`WEBGL_depth_texture`),n(`OES_texture_float`),n(`OES_texture_half_float`),n(`OES_texture_half_float_linear`),n(`OES_standard_derivatives`),n(`OES_element_index_uint`),n(`OES_vertex_array_object`),n(`ANGLE_instanced_arrays`)),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`)},get:function(e){let t=n(e);return t===null&&console.warn(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function fa(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(Lt(n)?Pr:Nr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function pa(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}let s,c;function l(e){s=e.type,c=e.bytesPerElement}function u(t,r){e.drawElements(a,r,s,t*c),n.update(r,a,1)}function d(r,o,l){if(l===0)return;let u,d;if(i)u=e,d=`drawElementsInstanced`;else if(u=t.get(`ANGLE_instanced_arrays`),d=`drawElementsInstancedANGLE`,u===null){console.error(`THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}u[d](a,o,s,r*c,l),n.update(o,a,l)}function f(e,r,i){if(i===0)return;let o=t.get(`WEBGL_multi_draw`);if(o===null)for(let t=0;t<i;t++)this.render(e[t]/c,r[t]);else{o.multiDrawElementsWEBGL(a,r,0,s,e,0,i);let t=0;for(let e=0;e<i;e++)t+=r[e];n.update(t,a,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function ma(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ha(e,t){return e[0]-t[0]}function ga(e,t){return Math.abs(t[1])-Math.abs(e[1])}function _a(e,t,n){let r={},i=new Float32Array(8),a=new WeakMap,o=new nn,s=[];for(let e=0;e<8;e++)s[e]=[e,0];function c(c,l,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let r=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,i=r===void 0?0:r.length,s=a.get(l);if(s===void 0||s.count!==i){s!==void 0&&s.texture.dispose();let e=l.morphAttributes.position!==void 0,n=l.morphAttributes.normal!==void 0,r=l.morphAttributes.color!==void 0,c=l.morphAttributes.position||[],u=l.morphAttributes.normal||[],d=l.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),r===!0&&(f=3);let p=l.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*i),g=new on(h,p,m,i);g.type=Ze,g.needsUpdate=!0;let _=f*4;for(let t=0;t<i;t++){let i=c[t],a=u[t],s=d[t],l=p*m*4*t;for(let t=0;t<i.count;t++){let c=t*_;e===!0&&(o.fromBufferAttribute(i,t),h[l+c+0]=o.x,h[l+c+1]=o.y,h[l+c+2]=o.z,h[l+c+3]=0),n===!0&&(o.fromBufferAttribute(a,t),h[l+c+4]=o.x,h[l+c+5]=o.y,h[l+c+6]=o.z,h[l+c+7]=0),r===!0&&(o.fromBufferAttribute(s,t),h[l+c+8]=o.x,h[l+c+9]=o.y,h[l+c+10]=o.z,h[l+c+11]=s.itemSize===4?o.w:1)}}s={count:i,texture:g,size:new K(p,m)},a.set(l,s);function v(){g.dispose(),a.delete(l),l.removeEventListener(`dispose`,v)}l.addEventListener(`dispose`,v)}let c=0;for(let e=0;e<d.length;e++)c+=d[e];let f=l.morphTargetsRelative?1:1-c;u.getUniforms().setValue(e,`morphTargetBaseInfluence`,f),u.getUniforms().setValue(e,`morphTargetInfluences`,d),u.getUniforms().setValue(e,`morphTargetsTexture`,s.texture,n),u.getUniforms().setValue(e,`morphTargetsTextureSize`,s.size)}else{let t=d===void 0?0:d.length,n=r[l.id];if(n===void 0||n.length!==t){n=[];for(let e=0;e<t;e++)n[e]=[e,0];r[l.id]=n}for(let e=0;e<t;e++){let t=n[e];t[0]=e,t[1]=d[e]}n.sort(ga);for(let e=0;e<8;e++)e<t&&n[e][1]?(s[e][0]=n[e][0],s[e][1]=n[e][1]):(s[e][0]=2**53-1,s[e][1]=0);s.sort(ha);let a=l.morphAttributes.position,o=l.morphAttributes.normal,c=0;for(let e=0;e<8;e++){let t=s[e],n=t[0],r=t[1];n!==2**53-1&&r?(a&&l.getAttribute(`morphTarget`+e)!==a[n]&&l.setAttribute(`morphTarget`+e,a[n]),o&&l.getAttribute(`morphNormal`+e)!==o[n]&&l.setAttribute(`morphNormal`+e,o[n]),i[e]=r,c+=r):(a&&l.hasAttribute(`morphTarget`+e)===!0&&l.deleteAttribute(`morphTarget`+e),o&&l.hasAttribute(`morphNormal`+e)===!0&&l.deleteAttribute(`morphNormal`+e),i[e]=0)}let f=l.morphTargetsRelative?1:1-c;u.getUniforms().setValue(e,`morphTargetBaseInfluence`,f),u.getUniforms().setValue(e,`morphTargetInfluences`,i)}}return{update:c}}function va(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var ya=class extends tn{constructor(e,t,n,r,i,a,o,s,c,l){if(l=l===void 0?tt:l,l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&l===1026&&(n=Xe),n===void 0&&l===1027&&(n=$e),super(null,r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o===void 0?Ue:o,this.minFilter=s===void 0?Ue:s,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ba=new tn,xa=new ya(1,1);xa.compareFunction=515;var Sa=new on,Ca=new sn,wa=new wi,Ta=[],Ea=[],Da=new Float32Array(16),Oa=new Float32Array(9),ka=new Float32Array(4);function Aa(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ta[i];if(a===void 0&&(a=new Float32Array(i),Ta[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ja(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ma(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Na(e,t){let n=Ea[t];n===void 0&&(n=new Int32Array(t),Ea[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Pa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Fa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ja(n,t))return;e.uniform2fv(this.addr,t),Ma(n,t)}}function Ia(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ja(n,t))return;e.uniform3fv(this.addr,t),Ma(n,t)}}function La(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ja(n,t))return;e.uniform4fv(this.addr,t),Ma(n,t)}}function Ra(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ja(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ma(n,t)}else{if(ja(n,r))return;ka.set(r),e.uniformMatrix2fv(this.addr,!1,ka),Ma(n,r)}}function za(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ja(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ma(n,t)}else{if(ja(n,r))return;Oa.set(r),e.uniformMatrix3fv(this.addr,!1,Oa),Ma(n,r)}}function Ba(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ja(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ma(n,t)}else{if(ja(n,r))return;Da.set(r),e.uniformMatrix4fv(this.addr,!1,Da),Ma(n,r)}}function Va(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ha(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ja(n,t))return;e.uniform2iv(this.addr,t),Ma(n,t)}}function Ua(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ja(n,t))return;e.uniform3iv(this.addr,t),Ma(n,t)}}function Wa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ja(n,t))return;e.uniform4iv(this.addr,t),Ma(n,t)}}function Ga(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ka(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ja(n,t))return;e.uniform2uiv(this.addr,t),Ma(n,t)}}function qa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ja(n,t))return;e.uniform3uiv(this.addr,t),Ma(n,t)}}function Ja(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ja(n,t))return;e.uniform4uiv(this.addr,t),Ma(n,t)}}function Ya(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a=this.type===e.SAMPLER_2D_SHADOW?xa:ba;n.setTexture2D(t||a,i)}function Xa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ca,i)}function Za(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||wa,i)}function Qa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Sa,i)}function $a(e){switch(e){case 5126:return Pa;case 35664:return Fa;case 35665:return Ia;case 35666:return La;case 35674:return Ra;case 35675:return za;case 35676:return Ba;case 5124:case 35670:return Va;case 35667:case 35671:return Ha;case 35668:case 35672:return Ua;case 35669:case 35673:return Wa;case 5125:return Ga;case 36294:return Ka;case 36295:return qa;case 36296:return Ja;case 35678:case 36198:case 36298:case 36306:case 35682:return Ya;case 35679:case 36299:case 36307:return Xa;case 35680:case 36300:case 36308:case 36293:return Za;case 36289:case 36303:case 36311:case 36292:return Qa}}function eo(e,t){e.uniform1fv(this.addr,t)}function to(e,t){let n=Aa(t,this.size,2);e.uniform2fv(this.addr,n)}function no(e,t){let n=Aa(t,this.size,3);e.uniform3fv(this.addr,n)}function ro(e,t){let n=Aa(t,this.size,4);e.uniform4fv(this.addr,n)}function io(e,t){let n=Aa(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ao(e,t){let n=Aa(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function oo(e,t){let n=Aa(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function so(e,t){e.uniform1iv(this.addr,t)}function co(e,t){e.uniform2iv(this.addr,t)}function lo(e,t){e.uniform3iv(this.addr,t)}function uo(e,t){e.uniform4iv(this.addr,t)}function fo(e,t){e.uniform1uiv(this.addr,t)}function po(e,t){e.uniform2uiv(this.addr,t)}function mo(e,t){e.uniform3uiv(this.addr,t)}function ho(e,t){e.uniform4uiv(this.addr,t)}function go(e,t,n){let r=this.cache,i=t.length,a=Na(n,i);ja(r,a)||(e.uniform1iv(this.addr,a),Ma(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||ba,a[e])}function _o(e,t,n){let r=this.cache,i=t.length,a=Na(n,i);ja(r,a)||(e.uniform1iv(this.addr,a),Ma(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ca,a[e])}function vo(e,t,n){let r=this.cache,i=t.length,a=Na(n,i);ja(r,a)||(e.uniform1iv(this.addr,a),Ma(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||wa,a[e])}function yo(e,t,n){let r=this.cache,i=t.length,a=Na(n,i);ja(r,a)||(e.uniform1iv(this.addr,a),Ma(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Sa,a[e])}function bo(e){switch(e){case 5126:return eo;case 35664:return to;case 35665:return no;case 35666:return ro;case 35674:return io;case 35675:return ao;case 35676:return oo;case 5124:case 35670:return so;case 35667:case 35671:return co;case 35668:case 35672:return lo;case 35669:case 35673:return uo;case 5125:return fo;case 36294:return po;case 36295:return mo;case 36296:return ho;case 35678:case 36198:case 36298:case 36306:case 35682:return go;case 35679:case 36299:case 36307:return _o;case 35680:case 36300:case 36308:case 36293:return vo;case 36289:case 36303:case 36311:case 36292:return yo}}var xo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$a(t.type)}},So=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bo(t.type)}},Co=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},wo=/(\w+)(\])?(\[|\.)?/g;function To(e,t){e.seq.push(t),e.map[t.id]=t}function Eo(e,t,n){let r=e.name,i=r.length;for(wo.lastIndex=0;;){let a=wo.exec(r),o=wo.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){To(n,l===void 0?new xo(s,e,t):new So(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new Co(s),To(n,e)),n=e}}}var Do=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Eo(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Oo(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var ko=37297,Ao=0;function jo(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function Mo(e){let t=Kt.getPrimaries(Kt.workingColorSpace),n=Kt.getPrimaries(e),r;switch(t===n?r=``:t===`p3`&&n===`rec709`?r=`LinearDisplayP3ToLinearSRGB`:t===`rec709`&&n===`p3`&&(r=`LinearSRGBToLinearDisplayP3`),e){case mt:case gt:return[r,`LinearTransferOETF`];case pt:case ht:return[r,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space:`,e),[r,`LinearTransferOETF`]}}function No(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+jo(e.getShaderSource(t),r)}else return i}function Po(e,t){let n=Mo(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Fo(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`OptimizedCineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}function Io(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID===`physical`?`#extension GL_OES_standard_derivatives : enable`:``,(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?`#extension GL_EXT_frag_depth : enable`:``,e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?`#extension GL_EXT_draw_buffers : require`:``,(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?`#extension GL_EXT_shader_texture_lod : enable`:``].filter(Bo).join(`
`)}function Lo(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``].filter(Bo).join(`
`)}function Ro(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function zo(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Bo(e){return e!==``}function Vo(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ho(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Uo=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(e){return e.replace(Uo,Ko)}var Go=new Map([[`encodings_fragment`,`colorspace_fragment`],[`encodings_pars_fragment`,`colorspace_pars_fragment`],[`output_fragment`,`opaque_fragment`]]);function Ko(e,t){let n=X[t];if(n===void 0){let e=Go.get(t);if(e!==void 0)n=X[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Wo(n)}var qo=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jo(e){return e.replace(qo,Yo)}function Yo(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Xo(e){let t=`precision `+e.precision+` float;
precision `+e.precision+` int;`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function Zo(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Qo(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`;break}return t}function $o(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`;break}return t}function es(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`;break}return t}function ts(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function ns(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Zo(n),l=Qo(n),u=$o(n),d=es(n),f=ts(n),p=n.isWebGL2?``:Io(n),m=Lo(n),h=Ro(a),g=i.createProgram(),_,v,y=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Bo).join(`
`),_.length>0&&(_+=`
`),v=[p,`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Bo).join(`
`),v.length>0&&(v+=`
`)):(_=[Xo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors&&n.isWebGL2?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_TEXTURE`:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.useLegacyLights?`#define LEGACY_LIGHTS`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )`,`	attribute vec3 morphTarget0;`,`	attribute vec3 morphTarget1;`,`	attribute vec3 morphTarget2;`,`	attribute vec3 morphTarget3;`,`	#ifdef USE_MORPHNORMALS`,`		attribute vec3 morphNormal0;`,`		attribute vec3 morphNormal1;`,`		attribute vec3 morphNormal2;`,`		attribute vec3 morphNormal3;`,`	#else`,`		attribute vec3 morphTarget4;`,`		attribute vec3 morphTarget5;`,`		attribute vec3 morphTarget6;`,`		attribute vec3 morphTarget7;`,`	#endif`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Bo).join(`
`),v=[p,Xo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.useLegacyLights?`#define LEGACY_LIGHTS`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:X.tonemapping_pars_fragment,n.toneMapping===0?``:Fo(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,X.colorspace_pars_fragment,Po(`linearToOutputTexel`,n.outputColorSpace),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Bo).join(`
`)),o=Wo(o),o=Vo(o,n),o=Ho(o,n),s=Wo(s),s=Vo(s,n),s=Ho(s,n),o=Jo(o),s=Jo(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[m,`precision mediump sampler2DArray;`,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+_,v=[`precision mediump sampler2DArray;`,`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+v);let b=y+_+o,x=y+v+s,S=Oo(i,i.VERTEX_SHADER,b),C=Oo(i,i.FRAGMENT_SHADER,x);i.attachShader(g,S),i.attachShader(g,C),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(g,0,`position`):i.bindAttribLocation(g,0,n.index0AttributeName),i.linkProgram(g);function w(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(g).trim(),r=i.getShaderInfoLog(S).trim(),a=i.getShaderInfoLog(C).trim(),o=!0,s=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,g,S,C);else{let e=No(i,S,`vertex`),t=No(i,C,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+n+`
`+e+`
`+t)}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:_},fragmentShader:{log:a,prefix:v}})}i.deleteShader(S),i.deleteShader(C),T=new Do(i,g),E=zo(i,g)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(g,ko)),D},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ao++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}var rs=0,is=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new as(e),t.set(e,n)),n}},as=class{constructor(e){this.id=rs++,this.code=e,this.usedTimes=0}};function os(e,t,n,r,i,a,o){let s=new Yn,c=new is,l=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return e===0?`uv`:`uv${e}`}function g(a,s,l,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Ii[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),A=c.getFragmentShaderID(a);let j=e.getRenderTarget(),M=_.isInstancedMesh===!0,N=_.isBatchedMesh===!0,P=!!a.map,ee=!!a.matcap,te=!!x,F=!!a.aoMap,ne=!!a.lightMap,I=!!a.bumpMap,re=!!a.normalMap,ie=!!a.displacementMap,L=!!a.emissiveMap,ae=!!a.metalnessMap,oe=!!a.roughnessMap,se=a.anisotropy>0,ce=a.clearcoat>0,R=a.iridescence>0,le=a.sheen>0,ue=a.transmission>0,z=se&&!!a.anisotropyMap,B=ce&&!!a.clearcoatMap,de=ce&&!!a.clearcoatNormalMap,fe=ce&&!!a.clearcoatRoughnessMap,pe=R&&!!a.iridescenceMap,me=R&&!!a.iridescenceThicknessMap,he=le&&!!a.sheenColorMap,V=le&&!!a.sheenRoughnessMap,H=!!a.specularMap,U=!!a.specularColorMap,W=!!a.specularIntensityMap,ge=ue&&!!a.transmissionMap,_e=ue&&!!a.thicknessMap,ve=!!a.gradientMap,ye=!!a.alphaMap,G=a.alphaTest>0,be=!!a.alphaHash,xe=!!a.extensions,Se=!!y.attributes.uv1,Ce=!!y.attributes.uv2,we=!!y.attributes.uv3,Te=0;return a.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Te=e.toneMapping),{isWebGL2:u,shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:N,instancing:M,instancingColor:M&&_.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:mt,map:P,matcap:ee,envMap:te,envMapMode:te&&x.mapping,envMapCubeUVHeight:S,aoMap:F,lightMap:ne,bumpMap:I,normalMap:re,displacementMap:f&&ie,emissiveMap:L,normalMapObjectSpace:re&&a.normalMapType===1,normalMapTangentSpace:re&&a.normalMapType===0,metalnessMap:ae,roughnessMap:oe,anisotropy:se,anisotropyMap:z,clearcoat:ce,clearcoatMap:B,clearcoatNormalMap:de,clearcoatRoughnessMap:fe,iridescence:R,iridescenceMap:pe,iridescenceThicknessMap:me,sheen:le,sheenColorMap:he,sheenRoughnessMap:V,specularMap:H,specularColorMap:U,specularIntensityMap:W,transmission:ue,transmissionMap:ge,thicknessMap:_e,gradientMap:ve,opaque:a.transparent===!1&&a.blending===1,alphaMap:ye,alphaTest:G,alphaHash:be,combine:a.combine,mapUv:P&&h(a.map.channel),aoMapUv:F&&h(a.aoMap.channel),lightMapUv:ne&&h(a.lightMap.channel),bumpMapUv:I&&h(a.bumpMap.channel),normalMapUv:re&&h(a.normalMap.channel),displacementMapUv:ie&&h(a.displacementMap.channel),emissiveMapUv:L&&h(a.emissiveMap.channel),metalnessMapUv:ae&&h(a.metalnessMap.channel),roughnessMapUv:oe&&h(a.roughnessMap.channel),anisotropyMapUv:z&&h(a.anisotropyMap.channel),clearcoatMapUv:B&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:de&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:me&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:he&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:V&&h(a.sheenRoughnessMap.channel),specularMapUv:H&&h(a.specularMap.channel),specularColorMapUv:U&&h(a.specularColorMap.channel),specularIntensityMapUv:W&&h(a.specularIntensityMap.channel),transmissionMapUv:ge&&h(a.transmissionMap.channel),thicknessMapUv:_e&&h(a.thicknessMap.channel),alphaMapUv:ye&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(re||se),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,vertexUv1s:Se,vertexUv2s:Ce,vertexUv3s:we,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(P||ye),fog:!!v,useFog:a.fog===!0,fogExp2:v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Te,useLegacyLights:e._useLegacyLights,decodeVideoTexture:P&&a.map.isVideoTexture===!0&&Kt.getTransfer(a.map.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionDerivatives:xe&&a.extensions.derivatives===!0,extensionFragDepth:xe&&a.extensions.fragDepth===!0,extensionDrawBuffers:xe&&a.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&a.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&a.extensions.clipCullDistance&&r.has(`WEBGL_clip_cull_distance`),rendererExtensionFragDepth:u||r.has(`EXT_frag_depth`),rendererExtensionDrawBuffers:u||r.has(`WEBGL_draw_buffers`),rendererExtensionShaderTextureLod:u||r.has(`EXT_shader_texture_lod`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()}}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.isWebGL2&&s.enable(0),t.supportsVertexTextures&&s.enable(1),t.instancing&&s.enable(2),t.instancingColor&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.skinning&&s.enable(4),t.morphTargets&&s.enable(5),t.morphNormals&&s.enable(6),t.morphColors&&s.enable(7),t.premultipliedAlpha&&s.enable(8),t.shadowMapEnabled&&s.enable(9),t.useLegacyLights&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=Ii[t];n=hi.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new ns(e,n,t,a),l.push(r)),r}function S(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:w}}function ss(){let e=new WeakMap;function t(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function n(t){e.delete(t)}function r(t,n,r){e.get(t)[n]=r}function i(){e=new WeakMap}return{get:t,remove:n,update:r,dispose:i}}function cs(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ls(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function us(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||cs),r.length>1&&r.sort(t||ls),i.length>1&&i.sort(t||ls)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function ds(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new us,e.set(t,[i])):n>=r.length?(i=new us,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function fs(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new J,color:new Y};break;case`SpotLight`:n={position:new J,direction:new J,color:new Y,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new J,color:new Y,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new J,skyColor:new Y,groundColor:new Y};break;case`RectAreaLight`:n={color:new Y,position:new J,halfWidth:new J,halfHeight:new J};break}return e[t.id]=n,n}}}function ps(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`SpotLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`PointLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var ms=0;function hs(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function gs(e,t){let n=new fs,r=ps(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)i.probe.push(new J);let a=new J,o=new Rn,s=new Rn;function c(a,o){let s=0,c=0,l=0;for(let e=0;e<9;e++)i.probe[e].set(0,0,0);let u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0;a.sort(hs);let x=o===!0?Math.PI:1;for(let e=0,t=a.length;e<t;e++){let t=a[e],o=t.color,S=t.intensity,C=t.distance,w=t.shadow&&t.shadow.map?t.shadow.map.texture:null;if(t.isAmbientLight)s+=o.r*S*x,c+=o.g*S*x,l+=o.b*S*x;else if(t.isLightProbe){for(let e=0;e<9;e++)i.probe[e].addScaledVector(t.sh.coefficients[e],S);b++}else if(t.isDirectionalLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*x),t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,i.directionalShadow[u]=n,i.directionalShadowMap[u]=w,i.directionalShadowMatrix[u]=t.shadow.matrix,h++}i.directional[u]=e,u++}else if(t.isSpotLight){let e=n.get(t);e.position.setFromMatrixPosition(t.matrixWorld),e.color.copy(o).multiplyScalar(S*x),e.distance=C,e.coneCos=Math.cos(t.angle),e.penumbraCos=Math.cos(t.angle*(1-t.penumbra)),e.decay=t.decay,i.spot[f]=e;let a=t.shadow;if(t.map&&(i.spotLightMap[v]=t.map,v++,a.updateMatrices(t),t.castShadow&&y++),i.spotLightMatrix[f]=a.matrix,t.castShadow){let e=r.get(t);e.shadowBias=a.bias,e.shadowNormalBias=a.normalBias,e.shadowRadius=a.radius,e.shadowMapSize=a.mapSize,i.spotShadow[f]=e,i.spotShadowMap[f]=w,_++}f++}else if(t.isRectAreaLight){let e=n.get(t);e.color.copy(o).multiplyScalar(S),e.halfWidth.set(t.width*.5,0,0),e.halfHeight.set(0,t.height*.5,0),i.rectArea[p]=e,p++}else if(t.isPointLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*x),e.distance=t.distance,e.decay=t.decay,t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,n.shadowCameraNear=e.camera.near,n.shadowCameraFar=e.camera.far,i.pointShadow[d]=n,i.pointShadowMap[d]=w,i.pointShadowMatrix[d]=t.shadow.matrix,g++}i.point[d]=e,d++}else if(t.isHemisphereLight){let e=n.get(t);e.skyColor.copy(t.color).multiplyScalar(S*x),e.groundColor.copy(t.groundColor).multiplyScalar(S*x),i.hemi[m]=e,m++}}p>0&&(t.isWebGL2?e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=Z.LTC_FLOAT_1,i.rectAreaLTC2=Z.LTC_FLOAT_2):(i.rectAreaLTC1=Z.LTC_HALF_1,i.rectAreaLTC2=Z.LTC_HALF_2):e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=Z.LTC_FLOAT_1,i.rectAreaLTC2=Z.LTC_FLOAT_2):e.has(`OES_texture_half_float_linear`)===!0?(i.rectAreaLTC1=Z.LTC_HALF_1,i.rectAreaLTC2=Z.LTC_HALF_2):console.error(`THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.`)),i.ambient[0]=s,i.ambient[1]=c,i.ambient[2]=l;let S=i.hash;(S.directionalLength!==u||S.pointLength!==d||S.spotLength!==f||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==h||S.numPointShadows!==g||S.numSpotShadows!==_||S.numSpotMaps!==v||S.numLightProbes!==b)&&(i.directional.length=u,i.spot.length=f,i.rectArea.length=p,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=h,i.directionalShadowMap.length=h,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=h,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=_+v-y,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=b,S.directionalLength=u,S.pointLength=d,S.spotLength=f,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=h,S.numPointShadows=g,S.numSpotShadows=_,S.numSpotMaps=v,S.numLightProbes=b,i.version=ms++)}function l(e,t){let n=0,r=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=i.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=i.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=i.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s.identity(),o.copy(f.matrixWorld),o.premultiply(d),s.extractRotation(o),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(s),e.halfHeight.applyMatrix4(s),l++}else if(f.isPointLight){let e=i.point[r];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),r++}else if(f.isHemisphereLight){let e=i.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:c,setupView:l,state:i}}function _s(e,t){let n=new gs(e,t),r=[],i=[];function a(){r.length=0,i.length=0}function o(e){r.push(e)}function s(e){i.push(e)}function c(e){n.setup(r,e)}function l(e){n.setupView(r,e)}return{init:a,state:{lightsArray:r,shadowsArray:i,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function vs(e,t){let n=new WeakMap;function r(r,i=0){let a=n.get(r),o;return a===void 0?(o=new _s(e,t),n.set(r,[o])):i>=a.length?(o=new _s(e,t),a.push(o)):o=a[i],o}function i(){n=new WeakMap}return{get:r,dispose:i}}var ys=class extends Or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=dt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bs=class extends Or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},xs=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ss=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Cs(e,t,n){let r=new Mi,i=new K,a=new K,o=new nn,s=new ys({depthPacking:ft}),c=new bs,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:xs,fragmentShader:Ss}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ur;m.setAttribute(`position`,new Mr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new si(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==3&&this.type===3,m=_===3&&this.type!==3;for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){console.warn(`THREE.WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();if(i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y)),d.map===null||p===!0||m===!0){let e=this.type===3?{}:{minFilter:Ue,magFilter:Ue};d.map!==null&&d.map.dispose(),d.map=new an(i.x,i.y,e),d.map.texture.name=l.name+`.shadowMap`,d.camera.updateProjectionMatrix()}e.setRenderTarget(d.map),e.clear();let g=d.getViewportCount();for(let e=0;e<g;e++){let t=d.getViewport(e);o.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),f.viewport(o),d.updateMatrices(l,e),r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new an(i.x,i.y)),f.uniforms.shadow_pass.value=n.map.texture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function ws(e,t,n){let r=n.isWebGL2;function i(){let t=!1,n=new nn,r=null,i=new nn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function a(){let t=!1,n=null,r=null,i=null;return{setTest:function(t){t?se(e.DEPTH_TEST):ce(e.DEPTH_TEST)},setMask:function(r){n!==r&&!t&&(e.depthMask(r),n=r)},setFunc:function(t){if(r!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}r=t}},setLocked:function(e){t=e},setClear:function(t){i!==t&&(e.clearDepth(t),i=t)},reset:function(){t=!1,n=null,r=null,i=null}}}function o(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?se(e.STENCIL_TEST):ce(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let s=new i,c=new a,l=new o,u=new WeakMap,d=new WeakMap,f={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new Y(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,M=null,N=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,ee=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),P=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(te)[1]),P=ee>=1);let F=null,ne={},I=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new nn().fromArray(I),L=new nn().fromArray(re);function ae(t,n,i,a){let o=new Uint8Array(4),s=e.createTexture();e.bindTexture(t,s),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let s=0;s<i;s++)r&&(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)?e.texImage3D(n,0,e.RGBA,1,1,a,0,e.RGBA,e.UNSIGNED_BYTE,o):e.texImage2D(n+s,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,o);return s}let oe={};oe[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),oe[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(oe[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),oe[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),se(e.DEPTH_TEST),c.setFunc(3),pe(!1),me(1),se(e.CULL_FACE),de(0);function se(t){f[t]!==!0&&(e.enable(t),f[t]=!0)}function ce(t){f[t]!==!1&&(e.disable(t),f[t]=!1)}function R(t,n){return p[t]===n?!1:(e.bindFramebuffer(t,n),p[t]=n,r&&(t===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=n)),!0)}function le(r,i){let a=h,o=!1;if(r)if(a=m.get(i),a===void 0&&(a=[],m.set(i,a)),r.isWebGLMultipleRenderTargets){let t=r.texture;if(a.length!==t.length||a[0]!==e.COLOR_ATTACHMENT0){for(let n=0,r=t.length;n<r;n++)a[n]=e.COLOR_ATTACHMENT0+n;a.length=t.length,o=!0}}else a[0]!==e.COLOR_ATTACHMENT0&&(a[0]=e.COLOR_ATTACHMENT0,o=!0);else a[0]!==e.BACK&&(a[0]=e.BACK,o=!0);o&&(n.isWebGL2?e.drawBuffers(a):t.get(`WEBGL_draw_buffers`).drawBuffersWEBGL(a))}function ue(t){return g===t?!1:(e.useProgram(t),g=t,!0)}let z={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};if(r)z[103]=e.MIN,z[104]=e.MAX;else{let e=t.get(`EXT_blend_minmax`);e!==null&&(z[103]=e.MIN_EXT,z[104]=e.MAX_EXT)}let B={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function de(t,n,r,i,a,o,s,c,l,u){if(t===0){_===!0&&(ce(e.BLEND),_=!1);return}if(_===!1&&(se(e.BLEND),_=!0),t!==5){if(t!==v||u!==D){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t);break}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,v=t,D=u}return}a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(z[n],z[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(B[r],B[i],B[o],B[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),v=t,D=!1}function fe(t,n){t.side===2?ce(e.CULL_FACE):se(e.CULL_FACE);let r=t.side===1;n&&(r=!r),pe(r),t.blending===1&&t.transparent===!1?de(0):de(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),c.setFunc(t.depthFunc),c.setTest(t.depthTest),c.setMask(t.depthWrite),s.setMask(t.colorWrite);let i=t.stencilWrite;l.setTest(i),i&&(l.setMask(t.stencilWriteMask),l.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),l.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),V(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?se(e.SAMPLE_ALPHA_TO_COVERAGE):ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function pe(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function me(t){t===0?ce(e.CULL_FACE):(se(e.CULL_FACE),t!==k&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),k=t}function he(t){t!==A&&(P&&e.lineWidth(t),A=t)}function V(t,n,r){t?(se(e.POLYGON_OFFSET_FILL),(j!==n||M!==r)&&(e.polygonOffset(n,r),j=n,M=r)):ce(e.POLYGON_OFFSET_FILL)}function H(t){t?se(e.SCISSOR_TEST):ce(e.SCISSOR_TEST)}function U(t){t===void 0&&(t=e.TEXTURE0+N-1),F!==t&&(e.activeTexture(t),F=t)}function W(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+N-1:F);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||oe[t]),i.type=t,i.texture=n)}function ge(){let t=ne[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function _e(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ve(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ye(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function G(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function be(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function xe(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function De(t){L.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),L.copy(t))}function Oe(t,n){let r=d.get(n);r===void 0&&(r=new WeakMap,d.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function ke(t,n){let r=d.get(n).get(t);u.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),u.set(n,r))}function Ae(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),r===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},F=null,ne={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new Y(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,M=null,ie.set(0,0,e.canvas.width,e.canvas.height),L.set(0,0,e.canvas.width,e.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:se,disable:ce,bindFramebuffer:R,drawBuffers:le,useProgram:ue,setBlending:de,setMaterial:fe,setFlipSided:pe,setCullFace:me,setLineWidth:he,setPolygonOffset:V,setScissorTest:H,activeTexture:U,bindTexture:W,unbindTexture:ge,compressedTexImage2D:_e,compressedTexImage3D:ve,texImage2D:we,texImage3D:Te,updateUBOMapping:Oe,uniformBlockBinding:ke,texStorage2D:Se,texStorage3D:Ce,texSubImage2D:ye,texSubImage3D:G,compressedTexSubImage2D:be,compressedTexSubImage3D:xe,scissor:Ee,viewport:De,reset:Ae}}function Ts(e,t,n,r,i,a,o){let s=i.isWebGL2,c=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function m(e,t){return p?new OffscreenCanvas(e,t):Rt(`canvas`)}function h(e,t,n,r){let i=1;if((e.width>r||e.height>r)&&(i=r/Math.max(e.width,e.height)),i<1||t===!0)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let r=t?Nt:Math.floor,a=r(i*e.width),o=r(i*e.height);d===void 0&&(d=m(a,o));let s=n?m(a,o):d;return s.width=a,s.height=o,s.getContext(`2d`).drawImage(e,0,0,a,o),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+e.width+`x`+e.height+`) to (`+a+`x`+o+`).`),s}else return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+e.width+`x`+e.height+`).`),e;return e}function g(e){return Mt(e.width)&&Mt(e.height)}function _(e){return s?!1:e.wrapS!==1001||e.wrapT!==1001||e.minFilter!==1003&&e.minFilter!==1006}function v(e,t){return e.generateMipmaps&&t&&e.minFilter!==1003&&e.minFilter!==1006}function y(t){e.generateMipmap(t)}function b(n,r,i,a,o=!1){if(s===!1)return r;if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c=r;if(r===e.RED&&(i===e.FLOAT&&(c=e.R32F),i===e.HALF_FLOAT&&(c=e.R16F),i===e.UNSIGNED_BYTE&&(c=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(c=e.R8UI),i===e.UNSIGNED_SHORT&&(c=e.R16UI),i===e.UNSIGNED_INT&&(c=e.R32UI),i===e.BYTE&&(c=e.R8I),i===e.SHORT&&(c=e.R16I),i===e.INT&&(c=e.R32I)),r===e.RG&&(i===e.FLOAT&&(c=e.RG32F),i===e.HALF_FLOAT&&(c=e.RG16F),i===e.UNSIGNED_BYTE&&(c=e.RG8)),r===e.RGBA){let t=o?_t:Kt.getTransfer(a);i===e.FLOAT&&(c=e.RGBA32F),i===e.HALF_FLOAT&&(c=e.RGBA16F),i===e.UNSIGNED_BYTE&&(c=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return(c===e.R16F||c===e.R32F||c===e.RG16F||c===e.RG32F||c===e.RGBA16F||c===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),c}function x(e,t,n){return v(e,n)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function S(t){return t===1003||t===1004||t===1005?e.NEAREST:e.LINEAR}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=f.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&f.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=f.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=t.texture,i=r.get(t),a=r.get(n);if(a.__webglTexture!==void 0&&(e.deleteTexture(a.__webglTexture),o.memory.textures--),t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(i.__webglFramebuffer[t]))for(let n=0;n<i.__webglFramebuffer[t].length;n++)e.deleteFramebuffer(i.__webglFramebuffer[t][n]);else e.deleteFramebuffer(i.__webglFramebuffer[t]);i.__webglDepthbuffer&&e.deleteRenderbuffer(i.__webglDepthbuffer[t])}else{if(Array.isArray(i.__webglFramebuffer))for(let t=0;t<i.__webglFramebuffer.length;t++)e.deleteFramebuffer(i.__webglFramebuffer[t]);else e.deleteFramebuffer(i.__webglFramebuffer);if(i.__webglDepthbuffer&&e.deleteRenderbuffer(i.__webglDepthbuffer),i.__webglMultisampledFramebuffer&&e.deleteFramebuffer(i.__webglMultisampledFramebuffer),i.__webglColorRenderbuffer)for(let t=0;t<i.__webglColorRenderbuffer.length;t++)i.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(i.__webglColorRenderbuffer[t]);i.__webglDepthRenderbuffer&&e.deleteRenderbuffer(i.__webglDepthRenderbuffer)}if(t.isWebGLMultipleRenderTargets)for(let t=0,i=n.length;t<i;t++){let i=r.get(n[t]);i.__webglTexture&&(e.deleteTexture(i.__webglTexture),o.memory.textures--),r.remove(n[t])}r.remove(n),r.remove(t)}let O=0;function k(){O=0}function A(){let e=O;return e>=i.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function j(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(t,i){let a=r.get(t);if(t.isVideoTexture&&fe(t),t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{ie(a,t,i);return}}n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function N(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){ie(a,t,i);return}n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function P(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){ie(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ee(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){L(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let te={[Be]:e.REPEAT,[Ve]:e.CLAMP_TO_EDGE,[He]:e.MIRRORED_REPEAT},F={[Ue]:e.NEAREST,[We]:e.NEAREST_MIPMAP_NEAREST,[Ge]:e.NEAREST_MIPMAP_LINEAR,[Ke]:e.LINEAR,[qe]:e.LINEAR_MIPMAP_NEAREST,[Je]:e.LINEAR_MIPMAP_LINEAR},ne={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function I(n,a,o){if(o?(e.texParameteri(n,e.TEXTURE_WRAP_S,te[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,te[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,te[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,F[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,F[a.minFilter])):(e.texParameteri(n,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(n,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(a.wrapS!==1001||a.wrapT!==1001)&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.`),e.texParameteri(n,e.TEXTURE_MAG_FILTER,S(a.magFilter)),e.texParameteri(n,e.TEXTURE_MIN_FILTER,S(a.minFilter)),a.minFilter!==1003&&a.minFilter!==1006&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.`)),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ne[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){let o=t.get(`EXT_texture_filter_anisotropic`);if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1||s===!1&&a.type===1016&&t.has(`OES_texture_half_float_linear`)===!1)return;(a.anisotropy>1||r.get(a).__currentAnisotropy)&&(e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy)}}function re(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=f.get(i);a===void 0&&(a={},f.set(i,a));let s=j(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ie(t,o,c){let l=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(l=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(l=e.TEXTURE_3D);let u=re(t,o),d=o.source;n.bindTexture(l,t.__webglTexture,e.TEXTURE0+c);let f=r.get(d);if(d.version!==f.__version||u===!0){n.activeTexture(e.TEXTURE0+c);let t=Kt.getPrimaries(Kt.workingColorSpace),r=o.colorSpace===``?null:Kt.getPrimaries(o.colorSpace),p=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,p);let m=_(o)&&g(o.image)===!1,S=h(o.image,m,!1,i.maxTextureSize);S=pe(o,S);let C=g(S)||s,w=a.convert(o.format,o.colorSpace),T=a.convert(o.type),E=b(o.internalFormat,w,T,o.colorSpace,o.isVideoTexture);I(l,o,C);let D,O=o.mipmaps,k=s&&o.isVideoTexture!==!0&&E!==36196,A=f.__version===void 0||u===!0,j=x(o,S,C);if(o.isDepthTexture)E=e.DEPTH_COMPONENT,s?E=o.type===1015?e.DEPTH_COMPONENT32F:o.type===1014?e.DEPTH_COMPONENT24:o.type===1020?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT16:o.type===1015&&console.error(`WebGLRenderer: Floating point depth texture requires WebGL2.`),o.format===1026&&E===e.DEPTH_COMPONENT&&o.type!==1012&&o.type!==1014&&(console.warn(`THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.`),o.type=Xe,T=a.convert(o.type)),o.format===1027&&E===e.DEPTH_COMPONENT&&(E=e.DEPTH_STENCIL,o.type!==1020&&(console.warn(`THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.`),o.type=$e,T=a.convert(o.type))),A&&(k?n.texStorage2D(e.TEXTURE_2D,1,E,S.width,S.height):n.texImage2D(e.TEXTURE_2D,0,E,S.width,S.height,0,w,T,null));else if(o.isDataTexture)if(O.length>0&&C){k&&A&&n.texStorage2D(e.TEXTURE_2D,j,E,O[0].width,O[0].height);for(let t=0,r=O.length;t<r;t++)D=O[t],k?n.texSubImage2D(e.TEXTURE_2D,t,0,0,D.width,D.height,w,T,D.data):n.texImage2D(e.TEXTURE_2D,t,E,D.width,D.height,0,w,T,D.data);o.generateMipmaps=!1}else k?(A&&n.texStorage2D(e.TEXTURE_2D,j,E,S.width,S.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,w,T,S.data)):n.texImage2D(e.TEXTURE_2D,0,E,S.width,S.height,0,w,T,S.data);else if(o.isCompressedTexture)if(o.isCompressedArrayTexture){k&&A&&n.texStorage3D(e.TEXTURE_2D_ARRAY,j,E,O[0].width,O[0].height,S.depth);for(let t=0,r=O.length;t<r;t++)D=O[t],o.format===1023?k?n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,D.width,D.height,S.depth,w,T,D.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,E,D.width,D.height,S.depth,0,w,T,D.data):w===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):k?n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,D.width,D.height,S.depth,w,D.data,0,0):n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,E,D.width,D.height,S.depth,0,D.data,0,0)}else{k&&A&&n.texStorage2D(e.TEXTURE_2D,j,E,O[0].width,O[0].height);for(let t=0,r=O.length;t<r;t++)D=O[t],o.format===1023?k?n.texSubImage2D(e.TEXTURE_2D,t,0,0,D.width,D.height,w,T,D.data):n.texImage2D(e.TEXTURE_2D,t,E,D.width,D.height,0,w,T,D.data):w===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):k?n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,D.width,D.height,w,D.data):n.compressedTexImage2D(e.TEXTURE_2D,t,E,D.width,D.height,0,D.data)}else if(o.isDataArrayTexture)k?(A&&n.texStorage3D(e.TEXTURE_2D_ARRAY,j,E,S.width,S.height,S.depth),n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,S.width,S.height,S.depth,w,T,S.data)):n.texImage3D(e.TEXTURE_2D_ARRAY,0,E,S.width,S.height,S.depth,0,w,T,S.data);else if(o.isData3DTexture)k?(A&&n.texStorage3D(e.TEXTURE_3D,j,E,S.width,S.height,S.depth),n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,S.width,S.height,S.depth,w,T,S.data)):n.texImage3D(e.TEXTURE_3D,0,E,S.width,S.height,S.depth,0,w,T,S.data);else if(o.isFramebufferTexture){if(A)if(k)n.texStorage2D(e.TEXTURE_2D,j,E,S.width,S.height);else{let t=S.width,r=S.height;for(let i=0;i<j;i++)n.texImage2D(e.TEXTURE_2D,i,E,t,r,0,w,T,null),t>>=1,r>>=1}}else if(O.length>0&&C){k&&A&&n.texStorage2D(e.TEXTURE_2D,j,E,O[0].width,O[0].height);for(let t=0,r=O.length;t<r;t++)D=O[t],k?n.texSubImage2D(e.TEXTURE_2D,t,0,0,w,T,D):n.texImage2D(e.TEXTURE_2D,t,E,w,T,D);o.generateMipmaps=!1}else k?(A&&n.texStorage2D(e.TEXTURE_2D,j,E,S.width,S.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,w,T,S)):n.texImage2D(e.TEXTURE_2D,0,E,w,T,S);v(o,C)&&y(l),f.__version=d.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function L(t,o,c){if(o.image.length!==6)return;let l=re(t,o),u=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+c);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+c);let t=Kt.getPrimaries(Kt.workingColorSpace),r=o.colorSpace===``?null:Kt.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=o.isCompressedTexture||o.image[0].isCompressedTexture,m=o.image[0]&&o.image[0].isDataTexture,_=[];for(let e=0;e<6;e++)!p&&!m?_[e]=h(o.image[e],!1,!0,i.maxCubemapSize):_[e]=m?o.image[e].image:o.image[e],_[e]=pe(o,_[e]);let S=_[0],C=g(S)||s,w=a.convert(o.format,o.colorSpace),T=a.convert(o.type),E=b(o.internalFormat,w,T,o.colorSpace),D=s&&o.isVideoTexture!==!0,O=d.__version===void 0||l===!0,k=x(o,S,C);I(e.TEXTURE_CUBE_MAP,o,C);let A;if(p){D&&O&&n.texStorage2D(e.TEXTURE_CUBE_MAP,k,E,S.width,S.height);for(let t=0;t<6;t++){A=_[t].mipmaps;for(let r=0;r<A.length;r++){let i=A[r];o.format===1023?D?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,w,T,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,E,i.width,i.height,0,w,T,i.data):w===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):D?n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,w,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,E,i.width,i.height,0,i.data)}}}else{A=o.mipmaps,D&&O&&(A.length>0&&k++,n.texStorage2D(e.TEXTURE_CUBE_MAP,k,E,_[0].width,_[0].height));for(let t=0;t<6;t++)if(m){D?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,_[t].width,_[t].height,w,T,_[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,E,_[t].width,_[t].height,0,w,T,_[t].data);for(let r=0;r<A.length;r++){let i=A[r].image[t].image;D?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,w,T,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,E,i.width,i.height,0,w,T,i.data)}}else{D?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,w,T,_[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,E,w,T,_[t]);for(let r=0;r<A.length;r++){let i=A[r];D?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,w,T,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,E,w,T,i.image[t])}}}v(o,C)&&y(e.TEXTURE_CUBE_MAP),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ae(t,i,o,s,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.colorSpace);if(!r.get(i).__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),de(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,l,r.get(o).__webglTexture,0,B(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,l,r.get(o).__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function oe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer&&!n.stencilBuffer){let i=s===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(r||de(n)){let t=n.depthTexture;t&&t.isDepthTexture&&(t.type===1015?i=e.DEPTH_COMPONENT32F:t.type===1014&&(i=e.DEPTH_COMPONENT24));let r=B(n);de(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,r,i,n.width,n.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,r,i,n.width,n.height)}else e.renderbufferStorage(e.RENDERBUFFER,i,n.width,n.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,t)}else if(n.depthBuffer&&n.stencilBuffer){let i=B(n);r&&de(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,i,e.DEPTH24_STENCIL8,n.width,n.height):de(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,i,e.DEPTH24_STENCIL8,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,t)}else{let t=n.isWebGLMultipleRenderTargets===!0?n.texture:[n.texture];for(let i=0;i<t.length;i++){let o=t[i],s=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,s,l,o.colorSpace),d=B(n);r&&de(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,d,u,n.width,n.height):de(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,d,u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function se(t,i){if(i&&i.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);(!r.get(i.depthTexture).__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),M(i.depthTexture,0);let a=r.get(i.depthTexture).__webglTexture,o=B(i);if(i.depthTexture.format===1026)de(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,a,0,o):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,a,0);else if(i.depthTexture.format===1027)de(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,a,0,o):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,a,0);else throw Error(`Unknown depthTexture format`)}function ce(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)throw Error(`target.depthTexture not supported in Cube render targets`);se(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]=e.createRenderbuffer(),oe(i.__webglDepthbuffer[r],t,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer=e.createRenderbuffer(),oe(i.__webglDepthbuffer,t,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function R(t,n,i){let a=r.get(t);n!==void 0&&ae(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ce(t)}function le(t){let c=t.texture,l=r.get(t),u=r.get(c);t.addEventListener(`dispose`,w),t.isWebGLMultipleRenderTargets!==!0&&(u.__webglTexture===void 0&&(u.__webglTexture=e.createTexture()),u.__version=c.version,o.memory.textures++);let d=t.isWebGLCubeRenderTarget===!0,f=t.isWebGLMultipleRenderTargets===!0,p=g(t)||s;if(d){l.__webglFramebuffer=[];for(let t=0;t<6;t++)if(s&&c.mipmaps&&c.mipmaps.length>0){l.__webglFramebuffer[t]=[];for(let n=0;n<c.mipmaps.length;n++)l.__webglFramebuffer[t][n]=e.createFramebuffer()}else l.__webglFramebuffer[t]=e.createFramebuffer()}else{if(s&&c.mipmaps&&c.mipmaps.length>0){l.__webglFramebuffer=[];for(let t=0;t<c.mipmaps.length;t++)l.__webglFramebuffer[t]=e.createFramebuffer()}else l.__webglFramebuffer=e.createFramebuffer();if(f)if(i.drawBuffers){let n=t.texture;for(let t=0,i=n.length;t<i;t++){let i=r.get(n[t]);i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture(),o.memory.textures++)}}else console.warn(`THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.`);if(s&&t.samples>0&&de(t)===!1){let r=f?c:[c];l.__webglMultisampledFramebuffer=e.createFramebuffer(),l.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer);for(let n=0;n<r.length;n++){let i=r[n];l.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,l.__webglColorRenderbuffer[n]);let o=a.convert(i.format,i.colorSpace),s=a.convert(i.type),c=b(i.internalFormat,o,s,i.colorSpace,t.isXRRenderTarget===!0),u=B(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,l.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(l.__webglDepthRenderbuffer=e.createRenderbuffer(),oe(l.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(d){n.bindTexture(e.TEXTURE_CUBE_MAP,u.__webglTexture),I(e.TEXTURE_CUBE_MAP,c,p);for(let n=0;n<6;n++)if(s&&c.mipmaps&&c.mipmaps.length>0)for(let r=0;r<c.mipmaps.length;r++)ae(l.__webglFramebuffer[n][r],t,c,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ae(l.__webglFramebuffer[n],t,c,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);v(c,p)&&y(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(f){let i=t.texture;for(let a=0,o=i.length;a<o;a++){let o=i[a],s=r.get(o);n.bindTexture(e.TEXTURE_2D,s.__webglTexture),I(e.TEXTURE_2D,o,p),ae(l.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+a,e.TEXTURE_2D,0),v(o,p)&&y(e.TEXTURE_2D)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s?r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error(`THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.`)),n.bindTexture(r,u.__webglTexture),I(r,c,p),s&&c.mipmaps&&c.mipmaps.length>0)for(let n=0;n<c.mipmaps.length;n++)ae(l.__webglFramebuffer[n],t,c,e.COLOR_ATTACHMENT0,r,n);else ae(l.__webglFramebuffer,t,c,e.COLOR_ATTACHMENT0,r,0);v(c,p)&&y(r),n.unbindTexture()}t.depthBuffer&&ce(t)}function ue(t){let i=g(t)||s,a=t.isWebGLMultipleRenderTargets===!0?t.texture:[t.texture];for(let o=0,s=a.length;o<s;o++){let s=a[o];if(v(s,i)){let i=t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,a=r.get(s).__webglTexture;n.bindTexture(i,a),y(i),n.unbindTexture()}}}function z(t){if(s&&t.samples>0&&de(t)===!1){let i=t.isWebGLMultipleRenderTargets?t.texture:[t.texture],a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=[],u=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,d=r.get(t),f=t.isWebGLMultipleRenderTargets===!0;if(f)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,d.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,d.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,d.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,d.__webglFramebuffer);for(let n=0;n<i.length;n++){c.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&c.push(u);let p=d.__ignoreDepthValues===void 0?!1:d.__ignoreDepthValues;if(p===!1&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),f&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,d.__webglColorRenderbuffer[n]),p===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[u]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[u])),f){let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),l&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,c)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),f)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,d.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,d.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,d.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,d.__webglMultisampledFramebuffer)}}function B(e){return Math.min(i.maxSamples,e.samples)}function de(e){let n=r.get(e);return s&&e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function fe(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function pe(e,n){let r=e.colorSpace,i=e.format,a=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||e.format===1035||r!==`srgb-linear`&&r!==``&&(Kt.getTransfer(r)===`srgb`?s===!1?t.has(`EXT_sRGB`)===!0&&i===1023?(e.format=St,e.minFilter=Ke,e.generateMipmaps=!1):n=Xt.sRGBToLinear(n):(i!==1023||a!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,r)),n}this.allocateTextureUnit=A,this.resetTextureUnits=k,this.setTexture2D=M,this.setTexture2DArray=N,this.setTexture3D=P,this.setTextureCube=ee,this.rebindTextures=R,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=de}function Es(e,t,n){let r=n.isWebGL2;function i(n,i=``){let a,o=Kt.getTransfer(i);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return r?e.HALF_FLOAT:(a=t.get(`OES_texture_half_float`),a===null?null:a.HALF_FLOAT_OES);if(n===1021)return e.ALPHA;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1035)return a=t.get(`EXT_sRGB`),a===null?null:a.SRGB_ALPHA_EXT;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===`srgb`)if(a=t.get(`WEBGL_compressed_texture_s3tc_srgb`),a!==null){if(n===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get(`WEBGL_compressed_texture_s3tc`),a!==null){if(n===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(a=t.get(`WEBGL_compressed_texture_pvrtc`),a!==null){if(n===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196)return a=t.get(`WEBGL_compressed_texture_etc1`),a===null?null:a.COMPRESSED_RGB_ETC1_WEBGL;if(n===37492||n===37496)if(a=t.get(`WEBGL_compressed_texture_etc`),a!==null){if(n===37492)return o===`srgb`?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===37496)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(a=t.get(`WEBGL_compressed_texture_astc`),a!==null){if(n===37808)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(a=t.get(`EXT_texture_compression_bptc`),a!==null){if(n===36492)return o===`srgb`?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(a=t.get(`EXT_texture_compression_rgtc`),a!==null){if(n===36492)return a.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?r?e.UNSIGNED_INT_24_8:(a=t.get(`WEBGL_depth_texture`),a===null?null:a.UNSIGNED_INT_24_8_WEBGL):e[n]===void 0?null:e[n]}return{convert:i}}var Ds=class extends bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Os=class extends lr{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ks={type:`move`},As=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ks)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Os;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},js=class extends wt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=t.getContextAttributes(),h=null,g=null,_=[],v=[],y=new K,b=null,x=new bi;x.layers.enable(1),x.viewport=new nn;let S=new bi;S.layers.enable(2),S.viewport=new nn;let C=[x,S],w=new Ds;w.layers.enable(1),w.layers.enable(2);let T=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=_[e];return t===void 0&&(t=new As,_[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=_[e];return t===void 0&&(t=new As,_[e]=t),t.getGripSpace()},this.getHand=function(e){let t=_[e];return t===void 0&&(t=new As,_[e]=t),t.getHandSpace()};function D(e){let t=v.indexOf(e.inputSource);if(t===-1)return;let n=_[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function O(){r.removeEventListener(`select`,D),r.removeEventListener(`selectstart`,D),r.removeEventListener(`selectend`,D),r.removeEventListener(`squeeze`,D),r.removeEventListener(`squeezestart`,D),r.removeEventListener(`squeezeend`,D),r.removeEventListener(`end`,O),r.removeEventListener(`inputsourceschange`,k);for(let e=0;e<_.length;e++){let t=v[e];t!==null&&(v[e]=null,_[e].disconnect(t))}T=null,E=null,e.setRenderTarget(h),f=null,d=null,u=null,r=null,g=null,F.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(h=e.getRenderTarget(),r.addEventListener(`select`,D),r.addEventListener(`selectstart`,D),r.addEventListener(`selectend`,D),r.addEventListener(`squeeze`,D),r.addEventListener(`squeezestart`,D),r.addEventListener(`squeezeend`,D),r.addEventListener(`end`,O),r.addEventListener(`inputsourceschange`,k),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let n={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),g=new an(f.framebufferWidth,f.framebufferHeight,{format:et,type:Ye,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let n=null,a=null,o=null;m.depth&&(o=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=m.stencil?nt:tt,a=m.stencil?$e:Xe);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new an(d.textureWidth,d.textureHeight,{format:et,type:Ye,depthTexture:new ya(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});let c=e.properties.get(g);c.__ignoreDepthValues=d.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),F.setContext(r),F.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function k(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=v.indexOf(n);r>=0&&(v[r]=null,_[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=v.indexOf(n);if(r===-1){for(let e=0;e<_.length;e++)if(e>=v.length){v.push(n),r=e;break}else if(v[e]===null){v[e]=n,r=e;break}if(r===-1)break}let i=_[r];i&&i.connect(n)}}let A=new J,j=new J;function M(e,t,n){A.setFromMatrixPosition(t.matrixWorld),j.setFromMatrixPosition(n.matrixWorld);let r=A.distanceTo(j),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert();let g=o+m,_=s+m,v=f-h,y=p+(r-h),b=c*s/_*g,x=l*s/_*g;e.projectionMatrix.makePerspective(v,y,b,x,g,_),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}function N(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;w.near=S.near=x.near=e.near,w.far=S.far=x.far=e.far,(T!==w.near||E!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),T=w.near,E=w.far);let t=e.parent,n=w.cameras;N(w,t);for(let e=0;e<n.length;e++)N(n[e],t);n.length===2?M(w,x,S):w.projectionMatrix.copy(x.projectionMatrix),P(e,w,t)};function P(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Dt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)};let ee=null;function te(t,r){if(l=r.getViewerPose(c||a),p=r,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(g,f.framebuffer),e.setRenderTarget(g));let n=!1;t.length!==w.cameras.length&&(w.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(f!==null)a=f.getViewport(i);else{let t=u.getViewSubImage(d,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(g,t.colorTexture,d.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(g))}let o=C[r];o===void 0&&(o=new bi,o.layers.enable(r),o.viewport=new nn,C[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(w.matrix.copy(o.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),n===!0&&w.cameras.push(o)}}for(let e=0;e<_.length;e++){let t=v[e],n=_[e];t!==null&&n!==void 0&&n.update(t,r,c||a)}ee&&ee(t,r),r.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:r}),p=null}let F=new Ni;F.setAnimationLoop(te),this.setAnimationLoop=function(e){ee=e},this.dispose=function(){}}};function Ms(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,mi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(r,i){r.opacity.value=i.opacity,i.color&&r.diffuse.value.copy(i.color),i.emissive&&r.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),i.map&&(r.map.value=i.map,n(i.map,r.mapTransform)),i.alphaMap&&(r.alphaMap.value=i.alphaMap,n(i.alphaMap,r.alphaMapTransform)),i.bumpMap&&(r.bumpMap.value=i.bumpMap,n(i.bumpMap,r.bumpMapTransform),r.bumpScale.value=i.bumpScale,i.side===1&&(r.bumpScale.value*=-1)),i.normalMap&&(r.normalMap.value=i.normalMap,n(i.normalMap,r.normalMapTransform),r.normalScale.value.copy(i.normalScale),i.side===1&&r.normalScale.value.negate()),i.displacementMap&&(r.displacementMap.value=i.displacementMap,n(i.displacementMap,r.displacementMapTransform),r.displacementScale.value=i.displacementScale,r.displacementBias.value=i.displacementBias),i.emissiveMap&&(r.emissiveMap.value=i.emissiveMap,n(i.emissiveMap,r.emissiveMapTransform)),i.specularMap&&(r.specularMap.value=i.specularMap,n(i.specularMap,r.specularMapTransform)),i.alphaTest>0&&(r.alphaTest.value=i.alphaTest);let a=t.get(i).envMap;if(a&&(r.envMap.value=a,r.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=i.reflectivity,r.ior.value=i.ior,r.refractionRatio.value=i.refractionRatio),i.lightMap){r.lightMap.value=i.lightMap;let t=e._useLegacyLights===!0?Math.PI:1;r.lightMapIntensity.value=i.lightMapIntensity*t,n(i.lightMap,r.lightMapTransform)}i.aoMap&&(r.aoMap.value=i.aoMap,r.aoMapIntensity.value=i.aoMapIntensity,n(i.aoMap,r.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,r){e.metalness.value=r.metalness,r.metalnessMap&&(e.metalnessMap.value=r.metalnessMap,n(r.metalnessMap,e.metalnessMapTransform)),e.roughness.value=r.roughness,r.roughnessMap&&(e.roughnessMap.value=r.roughnessMap,n(r.roughnessMap,e.roughnessMapTransform)),t.get(r).envMap&&(e.envMapIntensity.value=r.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ns(e,t,n,r){let i={},a={},o=[],s=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16;o!==0&&16-o<a.boundary&&(n+=16-o),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Ps=class{constructor(e={}){let{canvas:t=zt(),context:n=null,depth:r=!0,stencil:i=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;d=n===null?a:n.getContextAttributes().alpha;let f=new Uint32Array(4),p=new Int32Array(4),m=null,h=null,g=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let v=this,y=!1,b=0,x=0,S=null,C=-1,w=null,T=new nn,E=new nn,D=null,O=new Y(0),k=0,A=t.width,j=t.height,M=1,N=null,P=null,ee=new nn(0,0,A,j),te=new nn(0,0,A,j),F=!1,ne=new Mi,I=!1,re=!1,ie=null,L=new Rn,ae=new K,oe=new J,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return S===null?M:1}let R=n;function le(e,n){for(let r=0;r<e.length;r++){let i=e[r],a=t.getContext(i,n);if(a!==null)return a}return null}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r160`),t.addEventListener(`webglcontextlost`,ke,!1),t.addEventListener(`webglcontextrestored`,Ae,!1),t.addEventListener(`webglcontextcreationerror`,je,!1),R===null){let t=[`webgl2`,`webgl`,`experimental-webgl`];if(v.isWebGL1Renderer===!0&&t.shift(),R=le(t,e),R===null)throw le(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}typeof WebGLRenderingContext<`u`&&R instanceof WebGLRenderingContext&&console.warn(`THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.`),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let ue,z,B,de,fe,pe,me,he,V,H,U,W,ge,_e,ve,ye,G,be,xe,Se,Ce,we,Te,Ee;function De(){ue=new da(R),z=new Vi(R,ue,e),ue.init(z),we=new Es(R,ue,z),B=new ws(R,ue,z),de=new ma(R),fe=new ss,pe=new Ts(R,ue,B,fe,z,we,de),me=new Ui(v),he=new ua(v),V=new Pi(R,z),Te=new zi(R,ue,V,z),H=new fa(R,V,de,Te),U=new va(R,H,V,de),xe=new _a(R,z,pe),ye=new Hi(fe),W=new os(v,me,he,ue,z,Te,ye),ge=new Ms(v,fe),_e=new ds,ve=new vs(ue,z),be=new Ri(v,me,he,B,U,d,s),G=new Cs(v,U,z),Ee=new Ns(R,de,z,B),Se=new Bi(R,ue,de,z),Ce=new pa(R,ue,de,z),de.programs=W.programs,v.capabilities=z,v.extensions=ue,v.properties=fe,v.renderLists=_e,v.shadowMap=G,v.state=B,v.info=de}De();let Oe=new js(v,R);this.xr=Oe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let e=ue.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ue.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return M},this.setPixelRatio=function(e){e!==void 0&&(M=e,this.setSize(A,j,!1))},this.getSize=function(e){return e.set(A,j)},this.setSize=function(e,n,r=!0){if(Oe.isPresenting){console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);return}A=e,j=n,t.width=Math.floor(e*M),t.height=Math.floor(n*M),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(A*M,j*M).floor()},this.setDrawingBufferSize=function(e,n,r){A=e,j=n,M=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(T)},this.getViewport=function(e){return e.copy(ee)},this.setViewport=function(e,t,n,r){e.isVector4?ee.set(e.x,e.y,e.z,e.w):ee.set(e,t,n,r),B.viewport(T.copy(ee).multiplyScalar(M).floor())},this.getScissor=function(e){return e.copy(te)},this.setScissor=function(e,t,n,r){e.isVector4?te.set(e.x,e.y,e.z,e.w):te.set(e,t,n,r),B.scissor(E.copy(te).multiplyScalar(M).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(e){B.setScissorTest(F=e)},this.setOpaqueSort=function(e){N=e},this.setTransparentSort=function(e){P=e},this.getClearColor=function(e){return e.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(S!==null){let t=S.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=S.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=be.getClearColor(),r=be.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(f[0]=i,f[1]=a,f[2]=o,f[3]=r,R.clearBufferuiv(R.COLOR,0,f)):(p[0]=i,p[1]=a,p[2]=o,p[3]=r,R.clearBufferiv(R.COLOR,0,p))}else r|=R.COLOR_BUFFER_BIT}t&&(r|=R.DEPTH_BUFFER_BIT),n&&(r|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ke,!1),t.removeEventListener(`webglcontextrestored`,Ae,!1),t.removeEventListener(`webglcontextcreationerror`,je,!1),_e.dispose(),ve.dispose(),fe.dispose(),me.dispose(),he.dispose(),U.dispose(),Te.dispose(),Ee.dispose(),W.dispose(),Oe.dispose(),Oe.removeEventListener(`sessionstart`,Re),Oe.removeEventListener(`sessionend`,ze),ie&&=(ie.dispose(),null),Be.stop()};function ke(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),y=!0}function Ae(){console.log(`THREE.WebGLRenderer: Context Restored.`),y=!1;let e=de.autoReset,t=G.enabled,n=G.autoUpdate,r=G.needsUpdate,i=G.type;De(),de.autoReset=e,G.enabled=t,G.autoUpdate=n,G.needsUpdate=r,G.type=i}function je(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Me(e){let t=e.target;t.removeEventListener(`dispose`,Me),Ne(t)}function Ne(e){Pe(e),fe.remove(e)}function Pe(e){let t=fe.get(e).programs;t!==void 0&&(t.forEach(function(e){W.releaseProgram(e)}),e.isShaderMaterial&&W.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=se);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=Ze(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=H.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Te.setup(i,r,s,n,c);let h,g=Se;if(c!==null&&(h=V.get(c),g=Ce,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*ce()),g.setMode(R.LINES)):g.setMode(R.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*ce()),i.isLineSegments?g.setMode(R.LINES):i.isLineLoop?g.setMode(R.LINE_LOOP):g.setMode(R.LINE_STRIP)}else i.isPoints?g.setMode(R.POINTS):i.isSprite&&g.setMode(R.TRIANGLES);if(i.isBatchedMesh)g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Fe(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ke(e,t,n),e.side=0,e.needsUpdate=!0,Ke(e,t,n),e.side=2):Ke(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),h=ve.get(n),h.init(),_.push(h),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(h.pushLight(e),e.castShadow&&h.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(h.pushLight(e),e.castShadow&&h.pushShadow(e))}),h.setupLights(v._useLegacyLights);let r=new Set;return e.traverse(function(e){let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Fe(a,n,e),r.add(a)}else Fe(t,n,e),r.add(t)}),_.pop(),h=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){fe.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}ue.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ie=null;function Le(e){Ie&&Ie(e)}function Re(){Be.stop()}function ze(){Be.start()}let Be=new Ni;Be.setAnimationLoop(Le),typeof self<`u`&&Be.setContext(self),this.setAnimationLoop=function(e){Ie=e,Oe.setAnimationLoop(e),e===null?Be.stop():Be.start()},Oe.addEventListener(`sessionstart`,Re),Oe.addEventListener(`sessionend`,ze),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(y===!0)return;e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(t),t=Oe.getCamera()),e.isScene===!0&&e.onBeforeRender(v,e,t,S),h=ve.get(e,_.length),h.init(),_.push(h),L.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ne.setFromProjectionMatrix(L),re=this.localClippingEnabled,I=ye.init(this.clippingPlanes,re),m=_e.get(e,g.length),m.init(),g.push(m),Ve(e,t,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(N,P),this.info.render.frame++,I===!0&&ye.beginShadows();let n=h.state.shadowsArray;if(G.render(n,e,t),I===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),be.render(m,e),h.setupLights(v._useLegacyLights),t.isArrayCamera){let n=t.cameras;for(let t=0,r=n.length;t<r;t++){let r=n[t];He(m,e,r,r.viewport)}}else He(m,e,t);S!==null&&(pe.updateMultisampleRenderTarget(S),pe.updateRenderTargetMipmap(S)),e.isScene===!0&&e.onAfterRender(v,e,t),Te.resetDefaultState(),C=-1,w=null,_.pop(),h=_.length>0?_[_.length-1]:null,g.pop(),m=g.length>0?g[g.length-1]:null};function Ve(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)h.pushLight(e),e.castShadow&&h.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ne.intersectsSprite(e)){r&&oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(L);let t=U.update(e),i=e.material;i.visible&&m.push(e,t,i,n,oe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ne.intersectsObject(e))){let t=U.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),oe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),oe.copy(e.boundingSphere.center)),oe.applyMatrix4(e.matrixWorld).applyMatrix4(L)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&m.push(e,t,s,n,oe.z,o)}}else i.visible&&m.push(e,t,i,n,oe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ve(i[e],t,n,r)}function He(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;h.setupLightsView(n),I===!0&&ye.setGlobalState(v.clippingPlanes,n),a.length>0&&Ue(i,a,t,n),r&&B.viewport(T.copy(r)),i.length>0&&We(i,t,n),a.length>0&&We(a,t,n),o.length>0&&We(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Ue(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;let i=z.isWebGL2;ie===null&&(ie=new an(1,1,{generateMipmaps:!0,type:ue.has(`EXT_color_buffer_half_float`)?Qe:Ye,minFilter:Je,samples:i?4:0})),v.getDrawingBufferSize(ae),i?ie.setSize(ae.x,ae.y):ie.setSize(Nt(ae.x),Nt(ae.y));let a=v.getRenderTarget();v.setRenderTarget(ie),v.getClearColor(O),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear();let o=v.toneMapping;v.toneMapping=0,We(e,n,r),pe.updateMultisampleRenderTarget(ie),pe.updateRenderTargetMipmap(ie);let s=!1;for(let e=0,i=t.length;e<i;e++){let i=t[e],a=i.object,o=i.geometry,c=i.material,l=i.group;if(c.side===2&&a.layers.test(r.layers)){let e=c.side;c.side=1,c.needsUpdate=!0,Ge(a,n,r,o,c,l),c.side=e,c.needsUpdate=!0,s=!0}}s===!0&&(pe.updateMultisampleRenderTarget(ie),pe.updateRenderTargetMipmap(ie)),v.setRenderTarget(a),v.setClearColor(O,k),v.toneMapping=o}function We(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&Ge(o,t,n,s,c,l)}}function Ge(e,t,n,r,i,a){e.onBeforeRender(v,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(v,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,v.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,v.renderBufferDirect(n,t,r,i,e,a),i.side=2):v.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(v,t,n,r,i,a)}function Ke(e,t,n){t.isScene!==!0&&(t=se);let r=fe.get(e),i=h.state.lights,a=h.state.shadowsArray,o=i.state.version,s=W.getParameters(e,i.state,a,t,n),c=W.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?he:me).get(e.envMap||r.environment),l===void 0&&(e.addEventListener(`dispose`,Me),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return Xe(e,s),u}else s.uniforms=W.getUniforms(e),e.onBuild(n,s,v),e.onBeforeCompile(s,v),u=W.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=ye.uniform),Xe(e,s),r.needsLights=et(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function qe(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Do.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Xe(e,t){let n=fe.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ze(e,t,n,r,i){t.isScene!==!0&&(t=se),pe.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:mt,c=(r.isMeshStandardMaterial?he:me).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(m=v.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,y=fe.get(r),b=h.state.lights;if(I===!0&&(re===!0||e!==w)){let t=e===w&&r.id===C;ye.setState(r,e,t)}let x=!1;r.version===y.__version?y.needsLights&&y.lightsStateVersion!==b.state.version?x=!0:y.outputColorSpace===s?i.isBatchedMesh&&y.batching===!1||!i.isBatchedMesh&&y.batching===!0||i.isInstancedMesh&&y.instancing===!1||!i.isInstancedMesh&&y.instancing===!0||i.isSkinnedMesh&&y.skinning===!1||!i.isSkinnedMesh&&y.skinning===!0||i.isInstancedMesh&&y.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&y.instancingColor===!1&&i.instanceColor!==null?x=!0:y.envMap===c?r.fog===!0&&y.fog!==a||y.numClippingPlanes!==void 0&&(y.numClippingPlanes!==ye.numPlanes||y.numIntersection!==ye.numIntersection)?x=!0:y.vertexAlphas===l&&y.vertexTangents===u&&y.morphTargets===d&&y.morphNormals===f&&y.morphColors===p&&y.toneMapping===m?z.isWebGL2===!0&&y.morphTargetsCount!==_&&(x=!0):x=!0:x=!0:x=!0:(x=!0,y.__version=r.version);let T=y.currentProgram;x===!0&&(T=Ke(r,t,i));let E=!1,D=!1,O=!1,k=T.getUniforms(),A=y.uniforms;if(B.useProgram(T.program)&&(E=!0,D=!0,O=!0),r.id!==C&&(C=r.id,D=!0),E||w!==e){k.setValue(R,`projectionMatrix`,e.projectionMatrix),k.setValue(R,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(R,oe.setFromMatrixPosition(e.matrixWorld)),z.logarithmicDepthBuffer&&k.setValue(R,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(R,`isOrthographic`,e.isOrthographicCamera===!0),w!==e&&(w=e,D=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(R,i,`bindMatrix`),k.setOptional(R,i,`bindMatrixInverse`);let e=i.skeleton;e&&(z.floatVertexTextures?(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(R,`boneTexture`,e.boneTexture,pe)):console.warn(`THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.`))}i.isBatchedMesh&&(k.setOptional(R,i,`batchingTexture`),k.setValue(R,`batchingTexture`,i._matricesTexture,pe));let N=n.morphAttributes;if((N.position!==void 0||N.normal!==void 0||N.color!==void 0&&z.isWebGL2===!0)&&xe.update(i,n,T),(D||y.receiveShadow!==i.receiveShadow)&&(y.receiveShadow=i.receiveShadow,k.setValue(R,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),D&&(k.setValue(R,`toneMappingExposure`,v.toneMappingExposure),y.needsLights&&$e(A,O),a&&r.fog===!0&&ge.refreshFogUniforms(A,a),ge.refreshMaterialUniforms(A,r,M,j,ie),Do.upload(R,qe(y),A,pe)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Do.upload(R,qe(y),A,pe),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(R,`center`,i.center),k.setValue(R,`modelViewMatrix`,i.modelViewMatrix),k.setValue(R,`normalMatrix`,i.normalMatrix),k.setValue(R,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++)if(z.isWebGL2){let n=e[t];Ee.update(n,T),Ee.bind(n,T)}else console.warn(`THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.`)}return T}function $e(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function et(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(e,t,n){fe.get(e.texture).__webglTexture=t,fe.get(e.depthTexture).__webglTexture=n;let r=fe.get(e);r.__hasExternalTextures=!0,r.__hasExternalTextures&&(r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||ue.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(e,t){let n=fe.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){S=e,b=t,x=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=fe.get(e);s.__useDefaultFramebuffer===void 0?s.__webglFramebuffer===void 0?pe.setupRenderTarget(e):s.__hasExternalTextures&&pe.rebindTextures(e,fe.get(e.texture).__webglTexture,fe.get(e.depthTexture).__webglTexture):(B.bindFramebuffer(R.FRAMEBUFFER,null),r=!1);let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=fe.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=z.isWebGL2&&e.samples>0&&pe.useMultisampledRTT(e)===!1?fe.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,T.copy(e.viewport),E.copy(e.scissor),D=e.scissorTest}else T.copy(ee).multiplyScalar(M).floor(),E.copy(te).multiplyScalar(M).floor(),D=F;if(B.bindFramebuffer(R.FRAMEBUFFER,i)&&z.drawBuffers&&r&&B.drawBuffers(e,i),B.viewport(T),B.scissor(E),B.setScissorTest(D),a){let r=fe.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=fe.get(e.texture),i=t||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}C=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=fe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){B.bindFramebuffer(R.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(s!==1023&&we.convert(s)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}let l=c===1016&&(ue.has(`EXT_color_buffer_half_float`)||z.isWebGL2&&ue.has(`EXT_color_buffer_float`));if(c!==1009&&we.convert(c)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(c===1015&&(z.isWebGL2||ue.has(`OES_texture_float`)||ue.has(`WEBGL_color_buffer_float`)))&&!l){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&R.readPixels(t,n,r,i,we.convert(s),we.convert(c),a)}finally{let e=S===null?null:fe.get(S).__webglFramebuffer;B.bindFramebuffer(R.FRAMEBUFFER,e)}}},this.copyFramebufferToTexture=function(e,t,n=0){let r=2**-n,i=Math.floor(t.image.width*r),a=Math.floor(t.image.height*r);pe.setTexture2D(t,0),R.copyTexSubImage2D(R.TEXTURE_2D,n,0,0,e.x,e.y,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n,r=0){let i=t.image.width,a=t.image.height,o=we.convert(n.format),s=we.convert(n.type);pe.setTexture2D(n,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,n.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,n.unpackAlignment),t.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,r,e.x,e.y,i,a,o,s,t.image.data):t.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,r,e.x,e.y,t.mipmaps[0].width,t.mipmaps[0].height,o,t.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,r,e.x,e.y,o,s,t.image),r===0&&n.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n,r,i=0){if(v.isWebGL1Renderer){console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.`);return}let a=e.max.x-e.min.x+1,o=e.max.y-e.min.y+1,s=e.max.z-e.min.z+1,c=we.convert(r.format),l=we.convert(r.type),u;if(r.isData3DTexture)pe.setTexture3D(r,0),u=R.TEXTURE_3D;else if(r.isDataArrayTexture||r.isCompressedArrayTexture)pe.setTexture2DArray(r,0),u=R.TEXTURE_2D_ARRAY;else{console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`);return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,r.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,r.unpackAlignment);let d=R.getParameter(R.UNPACK_ROW_LENGTH),f=R.getParameter(R.UNPACK_IMAGE_HEIGHT),p=R.getParameter(R.UNPACK_SKIP_PIXELS),m=R.getParameter(R.UNPACK_SKIP_ROWS),h=R.getParameter(R.UNPACK_SKIP_IMAGES),g=n.isCompressedTexture?n.mipmaps[i]:n.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,g.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,g.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,e.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,e.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,e.min.z),n.isDataTexture||n.isData3DTexture?R.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,g.data):n.isCompressedArrayTexture?(console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.`),R.compressedTexSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,g.data)):R.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,g),R.pixelStorei(R.UNPACK_ROW_LENGTH,d),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,f),R.pixelStorei(R.UNPACK_SKIP_PIXELS,p),R.pixelStorei(R.UNPACK_SKIP_ROWS,m),R.pixelStorei(R.UNPACK_SKIP_IMAGES,h),i===0&&r.generateMipmaps&&R.generateMipmap(u),B.unbindTexture()},this.initTexture=function(e){e.isCubeTexture?pe.setTextureCube(e,0):e.isData3DTexture?pe.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?pe.setTexture2DArray(e,0):pe.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){b=0,x=0,S=null,B.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ct}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===`display-p3`?`display-p3`:`srgb`,t.unpackColorSpace=Kt.workingColorSpace===`display-p3-linear`?`display-p3`:`srgb`}get outputEncoding(){return console.warn(`THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.`),this.outputColorSpace===`srgb`?ut:lt}set outputEncoding(e){console.warn(`THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.`),this.outputColorSpace=e===3001?pt:mt}get useLegacyLights(){return console.warn(`THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.`),this._useLegacyLights}set useLegacyLights(e){console.warn(`THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.`),this._useLegacyLights=e}},Fs=class extends Ps{};Fs.prototype.isWebGL1Renderer=!0;var Is=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new Y(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ls=class extends lr{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Rs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=xt,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ot()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn(`THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.`),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ot()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ot()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},zs=new J,Bs=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix4(e),this.setXYZ(t,zs.x,zs.y,zs.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zs.fromBufferAttribute(this,t),zs.applyNormalMatrix(e),this.setXYZ(t,zs.x,zs.y,zs.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zs.fromBufferAttribute(this,t),zs.transformDirection(e),this.setXYZ(t,zs.x,zs.y,zs.z);return this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array),i=Ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Mr(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vs=class extends Or{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new Y(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hs,Us=new J,Ws=new J,Gs=new J,Ks=new K,qs=new K,Js=new Rn,Ys=new J,Xs=new J,Zs=new J,Qs=new K,$s=new K,ec=new K,tc=class extends lr{constructor(e=new Vs){if(super(),this.isSprite=!0,this.type=`Sprite`,Hs===void 0){Hs=new Ur;let e=new Rs(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute(`position`,new Bs(e,3,0,!1)),Hs.setAttribute(`uv`,new Bs(e,2,3,!1))}this.geometry=Hs,this.material=e,this.center=new K(.5,.5)}raycast(e,t){e.camera===null&&console.error(`THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Ws.setFromMatrixScale(this.matrixWorld),Js.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Gs.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;nc(Ys.set(-.5,-.5,0),Gs,a,Ws,r,i),nc(Xs.set(.5,-.5,0),Gs,a,Ws,r,i),nc(Zs.set(.5,.5,0),Gs,a,Ws,r,i),Qs.set(0,0),$s.set(1,0),ec.set(1,1);let o=e.ray.intersectTriangle(Ys,Xs,Zs,!1,Us);if(o===null&&(nc(Xs.set(-.5,.5,0),Gs,a,Ws,r,i),$s.set(0,1),o=e.ray.intersectTriangle(Ys,Zs,Xs,!1,Us),o===null))return;let s=e.ray.origin.distanceTo(Us);s<e.near||s>e.far||t.push({distance:s,point:Us.clone(),uv:xr.getInterpolation(Us,Ys,Xs,Zs,Qs,$s,ec,new K),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function nc(e,t,n,r,i,a){Ks.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?qs.copy(Ks):(qs.x=a*Ks.x-i*Ks.y,qs.y=i*Ks.x+a*Ks.y),e.copy(t),e.x+=qs.x,e.y+=qs.y,e.applyMatrix4(Js)}var rc=class extends Or{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Y(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ic=new J,ac=new J,oc=new Rn,sc=new Ln,cc=new kn,lc=class extends lr{constructor(e=new Ur,t=new rc){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)ic.fromBufferAttribute(t,e-1),ac.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=ic.distanceTo(ac);e.setAttribute(`lineDistance`,new Fr(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(r),cc.radius+=i,e.ray.intersectsSphere(cc)===!1)return;oc.copy(r).invert(),sc.copy(e.ray).applyMatrix4(oc);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=new J,l=new J,u=new J,d=new J,f=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){let n=Math.max(0,a.start),r=Math.min(p.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=f){let n=p.getX(i),r=p.getX(i+1);if(c.fromBufferAttribute(m,n),l.fromBufferAttribute(m,r),sc.distanceSqToSegment(c,l,d,u)>s)continue;d.applyMatrix4(this.matrixWorld);let a=e.ray.origin.distanceTo(d);a<e.near||a>e.far||t.push({distance:a,point:u.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this})}}else{let n=Math.max(0,a.start),r=Math.min(m.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=f){if(c.fromBufferAttribute(m,i),l.fromBufferAttribute(m,i+1),sc.distanceSqToSegment(c,l,d,u)>s)continue;d.applyMatrix4(this.matrixWorld);let n=e.ray.origin.distanceTo(d);n<e.near||n>e.far||t.push({distance:n,point:u.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}},uc=new J,dc=new J,Q=class extends lc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)uc.fromBufferAttribute(t,e),dc.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+uc.distanceTo(dc);e.setAttribute(`lineDistance`,new Fr(n,1))}else console.warn(`THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},fc=class extends tn{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},pc=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200}getPoint(){return console.warn(`THREE.Curve: .getPoint() not implemented.`),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new K:new J);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new J,r=[],i=[],a=[],o=new J,s=new Rn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new J)}i[0]=new J,a[0]=new J;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(kt(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(kt(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},mc=class extends pc{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t){let n=t||new K,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},hc=class extends mc{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function gc(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var _c=new J,vc=new gc,yc=new gc,bc=new gc,xc=class extends pc{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new J){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(_c.subVectors(r[0],r[1]).add(r[0]),c=_c);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(_c.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=_c),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),vc.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),yc.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),bc.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(vc.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),yc.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),bc.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(vc.calc(s),yc.calc(s),bc.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new J().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Sc(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Cc(e,t){let n=1-e;return n*n*t}function wc(e,t){return 2*(1-e)*e*t}function Tc(e,t){return e*e*t}function Ec(e,t,n,r){return Cc(e,t)+wc(e,n)+Tc(e,r)}function Dc(e,t){let n=1-e;return n*n*n*t}function Oc(e,t){let n=1-e;return 3*n*n*e*t}function kc(e,t){return 3*(1-e)*e*e*t}function Ac(e,t){return e*e*e*t}function jc(e,t,n,r,i){return Dc(e,t)+Oc(e,n)+kc(e,r)+Ac(e,i)}var Mc=class extends pc{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(jc(e,r.x,i.x,a.x,o.x),jc(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nc=class extends pc{constructor(e=new J,t=new J,n=new J,r=new J){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new J){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(jc(e,r.x,i.x,a.x,o.x),jc(e,r.y,i.y,a.y,o.y),jc(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pc=class extends pc{constructor(e=new K,t=new K){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fc=class extends pc{constructor(e=new J,t=new J){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new J){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ic=class extends pc{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ec(e,r.x,i.x,a.x),Ec(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lc=class extends pc{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ec(e,r.x,i.x,a.x),Ec(e,r.y,i.y,a.y),Ec(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rc=class extends pc{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new K){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Sc(o,s.x,c.x,l.x,u.x),Sc(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this}},zc=Object.freeze({__proto__:null,ArcCurve:hc,CatmullRomCurve3:xc,CubicBezierCurve:Mc,CubicBezierCurve3:Nc,EllipseCurve:mc,LineCurve:Pc,LineCurve3:Fc,QuadraticBezierCurve:Ic,QuadraticBezierCurve3:Lc,SplineCurve:Rc}),Bc=class extends pc{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new zc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new zc[n.type]().fromJSON(n))}return this}},$=class extends Bc{constructor(e){super(),this.type=`Path`,this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Pc(this.currentPoint.clone(),new K(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Ic(this.currentPoint.clone(),new K(e,t),new K(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Mc(this.currentPoint.clone(),new K(e,t),new K(n,r),new K(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Rc([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new mc(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Vc=class e extends Ur{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Fr(u,3)),this.setAttribute(`normal`,new Fr(d,3)),this.setAttribute(`uv`,new Fr(f,2));function _(){let a=new J,_=new J,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let e=0;e<r;e++)for(let t=0;t<i;t++){let n=m[t][e],r=m[t+1][e],i=m[t+1][e+1],a=m[t][e+1];l.push(n,r,a),l.push(r,i,a),v+=6}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new K,m=new J,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Hc=class extends ${constructor(e){super(e),this.uuid=Ot(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new $().fromJSON(n))}return this}},Uc={triangulate:function(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Wc(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l,u,d,f,p;if(r&&(a=Zc(e,t,a,n)),e.length>80*n){s=l=e[0],c=u=e[1];for(let t=n;t<i;t+=n)d=e[t],f=e[t+1],d<s&&(s=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);p=Math.max(l-s,u-c),p=p===0?0:32767/p}return Kc(a,o,n,s,c,p,0),o}};function Wc(e,t,n,r,i){let a,o;if(i===bl(e,t,n,r)>0)for(a=t;a<n;a+=r)o=_l(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=_l(a,e[a],e[a+1],o);return o&&ll(o,o.next)&&(vl(o),o=o.next),o}function Gc(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(ll(n,n.next)||cl(n.prev,n,n.next)===0)){if(vl(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Kc(e,t,n,r,i,a,o){if(!e)return;!o&&a&&nl(e,r,i,a);let s=e,c,l;for(;e.prev!==e.next;){if(c=e.prev,l=e.next,a?Jc(e,r,i,a):qc(e)){t.push(c.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),vl(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=Yc(Gc(e),t,n),Kc(e,t,n,r,i,a,2)):o===2&&Xc(e,t,n,r,i,a):Kc(Gc(e),t,n,r,i,a,1);break}}}function qc(e){let t=e.prev,n=e,r=e.next;if(cl(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&ol(i,s,a,c,o,l,m.x,m.y)&&cl(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Jc(e,t,n,r){let i=e.prev,a=e,o=e.next;if(cl(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,_=il(p,m,t,n,r),v=il(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ol(s,u,c,d,l,f,y.x,y.y)&&cl(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ol(s,u,c,d,l,f,b.x,b.y)&&cl(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ol(s,u,c,d,l,f,y.x,y.y)&&cl(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ol(s,u,c,d,l,f,b.x,b.y)&&cl(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Yc(e,t,n){let r=e;do{let i=r.prev,a=r.next.next;!ll(i,a)&&ul(i,r,r.next,a)&&ml(i,a)&&ml(a,i)&&(t.push(i.i/n|0),t.push(r.i/n|0),t.push(a.i/n|0),vl(r),vl(r.next),r=e=a),r=r.next}while(r!==e);return Gc(r)}function Xc(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&sl(o,e)){let s=gl(o,e);o=Gc(o,o.next),s=Gc(s,s.next),Kc(o,t,n,r,i,a,0),Kc(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Zc(e,t,n,r){let i=[],a,o,s,c,l;for(a=0,o=t.length;a<o;a++)s=t[a]*r,c=a<o-1?t[a+1]*r:e.length,l=Wc(e,s,c,r,!1),l===l.next&&(l.steiner=!0),i.push(al(l));for(i.sort(Qc),a=0;a<i.length;a++)n=$c(i[a],n);return n}function Qc(e,t){return e.x-t.x}function $c(e,t){let n=el(e,t);if(!n)return t;let r=gl(n,e);return Gc(r,r.next),Gc(n,n.next)}function el(e,t){let n=t,r=-1/0,i,a=e.x,o=e.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let e=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=a&&e>r&&(r=e,i=n.x<n.next.x?n:n.next,e===a))return i}n=n.next}while(n!==t);if(!i)return null;let s=i,c=i.x,l=i.y,u=1/0,d;n=i;do a>=n.x&&n.x>=c&&a!==n.x&&ol(o<l?a:r,o,c,l,o<l?r:a,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(a-n.x),ml(n,e)&&(d<u||d===u&&(n.x>i.x||n.x===i.x&&tl(i,n)))&&(i=n,u=d)),n=n.next;while(n!==s);return i}function tl(e,t){return cl(e.prev,e,t.prev)<0&&cl(t.next,e,e.next)<0}function nl(e,t,n,r){let i=e;do i.z===0&&(i.z=il(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,rl(i)}function rl(e){let t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function il(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function al(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ol(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function sl(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!pl(e,t)&&(ml(e,t)&&ml(t,e)&&hl(e,t)&&(cl(e.prev,e,t.prev)||cl(e,t.prev,t))||ll(e,t)&&cl(e.prev,e,e.next)>0&&cl(t.prev,t,t.next)>0)}function cl(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function ll(e,t){return e.x===t.x&&e.y===t.y}function ul(e,t,n,r){let i=fl(cl(e,t,n)),a=fl(cl(e,t,r)),o=fl(cl(n,r,e)),s=fl(cl(n,r,t));return!!(i!==a&&o!==s||i===0&&dl(e,n,t)||a===0&&dl(e,r,t)||o===0&&dl(n,e,r)||s===0&&dl(n,t,r))}function dl(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function fl(e){return e>0?1:e<0?-1:0}function pl(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&ul(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function ml(e,t){return cl(e.prev,e,e.next)<0?cl(e,t,e.next)>=0&&cl(e,e.prev,t)>=0:cl(e,t,e.prev)<0||cl(e,e.next,t)<0}function hl(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function gl(e,t){let n=new yl(e.i,e.x,e.y),r=new yl(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function _l(e,t,n,r){let i=new yl(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function vl(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function yl(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function bl(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var xl=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Sl(e),Cl(n,e);let a=e.length;t.forEach(Sl);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Cl(n,t[e]);let o=Uc.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Sl(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Cl(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var wl=class e extends Ur{constructor(e=new Hc([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Fr(r,3)),this.setAttribute(`uv`,new Fr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0?!0:t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Tl:t.UVGenerator,g,_=!1,v,y,b,x;m&&(g=m.getSpacedPoints(s),_=!0,l=!1,v=m.computeFrenetFrames(s,!1),y=new J,b=new J,x=new J),l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!xl.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];xl.isClockWise(t)&&(w[e]=t.reverse())}}let T=xl.triangulateShape(C,w),E=C;for(let e=0,t=w.length;e<t;e++){let t=w[e];C=C.concat(t)}function D(e,t,n){return t||console.error(`THREE.ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let O=C.length,k=T.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new K(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new K(r/a,i/a)}let j=[];for(let e=0,t=E.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(E[e],E[n],E[r]);let M=[],N,P=j.concat();for(let e=0,t=w.length;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}for(let e=0;e<p;e++){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],j[e],r);I(t.x,t.y,-n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],N[e],r);I(i.x,i.y,-n)}}}let ee=d+f;for(let e=0;e<O;e++){let t=l?D(C[e],P[e],ee):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),I(x.x,x.y,x.z)):I(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<O;t++){let n=l?D(C[t],P[t],ee):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),I(x.x,x.y,x.z)):I(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],j[e],r);I(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],N[e],r);_?I(i.x,i.y+g[s-1].y,g[s-1].x+n):I(i.x,i.y,c+n)}}}te(),F();function te(){let e=r.length/3;if(l){let e=0,t=O*e;for(let e=0;e<k;e++){let n=T[e];re(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=O*e;for(let e=0;e<k;e++){let n=T[e];re(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<k;e++){let t=T[e];re(t[2],t[1],t[0])}for(let e=0;e<k;e++){let t=T[e];re(t[0]+O*s,t[1]+O*s,t[2]+O*s)}}n.addGroup(e,r.length/3-e,0)}function F(){let e=r.length/3,t=0;ne(E,t),t+=E.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ne(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ne(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=O*e,a=O*(e+1);ie(t+r+n,t+i+n,t+i+a,t+r+a)}}}function I(e,t,n){a.push(e),a.push(t),a.push(n)}function re(e,t,i){L(e),L(t),L(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ae(o[0]),ae(o[1]),ae(o[2])}function ie(e,t,i,a){L(e),L(t),L(a),L(t),L(i),L(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ae(s[0]),ae(s[1]),ae(s[3]),ae(s[1]),ae(s[2]),ae(s[3])}function L(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ae(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return El(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new zc[i.type]().fromJSON(i)),new e(r,t.options)}},Tl={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new K(a,o),new K(s,c),new K(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new K(o,1-c),new K(l,1-d),new K(f,1-m),new K(h,1-_)]:[new K(s,1-c),new K(u,1-d),new K(p,1-m),new K(g,1-_)]}};function El(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Dl=class extends Or{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Y(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ol=class extends rc{constructor(e){super(),this.isLineDashedMaterial=!0,this.type=`LineDashedMaterial`,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function kl(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Al(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var jl=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Ml=class extends jl{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ot,endingEnd:ot}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case st:i=e,o=2*t-n;break;case ct:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case st:a=e,s=2*n-t;break;case ct:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Nl=class extends jl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Pl=class extends jl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Fl=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=kl(t,this.TimeBufferType),this.values=kl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:kl(e.times,Array),values:kl(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ml(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case rt:t=this.InterpolantFactoryMethodDiscrete;break;case it:t=this.InterpolantFactoryMethodLinear;break;case at:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rt;case this.InterpolantFactoryMethodLinear:return it;case this.InterpolantFactoryMethodSmooth:return at}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Al(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===at,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Fl.prototype.TimeBufferType=Float32Array,Fl.prototype.ValueBufferType=Float32Array,Fl.prototype.DefaultInterpolation=it;var Il=class extends Fl{};Il.prototype.ValueTypeName=`bool`,Il.prototype.ValueBufferType=Array,Il.prototype.DefaultInterpolation=rt,Il.prototype.InterpolantFactoryMethodLinear=void 0,Il.prototype.InterpolantFactoryMethodSmooth=void 0;var Ll=class extends Fl{};Ll.prototype.ValueTypeName=`color`;var Rl=class extends Fl{};Rl.prototype.ValueTypeName=`number`;var zl=class extends jl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)cn.slerpFlat(i,0,a,c-o,a,c,s);return i}},Bl=class extends Fl{InterpolantFactoryMethodLinear(e){return new zl(this.times,this.values,this.getValueSize(),e)}};Bl.prototype.ValueTypeName=`quaternion`,Bl.prototype.DefaultInterpolation=it,Bl.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends Fl{};Vl.prototype.ValueTypeName=`string`,Vl.prototype.ValueBufferType=Array,Vl.prototype.DefaultInterpolation=rt,Vl.prototype.InterpolantFactoryMethodLinear=void 0,Vl.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends Fl{};Hl.prototype.ValueTypeName=`vector`;var Ul=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null}}},Wl=class{constructor(e){this.manager=e===void 0?Ul:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Wl.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Gl=class extends lr{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Y(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Kl=new Rn,ql=new J,Jl=new J,Yl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.map=null,this.mapPass=null,this.matrix=new Rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mi,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ql.setFromMatrixPosition(e.matrixWorld),t.position.copy(ql),Jl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jl),t.updateMatrixWorld(),Kl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xl=class extends Yl{constructor(){super(new Wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zl=class extends Gl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(lr.DEFAULT_UP),this.updateMatrix(),this.target=new lr,this.shadow=new Xl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ql=class extends Gl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},$l=`\\[\\]\\.:\\/`,eu=RegExp(`[\\[\\]\\.:\\/]`,`g`),tu=`[^\\[\\]\\.:\\/]`,nu=`[^`+$l.replace(`\\.`,``)+`]`,ru=`((?:WC+[\\/:])*)`.replace(`WC`,tu),iu=`(WCOD+)?`.replace(`WCOD`,nu),au=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,tu),ou=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,tu),su=RegExp(`^`+ru+iu+au+ou+`$`),cu=[`material`,`materials`,`bones`,`map`],lu=class{constructor(e,t,n){let r=n||uu.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},uu=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(eu,``)}static parseTrackName(e){let t=su.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);cu.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};uu.Composite=lu,uu.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},uu.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},uu.prototype.GetterByBindingType=[uu.prototype._getValue_direct,uu.prototype._getValue_array,uu.prototype._getValue_arrayElement,uu.prototype._getValue_toArray],uu.prototype.SetterByBindingTypeAndVersioning=[[uu.prototype._setValue_direct,uu.prototype._setValue_direct_setNeedsUpdate,uu.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[uu.prototype._setValue_array,uu.prototype._setValue_array_setNeedsUpdate,uu.prototype._setValue_array_setMatrixWorldNeedsUpdate],[uu.prototype._setValue_arrayElement,uu.prototype._setValue_arrayElement_setNeedsUpdate,uu.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[uu.prototype._setValue_fromArray,uu.prototype._setValue_fromArray_setNeedsUpdate,uu.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var du=class extends Q{constructor(e=10,t=10,n=4473924,r=8947848){n=new Y(n),r=new Y(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new Ur;l.setAttribute(`position`,new Fr(s,3)),l.setAttribute(`color`,new Fr(c,3));let u=new rc({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`160`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`160`);function fu(){return{base:new Dl({color:7031850}),tread:new Dl({color:13935722}),treadT:new Dl({color:15251578}),string:new Dl({color:9199664}),land:new Dl({color:8036016}),pole:new Dl({color:8947848})}}function pu(e,t=15245360){let n=document.createElement(`canvas`);n.width=384,n.height=120;let r=n.getContext(`2d`);r.fillStyle=`rgba(8,20,34,0.88)`,r.fillRect(0,0,384,120),r.strokeStyle=`rgba(4, 12, 20, 0.95)`,r.lineWidth=8,r.font=`bold 32px monospace`,r.textAlign=`center`,r.textBaseline=`middle`,r.strokeText(e,384/2,120/2),r.fillStyle=`#${t.toString(16).padStart(6,`0`)}`,r.fillText(e,384/2,120/2);let i=new fc(n);i.minFilter=Ke,i.magFilter=Ke,i.needsUpdate=!0;let a=new tc(new Vs({map:i,transparent:!0,depthTest:!1,depthWrite:!1}));return a.scale.set(260,80,1),a.renderOrder=999,a}function mu(e,t,n,r=new J(0,40,0)){let i=[new J(...e),new J(...t)],a=new Ur().setFromPoints(i),o=new Ol({color:15245360,dashSize:24,gapSize:12,linewidth:1});a.computeBoundingSphere();let s=new lc(a,o);s.computeLineDistances();let c=new Os;c.add(s);let l=new J().addVectors(i[0],i[1]).multiplyScalar(.5).add(r),u=pu(n);return u.position.copy(l),c.add(u),c}function hu(e,t){let{nSteps:n,riser:r,tread:i,stairWidth:a,totalRun:o,totalRise:s,angle:c}=e,l=new Os,u=Math.min(45,r*.22);for(let e=0;e<n;e++){let n=(e+1)*r,o=new si(new ui(i-2,n,a),t.base);o.position.set(e*i+i/2,n/2,0),o.receiveShadow=!0,l.add(o);let s=new si(new ui(i+6,u,a+4),e===0?t.treadT:t.tread);s.position.set(e*i+i/2,(e+1)*r-u/2+1,0),s.castShadow=!0,s.receiveShadow=!0,l.add(s)}let d=new Hc;d.moveTo(0,0);for(let e=0;e<n;e++)d.lineTo(e*i,(e+1)*r),d.lineTo((e+1)*i,(e+1)*r);d.lineTo(n*i,0),d.closePath();let f=new wl(d,{depth:28,bevelEnabled:!1});[-a/2-28,a/2].forEach(e=>{let n=new si(f,t.string);n.position.set(0,0,e),n.castShadow=!0,l.add(n)});let p=mu([0,20,a/2+140],[o,20,a/2+140],`Run: ${o.toFixed(0)} mm`);l.add(p);let m=mu([o+120,0,0],[o+120,s,0],`Height: ${s.toFixed(0)} mm`);l.add(m);let h=mu([o+120,20,-a/2],[o+120,20,a/2],`Width: ${a.toFixed(0)} mm`,new J(60,0,0));return l.add(h),l.position.x=-(n*i)/2,l}function gu(e,t,n,r,i,a=0,o=0,s=!1){let c=new Os,l=Math.min(45,t*.22),u=s?-1:1;for(let a=0;a<e;a++){let e=(a+1)*t,o=u*(a*n+n/2),s=new si(new ui(n-2,e,r),i.base);s.position.set(o,e/2,0),s.receiveShadow=!0,c.add(s);let d=new si(new ui(n+6,l,r+4),a===0?i.treadT:i.tread);d.position.set(o,(a+1)*t-l/2+1,0),d.castShadow=!0,c.add(d)}return c.position.set(a,0,o),c}function _u(e,t,n,r){let i=new si(new ui(e,40,t),r.land);return i.position.y=n+20,i.castShadow=!0,i.receiveShadow=!0,i}function vu(e,t){let{stepsF1:n,stepsF2:r,riser:i,tread1:a,tread2:o,stairWidth:s,landingDepth:c,angle:l}=e,u=new Os,d=gu(n,i,a,s,t);u.add(d);let f=n*i,p=c,m=_u(p,s,f,t);m.position.x=n*a+p/2,u.add(m);let h=gu(r,i,o,s,t);h.rotation.y=-Math.PI/2,h.position.set(n*a+p-s/2,f,p/2),u.add(h);let g=n*a,_=r*o,v=f+_,y=mu([0,20,s/2+140],[g,20,s/2+140],`Run 1: ${g.toFixed(0)} mm`);u.add(y);let b=mu([g+10,20,s/2+140],[g+p-10,20,s/2+140],`Landing: ${p.toFixed(0)} mm`);u.add(b);let x=mu([g+p+20,f,p/2+90],[g+p+20,v,p/2+90],`Run 2: ${_.toFixed(0)} mm`,new J(80,0,0));u.add(x);let S=mu([g+p+120,0,0],[g+p+120,v,0],`Height: ${v.toFixed(0)} mm`);u.add(S);let C=mu([g+p+120,20,-s/2],[g+p+120,20,s/2],`Width: ${s.toFixed(0)} mm`,new J(60,0,0));return u.add(C),u.position.set(-(n*a+p/2),0,-s/2),u}function yu(e,t){let{stepsPerFlight:n,riser:r,tread:i,stairWidth:a,landingDepth:o,wellGap:s}=e,c=new Os,l=a/2+s/2,u=gu(n,r,i,a,t,0,-l);c.add(u);let d=n*r,f=o,p=_u(f,a*2+s,d,t);p.position.x=n*i+f/2,c.add(p);let m=gu(n,r,i,a,t);m.rotation.y=Math.PI,m.position.set(n*i,d,l),c.add(m);let h=n*i,g=n*r,_=mu([0,20,-l-40],[h,20,-l-40],`Flight 1: ${h.toFixed(0)} mm`);c.add(_);let v=mu([h,20,l+140],[0,20,l+140],`Flight 2: ${h.toFixed(0)} mm`);c.add(v);let y=mu([h+10,20,-l-40],[h+f-10,20,-l-40],`Landing: ${f.toFixed(0)} mm`);c.add(y);let b=mu([h+f+120,0,0],[h+f+120,g,0],`Height: ${g.toFixed(0)} mm`);c.add(b);let x=mu([h+f+120,20,-a/2],[h+f+120,20,a/2],`Width: ${a.toFixed(0)} mm`,new J(60,0,0));return c.add(x),c.position.set(-(n*i)/2,0,0),c}function bu(e,t){let{nSteps:n,riser:r,degPerStep:i,outerRadius:a,innerRadius:o}=e,s=new Os,c=Math.min(40,r*.22),l=n*r+200,u=new si(new Vc(o*.9,o*.9,l,16),t.pole);u.position.y=l/2,s.add(u);for(let e=0;e<n;e++){let n=e*i*Math.PI/180,l=e*r+r/2;i*Math.PI/180*1.02;let u=a-o,d=new si(new ui(u,c,Math.min(a*i*Math.PI/180,a*.8)),e%2==0?t.tread:t.treadT),f=(a+o)/2;d.position.set(f*Math.cos(n),l,f*Math.sin(n)),d.rotation.y=-n,d.castShadow=!0,d.receiveShadow=!0,s.add(d);let p=new si(new ui(u,r*.7,8),t.base);p.position.set(f*Math.cos(n),l-r*.3,f*Math.sin(n)),p.rotation.y=-n,s.add(p)}let d=n*r,f=mu([a+120,0,0],[a+120,d,0],`Height: ${d.toFixed(0)} mm`);s.add(f);let p=mu([-a,20,-a-120],[a,20,-a-120],`Outer Ø: ${(a*2).toFixed(0)} mm`);return s.add(p),s.position.set(0,0,0),s}function xu(e,t){if(!e)return null;switch(e.type){case`lshaped`:return vu(e,t);case`ushaped`:return yu(e,t);case`spiral`:return bu(e,t);default:return hu(e,t)}}function Su(e,t,n){if(!e||!t||!n)return;let r=new dn().setFromObject(t);if(r.isEmpty())return;let i=r.getCenter(new J),a=r.getSize(new J),o=a.y*.5,s=a.x*.5,c=e.fov*(Math.PI/180),l=o/Math.tan(c/2),u=2*Math.atan(Math.tan(c/2)*e.aspect),d=s/Math.tan(u/2),f=Math.max(d,l)*1.32;n.target.copy(i),n.r=Math.max(400,f,a.length()*.4),n.minR=Math.max(200,Math.min(n.r*.3,f*.2)),n.maxR=Math.max(n.r*5,7e3,a.length()*3),e.updateProjectionMatrix()}function Cu(e){if(!e)return[];let t=[`${e.nSteps} steps`,`${e.riser.toFixed(0)}R × ${(e.tread||e.tread1||e.innerTread||0).toFixed(0)}T mm`,`${e.angle.toFixed(1)}°`];switch(e.type){case`lshaped`:return[`3D MODEL · L-SHAPED`,t.join(` · `),`Run 1 ${e.run1.toFixed(0)} mm · Run 2 ${e.run2.toFixed(0)} mm · Landing ${e.landingDepth.toFixed(0)} mm`];case`ushaped`:return[`3D MODEL · U-SHAPED`,t.join(` · `),`Flight ${e.flightRun.toFixed(0)} mm · Landing ${e.landingDepth.toFixed(0)} mm · Width ${e.stairWidth.toFixed(0)} mm`];case`spiral`:return[`3D MODEL · SPIRAL`,t.join(` · `),`Outer Ø ${(e.outerRadius*2).toFixed(0)} mm · Inner Ø ${(e.innerRadius*2).toFixed(0)} mm · ${e.turnsTotal.toFixed(1)} turns`];default:return[`3D MODEL · STRAIGHT`,t.join(` · `),`Run ${e.totalRun.toFixed(0)} mm · Rise ${e.totalRise.toFixed(0)} mm · Width ${e.stairWidth.toFixed(0)} mm`]}}function wu({result:e}){return e?(0,F.jsx)(`div`,{style:{position:`absolute`,top:12,left:`50%`,transform:`translateX(-50%)`,minWidth:240,maxWidth:460,padding:`8px 12px`,borderRadius:8,border:`1px solid #2A6EA8`,background:`rgba(6,22,40,0.88)`,pointerEvents:`none`,textAlign:`center`,zIndex:2},children:Cu(e).map((e,t)=>(0,F.jsx)(`div`,{style:{fontFamily:`monospace`,color:t===0?`#82C4FF`:`#C7E7FF`,fontSize:t===0?10:9,lineHeight:1.45,letterSpacing:t===0?`0.04em`:`normal`},children:e},`${t}-${e}`))}):null}function Tu({result:e,captureRef:t}){let n=(0,g.useRef)(null),r=(0,g.useRef)({});return(0,g.useEffect)(()=>{let e=n.current;if(!e)return;let i=e.clientWidth||640,a=e.clientHeight||480,o=new Ps({antialias:!0,preserveDrawingBuffer:!0});o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setSize(i,a),o.shadowMap.enabled=!0,o.shadowMap.type=2,e.appendChild(o.domElement);let s=new Ls;s.background=new Y(397596),s.fog=new Is(397596,4e3,9e3);let c=new bi(48,i/a,1,2e4);s.add(new Ql(10075084,.6));let l=new Zl(16774368,1.1);l.position.set(1200,2400,1e3),l.castShadow=!0,l.shadow.mapSize.set(1024,1024),l.shadow.camera.left=l.shadow.camera.bottom=-2e3,l.shadow.camera.right=l.shadow.camera.top=2e3,s.add(l);let u=new Zl(4487116,.4);u.position.set(-800,600,-500),s.add(u);let d=new du(5e3,50,862782,596265);d.position.y=-1,s.add(d);let f={theta:.55,phi:1.05,r:2400,minR:400,maxR:7e3,target:new J(0,300,0),dragging:!1,px:0,py:0},p=()=>{c.position.set(f.target.x+f.r*Math.sin(f.phi)*Math.sin(f.theta),f.target.y+f.r*Math.cos(f.phi)+120,f.target.z+f.r*Math.sin(f.phi)*Math.cos(f.theta)),c.lookAt(f.target)};p();let m=e=>{f.dragging=!0,f.px=e.clientX,f.py=e.clientY,o.domElement.style.cursor=`grabbing`},h=()=>{f.dragging=!1,o.domElement.style.cursor=`grab`},g=e=>{f.dragging&&(f.theta-=(e.clientX-f.px)*.006,f.phi=Math.max(.05,Math.min(Math.PI*.48,f.phi+(e.clientY-f.py)*.006)),f.px=e.clientX,f.py=e.clientY,p())},_=e=>{f.r=Math.max(f.minR,Math.min(f.maxR,f.r+e.deltaY*.8)),p()},v=()=>{let t=e.clientWidth,n=e.clientHeight;c.aspect=t/n,c.updateProjectionMatrix(),o.setSize(t,n),Su(c,s.getObjectByName(`stairs`),f),p()};o.domElement.addEventListener(`mousedown`,m),o.domElement.addEventListener(`mousemove`,g),o.domElement.addEventListener(`wheel`,_,{passive:!0}),window.addEventListener(`mouseup`,h),window.addEventListener(`resize`,v);let y,b=()=>{y=requestAnimationFrame(b),o.render(s,c)};return b(),r.current={scene:s,camera:c,renderer:o,orb:f,updateCam:p,mats:fu()},t&&(t.current=()=>o.domElement.toDataURL(`image/png`)),()=>{t&&(t.current=null),cancelAnimationFrame(y),o.domElement.removeEventListener(`mousedown`,m),o.domElement.removeEventListener(`mousemove`,g),o.domElement.removeEventListener(`wheel`,_),window.removeEventListener(`mouseup`,h),window.removeEventListener(`resize`,v),o.dispose(),e.contains(o.domElement)&&e.removeChild(o.domElement)}},[]),(0,g.useEffect)(()=>{let{scene:t,camera:n,orb:i,updateCam:a,mats:o}=r.current;if(!t||!n)return;let s=t.getObjectByName(`stairs`);if(s&&(s.traverse(e=>{e.isMesh&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{e.map&&e.map.dispose(),e.dispose()})),e.isSprite&&e.material&&(e.material.map&&e.material.map.dispose(),e.material.dispose())}),t.remove(s)),!e)return;let c=xu(e,o);c&&(c.name=`stairs`,t.add(c),Su(n,c,i),a())},[e]),(0,F.jsxs)(`div`,{style:{width:`100%`,height:`100%`,position:`relative`,background:`#06111C`},children:[(0,F.jsx)(wu,{result:e}),(0,F.jsx)(`div`,{ref:n,style:{width:`100%`,height:`100%`,cursor:`grab`,background:`#06111C`}})]})}var Eu={straight:{totalRise:`2700`,totalRun:`3800`,stairWidth:`900`,numStepsOverride:``},lshaped:{totalRise:`2700`,run1:`2000`,run2:`1800`,stairWidth:`900`,landingDepth:`900`,numStepsOverride:``},ushaped:{totalRise:`2700`,flightRun:`2000`,stairWidth:`900`,landingDepth:`1000`,numStepsOverride:``},spiral:{totalRise:`2700`,diameter:`1600`,stairWidth:`650`,numStepsOverride:``}};function Du(){let[e,t]=(0,g.useState)(`straight`),[n,r]=(0,g.useState)(`NO`),[i,a]=(0,g.useState)(`2d`),[o,s]=(0,g.useState)(`elevation`),[c,l]=(0,g.useState)(Eu),u=v[n],d=(0,g.useMemo)(()=>E(e,c[e],u),[e,c,u]),f=(t,n)=>{l(r=>({...r,[e]:{...r[e],[t]:n}}))},p=e=>{t(e),a(`2d`)},m=(0,g.useRef)(null),h=(0,g.useRef)(null),_=(0,g.useCallback)(()=>{let t=m.current?.querySelector(`svg`);if(!t)return;let n=t.viewBox.baseVal,r=new XMLSerializer().serializeToString(t),i=new Blob([r],{type:`image/svg+xml;charset=utf-8`}),a=URL.createObjectURL(i),s=new Image;s.onload=()=>{let t=document.createElement(`canvas`);t.width=n.width*3,t.height=n.height*3;let r=t.getContext(`2d`);r.fillStyle=`#040E18`,r.fillRect(0,0,t.width,t.height),r.drawImage(s,0,0,t.width,t.height),URL.revokeObjectURL(a);let i=document.createElement(`a`);i.download=`staircase-${e}-${o}.png`,i.href=t.toDataURL(`image/png`),i.click()},s.onerror=()=>{URL.revokeObjectURL(a);let t=new Blob([r],{type:`image/svg+xml;charset=utf-8`}),n=document.createElement(`a`);n.download=`staircase-${e}-${o}.svg`,n.href=URL.createObjectURL(t),n.click()},s.src=a},[e,o]),y=(0,g.useCallback)(()=>{let t=h.current?.();if(!t)return;let n=document.createElement(`a`);n.download=`staircase-${e}-3d.png`,n.href=t,n.click()},[e]),b=d?d.ok?D.green:D.red:D.textDim;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        input[type=number]::-webkit-inner-spin-button { opacity: 0.3; }
        select option { background: #071520; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #06111C; }
        ::-webkit-scrollbar-thumb { background: #0E2A40; border-radius: 2px; }
        @media print {
          body { margin: 0; }
          .sidebar-print-hide { display: none !important; }
          .blueprint-print-expand { width: 100vw !important; }
        }
      `}),(0,F.jsxs)(`div`,{style:{display:`flex`,height:`100vh`,background:D.bg,color:D.text,fontFamily:O.ui,overflow:`hidden`},children:[(0,F.jsx)(ue,{className:`sidebar-print-hide`,stairType:e,region:n,inputs:c[e],result:d,onTypeChange:p,onInputChange:f,onRegionChange:r}),(0,F.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,minWidth:0},children:[(0,F.jsxs)(`div`,{style:{background:D.panel,borderBottom:`1px solid ${D.border}`,padding:`9px 16px`,display:`flex`,gap:7,alignItems:`center`},children:[[[`2d`,`2D Blueprint`],[`3d`,`3D Model`]].map(([e,t])=>(0,F.jsx)(`button`,{onClick:()=>a(e),style:P(i===e),children:t},e)),i===`2d`&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`button`,{onClick:()=>s(`elevation`),style:P(o===`elevation`),children:`Elevation`}),(0,F.jsx)(`button`,{onClick:()=>s(`topdown`),style:P(o===`topdown`),children:`Top-Down`})]}),i===`3d`&&(0,F.jsx)(`span`,{style:{fontSize:9,fontFamily:O.mono,color:`#112233`,marginLeft:6},children:`drag to rotate · scroll to zoom`}),i===`2d`&&d&&(0,F.jsxs)(`div`,{style:{marginLeft:`auto`,display:`flex`,gap:6,alignItems:`center`},children:[(0,F.jsx)(`button`,{onClick:_,title:`Save blueprint as PNG image`,style:{...P(!1),fontSize:10,padding:`4px 10px`,color:`#44C899`,borderColor:`#1A4030`},children:`📥 PNG`}),(0,F.jsx)(`button`,{onClick:()=>window.print(),title:`Print or save as PDF`,style:{...P(!1),fontSize:10,padding:`4px 10px`,color:`#82C4FF`,borderColor:`#1A3050`},children:`🖨 Print`}),(0,F.jsx)(`div`,{style:{width:5,height:5,borderRadius:`50%`,background:b,boxShadow:`0 0 5px ${b}`,marginLeft:4}}),(0,F.jsxs)(`span`,{style:{fontSize:9,fontFamily:O.mono,color:`#1A3F5C`},children:[d.nSteps,` steps · `,d.riser.toFixed(0),`R × `,(d.tread||d.tread1||d.innerTread||0).toFixed(0),`T mm · `,d.angle.toFixed(1),`°`]})]}),i===`3d`&&d&&(0,F.jsxs)(`div`,{style:{marginLeft:`auto`,display:`flex`,gap:6,alignItems:`center`},children:[(0,F.jsx)(`button`,{onClick:y,title:`Save 3D view as PNG image`,style:{...P(!1),fontSize:10,padding:`4px 10px`,color:`#44C899`,borderColor:`#1A4030`},children:`📥 PNG`}),(0,F.jsx)(`button`,{onClick:()=>window.print(),title:`Print or save as PDF`,style:{...P(!1),fontSize:10,padding:`4px 10px`,color:`#82C4FF`,borderColor:`#1A3050`},children:`🖨 Print`}),(0,F.jsx)(`div`,{style:{width:5,height:5,borderRadius:`50%`,background:b,boxShadow:`0 0 5px ${b}`,marginLeft:4}}),(0,F.jsxs)(`span`,{style:{fontSize:9,fontFamily:O.mono,color:`#1A3F5C`},children:[d.nSteps,` steps · `,d.riser.toFixed(0),`R × `,(d.tread||d.tread1||d.innerTread||0).toFixed(0),`T mm · `,d.angle.toFixed(1),`°`]})]})]}),(0,F.jsx)(`div`,{style:{flex:1,overflow:`auto`,position:`relative`},children:i===`2d`?(0,F.jsx)(`div`,{ref:m,style:{width:`100%`,height:`100%`,display:`flex`,alignItems:`center`,justifyContent:`center`,background:D.bg,padding:0},children:(0,F.jsx)(ze,{result:d,stairType:e,viewMode:o})}):(0,F.jsx)(Tu,{result:d,captureRef:h})})]})]})]})}_.createRoot(document.getElementById(`root`)).render((0,F.jsx)(g.StrictMode,{children:(0,F.jsx)(Du,{})}));