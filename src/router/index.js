import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/index';

Vue.use(Router);

const routes = [
    {
        path:'/',
        meta:{
            title:'首页'
        },
        redirect:'/film/nowplaying',
    },
    {
        path:'/film',
        meta:{
            title:'首页'
        },
        component:()=>import('@/views/film'),
        redirect:'/film/nowplaying',
        children:[
            {
                path:'nowplaying',
                meta:{
                    title:'首页'
                },
                component:()=>import('@/views/films/nowplaying')
            },
            {
                path:'soonplaying',
                meta:{
                    title:'首页'
                },
                component:()=>import('@/views/films/soonplaying')
            }
        ]
    },
    {
        path:'/cinema',
        meta:{
            title:'影院'
        },
        component:()=>import('@/views/cinema')
    },
    {
        path:'/pintuan',
        meta:{
            title:'拼团'
        },
        component:()=>import('@/views/pintuan')
    },
    {
        path:'/my',
        meta:{
            title:'个人中心'
        },
        component:()=>import('@/views/my'),
    },
    {
        path:'/city',
        meta:{
            title:'城市列表'
        },
        component:()=>import('@/views/city')
    },
    {
        path:'/login',
        meta:{
            title:'登录'
        },
        component:()=>import('@/views/login')
    },
    {
        path:'/setup',
        meta:{
            title:'设置',
            needLogin: true,
        },
        component:()=>import('@/views/setUp')
    },
    {
        path:'/orderList',
        meta:{
            title:'订单列表',
            needLogin: true,
        },
        component:()=>import('@/views/orderList')
    },
    {
        path:'/orderdetails/:Id',
        meta:{
            title:'订单详情',
            needLogin: true,
        },
        component:()=>import('@/views/orderdetails')
    },
    {
        path:'/details/:Id',
        meta:{
            title:'电影详情'
        },
        component:()=>import('@/views/films/details')
    },
]

const router = new Router({
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    let islogin = store.state.isLogin
    // console.log('islogin',islogin)
    if(to.meta.needLogin && !islogin) {
        next({
            path:'/login'
        })
    } else {
        next()
    }
    
    
  })

export default router;