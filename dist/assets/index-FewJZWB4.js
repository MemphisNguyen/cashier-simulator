import{u as i}from"./app--tX3Mbg2.js";import m from"./index-BHHzdIGI.js";import c from"./Login-Dfp9CC1y.js";import{d as u,r,o as n,c as s}from"./index-DKfQGMTe.js";import{_ as d}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./TopNav-eMQe0jEp.js";import"./index-DTK1EZ7a.js";import"./PreviousBill-Cbosb2VW.js";import"./CurrentBill-CaLv5OZJ.js";import"./BillItemTable-D1hdbAm5.js";import"./index-CSCDVvBK.js";import"./QuickAccess-CLK2gkw1.js";import"./Functions-BAvsfqFT.js";import"./EndSalePopup--bMSq8RA.js";import"./forwardRefs-C7qFPNrq.js";import"./VDialog-BJ8lv79a.js";import"./AddNotePopup-DXKCRaEt.js";import"./VInput-BluNiq1A.js";import"./ReceiptPopup-DlkZg1on.js";import"./NumberButtons-D3WR2O6b.js";import"./NoSalePopup-0f9cS_t7.js";import"./ChargeButtons-lcedVRom.js";import"./ChargeToTablePopup-CJcHLe_k.js";import"./PosChargePopup-D74sOX1W.js";import"./VoucherPaymentPopup-Bq6_cY27.js";import"./VTextField-qxNDNcwQ.js";import"./Footer-C5t1x9UB.js";import"./MenuPopup-CSnSQpfO.js";import"./TablePopup-fvfkWyr3.js";import"./SplitBillPopup-CfCTBnc_.js";const l=u({components:{LoginScreen:c,HomeScreen:m},data:()=>({username:""}),computed:{appStore(){return i()}},created(){this.loadMenu(),this.loadTableData(),this.loadReceipt()},methods:{async loadTableData(){const e=await(await fetch("./data/table.json")).json();this.appStore.setTable(e)},async loadMenu(){const e=await(await fetch("./data/menu.json")).json();this.appStore.setMenu(e)},async loadReceipt(){const e=await(await fetch("./data/receipt.json")).json();this.appStore.setReceipt(e)}}});function f(o,e,S,h,j,w){const p=r("LoginScreen"),a=r("HomeScreen");return o.username?(n(),s(a,{key:1,username:o.username,onLogOff:e[1]||(e[1]=t=>o.username="")},null,8,["username"])):(n(),s(p,{key:0,onLogin:e[0]||(e[0]=t=>o.username=t.username)}))}const V=d(l,[["render",f]]);export{V as default};
