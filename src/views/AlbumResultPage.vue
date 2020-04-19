<template>
  <v-container justify-center>
    <v-container class="d-flex">
      <v-container class="font-weight-bold display-2 mb-3">
        Results for album: "{{ query }}"
      </v-container>
    </v-container>
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
