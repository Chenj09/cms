<template>
  <div class="login-phone">
    <el-form label-width="80px" :rules="rules" :model="account">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="account.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="account.code" />
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    let account = reactive({
      phone: '',
      code: ''
    })
    const rules = {
      phone: [
        {
          required: true,
          trigger: 'blur',
          message: '手机号必填'
        },
        {
          pattern: /^[1-9]{11}$/,
          trigger: 'blur',
          message: '输入11位手机号'
        }
      ],
      code: [
        {
          required: true,
          trigger: 'blur',
          message: '验证码必填'
        }
      ]
    }
    return {
      account,
      rules
    }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
}
.get-btn {
  margin-left: 8px;
}
</style>
