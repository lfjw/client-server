import axios from 'axios';
import { baseUrl } from '@/config/index'

const env: Environment = process.env.NODE_ENV

axios.defaults.baseURL = baseUrl[env]

const get = () => {
}
const post = () => {
}
export default {
  get,
  post,
}