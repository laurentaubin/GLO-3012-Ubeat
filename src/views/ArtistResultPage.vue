<template>
  <v-container>
    <v-container class="d-flex">
      <v-container class="font-weight-bold display-2 mb-3">
        Results for artist: "{{ query }}"
      </v-container>
    </v-container>
    <ArtistResults :query="query" />
  </v-container>
</template>

<script>
import ArtistResults from "../components/search/ArtistResults";

export default {
  name: "ArtistResultPage",
  components: {
    ArtistResults
  },
  data: () => ({
    query: ""
  }),
  created() {
    this.query = this.$route.params.query;
  }
};
</script>

<style></style>
