<template>
  <v-container class="d-flex">
    <v-list dense class="mx-auto">
      <v-list-item v-for="page in pages" :key="page.text" :to="page.path">
        <v-icon left v-text="page.icon" />
        <v-list-item-content>
          <v-list-item-title v-text="page.text" />
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-if="isConnected"
        v-on:click="logout"
        @click.stop="logoutLoading = true"
      >
        <v-icon left>mdi-logout</v-icon>
        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-else :to="loginPath">
        <v-icon left>mdi-login</v-icon>
        <v-list-item-content>
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>
<script>
import { logout } from "../api/api.js";
import { isConnected } from "../api/api";
import router from "../router";

export default {
  props: {
    source: String
  },
  data: () => ({
    pages: [
    ],
    isConnected: false,
    loginPath: "/login",
    logoutLoading: false
  }),
  methods: {
    logout: async function() {
      this.isConnected = false;
      await router.push({ path: "/loading" });
      await logout();
    }
  },
  created() {
    this.isConnected = isConnected();
  }
};
</script>
