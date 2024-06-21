<template>
  <div class="my-col">
    <div class="type-item">
      <div class="type-title">视频</div>
      <div class="btn">
        <el-icon :size="19">
          <Star />
        </el-icon>
        推荐
      </div>
    </div>
  </div>
  <div class="my-col">
    <el-image
      style="width: 100px; height: 100px"
      :src="'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024'"
      :fit="'cover'"
    />
    <div class="video-list">
      <div class="video-item">
        <el-image
          style="width: 100px; height: 100px"
          :src="'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024'"
          :fit="'cover'"
        />
        <div class="video-info">
          <el-avatar
            :size="60"
            :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
          />
          <div class="video-data">
            <div class="author"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/**
      
      */
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  .my-row {
    display: flex;
    height: 300px;
  }
  .todo {
    flex: 1;
    .title-content {
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 14px;
        color: #101010;
      }
    }
  }
  .main-content {
    flex: 5;
    //   width: 793px;
    height: 1093px;
    border: 1px solid #bbbbbb;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 35px;
    margin: 0 11px 27px;
    .new-item {
      display: flex;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);
      padding: 12px;
      box-sizing: border-box;

      .left-item {
        .title {
          font-size: 15px;
          margin-bottom: 10px;
        }
        .content {
          font-size: 13px;
          color: #9f9f9f;
          padding-right: 10px;
          box-sizing: border-box;
        }
        .info {
          margin-top: 10px;
          display: flex;
          color: #9f9f9f;
          div {
            margin-right: 30px;
          }
        }
      }
      .right-item {
        width: 95px;
        height: 90px;
      }
    }
  }
}
.col-content {
  padding: 21px;
  box-sizing: border-box;
  display: flex;
}
</style>
