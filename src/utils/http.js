import axios from "axios"
import { h } from "vue"

const http = axios.create({
    baseURL: "http:itheima.net",
    timeout: 5000
})

instence.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

instance.interceptors.response.use(res => res.data,
    e => Promise.reject(e)
)

export default http