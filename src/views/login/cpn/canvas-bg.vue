<template>
   <div class="canvas-wrap">
      <canvas class="canvas" ref="canvasEl" width="300" height="300">
        你的浏览器不兼容Canvas,请升级您的浏览器!
      </canvas>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getAssetsFile } from '@/utils/handler-img'

const sunSrc: string = getAssetsFile('login/canvas_sun.png')
const earthSrc: string = getAssetsFile('login/canvas_earth.png')
const moonSrc: string = getAssetsFile('login/canvas_moon.png')
const canvasEl = ref<HTMLCanvasElement>()
onMounted(() => {
  if (!canvasEl.value!.getContext) {
    return
  }
  let ctx = canvasEl.value!.getContext('2d') as CanvasRenderingContext2D // 2d | webgl
  let sun = new Image()
  sun.src = sunSrc
  let earth = new Image()
  earth.src = earthSrc
  let moon = new Image()
  moon.src = moonSrc

  requestAnimationFrame(draw)

  /**
       1秒钟会回调 60次
      */
  function draw() {
    ctx.clearRect(0, 0, 300, 300)
    ctx.save()
    // 1.绘制背景
    drawBg()
    // 2.地球
    drawEarth()
    ctx.restore()
    requestAnimationFrame(draw)
  }

  function drawBg() {
    ctx.save()
    // ctx.drawImage(sun, 0, 0) // 背景图
    ctx.translate(150, 150) // 移动坐标
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)'
    ctx.beginPath() // 绘制轨道
    ctx.arc(0, 0, 105, 0, Math.PI * 2)
    ctx.stroke()
    ctx.restore()
  }

  function drawEarth() {
    let time = new Date()
    let second = time.getSeconds()
    let milliseconds = time.getMilliseconds()
    ctx.save() // earth start
    ctx.translate(150, 150) // 中心点坐标系
    // 地球的旋转
    // Math.PI * 2  一整个圆的弧度
    // Math.PI * 2 / 60   分成 60 份
    // Math.PI * 2 / 60   1s
    // Math.PI * 2 / 60 / 1000    1mm

    // 1s 1mm
    // Math.PI * 2 / 60 * second + Math.PI * 2 / 60 / 1000 * milliseconds
    ctx.rotate(
      ((Math.PI * 2) / 60) * second + ((Math.PI * 2) / 60 / 1000) * milliseconds
    )
    ctx.translate(105, 0) // 圆上的坐标系
    ctx.drawImage(earth, -12, -12)
    // 3.绘制月球
    drawMoon(second, milliseconds)
    // 4.绘制地球的蒙版
    drawEarthMask()

    ctx.restore() // earth end
  }

  function drawMoon(second: number, milliseconds: number) {
    ctx.save() // moon start
    // 月球的旋转
    // Math.PI * 2   一圈   360
    // Math.PI * 2 / 10  1s(10s一圈)
    // Math.PI * 2 / 10 * 2  2s(10s一圈)

    // Math.PI * 2 / 10 / 1000  1mm 的弧度

    // 2s + 10mm = 弧度
    //  Math.PI * 2 / 10  * second + Math.PI * 2 / 10 / 1000 * milliseconds

    ctx.rotate(
      ((Math.PI * 2) / 10) * second + ((Math.PI * 2) / 10 / 1000) * milliseconds
    )
    ctx.translate(0, 28)
    ctx.drawImage(moon, -3.5, -3.5)
    ctx.restore() // moon end
  }

  function drawEarthMask() {
    // 这里的坐标系是哪个? 圆上的坐标系
    ctx.save()
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'
    ctx.fillRect(0, -12, 40, 24)
    ctx.restore()
  }
})
</script>

<style scoped lang="less">
.canvas-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: black;
  }

</style>
