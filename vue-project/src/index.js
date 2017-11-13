import Vue from 'vue'
import './plugins'
import router from 'router'
import store from 'store'
// const Vue = require('vue').default

import App from 'views/index/index.vue'

export default new Vue({
  store,
  router,
  el: '#app',
  render: createElement => createElement(App),
})