<template>
  <div class="header" v-show="show">
    <div class="btns">
      <RouterLink class="btn" v-for="item in menus" :to="item.href">{{ item.name }}</RouterLink>
    </div>
    <div class="right-content">
      <div type="text" class="input">
        <div class="input-icon"></div>
        <input class="input-content" placeholder="Type here to search" />
        <div class="input-icon-star">
          <el-icon :size="19">
            <Star />
          </el-icon>
        </div>
      </div>
      <div class="avatar"></div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
const menus = [{
  name: "主页",
  href: ""
},{
  name: "视频",
  href: "",
},
{
  name: "资源",
  href: ""
},{
  name: "资源",
  href: "",
}
]
  const route = useRoute();
// onMounted(()=>{
//   const route = useRoute();
//   console.log(route)
// })
const show = computed(()=>!route.fullPath.includes('login'))
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 74px;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  .avatar {
    width: 62px;
    height: 59px;
    margin-right: 63px;
    margin-left: 128px;
    background-color: #ffffff;
    border-radius: 50%;
  }
}
.btns {
  font-size: 24px;
  color: #a8c4e0;
  display: flex;
  height: 100%;
  align-items: center;
  flex: 1;
  justify-content: center;
  .btn {
    color: #a8c4e0;
    text-decoration: none;
  }
}
.btn:nth-child(n + 1) {
  margin-left: 50px;
}
.right-content {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.input {
  width: 345px;
  height: 41px;
  background-color: #333536;
  border-radius: 20px;
  border: 0;
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-right: 16px;
}
.input-icon {
  width: 19px;
  height: 19px;
  border-radius: 10px;
  border: 2px solid #ffffff;
}
.input-content {
  flex: 1;
  background-color: transparent;
  border: 0;
  outline: none;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.5);
  padding: 11px;
  box-sizing: border-box;
}
.input-icon-star {
  width: 19px;
  height: 19px;
  color: white;
}
</style>
