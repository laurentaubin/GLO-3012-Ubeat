<template>
  <v-container>
    <v-row>
      <v-col v-for="(artist, i) in results" :key="i">
        <ArtistCard :artist="artist" />
      </v-col>
    </v-row>
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
    results: []
  }),
  created: async function() {
    await this.updateResults();
  },
  methods: {
    updateResults: async function() {
      const results = await searchArtists(this.query);
      this.results = results.results;
    }
  }
};
</script>
