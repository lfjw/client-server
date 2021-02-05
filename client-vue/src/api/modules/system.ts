import { post, } from '../axios'

interface LoginData {
  username: string | number;
  password: string;
}
interface LoginRes {
  token: string;
}
export function login(data: LoginData) {
  return post<LoginData, LoginRes>("/user/login", data)
}