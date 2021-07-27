import { createApp } from 'vue'
import { globalRegister } from './global'
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
import './service/axios_demo'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)

//registerApp(app)
//register element-plus
app.use(globalRegister)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_NAME)
