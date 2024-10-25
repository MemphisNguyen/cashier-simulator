import{u as c}from"./app-GAVGX3Hg.js";import{d,o as h,b as u,e as v,t as B}from"./index-RNnRzH3G.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";const S=d({name:"PreviousBill",computed:{prevBill(){return c().previousReceipt[0]},prevBillContent(){if(!this.prevBill)return"";const i=("$"+this.getBillTotal(this.prevBill.itemList).toFixed(2)).padStart(14),t=this.prevBill.cash?("$"+this.prevBill.cash.toFixed(2)).padStart(14):"",o=this.prevBill.voucher?("$"+this.prevBill.voucher.toFixed(2)).padStart(14):"",s=this.prevBill.eftpos?("$"+this.prevBill.eftpos.toFixed(2)).padStart(14):"",l=("$"+this.prevBill.change.toFixed(2)).padStart(14);return`Receipt # ${this.prevBill.receiptNumber}

`+this.prevBill.itemList.map(e=>{const p=e.qty.toFixed(2).padStart(5),n=e.name.length>17?e.name.substring(0,17):e.name.padEnd(17),a=("$"+e.price.toFixed(2)).padStart(14);return`${p} x ${n} ${a}
`}).join("")+`----------------------------------------
                    TOTAL ${i}
`+(o&&`            Other payment ${o}
`)+(t&&`                     Cash ${t}
`)+(s&&`                   EFTPOS ${s}
`)+`              CASH CHANGE ${l}

NO SALE`}},methods:{getBillTotal(r){return r.reduce((i,t)=>i+t.price*t.qty,0)}}}),m={class:"bill-preview"};function f(r,i,t,o,s,l){return h(),u("div",m,[v("pre",null,B(r.prevBillContent),1)])}const _=$(S,[["render",f]]);export{_ as default};
