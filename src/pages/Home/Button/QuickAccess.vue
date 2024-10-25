<template>
  <div class="menu">
    <div v-for="(group, groupIndex) in quickAccess"
      :class="`menu-group menu-group__${getMenuGroupColumn(group.length)}`">
      <div v-for="item in group" :class="{ 'grid-item-extend-y': item.highlight }">
        <button class="menu-item tile-button" :style="{
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
  grid-column: span 4;
  grid-row: span 8;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
  gap: var(--grid-gap);

  .menu-group {
    display: grid;
    grid-row: span 8;
    grid-template-rows: subgrid;
    gap: var(--grid-gap);

    &.menu-group__1 {
      grid-template-columns: subgrid;
    }

    &.menu-group__2 {
      grid-column: span 2;
      grid-template-columns: subgrid;
    }

    &.menu-group__3 {
      grid-column: span 3;
      grid-template-columns: subgrid;
    }

    &.menu-group__4 {
      grid-column: span 3;
      grid-template-columns: subgrid;
    }
  }
}
</style>