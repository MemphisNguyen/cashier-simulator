import{d as n,o as u,c as i,w as t,e as l,a,g as m}from"./index-ZGvUUgVD.js";import{_ as r}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as p,a as d,b as V,c as f,d as c,e as C}from"./forwardRefs-8bab2Th6.js";import{V as h}from"./VTextField-Dfans7gF.js";import{V as $}from"./VDialog-DHugggH1.js";import"./VInput-0BGh4KnQ.js";const _=n({name:"CashOutPopup",props:{modelValue:{type:Boolean,default:!1}},data:()=>({amount:0}),watch:{modelValue(e){e&&(this.amount=0)}},methods:{onChanged(e){this.$emit("update:modelValue",e)},onSubmit(){this.$emit("submit",+this.amount)}}}),b={class:"d-flex justify-center"},g={class:"dialog-title__actions"};function v(e,o,k,B,y,T){return u(),i($,{class:"popup-dialog",modelValue:e.modelValue,"onUpdate:modelValue":e.onChanged},{default:t(()=>[l("div",b,[a(C,null,{default:t(()=>[a(p,null,{default:t(()=>[o[2]||(o[2]=l("div",{class:"dialog-title__text"},"Cash out",-1)),l("div",g,[a(d,{class:"btn-close",onClick:o[0]||(o[0]=s=>e.$emit("close"))},{default:t(()=>[a(V,{icon:"mdi-close"})]),_:1})])]),_:1}),a(f,null,{default:t(()=>[a(h,{label:"Amount",modelValue:e.amount,"onUpdate:modelValue":o[1]||(o[1]=s=>e.amount=s),type:"number",placeholder:"",inputmode:"decimal"},null,8,["modelValue"])]),_:1}),a(c,null,{default:t(()=>[a(d,{color:"primary",variant:"elevated",onClick:e.onSubmit},{default:t(()=>o[3]||(o[3]=[m("Cash out")])),_:1},8,["onClick"])]),_:1})]),_:1})])]),_:1},8,["modelValue","onUpdate:modelValue"])}const A=r(_,[["render",v]]);export{A as default};