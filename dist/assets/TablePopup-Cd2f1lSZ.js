import{_ as u}from"./BillItemTable-BFm8o43u.js";import{u as c}from"./app-GAVGX3Hg.js";import{d as p,o as i,b as d,a as t,w as s,e as a,g as r,F as T,h,c as f,f as m,n as V,t as _}from"./index-RNnRzH3G.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{e as g,V as v,a as n,b as N,c as k}from"./forwardRefs-C_tWEQ0c.js";import{V as w}from"./VTextField-DYUm51zn.js";import{V as B}from"./VDialog-_Nz0WmrR.js";import"./VInput-BFvsc1gF.js";const y=p({name:"TablePopup",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue","close"],data(){return{selectedTable:null,newTableName:""}},computed:{appStore:()=>c(),tableList(){return this.appStore.tableList},currentTableBill(){return this.selectedTable?this.tableList[this.selectedTable].itemList??{}:{}}},watch:{modelValue(e){e||(this.selectedTable=null,this.newTableName="")}},methods:{onChanged(e){this.$emit("update:modelValue",e),e===!1&&this.$emit("close")},selectTable(e){this.selectedTable=e},addTable(){this.newTableName&&(this.appStore.addTable(this.newTableName),this.newTableName="")},bringToHomeScreen(){this.selectedTable&&this.tableList[this.selectedTable]&&(this.appStore.setCurrentBill(this.tableList[this.selectedTable]),this.$emit("close"))}}}),$={class:"dialog-title__actions"},L={class:"table-view"},S={class:"table-list"},F={class:"add-table-form"},I=["onClick"],P={class:"title"},U={key:0,class:"table-bill"},A={class:"table-bill-items"},D={class:"table-bill-actions"};function H(e,l,z,E,j,q){const b=u;return i(),d("div",null,[t(B,{class:"popup-dialog",height:"100%",modelValue:e.modelValue,"onUpdate:modelValue":e.onChanged},{default:s(()=>[t(g,{height:"100%"},{default:s(()=>[t(v,null,{default:s(()=>[l[2]||(l[2]=a("div",{class:"dialog-title__text"}," Table ",-1)),a("div",$,[t(n,{class:"btn-close",onClick:l[0]||(l[0]=o=>e.onChanged(!1)),density:"compact"},{default:s(()=>[t(N,{icon:"mdi-close"})]),_:1})])]),_:1}),t(k,null,{default:s(()=>[a("div",L,[a("div",S,[a("div",F,[t(w,{label:"Table name",variant:"outlined","hide-details":"",density:"compact",modelValue:e.newTableName,"onUpdate:modelValue":l[1]||(l[1]=o=>e.newTableName=o),style:{"background-color":"white"}},null,8,["modelValue"]),t(n,{"prepend-icon":"mdi-plus",color:"primary",onClick:e.addTable},{default:s(()=>l[3]||(l[3]=[r(" Add ")])),_:1},8,["onClick"])]),(i(!0),d(T,null,h(e.tableList,o=>(i(),d("div",{class:V({"table-item":!0,selected:e.selectedTable===o.tableName}),onClick:()=>e.selectTable(o.tableName)},[a("div",P,_(o.tableName),1)],10,I))),256))]),e.selectedTable?(i(),d("div",U,[a("div",A,[e.selectedTable?(i(),f(b,{key:0,items:e.currentTableBill},null,8,["items"])):m("",!0)]),a("div",D,[t(n,{color:"primary",onClick:e.bringToHomeScreen},{default:s(()=>l[4]||(l[4]=[r("Charge")])),_:1},8,["onClick"])])])):m("",!0)])]),_:1})]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])])}const X=C(y,[["render",H],["__scopeId","data-v-e0b6af42"]]);export{X as default};
