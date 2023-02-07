import { getMomentList } from '@/service/home/home'
import type { IMomentListParams } from '@/types/home/home'
import { defineStore } from 'pinia'
interface IUseHomeState {
  momentList: any[]
}
const useHome = defineStore('home', {
  state(): IUseHomeState {
    return {
      momentList: []
    }
  },
  actions: {
    async getMomentListAction(params: IMomentListParams) {
      const res = await getMomentList(params)
      console.log(res)
    }
  }
})

export default useHome
