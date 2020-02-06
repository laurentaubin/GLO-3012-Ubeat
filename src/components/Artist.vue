<template>
  <div>
    <header>
      <v-row>
        <v-col>
          <!--- TODO replace hardcoded image with some sort of api call -->
          <v-img
            class="artist-image"
            src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
            contain
            height="300px"
            width="300px"
          ></v-img>
        </v-col>
        <v-col>
          <div class="artist-info">
            <h1>{{ this.artist.artistName }}</h1>
            <p>{{ this.artist.primaryGenreName }}</p>
          </div>
        </v-col>
      </v-row>
      <div class="album-list">
        <h1> Albums </h1>

        <albumList v-bind:albums="albums" />
      </div>
    </header>
  </div>
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
.album-list {
  margin-top: 60px;
}
</style>
