<template>
  <div class="functions">
    <div class="tile-button"><button class="search-sgl">Search Beer SGL</button></div>
    <div class="tile-button grid-item-extend-x"><button class="member-search">Member Search</button></div>
    <div class="tile-button"><button class=" senior-discount">Seniors Discount</button></div>
    <div v-for="cashType in cashTypes" class="tile-button">
      <button
        class="charge"
        :style="cashType.image ? {
          background: cashType.image,
          backgroundSize: '100% 100%',
          color: 'transparent'
        } : {}"
        @click="() => addCash(cashType.value)"
      >
        {{ cashType.value }}
      </button>
    </div>
    <div class="tile-button"><button class="function" @click="logOff">log off</button></div>
    <div class="tile-button"><button class="function">hold sale</button></div>
    <div class="tile-button"><button class="function" @click="showAddNotePopup">free text</button></div>
    <div class="tile-button"><button class="function" @click="showPrintReceiptPopup">reprint receipt</button></div>
    <div class="tile-button"><button class="function" @click="cancelItem">cancel item</button></div>
    <div class="tile-button"><button class="function" @click="cancelSale">cancel sale</button></div>
    <div class="tile-button"><button class="function">refund (-)</button></div>
    <div class="tile-button"><button class="function">search items</button></div>
    <div class="number-cash-buttons">
      <div class="number-buttons">
        <div v-for="num in [7, 8, 9, 4, 5, 6, 1, 2, 3]" class="tile-button">
          <button class="number" @click="() => appendToClipboard(num.toString())">{{ num }}</button>
        </div>
        <div class="tile-button"><button class="charge no-sale" @click="isShowNoSalePopup = true">No sale</button></div>
        <div class="tile-button"><button class="number" @click="() => appendToClipboard('0')">0</button></div>
        <div class="tile-button"><button class="number" @click="() => appendToClipboard('.')">.</button></div>
      </div>
      <div class="cash-buttons">
        <div class="tile-button"><button class="charge" @click="chargeToTable">Charge to table</button></div>
        <div class="tile-button"><button class="charge" @click="() => isShowVoucherPopup = true">Other payment</button></div>
        <div class="tile-button"><button class="charge" @click="() => isShowEFTPOS = true">EFTPOS</button></div>
        <div class="tile-button"><button class="charge" @click="chargeByCash">Cash</button></div>
      </div>
    </div>
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
    <AddNotePopup
      v-model="isShowAddNotePopup"
      @submit="addNoteToItem"
      @close="() => isShowAddNotePopup = false"
    />
    <ReceiptPopup
      v-model="isShowReceiptPopup"
      @close="() => isShowReceiptPopup = false"
    />
    <NoSalePopup
      v-model="isShowNoSalePopup"
      @close="() => isShowNoSalePopup = false"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useAppStore } from '@/stores/app'
import ChargeToTablePopup from '../ChargeToTablePopup.vue'
import PosChargePopup from '../PosChargePopup.vue'
import VoucherPaymentPopup from '../VoucherPaymentPopup.vue'
import EndSalePopup from '../EndSalePopup.vue'
import AddNotePopup from '../AddNotePopup.vue'
import ReceiptPopup from '../ReceiptPopup.vue'
import NoSalePopup from '../NoSalePopup.vue'

