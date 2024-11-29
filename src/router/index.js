import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactPage from '../views/ContactPage.vue'
import AboutView from '../views/AboutView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import ProjectView from '@/views/ProjectView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import HobbiesView from '@/views/HobbiesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/',
    name:'about',
    component:AboutView
  },
  {
    path:'/',
    name:'project',
    component:ProjectView
  },
  {
    path:'/',
    name:'experience',
    component:ExperienceView
  },
  {
  path:'/',
  name:'Portfolio',
  component: PortfolioView
  },
  {
    path:'/',
    name:'Hobbies',
    component: HobbiesView
    },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ContactPage
  },
  {
    path: '/project',
    name: 'Project',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProjectView
  },
  {
    path: '/experience',
    name: 'Experience',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ExperienceView
  },
  {
    path: '/hobbies',
    name: 'Hobbies',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HobbiesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
