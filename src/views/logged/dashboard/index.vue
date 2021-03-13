<template>
  <div>
    Dashboard
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Dashboard",
  methods: {
    ...mapActions("breadcrumb", ["setBreadcrumb"])
  },
  created() {
    this.setBreadcrumb([]);
  }
};
</script>
