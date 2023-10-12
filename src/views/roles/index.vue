<script  setup>
import Table from '@/components/SearchTable/index.vue'
import { deleteIamRolesId, getIamRoles, getIamRolesId, getIamRolesNames } from '@/api/roles'

const columns = ref([
  {
    prop: 'name',
    label: '角色名称',
    filterOptions: {
      labelName: 'select',
      newLabelName: 'input',
      enums: [],
      maxlength: 10,
      showWordLimit: true,
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
      labelName: 'input',
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
}

function requestDeleteIamRolesId(params) {
  return deleteIamRolesId({
    ...params,
  }, true)
}
</script>

<template>
  <Table
    :columns="columns"
    :list-request="requestGetIamRoles"
    :detail-request="requestGetIamRolesId"
    :delete-request="requestDeleteIamRolesId"
  />
</template>

<style scoped></style>
