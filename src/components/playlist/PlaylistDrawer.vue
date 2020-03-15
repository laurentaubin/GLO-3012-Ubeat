<template>
  <v-container>
    <v-list dense>
      <v-list-item v-for="playlist in playlists" :key="playlist.id" v-on:click="addSongToPlaylist(playlist.id)">
        <v-icon left></v-icon>
        <v-list-item-content>
          <v-list-item-title
            class="subtitle-1 font-weight-bold"
            v-text="playlist.name"
          />
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-container class="d-flex justify-center">
      <v-btn @click="closeDrawer">
        CANCEL
      </v-btn>
    </v-container>
  </v-container>
</template>

<script>
import { addTrackToPlaylist } from "../../api/api.js";

export default {
  name: "PlaylistDrawer",
  props: ["playlists", "tracks"],
  methods: {
    addSongToPlaylist: function(playlistID) {
      for (let i = 0; i < this.tracks.length; i++) {
        addTrackToPlaylist(this.tracks[i], playlistID);
        this.$emit("close-playlist-drawer");
      }
    },
    closeDrawer: function() {
      this.$emit("close-playlist-drawer");
    }
  }
};
</script>
