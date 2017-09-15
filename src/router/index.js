import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import joinshop from '@/components/shop/joinshop'
import help from '@/components/help/help'
import navlist from '@/components/goods/navlist'
import list from '@/components/goods/list'
import nav from '@/components/goods/nav'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      	path: '/',
      	name: 'home',
      	component: home
    },
    {
      	path: '/home',
      	name: 'home',
      	component: home
    },
    {
    	path: '/shop',
      	name: 'joinshop',
      	component: joinshop
    },
    {
    	path: '/help',
      	name: 'help',
      	component: help
    },
    {
    	path: '/navlist/:nav/:uid/:num',
      	name: 'navlist',
      	component: navlist
    }
  ]
})
