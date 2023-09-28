<script lang="ts" setup>
import { createForm } from '@formily/core'

import { FormProvider, createSchemaField } from '@formily/vue'

import type { Field } from '@formily/core'

import { FormButtonGroup, FormItem, Input, Reset, Select, Submit } from '@formily/element-plus'

const normalForm = createForm({
  validateFirst: true,
})

const phoneForm = createForm({
  validateFirst: true,
})

const { SchemaField } = createSchemaField({
  components: {
    FormItem, Input, Select,
  },
  scope: {
    getAsyncSelect,
  },
})

function getAsyncSelect(field: Field) {
  field.loading = true
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log(field)
      field.dataSource = [{
        label: '我爱你',
        value: 1,
      },
      {
        label: '我爱他',
        value: 2,
      }]
      field.loading = false
    }, 1500)
  })
}

const normalSchema = {
  type: 'object',
  properties: {
    username: {
      'type': 'string',
      'title': '用户名',
      'required': true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        // prefix: '{{icon(\'UserOutlined\')}}',
      },
    },
    textarea: {
      'type': 'string',
      'title': '密码',
      'required': true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        type: 'textarea',
        // prefix: '{{icon(\'LockOutlined\')}}',
      },
    },
    select: {
      'type': 'string',
      'title': '下拉框',
      'required': true,
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-reactions': ['{{getAsyncSelect}}'],

    },
  },
}

const activeName = 'normalForm'
</script>

<template>
  <div class="p-4">
    <ElCard class="w-400px">
      <ElTabs v-model="activeName">
        <ElTabPane
          v-for="item in ['normForm', 'phoneForm']"
          :key="item"
          :label="item"
        >
          <FormProvider :form="normalForm">
            <SchemaField :schema="normalSchema" />
          </FormProvider>
          <FormButtonGroup align-form-item>
            <Submit
              :on-submit="log"
            >
              提交
            </Submit>
            <Reset :on-submit="log">
              取消
            </Reset>
            <ElButton>返回</ElButton>
          </FormButtonGroup>
        </ElTabPane>
      </ElTabs>
    </ElCard>
  </div>
</template>

<style lang="scss" scoped>

</style>
