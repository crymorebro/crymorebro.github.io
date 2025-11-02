(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Tn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const H={},Qe=[],Se=()=>{},Di=()=>!1,Gt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Dn=e=>e.startsWith("onUpdate:"),se=Object.assign,On=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ns=Object.prototype.hasOwnProperty,V=(e,t)=>Ns.call(e,t),I=Array.isArray,ke=e=>Kt(e)==="[object Map]",Oi=e=>Kt(e)==="[object Set]",P=e=>typeof e=="function",Z=e=>typeof e=="string",ze=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",Ui=e=>(J(e)||P(e))&&P(e.then)&&P(e.catch),Ri=Object.prototype.toString,Kt=e=>Ri.call(e),zs=e=>Kt(e).slice(8,-1),Ii=e=>Kt(e)==="[object Object]",Un=e=>Z(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,dt=Tn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wt=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Vs=/-\w/g,Ne=Wt(e=>e.replace(Vs,t=>t.slice(1).toUpperCase())),js=/\B([A-Z])/g,Ye=Wt(e=>e.replace(js,"-$1").toLowerCase()),Pi=Wt(e=>e.charAt(0).toUpperCase()+e.slice(1)),nn=Wt(e=>e?`on${Pi(e)}`:""),Ge=(e,t)=>!Object.is(e,t),It=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ni=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},mn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ti;const Yt=()=>ti||(ti=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rn(e){if(I(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=Z(i)?qs(i):Rn(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Z(e)||J(e))return e}const $s=/;(?![^(]*\))/g,Bs=/:([^]+)/,Hs=/\/\*[^]*?\*\//g;function qs(e){const t={};return e.replace(Hs,"").split($s).forEach(n=>{if(n){const i=n.split(Bs);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function In(e){let t="";if(Z(e))t=e;else if(I(e))for(let n=0;n<e.length;n++){const i=In(e[n]);i&&(t+=i+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Gs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ks=Tn(Gs);function zi(e){return!!e||e===""}const Vi=e=>!!(e&&e.__v_isRef===!0),ji=e=>Z(e)?e:e==null?"":I(e)||J(e)&&(e.toString===Ri||!P(e.toString))?Vi(e)?ji(e.value):JSON.stringify(e,$i,2):String(e),$i=(e,t)=>Vi(t)?$i(e,t.value):ke(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,s],r)=>(n[sn(i,r)+" =>"]=s,n),{})}:Oi(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>sn(n))}:ze(t)?sn(t):J(t)&&!I(t)&&!Ii(t)?String(t):t,sn=(e,t="")=>{var n;return ze(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let le;class Ws{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=le,!t&&le&&(this.index=(le.scopes||(le.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=le;try{return le=this,t()}finally{le=n}}}on(){++this._on===1&&(this.prevScope=le,le=this)}off(){this._on>0&&--this._on===0&&(le=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ys(){return le}let K;const rn=new WeakSet;class Bi{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,le&&le.active&&le.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,rn.has(this)&&(rn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ni(this),Gi(this);const t=K,n=he;K=this,he=!0;try{return this.fn()}finally{Ki(this),K=t,he=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)zn(t);this.deps=this.depsTail=void 0,ni(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?rn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vn(this)&&this.run()}get dirty(){return vn(this)}}let Hi=0,ht,pt;function qi(e,t=!1){if(e.flags|=8,t){e.next=pt,pt=e;return}e.next=ht,ht=e}function Pn(){Hi++}function Nn(){if(--Hi>0)return;if(pt){let t=pt;for(pt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;ht;){let t=ht;for(ht=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function Gi(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ki(e){let t,n=e.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),zn(i),Js(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}e.deps=t,e.depsTail=n}function vn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Wi(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Wi(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===xt)||(e.globalVersion=xt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!vn(e))))return;e.flags|=2;const t=e.dep,n=K,i=he;K=e,he=!0;try{Gi(e);const s=e.fn(e._value);(t.version===0||Ge(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{K=n,he=i,Ki(e),e.flags&=-3}}function zn(e,t=!1){const{dep:n,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)zn(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Js(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let he=!0;const Yi=[];function Te(){Yi.push(he),he=!1}function De(){const e=Yi.pop();he=e===void 0?!0:e}function ni(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=K;K=void 0;try{t()}finally{K=n}}}let xt=0;class Xs{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ji{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!K||!he||K===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==K)n=this.activeLink=new Xs(K,this),K.deps?(n.prevDep=K.depsTail,K.depsTail.nextDep=n,K.depsTail=n):K.deps=K.depsTail=n,Xi(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=K.depsTail,n.nextDep=void 0,K.depsTail.nextDep=n,K.depsTail=n,K.deps===n&&(K.deps=i)}return n}trigger(t){this.version++,xt++,this.notify(t)}notify(t){Pn();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Nn()}}}function Xi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Xi(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const yn=new WeakMap,Ke=Symbol(""),xn=Symbol(""),_t=Symbol("");function Q(e,t,n){if(he&&K){let i=yn.get(e);i||yn.set(e,i=new Map);let s=i.get(n);s||(i.set(n,s=new Ji),s.map=i,s.key=n),s.track()}}function Ee(e,t,n,i,s,r){const l=yn.get(e);if(!l){xt++;return}const o=h=>{h&&h.trigger()};if(Pn(),t==="clear")l.forEach(o);else{const h=I(e),f=h&&Un(n);if(h&&n==="length"){const u=Number(i);l.forEach((a,d)=>{(d==="length"||d===_t||!ze(d)&&d>=u)&&o(a)})}else switch((n!==void 0||l.has(void 0))&&o(l.get(n)),f&&o(l.get(_t)),t){case"add":h?f&&o(l.get("length")):(o(l.get(Ke)),ke(e)&&o(l.get(xn)));break;case"delete":h||(o(l.get(Ke)),ke(e)&&o(l.get(xn)));break;case"set":ke(e)&&o(l.get(Ke));break}}Nn()}function Je(e){const t=$(e);return t===e?t:(Q(t,"iterate",_t),we(e)?t:t.map(ue))}function Vn(e){return Q(e=$(e),"iterate",_t),e}const Zs={__proto__:null,[Symbol.iterator](){return on(this,Symbol.iterator,ue)},concat(...e){return Je(this).concat(...e.map(t=>I(t)?Je(t):t))},entries(){return on(this,"entries",e=>(e[1]=ue(e[1]),e))},every(e,t){return Le(this,"every",e,t,void 0,arguments)},filter(e,t){return Le(this,"filter",e,t,n=>n.map(ue),arguments)},find(e,t){return Le(this,"find",e,t,ue,arguments)},findIndex(e,t){return Le(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Le(this,"findLast",e,t,ue,arguments)},findLastIndex(e,t){return Le(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Le(this,"forEach",e,t,void 0,arguments)},includes(...e){return ln(this,"includes",e)},indexOf(...e){return ln(this,"indexOf",e)},join(e){return Je(this).join(e)},lastIndexOf(...e){return ln(this,"lastIndexOf",e)},map(e,t){return Le(this,"map",e,t,void 0,arguments)},pop(){return ct(this,"pop")},push(...e){return ct(this,"push",e)},reduce(e,...t){return ii(this,"reduce",e,t)},reduceRight(e,...t){return ii(this,"reduceRight",e,t)},shift(){return ct(this,"shift")},some(e,t){return Le(this,"some",e,t,void 0,arguments)},splice(...e){return ct(this,"splice",e)},toReversed(){return Je(this).toReversed()},toSorted(e){return Je(this).toSorted(e)},toSpliced(...e){return Je(this).toSpliced(...e)},unshift(...e){return ct(this,"unshift",e)},values(){return on(this,"values",ue)}};function on(e,t,n){const i=Vn(e),s=i[t]();return i!==e&&!we(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const Qs=Array.prototype;function Le(e,t,n,i,s,r){const l=Vn(e),o=l!==e&&!we(e),h=l[t];if(h!==Qs[t]){const a=h.apply(e,r);return o?ue(a):a}let f=n;l!==e&&(o?f=function(a,d){return n.call(this,ue(a),d,e)}:n.length>2&&(f=function(a,d){return n.call(this,a,d,e)}));const u=h.call(l,f,i);return o&&s?s(u):u}function ii(e,t,n,i){const s=Vn(e);let r=n;return s!==e&&(we(e)?n.length>3&&(r=function(l,o,h){return n.call(this,l,o,h,e)}):r=function(l,o,h){return n.call(this,l,ue(o),h,e)}),s[t](r,...i)}function ln(e,t,n){const i=$(e);Q(i,"iterate",_t);const s=i[t](...n);return(s===-1||s===!1)&&Hn(n[0])?(n[0]=$(n[0]),i[t](...n)):s}function ct(e,t,n=[]){Te(),Pn();const i=$(e)[t].apply(e,n);return Nn(),De(),i}const ks=Tn("__proto__,__v_isRef,__isVue"),Zi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ze));function er(e){ze(e)||(e=String(e));const t=$(this);return Q(t,"has",e),t.hasOwnProperty(e)}class Qi{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?ur:ns:r?ts:es).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const l=I(t);if(!s){let h;if(l&&(h=Zs[n]))return h;if(n==="hasOwnProperty")return er}const o=Reflect.get(t,n,ie(t)?t:i);if((ze(n)?Zi.has(n):ks(n))||(s||Q(t,"get",n),r))return o;if(ie(o)){const h=l&&Un(n)?o:o.value;return s&&J(h)?Sn(h):h}return J(o)?s?Sn(o):$n(o):o}}class ki extends Qi{constructor(t=!1){super(!1,t)}set(t,n,i,s){let r=t[n];if(!this._isShallow){const h=nt(r);if(!we(i)&&!nt(i)&&(r=$(r),i=$(i)),!I(t)&&ie(r)&&!ie(i))return h||(r.value=i),!0}const l=I(t)&&Un(n)?Number(n)<t.length:V(t,n),o=Reflect.set(t,n,i,ie(t)?t:s);return t===$(s)&&(l?Ge(i,r)&&Ee(t,"set",n,i):Ee(t,"add",n,i)),o}deleteProperty(t,n){const i=V(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&i&&Ee(t,"delete",n,void 0),s}has(t,n){const i=Reflect.has(t,n);return(!ze(n)||!Zi.has(n))&&Q(t,"has",n),i}ownKeys(t){return Q(t,"iterate",I(t)?"length":Ke),Reflect.ownKeys(t)}}class tr extends Qi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const nr=new ki,ir=new tr,sr=new ki(!0);const _n=e=>e,Ot=e=>Reflect.getPrototypeOf(e);function rr(e,t,n){return function(...i){const s=this.__v_raw,r=$(s),l=ke(r),o=e==="entries"||e===Symbol.iterator&&l,h=e==="keys"&&l,f=s[e](...i),u=n?_n:t?wn:ue;return!t&&Q(r,"iterate",h?xn:Ke),{next(){const{value:a,done:d}=f.next();return d?{value:a,done:d}:{value:o?[u(a[0]),u(a[1])]:u(a),done:d}},[Symbol.iterator](){return this}}}}function Ut(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function or(e,t){const n={get(s){const r=this.__v_raw,l=$(r),o=$(s);e||(Ge(s,o)&&Q(l,"get",s),Q(l,"get",o));const{has:h}=Ot(l),f=t?_n:e?wn:ue;if(h.call(l,s))return f(r.get(s));if(h.call(l,o))return f(r.get(o));r!==l&&r.get(s)},get size(){const s=this.__v_raw;return!e&&Q($(s),"iterate",Ke),s.size},has(s){const r=this.__v_raw,l=$(r),o=$(s);return e||(Ge(s,o)&&Q(l,"has",s),Q(l,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const l=this,o=l.__v_raw,h=$(o),f=t?_n:e?wn:ue;return!e&&Q(h,"iterate",Ke),o.forEach((u,a)=>s.call(r,f(u),f(a),l))}};return se(n,e?{add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear")}:{add(s){!t&&!we(s)&&!nt(s)&&(s=$(s));const r=$(this);return Ot(r).has.call(r,s)||(r.add(s),Ee(r,"add",s,s)),this},set(s,r){!t&&!we(r)&&!nt(r)&&(r=$(r));const l=$(this),{has:o,get:h}=Ot(l);let f=o.call(l,s);f||(s=$(s),f=o.call(l,s));const u=h.call(l,s);return l.set(s,r),f?Ge(r,u)&&Ee(l,"set",s,r):Ee(l,"add",s,r),this},delete(s){const r=$(this),{has:l,get:o}=Ot(r);let h=l.call(r,s);h||(s=$(s),h=l.call(r,s)),o&&o.call(r,s);const f=r.delete(s);return h&&Ee(r,"delete",s,void 0),f},clear(){const s=$(this),r=s.size!==0,l=s.clear();return r&&Ee(s,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=rr(s,e,t)}),n}function jn(e,t){const n=or(e,t);return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(V(n,s)&&s in i?n:i,s,r)}const lr={get:jn(!1,!1)},ar={get:jn(!1,!0)},cr={get:jn(!0,!1)};const es=new WeakMap,ts=new WeakMap,ns=new WeakMap,ur=new WeakMap;function fr(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dr(e){return e.__v_skip||!Object.isExtensible(e)?0:fr(zs(e))}function $n(e){return nt(e)?e:Bn(e,!1,nr,lr,es)}function hr(e){return Bn(e,!1,sr,ar,ts)}function Sn(e){return Bn(e,!0,ir,cr,ns)}function Bn(e,t,n,i,s){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=dr(e);if(r===0)return e;const l=s.get(e);if(l)return l;const o=new Proxy(e,r===2?i:n);return s.set(e,o),o}function bt(e){return nt(e)?bt(e.__v_raw):!!(e&&e.__v_isReactive)}function nt(e){return!!(e&&e.__v_isReadonly)}function we(e){return!!(e&&e.__v_isShallow)}function Hn(e){return e?!!e.__v_raw:!1}function $(e){const t=e&&e.__v_raw;return t?$(t):e}function pr(e){return!V(e,"__v_skip")&&Object.isExtensible(e)&&Ni(e,"__v_skip",!0),e}const ue=e=>J(e)?$n(e):e,wn=e=>J(e)?Sn(e):e;function ie(e){return e?e.__v_isRef===!0:!1}function br(e){return ie(e)?e.value:e}const gr={get:(e,t,n)=>t==="__v_raw"?e:br(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return ie(s)&&!ie(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function is(e){return bt(e)?e:new Proxy(e,gr)}class mr{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ji(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&K!==this)return qi(this,!0),!0}get value(){const t=this.dep.track();return Wi(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function vr(e,t,n=!1){let i,s;return P(e)?i=e:(i=e.get,s=e.set),new mr(i,s,n)}const Rt={},Vt=new WeakMap;let qe;function yr(e,t=!1,n=qe){if(n){let i=Vt.get(n);i||Vt.set(n,i=[]),i.push(e)}}function xr(e,t,n=H){const{immediate:i,deep:s,once:r,scheduler:l,augmentJob:o,call:h}=n,f=T=>s?T:we(T)||s===!1||s===0?Fe(T,1):Fe(T);let u,a,d,g,w=!1,A=!1;if(ie(e)?(a=()=>e.value,w=we(e)):bt(e)?(a=()=>f(e),w=!0):I(e)?(A=!0,w=e.some(T=>bt(T)||we(T)),a=()=>e.map(T=>{if(ie(T))return T.value;if(bt(T))return f(T);if(P(T))return h?h(T,2):T()})):P(e)?t?a=h?()=>h(e,2):e:a=()=>{if(d){Te();try{d()}finally{De()}}const T=qe;qe=u;try{return h?h(e,3,[g]):e(g)}finally{qe=T}}:a=Se,t&&s){const T=a,W=s===!0?1/0:s;a=()=>Fe(T(),W)}const B=Ys(),E=()=>{u.stop(),B&&B.active&&On(B.effects,u)};if(r&&t){const T=t;t=(...W)=>{T(...W),E()}}let U=A?new Array(e.length).fill(Rt):Rt;const N=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(t){const W=u.run();if(s||w||(A?W.some((Ue,pe)=>Ge(Ue,U[pe])):Ge(W,U))){d&&d();const Ue=qe;qe=u;try{const pe=[W,U===Rt?void 0:A&&U[0]===Rt?[]:U,g];U=W,h?h(t,3,pe):t(...pe)}finally{qe=Ue}}}else u.run()};return o&&o(N),u=new Bi(a),u.scheduler=l?()=>l(N,!1):N,g=T=>yr(T,!1,u),d=u.onStop=()=>{const T=Vt.get(u);if(T){if(h)h(T,4);else for(const W of T)W();Vt.delete(u)}},t?i?N(!0):U=u.run():l?l(N.bind(null,!0),!0):u.run(),E.pause=u.pause.bind(u),E.resume=u.resume.bind(u),E.stop=E,E}function Fe(e,t=1/0,n){if(t<=0||!J(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ie(e))Fe(e.value,t,n);else if(I(e))for(let i=0;i<e.length;i++)Fe(e[i],t,n);else if(Oi(e)||ke(e))e.forEach(i=>{Fe(i,t,n)});else if(Ii(e)){for(const i in e)Fe(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Fe(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lt(e,t,n,i){try{return i?e(...i):e()}catch(s){Jt(s,t,n)}}function Ce(e,t,n,i){if(P(e)){const s=Lt(e,t,n,i);return s&&Ui(s)&&s.catch(r=>{Jt(r,t,n)}),s}if(I(e)){const s=[];for(let r=0;r<e.length;r++)s.push(Ce(e[r],t,n,i));return s}}function Jt(e,t,n,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||H;if(t){let o=t.parent;const h=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const u=o.ec;if(u){for(let a=0;a<u.length;a++)if(u[a](e,h,f)===!1)return}o=o.parent}if(r){Te(),Lt(r,null,10,[e,h,f]),De();return}}_r(e,n,s,i,l)}function _r(e,t,n,i=!0,s=!1){if(s)throw e;console.error(e)}const te=[];let xe=-1;const et=[];let Ie=null,Xe=0;const ss=Promise.resolve();let jt=null;function Sr(e){const t=jt||ss;return e?t.then(this?e.bind(this):e):t}function wr(e){let t=xe+1,n=te.length;for(;t<n;){const i=t+n>>>1,s=te[i],r=St(s);r<e||r===e&&s.flags&2?t=i+1:n=i}return t}function qn(e){if(!(e.flags&1)){const t=St(e),n=te[te.length-1];!n||!(e.flags&2)&&t>=St(n)?te.push(e):te.splice(wr(t),0,e),e.flags|=1,rs()}}function rs(){jt||(jt=ss.then(ls))}function Cr(e){I(e)?et.push(...e):Ie&&e.id===-1?Ie.splice(Xe+1,0,e):e.flags&1||(et.push(e),e.flags|=1),rs()}function si(e,t,n=xe+1){for(;n<te.length;n++){const i=te[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;te.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function os(e){if(et.length){const t=[...new Set(et)].sort((n,i)=>St(n)-St(i));if(et.length=0,Ie){Ie.push(...t);return}for(Ie=t,Xe=0;Xe<Ie.length;Xe++){const n=Ie[Xe];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ie=null,Xe=0}}const St=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ls(e){try{for(xe=0;xe<te.length;xe++){const t=te[xe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Lt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;xe<te.length;xe++){const t=te[xe];t&&(t.flags&=-2)}xe=-1,te.length=0,os(),jt=null,(te.length||et.length)&&ls()}}let de=null,as=null;function $t(e){const t=de;return de=e,as=e&&e.type.__scopeId||null,t}function Lr(e,t=de,n){if(!t||e._n)return e;const i=(...s)=>{i._d&&pi(-1);const r=$t(t);let l;try{l=e(...s)}finally{$t(r),i._d&&pi(1)}return l};return i._n=!0,i._c=!0,i._d=!0,i}function an(e,t){if(de===null)return e;const n=kt(de),i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[r,l,o,h=H]=t[s];r&&(P(r)&&(r={mounted:r,updated:r}),r.deep&&Fe(l),i.push({dir:r,instance:n,value:l,oldValue:void 0,arg:o,modifiers:h}))}return e}function Be(e,t,n,i){const s=e.dirs,r=t&&t.dirs;for(let l=0;l<s.length;l++){const o=s[l];r&&(o.oldValue=r[l].value);let h=o.dir[i];h&&(Te(),Ce(h,n,8,[e.el,o,e,t]),De())}}const Ar=Symbol("_vte"),Mr=e=>e.__isTeleport,Er=Symbol("_leaveCb");function Gn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Gn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function cs(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Bt=new WeakMap;function gt(e,t,n,i,s=!1){if(I(e)){e.forEach((w,A)=>gt(w,t&&(I(t)?t[A]:t),n,i,s));return}if(mt(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&gt(e,t,n,i.component.subTree);return}const r=i.shapeFlag&4?kt(i.component):i.el,l=s?null:r,{i:o,r:h}=e,f=t&&t.r,u=o.refs===H?o.refs={}:o.refs,a=o.setupState,d=$(a),g=a===H?Di:w=>V(d,w);if(f!=null&&f!==h){if(ri(t),Z(f))u[f]=null,g(f)&&(a[f]=null);else if(ie(f)){f.value=null;const w=t;w.k&&(u[w.k]=null)}}if(P(h))Lt(h,o,12,[l,u]);else{const w=Z(h),A=ie(h);if(w||A){const B=()=>{if(e.f){const E=w?g(h)?a[h]:u[h]:h.value;if(s)I(E)&&On(E,r);else if(I(E))E.includes(r)||E.push(r);else if(w)u[h]=[r],g(h)&&(a[h]=u[h]);else{const U=[r];h.value=U,e.k&&(u[e.k]=U)}}else w?(u[h]=l,g(h)&&(a[h]=l)):A&&(h.value=l,e.k&&(u[e.k]=l))};if(l){const E=()=>{B(),Bt.delete(e)};E.id=-1,Bt.set(e,E),ce(E,n)}else ri(e),B()}}}function ri(e){const t=Bt.get(e);t&&(t.flags|=8,Bt.delete(e))}Yt().requestIdleCallback;Yt().cancelIdleCallback;const mt=e=>!!e.type.__asyncLoader,us=e=>e.type.__isKeepAlive;function Fr(e,t){fs(e,"a",t)}function Tr(e,t){fs(e,"da",t)}function fs(e,t,n=ne){const i=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Xt(t,i,n),n){let s=n.parent;for(;s&&s.parent;)us(s.parent.vnode)&&Dr(i,t,n,s),s=s.parent}}function Dr(e,t,n,i){const s=Xt(t,e,i,!0);ds(()=>{On(i[t],s)},n)}function Xt(e,t,n=ne,i=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...l)=>{Te();const o=At(n),h=Ce(t,n,e,l);return o(),De(),h});return i?s.unshift(r):s.push(r),r}}const Oe=e=>(t,n=ne)=>{(!Ct||e==="sp")&&Xt(e,(...i)=>t(...i),n)},Or=Oe("bm"),Ur=Oe("m"),Rr=Oe("bu"),Ir=Oe("u"),Pr=Oe("bum"),ds=Oe("um"),Nr=Oe("sp"),zr=Oe("rtg"),Vr=Oe("rtc");function jr(e,t=ne){Xt("ec",e,t)}const $r=Symbol.for("v-ndc"),Cn=e=>e?Os(e)?kt(e):Cn(e.parent):null,vt=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Cn(e.parent),$root:e=>Cn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ps(e),$forceUpdate:e=>e.f||(e.f=()=>{qn(e.update)}),$nextTick:e=>e.n||(e.n=Sr.bind(e.proxy)),$watch:e=>co.bind(e)}),cn=(e,t)=>e!==H&&!e.__isScriptSetup&&V(e,t),Br={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:l,type:o,appContext:h}=e;let f;if(t[0]!=="$"){const g=l[t];if(g!==void 0)switch(g){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(cn(i,t))return l[t]=1,i[t];if(s!==H&&V(s,t))return l[t]=2,s[t];if((f=e.propsOptions[0])&&V(f,t))return l[t]=3,r[t];if(n!==H&&V(n,t))return l[t]=4,n[t];Ln&&(l[t]=0)}}const u=vt[t];let a,d;if(u)return t==="$attrs"&&Q(e.attrs,"get",""),u(e);if((a=o.__cssModules)&&(a=a[t]))return a;if(n!==H&&V(n,t))return l[t]=4,n[t];if(d=h.config.globalProperties,V(d,t))return d[t]},set({_:e},t,n){const{data:i,setupState:s,ctx:r}=e;return cn(s,t)?(s[t]=n,!0):i!==H&&V(i,t)?(i[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:r,type:l}},o){let h,f;return!!(n[o]||e!==H&&o[0]!=="$"&&V(e,o)||cn(t,o)||(h=r[0])&&V(h,o)||V(i,o)||V(vt,o)||V(s.config.globalProperties,o)||(f=l.__cssModules)&&f[o])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function oi(e){return I(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ln=!0;function Hr(e){const t=ps(e),n=e.proxy,i=e.ctx;Ln=!1,t.beforeCreate&&li(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:l,watch:o,provide:h,inject:f,created:u,beforeMount:a,mounted:d,beforeUpdate:g,updated:w,activated:A,deactivated:B,beforeDestroy:E,beforeUnmount:U,destroyed:N,unmounted:T,render:W,renderTracked:Ue,renderTriggered:pe,errorCaptured:Re,serverPrefetch:Mt,expose:Ve,inheritAttrs:rt,components:Et,directives:Ft,filters:en}=t;if(f&&qr(f,i,null),l)for(const Y in l){const q=l[Y];P(q)&&(i[Y]=q.bind(n))}if(s){const Y=s.call(n,n);J(Y)&&(e.data=$n(Y))}if(Ln=!0,r)for(const Y in r){const q=r[Y],je=P(q)?q.bind(n,n):P(q.get)?q.get.bind(n,n):Se,Tt=!P(q)&&P(q.set)?q.set.bind(n):Se,$e=Po({get:je,set:Tt});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>$e.value,set:be=>$e.value=be})}if(o)for(const Y in o)hs(o[Y],i,n,Y);if(h){const Y=P(h)?h.call(n):h;Reflect.ownKeys(Y).forEach(q=>{Xr(q,Y[q])})}u&&li(u,e,"c");function k(Y,q){I(q)?q.forEach(je=>Y(je.bind(n))):q&&Y(q.bind(n))}if(k(Or,a),k(Ur,d),k(Rr,g),k(Ir,w),k(Fr,A),k(Tr,B),k(jr,Re),k(Vr,Ue),k(zr,pe),k(Pr,U),k(ds,T),k(Nr,Mt),I(Ve))if(Ve.length){const Y=e.exposed||(e.exposed={});Ve.forEach(q=>{Object.defineProperty(Y,q,{get:()=>n[q],set:je=>n[q]=je,enumerable:!0})})}else e.exposed||(e.exposed={});W&&e.render===Se&&(e.render=W),rt!=null&&(e.inheritAttrs=rt),Et&&(e.components=Et),Ft&&(e.directives=Ft),Mt&&cs(e)}function qr(e,t,n=Se){I(e)&&(e=An(e));for(const i in e){const s=e[i];let r;J(s)?"default"in s?r=Pt(s.from||i,s.default,!0):r=Pt(s.from||i):r=Pt(s),ie(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:l=>r.value=l}):t[i]=r}}function li(e,t,n){Ce(I(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function hs(e,t,n,i){let s=i.includes(".")?Ms(n,i):()=>n[i];if(Z(e)){const r=t[e];P(r)&&fn(s,r)}else if(P(e))fn(s,e.bind(n));else if(J(e))if(I(e))e.forEach(r=>hs(r,t,n,i));else{const r=P(e.handler)?e.handler.bind(n):t[e.handler];P(r)&&fn(s,r,e)}}function ps(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:l}}=e.appContext,o=r.get(t);let h;return o?h=o:!s.length&&!n&&!i?h=t:(h={},s.length&&s.forEach(f=>Ht(h,f,l,!0)),Ht(h,t,l)),J(t)&&r.set(t,h),h}function Ht(e,t,n,i=!1){const{mixins:s,extends:r}=t;r&&Ht(e,r,n,!0),s&&s.forEach(l=>Ht(e,l,n,!0));for(const l in t)if(!(i&&l==="expose")){const o=Gr[l]||n&&n[l];e[l]=o?o(e[l],t[l]):t[l]}return e}const Gr={data:ai,props:ci,emits:ci,methods:ft,computed:ft,beforeCreate:ee,created:ee,beforeMount:ee,mounted:ee,beforeUpdate:ee,updated:ee,beforeDestroy:ee,beforeUnmount:ee,destroyed:ee,unmounted:ee,activated:ee,deactivated:ee,errorCaptured:ee,serverPrefetch:ee,components:ft,directives:ft,watch:Wr,provide:ai,inject:Kr};function ai(e,t){return t?e?function(){return se(P(e)?e.call(this,this):e,P(t)?t.call(this,this):t)}:t:e}function Kr(e,t){return ft(An(e),An(t))}function An(e){if(I(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ee(e,t){return e?[...new Set([].concat(e,t))]:t}function ft(e,t){return e?se(Object.create(null),e,t):t}function ci(e,t){return e?I(e)&&I(t)?[...new Set([...e,...t])]:se(Object.create(null),oi(e),oi(t??{})):t}function Wr(e,t){if(!e)return t;if(!t)return e;const n=se(Object.create(null),e);for(const i in t)n[i]=ee(e[i],t[i]);return n}function bs(){return{app:null,config:{isNativeTag:Di,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yr=0;function Jr(e,t){return function(i,s=null){P(i)||(i=se({},i)),s!=null&&!J(s)&&(s=null);const r=bs(),l=new WeakSet,o=[];let h=!1;const f=r.app={_uid:Yr++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:No,get config(){return r.config},set config(u){},use(u,...a){return l.has(u)||(u&&P(u.install)?(l.add(u),u.install(f,...a)):P(u)&&(l.add(u),u(f,...a))),f},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),f},component(u,a){return a?(r.components[u]=a,f):r.components[u]},directive(u,a){return a?(r.directives[u]=a,f):r.directives[u]},mount(u,a,d){if(!h){const g=f._ceVNode||We(i,s);return g.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),e(g,u,d),h=!0,f._container=u,u.__vue_app__=f,kt(g.component)}},onUnmount(u){o.push(u)},unmount(){h&&(Ce(o,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(u,a){return r.provides[u]=a,f},runWithContext(u){const a=tt;tt=f;try{return u()}finally{tt=a}}};return f}}let tt=null;function Xr(e,t){if(ne){let n=ne.provides;const i=ne.parent&&ne.parent.provides;i===n&&(n=ne.provides=Object.create(i)),n[e]=t}}function Pt(e,t,n=!1){const i=To();if(i||tt){let s=tt?tt._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&P(t)?t.call(i&&i.proxy):t}}const gs={},ms=()=>Object.create(gs),vs=e=>Object.getPrototypeOf(e)===gs;function Zr(e,t,n,i=!1){const s={},r=ms();e.propsDefaults=Object.create(null),ys(e,t,s,r);for(const l in e.propsOptions[0])l in s||(s[l]=void 0);n?e.props=i?s:hr(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Qr(e,t,n,i){const{props:s,attrs:r,vnode:{patchFlag:l}}=e,o=$(s),[h]=e.propsOptions;let f=!1;if((i||l>0)&&!(l&16)){if(l&8){const u=e.vnode.dynamicProps;for(let a=0;a<u.length;a++){let d=u[a];if(Zt(e.emitsOptions,d))continue;const g=t[d];if(h)if(V(r,d))g!==r[d]&&(r[d]=g,f=!0);else{const w=Ne(d);s[w]=Mn(h,o,w,g,e,!1)}else g!==r[d]&&(r[d]=g,f=!0)}}}else{ys(e,t,s,r)&&(f=!0);let u;for(const a in o)(!t||!V(t,a)&&((u=Ye(a))===a||!V(t,u)))&&(h?n&&(n[a]!==void 0||n[u]!==void 0)&&(s[a]=Mn(h,o,a,void 0,e,!0)):delete s[a]);if(r!==o)for(const a in r)(!t||!V(t,a))&&(delete r[a],f=!0)}f&&Ee(e.attrs,"set","")}function ys(e,t,n,i){const[s,r]=e.propsOptions;let l=!1,o;if(t)for(let h in t){if(dt(h))continue;const f=t[h];let u;s&&V(s,u=Ne(h))?!r||!r.includes(u)?n[u]=f:(o||(o={}))[u]=f:Zt(e.emitsOptions,h)||(!(h in i)||f!==i[h])&&(i[h]=f,l=!0)}if(r){const h=$(n),f=o||H;for(let u=0;u<r.length;u++){const a=r[u];n[a]=Mn(s,h,a,f[a],e,!V(f,a))}}return l}function Mn(e,t,n,i,s,r){const l=e[n];if(l!=null){const o=V(l,"default");if(o&&i===void 0){const h=l.default;if(l.type!==Function&&!l.skipFactory&&P(h)){const{propsDefaults:f}=s;if(n in f)i=f[n];else{const u=At(s);i=f[n]=h.call(null,t),u()}}else i=h;s.ce&&s.ce._setProp(n,i)}l[0]&&(r&&!o?i=!1:l[1]&&(i===""||i===Ye(n))&&(i=!0))}return i}const kr=new WeakMap;function xs(e,t,n=!1){const i=n?kr:t.propsCache,s=i.get(e);if(s)return s;const r=e.props,l={},o=[];let h=!1;if(!P(e)){const u=a=>{h=!0;const[d,g]=xs(a,t,!0);se(l,d),g&&o.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!h)return J(e)&&i.set(e,Qe),Qe;if(I(r))for(let u=0;u<r.length;u++){const a=Ne(r[u]);ui(a)&&(l[a]=H)}else if(r)for(const u in r){const a=Ne(u);if(ui(a)){const d=r[u],g=l[a]=I(d)||P(d)?{type:d}:se({},d),w=g.type;let A=!1,B=!0;if(I(w))for(let E=0;E<w.length;++E){const U=w[E],N=P(U)&&U.name;if(N==="Boolean"){A=!0;break}else N==="String"&&(B=!1)}else A=P(w)&&w.name==="Boolean";g[0]=A,g[1]=B,(A||V(g,"default"))&&o.push(a)}}const f=[l,o];return J(e)&&i.set(e,f),f}function ui(e){return e[0]!=="$"&&!dt(e)}const Kn=e=>e==="_"||e==="_ctx"||e==="$stable",Wn=e=>I(e)?e.map(_e):[_e(e)],eo=(e,t,n)=>{if(t._n)return t;const i=Lr((...s)=>Wn(t(...s)),n);return i._c=!1,i},_s=(e,t,n)=>{const i=e._ctx;for(const s in e){if(Kn(s))continue;const r=e[s];if(P(r))t[s]=eo(s,r,i);else if(r!=null){const l=Wn(r);t[s]=()=>l}}},Ss=(e,t)=>{const n=Wn(t);e.slots.default=()=>n},ws=(e,t,n)=>{for(const i in t)(n||!Kn(i))&&(e[i]=t[i])},to=(e,t,n)=>{const i=e.slots=ms();if(e.vnode.shapeFlag&32){const s=t._;s?(ws(i,t,n),n&&Ni(i,"_",s,!0)):_s(t,i)}else t&&Ss(e,t)},no=(e,t,n)=>{const{vnode:i,slots:s}=e;let r=!0,l=H;if(i.shapeFlag&32){const o=t._;o?n&&o===1?r=!1:ws(s,t,n):(r=!t.$stable,_s(t,s)),l=t}else t&&(Ss(e,t),l={default:1});if(r)for(const o in s)!Kn(o)&&l[o]==null&&delete s[o]},ce=vo;function io(e){return so(e)}function so(e,t){const n=Yt();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:l,createText:o,createComment:h,setText:f,setElementText:u,parentNode:a,nextSibling:d,setScopeId:g=Se,insertStaticContent:w}=e,A=(c,p,b,y=null,m=null,v=null,C=void 0,S=null,_=!!p.dynamicChildren)=>{if(c===p)return;c&&!ut(c,p)&&(y=Dt(c),be(c,m,v,!0),c=null),p.patchFlag===-2&&(_=!1,p.dynamicChildren=null);const{type:x,ref:F,shapeFlag:L}=p;switch(x){case Qt:B(c,p,b,y);break;case it:E(c,p,b,y);break;case dn:c==null&&U(p,b,y,C);break;case Me:Et(c,p,b,y,m,v,C,S,_);break;default:L&1?W(c,p,b,y,m,v,C,S,_):L&6?Ft(c,p,b,y,m,v,C,S,_):(L&64||L&128)&&x.process(c,p,b,y,m,v,C,S,_,lt)}F!=null&&m?gt(F,c&&c.ref,v,p||c,!p):F==null&&c&&c.ref!=null&&gt(c.ref,null,v,c,!0)},B=(c,p,b,y)=>{if(c==null)i(p.el=o(p.children),b,y);else{const m=p.el=c.el;p.children!==c.children&&f(m,p.children)}},E=(c,p,b,y)=>{c==null?i(p.el=h(p.children||""),b,y):p.el=c.el},U=(c,p,b,y)=>{[c.el,c.anchor]=w(c.children,p,b,y,c.el,c.anchor)},N=({el:c,anchor:p},b,y)=>{let m;for(;c&&c!==p;)m=d(c),i(c,b,y),c=m;i(p,b,y)},T=({el:c,anchor:p})=>{let b;for(;c&&c!==p;)b=d(c),s(c),c=b;s(p)},W=(c,p,b,y,m,v,C,S,_)=>{p.type==="svg"?C="svg":p.type==="math"&&(C="mathml"),c==null?Ue(p,b,y,m,v,C,S,_):Mt(c,p,m,v,C,S,_)},Ue=(c,p,b,y,m,v,C,S)=>{let _,x;const{props:F,shapeFlag:L,transition:M,dirs:R}=c;if(_=c.el=l(c.type,v,F&&F.is,F),L&8?u(_,c.children):L&16&&Re(c.children,_,null,y,m,un(c,v),C,S),R&&Be(c,null,y,"created"),pe(_,c,c.scopeId,C,y),F){for(const G in F)G!=="value"&&!dt(G)&&r(_,G,null,F[G],v,y);"value"in F&&r(_,"value",null,F.value,v),(x=F.onVnodeBeforeMount)&&ye(x,y,c)}R&&Be(c,null,y,"beforeMount");const z=ro(m,M);z&&M.beforeEnter(_),i(_,p,b),((x=F&&F.onVnodeMounted)||z||R)&&ce(()=>{x&&ye(x,y,c),z&&M.enter(_),R&&Be(c,null,y,"mounted")},m)},pe=(c,p,b,y,m)=>{if(b&&g(c,b),y)for(let v=0;v<y.length;v++)g(c,y[v]);if(m){let v=m.subTree;if(p===v||Fs(v.type)&&(v.ssContent===p||v.ssFallback===p)){const C=m.vnode;pe(c,C,C.scopeId,C.slotScopeIds,m.parent)}}},Re=(c,p,b,y,m,v,C,S,_=0)=>{for(let x=_;x<c.length;x++){const F=c[x]=S?Pe(c[x]):_e(c[x]);A(null,F,p,b,y,m,v,C,S)}},Mt=(c,p,b,y,m,v,C)=>{const S=p.el=c.el;let{patchFlag:_,dynamicChildren:x,dirs:F}=p;_|=c.patchFlag&16;const L=c.props||H,M=p.props||H;let R;if(b&&He(b,!1),(R=M.onVnodeBeforeUpdate)&&ye(R,b,p,c),F&&Be(p,c,b,"beforeUpdate"),b&&He(b,!0),(L.innerHTML&&M.innerHTML==null||L.textContent&&M.textContent==null)&&u(S,""),x?Ve(c.dynamicChildren,x,S,b,y,un(p,m),v):C||q(c,p,S,null,b,y,un(p,m),v,!1),_>0){if(_&16)rt(S,L,M,b,m);else if(_&2&&L.class!==M.class&&r(S,"class",null,M.class,m),_&4&&r(S,"style",L.style,M.style,m),_&8){const z=p.dynamicProps;for(let G=0;G<z.length;G++){const j=z[G],re=L[j],oe=M[j];(oe!==re||j==="value")&&r(S,j,re,oe,m,b)}}_&1&&c.children!==p.children&&u(S,p.children)}else!C&&x==null&&rt(S,L,M,b,m);((R=M.onVnodeUpdated)||F)&&ce(()=>{R&&ye(R,b,p,c),F&&Be(p,c,b,"updated")},y)},Ve=(c,p,b,y,m,v,C)=>{for(let S=0;S<p.length;S++){const _=c[S],x=p[S],F=_.el&&(_.type===Me||!ut(_,x)||_.shapeFlag&198)?a(_.el):b;A(_,x,F,null,y,m,v,C,!0)}},rt=(c,p,b,y,m)=>{if(p!==b){if(p!==H)for(const v in p)!dt(v)&&!(v in b)&&r(c,v,p[v],null,m,y);for(const v in b){if(dt(v))continue;const C=b[v],S=p[v];C!==S&&v!=="value"&&r(c,v,S,C,m,y)}"value"in b&&r(c,"value",p.value,b.value,m)}},Et=(c,p,b,y,m,v,C,S,_)=>{const x=p.el=c?c.el:o(""),F=p.anchor=c?c.anchor:o("");let{patchFlag:L,dynamicChildren:M,slotScopeIds:R}=p;R&&(S=S?S.concat(R):R),c==null?(i(x,b,y),i(F,b,y),Re(p.children||[],b,F,m,v,C,S,_)):L>0&&L&64&&M&&c.dynamicChildren?(Ve(c.dynamicChildren,M,b,m,v,C,S),(p.key!=null||m&&p===m.subTree)&&Cs(c,p,!0)):q(c,p,b,F,m,v,C,S,_)},Ft=(c,p,b,y,m,v,C,S,_)=>{p.slotScopeIds=S,c==null?p.shapeFlag&512?m.ctx.activate(p,b,y,C,_):en(p,b,y,m,v,C,_):Jn(c,p,_)},en=(c,p,b,y,m,v,C)=>{const S=c.component=Fo(c,y,m);if(us(c)&&(S.ctx.renderer=lt),Do(S,!1,C),S.asyncDep){if(m&&m.registerDep(S,k,C),!c.el){const _=S.subTree=We(it);E(null,_,p,b),c.placeholder=_.el}}else k(S,c,p,b,m,v,C)},Jn=(c,p,b)=>{const y=p.component=c.component;if(go(c,p,b))if(y.asyncDep&&!y.asyncResolved){Y(y,p,b);return}else y.next=p,y.update();else p.el=c.el,y.vnode=p},k=(c,p,b,y,m,v,C)=>{const S=()=>{if(c.isMounted){let{next:L,bu:M,u:R,parent:z,vnode:G}=c;{const me=Ls(c);if(me){L&&(L.el=G.el,Y(c,L,C)),me.asyncDep.then(()=>{c.isUnmounted||S()});return}}let j=L,re;He(c,!1),L?(L.el=G.el,Y(c,L,C)):L=G,M&&It(M),(re=L.props&&L.props.onVnodeBeforeUpdate)&&ye(re,z,L,G),He(c,!0);const oe=di(c),ge=c.subTree;c.subTree=oe,A(ge,oe,a(ge.el),Dt(ge),c,m,v),L.el=oe.el,j===null&&mo(c,oe.el),R&&ce(R,m),(re=L.props&&L.props.onVnodeUpdated)&&ce(()=>ye(re,z,L,G),m)}else{let L;const{el:M,props:R}=p,{bm:z,m:G,parent:j,root:re,type:oe}=c,ge=mt(p);He(c,!1),z&&It(z),!ge&&(L=R&&R.onVnodeBeforeMount)&&ye(L,j,p),He(c,!0);{re.ce&&re.ce._def.shadowRoot!==!1&&re.ce._injectChildStyle(oe);const me=c.subTree=di(c);A(null,me,b,y,c,m,v),p.el=me.el}if(G&&ce(G,m),!ge&&(L=R&&R.onVnodeMounted)){const me=p;ce(()=>ye(L,j,me),m)}(p.shapeFlag&256||j&&mt(j.vnode)&&j.vnode.shapeFlag&256)&&c.a&&ce(c.a,m),c.isMounted=!0,p=b=y=null}};c.scope.on();const _=c.effect=new Bi(S);c.scope.off();const x=c.update=_.run.bind(_),F=c.job=_.runIfDirty.bind(_);F.i=c,F.id=c.uid,_.scheduler=()=>qn(F),He(c,!0),x()},Y=(c,p,b)=>{p.component=c;const y=c.vnode.props;c.vnode=p,c.next=null,Qr(c,p.props,y,b),no(c,p.children,b),Te(),si(c),De()},q=(c,p,b,y,m,v,C,S,_=!1)=>{const x=c&&c.children,F=c?c.shapeFlag:0,L=p.children,{patchFlag:M,shapeFlag:R}=p;if(M>0){if(M&128){Tt(x,L,b,y,m,v,C,S,_);return}else if(M&256){je(x,L,b,y,m,v,C,S,_);return}}R&8?(F&16&&ot(x,m,v),L!==x&&u(b,L)):F&16?R&16?Tt(x,L,b,y,m,v,C,S,_):ot(x,m,v,!0):(F&8&&u(b,""),R&16&&Re(L,b,y,m,v,C,S,_))},je=(c,p,b,y,m,v,C,S,_)=>{c=c||Qe,p=p||Qe;const x=c.length,F=p.length,L=Math.min(x,F);let M;for(M=0;M<L;M++){const R=p[M]=_?Pe(p[M]):_e(p[M]);A(c[M],R,b,null,m,v,C,S,_)}x>F?ot(c,m,v,!0,!1,L):Re(p,b,y,m,v,C,S,_,L)},Tt=(c,p,b,y,m,v,C,S,_)=>{let x=0;const F=p.length;let L=c.length-1,M=F-1;for(;x<=L&&x<=M;){const R=c[x],z=p[x]=_?Pe(p[x]):_e(p[x]);if(ut(R,z))A(R,z,b,null,m,v,C,S,_);else break;x++}for(;x<=L&&x<=M;){const R=c[L],z=p[M]=_?Pe(p[M]):_e(p[M]);if(ut(R,z))A(R,z,b,null,m,v,C,S,_);else break;L--,M--}if(x>L){if(x<=M){const R=M+1,z=R<F?p[R].el:y;for(;x<=M;)A(null,p[x]=_?Pe(p[x]):_e(p[x]),b,z,m,v,C,S,_),x++}}else if(x>M)for(;x<=L;)be(c[x],m,v,!0),x++;else{const R=x,z=x,G=new Map;for(x=z;x<=M;x++){const ae=p[x]=_?Pe(p[x]):_e(p[x]);ae.key!=null&&G.set(ae.key,x)}let j,re=0;const oe=M-z+1;let ge=!1,me=0;const at=new Array(oe);for(x=0;x<oe;x++)at[x]=0;for(x=R;x<=L;x++){const ae=c[x];if(re>=oe){be(ae,m,v,!0);continue}let ve;if(ae.key!=null)ve=G.get(ae.key);else for(j=z;j<=M;j++)if(at[j-z]===0&&ut(ae,p[j])){ve=j;break}ve===void 0?be(ae,m,v,!0):(at[ve-z]=x+1,ve>=me?me=ve:ge=!0,A(ae,p[ve],b,null,m,v,C,S,_),re++)}const Qn=ge?oo(at):Qe;for(j=Qn.length-1,x=oe-1;x>=0;x--){const ae=z+x,ve=p[ae],kn=p[ae+1],ei=ae+1<F?kn.el||kn.placeholder:y;at[x]===0?A(null,ve,b,ei,m,v,C,S,_):ge&&(j<0||x!==Qn[j]?$e(ve,b,ei,2):j--)}}},$e=(c,p,b,y,m=null)=>{const{el:v,type:C,transition:S,children:_,shapeFlag:x}=c;if(x&6){$e(c.component.subTree,p,b,y);return}if(x&128){c.suspense.move(p,b,y);return}if(x&64){C.move(c,p,b,lt);return}if(C===Me){i(v,p,b);for(let L=0;L<_.length;L++)$e(_[L],p,b,y);i(c.anchor,p,b);return}if(C===dn){N(c,p,b);return}if(y!==2&&x&1&&S)if(y===0)S.beforeEnter(v),i(v,p,b),ce(()=>S.enter(v),m);else{const{leave:L,delayLeave:M,afterLeave:R}=S,z=()=>{c.ctx.isUnmounted?s(v):i(v,p,b)},G=()=>{v._isLeaving&&v[Er](!0),L(v,()=>{z(),R&&R()})};M?M(v,z,G):G()}else i(v,p,b)},be=(c,p,b,y=!1,m=!1)=>{const{type:v,props:C,ref:S,children:_,dynamicChildren:x,shapeFlag:F,patchFlag:L,dirs:M,cacheIndex:R}=c;if(L===-2&&(m=!1),S!=null&&(Te(),gt(S,null,b,c,!0),De()),R!=null&&(p.renderCache[R]=void 0),F&256){p.ctx.deactivate(c);return}const z=F&1&&M,G=!mt(c);let j;if(G&&(j=C&&C.onVnodeBeforeUnmount)&&ye(j,p,c),F&6)Ps(c.component,b,y);else{if(F&128){c.suspense.unmount(b,y);return}z&&Be(c,null,p,"beforeUnmount"),F&64?c.type.remove(c,p,b,lt,y):x&&!x.hasOnce&&(v!==Me||L>0&&L&64)?ot(x,p,b,!1,!0):(v===Me&&L&384||!m&&F&16)&&ot(_,p,b),y&&Xn(c)}(G&&(j=C&&C.onVnodeUnmounted)||z)&&ce(()=>{j&&ye(j,p,c),z&&Be(c,null,p,"unmounted")},b)},Xn=c=>{const{type:p,el:b,anchor:y,transition:m}=c;if(p===Me){Is(b,y);return}if(p===dn){T(c);return}const v=()=>{s(b),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(c.shapeFlag&1&&m&&!m.persisted){const{leave:C,delayLeave:S}=m,_=()=>C(b,v);S?S(c.el,v,_):_()}else v()},Is=(c,p)=>{let b;for(;c!==p;)b=d(c),s(c),c=b;s(p)},Ps=(c,p,b)=>{const{bum:y,scope:m,job:v,subTree:C,um:S,m:_,a:x}=c;fi(_),fi(x),y&&It(y),m.stop(),v&&(v.flags|=8,be(C,c,p,b)),S&&ce(S,p),ce(()=>{c.isUnmounted=!0},p)},ot=(c,p,b,y=!1,m=!1,v=0)=>{for(let C=v;C<c.length;C++)be(c[C],p,b,y,m)},Dt=c=>{if(c.shapeFlag&6)return Dt(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const p=d(c.anchor||c.el),b=p&&p[Ar];return b?d(b):p};let tn=!1;const Zn=(c,p,b)=>{c==null?p._vnode&&be(p._vnode,null,null,!0):A(p._vnode||null,c,p,null,null,null,b),p._vnode=c,tn||(tn=!0,si(),os(),tn=!1)},lt={p:A,um:be,m:$e,r:Xn,mt:en,mc:Re,pc:q,pbc:Ve,n:Dt,o:e};return{render:Zn,hydrate:void 0,createApp:Jr(Zn)}}function un({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function He({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ro(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Cs(e,t,n=!1){const i=e.children,s=t.children;if(I(i)&&I(s))for(let r=0;r<i.length;r++){const l=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Pe(s[r]),o.el=l.el),!n&&o.patchFlag!==-2&&Cs(l,o)),o.type===Qt&&o.patchFlag!==-1&&(o.el=l.el),o.type===it&&!o.el&&(o.el=l.el)}}function oo(e){const t=e.slice(),n=[0];let i,s,r,l,o;const h=e.length;for(i=0;i<h;i++){const f=e[i];if(f!==0){if(s=n[n.length-1],e[s]<f){t[i]=s,n.push(i);continue}for(r=0,l=n.length-1;r<l;)o=r+l>>1,e[n[o]]<f?r=o+1:l=o;f<e[n[r]]&&(r>0&&(t[i]=n[r-1]),n[r]=i)}}for(r=n.length,l=n[r-1];r-- >0;)n[r]=l,l=t[l];return n}function Ls(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ls(t)}function fi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const lo=Symbol.for("v-scx"),ao=()=>Pt(lo);function fn(e,t,n){return As(e,t,n)}function As(e,t,n=H){const{immediate:i,deep:s,flush:r,once:l}=n,o=se({},n),h=t&&i||!t&&r!=="post";let f;if(Ct){if(r==="sync"){const g=ao();f=g.__watcherHandles||(g.__watcherHandles=[])}else if(!h){const g=()=>{};return g.stop=Se,g.resume=Se,g.pause=Se,g}}const u=ne;o.call=(g,w,A)=>Ce(g,u,w,A);let a=!1;r==="post"?o.scheduler=g=>{ce(g,u&&u.suspense)}:r!=="sync"&&(a=!0,o.scheduler=(g,w)=>{w?g():qn(g)}),o.augmentJob=g=>{t&&(g.flags|=4),a&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const d=xr(e,t,o);return Ct&&(f?f.push(d):h&&d()),d}function co(e,t,n){const i=this.proxy,s=Z(e)?e.includes(".")?Ms(i,e):()=>i[e]:e.bind(i,i);let r;P(t)?r=t:(r=t.handler,n=t);const l=At(this),o=As(s,r.bind(i),n);return l(),o}function Ms(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const uo=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ne(t)}Modifiers`]||e[`${Ye(t)}Modifiers`];function fo(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||H;let s=n;const r=t.startsWith("update:"),l=r&&uo(i,t.slice(7));l&&(l.trim&&(s=n.map(u=>Z(u)?u.trim():u)),l.number&&(s=n.map(mn)));let o,h=i[o=nn(t)]||i[o=nn(Ne(t))];!h&&r&&(h=i[o=nn(Ye(t))]),h&&Ce(h,e,6,s);const f=i[o+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ce(f,e,6,s)}}const ho=new WeakMap;function Es(e,t,n=!1){const i=n?ho:t.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let l={},o=!1;if(!P(e)){const h=f=>{const u=Es(f,t,!0);u&&(o=!0,se(l,u))};!n&&t.mixins.length&&t.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}return!r&&!o?(J(e)&&i.set(e,null),null):(I(r)?r.forEach(h=>l[h]=null):se(l,r),J(e)&&i.set(e,l),l)}function Zt(e,t){return!e||!Gt(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,Ye(t))||V(e,t))}function di(e){const{type:t,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:l,attrs:o,emit:h,render:f,renderCache:u,props:a,data:d,setupState:g,ctx:w,inheritAttrs:A}=e,B=$t(e);let E,U;try{if(n.shapeFlag&4){const T=s||i,W=T;E=_e(f.call(W,T,u,a,g,d,w)),U=o}else{const T=t;E=_e(T.length>1?T(a,{attrs:o,slots:l,emit:h}):T(a,null)),U=t.props?o:po(o)}}catch(T){yt.length=0,Jt(T,e,1),E=We(it)}let N=E;if(U&&A!==!1){const T=Object.keys(U),{shapeFlag:W}=N;T.length&&W&7&&(r&&T.some(Dn)&&(U=bo(U,r)),N=st(N,U,!1,!0))}return n.dirs&&(N=st(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&Gn(N,n.transition),E=N,$t(B),E}const po=e=>{let t;for(const n in e)(n==="class"||n==="style"||Gt(n))&&((t||(t={}))[n]=e[n]);return t},bo=(e,t)=>{const n={};for(const i in e)(!Dn(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function go(e,t,n){const{props:i,children:s,component:r}=e,{props:l,children:o,patchFlag:h}=t,f=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&h>=0){if(h&1024)return!0;if(h&16)return i?hi(i,l,f):!!l;if(h&8){const u=t.dynamicProps;for(let a=0;a<u.length;a++){const d=u[a];if(l[d]!==i[d]&&!Zt(f,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===l?!1:i?l?hi(i,l,f):!0:!!l;return!1}function hi(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==e[r]&&!Zt(n,r))return!0}return!1}function mo({vnode:e,parent:t},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=n,t=t.parent;else break}}const Fs=e=>e.__isSuspense;function vo(e,t){t&&t.pendingBranch?I(e)?t.effects.push(...e):t.effects.push(e):Cr(e)}const Me=Symbol.for("v-fgt"),Qt=Symbol.for("v-txt"),it=Symbol.for("v-cmt"),dn=Symbol.for("v-stc"),yt=[];let fe=null;function yo(e=!1){yt.push(fe=e?null:[])}function xo(){yt.pop(),fe=yt[yt.length-1]||null}let wt=1;function pi(e,t=!1){wt+=e,e<0&&fe&&t&&(fe.hasOnce=!0)}function _o(e){return e.dynamicChildren=wt>0?fe||Qe:null,xo(),wt>0&&fe&&fe.push(e),e}function So(e,t,n,i,s,r){return _o(X(e,t,n,i,s,r,!0))}function Ts(e){return e?e.__v_isVNode===!0:!1}function ut(e,t){return e.type===t.type&&e.key===t.key}const Ds=({key:e})=>e??null,Nt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Z(e)||ie(e)||P(e)?{i:de,r:e,k:t,f:!!n}:e:null);function X(e,t=null,n=null,i=0,s=null,r=e===Me?0:1,l=!1,o=!1){const h={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ds(t),ref:t&&Nt(t),scopeId:as,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:de};return o?(Yn(h,n),r&128&&e.normalize(h)):n&&(h.shapeFlag|=Z(n)?8:16),wt>0&&!l&&fe&&(h.patchFlag>0||r&6)&&h.patchFlag!==32&&fe.push(h),h}const We=wo;function wo(e,t=null,n=null,i=0,s=null,r=!1){if((!e||e===$r)&&(e=it),Ts(e)){const o=st(e,t,!0);return n&&Yn(o,n),wt>0&&!r&&fe&&(o.shapeFlag&6?fe[fe.indexOf(e)]=o:fe.push(o)),o.patchFlag=-2,o}if(Io(e)&&(e=e.__vccOpts),t){t=Co(t);let{class:o,style:h}=t;o&&!Z(o)&&(t.class=In(o)),J(h)&&(Hn(h)&&!I(h)&&(h=se({},h)),t.style=Rn(h))}const l=Z(e)?1:Fs(e)?128:Mr(e)?64:J(e)?4:P(e)?2:0;return X(e,t,n,i,s,l,r,!0)}function Co(e){return e?Hn(e)||vs(e)?se({},e):e:null}function st(e,t,n=!1,i=!1){const{props:s,ref:r,patchFlag:l,children:o,transition:h}=e,f=t?Ao(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Ds(f),ref:t&&t.ref?n&&r?I(r)?r.concat(Nt(t)):[r,Nt(t)]:Nt(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Me?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:h,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&st(e.ssContent),ssFallback:e.ssFallback&&st(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return h&&i&&Gn(u,h.clone(u)),u}function Lo(e=" ",t=0){return We(Qt,null,e,t)}function _e(e){return e==null||typeof e=="boolean"?We(it):I(e)?We(Me,null,e.slice()):Ts(e)?Pe(e):We(Qt,null,String(e))}function Pe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:st(e)}function Yn(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(I(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Yn(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!vs(t)?t._ctx=de:s===3&&de&&(de.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else P(t)?(t={default:t,_ctx:de},n=32):(t=String(t),i&64?(n=16,t=[Lo(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ao(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=In([t.class,i.class]));else if(s==="style")t.style=Rn([t.style,i.style]);else if(Gt(s)){const r=t[s],l=i[s];l&&r!==l&&!(I(r)&&r.includes(l))&&(t[s]=r?[].concat(r,l):l)}else s!==""&&(t[s]=i[s])}return t}function ye(e,t,n,i=null){Ce(e,t,7,[n,i])}const Mo=bs();let Eo=0;function Fo(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||Mo,r={uid:Eo++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ws(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xs(i,s),emitsOptions:Es(i,s),emit:null,emitted:null,propsDefaults:H,inheritAttrs:i.inheritAttrs,ctx:H,data:H,props:H,attrs:H,slots:H,refs:H,setupState:H,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=fo.bind(null,r),e.ce&&e.ce(r),r}let ne=null;const To=()=>ne||de;let qt,En;{const e=Yt(),t=(n,i)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(i),r=>{s.length>1?s.forEach(l=>l(r)):s[0](r)}};qt=t("__VUE_INSTANCE_SETTERS__",n=>ne=n),En=t("__VUE_SSR_SETTERS__",n=>Ct=n)}const At=e=>{const t=ne;return qt(e),e.scope.on(),()=>{e.scope.off(),qt(t)}},bi=()=>{ne&&ne.scope.off(),qt(null)};function Os(e){return e.vnode.shapeFlag&4}let Ct=!1;function Do(e,t=!1,n=!1){t&&En(t);const{props:i,children:s}=e.vnode,r=Os(e);Zr(e,i,r,t),to(e,s,n||t);const l=r?Oo(e,t):void 0;return t&&En(!1),l}function Oo(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Br);const{setup:i}=n;if(i){Te();const s=e.setupContext=i.length>1?Ro(e):null,r=At(e),l=Lt(i,e,0,[e.props,s]),o=Ui(l);if(De(),r(),(o||e.sp)&&!mt(e)&&cs(e),o){if(l.then(bi,bi),t)return l.then(h=>{gi(e,h)}).catch(h=>{Jt(h,e,0)});e.asyncDep=l}else gi(e,l)}else Us(e)}function gi(e,t,n){P(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=is(t)),Us(e)}function Us(e,t,n){const i=e.type;e.render||(e.render=i.render||Se);{const s=At(e);Te();try{Hr(e)}finally{De(),s()}}}const Uo={get(e,t){return Q(e,"get",""),e[t]}};function Ro(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Uo),slots:e.slots,emit:e.emit,expose:t}}function kt(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(is(pr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in vt)return vt[n](e)},has(t,n){return n in t||n in vt}})):e.proxy}function Io(e){return P(e)&&"__vccOpts"in e}const Po=(e,t)=>vr(e,t,Ct),No="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fn;const mi=typeof window<"u"&&window.trustedTypes;if(mi)try{Fn=mi.createPolicy("vue",{createHTML:e=>e})}catch{}const Rs=Fn?e=>Fn.createHTML(e):e=>e,zo="http://www.w3.org/2000/svg",Vo="http://www.w3.org/1998/Math/MathML",Ae=typeof document<"u"?document:null,vi=Ae&&Ae.createElement("template"),jo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t==="svg"?Ae.createElementNS(zo,e):t==="mathml"?Ae.createElementNS(Vo,e):n?Ae.createElement(e,{is:n}):Ae.createElement(e);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>Ae.createTextNode(e),createComment:e=>Ae.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ae.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,r){const l=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{vi.innerHTML=Rs(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const o=vi.content;if(i==="svg"||i==="mathml"){const h=o.firstChild;for(;h.firstChild;)o.appendChild(h.firstChild);o.removeChild(h)}t.insertBefore(o,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},$o=Symbol("_vtc");function Bo(e,t,n){const i=e[$o];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const yi=Symbol("_vod"),Ho=Symbol("_vsh"),qo=Symbol(""),Go=/(?:^|;)\s*display\s*:/;function Ko(e,t,n){const i=e.style,s=Z(n);let r=!1;if(n&&!s){if(t)if(Z(t))for(const l of t.split(";")){const o=l.slice(0,l.indexOf(":")).trim();n[o]==null&&zt(i,o,"")}else for(const l in t)n[l]==null&&zt(i,l,"");for(const l in n)l==="display"&&(r=!0),zt(i,l,n[l])}else if(s){if(t!==n){const l=i[qo];l&&(n+=";"+l),i.cssText=n,r=Go.test(n)}}else t&&e.removeAttribute("style");yi in e&&(e[yi]=r?i.display:"",e[Ho]&&(i.display="none"))}const xi=/\s*!important$/;function zt(e,t,n){if(I(n))n.forEach(i=>zt(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=Wo(e,t);xi.test(n)?e.setProperty(Ye(i),n.replace(xi,""),"important"):e[i]=n}}const _i=["Webkit","Moz","ms"],hn={};function Wo(e,t){const n=hn[t];if(n)return n;let i=Ne(t);if(i!=="filter"&&i in e)return hn[t]=i;i=Pi(i);for(let s=0;s<_i.length;s++){const r=_i[s]+i;if(r in e)return hn[t]=r}return t}const Si="http://www.w3.org/1999/xlink";function wi(e,t,n,i,s,r=Ks(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Si,t.slice(6,t.length)):e.setAttributeNS(Si,t,n):n==null||r&&!zi(n)?e.removeAttribute(t):e.setAttribute(t,r?"":ze(n)?String(n):n)}function Ci(e,t,n,i,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Rs(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?e.getAttribute("value")||"":e.value,h=n==null?e.type==="checkbox"?"on":"":String(n);(o!==h||!("_value"in e))&&(e.value=h),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=zi(n):n==null&&o==="string"?(n="",l=!0):o==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(s||t)}function Ze(e,t,n,i){e.addEventListener(t,n,i)}function Yo(e,t,n,i){e.removeEventListener(t,n,i)}const Li=Symbol("_vei");function Jo(e,t,n,i,s=null){const r=e[Li]||(e[Li]={}),l=r[t];if(i&&l)l.value=i;else{const[o,h]=Xo(t);if(i){const f=r[t]=ko(i,s);Ze(e,o,f,h)}else l&&(Yo(e,o,l,h),r[t]=void 0)}}const Ai=/(?:Once|Passive|Capture)$/;function Xo(e){let t;if(Ai.test(e)){t={};let i;for(;i=e.match(Ai);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ye(e.slice(2)),t]}let pn=0;const Zo=Promise.resolve(),Qo=()=>pn||(Zo.then(()=>pn=0),pn=Date.now());function ko(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Ce(el(i,n.value),t,5,[i])};return n.value=e,n.attached=Qo(),n}function el(e,t){if(I(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const Mi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,tl=(e,t,n,i,s,r)=>{const l=s==="svg";t==="class"?Bo(e,i,l):t==="style"?Ko(e,n,i):Gt(t)?Dn(t)||Jo(e,t,n,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):nl(e,t,i,l))?(Ci(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&wi(e,t,i,l,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Z(i))?Ci(e,Ne(t),i,r,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),wi(e,t,i,l))};function nl(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&Mi(t)&&P(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Mi(t)&&Z(n)?!1:t in e}const Ei=e=>{const t=e.props["onUpdate:modelValue"]||!1;return I(t)?n=>It(t,n):t};function il(e){e.target.composing=!0}function Fi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const bn=Symbol("_assign"),gn={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e[bn]=Ei(s);const r=i||s.props&&s.props.type==="number";Ze(e,t?"change":"input",l=>{if(l.target.composing)return;let o=e.value;n&&(o=o.trim()),r&&(o=mn(o)),e[bn](o)}),n&&Ze(e,"change",()=>{e.value=e.value.trim()}),t||(Ze(e,"compositionstart",il),Ze(e,"compositionend",Fi),Ze(e,"change",Fi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},l){if(e[bn]=Ei(l),e.composing)return;const o=(r||e.type==="number")&&!/^0\d/.test(e.value)?mn(e.value):e.value,h=t??"";o!==h&&(document.activeElement===e&&e.type!=="range"&&(i&&t===n||s&&e.value.trim()===h)||(e.value=h))}},sl=se({patchProp:tl},jo);let Ti;function rl(){return Ti||(Ti=io(sl))}const ol=((...e)=>{const t=rl().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=al(i);if(!s)return;const r=t._component;!P(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const l=n(s,!1,ll(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),l},t});function ll(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function al(e){return Z(e)?document.querySelector(e):e}function cl(e){return[(e>>16&255)/255,(e>>8&255)/255,(255&e)/255]}["SCREEN","LINEAR_LIGHT"].reduce((e,t,n)=>Object.assign(e,{[t]:n}),{});let ul=class{constructor(t,n,i,s=!1){const r=this,l=document.location.search.toLowerCase().indexOf("debug=webgl")!==-1;r.canvas=t,r.gl=r.canvas.getContext("webgl",{antialias:!0}),r.meshes=[];const o=r.gl;n&&i&&this.setSize(n,i),r.lastDebugMsg,r.debug=s&&l?function(f){const u=new Date;u-r.lastDebugMsg>1e3&&console.log("---"),console.log(u.toLocaleTimeString()+Array(Math.max(0,32-f.length)).join(" ")+f+": ",...Array.from(arguments).slice(1)),r.lastDebugMsg=u}:()=>{},Object.defineProperties(r,{Material:{enumerable:!1,value:class{constructor(f,u,a={}){const d=this;function g(B,E){const U=o.createShader(B);return o.shaderSource(U,E),o.compileShader(U),o.getShaderParameter(U,o.COMPILE_STATUS)||console.error(o.getShaderInfoLog(U)),r.debug("Material.compileShaderSource",{source:E}),U}function w(B,E){return Object.entries(B).map(([U,N])=>N.getDeclaration(U,E)).join(`
`)}d.uniforms=a,d.uniformInstances=[];const A=`
              precision highp float;
            `;d.vertexSource=`
              ${A}
              attribute vec4 position;
              attribute vec2 uv;
              attribute vec2 uvNorm;
              ${w(r.commonUniforms,"vertex")}
              ${w(a,"vertex")}
              ${f}
            `,d.Source=`
              ${A}
              ${w(r.commonUniforms,"fragment")}
              ${w(a,"fragment")}
              ${u}
            `,d.vertexShader=g(o.VERTEX_SHADER,d.vertexSource),d.fragmentShader=g(o.FRAGMENT_SHADER,d.Source),d.program=o.createProgram(),o.attachShader(d.program,d.vertexShader),o.attachShader(d.program,d.fragmentShader),o.linkProgram(d.program),o.getProgramParameter(d.program,o.LINK_STATUS)||console.error(o.getProgramInfoLog(d.program)),o.useProgram(d.program),d.attachUniforms(void 0,r.commonUniforms),d.attachUniforms(void 0,d.uniforms)}attachUniforms(f,u){const a=this;f===void 0?Object.entries(u).forEach(([d,g])=>{a.attachUniforms(d,g)}):u.type=="array"?u.value.forEach((d,g)=>a.attachUniforms(`${f}[${g}]`,d)):u.type=="struct"?Object.entries(u.value).forEach(([d,g])=>a.attachUniforms(`${f}.${d}`,g)):(r.debug("Material.attachUniforms",{name:f,uniform:u}),a.uniformInstances.push({uniform:u,location:o.getUniformLocation(a.program,f)}))}}},Uniform:{enumerable:!1,value:class{constructor(f){this.type="float",Object.assign(this,f),this.typeFn={float:"1f",int:"1i",vec2:"2fv",vec3:"3fv",vec4:"4fv",mat4:"Matrix4fv"}[this.type]||"1f",this.update()}update(f){this.value!==void 0&&o[`uniform${this.typeFn}`](f,this.typeFn.indexOf("Matrix")===0?this.transpose:this.value,this.typeFn.indexOf("Matrix")===0?this.value:null)}getDeclaration(f,u,a){const d=this;if(d.excludeFrom!==u){if(d.type==="array")return d.value[0].getDeclaration(f,u,d.value.length)+`
const int ${f}_length = ${d.value.length};`;if(d.type==="struct"){let g=f.replace("u_","");return g=g.charAt(0).toUpperCase()+g.slice(1),`uniform struct ${g} 
                                {
`+Object.entries(d.value).map(([w,A])=>A.getDeclaration(w,u).replace(/^uniform/,"")).join("")+`
} ${f}${a>0?`[${a}]`:""};`}return`uniform ${d.type} ${f}${a>0?`[${a}]`:""};`}}}},PlaneGeometry:{enumerable:!1,value:class{constructor(f,u,a,d,g){o.createBuffer(),this.attributes={position:new r.Attribute({target:o.ARRAY_BUFFER,size:3}),uv:new r.Attribute({target:o.ARRAY_BUFFER,size:2}),uvNorm:new r.Attribute({target:o.ARRAY_BUFFER,size:2}),index:new r.Attribute({target:o.ELEMENT_ARRAY_BUFFER,size:3,type:o.UNSIGNED_SHORT})},this.setTopology(a,d),this.setSize(f,u,g)}setTopology(f=1,u=1){const a=this;a.xSegCount=f,a.ySegCount=u,a.vertexCount=(a.xSegCount+1)*(a.ySegCount+1),a.quadCount=a.xSegCount*a.ySegCount*2,a.attributes.uv.values=new Float32Array(2*a.vertexCount),a.attributes.uvNorm.values=new Float32Array(2*a.vertexCount),a.attributes.index.values=new Uint16Array(3*a.quadCount);for(let d=0;d<=a.ySegCount;d++)for(let g=0;g<=a.xSegCount;g++){const w=d*(a.xSegCount+1)+g;if(a.attributes.uv.values[2*w]=g/a.xSegCount,a.attributes.uv.values[2*w+1]=1-d/a.ySegCount,a.attributes.uvNorm.values[2*w]=g/a.xSegCount*2-1,a.attributes.uvNorm.values[2*w+1]=1-d/a.ySegCount*2,g<a.xSegCount&&d<a.ySegCount){const A=d*a.xSegCount+g;a.attributes.index.values[6*A]=w,a.attributes.index.values[6*A+1]=w+1+a.xSegCount,a.attributes.index.values[6*A+2]=w+1,a.attributes.index.values[6*A+3]=w+1,a.attributes.index.values[6*A+4]=w+1+a.xSegCount,a.attributes.index.values[6*A+5]=w+2+a.xSegCount}}a.attributes.uv.update(),a.attributes.uvNorm.update(),a.attributes.index.update(),r.debug("Geometry.setTopology",{uv:a.attributes.uv,uvNorm:a.attributes.uvNorm,index:a.attributes.index})}setSize(f=1,u=1,a="xz"){const d=this;d.width=f,d.height=u,d.orientation=a,d.attributes.position.values&&d.attributes.position.values.length===3*d.vertexCount||(d.attributes.position.values=new Float32Array(3*d.vertexCount));const g=f/-2,w=u/-2,A=f/d.xSegCount,B=u/d.ySegCount;for(let E=0;E<=d.ySegCount;E++){const U=w+E*B;for(let N=0;N<=d.xSegCount;N++){const T=g+N*A,W=E*(d.xSegCount+1)+N;d.attributes.position.values[3*W+"xyz".indexOf(a[0])]=T,d.attributes.position.values[3*W+"xyz".indexOf(a[1])]=-U}}d.attributes.position.update(),r.debug("Geometry.setSize",{position:d.attributes.position})}}},Mesh:{enumerable:!1,value:class{constructor(f,u){const a=this;a.geometry=f,a.material=u,a.wireframe=!1,a.attributeInstances=[],Object.entries(a.geometry.attributes).forEach(([d,g])=>{a.attributeInstances.push({attribute:g,location:g.attach(d,a.material.program)})}),r.meshes.push(a),r.debug("Mesh.constructor",{mesh:a})}draw(){o.useProgram(this.material.program),this.material.uniformInstances.forEach(({uniform:f,location:u})=>f.update(u)),this.attributeInstances.forEach(({attribute:f,location:u})=>f.use(u)),o.drawElements(this.wireframe?o.LINES:o.TRIANGLES,this.geometry.attributes.index.values.length,o.UNSIGNED_SHORT,0)}remove(){r.meshes=r.meshes.filter(f=>f!=this)}}},Attribute:{enumerable:!1,value:class{constructor(f){this.type=o.FLOAT,this.normalized=!1,this.buffer=o.createBuffer(),Object.assign(this,f),this.update()}update(){this.values!==void 0&&(o.bindBuffer(this.target,this.buffer),o.bufferData(this.target,this.values,o.STATIC_DRAW))}attach(f,u){const a=o.getAttribLocation(u,f);return this.target===o.ARRAY_BUFFER&&(o.enableVertexAttribArray(a),o.vertexAttribPointer(a,this.size,this.type,this.normalized,0,0)),a}use(f){o.bindBuffer(this.target,this.buffer),this.target===o.ARRAY_BUFFER&&(o.enableVertexAttribArray(f),o.vertexAttribPointer(f,this.size,this.type,this.normalized,0,0))}}}});const h=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];r.commonUniforms={projectionMatrix:new r.Uniform({type:"mat4",value:h}),modelViewMatrix:new r.Uniform({type:"mat4",value:h}),resolution:new r.Uniform({type:"vec2",value:[1,1]}),aspectRatio:new r.Uniform({type:"float",value:1})}}setSize(t=640,n=480){this.width=t,this.height=n,this.canvas.width=t,this.canvas.height=n,this.gl.viewport(0,0,t,n),this.commonUniforms.resolution.value=[t,n],this.commonUniforms.aspectRatio.value=t/n,this.debug("MiniGL.setSize",{width:t,height:n})}setOrthographicCamera(t=0,n=0,i=0,s=-2e3,r=2e3){this.commonUniforms.projectionMatrix.value=[2/this.width,0,0,0,0,2/this.height,0,0,0,0,2/(s-r),0,t,n,i,1],this.debug("setOrthographicCamera",this.commonUniforms.projectionMatrix.value)}render(){this.gl.clearColor(0,0,0,0),this.gl.clearDepth(1),this.meshes.forEach(t=>t.draw())}};function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let fl=class{constructor(...t){D(this,"el",void 0),D(this,"cssVarRetries",0),D(this,"maxCssVarRetries",200),D(this,"angle",0),D(this,"isLoadedClass",!1),D(this,"isScrolling",!1),D(this,"scrollingTimeout",void 0),D(this,"scrollingRefreshDelay",200),D(this,"isIntersecting",!1),D(this,"shaderFiles",void 0),D(this,"vertexShader",void 0),D(this,"sectionColors",void 0),D(this,"computedCanvasStyle",void 0),D(this,"conf",void 0),D(this,"uniforms",void 0),D(this,"t",1253106),D(this,"last",0),D(this,"width",void 0),D(this,"minWidth",1111),D(this,"height",600),D(this,"xSegCount",void 0),D(this,"ySegCount",void 0),D(this,"mesh",void 0),D(this,"material",void 0),D(this,"geometry",void 0),D(this,"minigl",void 0),D(this,"scrollObserver",void 0),D(this,"amp",320),D(this,"seed",5),D(this,"freqX",14e-5),D(this,"freqY",29e-5),D(this,"freqDelta",1e-5),D(this,"activeColors",[1,1,1,1]),D(this,"isMetaKey",!1),D(this,"isGradientLegendVisible",!1),D(this,"isMouseDown",!1),D(this,"handleScroll",()=>{clearTimeout(this.scrollingTimeout),this.scrollingTimeout=setTimeout(this.handleScrollEnd,this.scrollingRefreshDelay),this.isGradientLegendVisible&&this.hideGradientLegend(),this.conf.playing&&(this.isScrolling=!0,this.pause())}),D(this,"handleScrollEnd",()=>{this.isScrolling=!1,this.isIntersecting&&this.play()}),D(this,"resize",()=>{this.width=window.innerWidth,this.minigl.setSize(this.width,this.height),this.minigl.setOrthographicCamera(),this.xSegCount=Math.ceil(this.width*this.conf.density[0]),this.ySegCount=Math.ceil(this.height*this.conf.density[1]),this.mesh.geometry.setTopology(this.xSegCount,this.ySegCount),this.mesh.geometry.setSize(this.width,this.height),this.mesh.material.uniforms.u_shadow_power.value=this.width<600?5:6}),D(this,"handleMouseDown",n=>{this.isGradientLegendVisible&&(this.isMetaKey=n.metaKey,this.isMouseDown=!0,this.conf.playing===!1&&requestAnimationFrame(this.animate))}),D(this,"handleMouseUp",()=>{this.isMouseDown=!1}),D(this,"animate",n=>{if(!this.shouldSkipFrame(n)||this.isMouseDown){if(this.t+=Math.min(n-this.last,1e3/15),this.last=n,this.isMouseDown){let i=160;this.isMetaKey&&(i=-160),this.t+=i}this.mesh.material.uniforms.u_time.value=this.t,this.minigl.render()}if(this.last!==0&&this.isStatic)return this.minigl.render(),void this.disconnect();(this.conf.playing||this.isMouseDown)&&requestAnimationFrame(this.animate)}),D(this,"addIsLoadedClass",()=>{!this.isLoadedClass&&(this.isLoadedClass=!0,this.el.classList.add("isLoaded"),setTimeout(()=>{this.el.parentElement.classList.add("isLoaded")},3e3))}),D(this,"pause",()=>{this.conf.playing=!1}),D(this,"play",()=>{requestAnimationFrame(this.animate),this.conf.playing=!0}),D(this,"initGradient",n=>(this.el=document.querySelector(n),this.connect(),this))}async connect(){this.shaderFiles={vertex:`varying vec3 v_color;

void main() {
  float time = u_time * u_global.noiseSpeed;

  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;

  vec2 st = 1. - uvNorm.xy;

  //
  // Tilting the plane
  //

  // Front-to-back tilt
  float tilt = resolution.y / 2.0 * uvNorm.y;

  // Left-to-right angle
  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;

  // Up-down shift to offset incline
  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);

  //
  // Vertex noise
  //

  float noise = snoise(vec3(
    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,
    noiseCoord.y * u_vertDeform.noiseFreq.y,
    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed
  )) * u_vertDeform.noiseAmp;

  // Fade noise to zero at edges
  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);

  // Clamp to 0
  noise = max(0.0, noise);

  vec3 pos = vec3(
    position.x,
    position.y + tilt + incline + noise - offset,
    position.z
  );

  //
  // Vertex color, to be passed to fragment shader
  //

  if (u_active_colors[0] == 1.) {
    v_color = u_baseColor;
  }

  for (int i = 0; i < u_waveLayers_length; i++) {
    if (u_active_colors[i + 1] == 1.) {
      WaveLayers layer = u_waveLayers[i];

      float noise = smoothstep(
        layer.noiseFloor,
        layer.noiseCeil,
        snoise(vec3(
          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,
          noiseCoord.y * layer.noiseFreq.y,
          time * layer.noiseSpeed + layer.noiseSeed
        )) / 2.0 + 0.5
      );

      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));
    }
  }

  //
  // Finish
  //

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,noise:`//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
{
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}`,blend:`//
// https://github.com/jamieowen/glsl-blend
//

// Normal

vec3 blendNormal(vec3 base, vec3 blend) {
	return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
	return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
}

// Screen

float blendScreen(float base, float blend) {
	return 1.0-((1.0-base)*(1.0-blend));
}

vec3 blendScreen(vec3 base, vec3 blend) {
	return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));
}

vec3 blendScreen(vec3 base, vec3 blend, float opacity) {
	return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));
}

// Multiply

vec3 blendMultiply(vec3 base, vec3 blend) {
	return base*blend;
}

vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {
	return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));
}

// Overlay

float blendOverlay(float base, float blend) {
	return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}

vec3 blendOverlay(vec3 base, vec3 blend) {
	return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));
}

vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
	return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));
}

// Hard light

vec3 blendHardLight(vec3 base, vec3 blend) {
	return blendOverlay(blend,base);
}

vec3 blendHardLight(vec3 base, vec3 blend, float opacity) {
	return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Soft light

float blendSoftLight(float base, float blend) {
	return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));
}

vec3 blendSoftLight(vec3 base, vec3 blend) {
	return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));
}

vec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {
	return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Color dodge

float blendColorDodge(float base, float blend) {
	return (blend==1.0)?blend:min(base/(1.0-blend),1.0);
}

vec3 blendColorDodge(vec3 base, vec3 blend) {
	return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));
}

vec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {
	return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Color burn

float blendColorBurn(float base, float blend) {
	return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);
}

vec3 blendColorBurn(vec3 base, vec3 blend) {
	return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));
}

vec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {
	return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Vivid Light

float blendVividLight(float base, float blend) {
	return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));
}

vec3 blendVividLight(vec3 base, vec3 blend) {
	return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));
}

vec3 blendVividLight(vec3 base, vec3 blend, float opacity) {
	return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Lighten

float blendLighten(float base, float blend) {
	return max(blend,base);
}

vec3 blendLighten(vec3 base, vec3 blend) {
	return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));
}

vec3 blendLighten(vec3 base, vec3 blend, float opacity) {
	return (blendLighten(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear burn

float blendLinearBurn(float base, float blend) {
	// Note : Same implementation as BlendSubtractf
	return max(base+blend-1.0,0.0);
}

vec3 blendLinearBurn(vec3 base, vec3 blend) {
	// Note : Same implementation as BlendSubtract
	return max(base+blend-vec3(1.0),vec3(0.0));
}

vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {
	return (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear dodge

float blendLinearDodge(float base, float blend) {
	// Note : Same implementation as BlendAddf
	return min(base+blend,1.0);
}

vec3 blendLinearDodge(vec3 base, vec3 blend) {
	// Note : Same implementation as BlendAdd
	return min(base+blend,vec3(1.0));
}

vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
	return (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear light

float blendLinearLight(float base, float blend) {
	return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));
}

vec3 blendLinearLight(vec3 base, vec3 blend) {
	return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));
}

vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
	return (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));
}`,fragment:`varying vec3 v_color;

void main() {
  vec3 color = v_color;
  if (u_darken_top == 1.0) {
    vec2 st = gl_FragCoord.xy/resolution.xy;
    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;
  }
  gl_FragColor = vec4(color, 1.0);
}`},this.conf={presetName:"",wireframe:!1,density:[.06,.16],zoom:1,rotation:0,playing:!0},document.querySelectorAll("canvas").length<1?console.log("DID NOT LOAD HERO STRIPE CANVAS"):(this.minigl=new ul(this.el,null,null,!0),requestAnimationFrame(()=>{this.el&&(this.computedCanvasStyle=getComputedStyle(this.el),this.waitForCssVars())}))}disconnect(){this.scrollObserver&&(window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("keydown",this.handleKeyDown),this.scrollObserver.disconnect()),window.removeEventListener("resize",this.resize)}initMaterial(){this.uniforms={u_time:new this.minigl.Uniform({value:0}),u_shadow_power:new this.minigl.Uniform({value:5}),u_darken_top:new this.minigl.Uniform({value:this.el.dataset.jsDarkenTop===""?1:0}),u_active_colors:new this.minigl.Uniform({value:this.activeColors,type:"vec4"}),u_global:new this.minigl.Uniform({value:{noiseFreq:new this.minigl.Uniform({value:[this.freqX,this.freqY],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:5e-6})},type:"struct"}),u_vertDeform:new this.minigl.Uniform({value:{incline:new this.minigl.Uniform({value:Math.sin(this.angle)/Math.cos(this.angle)}),offsetTop:new this.minigl.Uniform({value:-.5}),offsetBottom:new this.minigl.Uniform({value:-.5}),noiseFreq:new this.minigl.Uniform({value:[3,4],type:"vec2"}),noiseAmp:new this.minigl.Uniform({value:this.amp}),noiseSpeed:new this.minigl.Uniform({value:10}),noiseFlow:new this.minigl.Uniform({value:3}),noiseSeed:new this.minigl.Uniform({value:this.seed})},type:"struct",excludeFrom:"fragment"}),u_baseColor:new this.minigl.Uniform({value:this.sectionColors[0],type:"vec3",excludeFrom:"fragment"}),u_waveLayers:new this.minigl.Uniform({value:[],excludeFrom:"fragment",type:"array"})};for(let t=1;t<this.sectionColors.length;t+=1)this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({value:{color:new this.minigl.Uniform({value:this.sectionColors[t],type:"vec3"}),noiseFreq:new this.minigl.Uniform({value:[2+t/this.sectionColors.length,3+t/this.sectionColors.length],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:11+.3*t}),noiseFlow:new this.minigl.Uniform({value:6.5+.3*t}),noiseSeed:new this.minigl.Uniform({value:this.seed+10*t}),noiseFloor:new this.minigl.Uniform({value:.1}),noiseCeil:new this.minigl.Uniform({value:.63+.07*t})},type:"struct"}));return this.vertexShader=[this.shaderFiles.noise,this.shaderFiles.blend,this.shaderFiles.vertex].join(`

`),new this.minigl.Material(this.vertexShader,this.shaderFiles.fragment,this.uniforms)}initMesh(){this.material=this.initMaterial(),this.geometry=new this.minigl.PlaneGeometry,this.mesh=new this.minigl.Mesh(this.geometry,this.material)}shouldSkipFrame(t){return!!window.document.hidden||!this.conf.playing||parseInt(t,10)%2==0||void 0}updateFrequency(t){this.freqX+=t,this.freqY+=t}toggleColor(t){this.activeColors[t]=this.activeColors[t]===0?1:0}showGradientLegend(){this.width>this.minWidth&&(this.isGradientLegendVisible=!0,document.body.classList.add("isGradientLegendVisible"))}hideGradientLegend(){this.isGradientLegendVisible=!1,document.body.classList.remove("isGradientLegendVisible")}init(){this.initGradientColors(),this.initMesh(),this.resize(),requestAnimationFrame(this.animate),window.addEventListener("resize",this.resize)}waitForCssVars(){if(this.computedCanvasStyle&&this.computedCanvasStyle.getPropertyValue("--gradient-color-1").indexOf("#")!==-1)this.init(),this.addIsLoadedClass();else{if(this.cssVarRetries+=1,this.cssVarRetries>this.maxCssVarRetries)return this.sectionColors=[16711680,16711680,16711935,65280,255],void this.init();requestAnimationFrame(()=>this.waitForCssVars())}}initGradientColors(){this.sectionColors=["--gradient-color-1","--gradient-color-2","--gradient-color-3","--gradient-color-4"].map(t=>{let n=this.computedCanvasStyle.getPropertyValue(t).trim();return n.length===4&&(n=`#${n.substr(1).split("").map(s=>s+s).join("")}`),n&&`0x${n.substr(1)}`}).filter(Boolean).map(cl)}};const dl=(e,t)=>{const n=e.__vccOpts||e;for(const[i,s]of t)n[i]=s;return n},hl={data(){return{weight:"",press:"",reps:"",maxPress:""}},methods:{calculateMax(){const e=parseFloat(this.press),t=parseInt(this.reps);!isNaN(e)&&!isNaN(t)?this.maxPress=(e*t/30+e).toFixed(2):this.maxPress="Некорректные данные"}},mounted(){this.gradient=new fl,this.gradient.initGradient("#gradient-canvas")},beforeUnmount(){this.gradient&&this.gradient.pause&&this.gradient.pause()}},pl={class:"app-container"},bl={class:"contjim1"},gl={class:"contjim2"},ml={class:"contjim3"},vl={class:"raz"},yl={class:"jimlezha3"};function xl(e,t,n,i,s,r){return yo(),So("div",pl,[t[4]||(t[4]=X("canvas",{id:"gradient-canvas"},null,-1)),t[5]||(t[5]=X("h1",null,"КАЛЬКУЛЯТОР ЖИМА ЛЕЖА",-1)),t[6]||(t[6]=X("p",{class:"jimlezha"},"Ваш вес",-1)),X("div",bl,[an(X("input",{type:"text",class:"jimlezha1","onUpdate:modelValue":t[0]||(t[0]=l=>s.weight=l)},null,512),[[gn,s.weight]])]),t[7]||(t[7]=X("p",{class:"jimlezha"},"Вес штанги",-1)),X("div",gl,[an(X("input",{type:"text",class:"jimlezha1","onUpdate:modelValue":t[1]||(t[1]=l=>s.press=l)},null,512),[[gn,s.press]])]),t[8]||(t[8]=X("p",{class:"jimlezha"},"Повторения",-1)),X("div",ml,[an(X("input",{type:"text",class:"jimlezha1","onUpdate:modelValue":t[2]||(t[2]=l=>s.reps=l)},null,512),[[gn,s.reps]])]),X("div",vl,[X("button",{onClick:t[3]||(t[3]=(...l)=>r.calculateMax&&r.calculateMax(...l))},"Рассчитать")]),X("p",yl,"Ваш разовый максимум: "+ji(s.maxPress),1),t[9]||(t[9]=X("div",{class:"madeby"},[X("p",null,"Made by: crymorebro"),X("a",{href:"https://github.com/crymorebro/crymorebro.github.io"},"Github"),X("a",{href:"https://t.me/crymorebro"}," Telegram")],-1))])}const _l=dl(hl,[["render",xl],["__scopeId","data-v-3b368766"]]);function Sl(e){return[(e>>16&255)/255,(e>>8&255)/255,(255&e)/255]}["SCREEN","LINEAR_LIGHT"].reduce((e,t,n)=>Object.assign(e,{[t]:n}),{});class wl{constructor(t,n,i,s=!1){const r=this,l=document.location.search.toLowerCase().indexOf("debug=webgl")!==-1;r.canvas=t,r.gl=r.canvas.getContext("webgl",{antialias:!0}),r.meshes=[];const o=r.gl;n&&i&&this.setSize(n,i),r.lastDebugMsg,r.debug=s&&l?function(f){const u=new Date;u-r.lastDebugMsg>1e3&&console.log("---"),console.log(u.toLocaleTimeString()+Array(Math.max(0,32-f.length)).join(" ")+f+": ",...Array.from(arguments).slice(1)),r.lastDebugMsg=u}:()=>{},Object.defineProperties(r,{Material:{enumerable:!1,value:class{constructor(f,u,a={}){const d=this;function g(B,E){const U=o.createShader(B);return o.shaderSource(U,E),o.compileShader(U),o.getShaderParameter(U,o.COMPILE_STATUS)||console.error(o.getShaderInfoLog(U)),r.debug("Material.compileShaderSource",{source:E}),U}function w(B,E){return Object.entries(B).map(([U,N])=>N.getDeclaration(U,E)).join(`
`)}d.uniforms=a,d.uniformInstances=[];const A=`
              precision highp float;
            `;d.vertexSource=`
              ${A}
              attribute vec4 position;
              attribute vec2 uv;
              attribute vec2 uvNorm;
              ${w(r.commonUniforms,"vertex")}
              ${w(a,"vertex")}
              ${f}
            `,d.Source=`
              ${A}
              ${w(r.commonUniforms,"fragment")}
              ${w(a,"fragment")}
              ${u}
            `,d.vertexShader=g(o.VERTEX_SHADER,d.vertexSource),d.fragmentShader=g(o.FRAGMENT_SHADER,d.Source),d.program=o.createProgram(),o.attachShader(d.program,d.vertexShader),o.attachShader(d.program,d.fragmentShader),o.linkProgram(d.program),o.getProgramParameter(d.program,o.LINK_STATUS)||console.error(o.getProgramInfoLog(d.program)),o.useProgram(d.program),d.attachUniforms(void 0,r.commonUniforms),d.attachUniforms(void 0,d.uniforms)}attachUniforms(f,u){const a=this;f===void 0?Object.entries(u).forEach(([d,g])=>{a.attachUniforms(d,g)}):u.type=="array"?u.value.forEach((d,g)=>a.attachUniforms(`${f}[${g}]`,d)):u.type=="struct"?Object.entries(u.value).forEach(([d,g])=>a.attachUniforms(`${f}.${d}`,g)):(r.debug("Material.attachUniforms",{name:f,uniform:u}),a.uniformInstances.push({uniform:u,location:o.getUniformLocation(a.program,f)}))}}},Uniform:{enumerable:!1,value:class{constructor(f){this.type="float",Object.assign(this,f),this.typeFn={float:"1f",int:"1i",vec2:"2fv",vec3:"3fv",vec4:"4fv",mat4:"Matrix4fv"}[this.type]||"1f",this.update()}update(f){this.value!==void 0&&o[`uniform${this.typeFn}`](f,this.typeFn.indexOf("Matrix")===0?this.transpose:this.value,this.typeFn.indexOf("Matrix")===0?this.value:null)}getDeclaration(f,u,a){const d=this;if(d.excludeFrom!==u){if(d.type==="array")return d.value[0].getDeclaration(f,u,d.value.length)+`
const int ${f}_length = ${d.value.length};`;if(d.type==="struct"){let g=f.replace("u_","");return g=g.charAt(0).toUpperCase()+g.slice(1),`uniform struct ${g} 
                                    {
`+Object.entries(d.value).map(([w,A])=>A.getDeclaration(w,u).replace(/^uniform/,"")).join("")+`
} ${f}${a>0?`[${a}]`:""};`}return`uniform ${d.type} ${f}${a>0?`[${a}]`:""};`}}}},PlaneGeometry:{enumerable:!1,value:class{constructor(f,u,a,d,g){o.createBuffer(),this.attributes={position:new r.Attribute({target:o.ARRAY_BUFFER,size:3}),uv:new r.Attribute({target:o.ARRAY_BUFFER,size:2}),uvNorm:new r.Attribute({target:o.ARRAY_BUFFER,size:2}),index:new r.Attribute({target:o.ELEMENT_ARRAY_BUFFER,size:3,type:o.UNSIGNED_SHORT})},this.setTopology(a,d),this.setSize(f,u,g)}setTopology(f=1,u=1){const a=this;a.xSegCount=f,a.ySegCount=u,a.vertexCount=(a.xSegCount+1)*(a.ySegCount+1),a.quadCount=a.xSegCount*a.ySegCount*2,a.attributes.uv.values=new Float32Array(2*a.vertexCount),a.attributes.uvNorm.values=new Float32Array(2*a.vertexCount),a.attributes.index.values=new Uint16Array(3*a.quadCount);for(let d=0;d<=a.ySegCount;d++)for(let g=0;g<=a.xSegCount;g++){const w=d*(a.xSegCount+1)+g;if(a.attributes.uv.values[2*w]=g/a.xSegCount,a.attributes.uv.values[2*w+1]=1-d/a.ySegCount,a.attributes.uvNorm.values[2*w]=g/a.xSegCount*2-1,a.attributes.uvNorm.values[2*w+1]=1-d/a.ySegCount*2,g<a.xSegCount&&d<a.ySegCount){const A=d*a.xSegCount+g;a.attributes.index.values[6*A]=w,a.attributes.index.values[6*A+1]=w+1+a.xSegCount,a.attributes.index.values[6*A+2]=w+1,a.attributes.index.values[6*A+3]=w+1,a.attributes.index.values[6*A+4]=w+1+a.xSegCount,a.attributes.index.values[6*A+5]=w+2+a.xSegCount}}a.attributes.uv.update(),a.attributes.uvNorm.update(),a.attributes.index.update(),r.debug("Geometry.setTopology",{uv:a.attributes.uv,uvNorm:a.attributes.uvNorm,index:a.attributes.index})}setSize(f=1,u=1,a="xz"){const d=this;d.width=f,d.height=u,d.orientation=a,d.attributes.position.values&&d.attributes.position.values.length===3*d.vertexCount||(d.attributes.position.values=new Float32Array(3*d.vertexCount));const g=f/-2,w=u/-2,A=f/d.xSegCount,B=u/d.ySegCount;for(let E=0;E<=d.ySegCount;E++){const U=w+E*B;for(let N=0;N<=d.xSegCount;N++){const T=g+N*A,W=E*(d.xSegCount+1)+N;d.attributes.position.values[3*W+"xyz".indexOf(a[0])]=T,d.attributes.position.values[3*W+"xyz".indexOf(a[1])]=-U}}d.attributes.position.update(),r.debug("Geometry.setSize",{position:d.attributes.position})}}},Mesh:{enumerable:!1,value:class{constructor(f,u){const a=this;a.geometry=f,a.material=u,a.wireframe=!1,a.attributeInstances=[],Object.entries(a.geometry.attributes).forEach(([d,g])=>{a.attributeInstances.push({attribute:g,location:g.attach(d,a.material.program)})}),r.meshes.push(a),r.debug("Mesh.constructor",{mesh:a})}draw(){o.useProgram(this.material.program),this.material.uniformInstances.forEach(({uniform:f,location:u})=>f.update(u)),this.attributeInstances.forEach(({attribute:f,location:u})=>f.use(u)),o.drawElements(this.wireframe?o.LINES:o.TRIANGLES,this.geometry.attributes.index.values.length,o.UNSIGNED_SHORT,0)}remove(){r.meshes=r.meshes.filter(f=>f!=this)}}},Attribute:{enumerable:!1,value:class{constructor(f){this.type=o.FLOAT,this.normalized=!1,this.buffer=o.createBuffer(),Object.assign(this,f),this.update()}update(){this.values!==void 0&&(o.bindBuffer(this.target,this.buffer),o.bufferData(this.target,this.values,o.STATIC_DRAW))}attach(f,u){const a=o.getAttribLocation(u,f);return this.target===o.ARRAY_BUFFER&&(o.enableVertexAttribArray(a),o.vertexAttribPointer(a,this.size,this.type,this.normalized,0,0)),a}use(f){o.bindBuffer(this.target,this.buffer),this.target===o.ARRAY_BUFFER&&(o.enableVertexAttribArray(f),o.vertexAttribPointer(f,this.size,this.type,this.normalized,0,0))}}}});const h=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];r.commonUniforms={projectionMatrix:new r.Uniform({type:"mat4",value:h}),modelViewMatrix:new r.Uniform({type:"mat4",value:h}),resolution:new r.Uniform({type:"vec2",value:[1,1]}),aspectRatio:new r.Uniform({type:"float",value:1})}}setSize(t=640,n=480){this.width=t,this.height=n,this.canvas.width=t,this.canvas.height=n,this.gl.viewport(0,0,t,n),this.commonUniforms.resolution.value=[t,n],this.commonUniforms.aspectRatio.value=t/n,this.debug("MiniGL.setSize",{width:t,height:n})}setOrthographicCamera(t=0,n=0,i=0,s=-2e3,r=2e3){this.commonUniforms.projectionMatrix.value=[2/this.width,0,0,0,0,2/this.height,0,0,0,0,2/(s-r),0,t,n,i,1],this.debug("setOrthographicCamera",this.commonUniforms.projectionMatrix.value)}render(){this.gl.clearColor(0,0,0,0),this.gl.clearDepth(1),this.meshes.forEach(t=>t.draw())}}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class Cl{constructor(...t){O(this,"el",void 0),O(this,"cssVarRetries",0),O(this,"maxCssVarRetries",200),O(this,"angle",0),O(this,"isLoadedClass",!1),O(this,"isScrolling",!1),O(this,"scrollingTimeout",void 0),O(this,"scrollingRefreshDelay",200),O(this,"isIntersecting",!1),O(this,"shaderFiles",void 0),O(this,"vertexShader",void 0),O(this,"sectionColors",void 0),O(this,"computedCanvasStyle",void 0),O(this,"conf",void 0),O(this,"uniforms",void 0),O(this,"t",1253106),O(this,"last",0),O(this,"width",void 0),O(this,"minWidth",1111),O(this,"height",600),O(this,"xSegCount",void 0),O(this,"ySegCount",void 0),O(this,"mesh",void 0),O(this,"material",void 0),O(this,"geometry",void 0),O(this,"minigl",void 0),O(this,"scrollObserver",void 0),O(this,"amp",320),O(this,"seed",5),O(this,"freqX",14e-5),O(this,"freqY",29e-5),O(this,"freqDelta",1e-5),O(this,"activeColors",[1,1,1,1]),O(this,"isMetaKey",!1),O(this,"isGradientLegendVisible",!1),O(this,"isMouseDown",!1),O(this,"handleScroll",()=>{clearTimeout(this.scrollingTimeout),this.scrollingTimeout=setTimeout(this.handleScrollEnd,this.scrollingRefreshDelay),this.isGradientLegendVisible&&this.hideGradientLegend(),this.conf.playing&&(this.isScrolling=!0,this.pause())}),O(this,"handleScrollEnd",()=>{this.isScrolling=!1,this.isIntersecting&&this.play()}),O(this,"resize",()=>{this.width=window.innerWidth,this.minigl.setSize(this.width,this.height),this.minigl.setOrthographicCamera(),this.xSegCount=Math.ceil(this.width*this.conf.density[0]),this.ySegCount=Math.ceil(this.height*this.conf.density[1]),this.mesh.geometry.setTopology(this.xSegCount,this.ySegCount),this.mesh.geometry.setSize(this.width,this.height),this.mesh.material.uniforms.u_shadow_power.value=this.width<600?5:6}),O(this,"handleMouseDown",n=>{this.isGradientLegendVisible&&(this.isMetaKey=n.metaKey,this.isMouseDown=!0,this.conf.playing===!1&&requestAnimationFrame(this.animate))}),O(this,"handleMouseUp",()=>{this.isMouseDown=!1}),O(this,"animate",n=>{if(!this.shouldSkipFrame(n)||this.isMouseDown){if(this.t+=Math.min(n-this.last,1e3/15),this.last=n,this.isMouseDown){let i=160;this.isMetaKey&&(i=-160),this.t+=i}this.mesh.material.uniforms.u_time.value=this.t,this.minigl.render()}if(this.last!==0&&this.isStatic)return this.minigl.render(),void this.disconnect();(this.conf.playing||this.isMouseDown)&&requestAnimationFrame(this.animate)}),O(this,"addIsLoadedClass",()=>{!this.isLoadedClass&&(this.isLoadedClass=!0,this.el.classList.add("isLoaded"),setTimeout(()=>{this.el.parentElement.classList.add("isLoaded")},3e3))}),O(this,"pause",()=>{this.conf.playing=!1}),O(this,"play",()=>{requestAnimationFrame(this.animate),this.conf.playing=!0}),O(this,"initGradient",n=>(this.el=document.querySelector(n),this.connect(),this))}async connect(){this.shaderFiles={vertex:`varying vec3 v_color;

void main() {
  float time = u_time * u_global.noiseSpeed;

  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;

  vec2 st = 1. - uvNorm.xy;

  //
  // Tilting the plane
  //

  // Front-to-back tilt
  float tilt = resolution.y / 2.0 * uvNorm.y;

  // Left-to-right angle
  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;

  // Up-down shift to offset incline
  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);

  //
  // Vertex noise
  //

  float noise = snoise(vec3(
    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,
    noiseCoord.y * u_vertDeform.noiseFreq.y,
    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed
  )) * u_vertDeform.noiseAmp;

  // Fade noise to zero at edges
  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);

  // Clamp to 0
  noise = max(0.0, noise);

  vec3 pos = vec3(
    position.x,
    position.y + tilt + incline + noise - offset,
    position.z
  );

  //
  // Vertex color, to be passed to fragment shader
  //

  if (u_active_colors[0] == 1.) {
    v_color = u_baseColor;
  }

  for (int i = 0; i < u_waveLayers_length; i++) {
    if (u_active_colors[i + 1] == 1.) {
      WaveLayers layer = u_waveLayers[i];

      float noise = smoothstep(
        layer.noiseFloor,
        layer.noiseCeil,
        snoise(vec3(
          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,
          noiseCoord.y * layer.noiseFreq.y,
          time * layer.noiseSpeed + layer.noiseSeed
        )) / 2.0 + 0.5
      );

      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));
    }
  }

  //
  // Finish
  //

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,noise:`//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
{
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}`,blend:`//
// https://github.com/jamieowen/glsl-blend
//

// Normal

vec3 blendNormal(vec3 base, vec3 blend) {
	return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
	return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
}

// Screen

float blendScreen(float base, float blend) {
	return 1.0-((1.0-base)*(1.0-blend));
}

vec3 blendScreen(vec3 base, vec3 blend) {
	return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));
}

vec3 blendScreen(vec3 base, vec3 blend, float opacity) {
	return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));
}

// Multiply

vec3 blendMultiply(vec3 base, vec3 blend) {
	return base*blend;
}

vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {
	return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));
}

// Overlay

float blendOverlay(float base, float blend) {
	return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}

vec3 blendOverlay(vec3 base, vec3 blend) {
	return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));
}

vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
	return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));
}

// Hard light

vec3 blendHardLight(vec3 base, vec3 blend) {
	return blendOverlay(blend,base);
}

vec3 blendHardLight(vec3 base, vec3 blend, float opacity) {
	return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Soft light

float blendSoftLight(float base, float blend) {
	return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));
}

vec3 blendSoftLight(vec3 base, vec3 blend) {
	return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));
}

vec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {
	return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Color dodge

float blendColorDodge(float base, float blend) {
	return (blend==1.0)?blend:min(base/(1.0-blend),1.0);
}

vec3 blendColorDodge(vec3 base, vec3 blend) {
	return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));
}

vec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {
	return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Color burn

float blendColorBurn(float base, float blend) {
	return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);
}

vec3 blendColorBurn(vec3 base, vec3 blend) {
	return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));
}

vec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {
	return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Vivid Light

float blendVividLight(float base, float blend) {
	return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));
}

