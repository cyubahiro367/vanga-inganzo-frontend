<template>
    <div class="bg-primary">
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
            <main>
                <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7">
                    <div class="card shadow-lg border-0 rounded-lg mt-5">
                        <div class="card-header">
                        <h3 class="text-center font-weight-light my-4">
                            Create Account
                        </h3>
                        </div>
                        <div class="card-body">
                        <form @submit.prevent="submitForm">
                            <div class="form-floating mb-3">
                            <input
                                class="form-control"
                                id="inputEmail"
                                type="email"
                                v-model="email"
                                required
                                placeholder="name@example.com"
                            />
                            <label for="inputEmail">Email address</label>
                            </div>
                            <div class="row mb-3">
                            <div class="col-md-6">
                                <div class="form-floating mb-3 mb-md-0">
                                <input
                                    class="form-control"
                                    v-model="password"
                                    required
                                    id="inputPassword"
                                    type="password"
                                    placeholder="Create a password"
                                />
                                <label for="inputPassword">Password</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating mb-3 mb-md-0">
                                <input
                                    class="form-control"
                                    v-model="password_confirmation"
                                    required
                                    id="inputPasswordConfirm"
                                    type="password"
                                    placeholder="Confirm password"
                                />
                                <label for="inputPasswordConfirm"
                                    >Confirm Password</label
                                >
                                </div>
                            </div>
                            </div>
                            <div class="form-floating mb-3">
                            <input
                                class="form-control"
                                id="inputKey"
                                type="password"
                                v-model="key"
                                required
                                placeholder="name@example.com"
                            />
                            <label for="inputEmail">Key</label>
                            </div>
                            <div class="mt-4 mb-0">
                            <div class="d-grid">
                                <a class="btn btn-primary btn-block" @click="submitForm"
                                >Create Account</a
                                >
                            </div>
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
                <div class="d-flex align-items-center justify-content-between small">
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
      email: null,
      password: null,
      password_confirmation: null,
      key: null,
      clicked: false,
    };
  },
  methods: {
    async submitForm() {
      this.$Progress.start();
      this.clicked = true;
      const data = {
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        key: this.key,
      };
      try {
        const response = await axios.post(
          "http://localhost:89/api/auth/register",
          data
        );
        this.$Progress.finish();
        console.log("here");
        const token = response.data.token;

        localStorage.setItem("token", token);

        this.$store.commit("setToken", token);

        axios.defaults.headers.common["Authorization"] = "Bearer " + token;

        this.$router.push("/");
      } catch (error) {
        this.$Progress.fail();
        this.clicked = false;
        if (error.response) {
          for (const property in error.response.data.errors) {
            this.$noty.error(`${error.response.data.errors[property]}`);
          }
        } else {
          this.$noty.error("Something went wrong! Please try again");
        }
      }
    },
  },
};
</script>
  