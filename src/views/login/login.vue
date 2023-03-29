<template>
  <div class="login">
    <canvas-bg></canvas-bg>
    <main-login></main-login>
  </div>
</template>

<script setup lang="ts">
import MainLogin from "./cpn/main-login.vue";
import CanvasBg from "./cpn/canvas-bg.vue";
</script>

<style scoped lang="less">
.login {
  position: relative;
  width: 100vw;
  height: 100vh;
}

</style>
