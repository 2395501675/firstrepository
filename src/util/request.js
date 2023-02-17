// axios 实例
import axios from 'axios'


// 设定访问根地址
let baseUrl = 'http://192.168.16.238:3333'
const service = axios.create({
	baseURL: baseUrl,
	// timeout: 5000000
})

// request拦截器
service.interceptors.request.use(
	config => {
		return config
	},
	error => {
		Promise.reject(error)
	}
)

// respone拦截器
service.interceptors.response.use(
	response => {
		if (
			response.status === 200 &&
            response.data &&
            (response.data.status === 200 ||
                response.data.code === 200 ||
                (response.data &&
                    response.data.meta &&
                    response.data.meta.code === 200))
		) {
			return response.data
		} else {
			return Promise.reject(response.data)
		}
	},
	error => {
		if (
			error.response &&
            error.response.data &&
            error.response.data.message
		) {
			Message({
				title: error.response.data.status,
				message: error.response.data.message,
				type: 'warning'
			})
		}
		return Promise.reject(error)
	}
)

export default service
