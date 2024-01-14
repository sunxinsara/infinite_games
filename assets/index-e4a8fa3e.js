function Ep(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function lo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ec={exports:{}},ao={},Cc={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ar=Symbol.for("react.element"),Cp=Symbol.for("react.portal"),Pp=Symbol.for("react.fragment"),_p=Symbol.for("react.strict_mode"),Np=Symbol.for("react.profiler"),jp=Symbol.for("react.provider"),Rp=Symbol.for("react.context"),Tp=Symbol.for("react.forward_ref"),Op=Symbol.for("react.suspense"),Lp=Symbol.for("react.memo"),zp=Symbol.for("react.lazy"),Xs=Symbol.iterator;function Ip(e){return e===null||typeof e!="object"?null:(e=Xs&&e[Xs]||e["@@iterator"],typeof e=="function"?e:null)}var Pc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_c=Object.assign,Nc={};function Mn(e,t,n){this.props=e,this.context=t,this.refs=Nc,this.updater=n||Pc}Mn.prototype.isReactComponent={};Mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function jc(){}jc.prototype=Mn.prototype;function Fa(e,t,n){this.props=e,this.context=t,this.refs=Nc,this.updater=n||Pc}var Ua=Fa.prototype=new jc;Ua.constructor=Fa;_c(Ua,Mn.prototype);Ua.isPureReactComponent=!0;var Gs=Array.isArray,Rc=Object.prototype.hasOwnProperty,Ba={current:null},Tc={key:!0,ref:!0,__self:!0,__source:!0};function Oc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Rc.call(t,r)&&!Tc.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ar,type:e,key:o,ref:l,props:i,_owner:Ba.current}}function Mp(e,t){return{$$typeof:Ar,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Va(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ar}function $p(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zs=/\/+/g;function Jo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$p(""+e.key):t.toString(36)}function vi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ar:case Cp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Jo(l,0):r,Gs(i)?(n="",e!=null&&(n=e.replace(Zs,"$&/")+"/"),vi(i,t,n,"",function(u){return u})):i!=null&&(Va(i)&&(i=Mp(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Zs,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Gs(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+Jo(o,a);l+=vi(o,t,n,s,i)}else if(s=Ip(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+Jo(o,a++),l+=vi(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Gr(e,t,n){if(e==null)return e;var r=[],i=0;return vi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Dp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},gi={transition:null},Ap={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:gi,ReactCurrentOwner:Ba};I.Children={map:Gr,forEach:function(e,t,n){Gr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Gr(e,function(){t++}),t},toArray:function(e){return Gr(e,function(t){return t})||[]},only:function(e){if(!Va(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=Mn;I.Fragment=Pp;I.Profiler=Np;I.PureComponent=Fa;I.StrictMode=_p;I.Suspense=Op;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ap;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_c({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Ba.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Rc.call(t,s)&&!Tc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ar,type:e.type,key:i,ref:o,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:Rp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jp,_context:e},e.Consumer=e};I.createElement=Oc;I.createFactory=function(e){var t=Oc.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Tp,render:e}};I.isValidElement=Va;I.lazy=function(e){return{$$typeof:zp,_payload:{_status:-1,_result:e},_init:Dp}};I.memo=function(e,t){return{$$typeof:Lp,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=gi.transition;gi.transition={};try{e()}finally{gi.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return Ee.current.useCallback(e,t)};I.useContext=function(e){return Ee.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};I.useEffect=function(e,t){return Ee.current.useEffect(e,t)};I.useId=function(){return Ee.current.useId()};I.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return Ee.current.useMemo(e,t)};I.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};I.useRef=function(e){return Ee.current.useRef(e)};I.useState=function(e){return Ee.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return Ee.current.useTransition()};I.version="18.2.0";Cc.exports=I;var P=Cc.exports;const tr=lo(P),_l=Ep({__proto__:null,default:tr},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp=P,Up=Symbol.for("react.element"),Bp=Symbol.for("react.fragment"),Vp=Object.prototype.hasOwnProperty,Wp=Fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hp={key:!0,ref:!0,__self:!0,__source:!0};function Lc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Vp.call(t,r)&&!Hp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Up,type:e,key:o,ref:l,props:i,_owner:Wp.current}}ao.Fragment=Bp;ao.jsx=Lc;ao.jsxs=Lc;Ec.exports=ao;var m=Ec.exports,Nl={},zc={exports:{}},De={},Ic={exports:{}},Mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,O){var z=j.length;j.push(O);e:for(;0<z;){var J=z-1>>>1,ie=j[J];if(0<i(ie,O))j[J]=O,j[z]=ie,z=J;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var O=j[0],z=j.pop();if(z!==O){j[0]=z;e:for(var J=0,ie=j.length,Kr=ie>>>1;J<Kr;){var Ut=2*(J+1)-1,Zo=j[Ut],Bt=Ut+1,Xr=j[Bt];if(0>i(Zo,z))Bt<ie&&0>i(Xr,Zo)?(j[J]=Xr,j[Bt]=z,J=Bt):(j[J]=Zo,j[Ut]=z,J=Ut);else if(Bt<ie&&0>i(Xr,z))j[J]=Xr,j[Bt]=z,J=Bt;else break e}}return O}function i(j,O){var z=j.sortIndex-O.sortIndex;return z!==0?z:j.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],d=1,f=null,y=3,w=!1,g=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(j){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=j)r(u),O.sortIndex=O.expirationTime,t(s,O);else break;O=n(u)}}function x(j){if(v=!1,h(j),!g)if(n(s)!==null)g=!0,on(E);else{var O=n(u);O!==null&&Un(x,O.startTime-j)}}function E(j,O){g=!1,v&&(v=!1,p(T),T=-1),w=!0;var z=y;try{for(h(O),f=n(s);f!==null&&(!(f.expirationTime>O)||j&&!Z());){var J=f.callback;if(typeof J=="function"){f.callback=null,y=f.priorityLevel;var ie=J(f.expirationTime<=O);O=e.unstable_now(),typeof ie=="function"?f.callback=ie:f===n(s)&&r(s),h(O)}else r(s);f=n(s)}if(f!==null)var Kr=!0;else{var Ut=n(u);Ut!==null&&Un(x,Ut.startTime-O),Kr=!1}return Kr}finally{f=null,y=z,w=!1}}var N=!1,C=null,T=-1,A=5,L=-1;function Z(){return!(e.unstable_now()-L<A)}function me(){if(C!==null){var j=e.unstable_now();L=j;var O=!0;try{O=C(!0,j)}finally{O?Oe():(N=!1,C=null)}}else N=!1}var Oe;if(typeof c=="function")Oe=function(){c(me)};else if(typeof MessageChannel<"u"){var Yr=new MessageChannel,Qr=Yr.port2;Yr.port1.onmessage=me,Oe=function(){Qr.postMessage(null)}}else Oe=function(){S(me,0)};function on(j){C=j,N||(N=!0,Oe())}function Un(j,O){T=S(function(){j(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){g||w||(g=!0,on(E))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(j){switch(y){case 1:case 2:case 3:var O=3;break;default:O=y}var z=y;y=O;try{return j()}finally{y=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,O){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var z=y;y=j;try{return O()}finally{y=z}},e.unstable_scheduleCallback=function(j,O,z){var J=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?J+z:J):z=J,j){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=z+ie,j={id:d++,callback:O,priorityLevel:j,startTime:z,expirationTime:ie,sortIndex:-1},z>J?(j.sortIndex=z,t(u,j),n(s)===null&&j===n(u)&&(v?(p(T),T=-1):v=!0,Un(x,z-J))):(j.sortIndex=ie,t(s,j),g||w||(g=!0,on(E))),j},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(j){var O=y;return function(){var z=y;y=O;try{return j.apply(this,arguments)}finally{y=z}}}})(Mc);Ic.exports=Mc;var Yp=Ic.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $c=P,$e=Yp;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dc=new Set,fr={};function en(e,t){Nn(e,t),Nn(e+"Capture",t)}function Nn(e,t){for(fr[e]=t,e=0;e<t.length;e++)Dc.add(t[e])}var pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jl=Object.prototype.hasOwnProperty,Qp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Js={},bs={};function Kp(e){return jl.call(bs,e)?!0:jl.call(Js,e)?!1:Qp.test(e)?bs[e]=!0:(Js[e]=!0,!1)}function Xp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gp(e,t,n,r){if(t===null||typeof t>"u"||Xp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wa=/[\-:]([a-z])/g;function Ha(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wa,Ha);pe[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wa,Ha);pe[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wa,Ha);pe[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ya(e,t,n,r){var i=pe.hasOwnProperty(t)?pe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Gp(t,n,i,r)&&(n=null),r||i===null?Kp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vt=$c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zr=Symbol.for("react.element"),sn=Symbol.for("react.portal"),un=Symbol.for("react.fragment"),Qa=Symbol.for("react.strict_mode"),Rl=Symbol.for("react.profiler"),Ac=Symbol.for("react.provider"),Fc=Symbol.for("react.context"),Ka=Symbol.for("react.forward_ref"),Tl=Symbol.for("react.suspense"),Ol=Symbol.for("react.suspense_list"),Xa=Symbol.for("react.memo"),wt=Symbol.for("react.lazy"),Uc=Symbol.for("react.offscreen"),qs=Symbol.iterator;function Bn(e){return e===null||typeof e!="object"?null:(e=qs&&e[qs]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,bo;function Zn(e){if(bo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bo=t&&t[1]||""}return`
`+bo+e}var qo=!1;function el(e,t){if(!e||qo)return"";qo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{qo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zn(e):""}function Zp(e){switch(e.tag){case 5:return Zn(e.type);case 16:return Zn("Lazy");case 13:return Zn("Suspense");case 19:return Zn("SuspenseList");case 0:case 2:case 15:return e=el(e.type,!1),e;case 11:return e=el(e.type.render,!1),e;case 1:return e=el(e.type,!0),e;default:return""}}function Ll(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case un:return"Fragment";case sn:return"Portal";case Rl:return"Profiler";case Qa:return"StrictMode";case Tl:return"Suspense";case Ol:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fc:return(e.displayName||"Context")+".Consumer";case Ac:return(e._context.displayName||"Context")+".Provider";case Ka:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xa:return t=e.displayName||null,t!==null?t:Ll(e.type)||"Memo";case wt:t=e._payload,e=e._init;try{return Ll(e(t))}catch{}}return null}function Jp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ll(t);case 8:return t===Qa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bp(e){var t=Bc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jr(e){e._valueTracker||(e._valueTracker=bp(e))}function Vc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Bc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zl(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function eu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wc(e,t){t=t.checked,t!=null&&Ya(e,"checked",t,!1)}function Il(e,t){Wc(e,t);var n=Mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ml(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ml(e,t.type,Mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function tu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ml(e,t,n){(t!=="number"||zi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jn=Array.isArray;function xn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Mt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $l(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Jn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Mt(n)}}function Hc(e,t){var n=Mt(t.value),r=Mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ru(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Yc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Yc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var br,Qc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(br=br||document.createElement("div"),br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function dr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qp=["Webkit","ms","Moz","O"];Object.keys(nr).forEach(function(e){qp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),nr[t]=nr[e]})});function Kc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||nr.hasOwnProperty(e)&&nr[e]?(""+t).trim():t+"px"}function Xc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var e0=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Al(e,t){if(t){if(e0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Fl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ul=null;function Ga(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,Sn=null,kn=null;function iu(e){if(e=Br(e)){if(typeof Bl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=po(t),Bl(e.stateNode,e.type,t))}}function Gc(e){Sn?kn?kn.push(e):kn=[e]:Sn=e}function Zc(){if(Sn){var e=Sn,t=kn;if(kn=Sn=null,iu(e),t)for(e=0;e<t.length;e++)iu(t[e])}}function Jc(e,t){return e(t)}function bc(){}var tl=!1;function qc(e,t,n){if(tl)return e(t,n);tl=!0;try{return Jc(e,t,n)}finally{tl=!1,(Sn!==null||kn!==null)&&(bc(),Zc())}}function pr(e,t){var n=e.stateNode;if(n===null)return null;var r=po(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Vl=!1;if(pt)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){Vl=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{Vl=!1}function t0(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var rr=!1,Ii=null,Mi=!1,Wl=null,n0={onError:function(e){rr=!0,Ii=e}};function r0(e,t,n,r,i,o,l,a,s){rr=!1,Ii=null,t0.apply(n0,arguments)}function i0(e,t,n,r,i,o,l,a,s){if(r0.apply(this,arguments),rr){if(rr){var u=Ii;rr=!1,Ii=null}else throw Error(k(198));Mi||(Mi=!0,Wl=u)}}function tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ef(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ou(e){if(tn(e)!==e)throw Error(k(188))}function o0(e){var t=e.alternate;if(!t){if(t=tn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ou(i),e;if(o===r)return ou(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function tf(e){return e=o0(e),e!==null?nf(e):null}function nf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nf(e);if(t!==null)return t;e=e.sibling}return null}var rf=$e.unstable_scheduleCallback,lu=$e.unstable_cancelCallback,l0=$e.unstable_shouldYield,a0=$e.unstable_requestPaint,b=$e.unstable_now,s0=$e.unstable_getCurrentPriorityLevel,Za=$e.unstable_ImmediatePriority,of=$e.unstable_UserBlockingPriority,$i=$e.unstable_NormalPriority,u0=$e.unstable_LowPriority,lf=$e.unstable_IdlePriority,so=null,ot=null;function c0(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(so,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:p0,f0=Math.log,d0=Math.LN2;function p0(e){return e>>>=0,e===0?32:31-(f0(e)/d0|0)|0}var qr=64,ei=4194304;function bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Di(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=bn(a):(o&=l,o!==0&&(r=bn(o)))}else l=n&~i,l!==0?r=bn(l):o!==0&&(r=bn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),i=1<<n,r|=e[n],t&=~i;return r}function m0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function h0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Je(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=m0(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function af(){var e=qr;return qr<<=1,!(qr&4194240)&&(qr=64),e}function nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function y0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Je(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ja(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function sf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uf,ba,cf,ff,df,Yl=!1,ti=[],_t=null,Nt=null,jt=null,mr=new Map,hr=new Map,St=[],v0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function au(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(t.pointerId)}}function Wn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Br(t),t!==null&&ba(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function g0(e,t,n,r,i){switch(t){case"focusin":return _t=Wn(_t,e,t,n,r,i),!0;case"dragenter":return Nt=Wn(Nt,e,t,n,r,i),!0;case"mouseover":return jt=Wn(jt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return mr.set(o,Wn(mr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,hr.set(o,Wn(hr.get(o)||null,e,t,n,r,i)),!0}return!1}function pf(e){var t=Ht(e.target);if(t!==null){var n=tn(t);if(n!==null){if(t=n.tag,t===13){if(t=ef(n),t!==null){e.blockedOn=t,df(e.priority,function(){cf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ql(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ul=r,n.target.dispatchEvent(r),Ul=null}else return t=Br(n),t!==null&&ba(t),e.blockedOn=n,!1;t.shift()}return!0}function su(e,t,n){wi(e)&&n.delete(t)}function w0(){Yl=!1,_t!==null&&wi(_t)&&(_t=null),Nt!==null&&wi(Nt)&&(Nt=null),jt!==null&&wi(jt)&&(jt=null),mr.forEach(su),hr.forEach(su)}function Hn(e,t){e.blockedOn===t&&(e.blockedOn=null,Yl||(Yl=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,w0)))}function yr(e){function t(i){return Hn(i,e)}if(0<ti.length){Hn(ti[0],e);for(var n=1;n<ti.length;n++){var r=ti[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&Hn(_t,e),Nt!==null&&Hn(Nt,e),jt!==null&&Hn(jt,e),mr.forEach(t),hr.forEach(t),n=0;n<St.length;n++)r=St[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<St.length&&(n=St[0],n.blockedOn===null);)pf(n),n.blockedOn===null&&St.shift()}var En=vt.ReactCurrentBatchConfig,Ai=!0;function x0(e,t,n,r){var i=F,o=En.transition;En.transition=null;try{F=1,qa(e,t,n,r)}finally{F=i,En.transition=o}}function S0(e,t,n,r){var i=F,o=En.transition;En.transition=null;try{F=4,qa(e,t,n,r)}finally{F=i,En.transition=o}}function qa(e,t,n,r){if(Ai){var i=Ql(e,t,n,r);if(i===null)dl(e,t,r,Fi,n),au(e,r);else if(g0(i,e,t,n,r))r.stopPropagation();else if(au(e,r),t&4&&-1<v0.indexOf(e)){for(;i!==null;){var o=Br(i);if(o!==null&&uf(o),o=Ql(e,t,n,r),o===null&&dl(e,t,r,Fi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else dl(e,t,r,null,n)}}var Fi=null;function Ql(e,t,n,r){if(Fi=null,e=Ga(r),e=Ht(e),e!==null)if(t=tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ef(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fi=e,null}function mf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(s0()){case Za:return 1;case of:return 4;case $i:case u0:return 16;case lf:return 536870912;default:return 16}default:return 16}}var Et=null,es=null,xi=null;function hf(){if(xi)return xi;var e,t=es,n=t.length,r,i="value"in Et?Et.value:Et.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return xi=i.slice(e,1<r?1-r:void 0)}function Si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ni(){return!0}function uu(){return!1}function Ae(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ni:uu,this.isPropagationStopped=uu,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),t}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ts=Ae($n),Ur=X({},$n,{view:0,detail:0}),k0=Ae(Ur),rl,il,Yn,uo=X({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(rl=e.screenX-Yn.screenX,il=e.screenY-Yn.screenY):il=rl=0,Yn=e),rl)},movementY:function(e){return"movementY"in e?e.movementY:il}}),cu=Ae(uo),E0=X({},uo,{dataTransfer:0}),C0=Ae(E0),P0=X({},Ur,{relatedTarget:0}),ol=Ae(P0),_0=X({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),N0=Ae(_0),j0=X({},$n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),R0=Ae(j0),T0=X({},$n,{data:0}),fu=Ae(T0),O0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=z0[e])?!!t[e]:!1}function ns(){return I0}var M0=X({},Ur,{key:function(e){if(e.key){var t=O0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?L0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ns,charCode:function(e){return e.type==="keypress"?Si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$0=Ae(M0),D0=X({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),du=Ae(D0),A0=X({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ns}),F0=Ae(A0),U0=X({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),B0=Ae(U0),V0=X({},uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),W0=Ae(V0),H0=[9,13,27,32],rs=pt&&"CompositionEvent"in window,ir=null;pt&&"documentMode"in document&&(ir=document.documentMode);var Y0=pt&&"TextEvent"in window&&!ir,yf=pt&&(!rs||ir&&8<ir&&11>=ir),pu=String.fromCharCode(32),mu=!1;function vf(e,t){switch(e){case"keyup":return H0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cn=!1;function Q0(e,t){switch(e){case"compositionend":return gf(t);case"keypress":return t.which!==32?null:(mu=!0,pu);case"textInput":return e=t.data,e===pu&&mu?null:e;default:return null}}function K0(e,t){if(cn)return e==="compositionend"||!rs&&vf(e,t)?(e=hf(),xi=es=Et=null,cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yf&&t.locale!=="ko"?null:t.data;default:return null}}var X0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!X0[e.type]:t==="textarea"}function wf(e,t,n,r){Gc(r),t=Ui(t,"onChange"),0<t.length&&(n=new ts("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var or=null,vr=null;function G0(e){Tf(e,0)}function co(e){var t=pn(e);if(Vc(t))return e}function Z0(e,t){if(e==="change")return t}var xf=!1;if(pt){var ll;if(pt){var al="oninput"in document;if(!al){var yu=document.createElement("div");yu.setAttribute("oninput","return;"),al=typeof yu.oninput=="function"}ll=al}else ll=!1;xf=ll&&(!document.documentMode||9<document.documentMode)}function vu(){or&&(or.detachEvent("onpropertychange",Sf),vr=or=null)}function Sf(e){if(e.propertyName==="value"&&co(vr)){var t=[];wf(t,vr,e,Ga(e)),qc(G0,t)}}function J0(e,t,n){e==="focusin"?(vu(),or=t,vr=n,or.attachEvent("onpropertychange",Sf)):e==="focusout"&&vu()}function b0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return co(vr)}function q0(e,t){if(e==="click")return co(t)}function em(e,t){if(e==="input"||e==="change")return co(t)}function tm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:tm;function gr(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jl.call(t,i)||!qe(e[i],t[i]))return!1}return!0}function gu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wu(e,t){var n=gu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gu(n)}}function kf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ef(){for(var e=window,t=zi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zi(e.document)}return t}function is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nm(e){var t=Ef(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kf(n.ownerDocument.documentElement,n)){if(r!==null&&is(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=wu(n,o);var l=wu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rm=pt&&"documentMode"in document&&11>=document.documentMode,fn=null,Kl=null,lr=null,Xl=!1;function xu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xl||fn==null||fn!==zi(r)||(r=fn,"selectionStart"in r&&is(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lr&&gr(lr,r)||(lr=r,r=Ui(Kl,"onSelect"),0<r.length&&(t=new ts("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fn)))}function ri(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dn={animationend:ri("Animation","AnimationEnd"),animationiteration:ri("Animation","AnimationIteration"),animationstart:ri("Animation","AnimationStart"),transitionend:ri("Transition","TransitionEnd")},sl={},Cf={};pt&&(Cf=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function fo(e){if(sl[e])return sl[e];if(!dn[e])return e;var t=dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cf)return sl[e]=t[n];return e}var Pf=fo("animationend"),_f=fo("animationiteration"),Nf=fo("animationstart"),jf=fo("transitionend"),Rf=new Map,Su="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){Rf.set(e,t),en(t,[e])}for(var ul=0;ul<Su.length;ul++){var cl=Su[ul],im=cl.toLowerCase(),om=cl[0].toUpperCase()+cl.slice(1);Dt(im,"on"+om)}Dt(Pf,"onAnimationEnd");Dt(_f,"onAnimationIteration");Dt(Nf,"onAnimationStart");Dt("dblclick","onDoubleClick");Dt("focusin","onFocus");Dt("focusout","onBlur");Dt(jf,"onTransitionEnd");Nn("onMouseEnter",["mouseout","mouseover"]);Nn("onMouseLeave",["mouseout","mouseover"]);Nn("onPointerEnter",["pointerout","pointerover"]);Nn("onPointerLeave",["pointerout","pointerover"]);en("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));en("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));en("onBeforeInput",["compositionend","keypress","textInput","paste"]);en("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));en("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));en("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lm=new Set("cancel close invalid load scroll toggle".split(" ").concat(qn));function ku(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,i0(r,t,void 0,e),e.currentTarget=null}function Tf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;ku(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;ku(i,a,u),o=s}}}if(Mi)throw e=Wl,Mi=!1,Wl=null,e}function W(e,t){var n=t[ql];n===void 0&&(n=t[ql]=new Set);var r=e+"__bubble";n.has(r)||(Of(t,e,2,!1),n.add(r))}function fl(e,t,n){var r=0;t&&(r|=4),Of(n,e,r,t)}var ii="_reactListening"+Math.random().toString(36).slice(2);function wr(e){if(!e[ii]){e[ii]=!0,Dc.forEach(function(n){n!=="selectionchange"&&(lm.has(n)||fl(n,!1,e),fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ii]||(t[ii]=!0,fl("selectionchange",!1,t))}}function Of(e,t,n,r){switch(mf(t)){case 1:var i=x0;break;case 4:i=S0;break;default:i=qa}n=i.bind(null,t,n,e),i=void 0,!Vl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function dl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Ht(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}qc(function(){var u=o,d=Ga(n),f=[];e:{var y=Rf.get(e);if(y!==void 0){var w=ts,g=e;switch(e){case"keypress":if(Si(n)===0)break e;case"keydown":case"keyup":w=$0;break;case"focusin":g="focus",w=ol;break;case"focusout":g="blur",w=ol;break;case"beforeblur":case"afterblur":w=ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=cu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=C0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=F0;break;case Pf:case _f:case Nf:w=N0;break;case jf:w=B0;break;case"scroll":w=k0;break;case"wheel":w=W0;break;case"copy":case"cut":case"paste":w=R0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=du}var v=(t&4)!==0,S=!v&&e==="scroll",p=v?y!==null?y+"Capture":null:y;v=[];for(var c=u,h;c!==null;){h=c;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,p!==null&&(x=pr(c,p),x!=null&&v.push(xr(c,x,h)))),S)break;c=c.return}0<v.length&&(y=new w(y,g,null,n,d),f.push({event:y,listeners:v}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",y&&n!==Ul&&(g=n.relatedTarget||n.fromElement)&&(Ht(g)||g[mt]))break e;if((w||y)&&(y=d.window===d?d:(y=d.ownerDocument)?y.defaultView||y.parentWindow:window,w?(g=n.relatedTarget||n.toElement,w=u,g=g?Ht(g):null,g!==null&&(S=tn(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(w=null,g=u),w!==g)){if(v=cu,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=du,x="onPointerLeave",p="onPointerEnter",c="pointer"),S=w==null?y:pn(w),h=g==null?y:pn(g),y=new v(x,c+"leave",w,n,d),y.target=S,y.relatedTarget=h,x=null,Ht(d)===u&&(v=new v(p,c+"enter",g,n,d),v.target=h,v.relatedTarget=S,x=v),S=x,w&&g)t:{for(v=w,p=g,c=0,h=v;h;h=ln(h))c++;for(h=0,x=p;x;x=ln(x))h++;for(;0<c-h;)v=ln(v),c--;for(;0<h-c;)p=ln(p),h--;for(;c--;){if(v===p||p!==null&&v===p.alternate)break t;v=ln(v),p=ln(p)}v=null}else v=null;w!==null&&Eu(f,y,w,v,!1),g!==null&&S!==null&&Eu(f,S,g,v,!0)}}e:{if(y=u?pn(u):window,w=y.nodeName&&y.nodeName.toLowerCase(),w==="select"||w==="input"&&y.type==="file")var E=Z0;else if(hu(y))if(xf)E=em;else{E=b0;var N=J0}else(w=y.nodeName)&&w.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(E=q0);if(E&&(E=E(e,u))){wf(f,E,n,d);break e}N&&N(e,y,u),e==="focusout"&&(N=y._wrapperState)&&N.controlled&&y.type==="number"&&Ml(y,"number",y.value)}switch(N=u?pn(u):window,e){case"focusin":(hu(N)||N.contentEditable==="true")&&(fn=N,Kl=u,lr=null);break;case"focusout":lr=Kl=fn=null;break;case"mousedown":Xl=!0;break;case"contextmenu":case"mouseup":case"dragend":Xl=!1,xu(f,n,d);break;case"selectionchange":if(rm)break;case"keydown":case"keyup":xu(f,n,d)}var C;if(rs)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else cn?vf(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(yf&&n.locale!=="ko"&&(cn||T!=="onCompositionStart"?T==="onCompositionEnd"&&cn&&(C=hf()):(Et=d,es="value"in Et?Et.value:Et.textContent,cn=!0)),N=Ui(u,T),0<N.length&&(T=new fu(T,e,null,n,d),f.push({event:T,listeners:N}),C?T.data=C:(C=gf(n),C!==null&&(T.data=C)))),(C=Y0?Q0(e,n):K0(e,n))&&(u=Ui(u,"onBeforeInput"),0<u.length&&(d=new fu("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=C))}Tf(f,t)})}function xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ui(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=pr(e,n),o!=null&&r.unshift(xr(e,o,i)),o=pr(e,t),o!=null&&r.push(xr(e,o,i))),e=e.return}return r}function ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Eu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=pr(n,o),s!=null&&l.unshift(xr(n,s,a))):i||(s=pr(n,o),s!=null&&l.push(xr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var am=/\r\n?/g,sm=/\u0000|\uFFFD/g;function Cu(e){return(typeof e=="string"?e:""+e).replace(am,`
`).replace(sm,"")}function oi(e,t,n){if(t=Cu(t),Cu(e)!==t&&n)throw Error(k(425))}function Bi(){}var Gl=null,Zl=null;function Jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bl=typeof setTimeout=="function"?setTimeout:void 0,um=typeof clearTimeout=="function"?clearTimeout:void 0,Pu=typeof Promise=="function"?Promise:void 0,cm=typeof queueMicrotask=="function"?queueMicrotask:typeof Pu<"u"?function(e){return Pu.resolve(null).then(e).catch(fm)}:bl;function fm(e){setTimeout(function(){throw e})}function pl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);yr(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _u(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Dn=Math.random().toString(36).slice(2),it="__reactFiber$"+Dn,Sr="__reactProps$"+Dn,mt="__reactContainer$"+Dn,ql="__reactEvents$"+Dn,dm="__reactListeners$"+Dn,pm="__reactHandles$"+Dn;function Ht(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_u(e);e!==null;){if(n=e[it])return n;e=_u(e)}return t}e=n,n=e.parentNode}return null}function Br(e){return e=e[it]||e[mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function po(e){return e[Sr]||null}var ea=[],mn=-1;function At(e){return{current:e}}function H(e){0>mn||(e.current=ea[mn],ea[mn]=null,mn--)}function V(e,t){mn++,ea[mn]=e.current,e.current=t}var $t={},we=At($t),Ne=At(!1),Gt=$t;function jn(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function je(e){return e=e.childContextTypes,e!=null}function Vi(){H(Ne),H(we)}function Nu(e,t,n){if(we.current!==$t)throw Error(k(168));V(we,t),V(Ne,n)}function Lf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Jp(e)||"Unknown",i));return X({},n,r)}function Wi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,Gt=we.current,V(we,e),V(Ne,Ne.current),!0}function ju(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Lf(e,t,Gt),r.__reactInternalMemoizedMergedChildContext=e,H(Ne),H(we),V(we,e)):H(Ne),V(Ne,n)}var ut=null,mo=!1,ml=!1;function zf(e){ut===null?ut=[e]:ut.push(e)}function mm(e){mo=!0,zf(e)}function Ft(){if(!ml&&ut!==null){ml=!0;var e=0,t=F;try{var n=ut;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ut=null,mo=!1}catch(i){throw ut!==null&&(ut=ut.slice(e+1)),rf(Za,Ft),i}finally{F=t,ml=!1}}return null}var hn=[],yn=0,Hi=null,Yi=0,Ue=[],Be=0,Zt=null,ct=1,ft="";function Vt(e,t){hn[yn++]=Yi,hn[yn++]=Hi,Hi=e,Yi=t}function If(e,t,n){Ue[Be++]=ct,Ue[Be++]=ft,Ue[Be++]=Zt,Zt=e;var r=ct;e=ft;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var o=32-Je(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,ct=1<<32-Je(t)+i|n<<i|r,ft=o+e}else ct=1<<o|n<<i|r,ft=e}function os(e){e.return!==null&&(Vt(e,1),If(e,1,0))}function ls(e){for(;e===Hi;)Hi=hn[--yn],hn[yn]=null,Yi=hn[--yn],hn[yn]=null;for(;e===Zt;)Zt=Ue[--Be],Ue[Be]=null,ft=Ue[--Be],Ue[Be]=null,ct=Ue[--Be],Ue[Be]=null}var Ie=null,ze=null,Y=!1,Ze=null;function Mf(e,t){var n=Ve(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ru(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,ze=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:ct,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ve(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ie=e,ze=null,!0):!1;default:return!1}}function ta(e){return(e.mode&1)!==0&&(e.flags&128)===0}function na(e){if(Y){var t=ze;if(t){var n=t;if(!Ru(e,t)){if(ta(e))throw Error(k(418));t=Rt(n.nextSibling);var r=Ie;t&&Ru(e,t)?Mf(r,n):(e.flags=e.flags&-4097|2,Y=!1,Ie=e)}}else{if(ta(e))throw Error(k(418));e.flags=e.flags&-4097|2,Y=!1,Ie=e}}}function Tu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function li(e){if(e!==Ie)return!1;if(!Y)return Tu(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Jl(e.type,e.memoizedProps)),t&&(t=ze)){if(ta(e))throw $f(),Error(k(418));for(;t;)Mf(e,t),t=Rt(t.nextSibling)}if(Tu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Ie?Rt(e.stateNode.nextSibling):null;return!0}function $f(){for(var e=ze;e;)e=Rt(e.nextSibling)}function Rn(){ze=Ie=null,Y=!1}function as(e){Ze===null?Ze=[e]:Ze.push(e)}var hm=vt.ReactCurrentBatchConfig;function Xe(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Qi=At(null),Ki=null,vn=null,ss=null;function us(){ss=vn=Ki=null}function cs(e){var t=Qi.current;H(Qi),e._currentValue=t}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cn(e,t){Ki=e,ss=vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(ss!==e)if(e={context:e,memoizedValue:t,next:null},vn===null){if(Ki===null)throw Error(k(308));vn=e,Ki.dependencies={lanes:0,firstContext:e}}else vn=vn.next=e;return t}var Yt=null;function fs(e){Yt===null?Yt=[e]:Yt.push(e)}function Df(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,fs(t)):(n.next=i.next,i.next=n),t.interleaved=n,ht(e,r)}function ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xt=!1;function ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Af(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ht(e,n)}return i=r.interleaved,i===null?(t.next=t,fs(r)):(t.next=i.next,i.next=t),r.interleaved=t,ht(e,n)}function ki(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ja(e,n)}}function Ou(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xi(e,t,n,r){var i=e.updateQueue;xt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=s))}if(o!==null){var f=i.baseState;l=0,d=u=s=null,a=o;do{var y=a.lane,w=a.eventTime;if((r&y)===y){d!==null&&(d=d.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,v=a;switch(y=t,w=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){f=g.call(w,f,y);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,y=typeof g=="function"?g.call(w,f,y):g,y==null)break e;f=X({},f,y);break e;case 2:xt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[a]:y.push(a))}else w={eventTime:w,lane:y,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=w,s=f):d=d.next=w,l|=y;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;y=a,a=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(1);if(d===null&&(s=f),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);bt|=l,e.lanes=l,e.memoizedState=f}}function Lu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Ff=new $c.Component().refs;function ia(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ho={isMounted:function(e){return(e=e._reactInternals)?tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Lt(e),o=dt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Tt(e,o,i),t!==null&&(be(t,e,i,r),ki(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Lt(e),o=dt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Tt(e,o,i),t!==null&&(be(t,e,i,r),ki(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Lt(e),i=dt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Tt(e,i,r),t!==null&&(be(t,e,r,n),ki(t,e,r))}};function zu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!gr(n,r)||!gr(i,o):!0}function Uf(e,t,n){var r=!1,i=$t,o=t.contextType;return typeof o=="object"&&o!==null?o=He(o):(i=je(t)?Gt:we.current,r=t.contextTypes,o=(r=r!=null)?jn(e,i):$t),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ho,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Iu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ho.enqueueReplaceState(t,t.state,null)}function oa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ff,ds(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=He(o):(o=je(t)?Gt:we.current,i.context=jn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ia(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ho.enqueueReplaceState(i,i.state,null),Xi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===Ff&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function ai(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Mu(e){var t=e._init;return t(e._payload)}function Bf(e){function t(p,c){if(e){var h=p.deletions;h===null?(p.deletions=[c],p.flags|=16):h.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=zt(p,c),p.index=0,p.sibling=null,p}function o(p,c,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<c?(p.flags|=2,c):h):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,c,h,x){return c===null||c.tag!==6?(c=Sl(h,p.mode,x),c.return=p,c):(c=i(c,h),c.return=p,c)}function s(p,c,h,x){var E=h.type;return E===un?d(p,c,h.props.children,x,h.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===wt&&Mu(E)===c.type)?(x=i(c,h.props),x.ref=Qn(p,c,h),x.return=p,x):(x=ji(h.type,h.key,h.props,null,p.mode,x),x.ref=Qn(p,c,h),x.return=p,x)}function u(p,c,h,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=kl(h,p.mode,x),c.return=p,c):(c=i(c,h.children||[]),c.return=p,c)}function d(p,c,h,x,E){return c===null||c.tag!==7?(c=Xt(h,p.mode,x,E),c.return=p,c):(c=i(c,h),c.return=p,c)}function f(p,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Sl(""+c,p.mode,h),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Zr:return h=ji(c.type,c.key,c.props,null,p.mode,h),h.ref=Qn(p,null,c),h.return=p,h;case sn:return c=kl(c,p.mode,h),c.return=p,c;case wt:var x=c._init;return f(p,x(c._payload),h)}if(Jn(c)||Bn(c))return c=Xt(c,p.mode,h,null),c.return=p,c;ai(p,c)}return null}function y(p,c,h,x){var E=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:a(p,c,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Zr:return h.key===E?s(p,c,h,x):null;case sn:return h.key===E?u(p,c,h,x):null;case wt:return E=h._init,y(p,c,E(h._payload),x)}if(Jn(h)||Bn(h))return E!==null?null:d(p,c,h,x,null);ai(p,h)}return null}function w(p,c,h,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(h)||null,a(c,p,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Zr:return p=p.get(x.key===null?h:x.key)||null,s(c,p,x,E);case sn:return p=p.get(x.key===null?h:x.key)||null,u(c,p,x,E);case wt:var N=x._init;return w(p,c,h,N(x._payload),E)}if(Jn(x)||Bn(x))return p=p.get(h)||null,d(c,p,x,E,null);ai(c,x)}return null}function g(p,c,h,x){for(var E=null,N=null,C=c,T=c=0,A=null;C!==null&&T<h.length;T++){C.index>T?(A=C,C=null):A=C.sibling;var L=y(p,C,h[T],x);if(L===null){C===null&&(C=A);break}e&&C&&L.alternate===null&&t(p,C),c=o(L,c,T),N===null?E=L:N.sibling=L,N=L,C=A}if(T===h.length)return n(p,C),Y&&Vt(p,T),E;if(C===null){for(;T<h.length;T++)C=f(p,h[T],x),C!==null&&(c=o(C,c,T),N===null?E=C:N.sibling=C,N=C);return Y&&Vt(p,T),E}for(C=r(p,C);T<h.length;T++)A=w(C,p,T,h[T],x),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?T:A.key),c=o(A,c,T),N===null?E=A:N.sibling=A,N=A);return e&&C.forEach(function(Z){return t(p,Z)}),Y&&Vt(p,T),E}function v(p,c,h,x){var E=Bn(h);if(typeof E!="function")throw Error(k(150));if(h=E.call(h),h==null)throw Error(k(151));for(var N=E=null,C=c,T=c=0,A=null,L=h.next();C!==null&&!L.done;T++,L=h.next()){C.index>T?(A=C,C=null):A=C.sibling;var Z=y(p,C,L.value,x);if(Z===null){C===null&&(C=A);break}e&&C&&Z.alternate===null&&t(p,C),c=o(Z,c,T),N===null?E=Z:N.sibling=Z,N=Z,C=A}if(L.done)return n(p,C),Y&&Vt(p,T),E;if(C===null){for(;!L.done;T++,L=h.next())L=f(p,L.value,x),L!==null&&(c=o(L,c,T),N===null?E=L:N.sibling=L,N=L);return Y&&Vt(p,T),E}for(C=r(p,C);!L.done;T++,L=h.next())L=w(C,p,T,L.value,x),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?T:L.key),c=o(L,c,T),N===null?E=L:N.sibling=L,N=L);return e&&C.forEach(function(me){return t(p,me)}),Y&&Vt(p,T),E}function S(p,c,h,x){if(typeof h=="object"&&h!==null&&h.type===un&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Zr:e:{for(var E=h.key,N=c;N!==null;){if(N.key===E){if(E=h.type,E===un){if(N.tag===7){n(p,N.sibling),c=i(N,h.props.children),c.return=p,p=c;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===wt&&Mu(E)===N.type){n(p,N.sibling),c=i(N,h.props),c.ref=Qn(p,N,h),c.return=p,p=c;break e}n(p,N);break}else t(p,N);N=N.sibling}h.type===un?(c=Xt(h.props.children,p.mode,x,h.key),c.return=p,p=c):(x=ji(h.type,h.key,h.props,null,p.mode,x),x.ref=Qn(p,c,h),x.return=p,p=x)}return l(p);case sn:e:{for(N=h.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(p,c.sibling),c=i(c,h.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=kl(h,p.mode,x),c.return=p,p=c}return l(p);case wt:return N=h._init,S(p,c,N(h._payload),x)}if(Jn(h))return g(p,c,h,x);if(Bn(h))return v(p,c,h,x);ai(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,h),c.return=p,p=c):(n(p,c),c=Sl(h,p.mode,x),c.return=p,p=c),l(p)):n(p,c)}return S}var Tn=Bf(!0),Vf=Bf(!1),Vr={},lt=At(Vr),kr=At(Vr),Er=At(Vr);function Qt(e){if(e===Vr)throw Error(k(174));return e}function ps(e,t){switch(V(Er,t),V(kr,e),V(lt,Vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Dl(t,e)}H(lt),V(lt,t)}function On(){H(lt),H(kr),H(Er)}function Wf(e){Qt(Er.current);var t=Qt(lt.current),n=Dl(t,e.type);t!==n&&(V(kr,e),V(lt,n))}function ms(e){kr.current===e&&(H(lt),H(kr))}var Q=At(0);function Gi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hl=[];function hs(){for(var e=0;e<hl.length;e++)hl[e]._workInProgressVersionPrimary=null;hl.length=0}var Ei=vt.ReactCurrentDispatcher,yl=vt.ReactCurrentBatchConfig,Jt=0,K=null,ne=null,le=null,Zi=!1,ar=!1,Cr=0,ym=0;function he(){throw Error(k(321))}function ys(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function vs(e,t,n,r,i,o){if(Jt=o,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ei.current=e===null||e.memoizedState===null?xm:Sm,e=n(r,i),ar){o=0;do{if(ar=!1,Cr=0,25<=o)throw Error(k(301));o+=1,le=ne=null,t.updateQueue=null,Ei.current=km,e=n(r,i)}while(ar)}if(Ei.current=Ji,t=ne!==null&&ne.next!==null,Jt=0,le=ne=K=null,Zi=!1,t)throw Error(k(300));return e}function gs(){var e=Cr!==0;return Cr=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?K.memoizedState=le=e:le=le.next=e,le}function Ye(){if(ne===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=le===null?K.memoizedState:le.next;if(t!==null)le=t,ne=e;else{if(e===null)throw Error(k(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},le===null?K.memoizedState=le=e:le=le.next=e}return le}function Pr(e,t){return typeof t=="function"?t(e):t}function vl(e){var t=Ye(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ne,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var d=u.lane;if((Jt&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=f,l=r):s=s.next=f,K.lanes|=d,bt|=d}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,qe(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,K.lanes|=o,bt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gl(e){var t=Ye(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);qe(o,t.memoizedState)||(_e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Hf(){}function Yf(e,t){var n=K,r=Ye(),i=t(),o=!qe(r.memoizedState,i);if(o&&(r.memoizedState=i,_e=!0),r=r.queue,ws(Xf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,_r(9,Kf.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(k(349));Jt&30||Qf(n,t,i)}return i}function Qf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kf(e,t,n,r){t.value=n,t.getSnapshot=r,Gf(t)&&Zf(e)}function Xf(e,t,n){return n(function(){Gf(t)&&Zf(e)})}function Gf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function Zf(e){var t=ht(e,1);t!==null&&be(t,e,1,-1)}function $u(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pr,lastRenderedState:e},t.queue=e,e=e.dispatch=wm.bind(null,K,e),[t.memoizedState,e]}function _r(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jf(){return Ye().memoizedState}function Ci(e,t,n,r){var i=tt();K.flags|=e,i.memoizedState=_r(1|t,n,void 0,r===void 0?null:r)}function yo(e,t,n,r){var i=Ye();r=r===void 0?null:r;var o=void 0;if(ne!==null){var l=ne.memoizedState;if(o=l.destroy,r!==null&&ys(r,l.deps)){i.memoizedState=_r(t,n,o,r);return}}K.flags|=e,i.memoizedState=_r(1|t,n,o,r)}function Du(e,t){return Ci(8390656,8,e,t)}function ws(e,t){return yo(2048,8,e,t)}function bf(e,t){return yo(4,2,e,t)}function qf(e,t){return yo(4,4,e,t)}function ed(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function td(e,t,n){return n=n!=null?n.concat([e]):null,yo(4,4,ed.bind(null,t,e),n)}function xs(){}function nd(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ys(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rd(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ys(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function id(e,t,n){return Jt&21?(qe(n,t)||(n=af(),K.lanes|=n,bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function vm(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=yl.transition;yl.transition={};try{e(!1),t()}finally{F=n,yl.transition=r}}function od(){return Ye().memoizedState}function gm(e,t,n){var r=Lt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ld(e))ad(t,n);else if(n=Df(e,t,n,r),n!==null){var i=ke();be(n,e,r,i),sd(n,t,r)}}function wm(e,t,n){var r=Lt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ld(e))ad(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,qe(a,l)){var s=t.interleaved;s===null?(i.next=i,fs(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Df(e,t,i,r),n!==null&&(i=ke(),be(n,e,r,i),sd(n,t,r))}}function ld(e){var t=e.alternate;return e===K||t!==null&&t===K}function ad(e,t){ar=Zi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ja(e,n)}}var Ji={readContext:He,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},xm={readContext:He,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:Du,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ci(4194308,4,ed.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ci(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ci(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=gm.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:$u,useDebugValue:xs,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=$u(!1),t=e[0];return e=vm.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=tt();if(Y){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ae===null)throw Error(k(349));Jt&30||Qf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Du(Xf.bind(null,r,o,e),[e]),r.flags|=2048,_r(9,Kf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=tt(),t=ae.identifierPrefix;if(Y){var n=ft,r=ct;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ym++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sm={readContext:He,useCallback:nd,useContext:He,useEffect:ws,useImperativeHandle:td,useInsertionEffect:bf,useLayoutEffect:qf,useMemo:rd,useReducer:vl,useRef:Jf,useState:function(){return vl(Pr)},useDebugValue:xs,useDeferredValue:function(e){var t=Ye();return id(t,ne.memoizedState,e)},useTransition:function(){var e=vl(Pr)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:Hf,useSyncExternalStore:Yf,useId:od,unstable_isNewReconciler:!1},km={readContext:He,useCallback:nd,useContext:He,useEffect:ws,useImperativeHandle:td,useInsertionEffect:bf,useLayoutEffect:qf,useMemo:rd,useReducer:gl,useRef:Jf,useState:function(){return gl(Pr)},useDebugValue:xs,useDeferredValue:function(e){var t=Ye();return ne===null?t.memoizedState=e:id(t,ne.memoizedState,e)},useTransition:function(){var e=gl(Pr)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:Hf,useSyncExternalStore:Yf,useId:od,unstable_isNewReconciler:!1};function Ln(e,t){try{var n="",r=t;do n+=Zp(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function wl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function la(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Em=typeof WeakMap=="function"?WeakMap:Map;function ud(e,t,n){n=dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qi||(qi=!0,ya=r),la(e,t)},n}function cd(e,t,n){n=dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){la(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){la(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Au(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Em;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Dm.bind(null,e,t,n),t.then(e,e))}function Fu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Uu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dt(-1,1),t.tag=2,Tt(n,t,1))),n.lanes|=1),e)}var Cm=vt.ReactCurrentOwner,_e=!1;function Se(e,t,n,r){t.child=e===null?Vf(t,null,n,r):Tn(t,e.child,n,r)}function Bu(e,t,n,r,i){n=n.render;var o=t.ref;return Cn(t,i),r=vs(e,t,n,r,o,i),n=gs(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(Y&&n&&os(t),t.flags|=1,Se(e,t,r,i),t.child)}function Vu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!js(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,fd(e,t,o,r,i)):(e=ji(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:gr,n(l,r)&&e.ref===t.ref)return yt(e,t,i)}return t.flags|=1,e=zt(o,r),e.ref=t.ref,e.return=t,t.child=e}function fd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(gr(o,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,yt(e,t,i)}return aa(e,t,n,r,i)}function dd(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(wn,Le),Le|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(wn,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(wn,Le),Le|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(wn,Le),Le|=r;return Se(e,t,i,n),t.child}function pd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function aa(e,t,n,r,i){var o=je(n)?Gt:we.current;return o=jn(t,o),Cn(t,i),n=vs(e,t,n,r,o,i),r=gs(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(Y&&r&&os(t),t.flags|=1,Se(e,t,n,i),t.child)}function Wu(e,t,n,r,i){if(je(n)){var o=!0;Wi(t)}else o=!1;if(Cn(t,i),t.stateNode===null)Pi(e,t),Uf(t,n,r),oa(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=He(u):(u=je(n)?Gt:we.current,u=jn(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Iu(t,l,r,u),xt=!1;var y=t.memoizedState;l.state=y,Xi(t,r,l,i),s=t.memoizedState,a!==r||y!==s||Ne.current||xt?(typeof d=="function"&&(ia(t,n,d,r),s=t.memoizedState),(a=xt||zu(t,n,a,r,y,s,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Af(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Xe(t.type,a),l.props=u,f=t.pendingProps,y=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=He(s):(s=je(n)?Gt:we.current,s=jn(t,s));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||y!==s)&&Iu(t,l,r,s),xt=!1,y=t.memoizedState,l.state=y,Xi(t,r,l,i);var g=t.memoizedState;a!==f||y!==g||Ne.current||xt?(typeof w=="function"&&(ia(t,n,w,r),g=t.memoizedState),(u=xt||zu(t,n,u,r,y,g,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return sa(e,t,n,r,o,i)}function sa(e,t,n,r,i,o){pd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&ju(t,n,!1),yt(e,t,o);r=t.stateNode,Cm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Tn(t,e.child,null,o),t.child=Tn(t,null,a,o)):Se(e,t,a,o),t.memoizedState=r.state,i&&ju(t,n,!0),t.child}function md(e){var t=e.stateNode;t.pendingContext?Nu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nu(e,t.context,!1),ps(e,t.containerInfo)}function Hu(e,t,n,r,i){return Rn(),as(i),t.flags|=256,Se(e,t,n,r),t.child}var ua={dehydrated:null,treeContext:null,retryLane:0};function ca(e){return{baseLanes:e,cachePool:null,transitions:null}}function hd(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(Q,i&1),e===null)return na(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=wo(l,r,0,null),e=Xt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ca(n),t.memoizedState=ua,e):Ss(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Pm(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=zt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=zt(a,o):(o=Xt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ca(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ua,r}return o=e.child,e=o.sibling,r=zt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ss(e,t){return t=wo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function si(e,t,n,r){return r!==null&&as(r),Tn(t,e.child,null,n),e=Ss(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pm(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=wl(Error(k(422))),si(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=wo({mode:"visible",children:r.children},i,0,null),o=Xt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Tn(t,e.child,null,l),t.child.memoizedState=ca(l),t.memoizedState=ua,o);if(!(t.mode&1))return si(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=wl(o,r,void 0),si(e,t,l,r)}if(a=(l&e.childLanes)!==0,_e||a){if(r=ae,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ht(e,i),be(r,e,i,-1))}return Ns(),r=wl(Error(k(421))),si(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Am.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=Rt(i.nextSibling),Ie=t,Y=!0,Ze=null,e!==null&&(Ue[Be++]=ct,Ue[Be++]=ft,Ue[Be++]=Zt,ct=e.id,ft=e.overflow,Zt=t),t=Ss(t,r.children),t.flags|=4096,t)}function Yu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function xl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function yd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Se(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yu(e,n,t);else if(e.tag===19)Yu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Gi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Gi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xl(t,!0,n,null,o);break;case"together":xl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _m(e,t,n){switch(t.tag){case 3:md(t),Rn();break;case 5:Wf(t);break;case 1:je(t.type)&&Wi(t);break;case 4:ps(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(Qi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?hd(e,t,n):(V(Q,Q.current&1),e=yt(e,t,n),e!==null?e.sibling:null);V(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return yd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,dd(e,t,n)}return yt(e,t,n)}var vd,fa,gd,wd;vd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fa=function(){};gd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Qt(lt.current);var o=null;switch(n){case"input":i=zl(e,i),r=zl(e,r),o=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":i=$l(e,i),r=$l(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bi)}Al(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&W("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};wd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Kn(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nm(e,t,n){var r=t.pendingProps;switch(ls(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return je(t.type)&&Vi(),ye(t),null;case 3:return r=t.stateNode,On(),H(Ne),H(we),hs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(li(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(wa(Ze),Ze=null))),fa(e,t),ye(t),null;case 5:ms(t);var i=Qt(Er.current);if(n=t.type,e!==null&&t.stateNode!=null)gd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ye(t),null}if(e=Qt(lt.current),li(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[it]=t,r[Sr]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<qn.length;i++)W(qn[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":eu(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":nu(r,o),W("invalid",r)}Al(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&oi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&oi(r.textContent,a,e),i=["children",""+a]):fr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":Jr(r),tu(r,o,!0);break;case"textarea":Jr(r),ru(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Bi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[it]=t,e[Sr]=r,vd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Fl(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<qn.length;i++)W(qn[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":eu(e,r),i=zl(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),W("invalid",e);break;case"textarea":nu(e,r),i=$l(e,r),W("invalid",e);break;default:i=r}Al(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Xc(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Qc(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&dr(e,s):typeof s=="number"&&dr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(fr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&W("scroll",e):s!=null&&Ya(e,o,s,l))}switch(n){case"input":Jr(e),tu(e,r,!1);break;case"textarea":Jr(e),ru(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Mt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?xn(e,!!r.multiple,o,!1):r.defaultValue!=null&&xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Bi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)wd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Qt(Er.current),Qt(lt.current),li(t)){if(r=t.stateNode,n=t.memoizedProps,r[it]=t,(o=r.nodeValue!==n)&&(e=Ie,e!==null))switch(e.tag){case 3:oi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[it]=t,t.stateNode=r}return ye(t),null;case 13:if(H(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&ze!==null&&t.mode&1&&!(t.flags&128))$f(),Rn(),t.flags|=98560,o=!1;else if(o=li(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[it]=t}else Rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),o=!1}else Ze!==null&&(wa(Ze),Ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?re===0&&(re=3):Ns())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return On(),fa(e,t),e===null&&wr(t.stateNode.containerInfo),ye(t),null;case 10:return cs(t.type._context),ye(t),null;case 17:return je(t.type)&&Vi(),ye(t),null;case 19:if(H(Q),o=t.memoizedState,o===null)return ye(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Kn(o,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Gi(e),l!==null){for(t.flags|=128,Kn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&b()>zn&&(t.flags|=128,r=!0,Kn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Gi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Kn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Y)return ye(t),null}else 2*b()-o.renderingStartTime>zn&&n!==1073741824&&(t.flags|=128,r=!0,Kn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=b(),t.sibling=null,n=Q.current,V(Q,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return _s(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function jm(e,t){switch(ls(t),t.tag){case 1:return je(t.type)&&Vi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return On(),H(Ne),H(we),hs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ms(t),null;case 13:if(H(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Q),null;case 4:return On(),null;case 10:return cs(t.type._context),null;case 22:case 23:return _s(),null;case 24:return null;default:return null}}var ui=!1,ge=!1,Rm=typeof WeakSet=="function"?WeakSet:Set,R=null;function gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function da(e,t,n){try{n()}catch(r){G(e,t,r)}}var Qu=!1;function Tm(e,t){if(Gl=Ai,e=Ef(),is(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,d=0,f=e,y=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(a=l+i),f!==o||r!==0&&f.nodeType!==3||(s=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(w=f.firstChild)!==null;)y=f,f=w;for(;;){if(f===e)break t;if(y===n&&++u===i&&(a=l),y===o&&++d===r&&(s=l),(w=f.nextSibling)!==null)break;f=y,y=f.parentNode}f=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zl={focusedElem:e,selectionRange:n},Ai=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,S=g.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:Xe(t.type,v),S);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){G(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return g=Qu,Qu=!1,g}function sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&da(t,n,o)}i=i.next}while(i!==r)}}function vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function xd(e){var t=e.alternate;t!==null&&(e.alternate=null,xd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[it],delete t[Sr],delete t[ql],delete t[dm],delete t[pm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sd(e){return e.tag===5||e.tag===3||e.tag===4}function Ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ma(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bi));else if(r!==4&&(e=e.child,e!==null))for(ma(e,t,n),e=e.sibling;e!==null;)ma(e,t,n),e=e.sibling}function ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ha(e,t,n),e=e.sibling;e!==null;)ha(e,t,n),e=e.sibling}var ce=null,Ge=!1;function gt(e,t,n){for(n=n.child;n!==null;)kd(e,t,n),n=n.sibling}function kd(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(so,n)}catch{}switch(n.tag){case 5:ge||gn(n,t);case 6:var r=ce,i=Ge;ce=null,gt(e,t,n),ce=r,Ge=i,ce!==null&&(Ge?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(Ge?(e=ce,n=n.stateNode,e.nodeType===8?pl(e.parentNode,n):e.nodeType===1&&pl(e,n),yr(e)):pl(ce,n.stateNode));break;case 4:r=ce,i=Ge,ce=n.stateNode.containerInfo,Ge=!0,gt(e,t,n),ce=r,Ge=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&da(n,t,l),i=i.next}while(i!==r)}gt(e,t,n);break;case 1:if(!ge&&(gn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,t,a)}gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,gt(e,t,n),ge=r):gt(e,t,n);break;default:gt(e,t,n)}}function Xu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Rm),t.forEach(function(r){var i=Fm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ke(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ce=a.stateNode,Ge=!1;break e;case 3:ce=a.stateNode.containerInfo,Ge=!0;break e;case 4:ce=a.stateNode.containerInfo,Ge=!0;break e}a=a.return}if(ce===null)throw Error(k(160));kd(o,l,i),ce=null,Ge=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){G(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ed(t,e),t=t.sibling}function Ed(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(t,e),et(e),r&4){try{sr(3,e,e.return),vo(3,e)}catch(v){G(e,e.return,v)}try{sr(5,e,e.return)}catch(v){G(e,e.return,v)}}break;case 1:Ke(t,e),et(e),r&512&&n!==null&&gn(n,n.return);break;case 5:if(Ke(t,e),et(e),r&512&&n!==null&&gn(n,n.return),e.flags&32){var i=e.stateNode;try{dr(i,"")}catch(v){G(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Wc(i,o),Fl(a,l);var u=Fl(a,o);for(l=0;l<s.length;l+=2){var d=s[l],f=s[l+1];d==="style"?Xc(i,f):d==="dangerouslySetInnerHTML"?Qc(i,f):d==="children"?dr(i,f):Ya(i,d,f,u)}switch(a){case"input":Il(i,o);break;case"textarea":Hc(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?xn(i,!!o.multiple,w,!1):y!==!!o.multiple&&(o.defaultValue!=null?xn(i,!!o.multiple,o.defaultValue,!0):xn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Sr]=o}catch(v){G(e,e.return,v)}}break;case 6:if(Ke(t,e),et(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){G(e,e.return,v)}}break;case 3:if(Ke(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yr(t.containerInfo)}catch(v){G(e,e.return,v)}break;case 4:Ke(t,e),et(e);break;case 13:Ke(t,e),et(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Cs=b())),r&4&&Xu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||d,Ke(t,e),ge=u):Ke(t,e),et(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(R=e,d=e.child;d!==null;){for(f=R=d;R!==null;){switch(y=R,w=y.child,y.tag){case 0:case 11:case 14:case 15:sr(4,y,y.return);break;case 1:gn(y,y.return);var g=y.stateNode;if(typeof g.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){G(r,n,v)}}break;case 5:gn(y,y.return);break;case 22:if(y.memoizedState!==null){Zu(f);continue}}w!==null?(w.return=y,R=w):Zu(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,s=f.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Kc("display",l))}catch(v){G(e,e.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){G(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ke(t,e),et(e),r&4&&Xu(e);break;case 21:break;default:Ke(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sd(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(dr(i,""),r.flags&=-33);var o=Ku(e);ha(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Ku(e);ma(e,a,l);break;default:throw Error(k(161))}}catch(s){G(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Om(e,t,n){R=e,Cd(e)}function Cd(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||ui;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||ge;a=ui;var u=ge;if(ui=l,(ge=s)&&!u)for(R=i;R!==null;)l=R,s=l.child,l.tag===22&&l.memoizedState!==null?Ju(i):s!==null?(s.return=l,R=s):Ju(i);for(;o!==null;)R=o,Cd(o),o=o.sibling;R=i,ui=a,ge=u}Gu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):Gu(e)}}function Gu(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||vo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Lu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Lu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&yr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ge||t.flags&512&&pa(t)}catch(y){G(t,t.return,y)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Zu(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Ju(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vo(4,t)}catch(s){G(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){G(t,i,s)}}var o=t.return;try{pa(t)}catch(s){G(t,o,s)}break;case 5:var l=t.return;try{pa(t)}catch(s){G(t,l,s)}}}catch(s){G(t,t.return,s)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var Lm=Math.ceil,bi=vt.ReactCurrentDispatcher,ks=vt.ReactCurrentOwner,We=vt.ReactCurrentBatchConfig,M=0,ae=null,ee=null,de=0,Le=0,wn=At(0),re=0,Nr=null,bt=0,go=0,Es=0,ur=null,Pe=null,Cs=0,zn=1/0,st=null,qi=!1,ya=null,Ot=null,ci=!1,Ct=null,eo=0,cr=0,va=null,_i=-1,Ni=0;function ke(){return M&6?b():_i!==-1?_i:_i=b()}function Lt(e){return e.mode&1?M&2&&de!==0?de&-de:hm.transition!==null?(Ni===0&&(Ni=af()),Ni):(e=F,e!==0||(e=window.event,e=e===void 0?16:mf(e.type)),e):1}function be(e,t,n,r){if(50<cr)throw cr=0,va=null,Error(k(185));Fr(e,n,r),(!(M&2)||e!==ae)&&(e===ae&&(!(M&2)&&(go|=n),re===4&&kt(e,de)),Re(e,r),n===1&&M===0&&!(t.mode&1)&&(zn=b()+500,mo&&Ft()))}function Re(e,t){var n=e.callbackNode;h0(e,t);var r=Di(e,e===ae?de:0);if(r===0)n!==null&&lu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&lu(n),t===1)e.tag===0?mm(bu.bind(null,e)):zf(bu.bind(null,e)),cm(function(){!(M&6)&&Ft()}),n=null;else{switch(sf(r)){case 1:n=Za;break;case 4:n=of;break;case 16:n=$i;break;case 536870912:n=lf;break;default:n=$i}n=Ld(n,Pd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pd(e,t){if(_i=-1,Ni=0,M&6)throw Error(k(327));var n=e.callbackNode;if(Pn()&&e.callbackNode!==n)return null;var r=Di(e,e===ae?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=to(e,r);else{t=r;var i=M;M|=2;var o=Nd();(ae!==e||de!==t)&&(st=null,zn=b()+500,Kt(e,t));do try{Mm();break}catch(a){_d(e,a)}while(1);us(),bi.current=o,M=i,ee!==null?t=0:(ae=null,de=0,t=re)}if(t!==0){if(t===2&&(i=Hl(e),i!==0&&(r=i,t=ga(e,i))),t===1)throw n=Nr,Kt(e,0),kt(e,r),Re(e,b()),n;if(t===6)kt(e,r);else{if(i=e.current.alternate,!(r&30)&&!zm(i)&&(t=to(e,r),t===2&&(o=Hl(e),o!==0&&(r=o,t=ga(e,o))),t===1))throw n=Nr,Kt(e,0),kt(e,r),Re(e,b()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Wt(e,Pe,st);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=Cs+500-b(),10<t)){if(Di(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=bl(Wt.bind(null,e,Pe,st),t);break}Wt(e,Pe,st);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Je(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=b()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lm(r/1960))-r,10<r){e.timeoutHandle=bl(Wt.bind(null,e,Pe,st),r);break}Wt(e,Pe,st);break;case 5:Wt(e,Pe,st);break;default:throw Error(k(329))}}}return Re(e,b()),e.callbackNode===n?Pd.bind(null,e):null}function ga(e,t){var n=ur;return e.current.memoizedState.isDehydrated&&(Kt(e,t).flags|=256),e=to(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&wa(t)),e}function wa(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function zm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!qe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~Es,t&=~go,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function bu(e){if(M&6)throw Error(k(327));Pn();var t=Di(e,0);if(!(t&1))return Re(e,b()),null;var n=to(e,t);if(e.tag!==0&&n===2){var r=Hl(e);r!==0&&(t=r,n=ga(e,r))}if(n===1)throw n=Nr,Kt(e,0),kt(e,t),Re(e,b()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wt(e,Pe,st),Re(e,b()),null}function Ps(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(zn=b()+500,mo&&Ft())}}function qt(e){Ct!==null&&Ct.tag===0&&!(M&6)&&Pn();var t=M;M|=1;var n=We.transition,r=F;try{if(We.transition=null,F=1,e)return e()}finally{F=r,We.transition=n,M=t,!(M&6)&&Ft()}}function _s(){Le=wn.current,H(wn)}function Kt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,um(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(ls(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vi();break;case 3:On(),H(Ne),H(we),hs();break;case 5:ms(r);break;case 4:On();break;case 13:H(Q);break;case 19:H(Q);break;case 10:cs(r.type._context);break;case 22:case 23:_s()}n=n.return}if(ae=e,ee=e=zt(e.current,null),de=Le=t,re=0,Nr=null,Es=go=bt=0,Pe=ur=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Yt=null}return e}function _d(e,t){do{var n=ee;try{if(us(),Ei.current=Ji,Zi){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Zi=!1}if(Jt=0,le=ne=K=null,ar=!1,Cr=0,ks.current=null,n===null||n.return===null){re=1,Nr=t,ee=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=de,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var y=d.alternate;y?(d.updateQueue=y.updateQueue,d.memoizedState=y.memoizedState,d.lanes=y.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Fu(l);if(w!==null){w.flags&=-257,Uu(w,l,a,o,t),w.mode&1&&Au(o,u,t),t=w,s=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(s),t.updateQueue=v}else g.add(s);break e}else{if(!(t&1)){Au(o,u,t),Ns();break e}s=Error(k(426))}}else if(Y&&a.mode&1){var S=Fu(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Uu(S,l,a,o,t),as(Ln(s,a));break e}}o=s=Ln(s,a),re!==4&&(re=2),ur===null?ur=[o]:ur.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=ud(o,s,t);Ou(o,p);break e;case 1:a=s;var c=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ot===null||!Ot.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=cd(o,a,t);Ou(o,x);break e}}o=o.return}while(o!==null)}Rd(n)}catch(E){t=E,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function Nd(){var e=bi.current;return bi.current=Ji,e===null?Ji:e}function Ns(){(re===0||re===3||re===2)&&(re=4),ae===null||!(bt&268435455)&&!(go&268435455)||kt(ae,de)}function to(e,t){var n=M;M|=2;var r=Nd();(ae!==e||de!==t)&&(st=null,Kt(e,t));do try{Im();break}catch(i){_d(e,i)}while(1);if(us(),M=n,bi.current=r,ee!==null)throw Error(k(261));return ae=null,de=0,re}function Im(){for(;ee!==null;)jd(ee)}function Mm(){for(;ee!==null&&!l0();)jd(ee)}function jd(e){var t=Od(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?Rd(e):ee=t,ks.current=null}function Rd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jm(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(n=Nm(n,t,Le),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);re===0&&(re=5)}function Wt(e,t,n){var r=F,i=We.transition;try{We.transition=null,F=1,$m(e,t,n,r)}finally{We.transition=i,F=r}return null}function $m(e,t,n,r){do Pn();while(Ct!==null);if(M&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(y0(e,o),e===ae&&(ee=ae=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ci||(ci=!0,Ld($i,function(){return Pn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=We.transition,We.transition=null;var l=F;F=1;var a=M;M|=4,ks.current=null,Tm(e,n),Ed(n,e),nm(Zl),Ai=!!Gl,Zl=Gl=null,e.current=n,Om(n),a0(),M=a,F=l,We.transition=o}else e.current=n;if(ci&&(ci=!1,Ct=e,eo=i),o=e.pendingLanes,o===0&&(Ot=null),c0(n.stateNode),Re(e,b()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qi)throw qi=!1,e=ya,ya=null,e;return eo&1&&e.tag!==0&&Pn(),o=e.pendingLanes,o&1?e===va?cr++:(cr=0,va=e):cr=0,Ft(),null}function Pn(){if(Ct!==null){var e=sf(eo),t=We.transition,n=F;try{if(We.transition=null,F=16>e?16:e,Ct===null)var r=!1;else{if(e=Ct,Ct=null,eo=0,M&6)throw Error(k(331));var i=M;for(M|=4,R=e.current;R!==null;){var o=R,l=o.child;if(R.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(R=u;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:sr(8,d,o)}var f=d.child;if(f!==null)f.return=d,R=f;else for(;R!==null;){d=R;var y=d.sibling,w=d.return;if(xd(d),d===u){R=null;break}if(y!==null){y.return=w,R=y;break}R=w}}}var g=o.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}R=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,R=l;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:sr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,R=p;break e}R=o.return}}var c=e.current;for(R=c;R!==null;){l=R;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,R=h;else e:for(l=c;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vo(9,a)}}catch(E){G(a,a.return,E)}if(a===l){R=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,R=x;break e}R=a.return}}if(M=i,Ft(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(so,e)}catch{}r=!0}return r}finally{F=n,We.transition=t}}return!1}function qu(e,t,n){t=Ln(n,t),t=ud(e,t,1),e=Tt(e,t,1),t=ke(),e!==null&&(Fr(e,1,t),Re(e,t))}function G(e,t,n){if(e.tag===3)qu(e,e,n);else for(;t!==null;){if(t.tag===3){qu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=Ln(n,e),e=cd(t,e,1),t=Tt(t,e,1),e=ke(),t!==null&&(Fr(t,1,e),Re(t,e));break}}t=t.return}}function Dm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(de&n)===n&&(re===4||re===3&&(de&130023424)===de&&500>b()-Cs?Kt(e,0):Es|=n),Re(e,t)}function Td(e,t){t===0&&(e.mode&1?(t=ei,ei<<=1,!(ei&130023424)&&(ei=4194304)):t=1);var n=ke();e=ht(e,t),e!==null&&(Fr(e,t,n),Re(e,n))}function Am(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Td(e,n)}function Fm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Td(e,n)}var Od;Od=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,_m(e,t,n);_e=!!(e.flags&131072)}else _e=!1,Y&&t.flags&1048576&&If(t,Yi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pi(e,t),e=t.pendingProps;var i=jn(t,we.current);Cn(t,n),i=vs(null,t,r,e,i,n);var o=gs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(o=!0,Wi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ds(t),i.updater=ho,t.stateNode=i,i._reactInternals=t,oa(t,r,e,n),t=sa(null,t,r,!0,o,n)):(t.tag=0,Y&&o&&os(t),Se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Bm(r),e=Xe(r,e),i){case 0:t=aa(null,t,r,e,n);break e;case 1:t=Wu(null,t,r,e,n);break e;case 11:t=Bu(null,t,r,e,n);break e;case 14:t=Vu(null,t,r,Xe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),aa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Wu(e,t,r,i,n);case 3:e:{if(md(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Af(e,t),Xi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ln(Error(k(423)),t),t=Hu(e,t,r,n,i);break e}else if(r!==i){i=Ln(Error(k(424)),t),t=Hu(e,t,r,n,i);break e}else for(ze=Rt(t.stateNode.containerInfo.firstChild),Ie=t,Y=!0,Ze=null,n=Vf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rn(),r===i){t=yt(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return Wf(t),e===null&&na(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Jl(r,i)?l=null:o!==null&&Jl(r,o)&&(t.flags|=32),pd(e,t),Se(e,t,l,n),t.child;case 6:return e===null&&na(t),null;case 13:return hd(e,t,n);case 4:return ps(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tn(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Bu(e,t,r,i,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,V(Qi,r._currentValue),r._currentValue=l,o!==null)if(qe(o.value,l)){if(o.children===i.children&&!Ne.current){t=yt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=dt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ra(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ra(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Cn(t,n),i=He(i),r=r(i),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,i=Xe(r,t.pendingProps),i=Xe(r.type,i),Vu(e,t,r,i,n);case 15:return fd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Pi(e,t),t.tag=1,je(r)?(e=!0,Wi(t)):e=!1,Cn(t,n),Uf(t,r,i),oa(t,r,i,n),sa(null,t,r,!0,e,n);case 19:return yd(e,t,n);case 22:return dd(e,t,n)}throw Error(k(156,t.tag))};function Ld(e,t){return rf(e,t)}function Um(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(e,t,n,r){return new Um(e,t,n,r)}function js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bm(e){if(typeof e=="function")return js(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ka)return 11;if(e===Xa)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=Ve(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ji(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")js(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case un:return Xt(n.children,i,o,t);case Qa:l=8,i|=8;break;case Rl:return e=Ve(12,n,t,i|2),e.elementType=Rl,e.lanes=o,e;case Tl:return e=Ve(13,n,t,i),e.elementType=Tl,e.lanes=o,e;case Ol:return e=Ve(19,n,t,i),e.elementType=Ol,e.lanes=o,e;case Uc:return wo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ac:l=10;break e;case Fc:l=9;break e;case Ka:l=11;break e;case Xa:l=14;break e;case wt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ve(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Xt(e,t,n,r){return e=Ve(7,e,r,t),e.lanes=n,e}function wo(e,t,n,r){return e=Ve(22,e,r,t),e.elementType=Uc,e.lanes=n,e.stateNode={isHidden:!1},e}function Sl(e,t,n){return e=Ve(6,e,null,t),e.lanes=n,e}function kl(e,t,n){return t=Ve(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nl(0),this.expirationTimes=nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rs(e,t,n,r,i,o,l,a,s){return e=new Vm(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ve(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ds(o),e}function Wm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zd(e){if(!e)return $t;e=e._reactInternals;e:{if(tn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(je(n))return Lf(e,n,t)}return t}function Id(e,t,n,r,i,o,l,a,s){return e=Rs(n,r,!0,e,i,o,l,a,s),e.context=zd(null),n=e.current,r=ke(),i=Lt(n),o=dt(r,i),o.callback=t??null,Tt(n,o,i),e.current.lanes=i,Fr(e,i,r),Re(e,r),e}function xo(e,t,n,r){var i=t.current,o=ke(),l=Lt(i);return n=zd(n),t.context===null?t.context=n:t.pendingContext=n,t=dt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Tt(i,t,l),e!==null&&(be(e,i,l,o),ki(e,i,l)),l}function no(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ec(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ts(e,t){ec(e,t),(e=e.alternate)&&ec(e,t)}function Hm(){return null}var Md=typeof reportError=="function"?reportError:function(e){console.error(e)};function Os(e){this._internalRoot=e}So.prototype.render=Os.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));xo(e,t,null,null)};So.prototype.unmount=Os.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qt(function(){xo(null,e,null,null)}),t[mt]=null}};function So(e){this._internalRoot=e}So.prototype.unstable_scheduleHydration=function(e){if(e){var t=ff();e={blockedOn:null,target:e,priority:t};for(var n=0;n<St.length&&t!==0&&t<St[n].priority;n++);St.splice(n,0,e),n===0&&pf(e)}};function Ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tc(){}function Ym(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=no(l);o.call(u)}}var l=Id(t,r,e,0,null,!1,!1,"",tc);return e._reactRootContainer=l,e[mt]=l.current,wr(e.nodeType===8?e.parentNode:e),qt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=no(s);a.call(u)}}var s=Rs(e,0,!1,null,null,!1,!1,"",tc);return e._reactRootContainer=s,e[mt]=s.current,wr(e.nodeType===8?e.parentNode:e),qt(function(){xo(t,s,n,r)}),s}function Eo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=no(l);a.call(s)}}xo(t,l,e,i)}else l=Ym(n,t,e,i,r);return no(l)}uf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=bn(t.pendingLanes);n!==0&&(Ja(t,n|1),Re(t,b()),!(M&6)&&(zn=b()+500,Ft()))}break;case 13:qt(function(){var r=ht(e,1);if(r!==null){var i=ke();be(r,e,1,i)}}),Ts(e,1)}};ba=function(e){if(e.tag===13){var t=ht(e,134217728);if(t!==null){var n=ke();be(t,e,134217728,n)}Ts(e,134217728)}};cf=function(e){if(e.tag===13){var t=Lt(e),n=ht(e,t);if(n!==null){var r=ke();be(n,e,t,r)}Ts(e,t)}};ff=function(){return F};df=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Bl=function(e,t,n){switch(t){case"input":if(Il(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=po(r);if(!i)throw Error(k(90));Vc(r),Il(r,i)}}}break;case"textarea":Hc(e,n);break;case"select":t=n.value,t!=null&&xn(e,!!n.multiple,t,!1)}};Jc=Ps;bc=qt;var Qm={usingClientEntryPoint:!1,Events:[Br,pn,po,Gc,Zc,Ps]},Xn={findFiberByHostInstance:Ht,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Km={bundleType:Xn.bundleType,version:Xn.version,rendererPackageName:Xn.rendererPackageName,rendererConfig:Xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tf(e),e===null?null:e.stateNode},findFiberByHostInstance:Xn.findFiberByHostInstance||Hm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fi.isDisabled&&fi.supportsFiber)try{so=fi.inject(Km),ot=fi}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qm;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ls(t))throw Error(k(200));return Wm(e,t,null,n)};De.createRoot=function(e,t){if(!Ls(e))throw Error(k(299));var n=!1,r="",i=Md;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Rs(e,1,!1,null,null,n,!1,r,i),e[mt]=t.current,wr(e.nodeType===8?e.parentNode:e),new Os(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=tf(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return qt(e)};De.hydrate=function(e,t,n){if(!ko(t))throw Error(k(200));return Eo(null,e,t,!0,n)};De.hydrateRoot=function(e,t,n){if(!Ls(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Md;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Id(t,null,e,1,n??null,i,!1,o,l),e[mt]=t.current,wr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new So(t)};De.render=function(e,t,n){if(!ko(t))throw Error(k(200));return Eo(null,e,t,!1,n)};De.unmountComponentAtNode=function(e){if(!ko(e))throw Error(k(40));return e._reactRootContainer?(qt(function(){Eo(null,null,e,!1,function(){e._reactRootContainer=null,e[mt]=null})}),!0):!1};De.unstable_batchedUpdates=Ps;De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ko(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Eo(e,t,n,!1,r)};De.version="18.2.0-next-9e3b772b8-20220608";function $d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($d)}catch(e){console.error(e)}}$d(),zc.exports=De;var Xm=zc.exports,nc=Xm;Nl.createRoot=nc.createRoot,Nl.hydrateRoot=nc.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jr(){return jr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jr.apply(this,arguments)}var Pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pt||(Pt={}));const rc="popstate";function Gm(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return xa("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ro(i)}return Jm(t,n,null,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function zs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Zm(){return Math.random().toString(36).substr(2,8)}function ic(e,t){return{usr:e.state,key:e.key,idx:t}}function xa(e,t,n,r){return n===void 0&&(n=null),jr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?An(t):t,{state:n,key:t&&t.key||r||Zm()})}function ro(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function An(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Jm(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Pt.Pop,s=null,u=d();u==null&&(u=0,l.replaceState(jr({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function f(){a=Pt.Pop;let S=d(),p=S==null?null:S-u;u=S,s&&s({action:a,location:v.location,delta:p})}function y(S,p){a=Pt.Push;let c=xa(v.location,S,p);n&&n(c,S),u=d()+1;let h=ic(c,u),x=v.createHref(c);try{l.pushState(h,"",x)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(x)}o&&s&&s({action:a,location:v.location,delta:1})}function w(S,p){a=Pt.Replace;let c=xa(v.location,S,p);n&&n(c,S),u=d();let h=ic(c,u),x=v.createHref(c);l.replaceState(h,"",x),o&&s&&s({action:a,location:v.location,delta:0})}function g(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof S=="string"?S:ro(S);return te(p,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,p)}let v={get action(){return a},get location(){return e(i,l)},listen(S){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(rc,f),s=S,()=>{i.removeEventListener(rc,f),s=null}},createHref(S){return t(i,S)},createURL:g,encodeLocation(S){let p=g(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:y,replace:w,go(S){return l.go(S)}};return v}var oc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(oc||(oc={}));function bm(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?An(t):t,i=Is(r.pathname||"/",n);if(i==null)return null;let o=Dd(e);qm(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=sh(o[a],fh(i));return l}function Dd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(te(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=It([r,s.relativePath]),d=n.concat(s);o.children&&o.children.length>0&&(te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Dd(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:lh(u,o.index),routesMeta:d})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of Ad(o.path))i(o,l,s)}),t}function Ad(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Ad(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function qm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ah(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const eh=/^:\w+$/,th=3,nh=2,rh=1,ih=10,oh=-2,lc=e=>e==="*";function lh(e,t){let n=e.split("/"),r=n.length;return n.some(lc)&&(r+=oh),t&&(r+=nh),n.filter(i=>!lc(i)).reduce((i,o)=>i+(eh.test(o)?th:o===""?rh:ih),r)}function ah(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function sh(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=uh({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let f=a.route;o.push({params:r,pathname:It([i,d.pathname]),pathnameBase:yh(It([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=It([i,d.pathnameBase]))}return o}function uh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ch(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:y,isOptional:w}=d;if(y==="*"){let v=a[f]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const g=a[f];return w&&!g?u[y]=void 0:u[y]=dh(g||"",y),u},{}),pathname:o,pathnameBase:l,pattern:e}}function ch(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),zs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function fh(e){try{return decodeURI(e)}catch(t){return zs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function dh(e,t){try{return decodeURIComponent(e)}catch(n){return zs(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Is(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ph(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?An(e):e;return{pathname:n?n.startsWith("/")?n:mh(n,t):t,search:vh(r),hash:gh(i)}}function mh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function El(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Fd(e,t){let n=hh(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ud(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=An(e):(i=jr({},e),te(!i.pathname||!i.pathname.includes("?"),El("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),El("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),El("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let f=t.length-1;if(!r&&l.startsWith("..")){let y=l.split("/");for(;y[0]==="..";)y.shift(),f-=1;i.pathname=y.join("/")}a=f>=0?t[f]:"/"}let s=ph(i,a),u=l&&l!=="/"&&l.endsWith("/"),d=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const It=e=>e.join("/").replace(/\/\/+/g,"/"),yh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),vh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function wh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bd=["post","put","patch","delete"];new Set(Bd);const xh=["get",...Bd];new Set(xh);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rr(){return Rr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rr.apply(this,arguments)}const Ms=P.createContext(null),Sh=P.createContext(null),nn=P.createContext(null),Co=P.createContext(null),rn=P.createContext({outlet:null,matches:[],isDataRoute:!1}),Vd=P.createContext(null);function kh(e,t){let{relative:n}=t===void 0?{}:t;Wr()||te(!1);let{basename:r,navigator:i}=P.useContext(nn),{hash:o,pathname:l,search:a}=Hd(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:It([r,l])),i.createHref({pathname:s,search:a,hash:o})}function Wr(){return P.useContext(Co)!=null}function Po(){return Wr()||te(!1),P.useContext(Co).location}function Wd(e){P.useContext(nn).static||P.useLayoutEffect(e)}function Eh(){let{isDataRoute:e}=P.useContext(rn);return e?$h():Ch()}function Ch(){Wr()||te(!1);let e=P.useContext(Ms),{basename:t,future:n,navigator:r}=P.useContext(nn),{matches:i}=P.useContext(rn),{pathname:o}=Po(),l=JSON.stringify(Fd(i,n.v7_relativeSplatPath)),a=P.useRef(!1);return Wd(()=>{a.current=!0}),P.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=Ud(u,JSON.parse(l),o,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:It([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,l,o,e])}function Hd(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=P.useContext(nn),{matches:i}=P.useContext(rn),{pathname:o}=Po(),l=JSON.stringify(Fd(i,r.v7_relativeSplatPath));return P.useMemo(()=>Ud(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function Ph(e,t){return _h(e,t)}function _h(e,t,n,r){Wr()||te(!1);let{navigator:i}=P.useContext(nn),{matches:o}=P.useContext(rn),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=Po(),d;if(t){var f;let S=typeof t=="string"?An(t):t;s==="/"||(f=S.pathname)!=null&&f.startsWith(s)||te(!1),d=S}else d=u;let y=d.pathname||"/",w=s==="/"?y:y.slice(s.length)||"/",g=bm(e,{pathname:w}),v=Oh(g&&g.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:It([s,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?s:It([s,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&v?P.createElement(Co.Provider,{value:{location:Rr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Pt.Pop}},v):v}function Nh(){let e=Mh(),t=wh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:i},n):null,o)}const jh=P.createElement(Nh,null);class Rh extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?P.createElement(rn.Provider,{value:this.props.routeContext},P.createElement(Vd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Th(e){let{routeContext:t,match:n,children:r}=e,i=P.useContext(Ms);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(rn.Provider,{value:t},r)}function Oh(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=l.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id]));d>=0||te(!1),l=l.slice(0,Math.min(l.length,d+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let f=l[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:y,errors:w}=n,g=f.route.loader&&y[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||g){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,f,y)=>{let w,g=!1,v=null,S=null;n&&(w=a&&f.route.id?a[f.route.id]:void 0,v=f.route.errorElement||jh,s&&(u<0&&y===0?(Dh("route-fallback",!1),g=!0,S=null):u===y&&(g=!0,S=f.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,y+1)),c=()=>{let h;return w?h=v:g?h=S:f.route.Component?h=P.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=d,P.createElement(Th,{match:f,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||y===0)?P.createElement(Rh,{location:n.location,revalidation:n.revalidation,component:v,error:w,children:c(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):c()},null)}var Yd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Yd||{}),io=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(io||{});function Lh(e){let t=P.useContext(Ms);return t||te(!1),t}function zh(e){let t=P.useContext(Sh);return t||te(!1),t}function Ih(e){let t=P.useContext(rn);return t||te(!1),t}function Qd(e){let t=Ih(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function Mh(){var e;let t=P.useContext(Vd),n=zh(io.UseRouteError),r=Qd(io.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function $h(){let{router:e}=Lh(Yd.UseNavigateStable),t=Qd(io.UseNavigateStable),n=P.useRef(!1);return Wd(()=>{n.current=!0}),P.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Rr({fromRouteId:t},o)))},[e,t])}const ac={};function Dh(e,t,n){!t&&!ac[e]&&(ac[e]=!0)}function er(e){te(!1)}function Ah(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Pt.Pop,navigator:o,static:l=!1,future:a}=e;Wr()&&te(!1);let s=t.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:s,navigator:o,static:l,future:Rr({v7_relativeSplatPath:!1},a)}),[s,a,o,l]);typeof r=="string"&&(r=An(r));let{pathname:d="/",search:f="",hash:y="",state:w=null,key:g="default"}=r,v=P.useMemo(()=>{let S=Is(d,s);return S==null?null:{location:{pathname:S,search:f,hash:y,state:w,key:g},navigationType:i}},[s,d,f,y,w,g,i]);return v==null?null:P.createElement(nn.Provider,{value:u},P.createElement(Co.Provider,{children:n,value:v}))}function Fh(e){let{children:t,location:n}=e;return Ph(Sa(t),n)}new Promise(()=>{});function Sa(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(r,i)=>{if(!P.isValidElement(r))return;let o=[...t,i];if(r.type===P.Fragment){n.push.apply(n,Sa(r.props.children,o));return}r.type!==er&&te(!1),!r.props.index||!r.props.children||te(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Sa(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ka(){return ka=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ka.apply(this,arguments)}function Uh(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Bh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Vh(e,t){return e.button===0&&(!t||t==="_self")&&!Bh(e)}const Wh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Hh="startTransition",sc=_l[Hh];function Yh(e){let{basename:t,children:n,future:r,window:i}=e,o=P.useRef();o.current==null&&(o.current=Gm({window:i,v5Compat:!0}));let l=o.current,[a,s]=P.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},d=P.useCallback(f=>{u&&sc?sc(()=>s(f)):s(f)},[s,u]);return P.useLayoutEffect(()=>l.listen(d),[l,d]),P.createElement(Ah,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const Qh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Kh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xe=P.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:u,preventScrollReset:d,unstable_viewTransition:f}=t,y=Uh(t,Wh),{basename:w}=P.useContext(nn),g,v=!1;if(typeof u=="string"&&Kh.test(u)&&(g=u,Qh))try{let h=new URL(window.location.href),x=u.startsWith("//")?new URL(h.protocol+u):new URL(u),E=Is(x.pathname,w);x.origin===h.origin&&E!=null?u=E+x.search+x.hash:v=!0}catch{}let S=kh(u,{relative:i}),p=Xh(u,{replace:l,state:a,target:s,preventScrollReset:d,relative:i,unstable_viewTransition:f});function c(h){r&&r(h),h.defaultPrevented||p(h)}return P.createElement("a",ka({},y,{href:g||S,onClick:v||o?r:c,ref:n,target:s}))});var uc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(uc||(uc={}));var cc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(cc||(cc={}));function Xh(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a}=t===void 0?{}:t,s=Eh(),u=Po(),d=Hd(e,{relative:l});return P.useCallback(f=>{if(Vh(f,n)){f.preventDefault();let y=r!==void 0?r:ro(u)===ro(d);s(e,{replace:y,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a})}},[u,s,d,r,i,n,e,o,l,a])}const Gh=()=>m.jsx("div",{id:"wrap-header",className:"wrap-header",children:m.jsxs("div",{id:"header",className:"header",children:[m.jsx("div",{id:"logo",className:"logo",children:m.jsx("h1",{children:m.jsxs("a",{className:"current",href:"/",children:["Infinite Game ",m.jsx("span",{})]})})}),m.jsxs("div",{className:"nav",children:[m.jsx("div",{className:"social",children:m.jsxs("ul",{children:[m.jsx("li",{children:m.jsx("a",{href:"https://www.facebook.com/Amanita.Design",className:"facebook",children:"Facebook"})}),m.jsx("li",{children:m.jsx("a",{href:"https://www.instagram.com/amanita_design_",className:"instagram",children:"Instagram"})}),m.jsx("li",{children:m.jsx("a",{href:"https://twitter.com/Amanita_Design",className:"twitter",children:"Twitter"})}),m.jsx("li",{children:m.jsx("a",{href:"https://discordapp.com/invite/Gr4Ec6K",className:"discord",children:"Discord"})}),m.jsx("li",{children:m.jsx("a",{href:"https://www.youtube.com/c/amanitadesign/featured",className:"youtube",children:"Youtube"})})]})}),m.jsx("div",{className:"mainmenu",children:m.jsxs("ul",{children:[m.jsx("li",{className:"current",children:m.jsx(xe,{to:"/",className:"menu01",children:m.jsx("span",{children:"Home"})})}),m.jsx("li",{children:m.jsx(xe,{to:"/books",className:"menu02",children:m.jsx("span",{children:"Books"})})}),m.jsx("li",{children:m.jsx(xe,{to:"/games",className:"menu03",children:m.jsx("span",{children:"Games"})})})]})})]})]})}),Zh="/infinite_games/assets/Animation-2db3fdae.mp4",Jh=()=>m.jsxs("div",{className:"main",children:[m.jsx("div",{className:"overlay"}),m.jsx("video",{src:Zh,autoPlay:!0,loop:!0,muted:!0}),m.jsxs("div",{className:"content",children:[m.jsx("h1",{children:"Welcome"}),m.jsx("h4",{children:"Rapid Flip Project."})]})]});const bh="/infinite_games/assets/gaming_boy-ca52a74c.jpg",qh="/infinite_games/assets/games_children-bac7fd19.jpg",ey="/infinite_games/assets/games_yang1-47cd73b9.jpg",ty="/infinite_games/assets/games_young_2-b2d2bf20.jpg",ny="/infinite_games/assets/community-5f5f6d1d.jpg";function ry(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function iy(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var oy=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(iy(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=ry(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ve="-ms-",oo="-moz-",$="-webkit-",Kd="comm",$s="rule",Ds="decl",ly="@import",Xd="@keyframes",ay="@layer",sy=Math.abs,_o=String.fromCharCode,uy=Object.assign;function cy(e,t){return fe(e,0)^45?(((t<<2^fe(e,0))<<2^fe(e,1))<<2^fe(e,2))<<2^fe(e,3):0}function Gd(e){return e.trim()}function fy(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function Ea(e,t){return e.indexOf(t)}function fe(e,t){return e.charCodeAt(t)|0}function Tr(e,t,n){return e.slice(t,n)}function nt(e){return e.length}function As(e){return e.length}function di(e,t){return t.push(e),e}function dy(e,t){return e.map(t).join("")}var No=1,In=1,Zd=0,Te=0,q=0,Fn="";function jo(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:No,column:In,length:l,return:""}}function Gn(e,t){return uy(jo("",null,null,"",null,null,0),e,{length:-e.length},t)}function py(){return q}function my(){return q=Te>0?fe(Fn,--Te):0,In--,q===10&&(In=1,No--),q}function Me(){return q=Te<Zd?fe(Fn,Te++):0,In++,q===10&&(In=1,No++),q}function at(){return fe(Fn,Te)}function Ri(){return Te}function Hr(e,t){return Tr(Fn,e,t)}function Or(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Jd(e){return No=In=1,Zd=nt(Fn=e),Te=0,[]}function bd(e){return Fn="",e}function Ti(e){return Gd(Hr(Te-1,Ca(e===91?e+2:e===40?e+1:e)))}function hy(e){for(;(q=at())&&q<33;)Me();return Or(e)>2||Or(q)>3?"":" "}function yy(e,t){for(;--t&&Me()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return Hr(e,Ri()+(t<6&&at()==32&&Me()==32))}function Ca(e){for(;Me();)switch(q){case e:return Te;case 34:case 39:e!==34&&e!==39&&Ca(q);break;case 40:e===41&&Ca(e);break;case 92:Me();break}return Te}function vy(e,t){for(;Me()&&e+q!==47+10;)if(e+q===42+42&&at()===47)break;return"/*"+Hr(t,Te-1)+"*"+_o(e===47?e:Me())}function gy(e){for(;!Or(at());)Me();return Hr(e,Te)}function wy(e){return bd(Oi("",null,null,null,[""],e=Jd(e),0,[0],e))}function Oi(e,t,n,r,i,o,l,a,s){for(var u=0,d=0,f=l,y=0,w=0,g=0,v=1,S=1,p=1,c=0,h="",x=i,E=o,N=r,C=h;S;)switch(g=c,c=Me()){case 40:if(g!=108&&fe(C,f-1)==58){Ea(C+=D(Ti(c),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:C+=Ti(c);break;case 9:case 10:case 13:case 32:C+=hy(g);break;case 92:C+=yy(Ri()-1,7);continue;case 47:switch(at()){case 42:case 47:di(xy(vy(Me(),Ri()),t,n),s);break;default:C+="/"}break;case 123*v:a[u++]=nt(C)*p;case 125*v:case 59:case 0:switch(c){case 0:case 125:S=0;case 59+d:p==-1&&(C=D(C,/\f/g,"")),w>0&&nt(C)-f&&di(w>32?dc(C+";",r,n,f-1):dc(D(C," ","")+";",r,n,f-2),s);break;case 59:C+=";";default:if(di(N=fc(C,t,n,u,d,i,a,h,x=[],E=[],f),o),c===123)if(d===0)Oi(C,t,N,N,x,o,f,a,E);else switch(y===99&&fe(C,3)===110?100:y){case 100:case 108:case 109:case 115:Oi(e,N,N,r&&di(fc(e,N,N,0,0,i,a,h,i,x=[],f),E),i,E,f,a,r?x:E);break;default:Oi(C,N,N,N,[""],E,0,a,E)}}u=d=w=0,v=p=1,h=C="",f=l;break;case 58:f=1+nt(C),w=g;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&my()==125)continue}switch(C+=_o(c),c*v){case 38:p=d>0?1:(C+="\f",-1);break;case 44:a[u++]=(nt(C)-1)*p,p=1;break;case 64:at()===45&&(C+=Ti(Me())),y=at(),d=f=nt(h=C+=gy(Ri())),c++;break;case 45:g===45&&nt(C)==2&&(v=0)}}return o}function fc(e,t,n,r,i,o,l,a,s,u,d){for(var f=i-1,y=i===0?o:[""],w=As(y),g=0,v=0,S=0;g<r;++g)for(var p=0,c=Tr(e,f+1,f=sy(v=l[g])),h=e;p<w;++p)(h=Gd(v>0?y[p]+" "+c:D(c,/&\f/g,y[p])))&&(s[S++]=h);return jo(e,t,n,i===0?$s:a,s,u,d)}function xy(e,t,n){return jo(e,t,n,Kd,_o(py()),Tr(e,2,-2),0)}function dc(e,t,n,r){return jo(e,t,n,Ds,Tr(e,0,r),Tr(e,r+1,-1),r)}function _n(e,t){for(var n="",r=As(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Sy(e,t,n,r){switch(e.type){case ay:if(e.children.length)break;case ly:case Ds:return e.return=e.return||e.value;case Kd:return"";case Xd:return e.return=e.value+"{"+_n(e.children,r)+"}";case $s:e.value=e.props.join(",")}return nt(n=_n(e.children,r))?e.return=e.value+"{"+n+"}":""}function ky(e){var t=As(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function Ey(e){return function(t){t.root||(t=t.return)&&e(t)}}function Cy(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Py=function(t,n,r){for(var i=0,o=0;i=o,o=at(),i===38&&o===12&&(n[r]=1),!Or(o);)Me();return Hr(t,Te)},_y=function(t,n){var r=-1,i=44;do switch(Or(i)){case 0:i===38&&at()===12&&(n[r]=1),t[r]+=Py(Te-1,n,r);break;case 2:t[r]+=Ti(i);break;case 4:if(i===44){t[++r]=at()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=_o(i)}while(i=Me());return t},Ny=function(t,n){return bd(_y(Jd(t),n))},pc=new WeakMap,jy=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!pc.get(r))&&!i){pc.set(t,!0);for(var o=[],l=Ny(n,o),a=r.props,s=0,u=0;s<l.length;s++)for(var d=0;d<a.length;d++,u++)t.props[u]=o[s]?l[s].replace(/&\f/g,a[d]):a[d]+" "+l[s]}}},Ry=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function qd(e,t){switch(cy(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+oo+e+ve+e+e;case 6828:case 4268:return $+e+ve+e+e;case 6165:return $+e+ve+"flex-"+e+e;case 5187:return $+e+D(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+ve+"flex-$1$2")+e;case 5443:return $+e+ve+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return $+e+ve+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+ve+D(e,"shrink","negative")+e;case 5292:return $+e+ve+D(e,"basis","preferred-size")+e;case 6060:return $+"box-"+D(e,"-grow","")+$+e+ve+D(e,"grow","positive")+e;case 4554:return $+D(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nt(e)-1-t>6)switch(fe(e,t+1)){case 109:if(fe(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+oo+(fe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ea(e,"stretch")?qd(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(fe(e,t+1)!==115)break;case 6444:switch(fe(e,nt(e)-3-(~Ea(e,"!important")&&10))){case 107:return D(e,":",":"+$)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(fe(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+ve+"$2box$3")+e}break;case 5936:switch(fe(e,t+11)){case 114:return $+e+ve+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+ve+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+ve+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+ve+e+e}return e}var Ty=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Ds:t.return=qd(t.value,t.length);break;case Xd:return _n([Gn(t,{value:D(t.value,"@","@"+$)})],i);case $s:if(t.length)return dy(t.props,function(o){switch(fy(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return _n([Gn(t,{props:[D(o,/:(read-\w+)/,":"+oo+"$1")]})],i);case"::placeholder":return _n([Gn(t,{props:[D(o,/:(plac\w+)/,":"+$+"input-$1")]}),Gn(t,{props:[D(o,/:(plac\w+)/,":"+oo+"$1")]}),Gn(t,{props:[D(o,/:(plac\w+)/,ve+"input-$1")]})],i)}return""})}},Oy=[Ty],Ly=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var S=v.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||Oy,o={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var S=v.getAttribute("data-emotion").split(" "),p=1;p<S.length;p++)o[S[p]]=!0;a.push(v)});var s,u=[jy,Ry];{var d,f=[Sy,Ey(function(v){d.insert(v)})],y=ky(u.concat(i,f)),w=function(S){return _n(wy(S),y)};s=function(S,p,c,h){d=c,w(S?S+"{"+p.styles+"}":p.styles),h&&(g.inserted[p.name]=!0)}}var g={key:n,sheet:new oy({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return g.sheet.hydrate(a),g},ep={exports:{}},U={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se=typeof Symbol=="function"&&Symbol.for,Fs=se?Symbol.for("react.element"):60103,Us=se?Symbol.for("react.portal"):60106,Ro=se?Symbol.for("react.fragment"):60107,To=se?Symbol.for("react.strict_mode"):60108,Oo=se?Symbol.for("react.profiler"):60114,Lo=se?Symbol.for("react.provider"):60109,zo=se?Symbol.for("react.context"):60110,Bs=se?Symbol.for("react.async_mode"):60111,Io=se?Symbol.for("react.concurrent_mode"):60111,Mo=se?Symbol.for("react.forward_ref"):60112,$o=se?Symbol.for("react.suspense"):60113,zy=se?Symbol.for("react.suspense_list"):60120,Do=se?Symbol.for("react.memo"):60115,Ao=se?Symbol.for("react.lazy"):60116,Iy=se?Symbol.for("react.block"):60121,My=se?Symbol.for("react.fundamental"):60117,$y=se?Symbol.for("react.responder"):60118,Dy=se?Symbol.for("react.scope"):60119;function Fe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Fs:switch(e=e.type,e){case Bs:case Io:case Ro:case Oo:case To:case $o:return e;default:switch(e=e&&e.$$typeof,e){case zo:case Mo:case Ao:case Do:case Lo:return e;default:return t}}case Us:return t}}}function tp(e){return Fe(e)===Io}U.AsyncMode=Bs;U.ConcurrentMode=Io;U.ContextConsumer=zo;U.ContextProvider=Lo;U.Element=Fs;U.ForwardRef=Mo;U.Fragment=Ro;U.Lazy=Ao;U.Memo=Do;U.Portal=Us;U.Profiler=Oo;U.StrictMode=To;U.Suspense=$o;U.isAsyncMode=function(e){return tp(e)||Fe(e)===Bs};U.isConcurrentMode=tp;U.isContextConsumer=function(e){return Fe(e)===zo};U.isContextProvider=function(e){return Fe(e)===Lo};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fs};U.isForwardRef=function(e){return Fe(e)===Mo};U.isFragment=function(e){return Fe(e)===Ro};U.isLazy=function(e){return Fe(e)===Ao};U.isMemo=function(e){return Fe(e)===Do};U.isPortal=function(e){return Fe(e)===Us};U.isProfiler=function(e){return Fe(e)===Oo};U.isStrictMode=function(e){return Fe(e)===To};U.isSuspense=function(e){return Fe(e)===$o};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ro||e===Io||e===Oo||e===To||e===$o||e===zy||typeof e=="object"&&e!==null&&(e.$$typeof===Ao||e.$$typeof===Do||e.$$typeof===Lo||e.$$typeof===zo||e.$$typeof===Mo||e.$$typeof===My||e.$$typeof===$y||e.$$typeof===Dy||e.$$typeof===Iy)};U.typeOf=Fe;ep.exports=U;var Ay=ep.exports,np=Ay,Fy={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Uy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},rp={};rp[np.ForwardRef]=Fy;rp[np.Memo]=Uy;var By=!0;function ip(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Vs=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||By===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},op=function(t,n,r){Vs(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function Vy(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Wy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Hy=/[A-Z]|^ms/g,Yy=/_EMO_([^_]+?)_([^]*?)_EMO_/g,lp=function(t){return t.charCodeAt(1)===45},mc=function(t){return t!=null&&typeof t!="boolean"},Cl=Cy(function(e){return lp(e)?e:e.replace(Hy,"-$&").toLowerCase()}),hc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Yy,function(r,i,o){return rt={name:i,styles:o,next:rt},i})}return Wy[t]!==1&&!lp(t)&&typeof n=="number"&&n!==0?n+"px":n};function Lr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return rt={name:n.name,styles:n.styles,next:rt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)rt={name:r.name,styles:r.styles,next:rt},r=r.next;var i=n.styles+";";return i}return Qy(e,t,n)}case"function":{if(e!==void 0){var o=rt,l=n(e);return rt=o,Lr(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function Qy(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Lr(e,t,n[i])+";";else for(var o in n){var l=n[o];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=o+"{"+t[l]+"}":mc(l)&&(r+=Cl(o)+":"+hc(o,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)mc(l[a])&&(r+=Cl(o)+":"+hc(o,l[a])+";");else{var s=Lr(e,t,l);switch(o){case"animation":case"animationName":{r+=Cl(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var yc=/label:\s*([^\s;\n{]+)\s*(;|$)/g,rt,Ws=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";rt=void 0;var l=t[0];l==null||l.raw===void 0?(i=!1,o+=Lr(r,n,l)):o+=l[0];for(var a=1;a<t.length;a++)o+=Lr(r,n,t[a]),i&&(o+=l[a]);yc.lastIndex=0;for(var s="",u;(u=yc.exec(o))!==null;)s+="-"+u[1];var d=Vy(o)+s;return{name:d,styles:o,next:rt}},Ky=function(t){return t()},Xy=_l["useInsertionEffect"]?_l["useInsertionEffect"]:!1,ap=Xy||Ky,Hs={}.hasOwnProperty,sp=P.createContext(typeof HTMLElement<"u"?Ly({key:"css"}):null);sp.Provider;var up=function(t){return P.forwardRef(function(n,r){var i=P.useContext(sp);return t(n,i,r)})},cp=P.createContext({}),Pa="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Gy=function(t,n){var r={};for(var i in n)Hs.call(n,i)&&(r[i]=n[i]);return r[Pa]=t,r},Zy=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Vs(n,r,i),ap(function(){return op(n,r,i)}),null},Jy=up(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Pa],o=[r],l="";typeof e.className=="string"?l=ip(t.registered,o,e.className):e.className!=null&&(l=e.className+" ");var a=Ws(o,void 0,P.useContext(cp));l+=t.key+"-"+a.name;var s={};for(var u in e)Hs.call(e,u)&&u!=="css"&&u!==Pa&&(s[u]=e[u]);return s.ref=n,s.className=l,P.createElement(P.Fragment,null,P.createElement(Zy,{cache:t,serialized:a,isStringTag:typeof i=="string"}),P.createElement(i,s))}),by=Jy,qy=m.Fragment;function oe(e,t,n){return Hs.call(t,"css")?m.jsx(by,Gy(e,t),n):m.jsx(e,t,n)}function fp(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ws(t)}var _=function(){var t=fp.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},ev=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var o=t[r];if(o!=null){var l=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))l=e(o);else{l="";for(var a in o)o[a]&&a&&(l&&(l+=" "),l+=a)}break}default:l=o}l&&(i&&(i+=" "),i+=l)}}return i};function tv(e,t,n){var r=[],i=ip(e,r,n);return r.length<2?n:i+t(r)}var nv=function(t){var n=t.cache,r=t.serializedArr;return ap(function(){for(var i=0;i<r.length;i++)op(n,r[i],!1)}),null},Pl=up(function(e,t){var n=!1,r=[],i=function(){for(var u=arguments.length,d=new Array(u),f=0;f<u;f++)d[f]=arguments[f];var y=Ws(d,t.registered);return r.push(y),Vs(t,y,!1),t.key+"-"+y.name},o=function(){for(var u=arguments.length,d=new Array(u),f=0;f<u;f++)d[f]=arguments[f];return tv(t.registered,i,ev(d))},l={css:i,cx:o,theme:P.useContext(cp)},a=e.children(l);return n=!0,P.createElement(P.Fragment,null,P.createElement(nv,{cache:t,serializedArr:r}),a)}),rv=Object.defineProperty,iv=(e,t,n)=>t in e?rv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pi=(e,t,n)=>(iv(e,typeof t!="symbol"?t+"":t,n),n),_a=new Map,mi=new WeakMap,vc=0,ov=void 0;function lv(e){return e?(mi.has(e)||(vc+=1,mi.set(e,vc.toString())),mi.get(e)):"0"}function av(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?lv(e.root):e[t]}`).toString()}function sv(e){let t=av(e),n=_a.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver(l=>{l.forEach(a=>{var s;const u=a.isIntersecting&&i.some(d=>a.intersectionRatio>=d);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(s=r.get(a.target))==null||s.forEach(d=>{d(u,a)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},_a.set(t,n)}return n}function dp(e,t,n={},r=ov){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:i,observer:o,elements:l}=sv(n);let a=l.get(e)||[];return l.has(e)||l.set(e,a),a.push(t),o.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(l.delete(e),o.unobserve(e)),l.size===0&&(o.disconnect(),_a.delete(i))}}function uv(e){return typeof e.children!="function"}var gc=class extends P.Component{constructor(e){super(e),pi(this,"node",null),pi(this,"_unobserveCb",null),pi(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),pi(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),uv(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:o}=this.props;this._unobserveCb=dp(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:w,entry:g}=this.state;return e({inView:w,entry:g,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:i,rootMargin:o,onChange:l,skip:a,trackVisibility:s,delay:u,initialInView:d,fallbackInView:f,...y}=this.props;return P.createElement(t||"div",{ref:this.handleNode,...y},e)}};function pp({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:o,skip:l,initialInView:a,fallbackInView:s,onChange:u}={}){var d;const[f,y]=P.useState(null),w=P.useRef(),[g,v]=P.useState({inView:!!a,entry:void 0});w.current=u,P.useEffect(()=>{if(l||!f)return;let h;return h=dp(f,(x,E)=>{v({inView:x,entry:E}),w.current&&w.current(x,E),E.isIntersecting&&o&&h&&(h(),h=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{h&&h()}},[Array.isArray(e)?e.toString():e,f,i,r,o,l,n,s,t]);const S=(d=g.entry)==null?void 0:d.target,p=P.useRef();!f&&S&&!o&&!l&&p.current!==S&&(p.current=S,v({inView:!!a,entry:void 0}));const c=[y,g.inView,g.entry];return c.ref=c[0],c.inView=c[1],c.entry=c[2],c}var mp={exports:{}},B={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ys=Symbol.for("react.element"),Qs=Symbol.for("react.portal"),Fo=Symbol.for("react.fragment"),Uo=Symbol.for("react.strict_mode"),Bo=Symbol.for("react.profiler"),Vo=Symbol.for("react.provider"),Wo=Symbol.for("react.context"),cv=Symbol.for("react.server_context"),Ho=Symbol.for("react.forward_ref"),Yo=Symbol.for("react.suspense"),Qo=Symbol.for("react.suspense_list"),Ko=Symbol.for("react.memo"),Xo=Symbol.for("react.lazy"),fv=Symbol.for("react.offscreen"),hp;hp=Symbol.for("react.module.reference");function Qe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ys:switch(e=e.type,e){case Fo:case Bo:case Uo:case Yo:case Qo:return e;default:switch(e=e&&e.$$typeof,e){case cv:case Wo:case Ho:case Xo:case Ko:case Vo:return e;default:return t}}case Qs:return t}}}B.ContextConsumer=Wo;B.ContextProvider=Vo;B.Element=Ys;B.ForwardRef=Ho;B.Fragment=Fo;B.Lazy=Xo;B.Memo=Ko;B.Portal=Qs;B.Profiler=Bo;B.StrictMode=Uo;B.Suspense=Yo;B.SuspenseList=Qo;B.isAsyncMode=function(){return!1};B.isConcurrentMode=function(){return!1};B.isContextConsumer=function(e){return Qe(e)===Wo};B.isContextProvider=function(e){return Qe(e)===Vo};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ys};B.isForwardRef=function(e){return Qe(e)===Ho};B.isFragment=function(e){return Qe(e)===Fo};B.isLazy=function(e){return Qe(e)===Xo};B.isMemo=function(e){return Qe(e)===Ko};B.isPortal=function(e){return Qe(e)===Qs};B.isProfiler=function(e){return Qe(e)===Bo};B.isStrictMode=function(e){return Qe(e)===Uo};B.isSuspense=function(e){return Qe(e)===Yo};B.isSuspenseList=function(e){return Qe(e)===Qo};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Fo||e===Bo||e===Uo||e===Yo||e===Qo||e===fv||typeof e=="object"&&e!==null&&(e.$$typeof===Xo||e.$$typeof===Ko||e.$$typeof===Vo||e.$$typeof===Wo||e.$$typeof===Ho||e.$$typeof===hp||e.getModuleId!==void 0)};B.typeOf=Qe;mp.exports=B;var dv=mp.exports;_`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;_`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;_`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;_`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;_`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;_`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const pv=_`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,mv=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,hv=_`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,yv=_`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vv=_`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ks=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,gv=_`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,wv=_`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xv=_`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Sv=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,kv=_`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ev=_`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Cv=_`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Pv({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Ks,iterationCount:i=1}){return fp`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function _v(e){return e==null}function Nv(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function yp(e,t){return n=>n?e():t()}function zr(e){return yp(e,()=>null)}function Na(e){return zr(()=>({opacity:0}))(e)}const vp=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:o=0,keyframes:l=Ks,triggerOnce:a=!1,className:s,style:u,childClassName:d,childStyle:f,children:y,onVisibilityChange:w}=e,g=P.useMemo(()=>Pv({keyframes:l,duration:i}),[i,l]);return _v(y)?null:Nv(y)?oe(Rv,{...e,animationStyles:g,children:String(y)}):dv.isFragment(y)?oe(gp,{...e,animationStyles:g}):oe(qy,{children:P.Children.map(y,(v,S)=>{if(!P.isValidElement(v))return null;const p=r+(t?S*i*n:0);switch(v.type){case"ol":case"ul":return oe(Pl,{children:({cx:c})=>oe(v.type,{...v.props,className:c(s,v.props.className),style:Object.assign({},u,v.props.style),children:oe(vp,{...e,children:v.props.children})})});case"li":return oe(gc,{threshold:o,triggerOnce:a,onChange:w,children:({inView:c,ref:h})=>oe(Pl,{children:({cx:x})=>oe(v.type,{...v.props,ref:h,className:x(d,v.props.className),css:zr(()=>g)(c),style:Object.assign({},f,v.props.style,Na(!c),{animationDelay:p+"ms"})})})});default:return oe(gc,{threshold:o,triggerOnce:a,onChange:w,children:({inView:c,ref:h})=>oe("div",{ref:h,className:s,css:zr(()=>g)(c),style:Object.assign({},u,Na(!c),{animationDelay:p+"ms"}),children:oe(Pl,{children:({cx:x})=>oe(v.type,{...v.props,className:x(d,v.props.className),style:Object.assign({},f,v.props.style)})})})})}})})},jv={display:"inline-block",whiteSpace:"pre"},Rv=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:o=1e3,fraction:l=0,triggerOnce:a=!1,className:s,style:u,children:d,onVisibilityChange:f}=e,{ref:y,inView:w}=pp({triggerOnce:a,threshold:l,onChange:f});return yp(()=>oe("div",{ref:y,className:s,style:Object.assign({},u,jv),children:d.split("").map((g,v)=>oe("span",{css:zr(()=>t)(w),style:{animationDelay:i+v*o*r+"ms"},children:g},v))}),()=>oe(gp,{...e,children:d}))(n)},gp=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:o,children:l,onVisibilityChange:a}=e,{ref:s,inView:u}=pp({triggerOnce:r,threshold:n,onChange:a});return oe("div",{ref:s,className:i,css:zr(()=>t)(u),style:Object.assign({},o,Na(!u)),children:l})};_`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;_`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;_`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;_`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;_`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Tv=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Ov=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Lv=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,zv=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Iv=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Mv=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,$v=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Dv=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Av=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Fv=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Uv=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Bv=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Vv=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Wv(e,t,n){switch(n){case"bottom-left":return t?Ov:mv;case"bottom-right":return t?Lv:hv;case"down":return e?t?Iv:vv:t?zv:yv;case"left":return e?t?$v:gv:t?Mv:Ks;case"right":return e?t?Av:xv:t?Dv:wv;case"top-left":return t?Fv:Sv;case"top-right":return t?Uv:kv;case"up":return e?t?Vv:Cv:t?Bv:Ev;default:return t?Tv:pv}}const hi=e=>{const{big:t=!1,direction:n,reverse:r=!1,...i}=e,o=P.useMemo(()=>Wv(t,r,n),[t,n,r]);return oe(vp,{keyframes:o,...i})};_`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;_`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;_`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;_`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;_`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;_`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;_`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;_`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const Hv=()=>m.jsxs("div",{className:"container marketing",children:[m.jsx("hr",{className:"featurette-divider"}),m.jsx(hi,{delay:1e3,cascade:!0,damping:.1,children:m.jsxs("div",{className:"row featurette",children:[m.jsx("div",{className:"col-md-6 order-md-2",children:m.jsx("img",{src:bh,alt:"Image",className:"img-fluid"})}),m.jsx("div",{className:"col-md-6 order-md-1",children:m.jsxs("div",{className:"featurette-content",children:[m.jsx("h2",{className:"featurette-heading fw-normal lh-1",children:"About Us"}),m.jsx("p",{className:"lead problem",children:"Making Games with"}),m.jsx("p",{className:"lead problem",children:"Enlightment"}),m.jsx("p",{className:"lead problem",children:"Encouragement"}),m.jsx("p",{className:"lead problem",children:"Enterainment"}),m.jsx("p",{className:"lead problem",children:"Confident"})]})})]})}),m.jsx("hr",{className:"featurette-divider"}),m.jsx(hi,{delay:1e3,cascade:!0,damping:.1,children:m.jsxs("div",{className:"row featurette",children:[m.jsxs("div",{className:"col-md-7 order-md-2",children:[m.jsxs("h2",{className:"featurette-heading fw-normal lh-1",children:["The Problem"," "]}),m.jsx("p",{className:"lead problem",children:"99% of kid"}),m.jsx("p",{className:"lead problem",children:"once played games"}),m.jsx("br",{}),m.jsx("p",{className:"lead problem",children:"60% of parents"}),m.jsx("p",{className:"lead problem",children:"are concerned"})]}),m.jsx("div",{className:"col-md-5 order-md-1",children:m.jsx("img",{src:qh,alt:"Image",className:"img-fluid"})})]})}),m.jsx("hr",{className:"featurette-divider"}),m.jsx(hi,{delay:1e3,cascade:!0,damping:.1,children:m.jsxs("div",{className:"row featurette",children:[m.jsxs("div",{className:"col-md-4",children:[m.jsxs("h2",{className:"featurette-heading fw-normal lh-1",children:["Our Solution"," "]}),m.jsx("p",{className:"lead problem",children:"Replacing"}),m.jsx("p",{className:"lead problem",children:"Negative Contents"}),m.jsx("p",{className:"lead problem",children:"with Positive"}),m.jsx("br",{}),m.jsx("p",{className:"lead problem",children:"Learn with fun"})]}),m.jsx("div",{className:"col-md-4",children:m.jsx("img",{src:ty,alt:"Image",className:"img-fluid"})}),m.jsx("div",{className:"col-md-4",children:m.jsx("img",{src:ey,alt:"Image",className:"img-fluid"})})]})}),m.jsx("hr",{className:"featurette-divider"}),m.jsx(hi,{delay:1e3,cascade:!0,damping:.1,children:m.jsxs("div",{className:"row featurette",children:[m.jsxs("div",{className:"col-md-5",children:[m.jsxs("h2",{className:"featurette-heading fw-normal lh-1",children:["Community Iteration"," "]}),m.jsx("p",{className:"lead problem",children:"Developing games with kids, parents, school teachers and psychologists to iterate the best gameplay functions"})]}),m.jsx("div",{className:"col-md-7",children:m.jsx("img",{src:ny,alt:"Image",className:"img-fluid"})})]})}),m.jsx("hr",{className:"featurette-divider"})]});var wp={exports:{}},Yv="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Qv=Yv,Kv=Qv;function xp(){}function Sp(){}Sp.resetWarningCache=xp;var Xv=function(){function e(r,i,o,l,a,s){if(s!==Kv){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Sp,resetWarningCache:xp};return n.PropTypes=n,n};wp.exports=Xv();var Gv=wp.exports;const ue=lo(Gv);var Zv=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var r,i,o;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(i=r;i--!==0;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(o=Object.keys(t),r=o.length,r!==Object.keys(n).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return!1;for(i=r;i--!==0;){var l=o[i];if(!e(t[l],n[l]))return!1}return!0}return t!==t&&n!==n};const Jv=lo(Zv);var ja={exports:{}},kp;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/kp=function(){var e={},t={};return e.on=function(n,r){var i={name:n,handler:r};return t[n]=t[n]||[],t[n].unshift(i),i},e.off=function(n){var r=t[n.name].indexOf(n);r!==-1&&t[n.name].splice(r,1)},e.trigger=function(n,r){var i=t[n],o;if(i)for(o=i.length;o--;)i[o].handler(r)},e};var bv=kp,Ra={exports:{}},qv=function(t,n,r){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");typeof n=="function"&&(r=n,n={}),n=n||{},r=r||function(){},o.type=n.type||"text/javascript",o.charset=n.charset||"utf8",o.async="async"in n?!!n.async:!0,o.src=t,n.attrs&&e1(o,n.attrs),n.text&&(o.text=""+n.text);var l="onload"in o?wc:t1;l(o,r),o.onload||wc(o,r),i.appendChild(o)};function e1(e,t){for(var n in t)e.setAttribute(n,t[n])}function wc(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function t1(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=qv,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}t.default=function(o){var l=new Promise(function(a){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){a(window.YT);return}else{var s=window.location.protocol==="http:"?"http:":"https:";(0,r.default)(s+"//www.youtube.com/iframe_api",function(d){d&&o.trigger("error",d)})}var u=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){u&&u(),a(window.YT)}});return l},e.exports=t.default})(Ra,Ra.exports);var n1=Ra.exports,Ta={exports:{}},Oa={exports:{}},La={exports:{}},Ir=1e3,Mr=Ir*60,$r=Mr*60,Dr=$r*24,r1=Dr*365.25,i1=function(e,t){t=t||{};var n=typeof e;if(n==="string"&&e.length>0)return o1(e);if(n==="number"&&isNaN(e)===!1)return t.long?a1(e):l1(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};function o1(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]),r=(t[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*r1;case"days":case"day":case"d":return n*Dr;case"hours":case"hour":case"hrs":case"hr":case"h":return n*$r;case"minutes":case"minute":case"mins":case"min":case"m":return n*Mr;case"seconds":case"second":case"secs":case"sec":case"s":return n*Ir;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function l1(e){return e>=Dr?Math.round(e/Dr)+"d":e>=$r?Math.round(e/$r)+"h":e>=Mr?Math.round(e/Mr)+"m":e>=Ir?Math.round(e/Ir)+"s":e+"ms"}function a1(e){return yi(e,Dr,"day")||yi(e,$r,"hour")||yi(e,Mr,"minute")||yi(e,Ir,"second")||e+" ms"}function yi(e,t,n){if(!(e<t))return e<t*1.5?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}(function(e,t){t=e.exports=i.debug=i.default=i,t.coerce=s,t.disable=l,t.enable=o,t.enabled=a,t.humanize=i1,t.names=[],t.skips=[],t.formatters={};var n;function r(u){var d=0,f;for(f in u)d=(d<<5)-d+u.charCodeAt(f),d|=0;return t.colors[Math.abs(d)%t.colors.length]}function i(u){function d(){if(d.enabled){var f=d,y=+new Date,w=y-(n||y);f.diff=w,f.prev=n,f.curr=y,n=y;for(var g=new Array(arguments.length),v=0;v<g.length;v++)g[v]=arguments[v];g[0]=t.coerce(g[0]),typeof g[0]!="string"&&g.unshift("%O");var S=0;g[0]=g[0].replace(/%([a-zA-Z%])/g,function(c,h){if(c==="%%")return c;S++;var x=t.formatters[h];if(typeof x=="function"){var E=g[S];c=x.call(f,E),g.splice(S,1),S--}return c}),t.formatArgs.call(f,g);var p=d.log||t.log||console.log.bind(console);p.apply(f,g)}}return d.namespace=u,d.enabled=t.enabled(u),d.useColors=t.useColors(),d.color=r(u),typeof t.init=="function"&&t.init(d),d}function o(u){t.save(u),t.names=[],t.skips=[];for(var d=(typeof u=="string"?u:"").split(/[\s,]+/),f=d.length,y=0;y<f;y++)d[y]&&(u=d[y].replace(/\*/g,".*?"),u[0]==="-"?t.skips.push(new RegExp("^"+u.substr(1)+"$")):t.names.push(new RegExp("^"+u+"$")))}function l(){t.enable("")}function a(u){var d,f;for(d=0,f=t.skips.length;d<f;d++)if(t.skips[d].test(u))return!1;for(d=0,f=t.names.length;d<f;d++)if(t.names[d].test(u))return!0;return!1}function s(u){return u instanceof Error?u.stack||u.message:u}})(La,La.exports);var s1=La.exports;(function(e,t){t=e.exports=s1,t.log=i,t.formatArgs=r,t.save=o,t.load=l,t.useColors=n,t.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:a(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function n(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}t.formatters.j=function(s){try{return JSON.stringify(s)}catch(u){return"[UnexpectedJSONParseError]: "+u.message}};function r(s){var u=this.useColors;if(s[0]=(u?"%c":"")+this.namespace+(u?" %c":" ")+s[0]+(u?"%c ":" ")+"+"+t.humanize(this.diff),!!u){var d="color: "+this.color;s.splice(1,0,d,"color: inherit");var f=0,y=0;s[0].replace(/%[a-zA-Z%]/g,function(w){w!=="%%"&&(f++,w==="%c"&&(y=f))}),s.splice(y,0,d)}}function i(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function o(s){try{s==null?t.storage.removeItem("debug"):t.storage.debug=s}catch{}}function l(){var s;try{s=t.storage.debug}catch{}return!s&&typeof process<"u"&&"env"in process&&(s={}.DEBUG),s}t.enable(l());function a(){try{return window.localStorage}catch{}}})(Oa,Oa.exports);var u1=Oa.exports,za={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default})(za,za.exports);var c1=za.exports,Ia={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default})(Ia,Ia.exports);var f1=Ia.exports,Ma={exports:{}},$a={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default})($a,$a.exports);var d1=$a.exports;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=d1,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}t.default={pauseVideo:{acceptableStates:[r.default.ENDED,r.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[r.default.ENDED,r.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[r.default.ENDED,r.default.PLAYING,r.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default})(Ma,Ma.exports);var p1=Ma.exports;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=u1,r=d(n),i=c1,o=d(i),l=f1,a=d(l),s=p1,u=d(s);function d(w){return w&&w.__esModule?w:{default:w}}var f=(0,r.default)("youtube-player"),y={};y.proxyEvents=function(w){var g={},v=function(C){var T="on"+C.slice(0,1).toUpperCase()+C.slice(1);g[T]=function(A){f('event "%s"',T,A),w.trigger(C,A)}},S=!0,p=!1,c=void 0;try{for(var h=a.default[Symbol.iterator](),x;!(S=(x=h.next()).done);S=!0){var E=x.value;v(E)}}catch(N){p=!0,c=N}finally{try{!S&&h.return&&h.return()}finally{if(p)throw c}}return g},y.promisifyPlayer=function(w){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,v={},S=function(T){g&&u.default[T]?v[T]=function(){for(var A=arguments.length,L=Array(A),Z=0;Z<A;Z++)L[Z]=arguments[Z];return w.then(function(me){var Oe=u.default[T],Yr=me.getPlayerState(),Qr=me[T].apply(me,L);return Oe.stateChangeRequired||Array.isArray(Oe.acceptableStates)&&Oe.acceptableStates.indexOf(Yr)===-1?new Promise(function(on){var Un=function j(){var O=me.getPlayerState(),z=void 0;typeof Oe.timeout=="number"&&(z=setTimeout(function(){me.removeEventListener("onStateChange",j),on()},Oe.timeout)),Array.isArray(Oe.acceptableStates)&&Oe.acceptableStates.indexOf(O)!==-1&&(me.removeEventListener("onStateChange",j),clearTimeout(z),on())};me.addEventListener("onStateChange",Un)}).then(function(){return Qr}):Qr})}:v[T]=function(){for(var A=arguments.length,L=Array(A),Z=0;Z<A;Z++)L[Z]=arguments[Z];return w.then(function(me){return me[T].apply(me,L)})}},p=!0,c=!1,h=void 0;try{for(var x=o.default[Symbol.iterator](),E;!(p=(E=x.next()).done);p=!0){var N=E.value;S(N)}}catch(C){c=!0,h=C}finally{try{!p&&x.return&&x.return()}finally{if(c)throw h}}return v},t.default=y,e.exports=t.default})(Ta,Ta.exports);var m1=Ta.exports;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},r=bv,i=u(r),o=n1,l=u(o),a=m1,s=u(a);function u(f){return f&&f.__esModule?f:{default:f}}var d=void 0;t.default=function(f){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,g=(0,i.default)();if(d||(d=(0,l.default)(g)),y.events)throw new Error("Event handlers cannot be overwritten.");if(typeof f=="string"&&!document.getElementById(f))throw new Error('Element "'+f+'" does not exist.');y.events=s.default.proxyEvents(g);var v=new Promise(function(p){if((typeof f>"u"?"undefined":n(f))==="object"&&f.playVideo instanceof Function){var c=f;p(c)}else d.then(function(h){var x=new h.Player(f,y);return g.on("ready",function(){p(x)}),null})}),S=s.default.promisifyPlayer(v,w);return S.on=g.on,S.off=g.off,S},e.exports=t.default})(ja,ja.exports);var h1=ja.exports;const y1=lo(h1);var v1=Object.defineProperty,g1=Object.defineProperties,w1=Object.getOwnPropertyDescriptors,xc=Object.getOwnPropertySymbols,x1=Object.prototype.hasOwnProperty,S1=Object.prototype.propertyIsEnumerable,Sc=(e,t,n)=>t in e?v1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Da=(e,t)=>{for(var n in t||(t={}))x1.call(t,n)&&Sc(e,n,t[n]);if(xc)for(var n of xc(t))S1.call(t,n)&&Sc(e,n,t[n]);return e},Aa=(e,t)=>g1(e,w1(t)),k1=(e,t,n)=>new Promise((r,i)=>{var o=s=>{try{a(n.next(s))}catch(u){i(u)}},l=s=>{try{a(n.throw(s))}catch(u){i(u)}},a=s=>s.done?r(s.value):Promise.resolve(s.value).then(o,l);a((n=n.apply(e,t)).next())});function E1(e,t){var n,r;if(e.videoId!==t.videoId)return!0;const i=((n=e.opts)==null?void 0:n.playerVars)||{},o=((r=t.opts)==null?void 0:r.playerVars)||{};return i.start!==o.start||i.end!==o.end}function kc(e={}){return Aa(Da({},e),{height:0,width:0,playerVars:Aa(Da({},e.playerVars),{autoplay:0,start:0,end:0})})}function C1(e,t){return e.videoId!==t.videoId||!Jv(kc(e.opts),kc(t.opts))}function P1(e,t){var n,r,i,o;return e.id!==t.id||e.className!==t.className||((n=e.opts)==null?void 0:n.width)!==((r=t.opts)==null?void 0:r.width)||((i=e.opts)==null?void 0:i.height)!==((o=t.opts)==null?void 0:o.height)||e.iframeClassName!==t.iframeClassName||e.title!==t.title}var _1={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},N1={videoId:ue.string,id:ue.string,className:ue.string,iframeClassName:ue.string,style:ue.object,title:ue.string,loading:ue.oneOf(["lazy","eager"]),opts:ue.objectOf(ue.any),onReady:ue.func,onError:ue.func,onPlay:ue.func,onPause:ue.func,onEnd:ue.func,onStateChange:ue.func,onPlaybackRateChange:ue.func,onPlaybackQualityChange:ue.func},Li=class extends tr.Component{constructor(e){super(e),this.destroyPlayerPromise=void 0,this.onPlayerReady=t=>{var n,r;return(r=(n=this.props).onReady)==null?void 0:r.call(n,t)},this.onPlayerError=t=>{var n,r;return(r=(n=this.props).onError)==null?void 0:r.call(n,t)},this.onPlayerStateChange=t=>{var n,r,i,o,l,a,s,u;switch((r=(n=this.props).onStateChange)==null||r.call(n,t),t.data){case Li.PlayerState.ENDED:(o=(i=this.props).onEnd)==null||o.call(i,t);break;case Li.PlayerState.PLAYING:(a=(l=this.props).onPlay)==null||a.call(l,t);break;case Li.PlayerState.PAUSED:(u=(s=this.props).onPause)==null||u.call(s,t);break}},this.onPlayerPlaybackRateChange=t=>{var n,r;return(r=(n=this.props).onPlaybackRateChange)==null?void 0:r.call(n,t)},this.onPlayerPlaybackQualityChange=t=>{var n,r;return(r=(n=this.props).onPlaybackQualityChange)==null?void 0:r.call(n,t)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}const t=Aa(Da({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=y1(this.container,t),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(n=>{this.props.title&&n.setAttribute("title",this.props.title),this.props.loading&&n.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var t;(t=this.internalPlayer)==null||t.getIframe().then(n=>{this.props.id?n.setAttribute("id",this.props.id):n.removeAttribute("id"),this.props.iframeClassName?n.setAttribute("class",this.props.iframeClassName):n.removeAttribute("class"),this.props.opts&&this.props.opts.width?n.setAttribute("width",this.props.opts.width.toString()):n.removeAttribute("width"),this.props.opts&&this.props.opts.height?n.setAttribute("height",this.props.opts.height.toString()):n.removeAttribute("height"),this.props.title?n.setAttribute("title",this.props.title):n.setAttribute("title","YouTube video player"),this.props.loading?n.setAttribute("loading",this.props.loading):n.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var t,n,r,i;if(typeof this.props.videoId>"u"||this.props.videoId===null){(t=this.internalPlayer)==null||t.stopVideo();return}let o=!1;const l={videoId:this.props.videoId};if((n=this.props.opts)!=null&&n.playerVars&&(o=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(l.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(l.endSeconds=this.props.opts.playerVars.end)),o){(r=this.internalPlayer)==null||r.loadVideoById(l);return}(i=this.internalPlayer)==null||i.cueVideoById(l)},this.refContainer=t=>{this.container=t},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(e){return k1(this,null,function*(){P1(e,this.props)&&this.updatePlayer(),C1(e,this.props)&&(yield this.resetPlayer()),E1(e,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return tr.createElement("div",{className:this.props.className,style:this.props.style},tr.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},Go=Li;Go.propTypes=N1;Go.defaultProps=_1;Go.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var j1=Go;const R1=({videoId:e})=>{const t={height:"390",width:"640",playerVars:{autoplay:0}},n={display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"};return m.jsx("div",{className:"youtube-video",style:n,children:m.jsx(j1,{videoId:e,opts:t})})},T1=()=>{const e="Kevinkadar1905@gmail.com";return m.jsxs("div",{className:"container text-center mt-5 mb-10",children:[m.jsx("hr",{}),m.jsx("h2",{children:"Contact Information"}),m.jsxs("p",{className:"email",children:["Email: ",e]}),m.jsx("hr",{})]})},O1=()=>m.jsxs("div",{children:[m.jsx(Jh,{}),m.jsx(Hv,{}),m.jsx(R1,{videoId:"sWZ17Yc379I"}),m.jsx(T1,{})]});const an="/infinite_games/assets/Little-buddy-move-banner_380-cd0047e9.jpg",L1=()=>m.jsx("div",{id:"wrap-content",className:"wrap-content",children:m.jsx("div",{id:"content",className:"content",children:m.jsxs("ul",{className:"news-gallery",children:[m.jsxs("li",{children:[m.jsx(xe,{to:"/buddy",title:"Little Buddy Move",children:m.jsx("img",{className:"lazyload","data-sizes":"auto",src:an,alt:"Little Buddy Move"})}),m.jsx("h2",{children:m.jsxs(xe,{to:"/buddy",title:"Little Buddy Move",children:["Little Buddy Move",m.jsxs("span",{children:["Interactive Music Video",m.jsx("br",{}),"by Hidden Orchestra"]})]})})]}),m.jsxs("li",{children:[m.jsx(xe,{to:"/buddy",title:"Little Buddy Move",children:m.jsx("img",{className:"lazyload","data-sizes":"auto",src:an,alt:"Little Buddy Move"})}),m.jsx("h2",{children:m.jsxs(xe,{to:"/buddy",title:"Little Buddy Move",children:["Little Buddy Move",m.jsxs("span",{children:["Interactive Music Video",m.jsx("br",{}),"by Hidden Orchestra"]})]})})]}),m.jsxs("li",{children:[m.jsx(xe,{to:"/buddy",title:"Little Buddy Move",children:m.jsx("img",{className:"lazyload","data-sizes":"auto",src:an,alt:"Little Buddy Move"})}),m.jsx("h2",{children:m.jsxs(xe,{to:"/buddy",title:"Little Buddy Move",children:["Little Buddy Move",m.jsxs("span",{children:["Interactive Music Video",m.jsx("br",{}),"by Hidden Orchestra"]})]})})]}),m.jsxs("li",{children:[m.jsx(xe,{to:"/buddy",title:"Little Buddy Move",children:m.jsx("img",{className:"lazyload","data-sizes":"auto",src:an,alt:"Little Buddy Move"})}),m.jsx("h2",{children:m.jsxs(xe,{to:"/buddy",title:"Little Buddy Move",children:["Little Buddy Move",m.jsxs("span",{children:["Interactive Music Video",m.jsx("br",{}),"by Hidden Orchestra"]})]})})]}),m.jsxs("li",{children:[m.jsx(xe,{to:"/buddy",title:"Little Buddy Move",children:m.jsx("img",{className:"lazyload","data-sizes":"auto",src:an,alt:"Little Buddy Move"})}),m.jsx("h2",{children:m.jsxs(xe,{to:"/buddy",title:"Little Buddy Move",children:["Little Buddy Move",m.jsxs("span",{children:["Interactive Music Video",m.jsx("br",{}),"by Hidden Orchestra"]})]})})]}),m.jsxs("li",{children:[m.jsx(xe,{to:"/buddy",title:"Little Buddy Move",children:m.jsx("img",{className:"lazyload","data-sizes":"auto",src:an,alt:"Little Buddy Move"})}),m.jsx("h2",{children:m.jsxs(xe,{to:"/buddy",title:"Little Buddy Move",children:["Little Buddy Move",m.jsxs("span",{children:["Interactive Music Video",m.jsx("br",{}),"by Hidden Orchestra"]})]})})]})]})})});const z1=()=>m.jsx("div",{id:"content",className:"content content--game",children:m.jsxs("div",{className:"game-content-container",children:[m.jsx("div",{className:"video",children:m.jsx("iframe",{width:"620",height:"349",src:"https://www.youtube.com/embed/sWZ17Yc379I?rel=0&hide=1&showinfo=0"})}),m.jsxs("div",{className:"game-section game-desc taC borderB",children:[m.jsx("h2",{className:"no-margin",children:"Phonopolis"}),m.jsx("h2",{children:m.jsxs("span",{children:["A hand-crafted adventure game",m.jsx("br",{}),"(in development)"]})}),m.jsx("p",{className:"",children:"Stand up against The Leader’s oppressive rule."})]}),m.jsx("div",{className:"game-section direct-bundles creaks-sans",children:m.jsxs("div",{className:"direct-bundles--container",children:[m.jsxs("div",{className:"direct-bundles--item taC",children:[m.jsxs("div",{className:"direct-bundles--item---head",children:[m.jsxs("h2",{children:["Collector's",m.jsx("br",{}),"Edition"]}),m.jsx("h5",{className:"highlight",children:"incl. Soundtrack"})]}),m.jsxs("div",{className:"direct-bundles--item---desc",children:[m.jsx("h4",{children:"Win / Mac / Linux"}),m.jsx("h5",{children:"+ Steam Key"})]}),m.jsx("div",{className:"widget-container shadow-btn",children:m.jsxs("a",{className:"widget","data-fancybox":"","data-type":"iframe",href:"https://www.humblebundle.com/widget/v2/product/pilgrims_widget/CNOpbPVgiS?theme=light",children:[m.jsx("span",{className:"buy-btn caps shadow-btn highlight",children:"download"}),m.jsx("span",{className:"price highlight",children:"$7"})]})})]}),m.jsxs("div",{className:"direct-bundles--item taC",children:[m.jsx("div",{className:"direct-bundles--item---head",children:m.jsxs("h2",{children:["Standard",m.jsx("br",{}),"Edition"]})}),m.jsxs("div",{className:"direct-bundles--item---desc",children:[m.jsx("h4",{children:"Win / Mac"}),m.jsx("h5",{children:"+ Steam Key"})]}),m.jsx("div",{className:"widget-container shadow-btn",children:m.jsxs("a",{className:"widget","data-fancybox":"","data-type":"iframe",href:"https://www.humblebundle.com/widget/v2/product/happy-game-standard/mN4oxbcZ9W?theme=light",children:[m.jsx("span",{className:"buy-btn caps shadow-btn highlight",children:"download"}),m.jsx("span",{className:"price highlight",children:"$13"})]})})]}),m.jsxs("div",{className:"direct-bundles--item taC",children:[m.jsx("div",{className:"direct-bundles--item---head",children:m.jsxs("h2",{children:["Soundtrack",m.jsx("br",{}),"+ Art Book"]})}),m.jsx("div",{className:"direct-bundles--item---desc",children:m.jsx("h4",{children:"mp3 / FLAC + pdf"})}),m.jsx("div",{className:"widget-container shadow-btn",children:m.jsxs("a",{className:"widget","data-fancybox":"","data-type":"iframe",href:"https://www.humblebundle.com/widget/v2/product/happy-game-ost/Gpp5oOdLk6?theme=light",children:[m.jsx("span",{className:"buy-btn caps shadow-btn highlight",children:"download"}),m.jsx("span",{className:"price highlight",children:"$7"})]})})]})]})}),m.jsx("div",{className:"game-section borderT",children:m.jsxs("div",{className:"storefronts",children:[m.jsx("div",{className:"storefronts-item",children:m.jsx("a",{className:"storefronts-item-link storefronts-item-link--steam",href:"https://store.steampowered.com/",title:"HomePage",children:"steam"})}),m.jsx("div",{className:"storefronts-item",children:m.jsx("a",{className:"storefronts-item-link storefronts-item-link--steam",href:"https://store.steampowered.com/",title:"HomePage",children:"steam"})}),m.jsx("div",{className:"storefronts-item",children:m.jsx("a",{className:"storefronts-item-link storefronts-item-link--steam",href:"https://store.steampowered.com/",title:"HomePage",children:"steam"})})]})})]})}),I1=()=>m.jsx("div",{children:m.jsx("p",{children:"Books"})}),M1=()=>m.jsxs(Yh,{basename:"/infinite_games/",children:[m.jsx(Gh,{}),m.jsxs(Fh,{children:[m.jsx(er,{path:"/",element:m.jsx(O1,{})}),m.jsx(er,{path:"/games",element:m.jsx(L1,{})}),m.jsx(er,{path:"/books",element:m.jsx(I1,{})}),m.jsx(er,{path:"/buddy",element:m.jsx(z1,{})})]})]});Nl.createRoot(document.getElementById("root")).render(m.jsx(tr.StrictMode,{children:m.jsx(M1,{})}));
