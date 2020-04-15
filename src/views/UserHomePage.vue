<template>
  <v-container>
    <v-btn v-on:click="this.getCurrentUser">
      my account
    </v-btn>
  </v-container>
</template>

<script>
import { getCurrentUserTokenInfo } from "../api/api";
import router from "../router/index";

export default {
  name: "User",
  methods: {
    getCurrentUser: async function() {
      const tokenInfo = await getCurrentUserTokenInfo();
      if (tokenInfo !== null) {
        this.redirectToCurrentUserPage(tokenInfo.id);
      }
    },
    redirectToCurrentUserPage: userId => {
      router.push({ path: `/user/${userId}` });
    }
  }
};
</script>

<style scoped></style>
