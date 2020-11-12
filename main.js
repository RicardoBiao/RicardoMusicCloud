import Vue from 'vue'
import App from './App'
import api from './utils/api'
import store from '@/vuex/store'
import VueBus from './vue-bus/vue-bus.js'
// import VueRouter from 'vue-router'
// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload)
// Vue.use(VueRouter)
Vue.use(VueBus)

Vue.prototype.$api = api
Vue.prototype.$store = store
// Vue.prototype.innerAudioContext = uni.createInnerAudioContext()
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()


