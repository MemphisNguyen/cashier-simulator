<template>
  <div>
    <v-dialog
      class="popup-dialog"
      height="100%"
      :modelValue="modelValue"
      @update:modelValue="onChanged"
    >
      <v-card height="100%">
        <v-card-title>
          <div class="dialog-title__text">
            {{ menuName }}
          </div>
          <div class="dialog-title__actions">
            <v-btn class="btn-close" @click="onChanged(false)" density="compact" >
              <v-icon icon="mdi-close"></v-icon>
            </v-btn>
          </div>
        </v-card-title>
        <v-card-text style="background-color: #efefef;">
          <div class="menu-folder">
            <div class="menu-item" v-for="item in itemList" @click="() => tapOnMenuItem(item)">
              {{ item.name }}
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import { useAppStore } from '@/stores/app';
import { defineComponent } from 'vue'

const MenuPopup = defineComponent({
  name: 'MenuPopup',

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
    }
  },
  computed: {
    appStore: () => useAppStore(),
    menu: () => useAppStore().menu,
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
        this.menuName = item.name
        this.itemList = item.children
      } else {
        this.addItemToBill(item)
        this.$emit('selected', item)
      }
    },
    onChanged(value: boolean) {
      this.$emit('update:modelValue', value)
      
      if (value === false) {
        this.$emit('close')
      }
    },
    addItemToBill(item: ItemMenuData) {
      const qty = this.appStore.getClipboardNumber(1)

      if (qty > 0) {
        this.appStore.addItemToCurrentBill({
          name: item.name,
          price: item.price,
          qty,
        })
      }

      this.appStore.clearClipboard()
      this.$emit('close')
    },
  }
})

export default MenuPopup
</script>
<style lang="scss" scoped>
.menu-folder {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}
.menu-folder .menu-item {
  border: 1px solid gray;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  aspect-ratio: 1;
  background-color: white;
  cursor: pointer;
  text-align: center;
}
</style>