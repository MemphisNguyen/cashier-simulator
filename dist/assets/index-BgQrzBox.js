import{u as a}from"./app-Belduo9F.js";import m from"./index-Dn7HLId5.js";import c from"./Login-EloxLXC5.js";import{d as u,r,o as n,c as p}from"./index-DcSSRpdH.js";import{_ as d}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./TopNav-Civ-2vV7.js";import"./index-Dp9ghQg6.js";import"./PreviousBill-BkZYqED8.js";import"./CurrentBill-DBKJvpII.js";import"./BillItemTable-mD61GxHY.js";import"./index-yWmMM10_.js";import"./QuickAccess-VHs6jzOM.js";import"./Functions-Ds9AfiYh.js";import"./EndSalePopup-D6T7VVR9.js";import"./forwardRefs-v1Zr1vtO.js";import"./VDialog-B1OOBwIC.js";import"./AddNotePopup-D8Kl_fze.js";import"./VInput-Cm8nlOaP.js";import"./ReceiptPopup-B_fQhnqw.js";import"./NumberButtons-CBieevjT.js";import"./NoSalePopup-mTbcaTQt.js";import"./ChargeButtons-DExxa2VT.js";import"./ChargeToTablePopup-CFsnlGtQ.js";import"./PosChargePopup-Cfp-nEU7.js";import"./VoucherPaymentPopup-BFs9GKiw.js";import"./VTextField-Dqdwn_7v.js";import"./OpenItemPopup-x-UwKv4a.js";import"./CashOutPopup-SRI_AWMh.js";import"./BuzzerPopup-DwgOflb1.js";import"./Footer-BKSywB7p.js";import"./MenuPopup-Cu_Qiu8u.js";import"./MenuItemVariationPopup-Cu48hxF2.js";import"./TablePopup-DoOYI5fH.js";import"./SplitBillPopup-DFL5qzB0.js";import"./AddTablePopup-CqoyNcbh.js";const l=u({components:{LoginScreen:c,HomeScreen:m},data:()=>({username:""}),computed:{appStore(){return a()}},created(){this.loadMenu(),this.loadTableData(),this.loadReceipt()},methods:{async loadTableData(){const o=await(await fetch("./data/table.json")).json();this.appStore.setTable(o)},async loadMenu(){const o=await(await fetch("./data/menu.json")).json();this.appStore.setMenu(o)},async loadReceipt(){const o=await(await fetch("./data/receipt.json")).json();this.appStore.setReceipt(o)}}});function f(e,o,S,h,j,w){const s=r("LoginScreen"),i=r("HomeScreen");return e.username?(n(),p(i,{key:1,username:e.username,onLogOff:o[1]||(o[1]=t=>e.username="")},null,8,["username"])):(n(),p(s,{key:0,onLogin:o[0]||(o[0]=t=>e.username=t.username)}))}const oo=d(l,[["render",f]]);export{oo as default};