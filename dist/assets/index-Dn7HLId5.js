import S from"./TopNav-Civ-2vV7.js";import{u as h}from"./app-Belduo9F.js";import f from"./index-Dp9ghQg6.js";import w from"./index-yWmMM10_.js";import B from"./Footer-BKSywB7p.js";import b from"./MenuPopup-Cu_Qiu8u.js";import T from"./TablePopup-DoOYI5fH.js";import N from"./SplitBillPopup-DFL5qzB0.js";import c from"./AddTablePopup-CqoyNcbh.js";import{d as V,r as l,o as i,b as v,a as t,e as A,c as C,f as M}from"./index-DcSSRpdH.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PreviousBill-BkZYqED8.js";import"./CurrentBill-DBKJvpII.js";import"./BillItemTable-mD61GxHY.js";import"./QuickAccess-VHs6jzOM.js";import"./Functions-Ds9AfiYh.js";import"./EndSalePopup-D6T7VVR9.js";import"./forwardRefs-v1Zr1vtO.js";import"./VDialog-B1OOBwIC.js";import"./AddNotePopup-D8Kl_fze.js";import"./VInput-Cm8nlOaP.js";import"./ReceiptPopup-B_fQhnqw.js";import"./NumberButtons-CBieevjT.js";import"./NoSalePopup-mTbcaTQt.js";import"./ChargeButtons-DExxa2VT.js";import"./ChargeToTablePopup-CFsnlGtQ.js";import"./PosChargePopup-Cfp-nEU7.js";import"./VoucherPaymentPopup-BFs9GKiw.js";import"./VTextField-Dqdwn_7v.js";import"./OpenItemPopup-x-UwKv4a.js";import"./CashOutPopup-SRI_AWMh.js";import"./BuzzerPopup-DwgOflb1.js";import"./MenuItemVariationPopup-Cu48hxF2.js";const I=V({name:"HomeScreen",components:{TopNav:S,Bill:f,Buttons:w,Footer:B,MenuPopup:b,TablePopup:T,SplitBillPopup:N,AddNewTablePopup:c},props:{username:String},data:()=>({selectedBillItem:null,holdingBill:null,tables:[],menuPopup:{isShow:!1,title:""},isShowTablePopup:!1,isShowSplitBillPopup:!1,isShowAddNewTablePopup:!1}),computed:{appStore:()=>h(),currentBill(){return this.appStore.currentBill},clipboard(){return this.appStore.clipboard},menu(){return this.appStore.menu}},methods:{openNavPopup(o){o==="Table"?this.openTablePopup():o==="Split bill"?this.openSplitBillPopup():this.appStore.menu[o]&&this.openMenuPopup(o)},openMenuPopup(o){this.menuPopup.isShow?(this.menuPopup.isShow=!1,setTimeout(()=>{this.menuPopup={isShow:!0,title:o}})):this.menuPopup={isShow:!0,title:o}},closeMenuPopup(){this.menuPopup={isShow:!1,title:""}},cancelItem(){this.selectedBillItem&&delete this.currentBill.itemList[this.selectedBillItem],this.selectedBillItem=null},openTablePopup(){this.isShowTablePopup=!0},closeTablePopup(){this.isShowTablePopup=!1},openSplitBillPopup(){Object.keys(this.currentBill.itemList).length>1&&(this.isShowSplitBillPopup=!0)},closeSplitBillPopup(){this.isShowSplitBillPopup=!1}}}),g={class:"home"},k={class:"wrapper"};function U(o,e,F,H,L,O){const s=l("TopNav"),u=l("Bill"),n=l("Buttons"),r=l("MenuPopup"),m=l("Footer"),a=l("TablePopup"),d=l("SplitBillPopup"),P=l("AddNewTablePopup");return i(),v("div",g,[t(s,{onSelect:o.openNavPopup},null,8,["onSelect"]),A("div",k,[t(u),o.menuPopup.isShow?M("",!0):(i(),C(n,{key:0,onLogOff:e[0]||(e[0]=p=>o.$emit("logOff"))})),t(r,{modelValue:o.menuPopup.isShow,"onUpdate:modelValue":e[1]||(e[1]=p=>o.menuPopup.isShow=p),title:o.menuPopup.title,onClose:o.closeMenuPopup},null,8,["modelValue","title","onClose"])]),t(m,{username:o.username},null,8,["username"]),t(a,{modelValue:o.isShowTablePopup,"onUpdate:modelValue":e[2]||(e[2]=p=>o.isShowTablePopup=p),onClose:o.closeTablePopup,onAddNew:e[3]||(e[3]=()=>{o.isShowTablePopup=!1,o.isShowAddNewTablePopup=!0})},null,8,["modelValue","onClose"]),t(d,{modelValue:o.isShowSplitBillPopup,"onUpdate:modelValue":e[4]||(e[4]=p=>o.isShowSplitBillPopup=p),onClose:o.closeSplitBillPopup},null,8,["modelValue","onClose"]),t(P,{modelValue:o.isShowAddNewTablePopup,"onUpdate:modelValue":e[5]||(e[5]=p=>o.isShowAddNewTablePopup=p),onClose:e[6]||(e[6]=()=>{o.isShowTablePopup=!0,o.isShowAddNewTablePopup=!1})},null,8,["modelValue"])])}const wo=$(I,[["render",U],["__scopeId","data-v-d23f895b"]]);export{wo as default};