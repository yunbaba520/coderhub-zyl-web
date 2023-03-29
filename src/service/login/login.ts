import type { ILoginAccount } from "@/types/login/login";
import gsRequest from "..";
// 账号密码登录
export function requestLogin(params: ILoginAccount) {
  return gsRequest.post({
    url: '/login',
    data: params
  })
}
