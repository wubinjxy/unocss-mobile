<script setup>
import { ref } from "vue";
const value = ref("6");
</script>

<template>
  <van-search v-model="value" placeholder="请输入搜索关键词" />
  <van-button type="primary">primary btn</van-button>
  <div class="box"></div>
</template>

<style scoped lang="scss">
.box {
  width: 100%;
  height: 200px;
  background: black;
  &:active {
    background: pink;
  }
}
</style>
