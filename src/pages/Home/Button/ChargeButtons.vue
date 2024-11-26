<template>
  <div class="cash-buttons">
    <div class="tile-button"><button class="charge" @click="chargeToTable">Charge to table</button></div>
    <div class="tile-button"><button class="charge" @click="() => isShowVoucherPopup = true">Other payment</button></div>
    <div class="tile-button"><button class="charge" @click="() => isShowEFTPOS = true">EFTPOS</button></div>
    <div class="tile-button"><button class="charge" @click="chargeByCash">Cash</button></div>
    <ChargeToTablePopup
      v-model="isShowChargeToTablePopup"
      @close="() => isShowChargeToTablePopup = false"
    />
    <PosChargePopup
      v-model="isShowEFTPOS"
      @close="onChargeEFTPOSCompleted"
    />
    <VoucherPaymentPopup
      v-model="isShowVoucherPopup"
      @close="() => isShowVoucherPopup = false"
    />
    <EndSalePopup 
      v-model="isShowEndSalePopup"
      @close="clearCurrentSale"
    />
  </div>
</template>
<script lang="ts">
import { useAppStore } from '@/stores/app'
import { defineComponent } from 'vue'
import ChargeToTablePopup from '../ChargeToTablePopup.vue'
import PosChargePopup from '../PosChargePopup.vue'
import VoucherPaymentPopup from '../VoucherPaymentPopup.vue'
import EndSalePopup from '../EndSalePopup.vue'

const ChargeButtons = defineComponent({
  name: 'ChargeButtons',
  components: {
    ChargeToTablePopup,
    PosChargePopup,
    VoucherPaymentPopup,
    EndSalePopup,
  },
  data: () => ({
    isShowChargeToTablePopup: false,
    isShowEFTPOS: false,
    isShowVoucherPopup: false,
    isShowEndSalePopup: false,
  }),
  computed: {
    appStore: () => useAppStore(),
    // clipboard() {
    //   return this.appStore.clipboard
    // },
  },
  methods: {
    chargeToTable() {
      if (Object.keys(this.appStore.currentBill.itemList).length > 0) {
        if (this.appStore.currentBill.tableName) {
          this.appStore.chargeToTable(this.appStore.currentBill.tableName)
        } else {
          this.isShowChargeToTablePopup = true
        }
      }
    },
    onChargeEFTPOSCompleted(isSuccess: boolean) {
      this.isShowEFTPOS = false
      if (isSuccess) {
        const cashInput = this.appStore.getClipboardNumber(0)

        if (cashInput > 0) {
          this.appStore.addCash(cashInput)
          this.appStore.clearClipboard()
        }

        this.isShowEndSalePopup = true
      } else {
        this.appStore.clearClipboard()
      }
    },
    endSale() {
      this.isShowEndSalePopup = true
    },
    clearCurrentSale() {
      this.appStore.endSale()
      this.isShowEndSalePopup = false
    },
    chargeByCash() {
      if (this.appStore.clipboard.value === '') {
        this.appStore.resetAccummulatedCash()
        this.appStore.addCash(this.appStore.totalCurrentBill - this.appStore.voucherCharge)
  
        this.endSale()
      } else {
        this.appStore.addCash(this.appStore.getClipboardNumber(0))
        this.appStore.clearClipboard()

        if (this.appStore.accummulatedCash + this.appStore.voucherCharge >= this.appStore.totalCurrentBill) {
          this.endSale()
        }
      }
    },
  }
})

export default ChargeButtons
</script>
<style lang="scss" scoped>
.cash-buttons {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, calc((100% - var(--grid-gap) * 3) / 4));
  gap: var(--grid-gap);
}


.tile-button {

.function {
  background: linear-gradient(white, rgb(81, 0, 255) 20%, rgb(81, 0, 255) 80%, white);
  color: white;
}

.charge {
  background: linear-gradient(white, rgb(162, 181, 255), white);
  color: blue;
}
}
</style>