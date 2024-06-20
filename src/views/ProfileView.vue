<template>
  <div class="column-table">
    <div class="col">
      <el-card body-class="profile-avatar">
        <div class="profile-avatar">
            <el-image
          style="width: 600px; height: 200px"
          :src="'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024'"
          :fit="'fill'"
        />
        <el-avatar
            :size="80"
            :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
            class="avatar"
          />
        </div>
        <div class="profile-name">
            <span class="name">我是元神高手</span>
            <button class="profile-btn">完善个人资料</button>
        </div>
      </el-card>
    </div>
    <div class="col"><el-card></el-card></div>
  </div>
</template>
<style lang="scss">
.column-table {
  display: flex;
  .profile-avatar {
    position: relative;
    .avatar {
        position: absolute;
        top: 50%;
        left: 6%;
    }
  }
  .profile-name {
    .name {
        font-size: 36px;
        font-weight: bold;
    }
    .profile-btn {
        background-color: #353C96;
    }
  }
}
</style>
