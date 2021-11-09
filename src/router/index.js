import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index,
      children:[
        {
          path:'/home',
          name:'home',
          component:()=>import('@/views/Home.vue')
        },
        {
          path: '/emo',
          name: 'emo',
          component: () => import('@/views/Emo.vue')
        },
        {
          path:'/user',
          name:'user',
          component:()=>import('@/views/User.vue')
        }
      ],
    }

  ]
})