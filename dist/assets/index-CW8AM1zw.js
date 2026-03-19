function j1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function D1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var k_={exports:{}},Jc={},C_={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),O1=Symbol.for("react.portal"),L1=Symbol.for("react.fragment"),V1=Symbol.for("react.strict_mode"),M1=Symbol.for("react.profiler"),F1=Symbol.for("react.provider"),U1=Symbol.for("react.context"),$1=Symbol.for("react.forward_ref"),z1=Symbol.for("react.suspense"),B1=Symbol.for("react.memo"),H1=Symbol.for("react.lazy"),Jg=Symbol.iterator;function W1(t){return t===null||typeof t!="object"?null:(t=Jg&&t[Jg]||t["@@iterator"],typeof t=="function"?t:null)}var R_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P_=Object.assign,j_={};function Fi(t,e,n){this.props=t,this.context=e,this.refs=j_,this.updater=n||R_}Fi.prototype.isReactComponent={};Fi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function D_(){}D_.prototype=Fi.prototype;function Lf(t,e,n){this.props=t,this.context=e,this.refs=j_,this.updater=n||R_}var Vf=Lf.prototype=new D_;Vf.constructor=Lf;P_(Vf,Fi.prototype);Vf.isPureReactComponent=!0;var Xg=Array.isArray,O_=Object.prototype.hasOwnProperty,Mf={current:null},L_={key:!0,ref:!0,__self:!0,__source:!0};function V_(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)O_.call(e,r)&&!L_.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Ca,type:t,key:i,ref:o,props:s,_owner:Mf.current}}function q1(t,e){return{$$typeof:Ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ff(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ca}function K1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zg=/\/+/g;function dd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?K1(""+t.key):e.toString(36)}function Pl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ca:case O1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+dd(o,0):r,Xg(s)?(n="",t!=null&&(n=t.replace(Zg,"$&/")+"/"),Pl(s,e,n,"",function(d){return d})):s!=null&&(Ff(s)&&(s=q1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Zg,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Xg(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+dd(i,l);o+=Pl(i,e,n,u,s)}else if(u=W1(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+dd(i,l++),o+=Pl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function al(t,e,n){if(t==null)return t;var r=[],s=0;return Pl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function G1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gt={current:null},jl={transition:null},Q1={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:jl,ReactCurrentOwner:Mf};function M_(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:al,forEach:function(t,e,n){al(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return al(t,function(){e++}),e},toArray:function(t){return al(t,function(e){return e})||[]},only:function(t){if(!Ff(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Fi;ee.Fragment=L1;ee.Profiler=M1;ee.PureComponent=Lf;ee.StrictMode=V1;ee.Suspense=z1;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q1;ee.act=M_;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=P_({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Mf.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)O_.call(e,u)&&!L_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Ca,type:t.type,key:s,ref:i,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:U1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:F1,_context:t},t.Consumer=t};ee.createElement=V_;ee.createFactory=function(t){var e=V_.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:$1,render:t}};ee.isValidElement=Ff;ee.lazy=function(t){return{$$typeof:H1,_payload:{_status:-1,_result:t},_init:G1}};ee.memo=function(t,e){return{$$typeof:B1,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=jl.transition;jl.transition={};try{t()}finally{jl.transition=e}};ee.unstable_act=M_;ee.useCallback=function(t,e){return gt.current.useCallback(t,e)};ee.useContext=function(t){return gt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return gt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return gt.current.useEffect(t,e)};ee.useId=function(){return gt.current.useId()};ee.useImperativeHandle=function(t,e,n){return gt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return gt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return gt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return gt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return gt.current.useReducer(t,e,n)};ee.useRef=function(t){return gt.current.useRef(t)};ee.useState=function(t){return gt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return gt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return gt.current.useTransition()};ee.version="18.3.1";C_.exports=ee;var R=C_.exports;const ti=D1(R),Y1=j1({__proto__:null,default:ti},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J1=R,X1=Symbol.for("react.element"),Z1=Symbol.for("react.fragment"),eI=Object.prototype.hasOwnProperty,tI=J1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nI={key:!0,ref:!0,__self:!0,__source:!0};function F_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)eI.call(e,r)&&!nI.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:X1,type:t,key:i,ref:o,props:s,_owner:tI.current}}Jc.Fragment=Z1;Jc.jsx=F_;Jc.jsxs=F_;k_.exports=Jc;var c=k_.exports,uh={},U_={exports:{}},Mt={},$_={exports:{}},z_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var X=B.length;B.push(Q);e:for(;0<X;){var ye=X-1>>>1,ke=B[ye];if(0<s(ke,Q))B[ye]=Q,B[X]=ke,X=ye;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],X=B.pop();if(X!==Q){B[0]=X;e:for(var ye=0,ke=B.length,ss=ke>>>1;ye<ss;){var Ut=2*(ye+1)-1,is=B[Ut],Yt=Ut+1,ar=B[Yt];if(0>s(is,X))Yt<ke&&0>s(ar,is)?(B[ye]=ar,B[Yt]=X,ye=Yt):(B[ye]=is,B[Ut]=X,ye=Ut);else if(Yt<ke&&0>s(ar,X))B[ye]=ar,B[Yt]=X,ye=Yt;else break e}}return Q}function s(B,Q){var X=B.sortIndex-Q.sortIndex;return X!==0?X:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],f=1,p=null,g=3,E=!1,y=!1,N=!1,T=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(B){for(var Q=n(d);Q!==null;){if(Q.callback===null)r(d);else if(Q.startTime<=B)r(d),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(d)}}function D(B){if(N=!1,I(B),!y)if(n(u)!==null)y=!0,Ji(P);else{var Q=n(d);Q!==null&&Xi(D,Q.startTime-B)}}function P(B,Q){y=!1,N&&(N=!1,w(x),x=-1),E=!0;var X=g;try{for(I(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||B&&!C());){var ye=p.callback;if(typeof ye=="function"){p.callback=null,g=p.priorityLevel;var ke=ye(p.expirationTime<=Q);Q=t.unstable_now(),typeof ke=="function"?p.callback=ke:p===n(u)&&r(u),I(Q)}else r(u);p=n(u)}if(p!==null)var ss=!0;else{var Ut=n(d);Ut!==null&&Xi(D,Ut.startTime-Q),ss=!1}return ss}finally{p=null,g=X,E=!1}}var M=!1,b=null,x=-1,S=5,k=-1;function C(){return!(t.unstable_now()-k<S)}function j(){if(b!==null){var B=t.unstable_now();k=B;var Q=!0;try{Q=b(!0,B)}finally{Q?A():(M=!1,b=null)}}else M=!1}var A;if(typeof _=="function")A=function(){_(j)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,Cn=Ge.port2;Ge.port1.onmessage=j,A=function(){Cn.postMessage(null)}}else A=function(){T(j,0)};function Ji(B){b=B,M||(M=!0,A())}function Xi(B,Q){x=T(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){y||E||(y=!0,Ji(P))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var X=g;g=Q;try{return B()}finally{g=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var X=g;g=B;try{return Q()}finally{g=X}},t.unstable_scheduleCallback=function(B,Q,X){var ye=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ye+X:ye):X=ye,B){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=X+ke,B={id:f++,callback:Q,priorityLevel:B,startTime:X,expirationTime:ke,sortIndex:-1},X>ye?(B.sortIndex=X,e(d,B),n(u)===null&&B===n(d)&&(N?(w(x),x=-1):N=!0,Xi(D,X-ye))):(B.sortIndex=ke,e(u,B),y||E||(y=!0,Ji(P))),B},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(B){var Q=g;return function(){var X=g;g=Q;try{return B.apply(this,arguments)}finally{g=X}}}})(z_);$_.exports=z_;var rI=$_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sI=R,Vt=rI;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var B_=new Set,Xo={};function Ms(t,e){Ii(t,e),Ii(t+"Capture",e)}function Ii(t,e){for(Xo[t]=e,t=0;t<e.length;t++)B_.add(e[t])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dh=Object.prototype.hasOwnProperty,iI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ey={},ty={};function oI(t){return dh.call(ty,t)?!0:dh.call(ey,t)?!1:iI.test(t)?ty[t]=!0:(ey[t]=!0,!1)}function aI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lI(t,e,n,r){if(e===null||typeof e>"u"||aI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uf=/[\-:]([a-z])/g;function $f(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Uf,$f);Ze[e]=new yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Uf,$f);Ze[e]=new yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Uf,$f);Ze[e]=new yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function zf(t,e,n,r){var s=Ze.hasOwnProperty(e)?Ze[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lI(e,n,s,r)&&(n=null),r||s===null?oI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nr=sI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ll=Symbol.for("react.element"),ni=Symbol.for("react.portal"),ri=Symbol.for("react.fragment"),Bf=Symbol.for("react.strict_mode"),hh=Symbol.for("react.profiler"),H_=Symbol.for("react.provider"),W_=Symbol.for("react.context"),Hf=Symbol.for("react.forward_ref"),fh=Symbol.for("react.suspense"),ph=Symbol.for("react.suspense_list"),Wf=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),q_=Symbol.for("react.offscreen"),ny=Symbol.iterator;function go(t){return t===null||typeof t!="object"?null:(t=ny&&t[ny]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,hd;function Io(t){if(hd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hd=e&&e[1]||""}return`
`+hd+t}var fd=!1;function pd(t,e){if(!t||fd)return"";fd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{fd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Io(t):""}function cI(t){switch(t.tag){case 5:return Io(t.type);case 16:return Io("Lazy");case 13:return Io("Suspense");case 19:return Io("SuspenseList");case 0:case 2:case 15:return t=pd(t.type,!1),t;case 11:return t=pd(t.type.render,!1),t;case 1:return t=pd(t.type,!0),t;default:return""}}function mh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ri:return"Fragment";case ni:return"Portal";case hh:return"Profiler";case Bf:return"StrictMode";case fh:return"Suspense";case ph:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case W_:return(t.displayName||"Context")+".Consumer";case H_:return(t._context.displayName||"Context")+".Provider";case Hf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wf:return e=t.displayName||null,e!==null?e:mh(t.type)||"Memo";case gr:e=t._payload,t=t._init;try{return mh(t(e))}catch{}}return null}function uI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mh(e);case 8:return e===Bf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function K_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dI(t){var e=K_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cl(t){t._valueTracker||(t._valueTracker=dI(t))}function G_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=K_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function nc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gh(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ry(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=$r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Q_(t,e){e=e.checked,e!=null&&zf(t,"checked",e,!1)}function yh(t,e){Q_(t,e);var n=$r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vh(t,e.type,n):e.hasOwnProperty("defaultValue")&&vh(t,e.type,$r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vh(t,e,n){(e!=="number"||nc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var So=Array.isArray;function pi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+$r(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function xh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function iy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(So(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$r(n)}}function Y_(t,e){var n=$r(e.value),r=$r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function oy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function J_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _h(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?J_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ul,X_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ul=ul||document.createElement("div"),ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ul.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Do={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hI=["Webkit","ms","Moz","O"];Object.keys(Do).forEach(function(t){hI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Do[e]=Do[t]})});function Z_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Do.hasOwnProperty(t)&&Do[t]?(""+e).trim():e+"px"}function ew(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Z_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var fI=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wh(t,e){if(e){if(fI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Eh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=null;function qf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Th=null,mi=null,gi=null;function ay(t){if(t=ja(t)){if(typeof Th!="function")throw Error(U(280));var e=t.stateNode;e&&(e=nu(e),Th(t.stateNode,t.type,e))}}function tw(t){mi?gi?gi.push(t):gi=[t]:mi=t}function nw(){if(mi){var t=mi,e=gi;if(gi=mi=null,ay(t),e)for(t=0;t<e.length;t++)ay(e[t])}}function rw(t,e){return t(e)}function sw(){}var md=!1;function iw(t,e,n){if(md)return t(e,n);md=!0;try{return rw(t,e,n)}finally{md=!1,(mi!==null||gi!==null)&&(sw(),nw())}}function ea(t,e){var n=t.stateNode;if(n===null)return null;var r=nu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Ih=!1;if(Hn)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){Ih=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{Ih=!1}function pI(t,e,n,r,s,i,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var Oo=!1,rc=null,sc=!1,Sh=null,mI={onError:function(t){Oo=!0,rc=t}};function gI(t,e,n,r,s,i,o,l,u){Oo=!1,rc=null,pI.apply(mI,arguments)}function yI(t,e,n,r,s,i,o,l,u){if(gI.apply(this,arguments),Oo){if(Oo){var d=rc;Oo=!1,rc=null}else throw Error(U(198));sc||(sc=!0,Sh=d)}}function Fs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ow(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ly(t){if(Fs(t)!==t)throw Error(U(188))}function vI(t){var e=t.alternate;if(!e){if(e=Fs(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return ly(s),t;if(i===r)return ly(s),e;i=i.sibling}throw Error(U(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function aw(t){return t=vI(t),t!==null?lw(t):null}function lw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lw(t);if(e!==null)return e;t=t.sibling}return null}var cw=Vt.unstable_scheduleCallback,cy=Vt.unstable_cancelCallback,xI=Vt.unstable_shouldYield,_I=Vt.unstable_requestPaint,Re=Vt.unstable_now,wI=Vt.unstable_getCurrentPriorityLevel,Kf=Vt.unstable_ImmediatePriority,uw=Vt.unstable_UserBlockingPriority,ic=Vt.unstable_NormalPriority,EI=Vt.unstable_LowPriority,dw=Vt.unstable_IdlePriority,Xc=null,xn=null;function bI(t){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(Xc,t,void 0,(t.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:SI,TI=Math.log,II=Math.LN2;function SI(t){return t>>>=0,t===0?32:31-(TI(t)/II|0)|0}var dl=64,hl=4194304;function No(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function oc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=No(l):(i&=o,i!==0&&(r=No(i)))}else o=n&~s,o!==0?r=No(o):i!==0&&(r=No(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rn(e),s=1<<n,r|=t[n],e&=~s;return r}function NI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-rn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=NI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Nh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hw(){var t=dl;return dl<<=1,!(dl&4194240)&&(dl=64),t}function gd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ra(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rn(e),t[e]=n}function kI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-rn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Gf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ae=0;function fw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pw,Qf,mw,gw,yw,Ah=!1,fl=[],Ar=null,kr=null,Cr=null,ta=new Map,na=new Map,vr=[],CI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uy(t,e){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(e.pointerId)}}function vo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ja(e),e!==null&&Qf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function RI(t,e,n,r,s){switch(e){case"focusin":return Ar=vo(Ar,t,e,n,r,s),!0;case"dragenter":return kr=vo(kr,t,e,n,r,s),!0;case"mouseover":return Cr=vo(Cr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ta.set(i,vo(ta.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,na.set(i,vo(na.get(i)||null,t,e,n,r,s)),!0}return!1}function vw(t){var e=ps(t.target);if(e!==null){var n=Fs(e);if(n!==null){if(e=n.tag,e===13){if(e=ow(n),e!==null){t.blockedOn=e,yw(t.priority,function(){mw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=kh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bh=r,n.target.dispatchEvent(r),bh=null}else return e=ja(n),e!==null&&Qf(e),t.blockedOn=n,!1;e.shift()}return!0}function dy(t,e,n){Dl(t)&&n.delete(e)}function PI(){Ah=!1,Ar!==null&&Dl(Ar)&&(Ar=null),kr!==null&&Dl(kr)&&(kr=null),Cr!==null&&Dl(Cr)&&(Cr=null),ta.forEach(dy),na.forEach(dy)}function xo(t,e){t.blockedOn===e&&(t.blockedOn=null,Ah||(Ah=!0,Vt.unstable_scheduleCallback(Vt.unstable_NormalPriority,PI)))}function ra(t){function e(s){return xo(s,t)}if(0<fl.length){xo(fl[0],t);for(var n=1;n<fl.length;n++){var r=fl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ar!==null&&xo(Ar,t),kr!==null&&xo(kr,t),Cr!==null&&xo(Cr,t),ta.forEach(e),na.forEach(e),n=0;n<vr.length;n++)r=vr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<vr.length&&(n=vr[0],n.blockedOn===null);)vw(n),n.blockedOn===null&&vr.shift()}var yi=nr.ReactCurrentBatchConfig,ac=!0;function jI(t,e,n,r){var s=ae,i=yi.transition;yi.transition=null;try{ae=1,Yf(t,e,n,r)}finally{ae=s,yi.transition=i}}function DI(t,e,n,r){var s=ae,i=yi.transition;yi.transition=null;try{ae=4,Yf(t,e,n,r)}finally{ae=s,yi.transition=i}}function Yf(t,e,n,r){if(ac){var s=kh(t,e,n,r);if(s===null)Sd(t,e,r,lc,n),uy(t,r);else if(RI(s,t,e,n,r))r.stopPropagation();else if(uy(t,r),e&4&&-1<CI.indexOf(t)){for(;s!==null;){var i=ja(s);if(i!==null&&pw(i),i=kh(t,e,n,r),i===null&&Sd(t,e,r,lc,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Sd(t,e,r,null,n)}}var lc=null;function kh(t,e,n,r){if(lc=null,t=qf(r),t=ps(t),t!==null)if(e=Fs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ow(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return lc=t,null}function xw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wI()){case Kf:return 1;case uw:return 4;case ic:case EI:return 16;case dw:return 536870912;default:return 16}default:return 16}}var Tr=null,Jf=null,Ol=null;function _w(){if(Ol)return Ol;var t,e=Jf,n=e.length,r,s="value"in Tr?Tr.value:Tr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Ol=s.slice(t,1<r?1-r:void 0)}function Ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function hy(){return!1}function Ft(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?pl:hy,this.isPropagationStopped=hy,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),e}var Ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xf=Ft(Ui),Pa=we({},Ui,{view:0,detail:0}),OI=Ft(Pa),yd,vd,_o,Zc=we({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_o&&(_o&&t.type==="mousemove"?(yd=t.screenX-_o.screenX,vd=t.screenY-_o.screenY):vd=yd=0,_o=t),yd)},movementY:function(t){return"movementY"in t?t.movementY:vd}}),fy=Ft(Zc),LI=we({},Zc,{dataTransfer:0}),VI=Ft(LI),MI=we({},Pa,{relatedTarget:0}),xd=Ft(MI),FI=we({},Ui,{animationName:0,elapsedTime:0,pseudoElement:0}),UI=Ft(FI),$I=we({},Ui,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zI=Ft($I),BI=we({},Ui,{data:0}),py=Ft(BI),HI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qI[t])?!!e[t]:!1}function Zf(){return KI}var GI=we({},Pa,{key:function(t){if(t.key){var e=HI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?WI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zf,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),QI=Ft(GI),YI=we({},Zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),my=Ft(YI),JI=we({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zf}),XI=Ft(JI),ZI=we({},Ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),eS=Ft(ZI),tS=we({},Zc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nS=Ft(tS),rS=[9,13,27,32],ep=Hn&&"CompositionEvent"in window,Lo=null;Hn&&"documentMode"in document&&(Lo=document.documentMode);var sS=Hn&&"TextEvent"in window&&!Lo,ww=Hn&&(!ep||Lo&&8<Lo&&11>=Lo),gy=" ",yy=!1;function Ew(t,e){switch(t){case"keyup":return rS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var si=!1;function iS(t,e){switch(t){case"compositionend":return bw(e);case"keypress":return e.which!==32?null:(yy=!0,gy);case"textInput":return t=e.data,t===gy&&yy?null:t;default:return null}}function oS(t,e){if(si)return t==="compositionend"||!ep&&Ew(t,e)?(t=_w(),Ol=Jf=Tr=null,si=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ww&&e.locale!=="ko"?null:e.data;default:return null}}var aS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!aS[t.type]:e==="textarea"}function Tw(t,e,n,r){tw(r),e=cc(e,"onChange"),0<e.length&&(n=new Xf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Vo=null,sa=null;function lS(t){Ow(t,0)}function eu(t){var e=ai(t);if(G_(e))return t}function cS(t,e){if(t==="change")return e}var Iw=!1;if(Hn){var _d;if(Hn){var wd="oninput"in document;if(!wd){var xy=document.createElement("div");xy.setAttribute("oninput","return;"),wd=typeof xy.oninput=="function"}_d=wd}else _d=!1;Iw=_d&&(!document.documentMode||9<document.documentMode)}function _y(){Vo&&(Vo.detachEvent("onpropertychange",Sw),sa=Vo=null)}function Sw(t){if(t.propertyName==="value"&&eu(sa)){var e=[];Tw(e,sa,t,qf(t)),iw(lS,e)}}function uS(t,e,n){t==="focusin"?(_y(),Vo=e,sa=n,Vo.attachEvent("onpropertychange",Sw)):t==="focusout"&&_y()}function dS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return eu(sa)}function hS(t,e){if(t==="click")return eu(e)}function fS(t,e){if(t==="input"||t==="change")return eu(e)}function pS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:pS;function ia(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!dh.call(e,s)||!ln(t[s],e[s]))return!1}return!0}function wy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ey(t,e){var n=wy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wy(n)}}function Nw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Nw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Aw(){for(var t=window,e=nc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nc(t.document)}return e}function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mS(t){var e=Aw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Nw(n.ownerDocument.documentElement,n)){if(r!==null&&tp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Ey(n,i);var o=Ey(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gS=Hn&&"documentMode"in document&&11>=document.documentMode,ii=null,Ch=null,Mo=null,Rh=!1;function by(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rh||ii==null||ii!==nc(r)||(r=ii,"selectionStart"in r&&tp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mo&&ia(Mo,r)||(Mo=r,r=cc(Ch,"onSelect"),0<r.length&&(e=new Xf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ii)))}function ml(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var oi={animationend:ml("Animation","AnimationEnd"),animationiteration:ml("Animation","AnimationIteration"),animationstart:ml("Animation","AnimationStart"),transitionend:ml("Transition","TransitionEnd")},Ed={},kw={};Hn&&(kw=document.createElement("div").style,"AnimationEvent"in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),"TransitionEvent"in window||delete oi.transitionend.transition);function tu(t){if(Ed[t])return Ed[t];if(!oi[t])return t;var e=oi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kw)return Ed[t]=e[n];return t}var Cw=tu("animationend"),Rw=tu("animationiteration"),Pw=tu("animationstart"),jw=tu("transitionend"),Dw=new Map,Ty="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(t,e){Dw.set(t,e),Ms(e,[t])}for(var bd=0;bd<Ty.length;bd++){var Td=Ty[bd],yS=Td.toLowerCase(),vS=Td[0].toUpperCase()+Td.slice(1);Yr(yS,"on"+vS)}Yr(Cw,"onAnimationEnd");Yr(Rw,"onAnimationIteration");Yr(Pw,"onAnimationStart");Yr("dblclick","onDoubleClick");Yr("focusin","onFocus");Yr("focusout","onBlur");Yr(jw,"onTransitionEnd");Ii("onMouseEnter",["mouseout","mouseover"]);Ii("onMouseLeave",["mouseout","mouseover"]);Ii("onPointerEnter",["pointerout","pointerover"]);Ii("onPointerLeave",["pointerout","pointerover"]);Ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function Iy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,yI(r,e,void 0,t),t.currentTarget=null}function Ow(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Iy(s,l,d),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Iy(s,l,d),i=u}}}if(sc)throw t=Sh,sc=!1,Sh=null,t}function fe(t,e){var n=e[Lh];n===void 0&&(n=e[Lh]=new Set);var r=t+"__bubble";n.has(r)||(Lw(e,t,2,!1),n.add(r))}function Id(t,e,n){var r=0;e&&(r|=4),Lw(n,t,r,e)}var gl="_reactListening"+Math.random().toString(36).slice(2);function oa(t){if(!t[gl]){t[gl]=!0,B_.forEach(function(n){n!=="selectionchange"&&(xS.has(n)||Id(n,!1,t),Id(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gl]||(e[gl]=!0,Id("selectionchange",!1,e))}}function Lw(t,e,n,r){switch(xw(e)){case 1:var s=jI;break;case 4:s=DI;break;default:s=Yf}n=s.bind(null,e,n,t),s=void 0,!Ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Sd(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=ps(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}iw(function(){var d=i,f=qf(n),p=[];e:{var g=Dw.get(t);if(g!==void 0){var E=Xf,y=t;switch(t){case"keypress":if(Ll(n)===0)break e;case"keydown":case"keyup":E=QI;break;case"focusin":y="focus",E=xd;break;case"focusout":y="blur",E=xd;break;case"beforeblur":case"afterblur":E=xd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=fy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=VI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=XI;break;case Cw:case Rw:case Pw:E=UI;break;case jw:E=eS;break;case"scroll":E=OI;break;case"wheel":E=nS;break;case"copy":case"cut":case"paste":E=zI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=my}var N=(e&4)!==0,T=!N&&t==="scroll",w=N?g!==null?g+"Capture":null:g;N=[];for(var _=d,I;_!==null;){I=_;var D=I.stateNode;if(I.tag===5&&D!==null&&(I=D,w!==null&&(D=ea(_,w),D!=null&&N.push(aa(_,D,I)))),T)break;_=_.return}0<N.length&&(g=new E(g,y,null,n,f),p.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",g&&n!==bh&&(y=n.relatedTarget||n.fromElement)&&(ps(y)||y[Wn]))break e;if((E||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,E?(y=n.relatedTarget||n.toElement,E=d,y=y?ps(y):null,y!==null&&(T=Fs(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(E=null,y=d),E!==y)){if(N=fy,D="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(N=my,D="onPointerLeave",w="onPointerEnter",_="pointer"),T=E==null?g:ai(E),I=y==null?g:ai(y),g=new N(D,_+"leave",E,n,f),g.target=T,g.relatedTarget=I,D=null,ps(f)===d&&(N=new N(w,_+"enter",y,n,f),N.target=I,N.relatedTarget=T,D=N),T=D,E&&y)t:{for(N=E,w=y,_=0,I=N;I;I=Ys(I))_++;for(I=0,D=w;D;D=Ys(D))I++;for(;0<_-I;)N=Ys(N),_--;for(;0<I-_;)w=Ys(w),I--;for(;_--;){if(N===w||w!==null&&N===w.alternate)break t;N=Ys(N),w=Ys(w)}N=null}else N=null;E!==null&&Sy(p,g,E,N,!1),y!==null&&T!==null&&Sy(p,T,y,N,!0)}}e:{if(g=d?ai(d):window,E=g.nodeName&&g.nodeName.toLowerCase(),E==="select"||E==="input"&&g.type==="file")var P=cS;else if(vy(g))if(Iw)P=fS;else{P=dS;var M=uS}else(E=g.nodeName)&&E.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(P=hS);if(P&&(P=P(t,d))){Tw(p,P,n,f);break e}M&&M(t,g,d),t==="focusout"&&(M=g._wrapperState)&&M.controlled&&g.type==="number"&&vh(g,"number",g.value)}switch(M=d?ai(d):window,t){case"focusin":(vy(M)||M.contentEditable==="true")&&(ii=M,Ch=d,Mo=null);break;case"focusout":Mo=Ch=ii=null;break;case"mousedown":Rh=!0;break;case"contextmenu":case"mouseup":case"dragend":Rh=!1,by(p,n,f);break;case"selectionchange":if(gS)break;case"keydown":case"keyup":by(p,n,f)}var b;if(ep)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else si?Ew(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(ww&&n.locale!=="ko"&&(si||x!=="onCompositionStart"?x==="onCompositionEnd"&&si&&(b=_w()):(Tr=f,Jf="value"in Tr?Tr.value:Tr.textContent,si=!0)),M=cc(d,x),0<M.length&&(x=new py(x,t,null,n,f),p.push({event:x,listeners:M}),b?x.data=b:(b=bw(n),b!==null&&(x.data=b)))),(b=sS?iS(t,n):oS(t,n))&&(d=cc(d,"onBeforeInput"),0<d.length&&(f=new py("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:d}),f.data=b))}Ow(p,e)})}function aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cc(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ea(t,n),i!=null&&r.unshift(aa(t,i,s)),i=ea(t,e),i!=null&&r.push(aa(t,i,s))),t=t.return}return r}function Ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sy(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,s?(u=ea(n,i),u!=null&&o.unshift(aa(n,u,l))):s||(u=ea(n,i),u!=null&&o.push(aa(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var _S=/\r\n?/g,wS=/\u0000|\uFFFD/g;function Ny(t){return(typeof t=="string"?t:""+t).replace(_S,`
`).replace(wS,"")}function yl(t,e,n){if(e=Ny(e),Ny(t)!==e&&n)throw Error(U(425))}function uc(){}var Ph=null,jh=null;function Dh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Oh=typeof setTimeout=="function"?setTimeout:void 0,ES=typeof clearTimeout=="function"?clearTimeout:void 0,Ay=typeof Promise=="function"?Promise:void 0,bS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ay<"u"?function(t){return Ay.resolve(null).then(t).catch(TS)}:Oh;function TS(t){setTimeout(function(){throw t})}function Nd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ra(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ra(e)}function Rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ky(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $i=Math.random().toString(36).slice(2),yn="__reactFiber$"+$i,la="__reactProps$"+$i,Wn="__reactContainer$"+$i,Lh="__reactEvents$"+$i,IS="__reactListeners$"+$i,SS="__reactHandles$"+$i;function ps(t){var e=t[yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wn]||n[yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ky(t);t!==null;){if(n=t[yn])return n;t=ky(t)}return e}t=n,n=t.parentNode}return null}function ja(t){return t=t[yn]||t[Wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ai(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function nu(t){return t[la]||null}var Vh=[],li=-1;function Jr(t){return{current:t}}function ge(t){0>li||(t.current=Vh[li],Vh[li]=null,li--)}function ue(t,e){li++,Vh[li]=t.current,t.current=e}var zr={},ut=Jr(zr),Et=Jr(!1),Ts=zr;function Si(t,e){var n=t.type.contextTypes;if(!n)return zr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function bt(t){return t=t.childContextTypes,t!=null}function dc(){ge(Et),ge(ut)}function Cy(t,e,n){if(ut.current!==zr)throw Error(U(168));ue(ut,e),ue(Et,n)}function Vw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(U(108,uI(t)||"Unknown",s));return we({},n,r)}function hc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zr,Ts=ut.current,ue(ut,t),ue(Et,Et.current),!0}function Ry(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=Vw(t,e,Ts),r.__reactInternalMemoizedMergedChildContext=t,ge(Et),ge(ut),ue(ut,t)):ge(Et),ue(Et,n)}var Dn=null,ru=!1,Ad=!1;function Mw(t){Dn===null?Dn=[t]:Dn.push(t)}function NS(t){ru=!0,Mw(t)}function Xr(){if(!Ad&&Dn!==null){Ad=!0;var t=0,e=ae;try{var n=Dn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Dn=null,ru=!1}catch(s){throw Dn!==null&&(Dn=Dn.slice(t+1)),cw(Kf,Xr),s}finally{ae=e,Ad=!1}}return null}var ci=[],ui=0,fc=null,pc=0,$t=[],zt=0,Is=null,Ln=1,Vn="";function ds(t,e){ci[ui++]=pc,ci[ui++]=fc,fc=t,pc=e}function Fw(t,e,n){$t[zt++]=Ln,$t[zt++]=Vn,$t[zt++]=Is,Is=t;var r=Ln;t=Vn;var s=32-rn(r)-1;r&=~(1<<s),n+=1;var i=32-rn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Ln=1<<32-rn(e)+s|n<<s|r,Vn=i+t}else Ln=1<<i|n<<s|r,Vn=t}function np(t){t.return!==null&&(ds(t,1),Fw(t,1,0))}function rp(t){for(;t===fc;)fc=ci[--ui],ci[ui]=null,pc=ci[--ui],ci[ui]=null;for(;t===Is;)Is=$t[--zt],$t[zt]=null,Vn=$t[--zt],$t[zt]=null,Ln=$t[--zt],$t[zt]=null}var Ot=null,jt=null,ve=!1,en=null;function Uw(t,e){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Py(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ot=t,jt=Rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ot=t,jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Is!==null?{id:Ln,overflow:Vn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ot=t,jt=null,!0):!1;default:return!1}}function Mh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fh(t){if(ve){var e=jt;if(e){var n=e;if(!Py(t,e)){if(Mh(t))throw Error(U(418));e=Rr(n.nextSibling);var r=Ot;e&&Py(t,e)?Uw(r,n):(t.flags=t.flags&-4097|2,ve=!1,Ot=t)}}else{if(Mh(t))throw Error(U(418));t.flags=t.flags&-4097|2,ve=!1,Ot=t}}}function jy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ot=t}function vl(t){if(t!==Ot)return!1;if(!ve)return jy(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Dh(t.type,t.memoizedProps)),e&&(e=jt)){if(Mh(t))throw $w(),Error(U(418));for(;e;)Uw(t,e),e=Rr(e.nextSibling)}if(jy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){jt=Rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}jt=null}}else jt=Ot?Rr(t.stateNode.nextSibling):null;return!0}function $w(){for(var t=jt;t;)t=Rr(t.nextSibling)}function Ni(){jt=Ot=null,ve=!1}function sp(t){en===null?en=[t]:en.push(t)}var AS=nr.ReactCurrentBatchConfig;function wo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function xl(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dy(t){var e=t._init;return e(t._payload)}function zw(t){function e(w,_){if(t){var I=w.deletions;I===null?(w.deletions=[_],w.flags|=16):I.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function s(w,_){return w=Or(w,_),w.index=0,w.sibling=null,w}function i(w,_,I){return w.index=I,t?(I=w.alternate,I!==null?(I=I.index,I<_?(w.flags|=2,_):I):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,I,D){return _===null||_.tag!==6?(_=Od(I,w.mode,D),_.return=w,_):(_=s(_,I),_.return=w,_)}function u(w,_,I,D){var P=I.type;return P===ri?f(w,_,I.props.children,D,I.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===gr&&Dy(P)===_.type)?(D=s(_,I.props),D.ref=wo(w,_,I),D.return=w,D):(D=Bl(I.type,I.key,I.props,null,w.mode,D),D.ref=wo(w,_,I),D.return=w,D)}function d(w,_,I,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==I.containerInfo||_.stateNode.implementation!==I.implementation?(_=Ld(I,w.mode,D),_.return=w,_):(_=s(_,I.children||[]),_.return=w,_)}function f(w,_,I,D,P){return _===null||_.tag!==7?(_=ws(I,w.mode,D,P),_.return=w,_):(_=s(_,I),_.return=w,_)}function p(w,_,I){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Od(""+_,w.mode,I),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ll:return I=Bl(_.type,_.key,_.props,null,w.mode,I),I.ref=wo(w,null,_),I.return=w,I;case ni:return _=Ld(_,w.mode,I),_.return=w,_;case gr:var D=_._init;return p(w,D(_._payload),I)}if(So(_)||go(_))return _=ws(_,w.mode,I,null),_.return=w,_;xl(w,_)}return null}function g(w,_,I,D){var P=_!==null?_.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return P!==null?null:l(w,_,""+I,D);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ll:return I.key===P?u(w,_,I,D):null;case ni:return I.key===P?d(w,_,I,D):null;case gr:return P=I._init,g(w,_,P(I._payload),D)}if(So(I)||go(I))return P!==null?null:f(w,_,I,D,null);xl(w,I)}return null}function E(w,_,I,D,P){if(typeof D=="string"&&D!==""||typeof D=="number")return w=w.get(I)||null,l(_,w,""+D,P);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ll:return w=w.get(D.key===null?I:D.key)||null,u(_,w,D,P);case ni:return w=w.get(D.key===null?I:D.key)||null,d(_,w,D,P);case gr:var M=D._init;return E(w,_,I,M(D._payload),P)}if(So(D)||go(D))return w=w.get(I)||null,f(_,w,D,P,null);xl(_,D)}return null}function y(w,_,I,D){for(var P=null,M=null,b=_,x=_=0,S=null;b!==null&&x<I.length;x++){b.index>x?(S=b,b=null):S=b.sibling;var k=g(w,b,I[x],D);if(k===null){b===null&&(b=S);break}t&&b&&k.alternate===null&&e(w,b),_=i(k,_,x),M===null?P=k:M.sibling=k,M=k,b=S}if(x===I.length)return n(w,b),ve&&ds(w,x),P;if(b===null){for(;x<I.length;x++)b=p(w,I[x],D),b!==null&&(_=i(b,_,x),M===null?P=b:M.sibling=b,M=b);return ve&&ds(w,x),P}for(b=r(w,b);x<I.length;x++)S=E(b,w,x,I[x],D),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?x:S.key),_=i(S,_,x),M===null?P=S:M.sibling=S,M=S);return t&&b.forEach(function(C){return e(w,C)}),ve&&ds(w,x),P}function N(w,_,I,D){var P=go(I);if(typeof P!="function")throw Error(U(150));if(I=P.call(I),I==null)throw Error(U(151));for(var M=P=null,b=_,x=_=0,S=null,k=I.next();b!==null&&!k.done;x++,k=I.next()){b.index>x?(S=b,b=null):S=b.sibling;var C=g(w,b,k.value,D);if(C===null){b===null&&(b=S);break}t&&b&&C.alternate===null&&e(w,b),_=i(C,_,x),M===null?P=C:M.sibling=C,M=C,b=S}if(k.done)return n(w,b),ve&&ds(w,x),P;if(b===null){for(;!k.done;x++,k=I.next())k=p(w,k.value,D),k!==null&&(_=i(k,_,x),M===null?P=k:M.sibling=k,M=k);return ve&&ds(w,x),P}for(b=r(w,b);!k.done;x++,k=I.next())k=E(b,w,x,k.value,D),k!==null&&(t&&k.alternate!==null&&b.delete(k.key===null?x:k.key),_=i(k,_,x),M===null?P=k:M.sibling=k,M=k);return t&&b.forEach(function(j){return e(w,j)}),ve&&ds(w,x),P}function T(w,_,I,D){if(typeof I=="object"&&I!==null&&I.type===ri&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case ll:e:{for(var P=I.key,M=_;M!==null;){if(M.key===P){if(P=I.type,P===ri){if(M.tag===7){n(w,M.sibling),_=s(M,I.props.children),_.return=w,w=_;break e}}else if(M.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===gr&&Dy(P)===M.type){n(w,M.sibling),_=s(M,I.props),_.ref=wo(w,M,I),_.return=w,w=_;break e}n(w,M);break}else e(w,M);M=M.sibling}I.type===ri?(_=ws(I.props.children,w.mode,D,I.key),_.return=w,w=_):(D=Bl(I.type,I.key,I.props,null,w.mode,D),D.ref=wo(w,_,I),D.return=w,w=D)}return o(w);case ni:e:{for(M=I.key;_!==null;){if(_.key===M)if(_.tag===4&&_.stateNode.containerInfo===I.containerInfo&&_.stateNode.implementation===I.implementation){n(w,_.sibling),_=s(_,I.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=Ld(I,w.mode,D),_.return=w,w=_}return o(w);case gr:return M=I._init,T(w,_,M(I._payload),D)}if(So(I))return y(w,_,I,D);if(go(I))return N(w,_,I,D);xl(w,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,_!==null&&_.tag===6?(n(w,_.sibling),_=s(_,I),_.return=w,w=_):(n(w,_),_=Od(I,w.mode,D),_.return=w,w=_),o(w)):n(w,_)}return T}var Ai=zw(!0),Bw=zw(!1),mc=Jr(null),gc=null,di=null,ip=null;function op(){ip=di=gc=null}function ap(t){var e=mc.current;ge(mc),t._currentValue=e}function Uh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function vi(t,e){gc=t,ip=di=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wt=!0),t.firstContext=null)}function qt(t){var e=t._currentValue;if(ip!==t)if(t={context:t,memoizedValue:e,next:null},di===null){if(gc===null)throw Error(U(308));di=t,gc.dependencies={lanes:0,firstContext:t}}else di=di.next=t;return e}var ms=null;function lp(t){ms===null?ms=[t]:ms.push(t)}function Hw(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,lp(e)):(n.next=s.next,s.next=n),e.interleaved=n,qn(t,r)}function qn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yr=!1;function cp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ww(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,qn(t,n)}return s=r.interleaved,s===null?(e.next=e,lp(r)):(e.next=s.next,s.next=e),r.interleaved=e,qn(t,n)}function Vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gf(t,n)}}function Oy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function yc(t,e,n,r){var s=t.updateQueue;yr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,f=d=u=null,l=i;do{var g=l.lane,E=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,N=l;switch(g=e,E=n,N.tag){case 1:if(y=N.payload,typeof y=="function"){p=y.call(E,p,g);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=N.payload,g=typeof y=="function"?y.call(E,p,g):y,g==null)break e;p=we({},p,g);break e;case 2:yr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else E={eventTime:E,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=E,u=p):f=f.next=E,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=p),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Ns|=o,t.lanes=o,t.memoizedState=p}}function Ly(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(U(191,s));s.call(r)}}}var Da={},_n=Jr(Da),ca=Jr(Da),ua=Jr(Da);function gs(t){if(t===Da)throw Error(U(174));return t}function up(t,e){switch(ue(ua,e),ue(ca,t),ue(_n,Da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_h(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_h(e,t)}ge(_n),ue(_n,e)}function ki(){ge(_n),ge(ca),ge(ua)}function qw(t){gs(ua.current);var e=gs(_n.current),n=_h(e,t.type);e!==n&&(ue(ca,t),ue(_n,n))}function dp(t){ca.current===t&&(ge(_n),ge(ca))}var xe=Jr(0);function vc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kd=[];function hp(){for(var t=0;t<kd.length;t++)kd[t]._workInProgressVersionPrimary=null;kd.length=0}var Ml=nr.ReactCurrentDispatcher,Cd=nr.ReactCurrentBatchConfig,Ss=0,_e=null,Fe=null,qe=null,xc=!1,Fo=!1,da=0,kS=0;function st(){throw Error(U(321))}function fp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function pp(t,e,n,r,s,i){if(Ss=i,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ml.current=t===null||t.memoizedState===null?jS:DS,t=n(r,s),Fo){i=0;do{if(Fo=!1,da=0,25<=i)throw Error(U(301));i+=1,qe=Fe=null,e.updateQueue=null,Ml.current=OS,t=n(r,s)}while(Fo)}if(Ml.current=_c,e=Fe!==null&&Fe.next!==null,Ss=0,qe=Fe=_e=null,xc=!1,e)throw Error(U(300));return t}function mp(){var t=da!==0;return da=0,t}function mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?_e.memoizedState=qe=t:qe=qe.next=t,qe}function Kt(){if(Fe===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=qe===null?_e.memoizedState:qe.next;if(e!==null)qe=e,Fe=t;else{if(t===null)throw Error(U(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},qe===null?_e.memoizedState=qe=t:qe=qe.next=t}return qe}function ha(t,e){return typeof e=="function"?e(t):e}function Rd(t){var e=Kt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Fe,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,d=i;do{var f=d.lane;if((Ss&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var p={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,_e.lanes|=f,Ns|=f}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=l,ln(r,e.memoizedState)||(wt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,_e.lanes|=i,Ns|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pd(t){var e=Kt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);ln(i,e.memoizedState)||(wt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Kw(){}function Gw(t,e){var n=_e,r=Kt(),s=e(),i=!ln(r.memoizedState,s);if(i&&(r.memoizedState=s,wt=!0),r=r.queue,gp(Jw.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,fa(9,Yw.bind(null,n,r,s,e),void 0,null),Ke===null)throw Error(U(349));Ss&30||Qw(n,e,s)}return s}function Qw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Yw(t,e,n,r){e.value=n,e.getSnapshot=r,Xw(e)&&Zw(t)}function Jw(t,e,n){return n(function(){Xw(e)&&Zw(t)})}function Xw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function Zw(t){var e=qn(t,1);e!==null&&sn(e,t,1,-1)}function Vy(t){var e=mn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},e.queue=t,t=t.dispatch=PS.bind(null,_e,t),[e.memoizedState,t]}function fa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function e0(){return Kt().memoizedState}function Fl(t,e,n,r){var s=mn();_e.flags|=t,s.memoizedState=fa(1|e,n,void 0,r===void 0?null:r)}function su(t,e,n,r){var s=Kt();r=r===void 0?null:r;var i=void 0;if(Fe!==null){var o=Fe.memoizedState;if(i=o.destroy,r!==null&&fp(r,o.deps)){s.memoizedState=fa(e,n,i,r);return}}_e.flags|=t,s.memoizedState=fa(1|e,n,i,r)}function My(t,e){return Fl(8390656,8,t,e)}function gp(t,e){return su(2048,8,t,e)}function t0(t,e){return su(4,2,t,e)}function n0(t,e){return su(4,4,t,e)}function r0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function s0(t,e,n){return n=n!=null?n.concat([t]):null,su(4,4,r0.bind(null,e,t),n)}function yp(){}function i0(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function o0(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function a0(t,e,n){return Ss&21?(ln(n,e)||(n=hw(),_e.lanes|=n,Ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wt=!0),t.memoizedState=n)}function CS(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Cd.transition;Cd.transition={};try{t(!1),e()}finally{ae=n,Cd.transition=r}}function l0(){return Kt().memoizedState}function RS(t,e,n){var r=Dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},c0(t))u0(e,n);else if(n=Hw(t,e,n,r),n!==null){var s=mt();sn(n,t,r,s),d0(n,e,r)}}function PS(t,e,n){var r=Dr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(c0(t))u0(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,ln(l,o)){var u=e.interleaved;u===null?(s.next=s,lp(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Hw(t,e,s,r),n!==null&&(s=mt(),sn(n,t,r,s),d0(n,e,r))}}function c0(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function u0(t,e){Fo=xc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function d0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gf(t,n)}}var _c={readContext:qt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},jS={readContext:qt,useCallback:function(t,e){return mn().memoizedState=[t,e===void 0?null:e],t},useContext:qt,useEffect:My,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fl(4194308,4,r0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fl(4,2,t,e)},useMemo:function(t,e){var n=mn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=mn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=RS.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=mn();return t={current:t},e.memoizedState=t},useState:Vy,useDebugValue:yp,useDeferredValue:function(t){return mn().memoizedState=t},useTransition:function(){var t=Vy(!1),e=t[0];return t=CS.bind(null,t[1]),mn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,s=mn();if(ve){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Ke===null)throw Error(U(349));Ss&30||Qw(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,My(Jw.bind(null,r,i,t),[t]),r.flags|=2048,fa(9,Yw.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=mn(),e=Ke.identifierPrefix;if(ve){var n=Vn,r=Ln;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=da++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},DS={readContext:qt,useCallback:i0,useContext:qt,useEffect:gp,useImperativeHandle:s0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:o0,useReducer:Rd,useRef:e0,useState:function(){return Rd(ha)},useDebugValue:yp,useDeferredValue:function(t){var e=Kt();return a0(e,Fe.memoizedState,t)},useTransition:function(){var t=Rd(ha)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:Kw,useSyncExternalStore:Gw,useId:l0,unstable_isNewReconciler:!1},OS={readContext:qt,useCallback:i0,useContext:qt,useEffect:gp,useImperativeHandle:s0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:o0,useReducer:Pd,useRef:e0,useState:function(){return Pd(ha)},useDebugValue:yp,useDeferredValue:function(t){var e=Kt();return Fe===null?e.memoizedState=t:a0(e,Fe.memoizedState,t)},useTransition:function(){var t=Pd(ha)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:Kw,useSyncExternalStore:Gw,useId:l0,unstable_isNewReconciler:!1};function Xt(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $h(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var iu={isMounted:function(t){return(t=t._reactInternals)?Fs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),s=Dr(t),i=Un(r,s);i.payload=e,n!=null&&(i.callback=n),e=Pr(t,i,s),e!==null&&(sn(e,t,s,r),Vl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),s=Dr(t),i=Un(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Pr(t,i,s),e!==null&&(sn(e,t,s,r),Vl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=Dr(t),s=Un(n,r);s.tag=2,e!=null&&(s.callback=e),e=Pr(t,s,r),e!==null&&(sn(e,t,r,n),Vl(e,t,r))}};function Fy(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!ia(n,r)||!ia(s,i):!0}function h0(t,e,n){var r=!1,s=zr,i=e.contextType;return typeof i=="object"&&i!==null?i=qt(i):(s=bt(e)?Ts:ut.current,r=e.contextTypes,i=(r=r!=null)?Si(t,s):zr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=iu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Uy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&iu.enqueueReplaceState(e,e.state,null)}function zh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},cp(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=qt(i):(i=bt(e)?Ts:ut.current,s.context=Si(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&($h(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&iu.enqueueReplaceState(s,s.state,null),yc(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ci(t,e){try{var n="",r=e;do n+=cI(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function jd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var LS=typeof WeakMap=="function"?WeakMap:Map;function f0(t,e,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ec||(Ec=!0,Zh=r),Bh(t,e)},n}function p0(t,e,n){n=Un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Bh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Bh(t,e),typeof r!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function $y(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new LS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=YS.bind(null,t,e,n),e.then(t,t))}function zy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function By(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Un(-1,1),e.tag=2,Pr(n,e,1))),n.lanes|=1),t)}var VS=nr.ReactCurrentOwner,wt=!1;function pt(t,e,n,r){e.child=t===null?Bw(e,null,n,r):Ai(e,t.child,n,r)}function Hy(t,e,n,r,s){n=n.render;var i=e.ref;return vi(e,s),r=pp(t,e,n,r,i,s),n=mp(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Kn(t,e,s)):(ve&&n&&np(e),e.flags|=1,pt(t,e,r,s),e.child)}function Wy(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Ip(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,m0(t,e,i,r,s)):(t=Bl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ia,n(o,r)&&t.ref===e.ref)return Kn(t,e,s)}return e.flags|=1,t=Or(i,r),t.ref=e.ref,t.return=e,e.child=t}function m0(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ia(i,r)&&t.ref===e.ref)if(wt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(wt=!0);else return e.lanes=t.lanes,Kn(t,e,s)}return Hh(t,e,n,r,s)}function g0(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(fi,Rt),Rt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ue(fi,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ue(fi,Rt),Rt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ue(fi,Rt),Rt|=r;return pt(t,e,s,n),e.child}function y0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hh(t,e,n,r,s){var i=bt(n)?Ts:ut.current;return i=Si(e,i),vi(e,s),n=pp(t,e,n,r,i,s),r=mp(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Kn(t,e,s)):(ve&&r&&np(e),e.flags|=1,pt(t,e,n,s),e.child)}function qy(t,e,n,r,s){if(bt(n)){var i=!0;hc(e)}else i=!1;if(vi(e,s),e.stateNode===null)Ul(t,e),h0(e,n,r),zh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=qt(d):(d=bt(n)?Ts:ut.current,d=Si(e,d));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&Uy(e,o,r,d),yr=!1;var g=e.memoizedState;o.state=g,yc(e,r,o,s),u=e.memoizedState,l!==r||g!==u||Et.current||yr?(typeof f=="function"&&($h(e,n,f,r),u=e.memoizedState),(l=yr||Fy(e,n,l,r,g,u,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Ww(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Xt(e.type,l),o.props=d,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=qt(u):(u=bt(n)?Ts:ut.current,u=Si(e,u));var E=n.getDerivedStateFromProps;(f=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&Uy(e,o,r,u),yr=!1,g=e.memoizedState,o.state=g,yc(e,r,o,s);var y=e.memoizedState;l!==p||g!==y||Et.current||yr?(typeof E=="function"&&($h(e,n,E,r),y=e.memoizedState),(d=yr||Fy(e,n,d,r,g,y,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Wh(t,e,n,r,i,s)}function Wh(t,e,n,r,s,i){y0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Ry(e,n,!1),Kn(t,e,i);r=e.stateNode,VS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ai(e,t.child,null,i),e.child=Ai(e,null,l,i)):pt(t,e,l,i),e.memoizedState=r.state,s&&Ry(e,n,!0),e.child}function v0(t){var e=t.stateNode;e.pendingContext?Cy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cy(t,e.context,!1),up(t,e.containerInfo)}function Ky(t,e,n,r,s){return Ni(),sp(s),e.flags|=256,pt(t,e,n,r),e.child}var qh={dehydrated:null,treeContext:null,retryLane:0};function Kh(t){return{baseLanes:t,cachePool:null,transitions:null}}function x0(t,e,n){var r=e.pendingProps,s=xe.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ue(xe,s&1),t===null)return Fh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=lu(o,r,0,null),t=ws(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Kh(n),e.memoizedState=qh,t):vp(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return MS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Or(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Or(l,i):(i=ws(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Kh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=qh,r}return i=t.child,t=i.sibling,r=Or(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vp(t,e){return e=lu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _l(t,e,n,r){return r!==null&&sp(r),Ai(e,t.child,null,n),t=vp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function MS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=jd(Error(U(422))),_l(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=lu({mode:"visible",children:r.children},s,0,null),i=ws(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Ai(e,t.child,null,o),e.child.memoizedState=Kh(o),e.memoizedState=qh,i);if(!(e.mode&1))return _l(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(U(419)),r=jd(i,r,void 0),_l(t,e,o,r)}if(l=(o&t.childLanes)!==0,wt||l){if(r=Ke,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,qn(t,s),sn(r,t,s,-1))}return Tp(),r=jd(Error(U(421))),_l(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=JS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,jt=Rr(s.nextSibling),Ot=e,ve=!0,en=null,t!==null&&($t[zt++]=Ln,$t[zt++]=Vn,$t[zt++]=Is,Ln=t.id,Vn=t.overflow,Is=e),e=vp(e,r.children),e.flags|=4096,e)}function Gy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Uh(t.return,e,n)}function Dd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function _0(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(pt(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gy(t,n,e);else if(t.tag===19)Gy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(xe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&vc(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Dd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&vc(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Dd(e,!0,n,null,i);break;case"together":Dd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function FS(t,e,n){switch(e.tag){case 3:v0(e),Ni();break;case 5:qw(e);break;case 1:bt(e.type)&&hc(e);break;case 4:up(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ue(mc,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ue(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?x0(t,e,n):(ue(xe,xe.current&1),t=Kn(t,e,n),t!==null?t.sibling:null);ue(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _0(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ue(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,g0(t,e,n)}return Kn(t,e,n)}var w0,Gh,E0,b0;w0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gh=function(){};E0=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,gs(_n.current);var i=null;switch(n){case"input":s=gh(t,s),r=gh(t,r),i=[];break;case"select":s=we({},s,{value:void 0}),r=we({},r,{value:void 0}),i=[];break;case"textarea":s=xh(t,s),r=xh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=uc)}wh(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Xo.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&fe("scroll",t),i||l===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};b0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Eo(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function it(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function US(t,e,n){var r=e.pendingProps;switch(rp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(e),null;case 1:return bt(e.type)&&dc(),it(e),null;case 3:return r=e.stateNode,ki(),ge(Et),ge(ut),hp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,en!==null&&(nf(en),en=null))),Gh(t,e),it(e),null;case 5:dp(e);var s=gs(ua.current);if(n=e.type,t!==null&&e.stateNode!=null)E0(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return it(e),null}if(t=gs(_n.current),vl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[yn]=e,r[la]=i,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(s=0;s<Ao.length;s++)fe(Ao[s],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":ry(r,i),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},fe("invalid",r);break;case"textarea":iy(r,i),fe("invalid",r)}wh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&yl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&yl(r.textContent,l,t),s=["children",""+l]):Xo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":cl(r),sy(r,i,!0);break;case"textarea":cl(r),oy(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=uc)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=J_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[yn]=e,t[la]=r,w0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Eh(n,r),n){case"dialog":fe("cancel",t),fe("close",t),s=r;break;case"iframe":case"object":case"embed":fe("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ao.length;s++)fe(Ao[s],t);s=r;break;case"source":fe("error",t),s=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),s=r;break;case"details":fe("toggle",t),s=r;break;case"input":ry(t,r),s=gh(t,r),fe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=we({},r,{value:void 0}),fe("invalid",t);break;case"textarea":iy(t,r),s=xh(t,r),fe("invalid",t);break;default:s=r}wh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?ew(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&X_(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zo(t,u):typeof u=="number"&&Zo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Xo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&fe("scroll",t):u!=null&&zf(t,i,u,o))}switch(n){case"input":cl(t),sy(t,r,!1);break;case"textarea":cl(t),oy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+$r(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?pi(t,!!r.multiple,i,!1):r.defaultValue!=null&&pi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=uc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return it(e),null;case 6:if(t&&e.stateNode!=null)b0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=gs(ua.current),gs(_n.current),vl(e)){if(r=e.stateNode,n=e.memoizedProps,r[yn]=e,(i=r.nodeValue!==n)&&(t=Ot,t!==null))switch(t.tag){case 3:yl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=e,e.stateNode=r}return it(e),null;case 13:if(ge(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&jt!==null&&e.mode&1&&!(e.flags&128))$w(),Ni(),e.flags|=98560,i=!1;else if(i=vl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(U(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(U(317));i[yn]=e}else Ni(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;it(e),i=!1}else en!==null&&(nf(en),en=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?$e===0&&($e=3):Tp())),e.updateQueue!==null&&(e.flags|=4),it(e),null);case 4:return ki(),Gh(t,e),t===null&&oa(e.stateNode.containerInfo),it(e),null;case 10:return ap(e.type._context),it(e),null;case 17:return bt(e.type)&&dc(),it(e),null;case 19:if(ge(xe),i=e.memoizedState,i===null)return it(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Eo(i,!1);else{if($e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vc(t),o!==null){for(e.flags|=128,Eo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ue(xe,xe.current&1|2),e.child}t=t.sibling}i.tail!==null&&Re()>Ri&&(e.flags|=128,r=!0,Eo(i,!1),e.lanes=4194304)}else{if(!r)if(t=vc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Eo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ve)return it(e),null}else 2*Re()-i.renderingStartTime>Ri&&n!==1073741824&&(e.flags|=128,r=!0,Eo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Re(),e.sibling=null,n=xe.current,ue(xe,r?n&1|2:n&1),e):(it(e),null);case 22:case 23:return bp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(it(e),e.subtreeFlags&6&&(e.flags|=8192)):it(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function $S(t,e){switch(rp(e),e.tag){case 1:return bt(e.type)&&dc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ki(),ge(Et),ge(ut),hp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dp(e),null;case 13:if(ge(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Ni()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(xe),null;case 4:return ki(),null;case 10:return ap(e.type._context),null;case 22:case 23:return bp(),null;case 24:return null;default:return null}}var wl=!1,lt=!1,zS=typeof WeakSet=="function"?WeakSet:Set,W=null;function hi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function Qh(t,e,n){try{n()}catch(r){Se(t,e,r)}}var Qy=!1;function BS(t,e){if(Ph=ac,t=Aw(),tp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,f=0,p=t,g=null;t:for(;;){for(var E;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(E=p.firstChild)!==null;)g=p,p=E;for(;;){if(p===t)break t;if(g===n&&++d===s&&(l=o),g===i&&++f===r&&(u=o),(E=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(jh={focusedElem:t,selectionRange:n},ac=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var N=y.memoizedProps,T=y.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?N:Xt(e.type,N),T);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(D){Se(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return y=Qy,Qy=!1,y}function Uo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Qh(e,n,i)}s=s.next}while(s!==r)}}function ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Yh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function T0(t){var e=t.alternate;e!==null&&(t.alternate=null,T0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yn],delete e[la],delete e[Lh],delete e[IS],delete e[SS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function I0(t){return t.tag===5||t.tag===3||t.tag===4}function Yy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=uc));else if(r!==4&&(t=t.child,t!==null))for(Jh(t,e,n),t=t.sibling;t!==null;)Jh(t,e,n),t=t.sibling}function Xh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xh(t,e,n),t=t.sibling;t!==null;)Xh(t,e,n),t=t.sibling}var Qe=null,Zt=!1;function pr(t,e,n){for(n=n.child;n!==null;)S0(t,e,n),n=n.sibling}function S0(t,e,n){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(Xc,n)}catch{}switch(n.tag){case 5:lt||hi(n,e);case 6:var r=Qe,s=Zt;Qe=null,pr(t,e,n),Qe=r,Zt=s,Qe!==null&&(Zt?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(Zt?(t=Qe,n=n.stateNode,t.nodeType===8?Nd(t.parentNode,n):t.nodeType===1&&Nd(t,n),ra(t)):Nd(Qe,n.stateNode));break;case 4:r=Qe,s=Zt,Qe=n.stateNode.containerInfo,Zt=!0,pr(t,e,n),Qe=r,Zt=s;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Qh(n,e,o),s=s.next}while(s!==r)}pr(t,e,n);break;case 1:if(!lt&&(hi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Se(n,e,l)}pr(t,e,n);break;case 21:pr(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,pr(t,e,n),lt=r):pr(t,e,n);break;default:pr(t,e,n)}}function Jy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zS),e.forEach(function(r){var s=XS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Jt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Qe=l.stateNode,Zt=!1;break e;case 3:Qe=l.stateNode.containerInfo,Zt=!0;break e;case 4:Qe=l.stateNode.containerInfo,Zt=!0;break e}l=l.return}if(Qe===null)throw Error(U(160));S0(i,o,s),Qe=null,Zt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){Se(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)N0(e,t),e=e.sibling}function N0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jt(e,t),pn(t),r&4){try{Uo(3,t,t.return),ou(3,t)}catch(N){Se(t,t.return,N)}try{Uo(5,t,t.return)}catch(N){Se(t,t.return,N)}}break;case 1:Jt(e,t),pn(t),r&512&&n!==null&&hi(n,n.return);break;case 5:if(Jt(e,t),pn(t),r&512&&n!==null&&hi(n,n.return),t.flags&32){var s=t.stateNode;try{Zo(s,"")}catch(N){Se(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Q_(s,i),Eh(l,o);var d=Eh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?ew(s,p):f==="dangerouslySetInnerHTML"?X_(s,p):f==="children"?Zo(s,p):zf(s,f,p,d)}switch(l){case"input":yh(s,i);break;case"textarea":Y_(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var E=i.value;E!=null?pi(s,!!i.multiple,E,!1):g!==!!i.multiple&&(i.defaultValue!=null?pi(s,!!i.multiple,i.defaultValue,!0):pi(s,!!i.multiple,i.multiple?[]:"",!1))}s[la]=i}catch(N){Se(t,t.return,N)}}break;case 6:if(Jt(e,t),pn(t),r&4){if(t.stateNode===null)throw Error(U(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){Se(t,t.return,N)}}break;case 3:if(Jt(e,t),pn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ra(e.containerInfo)}catch(N){Se(t,t.return,N)}break;case 4:Jt(e,t),pn(t);break;case 13:Jt(e,t),pn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(wp=Re())),r&4&&Jy(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(d=lt)||f,Jt(e,t),lt=d):Jt(e,t),pn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(p=W=f;W!==null;){switch(g=W,E=g.child,g.tag){case 0:case 11:case 14:case 15:Uo(4,g,g.return);break;case 1:hi(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(N){Se(r,n,N)}}break;case 5:hi(g,g.return);break;case 22:if(g.memoizedState!==null){Zy(p);continue}}E!==null?(E.return=g,W=E):Zy(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{s=p.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Z_("display",o))}catch(N){Se(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(N){Se(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Jt(e,t),pn(t),r&4&&Jy(t);break;case 21:break;default:Jt(e,t),pn(t)}}function pn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(I0(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Zo(s,""),r.flags&=-33);var i=Yy(t);Xh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Yy(t);Jh(t,l,o);break;default:throw Error(U(161))}}catch(u){Se(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function HS(t,e,n){W=t,A0(t)}function A0(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var s=W,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||wl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||lt;l=wl;var d=lt;if(wl=o,(lt=u)&&!d)for(W=s;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?ev(s):u!==null?(u.return=o,W=u):ev(s);for(;i!==null;)W=i,A0(i),i=i.sibling;W=s,wl=l,lt=d}Xy(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,W=i):Xy(t)}}function Xy(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||ou(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Xt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Ly(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ly(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ra(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}lt||e.flags&512&&Yh(e)}catch(g){Se(e,e.return,g)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Zy(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function ev(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ou(4,e)}catch(u){Se(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Se(e,s,u)}}var i=e.return;try{Yh(e)}catch(u){Se(e,i,u)}break;case 5:var o=e.return;try{Yh(e)}catch(u){Se(e,o,u)}}}catch(u){Se(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var WS=Math.ceil,wc=nr.ReactCurrentDispatcher,xp=nr.ReactCurrentOwner,Wt=nr.ReactCurrentBatchConfig,ie=0,Ke=null,Oe=null,Xe=0,Rt=0,fi=Jr(0),$e=0,pa=null,Ns=0,au=0,_p=0,$o=null,xt=null,wp=0,Ri=1/0,Pn=null,Ec=!1,Zh=null,jr=null,El=!1,Ir=null,bc=0,zo=0,ef=null,$l=-1,zl=0;function mt(){return ie&6?Re():$l!==-1?$l:$l=Re()}function Dr(t){return t.mode&1?ie&2&&Xe!==0?Xe&-Xe:AS.transition!==null?(zl===0&&(zl=hw()),zl):(t=ae,t!==0||(t=window.event,t=t===void 0?16:xw(t.type)),t):1}function sn(t,e,n,r){if(50<zo)throw zo=0,ef=null,Error(U(185));Ra(t,n,r),(!(ie&2)||t!==Ke)&&(t===Ke&&(!(ie&2)&&(au|=n),$e===4&&xr(t,Xe)),Tt(t,r),n===1&&ie===0&&!(e.mode&1)&&(Ri=Re()+500,ru&&Xr()))}function Tt(t,e){var n=t.callbackNode;AI(t,e);var r=oc(t,t===Ke?Xe:0);if(r===0)n!==null&&cy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&cy(n),e===1)t.tag===0?NS(tv.bind(null,t)):Mw(tv.bind(null,t)),bS(function(){!(ie&6)&&Xr()}),n=null;else{switch(fw(r)){case 1:n=Kf;break;case 4:n=uw;break;case 16:n=ic;break;case 536870912:n=dw;break;default:n=ic}n=L0(n,k0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function k0(t,e){if($l=-1,zl=0,ie&6)throw Error(U(327));var n=t.callbackNode;if(xi()&&t.callbackNode!==n)return null;var r=oc(t,t===Ke?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Tc(t,r);else{e=r;var s=ie;ie|=2;var i=R0();(Ke!==t||Xe!==e)&&(Pn=null,Ri=Re()+500,_s(t,e));do try{GS();break}catch(l){C0(t,l)}while(!0);op(),wc.current=i,ie=s,Oe!==null?e=0:(Ke=null,Xe=0,e=$e)}if(e!==0){if(e===2&&(s=Nh(t),s!==0&&(r=s,e=tf(t,s))),e===1)throw n=pa,_s(t,0),xr(t,r),Tt(t,Re()),n;if(e===6)xr(t,r);else{if(s=t.current.alternate,!(r&30)&&!qS(s)&&(e=Tc(t,r),e===2&&(i=Nh(t),i!==0&&(r=i,e=tf(t,i))),e===1))throw n=pa,_s(t,0),xr(t,r),Tt(t,Re()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:hs(t,xt,Pn);break;case 3:if(xr(t,r),(r&130023424)===r&&(e=wp+500-Re(),10<e)){if(oc(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Oh(hs.bind(null,t,xt,Pn),e);break}hs(t,xt,Pn);break;case 4:if(xr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-rn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*WS(r/1960))-r,10<r){t.timeoutHandle=Oh(hs.bind(null,t,xt,Pn),r);break}hs(t,xt,Pn);break;case 5:hs(t,xt,Pn);break;default:throw Error(U(329))}}}return Tt(t,Re()),t.callbackNode===n?k0.bind(null,t):null}function tf(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(_s(t,e).flags|=256),t=Tc(t,e),t!==2&&(e=xt,xt=n,e!==null&&nf(e)),t}function nf(t){xt===null?xt=t:xt.push.apply(xt,t)}function qS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!ln(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(t,e){for(e&=~_p,e&=~au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rn(e),r=1<<n;t[n]=-1,e&=~r}}function tv(t){if(ie&6)throw Error(U(327));xi();var e=oc(t,0);if(!(e&1))return Tt(t,Re()),null;var n=Tc(t,e);if(t.tag!==0&&n===2){var r=Nh(t);r!==0&&(e=r,n=tf(t,r))}if(n===1)throw n=pa,_s(t,0),xr(t,e),Tt(t,Re()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hs(t,xt,Pn),Tt(t,Re()),null}function Ep(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Ri=Re()+500,ru&&Xr())}}function As(t){Ir!==null&&Ir.tag===0&&!(ie&6)&&xi();var e=ie;ie|=1;var n=Wt.transition,r=ae;try{if(Wt.transition=null,ae=1,t)return t()}finally{ae=r,Wt.transition=n,ie=e,!(ie&6)&&Xr()}}function bp(){Rt=fi.current,ge(fi)}function _s(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ES(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(rp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dc();break;case 3:ki(),ge(Et),ge(ut),hp();break;case 5:dp(r);break;case 4:ki();break;case 13:ge(xe);break;case 19:ge(xe);break;case 10:ap(r.type._context);break;case 22:case 23:bp()}n=n.return}if(Ke=t,Oe=t=Or(t.current,null),Xe=Rt=e,$e=0,pa=null,_p=au=Ns=0,xt=$o=null,ms!==null){for(e=0;e<ms.length;e++)if(n=ms[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}ms=null}return t}function C0(t,e){do{var n=Oe;try{if(op(),Ml.current=_c,xc){for(var r=_e.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}xc=!1}if(Ss=0,qe=Fe=_e=null,Fo=!1,da=0,xp.current=null,n===null||n.return===null){$e=1,pa=e,Oe=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Xe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var E=zy(o);if(E!==null){E.flags&=-257,By(E,o,l,i,e),E.mode&1&&$y(i,d,e),e=E,u=d;var y=e.updateQueue;if(y===null){var N=new Set;N.add(u),e.updateQueue=N}else y.add(u);break e}else{if(!(e&1)){$y(i,d,e),Tp();break e}u=Error(U(426))}}else if(ve&&l.mode&1){var T=zy(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),By(T,o,l,i,e),sp(Ci(u,l));break e}}i=u=Ci(u,l),$e!==4&&($e=2),$o===null?$o=[i]:$o.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var w=f0(i,u,e);Oy(i,w);break e;case 1:l=u;var _=i.type,I=i.stateNode;if(!(i.flags&128)&&(typeof _.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(jr===null||!jr.has(I)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=p0(i,l,e);Oy(i,D);break e}}i=i.return}while(i!==null)}j0(n)}catch(P){e=P,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function R0(){var t=wc.current;return wc.current=_c,t===null?_c:t}function Tp(){($e===0||$e===3||$e===2)&&($e=4),Ke===null||!(Ns&268435455)&&!(au&268435455)||xr(Ke,Xe)}function Tc(t,e){var n=ie;ie|=2;var r=R0();(Ke!==t||Xe!==e)&&(Pn=null,_s(t,e));do try{KS();break}catch(s){C0(t,s)}while(!0);if(op(),ie=n,wc.current=r,Oe!==null)throw Error(U(261));return Ke=null,Xe=0,$e}function KS(){for(;Oe!==null;)P0(Oe)}function GS(){for(;Oe!==null&&!xI();)P0(Oe)}function P0(t){var e=O0(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?j0(t):Oe=e,xp.current=null}function j0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$S(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$e=6,Oe=null;return}}else if(n=US(n,e,Rt),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);$e===0&&($e=5)}function hs(t,e,n){var r=ae,s=Wt.transition;try{Wt.transition=null,ae=1,QS(t,e,n,r)}finally{Wt.transition=s,ae=r}return null}function QS(t,e,n,r){do xi();while(Ir!==null);if(ie&6)throw Error(U(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(kI(t,i),t===Ke&&(Oe=Ke=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||El||(El=!0,L0(ic,function(){return xi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Wt.transition,Wt.transition=null;var o=ae;ae=1;var l=ie;ie|=4,xp.current=null,BS(t,n),N0(n,t),mS(jh),ac=!!Ph,jh=Ph=null,t.current=n,HS(n),_I(),ie=l,ae=o,Wt.transition=i}else t.current=n;if(El&&(El=!1,Ir=t,bc=s),i=t.pendingLanes,i===0&&(jr=null),bI(n.stateNode),Tt(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ec)throw Ec=!1,t=Zh,Zh=null,t;return bc&1&&t.tag!==0&&xi(),i=t.pendingLanes,i&1?t===ef?zo++:(zo=0,ef=t):zo=0,Xr(),null}function xi(){if(Ir!==null){var t=fw(bc),e=Wt.transition,n=ae;try{if(Wt.transition=null,ae=16>t?16:t,Ir===null)var r=!1;else{if(t=Ir,Ir=null,bc=0,ie&6)throw Error(U(331));var s=ie;for(ie|=4,W=t.current;W!==null;){var i=W,o=i.child;if(W.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(W=d;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:Uo(8,f,i)}var p=f.child;if(p!==null)p.return=f,W=p;else for(;W!==null;){f=W;var g=f.sibling,E=f.return;if(T0(f),f===d){W=null;break}if(g!==null){g.return=E,W=g;break}W=E}}}var y=i.alternate;if(y!==null){var N=y.child;if(N!==null){y.child=null;do{var T=N.sibling;N.sibling=null,N=T}while(N!==null)}}W=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,W=o;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Uo(9,i,i.return)}var w=i.sibling;if(w!==null){w.return=i.return,W=w;break e}W=i.return}}var _=t.current;for(W=_;W!==null;){o=W;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,W=I;else e:for(o=_;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ou(9,l)}}catch(P){Se(l,l.return,P)}if(l===o){W=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,W=D;break e}W=l.return}}if(ie=s,Xr(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(Xc,t)}catch{}r=!0}return r}finally{ae=n,Wt.transition=e}}return!1}function nv(t,e,n){e=Ci(n,e),e=f0(t,e,1),t=Pr(t,e,1),e=mt(),t!==null&&(Ra(t,1,e),Tt(t,e))}function Se(t,e,n){if(t.tag===3)nv(t,t,n);else for(;e!==null;){if(e.tag===3){nv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){t=Ci(n,t),t=p0(e,t,1),e=Pr(e,t,1),t=mt(),e!==null&&(Ra(e,1,t),Tt(e,t));break}}e=e.return}}function YS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,Ke===t&&(Xe&n)===n&&($e===4||$e===3&&(Xe&130023424)===Xe&&500>Re()-wp?_s(t,0):_p|=n),Tt(t,e)}function D0(t,e){e===0&&(t.mode&1?(e=hl,hl<<=1,!(hl&130023424)&&(hl=4194304)):e=1);var n=mt();t=qn(t,e),t!==null&&(Ra(t,e,n),Tt(t,n))}function JS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),D0(t,n)}function XS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),D0(t,n)}var O0;O0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Et.current)wt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wt=!1,FS(t,e,n);wt=!!(t.flags&131072)}else wt=!1,ve&&e.flags&1048576&&Fw(e,pc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ul(t,e),t=e.pendingProps;var s=Si(e,ut.current);vi(e,n),s=pp(null,e,r,t,s,n);var i=mp();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bt(r)?(i=!0,hc(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,cp(e),s.updater=iu,e.stateNode=s,s._reactInternals=e,zh(e,r,t,n),e=Wh(null,e,r,!0,i,n)):(e.tag=0,ve&&i&&np(e),pt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ul(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=eN(r),t=Xt(r,t),s){case 0:e=Hh(null,e,r,t,n);break e;case 1:e=qy(null,e,r,t,n);break e;case 11:e=Hy(null,e,r,t,n);break e;case 14:e=Wy(null,e,r,Xt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Xt(r,s),Hh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Xt(r,s),qy(t,e,r,s,n);case 3:e:{if(v0(e),t===null)throw Error(U(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Ww(t,e),yc(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Ci(Error(U(423)),e),e=Ky(t,e,r,n,s);break e}else if(r!==s){s=Ci(Error(U(424)),e),e=Ky(t,e,r,n,s);break e}else for(jt=Rr(e.stateNode.containerInfo.firstChild),Ot=e,ve=!0,en=null,n=Bw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ni(),r===s){e=Kn(t,e,n);break e}pt(t,e,r,n)}e=e.child}return e;case 5:return qw(e),t===null&&Fh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Dh(r,s)?o=null:i!==null&&Dh(r,i)&&(e.flags|=32),y0(t,e),pt(t,e,o,n),e.child;case 6:return t===null&&Fh(e),null;case 13:return x0(t,e,n);case 4:return up(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ai(e,null,r,n):pt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Xt(r,s),Hy(t,e,r,s,n);case 7:return pt(t,e,e.pendingProps,n),e.child;case 8:return pt(t,e,e.pendingProps.children,n),e.child;case 12:return pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ue(mc,r._currentValue),r._currentValue=o,i!==null)if(ln(i.value,o)){if(i.children===s.children&&!Et.current){e=Kn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Un(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Uh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Uh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}pt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,vi(e,n),s=qt(s),r=r(s),e.flags|=1,pt(t,e,r,n),e.child;case 14:return r=e.type,s=Xt(r,e.pendingProps),s=Xt(r.type,s),Wy(t,e,r,s,n);case 15:return m0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Xt(r,s),Ul(t,e),e.tag=1,bt(r)?(t=!0,hc(e)):t=!1,vi(e,n),h0(e,r,s),zh(e,r,s,n),Wh(null,e,r,!0,t,n);case 19:return _0(t,e,n);case 22:return g0(t,e,n)}throw Error(U(156,e.tag))};function L0(t,e){return cw(t,e)}function ZS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,e,n,r){return new ZS(t,e,n,r)}function Ip(t){return t=t.prototype,!(!t||!t.isReactComponent)}function eN(t){if(typeof t=="function")return Ip(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hf)return 11;if(t===Wf)return 14}return 2}function Or(t,e){var n=t.alternate;return n===null?(n=Ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Ip(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ri:return ws(n.children,s,i,e);case Bf:o=8,s|=8;break;case hh:return t=Ht(12,n,e,s|2),t.elementType=hh,t.lanes=i,t;case fh:return t=Ht(13,n,e,s),t.elementType=fh,t.lanes=i,t;case ph:return t=Ht(19,n,e,s),t.elementType=ph,t.lanes=i,t;case q_:return lu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H_:o=10;break e;case W_:o=9;break e;case Hf:o=11;break e;case Wf:o=14;break e;case gr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Ht(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function ws(t,e,n,r){return t=Ht(7,t,r,e),t.lanes=n,t}function lu(t,e,n,r){return t=Ht(22,t,r,e),t.elementType=q_,t.lanes=n,t.stateNode={isHidden:!1},t}function Od(t,e,n){return t=Ht(6,t,null,e),t.lanes=n,t}function Ld(t,e,n){return e=Ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tN(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gd(0),this.expirationTimes=gd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Sp(t,e,n,r,s,i,o,l,u){return t=new tN(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Ht(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cp(i),t}function nN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ni,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function V0(t){if(!t)return zr;t=t._reactInternals;e:{if(Fs(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(bt(n))return Vw(t,n,e)}return e}function M0(t,e,n,r,s,i,o,l,u){return t=Sp(n,r,!0,t,s,i,o,l,u),t.context=V0(null),n=t.current,r=mt(),s=Dr(n),i=Un(r,s),i.callback=e??null,Pr(n,i,s),t.current.lanes=s,Ra(t,s,r),Tt(t,r),t}function cu(t,e,n,r){var s=e.current,i=mt(),o=Dr(s);return n=V0(n),e.context===null?e.context=n:e.pendingContext=n,e=Un(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Pr(s,e,o),t!==null&&(sn(t,s,o,i),Vl(t,s,o)),o}function Ic(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Np(t,e){rv(t,e),(t=t.alternate)&&rv(t,e)}function rN(){return null}var F0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ap(t){this._internalRoot=t}uu.prototype.render=Ap.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));cu(t,e,null,null)};uu.prototype.unmount=Ap.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;As(function(){cu(null,t,null,null)}),e[Wn]=null}};function uu(t){this._internalRoot=t}uu.prototype.unstable_scheduleHydration=function(t){if(t){var e=gw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vr.length&&e!==0&&e<vr[n].priority;n++);vr.splice(n,0,t),n===0&&vw(t)}};function kp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sv(){}function sN(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=Ic(o);i.call(d)}}var o=M0(e,r,t,0,null,!1,!1,"",sv);return t._reactRootContainer=o,t[Wn]=o.current,oa(t.nodeType===8?t.parentNode:t),As(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=Ic(u);l.call(d)}}var u=Sp(t,0,!1,null,null,!1,!1,"",sv);return t._reactRootContainer=u,t[Wn]=u.current,oa(t.nodeType===8?t.parentNode:t),As(function(){cu(e,u,n,r)}),u}function hu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Ic(o);l.call(u)}}cu(e,o,t,s)}else o=sN(n,e,t,s,r);return Ic(o)}pw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=No(e.pendingLanes);n!==0&&(Gf(e,n|1),Tt(e,Re()),!(ie&6)&&(Ri=Re()+500,Xr()))}break;case 13:As(function(){var r=qn(t,1);if(r!==null){var s=mt();sn(r,t,1,s)}}),Np(t,1)}};Qf=function(t){if(t.tag===13){var e=qn(t,134217728);if(e!==null){var n=mt();sn(e,t,134217728,n)}Np(t,134217728)}};mw=function(t){if(t.tag===13){var e=Dr(t),n=qn(t,e);if(n!==null){var r=mt();sn(n,t,e,r)}Np(t,e)}};gw=function(){return ae};yw=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Th=function(t,e,n){switch(e){case"input":if(yh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=nu(r);if(!s)throw Error(U(90));G_(r),yh(r,s)}}}break;case"textarea":Y_(t,n);break;case"select":e=n.value,e!=null&&pi(t,!!n.multiple,e,!1)}};rw=Ep;sw=As;var iN={usingClientEntryPoint:!1,Events:[ja,ai,nu,tw,nw,Ep]},bo={findFiberByHostInstance:ps,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oN={bundleType:bo.bundleType,version:bo.version,rendererPackageName:bo.rendererPackageName,rendererConfig:bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=aw(t),t===null?null:t.stateNode},findFiberByHostInstance:bo.findFiberByHostInstance||rN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{Xc=bl.inject(oN),xn=bl}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iN;Mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kp(e))throw Error(U(200));return nN(t,e,null,n)};Mt.createRoot=function(t,e){if(!kp(t))throw Error(U(299));var n=!1,r="",s=F0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Sp(t,1,!1,null,null,n,!1,r,s),t[Wn]=e.current,oa(t.nodeType===8?t.parentNode:t),new Ap(e)};Mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=aw(e),t=t===null?null:t.stateNode,t};Mt.flushSync=function(t){return As(t)};Mt.hydrate=function(t,e,n){if(!du(e))throw Error(U(200));return hu(null,t,e,!0,n)};Mt.hydrateRoot=function(t,e,n){if(!kp(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=F0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=M0(e,null,t,1,n??null,s,!1,i,o),t[Wn]=e.current,oa(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new uu(e)};Mt.render=function(t,e,n){if(!du(e))throw Error(U(200));return hu(null,t,e,!1,n)};Mt.unmountComponentAtNode=function(t){if(!du(t))throw Error(U(40));return t._reactRootContainer?(As(function(){hu(null,null,t,!1,function(){t._reactRootContainer=null,t[Wn]=null})}),!0):!1};Mt.unstable_batchedUpdates=Ep;Mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!du(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return hu(t,e,n,!1,r)};Mt.version="18.3.1-next-f1338f8080-20240426";function U0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(U0)}catch(t){console.error(t)}}U0(),U_.exports=Mt;var aN=U_.exports,iv=aN;uh.createRoot=iv.createRoot,uh.hydrateRoot=iv.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ma(){return ma=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ma.apply(this,arguments)}var Sr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Sr||(Sr={}));const ov="popstate";function lN(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:l}=r.location;return rf("",{pathname:i,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:Sc(s)}return uN(e,n,null,t)}function Pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Cp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cN(){return Math.random().toString(36).substr(2,8)}function av(t,e){return{usr:t.state,key:t.key,idx:e}}function rf(t,e,n,r){return n===void 0&&(n=null),ma({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?zi(e):e,{state:n,key:e&&e.key||r||cN()})}function Sc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function zi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function uN(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,l=Sr.Pop,u=null,d=f();d==null&&(d=0,o.replaceState(ma({},o.state,{idx:d}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=Sr.Pop;let T=f(),w=T==null?null:T-d;d=T,u&&u({action:l,location:N.location,delta:w})}function g(T,w){l=Sr.Push;let _=rf(N.location,T,w);d=f()+1;let I=av(_,d),D=N.createHref(_);try{o.pushState(I,"",D)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;s.location.assign(D)}i&&u&&u({action:l,location:N.location,delta:1})}function E(T,w){l=Sr.Replace;let _=rf(N.location,T,w);d=f();let I=av(_,d),D=N.createHref(_);o.replaceState(I,"",D),i&&u&&u({action:l,location:N.location,delta:0})}function y(T){let w=s.location.origin!=="null"?s.location.origin:s.location.href,_=typeof T=="string"?T:Sc(T);return _=_.replace(/ $/,"%20"),Pe(w,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,w)}let N={get action(){return l},get location(){return t(s,o)},listen(T){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(ov,p),u=T,()=>{s.removeEventListener(ov,p),u=null}},createHref(T){return e(s,T)},createURL:y,encodeLocation(T){let w=y(T);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:g,replace:E,go(T){return o.go(T)}};return N}var lv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(lv||(lv={}));function dN(t,e,n){return n===void 0&&(n="/"),hN(t,e,n)}function hN(t,e,n,r){let s=typeof e=="string"?zi(e):e,i=Rp(s.pathname||"/",n);if(i==null)return null;let o=$0(t);fN(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let d=IN(i);l=EN(o[u],d)}return l}function $0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,l)=>{let u={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(Pe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=Lr([r,u.relativePath]),f=n.concat(u);i.children&&i.children.length>0&&(Pe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),$0(i.children,e,f,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:_N(d,i.index),routesMeta:f})};return t.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))s(i,o);else for(let u of z0(i.path))s(i,o,u)}),e}function z0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=z0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?i:[i,u].join("/"))),s&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function fN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:wN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pN=/^:[\w-]+$/,mN=3,gN=2,yN=1,vN=10,xN=-2,cv=t=>t==="*";function _N(t,e){let n=t.split("/"),r=n.length;return n.some(cv)&&(r+=xN),e&&(r+=gN),n.filter(s=>!cv(s)).reduce((s,i)=>s+(pN.test(i)?mN:i===""?yN:vN),r)}function wN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function EN(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],d=l===r.length-1,f=i==="/"?e:e.slice(i.length)||"/",p=bN({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f),g=u.route;if(!p)return null;Object.assign(s,p.params),o.push({params:s,pathname:Lr([i,p.pathname]),pathnameBase:CN(Lr([i,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(i=Lr([i,p.pathnameBase]))}return o}function bN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=TN(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((d,f,p)=>{let{paramName:g,isOptional:E}=f;if(g==="*"){let N=l[p]||"";o=i.slice(0,i.length-N.length).replace(/(.)\/+$/,"$1")}const y=l[p];return E&&!y?d[g]=void 0:d[g]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:o,pattern:t}}function TN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Cp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function IN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Cp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Rp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const SN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,NN=t=>SN.test(t);function AN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?zi(t):t,i;if(n)if(NN(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Cp(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=uv(n.substring(1),"/"):i=uv(n,e)}else i=e;return{pathname:i,search:RN(r),hash:PN(s)}}function uv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Vd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Pp(t,e){let n=kN(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function jp(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=zi(t):(s=ma({},t),Pe(!s.pathname||!s.pathname.includes("?"),Vd("?","pathname","search",s)),Pe(!s.pathname||!s.pathname.includes("#"),Vd("#","pathname","hash",s)),Pe(!s.search||!s.search.includes("#"),Vd("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;s.pathname=g.join("/")}l=p>=0?e[p]:"/"}let u=AN(s,l),d=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||f)&&(u.pathname+="/"),u}const Lr=t=>t.join("/").replace(/\/\/+/g,"/"),CN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),RN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,PN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function jN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const B0=["post","put","patch","delete"];new Set(B0);const DN=["get",...B0];new Set(DN);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ga(){return ga=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ga.apply(this,arguments)}const Dp=R.createContext(null),ON=R.createContext(null),Zr=R.createContext(null),fu=R.createContext(null),rr=R.createContext({outlet:null,matches:[],isDataRoute:!1}),H0=R.createContext(null);function LN(t,e){let{relative:n}=e===void 0?{}:e;Bi()||Pe(!1);let{basename:r,navigator:s}=R.useContext(Zr),{hash:i,pathname:o,search:l}=q0(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Lr([r,o])),s.createHref({pathname:u,search:l,hash:i})}function Bi(){return R.useContext(fu)!=null}function sr(){return Bi()||Pe(!1),R.useContext(fu).location}function W0(t){R.useContext(Zr).static||R.useLayoutEffect(t)}function Te(){let{isDataRoute:t}=R.useContext(rr);return t?QN():VN()}function VN(){Bi()||Pe(!1);let t=R.useContext(Dp),{basename:e,future:n,navigator:r}=R.useContext(Zr),{matches:s}=R.useContext(rr),{pathname:i}=sr(),o=JSON.stringify(Pp(s,n.v7_relativeSplatPath)),l=R.useRef(!1);return W0(()=>{l.current=!0}),R.useCallback(function(d,f){if(f===void 0&&(f={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let p=jp(d,JSON.parse(o),i,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Lr([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,i,t])}function Op(){let{matches:t}=R.useContext(rr),e=t[t.length-1];return e?e.params:{}}function q0(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=R.useContext(Zr),{matches:s}=R.useContext(rr),{pathname:i}=sr(),o=JSON.stringify(Pp(s,r.v7_relativeSplatPath));return R.useMemo(()=>jp(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function MN(t,e){return FN(t,e)}function FN(t,e,n,r){Bi()||Pe(!1);let{navigator:s}=R.useContext(Zr),{matches:i}=R.useContext(rr),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let d=sr(),f;if(e){var p;let T=typeof e=="string"?zi(e):e;u==="/"||(p=T.pathname)!=null&&p.startsWith(u)||Pe(!1),f=T}else f=d;let g=f.pathname||"/",E=g;if(u!=="/"){let T=u.replace(/^\//,"").split("/");E="/"+g.replace(/^\//,"").split("/").slice(T.length).join("/")}let y=dN(t,{pathname:E}),N=HN(y&&y.map(T=>Object.assign({},T,{params:Object.assign({},l,T.params),pathname:Lr([u,s.encodeLocation?s.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?u:Lr([u,s.encodeLocation?s.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),i,n,r);return e&&N?R.createElement(fu.Provider,{value:{location:ga({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Sr.Pop}},N):N}function UN(){let t=GN(),e=jN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:s},n):null,null)}const $N=R.createElement(UN,null);class zN extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?R.createElement(rr.Provider,{value:this.props.routeContext},R.createElement(H0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function BN(t){let{routeContext:e,match:n,children:r}=t,s=R.useContext(Dp);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(rr.Provider,{value:e},r)}function HN(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(s=n)==null?void 0:s.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||Pe(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=f),p.route.id){let{loaderData:g,errors:E}=n,y=p.route.loader&&g[p.route.id]===void 0&&(!E||E[p.route.id]===void 0);if(p.route.lazy||y){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,p,g)=>{let E,y=!1,N=null,T=null;n&&(E=l&&p.route.id?l[p.route.id]:void 0,N=p.route.errorElement||$N,u&&(d<0&&g===0?(YN("route-fallback"),y=!0,T=null):d===g&&(y=!0,T=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,g+1)),_=()=>{let I;return E?I=N:y?I=T:p.route.Component?I=R.createElement(p.route.Component,null):p.route.element?I=p.route.element:I=f,R.createElement(BN,{match:p,routeContext:{outlet:f,matches:w,isDataRoute:n!=null},children:I})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?R.createElement(zN,{location:n.location,revalidation:n.revalidation,component:N,error:E,children:_(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):_()},null)}var K0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(K0||{}),G0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(G0||{});function WN(t){let e=R.useContext(Dp);return e||Pe(!1),e}function qN(t){let e=R.useContext(ON);return e||Pe(!1),e}function KN(t){let e=R.useContext(rr);return e||Pe(!1),e}function Q0(t){let e=KN(),n=e.matches[e.matches.length-1];return n.route.id||Pe(!1),n.route.id}function GN(){var t;let e=R.useContext(H0),n=qN(),r=Q0();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function QN(){let{router:t}=WN(K0.UseNavigateStable),e=Q0(G0.UseNavigateStable),n=R.useRef(!1);return W0(()=>{n.current=!0}),R.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,ga({fromRouteId:e},i)))},[t,e])}const dv={};function YN(t,e,n){dv[t]||(dv[t]=!0)}function JN(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function sf(t){let{to:e,replace:n,state:r,relative:s}=t;Bi()||Pe(!1);let{future:i,static:o}=R.useContext(Zr),{matches:l}=R.useContext(rr),{pathname:u}=sr(),d=Te(),f=jp(e,Pp(l,i.v7_relativeSplatPath),u,s==="path"),p=JSON.stringify(f);return R.useEffect(()=>d(JSON.parse(p),{replace:n,state:r,relative:s}),[d,p,s,n,r]),null}function pe(t){Pe(!1)}function XN(t){let{basename:e="/",children:n=null,location:r,navigationType:s=Sr.Pop,navigator:i,static:o=!1,future:l}=t;Bi()&&Pe(!1);let u=e.replace(/^\/*/,"/"),d=R.useMemo(()=>({basename:u,navigator:i,static:o,future:ga({v7_relativeSplatPath:!1},l)}),[u,l,i,o]);typeof r=="string"&&(r=zi(r));let{pathname:f="/",search:p="",hash:g="",state:E=null,key:y="default"}=r,N=R.useMemo(()=>{let T=Rp(f,u);return T==null?null:{location:{pathname:T,search:p,hash:g,state:E,key:y},navigationType:s}},[u,f,p,g,E,y,s]);return N==null?null:R.createElement(Zr.Provider,{value:d},R.createElement(fu.Provider,{children:n,value:N}))}function ZN(t){let{children:e,location:n}=t;return MN(of(e),n)}new Promise(()=>{});function of(t,e){e===void 0&&(e=[]);let n=[];return R.Children.forEach(t,(r,s)=>{if(!R.isValidElement(r))return;let i=[...e,s];if(r.type===R.Fragment){n.push.apply(n,of(r.props.children,i));return}r.type!==pe&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=of(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function af(){return af=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},af.apply(this,arguments)}function eA(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function tA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function nA(t,e){return t.button===0&&(!e||e==="_self")&&!tA(t)}const rA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],sA="6";try{window.__reactRouterVersion=sA}catch{}const iA="startTransition",hv=Y1[iA];function oA(t){let{basename:e,children:n,future:r,window:s}=t,i=R.useRef();i.current==null&&(i.current=lN({window:s,v5Compat:!0}));let o=i.current,[l,u]=R.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},f=R.useCallback(p=>{d&&hv?hv(()=>u(p)):u(p)},[u,d]);return R.useLayoutEffect(()=>o.listen(f),[o,f]),R.useEffect(()=>JN(r),[r]),R.createElement(XN,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const aA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fv=R.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:l,target:u,to:d,preventScrollReset:f,viewTransition:p}=e,g=eA(e,rA),{basename:E}=R.useContext(Zr),y,N=!1;if(typeof d=="string"&&lA.test(d)&&(y=d,aA))try{let I=new URL(window.location.href),D=d.startsWith("//")?new URL(I.protocol+d):new URL(d),P=Rp(D.pathname,E);D.origin===I.origin&&P!=null?d=P+D.search+D.hash:N=!0}catch{}let T=LN(d,{relative:s}),w=cA(d,{replace:o,state:l,target:u,preventScrollReset:f,relative:s,viewTransition:p});function _(I){r&&r(I),I.defaultPrevented||w(I)}return R.createElement("a",af({},g,{href:y||T,onClick:N||i?r:_,ref:n,target:u}))});var pv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(pv||(pv={}));var mv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(mv||(mv={}));function cA(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:l}=e===void 0?{}:e,u=Te(),d=sr(),f=q0(t,{relative:o});return R.useCallback(p=>{if(nA(p,n)){p.preventDefault();let g=r!==void 0?r:Sc(d)===Sc(f);u(t,{replace:g,state:s,preventScrollReset:i,relative:o,viewTransition:l})}},[d,u,f,r,s,n,t,i,o,l])}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=()=>{};var gv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},J0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,d=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|d>>6,E=d&63;u||(E=64,o||(g=64)),r.push(n[f],n[p],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Y0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||d==null||p==null)throw new hA;const g=i<<2|l>>4;if(r.push(g),d!==64){const E=l<<4&240|d>>2;if(r.push(E),p!==64){const y=d<<6&192|p;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fA=function(t){const e=Y0(t);return J0.encodeByteArray(e,!0)},Nc=function(t){return fA(t).replace(/\./g,"")},X0=function(t){try{return J0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=()=>pA().__FIREBASE_DEFAULTS__,gA=()=>{if(typeof process>"u"||typeof gv>"u")return;const t=gv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&X0(t[1]);return e&&JSON.parse(e)},pu=()=>{try{return uA()||mA()||gA()||yA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Z0=t=>{var e,n;return(n=(e=pu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},eE=t=>{const e=Z0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},tE=()=>{var t;return(t=pu())==null?void 0:t.config},nE=t=>{var e;return(e=pu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Lp(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Nc(JSON.stringify(n)),Nc(JSON.stringify(o)),""].join(".")}const Bo={};function xA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Bo))Bo[e]?t.emulator.push(e):t.prod.push(e);return t}function _A(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let yv=!1;function Vp(t,e){if(typeof window>"u"||typeof document>"u"||!Us(window.location.host)||Bo[t]===e||Bo[t]||yv)return;Bo[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=xA().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,E){g.setAttribute("width","24"),g.setAttribute("id",E),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function d(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{yv=!0,o()},g}function f(g,E){g.setAttribute("id",E),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=_A(r),E=n("text"),y=document.getElementById(E)||document.createElement("span"),N=n("learnmore"),T=document.getElementById(N)||document.createElement("a"),w=n("preprendIcon"),_=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const I=g.element;l(I),f(T,N);const D=d();u(_,w),I.append(_,y,T,D),document.body.appendChild(I)}i?(y.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function EA(){var e;const t=(e=pu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function TA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function IA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function SA(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function NA(){return!EA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function AA(){try{return typeof indexedDB=="object"}catch{return!1}}function kA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="FirebaseError";class dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=CA,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$s.prototype.create)}}class $s{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?RA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new dn(s,l,r)}}function RA(t,e){return t.replace(PA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const PA=/\{\$([^}]+)}/g;function jA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ks(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(vv(i)&&vv(o)){if(!ks(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function vv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function DA(t,e){const n=new OA(t,e);return n.subscribe.bind(n)}class OA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");LA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Md),s.error===void 0&&(s.error=Md),s.complete===void 0&&(s.complete=Md);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Md(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t){return t&&t._delegate?t._delegate:t}class Gt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FA(e))try{this.getOrInitializeService({instanceIdentifier:fs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=fs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fs){return this.instances.has(e)}getOptions(e=fs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:MA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fs){return this.component?this.component.multipleInstances?e:fs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MA(t){return t===fs?void 0:t}function FA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new VA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const $A={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},zA=te.INFO,BA={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},HA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=BA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mp{constructor(e){this.name=e,this._logLevel=zA,this._logHandler=HA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$A[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const WA=(t,e)=>e.some(n=>t instanceof n);let xv,_v;function qA(){return xv||(xv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KA(){return _v||(_v=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sE=new WeakMap,lf=new WeakMap,iE=new WeakMap,Fd=new WeakMap,Fp=new WeakMap;function GA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n($n(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sE.set(n,t)}).catch(()=>{}),Fp.set(e,t),e}function QA(t){if(lf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});lf.set(t,e)}let cf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YA(t){cf=t(cf)}function JA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ud(this),e,...n);return iE.set(r,e.sort?e.sort():[e]),$n(r)}:KA().includes(t)?function(...e){return t.apply(Ud(this),e),$n(sE.get(this))}:function(...e){return $n(t.apply(Ud(this),e))}}function XA(t){return typeof t=="function"?JA(t):(t instanceof IDBTransaction&&QA(t),WA(t,qA())?new Proxy(t,cf):t)}function $n(t){if(t instanceof IDBRequest)return GA(t);if(Fd.has(t))return Fd.get(t);const e=XA(t);return e!==t&&(Fd.set(t,e),Fp.set(e,t)),e}const Ud=t=>Fp.get(t);function mu(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=$n(o);return r&&o.addEventListener("upgradeneeded",u=>{r($n(o.result),u.oldVersion,u.newVersion,$n(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}function $d(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),$n(n).then(()=>{})}const ZA=["get","getKey","getAll","getAllKeys","count"],ek=["put","add","delete","clear"],zd=new Map;function wv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zd.get(e))return zd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ek.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ZA.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),s&&u.done]))[0]};return zd.set(e,i),i}YA(t=>({...t,get:(e,n,r)=>wv(e,n)||t.get(e,n,r),has:(e,n)=>!!wv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uf="@firebase/app",Ev="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new Mp("@firebase/app"),rk="@firebase/app-compat",sk="@firebase/analytics-compat",ik="@firebase/analytics",ok="@firebase/app-check-compat",ak="@firebase/app-check",lk="@firebase/auth",ck="@firebase/auth-compat",uk="@firebase/database",dk="@firebase/data-connect",hk="@firebase/database-compat",fk="@firebase/functions",pk="@firebase/functions-compat",mk="@firebase/installations",gk="@firebase/installations-compat",yk="@firebase/messaging",vk="@firebase/messaging-compat",xk="@firebase/performance",_k="@firebase/performance-compat",wk="@firebase/remote-config",Ek="@firebase/remote-config-compat",bk="@firebase/storage",Tk="@firebase/storage-compat",Ik="@firebase/firestore",Sk="@firebase/ai",Nk="@firebase/firestore-compat",Ak="firebase",kk="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="[DEFAULT]",Ck={[uf]:"fire-core",[rk]:"fire-core-compat",[ik]:"fire-analytics",[sk]:"fire-analytics-compat",[ak]:"fire-app-check",[ok]:"fire-app-check-compat",[lk]:"fire-auth",[ck]:"fire-auth-compat",[uk]:"fire-rtdb",[dk]:"fire-data-connect",[hk]:"fire-rtdb-compat",[fk]:"fire-fn",[pk]:"fire-fn-compat",[mk]:"fire-iid",[gk]:"fire-iid-compat",[yk]:"fire-fcm",[vk]:"fire-fcm-compat",[xk]:"fire-perf",[_k]:"fire-perf-compat",[wk]:"fire-rc",[Ek]:"fire-rc-compat",[bk]:"fire-gcs",[Tk]:"fire-gcs-compat",[Ik]:"fire-fst",[Nk]:"fire-fst-compat",[Sk]:"fire-vertex","fire-js":"fire-js",[Ak]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=new Map,Rk=new Map,hf=new Map;function bv(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cn(t){const e=t.name;if(hf.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;hf.set(e,t);for(const n of ya.values())bv(n,t);for(const n of Rk.values())bv(n,t);return!0}function Wi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Pt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vr=new $s("app","Firebase",Pk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=kk;function oE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:df,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Vr.create("bad-app-name",{appName:String(s)});if(n||(n=tE()),!n)throw Vr.create("no-options");const i=ya.get(s);if(i){if(ks(n,i.options)&&ks(r,i.config))return i;throw Vr.create("duplicate-app",{appName:s})}const o=new UA(s);for(const u of hf.values())o.addComponent(u);const l=new jk(n,r,o);return ya.set(s,l),l}function Up(t=df){const e=ya.get(t);if(!e&&t===df&&tE())return oE();if(!e)throw Vr.create("no-app",{appName:t});return e}function Tv(){return Array.from(ya.values())}function It(t,e,n){let r=Ck[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(o.join(" "));return}cn(new Gt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk="firebase-heartbeat-database",Ok=1,va="firebase-heartbeat-store";let Bd=null;function aE(){return Bd||(Bd=mu(Dk,Ok,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(va)}catch(n){console.warn(n)}}}}).catch(t=>{throw Vr.create("idb-open",{originalErrorMessage:t.message})})),Bd}async function Lk(t){try{const n=(await aE()).transaction(va),r=await n.objectStore(va).get(lE(t));return await n.done,r}catch(e){if(e instanceof dn)Gn.warn(e.message);else{const n=Vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function Iv(t,e){try{const r=(await aE()).transaction(va,"readwrite");await r.objectStore(va).put(e,lE(t)),await r.done}catch(n){if(n instanceof dn)Gn.warn(n.message);else{const r=Vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function lE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=1024,Mk=30;class Fk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $k(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Sv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Mk){const o=zk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sv(),{heartbeatsToSend:r,unsentEntries:s}=Uk(this._heartbeatsCache.heartbeats),i=Nc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Gn.warn(n),""}}}function Sv(){return new Date().toISOString().substring(0,10)}function Uk(t,e=Vk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Nv(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Nv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $k{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return AA()?kA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Lk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Iv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Iv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Nv(t){return Nc(JSON.stringify({version:2,heartbeats:t})).length}function zk(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(t){cn(new Gt("platform-logger",e=>new tk(e),"PRIVATE")),cn(new Gt("heartbeat",e=>new Fk(e),"PRIVATE")),It(uf,Ev,t),It(uf,Ev,"esm2020"),It("fire-js","")}Bk("");function cE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hk=cE,uE=new $s("auth","Firebase",cE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=new Mp("@firebase/auth");function Wk(t,...e){Ac.logLevel<=te.WARN&&Ac.warn(`Auth (${zs}): ${t}`,...e)}function Hl(t,...e){Ac.logLevel<=te.ERROR&&Ac.error(`Auth (${zs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,...e){throw zp(t,...e)}function St(t,...e){return zp(t,...e)}function $p(t,e,n){const r={...Hk(),[e]:n};return new $s("auth","Firebase",r).create(e,{appName:t.name})}function Mr(t){return $p(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qk(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tn(t,"argument-error"),$p(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return uE.create(t,...e)}function q(t,e,...n){if(!t)throw zp(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hl(e),new Error(e)}function Qn(t,e){t||Mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function dE(){return Av()==="http:"||Av()==="https:"}function Av(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dE()||TA()||"connection"in navigator)?navigator.onLine:!0}function Gk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qn(n>e,"Short delay should be less than long delay!"),this.isMobile=wA()||IA()}get(){return Kk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(t,e){Qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Jk=new Oa(3e4,6e4);function Nn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Qt(t,e,n,r,s={}){return fE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Hi({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:u,...i};return bA()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&Us(t.emulatorConfig.host)&&(d.credentials="include"),hE.fetch()(await pE(t,t.config.apiHost,n,l),d)})}async function fE(t,e,n){t._canInitEmulator=!1;const r={...Qk,...e};try{const s=new Zk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ko(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ko(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ko(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ko(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw $p(t,f,d);Tn(t,f)}}catch(s){if(s instanceof dn)throw s;Tn(t,"network-request-failed",{message:String(s)})}}async function gu(t,e,n,r,s={}){const i=await Qt(t,e,n,r,s);return"mfaPendingCredential"in i&&Tn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function pE(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Bp(t.config,s):`${t.config.apiScheme}://${s}`;return Yk.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Xk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Zk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(St(this.auth,"network-request-failed")),Jk.get())})}}function ko(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=St(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t){return t!==void 0&&t.getResponse!==void 0}function Cv(t){return t!==void 0&&t.enterprise!==void 0}class mE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Xk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eC(t){return(await Qt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function gE(t,e){return Qt(t,"GET","/v2/recaptchaConfig",Nn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC(t,e){return Qt(t,"POST","/v1/accounts:delete",e)}async function kc(t,e){return Qt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nC(t,e=!1){const n=Ee(t),r=await n.getIdToken(e),s=Hp(r);q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ho(Hd(s.auth_time)),issuedAtTime:Ho(Hd(s.iat)),expirationTime:Ho(Hd(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Hd(t){return Number(t)*1e3}function Hp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Hl("JWT malformed, contained fewer than 3 sections"),null;try{const s=X0(n);return s?JSON.parse(s):(Hl("Failed to decode base64 JWT payload"),null)}catch(s){return Hl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Rv(t){const e=Hp(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dn&&rC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ho(this.lastLoginAt),this.creationTime=Ho(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cc(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Pi(t,kc(e,{idToken:n}));q(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?yE(s.providerUserInfo):[],o=oC(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),d=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new pf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function iC(t){const e=Ee(t);await Cc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function yE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC(t,e){const n=await fE(t,{},async()=>{const r=Hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await pE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Us(t.emulatorConfig.host)&&(u.credentials="include"),hE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lC(t,e){return Qt(t,"POST","/v2/accounts:revokeToken",Nn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=Rv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await aC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new _i;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _i,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new sC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Pi(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nC(this,e)}reload(){return iC(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Cc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pt(this.auth.app))return Promise.reject(Mr(this.auth));const e=await this.getIdToken();return await Pi(this,tC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,d=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:E,providerData:y,stsTokenManager:N}=n;q(p&&N,e,"internal-error");const T=_i.fromJSON(this.name,N);q(typeof p=="string",e,"internal-error"),mr(r,e.name),mr(s,e.name),q(typeof g=="boolean",e,"internal-error"),q(typeof E=="boolean",e,"internal-error"),mr(i,e.name),mr(o,e.name),mr(l,e.name),mr(u,e.name),mr(d,e.name),mr(f,e.name);const w=new tn({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:T,createdAt:d,lastLoginAt:f});return y&&Array.isArray(y)&&(w.providerData=y.map(_=>({..._}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new _i;s.updateFromServerResponse(n);const i=new tn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Cc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?yE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new _i;l.updateFromIdToken(r);const u=new tn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new pf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=new Map;function Fn(t){Qn(t instanceof Function,"Expected a class definition");let e=Pv.get(t);return e?(Qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vE.type="NONE";const jv=vE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t,e,n){return`firebase:${t}:${e}:${n}`}class wi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Wl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Wl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await kc(this.auth,{idToken:e}).catch(()=>{});return n?tn._fromGetAccountInfoResponse(this.auth,n,e):null}return tn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new wi(Fn(jv),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Fn(jv);const o=Wl(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const f=await d._get(o);if(f){let p;if(typeof f=="string"){const g=await kc(e,{idToken:f}).catch(()=>{});if(!g)break;p=await tn._fromGetAccountInfoResponse(e,g,f)}else p=tn._fromJSON(e,f);d!==i&&(l=p),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new wi(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new wi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(EE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(TE(e))return"Blackberry";if(IE(e))return"Webos";if(_E(e))return"Safari";if((e.includes("chrome/")||wE(e))&&!e.includes("edge/"))return"Chrome";if(bE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xE(t=dt()){return/firefox\//i.test(t)}function _E(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wE(t=dt()){return/crios\//i.test(t)}function EE(t=dt()){return/iemobile/i.test(t)}function bE(t=dt()){return/android/i.test(t)}function TE(t=dt()){return/blackberry/i.test(t)}function IE(t=dt()){return/webos/i.test(t)}function Wp(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cC(t=dt()){var e;return Wp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function uC(){return SA()&&document.documentMode===10}function SE(t=dt()){return Wp(t)||bE(t)||IE(t)||TE(t)||/windows phone/i.test(t)||EE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(t,e=[]){let n;switch(t){case"Browser":n=Dv(dt());break;case"Worker":n=`${Dv(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(t,e={}){return Qt(t,"GET","/v2/passwordPolicy",Nn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=6;class pC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??fC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ov(this),this.idTokenSubscription=new Ov(this),this.beforeStateQueue=new dC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await wi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await kc(this,{idToken:e}),r=await tn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Pt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pt(this.app))return Promise.reject(Mr(this));const n=e?Ee(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pt(this.app)?Promise.reject(Mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pt(this.app)?Promise.reject(Mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hC(this),n=new pC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $s("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await lC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await wi.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=NE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Pt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Wk(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ir(t){return Ee(t)}class Ov{constructor(e){this.auth=e,this.observer=null,this.addObserver=DA(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gC(t){La=t}function qp(t){return La.loadJS(t)}function yC(){return La.recaptchaV2Script}function vC(){return La.recaptchaEnterpriseScript}function xC(){return La.gapiScript}function AE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=500,wC=6e4,Tl=1e12;class EC{constructor(e){this.auth=e,this.counter=Tl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new IC(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||Tl;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||Tl;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||Tl;return(r=this._widgets.get(n))==null||r.execute(),""}}class bC{constructor(){this.enterprise=new TC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class TC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class IC{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;q(s,"argument-error",{appName:n}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=SC(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},wC)},_C))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function SC(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const NC="recaptcha-enterprise",Wo="NO_RECAPTCHA";class kE{constructor(e){this.type=NC,this.auth=ir(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{gE(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new mE(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Cv(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(Wo)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new bC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Cv(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=vC();u.length!==0&&(u+=l),qp(u).then(()=>{s(l,i,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Wd(t,e,n,r=!1,s=!1){const i=new kE(t);let o;if(s)o=Wo;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function qd(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("PHONE_PROVIDER")){const o=await Wd(t,e,n);return r(t,o).catch(async l=>{var u;if(((u=t._getRecaptchaConfig())==null?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const d=await Wd(t,e,n,!1,!0);return r(t,d)}return Promise.reject(l)})}else{const o=await Wd(t,e,n,!1,!0);return r(t,o)}}async function AC(t){const e=ir(t),n=await gE(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new mE(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new kE(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(t,e){const n=Wi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ks(i,e??{}))return s;Tn(s,"already-initialized")}return n.initialize({options:e})}function CC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function RC(t,e,n){const r=ir(t);q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=CE(e),{host:o,port:l}=PC(e),u=l===null?"":`:${l}`,d={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(ks(d,r.config.emulator)&&ks(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Us(o)?(Lp(`${i}//${o}${u}`),Vp("Auth",!0)):jC()}function CE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function PC(t){const e=CE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Lv(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Lv(o)}}}function Lv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t,e){return gu(t,"POST","/v1/accounts:signInWithIdp",Nn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC="http://localhost";class Cs extends Kp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Cs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ei(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ei(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ei(e,n)}buildRequest(){const e={requestUri:DC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vv(t,e){return Qt(t,"POST","/v1/accounts:sendVerificationCode",Nn(t,e))}async function OC(t,e){return gu(t,"POST","/v1/accounts:signInWithPhoneNumber",Nn(t,e))}async function LC(t,e){const n=await gu(t,"POST","/v1/accounts:signInWithPhoneNumber",Nn(t,e));if(n.temporaryProof)throw ko(t,"account-exists-with-different-credential",n);return n}const VC={USER_NOT_FOUND:"user-not-found"};async function MC(t,e){const n={...e,operation:"REAUTH"};return gu(t,"POST","/v1/accounts:signInWithPhoneNumber",Nn(t,n),VC)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends Kp{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new qo({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new qo({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return OC(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return LC(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return MC(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:s}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!n&&!s&&!i?null:new qo({verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends Gp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Va{constructor(){super("facebook.com")}static credential(e){return Cs._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.FACEBOOK_SIGN_IN_METHOD="facebook.com";_r.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Va{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cs._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return On.credential(n,r)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Va{constructor(){super("github.com")}static credential(e){return Cs._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.GITHUB_SIGN_IN_METHOD="github.com";wr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Va{constructor(){super("twitter.com")}static credential(e,n){return Cs._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.TWITTER_SIGN_IN_METHOD="twitter.com";Er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await tn._fromIdTokenResponse(e,r,s),o=Mv(r);return new ji({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Mv(r);return new ji({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Mv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc extends dn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Rc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Rc(e,n,r,s)}}function RE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Rc._fromErrorAndOperation(t,i,e,r):i})}async function FC(t,e,n=!1){const r=await Pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ji._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UC(t,e,n=!1){const{auth:r}=t;if(Pt(r.app))return Promise.reject(Mr(r));const s="reauthenticate";try{const i=await Pi(t,RE(r,s,e,t),n);q(i.idToken,r,"internal-error");const o=Hp(i.idToken);q(o,r,"internal-error");const{sub:l}=o;return q(t.uid===l,r,"user-mismatch"),ji._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Tn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PE(t,e,n=!1){if(Pt(t.app))return Promise.reject(Mr(t));const r="signIn",s=await RE(t,r,e),i=await ji._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function $C(t,e){return PE(ir(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zC(t,e){return Qt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ee(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Pi(r,zC(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function HC(t,e,n,r){return Ee(t).onIdTokenChanged(e,n,r)}function WC(t,e,n){return Ee(t).beforeAuthStateChanged(e,n)}function qC(t,e,n,r){return Ee(t).onAuthStateChanged(e,n,r)}function KC(t){return Ee(t).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(t,e){return Qt(t,"POST","/v2/accounts/mfaEnrollment:start",Nn(t,e))}const Pc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pc,"1"),this.storage.removeItem(Pc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=1e3,QC=10;class DE extends jE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=SE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);uC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,QC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},GC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}DE.type="LOCAL";const YC=DE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE extends jE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}OE.type="SESSION";const LE=OE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new yu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async d=>d(n.origin,i)),u=await JC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const d=Qp("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return window}function ZC(t){De().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(){return typeof De().WorkerGlobalScope<"u"&&typeof De().importScripts=="function"}async function eR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function nR(){return Yp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="firebaseLocalStorageDb",rR=1,jc="firebaseLocalStorage",ME="fbase_key";class Ma{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vu(t,e){return t.transaction([jc],e?"readwrite":"readonly").objectStore(jc)}function sR(){const t=indexedDB.deleteDatabase(VE);return new Ma(t).toPromise()}function mf(){const t=indexedDB.open(VE,rR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jc,{keyPath:ME})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jc)?e(r):(r.close(),await sR(),e(await mf()))})})}async function Uv(t,e,n){const r=vu(t,!0).put({[ME]:e,value:n});return new Ma(r).toPromise()}async function iR(t,e){const n=vu(t,!1).get(e),r=await new Ma(n).toPromise();return r===void 0?null:r.value}function $v(t,e){const n=vu(t,!0).delete(e);return new Ma(n).toPromise()}const oR=800,aR=3;class FE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>aR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yu._getInstance(nR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await eR(),!this.activeServiceWorker)return;this.sender=new XC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mf();return await Uv(e,Pc,"1"),await $v(e,Pc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Uv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>iR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$v(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=vu(s,!1).getAll();return new Ma(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}FE.type="LOCAL";const lR=FE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(t,e){return Qt(t,"POST","/v2/accounts/mfaSignIn:start",Nn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=AE("rcb"),cR=new Oa(3e4,6e4);class uR{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=De().grecaptcha)!=null&&e.render)}load(e,n=""){return q(dR(n),e,"argument-error"),this.shouldResolveImmediately(n)&&kv(De().grecaptcha)?Promise.resolve(De().grecaptcha):new Promise((r,s)=>{const i=De().setTimeout(()=>{s(St(e,"network-request-failed"))},cR.get());De()[Kd]=()=>{De().clearTimeout(i),delete De()[Kd];const l=De().grecaptcha;if(!l||!kv(l)){s(St(e,"internal-error"));return}const u=l.render;l.render=(d,f)=>{const p=u(d,f);return this.counter++,p},this.hostLanguage=n,r(l)};const o=`${yC()}?${Hi({onload:Kd,render:"explicit",hl:n})}`;qp(o).catch(()=>{clearTimeout(i),s(St(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=De().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function dR(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class hR{async load(e){return new EC(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="recaptcha",fR={theme:"light",type:"image"};class pR{constructor(e,n,r={...fR}){this.parameters=r,this.type=Ko,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ir(e),this.isInvisible=this.parameters.size==="invisible",q(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof n=="string"?document.getElementById(n):n;q(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new hR:new uR,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){q(!this.parameters.sitekey,this.auth,"argument-error"),q(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),q(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=De()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){q(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){q(dE()&&!Yp(),this.auth,"internal-error"),await mR(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await eC(this.auth);q(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return q(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function mR(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=qo._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function yR(t,e,n){if(Pt(t.app))return Promise.reject(Mr(t));const r=ir(t),s=await vR(r,e,Ee(n));return new gR(s,i=>$C(r,i))}async function vR(t,e,n){var r;if(!t._getRecaptchaConfig())try{await AC(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const i=s.session;if("phoneNumber"in s){q(i.type==="enroll",t,"internal-error");const o={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await qd(t,o,"mfaSmsEnrollment",async(f,p)=>{if(p.phoneEnrollmentInfo.captchaResponse===Wo){q((n==null?void 0:n.type)===Ko,f,"argument-error");const g=await Gd(f,p,n);return Fv(f,g)}return Fv(f,p)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneSessionInfo.sessionInfo}else{q(i.type==="signin",t,"internal-error");const o=((r=s.multiFactorHint)==null?void 0:r.uid)||s.multiFactorUid;q(o,t,"missing-multi-factor-info");const l={mfaPendingCredential:i.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await qd(t,l,"mfaSmsSignIn",async(p,g)=>{if(g.phoneSignInInfo.captchaResponse===Wo){q((n==null?void 0:n.type)===Ko,p,"argument-error");const E=await Gd(p,g,n);return zv(p,E)}return zv(p,g)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await qd(t,i,"sendVerificationCode",async(d,f)=>{if(f.captchaResponse===Wo){q((n==null?void 0:n.type)===Ko,d,"argument-error");const p=await Gd(d,f,n);return Vv(d,p)}return Vv(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).sessionInfo}}finally{n==null||n._reset()}}async function Gd(t,e,n){q(n.type===Ko,t,"argument-error");const r=await n.verify();q(typeof r=="string",t,"argument-error");const s={...e};if("phoneEnrollmentInfo"in s){const i=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,l=s.phoneEnrollmentInfo.clientType,u=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:r,captchaResponse:o,clientType:l,recaptchaVersion:u}}),s}else if("phoneSignInInfo"in s){const i=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,l=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:i,clientType:o,recaptchaVersion:l}}),s}else return Object.assign(s,{recaptchaToken:r}),s}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(t,e){return e?Fn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp extends Kp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ei(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ei(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xR(t){return PE(t.auth,new Jp(t),t.bypassAuthState)}function _R(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),UC(n,new Jp(t),t.bypassAuthState)}async function wR(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),FC(n,new Jp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xR;case"linkViaPopup":case"linkViaRedirect":return wR;case"reauthViaPopup":case"reauthViaRedirect":return _R;default:Tn(this.auth,"internal-error")}}resolve(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=new Oa(2e3,1e4);async function bR(t,e,n){if(Pt(t.app))return Promise.reject(St(t,"operation-not-supported-in-this-environment"));const r=ir(t);qk(t,e,Gp);const s=UE(r,n);return new ys(r,"signInViaPopup",e,s).executeNotNull()}class ys extends $E{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ys.currentPopupAction&&ys.currentPopupAction.cancel(),ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Qn(this.filter.length===1,"Popup operations only handle one event");const e=Qp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ER.get())};e()}}ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR="pendingRedirect",ql=new Map;class IR extends $E{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ql.get(this.auth._key());if(!e){try{const r=await SR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ql.set(this.auth._key(),e)}return this.bypassAuthState||ql.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SR(t,e){const n=kR(e),r=AR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function NR(t,e){ql.set(t._key(),e)}function AR(t){return Fn(t._redirectPersistence)}function kR(t){return Wl(TR,t.config.apiKey,t.name)}async function CR(t,e,n=!1){if(Pt(t.app))return Promise.reject(Mr(t));const r=ir(t),s=UE(r,e),o=await new IR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=10*60*1e3;class PR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zE(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(St(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bv(e))}saveEventToCache(e){this.cachedEventUids.add(Bv(e)),this.lastProcessedEventTime=Date.now()}}function Bv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DR(t,e={}){return Qt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LR=/^https?/;async function VR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DR(t);for(const n of e)try{if(MR(n))return}catch{}Tn(t,"unauthorized-domain")}function MR(t){const e=ff(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!LR.test(n))return!1;if(OR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=new Oa(3e4,6e4);function Hv(){const t=De().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UR(t){return new Promise((e,n)=>{var s,i,o;function r(){Hv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hv(),n(St(t,"network-request-failed"))},timeout:FR.get()})}if((i=(s=De().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=De().gapi)!=null&&o.load)r();else{const l=AE("iframefcb");return De()[l]=()=>{gapi.load?r():n(St(t,"network-request-failed"))},qp(`${xC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Kl=null,e})}let Kl=null;function $R(t){return Kl=Kl||UR(t),Kl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=new Oa(5e3,15e3),BR="__/auth/iframe",HR="emulator/auth/iframe",WR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KR(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bp(e,HR):`https://${t.config.authDomain}/${BR}`,r={apiKey:e.apiKey,appName:t.name,v:zs},s=qR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Hi(r).slice(1)}`}async function GR(t){const e=await $R(t),n=De().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:KR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=St(t,"network-request-failed"),l=De().setTimeout(()=>{i(o)},zR.get());function u(){De().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YR=500,JR=600,XR="_blank",ZR="http://localhost";class Wv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eP(t,e,n,r=YR,s=JR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...QR,width:r.toString(),height:s.toString(),top:i,left:o},d=dt().toLowerCase();n&&(l=wE(d)?XR:n),xE(d)&&(e=e||ZR,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[E,y])=>`${g}${E}=${y},`,"");if(cC(d)&&l!=="_self")return tP(e||"",l),new Wv(null);const p=window.open(e||"",l,f);q(p,t,"popup-blocked");try{p.focus()}catch{}return new Wv(p)}function tP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP="__/auth/handler",rP="emulator/auth/handler",sP=encodeURIComponent("fac");async function qv(t,e,n,r,s,i){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zs,eventId:s};if(e instanceof Gp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",jA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Va){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),d=u?`#${sP}=${encodeURIComponent(u)}`:"";return`${iP(t)}?${Hi(l).slice(1)}${d}`}function iP({config:t}){return t.emulator?Bp(t,rP):`https://${t.authDomain}/${nP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="webStorageSupport";class oP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=LE,this._completeRedirectFn=CR,this._overrideRedirectResult=NR}async _openPopup(e,n,r,s){var o;Qn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await qv(e,n,r,ff(),s);return eP(e,i,Qp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await qv(e,n,r,ff(),s);return ZC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Qn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await GR(e),r=new PR(e);return n.register("authEvent",s=>(q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qd,{type:Qd},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Qd];i!==void 0&&n(!!i),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return SE()||_E()||Wp()}}const aP=oP;var Kv="@firebase/auth",Gv="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uP(t){cn(new Gt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:NE(t)},d=new mC(r,s,i,u);return CC(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cn(new Gt("auth-internal",e=>{const n=ir(e.getProvider("auth").getImmediate());return(r=>new lP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(Kv,Gv,cP(t)),It(Kv,Gv,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=5*60,hP=nE("authIdTokenMaxAge")||dP;let Qv=null;const fP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hP)return;const s=n==null?void 0:n.token;Qv!==s&&(Qv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pP(t=Up()){const e=Wi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kC(t,{popupRedirectResolver:aP,persistence:[lR,YC,LE]}),r=nE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=fP(i.toString());WC(n,o,()=>o(n.currentUser)),HC(n,l=>o(l))}}const s=Z0("auth");return s&&RC(n,`http://${s}`),n}function mP(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}gC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=St("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",mP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uP("Browser");var gP="firebase",yP="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It(gP,yP,"app");var Yv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fr,BE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,x){function S(){}S.prototype=x.prototype,b.F=x.prototype,b.prototype=new S,b.prototype.constructor=b,b.D=function(k,C,j){for(var A=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)A[Ge-2]=arguments[Ge];return x.prototype[C].apply(k,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,x,S){S||(S=0);const k=Array(16);if(typeof x=="string")for(var C=0;C<16;++C)k[C]=x.charCodeAt(S++)|x.charCodeAt(S++)<<8|x.charCodeAt(S++)<<16|x.charCodeAt(S++)<<24;else for(C=0;C<16;++C)k[C]=x[S++]|x[S++]<<8|x[S++]<<16|x[S++]<<24;x=b.g[0],S=b.g[1],C=b.g[2];let j=b.g[3],A;A=x+(j^S&(C^j))+k[0]+3614090360&4294967295,x=S+(A<<7&4294967295|A>>>25),A=j+(C^x&(S^C))+k[1]+3905402710&4294967295,j=x+(A<<12&4294967295|A>>>20),A=C+(S^j&(x^S))+k[2]+606105819&4294967295,C=j+(A<<17&4294967295|A>>>15),A=S+(x^C&(j^x))+k[3]+3250441966&4294967295,S=C+(A<<22&4294967295|A>>>10),A=x+(j^S&(C^j))+k[4]+4118548399&4294967295,x=S+(A<<7&4294967295|A>>>25),A=j+(C^x&(S^C))+k[5]+1200080426&4294967295,j=x+(A<<12&4294967295|A>>>20),A=C+(S^j&(x^S))+k[6]+2821735955&4294967295,C=j+(A<<17&4294967295|A>>>15),A=S+(x^C&(j^x))+k[7]+4249261313&4294967295,S=C+(A<<22&4294967295|A>>>10),A=x+(j^S&(C^j))+k[8]+1770035416&4294967295,x=S+(A<<7&4294967295|A>>>25),A=j+(C^x&(S^C))+k[9]+2336552879&4294967295,j=x+(A<<12&4294967295|A>>>20),A=C+(S^j&(x^S))+k[10]+4294925233&4294967295,C=j+(A<<17&4294967295|A>>>15),A=S+(x^C&(j^x))+k[11]+2304563134&4294967295,S=C+(A<<22&4294967295|A>>>10),A=x+(j^S&(C^j))+k[12]+1804603682&4294967295,x=S+(A<<7&4294967295|A>>>25),A=j+(C^x&(S^C))+k[13]+4254626195&4294967295,j=x+(A<<12&4294967295|A>>>20),A=C+(S^j&(x^S))+k[14]+2792965006&4294967295,C=j+(A<<17&4294967295|A>>>15),A=S+(x^C&(j^x))+k[15]+1236535329&4294967295,S=C+(A<<22&4294967295|A>>>10),A=x+(C^j&(S^C))+k[1]+4129170786&4294967295,x=S+(A<<5&4294967295|A>>>27),A=j+(S^C&(x^S))+k[6]+3225465664&4294967295,j=x+(A<<9&4294967295|A>>>23),A=C+(x^S&(j^x))+k[11]+643717713&4294967295,C=j+(A<<14&4294967295|A>>>18),A=S+(j^x&(C^j))+k[0]+3921069994&4294967295,S=C+(A<<20&4294967295|A>>>12),A=x+(C^j&(S^C))+k[5]+3593408605&4294967295,x=S+(A<<5&4294967295|A>>>27),A=j+(S^C&(x^S))+k[10]+38016083&4294967295,j=x+(A<<9&4294967295|A>>>23),A=C+(x^S&(j^x))+k[15]+3634488961&4294967295,C=j+(A<<14&4294967295|A>>>18),A=S+(j^x&(C^j))+k[4]+3889429448&4294967295,S=C+(A<<20&4294967295|A>>>12),A=x+(C^j&(S^C))+k[9]+568446438&4294967295,x=S+(A<<5&4294967295|A>>>27),A=j+(S^C&(x^S))+k[14]+3275163606&4294967295,j=x+(A<<9&4294967295|A>>>23),A=C+(x^S&(j^x))+k[3]+4107603335&4294967295,C=j+(A<<14&4294967295|A>>>18),A=S+(j^x&(C^j))+k[8]+1163531501&4294967295,S=C+(A<<20&4294967295|A>>>12),A=x+(C^j&(S^C))+k[13]+2850285829&4294967295,x=S+(A<<5&4294967295|A>>>27),A=j+(S^C&(x^S))+k[2]+4243563512&4294967295,j=x+(A<<9&4294967295|A>>>23),A=C+(x^S&(j^x))+k[7]+1735328473&4294967295,C=j+(A<<14&4294967295|A>>>18),A=S+(j^x&(C^j))+k[12]+2368359562&4294967295,S=C+(A<<20&4294967295|A>>>12),A=x+(S^C^j)+k[5]+4294588738&4294967295,x=S+(A<<4&4294967295|A>>>28),A=j+(x^S^C)+k[8]+2272392833&4294967295,j=x+(A<<11&4294967295|A>>>21),A=C+(j^x^S)+k[11]+1839030562&4294967295,C=j+(A<<16&4294967295|A>>>16),A=S+(C^j^x)+k[14]+4259657740&4294967295,S=C+(A<<23&4294967295|A>>>9),A=x+(S^C^j)+k[1]+2763975236&4294967295,x=S+(A<<4&4294967295|A>>>28),A=j+(x^S^C)+k[4]+1272893353&4294967295,j=x+(A<<11&4294967295|A>>>21),A=C+(j^x^S)+k[7]+4139469664&4294967295,C=j+(A<<16&4294967295|A>>>16),A=S+(C^j^x)+k[10]+3200236656&4294967295,S=C+(A<<23&4294967295|A>>>9),A=x+(S^C^j)+k[13]+681279174&4294967295,x=S+(A<<4&4294967295|A>>>28),A=j+(x^S^C)+k[0]+3936430074&4294967295,j=x+(A<<11&4294967295|A>>>21),A=C+(j^x^S)+k[3]+3572445317&4294967295,C=j+(A<<16&4294967295|A>>>16),A=S+(C^j^x)+k[6]+76029189&4294967295,S=C+(A<<23&4294967295|A>>>9),A=x+(S^C^j)+k[9]+3654602809&4294967295,x=S+(A<<4&4294967295|A>>>28),A=j+(x^S^C)+k[12]+3873151461&4294967295,j=x+(A<<11&4294967295|A>>>21),A=C+(j^x^S)+k[15]+530742520&4294967295,C=j+(A<<16&4294967295|A>>>16),A=S+(C^j^x)+k[2]+3299628645&4294967295,S=C+(A<<23&4294967295|A>>>9),A=x+(C^(S|~j))+k[0]+4096336452&4294967295,x=S+(A<<6&4294967295|A>>>26),A=j+(S^(x|~C))+k[7]+1126891415&4294967295,j=x+(A<<10&4294967295|A>>>22),A=C+(x^(j|~S))+k[14]+2878612391&4294967295,C=j+(A<<15&4294967295|A>>>17),A=S+(j^(C|~x))+k[5]+4237533241&4294967295,S=C+(A<<21&4294967295|A>>>11),A=x+(C^(S|~j))+k[12]+1700485571&4294967295,x=S+(A<<6&4294967295|A>>>26),A=j+(S^(x|~C))+k[3]+2399980690&4294967295,j=x+(A<<10&4294967295|A>>>22),A=C+(x^(j|~S))+k[10]+4293915773&4294967295,C=j+(A<<15&4294967295|A>>>17),A=S+(j^(C|~x))+k[1]+2240044497&4294967295,S=C+(A<<21&4294967295|A>>>11),A=x+(C^(S|~j))+k[8]+1873313359&4294967295,x=S+(A<<6&4294967295|A>>>26),A=j+(S^(x|~C))+k[15]+4264355552&4294967295,j=x+(A<<10&4294967295|A>>>22),A=C+(x^(j|~S))+k[6]+2734768916&4294967295,C=j+(A<<15&4294967295|A>>>17),A=S+(j^(C|~x))+k[13]+1309151649&4294967295,S=C+(A<<21&4294967295|A>>>11),A=x+(C^(S|~j))+k[4]+4149444226&4294967295,x=S+(A<<6&4294967295|A>>>26),A=j+(S^(x|~C))+k[11]+3174756917&4294967295,j=x+(A<<10&4294967295|A>>>22),A=C+(x^(j|~S))+k[2]+718787259&4294967295,C=j+(A<<15&4294967295|A>>>17),A=S+(j^(C|~x))+k[9]+3951481745&4294967295,b.g[0]=b.g[0]+x&4294967295,b.g[1]=b.g[1]+(C+(A<<21&4294967295|A>>>11))&4294967295,b.g[2]=b.g[2]+C&4294967295,b.g[3]=b.g[3]+j&4294967295}r.prototype.v=function(b,x){x===void 0&&(x=b.length);const S=x-this.blockSize,k=this.C;let C=this.h,j=0;for(;j<x;){if(C==0)for(;j<=S;)s(this,b,j),j+=this.blockSize;if(typeof b=="string"){for(;j<x;)if(k[C++]=b.charCodeAt(j++),C==this.blockSize){s(this,k),C=0;break}}else for(;j<x;)if(k[C++]=b[j++],C==this.blockSize){s(this,k),C=0;break}}this.h=C,this.o+=x},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var x=1;x<b.length-8;++x)b[x]=0;x=this.o*8;for(var S=b.length-8;S<b.length;++S)b[S]=x&255,x/=256;for(this.v(b),b=Array(16),x=0,S=0;S<4;++S)for(let k=0;k<32;k+=8)b[x++]=this.g[S]>>>k&255;return b};function i(b,x){var S=l;return Object.prototype.hasOwnProperty.call(S,b)?S[b]:S[b]=x(b)}function o(b,x){this.h=x;const S=[];let k=!0;for(let C=b.length-1;C>=0;C--){const j=b[C]|0;k&&j==x||(S[C]=j,k=!1)}this.g=S}var l={};function u(b){return-128<=b&&b<128?i(b,function(x){return new o([x|0],x<0?-1:0)}):new o([b|0],b<0?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return p;if(b<0)return T(d(-b));const x=[];let S=1;for(let k=0;b>=S;k++)x[k]=b/S|0,S*=4294967296;return new o(x,0)}function f(b,x){if(b.length==0)throw Error("number format error: empty string");if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(b.charAt(0)=="-")return T(f(b.substring(1),x));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=d(Math.pow(x,8));let k=p;for(let j=0;j<b.length;j+=8){var C=Math.min(8,b.length-j);const A=parseInt(b.substring(j,j+C),x);C<8?(C=d(Math.pow(x,C)),k=k.j(C).add(d(A))):(k=k.j(S),k=k.add(d(A)))}return k}var p=u(0),g=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-T(this).m();let b=0,x=1;for(let S=0;S<this.g.length;S++){const k=this.i(S);b+=(k>=0?k:4294967296+k)*x,x*=4294967296}return b},t.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(y(this))return"0";if(N(this))return"-"+T(this).toString(b);const x=d(Math.pow(b,6));var S=this;let k="";for(;;){const C=D(S,x).g;S=w(S,C.j(x));let j=((S.g.length>0?S.g[0]:S.h)>>>0).toString(b);if(S=C,y(S))return j+k;for(;j.length<6;)j="0"+j;k=j+k}},t.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function y(b){if(b.h!=0)return!1;for(let x=0;x<b.g.length;x++)if(b.g[x]!=0)return!1;return!0}function N(b){return b.h==-1}t.l=function(b){return b=w(this,b),N(b)?-1:y(b)?0:1};function T(b){const x=b.g.length,S=[];for(let k=0;k<x;k++)S[k]=~b.g[k];return new o(S,~b.h).add(g)}t.abs=function(){return N(this)?T(this):this},t.add=function(b){const x=Math.max(this.g.length,b.g.length),S=[];let k=0;for(let C=0;C<=x;C++){let j=k+(this.i(C)&65535)+(b.i(C)&65535),A=(j>>>16)+(this.i(C)>>>16)+(b.i(C)>>>16);k=A>>>16,j&=65535,A&=65535,S[C]=A<<16|j}return new o(S,S[S.length-1]&-2147483648?-1:0)};function w(b,x){return b.add(T(x))}t.j=function(b){if(y(this)||y(b))return p;if(N(this))return N(b)?T(this).j(T(b)):T(T(this).j(b));if(N(b))return T(this.j(T(b)));if(this.l(E)<0&&b.l(E)<0)return d(this.m()*b.m());const x=this.g.length+b.g.length,S=[];for(var k=0;k<2*x;k++)S[k]=0;for(k=0;k<this.g.length;k++)for(let C=0;C<b.g.length;C++){const j=this.i(k)>>>16,A=this.i(k)&65535,Ge=b.i(C)>>>16,Cn=b.i(C)&65535;S[2*k+2*C]+=A*Cn,_(S,2*k+2*C),S[2*k+2*C+1]+=j*Cn,_(S,2*k+2*C+1),S[2*k+2*C+1]+=A*Ge,_(S,2*k+2*C+1),S[2*k+2*C+2]+=j*Ge,_(S,2*k+2*C+2)}for(b=0;b<x;b++)S[b]=S[2*b+1]<<16|S[2*b];for(b=x;b<2*x;b++)S[b]=0;return new o(S,0)};function _(b,x){for(;(b[x]&65535)!=b[x];)b[x+1]+=b[x]>>>16,b[x]&=65535,x++}function I(b,x){this.g=b,this.h=x}function D(b,x){if(y(x))throw Error("division by zero");if(y(b))return new I(p,p);if(N(b))return x=D(T(b),x),new I(T(x.g),T(x.h));if(N(x))return x=D(b,T(x)),new I(T(x.g),x.h);if(b.g.length>30){if(N(b)||N(x))throw Error("slowDivide_ only works with positive integers.");for(var S=g,k=x;k.l(b)<=0;)S=P(S),k=P(k);var C=M(S,1),j=M(k,1);for(k=M(k,2),S=M(S,2);!y(k);){var A=j.add(k);A.l(b)<=0&&(C=C.add(S),j=A),k=M(k,1),S=M(S,1)}return x=w(b,C.j(x)),new I(C,x)}for(C=p;b.l(x)>=0;){for(S=Math.max(1,Math.floor(b.m()/x.m())),k=Math.ceil(Math.log(S)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),j=d(S),A=j.j(x);N(A)||A.l(b)>0;)S-=k,j=d(S),A=j.j(x);y(j)&&(j=g),C=C.add(j),b=w(b,A)}return new I(C,b)}t.B=function(b){return D(this,b).h},t.and=function(b){const x=Math.max(this.g.length,b.g.length),S=[];for(let k=0;k<x;k++)S[k]=this.i(k)&b.i(k);return new o(S,this.h&b.h)},t.or=function(b){const x=Math.max(this.g.length,b.g.length),S=[];for(let k=0;k<x;k++)S[k]=this.i(k)|b.i(k);return new o(S,this.h|b.h)},t.xor=function(b){const x=Math.max(this.g.length,b.g.length),S=[];for(let k=0;k<x;k++)S[k]=this.i(k)^b.i(k);return new o(S,this.h^b.h)};function P(b){const x=b.g.length+1,S=[];for(let k=0;k<x;k++)S[k]=b.i(k)<<1|b.i(k-1)>>>31;return new o(S,b.h)}function M(b,x){const S=x>>5;x%=32;const k=b.g.length-S,C=[];for(let j=0;j<k;j++)C[j]=x>0?b.i(j+S)>>>x|b.i(j+S+1)<<32-x:b.i(j+S);return new o(C,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,BE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,Fr=o}).apply(typeof Yv<"u"?Yv:typeof self<"u"?self:typeof window<"u"?window:{});var Il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var HE,Co,WE,Gl,gf,qE,KE,GE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Il=="object"&&Il];for(var h=0;h<a.length;++h){var m=a[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var m=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var O=a[v];if(!(O in m))break e;m=m[O]}a=a[a.length-1],v=m[a],h=h(v),h!=v&&h!=null&&e(m,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var m=[],v;for(v in h)Object.prototype.hasOwnProperty.call(h,v)&&m.push([v,h[v]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,m){return a.call.apply(a.bind,arguments)}function d(a,h,m){return d=u,d.apply(null,arguments)}function f(a,h){var m=Array.prototype.slice.call(arguments,1);return function(){var v=m.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function p(a,h){function m(){}m.prototype=h.prototype,a.Z=h.prototype,a.prototype=new m,a.prototype.constructor=a,a.Ob=function(v,O,L){for(var $=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)$[Z-2]=arguments[Z];return h.prototype[O].apply(v,$)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function E(a){const h=a.length;if(h>0){const m=Array(h);for(let v=0;v<h;v++)m[v]=a[v];return m}return[]}function y(a,h){for(let v=1;v<arguments.length;v++){const O=arguments[v];var m=typeof O;if(m=m!="object"?m:O?Array.isArray(O)?"array":m:"null",m=="array"||m=="object"&&typeof O.length=="number"){m=a.length||0;const L=O.length||0;a.length=m+L;for(let $=0;$<L;$++)a[m+$]=O[$]}else a.push(O)}}class N{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function T(a){o.setTimeout(()=>{throw a},0)}function w(){var a=b;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,m){const v=I.get();v.set(h,m),this.h?this.h.next=v:this.g=v,this.h=v}}var I=new N(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let P,M=!1,b=new _,x=()=>{const a=Promise.resolve(void 0);P=()=>{a.then(S)}};function S(){for(var a;a=w();){try{a.h.call(a.g)}catch(m){T(m)}var h=I;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}M=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var j=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};o.addEventListener("test",m,h),o.removeEventListener("test",m,h)}catch{}return a}();function A(a){return/^[\s\xa0]*$/.test(a)}function Ge(a,h){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Ge,C),Ge.prototype.init=function(a,h){const m=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(m=="mouseover"?h=a.fromElement:m=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ge.Z.h.call(this)},Ge.prototype.h=function(){Ge.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Cn="closure_listenable_"+(Math.random()*1e6|0),Ji=0;function Xi(a,h,m,v,O){this.listener=a,this.proxy=null,this.src=h,this.type=m,this.capture=!!v,this.ha=O,this.key=++Ji,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,h,m){for(const v in a)h.call(m,a[v],v,a)}function X(a,h){for(const m in a)h.call(void 0,a[m],m,a)}function ye(a){const h={};for(const m in a)h[m]=a[m];return h}const ke="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ss(a,h){let m,v;for(let O=1;O<arguments.length;O++){v=arguments[O];for(m in v)a[m]=v[m];for(let L=0;L<ke.length;L++)m=ke[L],Object.prototype.hasOwnProperty.call(v,m)&&(a[m]=v[m])}}function Ut(a){this.src=a,this.g={},this.h=0}Ut.prototype.add=function(a,h,m,v,O){const L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);const $=Yt(a,h,v,O);return $>-1?(h=a[$],m||(h.fa=!1)):(h=new Xi(h,this.src,L,!!v,O),h.fa=m,a.push(h)),h};function is(a,h){const m=h.type;if(m in a.g){var v=a.g[m],O=Array.prototype.indexOf.call(v,h,void 0),L;(L=O>=0)&&Array.prototype.splice.call(v,O,1),L&&(B(h),a.g[m].length==0&&(delete a.g[m],a.h--))}}function Yt(a,h,m,v){for(let O=0;O<a.length;++O){const L=a[O];if(!L.da&&L.listener==h&&L.capture==!!m&&L.ha==v)return O}return-1}var ar="closure_lm_"+(Math.random()*1e6|0),Hu={};function Zm(a,h,m,v,O){if(Array.isArray(h)){for(let L=0;L<h.length;L++)Zm(a,h[L],m,v,O);return null}return m=ng(m),a&&a[Cn]?a.J(h,m,l(v)?!!v.capture:!1,O):s1(a,h,m,!1,v,O)}function s1(a,h,m,v,O,L){if(!h)throw Error("Invalid event type");const $=l(O)?!!O.capture:!!O;let Z=qu(a);if(Z||(a[ar]=Z=new Ut(a)),m=Z.add(h,m,v,$,L),m.proxy)return m;if(v=i1(),m.proxy=v,v.src=a,v.listener=m,a.addEventListener)j||(O=$),O===void 0&&(O=!1),a.addEventListener(h.toString(),v,O);else if(a.attachEvent)a.attachEvent(tg(h.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return m}function i1(){function a(m){return h.call(a.src,a.listener,m)}const h=o1;return a}function eg(a,h,m,v,O){if(Array.isArray(h))for(var L=0;L<h.length;L++)eg(a,h[L],m,v,O);else v=l(v)?!!v.capture:!!v,m=ng(m),a&&a[Cn]?(a=a.i,L=String(h).toString(),L in a.g&&(h=a.g[L],m=Yt(h,m,v,O),m>-1&&(B(h[m]),Array.prototype.splice.call(h,m,1),h.length==0&&(delete a.g[L],a.h--)))):a&&(a=qu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Yt(h,m,v,O)),(m=a>-1?h[a]:null)&&Wu(m))}function Wu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Cn])is(h.i,a);else{var m=a.type,v=a.proxy;h.removeEventListener?h.removeEventListener(m,v,a.capture):h.detachEvent?h.detachEvent(tg(m),v):h.addListener&&h.removeListener&&h.removeListener(v),(m=qu(h))?(is(m,a),m.h==0&&(m.src=null,h[ar]=null)):B(a)}}}function tg(a){return a in Hu?Hu[a]:Hu[a]="on"+a}function o1(a,h){if(a.da)a=!0;else{h=new Ge(h,this);const m=a.listener,v=a.ha||a.src;a.fa&&Wu(a),a=m.call(v,h)}return a}function qu(a){return a=a[ar],a instanceof Ut?a:null}var Ku="__closure_events_fn_"+(Math.random()*1e9>>>0);function ng(a){return typeof a=="function"?a:(a[Ku]||(a[Ku]=function(h){return a.handleEvent(h)}),a[Ku])}function rt(){k.call(this),this.i=new Ut(this),this.M=this,this.G=null}p(rt,k),rt.prototype[Cn]=!0,rt.prototype.removeEventListener=function(a,h,m,v){eg(this,a,h,m,v)};function ht(a,h){var m,v=a.G;if(v)for(m=[];v;v=v.G)m.push(v);if(a=a.M,v=h.type||h,typeof h=="string")h=new C(h,a);else if(h instanceof C)h.target=h.target||a;else{var O=h;h=new C(v,a),ss(h,O)}O=!0;let L,$;if(m)for($=m.length-1;$>=0;$--)L=h.g=m[$],O=Qa(L,v,!0,h)&&O;if(L=h.g=a,O=Qa(L,v,!0,h)&&O,O=Qa(L,v,!1,h)&&O,m)for($=0;$<m.length;$++)L=h.g=m[$],O=Qa(L,v,!1,h)&&O}rt.prototype.N=function(){if(rt.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const m=a.g[h];for(let v=0;v<m.length;v++)B(m[v]);delete a.g[h],a.h--}}this.G=null},rt.prototype.J=function(a,h,m,v){return this.i.add(String(a),h,!1,m,v)},rt.prototype.K=function(a,h,m,v){return this.i.add(String(a),h,!0,m,v)};function Qa(a,h,m,v){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let O=!0;for(let L=0;L<h.length;++L){const $=h[L];if($&&!$.da&&$.capture==m){const Z=$.listener,Me=$.ha||$.src;$.fa&&is(a.i,$),O=Z.call(Me,v)!==!1&&O}}return O&&!v.defaultPrevented}function a1(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=d(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function rg(a){a.g=a1(()=>{a.g=null,a.i&&(a.i=!1,rg(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class l1 extends k{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:rg(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zi(a){k.call(this),this.h=a,this.g={}}p(Zi,k);var sg=[];function ig(a){Q(a.g,function(h,m){this.g.hasOwnProperty(m)&&Wu(h)},a),a.g={}}Zi.prototype.N=function(){Zi.Z.N.call(this),ig(this)},Zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gu=o.JSON.stringify,c1=o.JSON.parse,u1=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function og(){}function ag(){}var eo={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Qu(){C.call(this,"d")}p(Qu,C);function Yu(){C.call(this,"c")}p(Yu,C);var os={},lg=null;function Ya(){return lg=lg||new rt}os.Ia="serverreachability";function cg(a){C.call(this,os.Ia,a)}p(cg,C);function to(a){const h=Ya();ht(h,new cg(h))}os.STAT_EVENT="statevent";function ug(a,h){C.call(this,os.STAT_EVENT,a),this.stat=h}p(ug,C);function ft(a){const h=Ya();ht(h,new ug(h,a))}os.Ja="timingevent";function dg(a,h){C.call(this,os.Ja,a),this.size=h}p(dg,C);function no(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ro(){this.g=!0}ro.prototype.ua=function(){this.g=!1};function d1(a,h,m,v,O,L){a.info(function(){if(a.g)if(L){var $="",Z=L.split("&");for(let le=0;le<Z.length;le++){var Me=Z[le].split("=");if(Me.length>1){const Be=Me[0];Me=Me[1];const fn=Be.split("_");$=fn.length>=2&&fn[1]=="type"?$+(Be+"="+Me+"&"):$+(Be+"=redacted&")}}}else $=null;else $=L;return"XMLHTTP REQ ("+v+") [attempt "+O+"]: "+h+`
`+m+`
`+$})}function h1(a,h,m,v,O,L,$){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+O+"]: "+h+`
`+m+`
`+L+" "+$})}function Ks(a,h,m,v){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+p1(a,m)+(v?" "+v:"")})}function f1(a,h){a.info(function(){return"TIMEOUT: "+h})}ro.prototype.info=function(){};function p1(a,h){if(!a.g)return h;if(!h)return null;try{const L=JSON.parse(h);if(L){for(a=0;a<L.length;a++)if(Array.isArray(L[a])){var m=L[a];if(!(m.length<2)){var v=m[1];if(Array.isArray(v)&&!(v.length<1)){var O=v[0];if(O!="noop"&&O!="stop"&&O!="close")for(let $=1;$<v.length;$++)v[$]=""}}}}return Gu(L)}catch{return h}}var Ja={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},hg={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},fg;function Ju(){}p(Ju,og),Ju.prototype.g=function(){return new XMLHttpRequest},fg=new Ju;function so(a){return encodeURIComponent(String(a))}function m1(a){var h=1;a=a.split(":");const m=[];for(;h>0&&a.length;)m.push(a.shift()),h--;return a.length&&m.push(a.join(":")),m}function lr(a,h,m,v){this.j=a,this.i=h,this.l=m,this.S=v||1,this.V=new Zi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new pg}function pg(){this.i=null,this.g="",this.h=!1}var mg={},Xu={};function Zu(a,h,m){a.M=1,a.A=Za(hn(h)),a.u=m,a.R=!0,gg(a,null)}function gg(a,h){a.F=Date.now(),Xa(a),a.B=hn(a.A);var m=a.B,v=a.S;Array.isArray(v)||(v=[String(v)]),kg(m.i,"t",v),a.C=0,m=a.j.L,a.h=new pg,a.g=Kg(a.j,m?h:null,!a.u),a.P>0&&(a.O=new l1(d(a.Y,a,a.g),a.P)),h=a.V,m=a.g,v=a.ba;var O="readystatechange";Array.isArray(O)||(O&&(sg[0]=O.toString()),O=sg);for(let L=0;L<O.length;L++){const $=Zm(m,O[L],v||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.J?ye(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),to(),d1(a.i,a.v,a.B,a.l,a.S,a.u)}lr.prototype.ba=function(a){a=a.target;const h=this.O;h&&dr(a)==3?h.j():this.Y(a)},lr.prototype.Y=function(a){try{if(a==this.g)e:{const Z=dr(this.g),Me=this.g.ya(),le=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||Lg(this.g)))){this.K||Z!=4||Me==7||(Me==8||le<=0?to(3):to(2)),ed(this);var h=this.g.ca();this.X=h;var m=g1(this);if(this.o=h==200,h1(this.i,this.v,this.B,this.l,this.S,Z,h),this.o){if(this.U&&!this.L){t:{if(this.g){var v,O=this.g;if((v=O.g?O.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(v)){var L=v;break t}}L=null}if(a=L)Ks(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,td(this,a);else{this.o=!1,this.m=3,ft(12),as(this),io(this);break e}}if(this.R){a=!0;let Be;for(;!this.K&&this.C<m.length;)if(Be=y1(this,m),Be==Xu){Z==4&&(this.m=4,ft(14),a=!1),Ks(this.i,this.l,null,"[Incomplete Response]");break}else if(Be==mg){this.m=4,ft(15),Ks(this.i,this.l,m,"[Invalid Chunk]"),a=!1;break}else Ks(this.i,this.l,Be,null),td(this,Be);if(yg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||m.length!=0||this.h.h||(this.m=1,ft(16),a=!1),this.o=this.o&&a,!a)Ks(this.i,this.l,m,"[Invalid Chunked Response]"),as(this),io(this);else if(m.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),cd($),$.P=!0,ft(11))}}else Ks(this.i,this.l,m,null),td(this,m);Z==4&&as(this),this.o&&!this.K&&(Z==4?Bg(this.j,this):(this.o=!1,Xa(this)))}else R1(this.g),h==400&&m.indexOf("Unknown SID")>0?(this.m=3,ft(12)):(this.m=0,ft(13)),as(this),io(this)}}}catch{}finally{}};function g1(a){if(!yg(a))return a.g.la();const h=Lg(a.g);if(h==="")return"";let m="";const v=h.length,O=dr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return as(a),io(a),"";a.h.i=new o.TextDecoder}for(let L=0;L<v;L++)a.h.h=!0,m+=a.h.i.decode(h[L],{stream:!(O&&L==v-1)});return h.length=0,a.h.g+=m,a.C=0,a.h.g}function yg(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function y1(a,h){var m=a.C,v=h.indexOf(`
`,m);return v==-1?Xu:(m=Number(h.substring(m,v)),isNaN(m)?mg:(v+=1,v+m>h.length?Xu:(h=h.slice(v,v+m),a.C=v+m,h)))}lr.prototype.cancel=function(){this.K=!0,as(this)};function Xa(a){a.T=Date.now()+a.H,vg(a,a.H)}function vg(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=no(d(a.aa,a),h)}function ed(a){a.D&&(o.clearTimeout(a.D),a.D=null)}lr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(f1(this.i,this.B),this.M!=2&&(to(),ft(17)),as(this),this.m=2,io(this)):vg(this,this.T-a)};function io(a){a.j.I==0||a.K||Bg(a.j,a)}function as(a){ed(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,ig(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function td(a,h){try{var m=a.j;if(m.I!=0&&(m.g==a||nd(m.h,a))){if(!a.L&&nd(m.h,a)&&m.I==3){try{var v=m.Ba.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var O=v;if(O[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<a.F)sl(m),nl(m);else break e;ld(m),ft(18)}}else m.xa=O[1],0<m.xa-m.K&&O[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=no(d(m.Va,m),6e3));wg(m.h)<=1&&m.ta&&(m.ta=void 0)}else cs(m,11)}else if((a.L||m.g==a)&&sl(m),!A(h))for(O=m.Ba.g.parse(h),h=0;h<O.length;h++){let le=O[h];const Be=le[0];if(!(Be<=m.K))if(m.K=Be,le=le[1],m.I==2)if(le[0]=="c"){m.M=le[1],m.ba=le[2];const fn=le[3];fn!=null&&(m.ka=fn,m.j.info("VER="+m.ka));const us=le[4];us!=null&&(m.za=us,m.j.info("SVER="+m.za));const hr=le[5];hr!=null&&typeof hr=="number"&&hr>0&&(v=1.5*hr,m.O=v,m.j.info("backChannelRequestTimeoutMs_="+v)),v=m;const fr=a.g;if(fr){const ol=fr.g?fr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ol){var L=v.h;L.g||ol.indexOf("spdy")==-1&&ol.indexOf("quic")==-1&&ol.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(rd(L,L.h),L.h=null))}if(v.G){const ud=fr.g?fr.g.getResponseHeader("X-HTTP-Session-Id"):null;ud&&(v.wa=ud,he(v.J,v.G,ud))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-a.F,m.j.info("Handshake RTT: "+m.T+"ms")),v=m;var $=a;if(v.na=qg(v,v.L?v.ba:null,v.W),$.L){Eg(v.h,$);var Z=$,Me=v.O;Me&&(Z.H=Me),Z.D&&(ed(Z),Xa(Z)),v.g=$}else $g(v);m.i.length>0&&rl(m)}else le[0]!="stop"&&le[0]!="close"||cs(m,7);else m.I==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?cs(m,7):ad(m):le[0]!="noop"&&m.l&&m.l.qa(le),m.A=0)}}to(4)}catch{}}var v1=class{constructor(a,h){this.g=a,this.map=h}};function xg(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function _g(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function wg(a){return a.h?1:a.g?a.g.size:0}function nd(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function rd(a,h){a.g?a.g.add(h):a.h=h}function Eg(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}xg.prototype.cancel=function(){if(this.i=bg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function bg(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const m of a.g.values())h=h.concat(m.G);return h}return E(a.i)}var Tg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function x1(a,h){if(a){a=a.split("&");for(let m=0;m<a.length;m++){const v=a[m].indexOf("=");let O,L=null;v>=0?(O=a[m].substring(0,v),L=a[m].substring(v+1)):O=a[m],h(O,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function cr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof cr?(this.l=a.l,oo(this,a.j),this.o=a.o,this.g=a.g,ao(this,a.u),this.h=a.h,sd(this,Cg(a.i)),this.m=a.m):a&&(h=String(a).match(Tg))?(this.l=!1,oo(this,h[1]||"",!0),this.o=lo(h[2]||""),this.g=lo(h[3]||"",!0),ao(this,h[4]),this.h=lo(h[5]||"",!0),sd(this,h[6]||"",!0),this.m=lo(h[7]||"")):(this.l=!1,this.i=new uo(null,this.l))}cr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(co(h,Ig,!0),":");var m=this.g;return(m||h=="file")&&(a.push("//"),(h=this.o)&&a.push(co(h,Ig,!0),"@"),a.push(so(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&a.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(co(m,m.charAt(0)=="/"?E1:w1,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",co(m,T1)),a.join("")},cr.prototype.resolve=function(a){const h=hn(this);let m=!!a.j;m?oo(h,a.j):m=!!a.o,m?h.o=a.o:m=!!a.g,m?h.g=a.g:m=a.u!=null;var v=a.h;if(m)ao(h,a.u);else if(m=!!a.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var O=h.h.lastIndexOf("/");O!=-1&&(v=h.h.slice(0,O+1)+v)}if(O=v,O==".."||O==".")v="";else if(O.indexOf("./")!=-1||O.indexOf("/.")!=-1){v=O.lastIndexOf("/",0)==0,O=O.split("/");const L=[];for(let $=0;$<O.length;){const Z=O[$++];Z=="."?v&&$==O.length&&L.push(""):Z==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),v&&$==O.length&&L.push("")):(L.push(Z),v=!0)}v=L.join("/")}else v=O}return m?h.h=v:m=a.i.toString()!=="",m?sd(h,Cg(a.i)):m=!!a.m,m&&(h.m=a.m),h};function hn(a){return new cr(a)}function oo(a,h,m){a.j=m?lo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ao(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function sd(a,h,m){h instanceof uo?(a.i=h,I1(a.i,a.l)):(m||(h=co(h,b1)),a.i=new uo(h,a.l))}function he(a,h,m){a.i.set(h,m)}function Za(a){return he(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function lo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function co(a,h,m){return typeof a=="string"?(a=encodeURI(a).replace(h,_1),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function _1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ig=/[#\/\?@]/g,w1=/[#\?:]/g,E1=/[#\?]/g,b1=/[#\?@]/g,T1=/#/g;function uo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function ls(a){a.g||(a.g=new Map,a.h=0,a.i&&x1(a.i,function(h,m){a.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=uo.prototype,t.add=function(a,h){ls(this),this.i=null,a=Gs(this,a);let m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(h),this.h+=1,this};function Sg(a,h){ls(a),h=Gs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ng(a,h){return ls(a),h=Gs(a,h),a.g.has(h)}t.forEach=function(a,h){ls(this),this.g.forEach(function(m,v){m.forEach(function(O){a.call(h,O,v,this)},this)},this)};function Ag(a,h){ls(a);let m=[];if(typeof h=="string")Ng(a,h)&&(m=m.concat(a.g.get(Gs(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)m=m.concat(a[h]);return m}t.set=function(a,h){return ls(this),this.i=null,a=Gs(this,a),Ng(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Ag(this,a),a.length>0?String(a[0]):h):h};function kg(a,h,m){Sg(a,h),m.length>0&&(a.i=null,a.g.set(Gs(a,h),E(m)),a.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let v=0;v<h.length;v++){var m=h[v];const O=so(m);m=Ag(this,m);for(let L=0;L<m.length;L++){let $=O;m[L]!==""&&($+="="+so(m[L])),a.push($)}}return this.i=a.join("&")};function Cg(a){const h=new uo;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Gs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function I1(a,h){h&&!a.j&&(ls(a),a.i=null,a.g.forEach(function(m,v){const O=v.toLowerCase();v!=O&&(Sg(this,v),kg(this,O,m))},a)),a.j=h}function S1(a,h){const m=new ro;if(o.Image){const v=new Image;v.onload=f(ur,m,"TestLoadImage: loaded",!0,h,v),v.onerror=f(ur,m,"TestLoadImage: error",!1,h,v),v.onabort=f(ur,m,"TestLoadImage: abort",!1,h,v),v.ontimeout=f(ur,m,"TestLoadImage: timeout",!1,h,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else h(!1)}function N1(a,h){const m=new ro,v=new AbortController,O=setTimeout(()=>{v.abort(),ur(m,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:v.signal}).then(L=>{clearTimeout(O),L.ok?ur(m,"TestPingServer: ok",!0,h):ur(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),ur(m,"TestPingServer: error",!1,h)})}function ur(a,h,m,v,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),v(m)}catch{}}function A1(){this.g=new u1}function id(a){this.i=a.Sb||null,this.h=a.ab||!1}p(id,og),id.prototype.g=function(){return new el(this.i,this.h)};function el(a,h){rt.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(el,rt),t=el.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,fo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ho(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,fo(this)),this.g&&(this.readyState=3,fo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Rg(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Rg(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ho(this):fo(this),this.readyState==3&&Rg(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ho(this))},t.Na=function(a){this.g&&(this.response=a,ho(this))},t.ga=function(){this.g&&ho(this)};function ho(a){a.readyState=4,a.l=null,a.j=null,a.B=null,fo(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=h.next();return a.join(`\r
`)};function fo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(el.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Pg(a){let h="";return Q(a,function(m,v){h+=v,h+=":",h+=m,h+=`\r
`}),h}function od(a,h,m){e:{for(v in m){var v=!1;break e}v=!0}v||(m=Pg(m),typeof a=="string"?m!=null&&so(m):he(a,h,m))}function Ie(a){rt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ie,rt);var k1=/^https?$/i,C1=["POST","PUT"];t=Ie.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,m,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():fg.g(),this.g.onreadystatechange=g(d(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){jg(this,L);return}if(a=m||"",m=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var O in v)m.set(O,v[O]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())m.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),O=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(C1,h,void 0)>=0)||v||O||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of m)this.g.setRequestHeader(L,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(L){jg(this,L)}};function jg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Dg(a),tl(a)}function Dg(a){a.A||(a.A=!0,ht(a,"complete"),ht(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ht(this,"complete"),ht(this,"abort"),tl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tl(this,!0)),Ie.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Og(this):this.Xa())},t.Xa=function(){Og(this)};function Og(a){if(a.h&&typeof i<"u"){if(a.v&&dr(a)==4)setTimeout(a.Ca.bind(a),0);else if(ht(a,"readystatechange"),dr(a)==4){a.h=!1;try{const L=a.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var v;if(v=L===0){let $=String(a.D).match(Tg)[1]||null;!$&&o.self&&o.self.location&&($=o.self.location.protocol.slice(0,-1)),v=!k1.test($?$.toLowerCase():"")}m=v}if(m)ht(a,"complete"),ht(a,"success");else{a.o=6;try{var O=dr(a)>2?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.ca()+"]",Dg(a)}}finally{tl(a)}}}}function tl(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const m=a.g;a.g=null,h||ht(a,"ready");try{m.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function dr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return dr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),c1(h)}};function Lg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function R1(a){const h={};a=(a.g&&dr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(A(a[v]))continue;var m=m1(a[v]);const O=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=h[O]||[];h[O]=L,L.push(m)}X(h,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function po(a,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||h}function Vg(a){this.za=0,this.i=[],this.j=new ro,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=po("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=po("baseRetryDelayMs",5e3,a),this.Za=po("retryDelaySeedMs",1e4,a),this.Ta=po("forwardChannelMaxRetries",2,a),this.va=po("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new xg(a&&a.concurrentRequestLimit),this.Ba=new A1,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Vg.prototype,t.ka=8,t.I=1,t.connect=function(a,h,m,v){ft(0),this.W=a,this.H=h||{},m&&v!==void 0&&(this.H.OSID=m,this.H.OAID=v),this.F=this.X,this.J=qg(this,null,this.W),rl(this)};function ad(a){if(Mg(a),a.I==3){var h=a.V++,m=hn(a.J);if(he(m,"SID",a.M),he(m,"RID",h),he(m,"TYPE","terminate"),mo(a,m),h=new lr(a,a.j,h),h.M=2,h.A=Za(hn(m)),m=!1,o.navigator&&o.navigator.sendBeacon)try{m=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!m&&o.Image&&(new Image().src=h.A,m=!0),m||(h.g=Kg(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Xa(h)}Wg(a)}function nl(a){a.g&&(cd(a),a.g.cancel(),a.g=null)}function Mg(a){nl(a),a.v&&(o.clearTimeout(a.v),a.v=null),sl(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function rl(a){if(!_g(a.h)&&!a.m){a.m=!0;var h=a.Ea;P||x(),M||(P(),M=!0),b.add(h,a),a.D=0}}function P1(a,h){return wg(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=no(d(a.Ea,a,h),Hg(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const O=new lr(this,this.j,a);let L=this.o;if(this.U&&(L?(L=ye(L),ss(L,this.U)):L=this.U),this.u!==null||this.R||(O.J=L,L=null),this.S)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var v=this.i[m];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,h>4096){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=Ug(this,O,h),m=hn(this.J),he(m,"RID",a),he(m,"CVER",22),this.G&&he(m,"X-HTTP-Session-Id",this.G),mo(this,m),L&&(this.R?h="headers="+so(Pg(L))+"&"+h:this.u&&od(m,this.u,L)),rd(this.h,O),this.Ra&&he(m,"TYPE","init"),this.S?(he(m,"$req",h),he(m,"SID","null"),O.U=!0,Zu(O,m,null)):Zu(O,m,h),this.I=2}}else this.I==3&&(a?Fg(this,a):this.i.length==0||_g(this.h)||Fg(this))};function Fg(a,h){var m;h?m=h.l:m=a.V++;const v=hn(a.J);he(v,"SID",a.M),he(v,"RID",m),he(v,"AID",a.K),mo(a,v),a.u&&a.o&&od(v,a.u,a.o),m=new lr(a,a.j,m,a.D+1),a.u===null&&(m.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Ug(a,m,1e3),m.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),rd(a.h,m),Zu(m,v,h)}function mo(a,h){a.H&&Q(a.H,function(m,v){he(h,v,m)}),a.l&&Q({},function(m,v){he(h,v,m)})}function Ug(a,h,m){m=Math.min(a.i.length,m);const v=a.l?d(a.l.Ka,a.l,a):null;e:{var O=a.i;let Z=-1;for(;;){const Me=["count="+m];Z==-1?m>0?(Z=O[0].g,Me.push("ofs="+Z)):Z=0:Me.push("ofs="+Z);let le=!0;for(let Be=0;Be<m;Be++){var L=O[Be].g;const fn=O[Be].map;if(L-=Z,L<0)Z=Math.max(0,O[Be].g-100),le=!1;else try{L="req"+L+"_"||"";try{var $=fn instanceof Map?fn:Object.entries(fn);for(const[us,hr]of $){let fr=hr;l(hr)&&(fr=Gu(hr)),Me.push(L+us+"="+encodeURIComponent(fr))}}catch(us){throw Me.push(L+"type="+encodeURIComponent("_badmap")),us}}catch{v&&v(fn)}}if(le){$=Me.join("&");break e}}$=void 0}return a=a.i.splice(0,m),h.G=a,$}function $g(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;P||x(),M||(P(),M=!0),b.add(h,a),a.A=0}}function ld(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=no(d(a.Da,a),Hg(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,zg(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=no(d(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ft(10),nl(this),zg(this))};function cd(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function zg(a){a.g=new lr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=hn(a.na);he(h,"RID","rpc"),he(h,"SID",a.M),he(h,"AID",a.K),he(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&he(h,"TO",a.ia),he(h,"TYPE","xmlhttp"),mo(a,h),a.u&&a.o&&od(h,a.u,a.o),a.O&&(a.g.H=a.O);var m=a.g;a=a.ba,m.M=1,m.A=Za(hn(h)),m.u=null,m.R=!0,gg(m,a)}t.Va=function(){this.C!=null&&(this.C=null,nl(this),ld(this),ft(19))};function sl(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Bg(a,h){var m=null;if(a.g==h){sl(a),cd(a),a.g=null;var v=2}else if(nd(a.h,h))m=h.G,Eg(a.h,h),v=1;else return;if(a.I!=0){if(h.o)if(v==1){m=h.u?h.u.length:0,h=Date.now()-h.F;var O=a.D;v=Ya(),ht(v,new dg(v,m)),rl(a)}else $g(a);else if(O=h.m,O==3||O==0&&h.X>0||!(v==1&&P1(a,h)||v==2&&ld(a)))switch(m&&m.length>0&&(h=a.h,h.i=h.i.concat(m)),O){case 1:cs(a,5);break;case 4:cs(a,10);break;case 3:cs(a,6);break;default:cs(a,2)}}}function Hg(a,h){let m=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(m*=2),m*h}function cs(a,h){if(a.j.info("Error code "+h),h==2){var m=d(a.bb,a),v=a.Ua;const O=!v;v=new cr(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||oo(v,"https"),Za(v),O?S1(v.toString(),m):N1(v.toString(),m)}else ft(2);a.I=0,a.l&&a.l.pa(h),Wg(a),Mg(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Wg(a){if(a.I=0,a.ja=[],a.l){const h=bg(a.h);(h.length!=0||a.i.length!=0)&&(y(a.ja,h),y(a.ja,a.i),a.h.i.length=0,E(a.i),a.i.length=0),a.l.oa()}}function qg(a,h,m){var v=m instanceof cr?hn(m):new cr(m);if(v.g!="")h&&(v.g=h+"."+v.g),ao(v,v.u);else{var O=o.location;v=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;const L=new cr(null);v&&oo(L,v),h&&(L.g=h),O&&ao(L,O),m&&(L.h=m),v=L}return m=a.G,h=a.wa,m&&h&&he(v,m,h),he(v,"VER",a.ka),mo(a,v),v}function Kg(a,h,m){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ie(new id({ab:m})):new Ie(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gg(){}t=Gg.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function il(){}il.prototype.g=function(a,h){return new Ct(a,h)};function Ct(a,h){rt.call(this),this.g=new Vg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!A(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!A(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Qs(this)}p(Ct,rt),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){ad(this.g)},Ct.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.v&&(m={},m.__data__=Gu(a),a=m);h.i.push(new v1(h.Ya++,a)),h.I==3&&rl(h)},Ct.prototype.N=function(){this.g.l=null,delete this.j,ad(this.g),delete this.g,Ct.Z.N.call(this)};function Qg(a){Qu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const m in h){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Qg,Qu);function Yg(){Yu.call(this),this.status=1}p(Yg,Yu);function Qs(a){this.g=a}p(Qs,Gg),Qs.prototype.ra=function(){ht(this.g,"a")},Qs.prototype.qa=function(a){ht(this.g,new Qg(a))},Qs.prototype.pa=function(a){ht(this.g,new Yg)},Qs.prototype.oa=function(){ht(this.g,"b")},il.prototype.createWebChannel=il.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,GE=function(){return new il},KE=function(){return Ya()},qE=os,gf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ja.NO_ERROR=0,Ja.TIMEOUT=8,Ja.HTTP_ERROR=6,Gl=Ja,hg.COMPLETE="complete",WE=hg,ag.EventType=eo,eo.OPEN="a",eo.CLOSE="b",eo.ERROR="c",eo.MESSAGE="d",rt.prototype.listen=rt.prototype.J,Co=ag,Ie.prototype.listenOnce=Ie.prototype.K,Ie.prototype.getLastError=Ie.prototype.Ha,Ie.prototype.getLastErrorCode=Ie.prototype.ya,Ie.prototype.getStatus=Ie.prototype.ca,Ie.prototype.getResponseJson=Ie.prototype.La,Ie.prototype.getResponseText=Ie.prototype.la,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Fa,HE=Ie}).apply(typeof Il<"u"?Il:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi="12.10.0";function vP(t){qi=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=new Mp("@firebase/firestore");function Js(){return Rs.logLevel}function H(t,...e){if(Rs.logLevel<=te.DEBUG){const n=e.map(Xp);Rs.debug(`Firestore (${qi}): ${t}`,...n)}}function Yn(t,...e){if(Rs.logLevel<=te.ERROR){const n=e.map(Xp);Rs.error(`Firestore (${qi}): ${t}`,...n)}}function Ps(t,...e){if(Rs.logLevel<=te.WARN){const n=e.map(Xp);Rs.warn(`Firestore (${qi}): ${t}`,...n)}}function Xp(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,QE(t,r,n)}function QE(t,e,n){let r=`FIRESTORE (${qi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Yn(r),new Error(r)}function oe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||QE(e,s,r)}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class _P{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wP{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new YE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new at(e)}}class EP{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class bP{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new EP(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Jv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TP{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Jv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Jv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=IP(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function yf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Yd(s)===Yd(i)?ne(s,i):Yd(s)?1:-1}return ne(t.length,e.length)}const SP=55296,NP=57343;function Yd(t){const e=t.charCodeAt(0);return e>=SP&&e<=NP}function Di(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="__name__";class gn{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&G(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return gn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof gn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=gn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ne(e.length,n.length)}static compareSegments(e,n){const r=gn.isNumericId(e),s=gn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?gn.extractNumericId(e).compare(gn.extractNumericId(n)):yf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Fr.fromString(e.substring(4,e.length-2))}}class ce extends gn{construct(e,n,r){return new ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ce(n)}static emptyPath(){return new ce([])}}const AP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends gn{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return AP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xv}static keyField(){return new Je([Xv])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new z(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new z(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ce.fromString(e))}static fromName(e){return new K(ce.fromString(e).popFirst(5))}static empty(){return new K(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ce(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(t,e,n){if(!n)throw new z(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kP(t,e,n,r){if(e===!0&&r===!0)throw new z(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Zv(t){if(!K.isDocumentKey(t))throw new z(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ex(t){if(K.isDocumentKey(t))throw new z(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function XE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function xu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G(12329,{type:typeof t})}function Nt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xu(t);throw new z(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function CP(t,e){if(e<=0)throw new z(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t,e){const n={typeString:t};return e&&(n.value=e),n}function Fa(t,e){if(!XE(t))throw new z(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new z(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx=-62135596800,nx=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*nx);return new me(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<tx)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/nx}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Fa(e,me._jsonSchema))return new me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-tx;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:Ve("string",me._jsonSchemaVersion),seconds:Ve("number"),nanoseconds:Ve("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new me(0,0))}static max(){return new Y(new me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=-1;function RP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new me(n+1,0):new me(n,r));return new Br(s,K.empty(),e)}function PP(t){return new Br(t.readTime,t.key,xa)}class Br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Br(Y.min(),K.empty(),xa)}static max(){return new Br(Y.max(),K.empty(),xa)}}function jP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==DP)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;n(e[d]).next(f=>{o[d]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function LP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Gi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}_u.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=-1;function wu(t){return t==null}function Dc(t){return t===0&&1/t==-1/0}function VP(t){return typeof t=="number"&&Number.isInteger(t)&&!Dc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="";function MP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=rx(e)),e=FP(t.get(n),e);return rx(e)}function FP(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case ZE:n+="";break;default:n+=i}}return n}function rx(t){return t+ZE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function eb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sl(this.root,e,this.comparator,!0)}}class Sl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=s??Ye.EMPTY,this.right=i??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ye(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ix(this.data.getIterator())}getIteratorFrom(e){return new ix(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class ix{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new ze(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Di(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new tb("Invalid base64 string: "+i):i}}(e);return new et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const UP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hr(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=UP.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wr(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb="server_timestamp",rb="__type__",sb="__previous_value__",ib="__local_write_time__";function tm(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[rb])==null?void 0:r.stringValue)===nb}function Eu(t){const e=t.mapValue.fields[sb];return tm(e)?Eu(e):e}function _a(t){const e=Hr(t.mapValue.fields[ib].timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e,n,r,s,i,o,l,u,d,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f,this.apiKey=p}}const Oc="(default)";class wa{constructor(e,n){this.projectId=e,this.database=n||Oc}static empty(){return new wa("","")}get isDefaultDatabase(){return this.database===Oc}isEqual(e){return e instanceof wa&&e.projectId===this.projectId&&e.database===this.database}}function zP(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new z(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wa(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="__type__",BP="__max__",Nl={mapValue:{}},ab="__vector__",Lc="value";function qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tm(t)?4:WP(t)?9007199254740991:HP(t)?10:11:G(28295,{value:t})}function In(t,e){if(t===e)return!0;const n=qr(t);if(n!==qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _a(t).isEqual(_a(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Hr(s.timestampValue),l=Hr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Wr(s.bytesValue).isEqual(Wr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ce(s.geoPointValue.latitude)===Ce(i.geoPointValue.latitude)&&Ce(s.geoPointValue.longitude)===Ce(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ce(s.integerValue)===Ce(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ce(s.doubleValue),l=Ce(i.doubleValue);return o===l?Dc(o)===Dc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Di(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(sx(o)!==sx(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!In(o[u],l[u])))return!1;return!0}(t,e);default:return G(52216,{left:t})}}function Ea(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function Oi(t,e){if(t===e)return 0;const n=qr(t),r=qr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ce(i.integerValue||i.doubleValue),u=Ce(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ox(t.timestampValue,e.timestampValue);case 4:return ox(_a(t),_a(e));case 5:return yf(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Wr(i),u=Wr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=ne(l[d],u[d]);if(f!==0)return f}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ne(Ce(i.latitude),Ce(o.latitude));return l!==0?l:ne(Ce(i.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ax(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,E,y,N;const l=i.fields||{},u=o.fields||{},d=(g=l[Lc])==null?void 0:g.arrayValue,f=(E=u[Lc])==null?void 0:E.arrayValue,p=ne(((y=d==null?void 0:d.values)==null?void 0:y.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return p!==0?p:ax(d,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Nl.mapValue&&o===Nl.mapValue)return 0;if(i===Nl.mapValue)return 1;if(o===Nl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=o.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=yf(u[p],f[p]);if(g!==0)return g;const E=Oi(l[u[p]],d[f[p]]);if(E!==0)return E}return ne(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G(23264,{he:n})}}function ox(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Hr(t),r=Hr(e),s=ne(n.seconds,r.seconds);return s!==0?s:ne(n.nanos,r.nanos)}function ax(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Oi(n[s],r[s]);if(i)return i}return ne(n.length,r.length)}function Li(t){return vf(t)}function vf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Wr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=vf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${vf(n.fields[o])}`;return s+"}"}(t.mapValue):G(61005,{value:t})}function Ql(t){switch(qr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Eu(t);return e?16+Ql(e):16;case 5:return 2*t.stringValue.length;case 6:return Wr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ql(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return es(r.fields,(i,o)=>{s+=i.length+Ql(o)}),s}(t.mapValue);default:throw G(13486,{value:t})}}function lx(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function xf(t){return!!t&&"integerValue"in t}function nm(t){return!!t&&"arrayValue"in t}function cx(t){return!!t&&"nullValue"in t}function ux(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yl(t){return!!t&&"mapValue"in t}function HP(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[ob])==null?void 0:r.stringValue)===ab}function Go(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Go(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Go(t.arrayValue.values[n]);return e}return{...t}}function WP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===BP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Go(n)}setAll(e){let n=Je.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Go(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Yl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Yl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){es(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new _t(Go(this.value))}}function lb(t){const e=[];return es(t.fields,(n,r)=>{const s=new Je([n]);if(Yl(r)){const i=lb(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ct(e,0,Y.min(),Y.min(),Y.min(),_t.empty(),0)}static newFoundDocument(e,n,r,s){return new ct(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new ct(e,2,n,Y.min(),Y.min(),_t.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,Y.min(),Y.min(),_t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n){this.position=e,this.inclusive=n}}function dx(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Oi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function hx(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n="asc"){this.field=e,this.dir=n}}function qP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{}class Le extends cb{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new GP(e,n,r):n==="array-contains"?new JP(e,r):n==="in"?new XP(e,r):n==="not-in"?new ZP(e,r):n==="array-contains-any"?new e2(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new QP(e,r):new YP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Oi(n,this.value)):n!==null&&qr(this.value)===qr(n)&&this.matchesComparison(Oi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends cb{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new un(e,n)}matches(e){return ub(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ub(t){return t.op==="and"}function db(t){return KP(t)&&ub(t)}function KP(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function _f(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+Li(t.value);if(db(t))return t.filters.map(e=>_f(e)).join(",");{const e=t.filters.map(n=>_f(n)).join(",");return`${t.op}(${e})`}}function hb(t,e){return t instanceof Le?function(r,s){return s instanceof Le&&r.op===s.op&&r.field.isEqual(s.field)&&In(r.value,s.value)}(t,e):t instanceof un?function(r,s){return s instanceof un&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&hb(o,s.filters[l]),!0):!1}(t,e):void G(19439)}function fb(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${Li(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(fb).join(" ,")+"}"}(t):"Filter"}class GP extends Le{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class QP extends Le{constructor(e,n){super(e,"in",n),this.keys=pb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class YP extends Le{constructor(e,n){super(e,"not-in",n),this.keys=pb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function pb(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class JP extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return nm(n)&&Ea(n.arrayValue,this.value)}}class XP extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ea(this.value.arrayValue,n)}}class ZP extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ea(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ea(this.value.arrayValue,n)}}class e2 extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!nm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ea(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function fx(t,e=null,n=[],r=[],s=null,i=null,o=null){return new t2(t,e,n,r,s,i,o)}function rm(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>_f(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),wu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Li(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Li(r)).join(",")),e.Te=n}return e.Te}function sm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!hb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hx(t.startAt,e.startAt)&&hx(t.endAt,e.endAt)}function wf(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function n2(t,e,n,r,s,i,o,l){return new Qi(t,e,n,r,s,i,o,l)}function bu(t){return new Qi(t)}function px(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function r2(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function mb(t){return t.collectionGroup!==null}function Qo(t){const e=J(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ze(Je.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ba(i,r))}),n.has(Je.keyField().canonicalString())||e.Ie.push(new ba(Je.keyField(),r))}return e.Ie}function wn(t){const e=J(t);return e.Ee||(e.Ee=s2(e,Qo(t))),e.Ee}function s2(t,e){if(t.limitType==="F")return fx(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ba(s.field,i)});const n=t.endAt?new Vc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vc(t.startAt.position,t.startAt.inclusive):null;return fx(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ef(t,e){const n=t.filters.concat([e]);return new Qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function i2(t,e){const n=t.explicitOrderBy.concat([e]);return new Qi(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Mc(t,e,n){return new Qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Tu(t,e){return sm(wn(t),wn(e))&&t.limitType===e.limitType}function gb(t){return`${rm(wn(t))}|lt:${t.limitType}`}function Xs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>fb(s)).join(", ")}]`),wu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Li(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Li(s)).join(",")),`Target(${r})`}(wn(t))}; limitType=${t.limitType})`}function Iu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Qo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const d=dx(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,Qo(r),s)||r.endAt&&!function(o,l,u){const d=dx(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,Qo(r),s))}(t,e)}function o2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yb(t){return(e,n)=>{let r=!1;for(const s of Qo(t)){const i=a2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function a2(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),d=l.data.field(i);return u!==null&&d!==null?Oi(u,d):G(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){es(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return eb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2=new be(K.comparator);function Jn(){return l2}const vb=new be(K.comparator);function Ro(...t){let e=vb;for(const n of t)e=e.insert(n.key,n);return e}function xb(t){let e=vb;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function vs(){return Yo()}function _b(){return Yo()}function Yo(){return new Bs(t=>t.toString(),(t,e)=>t.isEqual(e))}const c2=new be(K.comparator),u2=new ze(K.comparator);function re(...t){let e=u2;for(const n of t)e=e.add(n);return e}const d2=new ze(ne);function h2(){return d2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dc(e)?"-0":e}}function wb(t){return{integerValue:""+t}}function f2(t,e){return VP(e)?wb(e):im(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this._=void 0}}function p2(t,e,n){return t instanceof Ta?function(s,i){const o={fields:{[rb]:{stringValue:nb},[ib]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&tm(i)&&(i=Eu(i)),i&&(o.fields[sb]=i),{mapValue:o}}(n,e):t instanceof Ia?bb(t,e):t instanceof Sa?Tb(t,e):function(s,i){const o=Eb(s,i),l=mx(o)+mx(s.Ae);return xf(o)&&xf(s.Ae)?wb(l):im(s.serializer,l)}(t,e)}function m2(t,e,n){return t instanceof Ia?bb(t,e):t instanceof Sa?Tb(t,e):n}function Eb(t,e){return t instanceof Fc?function(r){return xf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ta extends Su{}class Ia extends Su{constructor(e){super(),this.elements=e}}function bb(t,e){const n=Ib(e);for(const r of t.elements)n.some(s=>In(s,r))||n.push(r);return{arrayValue:{values:n}}}class Sa extends Su{constructor(e){super(),this.elements=e}}function Tb(t,e){let n=Ib(e);for(const r of t.elements)n=n.filter(s=>!In(s,r));return{arrayValue:{values:n}}}class Fc extends Su{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function mx(t){return Ce(t.integerValue||t.doubleValue)}function Ib(t){return nm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,n){this.field=e,this.transform=n}}function y2(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ia&&s instanceof Ia||r instanceof Sa&&s instanceof Sa?Di(r.elements,s.elements,In):r instanceof Fc&&s instanceof Fc?In(r.Ae,s.Ae):r instanceof Ta&&s instanceof Ta}(t.transform,e.transform)}class v2{constructor(e,n){this.version=e,this.transformResults=n}}class At{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new At}static exists(e){return new At(void 0,e)}static updateTime(e){return new At(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nu{}function Sb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new om(t.key,At.none()):new Ua(t.key,t.data,At.none());{const n=t.data,r=_t.empty();let s=new ze(Je.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ts(t.key,r,new Dt(s.toArray()),At.none())}}function x2(t,e,n){t instanceof Ua?function(s,i,o){const l=s.value.clone(),u=yx(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ts?function(s,i,o){if(!Jl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=yx(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Nb(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Jo(t,e,n,r){return t instanceof Ua?function(i,o,l,u){if(!Jl(i.precondition,o))return l;const d=i.value.clone(),f=vx(i.fieldTransforms,u,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof ts?function(i,o,l,u){if(!Jl(i.precondition,o))return l;const d=vx(i.fieldTransforms,u,o),f=o.data;return f.setAll(Nb(i)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Jl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function _2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Eb(r.transform,s||null);i!=null&&(n===null&&(n=_t.empty()),n.set(r.field,i))}return n||null}function gx(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Di(r,s,(i,o)=>y2(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ua extends Nu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ts extends Nu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Nb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yx(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,m2(o,l,n[s]))}return r}function vx(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,p2(i,o,e))}return r}class om extends Nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class w2 extends Nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&x2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Jo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Jo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_b();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=Sb(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Di(this.mutations,e.mutations,(n,r)=>gx(n,r))&&Di(this.baseMutations,e.baseMutations,(n,r)=>gx(n,r))}}class am{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return c2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new am(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,se;function I2(t){switch(t){case V.OK:return G(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return G(15467,{code:t})}}function Ab(t){if(t===void 0)return Yn("GRPC error has no .code"),V.UNKNOWN;switch(t){case je.OK:return V.OK;case je.CANCELLED:return V.CANCELLED;case je.UNKNOWN:return V.UNKNOWN;case je.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case je.INTERNAL:return V.INTERNAL;case je.UNAVAILABLE:return V.UNAVAILABLE;case je.UNAUTHENTICATED:return V.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case je.NOT_FOUND:return V.NOT_FOUND;case je.ALREADY_EXISTS:return V.ALREADY_EXISTS;case je.PERMISSION_DENIED:return V.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case je.ABORTED:return V.ABORTED;case je.OUT_OF_RANGE:return V.OUT_OF_RANGE;case je.UNIMPLEMENTED:return V.UNIMPLEMENTED;case je.DATA_LOSS:return V.DATA_LOSS;default:return G(39323,{code:t})}}(se=je||(je={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=new Fr([4294967295,4294967295],0);function xx(t){const e=S2().encode(t),n=new BE;return n.update(e),new Uint8Array(n.digest())}function _x(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Fr([n,r],0),new Fr([s,i],0)]}class lm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Po(`Invalid padding: ${n}`);if(r<0)throw new Po(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Po(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Po(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Fr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Fr.fromNumber(r)));return s.compare(N2)===1&&(s=new Fr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=xx(e),[r,s]=_x(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new lm(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=xx(e),[r,s]=_x(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Po extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,$a.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Au(Y.min(),s,new be(ne),Jn(),re())}}class $a{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $a(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class kb{constructor(e,n){this.targetId=e,this.Ce=n}}class Cb{constructor(e,n,r=et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class wx{constructor(){this.ve=0,this.Fe=Ex(),this.Me=et.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G(38017,{changeType:i})}}),new $a(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Ex()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class A2{constructor(e){this.Ge=e,this.ze=new Map,this.je=Jn(),this.He=Al(),this.Je=Al(),this.Ze=new be(ne)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(wf(i))if(r===0){const o=new K(i.path);this.et(n,o,ct.newNoDocument(o,Y.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,d)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Wr(r).toUint8Array()}catch(u){if(u instanceof tb)return Ps("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new lm(o,s,i)}catch(u){return Ps(u instanceof Po?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&wf(l.target)){const u=new K(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,ct.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=re();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Au(e,n,this.Ze,this.je,r);return this.je=Jn(),this.He=Al(),this.Je=Al(),this.Ze=new be(ne),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new wx,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new ze(ne),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new ze(ne),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new wx),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Al(){return new be(K.comparator)}function Ex(){return new be(K.comparator)}const k2={asc:"ASCENDING",desc:"DESCENDING"},C2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},R2={and:"AND",or:"OR"};class P2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bf(t,e){return t.useProto3Json||wu(e)?e:{value:e}}function Uc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function j2(t,e){return Uc(t,e.toTimestamp())}function En(t){return oe(!!t,49232),Y.fromTimestamp(function(n){const r=Hr(n);return new me(r.seconds,r.nanos)}(t))}function cm(t,e){return Tf(t,e).canonicalString()}function Tf(t,e){const n=function(s){return new ce(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Pb(t){const e=ce.fromString(t);return oe(Vb(e),10190,{key:e.toString()}),e}function If(t,e){return cm(t.databaseId,e.path)}function Jd(t,e){const n=Pb(e);if(n.get(1)!==t.databaseId.projectId)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Db(n))}function jb(t,e){return cm(t.databaseId,e)}function D2(t){const e=Pb(t);return e.length===4?ce.emptyPath():Db(e)}function Sf(t){return new ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Db(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function bx(t,e,n){return{name:If(t,e),fields:n.value.mapValue.fields}}function O2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:G(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(oe(f===void 0||typeof f=="string",58123),et.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),et.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const f=d.code===void 0?V.UNKNOWN:Ab(d.code);return new z(f,d.message||"")}(o);n=new Cb(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Jd(t,r.document.name),i=En(r.document.updateTime),o=r.document.createTime?En(r.document.createTime):Y.min(),l=new _t({mapValue:{fields:r.document.fields}}),u=ct.newFoundDocument(s,i,o,l),d=r.targetIds||[],f=r.removedTargetIds||[];n=new Xl(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Jd(t,r.document),i=r.readTime?En(r.readTime):Y.min(),o=ct.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Xl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Jd(t,r.document),i=r.removedTargetIds||[];n=new Xl([],i,s,null)}else{if(!("filter"in e))return G(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new T2(s,i),l=r.targetId;n=new kb(l,o)}}return n}function L2(t,e){let n;if(e instanceof Ua)n={update:bx(t,e.key,e.value)};else if(e instanceof om)n={delete:If(t,e.key)};else if(e instanceof ts)n={update:bx(t,e.key,e.data),updateMask:W2(e.fieldMask)};else{if(!(e instanceof w2))return G(16599,{dt:e.type});n={verify:If(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Ta)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ia)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Sa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Fc)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw G(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:j2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G(27497)}(t,e.precondition)),n}function V2(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?En(s.updateTime):En(i);return o.isEqual(Y.min())&&(o=En(i)),new v2(o,s.transformResults||[])}(n,e))):[]}function M2(t,e){return{documents:[jb(t,e.path)]}}function F2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=jb(t,s);const i=function(d){if(d.length!==0)return Lb(un.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(f=>function(g){return{field:Zs(g.field),direction:z2(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=bf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:n,parent:s}}function U2(t){let e=D2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){oe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=Ob(p);return g instanceof un&&db(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(y){return new ba(ei(y.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,wu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,E=p.values||[];return new Vc(E,g)}(n.startAt));let d=null;return n.endAt&&(d=function(p){const g=!p.before,E=p.values||[];return new Vc(E,g)}(n.endAt)),n2(e,s,o,i,l,"F",u,d)}function $2(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ob(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ei(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ei(n.unaryFilter.field);return Le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ei(n.unaryFilter.field);return Le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ei(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(t):t.fieldFilter!==void 0?function(n){return Le.create(ei(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(r=>Ob(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(n.compositeFilter.op))}(t):G(30097,{filter:t})}function z2(t){return k2[t]}function B2(t){return C2[t]}function H2(t){return R2[t]}function Zs(t){return{fieldPath:t.canonicalString()}}function ei(t){return Je.fromServerFormat(t.fieldPath)}function Lb(t){return t instanceof Le?function(n){if(n.op==="=="){if(ux(n.value))return{unaryFilter:{field:Zs(n.field),op:"IS_NAN"}};if(cx(n.value))return{unaryFilter:{field:Zs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ux(n.value))return{unaryFilter:{field:Zs(n.field),op:"IS_NOT_NAN"}};if(cx(n.value))return{unaryFilter:{field:Zs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zs(n.field),op:B2(n.op),value:n.value}}}(t):t instanceof un?function(n){const r=n.getFilters().map(s=>Lb(s));return r.length===1?r[0]:{compositeFilter:{op:H2(n.op),filters:r}}}(t):G(54877,{filter:t})}function W2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Vb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Mb(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,r,s,i=Y.min(),o=Y.min(),l=et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e){this.yt=e}}function K2(t){const e=U2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Mc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(){this.Sn=new Q2}addToCollectionParentIndex(e,n){return this.Sn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Br.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Br.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class Q2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ze(ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ze(ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Fb=41943040;class vt{static withCacheSize(e){return new vt(e,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(Fb,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Vi(0)}static ar(){return new Vi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix="LruGarbageCollector",Y2=1048576;function Sx([t,e],[n,r]){const s=ne(t,n);return s===0?ne(e,r):s}class J2{constructor(e){this.Pr=e,this.buffer=new ze(Sx),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Sx(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class X2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(Ix,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Gi(n)?H(Ix,"Ignoring IndexedDB error during garbage collection: ",n):await Ki(n)}await this.Ar(3e5)})}}class Z2{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(_u.ce);const r=new J2(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Tx)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Tx):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(d=Date.now(),Js()<=te.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function ej(t,e){return new Z2(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tj{constructor(){this.changes=new Bs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rj{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Jo(r.mutation,s,Dt.empty(),me.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=vs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ro();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=vs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Jn();const o=Yo(),l=function(){return Yo()}();return n.forEach((u,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof ts)?i=i.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),Jo(f.mutation,d,f.mutation.getFieldMask(),me.now())):o.set(d.key,Dt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,f)=>o.set(d,f)),n.forEach((d,f)=>l.set(d,new nj(f,o.get(d)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Yo();let s=new be((o,l)=>o-l),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||Dt.empty();f=l.applyToLocalView(d,f),r.set(u,f);const p=(s.get(l.batchId)||re()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,p=_b();f.forEach(g=>{if(!i.has(g)){const E=Sb(n.get(g),r.get(g));E!==null&&p.set(g,E),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return r2(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):mb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(vs());let l=xa,u=i;return o.next(d=>F.forEach(d,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,re())).next(f=>({batchId:l,changes:xb(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=Ro();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ro();return this.indexManager.getCollectionParents(e,i).next(l=>F.forEach(l,u=>{const d=function(p,g){return new Qi(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,ct.newInvalidDocument(f)))});let l=Ro();return o.forEach((u,d)=>{const f=i.get(u);f!==void 0&&Jo(f.mutation,d,Dt.empty(),me.now()),Iu(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sj{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return F.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:En(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:K2(s.bundledQuery),readTime:En(s.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ij{constructor(){this.overlays=new be(K.comparator),this.Lr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vs();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=vs(),i=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new be((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=vs(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=vs(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=s)););return F.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new b2(n,r));let i=this.Lr.get(n);i===void 0&&(i=re(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oj{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(){this.kr=new ze(We.Kr),this.qr=new ze(We.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new We(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new We(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new K(new ce([])),r=new We(n,e),s=new We(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new K(new ce([])),r=new We(n,e),s=new We(n,e+1);let i=re();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new We(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return K.comparator(e.key,n.key)||ne(e.Hr,n.Hr)}static Ur(e,n){return ne(e.Hr,n.Hr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new ze(We.Kr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new E2(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new We(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?em:this.Yn-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),s=new We(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(ne);return n.forEach(s=>{const i=new We(s,0),o=new We(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),F.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new We(new K(i),0);let l=new ze(ne);return this.Jr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Hr)),!0)},o),F.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){oe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return F.forEach(n.mutations,s=>{const i=new We(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new We(n,0),s=this.Jr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lj{constructor(e){this.ti=e,this.docs=function(){return new be(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=Jn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Jn();const o=n.path,l=new K(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||jP(PP(f),r)<=0||(s.has(f.key)||Iu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){G(9500)}ni(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new cj(this)}getSize(e){return F.resolve(this.size)}}class cj extends tj{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uj{constructor(e){this.persistence=e,this.ri=new Bs(n=>rm(n),sm),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new um,this.targetCount=0,this.oi=Vi._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),F.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Vi(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.lr(n),F.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,n){this._i={},this.overlays={},this.ai=new _u(0),this.ui=!1,this.ui=!0,this.ci=new oj,this.referenceDelegate=e(this),this.li=new uj(this),this.indexManager=new G2,this.remoteDocumentCache=function(s){return new lj(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new q2(n),this.Pi=new sj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ij,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new aj(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new dj(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return F.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class dj extends OP{constructor(e){super(),this.currentSequenceNumber=e}}class dm{constructor(e){this.persistence=e,this.Ri=new um,this.Ai=null}static Vi(e){return new dm(e)}get di(){if(this.Ai)return this.Ai;throw G(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.di,r=>{const s=K.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class $c{constructor(e,n){this.persistence=e,this.fi=new Bs(r=>MP(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=ej(this,n)}static Vi(e,n){return new $c(e,n)}Ti(){}Ii(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return F.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?F.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,Y.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ql(e.data.value)),n}wr(e,n,r){return F.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new hm(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hj{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fj{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return NA()?8:LP(dt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new hj;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(Js()<=te.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Xs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(Js()<=te.DEBUG&&H("QueryEngine","Query:",Xs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Js()<=te.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Xs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wn(n))):F.resolve())}gs(e,n){if(px(n))return F.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Mc(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.bs(n,l);return this.Ss(n,d,o,u.readTime)?this.gs(e,Mc(n,null,"F")):this.Ds(e,d,n,u)}))})))}ps(e,n,r,s){return px(n)||s.isEqual(Y.min())?F.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?F.resolve(null):(Js()<=te.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xs(n)),this.Ds(e,o,n,RP(s,xa)).next(l=>l))})}bs(e,n){let r=new ze(yb(e));return n.forEach((s,i)=>{Iu(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return Js()<=te.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Xs(n)),this.fs.getDocumentsMatchingQuery(e,n,Br.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="LocalStore",pj=3e8;class mj{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new be(ne),this.Fs=new Bs(i=>rm(i),sm),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rj(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function gj(t,e,n,r){return new mj(t,e,n,r)}async function $b(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=re();for(const d of s){o.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({Ns:d,removedBatchIds:o,addedBatchIds:l}))})})}function yj(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const p=d.batch,g=p.keys();let E=F.resolve();return g.forEach(y=>{E=E.next(()=>f.getEntry(u,y)).next(N=>{const T=d.docVersions.get(y);oe(T!==null,48541),N.version.compareTo(T)<0&&(p.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),f.addEntry(N)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function zb(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function vj(t,e){const n=J(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,p)));let E=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(et.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),s=s.insert(p,E),function(N,T,w){return N.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=pj?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,E,f)&&l.push(n.li.updateTargetData(i,E))});let u=Jn(),d=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(xj(i,o,e.documentUpdates).next(f=>{u=f.Bs,d=f.Ls})),!r.isEqual(Y.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(p=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return F.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(n.vs=s,i))}function xj(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Jn();return n.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(fm,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function _j(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=em),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function wj(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Nf(t,e,n){const r=J(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Gi(o))throw o;H(fm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Nx(t,e,n){const r=J(t);let s=Y.min(),i=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,f){const p=J(u),g=p.Fs.get(f);return g!==void 0?F.resolve(p.vs.get(g)):p.li.getTargetData(d,f)}(r,o,wn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:re())).next(l=>(Ej(r,o2(e),l),{documents:l,ks:i})))}function Ej(t,e,n){let r=t.Ms.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class Ax{constructor(){this.activeTargetIds=h2()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bj{constructor(){this.vo=new Ax,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Ax,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tj{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx="ConnectivityMonitor";class Cx{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(kx,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(kx,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kl=null;function Af(){return kl===null?kl=function(){return 268435456+Math.round(2147483648*Math.random())}():kl++,"0x"+kl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="RestConnection",Ij={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Sj{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Oc?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Af(),l=this.Qo(e,n.toUriEncodedString());H(Xd,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:d}=new URL(l),f=Us(d);return this.zo(e,l,u,r,f).then(p=>(H(Xd,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Ps(Xd,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=Ij[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nj{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection",To=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class bi extends Sj{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!bi.c_){const e=KE();To(e,qE.STAT_EVENT,n=>{n.stat===gf.PROXY?H(ot,"STAT_EVENT: detected buffering proxy"):n.stat===gf.NOPROXY&&H(ot,"STAT_EVENT: detected no buffering proxy")}),bi.c_=!0}}zo(e,n,r,s,i){const o=Af();return new Promise((l,u)=>{const d=new HE;d.setWithCredentials(!0),d.listenOnce(WE.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Gl.NO_ERROR:const p=d.getResponseJson();H(ot,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Gl.TIMEOUT:H(ot,`RPC '${e}' ${o} timed out`),u(new z(V.DEADLINE_EXCEEDED,"Request time out"));break;case Gl.HTTP_ERROR:const g=d.getStatus();if(H(ot,`RPC '${e}' ${o} failed with status:`,g,"response text:",d.getResponseText()),g>0){let E=d.getResponseJson();Array.isArray(E)&&(E=E[0]);const y=E==null?void 0:E.error;if(y&&y.status&&y.message){const N=function(w){const _=w.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(_)>=0?_:V.UNKNOWN}(y.status);u(new z(N,y.message))}else u(new z(V.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new z(V.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{H(ot,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);H(ot,`RPC '${e}' ${o} sending request:`,s),d.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Af(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");H(ot,`Creating RPC '${e}' stream ${s}: ${d}`,l);const f=o.createWebChannel(d,l);this.I_(f);let p=!1,g=!1;const E=new Nj({Ho:y=>{g?H(ot,`Not sending because RPC '${e}' stream ${s} is closed:`,y):(p||(H(ot,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),H(ot,`RPC '${e}' stream ${s} sending:`,y),f.send(y))},Jo:()=>f.close()});return To(f,Co.EventType.OPEN,()=>{g||(H(ot,`RPC '${e}' stream ${s} transport opened.`),E.i_())}),To(f,Co.EventType.CLOSE,()=>{g||(g=!0,H(ot,`RPC '${e}' stream ${s} transport closed`),E.o_(),this.E_(f))}),To(f,Co.EventType.ERROR,y=>{g||(g=!0,Ps(ot,`RPC '${e}' stream ${s} transport errored. Name:`,y.name,"Message:",y.message),E.o_(new z(V.UNAVAILABLE,"The operation could not be completed")))}),To(f,Co.EventType.MESSAGE,y=>{var N;if(!g){const T=y.data[0];oe(!!T,16349);const w=T,_=(w==null?void 0:w.error)||((N=w[0])==null?void 0:N.error);if(_){H(ot,`RPC '${e}' stream ${s} received error:`,_);const I=_.status;let D=function(b){const x=je[b];if(x!==void 0)return Ab(x)}(I),P=_.message;I==="NOT_FOUND"&&P.includes("database")&&P.includes("does not exist")&&P.includes(this.databaseId.database)&&Ps(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=V.INTERNAL,P="Unknown error status: "+I+" with message "+_.message),g=!0,E.o_(new z(D,P)),f.close()}else H(ot,`RPC '${e}' stream ${s} received:`,T),E.__(T)}}),bi.u_(),setTimeout(()=>{E.s_()},0),E}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return GE()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aj(t){return new bi(t)}function Zd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t){return new P2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bi.c_=!1;class Bb{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx="PersistentStream";class Hb{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Bb(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new z(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(Rx,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(H(Rx,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kj extends Hb{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=O2(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?En(o.readTime):Y.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Sf(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=wf(u)?{documents:M2(i,u)}:{query:F2(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Rb(i,o.resumeToken);const d=bf(i,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Uc(i,o.snapshotVersion.toTimestamp());const d=bf(i,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=$2(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Sf(this.serializer),n.removeTarget=e,this.K_(n)}}class Cj extends Hb{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=V2(e.writeResults,e.commitTime),r=En(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Sf(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>L2(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rj{}class Pj extends Rj{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Tf(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(V.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Tf(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function jj(t,e,n,r){return new Pj(t,e,n,r)}class Dj{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Yn(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="RemoteStore";class Oj{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Hs(this)&&(H(js,"Restarting streams for network reachability change."),await async function(u){const d=J(u);d.Ea.add(4),await za(d),d.Va.set("Unknown"),d.Ea.delete(4),await Cu(d)}(this))})}),this.Va=new Dj(r,s)}}async function Cu(t){if(Hs(t))for(const e of t.Ra)await e(!0)}async function za(t){for(const e of t.Ra)await e(!1)}function Wb(t,e){const n=J(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),ym(n)?gm(n):Yi(n).O_()&&mm(n,e))}function pm(t,e){const n=J(t),r=Yi(n);n.Ia.delete(e),r.O_()&&qb(n,e),n.Ia.size===0&&(r.O_()?r.L_():Hs(n)&&n.Va.set("Unknown"))}function mm(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Yi(t).Z_(e)}function qb(t,e){t.da.$e(e),Yi(t).X_(e)}function gm(t){t.da=new A2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Yi(t).start(),t.Va.ua()}function ym(t){return Hs(t)&&!Yi(t).x_()&&t.Ia.size>0}function Hs(t){return J(t).Ea.size===0}function Kb(t){t.da=void 0}async function Lj(t){t.Va.set("Online")}async function Vj(t){t.Ia.forEach((e,n)=>{mm(t,e)})}async function Mj(t,e){Kb(t),ym(t)?(t.Va.ha(e),gm(t)):t.Va.set("Unknown")}async function Fj(t,e,n){if(t.Va.set("Online"),e instanceof Cb&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.da.removeTarget(l))}(t,e)}catch(r){H(js,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await zc(t,r)}else if(e instanceof Xl?t.da.Xe(e):e instanceof kb?t.da.st(e):t.da.tt(e),!n.isEqual(Y.min()))try{const r=await zb(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(d);f&&i.Ia.set(d,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(et.EMPTY_BYTE_STRING,f.snapshotVersion)),qb(i,u);const p=new Nr(f.target,u,d,f.sequenceNumber);mm(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(js,"Failed to raise snapshot:",r),await zc(t,r)}}async function zc(t,e,n){if(!Gi(e))throw e;t.Ea.add(1),await za(t),t.Va.set("Offline"),n||(n=()=>zb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(js,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Cu(t)})}function Gb(t,e){return e().catch(n=>zc(t,n,e))}async function Ru(t){const e=J(t),n=Kr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:em;for(;Uj(e);)try{const s=await _j(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,$j(e,s)}catch(s){await zc(e,s)}Qb(e)&&Yb(e)}function Uj(t){return Hs(t)&&t.Ta.length<10}function $j(t,e){t.Ta.push(e);const n=Kr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Qb(t){return Hs(t)&&!Kr(t).x_()&&t.Ta.length>0}function Yb(t){Kr(t).start()}async function zj(t){Kr(t).ra()}async function Bj(t){const e=Kr(t);for(const n of t.Ta)e.ea(n.mutations)}async function Hj(t,e,n){const r=t.Ta.shift(),s=am.from(r,e,n);await Gb(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ru(t)}async function Wj(t,e){e&&Kr(t).Y_&&await async function(r,s){if(function(o){return I2(o)&&o!==V.ABORTED}(s.code)){const i=r.Ta.shift();Kr(r).B_(),await Gb(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ru(r)}}(t,e),Qb(t)&&Yb(t)}async function Px(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),H(js,"RemoteStore received new credentials");const r=Hs(n);n.Ea.add(3),await za(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Cu(n)}async function qj(t,e){const n=J(t);e?(n.Ea.delete(2),await Cu(n)):e||(n.Ea.add(2),await za(n),n.Va.set("Unknown"))}function Yi(t){return t.ma||(t.ma=function(n,r,s){const i=J(n);return i.sa(),new kj(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:Lj.bind(null,t),Yo:Vj.bind(null,t),t_:Mj.bind(null,t),J_:Fj.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),ym(t)?gm(t):t.Va.set("Unknown")):(await t.ma.stop(),Kb(t))})),t.ma}function Kr(t){return t.fa||(t.fa=function(n,r,s){const i=J(n);return i.sa(),new Cj(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:zj.bind(null,t),t_:Wj.bind(null,t),ta:Bj.bind(null,t),na:Hj.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Ru(t)):(await t.fa.stop(),t.Ta.length>0&&(H(js,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new vm(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xm(t,e){if(Yn("AsyncQueue",`${e}: ${t}`),Gi(t))return new z(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{static emptySet(e){return new Ti(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Ro(),this.sortedSet=new be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ti)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ti;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(){this.ga=new be(K.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):G(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Mi{constructor(e,n,r,s,i,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Mi(e,n,Ti.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Tu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kj{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class Gj{constructor(){this.queries=Dx(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=J(n),i=s.queries;s.queries=Dx(),i.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new z(V.ABORTED,"Firestore shutting down"))}}function Dx(){return new Bs(t=>gb(t),Tu)}async function _m(t,e){const n=J(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new Kj,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=xm(o,`Initialization of query '${Xs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Em(n)}async function wm(t,e){const n=J(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Qj(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ba)l.Fa(s)&&(r=!0);o.wa=s}}r&&Em(n)}function Yj(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function Em(t){t.Ca.forEach(e=>{e.next()})}var kf,Ox;(Ox=kf||(kf={})).Ma="default",Ox.Cache="cache";class bm{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Mi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==kf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e){this.key=e}}class Xb{constructor(e){this.key=e}}class Jj{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=re(),this.mutatedKeys=re(),this.eu=yb(e),this.tu=new Ti(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new jx,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),E=Iu(this.query,p)?p:null,y=!!g&&this.mutatedKeys.has(g.key),N=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let T=!1;g&&E?g.data.isEqual(E.data)?y!==N&&(r.track({type:3,doc:E}),T=!0):this.su(g,E)||(r.track({type:2,doc:E}),T=!0,(u&&this.eu(E,u)>0||d&&this.eu(E,d)<0)&&(l=!0)):!g&&E?(r.track({type:0,doc:E}),T=!0):g&&!E&&(r.track({type:1,doc:g}),T=!0,(u||d)&&(l=!0)),T&&(E?(o=o.add(E),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(E,y){const N=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Vt:T})}};return N(E)-N(y)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,d=u!==this.Xa;return this.Xa=u,o.length!==0||d?{snapshot:new Mi(this.query,e.tu,i,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new jx,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=re(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new Xb(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new Jb(r))}),n}cu(e){this.Za=e.ks,this.Ya=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Mi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Tm="SyncEngine";class Xj{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Zj{constructor(e){this.key=e,this.hu=!1}}class eD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Bs(l=>gb(l),Tu),this.Iu=new Map,this.Eu=new Set,this.Ru=new be(K.comparator),this.Au=new Map,this.Vu=new um,this.du={},this.mu=new Map,this.fu=Vi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function tD(t,e,n=!0){const r=sT(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Zb(r,e,n,!0),s}async function nD(t,e){const n=sT(t);await Zb(n,e,!0,!1)}async function Zb(t,e,n,r){const s=await wj(t.localStore,wn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await rD(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Wb(t.remoteStore,s),l}async function rD(t,e,n,r,s){t.pu=(p,g,E)=>async function(N,T,w,_){let I=T.view.ru(w);I.Ss&&(I=await Nx(N.localStore,T.query,!1).then(({documents:b})=>T.view.ru(b,I)));const D=_&&_.targetChanges.get(T.targetId),P=_&&_.targetMismatches.get(T.targetId)!=null,M=T.view.applyChanges(I,N.isPrimaryClient,D,P);return Vx(N,T.targetId,M.au),M.snapshot}(t,p,g,E);const i=await Nx(t.localStore,e,!0),o=new Jj(e,i.ks),l=o.ru(i.documents),u=$a.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(l,t.isPrimaryClient,u);Vx(t,n,d.au);const f=new Xj(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),d.snapshot}async function sD(t,e,n){const r=J(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Tu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Nf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&pm(r.remoteStore,s.targetId),Cf(r,s.targetId)}).catch(Ki)):(Cf(r,s.targetId),await Nf(r.localStore,s.targetId,!0))}async function iD(t,e){const n=J(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),pm(n.remoteStore,r.targetId))}async function oD(t,e,n){const r=fD(t);try{const s=await function(o,l){const u=J(o),d=me.now(),f=l.reduce((E,y)=>E.add(y.key),re());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let y=Jn(),N=re();return u.xs.getEntries(E,f).next(T=>{y=T,y.forEach((w,_)=>{_.isValidDocument()||(N=N.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,y)).next(T=>{p=T;const w=[];for(const _ of l){const I=_2(_,p.get(_.key).overlayedDocument);I!=null&&w.push(new ts(_.key,I,lb(I.value.mapValue),At.exists(!0)))}return u.mutationQueue.addMutationBatch(E,d,w,l)}).next(T=>{g=T;const w=T.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(E,T.batchId,w)})}).then(()=>({batchId:g.batchId,changes:xb(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let d=o.du[o.currentUser.toKey()];d||(d=new be(ne)),d=d.insert(l,u),o.du[o.currentUser.toKey()]=d}(r,s.batchId,n),await Ba(r,s.changes),await Ru(r.remoteStore)}catch(s){const i=xm(s,"Failed to persist write");n.reject(i)}}async function eT(t,e){const n=J(t);try{const r=await vj(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?oe(o.hu,14607):s.removedDocuments.size>0&&(oe(o.hu,42227),o.hu=!1))}),await Ba(n,r,e)}catch(r){await Ki(r)}}function Lx(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let d=!1;u.queries.forEach((f,p)=>{for(const g of p.ba)g.va(l)&&(d=!0)}),d&&Em(u)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function aD(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new be(K.comparator);o=o.insert(i,ct.newNoDocument(i,Y.min()));const l=re().add(i),u=new Au(Y.min(),new Map,new be(ne),o,l);await eT(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),Im(r)}else await Nf(r.localStore,e,!1).then(()=>Cf(r,e,n)).catch(Ki)}async function lD(t,e){const n=J(t),r=e.batch.batchId;try{const s=await yj(n.localStore,e);nT(n,r,null),tT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ba(n,s)}catch(s){await Ki(s)}}async function cD(t,e,n){const r=J(t);try{const s=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(p=>(oe(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(d,p))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);nT(r,e,n),tT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ba(r,s)}catch(s){await Ki(s)}}function tT(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function nT(t,e,n){const r=J(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Cf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||rT(t,r)})}function rT(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(pm(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Im(t))}function Vx(t,e,n){for(const r of n)r instanceof Jb?(t.Vu.addReference(r.key,e),uD(t,r)):r instanceof Xb?(H(Tm,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||rT(t,r.key)):G(19791,{wu:r})}function uD(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(H(Tm,"New document in limbo: "+n),t.Eu.add(r),Im(t))}function Im(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new K(ce.fromString(e)),r=t.fu.next();t.Au.set(r,new Zj(n)),t.Ru=t.Ru.insert(n,r),Wb(t.remoteStore,new Nr(wn(bu(n.path)),r,"TargetPurposeLimboResolution",_u.ce))}}async function Ba(t,e,n){const r=J(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const p=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(d){s.push(d);const p=hm.Es(u.targetId,d);i.push(p)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(u,d){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(d,g=>F.forEach(g.Ts,E=>f.persistence.referenceDelegate.addReference(p,g.targetId,E)).next(()=>F.forEach(g.Is,E=>f.persistence.referenceDelegate.removeReference(p,g.targetId,E)))))}catch(p){if(!Gi(p))throw p;H(fm,"Failed to update sequence numbers: "+p)}for(const p of d){const g=p.targetId;if(!p.fromCache){const E=f.vs.get(g),y=E.snapshotVersion,N=E.withLastLimboFreeSnapshotVersion(y);f.vs=f.vs.insert(g,N)}}}(r.localStore,i))}async function dD(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){H(Tm,"User change. New user:",e.toKey());const r=await $b(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new z(V.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ba(n,r.Ns)}}function hD(t,e){const n=J(t),r=n.Au.get(e);if(r&&r.hu)return re().add(r.key);{let s=re();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function sT(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=eT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aD.bind(null,e),e.Pu.J_=Qj.bind(null,e.eventManager),e.Pu.yu=Yj.bind(null,e.eventManager),e}function fD(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cD.bind(null,e),e}class Bc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ku(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return gj(this.persistence,new fj,e.initialUser,this.serializer)}Cu(e){return new Ub(dm.Vi,this.serializer)}Du(e){return new bj}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bc.provider={build:()=>new Bc};class pD extends Bc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){oe(this.persistence.referenceDelegate instanceof $c,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new X2(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new Ub(r=>$c.Vi(r,n),this.serializer)}}class Rf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Lx(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dD.bind(null,this.syncEngine),await qj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Gj}()}createDatastore(e){const n=ku(e.databaseInfo.databaseId),r=Aj(e.databaseInfo);return jj(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new Oj(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Lx(this.syncEngine,n,0),function(){return Cx.v()?new Cx:new Tj}())}createSyncEngine(e,n){return function(s,i,o,l,u,d,f){const p=new eD(s,i,o,l,u,d);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=J(s);H(js,"RemoteStore shutting down."),i.Ea.add(5),await za(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Rf.provider={build:()=>new Rf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Yn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="FirestoreClient";class mD{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=at.UNAUTHENTICATED,this.clientId=Zp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{H(Gr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(Gr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=xm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function eh(t,e){t.asyncQueue.verifyOperationInProgress(),H(Gr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await $b(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Mx(t,e){t.asyncQueue.verifyOperationInProgress();const n=await gD(t);H(Gr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Px(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Px(e.remoteStore,s)),t._onlineComponents=e}async function gD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Gr,"Using user provided OfflineComponentProvider");try{await eh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ps("Error using user provided cache. Falling back to memory cache: "+n),await eh(t,new Bc)}}else H(Gr,"Using default OfflineComponentProvider"),await eh(t,new pD(void 0));return t._offlineComponents}async function iT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Gr,"Using user provided OnlineComponentProvider"),await Mx(t,t._uninitializedComponentsProvider._online)):(H(Gr,"Using default OnlineComponentProvider"),await Mx(t,new Rf))),t._onlineComponents}function yD(t){return iT(t).then(e=>e.syncEngine)}async function Hc(t){const e=await iT(t),n=e.eventManager;return n.onListen=tD.bind(null,e.syncEngine),n.onUnlisten=sD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=nD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=iD.bind(null,e.syncEngine),n}function vD(t,e,n,r){const s=new Sm(r),i=new bm(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>_m(await Hc(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>wm(await Hc(t),i))}}function xD(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,d){const f=new Sm({next:g=>{f.Nu(),o.enqueueAndForget(()=>wm(i,p));const E=g.docs.has(l);!E&&g.fromCache?d.reject(new z(V.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&g.fromCache&&u&&u.source==="server"?d.reject(new z(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),p=new bm(bu(l.path),f,{includeMetadataChanges:!0,Ka:!0});return _m(i,p)}(await Hc(t),t.asyncQueue,e,n,r)),r.promise}function _D(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,d){const f=new Sm({next:g=>{f.Nu(),o.enqueueAndForget(()=>wm(i,p)),g.fromCache&&u.source==="server"?d.reject(new z(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),p=new bm(l,f,{includeMetadataChanges:!0,Ka:!0});return _m(i,p)}(await Hc(t),t.asyncQueue,e,n,r)),r.promise}function wD(t,e){const n=new zn;return t.asyncQueue.enqueueAndForget(async()=>oD(await yD(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED="ComponentProvider",Fx=new Map;function bD(t,e,n,r,s){return new $P(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,oT(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT="firestore.googleapis.com",Ux=!0;class $x{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=aT,this.ssl=Ux}else this.host=e.host,this.ssl=e.ssl??Ux;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Fb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Y2)throw new z(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $x({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $x(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xP;switch(r.type){case"firstParty":return new bP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Fx.get(n);r&&(H(ED,"Removing Datastore"),Fx.delete(n),r.terminate())}(this),Promise.resolve()}}function TD(t,e,n,r={}){var d;t=Nt(t,Pu);const s=Us(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Lp(`https://${l}`),Vp("Firestore",!0)),i.host!==aT&&i.host!==l&&Ps("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!ks(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=at.MOCK_USER;else{f=rE(r.mockUserToken,(d=t._app)==null?void 0:d.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new z(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new at(g)}t._authCredentials=new _P(new YE(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new or(this.firestore,e,this._query)}}class Ne{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}toJSON(){return{type:Ne._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Fa(n,Ne._jsonSchema))return new Ne(e,r||null,new K(ce.fromString(n.referencePath)))}}Ne._jsonSchemaVersion="firestore/documentReference/1.0",Ne._jsonSchema={type:Ve("string",Ne._jsonSchemaVersion),referencePath:Ve("string")};class Ur extends or{constructor(e,n,r){super(e,n,bu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new K(e))}withConverter(e){return new Ur(this.firestore,e,this._path)}}function tt(t,e,...n){if(t=Ee(t),JE("collection","path",e),t instanceof Pu){const r=ce.fromString(e,...n);return ex(r),new Ur(t,null,r)}{if(!(t instanceof Ne||t instanceof Ur))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return ex(r),new Ur(t.firestore,null,r)}}function An(t,e,...n){if(t=Ee(t),arguments.length===1&&(e=Zp.newId()),JE("doc","path",e),t instanceof Pu){const r=ce.fromString(e,...n);return Zv(r),new Ne(t,null,new K(r))}{if(!(t instanceof Ne||t instanceof Ur))throw new z(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return Zv(r),new Ne(t.firestore,t instanceof Ur?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx="AsyncQueue";class Bx{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Bb(this,"async_queue_retry"),this._c=()=>{const r=Zd();r&&H(zx,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Zd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Zd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new zn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Gi(e))throw e;H(zx,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Yn("INTERNAL UNHANDLED ERROR: ",Hx(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=vm.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&G(47125,{Pc:Hx(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Hx(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Xn extends Pu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Bx,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bx(e),this._firestoreClient=void 0,await e}}}function ID(t,e){const n=typeof t=="object"?t:Up(),r=typeof t=="string"?t:Oc,s=Wi(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=eE("firestore");i&&TD(s,...i)}return s}function Ha(t){if(t._terminated)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||SD(t),t._firestoreClient}function SD(t){var r,s,i,o;const e=t._freezeSettings(),n=bD(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new mD(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bt(et.fromBase64String(e))}catch(n){throw new z(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bt(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Fa(e,Bt._jsonSchema))return Bt.fromBase64String(e.bytes)}}Bt._jsonSchemaVersion="firestore/bytes/1.0",Bt._jsonSchema={type:Ve("string",Bt._jsonSchemaVersion),bytes:Ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:bn._jsonSchemaVersion}}static fromJSON(e){if(Fa(e,bn._jsonSchema))return new bn(e.latitude,e.longitude)}}bn._jsonSchemaVersion="firestore/geoPoint/1.0",bn._jsonSchema={type:Ve("string",bn._jsonSchemaVersion),latitude:Ve("number"),longitude:Ve("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:on._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Fa(e,on._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new on(e.vectorValues);throw new z(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}on._jsonSchemaVersion="firestore/vectorValue/1.0",on._jsonSchema={type:Ve("string",on._jsonSchemaVersion),vectorValues:Ve("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND=/^__.*__$/;class AD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ts(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ua(e,this.data,n,this.fieldTransforms)}}class lT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ts(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function cT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:t})}}class Nm{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Nm({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Wc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(cT(this.dataSource)&&ND.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class kD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ku(e)}createContext(e,n,r,s=!1){return new Nm({dataSource:e,methodName:n,targetDoc:r,path:Je.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wa(t){const e=t._freezeSettings(),n=ku(t._databaseId);return new kD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Am(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);Cm("Data must be an object, but it was:",o,r);const l=hT(r,o);let u,d;if(i.merge)u=new Dt(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Ds(e,p,n);if(!o.contains(g))throw new z(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);mT(f,g)||f.push(g)}u=new Dt(f),d=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,d=o.fieldTransforms;return new AD(new _t(l),u,d)}class Ou extends Du{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ou}}class km extends Du{_toFieldTransform(e){return new g2(e.path,new Ta)}isEqual(e){return e instanceof km}}function uT(t,e,n,r){const s=t.createContext(1,e,n);Cm("Data must be an object, but it was:",s,r);const i=[],o=_t.empty();es(r,(u,d)=>{const f=pT(e,u,n);d=Ee(d);const p=s.childContextForFieldPath(f);if(d instanceof Ou)i.push(f);else{const g=qa(d,p);g!=null&&(i.push(f),o.set(f,g))}});const l=new Dt(i);return new lT(o,l,s.fieldTransforms)}function dT(t,e,n,r,s,i){const o=t.createContext(1,e,n),l=[Ds(e,r,n)],u=[s];if(i.length%2!=0)throw new z(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Ds(e,i[g])),u.push(i[g+1]);const d=[],f=_t.empty();for(let g=l.length-1;g>=0;--g)if(!mT(d,l[g])){const E=l[g];let y=u[g];y=Ee(y);const N=o.childContextForFieldPath(E);if(y instanceof Ou)d.push(E);else{const T=qa(y,N);T!=null&&(d.push(E),f.set(E,T))}}const p=new Dt(d);return new lT(f,p,o.fieldTransforms)}function CD(t,e,n,r=!1){return qa(n,t.createContext(r?4:3,e))}function qa(t,e){if(fT(t=Ee(t)))return Cm("Unsupported field value:",e,t),hT(t,e);if(t instanceof Du)return function(r,s){if(!cT(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=qa(l,s.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return f2(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=me.fromDate(r);return{timestampValue:Uc(s.serializer,i)}}if(r instanceof me){const i=new me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Uc(s.serializer,i)}}if(r instanceof bn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Bt)return{bytesValue:Rb(s.serializer,r._byteString)};if(r instanceof Ne){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:cm(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof on)return function(o,l){const u=o instanceof on?o.toArray():o;return{mapValue:{fields:{[ob]:{stringValue:ab},[Lc]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return im(l.serializer,f)})}}}}}}(r,s);if(Mb(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${xu(r)}`)}(t,e)}function hT(t,e){const n={};return eb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):es(t,(r,s)=>{const i=qa(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function fT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof me||t instanceof bn||t instanceof Bt||t instanceof Ne||t instanceof Du||t instanceof on||Mb(t))}function Cm(t,e,n){if(!fT(n)||!XE(n)){const r=xu(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Ds(t,e,n){if((e=Ee(e))instanceof ju)return e._internalPath;if(typeof e=="string")return pT(t,e);throw Wc("Field path arguments must be of type string or ",t,!1,void 0,n)}const RD=new RegExp("[~\\*/\\[\\]]");function pT(t,e,n){if(e.search(RD)>=0)throw Wc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ju(...e.split("."))._internalPath}catch{throw Wc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new z(V.INVALID_ARGUMENT,l+t+u)}function mT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{convertValue(e,n="none"){switch(qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return es(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Lc].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Ce(o.doubleValue));return new on(n)}convertGeoPoint(e){return new bn(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Eu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_a(e));default:return null}}convertTimestamp(e){const n=Hr(e);return new me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ce.fromString(e);oe(Vb(r),9688,{name:e});const s=new wa(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||Yn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm extends PD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function nt(){return new km("serverTimestamp")}const Wx="@firebase/firestore",qx="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Ds("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jD extends gT{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pm{}class jm extends Pm{}function Zn(t,e,...n){let r=[];e instanceof Pm&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Dm).length,l=i.filter(u=>u instanceof Lu).length;if(o>1||o>0&&l>0)throw new z(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Lu extends jm{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Lu(e,n,r)}_apply(e){const n=this._parse(e);return vT(e._query,n),new or(e.firestore,e.converter,Ef(e._query,n))}_parse(e){const n=Wa(e.firestore);return function(i,o,l,u,d,f,p){let g;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new z(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Qx(p,f);const y=[];for(const N of p)y.push(Gx(u,i,N));g={arrayValue:{values:y}}}else g=Gx(u,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Qx(p,f),g=CD(l,o,p,f==="in"||f==="not-in");return Le.create(d,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function an(t,e,n){const r=e,s=Ds("where",t);return Lu._create(s,r,n)}class Dm extends Pm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Dm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:un.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)vT(o,u),o=Ef(o,u)}(e._query,n),new or(e.firestore,e.converter,Ef(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Om extends jm{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Om(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ba(i,o)}(e._query,this._field,this._direction);return new or(e.firestore,e.converter,i2(e._query,n))}}function Ka(t,e="asc"){const n=e,r=Ds("orderBy",t);return Om._create(r,n)}class Lm extends jm{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Lm(e,n,r)}_apply(e){return new or(e.firestore,e.converter,Mc(e._query,this._limit,this._limitType))}}function Vm(t){return CP("limit",t),Lm._create("limit",t,"F")}function Gx(t,e,n){if(typeof(n=Ee(n))=="string"){if(n==="")throw new z(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mb(e)&&n.indexOf("/")!==-1)throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ce.fromString(n));if(!K.isDocumentKey(r))throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return lx(t,new K(r))}if(n instanceof Ne)return lx(t,n._key);throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xu(n)}.`)}function Qx(t,e){if(!Array.isArray(t)||t.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vT(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Mm(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class jo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Es extends gT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ds("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Es._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Es._jsonSchemaVersion="firestore/documentSnapshot/1.0",Es._jsonSchema={type:Ve("string",Es._jsonSchemaVersion),bundleSource:Ve("string","DocumentSnapshot"),bundleName:Ve("string"),bundle:Ve("string")};class Zl extends Es{data(e={}){return super.data(e)}}class bs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new jo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Zl(this._firestore,this._userDataWriter,r.key,r,new jo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Zl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new jo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Zl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new jo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:DD(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=bs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Zp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function DD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bs._jsonSchemaVersion="firestore/querySnapshot/1.0",bs._jsonSchema={type:Ve("string",bs._jsonSchemaVersion),bundleSource:Ve("string","QuerySnapshot"),bundleName:Ve("string"),bundle:Ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Wa(e)}set(e,n,r){this._verifyNotCommitted();const s=th(e,this._firestore),i=Mm(s.converter,n,r),o=Am(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,At.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=th(e,this._firestore);let o;return o=typeof(n=Ee(n))=="string"||n instanceof ju?dT(this._dataReader,"WriteBatch.update",i._key,n,r,s):uT(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,At.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=th(e,this._firestore);return this._mutations=this._mutations.concat(new om(n._key,At.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function th(t,e){if((t=Ee(t)).firestore!==e)throw new z(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t){t=Nt(t,Ne);const e=Nt(t.firestore,Xn),n=Ha(e);return xD(n,t._key).then(r=>xT(e,t,r))}function Qr(t){t=Nt(t,or);const e=Nt(t.firestore,Xn),n=Ha(e),r=new Rm(e);return yT(t._query),_D(n,t._query).then(s=>new bs(e,r,t,s))}function ec(t,e,n){t=Nt(t,Ne);const r=Nt(t.firestore,Xn),s=Mm(t.converter,e,n),i=Wa(r);return Mu(r,[Am(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,At.none())])}function ns(t,e,n,...r){t=Nt(t,Ne);const s=Nt(t.firestore,Xn),i=Wa(s);let o;return o=typeof(e=Ee(e))=="string"||e instanceof ju?dT(i,"updateDoc",t._key,e,n,r):uT(i,"updateDoc",t._key,e),Mu(s,[o.toMutation(t._key,At.exists(!0))])}function Ws(t,e){const n=Nt(t.firestore,Xn),r=An(t),s=Mm(t.converter,e),i=Wa(t.firestore);return Mu(n,[Am(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,At.exists(!1))]).then(()=>r)}function LD(t,...e){var d,f,p;t=Ee(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Kx(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Kx(e[r])){const g=e[r];e[r]=(d=g.next)==null?void 0:d.bind(g),e[r+1]=(f=g.error)==null?void 0:f.bind(g),e[r+2]=(p=g.complete)==null?void 0:p.bind(g)}let i,o,l;if(t instanceof Ne)o=Nt(t.firestore,Xn),l=bu(t._key.path),i={next:g=>{e[r]&&e[r](xT(o,t,g))},error:e[r+1],complete:e[r+2]};else{const g=Nt(t,or);o=Nt(g.firestore,Xn),l=g._query;const E=new Rm(o);i={next:y=>{e[r]&&e[r](new bs(o,E,g,y))},error:e[r+1],complete:e[r+2]},yT(t._query)}const u=Ha(o);return vD(u,l,s,i)}function Mu(t,e){const n=Ha(t);return wD(n,e)}function xT(t,e,n){const r=n.docs.get(e._key),s=new Rm(t);return new Es(t,s,e._key,r,new jo(n.hasPendingWrites,n.fromCache),e.converter)}function VD(t){return t=Nt(t,Xn),Ha(t),new OD(t,e=>Mu(t,e))}(function(e,n=!0){vP(zs),cn(new Gt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Xn(new wP(r.getProvider("auth-internal")),new TP(o,r.getProvider("app-check-internal")),zP(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),It(Wx,qx,e),It(Wx,qx,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T="firebasestorage.googleapis.com",MD="storageBucket",FD=2*60*1e3,UD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends dn{constructor(e,n,r=0){super(nh(e),`Firebase Storage: ${n} (${nh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,kn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return nh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Sn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Sn||(Sn={}));function nh(t){return"storage/"+t}function $D(){const t="An unknown error occurred, please check the error payload for server response.";return new kn(Sn.UNKNOWN,t)}function zD(){return new kn(Sn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function BD(){return new kn(Sn.CANCELED,"User canceled the upload/download.")}function HD(t){return new kn(Sn.INVALID_URL,"Invalid URL '"+t+"'.")}function WD(t){return new kn(Sn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Yx(t){return new kn(Sn.INVALID_ARGUMENT,t)}function wT(){return new kn(Sn.APP_DELETED,"The Firebase app was deleted.")}function qD(t){return new kn(Sn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=nn.makeFromUrl(e,n)}catch{return new nn(e,"")}if(r.path==="")return r;throw WD(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function d(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",E=new RegExp(`^https?://${p}/${f}/b/${s}/o${g}`,"i"),y={bucket:1,path:3},N=n===_T?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",w=new RegExp(`^https?://${N}/${s}/${T}`,"i"),I=[{regex:l,indices:u,postModify:i},{regex:E,indices:y,postModify:d},{regex:w,indices:{bucket:1,path:2},postModify:d}];for(let D=0;D<I.length;D++){const P=I[D],M=P.regex.exec(e);if(M){const b=M[P.indices.bucket];let x=M[P.indices.path];x||(x=""),r=new nn(b,x),P.postModify(r);break}}if(r==null)throw HD(e);return r}}class KD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let d=!1;function f(...T){d||(d=!0,e.apply(null,T))}function p(T){s=setTimeout(()=>{s=null,t(E,u())},T)}function g(){i&&clearTimeout(i)}function E(T,...w){if(d){g();return}if(T){g(),f.call(null,T,...w);return}if(u()||o){g(),f.call(null,T,...w);return}r<64&&(r*=2);let I;l===1?(l=2,I=0):I=(r+Math.random())*1e3,p(I)}let y=!1;function N(T){y||(y=!0,g(),!d&&(s!==null?(T||(l=2),clearTimeout(s),p(0)):T||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function QD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YD(t){return t!==void 0}function Jx(t,e,n,r){if(r<e)throw Yx(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Yx(`Invalid value for '${t}'. Expected ${n} or less.`)}function JD(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var qc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(qc||(qc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XD(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n,r,s,i,o,l,u,d,f,p,g=!0,E=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,N)=>{this.resolve_=y,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Cl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===qc.NO_ERROR,u=i.getStatus();if(!l||XD(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===qc.ABORT;r(!1,new Cl(!1,null,f));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new Cl(d,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());YD(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=$D();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?wT():BD();o(u)}else{const u=zD();o(u)}};this.canceled_?n(!1,new Cl(!1,null,!0)):this.backoffId_=GD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&QD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Cl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function e4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function t4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function n4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function r4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function s4(t,e,n,r,s,i,o=!0,l=!1){const u=JD(t.urlParams),d=t.url+u,f=Object.assign({},t.headers);return n4(f,e),e4(f,n),t4(f,i),r4(f,r),new ZD(d,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function o4(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n){this._service=e,n instanceof nn?this._location=n:this._location=nn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Kc(e,n)}get root(){const e=new nn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return o4(this._location.path)}get storage(){return this._service}get parent(){const e=i4(this._location.path);if(e===null)return null;const n=new nn(this._location.bucket,e);return new Kc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw qD(e)}}function Xx(t,e){const n=e==null?void 0:e[MD];return n==null?null:nn.makeFromBucketSpec(n,t)}function a4(t,e,n,r={}){t.host=`${e}:${n}`;const s=Us(e);s&&(Lp(`https://${t.host}/b`),Vp("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:rE(i,t.app.options.projectId))}class l4{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=_T,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=FD,this._maxUploadRetryTime=UD,this._requests=new Set,s!=null?this._bucket=nn.makeFromBucketSpec(s,this._host):this._bucket=Xx(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=nn.makeFromBucketSpec(this._url,e):this._bucket=Xx(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Jx("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Jx("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Pt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Kc(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new KD(wT());{const o=s4(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Zx="@firebase/storage",e_="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET="storage";function c4(t=Up(),e){t=Ee(t);const r=Wi(t,ET).getImmediate({identifier:e}),s=eE("storage");return s&&u4(r,...s),r}function u4(t,e,n,r={}){a4(t,e,n,r)}function d4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new l4(n,r,s,e,zs)}function h4(){cn(new Gt(ET,d4,"PUBLIC").setMultipleInstances(!0)),It(Zx,e_,""),It(Zx,e_,"esm2020")}h4();const bT="@firebase/installations",Fm="0.6.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=1e4,IT=`w:${Fm}`,ST="FIS_v2",f4="https://firebaseinstallations.googleapis.com/v1",p4=60*60*1e3,m4="installations",g4="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Os=new $s(m4,g4,y4);function NT(t){return t instanceof dn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT({projectId:t}){return`${f4}/projects/${t}/installations`}function kT(t){return{token:t.token,requestStatus:2,expiresIn:x4(t.expiresIn),creationTime:Date.now()}}async function CT(t,e){const r=(await e.json()).error;return Os.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function RT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function v4(t,{refreshToken:e}){const n=RT(t);return n.append("Authorization",_4(e)),n}async function PT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function x4(t){return Number(t.replace("s","000"))}function _4(t){return`${ST} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w4({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=AT(t),s=RT(t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={fid:n,authVersion:ST,appId:t.appId,sdkVersion:IT},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await PT(()=>fetch(r,l));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:kT(d.authToken)}}else throw await CT("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E4(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b4=/^[cdef][\w-]{21}$/,Pf="";function T4(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=I4(t);return b4.test(n)?n:Pf}catch{return Pf}}function I4(t){return E4(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=new Map;function OT(t,e){const n=Fu(t);LT(n,e),S4(n,e)}function LT(t,e){const n=DT.get(t);if(n)for(const r of n)r(e)}function S4(t,e){const n=N4();n&&n.postMessage({key:t,fid:e}),A4()}let xs=null;function N4(){return!xs&&"BroadcastChannel"in self&&(xs=new BroadcastChannel("[Firebase] FID Change"),xs.onmessage=t=>{LT(t.data.key,t.data.fid)}),xs}function A4(){DT.size===0&&xs&&(xs.close(),xs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k4="firebase-installations-database",C4=1,Ls="firebase-installations-store";let rh=null;function Um(){return rh||(rh=mu(k4,C4,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ls)}}})),rh}async function Gc(t,e){const n=Fu(t),s=(await Um()).transaction(Ls,"readwrite"),i=s.objectStore(Ls),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&OT(t,e.fid),e}async function VT(t){const e=Fu(t),r=(await Um()).transaction(Ls,"readwrite");await r.objectStore(Ls).delete(e),await r.done}async function Uu(t,e){const n=Fu(t),s=(await Um()).transaction(Ls,"readwrite"),i=s.objectStore(Ls),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&OT(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $m(t){let e;const n=await Uu(t.appConfig,r=>{const s=R4(r),i=P4(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Pf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function R4(t){const e=t||{fid:T4(),registrationStatus:0};return MT(e)}function P4(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Os.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=j4(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:D4(t)}:{installationEntry:e}}async function j4(t,e){try{const n=await w4(t,e);return Gc(t.appConfig,n)}catch(n){throw NT(n)&&n.customData.serverCode===409?await VT(t.appConfig):await Gc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function D4(t){let e=await t_(t.appConfig);for(;e.registrationStatus===1;)await jT(100),e=await t_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await $m(t);return r||n}return e}function t_(t){return Uu(t,e=>{if(!e)throw Os.create("installation-not-found");return MT(e)})}function MT(t){return O4(t)?{fid:t.fid,registrationStatus:0}:t}function O4(t){return t.registrationStatus===1&&t.registrationTime+TT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L4({appConfig:t,heartbeatServiceProvider:e},n){const r=V4(t,n),s=v4(t,n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={installation:{sdkVersion:IT,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await PT(()=>fetch(r,l));if(u.ok){const d=await u.json();return kT(d)}else throw await CT("Generate Auth Token",u)}function V4(t,{fid:e}){return`${AT(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zm(t,e=!1){let n;const r=await Uu(t.appConfig,i=>{if(!FT(i))throw Os.create("not-registered");const o=i.authToken;if(!e&&U4(o))return i;if(o.requestStatus===1)return n=M4(t,e),i;{if(!navigator.onLine)throw Os.create("app-offline");const l=z4(i);return n=F4(t,l),l}});return n?await n:r.authToken}async function M4(t,e){let n=await n_(t.appConfig);for(;n.authToken.requestStatus===1;)await jT(100),n=await n_(t.appConfig);const r=n.authToken;return r.requestStatus===0?zm(t,e):r}function n_(t){return Uu(t,e=>{if(!FT(e))throw Os.create("not-registered");const n=e.authToken;return B4(n)?{...e,authToken:{requestStatus:0}}:e})}async function F4(t,e){try{const n=await L4(t,e),r={...e,authToken:n};return await Gc(t.appConfig,r),n}catch(n){if(NT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await VT(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Gc(t.appConfig,r)}throw n}}function FT(t){return t!==void 0&&t.registrationStatus===2}function U4(t){return t.requestStatus===2&&!$4(t)}function $4(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+p4}function z4(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function B4(t){return t.requestStatus===1&&t.requestTime+TT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H4(t){const e=t,{installationEntry:n,registrationPromise:r}=await $m(e);return r?r.catch(console.error):zm(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W4(t,e=!1){const n=t;return await q4(n),(await zm(n,e)).token}async function q4(t){const{registrationPromise:e}=await $m(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K4(t){if(!t||!t.options)throw sh("App Configuration");if(!t.name)throw sh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw sh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function sh(t){return Os.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="installations",G4="installations-internal",Q4=t=>{const e=t.getProvider("app").getImmediate(),n=K4(e),r=Wi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Y4=t=>{const e=t.getProvider("app").getImmediate(),n=Wi(e,UT).getImmediate();return{getId:()=>H4(n),getToken:s=>W4(n,s)}};function J4(){cn(new Gt(UT,Q4,"PUBLIC")),cn(new Gt(G4,Y4,"PRIVATE"))}J4();It(bT,Fm);It(bT,Fm,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X4="/firebase-messaging-sw.js",Z4="/firebase-cloud-messaging-push-scope",$T="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",eO="https://fcmregistrations.googleapis.com/v1",zT="google.c.a.c_id",tO="google.c.a.c_l",nO="google.c.a.ts",rO="google.c.a.e",r_=1e4;var s_;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(s_||(s_={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Na;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Na||(Na={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function sO(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="fcm_token_details_db",iO=5,i_="fcm_token_object_Store";async function oO(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(ih))return null;let e=null;return(await mu(ih,iO,{upgrade:async(r,s,i,o)=>{if(s<2||!r.objectStoreNames.contains(i_))return;const l=o.objectStore(i_),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(s===2){const d=u;if(!d.auth||!d.p256dh||!d.endpoint)return;e={token:d.fcmToken,createTime:d.createTime??Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:jn(d.vapidKey)}}}else if(s===3){const d=u;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:jn(d.auth),p256dh:jn(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:jn(d.vapidKey)}}}else if(s===4){const d=u;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:jn(d.auth),p256dh:jn(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:jn(d.vapidKey)}}}}}})).close(),await $d(ih),await $d("fcm_vapid_details_db"),await $d("undefined"),aO(e)?e:null}function aO(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO="firebase-messaging-database",cO=1,Aa="firebase-messaging-store";let oh=null;function BT(){return oh||(oh=mu(lO,cO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Aa)}}})),oh}async function uO(t){const e=HT(t),r=await(await BT()).transaction(Aa).objectStore(Aa).get(e);if(r)return r;{const s=await oO(t.appConfig.senderId);if(s)return await Bm(t,s),s}}async function Bm(t,e){const n=HT(t),s=(await BT()).transaction(Aa,"readwrite");return await s.objectStore(Aa).put(e,n),await s.done,e}function HT({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Lt=new $s("messaging","Messaging",dO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hO(t,e){const n=await Wm(t),r=WT(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(Hm(t.appConfig),s)).json()}catch(o){throw Lt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Lt.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw Lt.create("token-subscribe-no-token");return i.token}async function fO(t,e){const n=await Wm(t),r=WT(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${Hm(t.appConfig)}/${e.token}`,s)).json()}catch(o){throw Lt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Lt.create("token-update-failed",{errorInfo:o})}if(!i.token)throw Lt.create("token-update-no-token");return i.token}async function pO(t,e){const r={method:"DELETE",headers:await Wm(t)};try{const i=await(await fetch(`${Hm(t.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw Lt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw Lt.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Hm({projectId:t}){return`${eO}/projects/${t}/registrations`}async function Wm({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function WT({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==$T&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO=7*24*60*60*1e3;async function gO(t){const e=await vO(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:jn(e.getKey("auth")),p256dh:jn(e.getKey("p256dh"))},r=await uO(t.firebaseDependencies);if(r){if(xO(r.subscriptionOptions,n))return Date.now()>=r.createTime+mO?yO(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await pO(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return o_(t.firebaseDependencies,n)}else return o_(t.firebaseDependencies,n)}async function yO(t,e){try{const n=await fO(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await Bm(t.firebaseDependencies,r),n}catch(n){throw n}}async function o_(t,e){const r={token:await hO(t,e),createTime:Date.now(),subscriptionOptions:e};return await Bm(t,r),r.token}async function vO(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:sO(e)})}function xO(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return _O(e,t),wO(e,t),EO(e,t),e}function _O(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const i=e.notification.icon;i&&(t.notification.icon=i)}function wO(t,e){e.data&&(t.data=e.data)}function EO(t,e){var s,i,o,l;if(!e.fcmOptions&&!((s=e.notification)!=null&&s.click_action))return;t.fcmOptions={};const n=((i=e.fcmOptions)==null?void 0:i.link)??((o=e.notification)==null?void 0:o.click_action);n&&(t.fcmOptions.link=n);const r=(l=e.fcmOptions)==null?void 0:l.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(t){return typeof t=="object"&&!!t&&zT in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(t){if(!t||!t.options)throw ah("App Configuration Object");if(!t.name)throw ah("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw ah(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function ah(t){return Lt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=TO(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SO(t){try{t.swRegistration=await navigator.serviceWorker.register(X4,{scope:Z4}),t.swRegistration.update().catch(()=>{}),await NO(t.swRegistration)}catch(e){throw Lt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function NO(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${r_} ms`)),r_),s=t.installing||t.waiting;t.active?(clearTimeout(r),e()):s?s.onstatechange=i=>{var o;((o=i.target)==null?void 0:o.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AO(t,e){if(!e&&!t.swRegistration&&await SO(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Lt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kO(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=$T)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CO(t,e){if(!navigator)throw Lt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Lt.create("permission-blocked");return await kO(t,e==null?void 0:e.vapidKey),await AO(t,e==null?void 0:e.serviceWorkerRegistration),gO(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RO(t,e,n){const r=PO(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[zT],message_name:n[tO],message_time:n[nO],message_device_time:Math.floor(Date.now()/1e3)})}function PO(t){switch(t){case Na.NOTIFICATION_CLICKED:return"notification_open";case Na.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jO(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Na.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(a_(n)):t.onMessageHandler.next(a_(n)));const r=n.data;bO(r)&&r[rO]==="1"&&await RO(t,n.messageType,r)}const l_="@firebase/messaging",c_="0.12.24";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO=t=>{const e=new IO(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>jO(e,n)),e},OO=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>CO(e,r)}};function LO(){cn(new Gt("messaging",DO,"PUBLIC")),cn(new Gt("messaging-internal",OO,"PRIVATE")),It(l_,c_),It(l_,c_,"esm2020")}LO();const VO={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},qm=Tv().length===0?oE(VO):Tv()[0],Ae=pP(qm),de=ID(qm);c4(qm);const $u=t=>An(de,"users",t),Km=t=>An(de,"users",t,"private","settings"),Gm=t=>An(de,"users",t,"private","rewards");async function qT(t,{name:e="",phone:n="",email:r="",avatar:s="🦊"}={}){const i=[ec($u(t),{name:e,phone:n,email:r,avatar:s,createdAt:nt(),lastLogin:nt()}),ec(Km(t),{sosAlertsEnabled:!0,padUpdatesEnabled:!0,cycleRemindersEnabled:!1,shareLocationEnabled:!0,emergencyContactName:"",emergencyContactPhone:"",language:"English",fcmToken:""}),ec(Gm(t),{totalPoints:0,currentLevel:1,levelName:"Navigator",xpCurrent:0,xpNextLevel:100,consecutiveLogDays:0,lastLogDate:null})];await Promise.all(i)}async function Qm(t){const e=await Vu($u(t));return e.exists()?{id:e.id,...e.data()}:null}async function KT(t){const e=await Vu(Km(t));return e.exists()?e.data():null}async function Ym(t){const e=await Vu(Gm(t));return e.exists()?e.data():null}async function MO(t){const[e,n,r]=await Promise.all([Qm(t),KT(t),Ym(t)]);return{...e,settings:n,rewards:r}}async function FO(t,e){await ns($u(t),{...e,updatedAt:nt()})}async function UO(t,e){await ns(Km(t),e)}async function $O(t){const[e,n]=await Promise.all([Qr(Zn(tt(de,"locations"),an("addedBy","==",t))),Qr(Zn(tt(de,"reviews"),an("userId","==",t)))]),r=await Ym(t);return{locationsAdded:e.size,reviewsWritten:n.size,sosesHelped:0,pointsEarned:(r==null?void 0:r.totalPoints)??0}}const lh=[0,100,250,500,900,1400,2e3],zO=["Navigator","Explorer","Guide","Guardian","Champion","Protector","Legend"];async function Jm(t,e,n,r=null){const s=await Ym(t);if(!s)return;const i=(s.totalPoints??0)+e,o=(s.xpCurrent??0)+e;let l=s.currentLevel??1;for(;l<lh.length&&o>=lh[l];)l++;const u=l>(s.currentLevel??1);return await ns(Gm(t),{totalPoints:i,xpCurrent:o,currentLevel:l,levelName:zO[l-1]??"Legend",xpNextLevel:lh[l]??o}),await ec(An(tt(de,"users",t,"pointTransactions")),{points:e,reason:n,referenceId:r,timestamp:nt()}),{newTotal:i,leveledUp:u,newLevel:l}}async function BO(t){await ns($u(t),{deleted:!0,deletedAt:nt(),name:"Deleted User",phone:"",email:""})}let Qc=null;async function HO(t,e){const n=new pR(Ae,e,{size:"invisible"});return Qc=await yR(Ae,t,n),Qc}async function WO(t){if(!Qc)throw new Error("No OTP sent yet. Call sendPhoneOTP first.");const n=(await Qc.confirm(t)).user,s=!await Qm(n.uid);return s&&await qT(n.uid,{phone:n.phoneNumber??"",name:"",avatar:"🦊"}),{isNewUser:s,user:n}}async function qO(){const t=new On,n=(await bR(Ae,t)).user,s=!await Qm(n.uid);return s&&await qT(n.uid,{name:n.displayName??"",email:n.email??"",avatar:"🦊"}),{isNewUser:s,user:n}}async function u_(){await KC(Ae)}async function KO(t){Ae.currentUser&&await BC(Ae.currentUser,{displayName:t})}function GO(t){return qC(Ae,t)}const d_=t=>{let e;const n=new Set,r=(d,f)=>{const p=typeof d=="function"?d(e):d;if(!Object.is(p,e)){const g=e;e=f??(typeof p!="object"||p===null)?p:Object.assign({},e,p),n.forEach(E=>E(e,g))}},s=()=>e,l={setState:r,getState:s,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d))},u=e=t(r,s,l);return l},QO=t=>t?d_(t):d_,YO=t=>t;function JO(t,e=YO){const n=ti.useSyncExternalStore(t.subscribe,ti.useCallback(()=>e(t.getState()),[t,e]),ti.useCallback(()=>e(t.getInitialState()),[t,e]));return ti.useDebugValue(n),n}const h_=t=>{const e=QO(t),n=r=>JO(e,r);return Object.assign(n,e),n},XO=t=>t?h_(t):h_,kt=XO(t=>({firebaseUser:null,isAuthenticated:!1,isLoading:!0,setAuth:e=>t({firebaseUser:e,isAuthenticated:!!e,isLoading:!1}),clearAuth:()=>t({firebaseUser:null,isAuthenticated:!1,isLoading:!1,user:{name:"",phone:"",foxPoints:0,language:"English",avatar:"🦊"}}),setLoading:e=>t({isLoading:e}),user:{name:"",phone:"",foxPoints:0,language:"English",avatar:"🦊",level:1,levelName:"Navigator",xp:0,xpNext:100},setUser:e=>t(n=>({user:{...n.user,...e}})),addFoxPoints:e=>t(n=>({user:{...n.user,foxPoints:n.user.foxPoints+e}})),notificationCount:0,setNotificationCount:e=>t({notificationCount:e}),activeSOS:null,triggerSOS:e=>t({activeSOS:{location:e,time:new Date().toISOString()}}),clearSOS:()=>t({activeSOS:null}),activeFilters:[],toggleFilter:e=>t(n=>({activeFilters:n.activeFilters.includes(e)?n.activeFilters.filter(r=>r!==e):[...n.activeFilters,e]}))})),f_={primary:{bg:"bg-primary text-on-primary",shadow:"0 4px 0 0 #d33c5e"},green:{bg:"bg-secondary text-on-secondary",shadow:"0 4px 0 0 #3ea500"},blue:{bg:"bg-tertiary text-on-tertiary",shadow:"0 4px 0 0 #158bb2"},outline:{bg:"bg-white text-on-surface border-2 border-outline-variant",shadow:"0 4px 0 0 #e2e8f0"},surface:{bg:"bg-surface-container text-on-surface",shadow:"0 4px 0 0 #d1d5db"}},p_={sm:"px-5 py-3 text-[14px]",md:"px-6 py-4 text-[16px]",lg:"px-8 py-5 text-[18px]"};function Vs({color:t="primary",size:e="md",full:n=!1,onClick:r,disabled:s=!1,children:i,className:o=""}){const{bg:l,shadow:u}=f_[t]??f_.primary,d=p_[e]??p_.md;return c.jsxs("button",{onClick:r,disabled:s,style:{boxShadow:s?"none":u,transition:"all 0.1s ease"},onMouseDown:f=>{s||(f.currentTarget.style.transform="translateY(4px)",f.currentTarget.style.boxShadow="none")},onMouseUp:f=>{f.currentTarget.style.transform="",f.currentTarget.style.boxShadow=s?"none":u},onTouchStart:f=>{s||(f.currentTarget.style.transform="translateY(4px)",f.currentTarget.style.boxShadow="none")},onTouchEnd:f=>{f.currentTarget.style.transform="",f.currentTarget.style.boxShadow=s?"none":u},className:["relative overflow-hidden rounded-full font-extrabold flex items-center justify-center gap-2 select-none",l,d,n?"w-full":"",s?"opacity-50 cursor-not-allowed":"cursor-pointer",o].join(" "),children:[c.jsx("span",{className:"absolute top-0 left-0 w-full pointer-events-none",style:{height:"40%",background:"linear-gradient(180deg,rgba(255,255,255,0.3) 0%,rgba(255,255,255,0) 100%)",borderRadius:"inherit"}}),c.jsx("span",{className:"relative z-10 flex items-center gap-2",children:i})]})}const m_=[{bg:"bg-primary-fixed",accent:"text-primary",badge:{icon:"📍",text:"Nearby Now",extra:"✨ Hygiene First"},title:c.jsxs(c.Fragment,{children:["Never worry about ",c.jsx("span",{className:"text-primary",children:"periods"})," or ",c.jsx("span",{className:"text-tertiary",children:"washrooms"})," again"]}),body:"Your companion for safety and hygiene, anywhere in the city. Find vetted spaces in seconds.",progress:"1/4",pct:25},{bg:"bg-tertiary-fixed",accent:"text-tertiary",badge:{icon:"💧",text:"Pads Available",extra:"🆓 Free Dispenser"},title:c.jsxs(c.Fragment,{children:["Find ",c.jsx("span",{className:"text-tertiary",children:"pad dispensers"})," and safe ",c.jsx("span",{className:"text-primary",children:"washrooms"})," near you"]}),body:"Community-verified locations updated in real time. Filter by free pads, cleanliness, and 24×7 access.",progress:"2/4",pct:50},{bg:"bg-secondary-fixed",accent:"text-secondary",badge:{icon:"⚡",text:"15 min delivery",extra:"📦 Discreet pack"},title:c.jsxs(c.Fragment,{children:["Emergency pads delivered in ",c.jsx("span",{className:"text-secondary",children:"under 15 minutes"})]}),body:"Order through Blinkit, Zepto or Instamart directly from the app. Your cycle data helps us predict your need.",progress:"3/4",pct:75},{bg:"bg-primary-fixed",accent:"text-primary",badge:{icon:"🛡️",text:"SOS in seconds",extra:"🏆 Earn rewards"},title:c.jsxs(c.Fragment,{children:["Community safety & ",c.jsx("span",{className:"text-primary",children:"gamified rewards"})," for every contribution"]}),body:"Broadcast an SOS to nearby women, earn LooPoints for adding locations, and unlock real-world vouchers.",progress:"4/4",pct:100}];function ZO(){const t=Te(),[e,n]=R.useState(0),r=m_[e],s=e===m_.length-1;return c.jsxs("div",{className:`min-h-dvh flex flex-col font-body text-on-surface ${r.bg} transition-colors duration-500`,children:[c.jsxs("header",{className:"flex justify-between items-center px-6 py-6 w-full max-w-md mx-auto",children:[c.jsx("span",{className:"font-headline font-extrabold text-[28px] tracking-tight text-primary",children:"NavHer"}),c.jsx("button",{onClick:()=>t("/auth/login"),className:"text-on-surface-variant font-bold text-[13px] uppercase tracking-widest hover:text-primary transition-all",children:"Skip"})]}),c.jsx("div",{className:"px-6 w-full max-w-md mx-auto mb-8",children:c.jsx("div",{className:"ep-progress-track",children:c.jsx("div",{className:"ep-progress-fill transition-all duration-500",style:{width:`${r.pct}%`}})})}),c.jsxs("main",{className:"flex-grow flex flex-col items-center px-8 w-full max-w-md mx-auto text-center",children:[c.jsxs("div",{className:"relative w-full aspect-square mb-10",children:[c.jsx("div",{className:"absolute inset-0 bg-white/60 backdrop-blur-sm rounded-[3rem] rotate-3"}),c.jsx("div",{className:"relative z-10 w-full h-full flex items-center justify-center",children:c.jsx("div",{className:"text-9xl select-none",children:e===0?"🗺️":e===1?"💧":e===2?"⚡":"🏆"})}),c.jsx("div",{className:"absolute top-6 -left-3 bg-primary text-white px-4 py-2 rounded-full shadow-sm font-bold text-sm -rotate-12 border-2 border-white text-[12px]",children:r.badge.extra}),c.jsxs("div",{className:"absolute bottom-10 -right-2 bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full shadow-sm font-bold text-sm rotate-6 border-2 border-white text-[12px]",children:[r.badge.icon," ",r.badge.text]})]}),c.jsxs("div",{className:"space-y-4 mb-12",children:[c.jsx("h1",{className:"font-headline font-extrabold text-[26px] leading-[1.1] text-on-surface tracking-tight",children:r.title}),c.jsx("p",{className:"text-on-surface-variant text-[15px] leading-relaxed font-medium px-4",children:r.body})]}),c.jsxs("div",{className:"w-full space-y-4",children:[c.jsxs(Vs,{color:"primary",size:"lg",full:!0,onClick:()=>s?t("/auth/login"):n(e+1),children:[s?"Get Started":"Next",c.jsx("span",{className:"material-symbols-outlined",children:s?"check_circle":"arrow_forward"})]}),c.jsxs("div",{className:"flex items-center justify-center gap-3",children:[c.jsxs("div",{className:"flex -space-x-2",children:[["🌸","🌺","🦋"].map((i,o)=>c.jsx("div",{className:"w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center text-sm shadow-card",children:i},o)),c.jsx("div",{className:"w-8 h-8 rounded-full bg-tertiary-fixed border-2 border-white flex items-center justify-center text-[10px] font-bold shadow-card",children:"+2k"})]}),c.jsx("p",{className:"text-[12px] font-bold text-on-surface-variant uppercase tracking-widest",children:"Joined the community"})]})]})]}),c.jsx("footer",{className:"h-12"})]})}let eL={data:""},tL=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||eL},nL=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,rL=/\/\*[^]*?\*\/|  +/g,g_=/\n+/g,br=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?br(o,i):i+"{"+br(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=br(o,e?e.replace(/([^,])+/g,l=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=br.p?br.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},Rn={},GT=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+GT(t[n]);return e}return t},sL=(t,e,n,r,s)=>{let i=GT(t),o=Rn[i]||(Rn[i]=(u=>{let d=0,f=11;for(;d<u.length;)f=101*f+u.charCodeAt(d++)>>>0;return"go"+f})(i));if(!Rn[o]){let u=i!==t?t:(d=>{let f,p,g=[{}];for(;f=nL.exec(d.replace(rL,""));)f[4]?g.shift():f[3]?(p=f[3].replace(g_," ").trim(),g.unshift(g[0][p]=g[0][p]||{})):g[0][f[1]]=f[2].replace(g_," ").trim();return g[0]})(t);Rn[o]=br(s?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&Rn.g?Rn.g:null;return n&&(Rn.g=Rn[o]),((u,d,f,p)=>{p?d.data=d.data.replace(p,u):d.data.indexOf(u)===-1&&(d.data=f?u+d.data:d.data+u)})(Rn[o],e,r,l),o},iL=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":br(l,""):l===!1?"":l}return r+s+(o??"")},"");function zu(t){let e=this||{},n=t.call?t(e.p):t;return sL(n.unshift?n.raw?iL(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,tL(e.target),e.g,e.o,e.k)}let QT,jf,Df;zu.bind({g:1});let er=zu.bind({k:1});function oL(t,e,n,r){br.p=e,QT=t,jf=n,Df=r}function rs(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let l=Object.assign({},i),u=l.className||s.className;n.p=Object.assign({theme:jf&&jf()},l),n.o=/ *go\d+/.test(u),l.className=zu.apply(n,r)+(u?" "+u:"");let d=t;return t[0]&&(d=l.as||t,delete l.as),Df&&d[0]&&Df(l),QT(d,l)}return s}}var aL=t=>typeof t=="function",Yc=(t,e)=>aL(t)?t(e):t,lL=(()=>{let t=0;return()=>(++t).toString()})(),YT=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),cL=20,Xm="default",JT=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return JT(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},tc=[],XT={toasts:[],pausedAt:void 0,settings:{toastLimit:cL}},vn={},ZT=(t,e=Xm)=>{vn[e]=JT(vn[e]||XT,t),tc.forEach(([n,r])=>{n===e&&r(vn[e])})},e1=t=>Object.keys(vn).forEach(e=>ZT(t,e)),uL=t=>Object.keys(vn).find(e=>vn[e].toasts.some(n=>n.id===t)),Bu=(t=Xm)=>e=>{ZT(e,t)},dL={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},hL=(t={},e=Xm)=>{let[n,r]=R.useState(vn[e]||XT),s=R.useRef(vn[e]);R.useEffect(()=>(s.current!==vn[e]&&r(vn[e]),tc.push([e,r]),()=>{let o=tc.findIndex(([l])=>l===e);o>-1&&tc.splice(o,1)}),[e]);let i=n.toasts.map(o=>{var l,u,d;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((l=t[o.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((u=t[o.type])==null?void 0:u.duration)||(t==null?void 0:t.duration)||dL[o.type],style:{...t.style,...(d=t[o.type])==null?void 0:d.style,...o.style}}});return{...n,toasts:i}},fL=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||lL()}),Ga=t=>(e,n)=>{let r=fL(e,t,n);return Bu(r.toasterId||uL(r.id))({type:2,toast:r}),r.id},Ue=(t,e)=>Ga("blank")(t,e);Ue.error=Ga("error");Ue.success=Ga("success");Ue.loading=Ga("loading");Ue.custom=Ga("custom");Ue.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Bu(e)(n):e1(n)};Ue.dismissAll=t=>Ue.dismiss(void 0,t);Ue.remove=(t,e)=>{let n={type:4,toastId:t};e?Bu(e)(n):e1(n)};Ue.removeAll=t=>Ue.remove(void 0,t);Ue.promise=(t,e,n)=>{let r=Ue.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let i=e.success?Yc(e.success,s):void 0;return i?Ue.success(i,{id:r,...n,...n==null?void 0:n.success}):Ue.dismiss(r),s}).catch(s=>{let i=e.error?Yc(e.error,s):void 0;i?Ue.error(i,{id:r,...n,...n==null?void 0:n.error}):Ue.dismiss(r)}),t};var pL=1e3,mL=(t,e="default")=>{let{toasts:n,pausedAt:r}=hL(t,e),s=R.useRef(new Map).current,i=R.useCallback((p,g=pL)=>{if(s.has(p))return;let E=setTimeout(()=>{s.delete(p),o({type:4,toastId:p})},g);s.set(p,E)},[]);R.useEffect(()=>{if(r)return;let p=Date.now(),g=n.map(E=>{if(E.duration===1/0)return;let y=(E.duration||0)+E.pauseDuration-(p-E.createdAt);if(y<0){E.visible&&Ue.dismiss(E.id);return}return setTimeout(()=>Ue.dismiss(E.id,e),y)});return()=>{g.forEach(E=>E&&clearTimeout(E))}},[n,r,e]);let o=R.useCallback(Bu(e),[e]),l=R.useCallback(()=>{o({type:5,time:Date.now()})},[o]),u=R.useCallback((p,g)=>{o({type:1,toast:{id:p,height:g}})},[o]),d=R.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),f=R.useCallback((p,g)=>{let{reverseOrder:E=!1,gutter:y=8,defaultPosition:N}=g||{},T=n.filter(I=>(I.position||N)===(p.position||N)&&I.height),w=T.findIndex(I=>I.id===p.id),_=T.filter((I,D)=>D<w&&I.visible).length;return T.filter(I=>I.visible).slice(...E?[_+1]:[0,_]).reduce((I,D)=>I+(D.height||0)+y,0)},[n]);return R.useEffect(()=>{n.forEach(p=>{if(p.dismissed)i(p.id,p.removeDelay);else{let g=s.get(p.id);g&&(clearTimeout(g),s.delete(p.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:u,startPause:l,endPause:d,calculateOffset:f}}},gL=er`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,yL=er`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,vL=er`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,xL=rs("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${gL} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${yL} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${vL} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,_L=er`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,wL=rs("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${_L} 1s linear infinite;
`,EL=er`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,bL=er`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,TL=rs("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${EL} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${bL} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,IL=rs("div")`
  position: absolute;
`,SL=rs("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,NL=er`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,AL=rs("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${NL} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,kL=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?R.createElement(AL,null,e):e:n==="blank"?null:R.createElement(SL,null,R.createElement(wL,{...r}),n!=="loading"&&R.createElement(IL,null,n==="error"?R.createElement(xL,{...r}):R.createElement(TL,{...r})))},CL=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,RL=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,PL="0%{opacity:0;} 100%{opacity:1;}",jL="0%{opacity:1;} 100%{opacity:0;}",DL=rs("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,OL=rs("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,LL=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=YT()?[PL,jL]:[CL(n),RL(n)];return{animation:e?`${er(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${er(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},VL=R.memo(({toast:t,position:e,style:n,children:r})=>{let s=t.height?LL(t.position||e||"top-center",t.visible):{opacity:0},i=R.createElement(kL,{toast:t}),o=R.createElement(OL,{...t.ariaProps},Yc(t.message,t));return R.createElement(DL,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):R.createElement(R.Fragment,null,i,o))});oL(R.createElement);var ML=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=R.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return R.createElement("div",{ref:i,className:e,style:n},s)},FL=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:YT()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},UL=zu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Rl=16,$L=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,toasterId:i,containerStyle:o,containerClassName:l})=>{let{toasts:u,handlers:d}=mL(n,i);return R.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:Rl,left:Rl,right:Rl,bottom:Rl,pointerEvents:"none",...o},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},u.map(f=>{let p=f.position||e,g=d.calculateOffset(f,{reverseOrder:t,gutter:r,defaultPosition:e}),E=FL(p,g);return R.createElement(ML,{id:f.id,key:f.id,onHeightUpdate:d.updateHeight,className:f.visible?UL:"",style:E},f.type==="custom"?Yc(f.message,f):s?s(f):R.createElement(VL,{toast:f,position:p}))}))},tr=Ue;function zL(){const t=Te(),[e,n]=R.useState(""),[r,s]=R.useState(!1),i=R.useRef(null),o=e.replace(/\D/g,"").length===10,l=async()=>{if(!(!o||r)){s(!0);try{const d=`+91${e.replace(/\D/g,"")}`;await HO(d,i.current),t("/auth/verify",{state:{phone:d}})}catch(d){console.error("OTP error:",d),tr.error("Failed to send OTP. Please try again.")}finally{s(!1)}}},u=async()=>{s(!0);try{const{isNewUser:d}=await qO();t(d?"/auth/setup":"/app/map")}catch(d){console.error("Google sign-in error:",d),tr.error("Google sign-in failed. Please try again.")}finally{s(!1)}};return c.jsxs("div",{className:"min-h-dvh flex flex-col items-center justify-center p-6 bg-surface-container-low font-body text-on-surface relative overflow-hidden",children:[c.jsx("div",{className:"fixed top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10"}),c.jsx("div",{className:"fixed bottom-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"}),c.jsx("div",{className:"fixed top-1/2 -left-12 w-48 h-48 border-4 border-dashed border-tertiary/20 rounded-full -z-10 opacity-50"}),c.jsx("div",{ref:i,id:"recaptcha-container"}),c.jsxs("div",{className:"w-full max-w-md bg-white rounded-[2rem] overflow-hidden shadow-card",children:[c.jsxs("header",{className:"flex items-center justify-between px-6 py-4 w-full",children:[c.jsx("button",{onClick:()=>t(-1),className:"w-10 h-10 flex items-center justify-center rounded-full hover:bg-rose-50 transition-colors active:translate-y-0.5",children:c.jsx("span",{className:"material-symbols-outlined text-primary",children:"arrow_back"})}),c.jsx("h1",{className:"font-headline font-extrabold text-[28px] tracking-tight text-primary",children:"NavHer"}),c.jsx("div",{className:"w-10"})]}),c.jsxs("main",{className:"px-8 pt-6 pb-12 flex flex-col items-center",children:[c.jsxs("div",{className:"relative w-36 h-36 mb-8",children:[c.jsx("div",{className:"absolute inset-0 bg-primary-fixed rounded-full rotate-3 scale-110"}),c.jsx("div",{className:"relative z-10 w-full h-full flex items-center justify-center text-7xl select-none",children:"🦊"})]}),c.jsxs("div",{className:"text-center mb-10",children:[c.jsx("h2",{className:"text-4xl font-extrabold text-on-surface tracking-tight leading-[1.1] mb-2",children:"Welcome Back!"}),c.jsx("p",{className:"text-on-surface-variant font-medium text-[15px]",children:"Looie is happy to see you again."})]}),c.jsxs("div",{className:"w-full space-y-6",children:[c.jsxs("div",{className:"space-y-2",children:[c.jsx("label",{className:"section-label px-1",children:"Phone Number"}),c.jsxs("div",{className:`flex items-center bg-surface-container rounded-full border-2 transition-all p-2 ${o?"border-secondary":"border-outline-variant focus-within:border-primary"}`,children:[c.jsxs("div",{className:"flex items-center px-4 py-2 bg-white rounded-full font-bold text-primary shadow-card text-sm",children:[c.jsx("span",{children:"+91"}),c.jsx("span",{className:"material-symbols-outlined text-[18px] ml-1",children:"expand_more"})]}),c.jsx("input",{type:"tel",value:e,onChange:d=>n(d.target.value),placeholder:"98765 43210",maxLength:12,className:"flex-1 bg-transparent border-none focus:ring-0 text-xl font-bold px-4 py-2 placeholder:text-outline outline-none"}),o&&c.jsx("span",{className:"material-symbols-outlined fill text-secondary text-[22px] mr-3",style:{fontVariationSettings:"'FILL' 1"},children:"check_circle"})]})]}),c.jsxs(Vs,{color:o&&!r?"primary":"surface",size:"lg",full:!0,disabled:!o||r,onClick:l,children:[r?"Sending...":"Get OTP",!r&&c.jsx("span",{className:"material-symbols-outlined",children:"arrow_forward"})]}),c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("div",{className:"h-[2px] flex-1 bg-outline-variant"}),c.jsx("span",{className:"text-xs font-bold text-outline tracking-widest uppercase",children:"Or connect with"}),c.jsx("div",{className:"h-[2px] flex-1 bg-outline-variant"})]}),c.jsxs("button",{onClick:u,disabled:r,className:"w-full bg-white border-2 border-outline-variant rounded-full py-4 flex items-center justify-center gap-2 font-bold text-on-surface active:translate-y-1 transition-all disabled:opacity-50",style:{boxShadow:"0 4px 0 0 #e2e8f0"},children:[c.jsx("span",{children:"🌐"})," Continue with Google"]})]}),c.jsxs("p",{className:"mt-10 text-center text-on-surface-variant text-[15px] font-medium",children:["New to NavHer?"," ",c.jsx("a",{className:"text-primary font-bold hover:underline",href:"#",children:"Create account"})]})]})]})]})}function BL(){var E;const t=Te(),n=((E=sr().state)==null?void 0:E.phone)??"",[r,s]=R.useState(["","","","","",""]),i=[R.useRef(),R.useRef(),R.useRef(),R.useRef(),R.useRef(),R.useRef()],[o,l]=R.useState(!1),u=kt(y=>y.setAuth),d=r.every(y=>y!==""),f=(y,N)=>{var T;y.key==="Backspace"&&!r[N]&&N>0&&((T=i[N-1].current)==null||T.focus())},p=(y,N)=>{var _;const T=y.replace(/\D/,"").slice(0,1),w=[...r];w[N]=T,s(w),T&&N<5&&((_=i[N+1].current)==null||_.focus())};R.useEffect(()=>{var y;(y=i[0].current)==null||y.focus()},[]);const g=async()=>{var y;if(!(!d||o)){l(!0);try{const N=r.join(""),{isNewUser:T,user:w}=await WO(N);u(w),t(T?"/auth/setup":"/app/map")}catch(N){console.error("OTP verify error:",N),tr.error("Invalid OTP. Please check and try again."),s(["","","","","",""]),(y=i[0].current)==null||y.focus()}finally{l(!1)}}};return c.jsxs("div",{className:"min-h-dvh flex flex-col items-center justify-center p-6 bg-surface-container-low font-body text-on-surface relative overflow-hidden",children:[c.jsx("div",{className:"fixed top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10"}),c.jsx("div",{className:"fixed bottom-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"}),c.jsxs("div",{className:"w-full max-w-md bg-white rounded-[2rem] overflow-hidden shadow-card",children:[c.jsxs("header",{className:"flex items-center justify-between px-6 py-4",children:[c.jsx("button",{onClick:()=>t(-1),className:"w-10 h-10 flex items-center justify-center rounded-full hover:bg-rose-50 transition-colors",children:c.jsx("span",{className:"material-symbols-outlined text-primary",children:"arrow_back"})}),c.jsx("h1",{className:"font-headline font-extrabold text-[28px] tracking-tight text-primary",children:"NavHer"}),c.jsx("div",{className:"w-10"})]}),c.jsxs("main",{className:"px-8 pt-6 pb-12 flex flex-col items-center",children:[c.jsxs("div",{className:"relative w-36 h-36 mb-8",children:[c.jsx("div",{className:"absolute inset-0 bg-secondary-fixed rounded-full rotate-3 scale-110"}),c.jsx("div",{className:"relative z-10 w-full h-full flex items-center justify-center text-7xl select-none",children:"🔐"})]}),c.jsxs("div",{className:"text-center mb-10",children:[c.jsx("h2",{className:"text-4xl font-extrabold text-on-surface tracking-tight leading-[1.1] mb-2",children:"Check Your Phone"}),c.jsxs("p",{className:"text-on-surface-variant font-medium text-[15px]",children:["Enter the 6-digit OTP sent to ",c.jsx("span",{className:"font-bold text-primary",children:n})]})]}),c.jsx("div",{className:"flex gap-3 mb-8",children:r.map((y,N)=>c.jsx("input",{ref:i[N],type:"tel",maxLength:1,value:y,onChange:T=>p(T.target.value,N),onKeyDown:T=>f(T,N),className:`w-12 h-14 text-center text-2xl font-extrabold rounded-[1.25rem] border-2 outline-none transition-all ${y?"border-primary bg-primary-fixed text-primary":"border-outline-variant bg-surface-container"} focus:border-primary focus:ring-0`},N))}),c.jsxs("div",{className:"w-full space-y-4",children:[c.jsx(Vs,{color:d&&!o?"green":"surface",size:"lg",full:!0,disabled:!d||o,onClick:g,children:o?"Verifying...":d?"✓ Verify & Continue":"Enter OTP to continue"}),c.jsxs("button",{className:"w-full text-center text-on-surface-variant text-[15px] font-semibold py-3 hover:text-primary transition-colors",children:["Didn't receive it? ",c.jsx("span",{className:"text-primary font-bold",children:"Resend OTP"})]})]})]})]})]})}const HL=["🦊","🌸","🌺","🦋","🌻","🐝","🌈","🦄","🐬","💎","🌙","⭐"];function WL(){const t=Te(),[e,n]=R.useState(0),[r,s]=R.useState(""),[i,o]=R.useState("🦊"),[l,u]=R.useState(!1),d=kt(p=>p.setUser),f=async()=>{var p;u(!0);try{const g=(p=Ae.currentUser)==null?void 0:p.uid;g&&(await FO(g,{name:r,avatar:i}),await KO(r)),d({name:r,avatar:i}),t("/app/map")}catch(g){console.error("Setup error:",g)}finally{u(!1)}};return c.jsxs("div",{className:"min-h-dvh flex flex-col items-center justify-center p-6 bg-surface-container-low font-body text-on-surface relative overflow-hidden",children:[c.jsx("div",{className:"fixed top-10 right-10 w-40 h-40 bg-tertiary/10 rounded-full blur-3xl -z-10"}),c.jsx("div",{className:"fixed bottom-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"}),c.jsxs("div",{className:"w-full max-w-md bg-white rounded-[2rem] overflow-hidden shadow-card",children:[c.jsxs("header",{className:"flex items-center justify-between px-6 py-4",children:[e>0?c.jsx("button",{onClick:()=>n(0),className:"w-10 h-10 flex items-center justify-center rounded-full hover:bg-rose-50",children:c.jsx("span",{className:"material-symbols-outlined text-primary",children:"arrow_back"})}):c.jsx("div",{className:"w-10"}),c.jsx("h1",{className:"font-headline font-extrabold text-[26px] tracking-tight text-primary",children:"NavHer"}),c.jsx("div",{className:"w-10"})]}),c.jsxs("div",{className:"px-6 pb-2",children:[c.jsx("div",{className:"ep-progress-track",children:c.jsx("div",{className:"ep-progress-fill transition-all duration-500",style:{width:e===0?"50%":"100%"}})}),c.jsxs("p",{className:"text-xs text-on-surface-variant font-bold text-right mt-1",children:[e+1,"/2"]})]}),c.jsx("main",{className:"px-8 pt-6 pb-12",children:e===0?c.jsxs(c.Fragment,{children:[c.jsx("h2",{className:"text-3xl font-extrabold text-on-surface mb-2",children:"What's your name?"}),c.jsx("p",{className:"text-on-surface-variant text-[15px] mb-8",children:"So Looie knows what to call you! 🦊"}),c.jsx("label",{className:"section-label px-1 mb-2 block",children:"Your Name"}),c.jsxs("div",{className:`flex items-center bg-surface-container rounded-xl border-2 transition-all p-4 mb-6 ${r?"border-primary":"border-outline-variant focus-within:border-primary"}`,children:[c.jsx("span",{className:"material-symbols-outlined text-on-surface-variant mr-3",children:"person"}),c.jsx("input",{type:"text",value:r,onChange:p=>s(p.target.value),placeholder:"e.g. Ananya Sharma",className:"flex-1 bg-transparent border-none focus:ring-0 text-lg font-bold outline-none placeholder:text-outline"})]}),c.jsxs(Vs,{color:r.trim()?"primary":"surface",size:"lg",full:!0,disabled:!r.trim(),onClick:()=>n(1),children:["Continue ",c.jsx("span",{className:"material-symbols-outlined",children:"arrow_forward"})]})]}):c.jsxs(c.Fragment,{children:[c.jsx("h2",{className:"text-3xl font-extrabold text-on-surface mb-2",children:"Pick your avatar"}),c.jsx("p",{className:"text-on-surface-variant text-[15px] mb-8",children:"This is how the community will see you 💗"}),c.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:HL.map(p=>c.jsx("button",{onClick:()=>o(p),className:`w-full aspect-square rounded-2xl text-3xl flex items-center justify-center border-2 transition-all active:scale-95 ${i===p?"border-primary bg-primary-fixed shadow-tactile scale-105":"border-outline-variant bg-surface-container hover:border-primary"}`,children:p},p))}),c.jsxs("div",{className:"flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border-2 border-outline-variant mb-6",children:[c.jsx("div",{className:"w-14 h-14 rounded-full bg-primary-fixed border-2 border-primary flex items-center justify-center text-2xl",children:i}),c.jsxs("div",{children:[c.jsx("p",{className:"font-extrabold text-on-surface",children:r}),c.jsx("p",{className:"text-xs text-on-surface-variant font-bold uppercase tracking-widest",children:"Member · Level 1"})]})]}),c.jsx(Vs,{color:"primary",size:"lg",full:!0,disabled:l,onClick:f,children:l?"Saving...":c.jsxs(c.Fragment,{children:["Start Exploring ",c.jsx("span",{className:"material-symbols-outlined",children:"explore"})]})})]})})]})]})}const qL=[{icon:"home",label:"Home",path:"/app/map",fill:!0},{icon:"search",label:"Search",path:"/app/list",fill:!1},{icon:"calendar_today",label:"Tracker",path:"/app/tracker",fill:!0},{icon:"redeem",label:"Rewards",path:"/app/rewards",fill:!1},{icon:"person",label:"Profile",path:"/app/profile",fill:!0}];function qs(){const t=Te(),{pathname:e}=sr();return c.jsx("nav",{className:"fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white border-t-2 border-zinc-100 rounded-t-[32px]",style:{boxShadow:"0 -4px 12px rgba(0,0,0,0.05)"},children:qL.map(n=>{const r=e.startsWith(n.path);return c.jsxs("button",{onClick:()=>t(n.path),className:`flex flex-col items-center justify-center gap-0.5 px-4 py-2 rounded-full transition-all duration-200 active:scale-95 ${r?"bg-primary/10 text-primary":"text-zinc-400 hover:text-primary"}`,children:[c.jsx("span",{className:"material-symbols-outlined text-[24px]",style:r&&n.fill?{fontVariationSettings:"'FILL' 1,'wght' 600,'GRAD' 0,'opsz' 24"}:{fontVariationSettings:"'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24"},children:n.icon}),c.jsx("span",{className:"font-bold text-[10px] uppercase tracking-widest mt-0.5",children:n.label})]},n.path)})})}function KL(t,e,n,r){const i=(n-t)*Math.PI/180,o=(r-e)*Math.PI/180,l=Math.sin(i/2)*Math.sin(i/2)+Math.cos(t*Math.PI/180)*Math.cos(n*Math.PI/180)*Math.sin(o/2)*Math.sin(o/2);return 6371*2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))}async function t1({lat:t,lng:e,radiusKm:n=5,filters:r={}}){const s=n/111,i=n/(111*Math.cos(t*Math.PI/180));let o=Zn(tt(de,"locations"),an("lat",">=",t-s),an("lat","<=",t+s),an("status","==","active")),u=(await Qr(o)).docs.map(d=>{const f=d.data(),p=KL(t,e,f.lat,f.lng);return{id:d.id,...f,distance:p}});return u=u.filter(d=>Math.abs(d.lng-e)<=i),r.isFree&&(u=u.filter(d=>d.isFree)),r.hasPads&&(u=u.filter(d=>d.hasPads)),r.is24x7&&(u=u.filter(d=>d.is24x7)),u.sort((d,f)=>d.distance-f.distance),u}async function Of(t){const e=await Vu(An(de,"locations",t));return e.exists()?{id:e.id,...e.data()}:null}async function GL({type:t,name:e,lat:n,lng:r,address:s,addedBy:i}){return{id:(await Ws(tt(de,"locations"),{type:t,name:e,lat:n,lng:r,address:s,isFree:!1,hasPads:!1,is24x7:!1,cleanlinessScore:0,safetyScore:0,privacyScore:0,avgRating:0,reviewCount:0,status:"pending_review",addedBy:i,verified:!1,amenities:[],createdAt:nt(),updatedAt:nt()})).id}}async function QL({searchQuery:t,lat:e,lng:n,radiusKm:r=10}){const s=await t1({lat:e,lng:n,radiusKm:r});if(!(t!=null&&t.trim()))return s;const i=t.toLowerCase();return s.filter(o=>{var l,u,d;return((l=o.name)==null?void 0:l.toLowerCase().includes(i))||((u=o.address)==null?void 0:u.toLowerCase().includes(i))||((d=o.type)==null?void 0:d.includes(i))})}async function YL(t,e,n){await ns(An(de,"locations",t),{status:e,updatedAt:nt()}),await Ws(tt(de,"locations",t,"activity"),{action:`Status updated: ${e}`,userId:n,createdAt:nt()}),await Jm(n,5,"pad_update",t)}async function y_(t,e=10){const n=Zn(tt(de,"locations",t,"activity"),Ka("createdAt","desc"),Vm(e));return(await Qr(n)).docs.map(s=>({id:s.id,...s.data()}))}const JL=[{label:"Free",icon:"payments"},{label:"Has Pads",icon:"opacity"},{label:"Cleanest",icon:"cleaning_services"},{label:"24×7",icon:"schedule"}];function XL(){const t=Te(),{user:e}=kt(),[n,r]=R.useState(null),[s,i]=R.useState(["Has Pads"]),[o,l]=R.useState([]),[u,d]=R.useState(null),[f,p]=R.useState(!0);R.useEffect(()=>{navigator.geolocation.getCurrentPosition(async T=>{const{latitude:w,longitude:_}=T.coords;d({lat:w,lng:_});try{const I=await t1({lat:w,lng:_,radiusKm:5});l(I)}catch(I){console.error("Location fetch error:",I)}finally{p(!1)}},()=>p(!1),{timeout:8e3})},[]);const g=T=>i(w=>w.includes(T)?w.filter(_=>_!==T):[...w,T]),E=o.find(T=>T.id===n),y=o.filter(T=>!(s.includes("Has Pads")&&!T.padAvailable||s.includes("Free")&&T.isFree===!1||s.includes("24×7")&&!T.open24h)),N=["primary","secondary","tertiary"];return c.jsxs("div",{className:"h-dvh flex flex-col relative font-body bg-[#eef2f5] overflow-hidden",children:[c.jsxs("header",{className:"fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 h-16 bg-white/90 backdrop-blur-md shadow-sm",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined text-primary fill text-[26px]",style:{fontVariationSettings:"'FILL' 1"},children:"potted_plant"}),c.jsx("h1",{className:"font-headline font-extrabold text-[26px] tracking-tight text-primary",children:"NavHer"})]}),c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("button",{className:"w-10 h-10 rounded-full hover:bg-zinc-100 flex items-center justify-center transition-colors",onClick:()=>t("/app/notifications"),children:c.jsx("span",{className:"material-symbols-outlined text-on-surface",children:"notifications"})}),c.jsx("button",{onClick:()=>t("/app/profile"),className:"w-10 h-10 rounded-full bg-primary-fixed border-2 border-primary flex items-center justify-center text-lg",children:e.avatar||"🦊"})]})]}),c.jsxs("div",{className:"absolute inset-0 z-0",children:[c.jsxs("div",{className:"w-full h-full bg-[#eef2f5] relative overflow-hidden",children:[c.jsx("div",{className:"absolute top-1/4 left-1/3 w-2 h-24 bg-white rounded-full opacity-50 rotate-45"}),c.jsx("div",{className:"absolute top-1/2 left-1/4 w-32 h-4 bg-white rounded-full opacity-50"}),c.jsx("div",{className:"absolute top-1/3 left-1/2 w-48 h-3 bg-white rounded-full opacity-40 -rotate-12"}),f?c.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:c.jsx("div",{className:"bg-white/90 px-6 py-3 rounded-2xl font-bold text-primary animate-pulse",children:"Finding nearby locations…"})}):y.map((T,w)=>{const _=[{top:"38%",left:"43%"},{top:"55%",left:"62%"},{top:"30%",left:"65%"},{top:"45%",left:"25%"},{top:"65%",left:"40%"},{top:"25%",left:"50%"}],I=_[w%_.length],D=N[w%N.length];return c.jsx("button",{className:"absolute group z-10",style:{top:I.top,left:I.left},onClick:()=>r(T.id===n?null:T.id),children:c.jsx("div",{className:`bg-${D} text-white p-2 rounded-full shadow-lg group-active:scale-95 transition-transform flex items-center justify-center border-2 border-white ${n===T.id?"scale-125":""}`,children:c.jsx("span",{className:"material-symbols-outlined fill text-[20px]",style:{fontVariationSettings:"'FILL' 1"},children:"location_on"})})},T.id)}),c.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",children:c.jsx("div",{className:"w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md relative",children:c.jsx("div",{className:"absolute inset-0 rounded-full bg-tertiary animate-ping opacity-25"})})})]}),c.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"linear-gradient(180deg,rgba(255,255,255,0.9) 0%,rgba(255,255,255,0) 15%,rgba(255,255,255,0) 75%,rgba(255,255,255,0.9) 100%)"}})]}),c.jsxs("div",{className:"relative z-20 pt-20 px-5 flex flex-col gap-3",children:[c.jsxs("div",{className:"bg-error-container border-2 border-error/10 rounded-xl p-3 flex items-center justify-between shadow-card animate-pulse",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("span",{className:"material-symbols-outlined text-error",children:"emergency"}),c.jsx("p",{className:"text-on-error-container font-bold text-[13px]",children:"No pads within 1 km? Order in 15 mins →"})]}),c.jsx("button",{onClick:()=>t("/app/emergency"),className:"text-[12px] font-extrabold text-error uppercase tracking-widest px-3 py-1 bg-white/50 rounded-full",children:"Order"})]}),c.jsx("div",{className:"flex gap-2 overflow-x-auto no-scrollbar pb-1",children:JL.map(T=>c.jsxs("button",{onClick:()=>g(T.label),className:`flex-shrink-0 px-4 py-2 rounded-full font-bold text-[13px] flex items-center gap-1.5 border-2 transition-all active:scale-95 ${s.includes(T.label)?"bg-primary text-white border-primary":"bg-white text-on-surface border-outline-variant"}`,children:[c.jsx("span",{className:"material-symbols-outlined text-[16px]",style:{fontVariationSettings:s.includes(T.label)?"'FILL' 1":"'FILL' 0"},children:T.icon}),T.label]},T.label))})]}),c.jsx("div",{className:"fixed bottom-28 left-1/2 -translate-x-1/2 z-40",children:c.jsxs("button",{onClick:()=>t("/app/list"),className:"bg-primary text-white h-14 px-6 rounded-full flex items-center gap-2 font-extrabold text-[14px] whitespace-nowrap",style:{boxShadow:"0 4px 0 0 #d33c5e"},onMouseDown:T=>{T.currentTarget.style.boxShadow="none",T.currentTarget.style.transform="translateY(4px)"},onMouseUp:T=>{T.currentTarget.style.boxShadow="0 4px 0 0 #d33c5e",T.currentTarget.style.transform=""},onTouchStart:T=>{T.currentTarget.style.boxShadow="none",T.currentTarget.style.transform="translateY(4px)"},onTouchEnd:T=>{T.currentTarget.style.boxShadow="0 4px 0 0 #d33c5e",T.currentTarget.style.transform=""},children:[c.jsx("span",{className:"material-symbols-outlined text-[22px]",style:{fontVariationSettings:"'FILL' 1"},children:"search"}),"Find Nearest Safe Loo"]})}),c.jsx("div",{className:"fixed bottom-28 right-5 z-40",children:c.jsxs("button",{onClick:()=>t("/app/sos"),className:"w-14 h-14 bg-error text-white rounded-full flex flex-col items-center justify-center gap-0.5 border-4 border-white",style:{boxShadow:"0 4px 0 0 #b3001b"},onMouseDown:T=>{T.currentTarget.style.boxShadow="none",T.currentTarget.style.transform="translateY(4px)"},onMouseUp:T=>{T.currentTarget.style.boxShadow="0 4px 0 0 #b3001b",T.currentTarget.style.transform=""},onTouchStart:T=>{T.currentTarget.style.boxShadow="none",T.currentTarget.style.transform="translateY(4px)"},onTouchEnd:T=>{T.currentTarget.style.boxShadow="0 4px 0 0 #b3001b",T.currentTarget.style.transform=""},title:"Emergency SOS",children:[c.jsx("span",{className:"material-symbols-outlined text-[22px]",style:{fontVariationSettings:"'FILL' 1"},children:"emergency"}),c.jsx("span",{className:"text-[9px] font-black tracking-widest",children:"SOS"})]})}),E&&c.jsxs("div",{className:"fixed bottom-24 left-4 right-4 z-40 bg-white rounded-[1.5rem] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-2 border-outline-variant flex items-center gap-4",onClick:()=>t(`/app/details/${E.id}`,{state:{name:E.name}}),children:[c.jsx("div",{className:"w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center text-2xl flex-shrink-0",children:"🚻"}),c.jsxs("div",{className:"flex-1",children:[c.jsx("p",{className:"font-extrabold text-on-surface",children:E.name}),c.jsx("p",{className:"text-sm text-on-surface-variant font-medium",children:E.distance?`${(E.distance*1e3).toFixed(0)}m away`:"Nearby"}),E.padAvailable&&c.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed text-[11px] font-bold rounded-full mt-1",children:[c.jsx("span",{className:"material-symbols-outlined text-[12px]",children:"check_circle"})," Has Pads"]})]}),c.jsx("span",{className:"material-symbols-outlined text-outline",children:"chevron_right"})]}),!E&&c.jsxs("div",{className:"fixed bottom-0 left-0 w-full z-30 bg-surface-container-low rounded-t-[2rem] shadow-top border-t-2 border-white pt-3 pb-28",style:{maxHeight:"30vh"},children:[c.jsx("div",{className:"flex justify-center mb-4",children:c.jsx("div",{className:"w-12 h-1.5 bg-outline-variant rounded-full"})}),c.jsx("p",{className:"text-center text-[13px] font-bold text-on-surface-variant uppercase tracking-widest",children:f?"Searching nearby…":`${y.length} safe space${y.length!==1?"s":""} nearby`})]}),c.jsx(qs,{})]})}function Bn({title:t,onBack:e,rightAction:n,shadow:r="sm"}){const s=Te(),i=e||(()=>s(-1)),o={none:"",primary:"shadow-[0_4px_0_0_#ff4b72]",sm:"shadow-sm border-b-2 border-outline-variant"}[r]??"shadow-sm border-b-2 border-outline-variant";return c.jsxs("header",{className:`sticky top-0 z-50 flex items-center justify-between px-5 h-16 w-full bg-white ${o}`,children:[c.jsxs("div",{className:"flex items-center gap-3",children:[e!==null&&c.jsx("button",{onClick:i,className:"w-10 h-10 flex items-center justify-center rounded-full hover:bg-rose-50 transition-colors active:translate-y-0.5",children:c.jsx("span",{className:"material-symbols-outlined text-primary text-[24px]",children:"arrow_back"})}),c.jsx("h1",{className:"font-headline font-extrabold text-[26px] leading-[1.1] tracking-tight text-primary",children:t})]}),n?c.jsx("div",{children:n}):c.jsx("div",{className:"w-10"})]})}const ZL=["Free","Has Pads","Open Now","Cleanest","24×7"];function eV(){const t=Te(),[e,n]=R.useState(""),[r,s]=R.useState(["Has Pads"]),[i,o]=R.useState([]),[l,u]=R.useState(!0),d=f=>s(p=>p.includes(f)?p.filter(g=>g!==f):[...p,f]);return R.useEffect(()=>{let f=!0;const p=async()=>{u(!0);try{navigator.geolocation.getCurrentPosition(async E=>{const{latitude:y,longitude:N}=E.coords,T=await QL({searchQuery:e,lat:y,lng:N,radiusKm:10});if(!f)return;let w=T;r.includes("Free")&&(w=w.filter(_=>_.isFree)),r.includes("Has Pads")&&(w=w.filter(_=>_.hasPads)),(r.includes("24×7")||r.includes("Open Now"))&&(w=w.filter(_=>_.is24x7)),o(w),u(!1)},E=>{console.error("Geo error",E),u(!1)},{timeout:1e4,maximumAge:6e4})}catch(E){console.error(E),f&&u(!1)}},g=setTimeout(()=>{p()},300);return()=>{f=!1,clearTimeout(g)}},[e,r]),c.jsxs("div",{className:"min-h-dvh bg-surface-container-low font-body text-on-surface pb-32",children:[c.jsxs("header",{className:"sticky top-0 z-50 flex items-center justify-between px-5 h-20 w-full bg-white shadow-[0_4px_0_0_#ff4b72]",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("button",{onClick:()=>t(-1),className:"w-10 h-10 flex items-center justify-center rounded-full hover:bg-rose-50 transition-colors",children:c.jsx("span",{className:"material-symbols-outlined text-primary",children:"arrow_back"})}),c.jsx("h1",{className:"font-headline font-extrabold text-[26px] tracking-tight text-primary",children:"SafeSpaces"})]}),c.jsx("div",{className:"flex items-center gap-3",children:c.jsxs("div",{className:"flex items-center bg-surface-container rounded-full p-1 border-2 border-outline-variant",children:[c.jsx("button",{className:"px-4 py-1.5 rounded-full text-[13px] font-bold bg-white text-on-surface shadow-card",children:"List"}),c.jsxs("button",{onClick:()=>t("/app/map"),className:"px-4 py-1.5 rounded-full text-[13px] font-bold text-on-surface-variant flex items-center gap-1 hover:text-primary",children:[c.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"map"}),"Map"]})]})})]}),c.jsxs("main",{className:"max-w-2xl mx-auto px-5 mt-6 space-y-6",children:[c.jsxs("div",{className:"relative",children:[c.jsx("span",{className:"material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant",children:"search"}),c.jsx("input",{value:e,onChange:f=>n(f.target.value),placeholder:"Search by location or mall...",className:"w-full pl-14 pr-5 py-5 bg-white border-2 border-outline-variant rounded-xl text-[15px] font-medium outline-none transition-all focus:border-primary focus:shadow-[0_4px_0_0_#ff4b72] shadow-[0_4px_0_0_#e2e8f0]"})]}),c.jsxs("div",{className:"flex gap-3 overflow-x-auto no-scrollbar pb-1",children:[c.jsxs("button",{className:"flex-none flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-white font-bold text-[13px] border-2 border-primary active:translate-y-1",style:{boxShadow:"0 4px 0 0 #a10038"},onMouseDown:f=>{f.currentTarget.style.boxShadow="none",f.currentTarget.style.transform="translateY(4px)"},onMouseUp:f=>{f.currentTarget.style.boxShadow="0 4px 0 0 #a10038",f.currentTarget.style.transform=""},onTouchStart:f=>{f.currentTarget.style.boxShadow="none",f.currentTarget.style.transform="translateY(4px)"},onTouchEnd:f=>{f.currentTarget.style.boxShadow="0 4px 0 0 #a10038",f.currentTarget.style.transform=""},children:[c.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"tune"})," Filters"]}),ZL.map(f=>c.jsx("button",{onClick:()=>d(f),className:`flex-none px-4 py-2 rounded-full font-bold text-[13px] border-2 transition-all active:scale-95 ${r.includes(f)?"bg-primary text-white border-primary":"bg-white text-on-surface border-outline-variant hover:border-primary"}`,children:f},f))]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsxs("h2",{className:"font-extrabold text-xl tracking-tight text-on-surface",children:[i.length," results nearby"]}),c.jsxs("div",{className:"flex items-center gap-1 text-tertiary font-bold text-[13px] uppercase tracking-widest",children:[c.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"sort"}),"Distance"]})]}),c.jsx("div",{className:"space-y-4",children:l?c.jsx("div",{className:"text-center py-10",children:c.jsx("span",{className:"material-symbols-outlined animate-spin text-primary text-4xl",children:"sync"})}):i.length===0?c.jsxs("div",{className:"text-center py-10 bg-white rounded-xl border-2 border-outline-variant p-6",children:[c.jsx("span",{className:"material-symbols-outlined text-4xl text-on-surface-variant mb-2",children:"location_off"}),c.jsx("h3",{className:"font-extrabold text-lg text-on-surface",children:"No locations found"}),c.jsx("p",{className:"text-sm font-medium text-slate-500",children:"Try adjusting your filters or search query."})]}):i.map(f=>c.jsx("div",{onClick:()=>t(`/app/details/${f.id}`),className:"bg-white rounded-lg border-2 border-outline-variant p-5 shadow-card hover:border-primary transition-all cursor-pointer",children:c.jsxs("div",{className:"flex gap-5",children:[c.jsx("div",{className:"w-24 h-24 rounded-lg bg-surface-container flex-none overflow-hidden border-2 border-outline-variant/30 flex items-center justify-center text-4xl",children:f.type==="pad_machine"?"💧":"🚻"}),c.jsxs("div",{className:"flex-1 space-y-2",children:[c.jsxs("div",{className:"flex justify-between items-start",children:[c.jsx("h3",{className:"font-extrabold text-[17px] leading-tight text-on-surface",children:f.name}),c.jsxs("div",{className:"flex items-center gap-1 bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-md font-bold text-[13px]",children:[c.jsx("span",{className:"material-symbols-outlined text-[14px]",style:{fontVariationSettings:"'FILL' 1"},children:"star"}),(f.avgRating||0).toFixed(1)]})]}),c.jsxs("p",{className:"text-on-surface-variant text-[13px] font-medium flex items-center gap-1",children:[c.jsx("span",{className:"material-symbols-outlined text-[14px] text-tertiary",children:"location_on"}),f.distance?f.distance.toFixed(1)+"km":""," · ",f.address||"Navigation available"]}),c.jsxs("div",{className:"flex flex-wrap gap-2 pt-1",children:[f.hasPads&&c.jsx("span",{className:"inline-flex items-center gap-1 px-3 py-1 bg-secondary-fixed text-on-secondary-fixed text-[11px] font-bold uppercase tracking-wider rounded-full border border-outline-variant/30",children:"Has Pads"}),f.isFree&&c.jsx("span",{className:"inline-flex items-center gap-1 px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[11px] font-bold uppercase tracking-wider rounded-full border border-outline-variant/30",children:"Free"}),f.is24x7&&c.jsx("span",{className:"inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-700 text-[11px] font-bold uppercase tracking-wider rounded-full border border-outline-variant/30",children:"24×7"})]})]})]})},f.id))}),c.jsxs("div",{className:"mt-6 bg-primary-fixed/30 rounded-lg p-5 border-2 border-dashed border-primary/30 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("h4",{className:"font-extrabold text-primary text-[17px]",children:"Daily Discovery"}),c.jsx("p",{className:"text-on-surface-variant text-[13px] font-medium",children:"Find 2 more to earn 50 LooCoins!"})]}),c.jsxs("div",{className:"relative w-14 h-14 flex items-center justify-center",children:[c.jsx("svg",{className:"w-full h-full -rotate-90",children:c.jsx("circle",{cx:"28",cy:"28",r:"24",fill:"transparent",stroke:"#ff8fa7",strokeWidth:"5",strokeDasharray:"150",strokeDashoffset:"100"})}),c.jsx("span",{className:"absolute font-black text-primary text-sm",children:"1/3"})]})]})]})]}),c.jsx(qs,{})]})}async function tV({locationId:t,userId:e,userName:n,userAvatar:r,rating:s,text:i,cleanlinessRating:o,safetyRating:l,privacyRating:u,hasPad:d}){const f=await Ws(tt(de,"reviews"),{locationId:t,userId:e,userName:n,userAvatar:r,rating:s,text:i,cleanlinessRating:o,safetyRating:l,privacyRating:u,hasPad:d,createdAt:nt()}),p=An(de,"locations",t),g=await n1(t),E=g.reduce((w,_)=>w+(_.rating??0),0)/g.length,y=g.reduce((w,_)=>w+(_.cleanlinessRating??0),0)/g.length,N=g.reduce((w,_)=>w+(_.safetyRating??0),0)/g.length,T=g.reduce((w,_)=>w+(_.privacyRating??0),0)/g.length;return await ns(p,{avgRating:Math.round(E*10)/10,cleanlinessScore:Math.round(y*10)/10,safetyScore:Math.round(N*10)/10,privacyScore:Math.round(T*10)/10,reviewCount:g.length,updatedAt:nt()}),await Jm(e,25,"review_submitted",f.id),{id:f.id}}async function n1(t,e=50){const n=Zn(tt(de,"reviews"),an("locationId","==",t),Ka("createdAt","desc"),Vm(e));return(await Qr(n)).docs.map(s=>({id:s.id,...s.data()}))}const nV=[{icon:"local_pharmacy",name:"Apollo Pharmacy",hours:"Open until 11:00 PM",dist:"200m"},{icon:"medical_services",name:"Wellness Forever",hours:"Open 24 Hours",dist:"450m"},{icon:"storefront",name:"Noble Plus",hours:"Open until 10:00 PM",dist:"600m"}];function v_(){const t=Te(),{id:e}=Op(),[n,r]=R.useState(!1),[s,i]=R.useState(null),[o,l]=R.useState([]),[u,d]=R.useState(!0),[f,p]=R.useState("");if(R.useEffect(()=>{async function y(){if(!e){p("No location ID provided."),d(!1);return}try{d(!0);const N=await Of(e);if(N){i(N);const T=await n1(e);l(T||[])}else p("Location not found.")}catch(N){console.error("Failed to fetch location:",N),p("Failed to load location details.")}finally{d(!1)}}y()},[e]),u)return c.jsx("div",{className:"flex flex-col min-h-dvh bg-surface-container-low font-body items-center justify-center",children:c.jsxs("div",{className:"animate-pulse flex flex-col items-center gap-4",children:[c.jsx("span",{className:"text-4xl material-symbols-outlined text-primary",children:"location_on"}),c.jsx("p",{className:"text-secondary font-bold",children:"Loading location details..."})]})});if(f||!s)return c.jsxs("div",{className:"flex flex-col min-h-dvh bg-surface-container-low font-body items-center justify-center px-4 text-center",children:[c.jsx("span",{className:"material-symbols-outlined text-6xl text-error mb-4",children:"error"}),c.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Oops!"}),c.jsx("p",{className:"text-on-surface-variant mb-6",children:f||"Something went wrong."}),c.jsx("button",{onClick:()=>t(-1),className:"bg-primary text-white px-6 py-3 rounded-full font-bold shadow-md",children:"Go Back"})]});const g=[{icon:"water_drop",label:"Pad Machine",ok:s.hasPads},{icon:"schedule",label:"24x7 Open",ok:s.is24x7},{icon:"payments",label:"Free to Use",ok:s.isFree},{icon:"wc",label:"Clean Toilets",ok:s.cleanlinessScore>=4},{icon:"door_open",label:"Private Stall",ok:s.privacyScore>=4},{icon:"verified",label:"Verified",ok:s.verified}];s.amenities&&Array.isArray(s.amenities)&&s.amenities.forEach(y=>{g.push({icon:"check_circle",label:y,ok:!0})});const E=y=>{if(!y)return"Just now";const N=y.toDate?y.toDate():new Date(y),T=Date.now()-N.getTime(),w=Math.floor(T/(1e3*60*60));return w<1?"Just now":w<24?`${w}h ago`:`${Math.floor(w/24)}d ago`};return c.jsxs("div",{className:"flex flex-col min-h-dvh bg-surface-container-low font-body text-on-surface pb-24",children:[c.jsxs("header",{className:"fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 h-16 bg-white border-b-2 border-gray-100",style:{boxShadow:"0 4px 0 0 rgba(255,75,114,0.1)"},children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("button",{onClick:()=>t(-1),className:"p-2 hover:bg-gray-50 transition-colors rounded-full active:scale-95",children:c.jsx("span",{className:"material-symbols-outlined text-primary",children:"arrow_back"})}),c.jsx("h1",{className:"font-headline text-[28px] font-extrabold leading-[1.1] tracking-tight text-on-surface",children:"Location Details"})]}),c.jsx("button",{className:"p-2 hover:bg-gray-50 transition-colors rounded-full",children:c.jsx("span",{className:"material-symbols-outlined text-primary",children:"share"})})]}),c.jsxs("main",{className:"mt-16 max-w-2xl mx-auto w-full",children:[c.jsxs("section",{className:"relative h-72 w-full overflow-hidden",children:[c.jsx("div",{className:"w-full h-full bg-gradient-to-br from-tertiary-fixed via-primary-fixed to-secondary-fixed flex items-center justify-center",children:c.jsx("span",{className:"text-8xl",children:s.type==="pad_machine"?"💦":"🏨"})}),c.jsxs("div",{className:"absolute bottom-4 left-4 right-4 flex justify-between items-end",children:[c.jsxs("div",{className:"bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg border-2 border-primary/20",children:[c.jsx("h2",{className:"font-bold text-lg text-on-primary-container",children:s.name}),c.jsxs("p",{className:"text-xs text-on-surface-variant flex items-center gap-1",children:[c.jsx("span",{className:"material-symbols-outlined text-sm",children:"location_on"}),s.address||"Address not available"]})]}),c.jsx("button",{onClick:()=>r(y=>!y),className:"bg-white p-3 rounded-full shadow-md text-primary active:scale-90 transition-transform",children:c.jsx("span",{className:"material-symbols-outlined",style:{fontVariationSettings:n?"'FILL' 1":"'FILL' 0"},children:"favorite"})})]})]}),c.jsx("section",{className:"px-4 -mt-6 relative z-10",children:c.jsxs("div",{className:"bg-white rounded-lg border-2 border-secondary/30 p-5 shadow-sm",children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:`w-12 h-12 rounded-full flex items-center justify-center border-2 ${s.hasPads?"bg-secondary/10 border-secondary/20":"bg-error/10 border-error/20"}`,children:c.jsx("span",{className:`material-symbols-outlined text-3xl font-bold ${s.hasPads?"text-secondary":"text-error"}`,style:{fontVariationSettings:"'FILL' 1"},children:s.hasPads?"check_circle":"cancel"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-extrabold text-xl tracking-tight",children:"Has Sanitary Pads?"}),c.jsxs("p",{className:`font-bold text-sm ${s.hasPads?"text-secondary":"text-error"}`,children:[s.hasPads?"In Stock":"Out of Stock"," ",c.jsx("span",{className:"text-on-surface-variant font-medium",children:"(Updated Recently)"})]})]})]}),c.jsx("button",{className:"bg-surface-container-high px-3 py-2 rounded-full text-xs font-bold tracking-wider uppercase text-on-surface-variant hover:bg-outline-variant transition-colors",children:"Report Update"})]}),c.jsxs("div",{className:"bg-primary-container/20 rounded-lg p-4 border-2 border-dashed border-primary flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("span",{className:"material-symbols-outlined text-primary text-2xl",children:"priority_high"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-xs font-bold uppercase tracking-widest text-primary-dim",children:"Running low?"}),c.jsx("p",{className:"text-sm font-semibold text-on-primary-container",children:"Get rapid delivery to your stall"})]})]}),c.jsx("button",{onClick:()=>t("/app/emergency"),className:"bg-primary text-white font-bold py-2 px-4 rounded-full text-sm",style:{boxShadow:"0 4px 0 0 #d33c5e"},onMouseDown:y=>{y.currentTarget.style.boxShadow="none",y.currentTarget.style.transform="translateY(4px)"},onMouseUp:y=>{y.currentTarget.style.boxShadow="0 4px 0 0 #d33c5e",y.currentTarget.style.transform=""},onTouchStart:y=>{y.currentTarget.style.boxShadow="none",y.currentTarget.style.transform="translateY(4px)"},onTouchEnd:y=>{y.currentTarget.style.boxShadow="0 4px 0 0 #d33c5e",y.currentTarget.style.transform=""},children:"Order Pads Now"})]})]})}),c.jsxs("section",{className:"px-4 py-6 grid grid-cols-1 gap-4",children:[c.jsxs("button",{className:"w-full bg-tertiary text-white py-4 rounded-full font-extrabold text-lg flex items-center justify-center gap-2",style:{boxShadow:"0 4px 0 0 #158bb2"},onMouseDown:y=>{y.currentTarget.style.boxShadow="none",y.currentTarget.style.transform="translateY(4px)"},onMouseUp:y=>{y.currentTarget.style.boxShadow="0 4px 0 0 #158bb2",y.currentTarget.style.transform=""},onTouchStart:y=>{y.currentTarget.style.boxShadow="none",y.currentTarget.style.transform="translateY(4px)"},onTouchEnd:y=>{y.currentTarget.style.boxShadow="0 4px 0 0 #158bb2",y.currentTarget.style.transform=""},children:[c.jsx("span",{className:"material-symbols-outlined",children:"directions"}),"Get Directions"]}),c.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[c.jsxs(fv,{to:`/app/rate/${e}`,className:"flex items-center justify-center gap-2 py-3 border-2 border-outline rounded-full font-bold text-on-surface-variant bg-white hover:bg-surface-container transition-colors active:scale-95",children:[c.jsx("span",{className:"material-symbols-outlined",children:"star"}),"Rate & Review"]}),c.jsxs("button",{className:"flex items-center justify-center gap-2 py-3 border-2 border-outline rounded-full font-bold text-on-surface-variant bg-white hover:bg-surface-container transition-colors active:scale-95",children:[c.jsx("span",{className:"material-symbols-outlined",children:"bookmark"}),"Save Location"]})]})]}),c.jsxs("section",{className:"px-4 py-2",children:[c.jsx("p",{className:"text-[13px] font-bold uppercase tracking-widest text-on-surface-variant mb-4",children:"Amenities & Features"}),c.jsx("div",{className:"grid grid-cols-3 gap-3",children:g.map(y=>c.jsxs("div",{className:`bg-white p-3 rounded-lg border-2 flex flex-col items-center gap-2 text-center ${y.ok?"border-secondary/20":"border-outline-variant bg-gray-50"}`,children:[c.jsx("span",{className:`material-symbols-outlined ${y.ok?"text-secondary":"text-zinc-300"}`,style:{fontVariationSettings:y.ok?"'FILL' 1":"'FILL' 0"},children:y.icon}),c.jsx("span",{className:`text-[11px] font-bold ${y.ok?"text-on-surface":"text-zinc-400"}`,children:y.label})]},y.label))})]}),c.jsxs("section",{className:"px-4 py-6",children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("h3",{className:"font-extrabold text-2xl tracking-tight",children:"Verified Reviews"}),c.jsxs("span",{className:"bg-secondary-container text-on-secondary-container text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider",children:[s.reviewCount||0," Reviews"]})]}),c.jsx("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[{label:"Cleanliness",val:`${s.cleanlinessScore||0}/5`,accent:""},{label:"Privacy",val:`${s.privacyScore||0}/5`,accent:""},{label:"Safety Score",val:`${s.safetyScore||0}/5`,accent:"secondary"},{label:"Overall",val:`${s.avgRating||0}/5`,accent:""}].map(y=>c.jsxs("div",{className:`p-4 rounded-lg border-2 flex flex-col items-center text-center relative overflow-hidden ${y.accent==="secondary"?"bg-secondary/10 border-secondary/30":"bg-white border-gray-100"}`,children:[y.accent==="secondary"&&c.jsx("span",{className:"material-symbols-outlined text-secondary absolute -right-2 -top-2 text-4xl opacity-20",style:{fontVariationSettings:"'FILL' 1"},children:"shield_with_heart"}),c.jsx("span",{className:`text-2xl font-black ${y.accent==="secondary"?"text-secondary":"text-on-surface"}`,children:y.val}),c.jsx("span",{className:`text-[10px] font-bold uppercase tracking-widest ${y.accent==="secondary"?"text-secondary-dim":"text-on-surface-variant"}`,children:y.label})]},y.label))}),c.jsxs("div",{className:"bg-tertiary-container/30 rounded-xl p-4 mb-6 flex gap-4 items-start border-2 border-tertiary/20",children:[c.jsx("div",{className:"w-12 h-12 bg-white rounded-full flex-shrink-0 flex items-center justify-center border-2 border-tertiary/30 shadow-sm",children:c.jsx("span",{className:"text-2xl",children:"🦊"})}),c.jsxs("div",{children:[c.jsx("p",{className:"font-bold text-tertiary-dim text-sm",children:"Looie's Tip:"}),c.jsxs("p",{className:"text-sm text-on-tertiary-container italic",children:['"',s.hasPads?"Pads are confirmed available here!":"Wait, pad stock is unconfirmed. Check alternatives.",'"']})]})]}),c.jsx("div",{className:"space-y-3",children:o.length===0?c.jsxs("div",{className:"bg-white p-6 rounded-lg border-2 border-dashed border-outline text-center",children:[c.jsx("span",{className:"material-symbols-outlined text-4xl text-outline-variant mb-2",children:"rate_review"}),c.jsx("p",{className:"font-bold text-on-surface-variant",children:"No reviews yet."}),c.jsx("p",{className:"text-sm text-on-surface-variant mb-4",children:"Be the first to share your experience!"}),c.jsx(fv,{to:`/app/rate/${e}`,className:"text-primary font-bold hover:underline",children:"Write a Review"})]}):o.map(y=>c.jsxs("div",{className:"bg-white p-4 rounded-lg border-2 border-outline-variant",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[c.jsx("div",{className:"w-9 h-9 bg-primary-fixed rounded-full flex items-center justify-center text-lg",children:y.userAvatar||"👤"}),c.jsxs("div",{className:"flex-1",children:[c.jsx("p",{className:"font-bold text-sm text-on-surface",children:y.userName||"Anonymous"}),c.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5}).map((N,T)=>c.jsx("span",{className:`material-symbols-outlined text-sm ${T<y.rating?"text-amber-400":"text-zinc-200"}`,style:{fontVariationSettings:T<y.rating?"'FILL' 1":"'FILL' 0"},children:"star"},T))})]}),c.jsx("span",{className:"text-[11px] text-on-surface-variant",children:E(y.createdAt)})]}),c.jsx("p",{className:"text-sm text-on-surface-variant",children:y.text})]},y.id))})]}),c.jsxs("section",{className:"pl-4 py-4 overflow-hidden",children:[c.jsx("h3",{className:"font-bold text-xs uppercase tracking-widest text-on-surface-variant mb-4 pr-4",children:"Nearby Pharmacy Alternatives"}),c.jsx("div",{className:"flex gap-4 overflow-x-auto pb-4",style:{scrollbarWidth:"none",msOverflowStyle:"none"},children:nV.map(y=>c.jsxs("div",{className:"min-w-[200px] bg-white border-2 border-gray-100 p-4 rounded-lg shadow-sm flex flex-col gap-3",children:[c.jsxs("div",{className:"flex justify-between items-start",children:[c.jsx("div",{className:"w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center text-primary",children:c.jsx("span",{className:"material-symbols-outlined",children:y.icon})}),c.jsx("span",{className:"text-[10px] font-bold bg-gray-100 px-2 py-1 rounded",children:y.dist})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-bold text-sm",children:y.name}),c.jsx("p",{className:"text-[10px] text-on-surface-variant",children:y.hours})]}),c.jsxs("button",{className:"w-full bg-secondary/10 text-secondary font-bold py-2 rounded-lg text-xs flex items-center justify-center gap-1",children:[c.jsx("span",{className:"material-symbols-outlined text-sm",children:"call"})," Call"]})]},y.name))})]})]}),c.jsx(qs,{})]})}async function rV({userId:t,userName:e,userAvatar:n,lat:r,lng:s}){return{sosId:(await Ws(tt(de,"sos_alerts"),{userId:t,userName:e,userAvatar:n,lat:r,lng:s,status:"active",responderIds:[],createdAt:nt(),resolvedAt:null})).id}}async function sV(t,e){await ns(An(de,"sos_alerts",t),{status:"resolved",resolvedAt:nt(),resolvedBy:e})}async function iV(t){await ns(An(de,"sos_alerts",t),{status:"cancelled",resolvedAt:nt()})}async function oV({sosId:t,userId:e,userName:n,userAvatar:r,text:s}){await Ws(tt(de,"sos_alerts",t,"messages"),{userId:e,userName:n,userAvatar:r,text:s,createdAt:nt()})}function aV(t,e){const n=Zn(tt(de,"sos_alerts",t,"messages"),Ka("createdAt","asc"));return LD(n,r=>{const s=r.docs.map(i=>({id:i.id,...i.data()}));e(s)})}const lV=[{icon:"notifications_active",bg:"bg-primary-fixed",color:"text-primary",title:"1. Alerts Sent",desc:"Nearby verified helpers receive an urgent notification."},{icon:"chat_bubble",bg:"bg-tertiary-fixed",color:"text-tertiary",title:"2. Secure Chat",desc:"A private encrypted chat opens with active responders."},{icon:"location_on",bg:"bg-secondary-fixed",color:"text-secondary",title:"3. Location Shared",desc:"Your live location is shared only with confirmed matches."}];function cV(){const t=Te(),[e,n]=R.useState(!0),[r,s]=R.useState(!1),[i,o]=R.useState(!1),[l,u]=R.useState(null),[d,f]=R.useState(10),[p,g]=R.useState(!1),[E,y]=R.useState(""),{user:N,triggerSOS:T,clearSOS:w}=kt(),_=R.useRef(null);R.useEffect(()=>(i&&d>0&&(_.current=setTimeout(()=>f(P=>P-1),1e3)),()=>clearTimeout(_.current)),[i,d]);const I=async()=>{var P;g(!0),y("");try{const M=await new Promise((C,j)=>navigator.geolocation.getCurrentPosition(C,j,{timeout:8e3})),{latitude:b,longitude:x}=M.coords,S=(P=Ae.currentUser)==null?void 0:P.uid,{sosId:k}=await rV({userId:S,userName:e?"Anonymous":(N==null?void 0:N.name)||"NavHer User",userAvatar:e?"🦊":(N==null?void 0:N.avatar)||"🦊",lat:b,lng:x});u(k),o(!0),f(10),T({lat:b,lng:x})}catch(M){console.error("SOS error:",M),y("Could not get location. Please enable GPS and try again.")}finally{g(!1)}},D=async()=>{l&&await iV(l),o(!1),u(null),f(10),w()};return c.jsxs("div",{className:"flex flex-col min-h-dvh bg-surface-container-low font-body text-on-surface pb-32",children:[c.jsx("style",{children:`
                @keyframes sos-pulse {
                    0%   { transform: scale(.8); opacity: 0.5; }
                    50%  { transform: scale(1);   opacity: 0.3; }
                    100% { transform: scale(1.2); opacity: 0;   }
                }
                .sos-ring-1 { animation: sos-pulse 2s cubic-bezier(.455,.03,.515,.955) infinite; }
                .sos-ring-2 { animation: sos-pulse 2s cubic-bezier(.455,.03,.515,.955) infinite; animation-delay: 0.5s; }
            `}),c.jsxs("header",{className:"w-full top-0 sticky z-50 bg-white flex items-center justify-between px-4 h-16 border-b-2 border-zinc-100",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("button",{onClick:()=>t(-1),className:"w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-100 transition-colors",children:c.jsx("span",{className:"material-symbols-outlined text-zinc-500",children:"arrow_back"})}),c.jsx("h1",{className:"font-headline font-extrabold text-[28px] tracking-tight text-primary",children:"Safety SOS"})]}),c.jsxs("div",{className:"flex items-center gap-2 bg-secondary-container px-3 py-1.5 rounded-full border-2 border-secondary/20",children:[c.jsx("span",{className:"material-symbols-outlined text-on-secondary-container text-sm",style:{fontVariationSettings:"'FILL' 1"},children:"verified_user"}),c.jsx("span",{className:"text-xs font-bold text-on-secondary-container tracking-tight",children:"SECURE"})]})]}),c.jsxs("main",{className:"px-5 pt-4 space-y-6",children:[c.jsxs("div",{className:"flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border-2 border-outline-variant",children:[c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("div",{className:"w-16 h-16 bg-primary-fixed rounded-full overflow-hidden flex items-center justify-center border-2 border-primary/20",children:c.jsx("span",{className:"text-4xl",children:"🦊"})}),c.jsxs("div",{children:[c.jsx("p",{className:"font-bold text-on-surface",children:"Anonymous Mode"}),c.jsx("p",{className:"text-xs text-on-surface-variant",children:"Your identity stays hidden"})]})]}),c.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[c.jsx("input",{type:"checkbox",className:"sr-only peer",checked:e,onChange:()=>n(P=>!P)}),c.jsx("div",{className:`w-14 h-8 bg-surface-container-highest rounded-full peer
                            peer-checked:bg-secondary
                            after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white
                            after:rounded-full after:h-6 after:w-6 after:transition-all
                            peer-checked:after:translate-x-6 border border-outline-variant`})]})]}),c.jsxs("div",{className:"relative flex flex-col items-center justify-center py-10 space-y-8 overflow-hidden",children:[c.jsxs("div",{className:"absolute inset-0 flex items-center justify-center -z-10 pointer-events-none",children:[c.jsx("div",{className:"absolute w-64 h-64 bg-primary/20 rounded-full sos-ring-1"}),c.jsx("div",{className:"absolute w-80 h-80 bg-primary/10 rounded-full sos-ring-2"})]}),c.jsxs("div",{className:"flex flex-col items-center gap-6",children:[i?c.jsxs("div",{className:"w-48 h-48 bg-primary rounded-full flex flex-col items-center justify-center border-4 border-[#d33c5e] animate-pulse",children:[c.jsx("span",{className:"material-symbols-outlined text-white text-5xl mb-1",style:{fontVariationSettings:"'FILL' 1"},children:"sensors"}),c.jsxs("span",{className:"text-white font-extrabold text-2xl",children:[String(d).padStart(2,"0"),"s"]}),c.jsx("span",{className:"text-white/80 text-xs font-bold",children:"BROADCASTING"})]}):c.jsxs("button",{className:"relative w-48 h-48 bg-primary rounded-full flex flex-col items-center justify-center border-4 border-[#d33c5e] transition-all disabled:opacity-60",style:{boxShadow:r?"none":"0 4px 0 0 #d33c5e"},onMouseDown:()=>s(!0),onMouseUp:()=>{s(!1),I()},onTouchStart:()=>s(!0),onTouchEnd:()=>{s(!1),I()},disabled:p,children:[c.jsx("span",{className:"material-symbols-outlined text-white text-6xl mb-2",style:{fontVariationSettings:"'FILL' 1"},children:"emergency"}),c.jsx("span",{className:"text-white font-extrabold text-xl tracking-tight",children:p?"Locating...":"ACTIVATE SOS"})]}),c.jsxs("div",{className:"text-center px-4",children:[E&&c.jsx("p",{className:"text-red-500 font-bold text-sm mb-2",children:E}),i?c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"text-on-surface font-bold text-lg mb-1",children:"🚨 Alert Sent — Searching..."}),c.jsxs("p",{className:"text-primary font-extrabold text-2xl tracking-tighter",children:["00:",String(d).padStart(2,"0")]}),c.jsx("button",{onClick:()=>t("/app/sos-chat",{state:{sosId:l}}),className:"mt-3 px-6 py-2 bg-secondary text-white font-bold rounded-full text-sm",children:"Open Chat with Helpers →"})]}):c.jsx("p",{className:"text-on-surface-variant text-sm max-w-[280px] mx-auto",children:"Broadcast an anonymous alert to verified women helpers within 500m."})]})]}),i&&c.jsx("button",{onClick:D,className:"px-8 py-3 bg-white text-on-surface-variant font-bold border-2 border-outline-variant rounded-full text-sm",style:{boxShadow:"0 4px 0 0 #cbd5e1"},children:"CANCEL ALERT"})]}),c.jsxs("section",{className:"space-y-4",children:[c.jsx("h2",{className:"font-extrabold text-xl px-2 tracking-tight",children:"What happens next?"}),c.jsx("div",{className:"grid grid-cols-1 gap-3",children:lV.map(P=>c.jsxs("div",{className:"bg-white p-4 rounded-lg border-2 border-outline-variant flex gap-4",children:[c.jsx("div",{className:`w-12 h-12 ${P.bg} rounded-2xl flex items-center justify-center shrink-0`,children:c.jsx("span",{className:`material-symbols-outlined ${P.color}`,style:{fontVariationSettings:"'FILL' 1"},children:P.icon})}),c.jsxs("div",{children:[c.jsx("p",{className:"font-bold text-on-surface",children:P.title}),c.jsx("p",{className:"text-sm text-on-surface-variant",children:P.desc})]})]},P.title))})]}),c.jsxs("button",{onClick:()=>window.open("tel:112"),className:"w-full bg-surface-container-highest/30 border-2 border-dashed border-error/40 p-5 rounded-lg flex items-center justify-between group active:scale-95 transition-all",children:[c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("span",{className:"material-symbols-outlined text-error text-3xl",children:"call"}),c.jsxs("div",{className:"text-left",children:[c.jsx("p",{className:"font-extrabold text-error",children:"Call Emergency Services"}),c.jsx("p",{className:"text-xs text-on-surface-variant",children:"Dial 112 immediately"})]})]}),c.jsx("span",{className:"material-symbols-outlined text-error",children:"chevron_right"})]})]}),c.jsx("nav",{className:"fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white border-t-2 border-zinc-100 rounded-t-[32px]",style:{boxShadow:"0 -4px 10px rgba(0,0,0,0.05)"},children:[{icon:"home",label:"Home",path:"/app/map"},{icon:"verified_user",label:"Shield",path:"/app/shield"},{icon:"emergency",label:"SOS",path:"/app/sos",active:!0,fill:!0},{icon:"group",label:"Circle",path:"/app/circle"},{icon:"person",label:"Profile",path:"/app/profile"}].map(P=>c.jsxs("a",{onClick:()=>t(P.path),className:`flex flex-col items-center justify-center transition-all active:scale-95 duration-200 ${P.active?"text-primary bg-primary/10 rounded-full px-4 py-2":"text-zinc-400 hover:text-primary"}`,children:[c.jsx("span",{className:"material-symbols-outlined",style:P.active?{fontVariationSettings:"'FILL' 1"}:void 0,children:P.icon}),c.jsx("span",{className:"font-headline font-bold text-[10px] tracking-widest uppercase mt-1",children:P.label})]},P.path))})]})}const x_={primary:{bg:"bg-primary",text:"text-white",shadow:"#d33c5e"},green:{bg:"bg-accent-green",text:"text-white",shadow:"#46a302"},blue:{bg:"bg-accent-blue",text:"text-white",shadow:"#158ec7"},yellow:{bg:"bg-accent-yellow",text:"text-slate-900",shadow:"#c8a000"},gray:{bg:"bg-slate-200",text:"text-slate-600",shadow:"#94a3b8"},outline:{bg:"bg-white border-2 border-slate-200",text:"text-slate-700",shadow:"#94a3b8"}};function ka({children:t,onClick:e,color:n="primary",className:r="",disabled:s=!1,type:i="button",fullWidth:o=!0}){const l=x_[n]||x_.primary;return c.jsx("button",{type:i,onClick:e,disabled:s,style:{"--btn-shadow-color":l.shadow},className:`duo-btn ${l.bg} ${l.text} ${o?"w-full":""} py-4 px-6 text-[17px] font-extrabold rounded-2xl ${s?"opacity-40 cursor-not-allowed":""} ${r}`,children:t})}const uV=[{id:"washroom",emoji:"🚻",label:"Washroom",desc:"Clean restroom"},{id:"machine",emoji:"💧",label:"Pad Machine",desc:"Vending dispenser"}];function dV(){const t=Te(),{firebaseUser:e,addFoxPoints:n}=kt(),[r,s]=R.useState("washroom"),[i,o]=R.useState(""),[l,u]=R.useState(null),[d,f]=R.useState(null),[p,g]=R.useState(!1);R.useEffect(()=>{"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(y=>{u(y.coords.latitude),f(y.coords.longitude)},y=>console.warn("Failed to get location for add pin",y))},[]);const E=async y=>{if(y&&y.preventDefault&&y.preventDefault(),!i.trim()||p||!(e!=null&&e.uid))return;const N=l||28.6139,T=d||77.209;g(!0);try{await GL({type:r,name:i.trim(),lat:N,lng:T,address:"Added by user coordinates",addedBy:e.uid}),n(15),tr.success("Location added successfully! (+15 pts)"),t("/app/map")}catch(w){console.error("Error adding location:",w),tr.error("Failed to add location. Please try again."),g(!1)}};return c.jsxs("div",{className:"flex flex-col min-h-dvh bg-white font-display pb-32",children:[c.jsx(Bn,{title:"Add Location",onBack:()=>t(-1)}),c.jsxs("div",{className:"px-5 pt-4",children:[c.jsxs("div",{className:"mb-6",children:[c.jsx("h2",{className:"text-[22px] font-extrabold text-slate-900 mb-1",children:"Help the Community"}),c.jsx("p",{className:"text-slate-500 font-semibold text-sm",children:"Add a new safe washroom or pad machine."})]}),c.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"w-7 h-7 rounded-full bg-primary flex items-center justify-center",children:c.jsx("span",{className:"material-symbols-outlined fill text-white text-[14px]",children:"check"})}),c.jsx("span",{className:"text-xs font-extrabold text-primary",children:"Type"})]}),c.jsx("div",{className:"flex-1 h-0.5 bg-slate-200 rounded-full"}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center ${r?"bg-primary":"bg-slate-200"}`,children:c.jsx("span",{className:"material-symbols-outlined fill text-white text-[14px]",children:"location_on"})}),c.jsx("span",{className:`text-xs font-extrabold ${r?"text-primary":"text-slate-400"}`,children:"Location"})]}),c.jsx("div",{className:"flex-1 h-0.5 bg-slate-200 rounded-full"}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center ${i.trim()?"bg-primary":"bg-slate-200"}`,children:c.jsx("span",{className:"material-symbols-outlined fill text-white text-[14px]",children:"edit"})}),c.jsx("span",{className:`text-xs font-extrabold ${i.trim()?"text-primary":"text-slate-400"}`,children:"Details"})]})]}),c.jsxs("form",{onSubmit:E,className:"space-y-5",children:[c.jsxs("div",{children:[c.jsx("p",{className:"section-label mb-3",children:"What are you adding?"}),c.jsx("div",{className:"grid grid-cols-2 gap-3",children:uV.map(y=>c.jsxs("button",{type:"button",onClick:()=>s(y.id),className:`flex flex-col items-center py-5 px-4 rounded-2xl border-2 transition-all ${r===y.id?"border-primary bg-primary/8 shadow-card":"border-slate-100 bg-slate-50 hover:border-slate-200"}`,children:[c.jsx("span",{className:"text-3xl mb-2",children:y.emoji}),c.jsx("span",{className:`font-extrabold text-sm ${r===y.id?"text-primary":"text-slate-700"}`,children:y.label}),c.jsx("span",{className:"text-xs text-slate-400 font-semibold mt-0.5",children:y.desc}),r===y.id&&c.jsx("span",{className:"material-symbols-outlined fill text-primary text-[18px] mt-2",children:"check_circle"})]},y.id))})]}),c.jsxs("div",{children:[c.jsx("p",{className:"section-label mb-3",children:"Pin Location"}),c.jsxs("div",{className:"relative h-44 rounded-2xl overflow-hidden border border-slate-100 shadow-card",children:[c.jsx("img",{src:"https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600",alt:"Map",className:"w-full h-full object-cover opacity-60"}),c.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:c.jsx("div",{className:"bg-white w-12 h-12 rounded-full shadow-card flex items-center justify-center",children:c.jsx("span",{className:"material-symbols-outlined fill text-primary text-[26px]",children:"location_on"})})}),c.jsx("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full whitespace-nowrap",children:c.jsx("p",{className:"text-xs font-extrabold text-slate-700",children:"Tap to refine location"})})]})]}),c.jsxs("div",{children:[c.jsx("p",{className:"section-label mb-2",children:"Name or landmark"}),c.jsx("div",{className:"notion-card p-4 shadow-card",children:c.jsx("input",{type:"text",required:!0,placeholder:r==="washroom"?"e.g. Metro Station Washroom":"e.g. Pink Toilet Dispenser",value:i,onChange:y=>o(y.target.value),className:"w-full text-[17px] font-extrabold text-slate-800 placeholder:text-slate-300 bg-transparent focus:outline-none"})})]})]})]}),c.jsx("div",{className:"bottom-cta",children:c.jsxs(ka,{color:i.trim()&&!p?"primary":"gray",disabled:!i.trim()||p,type:"submit",onClick:E,children:[c.jsx("span",{className:"material-symbols-outlined fill mr-2",children:p?"refresh":"send"}),p?"Submitting...":"Submit for Review"]})})]})}const hV=["Super Clean","Well Lit","Safe","No Water","Foul Smell","Has Dustbins"];function __(){var M;const t=Te(),e=sr(),{id:n}=Op(),r=((M=e.state)==null?void 0:M.name)||"This Location",{user:s}=kt(),[i,o]=R.useState(0),[l,u]=R.useState(null),[d,f]=R.useState([]),[p,g]=R.useState(""),[E,y]=R.useState(!1),[N,T]=R.useState(""),[w,_]=R.useState(""),I=b=>f(x=>x.includes(b)?x.filter(S=>S!==b):[...x,b]),D=i>0&&!E,P=async()=>{var b;if(D){y(!0),_("");try{const x=(b=Ae.currentUser)==null?void 0:b.uid;if(!x)throw new Error("Not logged in");await tV({locationId:n||"unknown",locationName:r,userId:x,userName:(s==null?void 0:s.name)||"NavHer User",userAvatar:(s==null?void 0:s.avatar)||"🦊",rating:i,safetyRating:l===!0?5:l===!1?1:null,tags:d,comment:p.trim()}),T("Review submitted! +25 points earned 🎉"),setTimeout(()=>t(-1),1800)}catch(x){console.error("Review error:",x),_("Could not submit review. Please try again.")}finally{y(!1)}}};return c.jsxs("div",{className:"flex flex-col min-h-dvh bg-white font-display pb-32",children:[c.jsx(Bn,{title:"Rate & Review",onBack:()=>t(-1)}),c.jsxs("div",{className:"px-5 pt-4 space-y-6",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-extrabold text-slate-900",children:r}),c.jsx("p",{className:"text-slate-400 font-semibold text-sm mt-0.5",children:"Your review helps women find safe spaces"})]}),N&&c.jsx("div",{className:"bg-green-50 border-2 border-green-200 rounded-2xl p-4 text-center",children:c.jsx("p",{className:"font-extrabold text-green-700",children:N})}),w&&c.jsx("div",{className:"bg-red-50 border-2 border-red-200 rounded-2xl p-4 text-center",children:c.jsx("p",{className:"font-bold text-red-600",children:w})}),c.jsxs("div",{children:[c.jsx("p",{className:"section-label mb-3",children:"Overall Experience"}),c.jsx("div",{className:"flex gap-2 justify-center",children:[1,2,3,4,5].map(b=>c.jsx("button",{onClick:()=>o(b),className:"transition-transform active:scale-90",children:c.jsx("span",{className:`material-symbols-outlined text-5xl ${b<=i?"fill text-accent-yellow":"text-slate-200"}`,children:"star"})},b))}),i>0&&c.jsx("p",{className:"text-center text-sm font-extrabold text-accent-yellow mt-2",children:["","Very Bad","Bad","OK","Good","Excellent!"][i]})]}),c.jsxs("div",{children:[c.jsx("p",{className:"section-label mb-3",children:"Did you feel safe?"}),c.jsxs("div",{className:"flex gap-3",children:[c.jsxs("button",{onClick:()=>u(!0),className:`flex-1 py-4 rounded-2xl border-2 font-extrabold text-sm flex items-center justify-center gap-2 transition-all ${l===!0?"border-accent-green bg-accent-green/10 text-accent-green":"border-slate-200 text-slate-600"}`,children:[c.jsx("span",{className:"material-symbols-outlined fill text-[20px]",children:"thumb_up"})," Yes, safe"]}),c.jsxs("button",{onClick:()=>u(!1),className:`flex-1 py-4 rounded-2xl border-2 font-extrabold text-sm flex items-center justify-center gap-2 transition-all ${l===!1?"border-red-400 bg-red-50 text-red-500":"border-slate-200 text-slate-600"}`,children:[c.jsx("span",{className:"material-symbols-outlined fill text-[20px]",children:"thumb_down"})," No"]})]})]}),c.jsxs("div",{children:[c.jsx("p",{className:"section-label mb-3",children:"Quick Tags (optional)"}),c.jsx("div",{className:"flex flex-wrap gap-2",children:hV.map(b=>c.jsx("button",{onClick:()=>I(b),className:`px-4 py-2 rounded-full border font-extrabold text-sm transition-all ${d.includes(b)?"bg-primary text-white border-primary":"bg-white text-slate-600 border-slate-200"}`,children:b},b))})]}),c.jsxs("div",{children:[c.jsx("p",{className:"section-label mb-3",children:"Additional Comments"}),c.jsx("div",{className:"notion-card p-4 shadow-card",children:c.jsx("textarea",{rows:4,placeholder:"Tell others what to expect…",value:p,onChange:b=>g(b.target.value),className:"w-full text-sm font-semibold text-slate-800 placeholder:text-slate-300 bg-transparent focus:outline-none resize-none"})})]})]}),c.jsxs("div",{className:"bottom-cta",children:[c.jsxs("div",{className:"flex items-center justify-center gap-2 mb-3",children:[c.jsx("span",{className:"material-symbols-outlined fill text-accent-yellow text-[18px]",children:"stars"}),c.jsxs("span",{className:"text-xs font-extrabold text-slate-500",children:["Earn ",c.jsx("span",{className:"text-accent-yellow",children:"+25 Points"})," for reviewing!"]})]}),c.jsx(ka,{color:D?"primary":"gray",disabled:!D,onClick:P,children:E?c.jsxs("span",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined animate-spin text-[18px]",children:"progress_activity"})," Submitting…"]}):c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"material-symbols-outlined fill mr-2",children:"check_circle"}),"Submit Review"]})})]})]})}async function r1({userId:t,date:e,type:n,symptoms:r=[],notes:s="",flow:i=""}){const o=await Ws(tt(de,"cycle_logs"),{userId:t,date:e,type:n,symptoms:r,notes:s,flow:i,createdAt:nt()});return await Jm(t,10,"cycle_logged",o.id),{id:o.id}}async function fV(t,e=6){const n=new Date;n.setMonth(n.getMonth()-e);const r=n.toISOString().split("T")[0],s=Zn(tt(de,"cycle_logs"),an("userId","==",t),an("date",">=",r),Ka("date","asc"));return(await Qr(s)).docs.map(o=>({id:o.id,...o.data()}))}function pV(t){const e=t.filter(l=>l.type==="period_start").map(l=>new Date(l.date)).sort((l,u)=>l-u);if(e.length<2)return null;const n=e.slice(-3),r=[];for(let l=1;l<n.length;l++)r.push((n[l]-n[l-1])/(1e3*60*60*24));const s=Math.round(r.reduce((l,u)=>l+u,0)/r.length),i=n[n.length-1],o=new Date(i.getTime()+s*24*60*60*1e3);return{avgCycleLength:s,nextPeriodDate:o.toISOString().split("T")[0],ovulationDate:new Date(i.getTime()+(s-14)*24*60*60*1e3).toISOString().split("T")[0]}}async function w_(t){const e=await fV(t,6),n=pV(e);let r=null,s="unknown";if(n){const i=new Date().toISOString().split("T")[0],o=Math.ceil((new Date(n.nextPeriodDate)-new Date(i))/(1e3*60*60*24));r=o,o<=0?s="period":o<=5?s="pms":n.ovulationDate===i?s="ovulation":o<=10?s="fertile":s="follicular"}return{logs:e,prediction:n,daysUntil:r,phase:s}}const E_={period:{label:"Period Active 🔴",tip:"Stay warm and hydrated. Your body is working hard.",badge:"bg-red-100 text-red-600",color:"border-red-400"},pms:{label:"PMS Phase 🟡",tip:"Be gentle with yourself. PMS can bring mood shifts.",badge:"bg-yellow-100 text-yellow-600",color:"border-yellow-400"},ovulation:{label:"Ovulation Day 💚",tip:"Energy peak! Great day for outdoor activities.",badge:"bg-green-100 text-green-600",color:"border-green-400"},fertile:{label:"Fertile Window 💚",tip:"High-energy days ahead. Stay active!",badge:"bg-teal-100 text-teal-600",color:"border-teal-400"},follicular:{label:"Follicular Phase 🔵",tip:"Energy is rising. Great time to start new things!",badge:"bg-blue-100 text-blue-600",color:"border-blue-400"},unknown:{label:"Log Your Cycle",tip:"Log your period start to get predictions.",badge:"bg-slate-100 text-slate-600",color:"border-slate-200"}};function mV(){const t=Te(),[e,n]=R.useState(null),[r,s]=R.useState(!0),[i,o]=R.useState(!1),[l,u]=R.useState(""),d=new Date,f=d.toLocaleString("default",{month:"long",year:"numeric"}),p=new Date(d.getFullYear(),d.getMonth(),1).getDay(),g=new Date(d.getFullYear(),d.getMonth()+1,0).getDate(),E=d.getDate();R.useEffect(()=>{var M;const P=(M=Ae.currentUser)==null?void 0:M.uid;if(!P){s(!1);return}w_(P).then(n).catch(console.error).finally(()=>s(!1))},[]);const y=async()=>{var P;o(!0),u("");try{const M=(P=Ae.currentUser)==null?void 0:P.uid,b=d.toISOString().split("T")[0];await r1({userId:M,date:b,type:"period_start",flow:"medium"}),u("✅ Period logged! Predictions updated.");const x=await w_(M);n(x)}catch{u("Could not log. Please try again.")}finally{o(!1)}},N=(e==null?void 0:e.phase)||"unknown",T=E_[N]||E_.unknown,w=e==null?void 0:e.prediction,_=e==null?void 0:e.daysUntil,I=new Set;((e==null?void 0:e.logs)||[]).forEach(P=>{if(P.type==="period_start"||P.type==="period_end"){const M=new Date(P.date);M.getMonth()===d.getMonth()&&M.getFullYear()===d.getFullYear()&&I.add(M.getDate())}});const D=[];for(let P=0;P<p;P++)D.push(null);for(let P=1;P<=g;P++)D.push(P);return c.jsxs("div",{className:"flex flex-col min-h-dvh bg-surface-container-low font-body text-on-surface pb-28",children:[c.jsxs("header",{className:"flex items-center justify-between px-6 h-16 w-full fixed top-0 z-50 bg-white border-b-2 border-zinc-100 shadow-sm",children:[c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("button",{onClick:()=>t(-1),className:"w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-50 transition-all text-zinc-500",children:c.jsx("span",{className:"material-symbols-outlined",children:"arrow_back"})}),c.jsx("h1",{className:"font-headline font-extrabold text-[28px] leading-[1.1] text-primary tracking-tighter",children:"Cycle Tracker"})]}),c.jsx("div",{className:"w-10"})]}),c.jsxs("main",{className:"mt-20 px-4 space-y-6",children:[c.jsxs("section",{className:`relative bg-primary-fixed border-t-4 ${T.color} rounded-lg p-5 flex items-start gap-4 shadow-sm overflow-hidden`,children:[c.jsx("div",{className:"flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center border-2 border-primary/20",children:c.jsx("span",{className:"text-3xl",children:"🦊"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:`inline-flex px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-2 ${T.badge}`,children:T.label}),r?c.jsx("p",{className:"text-on-primary-fixed font-bold animate-pulse",children:"Loading your cycle…"}):c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"font-bold text-on-primary-fixed text-[15px] leading-tight",children:T.tip}),_!==null&&_>0&&c.jsxs("p",{className:"text-primary font-extrabold text-sm mt-1",children:["Period due in ",_," day",_!==1?"s":""]})]})]})]}),c.jsxs("section",{className:"bg-white rounded-lg p-6 border-2 border-zinc-100 shadow-sm",children:[c.jsx("div",{className:"flex items-center justify-between mb-6",children:c.jsx("h2",{className:"font-headline font-extrabold text-xl",children:f})}),c.jsx("div",{className:"grid grid-cols-7 mb-4",children:["S","M","T","W","T","F","S"].map((P,M)=>c.jsx("div",{className:"text-center text-[12px] font-bold text-zinc-400 uppercase tracking-widest",children:P},M))}),c.jsx("div",{className:"grid grid-cols-7 gap-y-2",children:D.map((P,M)=>{if(!P)return c.jsx("div",{className:"h-10"},`e${M}`);const b=I.has(P),x=P===E,S=w&&(()=>{const k=new Date(w.nextPeriodDate),C=new Date(d.getFullYear(),d.getMonth(),P),j=Math.floor((C-k)/864e5);return j>=0&&j<=5})();return x?c.jsxs("div",{className:"flex items-center justify-center h-10 relative",children:[c.jsx("div",{className:"absolute inset-0 bg-primary rounded-full scale-75 border-4 border-white shadow-sm"}),c.jsx("span",{className:"relative z-20 text-white font-bold",children:P})]},P):b?c.jsx("div",{className:"flex items-center justify-center h-10 font-bold bg-primary/20 text-primary rounded-full",children:P},P):S?c.jsx("div",{className:"flex items-center justify-center h-10 font-bold bg-primary-fixed/60 text-primary rounded-full",children:P},P):c.jsx("div",{className:`flex items-center justify-center h-10 font-medium ${P<E?"text-zinc-400":""}`,children:P},P)})}),c.jsxs("div",{className:"flex gap-4 mt-4 pt-4 border-t border-zinc-100 justify-center",children:[c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx("div",{className:"w-3 h-3 rounded-full bg-primary"}),c.jsx("span",{className:"text-xs text-zinc-500 font-bold",children:"Today"})]}),c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx("div",{className:"w-3 h-3 rounded-full bg-primary/20"}),c.jsx("span",{className:"text-xs text-zinc-500 font-bold",children:"Logged Period"})]}),c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx("div",{className:"w-3 h-3 rounded-full bg-primary-fixed"}),c.jsx("span",{className:"text-xs text-zinc-500 font-bold",children:"Predicted"})]})]})]}),w&&c.jsxs("section",{className:"bg-white rounded-lg p-6 border-2 border-zinc-100 shadow-sm",children:[c.jsx("h3",{className:"font-headline font-extrabold text-[13px] uppercase tracking-widest text-zinc-400 mb-2",children:"Next Period Prediction"}),c.jsx("p",{className:"text-2xl font-extrabold text-on-surface",children:new Date(w.nextPeriodDate).toLocaleDateString("en-IN",{day:"numeric",month:"short"})}),c.jsx("div",{className:"h-2 w-full bg-surface-container rounded-full overflow-hidden mt-3",children:c.jsx("div",{className:"h-full bg-primary rounded-full",style:{width:`${Math.min(100,Math.max(0,(28-(_||0))/28*100))}%`}})}),c.jsxs("p",{className:"mt-2 text-sm text-zinc-500 font-medium",children:["Avg cycle: ",w.avgCycleLength," days · Ovulation ~",new Date(w.ovulationDate).toLocaleDateString("en-IN",{day:"numeric",month:"short"})]})]}),l&&c.jsx("div",{className:`p-4 rounded-2xl text-center font-bold text-sm border-2 ${l.startsWith("✅")?"bg-green-50 border-green-200 text-green-700":"bg-red-50 border-red-200 text-red-600"}`,children:l}),c.jsxs("section",{className:"grid grid-cols-2 gap-4",children:[c.jsxs("button",{onClick:y,disabled:i,className:"bg-primary text-white font-headline font-extrabold p-5 rounded-lg text-center flex flex-col items-center gap-2 transition-all active:translate-y-1 disabled:opacity-60",style:{boxShadow:"0 4px 0 0 #d33c5e"},children:[c.jsx("span",{className:"material-symbols-outlined text-3xl",children:"water_drop"}),c.jsx("span",{children:i?"Logging…":"Log Period Start"})]}),c.jsxs("button",{onClick:()=>t("/app/log-symptoms"),className:"text-white font-headline font-extrabold p-5 rounded-lg text-center flex flex-col items-center gap-2 transition-all",style:{backgroundColor:"#00C4B4",boxShadow:"0 4px 0 0 #008f83"},children:[c.jsx("span",{className:"material-symbols-outlined text-3xl",children:"edit_note"}),c.jsx("span",{children:"Log Symptoms"})]})]}),c.jsxs("section",{className:"border-2 border-dashed border-zinc-200 rounded-lg p-4 flex items-center gap-4 bg-white",children:[c.jsx("div",{className:"w-10 h-10 flex-shrink-0 bg-white rounded-full border border-zinc-100 flex items-center justify-center shadow-sm",children:c.jsx("span",{className:"text-xl",children:"🦊"})}),c.jsxs("p",{className:"text-[15px] text-on-surface-variant italic leading-snug",children:['"',T.tip,'"']})]}),(N==="pms"||N==="period")&&c.jsxs("button",{onClick:()=>t("/app/emergency"),className:"w-full bg-primary text-white font-headline font-extrabold py-4 rounded-full text-lg flex items-center justify-center gap-2",style:{boxShadow:"0 4px 0 0 #d33c5e"},children:[c.jsx("span",{className:"material-symbols-outlined",children:"shopping_bag"}),"Order Pads Now — 15 min delivery"]})]}),c.jsx(qs,{})]})}const b_=[{id:"blinkit",shortName:"b",bg:"bg-yellow-100 border-yellow-200",text:"text-yellow-700",name:"Blinkit",time:"15 min",price:"₹85",rating:4.8,fastest:!0},{id:"zepto",shortName:"Z",bg:"bg-purple-100 border-purple-200",text:"text-purple-700",name:"Zepto",time:"18 min",price:"₹89",rating:4.7,fastest:!1},{id:"instamart",shortName:"SI",bg:"bg-orange-100 border-orange-200",text:"text-orange-600",name:"Instamart",time:"20 min",price:"₹95",rating:4.6,fastest:!1}];function gV(){const t=Te(),{firebaseUser:e,addFoxPoints:n}=kt(),[r,s]=R.useState("blinkit"),[i,o]=R.useState(""),l=async()=>{if(e!=null&&e.uid)try{o("Redirecting..."),await Ws(tt(de,"orders"),{userId:e.uid,partner:r,status:"initiated",createdAt:nt()}),n(50),setTimeout(()=>{tr.success(`Redirecting to ${b_.find(u=>u.id===r).name} app!`),o(""),t(-1)},1e3)}catch(u){console.error("Failed to track order:",u),tr.error("Order tracking failed. Please try again."),o("")}};return c.jsxs("div",{className:"min-h-dvh bg-surface-container-low font-body text-on-surface pb-32",children:[c.jsx(Bn,{title:"Emergency Pads",onBack:()=>t(-1)}),c.jsxs("main",{className:"max-w-md mx-auto px-5 pt-6 space-y-7",children:[c.jsxs("section",{children:[c.jsx("h2",{className:"text-[30px] font-extrabold leading-tight text-on-surface",children:"Emergency Pads Needed?"}),c.jsxs("p",{className:"text-[15px] text-on-surface-variant leading-relaxed mt-1",children:["Delivered in ",c.jsx("span",{className:"text-primary font-bold",children:"15–20 mins"}),". Your cycle suggests high need today."]})]}),c.jsxs("div",{className:"bg-tertiary-fixed rounded-lg p-4 flex gap-4 items-center border-2 border-tertiary/20",children:[c.jsx("div",{className:"w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shrink-0 border border-tertiary/20",children:"🦊"}),c.jsxs("div",{children:[c.jsx("p",{className:"section-label mb-1",children:"LOOIE'S TIP"}),c.jsx("p",{className:"text-[14px] font-medium text-on-tertiary-container",children:"I've calculated the fastest routes for your current location!"})]})]}),c.jsxs("section",{children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("h3",{className:"section-label",children:"DELIVERY PARTNERS"}),c.jsxs("span",{className:"text-[12px] font-bold text-secondary flex items-center gap-1",children:[c.jsx("span",{className:"material-symbols-outlined text-[14px]",style:{fontVariationSettings:"'FILL' 1"},children:"bolt"}),"FASTEST IN AREA"]})]}),c.jsx("div",{className:"flex gap-4 overflow-x-auto no-scrollbar -mx-5 px-5 pb-3",children:b_.map(u=>c.jsxs("div",{className:`min-w-[220px] bg-white rounded-lg p-5 border-2 shadow-card space-y-4 shrink-0 relative cursor-pointer transition-all ${r===u.id?"border-primary":"border-outline-variant"}`,onClick:()=>s(u.id),children:[u.fastest&&c.jsx("div",{className:"absolute -top-3 -right-2 bg-secondary text-on-secondary text-[11px] font-extrabold px-3 py-1 rounded-full shadow-card",children:"FASTEST"}),r===u.id&&c.jsx("div",{className:"absolute top-3 left-3 w-5 h-5 bg-secondary rounded-full flex items-center justify-center",children:c.jsx("span",{className:"material-symbols-outlined text-white text-[14px]",style:{fontVariationSettings:"'FILL' 1"},children:"check"})}),c.jsxs("div",{className:"flex justify-between items-start pt-2",children:[c.jsx("div",{className:`w-12 h-12 ${u.bg} rounded-lg flex items-center justify-center border ${u.bg.replace("bg-","border-")}`,children:c.jsx("span",{className:`font-black ${u.text} text-xl italic`,children:u.shortName})}),c.jsxs("div",{className:"text-right",children:[c.jsx("div",{className:"text-[20px] font-extrabold text-on-surface",children:u.price}),c.jsxs("div",{className:"flex items-center justify-end text-secondary text-[13px] font-bold",children:[c.jsx("span",{className:"material-symbols-outlined text-[14px]",style:{fontVariationSettings:"'FILL' 1"},children:"star"}),u.rating]})]})]}),c.jsxs("div",{children:[c.jsx("div",{className:"text-[17px] font-extrabold text-on-surface",children:u.name}),c.jsxs("div",{className:`font-bold text-[14px] ${r===u.id?"text-primary":"text-on-surface-variant"}`,children:[u.time," delivery"]})]}),c.jsx(Vs,{color:r===u.id?"primary":"surface",size:"sm",full:!0,onClick:()=>{r===u.id?l():s(u.id)},children:i&&r===u.id?i:r===u.id?"Order Now":"Select"})]},u.id))})]}),c.jsxs("div",{className:"border-2 border-dashed border-secondary/40 bg-secondary-container/20 rounded-lg p-4 flex items-center gap-4",children:[c.jsx("div",{className:"w-10 h-10 bg-secondary-container rounded-full flex items-center justify-center",children:c.jsx("span",{className:"material-symbols-outlined text-on-secondary-container",style:{fontVariationSettings:"'FILL' 1"},children:"redeem"})}),c.jsx("p",{className:"text-[14px] font-semibold text-on-secondary-container",children:"Earn 50 LooPoints for ordering via NavHer"})]}),c.jsx("div",{className:"flex justify-center gap-6",children:[["inventory_2","Discreet packaging"],["location_on","Track in their app"]].map(([u,d])=>c.jsxs("div",{className:"flex items-center gap-2 text-on-surface-variant text-[13px] font-medium",children:[c.jsx("span",{className:"material-symbols-outlined text-[18px]",children:u}),d]},d))})]}),c.jsx("div",{className:"bottom-cta-panel",children:c.jsxs("div",{className:"max-w-md mx-auto space-y-3",children:[c.jsxs(Vs,{color:"blue",size:"lg",full:!0,onClick:()=>{s("blinkit"),l()},children:[c.jsx("span",{className:"material-symbols-outlined",style:{fontVariationSettings:"'FILL' 1"},children:"bolt"}),i||"Pick Fastest for Me"]}),c.jsxs("button",{className:"w-full py-2 text-on-surface-variant text-[14px] font-bold flex items-center justify-center gap-2 hover:text-error transition-colors",children:[c.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"medical_services"}),"Call nearest medical store"]})]})})]})}const T_=[{icon:"card_giftcard",label:"My Rewards",path:"/app/rewards"},{icon:"contact_emergency",label:"Safety Contacts",path:"/app/settings"},{icon:"calendar_month",label:"Cycle Privacy",path:"/app/settings"},{icon:"notifications_active",label:"Notification Settings",path:"/app/notifications"}];function yV(){const t=Te(),{user:e}=kt(),[n,r]=R.useState({locationsAdded:0,reviewsWritten:0,sosesHelped:0,pointsEarned:0});R.useEffect(()=>{var o;const i=(o=Ae.currentUser)==null?void 0:o.uid;i&&$O(i).then(r).catch(console.error)},[]);const s=[{icon:"add_location",bg:"bg-tertiary-fixed",text:"text-tertiary",label:"Locations Added",val:String(n.locationsAdded)},{icon:"rate_review",bg:"bg-secondary-fixed",text:"text-secondary",label:"Reviews",val:String(n.reviewsWritten)},{icon:"emergency_share",bg:"bg-error-container",text:"text-error",label:"SOSes Helped",val:String(n.sosesHelped)},{icon:"toll",bg:"bg-primary-fixed",text:"text-primary",label:"Points Earned",val:String(e.foxPoints??0)}];return c.jsxs("div",{className:"min-h-dvh bg-surface-container-low font-body text-on-surface pb-32",children:[c.jsxs("header",{className:"bg-white fixed top-0 w-full z-50 border-b-2 border-neutral-100 shadow-sm flex items-center justify-between px-5 py-4",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("button",{onClick:()=>t("/app/map"),className:"text-primary hover:bg-rose-50 p-2 rounded-full transition-colors",children:c.jsx("span",{className:"material-symbols-outlined",children:"arrow_back"})}),c.jsx("h1",{className:"font-headline font-extrabold text-[26px] tracking-tight text-primary",children:"Profile"})]}),c.jsx("button",{onClick:()=>t("/app/settings"),className:"text-on-surface-variant p-2 rounded-full hover:bg-surface-container",children:c.jsx("span",{className:"material-symbols-outlined",children:"settings"})})]}),c.jsxs("main",{className:"pt-24 px-5 space-y-6",children:[c.jsxs("section",{className:"flex flex-col items-center text-center space-y-4",children:[c.jsxs("div",{className:"relative",children:[c.jsx("div",{className:"w-32 h-32 rounded-full border-4 border-primary p-1 bg-white flex items-center justify-center text-6xl",children:"🦊"}),c.jsx("div",{className:"absolute bottom-1 right-1 bg-secondary text-white p-1.5 rounded-full border-4 border-white",children:c.jsx("span",{className:"material-symbols-outlined text-[14px]",style:{fontVariationSettings:"'FILL' 1"},children:"verified"})})]}),c.jsxs("div",{children:[c.jsx("h2",{className:"font-extrabold text-2xl tracking-tight text-on-surface",children:"Ananya Sharma"}),c.jsx("p",{className:"text-on-surface-variant font-medium text-[15px]",children:"Member since Oct 2024"})]})]}),c.jsxs("section",{className:"bg-primary rounded-lg p-6 text-white relative overflow-hidden",style:{boxShadow:"0 4px 0 0 #d33c5e"},children:[c.jsx("div",{className:"absolute top-0 left-0 w-full h-1 pointer-events-none",style:{background:"linear-gradient(180deg,rgba(255,255,255,0.3) 0%,rgba(255,255,255,0) 100%)"}}),c.jsxs("div",{className:"flex justify-between items-end mb-4",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-xs font-bold uppercase tracking-widest opacity-90",children:"Current Status"}),c.jsx("h3",{className:"text-xl font-extrabold",children:"Level 12: Pad Guardian"})]}),c.jsx("span",{className:"material-symbols-outlined text-4xl opacity-50",children:"shield_moon"})]}),c.jsxs("div",{className:"space-y-2",children:[c.jsx("div",{className:"h-4 bg-black/20 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-white w-[83%] rounded-full relative",children:c.jsx("div",{className:"absolute top-0 left-0 w-full h-1/2 bg-white/30 rounded-full"})})}),c.jsxs("div",{className:"flex justify-between text-sm font-bold",children:[c.jsx("span",{children:"1,250 XP"}),c.jsx("span",{children:"1,500 XP"})]})]})]}),c.jsx("section",{className:"grid grid-cols-2 gap-4",children:s.map(i=>c.jsxs("div",{className:"bg-white p-5 rounded-lg border-2 border-neutral-100 flex flex-col items-center text-center space-y-2 shadow-card",children:[c.jsx("div",{className:`${i.bg} p-3 rounded-full ${i.text}`,children:c.jsx("span",{className:"material-symbols-outlined text-[22px]",children:i.icon})}),c.jsx("p",{className:"text-2xl font-extrabold text-on-surface",children:i.val}),c.jsx("p",{className:"section-label",children:i.label})]},i.label))}),c.jsxs("section",{className:"bg-tertiary-container/30 border-2 border-dashed border-tertiary rounded-lg p-4 flex items-center gap-4",children:[c.jsx("div",{className:"w-14 h-14 shrink-0 bg-white rounded-full border-2 border-tertiary flex items-center justify-center text-2xl",children:"🦊"}),c.jsx("p",{className:"text-sm font-bold text-on-tertiary-container leading-tight",children:`"You're 2 reviews away from a new badge! Keep it up, Ananya!"`})]}),c.jsxs("section",{className:"bg-white rounded-lg border-2 border-neutral-100 overflow-hidden shadow-card mb-8",children:[T_.map((i,o)=>c.jsxs("button",{onClick:()=>t(i.path),className:`w-full flex items-center justify-between p-5 hover:bg-neutral-50 transition-colors ${o<T_.length-1?"border-b border-neutral-50":""}`,children:[c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("span",{className:"material-symbols-outlined text-primary",children:i.icon}),c.jsx("span",{className:"font-bold text-on-surface",children:i.label})]}),c.jsx("span",{className:"material-symbols-outlined text-neutral-400",children:"chevron_right"})]},i.label)),c.jsxs("button",{onClick:()=>t("/auth/onboarding"),className:"w-full flex items-center justify-between p-5 hover:bg-red-50 transition-colors text-error border-t border-neutral-50",children:[c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("span",{className:"material-symbols-outlined",children:"logout"}),c.jsx("span",{className:"font-bold",children:"Logout"})]}),c.jsx("span",{className:"material-symbols-outlined opacity-50",children:"chevron_right"})]})]})]}),c.jsx(qs,{})]})}function vV(){var y,N;const t=Te(),n=(y=sr().state)==null?void 0:y.sosId,{user:r}=kt(),[s,i]=R.useState([]),[o,l]=R.useState(""),[u,d]=R.useState(!1),f=R.useRef(null);R.useEffect(()=>{if(!n)return;const T=aV(n,i);return()=>T()},[n]),R.useEffect(()=>{var T;(T=f.current)==null||T.scrollIntoView({behavior:"smooth"})},[s]);const p=async()=>{var w;const T=o.trim();if(!(!T||u)){l(""),d(!0);try{const _=(w=Ae.currentUser)==null?void 0:w.uid;await oV({sosId:n,userId:_,userName:(r==null?void 0:r.name)||"Helper",userAvatar:(r==null?void 0:r.avatar)||"🦊",text:T})}catch(_){console.error("Send message error:",_)}finally{d(!1)}}},g=async()=>{var T;n&&(await sV(n,(T=Ae.currentUser)==null?void 0:T.uid),t(-1))},E=(N=Ae.currentUser)==null?void 0:N.uid;return c.jsxs("div",{className:"flex flex-col min-h-dvh bg-surface-container-low font-body text-on-surface",children:[c.jsxs("header",{className:"w-full sticky top-0 z-50 bg-white flex items-center justify-between px-4 h-16 border-b-2 border-zinc-100",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("button",{onClick:()=>t(-1),className:"w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-100",children:c.jsx("span",{className:"material-symbols-outlined text-zinc-500",children:"arrow_back"})}),c.jsxs("div",{children:[c.jsx("h1",{className:"font-headline font-extrabold text-[22px] tracking-tight text-primary",children:"SOS Chat"}),c.jsx("p",{className:"text-xs text-on-surface-variant font-bold",children:"🔴 Live — end-to-end encrypted"})]})]}),c.jsx("button",{onClick:g,className:"px-4 py-2 bg-secondary text-white font-bold rounded-full text-sm",children:"✓ Resolved"})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-4 space-y-3",children:[s.length===0&&c.jsxs("div",{className:"text-center py-12 text-on-surface-variant",children:[c.jsx("div",{className:"text-4xl mb-2",children:"💬"}),c.jsx("p",{className:"font-bold",children:"Chat is live. Helpers will join shortly."})]}),s.map(T=>{const w=T.userId===E;return c.jsxs("div",{className:`flex gap-2 ${w?"flex-row-reverse":"flex-row"}`,children:[c.jsx("div",{className:"w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-sm shrink-0",children:T.userAvatar}),c.jsxs("div",{className:`max-w-[75%] ${w?"items-end":"items-start"} flex flex-col`,children:[c.jsx("p",{className:`text-xs font-bold text-on-surface-variant mb-0.5 ${w?"text-right":""}`,children:w?"You":T.userName}),c.jsx("div",{className:`px-4 py-3 rounded-2xl font-medium ${w?"bg-primary text-white rounded-tr-sm":"bg-white text-on-surface border-2 border-outline-variant rounded-tl-sm"}`,children:T.text})]})]},T.id)}),c.jsx("div",{ref:f})]}),c.jsxs("div",{className:"sticky bottom-0 bg-white border-t-2 border-zinc-100 px-4 py-3 flex items-center gap-3",children:[c.jsx("input",{type:"text",value:o,onChange:T=>l(T.target.value),onKeyDown:T=>T.key==="Enter"&&p(),placeholder:"Type a message…",className:"flex-1 bg-surface-container px-4 py-3 rounded-full text-sm font-medium outline-none border-2 border-transparent focus:border-primary"}),c.jsx("button",{onClick:p,disabled:!o.trim()||u,className:"w-12 h-12 bg-primary rounded-full flex items-center justify-center disabled:opacity-40",children:c.jsx("span",{className:"material-symbols-outlined text-white",children:"send"})})]})]})}const xV=[{icon:"shopping_cart",bg:"bg-surface-container",color:"text-primary",title:"₹50 Blinkit Off",sub:"Grocery delivery",pts:"100 pts"},{icon:"bolt",bg:"bg-tertiary-container",color:"text-tertiary",title:"₹100 Zepto Off",sub:"10-min delivery",pts:"200 pts"},{icon:"medical_services",bg:"bg-secondary-container",color:"text-secondary",title:"Free Sanitary Pad",sub:"Health & Hygiene",pts:"50 pts"}],_V=[{id:"safety_first",icon:"verified_user",bg:"bg-secondary-container",border:"border-secondary",color:"text-secondary",label:"Safety First",reqLevel:1},{id:"reviewer_pro",icon:"rate_review",bg:"bg-tertiary-container",border:"border-tertiary",color:"text-tertiary",label:"Reviewer Pro",reqLevel:2},{id:"first_loo",icon:"location_on",bg:"bg-primary-fixed",border:"border-primary",color:"text-primary",label:"First Loo Added",reqLevel:5},{id:"streak_master",icon:"local_fire_department",bg:"bg-error-container",border:"border-error",color:"text-error",label:"Streak Master",reqLevel:10}];function wV(){const t=Te(),{user:e}=kt(),n=Math.min(100,Math.max(0,e.xp/Math.max(1,e.xpNext)*100));return c.jsxs("div",{className:"flex flex-col min-h-dvh bg-surface-container-low font-body text-on-surface pb-32",children:[c.jsx("header",{className:"fixed top-0 w-full z-50 flex items-center px-4 h-16 bg-white",style:{boxShadow:"0 4px 0 0 #d33c5e"},children:c.jsxs("div",{className:"flex items-center justify-between w-full",children:[c.jsx("span",{onClick:()=>t("/app/map"),className:"material-symbols-outlined text-zinc-500 hover:opacity-80 transition-opacity cursor-pointer",children:"arrow_back"}),c.jsx("h1",{className:"font-headline font-extrabold text-[28px] leading-[1.1] tracking-tight text-primary",children:"Rewards"}),c.jsx("div",{className:"w-6"})]})}),c.jsxs("main",{className:"pt-24 px-4 space-y-6 max-w-md mx-auto w-full",children:[c.jsxs("section",{className:"bg-white rounded-lg p-5 border-2 border-primary/10 shadow-sm relative overflow-hidden",children:[c.jsxs("div",{className:"flex justify-between items-start mb-4",children:[c.jsxs("div",{className:"space-y-1",children:[c.jsx("p",{className:"text-on-surface-variant font-bold text-xs uppercase tracking-widest",children:"Current Status"}),c.jsxs("h2",{className:"text-xl font-extrabold text-on-surface",children:["Level ",e.level,": ",e.levelName]})]}),c.jsx("div",{className:"bg-secondary-container p-2 rounded-full flex items-center justify-center w-12 h-12",children:c.jsx("span",{className:"text-3xl",children:e.avatar||"🦊"})})]}),c.jsxs("div",{className:"space-y-2",children:[c.jsxs("div",{className:"flex justify-between text-sm font-bold text-on-surface-variant",children:[c.jsxs("span",{children:[e.xp," XP"]}),c.jsxs("span",{children:[e.xpNext," XP"]})]}),c.jsx("div",{className:"w-full h-4 bg-surface-container-high rounded-full overflow-hidden relative border border-outline-variant",children:c.jsx("div",{className:"h-full bg-primary rounded-full relative transition-all duration-500",style:{width:`${n}%`},children:c.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-white/30"})})})]}),c.jsxs("div",{className:"mt-4 flex items-center gap-2 text-primary font-bold text-sm",children:[c.jsx("span",{className:"material-symbols-outlined text-sm",style:{fontVariationSettings:"'FILL' 1"},children:"auto_awesome"}),c.jsxs("span",{children:["You're ",Math.max(0,e.xpNext-e.xp)," XP away from Level ",e.level+1,"!"]})]})]}),c.jsxs("section",{className:"grid grid-cols-2 gap-4",children:[c.jsxs("div",{className:"col-span-2 bg-primary text-white p-6 rounded-lg relative overflow-hidden",style:{boxShadow:"0 4px 0 0 #d33c5e"},children:[c.jsx("div",{className:"absolute top-0 left-0 w-full h-8",style:{background:"linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)"}}),c.jsx("div",{className:"absolute top-0 right-0 p-4 opacity-20",children:c.jsx("span",{className:"material-symbols-outlined text-6xl",style:{fontVariationSettings:"'FILL' 1"},children:"monetization_on"})}),c.jsx("p",{className:"font-bold text-white/80 uppercase tracking-widest text-xs mb-1",children:"Your Balance"}),c.jsxs("h3",{className:"text-4xl font-extrabold",children:[e.foxPoints||0," LooPoints"]})]}),c.jsxs("div",{className:"col-span-2 flex items-center justify-between p-4 bg-surface-container rounded-lg border-2 border-dashed border-primary/30 cursor-pointer group",onClick:()=>{},children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("span",{className:"material-symbols-outlined text-primary",children:"stars"}),c.jsx("span",{className:"font-bold text-on-surface",children:"How to earn more points?"})]}),c.jsx("span",{className:"material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform",children:"arrow_forward"})]})]}),c.jsxs("section",{className:"space-y-4",children:[c.jsx("h4",{className:"font-extrabold text-xl text-on-surface",children:"Redeem Vouchers"}),c.jsx("div",{className:"flex flex-col gap-3",children:xV.map(r=>c.jsxs("div",{className:"flex items-center justify-between p-4 bg-white border-2 border-outline-variant rounded-lg active:border-primary transition-colors cursor-pointer",children:[c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("div",{className:`w-12 h-12 ${r.bg} rounded-full flex items-center justify-center ${r.color}`,children:c.jsx("span",{className:"material-symbols-outlined text-2xl",style:{fontVariationSettings:"'FILL' 1"},children:r.icon})}),c.jsxs("div",{children:[c.jsx("p",{className:"font-extrabold text-on-surface",children:r.title}),c.jsx("p",{className:"text-sm text-on-surface-variant font-medium",children:r.sub})]})]}),c.jsx("div",{className:"bg-primary-fixed px-3 py-1 rounded-full text-on-primary-fixed-variant font-bold text-sm whitespace-nowrap",children:r.pts})]},r.title))})]}),c.jsxs("section",{className:"space-y-4",children:[c.jsx("h4",{className:"font-extrabold text-xl text-on-surface",children:"My Badges"}),c.jsx("div",{className:"flex gap-4 overflow-x-auto pb-4",style:{scrollbarWidth:"none",msOverflowStyle:"none"},children:_V.map(r=>{const s=e.badges?!e.badges.includes(r.id):e.level<r.reqLevel;return c.jsxs("div",{className:`flex-shrink-0 flex flex-col items-center gap-2 w-24 ${s?"opacity-40 grayscale":""}`,children:[c.jsxs("div",{className:`w-20 h-20 rounded-full ${s?"bg-surface-container":r.bg} border-2 ${s?"border-outline-variant":r.border} flex items-center justify-center relative overflow-hidden`,children:[c.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)"}}),c.jsx("span",{className:`material-symbols-outlined ${s?"text-on-surface-variant":r.color} text-4xl relative z-10`,style:{fontVariationSettings:s?"'FILL' 0":"'FILL' 1"},children:s?"lock":r.icon})]}),c.jsx("span",{className:"text-[11px] font-bold text-on-surface text-center uppercase tracking-tighter",children:r.label})]},r.label)})})]})]}),c.jsx(qs,{})]})}const I_=["None","Spotting","Light","Medium","Heavy"],EV=["😊","😴","😢","😤","🥰","🤒"],bV=[{icon:"sprint",label:"Cramps"},{icon:"headset_mic",label:"Headache"},{icon:"king_bed",label:"Fatigue"},{icon:"local_dining",label:"Cravings"},{icon:"sentiment_very_dissatisfied",label:"Bloating"},{icon:"water",label:"Back Pain"}];function TV(){const t=Te(),[e,n]=R.useState(2),[r,s]=R.useState(null),[i,o]=R.useState([]),[l,u]=R.useState(3),[d,f]=R.useState(""),[p,g]=R.useState(!1),[E,y]=R.useState(!1),[N,T]=R.useState(""),w=I=>o(D=>D.includes(I)?D.filter(P=>P!==I):[...D,I]),_=async()=>{var I;y(!0),T("");try{const D=(I=Ae.currentUser)==null?void 0:I.uid,P=new Date().toISOString().split("T")[0];await r1({userId:D,date:P,type:"symptom",symptoms:i,flow:I_[e].toLowerCase(),notes:`Pain: ${l}/10. Mood: ${r||"not set"}. ${d}`.trim()}),g(!0)}catch(D){console.error("Log error:",D),T("Could not save log. Please try again.")}finally{y(!1)}};return p?c.jsxs("div",{className:"flex flex-col h-dvh bg-white font-display items-center justify-center px-6 text-center",children:[c.jsx("div",{className:"text-7xl mb-6",children:"🎉"}),c.jsx("h2",{className:"text-2xl font-extrabold text-slate-900 mb-2",children:"Logged!"}),c.jsxs("p",{className:"text-slate-500 font-semibold mb-2",children:[c.jsx("span",{className:"font-extrabold text-accent-green",children:"+10 Points"})," added to your balance"]}),c.jsx("p",{className:"text-xs text-slate-400 font-semibold mb-8",children:"Keep logging daily to maintain your streak 🔥"}),c.jsx(ka,{color:"primary",onClick:()=>t("/app/tracker"),children:"Back to Tracker"})]}):c.jsxs("div",{className:"flex flex-col min-h-dvh bg-white font-display pb-32",children:[c.jsx(Bn,{title:"Log Today",onBack:()=>t(-1)}),c.jsxs("div",{className:"px-5 pt-2 space-y-6",children:[c.jsxs("div",{children:[c.jsx("p",{className:"section-label mb-3",children:"Flow Intensity"}),c.jsx("div",{className:"flex gap-2",children:I_.map((I,D)=>c.jsx("button",{onClick:()=>n(D),className:`flex-1 py-3 rounded-xl text-xs font-extrabold border-2 transition-all ${e===D?"border-primary bg-primary/10 text-primary":"border-slate-100 text-slate-500 bg-slate-50"}`,children:I},I))})]}),c.jsxs("div",{children:[c.jsx("p",{className:"section-label mb-3",children:"Today's Mood"}),c.jsx("div",{className:"flex gap-3 justify-between",children:EV.map((I,D)=>c.jsx("button",{onClick:()=>s(D),className:`flex-1 text-3xl py-3 rounded-xl border-2 transition-all ${r===D?"border-primary bg-primary/8 scale-110":"border-slate-100 bg-slate-50"}`,children:I},D))})]}),c.jsxs("div",{children:[c.jsx("p",{className:"section-label mb-3",children:"Symptoms"}),c.jsx("div",{className:"grid grid-cols-3 gap-2",children:bV.map(I=>c.jsxs("button",{onClick:()=>w(I.label),className:`flex flex-col items-center gap-1.5 py-3 px-2 rounded-2xl border-2 transition-all ${i.includes(I.label)?"border-primary bg-primary/10":"border-slate-100 bg-slate-50"}`,children:[c.jsx("span",{className:`material-symbols-outlined fill text-[22px] ${i.includes(I.label)?"text-primary":"text-slate-400"}`,children:I.icon}),c.jsx("span",{className:`text-[11px] font-extrabold ${i.includes(I.label)?"text-primary":"text-slate-500"}`,children:I.label})]},I.label))})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center justify-between mb-3",children:[c.jsx("p",{className:"section-label",children:"Pain Level"}),c.jsxs("span",{className:"font-extrabold text-primary text-lg",children:[l,"/10"]})]}),c.jsx("input",{type:"range",min:"0",max:"10",step:"1",value:l,onChange:I=>u(Number(I.target.value)),className:"w-full accent-primary"}),c.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400 font-bold mt-1",children:[c.jsx("span",{children:"No Pain"}),c.jsx("span",{children:"Severe"})]})]}),c.jsxs("div",{children:[c.jsx("p",{className:"section-label mb-2",children:"Quick Note"}),c.jsx("div",{className:"notion-card p-4 shadow-card",children:c.jsx("textarea",{rows:3,placeholder:"Anything else to note…",value:d,onChange:I=>f(I.target.value),className:"w-full text-sm font-semibold text-slate-700 placeholder:text-slate-300 bg-transparent focus:outline-none resize-none"})})]})]}),c.jsxs("div",{className:"bottom-cta",children:[N&&c.jsx("p",{className:"text-center text-red-500 font-bold text-sm mb-3",children:N}),c.jsx(ka,{color:"primary",onClick:_,disabled:E,children:E?c.jsxs("span",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined animate-spin text-[18px]",children:"progress_activity"})," Saving…"]}):c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"material-symbols-outlined fill mr-2",children:"check_circle"}),"Save Today's Log"]})})]})]})}const S_={success:"pill-green",danger:"pill-red",warning:"pill-yellow",info:"pill-blue",neutral:"bg-slate-100 text-slate-600 text-xs font-extrabold px-3 py-1 rounded-full"};function IV({type:t="neutral",children:e}){return c.jsx("span",{className:S_[t]||S_.neutral,children:e})}const ch=[{id:"working",label:"Working ✅",sub:"Stock available",badge:"success"},{id:"low",label:"Low Stock ⚠️",sub:"Almost empty",badge:"warning"},{id:"empty",label:"Empty 🚫",sub:"Needs refill",badge:"danger"},{id:"broken",label:"Broken 🔧",sub:"Out of service",badge:"danger"}];function N_(){const t=Te(),{id:e}=Op(),{firebaseUser:n,addFoxPoints:r}=kt(),[s,i]=R.useState(null),[o,l]=R.useState([]),[u,d]=R.useState(!0),[f,p]=R.useState(""),[g,E]=R.useState("working"),[y,N]=R.useState(!1),[T,w]=R.useState(!1);R.useEffect(()=>{async function P(){if(!e){p("No machine ID provided."),d(!1);return}try{d(!0);const M=await Of(e);if(M){i(M);const b=await y_(e);l(b||[]),M.status&&E(M.status)}else p("Machine not found.")}catch(M){console.error("Failed to fetch machine details:",M),p("Failed to load machine details.")}finally{d(!1)}}P()},[e]);const _=async()=>{if(!(!(n!=null&&n.uid)||T)){w(!0);try{await YL(e,g,n.uid),N(!0),r(5),tr.success("Machine status updated successfully!");const P=await Of(e);i(P);const M=await y_(e);l(M||[])}catch(P){console.error("Failed to update status:",P),tr.error("Failed to update status. Please try again.")}finally{w(!1)}}},I=P=>{if(!P)return"Just now";const M=P.toDate?P.toDate():new Date(P),b=Date.now()-M.getTime(),x=Math.floor(b/(1e3*60*60));return x<1?"Just now":x<24?`${x}h ago`:`${Math.floor(x/24)}d ago`};if(u)return c.jsxs("div",{className:"flex flex-col min-h-dvh bg-white font-display pb-32",children:[c.jsx(Bn,{title:"Pad Machine Details",onBack:()=>t(-1)}),c.jsx("div",{className:"flex-1 flex items-center justify-center p-8",children:c.jsxs("div",{className:"animate-pulse flex flex-col items-center gap-4 text-center",children:[c.jsx("span",{className:"text-4xl text-primary",children:"💧"}),c.jsx("p",{className:"text-slate-500 font-bold",children:"Loading machine details..."})]})})]});if(f||!s)return c.jsxs("div",{className:"flex flex-col min-h-dvh bg-white font-display pb-32",children:[c.jsx(Bn,{title:"Pad Machine Details",onBack:()=>t(-1)}),c.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-8 text-center",children:[c.jsx("span",{className:"material-symbols-outlined text-5xl text-red-500 mb-2",children:"error"}),c.jsx("p",{className:"text-slate-700 font-bold",children:f||"Failed to load details"})]})]});const D=ch.find(P=>P.id===s.status)||ch[0];return c.jsxs("div",{className:"flex flex-col min-h-dvh bg-white font-display pb-32",children:[c.jsx(Bn,{title:"Pad Machine Details",onBack:()=>t(-1)}),c.jsxs("div",{className:"px-5 pt-3 space-y-5",children:[c.jsxs("div",{className:"notion-card p-5 shadow-card flex items-center gap-4",children:[c.jsx("div",{className:"w-16 h-16 bg-accent-blue/10 rounded-2xl flex items-center justify-center text-3xl",children:"💧"}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-lg font-extrabold text-slate-800",children:s.name}),c.jsx("p",{className:"text-sm text-slate-500 font-semibold",children:s.address||"Address not available"}),c.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[c.jsx(IV,{type:D.badge,children:D.label.split(" ")[0]}),c.jsx("span",{className:"text-xs text-slate-400 font-bold",children:s.isFree?"Free":"₹10 / pad"})]})]})]}),c.jsxs("div",{children:[c.jsx("p",{className:"section-label mb-3",children:"Update Current Status"}),c.jsx("div",{className:"grid grid-cols-2 gap-2",children:ch.map(P=>c.jsxs("button",{disabled:T,onClick:()=>{E(P.id),N(!1)},className:`p-4 rounded-2xl border-2 text-left transition-all ${g===P.id?"border-primary bg-primary/10":"border-slate-100 bg-slate-50 hover:border-slate-200"} ${T?"opacity-50 cursor-not-allowed":""}`,children:[c.jsx("p",{className:`font-extrabold text-sm mb-0.5 ${g===P.id?"text-primary":"text-slate-700"}`,children:P.label}),c.jsx("p",{className:"text-xs text-slate-400 font-semibold",children:P.sub})]},P.id))}),y?c.jsxs("div",{className:"mt-3 bg-accent-green/10 border border-accent-green/20 rounded-2xl p-4 flex items-center gap-3",children:[c.jsx("span",{className:"material-symbols-outlined fill text-accent-green text-[24px]",children:"check_circle"}),c.jsxs("div",{children:[c.jsx("p",{className:"font-extrabold text-accent-green text-sm",children:"Status Updated!"}),c.jsx("p",{className:"text-xs text-slate-500 font-semibold",children:"+5 pts added to your rewards"})]})]}):c.jsxs("button",{disabled:T,onClick:_,className:`duo-btn w-full font-extrabold py-3.5 rounded-2xl mt-3 flex items-center justify-center gap-2 ${T?"bg-slate-200 text-slate-400":"bg-primary/5 text-primary hover:bg-primary/20"}`,style:{"--btn-shadow-color":T?"rgba(0,0,0,0)":"rgba(255,75,114,0.2)"},children:[T?c.jsx("span",{className:"material-symbols-outlined animate-spin",children:"refresh"}):c.jsx("span",{className:"material-symbols-outlined fill text-[20px]",children:"send"}),T?"Submitting...":"Submit Update (+5 pts)"]})]}),c.jsxs("div",{children:[c.jsx("p",{className:"section-label mb-3",children:"Community Activity"}),c.jsx("div",{className:"space-y-2",children:o.length===0?c.jsxs("div",{className:"p-4 border-2 border-dashed border-slate-200 rounded-2xl text-center",children:[c.jsx("p",{className:"text-sm font-bold text-slate-500",children:"No activity yet."}),c.jsx("p",{className:"text-xs text-slate-400",children:"Be the first to update this machine!"})]}):o.map(P=>c.jsxs("div",{className:"notion-card p-4 flex items-center gap-4 shadow-card",children:[c.jsx("div",{className:"w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-xl",children:"🦊"}),c.jsxs("div",{className:"flex-1",children:[c.jsx("p",{className:"font-extrabold text-slate-700 text-sm",children:"Community Member"}),c.jsx("p",{className:"text-xs text-slate-500 font-semibold",children:P.action||"Updated status"})]}),c.jsx("span",{className:"text-xs text-slate-400 font-bold",children:I(P.createdAt)})]},P.id))})]})]}),c.jsx("div",{className:"bottom-cta",children:c.jsxs(ka,{color:"primary",onClick:()=>{},children:[c.jsx("span",{className:"material-symbols-outlined fill mr-2",children:"navigation"}),"Navigate to Machine"]})})]})}async function SV(t,e=50){const n=Zn(tt(de,"notifications"),an("userId","==",t),Ka("createdAt","desc"),Vm(e));return(await Qr(n)).docs.map(s=>({id:s.id,...s.data()}))}async function NV(t){const e=await Qr(Zn(tt(de,"notifications"),an("userId","==",t),an("read","==",!1))),n=VD(de);e.docs.forEach(r=>n.update(r.ref,{read:!0})),await n.commit()}const AV={sos_nearby:{icon:"sos",color:"bg-primary/10 text-primary"},pad_update:{icon:"water_drop",color:"bg-blue-100 text-blue-500"},points_earned:{icon:"stars",color:"bg-yellow-100 text-yellow-500"},cycle_reminder:{icon:"favorite",color:"bg-green-100 text-green-500"},review_approved:{icon:"rate_review",color:"bg-slate-100 text-slate-500"}};function kV(){const t=Te(),[e,n]=R.useState([]),[r,s]=R.useState(!0);R.useEffect(()=>{var g;const p=(g=Ae.currentUser)==null?void 0:g.uid;if(!p){s(!1);return}SV(p).then(n).catch(console.error).finally(()=>s(!1))},[]);const i=e.filter(p=>!p.read).length,o=async()=>{var g;const p=(g=Ae.currentUser)==null?void 0:g.uid;p&&(await NV(p),n(E=>E.map(y=>({...y,read:!0}))))},l=new Date().toDateString(),u=e.filter(p=>{var g,E,y,N;return((N=(y=(E=(g=p.createdAt)==null?void 0:g.toDate)==null?void 0:E.call(g))==null?void 0:y.toDateString)==null?void 0:N.call(y))===l}),d=e.filter(p=>{var g,E,y,N;return((N=(y=(E=(g=p.createdAt)==null?void 0:g.toDate)==null?void 0:E.call(g))==null?void 0:y.toDateString)==null?void 0:N.call(y))!==l}),f=[...u.length?[{label:"Today",items:u}]:[],...d.length?[{label:"Earlier",items:d}]:[]];return c.jsxs("div",{className:"min-h-dvh bg-surface-container-low font-body text-on-surface pb-32",children:[c.jsx(Bn,{title:"Notifications",onBack:()=>t(-1),children:i>0&&c.jsx("button",{onClick:o,className:"text-xs font-bold text-primary hover:underline",children:"Mark all read"})}),c.jsx("main",{className:"px-5 pt-24 space-y-6",children:r?c.jsxs("div",{className:"flex flex-col items-center py-20 gap-4",children:[c.jsx("div",{className:"text-4xl animate-bounce",children:"🔔"}),c.jsx("p",{className:"font-bold text-on-surface-variant",children:"Loading notifications…"})]}):f.length===0?c.jsxs("div",{className:"flex flex-col items-center py-20 gap-4 text-center",children:[c.jsx("div",{className:"text-5xl",children:"✅"}),c.jsx("p",{className:"font-extrabold text-on-surface text-lg",children:"You're all caught up!"}),c.jsx("p",{className:"text-on-surface-variant text-sm",children:"New alerts from your community will appear here."})]}):f.map(p=>c.jsxs("section",{className:"space-y-3",children:[c.jsx("h2",{className:"section-label px-1",children:p.label}),p.items.map(g=>{const E=AV[g.type]??{icon:"notifications",color:"bg-surface-container text-on-surface"};return c.jsxs("div",{className:`flex items-start gap-4 p-4 rounded-2xl border-2 ${g.read?"bg-white border-outline-variant":"bg-primary-fixed/30 border-primary/30"}`,children:[c.jsx("div",{className:`w-12 h-12 ${E.color} rounded-2xl flex items-center justify-center shrink-0`,children:c.jsx("span",{className:"material-symbols-outlined",style:{fontVariationSettings:"'FILL' 1"},children:E.icon})}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("div",{className:"flex items-start justify-between gap-2",children:[c.jsx("p",{className:"font-extrabold text-on-surface text-sm leading-tight",children:g.title}),!g.read&&c.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-1"})]}),c.jsx("p",{className:"text-xs text-on-surface-variant mt-0.5 line-clamp-2",children:g.body})]})]},g.id)})]},p.label))}),c.jsx(qs,{active:"profile"})]})}const A_=[{title:"Account",rows:[{icon:"person",label:"Edit Profile",sub:"Name, avatar, phone",nav:!0},{icon:"location_on",label:"My Locations",sub:"7 added",nav:!0}]},{title:"Notifications",rows:[{icon:"campaign",label:"SOS Alerts",sub:"Alerts from nearby women",toggle:!0,def:!0},{icon:"water_drop",label:"Pad Machine Updates",sub:"Stock & status changes",toggle:!0,def:!0},{icon:"favorite",label:"Cycle Reminders",sub:"Period & fertile window",toggle:!0,def:!1}]},{title:"Safety",rows:[{icon:"share_location",label:"Share Live Location",sub:"During SOS broadcast",toggle:!0,def:!0},{icon:"contact_emergency",label:"Emergency Contact",sub:"Not set",nav:!0}]},{title:"About",rows:[{icon:"info",label:"About NavHer",sub:"v1.0.0",nav:!0},{icon:"privacy_tip",label:"Privacy Policy",sub:"",nav:!0},{icon:"help",label:"Help & Support",sub:"",nav:!0}]}];function CV({on:t,onToggle:e}){return c.jsx("button",{onClick:e,className:`w-12 h-7 rounded-full transition-all relative shrink-0 ${t?"bg-accent-green":"bg-slate-200"}`,children:c.jsx("div",{className:`absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-all ${t?"right-1":"left-1"}`})})}function RV(){const t=Te(),{clearAuth:e}=kt(),[n,r]=R.useState(Object.fromEntries(A_.flatMap(l=>l.rows.filter(u=>u.toggle).map(u=>[u.label,u.def]))));R.useEffect(()=>{var u;const l=(u=Ae.currentUser)==null?void 0:u.uid;l&&KT(l).then(d=>{d&&r(f=>({...f,"SOS Alerts":d.sosAlertsEnabled??!0,"Pad Machine Updates":d.padUpdatesEnabled??!0,"Cycle Reminders":d.cycleRemindersEnabled??!1,"Share Live Location":d.shareLocationEnabled??!0}))}).catch(console.error)},[]);const s=async l=>{var p;const u=!n[l];r(g=>({...g,[l]:u}));const d=(p=Ae.currentUser)==null?void 0:p.uid;if(!d)return;const f={"SOS Alerts":"sosAlertsEnabled","Pad Machine Updates":"padUpdatesEnabled","Cycle Reminders":"cycleRemindersEnabled","Share Live Location":"shareLocationEnabled"};f[l]&&await UO(d,{[f[l]]:u})},i=async()=>{window.confirm("Are you sure you want to log out?")&&(await u_(),e(),t("/auth/onboarding",{replace:!0}))},o=async()=>{var u;if(!window.confirm("Permanently delete your account? This cannot be undone."))return;const l=(u=Ae.currentUser)==null?void 0:u.uid;l&&await BO(l),await u_(),e(),t("/auth/onboarding",{replace:!0})};return c.jsxs("div",{className:"flex flex-col min-h-dvh bg-white font-display pb-16",children:[c.jsx(Bn,{title:"Settings",onBack:()=>t(-1)}),c.jsxs("div",{className:"px-4 pt-4 space-y-6",children:[A_.map(l=>c.jsxs("div",{children:[c.jsx("p",{className:"section-label mb-2 px-1",children:l.title}),c.jsx("div",{className:"notion-card shadow-card overflow-hidden",children:l.rows.map((u,d)=>c.jsxs("div",{className:`flex items-center gap-4 p-4 ${d<l.rows.length-1?"border-b border-slate-50":""}`,children:[c.jsx("div",{className:"w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0",children:c.jsx("span",{className:"material-symbols-outlined fill text-slate-500 text-[20px]",children:u.icon})}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("p",{className:"font-extrabold text-slate-800 text-sm",children:u.label}),u.sub&&c.jsx("p",{className:"text-xs text-slate-400 font-semibold mt-0.5",children:u.sub})]}),u.toggle?c.jsx(CV,{on:n[u.label],onToggle:()=>s(u.label)}):c.jsx("span",{className:"material-symbols-outlined text-slate-300",children:"chevron_right"})]},u.label))})]},l.title)),c.jsx("div",{className:"notion-card shadow-card overflow-hidden",children:c.jsxs("button",{onClick:i,className:"w-full flex items-center gap-4 p-4 text-left",children:[c.jsx("div",{className:"w-10 h-10 rounded-2xl bg-primary-fixed flex items-center justify-center",children:c.jsx("span",{className:"material-symbols-outlined text-primary text-[20px]",children:"logout"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("p",{className:"font-extrabold text-primary text-sm",children:"Log Out"}),c.jsx("p",{className:"text-xs text-slate-400 font-semibold",children:"Sign out of your account"})]}),c.jsx("span",{className:"material-symbols-outlined text-slate-300",children:"chevron_right"})]})}),c.jsx("div",{className:"notion-card shadow-card overflow-hidden border border-red-50",children:c.jsxs("button",{onClick:o,className:"w-full flex items-center gap-4 p-4 text-left",children:[c.jsx("div",{className:"w-10 h-10 rounded-2xl bg-red-100 flex items-center justify-center",children:c.jsx("span",{className:"material-symbols-outlined fill text-red-500 text-[20px]",children:"delete_forever"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("p",{className:"font-extrabold text-red-500 text-sm",children:"Delete Account"}),c.jsx("p",{className:"text-xs text-slate-400 font-semibold",children:"This action cannot be undone"})]})]})}),c.jsx("div",{className:"text-center pb-8",children:c.jsx("p",{className:"text-xs text-slate-300 font-bold",children:"NavHer v1.0.0 · Made with 💗 for women"})})]})]})}function He({children:t}){const{isAuthenticated:e,isLoading:n}=kt();return n?c.jsx("div",{className:"min-h-dvh flex items-center justify-center bg-surface-container-low",children:c.jsxs("div",{className:"flex flex-col items-center gap-4",children:[c.jsx("div",{className:"text-6xl animate-bounce",children:"🦊"}),c.jsx("p",{className:"font-bold text-primary text-lg",children:"NavHer is loading…"})]})}):e?t:c.jsx(sf,{to:"/auth/onboarding",replace:!0})}function PV(){const{setAuth:t,clearAuth:e,setUser:n,setLoading:r}=kt();return R.useEffect(()=>{const s=GO(async i=>{var o,l,u,d,f;if(i){t(i);try{const p=await MO(i.uid);p&&n({name:p.name??"",phone:p.phone??"",avatar:p.avatar??"🦊",foxPoints:((o=p.rewards)==null?void 0:o.totalPoints)??0,level:((l=p.rewards)==null?void 0:l.currentLevel)??1,levelName:((u=p.rewards)==null?void 0:u.levelName)??"Navigator",xp:((d=p.rewards)==null?void 0:d.xpCurrent)??0,xpNext:((f=p.rewards)==null?void 0:f.xpNextLevel)??100})}catch(p){console.error("Failed to load user profile:",p),toast.error("Could not sync full user profile. Some features may be limited.")}}else e()});return()=>s()},[]),c.jsxs(oA,{children:[c.jsx($L,{position:"top-center",reverseOrder:!1}),c.jsxs(ZN,{children:[c.jsx(pe,{path:"/",element:c.jsx(sf,{to:"/auth/onboarding",replace:!0})}),c.jsx(pe,{path:"/auth/onboarding",element:c.jsx(ZO,{})}),c.jsx(pe,{path:"/auth/login",element:c.jsx(zL,{})}),c.jsx(pe,{path:"/auth/verify",element:c.jsx(BL,{})}),c.jsx(pe,{path:"/auth/setup",element:c.jsx(WL,{})}),c.jsx(pe,{path:"/app/map",element:c.jsx(He,{children:c.jsx(XL,{})})}),c.jsx(pe,{path:"/app/list",element:c.jsx(He,{children:c.jsx(eV,{})})}),c.jsx(pe,{path:"/app/details/:id",element:c.jsx(He,{children:c.jsx(v_,{})})}),c.jsx(pe,{path:"/app/details",element:c.jsx(He,{children:c.jsx(v_,{})})}),c.jsx(pe,{path:"/app/sos",element:c.jsx(He,{children:c.jsx(cV,{})})}),c.jsx(pe,{path:"/app/add",element:c.jsx(He,{children:c.jsx(dV,{})})}),c.jsx(pe,{path:"/app/rate/:id",element:c.jsx(He,{children:c.jsx(__,{})})}),c.jsx(pe,{path:"/app/rate",element:c.jsx(He,{children:c.jsx(__,{})})}),c.jsx(pe,{path:"/app/tracker",element:c.jsx(He,{children:c.jsx(mV,{})})}),c.jsx(pe,{path:"/app/emergency",element:c.jsx(He,{children:c.jsx(gV,{})})}),c.jsx(pe,{path:"/app/profile",element:c.jsx(He,{children:c.jsx(yV,{})})}),c.jsx(pe,{path:"/app/sos-chat",element:c.jsx(He,{children:c.jsx(vV,{})})}),c.jsx(pe,{path:"/app/rewards",element:c.jsx(He,{children:c.jsx(wV,{})})}),c.jsx(pe,{path:"/app/log-symptoms",element:c.jsx(He,{children:c.jsx(TV,{})})}),c.jsx(pe,{path:"/app/pad-machine/:id",element:c.jsx(He,{children:c.jsx(N_,{})})}),c.jsx(pe,{path:"/app/pad-machine",element:c.jsx(He,{children:c.jsx(N_,{})})}),c.jsx(pe,{path:"/app/notifications",element:c.jsx(He,{children:c.jsx(kV,{})})}),c.jsx(pe,{path:"/app/settings",element:c.jsx(He,{children:c.jsx(RV,{})})}),c.jsx(pe,{path:"*",element:c.jsx(sf,{to:"/auth/onboarding",replace:!0})})]})]})}uh.createRoot(document.getElementById("root")).render(c.jsx(ti.StrictMode,{children:c.jsx(PV,{})}));
