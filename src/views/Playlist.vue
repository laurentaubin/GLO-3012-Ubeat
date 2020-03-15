<template>
  <v-container>
    <v-dialog v-model="trackIsDeleting">
      <v-progress-circular
        class="mt-6"
        style="left: 38%;"
        size="50"
        :indeterminate="true"
        color="rgb(88,86,214)"
      ></v-progress-circular>
    </v-dialog>
    <playlist
      v-bind:playlistLoading="playlistLoading"
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
      },
      playlistLoading: true,
      trackIsDeleting: false
    };
  },
  created: async function() {
    this.playlist = await this.getPlaylist();
  },
  methods: {
    getPlaylist: async function() {
      this.playlistLoading = true;
      this.playlist = await getPlaylist(this.$route.params.id);
      this.playlistLoading = false;
      return this.playlist;
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
    deleteTrack: async function(track_to_remove, playlistID) {
      this.trackIsDeleting = true;
      this.playlist.tracks = this.playlist.tracks.filter(
        track => track.trackId !== track_to_remove.trackId
      );
      await deleteTrackFromPlaylist(track_to_remove, playlistID);
      this.trackIsDeleting = false;
    }
  }
};
</script>

<style scoped></style>
