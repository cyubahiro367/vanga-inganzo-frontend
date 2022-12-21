<template>
  <div>
    <Header
      v-if="
        $route.path !== '/admin' &&
        $route.path !== '/register' &&
        $route.path !== '/login' &&
        $route.path !== '/permissions' &&
        $route.path !== '/forget-password' &&
        $route.path !== '/reset-password' &&
        $route.path !== '/keys' &&
        $route.path !== '/users'&&
        $route.path !== '/band'&&
        $route.path !== '/event'&&
        $route.path !== '/newEvent'
      "
    />
    <router-view />

    <Footer
      v-if="
        $route.path !== '/admin' &&
        $route.path !== '/register' &&
        $route.path !== '/login' &&
        $route.path !== '/permissions' &&
        $route.path !== '/forget-password' &&
        $route.path !== '/reset-password' &&
        $route.path !== '/keys' &&
        $route.path !== '/users'&&
        $route.path !== '/band'&&
        $route.path !== '/event'&&
        $route.path !== '/newEvent'
      "
    />
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import SideBar from "./components/Admin/SideBar.vue";
export default {
  components: {
    Header,
    Footer,
    SideBar,
  },
  created() {
    this.$store.commit("initializeStore");

    const token = this.$store.state.token;

    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }
  },
};
</script>
