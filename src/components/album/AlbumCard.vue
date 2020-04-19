<template>
  <v-card v-if="album" class="album-card" raised>
    <v-container class="d-flex justify-center">
      <v-img class="album-image" v-bind:src="album.artworkUrl100" />
    </v-container>
    <v-container class="d-block justify-center pt-0">
      <p class="d-flex justify-center font-weight-bold mb-0">
        <a
          v-bind:href="'/album/' + album.collectionId"
          class="link white--text"
        >
          {{ album.collectionName }}
        </a>
      </p>
      <p class="d-flex justify-center overline mb-0">
        <a v-bind:href="'/artist/' + album.artistId" class="link white--text">
          {{ album.artistName }}
        </a>
      </p>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "albumCard",
  props: ["album"]
};
</script>

<style scoped>
.album-image {
  max-height: 200px;
  max-width: 200px;
  position: center;
  vertical-align: middle;
}

.album-card {
  max-width: 200px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: #121212 !important;
}
</style>
