import { createRouter, createWebHistory ,createWebHashHistory} from 'vue-router'
import Article from '../views/ArticleView.vue'
import Life from '../views/LifeView.vue'
import Game from '../views/GameView.vue'
import About from '../views/AboutView.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('../views/WelcomeView.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: Article

    },
    {
      path: '/life',
      name: 'life',
      component: Life

    },
    {
      path: '/msg',
      name: 'msg',
      component: () => import('../views/MsgView.vue')

    },
    {
      path: '/game',
      name: 'game',
      component: Game

    },
    {
      path: '/about',
      name: 'about',
      component: About

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
