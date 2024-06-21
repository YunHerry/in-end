<template>
  <div class="my-row">
    <el-image
      style="flex: 7"
      :src="'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024'"
      :fit="'cover'"
    />
    <div class="todo">
      <div class="title-content">
        <div class="title">今日待办</div>
        <el-icon :size="19">
          <Star />
        </el-icon>
      </div>
    </div>
  </div>
  <div class="my-row">
    <div class="my-friends">
      <div class="title">我的好友</div>
      <div class="friend-list">
        <div class="friend-item">
          <el-avatar
            :size="60"
            :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
          />
          <div class="info">
            <div class="main-title">test</div>
            <div class="secondary-title">test123</div>
          </div>
          <div class="more-work">
            <el-icon :size="19">
              <Star />
            </el-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="publish-content">
      <div class="publish-btns">
        <div class="btn"></div>
      </div>
      <div class="publish-content">
        <!-- formdata -->
      </div>
    </div>
  </div>
  <div class="my-row">
    <div class="recent-read">
      <div class="title">最近阅读</div>
      <div class="read-list">
        <div class="read-item">
          <div class="left-item">
            看着乌拉姆一脸懵逼，我意识到自己犯了一个错误：Python直到1989年才诞生，那时乌拉姆已经去世五年了。想到这一点，我心里微微有一些伤感。<el-divider />
          </div>
          <div class="right-item">
            <el-image
              style="width: 100px; height: 100px"
              :src="'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024'"
              :fit="'cover'"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="rencent-response">
      <div class="title">最近回复</div>
      <div class="response-list">
        <div class="response-item">
          乌拉姆将我带进机房，指着一台美国数据设备公司（DEC）生产的POP-5小型机说
        </div>
      </div>
    </div>
  </div>
  <div class="my-row">
    <div class="title">我的文章</div>
    <!-- refer to IndexView.vue -->
    <div class="main-content">
      <div class="new-item">
        <div class="left-item">
          <div class="title">
            鸿蒙OS起步照官网练习创建第一页面和跳转的第二页面需要注意的点
          </div>
          <div class="content">
            弹性伸缩具有应突发、省成本、自动化的业务价值。平台侧将各业务零散、闲置资源进行整合，形成一个大规模资源池，通过弹性调度、库存管控技术在公司运营成本和业务体感中寻求较好的平衡。
          </div>
          <div class="info">
            <div class="time">2023-3-4</div>
            <div class="comment">1234</div>
            <div class="support">1234</div>
            <div class="see">1234万</div>
          </div>
          <el-divider />
        </div>
        <div class="right-item">
          <el-image
            style="width: 100px; height: 100px"
            :src="'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024'"
            :fit="'cover'"
          />
        </div>
      </div>
    </div>
  </div>
</template>
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
  margin-left: 232px;
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
