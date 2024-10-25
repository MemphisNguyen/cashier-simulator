<template>
  <v-dialog
    class="popup-dialog"
    height="100%"
    :modelValue="modelValue"
    @update:modelValue="onChanged"

  >
    <v-card height="100%">
      <v-card-title>
        <div class="dialog-title__text">
          Charge to table
        </div>
        <div class="dialog-title__actions">
          <v-btn class="btn-close" @click="onChanged(false)" density="compact" >
            <v-icon icon="mdi-close"></v-icon>
          </v-btn>
        </div>
      </v-card-title>
      <v-card-text class="table-list">
        <div class="table-grid">
          <div
            class="table-item"
            v-for="item in tableList"
            @click="() => selectTable(item.tableName)"
          >
            <div class="title">{{ item.tableName }}</div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { useAppStore } from '@/stores/app';
import { defineComponent } from 'vue'

const ChargeToTablePopup = defineComponent({
  name: 'ChargeToTablePopup',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    }
  },
  data: () => ({
    //
  }),
  computed: {
    appStore: () => useAppStore(),
    tableList() {
      return this.appStore.tableList
    }
  },
  methods: {
    onChanged(value: boolean) {
      this.$emit('update:modelValue', value)
    },

    selectTable(tableName: string) {
      this.appStore.chargeToTable(tableName)
      this.onChanged(false)
    }
  }
})

export default ChargeToTablePopup
</script>
<style lang="scss" scoped>
.table-list {
  background-color: #ededed;
  overflow: auto;
}
.table-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}
.table-item {
  border: 1px solid gray;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  aspect-ratio: 1;
  background-color: white;
  cursor: pointer;
}
</style>