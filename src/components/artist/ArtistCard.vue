<template>
  <v-card v-if="artist" class="artist-card">
    <v-container class="d-flex justify-center">
      <v-img class="artist-image" :src="imageSrc">
        <v-btn class="play-button" fab icon large>
          <v-icon class="play-icon" large>mdi-play-circle-outline</v-icon>
        </v-btn>
      </v-img>
    </v-container>
    <v-container class="d-flex justify-center pt-0">
      <a
        v-bind:href="'/#/artist/' + artist.artistId"
        class="link white--text font-weight-bold"
      >
        {{ artist.artistName }}
      </a>
    </v-container>
  </v-card>
</template>

<script>
import { getHighResArtwork } from "../../utils/imageUtils.js";
import { getArtistArtworkUrl } from "../../utils/scraperUtils.js";

export default {
  name: "ArtistCard",
  props: ["artist"],
  data: () => ({
    imageSrc: ""
  }),
  created: async function() {
    this.imageSrc = await getArtistArtworkUrl(this.artist.artistId);
  },
  methods: {
    getArtistArtworkUrl: async function(artistId) {
      const lowResArtwork = await getArtistArtworkUrl(artistId);
      return await getHighResArtwork(lowResArtwork, [300, 300]);
    }
  }
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
