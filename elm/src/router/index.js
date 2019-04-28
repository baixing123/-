import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
import App from '../App'
const  HelloWorld= resolve => require(['../components/HelloWorld'],resolve)
const  Ll= resolve => require(['../ll/Ll'],resolve)
const  You= resolve => require(['../youluyou/You'],resolve)
const  shopList= resolve => require(['../shopList/shopList'],resolve)
const  foodList= resolve => require(['../foodList/foodList'],resolve)
const  orderList= resolve => require(['../orderList/orderList'],resolve)
const  adminList= resolve => require(['../adminList/adminList'],resolve)
const  manage= resolve => require(['../manage/manage'],resolve)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component:App,
      children:[
        {
          path:'',
          redirect:'/helloworld'
        },
        
        {
          path:'/helloworld',
          name:"helloworld",
          component:HelloWorld,
          children:[
          // {
          //     path:'/ll',
          //     name:'ll',
          //     component:Ll
          //   },
          ]
        } ,{
          path:'/ll',
          name:'ll',
          component:Ll,
          children:[
            {
              path:'/youluyou',
              name:'youluyou',
              component:You
            },  {
              path:'/shopList',
              name:'shopList',
              component:shopList
            },  {
              path:'/foodList',
              name:'foodList',
              component:foodList
            },  {
              path:'/orderList',
              name:'orderList',
              component:orderList
            },  {
              path:'/adminList',
              name:'adminList',
              component:adminList
            }, 
            {
              path:'/manage',
              name:"manage",
              component:manage,
            }
          ]
        },
      ]
    }
  ]
})
