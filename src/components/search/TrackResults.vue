<template>
  <v-container>
    <Track
      :id="track.trackId"
      :key="track.trackId"
      :track="track"
      :trackNumber="results.indexOf(track) + 1"
      v-for="track in shownTracks"
      v-on:select-track="emitTrackIdUp"
      v-on:play-track="emitTrackUp"
      :inPlaylist="false"
    />
    <v-btn @click="seeMore()" v-if="tracksToShow < results.length">
      See more
    </v-btn>
  </v-container>
</template>

<script>
import Track from "../track/Track";
import { emitTrackUp, emitTrackIdUp } from "../../utils/emitUtils";
import { searchTracks } from "../../api/api.js";

export default {
  name: "TrackResults",
  props: ["query"],
  components: {
    Track
  },
  data: () => ({
    results: [],
    shownTracks: [],
    tracksToShow: 10
  }),
  created: async function() {
    await this.updateResults();
    this.shownTracks = this.results.slice(0, this.tracksToShow);
  },
  methods: {
    updateResults: async function() {
      const results = await searchTracks(this.query);
      this.results = results.results;
    },
    seeMore: function() {
      this.tracksToShow += 10;
      this.shownTracks = this.results.slice(0, this.tracksToShow);
    },
    emitTrackUp(track) {
      emitTrackUp(this, track);
    },
    emitTrackIdUp(trackId) {
      emitTrackIdUp(this, trackId);
    }
  }
};
</script>

<style></style>
