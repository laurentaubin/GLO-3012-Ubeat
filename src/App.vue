<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app clipped>
        <nav-menu />
      </v-navigation-drawer>

      <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title class="title ml-3 mr-5">Ubeat</v-toolbar-title>
        <v-spacer />
        <v-text-field solo-inverted flat hide-details label="Search">
          <v-icon slot="prepend-inner" color="#fff">
            mdi-magnify
          </v-icon>
        </v-text-field>
        <v-spacer />
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn class="mx-2" fab v-on="on">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <avatar-menu />
        </v-menu>
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
import AvatarMenu from "./components/AvatarMenu";
export default {
  name: "app",
  components: {
    "nav-menu": Navigation,
    "avatar-menu": AvatarMenu
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
