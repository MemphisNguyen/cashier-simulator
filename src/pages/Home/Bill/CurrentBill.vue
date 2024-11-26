<template>
  <div class="current-bill">
    <div class="d-flex justify-space-between">
      <div>
          Table:
          <span :class="{'text-disabled': currentBill.tableName === '' }">{{ currentBill.tableName || 'N/A' }}</span>
      </div>
      <div v-if="currentBill.buzzerNumber != undefined">
        Buzzer #{{ currentBill.buzzerNumber }}
      </div>
    </div>
    <BillItemTable
      :items="currentBill.itemList"
      :selected-item="selectedBillItem"
      @selected="toggleSelectItem"
    />
  </div>
</template>
<script lang="ts">
import BillItemTable from '@/components/BillItemTable.vue'
import { useAppStore } from '@/stores/app'
import { defineComponent } from 'vue'

const currentBill = defineComponent({
  name: 'currentBill',
  components: {
    BillItemTable,
  },
  computed: {
    appStore: () => useAppStore(),
    currentBill() {
      return this.appStore.currentBill
    },
    selectedBillItem() {
      return this.appStore.selectedBillItem
    },
  },
  methods: {
    toggleSelectItem(item: BillItem) {
      this.appStore.toggleSelectBillItem(item)
    }
  }
})

export default currentBill
</script>
<style lang="scss" scoped>
.current-bill {
  flex-grow: 1;
  border: 1px solid gray;
  overflow: auto;
  padding: var(--grid-gap);
}
</style>