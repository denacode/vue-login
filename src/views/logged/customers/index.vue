<template>
  <div>
    <v-card elevation="2">
      <v-btn
        fab
        absolute
        top
        right
        dark
        color="success"
        title="Adicionar um novo cliente"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-card-title>Clientes</v-card-title>
      <customers-table></customers-table>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CustomersTable from "./components/CustomersTable";

export default {
  components: {
    CustomersTable
  },
  data: () => ({
    breadcrumb: [
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Customer",
        disabled: true,
        href: "/customers"
      }
    ]
  }),
  methods: {
    ...mapActions("breadcrumb", ["setBreadcrumb"]),
    goToCreate() {
      this.$router.push({ name: "CreateCustomer" });
    }
  },
  created() {
    this.setBreadcrumb(this.breadcrumb);
  }
};
</script>
