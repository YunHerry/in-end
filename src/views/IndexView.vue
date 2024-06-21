<template>
  <el-carousel height="307px" w>
    <el-carousel-item v-for="item in 4" :key="item" class="banner-item">
      <h3 class="small justify-center" text="2xl">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  <div class="col-content">
    <div class="recommend">
      <div class="recommend-item">
        <el-icon><Star /></el-icon>
        推荐
      </div>
      <div class="recommend-item">
        <el-icon><Star /></el-icon>
        新闻
      </div>
      <div class="recommend-item">
        <el-icon><Star /></el-icon>
        新闻时事
      </div>
      <div class="recommend-item">
        <el-icon><Star /></el-icon>
        热搜榜单
      </div>
    </div>
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
    <div class="competence-content">
      <div class="hot-read">
        <div class="hot-main-title">热门阅读</div>
        <el-divider />
        <div class="hot-content">
          <div class="hot-item">
            <el-icon :size="'50px'"><User /></el-icon>
            <div class="main">
              <div class="title">微信小程序开发教程</div>
              <div class="info">
                <div class="author">云开发创作者</div>
                <div class="see">
                  <el-icon><User /></el-icon>123456
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hot-group">
        <div class="hot-main-title">热门小组</div>
        <div class="group-content">
          <div class="group-item">
            <div class="group-img">
              <el-avatar
                :size="40"
                :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
              />
            </div>
            <div class="group-main-info">
              <div class="main-title">
                <div class="title">JAVA交流组织</div>
                <div class="time">刚刚</div>
              </div>
              <div class="comment">大神:java天下第一</div>
            </div>
          </div>
        </div>
        <el-divider />
      </div>
      <div class="blog-content">
        <el-divider />
      </div>
    </div>
  </div>
</template>
<script setup>
import Header from "../components/Header.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const menus = [
  {
    name: "推荐",
    // icon:
  },
  "新闻",
];
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
}
.banner {
  width: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.banner-item {
  height: 100%;
}
.col-content {
  padding: 21px;
  box-sizing: border-box;
  display: flex;
}
.recommend {
  flex: 1.5;
  border-radius: 20px;
  width: 220px;
  height: 1093px;
  border: 1px solid #bbbbbb;
  padding: 26px 0;
  .recommend-item {
    display: flex;
    font-size: 30px;
    align-items: center;
    margin-left: 21px;
    margin-bottom: 30px;
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
.competence-content {
  flex: 3;
  width: 356px;
  border: 1px solid #bbbbbb;
  box-sizing: border-box;
  .hot-read {
    .hot-main-title {
      border-left: 3px solid #ed0c0c;
      font-size: 30px;
      box-sizing: border-box;
      padding-left: 20px;
    }
    .hot-content {
      .hot-item {
        display: flex;
        box-sizing: border-box;
        padding: 20px;
        .main {
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .info {
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
  .hot-group {
    .hot-main-title {
      font-size: 30px;
      box-sizing: border-box;
      padding-left: 20px;
    }
    .group-content {
      .group-item {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 20px;
        .group-main-info {
          flex: 1;
          box-sizing: border-box;
          padding: 0 10px;
          .main-title {
            display: flex;
            justify-content: space-between;
            .title {
              font-size: 14px;
            }
            .time {
              font-size: 10px;
              color: #c7c7cc;
            }
          }
          .comment {
            font-size: 13px;
            color: #888181;
          }
        }
      }
    }
  }
  .blog-content {
    .main-title {
      font-size: 30px;
      box-sizing: border-box;
      padding-left: 20px;
    }
  }
}
</style>
