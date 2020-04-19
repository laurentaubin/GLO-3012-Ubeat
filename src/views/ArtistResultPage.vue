<template>
  <v-container>
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
