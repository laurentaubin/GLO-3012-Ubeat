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
        label="Username"
        prepend-icon="mdi-account"
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="Password"
        prepend-icon="mdi-lock"
        type="password"
      ></v-text-field>
    </v-container>

    <v-container class="py-0">
      <v-row align="center">
        <v-col class="py-0">
          <v-checkbox v-model="rememberMe" label="Remember me"> </v-checkbox>
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
import router from "../router/index.js";
export default {
  name: "LoginForm",
  data: () => ({
    username: "",
    password: "",
    rememberMe: false,
    invalidLogin: false
  }),
  methods: {
    signUp: function() {
      router.push("/signup");
    },
    login: function() {
      if (this.isValidCredentials(this.username, this.password)) {
        // update token
        router.push("/home");
      } else {
        this.invalidLogin = true;
      }
    },
    isValidCredentials(username, password) {
      this.username = username;
      this.password = password;
      // TODO add api call
    }
  }
};
</script>

<style scoped>
.main-container {
  max-width: 600px;
}
</style>
