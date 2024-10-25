<template>
  <v-dialog
    class="popup-dialog"
    :modelValue="modelValue"
    @update:modelValue="onChanged"
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
          <v-textarea
            label="Text"
            v-model="content"
            placeholder="Enter your content"
            hide-details
          />
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" variant="elevated" @click="onSubmit">Add note</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-dialog>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

const AddNotePopup = defineComponent({
  name: 'AddNotePopup',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    content: '',
  }),
  watch: {
    modelValue(value) {
      if (value) {
        this.content = ''
      }
    }
  },
  methods: {
    onChanged(value: boolean) {
      this.$emit('update:modelValue', value)
    },
    onSubmit() {
      this.$emit('submit', this.content)
    }
  }
})

export default AddNotePopup
</script>
<style lang="scss" scoped>
</style>