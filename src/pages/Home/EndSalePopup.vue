<template>
  <v-dialog
    class="popup-dialog"
    :modelValue="modelValue"
    @update:modelValue="onChanged"
    :persistent="!allowClose"
  >
    <div class="d-flex justify-center">
      <v-card>
        <v-card-title>
          <div class="dialog-title__text">Charge review</div>
          <div class="dialog-title__actions">
            <v-btn class="btn-close" @click="$emit('close')">
              <v-icon icon="mdi-close"></v-icon>
            </v-btn>
          </div>
        </v-card-title>
        <v-card-text>
          <v-table density="compact">
            <tbody>
              <tr><th>Total: </th><td>${{ total.toFixed(2) }}</td></tr>
              <tr><th>Other payment: </th><td>${{ voucher.toFixed(2) }}</td></tr>
              <tr><th>Cash: </th><td>${{ cash.toFixed(2) }}</td></tr>
              <tr><th>EFTPOS: </th><td>${{ eft.toFixed(2) }}</td></tr>
              <tr><th>Change: </th><td>${{ change.toFixed(2) }}</td></tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </div>
  </v-dialog>
</template>
<script lang="ts">
import { useAppStore } from '@/stores/app';
import { defineComponent } from 'vue'

const EndSalePopup = defineComponent({
  name: 'EndSalePopup',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    message: '',
    allowClose: false,
  }),
  computed: {
    appStore: () => useAppStore(),
    total() {
      return this.appStore.totalCurrentBill
    },
    cash() {
      return this.appStore.accummulatedCash
    },
    eft() {
      return this.appStore.eftposCharge
    },
    voucher() {
      return this.appStore.voucherCharge
    },
    change() {
      return this.appStore.totalCharge - this.appStore.totalCurrentBill
    },
  },
  watch: {
    modelValue(value) {
      if (value) {
        this.simualatePurchase()
      }
    }
  },
  methods: {
    onChanged(value: boolean) {
      this.$emit('update:modelValue', value)
    },
    async simualatePurchase() {
      this.message = 'Waiting to purchase...'
      this.allowClose = false

      await new Promise((resolve) => {
        setTimeout(() => {
          this.message = 'Purchased successfully!'
          this.allowClose = true
          resolve(true)
        }, 2000)
      })
    }
  }
})

export default EndSalePopup
</script>
<style lang="scss" scoped>
</style>