import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Job from '../views/jobs/Job.vue'
import Jobsdetails from '../views/jobs/Jobsdetails.vue'
import notfound from '../views/notfound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/job',
    name: 'Job',
    component: Job
  },
  {
    path: '/job/:id',
    name: 'Jobdetails',
    component: Jobsdetails,
    props: true
  },
  {
    path:'/all-jobs',
    redirect: '/jobs'
  },
  {
    path:'/:catchAll(.*)',
    name:'notfound',
    component:notfound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
