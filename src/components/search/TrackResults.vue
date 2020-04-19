<template>
  <v-container>
    <v-container v-if="loading">
      <v-progress-circular
        class="mt-6"
        style="left: 38%;"
        size="50"
        :indeterminate="true"
        color="rgb(88,86,214)"
      ></v-progress-circular>
    </v-container>
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
    tracksToShow: 10,
    loading: true
  }),
  created: async function() {
    await this.updateResults();
    this.shownTracks = this.results.slice(0, this.tracksToShow);
    this.loading = false;
  },
  methods: {
    updateResults: async function() {
      const results = await searchTracks(this.query);
      if (results !== null) {
        this.results = results.results;
      }
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
