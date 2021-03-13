<template>
  <div v-if="items.length > 0">
    <v-breadcrumbs :items="items"></v-breadcrumbs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "breadcrumb",
  computed: {
    ...mapGetters("breadcrumb", ["items"])
  }
};
</script>

<style></style>
