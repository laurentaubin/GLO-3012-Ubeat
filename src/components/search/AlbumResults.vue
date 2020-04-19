<template>
  <v-container>
    <v-row>
      <v-col v-for="(album, i) in results" :key="i">
        <AlbumCard :album="album" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AlbumCard from "../album/AlbumCard";
import { searchAlbums } from "../../api/api.js";

export default {
  name: "AlbumResults",
  props: ["query"],
  components: {
    AlbumCard
  },
  data: () => ({
    results: []
  }),
  created: async function() {
    await this.updateResults();
  },
  methods: {
    updateResults: async function() {
      const results = await searchAlbums(this.query);
      this.results = results.results;
    }
  }
};
</script>