vec3 blendVividLight(vec3 base, vec3 blend) {
	return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));
}

vec3 blendVividLight(vec3 base, vec3 blend, float opacity) {
	return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Lighten

float blendLighten(float base, float blend) {
	return max(blend,base);
}

vec3 blendLighten(vec3 base, vec3 blend) {
	return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));
}

vec3 blendLighten(vec3 base, vec3 blend, float opacity) {
	return (blendLighten(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear burn

float blendLinearBurn(float base, float blend) {
	// Note : Same implementation as BlendSubtractf
	return max(base+blend-1.0,0.0);
}

vec3 blendLinearBurn(vec3 base, vec3 blend) {
	// Note : Same implementation as BlendSubtract
	return max(base+blend-vec3(1.0),vec3(0.0));
}

vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {
	return (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear dodge

float blendLinearDodge(float base, float blend) {
	// Note : Same implementation as BlendAddf
	return min(base+blend,1.0);
}

vec3 blendLinearDodge(vec3 base, vec3 blend) {
	// Note : Same implementation as BlendAdd
	return min(base+blend,vec3(1.0));
}

vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
	return (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear light

float blendLinearLight(float base, float blend) {
	return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));
}

vec3 blendLinearLight(vec3 base, vec3 blend) {
	return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));
}

vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
	return (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));
}`,fragment:`varying vec3 v_color;

