import{_ as n}from"./BillItemTable-7TIysEFy.js";import{u as a}from"./app-DnzmmtuR.js";import{d as c,o as r,b as s,e as t,g as m,n as d,t as o,f as p,a as u}from"./index-ZGvUUgVD.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";const b=c({name:"currentBill",components:{BillItemTable:n},computed:{appStore:()=>a(),currentBill(){return this.appStore.currentBill},selectedBillItem(){return this.appStore.selectedBillItem}},methods:{toggleSelectItem(e){this.appStore.toggleSelectBillItem(e)}}}),_={class:"current-bill"},f={class:"d-flex justify-space-between"},S={key:0};function g(e,l,I,N,z,h){const i=n;return r(),s("div",_,[t("div",f,[t("div",null,[l[0]||(l[0]=m(" Table: ")),t("span",{class:d({"text-disabled":e.currentBill.tableName===""})},o(e.currentBill.tableName||"N/A"),3)]),e.currentBill.buzzerNumber!=null?(r(),s("div",S," Buzzer #"+o(e.currentBill.buzzerNumber),1)):p("",!0)]),u(i,{items:e.currentBill.itemList,"selected-item":e.selectedBillItem,onSelected:e.toggleSelectItem},null,8,["items","selected-item","onSelected"])])}const $=B(b,[["render",g],["__scopeId","data-v-0309239c"]]);export{$ as default};