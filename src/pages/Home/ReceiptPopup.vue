<template>
  <v-dialog
    class="popup-dialog"
    :modelValue="modelValue"
    @update:modelValue="onChanged"
    height="100%"
  >
    <v-card height="100%">
      <v-card-title>
        <div class="dialog-title__text">Receipt</div>
        <div class="dialog-title__actions">
          <v-btn class="btn-close" @click="$emit('close')">
            <v-icon icon="mdi-close"></v-icon>
          </v-btn>
        </div>
      </v-card-title>
      
      <div class="receipt-popup">
        <div class="receipt-list">
          <div
            v-for="item in receiptList"
            :class="{
              'receipt-item': true,
              'selected': selectedReceipt === item
            }"
            @click="selectedReceipt = item"
          >
            <div><strong>Receipt #{{ item.receiptNumber }}</strong></div>
            <div>Total: ${{ getReceiptTotal(item).toFixed(2) }}</div>
          </div>
        </div>
        <div class="receipt-details" v-if="selectedReceipt">
          <div class="receipt-details__content">
            <p><strong>Receipt #{{ selectedReceipt.receiptNumber }}</strong></p>
            <p v-if="selectedReceipt.buzzerNumber != undefined">Buzzer #{{ selectedReceipt.buzzerNumber }}</p>
            <BillItemTable :items="mapToBillTableData(selectedReceipt.itemList)" />
            <table class="charge-info">
              <tbody>
                <tr>
                  <th>Total:</th>
                  <td>${{ getReceiptTotal(selectedReceipt).toFixed(2) }}</td>
                </tr>
                <tr v-if="selectedReceipt.voucher > 0">
                  <th>Other payment:</th>
                  <td>${{ selectedReceipt.voucher.toFixed(2) }}</td>
                </tr>
                <tr v-if="selectedReceipt.cash > 0">
                  <th>Cash:</th>
                  <td>${{ selectedReceipt.cash.toFixed(2) }}</td>
                </tr>
                <tr v-if="selectedReceipt.eftpos > 0">
                  <th>EFTPOS:</th>
                  <td>${{ selectedReceipt.eftpos.toFixed(2) }}</td>
                </tr>
                <tr>
                  <th>Change:</th>
                  <td>${{ selectedReceipt.change.toFixed(2) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="receipt-details__actions">
            <v-btn color="primary">Reprint</v-btn>
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { useAppStore } from '@/stores/app';
import { defineComponent } from 'vue'

const ReceiptPopup = defineComponent({
  name: 'ReceiptPopup',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    }
  },
  emits: ['update:modelValue', 'close'],
  data: () => ({
    selectedReceipt: null as ReceiptData | null 
  }),
  computed: {
    receiptList: () => useAppStore().previousReceipt,
  },
  watch: {
    modelValue(value) {
      if (!value) {
        this.selectedReceipt = null
      }
    }
  },
  methods: {
    onChanged(value: boolean) {
      this.$emit('update:modelValue', value)
    },
    getReceiptTotal(receipt: ReceiptData) {
      return receipt.itemList.reduce((acc, item) => acc + item.price * item.qty, 0)
    },
    mapToBillTableData(itemList: BillItem[]) {
      return itemList.reduce((prev, item) => ({
        ...prev,
        [item.name]: item
      }), {})
    }
  },
})

export default ReceiptPopup
</script>
<style lang="scss" scoped>
.receipt-popup {
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr;
  height: 100%;
  border: 1px solid gray;
}
.receipt-list {
  border-right: 1px solid gray;

  .receipt-item {
    border-bottom: 1px solid gray;
    padding: 10px;
    cursor: pointer;

    &:hover:not(.selected) {
      background-color: lightblue;
    }

    &.selected {
      background-color: blue;
      color: white;
    }
  }
}

.receipt-details {
  display: flex;
  flex-direction: column;
  
  &__content {
    flex-grow: 1;
    padding: 10px;
  }
  
  &__actions {
    border-top: 1px solid gray;
    padding: 10px;
  }
}
.charge-info {
  margin-top: 10px;
  margin-left: auto;

  th, td {
    padding: 2px;
    text-align: right;
  }
}

</style>