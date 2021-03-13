<template>
  <v-container class="align-self-start w-100">
    <breadcrumb />
    <router-view :key="$route.path" />
  </v-container>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";

export default {
  components: {
    Breadcrumb
  }
};
</script>

<style></style>
