import{O as l}from"./index-RNnRzH3G.js";const r=l("app",{state:()=>({currentBill:{tableName:"",itemList:{}},selectedBillItem:null,menu:{},clipboard:{type:"",value:""},tableList:{},accummulatedCash:0,voucherCharge:0,previousReceipt:[]}),getters:{totalCurrentBill(){return Object.values(this.currentBill.itemList).reduce((t,e)=>t+e.price*e.qty,0)},eftposCharge(){const t=this.totalCurrentBill-this.voucherCharge-this.accummulatedCash;return t>0?t:0},totalCharge(){return this.voucherCharge+this.accummulatedCash+this.eftposCharge}},actions:{setCurrentBill(t){this.currentBill=t},setSelectedBillItem(t){this.selectedBillItem=t},setMenu(t){this.menu=t},setClipboard(t,e){t!=="Cash"&&this.resetAccummulatedCash(),this.clipboard={type:t,value:e}},clearClipboard(){this.clipboard={type:"",value:""}},addItemToCurrentBill(t){this.currentBill.itemList[t.name]?(this.currentBill.itemList[t.name].qty+=t.qty,this.currentBill.itemList={...this.currentBill.itemList}):this.currentBill.itemList={...this.currentBill.itemList,[t.name]:{qty:t.qty,name:t.name,price:t.price}}},getClipboardNumber(t){return parseFloat(this.clipboard.value)||t||0},removeSelectedItemFromCurrentBill(){this.selectedBillItem&&(delete this.currentBill.itemList[this.selectedBillItem],this.selectedBillItem=null)},toggleSelectBillItem(t){this.selectedBillItem=this.selectedBillItem===t.name?null:t.name},setTable(t){this.tableList=t},addTable(t,e){this.tableList[t]={tableName:t,itemList:e??{}}},chargeToTable(t){this.currentBill.tableName?this.tableList[t].itemList=this.currentBill.itemList:this.tableList[t]={tableName:t,itemList:Object.keys(this.currentBill.itemList).reduce((e,i)=>(e[i]?e[i].qty+=this.currentBill.itemList[i].qty:e[i]={qty:this.currentBill.itemList[i].qty,name:this.currentBill.itemList[i].name,price:this.currentBill.itemList[i].price},e),this.tableList[t].itemList)},this.currentBill={tableName:"",itemList:{}}},addCash(t){this.accummulatedCash+=t},resetAccummulatedCash(){this.accummulatedCash=0},setVoucherCharge(t){this.voucherCharge=t},endSale(){this.previousReceipt.unshift({receiptNumber:(+new Date).toString(),itemList:Object.values(this.currentBill.itemList),cash:this.accummulatedCash,voucher:this.voucherCharge,eftpos:this.eftposCharge,change:this.totalCharge-this.totalCurrentBill}),this.resetAccummulatedCash(),this.voucherCharge=0,this.currentBill.tableName&&this.removeTable(this.currentBill.tableName),this.currentBill={tableName:"",itemList:{}},this.clearClipboard()},setReceipt(t){this.previousReceipt=t},removeTable(t){delete this.tableList[this.currentBill.tableName]}}});export{r as u};
