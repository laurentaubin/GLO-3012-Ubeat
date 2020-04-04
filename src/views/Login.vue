<template>
  <v-container>
    <login-form />
  </v-container>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";

export default {
  name: "Login",
  components: {
    "login-form": LoginForm
  }
};
</script>

<style></style>
