<template>
  <div class="menu">
    <div v-for="group in quickAccess"
      :class="`menu-group menu-group__${getMenuGroupColumn(group.length)}`">
      <div v-for="item in group" :class="{ 'grid-item-extend-y': item.highlight }" class="tile-button">
        <button
          class="menu-item"
          :class="{'with-image': item.image}"
          @click="() => addItemToBill(item)"
        >
          <img v-if="item.image" :src="item.image" :alt="item.name" />
          <template v-else>{{ item.name }}</template>
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
          variation: []
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
  height: var(--main-height);
  overflow: auto;

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

  @each $i, $color in (1: coral, 2: lightgreen, 3: lightblue, 4: yellow, 5: orange) {
    .menu-group:nth-child(6n+#{$i}) .menu-item:not(.with-image) {
      background: linear-gradient(white, $color 30%, $color 70%, white);
    }
  }

  .menu-item.with-image {
    padding: 0;
    background-color: #fff;

    img {
      width: 100%;
      aspect-ratio: 1;
      object-fit: contain;
    }
  }
}
</style>