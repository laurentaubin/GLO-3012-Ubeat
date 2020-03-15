<template>
  <v-container class="d-block d-md-flex">
    <div class="d-flex justify-center justify-md-start mb-3">
      <img v-bind:src="artistArtworkUrl" class="artist-image" />
    </div>
    <div class="d-block ml-md-5 align-self-center">
      <p class="font-weight-regular subtitle-2 text-center text-md-start mb-1">
        {{ artist.primaryGenreName }}
      </p>
      <p
        class="artist-name font-weight-bold text-center text-md-start"
        :class="[$vuetify.breakpoint.smAndUp ? 'display-3' : 'display-1']"
      >
        {{ artist.artistName }}
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ArtistHeader",
  props: ["artist", "artistArtworkUrl"]
};
</script>

<style scoped>
.artist-name {
  font-size: 1em;
}

.artist-image {
  max-height: 200px;
  max-width: 200px;
  border-radius: 50%;
  position: center;
  vertical-align: middle;
}
</style>
