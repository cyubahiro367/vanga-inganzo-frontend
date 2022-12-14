<template>
    <div class="bg-primary">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-5">
                  <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header">
                      <h3 class="text-center font-weight-light my-4">
                        Password Recovery
                      </h3>
                    </div>
                    <div class="card-body">
                      <div class="small mb-3 text-muted">
                        Enter your email address and we will send you a link to
                        reset your password.
                      </div>
                      <form>
                        <div class="form-floating mb-3">
                          <input
                            class="form-control"
                            id="inputEmail"
                            type="email"
                            placeholder="name@example.com"
                            v-model="email"
                          />
                          <label for="inputEmail">Email address</label>
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
                          <router-link
                                to="/login"
                                class="small"
                                >
                                <a>Return to login</a>
                                </router-link>
                                <button class="btn btn-primary" @click="submitForm" >Submit</button>
                        </div>
                      </form>
                    </div>
                    <div class="card-footer text-center py-3">
                      <div class="small">
                        <router-link
                                to="/reset-password"
                                >
                                <a>Need to reset password account? Reset password!</a>
                                </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div id="layoutAuthentication_footer">
          <footer class="py-4 bg-light mt-auto">
            <div class="container-fluid px-4">
              <div
                class="d-flex align-items-center justify-content-between small"
              >
                <div class="text-muted">Copyright &copy; Your Website 2022</div>
                <div>
                  <a href="#">Privacy Policy</a>
                  &middot;
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import 'vuejs-noty/dist/vuejs-noty.css'
  export default {
    data(){
      return{
        email: ''
      }
    },
    methods:{
      async SubmitForm(){
        this.$Progress.start();
        const data = {
          email: this.email,
        };
        try {
          const resp = await axios.post('/api/auth/forgot-password/',data);
          this.$Progress.finish();
          this.$noty.success("Thank for password resetting , check your email link to confirm reseting ");
        } catch (error) {
          this.$Progress.fail()
          if (error.response) {
            for (const property in error.response.data.errors) {
              this.$noty.error(`${error.response.data.errors[property]}`);
            }
          } else {
            this.$noty.error("Something went wrong! Please try again");
  
            console.log(JSON.stringify(error));
          }
        }
      }
    }
  }
  </script>