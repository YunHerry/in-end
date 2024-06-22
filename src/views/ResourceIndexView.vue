<template>
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

  <div style="display: flex; justify-content: center">
    <div style="width: 80%"><el-divider border-style="dashed" /></div>
  </div>
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
    <el-card body-style="padding:0;" style="width: 260px">
      <div class="lesson-item">
        <el-image
          style="width: 266px; height: 160px"
          :src="'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024'"
          :fit="'cover'"
        />
        <div class="lesson-content">
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
</template>
<script setup>
import { ref } from "vue";

const options = [{ value: "不限", label: "不限" }];
const author = ref("不限");
const rate = ref("不限");
</script>
<style lang="scss" scoped>
.lesson-info {
  display: flex;
}
.search-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  .search-btn {
    background-color: #1890ff;
    height: 60px;
    width: 104px;
    border: 0;
    color: white;
  }
}
.belong-type {
  display: flex;
  justify-content: center;
  span {
    font-size: 14px;
    color: #101010;
  }
  .btns {
    font-size: 14px;
    color: #656565;
    .btn {
      border: 0;
      background-color: transparent;
      box-sizing: border-box;
      padding: 4px 10px;
      border-radius: 6px;
    }
    .btn.active {
      background-color: #1890ff;
      color: white;
    }
  }
}
.other-option {
  display: flex;
  justify-content: center;

  align-items: center;
  span {
    margin-right: 20px;
  }
  .option-list {
    display: flex;
    align-items: center;
    .option-item {
      margin: 0 20px;
    }
  }
}
.lesson-list {
  box-sizing: border-box;
  padding: 10px 30px;
  .lesson-item {
     display: flex;
     flex-direction: column;
     .lesson-content {
      font-size: 16px;
      color: #101010;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding: 10px 40px;
      .title {
      font-weight: bold;

      }
      .description {
        color: #929292;
        font-size: 14px;
      }
     }
     .info {
      display: flex;
      justify-content: space-between;
      .time {
        font-size: 12px;
        color: #929292;
      }
     }
  }
}
</style>
<style lang="scss"></style>
