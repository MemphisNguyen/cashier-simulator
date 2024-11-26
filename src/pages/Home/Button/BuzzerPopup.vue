<template>
  <v-dialog
    class="popup-dialog"
    :modelValue="modelValue"
    @update:modelValue="onChanged"
  >
    <div class="d-flex justify-center">
      <v-card>
        <v-card-title>
          <div class="dialog-title__text">Buzzer</div>
          <div class="dialog-title__actions">
            <v-btn class="btn-close" @click="$emit('close')">
              <v-icon icon="mdi-close"></v-icon>
            </v-btn>
          </div>
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="Buzzer number"
            v-model="number"
            type="number"
            placeholder=""
            inputmode="numeric"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" variant="elevated" @click="onSubmit">Set</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-dialog>
</template>
<script lang="ts">
import { useAppStore } from '@/stores/app'
import { defineComponent } from 'vue'

const BuzzerPopup = defineComponent({
  name: 'BuzzerPopup',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    number: 0,
  }),
  computed: {
    appStore: () => useAppStore()
  },
  watch: {
    modelValue(value) {
      if (value) {
        this.number = 0
      }
    }
  },
  methods: {
    onChanged(value: boolean) {
      this.$emit('update:modelValue', value)
    },
    onSubmit() {
      this.appStore.setCurrentBuzzer(this.number);
      this.$emit('update:modelValue', false)
    }
  }
})

export default BuzzerPopup
</script>
<style lang="scss" scoped>
</style>