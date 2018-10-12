import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default [
  {
    path: '/',
    redirect: {
      name: 'index'
    }
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/page/index.vue')
  },
  {
    path: '/work_bench',
    name: 'work_bench',
    component: () => import('@/page/work_bench.vue')
  },
  {
    path: '/statistics_analysis',
    name: 'statistics_analysis',
    component: () => import('@/page/statistics_analysis.vue')
  },
  {
    path: '/expert_evaluation',
    name: 'expert_evaluation',
    component: () => import('@/page/expert_evaluation.vue')
  },
  {
    path: '/menber_center',
    name: 'menber_center',
    component: () => import('@/page/menber_center.vue')
  }
]
