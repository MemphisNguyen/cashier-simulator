import S from"./TopNav-BIY6vAMR.js";import{u as h}from"./app-sB1IWpCA.js";import f from"./index-DqVW-Jq1.js";import w from"./index-CGLg_Ccb.js";import B from"./Footer-BrK_zkhl.js";import b from"./MenuPopup-CXVi5R9u.js";import T from"./TablePopup-46Q7jTdb.js";import N from"./SplitBillPopup-CroWl1Ae.js";import c from"./AddTablePopup-DjDfX92T.js";import{d as V,r as l,o as i,b as v,a as t,e as A,c as C,f as M}from"./index-DoTamfAA.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PreviousBill-CooQObRu.js";import"./CurrentBill-Cet0-Pvb.js";import"./BillItemTable-CBr9W8uG.js";import"./QuickAccess-BowR7n2d.js";import"./Functions-Cnthp7SY.js";import"./EndSalePopup-CK10dPH4.js";import"./forwardRefs-Dlg8at3u.js";import"./VDialog-B0qAGlse.js";import"./AddNotePopup-BkWKEJXg.js";import"./VInput-CGWpf8rq.js";import"./ReceiptPopup-Bdm15TIP.js";import"./NumberButtons-C90_VfMJ.js";import"./NoSalePopup-Bw-65mfj.js";import"./ChargeButtons-DtP-fRtd.js";import"./ChargeToTablePopup-iyTU-G3W.js";import"./PosChargePopup-b2RR3-UM.js";import"./VoucherPaymentPopup-LlFkIfIN.js";import"./VTextField-DaV77b3C.js";import"./OpenItemPopup-DR9ygSjg.js";import"./CashOutPopup-CN4TPWXr.js";import"./BuzzerPopup-vrv5diEo.js";import"./MenuItemVariationPopup-BkcSh-nf.js";const I=V({name:"HomeScreen",components:{TopNav:S,Bill:f,Buttons:w,Footer:B,MenuPopup:b,TablePopup:T,SplitBillPopup:N,AddNewTablePopup:c},props:{username:String},data:()=>({selectedBillItem:null,holdingBill:null,tables:[],menuPopup:{isShow:!1,title:""},isShowTablePopup:!1,isShowSplitBillPopup:!1,isShowAddNewTablePopup:!1}),computed:{appStore:()=>h(),currentBill(){return this.appStore.currentBill},clipboard(){return this.appStore.clipboard},menu(){return this.appStore.menu}},methods:{openNavPopup(o){o==="Table"?this.openTablePopup():o==="Split bill"?this.openSplitBillPopup():this.appStore.menu[o]&&this.openMenuPopup(o)},openMenuPopup(o){this.menuPopup.isShow?(this.menuPopup.isShow=!1,setTimeout(()=>{this.menuPopup={isShow:!0,title:o}})):this.menuPopup={isShow:!0,title:o}},closeMenuPopup(){this.menuPopup={isShow:!1,title:""}},cancelItem(){this.selectedBillItem&&delete this.currentBill.itemList[this.selectedBillItem],this.selectedBillItem=null},openTablePopup(){this.isShowTablePopup=!0},closeTablePopup(){this.isShowTablePopup=!1},openSplitBillPopup(){Object.keys(this.currentBill.itemList).length>1&&(this.isShowSplitBillPopup=!0)},closeSplitBillPopup(){this.isShowSplitBillPopup=!1}}}),g={class:"home"},k={class:"wrapper"};function U(o,e,F,H,L,O){const s=l("TopNav"),u=l("Bill"),n=l("Buttons"),r=l("MenuPopup"),m=l("Footer"),a=l("TablePopup"),d=l("SplitBillPopup"),P=l("AddNewTablePopup");return i(),v("div",g,[t(s,{onSelect:o.openNavPopup},null,8,["onSelect"]),A("div",k,[t(u),o.menuPopup.isShow?M("",!0):(i(),C(n,{key:0,onLogOff:e[0]||(e[0]=p=>o.$emit("logOff"))})),t(r,{modelValue:o.menuPopup.isShow,"onUpdate:modelValue":e[1]||(e[1]=p=>o.menuPopup.isShow=p),title:o.menuPopup.title,onClose:o.closeMenuPopup},null,8,["modelValue","title","onClose"])]),t(m,{username:o.username},null,8,["username"]),t(a,{modelValue:o.isShowTablePopup,"onUpdate:modelValue":e[2]||(e[2]=p=>o.isShowTablePopup=p),onClose:o.closeTablePopup,onAddNew:e[3]||(e[3]=()=>{o.isShowTablePopup=!1,o.isShowAddNewTablePopup=!0})},null,8,["modelValue","onClose"]),t(d,{modelValue:o.isShowSplitBillPopup,"onUpdate:modelValue":e[4]||(e[4]=p=>o.isShowSplitBillPopup=p),onClose:o.closeSplitBillPopup},null,8,["modelValue","onClose"]),t(P,{modelValue:o.isShowAddNewTablePopup,"onUpdate:modelValue":e[5]||(e[5]=p=>o.isShowAddNewTablePopup=p),onClose:e[6]||(e[6]=()=>{o.isShowTablePopup=!0,o.isShowAddNewTablePopup=!1})},null,8,["modelValue"])])}const wo=$(I,[["render",U],["__scopeId","data-v-d23f895b"]]);export{wo as default};