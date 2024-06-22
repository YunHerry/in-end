<template>
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
  <el-divider />
  <div class="new-end">
    <div class="every-other">
      每页
      <el-select
        v-model="pageSize"
        placeholder="Select"
        size="large"
        style="width: 80px; margin: 0 6px"
      >
        <el-option
          v-for="item in [1, 2, 5, 8, 10]"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
      条
    </div>

    <el-pagination
      :page-size="23"
      :pager-count="6"
      layout="prev, pager, next"
      :total="800"
    />
    <div class="go-to">
      前往
      <el-input
        v-model.lazy="goToPage"
        style="width: 60px; margin: 0 6px"
        placeholder="Please input"
      />
      页
    </div>
    <span class="sum">共800条</span>
  </div>
</template>
<script setup>
import { ref } from "vue";

const pageSize = ref(1);
const goToPage = ref(1);
</script>
<style lang="scss" scoped>
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
  .new-end {
    display: flex;
    align-items: center;
    font-size: 14px;
    justify-content: space-around;
    .every-other {
      display: flex;
      align-items: center;
    }
    .sum {
      display: flex;
      align-items: center;
      color: #606266;
    }
  }
</style>
