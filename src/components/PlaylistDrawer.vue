<template>
  <v-list dense nav>
    <!-- Home -->
    <v-list-item v-for="playlist in playlists" :key="playlist.id" v-on:click="addSongToPlaylist(playlist.id)" :to="`/playlist/${playlist.id}`">
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
import { addTrackToPlaylist } from "../api/api.js";

export default {
  name: "PlaylistDrawer",
  props: ["playlists", "tracks"],
  methods: {
    addSongToPlaylist: function(playlistID) {
      for (let i = 0; i < this.tracks.length; i++) {
        addTrackToPlaylist(this.tracks[i], playlistID);
      }
    }
  }
};
</script>
