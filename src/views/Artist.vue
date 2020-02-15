<template>
  <v-container>
    <!-- Artist header -->
    <v-container>
      <v-row
        :class="{
          'pl-0': $vuetify.breakpoint.xs,
          'pl-12': $vuetify.breakpoint.smAndUp
        }"
      >
        <v-col
          cols="12"
          xs="12"
          sm="4"
          md="4"
          lg="3"
          class="d-flex align-center"
        >
          <!--- TODO replace hardcoded image with some sort of api call -->
          <v-img
            contain
            src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
            height="300px"
            width="300px"
          />
        </v-col>
        <v-col xm="12" sm="8" md="6" class="d-flex align-center">
          <v-row class="align-center">
            <v-col class="pt-md-12 text-center text-sm-start">
              <p class="font-weight-regular subtitle-1 ml-md-1">
                {{ artist.primaryGenreName }}
              </p>
              <h1 class="font-weight-bold display-4">
                {{ artist.artistName }}
              </h1>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <!-- Artist albums -->
    <v-container
      :class="{
        'pl-0': $vuetify.breakpoint.xs,
        'px-12': $vuetify.breakpoint.smAndUp
      }"
    >
      <v-divider />
      <h1 class="title font-weight-bold">Albums</h1>
      <albumList v-bind:albums="albums" class="px-0"
                 v-on:select-track="emitTrackIdUp"
                 v-on:play-track="emitTrackUp"
      />
    </v-container>
  </v-container>
</template>

<script>
import AlbumList from "../components/AlbumList.vue";
import { getArtist, getAlbums } from "../api/api.js";

export default {
  name: "Artist",
  components: {
    albumList: AlbumList
  },
  data: function() {
    return {
      artist: {
        "wrapperType": "",
        "artistType": "",
        "artistName": "",
        "artistLinkUrl": "",
        "artistId": 0,
        "amgArtistId": 0,
        "primaryGenreName": "",
        "primaryGenreId": 0
      },
      albums: [
        {
          "wrapperType": "",
          "collectionType": "",
          "artistId": 0,
          "collectionId": 0,
          "amgArtistId": 0,
          "artistName": "",
          "collectionName": "",
          "collectionCensoredName": "",
          "artistViewUrl": "",
          "collectionViewUrl": "",
          "artworkUrl60": "",
          "artworkUrl100": "",
          "collectionPrice": 0,
          "collectionExplicitness": "",
          "contentAdvisoryRating": "",
          "trackCount": 0,
          "copyright": "",
          "country": "",
          "currency": "",
          "releaseDate": "",
          "primaryGenreName": ""
        }
      ]
    };
  },
  created: async function() {
    this.artist = await this.getArtistInfo();
    this.albums = await this.getAlbumsInfo();
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
    emitTrackUp(track) {
      this.$emit('play-track', track);
    },
    emitTrackIdUp(trackId) {
      this.$emit('select-track', trackId);
    }
  }
};
</script>

<style />
