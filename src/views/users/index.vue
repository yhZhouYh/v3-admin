<script lang="tsx" setup>
import { ElInput } from 'element-plus'
import Table from '@/components/SearchTable/index.vue'
import { getIamUsers } from '@/api/users'

const columns = [
  {
    prop: 'age',
    label: '年龄',
    width: '180',
    filterOptions: {
      type: 'select',
      enums: [
        {
          label: '我爱你',
          value: 1,
        },
        {
          label: '你爱我',
          value: 2,
        },
      ],
    },
  },
  {
    prop: 'email',
    label: '邮箱',
    width: '200',
    filterOptions: (sp: any) => <ElInput v-model={sp.value.name} placeholder='请输入Name'></ElInput>,

  },
  {
    prop: 'mobile',
    label: '手机号',
    width: '200',
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
</script>

<template>
  <Table
    :columns="columns"
    :request="requestGetIamUsers"
  />
</template>

<style scoped></style>
