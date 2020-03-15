<template>
  <v-card v-if=artist class="artist-card">
    <v-container class="d-flex justify-center">
      <v-img
        class="artist-image"
        src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg">
        <v-btn class="play-button" fab icon large>
          <v-icon class="play-icon" large>mdi-play-circle-outline</v-icon>
        </v-btn>
      </v-img>
    </v-container>
    <v-container class="d-flex justify-center pt-0">
      <a v-bind:href="'/#/artist/' + artist.artistId" class="link white--text font-weight-bold">
        {{ artist.artistName }}
      </a>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "ArtistCard",
  props: ["artist"]
};
</script>

<style scoped>
.artist-image {
  max-height: 200px;
  max-width: 200px;
  border-radius: 50%;
  position: center;
  vertical-align: middle;
}

.artist-card {
  margin-left: 20px;
  margin-right: 20px;
  max-width: 200px;
  background-color: #121212 !important;
}

.play-button {
  display: none;
  width: 200px !important;
  height: 200px !important;
}

.artist-image:hover .play-button,
.play-button:hover {
  display: inline-block;
  position: center;
}

  .play-icon {
    width: 50px !important;
    height: 50px !important;
  }
</style>
