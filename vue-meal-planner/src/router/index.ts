import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('../layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
 },
      {
        path: 'recipes',
        name: 'Recipes',
        component: () => import('../views/RecipesView.vue')
      },
    ],
  },
]
// …abbreviated