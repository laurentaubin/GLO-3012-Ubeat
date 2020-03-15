<template>
  <v-app-bar app clipped-left>
    <v-container class="d-flex pl-0">
      <v-app-bar-nav-icon @click.stop="closeNavigationDrawer" />
      <v-toolbar-title class="align-self-center">Ubeat</v-toolbar-title>
    </v-container>
    <v-container class="d-flex justify-end pr-0">
      <v-text-field
        solo-inverted
        flat
        hide-details
        dense
        rounded
        label="Search"
        class="align-self-center"
        style="max-width: 300px; min-width: 100px"
      >
        <v-icon slot="prepend-inner" color="#fff" class="hidden-xs-only">
          mdi-magnify
        </v-icon>
      </v-text-field>
    </v-container>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn depressed class="mx-2" fab v-on="on">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <avatar-menu />
    </v-menu>
  </v-app-bar>
</template>

<script>
import AvatarMenu from "./AvatarMenu";

export default {
  name: "Header",
  components: {
    "avatar-menu": AvatarMenu
  },
  methods: {
    closeNavigationDrawer: function() {
      this.$emit("close-navigation-drawer");
    }
  }
};
</script>

<style scoped></style>
