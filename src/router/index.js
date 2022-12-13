import Vue from 'vue'
import store from '../store' 
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/Register.vue'
import DashboardView from '../views/Admin/Dashboard.vue'
import PermissionView from '../views/Admin/Permission.vue'
import ForgetPasswordView from '../views/ForgetPassword.vue'
import ResetPasswordView from '../views/ResetPassword.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresUnauth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: {
      requiresUnauth: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
    meta: {
      requiresUnauth: true
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: DashboardView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/permission',
    name: 'Permission',
    component: PermissionView,
    meta: {
      requiresAuth: true
    }
  },
  
  {
    path: '/forget-password',
    name: 'ForgetPassword',
    component: ForgetPasswordView,
    meta: {
      requiresUnauth: true
    }
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPasswordView,
    meta: {
      requiresUnauth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.isAuthenticated || localStorage.getItem('token')
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login'});
  } else if(to.matched.some(record => record.meta.requiresUnauth) && isAuthenticated){
    next({ name: 'Admin'});
  } else {
    next()
  }
})

export default router