void main() {
  vec3 color = v_color;
  if (u_darken_top == 1.0) {
    vec2 st = gl_FragCoord.xy/resolution.xy;
    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;
  }
  gl_FragColor = vec4(color, 1.0);
}`},this.conf={presetName:"",wireframe:!1,density:[.06,.16],zoom:1,rotation:0,playing:!0},document.querySelectorAll("canvas").length<1?console.log("DID NOT LOAD HERO STRIPE CANVAS"):(this.minigl=new wl(this.el,null,null,!0),requestAnimationFrame(()=>{this.el&&(this.computedCanvasStyle=getComputedStyle(this.el),this.waitForCssVars())}))}disconnect(){this.scrollObserver&&(window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("keydown",this.handleKeyDown),this.scrollObserver.disconnect()),window.removeEventListener("resize",this.resize)}initMaterial(){this.uniforms={u_time:new this.minigl.Uniform({value:0}),u_shadow_power:new this.minigl.Uniform({value:5}),u_darken_top:new this.minigl.Uniform({value:this.el.dataset.jsDarkenTop===""?1:0}),u_active_colors:new this.minigl.Uniform({value:this.activeColors,type:"vec4"}),u_global:new this.minigl.Uniform({value:{noiseFreq:new this.minigl.Uniform({value:[this.freqX,this.freqY],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:5e-6})},type:"struct"}),u_vertDeform:new this.minigl.Uniform({value:{incline:new this.minigl.Uniform({value:Math.sin(this.angle)/Math.cos(this.angle)}),offsetTop:new this.minigl.Uniform({value:-.5}),offsetBottom:new this.minigl.Uniform({value:-.5}),noiseFreq:new this.minigl.Uniform({value:[3,4],type:"vec2"}),noiseAmp:new this.minigl.Uniform({value:this.amp}),noiseSpeed:new this.minigl.Uniform({value:10}),noiseFlow:new this.minigl.Uniform({value:3}),noiseSeed:new this.minigl.Uniform({value:this.seed})},type:"struct",excludeFrom:"fragment"}),u_baseColor:new this.minigl.Uniform({value:this.sectionColors[0],type:"vec3",excludeFrom:"fragment"}),u_waveLayers:new this.minigl.Uniform({value:[],excludeFrom:"fragment",type:"array"})};for(let t=1;t<this.sectionColors.length;t+=1)this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({value:{color:new this.minigl.Uniform({value:this.sectionColors[t],type:"vec3"}),noiseFreq:new this.minigl.Uniform({value:[2+t/this.sectionColors.length,3+t/this.sectionColors.length],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:11+.3*t}),noiseFlow:new this.minigl.Uniform({value:6.5+.3*t}),noiseSeed:new this.minigl.Uniform({value:this.seed+10*t}),noiseFloor:new this.minigl.Uniform({value:.1}),noiseCeil:new this.minigl.Uniform({value:.63+.07*t})},type:"struct"}));return this.vertexShader=[this.shaderFiles.noise,this.shaderFiles.blend,this.shaderFiles.vertex].join(`

