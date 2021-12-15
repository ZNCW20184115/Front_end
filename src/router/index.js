import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Introduce from '../views/intro/Introduce'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import operation from '../views/operation.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:  '/',
      name: 'Introduce',
      component: Introduce,
      children:[
        {
          path:'/intro_main',
          name:'intro_main',
          component:()=>import('@/views/intro/intro_main.vue')
        },
        {
          path:'/intro_buy',
          name:'intro_buy',
          component:()=>import('@/views/intro/intro_buy.vue')
        },
        {
          path:'/intro_about',
          name:'intro_about',
          component:()=>import('@/views/intro/intro_about.vue')
        },
      ]
    },
    {
      path:  '/Login',
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
          path:'/Inform',
          name:'Inform',
          component:()=>import('@/views/Inform.vue')
        },
        {
          path:'/Examine_Emp',
          name:'Examine_Emp',
          component:()=>import('@/views/Examine_Emp.vue')
        },
        {
          path:'/Addemployee',
          name:'Addemployee',
          component:()=>import('@/views/Addemployee.vue')
        },


        {
          path:'/lookuser',
          name:'lookuser',
          component:()=>import('@/views/Lookuser.vue')
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
        },
        {
          path:'/operation',
          name:'operation',
          component:operation,
          children:[
            {
              path:'/RelationTransform',
              name:'RelationTransform',
              component:()=>import('@/views/RelationTransform.vue')
            },
            {
              path:'/AdministratorChange',
              name:'AdministratorChange',
              component:()=>import('@/views/AdministratorChange.vue')
            }
          ]
        },
      ]
    }
  ]
})