import axios from 'axios'
import { destroyCookie } from 'nookies'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
})

axiosInstance.interceptors.response.use(
  function (config) {
    return config
  },
  function (error) {
    if (error && error.response && error.response.status === 401) {
      destroyCookie(null, '_token')
      window.location.reload()
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
