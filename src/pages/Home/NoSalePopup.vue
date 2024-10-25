<template>
  <v-dialog
    class="popup-dialog"
    :modelValue="modelValue"
    @update:modelValue="onChanged"
    persistent
  >
    <div class="d-flex justify-center">
      <v-card>
        <v-card-title>
          <div class="dialog-title__text">No sale</div>
          <div class="dialog-title__actions">
            <v-btn class="btn-close" @click="$emit('close')">
              <v-icon icon="mdi-close"></v-icon>
            </v-btn>
          </div>
        </v-card-title>
        <v-card-text>
          <div class="text-center pa-2">
            Close the registry to continue
          </div>
          <div class="text-center">
            <v-btn color="primary" @click="$emit('close')">Close</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-dialog>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

const NoSalePopup = defineComponent({
  name: 'NoSalePopup',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'close'],
  methods: {
    onChanged(value: boolean) {
      this.$emit('update:modelValue', value)
    },
  }
})

export default NoSalePopup
</script>
<style lang="scss" scoped>
</style>