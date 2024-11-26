<template>
  <v-dialog class="popup-dialog" :modelValue="modelValue" @update:modelValue="onChanged">
    <v-card>
      <v-card-title>
        <div class="dialog-title__text">Split bill</div>
        <div class="dialog-title__actions">
          <v-btn @click="onChanged(false)" class="btn-close">
            <v-icon icon="mdi-close"></v-icon>
          </v-btn>
        </div>
      </v-card-title>
      <v-card-text>
        <div class="bill-popup">
          <div class="main-bill">
            <BillItemTable
              :items="getItemByBillId(0)"
              :selected-item="selectedBillItem"
              @selected="(item) => selectedBillItem = item.name"
            />
          </div>
          <div class="split-bills">
            <div v-for="(billId, index) in childBillIds" :key="billId"  class="child-bill">
              <div>Bill #{{ index + 1 }}</div>
              <div class="child-bill__content">
                <div class="child-bill__table">
                  <BillItemTable
                    :items="getItemByBillId(billId)"
                    :selected-item="selectedBillItem"
                    @selected="(item) => selectedBillItem = item.name"
                  />
                </div>
                <div class="child-bill__actions">
                  <v-btn variant="elevated" color="primary" @click="() => moveItemToBill(billId)">Move here</v-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn variant="elevated" color="primary" @click="splitBill">Split bill</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { useAppStore } from '@/stores/app';
import { defineComponent } from 'vue'

const SplitBillPopup = defineComponent({
  name: 'SplitBillPopup',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    }
  },
  emits: ['close', 'update:modelValue'],
  data: () => ({
    billItems: {} as Record<string, BillItem & { bill: number }>,
    childBillIds: [1, 2, 3, 4],
    selectedBillItem: null as string | null
  }),
  computed: {
    appStore: () => useAppStore(),
    currentBill: () => useAppStore().currentBill,
  },
  watch: {
    modelValue(value) {
      if (value) {
        this.billItems = Object.keys(this.appStore.currentBill.itemList)
          .reduce((prev, name) => ({
            ...prev,
            [name]: {
              ...this.appStore.currentBill.itemList[name],
              bill: 0
            }
          }), {})

        this.childBillIds = Array.from({
          length: Object.keys(this.billItems).length
        }, (_, i) => i + 1)
      }
    }
  },
  methods: {
    onChanged(value: boolean) {
      this.$emit('update:modelValue', value)
    },
    addChildBill() {
      this.childBillIds.push(Math.min(...this.childBillIds) + 1)
    },
    getItemByBillId(billId: number): Record<string, BillItem> {
      return Object.values(this.billItems)
        .reduce((prev, item) => ({
          ...prev,
          ...(item.bill === billId ? { [item.name]: item } : {})
        }), {})
    },
    moveItemToBill(billId: number) {
      if (this.selectedBillItem) {
        this.billItems[this.selectedBillItem].bill = billId
        this.selectedBillItem = null
      }
    },
    splitBill() {
      const tableName = `#${+(new Date())}`;

      let order = 1
      let firstBill: TableData | null = null

      for (const billId of [0, ...this.childBillIds]) {
        const items = this.getItemByBillId(billId)
  
        if (Object.keys(items).length > 0) {
          const billItems = Object.keys(items).reduce((prev, name) => ({
              ...prev,
              [name]: {
                name: items[name].name,
                price: items[name].price,
                qty: items[name].qty,
                note: items[name].note,
              }
            }), {})

          if (!firstBill) {
            firstBill = {
              tableName: `${tableName}.${order}`,
              customerName: this.currentBill.customerName,
              buzzerNumber: this.currentBill.buzzerNumber,
              itemList: billItems,
            }
          }
          this.appStore.addTable(
            `${tableName}.${order}`,
            this.currentBill.customerName,
            billItems
          )
          order++
        }
      }

      if (this.appStore.currentBill.tableName) {
        this.appStore.removeTable(this.appStore.currentBill.tableName)
      }

      this.appStore.setCurrentBill(firstBill!)
      this.$emit('close')
    },
  }
})

export default SplitBillPopup
</script>
<style lang="scss" scoped>
.bill-popup {
  display: grid;
  grid-template-columns: 2fr 3fr;
  border: 1px solid gray;

  .main-bill {
    border-right: 1px solid gray;
    padding: 10px;
  }

  .child-bill {
    padding: 10px;
    border-bottom: 1px solid gray;

    .child-bill__content {
      display: flex;
      gap: 20px;
    }

    &__table {
      flex-grow: 1;
    }
  }
}
</style>