<template>
  <v-dialog
    class="popup-dialog"
    :modelValue="modelValue"
    @update:modelValue="onChanged"
  >
    <div class="d-flex justify-center">
      <v-card>
        <v-card-title>
          <div class="dialog-title__text">Cash out</div>
          <div class="dialog-title__actions">
            <v-btn class="btn-close" @click="$emit('close')">
              <v-icon icon="mdi-close"></v-icon>
            </v-btn>
          </div>
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="Amount"
            v-model="amount"
            type="number"
            placeholder=""
            inputmode="decimal"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" variant="elevated" @click="onSubmit">Cash out</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-dialog>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

const CashOutPopup = defineComponent({
  name: 'CashOutPopup',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    amount: 0,
  }),
  watch: {
    modelValue(value) {
      if (value) {
        this.amount = 0
      }
    }
  },
  methods: {
    onChanged(value: boolean) {
      this.$emit('update:modelValue', value)
    },
    onSubmit() {
      this.$emit('submit', +this.amount)
    }
  }
})

export default CashOutPopup
</script>
<style lang="scss" scoped>
</style>