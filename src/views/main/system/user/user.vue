<template>
  <div class="user">
    <div class="search">
      <page-search :searchFormConfig="searchFormConfig" />
    </div>
    <div class="content">
      <cj-table :listData="userList" :propsList="propsList">
        <template #status="scope">
          <el-button> {{ scope.row.enable ? '启用' : '禁用' }}</el-button>
        </template>
        <template #createAt="scope">
          <strong> {{ scope.row.createAt }}</strong>
        </template>
        <template #updateAt="scope">
          <strong> {{ scope.row.updateAt }}</strong>
        </template>
      </cj-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import PageSearch from '@/components/page-search'

import { searchFormConfig } from './config/search.config'

import CjTable from '@/base-ui/table'

export default defineComponent({
  name: 'user',
  components: { PageSearch, CjTable },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    const propsList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '电话', minWidth: '120' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      }
    ]

    return {
      searchFormConfig,
      userList,
      userCount,
      propsList
    }
  }
})
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
