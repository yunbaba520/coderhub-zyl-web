<template>
  <div class="app">
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.app {
  min-height: 100vh;
  background-color: var(--theme_app_bg_color);
}
</style>
