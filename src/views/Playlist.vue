<template>
  <v-container>
    <playlist
      v-bind:playlist="playlist"
      v-on:select-track="emitTrackIdUp"
      v-on:play-track="emitTrackUp"
      v-on:updated-name="changePlaylistName"
      v-on:delete-track="deleteTrack"
    />
  </v-container>
</template>

<script>
import Playlist from "../components/playlist/Playlist";
import { getPlaylist } from "../api/api.js";
import { emitTrackIdUp, emitTrackUp } from "../utils/emitUtils";
import { editPlaylistName, deleteTrackFromPlaylist } from "../api/api";

export default {
  name: "Playlist",

  components: {
    playlist: Playlist
  },
  data: function() {
    return {
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
    async changePlaylistName(newName) {
      this.playlist = await editPlaylistName(this.playlist.id, this.playlist, newName);
    },
    deleteTrack: function(track_to_remove, playlistID) {
      this.playlist.tracks = this.playlist.tracks.filter(
        track => track.trackId !== track_to_remove.trackId
      );
      deleteTrackFromPlaylist(track_to_remove, playlistID);
    }
  }
};
</script>

<style scoped></style>
