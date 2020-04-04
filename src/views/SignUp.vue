<template>
  <v-container>
    <signup-form />
  </v-container>
</template>

<script>
import SignUpForm from "../components/SignUpForm.vue";
export default {
  name: "SignUp",
  components: {
    "signup-form": SignUpForm
  }
};
</script>

<style></style>
