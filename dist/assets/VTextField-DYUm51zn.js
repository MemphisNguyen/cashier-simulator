import{m as J,a as K,u as L,V as b,f as Q,b as W,c as X}from"./VInput-BFvsc1gF.js";import{I as Y,f as Z}from"./forwardRefs-C_tWEQ0c.js";import{p as $,j as ee,u as te,k as v,l as x,y as ne,z as le,a as n,A as V,B as ae,C as ue,F as y,ad as ie,E as S,G as oe}from"./index-RNnRzH3G.js";const se=["color","file","time","date","datetime-local","week","month"],re=$({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...J(),...K()},"VTextField"),me=ee()({name:"VTextField",directives:{Intersect:Y},inheritAttrs:!1,props:re(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,w){let{attrs:m,emit:g,slots:l}=w;const i=te(e,"modelValue"),{isFocused:s,focus:A,blur:B}=L(e),D=v(()=>typeof e.counterValue=="function"?e.counterValue(i.value):typeof e.counterValue=="number"?e.counterValue:(i.value??"").toString().length),R=v(()=>{if(m.maxlength)return m.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),C=v(()=>["plain","underlined"].includes(e.variant));function T(t,a){var u,o;!e.autofocus||!t||(o=(u=a[0].target)==null?void 0:u.focus)==null||o.call(u)}const k=x(),F=x(),r=x(),E=v(()=>se.includes(e.type)||e.persistentPlaceholder||s.value||e.active);function d(){var t;r.value!==document.activeElement&&((t=r.value)==null||t.focus()),s.value||A()}function M(t){g("mousedown:control",t),t.target!==r.value&&(d(),t.preventDefault())}function N(t){d(),g("click:control",t)}function p(t){t.stopPropagation(),d(),S(()=>{i.value=null,oe(e["onClick:clear"],t)})}function j(t){var u;const a=t.target;if(i.value=a.value,(u=e.modelModifiers)!=null&&u.trim&&["text","search","password","tel","url"].includes(e.type)){const o=[a.selectionStart,a.selectionEnd];S(()=>{a.selectionStart=o[0],a.selectionEnd=o[1]})}}return ne(()=>{const t=!!(l.counter||e.counter!==!1&&e.counter!=null),a=!!(t||l.details),[u,o]=le(m),{modelValue:ce,...z}=b.filterProps(e),O=Q(e);return n(b,V({ref:k,modelValue:i.value,"onUpdate:modelValue":c=>i.value=c,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":C.value},e.class],style:e.style},u,z,{centerAffix:!C.value,focused:s.value}),{...l,default:c=>{let{id:f,isDisabled:h,isDirty:P,isReadonly:U,isValid:G}=c;return n(W,V({ref:F,onMousedown:M,onClick:N,"onClick:clear":p,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},O,{id:f.value,active:E.value||P.value,dirty:P.value||e.dirty,disabled:h.value,focused:s.value,error:G.value===!1}),{...l,default:q=>{let{props:{class:I,...H}}=q;const _=ae(n("input",V({ref:r,value:i.value,onInput:j,autofocus:e.autofocus,readonly:U.value,disabled:h.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:d,onBlur:B},H,o),null),[[ue("intersect"),{handler:T},null,{once:!0}]]);return n(y,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[n("span",{class:"v-text-field__prefix__text"},[e.prefix])]),l.default?n("div",{class:I,"data-no-activator":""},[l.default(),_]):ie(_,{class:I}),e.suffix&&n("span",{class:"v-text-field__suffix"},[n("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:a?c=>{var f;return n(y,null,[(f=l.details)==null?void 0:f.call(l,c),t&&n(y,null,[n("span",null,null),n(X,{active:e.persistentCounter||s.value,value:D.value,max:R.value,disabled:e.disabled},l.counter)])])}:void 0})}),Z({},k,F,r)}});export{me as V};
