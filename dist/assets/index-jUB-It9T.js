import S from"./TopNav-C0V19wFB.js";import{u as P}from"./app-BO9jPJId.js";import d from"./index-CJDUFVUk.js";import c from"./index-BF8BSmeo.js";import h from"./Footer-DphlaJKL.js";import B from"./MenuPopup-_qLaRGTx.js";import f from"./TablePopup-RAulkQB7.js";import b from"./SplitBillPopup-WX8Z-6aK.js";import{d as w,r as e,o as T,b as V,a as p,e as v}from"./index-C7XOyTba.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PreviousBill-TtoKhRoR.js";import"./CurrentBill-BzN3LQ9o.js";import"./BillItemTable-DO16gXEA.js";import"./QuickAccess-7xYRadW4.js";import"./Functions-SBMARRKw.js";import"./ChargeToTablePopup-CX1G0UFz.js";import"./forwardRefs-DXm5PALB.js";import"./VDialog-0-slnfx6.js";import"./PosChargePopup-BmSJuzmL.js";import"./VoucherPaymentPopup-D1YMshne.js";import"./VTextField-1HTM_Vkf.js";import"./VInput-DgURHLWr.js";import"./EndSalePopup-BFIphxkK.js";import"./AddNotePopup-D_s2QXwl.js";import"./ReceiptPopup-WHnjBw9_.js";import"./NoSalePopup-BKa1ineg.js";const C=w({name:"HomeScreen",components:{TopNav:S,Bill:d,Buttons:c,Footer:h,MenuPopup:B,TablePopup:f,SplitBillPopup:b},props:{username:String},data:()=>({selectedBillItem:null,holdingBill:null,tables:[],menuPopup:{isShow:!1,title:""},isShowTablePopup:!1,isShowSplitBillPopup:!1}),computed:{appStore:()=>P(),currentBill(){return this.appStore.currentBill},clipboard(){return this.appStore.clipboard},menu(){return this.appStore.menu}},methods:{openNavPopup(o){o==="Table"?this.openTablePopup():o==="Split bill"?this.openSplitBillPopup():this.appStore.menu[o]&&this.openMenuPopup(o)},openMenuPopup(o){this.menuPopup={isShow:!0,title:o}},closeMenuPopup(){this.menuPopup={isShow:!1,title:""}},cancelItem(){this.selectedBillItem&&delete this.currentBill.itemList[this.selectedBillItem],this.selectedBillItem=null},openTablePopup(){this.isShowTablePopup=!0},closeTablePopup(){this.isShowTablePopup=!1},openSplitBillPopup(){Object.keys(this.currentBill.itemList).length>1&&(this.isShowSplitBillPopup=!0)},closeSplitBillPopup(){this.isShowSplitBillPopup=!1}}}),M={class:"home"},N={class:"wrapper"};function I(o,l,$,g,k,F){const i=e("TopNav"),s=e("Bill"),n=e("Buttons"),u=e("Footer"),r=e("MenuPopup"),m=e("TablePopup"),a=e("SplitBillPopup");return T(),V("div",M,[p(i,{onSelect:o.openNavPopup},null,8,["onSelect"]),v("div",N,[p(s),p(n)]),p(u,{username:o.username},null,8,["username"]),p(r,{modelValue:o.menuPopup.isShow,"onUpdate:modelValue":l[0]||(l[0]=t=>o.menuPopup.isShow=t),title:o.menuPopup.title,onClose:o.closeMenuPopup},null,8,["modelValue","title","onClose"]),p(m,{modelValue:o.isShowTablePopup,"onUpdate:modelValue":l[1]||(l[1]=t=>o.isShowTablePopup=t),onClose:o.closeTablePopup},null,8,["modelValue","onClose"]),p(a,{modelValue:o.isShowSplitBillPopup,"onUpdate:modelValue":l[2]||(l[2]=t=>o.isShowSplitBillPopup=t),onClose:o.closeSplitBillPopup},null,8,["modelValue","onClose"])])}const io=_(C,[["render",I],["__scopeId","data-v-3c7f825e"]]);export{io as default};