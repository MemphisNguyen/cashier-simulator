<template>
  <v-dialog
    class="popup-dialog"
    :modelValue="modelValue"
    @update:modelValue="onChanged"
  >
    <div class="d-flex justify-center">
      <v-card>
        <v-card-title>
          <div class="dialog-title__text">Add new table</div>
          <div class="dialog-title__actions">
            <v-btn class="btn-close" @click="$emit('close')">
              <v-icon icon="mdi-close"></v-icon>
            </v-btn>
          </div>
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="Customer name"
            v-model="customerName"
          />
          <v-text-field
            label="Customer name"
            v-model="tableName"
            type="number"
            placeholder=""
            inputmode="decimal"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" variant="elevated" @click="onSubmit">Add table</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-dialog>
</template>
<script lang="ts">
import { useAppStore } from '@/stores/app'
import { defineComponent } from 'vue'

const AddNewTablePopup = defineComponent({
  name: 'AddNewTablePopup',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    tableName: '',
    customerName: '',
  }),
  computed: {
    appStore: () => useAppStore(),
  },
  watch: {
    modelValue(value) {
      if (value) {
        this.tableName = ''
        this.customerName = ''
      }
    }
  },
  methods: {
    onChanged(value: boolean) {
      if (value) {
        this.$emit('update:modelValue', value)
      } else {
        this.$emit('close')
      }
    },
    onSubmit() {
      if (this.tableName) {
        this.appStore.addTable(this.tableName, this.customerName)
        this.tableName = ''
        this.customerName = ''
      }

      this.$emit('close')
    }
  }
})

export default AddNewTablePopup
</script>
<style lang="scss" scoped>
</style>