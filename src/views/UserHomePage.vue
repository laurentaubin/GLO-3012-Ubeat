<template>
  <v-container class="align-self-baseline">
    <v-container class="d-flex">
      <v-container>
        <h1 class="d-flex font-weight-bold display-2 mb-3">Users</h1>
      </v-container>
      <v-spacer />
      <v-container class="d-flex justify-center justify-md-end ">
        <v-btn
          v-on:click="this.getCurrentUser"
          class="d-flex align-self-center"
        >
          <v-container v-if="!this.loading">
            my account
          </v-container>
          <v-progress-circular
            v-else
            class="justify-center"
            size="25"
            :indeterminate="true"
            color="rgb(88,86,214)"
          ></v-progress-circular>
        </v-btn>
      </v-container>
    </v-container>
    <v-divider />
    <UserSearch class="mt-5" />
  </v-container>
</template>

<script>
import { getCurrentUserTokenInfo } from "../api/api";
import router from "../router/index";
import UserSearch from "../components/search/UserSearch";

export default {
  name: "User",
  components: { UserSearch },
  data: function() {
    return {
      loading: false
    };
  },
  methods: {
    getCurrentUser: async function() {
      this.loading = true;
      const tokenInfo = await getCurrentUserTokenInfo();
      if (tokenInfo !== null) {
        this.loading = false;
        this.redirectToCurrentUserPage(tokenInfo.id);
      }
    },
    redirectToCurrentUserPage: async userId => {
      await router.push({ path: `/user/${userId}` });
    }
  }
};
</script>

<style scoped></style>
