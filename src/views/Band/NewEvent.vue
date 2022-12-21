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
                    <label for="inputPassword">Start Date</label>
                    <flat-pickr
                      id="example-flatpickr-datetime"
                      class="form-control bg-white"
                      :config="config"
                      placeholder="select Start date"
                      v-model="startTime"
                    ></flat-pickr>
                  </div>
                  <div class="form-floating mb-3">
                    <label for="inputPassword">End Date</label>
                    <flat-pickr
                      id="example-flatpickr-datetime"
                      class="form-control bg-white"
                      :config="config"
                      placeholder="select End date"
                      v-model="endTime"
                    ></flat-pickr>
                  </div>
                  <!-- <div class="form-floating mb-3"> -->
                    <input
                      class="form-control"
                      id="inputFlier "
                      type="file"
                      @change="onFileChanged"
                      placeholder="choose Flier"
                    />
                    <!-- <label for="inputPassword">Flier</label> -->
                  <!-- </div> -->
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
      endTime: null,
      imageFile: null,
      image: null,
      updatePicture: false,
      config:{
        enableTime: true,
        dateFormat: "Y-m-d H:i"
      }
    }
  },
  methods:{
    onFileChanged(event) {
      this.image = event.target.files[0];
      if (event.target.files[0] === undefined) {
        this.$noty.error("Select an image please");
      } else {
        if (this.image.size > 10000000) {
          this.$noty.error("Image size limit is 10MB");
        } else {
          if (
            this.image.type !== "image/jpeg" &&
            this.image.type !== "image/jpg" &&
            this.image.type !== "image/png"
          ) {

            this.$noty.error("Only JPG, JPEG and PNG file types are allowed");
          }
        }
      }
    },
  }
};
</script>

<style>
</style>