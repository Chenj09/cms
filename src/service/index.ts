import CJRequest from './request'
import localCache from '@/utils/cache'
import { TIME_OUT, BASE_URL } from './request/config'

const cjRequest = new CJRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      //携带token
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (config) => {
      return config
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

// const cjRequest2 = new CJRequest({
//   baseURL: '2'
// })

export default cjRequest
