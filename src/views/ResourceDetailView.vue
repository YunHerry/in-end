<template>
  <div class="index-content">
    <div class="content">
      <el-card>
        <div class="lesson-info">
          <div style="display: flex; align-items: center">
            <el-avatar
              :size="40"
              :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
            />
            <div class="teacher-info">
              <div class="name">学长姓名</div>
              <div class="cart">
                头衔证书头衔证书头衔证·头衔证书头衔证书头衔证·头衔证书头衔证书头衔证
              </div>
            </div>
          </div>
          <div class="download-size">
            <span class="unit">下载人数</span>
            <span class="size">123人</span>
          </div>
        </div>
        <div class="audio">
          <el-image
            style="width: 80%; height: 100%"
            :src="'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024'"
            :fit="'cover'"
          />
          <div class="mask">
            <div class="lesson-name">课程名字</div>
            <div class="download-time">距离下载结束还有5：45：15</div>
          </div>
        </div>
        <div class="at-end">
          <div class="statistics">
            <div class="people">总下载人数:<span>12345</span></div>
            <div class="like">总获赞人数:<span>12345</span></div>
          </div>
          <button class="download-btn">立刻下载</button>
        </div>
      </el-card>
      <el-card>
        <div class="lesson-content">
          <div class="lesson-btns">
            <button>课程概述</button>
            <button>大纲</button>
            <button>联系方式</button>
          </div>
          <div class="description">
            大型互联网公司在职总监，由浅入深系统讲解Ui设计所具备的软件及设计知识，带你实实在在体验Ui，了解Ui。本课程包含：图标icon设计，APP界面设计，AE动效等当前最流行的UI设计案例。带你轻松入门Ui设计。报名成功加QQ：176917385
            / 微信号： i51rgb，获取100G学习教程资料。
          </div>
          <div class="images">
            <el-image
              style="width: 48%; height: 100%"
              :src="'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024'"
              :fit="'cover'"
            />
            <el-image
              style="width: 48%; height: 100%"
              :src="'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024'"
              :fit="'cover'"
            />
          </div>
          <div class="description">
            主要提现 课程介绍 课程特色 课程适宜人群 个人收获 导师介绍排版
          </div>
        </div>
      </el-card>
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
/** */
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
    transform: translate(-50%, -50%);
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
