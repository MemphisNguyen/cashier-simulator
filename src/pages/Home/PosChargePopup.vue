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
          <div class="text-center" v-if="allowClose">
            <v-btn color="primary" @click="$emit('close')">Close</v-btn>
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
  }),
  watch: {
    modelValue(value) {
      if (value) {
        this.simualatePurchase()
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

export default PosChargePopup
</script>
<style lang="scss" scoped>
</style>