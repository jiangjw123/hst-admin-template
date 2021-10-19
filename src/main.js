import Vue from 'vue'
import App from './App.vue'
import vueAxios from 'vue-axios'
import axios from '@/axios'
import store from '@/store'

Vue.use(vueAxios, axios)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
