<template>
  <div class="bill-preview">
    <pre>{{ prevBillContent }}</pre>
  </div>
</template>
<script lang="ts">
import { useAppStore } from '@/stores/app'
import { defineComponent } from 'vue'

const PreviousBill = defineComponent({
  name: 'PreviousBill',
  computed: {
    prevBill() {
      return useAppStore().previousReceipt[0]
    },
    prevBillContent() {
      if (!this.prevBill) {
        return ''
      }
      const total = this.getBillTotal(this.prevBill.itemList)
      const totalString = ('$' + total.toFixed(2)).padStart(14)
      const cashString = this.prevBill.cash
        ? ('$' + this.prevBill.cash.toFixed(2)).padStart(14)
        : ''
      const voucherString = this.prevBill.voucher
        ? ('$' + this.prevBill.voucher.toFixed(2)).padStart(14)
        : ''
      const eftposString = this.prevBill.eftpos
        ? ('$' + this.prevBill.eftpos.toFixed(2)).padStart(14)
        : ''
      const changeString = ('$' + this.prevBill.change.toFixed(2)).padStart(14)

      return `Receipt # ${this.prevBill.receiptNumber}\n` +
        '\n' +
        this.prevBill.itemList.map(item => {
          const qty = item.qty.toFixed(2).padStart(5)
          const description = item.name.length > 17
            ? item.name.substring(0, 17)
            : item.name.padEnd(17)
          const price = ('$' + item.price.toFixed(2)).padStart(14)
          return `${qty} x ${description} ${price}\n`
        }).join('') +
        '----------------------------------------\n' +
        `                    TOTAL ${totalString}\n` +
        (voucherString && `            Other payment ${voucherString}\n`) +
        (cashString && `                     Cash ${cashString}\n`) +
        (eftposString && `                   EFTPOS ${eftposString}\n`) +
        `              CASH CHANGE ${changeString}\n` +
        '\n' +
        'NO SALE'
    },
  },
  methods: {
    getBillTotal(itemList: BillItem[]) {
      return itemList.reduce((total, item) => total + item.price * item.qty, 0)
    },
  },
})

export default PreviousBill
</script>
<style lang="scss" scoped>
</style>