// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import vuefire from 'vuefire'

Vue.use(vuefire)
Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAIlBRls-ycMYOP9Z3LO8kBQSmUnM5yvcc',
  authDomain: 'websocket-slide-f13a2.firebaseapp.com',
  databaseURL: 'https://websocket-slide-f13a2.firebaseio.com',
  projectId: 'websocket-slide-f13a2',
  storageBucket: 'websocket-slide-f13a2.appspot.com',
  messagingSenderId: '721114250377'
}
firebase.initializeApp(config)

Vue.prototype.$db = firebase.database()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
