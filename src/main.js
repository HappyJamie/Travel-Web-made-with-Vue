// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

require('swiper/dist/css/swiper.css')
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

// 本段代码做了更改
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
