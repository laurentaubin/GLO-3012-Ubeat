<template>
  <v-app-bar app clipped-left>
    <v-container class="d-flex pl-0">
      <v-app-bar-nav-icon @click.stop="closeNavigationDrawer" />
      <v-toolbar-title class="align-self-center">Ubeat</v-toolbar-title>
    </v-container>

    <autocomplete type="global" />

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
import Autocomplete from "./search/Autocomplete";

export default {
  name: "Header",
  components: {
    "avatar-menu": AvatarMenu,
    autocomplete: Autocomplete
  },
  methods: {
    closeNavigationDrawer: function() {
      this.$emit("close-navigation-drawer");
    }
  }
};
</script>

<style scoped></style>
