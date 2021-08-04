import { createApp } from 'vue'
import { globalRegister } from './global'
// import ElementPlus from 'element-plus'
//import 'element-plus/lib/theme-chalk/index.css'
//import './service/axios_demo'
import cjRequest from './service'
import App from './App.vue'

import router from './router'
import store from './store'

import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)

//registerApp(app)
//register element-plus
app.use(globalRegister)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_NAME)

//use axios
interface DataType {
  data: any
  returnCode: string
  success: boolean
}
cjRequest
  .request<DataType>({
    url: '/home',
    method: 'GET',
    interceptors: {
      requestInterceptor: (config) => {
        //other function

        return config
      },
      responseInterceptor: (res) => {
        return res
      }
    },
    showLoading: true
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
  })
