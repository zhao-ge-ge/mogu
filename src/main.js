import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Toast from 'components/common/toast'
import LazyLoad from 'vue-lazyload'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$bus = new Vue()
Vue.prototype.HOST = 'http://localhost:4000'

Vue.use(Toast)
Vue.use(LazyLoad, {
  loading: require('assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
