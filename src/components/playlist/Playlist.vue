<template>
  <v-container>
    <PlaylistHeader v-bind:playlist="playlist" />
    <Track
      v-bind:playlistID="playlist.id"
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
import Track from "../track/Track.vue";
import PlaylistHeader from "./PlaylistHeader";
import { emitTrackIdUp, emitTrackUp } from "../../utils/emitUtils";

export default {
  name: "Playlist",
  props: ["playlist"],
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
    }
  }
};
</script>

<style scoped></style>
