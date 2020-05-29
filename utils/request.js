import Fly from 'flyio/dist/npm/wx'
import qs from 'qs'

const fly = new Fly()
const newFly = new Fly() // 用于请求session,因fly已经被锁定拦截


// 设置请求接口 域名
fly.config.baseURL = newFly.config.baseURL = 'http://192.168.43.61:3000' //本地

fly.config.headers['Content-Type'] = newFly.config.headers['Content-Type'] = 'application/x-www-form-urlencoded'

// 拦截器  可以通过Promise.reject／reslove直接中止请求
// lock 拦截器锁定 unlock 拦截器解锁 ( 用于多个请求时，暂停后面的请求，直到解锁拦截器再进行请求 ) 
// 拦截异步任务 一定要返回一个Promise去中止请求，否则请求会继续进行
export default fly
