<template>
  <v-container class="align-self-baseline">
    <v-container class="d-flex">
      <h1 class="font-weight-bold display-2 mb-3">Users</h1>
      <v-spacer />
      <v-btn v-on:click="this.getCurrentUser" class="d-flex align-self-center">
        my account
      </v-btn>
    </v-container>
    <v-divider />
    <UserSearch />
  </v-container>
</template>

<script>
import { getCurrentUserTokenInfo } from "../api/api";
import router from "../router/index";
import UserSearch from "../components/search/UserSearch";

export default {
  name: "User",
  components: {UserSearch},
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
