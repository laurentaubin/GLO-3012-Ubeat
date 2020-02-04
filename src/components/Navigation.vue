<template>
  <v-list dense nav>
    <!-- Home -->
    <v-list-item v-for="page in pages" :key="page.text" :to="page.path">
      <v-icon left v-text="page.icon" />
      <v-list-item-content>
        <v-list-item-title
          class="subtitle-1 font-weight-bold"
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
      { text: "Home", path: "/", icon: "mdi-home" },
      { text: "Album", path: "/album", icon: "mdi-music-box" },
      { text: "Artist", path: "/artist", icon: "mdi-music-note" },
      { text: "Playlist", path: "/playlist", icon: "mdi-playlist-music" },
      { text: "User", path: "/user", icon: "mdi-account" },
      { text: "Settings", path: "/settings", icon: "mdi-settings" }
    ]
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
