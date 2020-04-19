<template>
  <v-container justify-center>
    <p class="title">Results for "{{ query }}"</p>
    <AlbumResults :query="query" />
  </v-container>
</template>

<script>
import AlbumResults from "../components/search/AlbumResults";

export default {
  name: "AlbumResultPage",
  components: {
    AlbumResults
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
