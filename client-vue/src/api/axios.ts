
import axios, { AxiosError, AxiosPromise } from 'axios';
import { baseUrl } from '@/config/index'
import { ElMessage } from 'element-plus'

const env = (process.env.NODE_ENV) as Environment

axios.defaults.baseURL = baseUrl[env]

interface Res {
  code: boolean;
  msg: string;
  data: unknown;
}

axios.interceptors.response.use(
  (res) => {
    const result: Res = res.data
    console.log(res.data, res);

    if (!result.code) {
      ElMessage.error(result.msg);
      return false
    }
    return res.data
  },
  (error: AxiosError) => {
    ElMessage.error(error.message);
  }
)

export const get = <T, R>(url: string, params: T): AxiosPromise<R> => {
  return axios({
    url,
    method: 'GET',
    params,
  })
}

export const post = <T, R>(url: string, data: T): AxiosPromise<R> => {
  return axios({
    url,
    method: 'POST',
    data
  })
}

export default {
  get,
  post,
}