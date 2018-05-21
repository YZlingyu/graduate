import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import specialist from '@/pages/specialist'
import technology from '@/pages/technology'
import techniqueChain from '@/pages/techniqueChain'
import patent from '@/pages/patent'
import output from '@/pages/output'
import company from '@/pages/company'
import specialistDetail from '@/pages/specialistDetail'
import patentDetail from '@/pages/patentDetail'
import outputDetail from '@/pages/outputDetail'
import companyDetail from '@/pages/companyDetail'
import technologyDetail from '@/pages/technologyDetail'
import question from '@/pages/q&a'
import companyInfo from '@/pages/companyInfo'
import technologyChain from '@/pages/technologyChain'
import technologyInfo from '@/pages/technologyInfo'
import patentInfo from '@/pages/patentInfo'
import outputInfo from '@/pages/outputInfo'
import specialistInfo from '@/pages/specialistInfo'
import login from '@/pages/login'
import register from '@/pages/register'
import admin from '@/pages/admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    // {
    //   path: '/specialist',
    //   name: 'specialist',
    //   component: specialist
    // },
    // {
    //   path: '/technology',
    //   name: 'technology',
    //   component: technology
    // },
    // {
    //   path: '/patent',
    //   name: 'patent',
    //   component: patent
    // },
    // {
    //   path: '/output',
    //   name: 'output',
    //   component: output
    // },
    // {
    //   path: '/company',
    //   name: 'company',
    //   component: company
    // },
    {
      path: '/specialistDetail',
      name: 'specialistDetail',
      component: specialistDetail
    },
    {
      path: '/patentDetail',
      name: 'patentDetail',
      component: patentDetail
    },
    {
      path: '/outputDetail',
      name: 'outputDetail',
      component: outputDetail
    },
    {
      path: '/companyDetail',
      name: 'companyDetail',
      component:companyDetail
    },
    {
      path: '/technologyDetail',
      name: 'technologyDetail',
      component:technologyDetail
    },
    {
      path: '/techniqueChain',
      name: 'techniqueChain',
      component: techniqueChain
    },
    {
      path: '/question',
      name: 'question',
      component: question
    },
    {
      path: '/company',
      name: 'company',
      component: companyInfo
    },
    {
      path: '/technologyChain',
      name: 'technologyChain',
      component: technologyChain
    },
    {
      path: '/technology',
      name: 'technologyInfo',
      component: technologyInfo
    },
    {
      path: '/patent',
      name: 'patentInfo',
      component: patentInfo
    },
    {
      path: '/output',
      name: 'outputInfo',
      component: outputInfo
    },
    {
      path: '/specialist',
      name: 'specialistInfo',
      component: specialistInfo
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    }
  ]
})
