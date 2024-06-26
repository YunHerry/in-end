<template>
  <div class="index-content">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
<style lang="scss">
.content {
  width: 100%;
}
</style>
