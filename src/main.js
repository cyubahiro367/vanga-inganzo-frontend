import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueProgressBar from 'vue-progressbar'
import VueNoty from 'vuejs-noty'




Vue.use(VueNoty)
const options = {
  color: 'white',
  failedColor: 'red',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

axios.defaults.baseURL = process.env.VUE_APP_API_URL

Vue.config.productionTip = false

Vue.use(VueProgressBar, options)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
