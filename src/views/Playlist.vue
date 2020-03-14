<template>
  <v-container>
    <v-btn v-on:click="dialog = !dialog">Edit playlist</v-btn>
    <v-btn v-on:click="deletePlaylistTrigger = !deletePlaylistTrigger">Delete playlist</v-btn>
    <v-dialog
      v-model="deletePlaylistTrigger"
      max-width="290"
    >
    <p>Are you sure you want to delete this playlist? This action cannot be undone</p>
      <v-btn v-on:click="deletePlaylist">OK</v-btn>
    </v-dialog>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
    <v-text-field
          v-model="this.newPlaylistName"
          label="Enter new playlist name"
        ></v-text-field>
      <v-btn v-on:click="changePlaylistName">OK</v-btn>
    </v-dialog>
    <playlist
      v-bind:playlist="playlist"
      v-on:select-track="emitTrackIdUp"
      v-on:play-track="emitTrackUp"
    />
  </v-container>
</template>

<script>
import Playlist from "../components/Playlist";
import { getPlaylist, editPlaylistName, deletePlaylist } from "../api/api.js";
import { emitTrackIdUp, emitTrackUp } from "../utils/emitUtils";

export default {
  name: "Playlist",
  
  components: {
    playlist: Playlist
  },
  data: function() {
    return {
      newPlaylistName: "",
      deletePlaylistTrigger: false,
      dialog: false,
      playlist: {
        owner: {
          email: "",
          name: "",
          id: 0
        },
        name: "",
        tracks: [],
        id: 0
      }
    };
  },
  created: async function() {
    this.playlist = await this.getPlaylist();
  },
  methods: {
    getPlaylist: async function() {
      return await getPlaylist(this.$route.params.id);
    },
    emitTrackUp: function(track) {
      emitTrackUp(this, track);
    },
    emitTrackIdUp: function(trackId) {
      emitTrackIdUp(this, trackId);
    },
    changePlaylistName: async function(){
      this.playlist = await editPlaylistName(this.playlist.id, this.playlist, this.newPlaylistName);
      this.dialog = false
    },
    deletePlaylist: async function(){
      await deletePlaylist(this.playlist.id);
      this.deletePlaylistTrigger = false;
      // redirects to home page ??
    }
  }
};
</script>

<style scoped></style>
