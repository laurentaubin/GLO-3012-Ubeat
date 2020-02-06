<template>
  <div class="full-width">
    <header class="album-header">
      <v-row>
        <v-col>
          <!-- TODO Replace hardcoded image with image in api response -->
          <v-img
            src="https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/100x100bb.jpg"
            height="300px"
            width="300px"
            clear="left"
          ></v-img>
        </v-col>
        <!-- TODO Find a way to keep album name/info close to image -->
        <v-col class="album-info">
          <h1 class="album-name">{{ this.albumInfo.collectionName }}</h1>
          <!-- TODO Replace /#/artist ref by ref to actual artist ID -->
          <p>
            By <a href="/#/artist">{{ this.albumInfo.artistName }}</a>
          </p>
          <p class="album-year">
            {{ this.getAlbumYear() }} • {{ this.albumInfo.trackCount }} songs
          </p>
        </v-col>
      </v-row>
    </header>

    <div class="song-list">
      <header class="songs-header">
        <v-row>
          <v-col cols="1">
            <span>#</span>
          </v-col>
          <v-col cols="10">
            <span>Title</span>
          </v-col>
          <v-col cols="1" alignEnd>
            <span>Duration</span>
          </v-col>
        </v-row>
      </header>

      <!-- TODO Add effect and play button on hover -->
      <v-row v-bind:key="track.trackId" v-for="track in tracks">
        <v-col cols="1">
          <span>{{ track.trackNumber }}</span>
        </v-col>
        <v-col cols="10">
          {{ track.trackName }}
        </v-col>
        <v-col cols="1" alignEnd>
          {{ millisToMinutesAndSeconds(track.trackTimeMillis) }}
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import tracks from "../JSON/tracks.json";

export default {
  name: "Album",
  props: ["albumInfo"],
  data: function() {
    return {
      tracks: this.getTracksInfo(),
      // albumInfo: this.getAlbumInfo(),
      transparent: "rgba(255, 255, 255, 0)"
    };
  },
  methods: {
    getAlbumInfo: function(albumId) {
      const album = this.getAlbum(albumId);
      return album.results[0];
    },
    getAlbum: function(albumId) {
      // To avoid eslint error
      if (albumId == 0) {
        return 0;
      }
      // Will eventually be api call
      return {
        resultCount: 1,
        results: [
          {
            wrapperType: "collection",
            collectionType: "Album",
            artistId: 334854763,
            collectionId: 1484385866,
            amgArtistId: 2035613,
            artistName: "Kesha",
            collectionName: "High Road",
            collectionCensoredName: "High Road",
            artistViewUrl:
              "https://music.apple.com/us/artist/kesha/334854763?uo=4",
            collectionViewUrl:
              "https://music.apple.com/us/album/high-road/1484385866?uo=4",
            artworkUrl60:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/60x60bb.jpg",
            artworkUrl100:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/100x100bb.jpg",
            collectionPrice: 10.99,
            collectionExplicitness: "explicit",
            contentAdvisoryRating: "Explicit",
            trackCount: 15,
            copyright: "℗ 2019 Kemosabe Records",
            country: "USA",
            currency: "USD",
            releaseDate: "2020-01-10T08:00:00Z",
            primaryGenreName: "Pop"
          }
        ]
      };
    },
    getAlbumYear: function() {
      const date = new Date(this.albumInfo.releaseDate);
      return date.getFullYear();
    },
    getTracksInfo: function() {
      // const albumId = this.albumInfo.collectionId;
      const albumId = 1;
      const tracks = this.getTracks(albumId);
      return tracks.results;
    },
    getTracks: function(albumId) {
      // To avoid eslint error
      if (albumId == 0) {
        return 0;
      }

      // Will evetually be api call
      return tracks;
    },
    millisToMinutesAndSeconds(millis) {
      const minutes = Math.floor((millis / 1000 / 60) << 0);
      const seconds = Math.floor((millis / 1000) % 60);
      let timeInMinutesAndSeconds = minutes + ":" + seconds;

      // To avoid times like 4:0
      if (seconds === 0) {
        timeInMinutesAndSeconds += "0";
      }

      return timeInMinutesAndSeconds;
    }
  }
};
</script>

<style>
.full-width {
  width: 100%;
}
.album-header {
  margin-bottom: 12px;
  margin-top: 32px;
}
.album-header p {
  color: darkgrey;
  margin-bottom: 0 !important;
}
.album-header a {
  color: white !important;
  text-decoration: none;
}
.album-header a:hover {
  text-decoration: underline;
}
.album-info {
  text-align: left;
}
.album-name {
  display: inline-block;
}
.show-btn {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
