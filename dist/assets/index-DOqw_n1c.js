import{u as c}from"./app-GAVGX3Hg.js";import m from"./PreviousBill-B5A8eETm.js";import u from"./CurrentBill-DhFu98Yb.js";import{d,r as a,o,b as r,a as s,e as l,t,f as i}from"./index-RNnRzH3G.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./BillItemTable-BFm8o43u.js";const _=d({name:"Bill",components:{CurrentBill:u,PreviousBill:m},computed:{appStore(){return c()},totalItem(){return Object.values(this.appStore.currentBill.itemList).length},totalPrice(){return this.appStore.totalCurrentBill}}}),B={class:"bill"},v={class:"bill-total"},C={key:0},f={key:1};function S(e,$,P,b,g,k){const n=a("CurrentBill"),p=a("PreviousBill");return o(),r("div",B,[s(n),l("div",v,[l("div",null,"Total ("+t(e.totalItem)+") $"+t(e.totalPrice.toFixed(2)),1),e.appStore.voucherCharge>0?(o(),r("div",C,"Other payment: $"+t(e.appStore.voucherCharge.toFixed(2)),1)):i("",!0),e.appStore.accummulatedCash>0?(o(),r("div",f,"Cash: $"+t(e.appStore.accummulatedCash.toFixed(2)),1)):i("",!0)]),s(p)])}const j=h(_,[["render",S],["__scopeId","data-v-6a020d66"]]);export{j as default};
