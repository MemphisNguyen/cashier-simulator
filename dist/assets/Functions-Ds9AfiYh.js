import{u as C}from"./app-Belduo9F.js";import b from"./EndSalePopup-D6T7VVR9.js";import g from"./AddNotePopup-D8Kl_fze.js";import w from"./ReceiptPopup-B_fQhnqw.js";import v from"./NumberButtons-CBieevjT.js";import B from"./ChargeButtons-DExxa2VT.js";import O from"./OpenItemPopup-x-UwKv4a.js";import V from"./CashOutPopup-SRI_AWMh.js";import c from"./PosChargePopup-Cfp-nEU7.js";import I from"./BuzzerPopup-DwgOflb1.js";import{d as N,r as p,o as i,b as u,e as s,F as z,h as k,a as n,i as A,t as R}from"./index-DcSSRpdH.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./forwardRefs-v1Zr1vtO.js";import"./VDialog-B1OOBwIC.js";import"./VInput-Cm8nlOaP.js";import"./BillItemTable-mD61GxHY.js";import"./NoSalePopup-mTbcaTQt.js";import"./ChargeToTablePopup-CFsnlGtQ.js";import"./VoucherPaymentPopup-BFs9GKiw.js";import"./VTextField-Dqdwn_7v.js";const E=N({name:"Functions",components:{AddNotePopup:g,ReceiptPopup:w,EndSalePopup:b,NumberButtons:v,ChargeButtons:B,OpenItemPopup:O,CashOutPopup:V,PosChargePopup:c,BuzzerPopup:I},emits:["logOff"],data:()=>({cashTypes:[{value:100,image:"url(./images/aud-100.jpg)"},{value:50,image:"url(./images/aud-50.jpg)"},{value:20,image:"url(./images/aud-20.jpg)"},{value:10,image:"url(./images/aud-10.jpg)"}],isShowAddNotePopup:!1,isShowReceiptPopup:!1,isShowEndSalePopup:!1,isShowOpenItemPopup:!1,openType:"food",isShowCashOutPopup:!1,isShowPosChargePopup:!1,isShowBuzzerPopup:!1}),computed:{appStore:()=>C(),menu(){return this.appStore.menu},clipboard(){return this.appStore.clipboard}},methods:{logOff(){this.$emit("logOff")},cancelItem(){this.appStore.removeSelectedItemFromCurrentBill()},endSale(){this.isShowEndSalePopup=!0},clearCurrentSale(){this.appStore.endSale(),this.isShowEndSalePopup=!1},addCash(e){this.appStore.totalCurrentBill>0&&(this.appStore.addCash(e),this.appStore.setClipboard("Cash",this.appStore.accummulatedCash.toString()),this.appStore.accummulatedCash+this.appStore.voucherCharge>=this.appStore.totalCurrentBill&&this.endSale())},showAddNotePopup(){this.appStore.selectedBillItem&&(this.isShowAddNotePopup=!0)},addNoteToItem(e){this.appStore.selectedBillItem&&(this.appStore.currentBill.itemList[this.appStore.selectedBillItem].note=e,this.isShowAddNotePopup=!1)},showPrintReceiptPopup(){this.isShowReceiptPopup=!0},cancelSale(){this.appStore.setCurrentBill({tableName:"",customerName:"",buzzerNumber:void 0,itemList:{}})},addOpenItem(e,o){this.appStore.addItemToCurrentBill({name:e,price:o,qty:1}),this.isShowOpenItemPopup=!1}}}),$={class:"functions"},U={class:"actions"},F={class:"tile-button"},T={class:"tile-button"},j={class:"tile-button"},L=["onClick"],D={class:"tile-button"},q={class:"tile-button"},M={class:"tile-button"},G={class:"tile-button"},H={class:"tile-button"},J={class:"tile-button"},K={class:"tile-button"},Q={class:"numbers-cashes"};function W(e,o,X,Y,Z,_){const l=p("NumberButtons"),a=p("ChargeButtons"),r=p("AddNotePopup"),d=p("ReceiptPopup"),m=p("EndSalePopup"),S=p("OpenItemPopup"),P=p("CashOutPopup"),h=p("PosChargePopup"),f=p("BuzzerPopup");return i(),u("div",$,[s("div",U,[s("div",F,[s("button",{class:"search-sgl",onClick:o[0]||(o[0]=()=>{e.openType="food",e.isShowOpenItemPopup=!0})},"Open food")]),s("div",T,[s("button",{class:"search-sgl",onClick:o[1]||(o[1]=()=>{e.openType="beverage",e.isShowOpenItemPopup=!0})},"Open beverage")]),o[20]||(o[20]=s("div",{class:"tile-button"},[s("button",{class:"member-search"},"Member Search")],-1)),o[21]||(o[21]=s("div",{class:"tile-button"},[s("button",{class:"senior-discount"},"Seniors Discount")],-1)),(i(!0),u(z,null,k(e.cashTypes,t=>(i(),u("div",j,[s("button",{class:"charge",style:A(t.image?{background:t.image,backgroundSize:"100% 100%",color:"transparent"}:{}),onClick:()=>e.addCash(t.value)},R(t.value),13,L)]))),256)),s("div",D,[s("button",{class:"function",onClick:o[2]||(o[2]=(...t)=>e.logOff&&e.logOff(...t))},"log off")]),s("div",q,[s("button",{class:"function",onClick:o[3]||(o[3]=t=>e.isShowCashOutPopup=!0)},"Cash out")]),s("div",M,[s("button",{class:"function",onClick:o[4]||(o[4]=(...t)=>e.showAddNotePopup&&e.showAddNotePopup(...t))},"free text")]),s("div",G,[s("button",{class:"function",onClick:o[5]||(o[5]=(...t)=>e.showPrintReceiptPopup&&e.showPrintReceiptPopup(...t))},"reprint receipt")]),s("div",H,[s("button",{class:"function",onClick:o[6]||(o[6]=(...t)=>e.cancelItem&&e.cancelItem(...t))},"cancel item")]),s("div",J,[s("button",{class:"function",onClick:o[7]||(o[7]=(...t)=>e.cancelSale&&e.cancelSale(...t))},"cancel sale")]),s("div",K,[s("button",{class:"function",onClick:o[8]||(o[8]=t=>e.isShowBuzzerPopup=!0)},"Buzzer #")]),o[22]||(o[22]=s("div",{class:"tile-button"},[s("button",{class:"function"},"search items")],-1))]),s("div",Q,[n(l),n(a)]),n(r,{modelValue:e.isShowAddNotePopup,"onUpdate:modelValue":o[9]||(o[9]=t=>e.isShowAddNotePopup=t),onSubmit:e.addNoteToItem,onClose:o[10]||(o[10]=()=>e.isShowAddNotePopup=!1)},null,8,["modelValue","onSubmit"]),n(d,{modelValue:e.isShowReceiptPopup,"onUpdate:modelValue":o[11]||(o[11]=t=>e.isShowReceiptPopup=t),onClose:o[12]||(o[12]=()=>e.isShowReceiptPopup=!1)},null,8,["modelValue"]),n(m,{modelValue:e.isShowEndSalePopup,"onUpdate:modelValue":o[13]||(o[13]=t=>e.isShowEndSalePopup=t),onClose:e.clearCurrentSale},null,8,["modelValue","onClose"]),n(S,{type:e.openType,modelValue:e.isShowOpenItemPopup,"onUpdate:modelValue":o[14]||(o[14]=t=>e.isShowOpenItemPopup=t),onSubmit:e.addOpenItem},null,8,["type","modelValue","onSubmit"]),n(P,{modelValue:e.isShowCashOutPopup,"onUpdate:modelValue":o[15]||(o[15]=t=>e.isShowCashOutPopup=t),onSubmit:o[16]||(o[16]=()=>{e.isShowCashOutPopup=!1,e.isShowPosChargePopup=!0})},null,8,["modelValue"]),n(h,{modelValue:e.isShowPosChargePopup,"onUpdate:modelValue":o[17]||(o[17]=t=>e.isShowPosChargePopup=t),onClose:o[18]||(o[18]=t=>e.isShowPosChargePopup=!1)},null,8,["modelValue"]),n(f,{modelValue:e.isShowBuzzerPopup,"onUpdate:modelValue":o[19]||(o[19]=t=>e.isShowBuzzerPopup=t)},null,8,["modelValue"])])}const wo=y(E,[["render",W],["__scopeId","data-v-2a203b8b"]]);export{wo as default};
