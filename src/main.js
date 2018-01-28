// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from './services/firebase'

import Vuefire from 'vuefire'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(Vuefire)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  firebase: {
    cat: firebase.database.ref('cat').orderByChild('created_at')
  }
})
