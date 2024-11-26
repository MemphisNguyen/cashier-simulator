<template>  
  <v-dialog
    class="popup-dialog"
    height="100%"
    :modelValue="modelValue"
    @update:modelValue="onChanged"
  >
    <v-card height="100%">
      <v-card-title>
        <div class="dialog-title__text">{{ menuItem.name }}</div>
        <div class="dialog-title__actions">
          <v-btn class="btn-close" @click="onChanged(false)">
            <v-icon icon="mdi-close"></v-icon>
          </v-btn>
        </div>
      </v-card-title>
      <v-card-text>
        <table class="variation-table">
          <template v-for="variation in menuItem.variations">
            <tr :style="{
              backgroundColor: missingFields.includes(variation.name) ? 'lightpink' : '',
            }">
              <th>{{ variation.name }}{{ variation.required ? '*' : '' }}</th>
              <td>
                <div class="option-box">
                  <div
                    v-for="option in variation.options"
                    class="option-button"
                    :class="{ selected: selectedOptions[variation.name] === option }"
                    @click="onOptionSelected(variation.name, option)"
                  >
                    {{ option.name }}
                    <template v-if="option.price > 0">(${{ option.price }})</template>
                  </div>
                </div>
              </td>
            </tr>
          </template>
        </table>
        <div class="text-right mt-3">
          <v-btn color="primary" @click="onCompleted">Done</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

const MenuItemVariationPopup = defineComponent({
  name: 'MenuItemVariationPopup',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    menuItem: {
      type: Object as PropType<ItemMenuData>,
      required: true,
    }
  },
  emits: ['update:modelValue', 'selected'],
  data: () => ({
    missingFields: [] as string[],
    selectedOptions: {} as Record<string, VariationOption>
  }),
  methods: {
    onOptionSelected(variationName: string, option: VariationOption) {
      if (this.selectedOptions[variationName] && this.selectedOptions[variationName].name === option.name) {
        delete this.selectedOptions[variationName]
      } else {
        this.selectedOptions = {
          ...this.selectedOptions,
          [variationName]: option
        }
      }
    },
    onChanged(value: boolean) {
      this.missingFields = []
      this.selectedOptions = {}
      this.$emit('update:modelValue', value)
    },
    onCompleted() {
      this.missingFields = this.menuItem.variations.reduce((all, variation) => {
        if (variation.required && !this.selectedOptions[variation.name]) {
          return [...all, variation.name]
        }
        
        return all
      }, [] as string[])

      if (this.missingFields.length > 0) {
        return
      }

      const normalizedOptions = this.menuItem.variations.reduce((all, variation) => {
        if (!this.selectedOptions[variation.name]) {
          return all
        }
        return {
          ...all,
          [variation.name]: this.selectedOptions[variation.name]
        }
      }, {} as Record<string, VariationOption>)

      this.$emit('selected', normalizedOptions)

    }
  }
})

export default MenuItemVariationPopup
</script>
<style lang="scss" scoped>
.variation-table {
  width: 100%;
}
.variation-table tr {
  border-bottom: 1px solid gray;
}
.variation-table th {
  text-align: right;
  padding-right: 1em;
}
.option-box {
  display: flex;
  align-items: start;
  flex-wrap: wrap;

  .option-button {
    cursor: pointer;
    padding: 1em 2em;
    border: 1px solid black;
    border-radius: 3px;
    margin: 0.4em;

    &.selected {
      background-color: blue;
      color: white;
      font-weight: bold;
    }
  }
}
</style>