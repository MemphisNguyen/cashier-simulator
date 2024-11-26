<template>
  <div class="functions">
    <div class="actions">
      <div class="tile-button"><button class="search-sgl" @click="() => {openType = 'food'; isShowOpenItemPopup = true}">Open food</button></div>
      <div class="tile-button"><button class="search-sgl" @click="() => {openType = 'beverage'; isShowOpenItemPopup = true}">Open beverage</button></div>
      <div class="tile-button"><button class="member-search">Member Search</button></div>
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
      <div class="tile-button"><button class="function" @click="isShowCashOutPopup = true">Cash out</button></div>
      <div class="tile-button"><button class="function" @click="showAddNotePopup">free text</button></div>
      <div class="tile-button"><button class="function" @click="showPrintReceiptPopup">reprint receipt</button></div>
      <div class="tile-button"><button class="function" @click="cancelItem">cancel item</button></div>
      <div class="tile-button"><button class="function" @click="cancelSale">cancel sale</button></div>
      <div class="tile-button"><button class="function" @click="isShowBuzzerPopup = true">Buzzer #</button></div>
      <div class="tile-button"><button class="function">search items</button></div>
    </div>
    
    <div class="numbers-cashes">
      <NumberButtons />
      <ChargeButtons />
    </div>
    <AddNotePopup
      v-model="isShowAddNotePopup"
      @submit="addNoteToItem"
      @close="() => isShowAddNotePopup = false"
    />
    <ReceiptPopup
      v-model="isShowReceiptPopup"
      @close="() => isShowReceiptPopup = false"
    />
    <EndSalePopup 
      v-model="isShowEndSalePopup"
      @close="clearCurrentSale"
    />
    <OpenItemPopup
      :type="openType"
      v-model="isShowOpenItemPopup"
      @submit="addOpenItem"
    />
    <CashOutPopup
      v-model="isShowCashOutPopup"
      @submit="() => {isShowCashOutPopup = false; isShowPosChargePopup = true }"
    />
    <PosChargePopup
      v-model="isShowPosChargePopup"
      @close="isShowPosChargePopup = false"
    />
    <BuzzerPopup
      v-model="isShowBuzzerPopup"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useAppStore } from '@/stores/app'
import EndSalePopup from '../EndSalePopup.vue'
import AddNotePopup from '../AddNotePopup.vue'
import ReceiptPopup from '../ReceiptPopup.vue'
import NumberButtons from './NumberButtons.vue'
import ChargeButtons from './ChargeButtons.vue'
import OpenItemPopup from './OpenItemPopup.vue'
import CashOutPopup from './CashOutPopup.vue'
import PosChargePopup from '../PosChargePopup.vue'
import BuzzerPopup from './BuzzerPopup.vue'

const Functions = defineComponent({
  name: 'Functions',
  components: {
    AddNotePopup,
    ReceiptPopup,
    EndSalePopup,
    NumberButtons,
    ChargeButtons,
    OpenItemPopup,
    CashOutPopup,
    PosChargePopup,
    BuzzerPopup,
  },
  emits: ['logOff'],
  data: () => ({
    cashTypes: [
      { value: 100, image: 'url(./images/aud-100.jpg)' },
      { value: 50, image: 'url(./images/aud-50.jpg)' },
      { value: 20, image: 'url(./images/aud-20.jpg)' },
      { value: 10, image: 'url(./images/aud-10.jpg)' },
    ],
    isShowAddNotePopup: false,
    isShowReceiptPopup: false,
    isShowEndSalePopup: false,
    isShowOpenItemPopup: false,
    openType: 'food' as 'food' | 'beverage',
    isShowCashOutPopup: false,
    isShowPosChargePopup: false,
    isShowBuzzerPopup: false,
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
    logOff() {
      this.$emit('logOff')
    },
    cancelItem() {
      this.appStore.removeSelectedItemFromCurrentBill()
    },
    endSale() {
      this.isShowEndSalePopup = true
    },
    clearCurrentSale() {
      this.appStore.endSale()
      this.isShowEndSalePopup = false
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
        customerName: '',
        buzzerNumber: undefined,
        itemList: {},
      })
    },
    addOpenItem(name: string, price: number) {
      this.appStore.addItemToCurrentBill({
        name,
        price,
        qty: 1,
      })
      this.isShowOpenItemPopup = false
    }
  },
})

export default Functions
</script>
<style lang="scss" scoped>
.functions {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, calc(50% - var(--grid-gap) / 2));
  gap: var(--grid-gap);
  height: var(--main-height);
}

.actions {
  display: grid;
  grid-template-columns: repeat(4, calc((100% - var(--grid-gap) * 3) / 4));
  grid-template-rows: repeat(4, calc((100% - var(--grid-gap) * 3) / 4));
  gap: var(--grid-gap);
}
.numbers-cashes {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: calc((100% - var(--grid-gap) * 3) / 4 * 3 + var(--grid-gap) * 2) calc((100% - var(--grid-gap) * 3) / 4);
  gap: var(--grid-gap);
}

.tile-button {
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
}
</style>