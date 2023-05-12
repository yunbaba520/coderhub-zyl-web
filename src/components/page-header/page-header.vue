<template>
  <div class="page-header">
    <div class="top-menu">xxx</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.page-header {
  width: 100%;
  height: 300px;
  background-color: var(--theme_top_bg_color);
  .top-menu {
    position: fixed;
    top: 0;
    z-index: 1;
    height: 40px;
    width: 100%;
    background-color: var(--theme_top_menu_color);
  }
}
</style>
