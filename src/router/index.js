import Vue from "vue";  //笔记：导入vue2的构造函数
import VueRouter from "vue-router"; //笔记：导入vue-router  注意记住vue2的版本是router对应的是3版本
import Main from '@/views/Main.vue';



Vue.use(VueRouter);

const router = new VueRouter({
  //vue3这里需要指定history
  //路由报错 children.foreach is not a function 因为children需要数组嵌套
  routes: [
    { path: '/', redirect: './Main' },  //笔记:重定向到主页
    {
      path: '/Main', component: Main, name:'Main',
      redirect:'/home',
      children: [

        {
          path: '/home',
          name:'home',
          component: () => import('@/views/home/home.vue')
  
        },
        {
          path: '/user',
          name:'user',
    
          component: () => import('@/views/user/index.vue')
        },
        {
          path: '/student',
          name:'student',
    
          component: () => import('@/views/student/index.vue')
        },
        {
          path: '/pageOne',
    
          component: () => import('@/views/student/index.vue')
    
    
        }

      ]

    },
    {path: '/login', component:  () => import('@/views/login/login.vue') , 
    name:'login',
    },
    {path:"*",redirect:"/notfound"},
    
    {
      name:'notfound',
      path:'/notfound',
      component:()=>import('@/views/notfound/index.vue')
    }
    

  ]


})

export default router