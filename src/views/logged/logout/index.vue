<template>
  <div>
    Obrigado por nos visitar : )
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Logout",
  methods: {
    ...mapActions("auth", ["logout"]),
    ...mapActions("breadcrumb", ["setBreadcrumb"])
  },
  created() {
    this.setBreadcrumb([]);
    setTimeout(() => {
      this.logout();
    }, 500);
  }
};
</script>

<style></style>
