<template>
  <Album
    v-bind:album="album"
    v-on:select-track="emitTrackIdUp"
    v-on:play-track="emitTrackUp"
  />
</template>

<script>
import Album from "../components/Album";
import { getAlbum } from "../api/api.js";
import { emitTrackUp, emitTrackIdUp } from "../utils/emitUtils";

export default {
  name: "Album.vue",
  components: {
    Album: Album
  },
  data() {
    return {
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
      }
    };
  },
  async created() {
    this.album = await this.getAlbumInfo();
  },
  methods: {
    getAlbumInfo: async function() {
      let album = await getAlbum(this.$route.params.id);
      return album.results[0];
    },
    emitTrackUp(track) {
      emitTrackUp(this, track);
    },
    emitTrackIdUp(trackId) {
      emitTrackIdUp(this, trackId);
    }
  }
};
</script>

<style scoped></style>
