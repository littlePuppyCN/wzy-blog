import { createRouter, createWebHistory ,createWebHashHistory} from 'vue-router'
// import Welcome from '../views/WelcomeView'
import Article from '../views/ArticleView.vue'
// import Life from '../views/LifeView.vue'
// import Game from '../views/GameView.vue'
// import About from '../views/AboutView.vue'
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
      component: () => import('../views/LifeView.vue')

    },
    {
      path: '/fitness',
      name: 'fitness',
      component: () => import('../views/FitnessView.vue')

    },
    {
      path: '/game',
      name: 'game',
      component: () => import('../views/GameView.vue')

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
