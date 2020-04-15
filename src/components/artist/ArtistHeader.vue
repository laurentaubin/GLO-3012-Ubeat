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
    <div class="d-flex justify-center justify-md-start mb-3">
      <v-btn
        v-on:click="this.getBiography"
        color="rgb(88, 86, 214)"
      >
        BIOGRAPHY
      </v-btn>
    </div>
    <v-card v-if="showBiography">
      <v-card-text class="text-justify">
        {{ this.biography.text }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { getArtistBiography } from "../../utils/scraperUtils";

export default {
  name: "ArtistHeader",
  props: ["artist", "artistArtworkUrl"],
  data: function() {
    return {
      biography: {
        text: ""
      },
      showBiography: false
    };
  },
  methods: {
    getBiography: async function() {
      if (this.biography.text === "") {
        this.biography.text = await getArtistBiography(this.artist.artistId);
      }
      this.showBiography = !this.showBiography;
    }
  }
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

.active-button {
  color: rgb(88, 86, 214);
}
</style>
