<template>
  <v-container class="main-container">
    <v-card>
      <v-card-title v-if="invalidLogin" color="red"
        >Invalid username or password</v-card-title
      >
    </v-card>

    <v-container class="py-0">
      <v-text-field
        v-model="email"
        label="Email"
        prepend-icon="mdi-account"
        :error="invalidLogin"
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="Password"
        prepend-icon="mdi-lock"
        type="password"
        :error="invalidLogin"
      ></v-text-field>
    </v-container>

    <v-container class="py-0">
      <v-row align="center">
        <v-col class="py-0">
          <v-checkbox v-model="rememberMe" label="Remember me"></v-checkbox>
        </v-col>
        <v-col class="text-right py-0">
          <v-btn @click="login">Log in</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="text-center">
      <a
        class="link white--text text-center text-md-start"
        href="/#/password-reset"
        >Forgot your password ?</a
      >
    </v-container>

    <hr />

    <v-container class="text-center py-8">
      <p class="title">Don't have an account ?</p>
      <v-btn @click="signUp">
        Sign up for Ubeat
      </v-btn>
    </v-container>
  </v-container>
</template>

<script>
import Router from "../router/index.js";
import { login } from "../api/api.js";

export default {
  name: "LoginForm",
  data: () => ({
    email: "",
    password: "",
    rememberMe: false,
    invalidLogin: false
  }),
  methods: {
    signUp: function() {
      Router.push("/signup");
    },
    login: async function() {
      if (this.name !== "" && this.password !== "") {
        this.invalidLogin = false;
        const data = await login(this.email, this.password);
        if (data.status === 200) {
          this.invalidLogin = false;
          window.location.replace("/");
        } else {
          this.invalidLogin = true;
        }
      }
    }
  }
};
</script>

<style scoped>
.main-container {
  max-width: 600px;
}
</style>
