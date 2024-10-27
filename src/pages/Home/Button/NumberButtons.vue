<template>
  <div class="number-buttons">
      <div v-for="num in [7, 8, 9, 4, 5, 6, 1, 2, 3]" class="tile-button">
        <button class="number" @click="() => appendToClipboard(num.toString())">{{ num }}</button>
      </div>
      <div class="tile-button"><button class="charge no-sale" @click="isShowNoSalePopup = true">No sale</button></div>
      <div class="tile-button"><button class="number" @click="() => appendToClipboard('0')">0</button></div>
      <div class="tile-button"><button class="number" @click="() => appendToClipboard('.')">.</button></div>

    <NoSalePopup
      v-model="isShowNoSalePopup"
      @close="() => isShowNoSalePopup = false"
    />
    </div>
</template>
<script lang="ts">
import { useAppStore } from '@/stores/app'
import { defineComponent } from 'vue'
import NoSalePopup from '../NoSalePopup.vue'

const NumberButtons = defineComponent({
  name: 'NumberButtons',
  components: {
    NoSalePopup,
  },
  data: () => ({
    isShowNoSalePopup: false,
  }),
  computed: {
    appStore: () => useAppStore(),
    clipboard() {
      return this.appStore.clipboard
    },
  },
  methods: {
    appendToClipboard(char: string) {
      if (this.appStore.clipboard.type !== 'Amount') {
        this.appStore.clearClipboard()
      }

      if (char === '.' && this.clipboard.value === '') {
        char = '0.'
      }

      const newValue = `${this.clipboard.value}${char}`

      if (newValue.match(/^\d+(\.\d*)?$/)) {
        this.appStore.setClipboard('Amount', newValue)
      } else {
        this.appStore.clearClipboard()
      }
    },
  }
})

export default NumberButtons
</script>
<style lang="scss" scoped>
.number-buttons {
  display: grid;
  grid-template-columns: repeat(3, calc((100% - var(--grid-gap) * 2) / 3));
  grid-template-rows: repeat(4, calc((100% - var(--grid-gap) * 3) / 4));
  gap: var(--grid-gap);
}

.tile-button {

  .number {
    font-size: 2em;
  }
  .no-sale {
    color: red;
  }
}
</style>