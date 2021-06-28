import { createRouter, createWebHistory } from 'vue-router'
const home = () => import("../views/home/home")
const category = () => import("../views/category/category")
const cart = () => import("../views/cart/cart")
const profile = () => import("../views/profile/profile")


const routes = [
  {
    path: '/',
    redirect:'/home',
  },
  {
    path: '/home',
    name: "home",
    component: home,
  },
  {
    path: '/category',
    name: "category",
    component: category,
  },
  {
    path: '/cart',
    name: "cart",
    component: cart,
  },
  {
    path: '/profile',
    name: "profile",
    component: profile,
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
