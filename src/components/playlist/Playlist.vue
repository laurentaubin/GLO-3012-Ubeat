<template>
  <v-container>
    <PlaylistHeader v-bind:playlist="playlist" v-on:updated-name="emitUpdatedName"/>
    <Track
      v-bind:playlistID="playlist.id"
      v-bind:key="i"
      v-bind:track="track"
      v-bind:trackNumber="i + 1"
      v-for="(track, i) in playlist.tracks"
      v-on:select-track="emitTrackIdUp"
      v-on:play-track="emitTrackUp"
    />
  </v-container>
</template>

<script>
import Track from "../track/Track.vue";
import PlaylistHeader from "./PlaylistHeader";
import {emitTrackIdUp, emitTrackUp, emitUpdatedName} from "../../utils/emitUtils";

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
    },
    emitUpdatedName: function(updatedName) {
      emitUpdatedName(this, updatedName);
    }
  }
};
</script>

<style scoped></style>
