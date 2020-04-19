<template>
  <v-container>
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
    shownArtists: []
  }),
  created: async function() {
    await this.updateResults();
    this.shownArtists = this.results.slice(0, this.artistsToShow);
  },
  methods: {
    updateResults: async function() {
      const results = await searchArtists(this.query);
      this.results = results.results;
    },
    seeMore: function() {
      this.artistsToShow += 4;
      this.shownArtists = this.results.slice(0, this.artistsToShow);
    }
  }
};
</script>
