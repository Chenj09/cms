<template>
  <div class="cj-table">
    <el-table :data="listData" border style="width: 100%">
      <!-- <el-table-column
          prop="name"
          label="用户名"
          min-width="180"
        ></el-table-column> -->
      <template v-for="propItem in propsList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">{{
              scope.row[propItem.prop]
            }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  prop: {
    listData: {
      type: Array,
      required: true
    },
    propsList: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
