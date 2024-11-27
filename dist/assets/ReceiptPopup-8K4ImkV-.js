import{_ as m}from"./BillItemTable-DUXBlubs.js";import{u as R,g as f}from"./app-BHEqaD6V.js";import{d as h,o,c as g,w as p,a,e as t,b as i,h as V,F as v,t as s,f as r,g as b,n as _}from"./index-Bhu2MBT2.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as C,a as u,b as T,e as k}from"./forwardRefs-DtulCRCk.js";import{V as y}from"./VDialog-BE3_3SQG.js";const B=h({name:"ReceiptPopup",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue","close"],data:()=>({selectedReceipt:null}),computed:{receiptList:()=>R().previousReceipt},watch:{modelValue(e){e||(this.selectedReceipt=null)}},methods:{onChanged(e){this.$emit("update:modelValue",e)},getReceiptTotal(e){return e.itemList.reduce((l,d)=>l+d.price*d.qty,0)},mapToBillTableData(e){return e.reduce((l,d)=>({...l,[f(d)]:d}),{})}}}),F={class:"dialog-title__actions"},N={class:"receipt-popup"},z={class:"receipt-list"},I=["onClick"],L={key:0,class:"receipt-details"},D={class:"receipt-details__content"},P={key:0},w={class:"charge-info"},S={key:0},E={key:1},O={key:2},U={class:"receipt-details__actions"};function q(e,l,d,A,j,G){const c=m;return o(),g(y,{class:"popup-dialog",modelValue:e.modelValue,"onUpdate:modelValue":e.onChanged,height:"100%"},{default:p(()=>[a(k,{height:"100%"},{default:p(()=>[a(C,null,{default:p(()=>[l[1]||(l[1]=t("div",{class:"dialog-title__text"},"Receipt",-1)),t("div",F,[a(u,{class:"btn-close",onClick:l[0]||(l[0]=n=>e.$emit("close"))},{default:p(()=>[a(T,{icon:"mdi-close"})]),_:1})])]),_:1}),t("div",N,[t("div",z,[(o(!0),i(v,null,V(e.receiptList,n=>(o(),i("div",{class:_({"receipt-item":!0,selected:e.selectedReceipt===n}),onClick:H=>e.selectedReceipt=n},[t("div",null,[t("strong",null,"Receipt #"+s(n.receiptNumber),1)]),t("div",null,"Total: $"+s(e.getReceiptTotal(n).toFixed(2)),1)],10,I))),256))]),e.selectedReceipt?(o(),i("div",L,[t("div",D,[t("p",null,[t("strong",null,"Receipt #"+s(e.selectedReceipt.receiptNumber),1)]),e.selectedReceipt.buzzerNumber!=null?(o(),i("p",P,"Buzzer #"+s(e.selectedReceipt.buzzerNumber),1)):r("",!0),a(c,{items:e.mapToBillTableData(e.selectedReceipt.itemList)},null,8,["items"]),t("table",w,[t("tbody",null,[t("tr",null,[l[2]||(l[2]=t("th",null,"Total:",-1)),t("td",null,"$"+s(e.getReceiptTotal(e.selectedReceipt).toFixed(2)),1)]),e.selectedReceipt.voucher>0?(o(),i("tr",S,[l[3]||(l[3]=t("th",null,"Other payment:",-1)),t("td",null,"$"+s(e.selectedReceipt.voucher.toFixed(2)),1)])):r("",!0),e.selectedReceipt.cash>0?(o(),i("tr",E,[l[4]||(l[4]=t("th",null,"Cash:",-1)),t("td",null,"$"+s(e.selectedReceipt.cash.toFixed(2)),1)])):r("",!0),e.selectedReceipt.eftpos>0?(o(),i("tr",O,[l[5]||(l[5]=t("th",null,"EFTPOS:",-1)),t("td",null,"$"+s(e.selectedReceipt.eftpos.toFixed(2)),1)])):r("",!0),t("tr",null,[l[6]||(l[6]=t("th",null,"Change:",-1)),t("td",null,"$"+s(e.selectedReceipt.change.toFixed(2)),1)])])])]),t("div",U,[a(u,{color:"primary"},{default:p(()=>l[7]||(l[7]=[b("Reprint")])),_:1})])])):r("",!0)])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])}const Y=$(B,[["render",q],["__scopeId","data-v-035b8971"]]);export{Y as default};
