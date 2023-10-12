<script lang="tsx" setup>
import { ElInput } from 'element-plus'
import Table from '@/components/SearchTable/index.vue'
import { deleteIamUsersId, getIamUsers, getIamUsersId, postIamUsers } from '@/api/users'
import { Switch } from '@/components/SearchTable/components/autoDefine'

defineOptions({
  name: 'Users',
})

const columns = [
  {
    prop: 'password',
    label: '密码',
    isShowInTable: false,
    filterOptions: {
      isShowInSearch: false,
      labelName: 'input',
      rules: [{
        required: true,
        message: '请输入年龄',
        trigger: 'blur',
      }],
    },
  },
  {
    prop: 'age',
    label: '年龄',
    width: '180',
    filterOptions: {
      // isShowInSearch: false,
      labelName: 'datePicker',
      rules: [{
        required: true,
        message: '请输入年龄',
        trigger: 'blur',
      }],
    },
  },
  {
    prop: 'email',
    label: '邮箱',
    width: '200',
    filterOptions: {
      renderFn: (sp: any) => <ElInput v-model={sp.email} placeholder='请输入Name'></ElInput>,
    },

  },
  {
    prop: 'mobile',
    label: '手机号',
    width: '200',
    filterOptions: {
      labelName: 'input',
    },
  },
  {
    prop: 'disable',
    label: '状态',
    width: '200',
    renderCell: scope => <Switch v-model={scope.row.disable} />,
    filterOptions: {
      labelName: 'select',
      enums: [
        {
          label: '启用',
          value: 0,
        },
        {
          label: '禁用',
          value: 1,
        },
      ],
    },
  },
  {
    prop: 'username',
    label: '用户名',
    width: '200',
  },
  {
    prop: 'lastLoginTime',
    label: '上次登录时间',
  },

]

function requestGetIamUsers(params) {
  return getIamUsers({
    ...params,
  }, true)
}

function requestGetIamUsersId(params) {
  return getIamUsersId({
    id: params,
  }, true)
}

function requestPostIamUser(params) {
  return postIamUsers({
    ...params,
  }, true)
}
function requestDeleteIamUsersId(params) {
  return deleteIamUsersId({
    ...params,
  }, true)
}
</script>

<template>
  <Table
    :columns="columns"
    :list-request="requestGetIamUsers"
    :detail-request="requestGetIamUsersId"
    :new-request="requestPostIamUser"
    :delete-request="requestDeleteIamUsersId"
  />
</template>

<style scoped></style>
