import{_ as r}from"./BillItemTable-BFm8o43u.js";import{u as s}from"./app-GAVGX3Hg.js";import{d as n,o as a,b as i,e as l,g as c,n as m,t as p,a as d}from"./index-RNnRzH3G.js";import{_ as u}from"./_plugin-vue_export-helper-DlAUqK2U.js";const B=n({name:"currentBill",components:{BillItemTable:r},computed:{appStore:()=>s(),currentBill(){return this.appStore.currentBill},selectedBillItem(){return this.appStore.selectedBillItem}},methods:{toggleSelectItem(e){this.appStore.toggleSelectBillItem(e)}}}),S={class:"current-bill"};function _(e,t,f,g,I,b){const o=r;return a(),i("div",S,[l("div",null,[t[0]||(t[0]=c("Table: ")),l("span",{class:m({"text-disabled":e.currentBill.tableName===""})},p(e.currentBill.tableName||"N/A"),3)]),d(o,{items:e.currentBill.itemList,"selected-item":e.selectedBillItem,onSelected:e.toggleSelectItem},null,8,["items","selected-item","onSelected"])])}const v=u(B,[["render",_],["__scopeId","data-v-8e393179"]]);export{v as default};
