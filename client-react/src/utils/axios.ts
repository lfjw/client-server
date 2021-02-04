
import axios, { AxiosError } from 'axios';
import { baseUrl } from '../config/index'
import { message } from 'antd';
import { SystemResponse } from '../typings';


type Environment = "development" | "production"

const env = (process.env.NODE_ENV) as Environment

const instance = axios.create({
  timeout: 1000 * 10,
  baseURL: baseUrl[env]
})

/**
 * 请求拦截
 */
instance.interceptors.request.use(
  config => {
    const token = localStorage.token;
    config.headers['Authorization'] = 'bearer' + token
    return config
  }
)
/**
 * 响应拦截
 */
instance.interceptors.response.use(
  (res) => {
    const result: SystemResponse = res.data
    if (!result.code) {
      message.error(result.msg);
      return Promise.reject(result.msg)
    }
    return Promise.resolve(res)
  },
  (error: AxiosError) => {
    message.error(error.message);
    return Promise.reject(error.message)
  }
)

export function get(url: string, params: any) {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then(res => resolve(res)).catch(error => reject(error))
  })
}

export function post<T>(url: string, data: any): Promise<SystemResponse<T>> {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error)
    });
  })
}
