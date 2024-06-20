<template>
  <div class="index-content">
    <div class="header">
      <div class="btns">
        <div class="btn">主页</div>
        <div class="btn">主页</div>
        <div class="btn">主页</div>
        <div class="btn">主页</div>
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
    <div class="content">
      <div class="search-content">
        <el-input
          v-model="input"
          style="width: 822px; height: 60px"
          placeholder="请输入"
        />
        <el-button class="search-btn" v-text="'搜 索'"></el-button>
      </div>
      <div class="belong-type">
        <span>所属类目: </span>
        <div class="btns">
          <button class="btn active">全部</button>
        </div>
      </div>
      <el-divider border-style="dashed" />
      <div class="other-option">
        <span>其他选项: </span>
        <div class="option-list">
          <div class="option-item">
            作者:
            <el-select
              v-model="author"
              placeholder="Select"
              size="large"
              style="width: 240px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="option-item">
            好评度:
            <el-select
              v-model="rate"
              placeholder="Select"
              size="large"
              style="width: 240px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
      </div>
      <div class="lesson-list">
        <el-card body-style="padding:0;">
          <div class="lesson-item">
            <el-image
              style="width: 266px; height: 160px"
              :src="'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024'"
              :fit="'cover'"
            />
            <div class="content">
              <div class="title">我是标题</div>
              <div class="description">我是简介</div>
              <div class="info">
                <div class="time">5 hours after</div>
                <div class="participate">
                  <el-avatar
                    :size="20"
                    :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
                  />
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const options = [{ value: "不限", label: "不限" }];
const author = ref("不限");
const rate = ref("不限");
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
  .btns {
    font-size: 24px;
    color: #a8c4e0;
    display: flex;
    height: 100%;
    align-items: center;
    margin-left: 232px;
    .btn:nth-child(n + 1) {
      margin-left: 50px;
    }
  }
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
/** */
.content {
}
.lesson-info {
  display: flex;
}
</style>
<style lang="scss">
.content {
  .el-card {
    margin: 30px;
  }
}
.lesson-info {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .teacher-info {
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    .name {
      font-size: 28px;
      color: #222222;
    }
    .cart {
      font-size: 16px;
      color: #666666;
    }
  }
  .download-size {
    .unit {
      color: #999999;
      font-size: 16px;
    }
    .size {
      font-size: 28px;
      color: #f7c160;
    }
  }

}
.audio {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 670px;
    position: relative;
    .mask {
      width: 80%;
      height: 100%;
      background-color: rgba($color: #000000, $alpha: 0.6);
      color: white;

      position: absolute;
      .lesson-name {
        font-size: 72px;
        width: 100%;
         text-align: center;
         position: absolute;
         top: 40%;
      }
    }
    .download-time {
      background-color: rgba($color: #000000, $alpha: 0.36);
      border-radius: 20px;
      font-size: 36px;
      padding: 20px;
      box-sizing: border-box;
      position: absolute;
      text-align: center;
      width: 70%;
      top: 60%;
      left: 50%;
      transform: translate(-50%,-50%);
    }

  }
  .lesson-content {
      .lesson-btns {
        display: flex;
        button {
          margin-right: 20px;
          font-size: 28px;
          border: 0;
          
        }
      }
      .description {
        margin-top: 50px;
        font-size: 20px;
      }
      .images {
        display: flex;
        justify-content: space-between;
      }
    }
</style>
