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
    <v-row>
      <v-col v-for="(artist, i) in shownArtists" :key="i">
        <ArtistCard :artist="artist" />
      </v-col>
    </v-row>
    <v-btn @click="seeMore()" v-if="artistsToShow < results.length">
      See more
    </v-btn>
  </v-container>
</template>

<script>
import ArtistCard from "../artist/ArtistCard";
import { searchArtists } from "../../api/api.js";

export default {
  name: "ArtistResults",
  props: ["query"],
  components: {
    ArtistCard
  },
  data: () => ({
    results: [],
    artistsToShow: 8,
    shownArtists: [],
    loading: true
  }),
  created: async function() {
    await this.updateResults();
    this.shownArtists = this.results.slice(0, this.artistsToShow);
    this.loading = false;
  },
  methods: {
    updateResults: async function() {
      const results = await searchArtists(this.query);
      if ( results !== null) {
        this.results = results.results;
      }
    },
    seeMore: function() {
      this.artistsToShow += 4;
      this.shownArtists = this.results.slice(0, this.artistsToShow);
    }
  }
};
</script>
