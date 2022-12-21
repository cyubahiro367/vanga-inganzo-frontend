<template>
  <div>
    <Header></Header>
    <div id="layoutSidenav">
      <SideBar />
      <div id="layoutSidenav_content">
        <DataTable
          :parameters="parameters"
          HeadTitle="Permissions"
          Title="Permissions"
        />
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
import TableButtons from '../../components/items/TablePermissionButton.vue'
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
            title: "Action",
            component: TableButtons,
          },
        ],
      },
    };
  },
  mounted() {
    this.getPermission();
  },
  methods: {
    async getPermission() {
      this.$Progress.start();

      try {
        const response = await axios.get("/api/permission-list");
        this.$Progress.finish();

        this.parameters.data = response.data;
      } catch (error) {
        this.$Progress.fail();
      }
    },
  },
};
</script>
  
  <style>
</style>