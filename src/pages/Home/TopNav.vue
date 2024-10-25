<template>
  <nav class="top-nav">
    <button v-for="item in navItems" class="nav-item" @click="$emit('select', item)">
      {{ item.toUpperCase() }}
    </button>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

const TopNav = defineComponent({
  name: 'TopNav',
  data: () => ({

    navItems: [
      'Tap Beer',
      'Stubbies',
      'Spirits Liqueurs',
      'Rtd Cider Snacks',
      'Wine',
      'Soft Drink Coffee',
      'Starters Sides',
      'Mains',
      'Signatures Salad Pasta',
      'Special Desserts Kids',
      'Table',
      'Split bill',
    ],
  })
})

export default TopNav
</script>
<style lang="scss" scoped>
.top-nav {
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  .nav-item {
    border-radius: 0;
    border: none;
    margin-right: 1px;
    background-color: blue;
    color: white;
    padding: 2px 5px;
    font-size: 0.9em;
  }
}
</style>