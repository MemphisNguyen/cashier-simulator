import{d,o as n,b as r,a as s,w as a,g as i,e as m,t as p,f as u}from"./index-CD939PgG.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as g,c as V,a as w,e as C}from"./forwardRefs-_sU9I6ct.js";import{V as l}from"./VTextField-DI5A6130.js";import"./VInput-BkArurg7.js";const v=d({name:"LoginScreen",emits:["login"],data(){return{input:{username:"",password:""},message:""}},methods:{login(e){this.message="",e.preventDefault(),this.input.username=="Jack"&&this.input.password=="66449933"?this.$emit("login",{...this.input}):this.message="Invalid username or password"}}}),b={class:"login"},k={key:0,class:"text-error"};function y(e,o,$,L,S,B){return n(),r("div",b,[s(C,{width:"500"},{default:a(()=>[s(g,null,{default:a(()=>o[3]||(o[3]=[i("Login")])),_:1}),s(V,null,{default:a(()=>[m("form",{class:"login-form",onSubmit:o[2]||(o[2]=(...t)=>e.login&&e.login(...t))},[s(l,{label:"Username",type:"text",modelValue:e.input.username,"onUpdate:modelValue":o[0]||(o[0]=t=>e.input.username=t),autocomplete:"off"},null,8,["modelValue"]),s(l,{label:"Password",type:"password",modelValue:e.input.password,"onUpdate:modelValue":o[1]||(o[1]=t=>e.input.password=t),autocomplete:"off"},null,8,["modelValue"]),e.message?(n(),r("div",k,p(e.message),1)):u("",!0),s(w,{type:"submit",color:"primary",variant:"elevated",onClick:e.login},{default:a(()=>o[4]||(o[4]=[i("Login")])),_:1},8,["onClick"])],32)]),_:1})]),_:1})])}const D=f(v,[["render",y],["__scopeId","data-v-b09a6004"]]);export{D as default};
