import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('../views/WelcomeView.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('../views/ArticleView.vue')

    },
    {
      path: '/life',
      name: 'life',
      component: () => import('../views/LifeView.vue')

    },
    {
      path: '/msg',
      name: 'msg',
      component: () => import('../views/MsgView.vue')

    },
    {
      path: '/friends',
      name: 'friends',
      component: () => import('../views/FriendsView.vue')

    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')

    },
    {
      path: '/markdown',
      name: 'markdown',
      component: () => import('../views/MarkdownView.vue')

    },
    {
      path: '/post',
      name: 'post',
      component: () => import('../views/PostView.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
