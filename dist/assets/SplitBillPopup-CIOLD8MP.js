import{_ as v}from"./BillItemTable-DUXBlubs.js";import{u,g as B}from"./app-BHEqaD6V.js";import{d as _,o as m,c as g,w as d,a as s,e as o,b as h,h as V,F as S,g as b,t as y}from"./index-Bhu2MBT2.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as k,a as c,b as $,c as N,d as T,e as j}from"./forwardRefs-DtulCRCk.js";import{V as O}from"./VDialog-BE3_3SQG.js";const w=_({name:"SplitBillPopup",props:{modelValue:{type:Boolean,default:!1}},emits:["close","update:modelValue"],data:()=>({billItems:{},childBillIds:[1,2,3,4],selectedBillItem:null}),computed:{appStore:()=>u(),currentBill:()=>u().currentBill},watch:{modelValue(e){e&&(this.billItems=Object.keys(this.appStore.currentBill.itemList).reduce((l,t)=>({...l,[t]:{...this.appStore.currentBill.itemList[t],bill:0}}),{}),this.childBillIds=Array.from({length:Object.keys(this.billItems).length},(l,t)=>t+1))}},methods:{onChanged(e){this.$emit("update:modelValue",e)},addChildBill(){this.childBillIds.push(Math.min(...this.childBillIds)+1)},getItemByBillId(e){return Object.values(this.billItems).reduce((l,t)=>({...l,...t.bill===e?{[B(t)]:t}:{}}),{})},moveItemToBill(e){this.selectedBillItem&&(this.billItems[this.selectedBillItem].bill=e,this.selectedBillItem=null)},splitBill(){const e=`#${+new Date}`;let l=1,t=null;for(const p of[0,...this.childBillIds]){const a=this.getItemByBillId(p);if(Object.keys(a).length>0){const n=Object.keys(a).reduce((r,i)=>({...r,[i]:{name:a[i].name,price:a[i].price,qty:a[i].qty,note:a[i].note,variation:a[i].variation}}),{});t||(t={tableName:`${e}.${l}`,customerName:this.currentBill.customerName,buzzerNumber:this.currentBill.buzzerNumber,itemList:n}),this.appStore.addTable(`${e}.${l}`,this.currentBill.customerName,n),l++}}this.appStore.currentBill.tableName&&this.appStore.removeTable(this.appStore.currentBill.tableName),this.appStore.setCurrentBill(t),this.$emit("close")},getBillItemId:B}}),z={class:"dialog-title__actions"},L={class:"bill-popup"},A={class:"main-bill"},D={class:"split-bills"},P={class:"child-bill__content"},q={class:"child-bill__table"},F={class:"child-bill__actions"};function M(e,l,t,p,a,n){const r=v;return m(),g(O,{class:"popup-dialog",modelValue:e.modelValue,"onUpdate:modelValue":e.onChanged},{default:d(()=>[s(j,null,{default:d(()=>[s(k,null,{default:d(()=>[l[3]||(l[3]=o("div",{class:"dialog-title__text"},"Split bill",-1)),o("div",z,[s(c,{onClick:l[0]||(l[0]=i=>e.onChanged(!1)),class:"btn-close"},{default:d(()=>[s($,{icon:"mdi-close"})]),_:1})])]),_:1}),s(N,null,{default:d(()=>[o("div",L,[o("div",A,[s(r,{items:e.getItemByBillId(0),"selected-item":e.selectedBillItem,onSelected:l[1]||(l[1]=i=>e.selectedBillItem=e.getBillItemId(i))},null,8,["items","selected-item"])]),o("div",D,[(m(!0),h(S,null,V(e.childBillIds,(i,I)=>(m(),h("div",{key:i,class:"child-bill"},[o("div",null,"Bill #"+y(I+1),1),o("div",P,[o("div",q,[s(r,{items:e.getItemByBillId(i),"selected-item":e.selectedBillItem,onSelected:l[2]||(l[2]=f=>e.selectedBillItem=e.getBillItemId(f))},null,8,["items","selected-item"])]),o("div",F,[s(c,{variant:"elevated",color:"primary",onClick:()=>e.moveItemToBill(i)},{default:d(()=>l[4]||(l[4]=[b("Move here")])),_:2},1032,["onClick"])])])]))),128))])])]),_:1}),s(T,null,{default:d(()=>[s(c,{variant:"elevated",color:"primary",onClick:e.splitBill},{default:d(()=>l[5]||(l[5]=[b("Split bill")])),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])}const Q=C(w,[["render",M],["__scopeId","data-v-8851d4b1"]]);export{Q as default};