import Vue from 'vue'

export default {
	setIsPlay({ commit }, data) {
		return new Promise((resolve, reject) => {
			commit('SET_ISPLAY', data) 
			
			resolve(data)
		})
	},
	setPlayList({ commit }, data) {
		return new Promise((resolve, reject) => {
			commit('SET_PLAYLIST', data) 
			
			resolve(data)
		})
	},
	setLikeList({ commit }, data) {
		return new Promise((resolve, reject) => {
			commit('SET_LIKELIST', data) 
			
			resolve(data)
		})
	},
	setUserInfo({ commit }, data) {
		return new Promise((resolve, reject) => {
			commit('SET_USERINFO', data) 
			
			resolve(data)
		})
	},
	setCookie({ commit }, data) {
		return new Promise((resolve, reject) => {
			commit('SET_COOKIE', data) 
			
			resolve(data)
		})
	},
	setAudioUrl({ commit }, data) {
		return new Promise((resolve, reject) => {
			commit('SET_AUDIOURL', data) 
			
			resolve(data)
		})
	},
	setCurrentIndex({ commit }, data) {
		return new Promise((resolve, reject) => {
			commit('SET_CURRENT_INDEX', data) 
			
			resolve(data)
		})
	}
}