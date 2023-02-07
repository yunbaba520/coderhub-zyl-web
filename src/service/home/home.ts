import type { IMomentListParams } from '@/types/home/home'
import gsRequest from '..'

export function getMomentList(params: IMomentListParams) {
  return gsRequest.get({
    url: '/moment/list',
    params
  })
}
