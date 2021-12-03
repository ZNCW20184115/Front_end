import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import operation from '../views/operation.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:  '/',
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