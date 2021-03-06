import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import("../views/home/Home")
const Category = () => import("../views/category/Category")
const Cart = () => import("../views/cart/Cart")
const Profile = () => import("../views/profile/Profile")
const Detail = () => import("../views/detail/Detail")


const routes = [
  {
    path: '/',
    redirect:'/Home',
  },
  {
    path: '/home',
    name: "Home",
    component: Home,
  },
  {
    path: '/category',
    name: "Category",
    component: Category,
  },
  {
    path: '/cart',
    name: "Cart",
    component: Cart,
  },
  {
    path: '/Profile',
    name: "Profile",
    component: Profile,
  },
  {
    path: '/Detail/:id',
    name: "Detail/:id",
    component: Detail,
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
