import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from "@/pages/login"
import editPassword from "@/pages/editPassword"
import infoTable from "@/pages/tablePage"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/editPassword',
      name: 'editPassword',
      component: editPassword
    },
    {
      path: '/infoTable',
      name: 'infoTable',
      component: infoTable
    },
    {
      path: '/infoTableApply',
      name: 'infoTable',
      component: infoTable
    }
  ]
})
