<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app clipped>
        <nav-menu />
      </v-navigation-drawer>

      <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>Ubeat</v-toolbar-title>
      </v-app-bar>

      <v-content>
        <v-container class="fill-height" fluid>
          <router-view />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  name: "app",
  components: {
    "nav-menu": Navigation
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
  }),
  created () {
    this.$vuetify.theme.dark = true
  },
};
</script>

