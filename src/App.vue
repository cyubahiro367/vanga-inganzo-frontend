<template>
  <div>

    <Header 
          v-if="
            $route.path !== '/admin' &&
            $route.path !== '/register'&&
            $route.path !== '/login'&&
            $route.path !== '/permissions'&&
            $route.path !== '/forget-password'&&
            $route.path !== '/reset-password'&&
            $route.path !== '/keys'&&
            $route.path !== '/users'
          "
    />
    <router-view/>

    <Footer 
          v-if="
            $route.path !== '/admin'&&
            $route.path !== '/register'&&
            $route.path !== '/login'&&
            $route.path !== '/permissions'&&
            $route.path !== '/forget-password'&&
            $route.path !== '/reset-password'&&
            $route.path !== '/keys'&&
            $route.path !== '/users'
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
