import{u as i}from"./app-Belduo9F.js";import{d as u,o as n,c as r,w as t,e as d,a as l,g as p}from"./index-DcSSRpdH.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as f,a as s,b,c,d as N,e as C}from"./forwardRefs-v1Zr1vtO.js";import{V as m}from"./VTextField-Dqdwn_7v.js";import{V as h}from"./VDialog-B1OOBwIC.js";import"./VInput-Cm8nlOaP.js";const $=u({name:"AddNewTablePopup",props:{modelValue:{type:Boolean,default:!1}},data:()=>({tableName:"",customerName:""}),computed:{appStore:()=>i()},watch:{modelValue(e){e&&(this.tableName="",this.customerName="")}},methods:{onChanged(e){e?this.$emit("update:modelValue",e):this.$emit("close")},onSubmit(){this.tableName&&(this.appStore.addTable(this.tableName,this.customerName),this.tableName="",this.customerName=""),this.$emit("close")}}}),T={class:"d-flex justify-center"},g={class:"dialog-title__actions"};function w(e,a,A,k,v,B){return n(),r(h,{class:"popup-dialog",modelValue:e.modelValue,"onUpdate:modelValue":e.onChanged},{default:t(()=>[d("div",T,[l(C,null,{default:t(()=>[l(f,null,{default:t(()=>[a[3]||(a[3]=d("div",{class:"dialog-title__text"},"Add new table",-1)),d("div",g,[l(s,{class:"btn-close",onClick:a[0]||(a[0]=o=>e.$emit("close"))},{default:t(()=>[l(b,{icon:"mdi-close"})]),_:1})])]),_:1}),l(c,null,{default:t(()=>[l(m,{label:"Customer name",modelValue:e.customerName,"onUpdate:modelValue":a[1]||(a[1]=o=>e.customerName=o)},null,8,["modelValue"]),l(m,{label:"Customer name",modelValue:e.tableName,"onUpdate:modelValue":a[2]||(a[2]=o=>e.tableName=o),type:"number",placeholder:"",inputmode:"decimal"},null,8,["modelValue"])]),_:1}),l(N,null,{default:t(()=>[l(s,{color:"primary",variant:"elevated",onClick:e.onSubmit},{default:t(()=>a[4]||(a[4]=[p("Add table")])),_:1},8,["onClick"])]),_:1})]),_:1})])]),_:1},8,["modelValue","onUpdate:modelValue"])}const D=V($,[["render",w]]);export{D as default};