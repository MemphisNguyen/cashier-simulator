<template>
  <div class="buttons">
    <QuickAccessMenu />
    <Functions />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import QuickAccessMenu from './QuickAccess.vue'
import Functions from './Functions.vue'

const Buttons = defineComponent({
  name: 'Buttons',
  components: {
    QuickAccessMenu,
    Functions,
  },
})

export default Buttons
</script>
<style lang="scss" scoped>
.buttons {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: var(--grid-gap);
  aspect-ratio: 1;
}
</style>