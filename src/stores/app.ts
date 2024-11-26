// Utilities
import { defineStore } from 'pinia'

type ClipboardTypes = 'Cash' | 'Amount' | ''

export const useAppStore = defineStore('app', {
  state: () => ({
    currentBill: {
      tableName: '',
      itemList: {},
    } as TableData,
    selectedBillItem: null as string | null,
    menu: {} as Record<string, MenuData[]>,
    clipboard: {
      type: '' as ClipboardTypes,
      value: '',
    },
    tableList: {} as Record<string, TableData>,
    accummulatedCash: 0,
    voucherCharge: 0,
    previousReceipt: [] as ReceiptData[],
  }),
  getters: {
    totalCurrentBill(): number {
      return Object.values(this.currentBill.itemList).reduce((acc, item) => acc + item.price * item.qty, 0)
    },
    eftposCharge(): number {
      const remain = this.totalCurrentBill - this.voucherCharge - this.accummulatedCash

      if (remain > 0) {
        return remain
      } else {
        return 0
      }
    },
    totalCharge(): number {
      return this.voucherCharge + this.accummulatedCash + this.eftposCharge
    }
  },
  actions: {
    setCurrentBill(bill: typeof this.currentBill) {
      this.currentBill = bill
    },
    setSelectedBillItem(item: typeof this.selectedBillItem) {
      this.selectedBillItem = item
    },
    setMenu(menu: typeof this.menu) {
      this.menu = menu
    },
    setClipboard(type: ClipboardTypes, value: string) {
      this.clipboard = {
        type,
        value,
      }
    },
    clearClipboard() {
      this.clipboard = {
        type: '',
        value: '',
      }
    },
    addItemToCurrentBill(item: BillItem) {
      const itemName = [item.name, ...(item.variation ?? [])].join('|')

      if (this.currentBill.itemList[itemName]) {
        this.currentBill.itemList[itemName].qty += item.qty
        this.currentBill.itemList = {
          ...this.currentBill.itemList,
        }
      } else {
        this.currentBill.itemList = {
          ...this.currentBill.itemList,
          [itemName]: {
            qty: item.qty,
            name: item.name,
            price: item.price,
            variation: item.variation,
          }
        }
      }
    },
    getClipboardNumber(defaultValue?: number) {
      return parseFloat(this.clipboard.value) || defaultValue || 0
    },
    removeSelectedItemFromCurrentBill() {
      if (this.selectedBillItem) {
        delete this.currentBill.itemList[this.selectedBillItem]
        this.selectedBillItem = null
      }
    },
    toggleSelectBillItem(item: BillItem) {
      this.selectedBillItem = this.selectedBillItem === item.name ? null : item.name
    },
    setTable(data: Record<string, TableData>) {
      this.tableList = data
    },
    addTable(tableName: string, customerName: string, items?: Record<string, BillItem>) {
      this.tableList[tableName] = {
        tableName,
        customerName,
        itemList: items ?? {},
      }
    },
    chargeToTable(tableName: string) {
      if (this.currentBill.tableName) {
        this.tableList[tableName].itemList = this.currentBill.itemList
      } else {
        this.tableList[tableName] = {
          tableName,
          customerName: this.tableList[tableName].customerName,
          itemList: Object.keys(this.currentBill.itemList).reduce(
            (list, itemName) => {
              if (list[itemName]) {
                list[itemName].qty += this.currentBill.itemList[itemName].qty
              } else {
                list[itemName] = {
                  qty: this.currentBill.itemList[itemName].qty,
                  name: this.currentBill.itemList[itemName].name,
                  price: this.currentBill.itemList[itemName].price,
                  variation: this.currentBill.itemList[itemName].variation,
                }
              }

              return list
            }, this.tableList[tableName].itemList),
        }
      }

      this.currentBill = {
        tableName: '',
        customerName: '',
        itemList: {},
      }
    },
    addCash(value: number) {
      this.accummulatedCash += value
    },
    resetAccummulatedCash() {
      this.accummulatedCash = 0
    },
    setVoucherCharge(value: number) {
      this.voucherCharge = value
    },
    endSale() {
      this.previousReceipt.unshift({
        receiptNumber: (+(new Date())).toString(),
        itemList: Object.values(this.currentBill.itemList),
        cash: this.accummulatedCash,
        voucher: this.voucherCharge,
        eftpos: this.eftposCharge,
        change: this.totalCharge - this.totalCurrentBill,
      })
      this.resetAccummulatedCash()
      this.voucherCharge = 0

      if (this.currentBill.tableName) {
        this.removeTable(this.currentBill.tableName)
      }

      this.currentBill = {
        tableName: '',
        customerName: '',
        itemList: {},
      }
      this.clearClipboard()
    },
    setReceipt(data: ReceiptData[]) {
      this.previousReceipt = data
    },
    removeTable(tableName: string) {
      delete this.tableList[this.currentBill.tableName]
    }
  }
})
