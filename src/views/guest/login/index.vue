<template>
  <div class="flex">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6" md="5" lg="4">
        <v-card>
          <v-card-title>Seja bem vindo</v-card-title>
          <v-card-text>
            <v-form v-model="formIsValid" ref="form">
              <v-text-field
                v-model="user.email"
                label="E-mail"
                :rules="rules.email"
                placeholder="email@dominio.com"
                clearable
              ></v-text-field>
              <v-text-field
                v-model="user.password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="rules.password"
                :type="showPassword ? 'text' : 'password'"
                name="input-10-1"
                label="Senha"
                hint="A senha deve conter ao menos 8 digitos"
                counter
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-row justify="space-between" no-gutters>
              <v-col cols="auto">
                <v-btn @click="resetForm" color="secondary" text class="pl-1"
                  >Cancelar</v-btn
                >
              </v-col>

              <v-col cols="auto">
                <v-btn @click="submitForm" color="primary">Login</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    formIsValid: false,
    showPassword: false,
    user: {
      email: "",
      password: ""
    },
    rules: {
      password: [
        v => !!v || "Preencha a senha.",
        v => (!!v && v.length >= 8) || "A senha deve conter ao menos 8 digitos"
      ],
      email: [
        v => !!v || "Preencha o E-mail.",
        v => /.+@.+/.test(v) || "Formato do E-mail inválido"
      ]
    }
  }),
  methods: {
    ...mapActions("auth", ["login"]),
    submitForm() {
      this.validateForm();

      if (this.formIsValid) this.login(this.user);
    },
    validateForm() {
      this.$refs.form.validate();
    },
    resetForm() {
      this.$refs.form.reset();
    }
  }
};
</script>
