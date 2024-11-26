<template>
  <v-dialog
    class="popup-dialog"
    :modelValue="modelValue"
    @update:modelValue="onChanged"
    :persistent="!allowClose"
  >
    <div class="d-flex justify-center">
      <v-card>
        <v-card-title>EFTPOS</v-card-title>
        <v-card-text class="table-list">
          <div class="text-center pa-4">{{ message }}</div>
          <div class="text-center">
            <v-btn v-if="allowClose" color="primary" @click="$emit('close', success)">Close</v-btn>
            <v-btn v-else @click="cancel">Cancel</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-dialog>
</template>
<script lang="ts">
import { useAppStore } from '@/stores/app';
import { defineComponent } from 'vue'

const PosChargePopup = defineComponent({
  name: 'PosChargePopup',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    }
  },
  data: () => ({
    message: '',
    allowClose: false,
    timeoutId: null as number | null,
    success: false,
  }),
  watch: {
    modelValue(value) {
      if (value) {
        this.simulatePurchase()
      }
    }
  },
  computed: {
    appStore: () => useAppStore(),
    tableList() {
      return this.appStore.tableList
    }
  },
  methods: {
    onChanged(value: boolean) {
      this.$emit('update:modelValue', value)
    },
    async simulatePurchase() {
      this.message = 'Waiting to purchase...'
      this.allowClose = false

      await new Promise((resolve) => {
        this.timeoutId = setTimeout(() => {
          this.message = 'Purchased successfully!'
          this.allowClose = true
          this.success = true
          resolve(true)
        }, 5000)
      })
    },
    cancel() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId)

        this.message = 'Purchase canceled'
        this.allowClose = true
      }
    }
  }
})

export default PosChargePopup
</script>
<style lang="scss" scoped>
</style>