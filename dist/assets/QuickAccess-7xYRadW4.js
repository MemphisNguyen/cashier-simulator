import{u as l}from"./app-BO9jPJId.js";import{d,o as s,b as o,F as c,i,n as u,e as p,t as m,j as h}from"./index-C7XOyTba.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";const f=d({name:"QuickAccessMenu",data:()=>({quickAccess:[]}),computed:{appStore:()=>l()},created(){this.fetchQuickAccess()},methods:{async fetchQuickAccess(){const t=await(await fetch("./data/quick-access.json")).json();this.quickAccess=t},getMenuGroupColumn(e){return Math.ceil(e/8)},getMenuColor(e){const t=["red","green","yellow"];return e<t.length?t[e]:"gray"},addItemToBill(e){const t=this.appStore.getClipboardNumber(1);t>0&&this.appStore.addItemToCurrentBill({...e,qty:t}),this.appStore.clearClipboard()}}}),k={class:"menu"},C=["onClick"];function _(e,t,A,M,y,$){return s(),o("div",k,[(s(!0),o(c,null,i(e.quickAccess,(r,a)=>(s(),o("div",{class:u(`menu-group menu-group__${e.getMenuGroupColumn(r.length)}`)},[(s(!0),o(c,null,i(r,n=>(s(),o("div",{class:u([{"grid-item-extend-y":n.highlight},"tile-button"])},[p("button",{class:"menu-item",style:h({background:`linear-gradient(white ,${e.getMenuColor(a)} 20%, ${e.getMenuColor(a)} 80%, white)`}),onClick:()=>e.addItemToBill(n)},m(n.name),13,C)],2))),256))],2))),256))])}const q=g(f,[["render",_],["__scopeId","data-v-57caff19"]]);export{q as default};
