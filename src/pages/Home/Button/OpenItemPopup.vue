<template>
  <v-dialog
    class="popup-dialog"
    :modelValue="modelValue"
    @update:modelValue="onChanged"
  >
    <div class="d-flex justify-center">
      <v-card>
        <v-card-title>
          <div class="dialog-title__text">Open {{ type }}</div>
          <div class="dialog-title__actions">
            <v-btn class="btn-close" @click="$emit('close')">
              <v-icon icon="mdi-close"></v-icon>
            </v-btn>
          </div>
        </v-card-title>
        <v-card-text>
          <v-text-field
            :label="'Name of ' + type"
            v-model="name"
            placeholder=""
          />
          <v-text-field
            label="'Price"
            v-model="price"
            type="number"
            placeholder=""
            inputmode="decimal"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" variant="elevated" @click="onSubmit">Add item</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-dialog>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

const OpenItemPopup = defineComponent({
  name: 'OpenItemPopup',
  props: {
    type: {
      type: String as PropType<'food' | 'beverage'>,
      required: true,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    name: '',
    price: 0,
  }),
  watch: {
    modelValue(value) {
      if (value) {
        this.name = ''
        this.price = 0
      }
    }
  },
  methods: {
    onChanged(value: boolean) {
      this.$emit('update:modelValue', value)
    },
    onSubmit() {
      this.$emit('submit', `[Open ${this.type}] ${this.name}`, +this.price)
    }
  }
})

export default OpenItemPopup
</script>
<style lang="scss" scoped>
</style>