import Vue from 'vue'
import axios from 'axios'

axios.default.baseURL = process.env.VUE_APP_API_url
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.VUE_APP_API_accessToken}`

Vue.prototype.$axios = axios;