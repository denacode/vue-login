<template>
  <v-snackbar v-model="alert.show">
    {{ alert.text }}

    <template v-slot:action="{ attrs }">
      <v-btn :color="alert.type" text v-bind="attrs" @click="clear">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Alert",
  computed: {
    ...mapGetters("alert", ["alert"])
  },
  methods: {
    ...mapActions("alert", ["clear"])
  }
};
</script>

<style></style>
