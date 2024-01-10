<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import { Lock, User } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/modules/user'
import type { PostIamAuthTokenRequest } from '@/api/auth'
import ThemeSwitch from '@/components/ThemeSwitch/index.vue'

const router = useRouter()

/** 登录表单元素的引用 */
const loginFormRef = ref<FormInstance | null>(null)

/** 登录按钮 Loading */
const loading = ref(false)
/** 验证码图片 URL */
const codeUrl = ref('')
/** 登录表单数据 */
const loginFormData: PostIamAuthTokenRequest = reactive({
  account: '13764297441',
  password: 'Aa123456',
})
/** 登录表单校验规则 */
const loginFormRules: FormRules = {
  account: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' },
  ],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
}
/** 登录逻辑 */
function handleLogin() {
  loginFormRef.value?.validate((valid: boolean, fields) => {
    if (valid) {
      loading.value = true
      useUserStore()
        .login(loginFormData)
        .then(() => {
          router.push({ path: '/' })
        })
        .catch(() => {
          // createCode()
          router.push({ path: '/' })
          loginFormData.password = ''
        })
        .finally(() => {
          loading.value = false
        })
    }
    else {
      console.error('表单校验不通过', fields)
    }
  })
}
/** 创建验证码 */
// function createCode() {
// 先清空验证码的输入
// loginFormData.code = ''
// 获取验证码
// codeUrl.value = ''
// getLoginCodeApi().then((res) => {
//   codeUrl.value = res.data
// })
// }

/** 初始化验证码 */
// createCode()
</script>

<template>
  <div class="login-container v3-bg">
    <iconunocss />
    <ThemeSwitch class="theme-switch" />
    <div class="login-left <lg:hidden flex-1 uno-flex-center">
      <img
        class="w-50%"
        src="../../assets/layouts/login-box.svg"
        alt=""
      >
    </div>
    <div class="login-right uno-flex-center flex-1">
      <div class="login-card">
        <div class="title">
          <img src="@/assets/layouts/logo-text-2.png">
        </div>
        <div class="content">
          <el-form
            ref="loginFormRef"
            :model="loginFormData"
            :rules="loginFormRules"
            @keyup.enter="handleLogin"
          >
            <el-form-item prop="account">
              <el-input
                v-model.trim="loginFormData.account"
                placeholder="用户名"
                type="text"
                tabindex="1"
                :prefix-icon="User"
                size="large"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model.trim="loginFormData.password"
                placeholder="密码"
                type="password"
                tabindex="2"
                :prefix-icon="Lock"
                size="large"
                show-password
              />
            </el-form-item>

            <el-button
              :loading="loading"
              type="primary"
              size="large"
              @click.prevent="handleLogin"
            >
              登 录
            </el-button>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  .login-left{
    width: 100%;
    height: 100%;
    background: url(../../assets/layouts/login-bg.svg);
    background-size: cover;
    background-position: right;
  }
  .theme-switch {
    position: fixed;
    top: 5%;
    right: 5%;
    cursor: pointer;
  }
  .login-card {
    min-width: 480px;
    border-radius: 20px;
    box-shadow: 0 0 10px #dcdfe6;
    background-color: #fff;
    overflow: hidden;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
      img {
        height: 100%;
      }
    }
    .content {
      padding: 20px 50px 50px 50px;
      :deep(.el-input-group__append) {
        padding: 0;
        overflow: hidden;
        .el-image {
          width: 100px;
          height: 40px;
          border-left: 0px;
          user-select: none;
          cursor: pointer;
          text-align: center;
        }
      }
      .el-button {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
}
</style>
