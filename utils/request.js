import Fly from 'flyio/dist/npm/wx'
import qs from 'qs'

const fly = new Fly()
const newFly = new Fly() // 用于请求session,因fly已经被锁定拦截


// 设置请求接口 域名
// fly.config.baseURL = newFly.config.baseURL = 'http://192.168.43.61:3000' //本地
fly.config.baseURL = newFly.config.baseURL = 'http://ricardofighting.top:3000' //网络

// 定义fly的请求头
fly.config.headers['Content-Type'] = newFly.config.headers['Content-Type'] = 'application/x-www-form-urlencoded'

// 拦截器  可以通过Promise.reject／reslove直接中止请求
// lock 拦截器锁定 unlock 拦截器解锁 ( 用于多个请求时，暂停后面的请求，直到解锁拦截器再进行请求 ) 
// 拦截异步任务 一定要返回一个Promise去中止请求，否则请求会继续进行



fly.interceptors.response.use((response, Promise) => {
	// console.warn('response===>',response)
	if (response.data.success) {
		return Promise.resolve(response)
	} else if(response.data.code === '301') {
		console.warn('response2===>',response)
		uni.navigateTo({
			url: '/pages/login/login'
		})
		uni.showToast({
			icon: 'none',
			title: response.data.msg,
			duration: 2000
		})
	}

}, 
(err, Promise) => {
	// console.log("error-response-interceptor", err)
	// console.log("err.response.data.code === 301 :", err.response.data.code === 301)
	if (err.response.data.code === 301) {
		uni.reLaunch({
			url: '/pages/login/login'
		})
		uni.showToast({
			icon: 'none',
			title: err.response.data.msg,
			duration: 2000
		})
	}
})

export default fly
