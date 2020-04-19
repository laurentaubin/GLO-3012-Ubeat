<template>
  <v-container>
    <v-container>
      <p class="title">Artists</p>
      <AlbumResults :query="query" />
    </v-container>

    <v-container>
      <p class="title">Albums</p>
      <ArtistResults :query="query" />
    </v-container>
  </v-container>
</template>

<script>
import AlbumResults from "../search/AlbumResults";
import ArtistResults from "../search/ArtistResults";

export default {
  name: "GlobalResults",
  props: ["query"],
  components: {
    AlbumResults,
    ArtistResults
  }
};
</script>
