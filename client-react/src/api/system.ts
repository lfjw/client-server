import { post } from '../utils/axios'
import { RegisterParams, LoginParams } from '../typings/index'

/**
 * 注册
 * @param data 
 */
export function register(data: RegisterParams) {
  return post("/user/register", data)
}


/**
 * 登录
 * @param data 
 */
interface RegisterResponse {
  token: string,
  user: RegisterParams
}
export function login(data: LoginParams) {
  return post<RegisterResponse>("/user/login", data)
}

