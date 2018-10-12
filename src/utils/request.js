import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    console.log(config)
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone interceptor
service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
