import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface CJRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface CJRequestConfig extends AxiosRequestConfig {
  interceptors?: CJRequestInterceptors
  showLoading?: boolean
}
