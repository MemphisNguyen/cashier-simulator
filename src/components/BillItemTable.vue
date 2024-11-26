<template>
  <div :class="{'item-list': true, 'selectable': hasSelectHandle }" >
    <table>
      <thead>
        <tr>
          <td v-if="hasSelectHandle"></td>
          <td>Description</td>
          <td>Unit Price</td>
          <td>Qty</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.name" :class="{
          'selected': item.name === selectedItem
        }" @click="() => selectItem(item)">
          <td v-if="hasSelectHandle" class="text-center">
            <div class="d-flex justify-center align-center">
              <input type="radio" :value="item.name" v-model="selectedItem" />
            </div>
          </td>
          <td>
            <div><strong>{{ item.name }}</strong></div>
            <ul class="option-list" v-if="item.variation">
              <li v-for="variation in item.variation" :key="variation">{{ variation }}</li>
            </ul>
            <div v-if="item.note">Note: {{ item.note }}</div>
          </td>
          <td class="text-right">${{ item.price.toFixed(2) }}</td>
          <td class="text-right">{{ item.qty }}</td>
          <td class="text-right">${{ (item.price * item.qty).toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

const BillItemTable = defineComponent({
  name: 'BillItemTable',
  props: {
    items: {
      type: Object as PropType<Record<string, BillItem>>,
      default: () => ({})
    },
    selectedItem: {
      type: String as PropType<string | null>,
      default: null
    }
  },
  emits: {
    selected: (item: BillItem) => true
  },
  computed: {
    hasSelectHandle() {
      return (this.$.vnode.props ?? {})['onSelected']
    },
  },
  methods: {
    selectItem(item: BillItem) {
      this.$emit('selected', item)
    }
  }
})

export default BillItemTable
</script>
<style lang="scss" scoped>
.item-list {
  table {
    width: 100%;

    tr,
    th,
    td {
      border: 1px solid black;
    }

    th,
    td {
      padding: 0.5em;
    }
  }

  thead tr {
    background-color: lightgray;
  }

  tbody tr {
    cursor: pointer;
  }

  &.selectable tbody tr:hover:not(.selected) {
    cursor: pointer;
    background-color: lightblue;
  }

  &.selectable tr.selected {
    background-color: cornflowerblue;
    color: white;
  }
}
.option-list {
  margin-inline-start: 1em;
}
</style>