<template>
  <v-container id="mainContainer">
    <v-container>
      <h1 class="font-weight-bold display-2 mb-3">Albums</h1>
    </v-container>
    <v-divider />
    <v-container>
      <v-text-field solo-inverted flat hide-details dense label="Filter">
        <v-icon slot="prepend-inner" color="#fff" class="hidden-xs-only">
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
      <div v-if="albumLoading" style="width: 200px">
        <v-skeleton-loader type="card"></v-skeleton-loader>
      </div>
      <album-card v-else v-bind:album="album" />
    </v-container>
    <v-divider />
    <v-container>
      <v-container>
        <p class="font-weight-bold headline">
          Recommended for you
        </p>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import AlbumCard from "../components/album/AlbumCard";
import { getAlbum } from "../api/api";

export default {
  name: "AlbumHomePage",
  components: {
    albumCard: AlbumCard
  },
  data: () => {
    return {
      albums: [],
      album: {
        wrapperType: "",
        collectionType: "",
        artistId: 0,
        collectionId: 0,
        amgArtistId: 0,
        artistName: "",
        collectionName: "",
        collectionCensoredName: "",
        artistViewUrl: "",
        collectionViewUrl: "",
        artworkUrl60: "",
        artworkUrl100: "",
        collectionPrice: 0,
        collectionExplicitness: "",
        contentAdvisoryRating: "",
        trackCount: 0,
        copyright: "",
        country: "",
        currency: "",
        releaseDate: "",
        primaryGenreName: ""
      },
      albumLoading: true
    };
  },
  async created() {
    this.album = await this.getAlbumInfo();
  },
  methods: {
    getAlbumInfo: async function() {
      this.albumLoading = true;
      let album = await getAlbum(1253656856);
      this.albumLoading = false;
      return album.results[0];
    }
  }
};
</script>

<style scoped>
#mainContainer {
  align-self: baseline;
}
</style>
