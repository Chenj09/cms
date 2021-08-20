import cjRequest from '../index'
import type { IAccount, ILoginResult } from './type'
import type { IData } from '@/service/types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return cjRequest.post<IData<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return cjRequest.get<IData>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return cjRequest.get<IData>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
