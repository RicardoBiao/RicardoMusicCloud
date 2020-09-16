import Vue from 'vue'
import App from './App'
import api from './utils/api'
import store from '@/vuex/store'
// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload)
=======
import store from '@/vuex/store'
>>>>>>> aeea84f02d10b3b0ebec6cd3459a6b553d9cc723

Vue.prototype.$api = api
Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
