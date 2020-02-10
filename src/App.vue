<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app clipped>
        <nav-menu />
      </v-navigation-drawer>

      <v-app-bar app clipped-left elevate-on-scroll>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-row no-gutters>
          <v-col
            offset-md="0"
            class="d-flex justify-center justify-sm-start justify-md-start justify-lg-start flex-grow-0"
          >
            <v-toolbar-title class="title ml-3 mr-5">Ubeat</v-toolbar-title>
          </v-col>
          <v-spacer class="hidden-xs-only" />
          <v-col sm="5" md="3" class="justify-end">
            <v-text-field
              solo-inverted
              flat
              hide-details
              dense
              rounded
              label="Search"
            >
              <v-icon slot="prepend-inner" color="#fff" class="hidden-xs-only">
                mdi-magnify
              </v-icon>
            </v-text-field>
          </v-col>
        </v-row>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn depressed class="mx-2" fab v-on="on">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <avatar-menu />
        </v-menu>
      </v-app-bar>

      <v-content class="align-content-center">
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

<style>
* {
  user-select: none;
}
</style>