const Functions = defineComponent({
  name: 'Functions',
  components: {
    ChargeToTablePopup,
    PosChargePopup,
    VoucherPaymentPopup,
    EndSalePopup,
    AddNotePopup,
    ReceiptPopup,
    NoSalePopup,
  },
  emits: ['logOff'],
  data: () => ({
    cashTypes: [
      { value: 100 },
      { value: 50, image: 'url(./images/aud-50.jpg)' },
      { value: 20, image: 'url(./images/aud-20.jpg)' },
      { value: 10, image: 'url(./images/aud-10.jpg)' },
    ],
    isShowChargeToTablePopup: false,
    isShowEFTPOS: false,
    isShowVoucherPopup: false,
    isShowEndSalePopup: false,
    isShowAddNotePopup: false,
    isShowReceiptPopup: false,
    isShowNoSalePopup: false,
  }),
  computed: {
    appStore: () => useAppStore(),
    menu() {
      return this.appStore.menu
    },
    clipboard() {
      return this.appStore.clipboard
    },
  },
  methods: {
    appendToClipboard(char: string) {
      if (this.appStore.clipboard.type !== 'Amount') {
        this.appStore.clearClipboard()
      }

      if (char === '.' && this.clipboard.value === '') {
        char = '0.'
      }

      const newValue = `${this.clipboard.value}${char}`

      if (newValue.match(/^\d+(\.\d*)?$/)) {
        this.appStore.setClipboard('Amount', newValue)
      } else {
        this.appStore.clearClipboard()
      }
    },
    logOff() {
      this.$emit('logOff')
    },
    cancelItem() {
      this.appStore.removeSelectedItemFromCurrentBill()
    },
    chargeToTable() {
      if (Object.keys(this.appStore.currentBill.itemList).length > 0) {
        if (this.appStore.currentBill.tableName) {
          this.appStore.chargeToTable(this.appStore.currentBill.tableName)
        } else {
          this.isShowChargeToTablePopup = true
        }
      }
    },
    addCash(value: number) {
      if (this.appStore.totalCurrentBill > 0) {
        this.appStore.addCash(value)
        this.appStore.setClipboard('Cash', this.appStore.accummulatedCash.toString())
  
        if (this.appStore.accummulatedCash + this.appStore.voucherCharge >= this.appStore.totalCurrentBill) {
          this.endSale()
        }
      }
    },
    endSale() {
      this.isShowEndSalePopup = true
    },
    clearCurrentSale() {
      this.appStore.endSale()
      this.isShowEndSalePopup = false
    },
    onChargeEFTPOSCompleted() {
      this.isShowEFTPOS = false
      const cashInput = this.appStore.getClipboardNumber(0)

      if (cashInput > 0) {
        this.appStore.addCash(cashInput)
        this.appStore.clearClipboard()
      }

      this.isShowEndSalePopup = true
    },
    chargeByCash() {
      this.appStore.resetAccummulatedCash()
      this.appStore.addCash(this.appStore.totalCurrentBill - this.appStore.voucherCharge)
      this.endSale()
    },
    showAddNotePopup() {
      if (this.appStore.selectedBillItem) {
        this.isShowAddNotePopup = true
      }
    },
    addNoteToItem(note: string) {
      if (this.appStore.selectedBillItem) {
        this.appStore.currentBill.itemList[this.appStore.selectedBillItem].note = note
        this.isShowAddNotePopup = false
      }
    },
    showPrintReceiptPopup() {
      this.isShowReceiptPopup = true
    },
    cancelSale() {
      this.appStore.setCurrentBill({
        tableName: '',
        itemList: {},
      })
    },
  },
})

export default Functions
</script>
<style lang="scss" scoped>
.functions {
  display: grid;
  grid-column: span 4;
  grid-row: span 8;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
  gap: var(--grid-gap);
}

.tile-button {

  .number {
    font-size: 2em;
  }

  .function {
    background: linear-gradient(white, rgb(81, 0, 255) 20%, rgb(81, 0, 255) 80%, white);
    color: white;
  }

  .search-sgl {
    background: linear-gradient(white, deeppink, red, deeppink, white);
  }

  .member-search {
    background: orange;
    color: blue;
  }

  .senior-discount {
    background: linear-gradient(white, rgb(255, 118, 191), white);
  }

  .charge {
    background: linear-gradient(white, rgb(162, 181, 255), white);
    color: blue;
  }

  .no-sale {
    color: red;
  }
}



.number-cash-buttons {
  grid-column: span 4;
  grid-row: span 4;
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
  gap: var(--grid-gap);
}

.number-buttons {
  display: grid;
  grid-column: span 3;
  grid-row: span 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
  gap: var(--grid-gap);
}

.cash-buttons {
  display: grid;
  grid-row: span 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
  gap: var(--grid-gap);
}
</style>