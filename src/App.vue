<template>
  <div class="index-content">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
<script setup>
import Header from "./components/Header.vue";
</script>
<style lang="scss">
.content {
  width: 100%;
}
</style>