`),new this.minigl.Material(this.vertexShader,this.shaderFiles.fragment,this.uniforms)}initMesh(){this.material=this.initMaterial(),this.geometry=new this.minigl.PlaneGeometry,this.mesh=new this.minigl.Mesh(this.geometry,this.material)}shouldSkipFrame(t){return!!window.document.hidden||!this.conf.playing||parseInt(t,10)%2==0||void 0}updateFrequency(t){this.freqX+=t,this.freqY+=t}toggleColor(t){this.activeColors[t]=this.activeColors[t]===0?1:0}showGradientLegend(){this.width>this.minWidth&&(this.isGradientLegendVisible=!0,document.body.classList.add("isGradientLegendVisible"))}hideGradientLegend(){this.isGradientLegendVisible=!1,document.body.classList.remove("isGradientLegendVisible")}init(){this.initGradientColors(),this.initMesh(),this.resize(),requestAnimationFrame(this.animate),window.addEventListener("resize",this.resize)}waitForCssVars(){if(this.computedCanvasStyle&&this.computedCanvasStyle.getPropertyValue("--gradient-color-1").indexOf("#")!==-1)this.init(),this.addIsLoadedClass();else{if(this.cssVarRetries+=1,this.cssVarRetries>this.maxCssVarRetries)return this.sectionColors=[16711680,16711680,16711935,65280,255],void this.init();requestAnimationFrame(()=>this.waitForCssVars())}}initGradientColors(){this.sectionColors=["--gradient-color-1","--gradient-color-2","--gradient-color-3","--gradient-color-4"].map(t=>{let n=this.computedCanvasStyle.getPropertyValue(t).trim();return n.length===4&&(n=`#${n.substr(1).split("").map(s=>s+s).join("")}`),n&&`0x${n.substr(1)}`}).filter(Boolean).map(Sl)}}const Ll=new Cl;Ll.initGradient("#gradient-canvas");ol(_l).mount("#app");
