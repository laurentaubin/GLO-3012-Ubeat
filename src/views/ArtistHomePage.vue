<template>
  <v-container id="mainContainer">
    <v-container>
      <h1 class="font-weight-bold display-2 mb-3">Artists</h1>
    </v-container>
    <v-divider />
    <v-container>
      <v-text-field solo-inverted flat hide-details dense label="Filter">
        <v-icon slot="prepend-inner" color="#fff">
          mdi-magnify
        </v-icon>
      </v-text-field>
    </v-container>
    <v-divider />
    <v-container>
      <v-container>
        <p class="font-weight-bold headline">
          Recently played
        </p>
      </v-container>
    </v-container>
    <v-container id="recent-artist-container">
      <div v-if="artistLoading" style="width: 200px">
        <v-skeleton-loader
          type="image"
          class="artist-image"
        ></v-skeleton-loader>
        <v-skeleton-loader type="card-heading"></v-skeleton-loader>
      </div>
      <artist-card v-else v-bind:artist="artist" />
    </v-container>
    <v-divider />
    <v-container>
      <v-container>
        <p class="font-weight-bold headline">
          Recommended for you
        </p>
      </v-container>
      <v-container class="d-flex">
        <artist-card />
        <artist-card />
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import ArtistCard from "../components/artist/ArtistCard";
import { getArtist } from "../api/api";

export default {
  name: "ArtistHomePage",
  components: {
    artistCard: ArtistCard
  },
  data() {
    return {
      recentlyPlayedArtists: [],
      recommendedArtists: [],
      artist: {
        wrapperType: "",
        artistType: "",
        artistName: "",
        artistLinkUrl: "",
        artistId: 0,
        amgArtistId: 0,
        primaryGenreName: "",
        primaryGenreId: 0
      },
      artistLoading: true
    };
  },
  async created() {
    this.artist = await this.getArtistInfo();
  },
  methods: {
    getArtistInfo: async function() {
      this.artistLoading = true;
      let artist = await getArtist(334854763);
      this.artistLoading = false;
      return artist.results[0];
    }
  }
};
</script>

<style scoped>
#mainContainer {
  align-self: baseline;
}
.artist-image {
  width: 200px;
  border-radius: 50%;
  position: center;
  vertical-align: middle;
}
</style>
