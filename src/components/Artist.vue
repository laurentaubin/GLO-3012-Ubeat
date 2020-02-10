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
                {{ this.artist.primaryGenreName }}
              </p>
              <h1 class="font-weight-bold display-4">
                {{ this.artist.artistName }}
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
      <albumList v-bind:albums="albums" class="px-0" />
    </v-container>
  </v-container>
</template>

<script>
import AlbumList from "./AlbumList.vue";
import albums from "../JSON/albums.json";

export default {
  name: "Artist",
  components: {
    albumList: AlbumList
  },
  data: function() {
    return {
      artist: this.getArtistInfo(1),
      albums: this.getAlbumsInfo(1)
    };
  },
  methods: {
    getArtist: function(artistId) {
      // To avoid eslint error
      if (artistId === 0) {
        return 0;
      }

      // Hardcoded artist, will eventually be api call
      return {
        resultCount: 1,
        results: [
          {
            wrapperType: "artist",
            artistType: "Artist",
            artistName: "Kesha",
            artistLinkUrl:
              "https://music.apple.com/us/artist/kesha/334854763?uo=4",
            artistId: 334854763,
            amgArtistId: 2035613,
            primaryGenreName: "Pop",
            primaryGenreId: 14
          }
        ]
      };
    },
    getArtistInfo: function(artistId) {
      const artist = this.getArtist(artistId);
      this.artist = artist.results[0];
      return artist.results[0];
    },
    getAlbums: function(artistId) {
      // TO avoid eslint error
      if (artistId === 0) {
        return 0;
      }
      return albums;
    },
    getAlbumsInfo: function(artistId) {
      const albums = this.getAlbums(artistId);
      return albums.results;
    }
  }
};
</script>

<style />
