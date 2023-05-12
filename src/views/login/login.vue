<template>
  <div class="login">
    <div class="title">吐个槽吧</div>
    <main-login></main-login>
    <img class="login-bg" src="@/assets/image/login/logo_bg.webp" alt="" />
  </div>
</template>

<script setup lang="ts">
import MainLogin from './cpn/main-login.vue'
</script>

<style scoped lang="less">
.login {
  position: relative;
  width: 100vw;
  height: 100vh;
  .title {
    position: absolute;
    top: 20%;
    left: 20%;
    z-index: 1;
  }
  .login-bg {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100vw;
  }
}
</style>
