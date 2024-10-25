<template>
  <LoginScreen v-if="!username" @login="username = $event.username" />
  <HomeScreen v-else :username="username" @logOff="username = ''"/>
</template>

<script lang="ts">
import { useAppStore } from '@/stores/app';
import HomeScreen from './Home/index.vue';
import LoginScreen from './Login.vue';

const Main = defineComponent({
  components: {
    LoginScreen,
    HomeScreen,
  },
  data: () => ({
    username: 'fdsfds',
  }),
  computed: {
    appStore() {
      return useAppStore()
    },
  },
  created() {
    this.loadMenu()
    this.loadTableData()
    this.loadReceipt()
  },
  methods: {
    async loadTableData() {
      const response = await fetch('./data/table.json')
      const result = await response.json()

      this.appStore.setTable(result)
    },
    async loadMenu() {
      const response = await fetch('./data/menu.json')
      const result = await response.json()

      this.appStore.setMenu(result)
    },
    async loadReceipt() {
      const response = await fetch('./data/receipt.json')
      const result = await response.json()

      this.appStore.setReceipt(result)
    },
  },
})

export default Main
</script>
