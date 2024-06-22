<template>
  <div class="new-item">
    <div class="item-header">
      <el-avatar
        :size="60"
        :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
      />
      <div class="author-info">
        <div class="name">123</div>
        <div class="description">
          表白子
          <div class="time">2024-06-18 16:56</div>
        </div>
      </div>
    </div>
    <div class="item-body">
      <div class="text-body">今天test123</div>
      <div class="img-body">
        <el-image
          style="width: 100%; height: 100%"
          :src="'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024'"
          :fit="'scale-down'"
        />
        <el-image
          style="width: 100%; height: 100%"
          :src="'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024'"
          :fit="'scale-down'"
        />
      </div>
    </div>
    <div class="item-footer">
      <div class="btn">分享链接</div>
      <div class="btn">评论</div>
      <div class="btn">点赞</div>
      <div class="btn">收藏</div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.new-item {
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);
  padding: 20px;
  box-sizing: border-box;
  .item-header {
    display: flex;
    align-items: center;
    .author-info {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;

      padding: 0 12px;
      .name {
        font-size: 28px;
        color: #000000;
      }
      .description {
        display: flex;
        font-size: 20px;
        color: #9a9a9a;
        .time {
          margin-left: 10px;
        }
      }
    }
  }
  .item-body {
    box-sizing: border-box;
    padding: 0 72px;
    .text-body {
      margin-top: 14px;
      color: #000000;
      font-size: 24p;
    }
    .img-body {
        display: flex;
        margin-top: 12px;
        .el-image {
            flex: 1;
            margin: 0 10px;
        }
        .el-image:first-child {
            margin-left: 0;
        }
        .el-image:last-child {
            margin-right: 0;
        }
    }
  }
  .item-footer {
    display: flex;
    justify-content: space-around;
    margin-top: 14px;
  }
}
</style>
