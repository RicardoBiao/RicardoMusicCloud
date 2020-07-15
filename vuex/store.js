import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'; // 修改日志


Vue.use(Vuex)

const debug = false

const state = {
	userInfo: [],
	detail:[],
	loginData:[],
	isLogin: 0
}

export default new Vuex.Store({  
    state,
    plugins: debug ? [createLogger()] : []
})
