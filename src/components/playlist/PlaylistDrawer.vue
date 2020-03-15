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
      let playlist = this.playlists.filter(
        _playlist => _playlist.id === playlistID
      )[0];
      let songs = playlist.tracks.map(
        track => track.trackId
      );
      this.$emit("close-playlist-drawer");
      for (let i = 0; i < this.tracks.length; i++) {
        if (songs.indexOf(this.tracks[i].trackId) === -1) {
          addTrackToPlaylist(this.tracks[i], playlistID);
        }
      }
    },
    closeDrawer: function() {
      this.$emit("close-playlist-drawer");
    }
  }
};
</script>
