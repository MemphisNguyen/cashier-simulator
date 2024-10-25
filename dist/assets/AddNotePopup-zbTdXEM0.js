import{d as ae,p as le,j as ne,u as oe,k as P,l as x,s as ie,m as ue,q as se,v as V,x as re,y as de,z as ce,a,A as B,F as R,B as U,C as fe,D as ve,E as S,G as me,H as xe,I as Ve,o as ge,c as he,w as f,e as A,g as we}from"./index-RNnRzH3G.js";import{_ as Ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{I as ye,f as pe,V as Pe,a as D,b as Fe,c as ke,d as be,e as Ie}from"./forwardRefs-C_tWEQ0c.js";import{m as _e,a as Be,u as Re,V as E,f as Se,b as Ae,c as Ne}from"./VInput-BFvsc1gF.js";import{V as Te}from"./VDialog-_Nz0WmrR.js";const $e=ae({name:"AddNotePopup",props:{modelValue:{type:Boolean,default:!1}},data:()=>({content:""}),watch:{modelValue(e){e&&(this.content="")}},methods:{onChanged(e){this.$emit("update:modelValue",e)},onSubmit(){this.$emit("submit",this.content)}}}),He=le({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,..._e(),...Be()},"VTextarea"),Me=ne()({name:"VTextarea",directives:{Intersect:ye},inheritAttrs:!1,props:He(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{attrs:g,emit:F,slots:u}=i;const n=oe(e,"modelValue"),{isFocused:r,focus:G,blur:j}=Re(e),O=P(()=>typeof e.counterValue=="function"?e.counterValue(n.value):(n.value||"").toString().length),q=P(()=>{if(g.maxlength)return g.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function J(t,o){var l,s;!e.autofocus||!t||(s=(l=o[0].target)==null?void 0:l.focus)==null||s.call(l)}const N=x(),h=x(),T=ie(""),w=x(),K=P(()=>e.persistentPlaceholder||r.value||e.active);function k(){var t;w.value!==document.activeElement&&((t=w.value)==null||t.focus()),r.value||G()}function L(t){k(),F("click:control",t)}function Q(t){F("mousedown:control",t)}function W(t){t.stopPropagation(),k(),S(()=>{n.value="",me(e["onClick:clear"],t)})}function X(t){var l;const o=t.target;if(n.value=o.value,(l=e.modelModifiers)!=null&&l.trim){const s=[o.selectionStart,o.selectionEnd];S(()=>{o.selectionStart=s[0],o.selectionEnd=s[1]})}}const v=x(),C=x(+e.rows),b=P(()=>["plain","underlined"].includes(e.variant));ue(()=>{e.autoGrow||(C.value=+e.rows)});function m(){e.autoGrow&&S(()=>{if(!v.value||!h.value)return;const t=getComputedStyle(v.value),o=getComputedStyle(h.value.$el),l=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),s=v.value.scrollHeight,y=parseFloat(t.lineHeight),I=Math.max(parseFloat(e.rows)*y+l,parseFloat(o.getPropertyValue("--v-input-control-height"))),_=parseFloat(e.maxRows)*y+l||1/0,c=Ve(s??0,I,_);C.value=Math.floor((c-l)/y),T.value=xe(c)})}se(m),V(n,m),V(()=>e.rows,m),V(()=>e.maxRows,m),V(()=>e.density,m);let d;return V(v,t=>{t?(d=new ResizeObserver(m),d.observe(v.value)):d==null||d.disconnect()}),re(()=>{d==null||d.disconnect()}),de(()=>{const t=!!(u.counter||e.counter||e.counterValue),o=!!(t||u.details),[l,s]=ce(g),{modelValue:y,...I}=E.filterProps(e),_=Se(e);return a(E,B({ref:N,modelValue:n.value,"onUpdate:modelValue":c=>n.value=c,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":b.value},e.class],style:e.style},l,I,{centerAffix:C.value===1&&!b.value,focused:r.value}),{...u,default:c=>{let{id:p,isDisabled:$,isDirty:H,isReadonly:Y,isValid:Z}=c;return a(Ae,B({ref:h,style:{"--v-textarea-control-height":T.value},onClick:L,onMousedown:Q,"onClick:clear":W,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},_,{id:p.value,active:K.value||H.value,centerAffix:C.value===1&&!b.value,dirty:H.value||e.dirty,disabled:$.value,focused:r.value,error:Z.value===!1}),{...u,default:ee=>{let{props:{class:M,...z}}=ee;return a(R,null,[e.prefix&&a("span",{class:"v-text-field__prefix"},[e.prefix]),U(a("textarea",B({ref:w,class:M,value:n.value,onInput:X,autofocus:e.autofocus,readonly:Y.value,disabled:$.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:k,onBlur:j},z,s),null),[[fe("intersect"),{handler:J},null,{once:!0}]]),e.autoGrow&&U(a("textarea",{class:[M,"v-textarea__sizer"],id:`${z.id}-sizer`,"onUpdate:modelValue":te=>n.value=te,ref:v,readonly:!0,"aria-hidden":"true"},null),[[ve,n.value]]),e.suffix&&a("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:o?c=>{var p;return a(R,null,[(p=u.details)==null?void 0:p.call(u,c),t&&a(R,null,[a("span",null,null),a(Ne,{active:e.persistentCounter||r.value,value:O.value,max:q.value,disabled:e.disabled},u.counter)])])}:void 0})}),pe({},N,h,w)}}),ze={class:"d-flex justify-center"},Ue={class:"dialog-title__actions"};function De(e,i,g,F,u,n){return ge(),he(Te,{class:"popup-dialog",modelValue:e.modelValue,"onUpdate:modelValue":e.onChanged},{default:f(()=>[A("div",ze,[a(Ie,null,{default:f(()=>[a(Pe,null,{default:f(()=>[i[2]||(i[2]=A("div",{class:"dialog-title__text"},"Charge review",-1)),A("div",Ue,[a(D,{class:"btn-close",onClick:i[0]||(i[0]=r=>e.$emit("close"))},{default:f(()=>[a(Fe,{icon:"mdi-close"})]),_:1})])]),_:1}),a(ke,null,{default:f(()=>[a(Me,{label:"Text",modelValue:e.content,"onUpdate:modelValue":i[1]||(i[1]=r=>e.content=r),placeholder:"Enter your content","hide-details":""},null,8,["modelValue"])]),_:1}),a(be,null,{default:f(()=>[a(D,{color:"primary",variant:"elevated",onClick:e.onSubmit},{default:f(()=>i[3]||(i[3]=[we("Add note")])),_:1},8,["onClick"])]),_:1})]),_:1})])]),_:1},8,["modelValue","onUpdate:modelValue"])}const Je=Ce($e,[["render",De]]);export{Je as default};
