<template>
  <div class="footer" v-show="show">
    <div class="about">
      <div class="about-title footer-title">关于我们</div>
      <div class="about-content">
        Max技术交流平台是由Max工作室成员自主开发的在线交流平台
      </div>
    </div>
    <div class="right-content">
      <div class="dev-member">
        <div class="about-title footer-title">开发成员</div>
        <div class="dev-content  footer-content">
          <div>xxx</div>
        </div>
      </div>
      <div class="blog-url">
        <div class="about-title footer-title">个人blog链接</div>
        <div class="blog-content footer-content">
          <div>xxx</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
  const route = useRoute();
const show = computed(()=>!route.fullPath.includes('login'))
</script>
<style scoped lang="scss">
.footer {
  background-color: #000000;
  width: 100%;
  height: 232px;
  color: #fcfcfc;
  display: flex;
  box-sizing: border-box;
  padding: 44px 85px;
  .footer-title {
    font-size: 20px;
    &::after {
      content: "";
      width: 54px;
      height: 4px;
      margin-top: 10px;
      background-color: #ed0c0c;
      display: block;
    }
  }
  .footer-content {
    margin-top: 20px;
    font-size: 14px;
    font-weight: bold;
  }
  .about {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .right-content {
    flex: 1;
    display: flex;
    justify-content: space-around;
    .footer-content {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
