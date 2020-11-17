import Fly from 'flyio/dist/npm/wx'
import qs from 'qs'
import request from './request'

const api = {
	//获取音乐播放链接
	getMusicUrl(data) {
		return request.get('/song/url', {
            ...data
        })
    },
	getLyric(data) {
		return request.get('/lyric', {
		    ...data
		})
	},
	getSearch(data) {
		return request.get('/search', {
		    ...data
		})
	},
	//手机登录
	postPhoneLogin(data) {
		return request.post('/login/cellphone', {
			...data
		})
	},
	//email登录
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
	//获取喜欢音乐列表
	getLikeMusic(data) {
		return request.get('/likelist', {
			...data
		})
	},
	getSearchDefault(data) {
		return request.get('/search/default', {
			...data
		})
	},
	getSearchHot(data) {
		return request.get('/search/hot', {
			...data
		})
	},
	//获取歌曲详情
	getSongDetail(data) {
		return request.get('/song/detail', {
			...data
		})
	},
	//获取banner图
	getBanner(data) {
		return request.get('/banner',{
			...data
		})
	},
	//热门歌手
	getTopArtists(data) {
		return request.get('/top/artists',{
			...data
		})
	},
	//推荐电台
	getDjProgram(data) {
		return request.get('/personalized/djprogram',{
			...data
		})
	},
	//mv排行榜
	getTopMv(data) {
		return request.get('/top/mv',{
			...data
		})
	},
	//获取mv数据
	getMvDetail(data) {
		return request.get('/mv/detail',{
			...data
		})
	},
	//获取mv地址
	getMvUrl(data) {
		return request.get('/mv/url',{
			...data
		})
	},
	//获取mv评论
	getMvComment(data) {
		return request.get('/comment/mv',{
			...data
		})
	},
	//喜欢音乐
	likeMusic(data) {
		return request.post('/like',{
			...data
		})
	},
	//获取用户喜欢音乐列表
	getLikeList(data) {
		return request.get('/likelist',{
			...data
		})
	}
	
	
}

export default api