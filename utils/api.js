import Fly from 'flyio/dist/npm/wx'
import qs from 'qs'
import request from './request'

const api = {
	getMusicUrl(data) {
		return request.get('/song/url', {
            ...data
        })
    },
	getSearch(data) {
		return request.get('/search', {
		    ...data
		})
	},
	postPhoneLogin(data) {
		return request.post('/login/cellphone', {
			...data
		})
	},
	postEmailLogin(data) {
		return request.post('/login', {
			...data
		})
	},
	getDetail(data) {
		return request.get('/user/detail', {
			...data
		})
	},
	getLikeMusic(data) {
		return request.get('/likelist', {
			...data
		})
	}
}

export default api