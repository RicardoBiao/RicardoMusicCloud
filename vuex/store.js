import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger' // 修改日志
import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const debug = false

const state = {
	//用户信息
	userInfo: [],
	detail:[],
	//登录信息
	loginData:[],
	//是否登录
	isLogin: true,
	token: '',
	cookie: '',
	//喜欢音乐列表
	likeList: [],
	//播放列表
	playList: [],
	//音乐列表
	musicList: [],
	//是否正在播放
	isPlay: false,
	//全局音乐文件
	innerAudioContext: uni.createInnerAudioContext(),
	//当前播放index
	currentIndex: 0
}
state.innerAudioContext.onEnded((e) => {
	actions.setIsPlay(false);
	
})

export default new Vuex.Store({  
    state,
	actions,
	getters,
	mutations,
    plugins: debug ? [createLogger()] : []
})
