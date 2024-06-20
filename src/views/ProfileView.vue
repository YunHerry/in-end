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
      <el-card>
        <el-row :gutter="16">
          <el-col :span="6">
            <el-statistic :value="138">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  被访问量
                </div>
              </template>
            </el-statistic>
          </el-col>
          <el-col :span="6">
            <el-statistic :value="138">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  文章数量
                </div>
              </template>
            </el-statistic>
          </el-col>
          <el-col :span="6">
            <el-statistic :value="138">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  总浏览量
                </div>
              </template>
            </el-statistic>
          </el-col>
          <el-col :span="6">
            <el-statistic :value="138">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  点赞量
                </div>
              </template>
            </el-statistic>
          </el-col>
        </el-row>
      </el-card>
      <el-card
        :body-style="{
          border: '1px solid #bbbbbb',
          borderRadius: '20px',
          padding: '0',
        }"
      >
        <div class="profile-btns">
          <button class="btn">帖子</button>
          <button class="btn">视频</button>
          <button class="btn">评论</button>
          <button class="btn">收藏</button>
          <button class="btn">关注</button>
        </div>
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
      </el-card>
    </div>
    <div class="col">
      <el-card>
        <div class="contact">
          <div class="contact-item">
            <span class="key">联系方式</span>
            <span class="value">xxxxxx</span>
          </div>
          <div class="contact-item">
            <span class="key">联系方式</span>
            <span class="value">xxxxxx</span>
          </div>
          <div class="contact-item">
            <span class="key">联系方式</span>
            <span class="value">xxxxxx</span>
          </div>
          <div class="contact-item">
            <span class="key">联系方式</span>
            <span class="value">xxxxxx</span>
          </div>
          <div style="margin-top: 20px; text-align: center">个人简介</div>
        </div>
      </el-card>
      <el-card>
        <div class="likely">
          <div class="likely-title">兴趣标签</div>
          <el-divider />
          <div class="likely-list">
            <div class="likely-item">java</div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<style lang="scss">
.column-table {
  display: flex;
  .col {
    display: flex;
    flex-direction: column;
  }
  .profile-avatar {
    position: relative;
    .avatar {
      position: absolute;
      top: 50%;
      left: 6%;
    }
  }
  .profile-name {
    display: flex;
    justify-content: space-between;
    .name {
      font-size: 36px;
      font-weight: bold;
    }
    .profile-btn {
      background-color: #353c96;
      border: 0;
      color: #fcfcfc;
      font-size: 18px;
      border-radius: 20px;
      box-sizing: border-box;
      padding: 10px 20px;
    }
  }
  .profile-btns {
    border: 1px solid #bbbbbb;
    border-radius: 20px;
    display: flex;
    .btn {
      border: 0;
      background-color: transparent;
      color: #101010;
      font-size: 28px;
      margin: 20px;
      flex: 1;
    }
  }
  //refer to IndexView.view
  .main-content {
    flex: 5;
    //   width: 793px;
    height: 1093px;
    box-sizing: border-box;
    padding: 35px;
    margin: 0 11px 27px;
    .new-item {
      display: flex;
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
  .contact {
    .contact-item {
      font-size: 22px;
      display: flex;
      .key,
      .value {
        color: #101010;
      }
    }
  }
  .likely {
    .likely-title {
      font-size: 22px;
      color: #101010;
    }
    .likely-list {
        display: flex;
        .likely-item {
            padding: 6px 20px;
            text-align: center;
            border: 1px solid #101010;
        }
    }
  }
}
</style>
