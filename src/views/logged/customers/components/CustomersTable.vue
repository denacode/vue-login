<template>
  <v-data-table
    :headers="headers"
    :items="customers"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item.status="{ item }">
      <v-chip :color="item.status.color" outlined>
        {{ item.status.description }}
      </v-chip>
    </template>

    <template v-slot:item.actions="{ item }">
      <v-btn @click="goToEdit(item.id)" color="cyan" text>
        <v-icon dark>mdi-pencil</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  methods: {
    goToEdit(id) {
      console.log(id);
    }
  },
  data() {
    return {
      headers: [
        {
          text: "Nome",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Status", value: "status" },
        { text: "Ações", sortable: false, align: "end", value: "actions" }
      ],
      customers: [
        {
          id: 1,
          name: "Carlão",
          status: {
            value: "ok",
            description: "Contas em dia",
            color: "success"
          }
        },
        {
          id: 2,
          name: "Sérgio",
          status: {
            value: "expired",
            description: "Contas vencidas",
            color: "error"
          }
        },
        {
          id: 3,
          name: "Augusto",
          status: {
            value: "to_expire",
            description: "Contas vencem em 3 dias",
            color: "warning"
          }
        }
      ]
    };
  }
};
</script>

<style></style>
