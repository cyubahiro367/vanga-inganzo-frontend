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
                    <h3 class="text-center font-weight-light my-4">Login</h3>
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
                        <label for="inputEmail">Email address</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          class="form-control"
                          id="inputPassword"
                          type="password"
                          placeholder="Password"
                          v-model="password"
                        />
                        <label for="inputPassword">Password</label>
                      </div>
                      <div class="form-check mb-3">
                        <input
                          class="form-check-input"
                          id="inputRememberPassword"
                          type="checkbox"
                          value=""
                        />
                        <label
                          class="form-check-label"
                          for="inputRememberPassword"
                          >Remember Password</label
                        >
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
                                >
                                <a>Forgot Password?</a>
                                </router-link>

                        <button class="btn btn-primary" @click="submitForm" >Login</button>

                      </div>
                    </form>
                  </div>
                  <div class="card-footer text-center py-3">
                    <div class="small">
                      <router-link
                                to="/register"
                                >
                                <a>Need an account? Sign up!</a>
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
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      clicked: false,
    };
  },
  methods: {
    async submitForm() {
      this.$Progress.start();
      this.clicked = true;
      axios.defaults.headers.common["Authorization"] = "";

      localStorage.removeItem("token");

      const data = {
        email: this.email,
        password: this.password,
      };
      try {
        const response = await axios.post("/api/auth/login", data);
        this.$Progress.finish();
        const token = response.data.token;
        const permissionName = response.data.permissionName;
        localStorage.setItem("token", token);
        localStorage.setItem("permissionName", permissionName);
        this.$store.commit("setToken", token);
        this.$store.commit("setPermissionName", permissionName);
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        const toPath = this.$route.query.to || "/admin";
        this.$router.push(toPath);
      } catch (error) {
        this.$Progress.fail();
        this.clicked = false;
      }
    },
  },
};
</script>