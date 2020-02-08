<template>
  <v-container>
    <!-- Artist header -->
    <v-container class="pb-md-7">
      <v-row no-gutters>
        <v-col cols="12" sm="12" md="4" align="center">
          <!--- TODO replace hardcoded image with some sort of api call -->
          <v-img
            class="artist-image"
            src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
            contain
            height="200px"
            width="200px"
          />
        </v-col>
        <v-col cols="12" sm="12" md="8" class="text-center text-md-start">
          <v-row>
            <v-col class="pt-md-12">
              <h1 class="font-weight-bold display-4">
                {{ this.artist.artistName }}
              </h1>
              <p class="font-weight-regular subtitle-1 ml-md-1">
                {{ this.artist.primaryGenreName }}
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-divider />
    <!-- Artist albums -->
    <v-container>
      <h1 class="title font-weight-bold">Albums</h1>
      <albumList v-bind:albums="albums" />
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

<style>
.artist-image {
  border-radius: 50%;
}
</style>
