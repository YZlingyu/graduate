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
    }
  ]
})
