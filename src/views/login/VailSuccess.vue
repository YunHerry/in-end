<template>
  <div class="info-content">
    <div class="info-title">激活成功</div>
    <div class="info-body">请点击返回按钮回到登录界面继续登录</div>
    <router-link class="btn">点击返回登录页面</router-link>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.info-content {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  background-color: black;
  padding: 160px 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .info-title {
    color: #ffffff;
    font-size: 48px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .info-body {
    color: #ffffff;
    font-size: 14px;
    text-align: center;
  }
  .btn {
    background-color: #558DE3;
    color: #ffffff;
    text-decoration: none;
    box-sizing: border-box;
    padding: 10px 20px;
    border-radius: 30px;
    text-align: center;
    margin-top: 30px;
  }
}
</style>
