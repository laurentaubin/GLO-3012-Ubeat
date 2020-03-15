<template>
  <v-container>
    <v-container v-if="playlistLoading">
      <v-progress-circular
        class="mt-6"
        style="left: 38%;"
        size="50"
        :indeterminate="true"
        color="rgb(88,86,214)"
      ></v-progress-circular>
    </v-container>
    <PlaylistHeader
      v-else
      v-bind:playlist="playlist"
      v-on:updated-name="emitUpdatedName"
    />
    <Track
      v-bind:playlistID="playlist.id"
      v-bind:key="track.trackId"
      v-bind:track="track"
      v-bind:trackNumber="playlist.tracks.indexOf(track) + 1"
      v-for="track in playlist.tracks"
      v-on:select-track="emitTrackIdUp"
      v-on:play-track="emitTrackUp"
      v-on:delete-track="emitDeleteTrack"
      v-bind:inPlaylist="true"
    />
  </v-container>
</template>

<script>
import Track from "../track/Track.vue";
import PlaylistHeader from "./PlaylistHeader";
import {
  emitTrackIdUp,
  emitTrackUp,
  emitUpdatedName
} from "../../utils/emitUtils";

export default {
  name: "Playlist",
  props: ["playlist", "playlistLoading"],
  components: {
    Track: Track,
    PlaylistHeader
  },
  data: () => ({
    updated: 0
  }),
  methods: {
    emitTrackUp: function(track) {
      emitTrackUp(this, track);
    },
    emitTrackIdUp: function(trackId) {
      emitTrackIdUp(this, trackId);
    },
    emitUpdatedName: function(updatedName) {
      emitUpdatedName(this, updatedName);
    },
    emitDeleteTrack: function(track_to_remove, playlistID) {
      this.$emit("delete-track", track_to_remove, playlistID);
    }
  }
};
</script>

<style scoped></style>
