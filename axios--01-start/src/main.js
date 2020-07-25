import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuejs-http-37f33.firebaseio.com/';
axios.defaults.headers.common['Authorization'] = 'something';
axios.defaults.headers.get['Accepts'] = 'application/json'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

const reqInterceptor =  axios.interceptors.request.use(config => {
  console.log('Request-interceptors:__________________')
  console.log(config)
  return config
})

const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response-interceptors:__________________')
  console.log(res)
  return res
})
// Wenn die erstellten interceptors wieder rausgefischt werden sollen:
// axios.interceptors.request.eject(reqInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
