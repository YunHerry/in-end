<template>
  <div class="modify-content">
    <div class="modify-title">修改密码</div>
    <div class="input-forms">
      <div class="mail">
        <el-icon><User /></el-icon>
        <input type="text" placeholder="请输入邮箱" />
      </div>
      <div class="code">
        <input type="text" placeholder="请输入验证码" />
        <button class="send-btn">发送验证码</button>
      </div>
    </div>
    <div class="btns">
      <button class="btn">确定</button>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.modify-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  box-sizing: border-box;
  padding: 80px;
  .modify-title {
    color: #ffffff;
    font-size: 36px;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
  .input-forms {
    display: flex;
    flex-direction: column;
    .mail {
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
    .code {
      display: flex;
      align-items: center;
      margin-top: 10px;

      input {
        flex: 1;
        outline: none;
        border: 0;
        background-color: transparent;
        color: #d3d3d3;
        font-size: 16px;
        box-sizing: border-box;
        padding: 0 20px;
        background-color: rgba($color: #ffffff, $alpha: 0.4);
        box-sizing: border-box;
        padding: 18px 30px;
        border-radius: 40px;
        display: flex;
        align-items: center;
      }
      .send-btn {
        margin-left: 10px;
        width: 107px;
        height: 52px;
        border: 0;
        border-radius: 30px;
        font-size: 14px;
      }
    }
  }
  .btns {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .btn {
      flex: 1;
      border: 0;
      background-color: #3a62d7;
      color: #ffffff;
      font-size: 16px;
      box-sizing: border-box;
      padding: 12px 42px;
      border-radius: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
