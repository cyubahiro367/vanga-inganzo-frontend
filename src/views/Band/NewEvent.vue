<template>
  <div>
    <Header></Header>
    <div id="layoutSidenav">
      <SideBar />
      <div id="layoutSidenav_content">
        <main>
          <div class="container-fluid px-4">
            <h1 class="mt-4">Event</h1>
            <ol class="breadcrumb mb-4">
              <li class="breadcrumb-item active">Event</li>
            </ol>
            <div class="row">
              <div class="col-xl-3 col-md-6"></div>
              <div class="col-xl-6 col-md-6">
                <form>
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="inputName"
                      type="email"
                      placeholder="Name"
                      v-model="name"
                    />
                    <label for="inputEmail">Name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="inputVenue "
                      type="text"
                      placeholder="Password"
                      v-model="venue"
                    />
                    <label for="inputPassword">Venue</label>
                  </div>
                  <div class="form-floating mb-3">
                    <flat-pickr v-model="startTime"/>
                    <!-- <flat-pickr
                      id="example-flatpickr-datetime"
                      class="form-control bg-white"
                      :config="config"
                      placeholder="select date"
                      v-model="startTime"
                    ></flat-pickr> -->
                    <!-- <label for="inputPassword">Venue</label> -->
                  </div>
                  <div
                    class="
                      d-flex
                      align-items-center
                      justify-content-between
                      mt-4
                      mb-0
                    "
                  >
                  <div></div>
                    <button
                      style="margin-right: 10px"
                      class="btn btn-primary"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <div class="col-xl-3 col-md-6"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Band/Header.vue";
import SideBar from "../../components/Band/SideBar.vue";
import Footer from "../../components/Band/Footer.vue";
export default {
  components: {
    Header,
    SideBar,
    Footer,
  },
  data(){
    return{
      name: null,
      venue: null,
      startTime: null,
      config:{
        enableTime: true,
        dateFormat: "Y-m-d H:i"
      }
    }
  }
};
</script>

<style>
</style>