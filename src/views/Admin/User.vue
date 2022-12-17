<template>
  <div>
    <Header></Header>
    <div id="layoutSidenav">
      <SideBar />
      <div id="layoutSidenav_content">
        <DataTable :parameters="parameters" HeadTitle="Users" Title="Users" />
        <Footer />
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import Header from "../../components/Admin/Header.vue";
import SideBar from "../../components/Admin/SideBar.vue";
import Footer from "../../components/Admin/Footer.vue";
import DataTable from "../../components/DataTable.vue";
export default {
  components: {
    Header,
    SideBar,
    DataTable,
    Footer,
  },
  data() {
    return {
      parameters: {
        data: [],
        lang: "en",
        actionMode: "single",
        columns: [
          {
            key: "id",
            title: "ID",
          },
          {
            key: "name",
            title: "Name",
          },
          {
            key: "email",
            title: "Email",
          },
          {
            key: "status",
            title: "Status",
          },
          {
            key: "since",
            title: "Since",
          },
        ],
      },
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      this.$Progress.start();

      try {
        const response = await axios.get("/api/users");
        this.$Progress.finish();

        this.parameters.data = response.data;
      } catch (error) {
        console.log(error);
        this.$Progress.fail();
      }
    },
  },
};
</script>
  
  <style>
</style>