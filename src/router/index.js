import { createRouter, createWebHistory } from 'vue-router'
import CartPage from "@/views/CartPage";
import MainPage from "@/views/MainPage";
import BrandPage from "@/views/BrandPage";

const routes = [
  {
    path: '/',
    name: 'MainP',
    component: MainPage,
  }, {
    path: '/:idBrand',
    name: 'Brand',
    component: BrandPage,
  }, {
    path: '/Cart',
    name: 'Cart',
    component: CartPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
