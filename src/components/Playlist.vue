<template>
  <v-container>
    <h1>{{ playlist.name }}</h1>
    <Track
      v-bind:key="track.trackId"
      v-bind:track="track"
      v-bind:trackNumber="playlist.tracks.indexOf(track) + 1"
      v-for="track in playlist.tracks"
      v-on:select-track="emitTrackIdUp"
      v-on:play-track="emitTrackUp"
    />
  </v-container>
</template>

<script>
import Track from "./Track.vue";
import { emitTrackIdUp, emitTrackUp } from "../utils/emitUtils";

export default {
  name: "Playlist",
  props: ["playlist"],
  components: {
    Track: Track
  },
  data: function() {
    return {
      updated: 0
    };
  },
  methods: {
    emitTrackUp: function(track) {
      emitTrackUp(this, track);
    },
    emitTrackIdUp: function(trackId) {
      emitTrackIdUp(this, trackId);
    }
  }
};
</script>

<style scoped></style>
