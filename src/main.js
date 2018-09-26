import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import _ from 'lodash';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Items from './components/Items.vue'
import Warehouse from './components/Warehouse.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
  	{ 
  		path: '/', 
  		name: 'home', 
  		component: Items 
  	},
    {
      path: '/warehouse/:itemId/:itemName',
      name: 'warehouse',
      component: Warehouse
    }
  ]
})
library.add(faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
