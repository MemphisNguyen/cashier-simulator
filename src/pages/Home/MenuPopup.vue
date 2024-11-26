<template>
  <div v-if="modelValue" class="dialog">
    <div class="dialog-title">
      <div class="dialog-title__text">
        <v-icon icon="mdi-arrow-left" @click="goBack"></v-icon>
        {{ menuTitle }}
      </div>
      <div class="dialog-title__actions">
        <v-icon icon="mdi-close" @click="onChanged(false)"></v-icon>
      </div>
    </div>
    <div class="dialog-content-wrap">
      <div class="dialog-content" v-if="itemList.length > 0">
        <template v-if="itemList[0].type === 'folder'">
          <div class="menu-folder" v-for="item in (itemList as FolderMenuData[])">
            <div class="folder-name">{{ item.name }}</div>
            <div class="menu-item-list">
              <div
                class="menu-item"
                :class="{
                  'with-image': subItem.image,
                  'grid-item-extend-x': !subItem.image && subItem.name.length >= 20
                }"
                v-for="subItem in item.children"
                @click="tapOnMenuItem(subItem)"
              >
                <img v-if="subItem.image" :src="subItem.image" :alt="subItem.name" />
                <template v-else>{{ subItem.name }}</template>
              </div>
            </div>
          </div>
        </template>
        <div v-else class="menu-folder">
          <div class="menu-item-list">
            <div
              class="menu-item"
              :class="{
                'with-image': item.image,
                'grid-item-extend-x': !item.image && item.name.length >= 20
              }"
              v-for="item in itemList"
              @click="tapOnMenuItem(item)"
            >
              <img v-if="item.image" :src="item.image" :alt="item.name" />
              <template v-else>{{ item.name }}</template>
            </div>
          </div>
          </div>
      </div>
    </div>
    <MenuItemVariationPopup
      v-if="selectedItem"
      v-model="isShowVariationPopup"
      :menu-item="selectedItem"
      @selected="onVariationSelected"
      />
  </div>
</template>
<script lang="ts">
import { useAppStore } from '@/stores/app';
import { defineComponent } from 'vue'
import MenuItemVariationPopup from './MenuItemVariationPopup.vue';

const MenuPopup = defineComponent({
  name: 'MenuPopup',
  components: {
    MenuItemVariationPopup,
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    }
  },
  emits: ['update:modelValue', 'selected', 'close'],
  data() {
    return {
      menuName: this.title,
      itemList: [] as MenuData[],
      pathHistory: [] as string[],
      selectedItem: null as ItemMenuData | null,
      isShowVariationPopup: false,
    }
  },
  computed: {
    appStore: () => useAppStore(),
    menu: () => useAppStore().menu,
    menuTitle() {
      return [...this.pathHistory, this.menuName].join(' > ')
    }
  },
  watch: {
    modelValue(value: boolean) {
      if (value) {
        this.menuName = this.title
        this.itemList = this.menu[this.menuName]
      }
    }
  },
  methods: {
    tapOnMenuItem(item: MenuData) {
      if (item.type === 'folder') {
        this.pathHistory.push(this.menuName)
        this.menuName = item.name
        this.itemList = item.children
      } else {
        if (item.variations && item.variations.length > 0) {
          this.selectedItem = item
          this.isShowVariationPopup = true
        } else {
          this.addItemToBill(item)
          this.$emit('selected', item)
        }
      }
    },
    onChanged(value: boolean) {
      this.$emit('update:modelValue', value)
      
      if (value === false) {
        this.pathHistory = []
        this.$emit('close')
      }
    },
    addItemToBill(item: ItemMenuData, variation: Record<string, VariationOption> = {}) {
      const qty = this.appStore.getClipboardNumber(1)

      if (qty > 0) {
        const extraPrice = Object.keys(variation).reduce((total, key) => {
          const option = variation[key]
          return total + option.price
        }, 0)
        const options = Object.keys(variation).reduce((all, key) => {
          const option = variation[key]
          return [
            ...all,
            option.name
          ]
        }, [] as string[])
        this.appStore.addItemToCurrentBill({
          name: item.name,
          price: item.price + extraPrice,
          qty,
          variation: options
        })
      }

      this.appStore.clearClipboard()
      this.pathHistory = []
      this.$emit('close')
    },
    goBack() {
      if (this.pathHistory.length > 0) {
        this.menuName = this.pathHistory.pop()!
        this.itemList = this.menu[this.menuName]
      } else {
        this.onChanged(false)
      }
    },
    onVariationSelected(variation: Record<string, VariationOption>) {
      this.isShowVariationPopup = false
      this.addItemToBill(this.selectedItem!, variation)
    }
  }
})

export default MenuPopup
</script>
<style lang="scss" scoped>
.dialog {
  border: 1px solid black;
  height: calc(var(--main-height) - var(--grid-gap) * 2);
}
.dialog-title {
  font-size: 1.2em;
  font-weight: bold;
  background-color: lightblue;
  padding: 0.4em;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
}
.dialog-title__text .v-icon {
  width: 1.2em;
  height: 1.2em;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 100%;
  color: blue;
  margin-right: 0.3em;
  font-size: 1.2em;
}
.dialog-title__actions .v-icon{
  width: 1.2em;
  height: 1.2em;
  cursor: pointer;
  background-color: red;
  border: 1px solid gray;
  border-radius: 3px;
  color: white;
  margin-right: 0.3em;
  font-size: 1.2em;
}
.dialog-content-wrap {
  height: calc(var(--main-height) - var(--grid-gap) * 2 - 3px - 2.8em);
  overflow: auto;
}
.dialog-content {
  padding: 0.5em 1em;
}
.menu-folder {
  font-size: 1.2em;
  font-weight: bold;
}
.folder-name {
  position: sticky;
  top: 0;
  background-color: #fff;
}
.menu-folder + .menu-folder {
  margin-top: 1em;
  border-top: 1px solid lightgray;
  padding-top: 1em;
}
.menu-item-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--grid-gap);
}
.menu-item-list .menu-item {
  border: 1px solid gray;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  background-color: white;
  cursor: pointer;
  text-align: center;

  &.with-image {
    padding: 0;

    img {
      width: 100%;
      aspect-ratio: 1;
      object-fit: contain;
    }
  }
}

@each $i, $color in (1: coral, 2: lightgreen, 3: lightblue, 4: yellow, 5: orange) {
  .menu-folder:nth-child(6n+#{$i}) .menu-item:not(.with-image) {
    background: linear-gradient(white, $color 30%, $color 70%, white);
  }
}

</style>