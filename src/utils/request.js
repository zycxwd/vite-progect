import axios from 'axios'
// import.meta.env 引入env中的变量
console.log(axios.isCancel('something'))
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    const { data, msg, code } = response.data
    console.log(data)
    if (msg) return data.list
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
export default instance
