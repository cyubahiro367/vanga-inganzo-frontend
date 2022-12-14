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
                      <h3 class="text-center font-weight-light my-4">Reset Password</h3>
                    </div>
                    <div class="card-body">
                      <form @submit.prevent="submitForm">
                        <div class="form-floating mb-3">
                          <input
                            class="form-control"
                            id="inputEmail"
                            type="email"
                            placeholder="name@example.com"
                            v-model="email"
                          />
                          <label for="inputEmail">Current Password</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            class="form-control"
                            id="inputPassword"
                            type="password"
                            placeholder="Password"
                            v-model="password"
                          />
                          <label for="inputPassword">New Password</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            class="form-control"
                            id="inputPassword"
                            type="password"
                            placeholder="Password"
                            v-model="password_confirmation"
                          />
                          <label for="inputPassword">Comfirm Password</label>
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
                                to="/forget-password"
                                class="small"
                                >
                                <a>Forgot Password?</a>
                                </router-link>
  
                          <button class="btn btn-primary" @click="submitForm" >Reset Password</button>
  
                        </div>
                      </form>
                    </div>
                    <div class="card-footer text-center py-3">
                      <div class="small">
                        <router-link
                                to="/login"
                                >
                                <a>Have an account? Go to login</a>
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

export default {
  data() {
    return {
      emails: "",
      tokens: "",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    async submitData() {
      //  alert(1);
      this.$Progress.start();
      const data = {
        email: this.emails,
        tokenkey: this.tokens,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };
      try {
        const response = await axios.post("/api/auth/reset-password/", data);
        this.$Progress.finish();

        const token = response.data.token;

        localStorage.setItem("token", token);

        this.$store.commit("setToken", token);

        axios.defaults.headers.common["Authorization"] = "Bearer " + token;

        const toPath = this.$route.query.to || "/";

        this.$router.push(toPath);
      } catch (error) {
        this.$Progress.fail();
        this.clicked = false;
        if (error.response) {
          this.$noty.error(`${error.response.data.errors[0]}`);
        } else {
          this.$noty.error(error.message);

          console.log(JSON.stringify(error));
        }
      }
    },
  },
  mounted() {
    let p1 = this.$route.params.email;
    this.emails = p1;

    let params2 = this.$route.query.token;
    this.tokens = params2;
  },
};
</script>

