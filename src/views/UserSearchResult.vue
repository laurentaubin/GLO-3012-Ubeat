<template>
  <v-container class="align-self-baseline">
    <v-container class="d-flex">
      <v-container class="font-weight-bold display-2 mb-3">
        Results for user: "{{ this.result.searchedName }}"
      </v-container>
    </v-container>
    <v-divider />
    <v-card
      v-for="user in this.result.users"
      :key="user.id"
      v-on:click="goToProfile(user.id)"
      class="mt-5"
    >
      <v-card-title>
        {{ user.name }}
      </v-card-title>
      <v-card-subtitle>
        {{ user.email }}
      </v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script>
import router from "../router";

export default {
  name: "UserSearchResult",
  props: ["items"],
  data: function() {
    return {
      result: {}
    };
  },
  created() {
    if (this.items === undefined) {
      router.push({ name: "UserHomePage" });
      return;
    }
    this.result = this.items;
  },
  methods: {
    goToProfile: function(userId) {
      router.push({ path: `/user/${userId}` });
    }
  }
};
</script>

<style scoped></style>
