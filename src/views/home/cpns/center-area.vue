<template>
  <div class="center-area">center</div>
</template>

<script setup lang="ts">
import useHome from '@/stores/home/home'
import { reactive } from 'vue'
const homeStore = useHome()
const params = reactive({
  offset: 0,
  size: 10
})
homeStore.getMomentListAction(params)
</script>

<style scoped lang="less">
.center-area {
  width: 600px;
  height: 2000px;
  background-color: rgb(97, 141, 124);
}
</style>
