<template>
  <footer class="status-bar">
    <div class="status-cell"></div>
    <div class="status-cell"></div>
    <div class="status-cell">{{ username }}</div>
    <div class="status-cell">Hold: 0/1</div>
    <div class="status-cell"></div>
    <div class="status-cell">{{ clipboardString }}</div>
    <div class="status-cell">Online</div>
    <div class="status-cell"></div>
  </footer>
</template>
<script lang="ts">
import { useAppStore } from '@/stores/app'
import { defineComponent } from 'vue'

const Footer = defineComponent({
  name: 'Footer',
  props: {
    username: String
  },
  computed: {
    appStore: () => useAppStore(),
    clipboard() {
      return this.appStore.clipboard
    },
    clipboardString() {
      if (this.clipboard.value === '') {
        return ''
      }
      return this.clipboard.type + ': ' + this.clipboard.value
    },
  }
})

export default Footer
</script>
<style lang="scss" scoped>
.status-bar {
  display: grid;
  grid-template-columns: 1fr 1fr 5fr 4fr 10fr 10fr 4fr 1fr;
  margin-top: 5px;
  background: linear-gradient(lightblue, white);
  gap: 2px;
  height: 2em;

  .status-cell {
    padding: 3px 5px;
    background: linear-gradient(white, lightblue);
  }
}
</style>