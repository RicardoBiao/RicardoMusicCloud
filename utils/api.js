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
	}
}

export default api