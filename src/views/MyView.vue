<template>
  <div class="content">
    <div class="my-row" style="height: 200px">
      <el-image
        style="flex: 6; border-radius: 20px"
        :src="'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024'"
        :fit="'cover'"
      />
      <div class="todo" style="flex: 1">
        <div class="title-content">
          <div class="title">今日待办</div>
          <el-icon :size="19">
            <Star />
          </el-icon>
        </div>
      </div>
    </div>
    <div class="my-row" style="margin: 10px 0">
      <div class="my-friends" style="flex: 2">
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
      <div class="publish-content" style="flex: 8">
        <div class="publish-btns">
          <RouterLink class="btn" v-for="btn in publishBtns">{{
            btn.name
          }}</RouterLink>
        </div>
        <div class="publish-input">
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
                style="width: 100%; height: 100%"
                :src="'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024'"
                :fit="'fill'"
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
      <div class="article">
        <div class="title">我的文章</div>
        <!-- refer to IndexView.vue -->
        <div class="main-content">
          <div class="new-item">
            <div class="left-item">
              <div class="title">
                鸿蒙OS起步照官网练习创建第一页面和跳转的第二页面需要注意的点
              </div>
              <div class="new-content">
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
                style="width: 100%; height: 100%"
                :src="'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024'"
                :fit="'fill'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";

const publishBtns = [
  {
    name: "发布文章",
    href: "",
  },
  {
    name: "发布帖子",
    href: "",
  },
  {
    name: "发布视频",
    href: "",
  },
  {
    name: "人脸注册",
    href: "",
  },
];
</script>
<style lang="scss" scoped>
.content {
  padding: 20px 90px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  .my-row {
    display: flex;
    height: 300px;
  }
  .todo {
    border-radius: 20px;
    border: 1px solid #bbbbbb;
    padding: 15px 28px;
    margin-left: 10px;
    box-sizing: border-box;
    .title-content {
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 14px;
        font-weight: bold;
        color: #101010;
      }
    }
  }
  .my-friends {
    border-radius: 20px;
    border: 1px solid #bbbbbb;
    padding: 15px 28px;
    margin-right: 10px;
    .friend-list {
      .friend-item {
        display: flex;
        align-items: center;
        .info {
          color: #101010;
          box-sizing: border-box;
          padding: 10px 20px;
          .main-title {
            font-size: 14px;
          }
          .secondary-title {
            font-size: 12px;
          }
        }
      }
    }
  }
  .publish-content {
    display: flex;
    flex-direction: column;
    border: 1px solid #bbbbbb;
    border-radius: 20px;
    .publish-btns {
      padding-top: 10px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      .btn {
        margin: 0 10px;
        flex: 1;
        color: #101010;
        text-decoration: none;
        border: 1px solid #bbbbbb;
        border-radius: 20px;
        box-sizing: border-box;
        padding: 25px 60px;
        display: block;
        text-align: center;
      }
    }
  }
  .recent-read {
    margin-right: 10px;
    border-radius: 20px;
    border: 1px solid #bbbbbb;
    padding: 15px 28px;
    flex: 1;
    .title {
      font-size: 20px;
      color: #101010;
    }
    .read-list {
      .read-item {
        max-height: 100px;
        box-sizing: border-box;
        padding: 10px 0;
        display: flex;
        .left-item {
          color: #5d5b5b;
          font-size: 14px;
          flex: 4;
        }
        .right-item {
          flex: 2;
          box-sizing: border-box;
          padding: 10px;
        }
      }
    }
  }
  .rencent-response {
    margin-left: 10px;
    flex: 1;
    border-radius: 20px;
    border: 1px solid #bbbbbb;
    padding: 15px 28px;
    .title {
      font-size: 20px;
      color: #101010;
    }
    .response-list {
      box-sizing: border-box;
      padding: 25px 0;
      .response-item {
        background-color: #dedcdc;
        color: #5d5b5b;
        font-size: 14px;
        padding: 10px 20px;
        box-sizing: border-box;
      }
    }
  }
  .article {
    border: 1px solid #bbbbbb;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 15px 28px;
    .title {
      font-size: 20px;
      color: #101010;
    }
    .main-content {
      flex: 1;
      box-sizing: border-box;
      padding-top: 10px;
      .new-item {
        display: flex;
        max-height: 120px;
        .left-item {
          flex: 6;
          .title {
            font-size: 15px;
            margin-bottom: 10px;
            color: #333333;
          }
          .new-content {
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
          flex: 3;
        }
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
