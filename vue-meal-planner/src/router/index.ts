import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/:page?',
    component: () => import('../layouts/default/Default.vue')
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views')
      },
      {
        path: '/comics/:id',
        name: 'comic',
        component: () => import('/views/RecipesView.vue')
      }
    ]
  }
]