<template>
  <div class="row-content">
    <div class="col-content main-col" style="flex: 6">
      <div class="video">
        <el-image
          style="width: 100%; height: 511px"
          :src="'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024'"
          :fit="'cover'"
        />
      </div>
      <div class="video-info">
        <el-avatar
          :size="60"
          :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
        />
        <div class="info-content">
          <div class="title">
            《南方车站的聚会》终极预告：胡歌满身血博命换赏金，桂纶镁廖凡开启一场生猛的…
          </div>
          <div class="see">188.3万次播放</div>
          <div class="work-btns">
            <div class="btn">操作</div>
            <div class="btn">操作</div>
            <div class="btn">操作</div>
            <div class="btn">操作</div>
            <div class="btn">操作</div>
          </div>
        </div>
      </div>
      <div class="comment-list">
        <div class="comment-item">
          <div class="avatar">
            <el-avatar
              :size="60"
              :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
            />
          </div>
          <div class="comment-main">
            <div class="title">舟舟今天学习了吗</div>
            <div class="content">
              在许多实际情况下，有必要检查许多不同字段之间的重复项。考虑到上面的示例数据集，我们需要检查所有字段中的重复项
            </div>
            <div class="info">
              <div class="time work-btn">2020-11-06</div>
              <div class="work-btn">
                <el-icon><Lightning /></el-icon>
              </div>
              <div class="work-btn">
                <el-icon><Lightning /></el-icon>
              </div>
              <div class="work-btn" style="font-size: 13px">回复</div>
            </div>
            <div class="response-list">
              <div class="comment-item">
                <div class="avatar">
                  <el-avatar
                    :size="50"
                    :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
                  />
                </div>
                <div class="comment-main">
                  <div class="title">舟舟今天学习了吗</div>
                  <div class="content">
                    在许多实际情况下，有必要检查许多不同字段之间的重复项。考虑到上面的示例数据集，我们需要检查所有字段中的重复项
                  </div>
                  <div class="info">
                    <div class="time work-btn">2020-11-06</div>
                    <div class="work-btn">
                      <el-icon><Lightning /></el-icon>
                    </div>
                    <div class="work-btn">
                      <el-icon><Lightning /></el-icon>
                    </div>
                    <div class="work-btn" style="font-size: 13px">回复</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="send-comment">
        <el-input
          style="width: 100%"
          :rows="18"
          type="textarea"
          placeholder="Please input"
          resize="none"
        />
        <div class="send-btn">
          <button>发送</button>
        </div>
      </div>
    </div>

    <div class="col-content" style="flex: 2">
        <div class="recommend-list">
            <div class="recommend-item">
                <el-image
          style="width: 139px; height: 88px"
          :src="'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024'"
          :fit="'cover'"
        />
        <div class="recommend-content">
            <div class="title">台北之行vlog</div>
            <div class="content">火箭少女101_紫宁 · 139万次观看</div>
        </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.row-content {
  display: flex;
  box-sizing: border-box;
  padding: 21px 37px;
  .col-content {
    display: flex;
    flex-direction: column;
  }
  .main-col {
    .video-info {
      display: flex;
      box-sizing: border-box;
      padding: 16px 18px;
      .info-content {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 0 10px;
        .title {
          color: #333333;
          font-size: 16px;
        }
        .see {
          color: #999999;
          font-size: 14px;
          margin-left: 8px;
        }
        .work-btns {
          display: flex;
          box-sizing: border-box;
          padding: 0px 12px;
          .btn {
            box-sizing: border-box;
            padding: 6px 0px;
            margin-right: 24px;
          }
        }
      }
    }
    .comment-list {
      margin: 35px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;

      .comment-item {
        display: flex;
        .avatar {
          margin-top: 10px;
        }
        .comment-main {
          box-sizing: border-box;
          padding: 0 16px;
          .title {
            color: #fc5531;
            font-weight: bold;
            font-size: 15px;
          }
          .content {
            font-size: 14px;
          }
          .info {
            color: #9f9f9f;

            display: flex;
            .time {
              font-size: 13px;
            }
            .work-btn:nth-child(n + 2) {
              margin-left: 25px;
            }
          }
        }
        .response-list {
          .avatar {
            display: flex;
            align-items: center;
            margin: 0;
          }
        }
      }
    }
    .send-comment {
      display: flex;
      flex-direction: column;
      width: 100%;
      .send-btn {
        text-align: right;
        button {
          width: 100px;
          height: 62px;
          background-color: #36B9FF;
          border: 0;
          border-radius: 30px;
          color: white;
          font-size: 20px;
        }
      }
    }
  }
  .recommend-list {
    padding: 0 26px;
    box-sizing: border-box;
    .recommend-item {
        display: flex;
        .recommend-content {
            box-sizing: border-box;
            padding: 0 8px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            .title {
                font-size: 16px;
            }
            .content {
                font-size: 13px;
                color: #9F9F9F;
            }
        }
    }
  }
}
</style>
