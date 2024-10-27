<template>
  <div class="menu">
    <div v-for="(group, groupIndex) in quickAccess"
      :class="`menu-group menu-group__${getMenuGroupColumn(group.length)}`">
      <div v-for="item in group" :class="{ 'grid-item-extend-y': item.highlight }" class="tile-button">
        <button class="menu-item" :style="{
          background: `linear-gradient(white ,${getMenuColor(groupIndex)} 20%, ${getMenuColor(groupIndex)} 80%, white)`
        }" @click="() => addItemToBill(item)">
          {{ item.name }}
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useAppStore } from '@/stores/app'
import { defineComponent } from 'vue'

const QuickAccessMenu = defineComponent({
  name: 'QuickAccessMenu',
  data: () => ({
    quickAccess: [] as QuickAccessData,
  }),
  computed: {
    appStore: () => useAppStore(),
  },
  created() {
    this.fetchQuickAccess()
  },
  methods: {
    async fetchQuickAccess() {
      const response = await fetch('./data/quick-access.json')
      const result = await response.json()

      this.quickAccess = result
    },
    getMenuGroupColumn(len: number) {
      return Math.ceil(len / 8)
    },
    getMenuColor(index: number) {
      const colors = ['red', 'green', 'yellow']
      if (index < colors.length) {
        return colors[index]
      }

      return 'gray'
    },
    addItemToBill(item: { name: string, price: number }) {
      const qty = this.appStore.getClipboardNumber(1)

      if (qty > 0) {
        this.appStore.addItemToCurrentBill({
          ...item,
          qty,
        })
      }

      this.appStore.clearClipboard()
    },
  },
})

export default QuickAccessMenu
</script>
<style lang="scss" scoped>
.menu {
  display: grid;
  grid-template-columns: repeat(4,calc((100% - var(--grid-gap) * 3) / 4));
  grid-template-rows: 1fr;
  gap: var(--grid-gap);

  .menu-group {
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: 100%;
    gap: var(--grid-gap);

    @for $i from 2 through 4 {
      &.menu-group__#{$i} {
        grid-column-end: span 2;
        grid-template-columns: repeat($i, calc(50% - var(--grid-gap) / $i));
      }
    }
  }
}
</style>