<template>
  <div class="home">
    <TopNav
      @select="openNavPopup"
      />
    <div class="wrapper">
      <Bill />
      <Buttons v-if="!menuPopup.isShow" @logOff="$emit('logOff')"/>
      <MenuPopup
        v-model="menuPopup.isShow"
        :title="menuPopup.title"
        @close="closeMenuPopup"
      />
    </div>
    <Footer :username="username" />

    <TablePopup
      v-model="isShowTablePopup"
      @close="closeTablePopup"
      @addNew="() => {isShowTablePopup = false; isShowAddNewTablePopup = true}"
    />
    <SplitBillPopup
      v-model="isShowSplitBillPopup"
      @close="closeSplitBillPopup"
    />
    <AddNewTablePopup
      v-model="isShowAddNewTablePopup"
      @close="() => {isShowTablePopup = true; isShowAddNewTablePopup = false}"
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
import AddNewTablePopup from './AddTablePopup.vue'

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
    AddNewTablePopup,
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
    isShowAddNewTablePopup: false,
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
      if (this.menuPopup.isShow) {
        this.menuPopup.isShow = false
        setTimeout(() => {
          this.menuPopup = {
            isShow: true,
            title: item,
          }
        })
      } else {
        this.menuPopup = {
          isShow: true,
          title: item,
        }
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
  width: var(--viewbox-width);
  height: var(--viewbox-height);
  margin: 0 auto;
  display: grid;
  grid-template-rows: var(--nav-height) var(--main-height) var(--footer-height);
  gap: var(--grid-gap);
  font-size: min(14px, calc(var(--viewbox-height)* 0.02));
  overflow: hidden;
}
.wrapper {
  display: grid;
  grid-template-columns: 3fr 4fr;
  gap: var(--grid-gap);
  margin: 0 var(--grid-gap);
  height: var(--main-height);
  overflow: hidden
}
</style>