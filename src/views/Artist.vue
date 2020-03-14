<template>
  <v-container>
    <!-- Artist header -->
    <artist-header
      v-bind:artist="artist"
      v-bind:artistArtworkUrl="artistArtworkUrl"
    />
    <v-divider />
    <h1 class="title font-weight-bold">Albums</h1>

    <!-- Artist albums -->
    <v-container
      :class="{
        'pl-0': $vuetify.breakpoint.xs
      }"
    >
      <albumList
        v-bind:albums="albums"
        class="px-0"
        v-on:select-track="emitTrackIdUp"
        v-on:play-track="emitTrackUp"
      />
    </v-container>
  </v-container>
</template>

<script>
import AlbumList from "../components/album/AlbumList.vue";
import { getArtist, getAlbums } from "../api/api.js";
import { emitTrackIdUp, emitTrackUp } from "../utils/emitUtils";
import { getArtistArtworkUrl } from "../utils/scraperUtils.js";
import { getHighResArtwork } from "../utils/imageUtils.js";
import ArtistHeader from "../components/artist/ArtistHeader";

export default {
  name: "Artist",
  components: {
    albumList: AlbumList,
    artistHeader: ArtistHeader
  },
  data: function() {
    return {
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
      albums: [
        {
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
      ],
      artistArtworkUrl: ""
    };
  },
  created: async function() {
    this.artist = await this.getArtistInfo();
    this.albums = await this.getAlbumsInfo();
    this.artistArtworkUrl = await this.getArtistArtworkUrl();
  },
  methods: {
    getArtistInfo: async function() {
      const artist = await getArtist(this.$route.params.id);
      this.artist = artist.results[0];
      return this.artist;
    },
    getAlbumsInfo: async function() {
      const albums = await getAlbums(this.$route.params.id);
      return albums.results;
    },
    getArtistArtworkUrl: async function() {
      const lowResArtwork = await getArtistArtworkUrl(this.artist.artistId);
      return getHighResArtwork(lowResArtwork, [300, 300]);
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

<style>
.artist-header {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
