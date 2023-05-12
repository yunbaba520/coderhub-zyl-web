import { defineStore } from 'pinia'
import { requestLogin } from '@/service/login/login'
import type { ILoginAccount } from '@/types/login/login'
import { localCache } from '@/utils/cache'
import router from '@/router'

interface ILoginState {
  token: string
  userInfo: any
}
const useLogin = defineStore('login', {
  state: (): ILoginState => ({
    token: localCache.getCache('login/token') || '',
    userInfo: localCache.getCache('login/userInfo') || {}
  }),
  actions: {
    // 登录
    async loginAction(params: ILoginAccount) {
      // 登录-》登录成功-》保留信息-》跳转home
      const res = await requestLogin(params)
      if (res.code !== 0) {
        return '登录失败'
      }
      this.token = res.data.token
      this.userInfo = res.data
      localCache.setCache('login/token', res.data.token)
      localCache.setCache('login/userInfo', res.data)
      router.push('/home')
    }
  }
})
export default useLogin
