<template>
  <div class="main-login">
    <div class="login-wrap">
      <el-form
        label-width="60px"
        :model="accountForm"
        :rules="rules"
        ref="formRef"
      >
        <el-form-item label="账号" prop="name">
          <el-input v-model="accountForm.name" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="accountForm.password" />
        </el-form-item>
      </el-form>
      <div class="password-status">
        <el-checkbox v-model="isRemember" label="记住密码" size="large" />
        <el-link type="primary">忘记密码</el-link>
      </div>
      <el-button type="primary" class="login-btn" @click="handlerSubmit">
        登录
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import type { ILoginAccount } from '@/types/login/login'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { localCache } from '@/utils/cache'
import useLogin from '@/stores/login/login'

// 登录数据
const accountForm = reactive<ILoginAccount>({
  name: localCache.getCache('login/name') ?? '',
  password: localCache.getCache('login/password') ?? ''
})
// 规则
const rules: FormRules = {
  name: [
    { required: true, message: '必须输入账号~', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,20}$/,
      message: '必须是5~20个字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '必须输入密码~', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,}$/, message: '密码必须在3位以上', trigger: 'blur' }
  ]
}
const isRemember = ref<boolean>(
  localCache.getCache('login/isRemember') ?? false
)
// 登录逻辑
const loginStore = useLogin()
const formRef = ref<FormInstance>()
function handlerSubmit() {
  formRef.value?.validate((valid, fields) => {
    if (valid) {
      const name = accountForm.name
      const password = accountForm.password
      // 进行登录逻辑
      loginStore.loginAction({ name, password }).then(() => {
        // 表示登录成功
        // 记住账号密码
        if (isRemember) {
          // 记住密码
          localCache.setCache('login/name', name)
          localCache.setCache('login/password', password)
          localCache.setCache('login/isRemember', isRemember)
        } else {
          // 不记住密码
          localCache.removeCache('login/name')
          localCache.removeCache('login/password')
          localCache.removeCache('login/isRemember')
        }
      })
    } else {
      ElMessage.error('请规范填写账号密码~')
    }
  })
}
</script>

<style scoped lang="less">
.main-login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 350px;
  padding: 20px;
  border-radius: 50%;
  background-color: #104e8b;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-wrap {
    width: 250px;
    .password-status {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .login-btn {
      width: 100%;
      // margin-top: 10px;
    }
  }
}
</style>
