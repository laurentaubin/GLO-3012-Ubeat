<template>
  <v-container class="d-flex justify-center align-center">
    <v-progress-circular
      size="50"
      :indeterminate="true"
      color="rgb(88,86,214)"
    ></v-progress-circular>
  </v-container>
</template>

<script>
export default {
  name: "logoutLoading"
};
</script>

<style scoped></style>
