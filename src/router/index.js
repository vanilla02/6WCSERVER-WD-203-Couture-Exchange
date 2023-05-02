import Vue from 'vue'
import VueRouter from 'vue-router'
import EditComponent from '@/components/EditComponent.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/HomeComponent')
  },
  {
    path: '/customer',
    name: 'customer',
    component: () => import('../components/CreateComponent')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/ListComponent')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditComponent
  },
  {
    path: '/aboutus/',
    name: 'aboutus',
    component: () => import('../components/AboutusComponent')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router