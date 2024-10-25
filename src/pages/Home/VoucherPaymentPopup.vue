<template>
  <v-dialog
    class="popup-dialog"
    :modelValue="modelValue"
    @update:modelValue="onChanged"
  >
    <div class="d-flex justify-center">
      <v-card width="400">
        <v-card-title>
          <div class="dialog-title__text">
            Voucher lookup
          </div>
          <div class="dialog-title__actions">
            <v-btn class="btn-close" @click="() => onChanged(false)">
              <v-icon icon="mdi-close"></v-icon>
            </v-btn>
          </div>
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="Voucher code"
            v-model="voucherSearch"
            prepend-inner-icon="mdi-magnify"
          />
  
          <div class="voucher-list">
            <div
              class="voucher-item"
              v-for="item in viewVoucherList"
              @click="() => selectVoucher(item)"
            >
              <div><strong>{{ item.code }}</strong></div>
              <div>${{ item.value }}</div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-dialog>
</template>
<script lang="ts">
import { useAppStore } from '@/stores/app'
import { defineComponent } from 'vue'

const VoucherPaymentPopup = defineComponent({
  name: 'VoucherPaymentPopup',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'close'],
  data: () => ({
    voucherSearch: '',
    voucherList: [
      {
        code: 'OFF5AUD',
        value: 5,
      },
      {
        code: 'OFF10AUD',
        value: 10,
      },
      {
        code: 'OFF20AUD',
        value: 20,
      },
    ],
  }),
  computed: {
    appStore: () => useAppStore(),
    viewVoucherList() {
      if (this.voucherSearch === '') {
        return this.voucherList
      }

      return this.voucherList.filter((item) => item.code.toLowerCase().includes(this.voucherSearch.toLowerCase()))
    }
  },
  watch: {
    modelValue(value: boolean) {
      if (!value) {
        this.voucherSearch = ''
      }
    }
  },
  methods: {
    onChanged(value: boolean) {
      this.$emit('update:modelValue', value)

      if (value === false) {
        this.$emit('close')
      }
    },
    selectVoucher(item: any) {
      this.appStore.setVoucherCharge(item.value)
      this.onChanged(false)
    },
  },
})

export default VoucherPaymentPopup
</script>
<style lang="scss" scoped>
</style>