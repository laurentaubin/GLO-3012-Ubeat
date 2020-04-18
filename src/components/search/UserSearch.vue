<template>
  <v-card>
    <v-autocomplete
      v-model="model"
      :items="items"
      :loading="isLoading"
      loader-height="2px"
      :search-input.sync="search"
      v-on:keyup.enter="goToResultPage(search)"
      type="search"
      color="rgb(88,86,214)"
      hide-no-data
      hide-selected
      item-text="name"
      label="Users"
      placeholder="Search Users"
      prepend-icon="mdi-magnify"
      clearable
      return-object
    ></v-autocomplete>
    <v-expand-transition>
      <v-list v-if="model" class="rgb(88,86,214) lighten-3">
        <v-btn v-on:click="goToUserProfil(model.id)">
          User Page
        </v-btn>
        <v-list-item v-for="(field, i) in fields" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="field.value"></v-list-item-title>
            <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>See all result</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-expand-transition>
  </v-card>
</template>

<script>
import { getAllUsers } from "../../api/api";
import router from "../../router";

export default {
  name: "UserSearch",
  data: () => ({
    users: [],
    isLoading: false,
    model: null,
    search: null,
    searchData: {
      searchedName: "",
      users: []
    }
  }),
  methods: {
    goToUserProfil: async function(userId) {
      router.push({ path: `/user/${userId}` });
    },
    goToResultPage: function(searchedName) {
      this.searchData.searchedName = searchedName;
      this.searchData.users = [];
      this.users.forEach(user => {
        if (user.name !== undefined && user.name.toLowerCase().includes(searchedName.toString().toLowerCase())) {
          this.searchData.users.push(user);
        }
      });
      this.$router.push({name: "UserSearchResultsPage", params: {items: this.searchData}});
    }
  },
  computed: {
    fields() {
      if (!this.model) return [];
      return Object.keys(this.model).map(key => {
        return {
          key,
          value: this.model[key] || "n/a"
        };
      });
    },
    items() {
      return this.users.map(user => {
        return Object.assign({}, user);
      });
    }
  },
  watch: {
    async search() {
      if (this.users.length > 0) return;
      if (this.isLoading) return;
      this.isLoading = true;
      this.users = await getAllUsers();
      this.isLoading = false;
    }
  }
};
</script>

<style></style>
