<template>
  <v-list dense nav>
    <!-- Home -->
    <v-list-item v-for="playlist in playlists" :key="playlist.id" :to="addSongPlusRedirect(playlist.id)">
      <v-icon left></v-icon>
      <v-list-item-content>
        <v-list-item-title
          class="subtitle-1 font-weight-bold"
          v-text="playlist.name"
        />
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "PlaylistDrawer",
  props: ["playlists"],
  methods: {
    addSongPlusRedirect: function(playlistID) {
      //addSongToPlaylist //find a way to get song from TrackMenu
      return `/playlist/${playlistID}`;
    }
  }
};
</script>
