<template>
  <div class="home">
    <TopNav
      @select="openNavPopup"
      />
    <div class="wrapper">
      <Bill />
      <Buttons @logOff="$emit('logOff')"/>
    </div>
    <Footer :username="username" />

    <MenuPopup
      v-model="menuPopup.isShow"
      :title="menuPopup.title"
      @close="closeMenuPopup"
    />
    <TablePopup
      v-model="isShowTablePopup"
      @close="closeTablePopup"
    />
    <SplitBillPopup
      v-model="isShowSplitBillPopup"
      @close="closeSplitBillPopup"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TopNav from './TopNav.vue'
import { useAppStore } from '@/stores/app'
import Bill from './Bill/index.vue'
import Buttons from './Button/index.vue'
import Footer from './Footer.vue'
import MenuPopup from './MenuPopup.vue'
import TablePopup from './TablePopup.vue'
import SplitBillPopup from './SplitBillPopup.vue'

const HomeScreen = defineComponent({
  name: 'HomeScreen',
  components: {
    TopNav,
    Bill,
    Buttons,
    Footer,
    MenuPopup,
    TablePopup,
    SplitBillPopup,
  },
  props: {
    username: String
  },
  data: () => ({
    selectedBillItem: null as string | null,
    holdingBill: null,
    tables: [],
    menuPopup: {
      isShow: false,
      title: '',
    },
    isShowTablePopup: false,
    isShowSplitBillPopup: false,
  }),
  computed: {
    appStore: () => useAppStore(),
    currentBill() {
      return this.appStore.currentBill
    },
    clipboard() {
      return this.appStore.clipboard
    },
    menu() {
      return this.appStore.menu
    }
  },
  methods: {
    openNavPopup(item: string) {
      if (item === 'Table') {
        this.openTablePopup()
      } else if (item === 'Split bill') {
        this.openSplitBillPopup()
      } else if (this.appStore.menu[item]) {
        this.openMenuPopup(item)
      }
    },
    openMenuPopup(item: string) {
      this.menuPopup = {
        isShow: true,
        title: item,
      }
    },
    closeMenuPopup() {
      this.menuPopup = {
        isShow: false,
        title: '',
      }
    },
    cancelItem() {
      if (this.selectedBillItem) {
        delete this.currentBill.itemList[this.selectedBillItem]
      }

      this.selectedBillItem = null
    },
    openTablePopup() {
      this.isShowTablePopup = true
    },
    closeTablePopup() {
      this.isShowTablePopup = false
    },
    openSplitBillPopup() {
      if (Object.keys(this.currentBill.itemList).length > 1) {
        this.isShowSplitBillPopup = true
      }
    },
    closeSplitBillPopup() {
      this.isShowSplitBillPopup = false
    },
  }
})

export default HomeScreen
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.wrapper {
  display: grid;
  grid-template-columns: 6fr 8fr;
  gap: var(--grid-gap);
  padding: var(--grid-gap);
  padding-bottom: 30px;
}
</style>