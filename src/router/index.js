import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import CarDetailsPage from '../pages/CarDetailsPage.vue'
// @ts-ignore
import CarsPage from '../pages/CarsPage.vue'
import HousesPage from '../pages/HousesPage.vue'
import HouseDetailsPage from '../pages/HouseDetailsPage.vue'

const routes = [
  {
    path: '/cars',
    name: 'Cars',
    component: CarsPage
  }, {
    path: '/cars/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  }, {
    path: '/:catchAll(.*)*',
    redirect: '/cars',
    component: null
  }, {
    path: '/houses',
    name: 'Houses',
    component: HousesPage
  }, {
    path: '/houses/:id',
    name: 'HouseDetails',
    component: HouseDetailsPage
  }, {
    path: '/:catchAll(.*)*',
    redirect: '/houses',
    component: null
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
