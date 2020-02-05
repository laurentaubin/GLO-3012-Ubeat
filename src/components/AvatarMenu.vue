<template>
  <v-list dense class="mx-auto">
    <!-- Home -->
    <v-list-item v-for="page in pages" :key="page.text" :to="page.path">
      <v-icon left v-text="page.icon" />
      <v-list-item-content>
        <v-list-item-title
          v-text="page.text"
        />
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    pages : [
      { text: "Settings", path: "/accountsettings", icon: "mdi-account-settings"},
      { text: "Log Out", path: "/", icon: "mdi-logout" },
    ]
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
