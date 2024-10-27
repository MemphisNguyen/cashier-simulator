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
import NumberButtons from './NumberButtons.vue';
import ChargeButtons from './ChargeButtons.vue';

const Buttons = defineComponent({
  name: 'Buttons',
  components: {
    QuickAccessMenu,
    Functions,
    NumberButtons,
    ChargeButtons,
  },
})

export default Buttons
</script>
<style lang="scss" scoped>
.buttons {
  display: grid;
  // grid-template-rows: repeat(2, calc(50% - var(--grid-gap) / 2));
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, calc((100% - var(--grid-gap)) / 2));
  gap: var(--grid-gap);
  aspect-ratio: 1;
}
</style>