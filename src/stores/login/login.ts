import { defineStore } from 'pinia'
import {
  requestLogin
} from '@/service/login/login'
import type { ILoginAccount } from '@/types/login/login'
import { localCache } from '@/utils/cache'
import router from '@/router'


interface ILoginState {
  token: string
  userInfo: any
  userMenu: any
}
const useLogin = defineStore('login', {
  state: (): ILoginState => ({
    token: '',
    userInfo: {},
    userMenu: []
  }),
  actions: {
    // 登录
    async loginAction(params: ILoginAccount) {
      const res = await requestLogin(params)
      console.log(res);

    }
  }
})
export default useLogin
