import axios from 'axios'

//基本全局配置
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000

axios
  .get('/get', {
    params: {
      name: 'jiajia'
    },
    //单独配置
    timeout: 5000,
    headers: {}
  })
  .then((res) => {
    console.log('get2:' + res.data)
  })

//axios的一个实例

// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'jiajia'
//     }
//   })
//   .then((res) => {
//     console.log('get:' + res.data)
//   })

// axios
//   .post('http://httpbin.org/get', {
//     data: {
//       name: 'bobo'
//     }
//   })
//   .then((res) => {
//     console.log('post:' + res.data)
//   })

//axios.all,多个请求一起返回数据
// axios.all([axios.get('/get', {}), axios.post('post', {})]).then((res) => {
//   console.log(res)
// })

//拦截器
//fn1:请求发送成功执行
//fn2:请求发送失败执行
axios.interceptors.request.use(
  (config) => {
    //操作
    //1给请求添加token/loading动画
    console.log('请求成功拦截')
    return config
  },
  (err) => {
    console.log('请求失败拦截')
    return err
  }
)
//fn1:服务器返回数据成功
//fn2:服务器返回数据失败执行
axios.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    return err
  }
)
