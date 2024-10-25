import{P as Ne,Q as De,j as ge,a as R,A as N,T as fe,p as j,l as _,R as q,S as ye,v as T,U as $,W as tt,k as A,E as oe,H as I,I as Se,m as he,X as He,Y as nt,Z as ae,_ as Ie,$ as pe,a0 as ot,s as X,a1 as at,q as rt,a2 as _e,a3 as it,a4 as st,a5 as lt,J as ct,a6 as ut,L as ft,u as $e,M as vt,a7 as dt,a8 as mt,a9 as gt,x as yt,y as We,aa as ht,B as Et,ab as wt,C as bt,F as xt,ac as St}from"./index-RNnRzH3G.js";import{g as J,h as pt,s as ve,i as Pt,j as qe,n as je,p as Pe,k as ie,l as se,o as Oe,B as le,q as ke,r as Ae,t as Ot,v as kt,w as At,M as Ct,x as Tt,y as Lt,f as Bt}from"./forwardRefs-C_tWEQ0c.js";const Q=new WeakMap;function Ft(e,n){Object.keys(n).forEach(t=>{if(Ne(t)){const o=De(t),a=Q.get(e);if(n[t]==null)a==null||a.forEach(i=>{const[l,r]=i;l===o&&(e.removeEventListener(o,r),a.delete(i))});else if(!a||![...a].some(i=>i[0]===o&&i[1]===n[t])){e.addEventListener(o,n[t]);const i=a||new Set;i.add([o,n[t]]),Q.has(e)||Q.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Mt(e,n){Object.keys(n).forEach(t=>{if(Ne(t)){const o=De(t),a=Q.get(e);a==null||a.forEach(i=>{const[l,r]=i;l===o&&(e.removeEventListener(o,r),a.delete(i))})}else e.removeAttribute(t)})}function ze(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function Rt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Vt(e):Ee(e))return e;e=e.parentElement}return document.scrollingElement}function te(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(Ee(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function Ee(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Vt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Nt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Dt=j({target:[Object,Array]},"v-dialog-transition"),Ht=ge()({name:"VDialogTransition",props:Dt(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,i){var y;await new Promise(d=>requestAnimationFrame(d)),await new Promise(d=>requestAnimationFrame(d)),a.style.visibility="";const{x:l,y:r,sx:u,sy:v,speed:s}=Te(e.target,a),g=J(a,[{transform:`translate(${l}px, ${r}px) scale(${u}, ${v})`,opacity:0},{}],{duration:225*s,easing:pt});(y=Ce(a))==null||y.forEach(d=>{J(d,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*s,easing:ve})}),g.finished.then(()=>i())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,i){var y;await new Promise(d=>requestAnimationFrame(d));const{x:l,y:r,sx:u,sy:v,speed:s}=Te(e.target,a);J(a,[{},{transform:`translate(${l}px, ${r}px) scale(${u}, ${v})`,opacity:0}],{duration:125*s,easing:Pt}).finished.then(()=>i()),(y=Ce(a))==null||y.forEach(d=>{J(d,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*s,easing:ve})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?R(fe,N({name:"dialog-transition"},o,{css:!1}),t):R(fe,{name:"dialog-transition"},t)}});function Ce(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Te(e,n){const t=qe(e),o=je(n),[a,i]=getComputedStyle(n).transformOrigin.split(" ").map(p=>parseFloat(p)),[l,r]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let u=t.left+t.width/2;l==="left"||r==="left"?u-=t.width/2:(l==="right"||r==="right")&&(u+=t.width/2);let v=t.top+t.height/2;l==="top"||r==="top"?v-=t.height/2:(l==="bottom"||r==="bottom")&&(v+=t.height/2);const s=t.width/o.width,g=t.height/o.height,y=Math.max(1,s,g),d=s/y||0,m=g/y||0,f=o.width*o.height/(window.innerWidth*window.innerHeight),b=f>.12?Math.min(1.5,(f-.12)*10+1):1;return{x:u-(a+o.left),y:v-(i+o.top),sx:d,sy:m,speed:b}}function ce(e,n){return{x:e.x+n.x,y:e.y+n.y}}function It(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Le(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,i=t==="top"?0:t==="bottom"?n.height:t;return ce({x:a,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,i=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ce({x:a,y:i},n)}return ce({x:n.width/2,y:n.height/2},n)}const Ye={static:Wt,connected:jt},_t=j({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Ye},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function $t(e,n){const t=_({}),o=_();q&&ye(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var l,r;T(()=>e.locationStrategy,i),$(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(l=e.locationStrategy(n,e,t))==null?void 0:l.updateLocation:o.value=(r=Ye[e.locationStrategy](n,e,t))==null?void 0:r.updateLocation});function a(i){var l;(l=o.value)==null||l.call(o,i)}return{contentStyles:t,updateLocation:o}}function Wt(){}function qt(e,n){const t=je(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function jt(e,n,t){(Array.isArray(e.target.value)||Nt(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:i}=tt(()=>{const m=Pe(n.location,e.isRtl.value),f=n.origin==="overlap"?m:n.origin==="auto"?ie(m):Pe(n.origin,e.isRtl.value);return m.side===f.side&&m.align===se(f).align?{preferredAnchor:Oe(m),preferredOrigin:Oe(f)}:{preferredAnchor:m,preferredOrigin:f}}),[l,r,u,v]=["minWidth","minHeight","maxWidth","maxHeight"].map(m=>A(()=>{const f=parseFloat(n[m]);return isNaN(f)?1/0:f})),s=A(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const m=n.offset.split(" ").map(parseFloat);return m.length<2&&m.push(0),m}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let g=!1;const y=new ResizeObserver(()=>{g&&d()});T([e.target,e.contentEl],(m,f)=>{let[b,p]=m,[P,S]=f;P&&!Array.isArray(P)&&y.unobserve(P),b&&!Array.isArray(b)&&y.observe(b),S&&y.unobserve(S),p&&y.observe(p)},{immediate:!0}),$(()=>{y.disconnect()});function d(){if(g=!1,requestAnimationFrame(()=>g=!0),!e.target.value||!e.contentEl.value)return;const m=qe(e.target.value),f=qt(e.contentEl.value,e.isRtl.value),b=te(e.contentEl.value),p=12;b.length||(b.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(f.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),f.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const P=b.reduce((O,x)=>{const h=x.getBoundingClientRect(),w=new le({x:x===document.documentElement?0:h.x,y:x===document.documentElement?0:h.y,width:x.clientWidth,height:x.clientHeight});return O?new le({x:Math.max(O.left,w.left),y:Math.max(O.top,w.top),width:Math.min(O.right,w.right)-Math.max(O.left,w.left),height:Math.min(O.bottom,w.bottom)-Math.max(O.top,w.top)}):w},void 0);P.x+=p,P.y+=p,P.width-=p*2,P.height-=p*2;let S={anchor:a.value,origin:i.value};function L(O){const x=new le(f),h=Le(O.anchor,m),w=Le(O.origin,x);let{x:D,y:H}=It(h,w);switch(O.anchor.side){case"top":H-=s.value[0];break;case"bottom":H+=s.value[0];break;case"left":D-=s.value[0];break;case"right":D+=s.value[0];break}switch(O.anchor.align){case"top":H-=s.value[1];break;case"bottom":H+=s.value[1];break;case"left":D-=s.value[1];break;case"right":D+=s.value[1];break}return x.x+=D,x.y+=H,x.width=Math.min(x.width,u.value),x.height=Math.min(x.height,v.value),{overflows:Ae(x,P),x:D,y:H}}let F=0,V=0;const k={x:0,y:0},c={x:!1,y:!1};let B=-1;for(;!(B++>10);){const{x:O,y:x,overflows:h}=L(S);F+=O,V+=x,f.x+=O,f.y+=x;{const w=ke(S.anchor),D=h.x.before||h.x.after,H=h.y.before||h.y.after;let z=!1;if(["x","y"].forEach(C=>{if(C==="x"&&D&&!c.x||C==="y"&&H&&!c.y){const W={anchor:{...S.anchor},origin:{...S.origin}},Y=C==="x"?w==="y"?se:ie:w==="y"?ie:se;W.anchor=Y(W.anchor),W.origin=Y(W.origin);const{overflows:U}=L(W);(U[C].before<=h[C].before&&U[C].after<=h[C].after||U[C].before+U[C].after<(h[C].before+h[C].after)/2)&&(S=W,z=c[C]=!0)}}),z)continue}h.x.before&&(F+=h.x.before,f.x+=h.x.before),h.x.after&&(F-=h.x.after,f.x-=h.x.after),h.y.before&&(V+=h.y.before,f.y+=h.y.before),h.y.after&&(V-=h.y.after,f.y-=h.y.after);{const w=Ae(f,P);k.x=P.width-w.x.before-w.x.after,k.y=P.height-w.y.before-w.y.after,F+=w.x.before,f.x+=w.x.before,V+=w.y.before,f.y+=w.y.before}break}const re=ke(S.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${S.anchor.side} ${S.anchor.align}`,transformOrigin:`${S.origin.side} ${S.origin.align}`,top:I(ue(V)),left:e.isRtl.value?void 0:I(ue(F)),right:e.isRtl.value?I(ue(-F)):void 0,minWidth:I(re==="y"?Math.min(l.value,m.width):l.value),maxWidth:I(Be(Se(k.x,l.value===1/0?0:l.value,u.value))),maxHeight:I(Be(Se(k.y,r.value===1/0?0:r.value,v.value)))}),{available:k,contentBox:f}}return T(()=>[a.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>d()),oe(()=>{const m=d();if(!m)return;const{available:f,contentBox:b}=m;b.height>f.y&&requestAnimationFrame(()=>{d(),requestAnimationFrame(()=>{d()})})}),{updateLocation:d}}function ue(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Be(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let de=!0;const ne=[];function zt(e){!de||ne.length?(ne.push(e),me()):(de=!1,e(),me())}let Fe=-1;function me(){cancelAnimationFrame(Fe),Fe=requestAnimationFrame(()=>{const e=ne.shift();e&&e(),ne.length?me():de=!0})}const ee={none:null,close:Xt,block:Gt,reposition:Zt},Yt=j({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ee}},"VOverlay-scroll-strategies");function Ut(e,n){if(!q)return;let t;he(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=He(),await new Promise(o=>setTimeout(o)),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=ee[e.scrollStrategy])==null||o.call(ee,n,e,t)}))}),$(()=>{t==null||t.stop()})}function Xt(e){function n(t){e.isActive.value=!1}Ue(e.targetEl.value??e.contentEl.value,n)}function Gt(e,n){var l;const t=(l=e.root.value)==null?void 0:l.offsetParent,o=[...new Set([...te(e.targetEl.value,n.contained?t:void 0),...te(e.contentEl.value,n.contained?t:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,i=(r=>Ee(r)&&r)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((r,u)=>{r.style.setProperty("--v-body-scroll-x",I(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",I(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",I(a)),r.classList.add("v-overlay-scroll-blocked")}),$(()=>{o.forEach((r,u)=>{const v=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),s=parseFloat(r.style.getPropertyValue("--v-body-scroll-y")),g=r.style.scrollBehavior;r.style.scrollBehavior="auto",r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-v,r.scrollTop=-s,r.style.scrollBehavior=g}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Zt(e,n,t){let o=!1,a=-1,i=-1;function l(r){zt(()=>{var s,g;const u=performance.now();(g=(s=e.updateLocation).value)==null||g.call(s,r),o=(performance.now()-u)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?r=>r():requestIdleCallback)(()=>{t.run(()=>{Ue(e.targetEl.value??e.contentEl.value,r=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{l(r)})})):l(r)})})}),$(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(a)})}function Ue(e,n){const t=[document,...te(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),$(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const Jt=Symbol.for("vuetify:v-menu"),Kt=j({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Qt(e,n){let t=()=>{};function o(l){t==null||t();const r=Number(l?e.openDelay:e.closeDelay);return new Promise(u=>{t=nt(r,()=>{n==null||n(l),u(l)})})}function a(){return o(!0)}function i(){return o(!1)}return{clearDelay:t,runOpenDelay:a,runCloseDelay:i}}const en=j({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Kt()},"VOverlay-activator");function tn(e,n){let{isActive:t,isTop:o,contentEl:a}=n;const i=ae("useActivator"),l=_();let r=!1,u=!1,v=!0;const s=A(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),g=A(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!s.value),{runOpenDelay:y,runCloseDelay:d}=Qt(e,c=>{c===(e.openOnHover&&r||s.value&&u)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==c&&(v=!0),t.value=c)}),m=_(),f={onClick:c=>{c.stopPropagation(),l.value=c.currentTarget||c.target,t.value||(m.value=[c.clientX,c.clientY]),t.value=!t.value},onMouseenter:c=>{var B;(B=c.sourceCapabilities)!=null&&B.firesTouchEvents||(r=!0,l.value=c.currentTarget||c.target,y())},onMouseleave:c=>{r=!1,d()},onFocus:c=>{ot(c.target,":focus-visible")!==!1&&(u=!0,c.stopPropagation(),l.value=c.currentTarget||c.target,y())},onBlur:c=>{u=!1,c.stopPropagation(),d()}},b=A(()=>{const c={};return g.value&&(c.onClick=f.onClick),e.openOnHover&&(c.onMouseenter=f.onMouseenter,c.onMouseleave=f.onMouseleave),s.value&&(c.onFocus=f.onFocus,c.onBlur=f.onBlur),c}),p=A(()=>{const c={};if(e.openOnHover&&(c.onMouseenter=()=>{r=!0,y()},c.onMouseleave=()=>{r=!1,d()}),s.value&&(c.onFocusin=()=>{u=!0,y()},c.onFocusout=()=>{u=!1,d()}),e.closeOnContentClick){const B=Ie(Jt,null);c.onClick=()=>{t.value=!1,B==null||B.closeParents()}}return c}),P=A(()=>{const c={};return e.openOnHover&&(c.onMouseenter=()=>{v&&(r=!0,v=!1,y())},c.onMouseleave=()=>{r=!1,d()}),c});T(o,c=>{var B;c&&(e.openOnHover&&!r&&(!s.value||!u)||s.value&&!u&&(!e.openOnHover||!r))&&!((B=a.value)!=null&&B.contains(document.activeElement))&&(t.value=!1)}),T(t,c=>{c||setTimeout(()=>{m.value=void 0})},{flush:"post"});const S=pe();he(()=>{S.value&&oe(()=>{l.value=S.el})});const L=pe(),F=A(()=>e.target==="cursor"&&m.value?m.value:L.value?L.el:Xe(e.target,i)||l.value),V=A(()=>Array.isArray(F.value)?void 0:F.value);let k;return T(()=>!!e.activator,c=>{c&&q?(k=He(),k.run(()=>{nn(e,i,{activatorEl:l,activatorEvents:b})})):k&&k.stop()},{flush:"post",immediate:!0}),$(()=>{k==null||k.stop()}),{activatorEl:l,activatorRef:S,target:F,targetEl:V,targetRef:L,activatorEvents:b,contentEvents:p,scrimEvents:P}}function nn(e,n,t){let{activatorEl:o,activatorEvents:a}=t;T(()=>e.activator,(u,v)=>{if(v&&u!==v){const s=r(v);s&&l(s)}u&&oe(()=>i())},{immediate:!0}),T(()=>e.activatorProps,()=>{i()}),$(()=>{l()});function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Ft(u,N(a.value,v))}function l(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Mt(u,N(a.value,v))}function r(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const v=Xe(u,n);return o.value=(v==null?void 0:v.nodeType)===Node.ELEMENT_NODE?v:void 0,o.value}}function Xe(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let i=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function on(){if(!q)return X(!1);const{ssr:e}=at();if(e){const n=X(!1);return rt(()=>{n.value=!0}),n}else return X(!0)}const an=j({eager:Boolean},"lazy");function rn(e,n){const t=X(!1),o=A(()=>t.value||e.eager||n.value);T(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}function Ge(){const n=ae("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Me=Symbol.for("vuetify:stack"),Z=_e([]);function sn(e,n,t){const o=ae("useStack"),a=!t,i=Ie(Me,void 0),l=_e({activeChildren:new Set});it(Me,l);const r=X(+n.value);ye(e,()=>{var g;const s=(g=Z.at(-1))==null?void 0:g[1];r.value=s?s+10:+n.value,a&&Z.push([o.uid,r.value]),i==null||i.activeChildren.add(o.uid),$(()=>{if(a){const y=lt(Z).findIndex(d=>d[0]===o.uid);Z.splice(y,1)}i==null||i.activeChildren.delete(o.uid)})});const u=X(!0);a&&he(()=>{var g;const s=((g=Z.at(-1))==null?void 0:g[0])===o.uid;setTimeout(()=>u.value=s)});const v=A(()=>!l.activeChildren.size);return{globalTop:st(u),localTop:v,stackStyles:A(()=>({zIndex:r.value}))}}function ln(e){return{teleportTarget:A(()=>{const t=e();if(t===!0||!q)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=[...o.children].find(i=>i.matches(".v-overlay-container"));return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function cn(){return!0}function Ze(e,n,t){if(!e||Je(e,t)===!1)return!1;const o=ze(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(i=>i==null?void 0:i.contains(e.target))}function Je(e,n){return(typeof n.value=="object"&&n.value.closeConditional||cn)(e)}function un(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;e.shadowTarget=e.target,n._clickOutside.lastMousedownWasOutside&&Ze(e,n,t)&&setTimeout(()=>{Je(e,t)&&o&&o(e)},0)}function Re(e,n){const t=ze(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const fn={mounted(e,n){const t=a=>un(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=Ze(a,e,n)};Re(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},beforeUnmount(e,n){e._clickOutside&&(Re(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function vn(e){const{modelValue:n,color:t,...o}=e;return R(fe,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&R("div",N({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Ke=j({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...en(),...ct(),...ut(),...an(),..._t(),...Yt(),...ft(),...Ot()},"VOverlay"),Ve=ge()({name:"VOverlay",directives:{ClickOutside:fn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Ke()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const i=ae("VOverlay"),l=_(),r=_(),u=_(),v=$e(e,"modelValue"),s=A({get:()=>v.value,set:E=>{E&&e.disabled||(v.value=E)}}),{themeClasses:g}=vt(e),{rtlClasses:y,isRtl:d}=dt(),{hasContent:m,onAfterLeave:f}=rn(e,s),b=kt(A(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:p,localTop:P,stackStyles:S}=sn(s,mt(e,"zIndex"),e._disableGlobalStack),{activatorEl:L,activatorRef:F,target:V,targetEl:k,targetRef:c,activatorEvents:B,contentEvents:re,scrimEvents:O}=tn(e,{isActive:s,isTop:P,contentEl:u}),{teleportTarget:x}=ln(()=>{var G,be,xe;const E=e.attach||e.contained;if(E)return E;const M=((G=L==null?void 0:L.value)==null?void 0:G.getRootNode())||((xe=(be=i.proxy)==null?void 0:be.$el)==null?void 0:xe.getRootNode());return M instanceof ShadowRoot?M:!1}),{dimensionStyles:h}=gt(e),w=on(),{scopeId:D}=Ge();T(()=>e.disabled,E=>{E&&(s.value=!1)});const{contentStyles:H,updateLocation:z}=$t(e,{isRtl:d,contentEl:u,target:V,isActive:s});Ut(e,{root:l,contentEl:u,targetEl:k,isActive:s,updateLocation:z});function C(E){a("click:outside",E),e.persistent?K():s.value=!1}function W(E){return s.value&&p.value&&(!e.scrim||E.target===r.value||E instanceof MouseEvent&&E.shadowTarget===r.value)}q&&T(s,E=>{E?window.addEventListener("keydown",Y):window.removeEventListener("keydown",Y)},{immediate:!0}),yt(()=>{q&&window.removeEventListener("keydown",Y)});function Y(E){var M,G;E.key==="Escape"&&p.value&&(e.persistent?K():(s.value=!1,(M=u.value)!=null&&M.contains(document.activeElement)&&((G=L.value)==null||G.focus())))}const U=At();ye(()=>e.closeOnBack,()=>{Tt(U,E=>{p.value&&s.value?(E(!1),e.persistent?K():s.value=!1):E()})});const we=_();T(()=>s.value&&(e.absolute||e.contained)&&x.value==null,E=>{if(E){const M=Rt(l.value);M&&M!==document.scrollingElement&&(we.value=M.scrollTop)}});function K(){e.noClickAnimation||u.value&&J(u.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ve})}function Qe(){a("afterEnter")}function et(){f(),a("afterLeave")}return We(()=>{var E;return R(xt,null,[(E=t.activator)==null?void 0:E.call(t,{isActive:s.value,targetRef:c,props:N({ref:F},B.value,e.activatorProps)}),w.value&&m.value&&R(ht,{disabled:!x.value,to:x.value},{default:()=>[R("div",N({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},g.value,y.value,e.class],style:[S.value,{"--v-overlay-opacity":e.opacity,top:I(we.value)},e.style],ref:l},D,o),[R(vn,N({color:b,modelValue:s.value&&!!e.scrim,ref:r},O.value),null),R(Ct,{appear:!0,persisted:!0,transition:e.transition,target:V.value,onAfterEnter:Qe,onAfterLeave:et},{default:()=>{var M;return[Et(R("div",N({ref:u,class:["v-overlay__content",e.contentClass],style:[h.value,H.value]},re.value,e.contentProps),[(M=t.default)==null?void 0:M.call(t,{isActive:s})]),[[wt,s.value],[bt("click-outside"),{handler:C,closeConditional:W,include:()=>[L.value]}]])]}})])]})])}),{activatorEl:L,scrimEl:r,target:V,animateClick:K,contentEl:u,globalTop:p,localTop:P,updateLocation:z}}}),dn=j({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Ke({origin:"center center",scrollStrategy:"block",transition:{component:Ht},zIndex:2400})},"VDialog"),yn=ge()({name:"VDialog",props:dn(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{emit:t,slots:o}=n;const a=$e(e,"modelValue"),{scopeId:i}=Ge(),l=_();function r(s){var d,m;const g=s.relatedTarget,y=s.target;if(g!==y&&((d=l.value)!=null&&d.contentEl)&&((m=l.value)!=null&&m.globalTop)&&![document,l.value.contentEl].includes(y)&&!l.value.contentEl.contains(y)){const f=St(l.value.contentEl);if(!f.length)return;const b=f[0],p=f[f.length-1];g===b?p.focus():b.focus()}}q&&T(()=>a.value&&e.retainFocus,s=>{s?document.addEventListener("focusin",r):document.removeEventListener("focusin",r)},{immediate:!0});function u(){var s;t("afterEnter"),(s=l.value)!=null&&s.contentEl&&!l.value.contentEl.contains(document.activeElement)&&l.value.contentEl.focus({preventScroll:!0})}function v(){t("afterLeave")}return T(a,async s=>{var g;s||(await oe(),(g=l.value.activatorEl)==null||g.focus({preventScroll:!0}))}),We(()=>{const s=Ve.filterProps(e),g=N({"aria-haspopup":"dialog"},e.activatorProps),y=N({tabindex:-1},e.contentProps);return R(Ve,N({ref:l,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},s,{modelValue:a.value,"onUpdate:modelValue":d=>a.value=d,"aria-modal":"true",activatorProps:g,contentProps:y,role:"dialog",onAfterEnter:u,onAfterLeave:v},i),{activator:o.activator,default:function(){for(var d=arguments.length,m=new Array(d),f=0;f<d;f++)m[f]=arguments[f];return R(Lt,{root:"VDialog"},{default:()=>{var b;return[(b=o.default)==null?void 0:b.call(o,...m)]}})}})}),Bt({},l)}});export{yn as V};
