import{u}from"./app-DnzmmtuR.js";import{d,o as n,c as m,w as t,e as s,a as o,g as i}from"./index-ZGvUUgVD.js";import{_ as p}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as f,a as r,b as V,c as b,d as c,e as g}from"./forwardRefs-8bab2Th6.js";import{V as z}from"./VTextField-Dfans7gF.js";import{V as C}from"./VDialog-DHugggH1.js";import"./VInput-0BGh4KnQ.js";const B=d({name:"BuzzerPopup",props:{modelValue:{type:Boolean,default:!1}},data:()=>({number:0,message:""}),computed:{appStore:()=>u()},watch:{modelValue(e){e&&(this.number=0,this.message="")}},methods:{onChanged(e){this.$emit("update:modelValue",e)},onSubmit(){const e=parseInt(`${this.number}`);Number.isNaN(e)?this.message="Not a valid number":(this.appStore.setCurrentBuzzer(e),this.$emit("update:modelValue",!1))}}}),h={class:"d-flex justify-center"},$={class:"dialog-title__actions"};function N(e,a,v,_,S,k){return n(),m(C,{class:"popup-dialog",modelValue:e.modelValue,"onUpdate:modelValue":e.onChanged},{default:t(()=>[s("div",h,[o(g,null,{default:t(()=>[o(f,null,{default:t(()=>[a[2]||(a[2]=s("div",{class:"dialog-title__text"},"Buzzer",-1)),s("div",$,[o(r,{class:"btn-close",onClick:a[0]||(a[0]=l=>e.onChanged(!1))},{default:t(()=>[o(V,{icon:"mdi-close"})]),_:1})])]),_:1}),o(b,null,{default:t(()=>[o(z,{label:"Buzzer number",modelValue:e.number,"onUpdate:modelValue":a[1]||(a[1]=l=>e.number=l),type:"number",placeholder:"",inputmode:"numeric","error-messages":e.message},null,8,["modelValue","error-messages"])]),_:1}),o(c,null,{default:t(()=>[o(r,{color:"primary",variant:"elevated",onClick:e.onSubmit},{default:t(()=>a[3]||(a[3]=[i("Set")])),_:1},8,["onClick"])]),_:1})]),_:1})])]),_:1},8,["modelValue","onUpdate:modelValue"])}const I=p(B,[["render",N]]);export{I as default};