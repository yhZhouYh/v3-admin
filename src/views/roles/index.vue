<script lang="tsx" setup>
import { ElInput } from 'element-plus'
import Table from '@/components/SearchTable/index.vue'
import { getIamRoles, getIamRolesId, getIamRolesNames } from '@/api/roles'

const columns = ref([
  {
    prop: 'name',
    label: '角色名称',
    filterOptions: {
      type: 'select',
      newType: 'input',
      enums: [],
      rules: [{
        required: true,
        message: '请输入角色名称',
        trigger: 'blur',
      }],
    },
  },
  {
    prop: 'description',
    label: '角色描述',
    filterOptions: {
      type: 'input',
    },
  },

])

requestGetIamRoelsNames()

function requestGetIamRoles(params) {
  return getIamRoles({
    ...params,
  }, true)
}

function requestGetIamRolesId(params) {
  return getIamRolesId({
    id: params,
  }, true)
}

async function requestGetIamRoelsNames() {
  let data = await getIamRolesNames({}, true)
  data = data.map((item) => {
    return {
      label: item.name,
      value: item.id,
    }
  })
  const columnItem = columns.value.find(item => item.prop === 'name')
  columnItem && (columnItem.filterOptions.enums = data)
  console.log(columnItem, columns)
}
</script>

<template>
  <Table
    :columns="columns"
    :list-request="requestGetIamRoles"
    :detail-request="requestGetIamRolesId"
  />
</template>

<style scoped></style>
