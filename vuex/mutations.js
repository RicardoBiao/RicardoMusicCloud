const SET_ISPLAY  = 'SET_ISPLAY'
const SET_PLAYLIST = 'SET_PLAYLIST'
const SET_LIKELIST = 'SET_LIKELIST'
const SET_USERINFO = 'SET_USERINFO'
const SET_COOKIE = 'SET_COOKIE'
const SET_AUDIOURL = 'SET_AUDIOURL'
const SET_CURRENT_INDEX = 'SET_CURRENT_INDEX'
const SET_CURRENT_LYRIC = 'SET_CURRENT_LYRIC'

export default {
	[SET_ISPLAY](state, data) {
		state.isPlay = data
	},
	[SET_PLAYLIST](state, data) {
		state.playList = data
	},
	[SET_LIKELIST](state, data) {
		state.likeList = data
	},
	[SET_USERINFO](state, data) {
		state.userInfo = data
	},
	[SET_COOKIE](state, data) {
		state.cookie = data
	},
	[SET_AUDIOURL](state, data) {
		state.innerAudioContext.src = data
	},
	[SET_CURRENT_INDEX](state, data) {
		state.currentIndex = data
	},
	[SET_CURRENT_LYRIC](state, data) {
		state.currentLyric = data
	},
}