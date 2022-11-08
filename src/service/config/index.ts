// service配置
export const BASE_URL = 'http://httpbin.org'
export const TIME_OUT = 10000

// 1.区分开发与生产环境import.meta.env
// if (import.meta.env.MODE === 'production') {
//   BASE_URL = ''
// } else {
//   BASE_URL = ''
// }
// 生产环境验证，先build 再 preview
// 2.用.env文件
// console.log(import.meta.env.VITE_NAME)
