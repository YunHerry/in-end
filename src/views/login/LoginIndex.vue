<template>
  <div class="login-content">
    <div class="login-title">慧笔生辉</div>
    <div class="input-forms">
      <div class="username">
        <el-icon><User /></el-icon>
        <input type="text" placeholder="用户名" />
      </div>
      <div class="password">
        <el-icon><User /></el-icon>
        <input type="text" placeholder="密码" />
      </div>
    </div>
    <div class="options">
      <div class="save-pwd"><el-switch v-model="savePwd" />记住密码</div>
      <router-link :to="''" class="forget-pwd">忘记密码</router-link>
    </div>
    <div class="btns">
        <button class="btn">登录</button>
        <button class="btn">登录</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const savePwd = ref(false);
</script>
<style scoped lang="scss">
.login-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  box-sizing: border-box;
  padding: 80px;
  .login-title {
    color: #ffffff;
    font-size: 36px;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
  .input-forms {
    display: flex;
    flex-direction: column;
    .username,
    .password {
      background-color: rgba($color: #ffffff, $alpha: 0.4);
      box-sizing: border-box;
      padding: 18px 30px;
      border-radius: 40px;
      display: flex;
      align-items: center;
      input {
        outline: none;
        border: 0;
        background-color: transparent;
        color: #d3d3d3;
        font-size: 16px;
        box-sizing: border-box;
        padding: 0 20px;
      }
    }
    .username {
      margin-bottom: 16px;
    }
  }
  .options {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .save-pwd {
        color: #d3d3d3;
        .el-switch {
            margin-right: 10px;
        }
    }
    .forget-pwd {
      color: #d3d3d3;
      text-decoration: none;
    }
  }
  .btns {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .btn {
        border: 0;
        background-color: #3A62D7;
        color: #ffffff;
        font-size: 28px;
        box-sizing: border-box;
        padding: 12px 42px;
        border-radius: 40px;
        display: flex;
        align-items: center;
    }
  }
}
</style>
