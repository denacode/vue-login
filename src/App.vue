<template>
  <v-app>
    <app-bar />
    <v-main>
      <v-container fluid class="fill-height">
        <router-view :key="$route.path" />
        <alert />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Alert from "@/components/Alert";
import AppBar from "@/components/AppBar";
export default {
  name: "App",
  components: {
    Alert,
    AppBar
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fcfcfc;
}
</style>
