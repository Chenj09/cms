import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface CJRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface CJRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: CJRequestInterceptors<T>
  showLoading?: boolean
}
