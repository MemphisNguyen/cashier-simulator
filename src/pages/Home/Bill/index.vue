<template>
  <div class="bill">
    <CurrentBill />
    <div class="bill-total">
      <div>Total ({{ totalItem }}) ${{ totalPrice.toFixed(2) }}</div>
      <div v-if="appStore.voucherCharge > 0">Other payment: ${{ appStore.voucherCharge.toFixed(2) }}</div>
      <div v-if="appStore.accummulatedCash > 0">Cash: ${{ appStore.accummulatedCash.toFixed(2) }}</div>
    </div>
    <PreviousBill />
  </div>
</template>
<script lang="ts">
import { useAppStore } from '@/stores/app'
import { defineComponent } from 'vue'
import PreviousBill from './PreviousBill.vue'
import CurrentBill from './CurrentBill.vue'

const Bill = defineComponent({
  name: 'Bill',
  components: {
    CurrentBill,
    PreviousBill,
  },
  computed: {
    appStore() {
      return useAppStore()
    },
    totalItem() {
      return Object.values(this.appStore.currentBill.itemList).length
    },
    totalPrice() {
      return this.appStore.totalCurrentBill
    },
  },
})

export default Bill
</script>
<style lang="scss" scoped>
.bill {
  display: flex;
  flex-direction: column;
  height: var(--main-height);


  .bill-total {
    text-align: right;
    color: rgb(88, 176, 232);
    font-size: 1.3em;
    margin: 5px;
  }

  .bill-preview {
    height: 30%;
    border: 1px solid gray;
    background-color: aquamarine;
    overflow: scroll;
    font-family: monospace;
    padding: 5px;

    p {
      line-height: 1;
      margin: 0;
    }
  }
}

</style>