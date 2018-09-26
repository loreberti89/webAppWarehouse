import Vue from 'vue'
import App from '../App.vue'
import Items from '../Items.vue'
import Warehouse from '../components/Warehouse.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
  	{ path: '/', name: 'home', component: Items },
    {
      path: '/warehouse/:itemId',
      name: 'Warehouse',
      component: Warehouse
    }
  ]
})