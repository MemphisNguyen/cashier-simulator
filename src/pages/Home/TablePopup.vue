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
            Table
          </div>
          <div class="dialog-title__actions">
            <v-btn class="btn-close" @click="onChanged(false)" density="compact" >
              <v-icon icon="mdi-close"></v-icon>
            </v-btn>
          </div>
        </v-card-title>
        <v-card-text>
          <div class="table-view">
            <div class="table-list">
              <div
                v-for="item in tableList"
                :class="{ 'table-item': true, 'selected': selectedTable === item.tableName }"
                @click="() => selectTable(item.tableName)"
              >
                <div class="title">
                  [{{ item.tableName }}]
                  {{ item.customerName}}
                </div>
              </div>
              <div class="p-2 text-center">
                <v-btn
                  variant="text"
                  prepend-icon="mdi-plus"
                  color="primary"
                  @click="openAddNewTablePopup"
                >
                  Add new table
                </v-btn>
              </div>
            </div>
            <div class="table-bill" v-if="selectedTable">
              <div class="table-bill-items">
                <div v-if="tableList[selectedTable].buzzerNumber != undefined">Buzzer #{{ tableList[selectedTable].buzzerNumber }}</div>
                <BillItemTable v-if="selectedTable" :items="currentTableBill" />
              </div>
              <div class="table-bill-actions">
                <v-btn color="primary" @click="bringToHomeScreen">Charge</v-btn>
              </div>
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

const TablePopup = defineComponent({
  name: 'TablePopup',

  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'close', 'addNew'],
  data() {
    return {
      selectedTable: null as string | null,
      newTableName: '',
    }
  },
  computed: {
    appStore: () => useAppStore(),
    tableList() {
      return this.appStore.tableList
    },
    currentTableBill() {
      if (this.selectedTable) {
        return this.tableList[this.selectedTable].itemList ?? {}
      }

      return {}
    }
  },
  watch: {
    modelValue(value: boolean) {
      if (!value) {
        this.selectedTable = null
        this.newTableName = ''
      }
    }
  },
  methods: {
    onChanged(value: boolean) {
      this.$emit('update:modelValue', value)
      
      if (value === false) {
        this.$emit('close')
      }
    },
    selectTable(tableName: string) {
      this.selectedTable = tableName
    },
    openAddNewTablePopup() {
      this.$emit('addNew')
    },
    bringToHomeScreen() {
      if (this.selectedTable && this.tableList[this.selectedTable]) {
        this.appStore.setCurrentBill(this.tableList[this.selectedTable])
        this.$emit('close')
      }
    },
  }
})

export default TablePopup
</script>
<style lang="scss" scoped>
.table-view {
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr;
  height: 100%;
  border: 1px solid gray;
}
.table-list {
  border-right: 1px solid gray;
  height: 100%;
  overflow: auto;

  .table-item {
    border-bottom: 1px solid gray;
    padding: 10px;
    cursor: pointer;

    &:hover:not(.selected) {
      background-color: lightgray;
    }

    &.selected {
      background-color: lightblue;
    }


    .title {
      font-weight: bold;
    }
  }
}
.table-bill {
  display: flex;
  flex-direction: column;
  .table-bill-items {
    padding: 10px;
    flex-grow: 1;
    overflow: auto;
  }
  .table-bill-actions {
    border-top: 1px solid gray;
    padding: 10px;
  }
}

.add-table-form {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid gray;
  background-color: #ededed;
}
</style>