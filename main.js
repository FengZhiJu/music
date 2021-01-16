import Vue from 'vue'
import App from './App'
import store from "store/index.js"
import uView from "components/uview-ui"

import router from "router/index.js"
import { RouterMount } from 'uni-simple-router'

Vue.config.productionTip = false

Vue.use(uView)

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
