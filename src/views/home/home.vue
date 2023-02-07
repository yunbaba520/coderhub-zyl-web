<template>
  <div class="home">
    <page-header></page-header>
    <div class="content-wrap">
      <left-ranking></left-ranking>
      <center-area></center-area>
      <right-area></right-area>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/page-header/page-header.vue'
import CenterArea from './cpns/center-area.vue'
import LeftRanking from './cpns/left-ranking.vue'
import RightArea from './cpns/right-area.vue'
</script>

<style scoped lang="less">
.content-wrap {
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
}
</style>
