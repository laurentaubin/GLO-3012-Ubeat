<template>
  <v-container>
    <v-dialog v-model="dialog" max-width="290">
      <v-card-text class="pt-2 pb-0">
        {{ duplicateSong }}
      </v-card-text>
      <v-btn v-on:click="dialog = false" color="rgb(48,209,88)">OK</v-btn>
    </v-dialog>
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
  data: function() {
    return {
      dialog: false,
      duplicateSong: ""
    };
  },
  methods: {
    addSongToPlaylist: function(playlistID) {
      let playlist = this.playlists.filter(
        _playlist => _playlist.id === playlistID
      )[0];
      let songs = playlist.tracks.map(
        track => track.trackId
      );
      this.$emit("close-playlist-drawer");

      let duplicates = [];
      for (let i = 0; i < this.tracks.length; i++) {
        if (songs.indexOf(this.tracks[i].trackId) !== -1) {
          duplicates.push(this.tracks[i].trackName);
        }
      }
      if (duplicates.length != 0) {
        const reducer = (accumulator, currentValue) => accumulator + ". " + currentValue;
        let duplicateSongs = duplicates.reduce(reducer);
        this.duplicateSong = "We detected duplicate songs : [" + duplicateSongs + ".] The duplicates won't be added to the playlist."
        this.dialog = true;
      }

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
