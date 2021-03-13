<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center" @click="goTo(menu[0].pageName)">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>

    <div v-for="(button, buttonIndex) in menu" :key="buttonIndex">
      <v-btn @click="goTo(button.pageName)" text>
        <span class="mr-2">{{ button.description }}</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppBar",

  data: () => ({
    menus: {
      guest: [
        {
          pageName: "home",
          description: "Home"
        },
        {
          pageName: "about",
          description: "about"
        },
        {
          pageName: "login",
          description: "login"
        }
      ],
      logged: [
        {
          pageName: "dashboard",
          description: "Dashboard"
        },
        {
          pageName: "customers",
          description: "Clientes"
        },
        {
          pageName: "logout",
          description: "Logout"
        }
      ]
    }
  }),
  computed: {
    ...mapGetters("auth", ["loggedIn"]),
    menu: function() {
      return this.loggedIn ? this.menus.logged : this.menus.guest;
    }
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    goTo(pageName) {
      this.$router.push({ name: pageName });
    }
  }
};
</script>

<style></style>
