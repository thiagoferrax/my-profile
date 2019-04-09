

import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'

// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify, {
  iconfont: 'fa'
 })
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
