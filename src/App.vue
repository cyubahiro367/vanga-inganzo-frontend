<template>
  <div>

    <Header 
          v-if="
            $route.path !== '/admin' &&
            $route.path !== '/register'&&
            $route.path !== '/login'&&
            $route.path !== '/permission'&&
            $route.path !== '/forget-password'&&
            $route.path !== '/reset-password'
          "
    />
    <router-view/>

    <Footer 
          v-if="
            $route.path !== '/admin'&&
            $route.path !== '/register'&&
            $route.path !== '/login'&&
            $route.path !== '/permission'&&
            $route.path !== '/forget-password'&&
            $route.path !== '/reset-password'
          "
    />
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import SideBar from './components/Admin/SideBar.vue'
export default {
  components:{
    Header,
    Footer,
    SideBar
  }
}
</script>
