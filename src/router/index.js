import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home from '../views/Home.vue'
import DetailVocabulary from '../views/vocabulary/detailVocabulary.vue'
import DetailVocabularyLevel from '../views/vocabulary/detailVocabularyLevel.vue'
import DetailCourse from '../views/vocabulary/detailCourse.vue'
import Course from '../views/vocabulary/course.vue'
import CompleteExam from '../views/vocabulary/completeExam.vue'


import GeneralViewListening1 from '../views/listening/partOne/generalView.vue'
import GeneralViewListening2 from '../views/listening/partTwo/generalView.vue'
import GeneralViewListening3 from '../views/listening/partThree/generalView.vue'
import GeneralViewListening4 from '../views/listening/partFour/generalView.vue'
import ExamDetailPart1 from '../views/listening/partOne/examDetail.vue'
import ExamDetailPart2 from '../views/listening/partTwo/examDetail.vue'
import ExamDetailPart3 from '../views/listening/partThree/examDetail.vue'
import HomeFirst from '../views/home/home.vue'
import Login from '../views/home/login.vue'

import Group from '../views/group/group.vue'
import MyGroup from '../views/group/myGroup.vue'

import Dashboard from '../views/admin/dashboard.vue'
import CourseAdmin from '../views/admin/course.vue'
import CreateCourseAdmin from '../views/admin/create_course.vue'
import CreateCourseDetailAdmin from '../views/admin/create_course_detail.vue'

import GroupAdmin from '../views/admin/group.vue'
import GroupDetailAdmin from '../views/admin/group_detail.vue'
import WorkspaceAdmin from '../views/admin/workspace.vue'
import ScoreRating from '../views/admin/score_rating.vue'

import AccountAdmin from '../views/admin/account.vue'
import AccountDetailAdmin from '../views/admin/account_detail.vue'
import store from '../store'

import CoursePublic from '../views/public/course.vue'
import LessonPublic from '../views/public/lesson.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requireLogin: true
    }
  },

  {
    path: '/home',
    name: 'home_first',
    component: HomeFirst
  },

  {
    path: '/en/learn/:id',
    name: 'course-public',
    component: CoursePublic
  },

  {
    path: '/en/learn/lesson/:id',
    name: 'lesson-public',
    component: LessonPublic
  },


  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/course',
    name: 'course-home',
    component: Course,
    meta: {
      requireLogin: true
    }
  },


  {
    path: '/course/:id',
    name: 'detail-vocabulary',
    component: DetailVocabulary,
    meta: {
      requireLogin: true
    }
  },

  {
    path: '/learning/course/:id_course/:id_level',
    name: 'detail-course',
    component: DetailCourse,
    meta: {
      requireLogin: true
    }
  },

  {
    path: '/course/:id_course/level/:id_level',
    name: 'detail-vocabulary-level',
    component: DetailVocabularyLevel,
    meta: {
      requireLogin: true
    }
  },

  {
    path: '/learning/exam/complete/:id_course/:id_level/:id_vocabulary/:score',
    name: 'completeExam',
    component: CompleteExam,
    meta: {
      requireLogin: true
    }
  },

  {
    path: '/listening/part1',
    name: 'general-view-part-1',
    component: GeneralViewListening1
  },
  {
    path: '/listening/part1/exam',
    name: 'exam-detail-part-1',
    component: ExamDetailPart1,
    meta: {
      requireLogin: true
    }
  },

  {
    path: '/listening/part2',
    name: 'general-view-part-2',
    component: GeneralViewListening2,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/listening/part2/exam',
    name: 'exam-detail-part-2',
    component: ExamDetailPart2,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/listening/part3',
    name: 'general-view-part-3',
    component: GeneralViewListening3,
    meta: {
      requireLogin: true
    }
  },

  {
    path: '/listening/part3/exam',
    name: 'exam-detail-part-3',
    component: ExamDetailPart3,
    meta: {
      requireLogin: true
    }
  },

  {
    path: '/listening/part4',
    name: 'general-view-part-4',
    component: GeneralViewListening4,
    meta: {
      requireLogin: true
    }
  },

  {
    path: '/group',
    name: 'group',
    component: Group,
   
  },
  {
    path: '/m-group',
    name: 'mygroup',
    component: MyGroup,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/admin',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/admin/course',
    name: 'course',
    component: CourseAdmin,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/admin/course/create',
    name: 'create-course',
    component: CreateCourseAdmin,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/admin/course/create/detail',
    name: 'create-course-detail',
    component: CreateCourseDetailAdmin,
    meta: {
      requireLogin: true
    }
  },

  {
    path: '/admin/group',
    name: 'group-admin',
    component: GroupAdmin,
    meta: {
      requireLogin: true
    }
  },

  {
    path: '/admin/group/:group',
    name: 'group-admin-detail',
    component: GroupDetailAdmin,
    meta: {
      requireLogin: true
    }
  },

  {
    path: '/admin/workspace',
    name: 'workspace-admin',
    component: WorkspaceAdmin,
    meta: {
      requireLogin: true
    }
  },

  {
    path: '/admin/score-rating',
    name: 'score-rating-admin',
    component: ScoreRating,
    meta: {
      requireLogin: true
    }
  },

  {
    path: '/admin/account',
    name: 'account-admin',
    component: AccountAdmin,
    meta: {
      requireLogin: true
    }
  },

  {
    path: '/admin/account/:user',
    name: 'account-admin-detail',
    component: AccountDetailAdmin,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next('/login')
  } else {
    next()
  }

})
export default router
