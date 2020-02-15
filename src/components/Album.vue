<template>
  <v-container class="px-0">
    <!-- album header -->
    <v-container class="pb-md-7">
      <v-row no-gutters class="justify-end">
        <v-col cols="12" xs="12" sm="5" md="4" lg="3" class="align-end">
          <v-row>
            <v-img
              contain
              src="https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/52/0a/df/520adf4c-36e7-5d7d-114d-c5682df53b98/886447918104.jpg/939x0w.jpg"
              height="200px"
              width="200px"
            />
          </v-row>
        </v-col>
        <v-col class="album-info text-center text-sm-start pl-3">
          <p class="body-2 font-weight-thin mb-0 pl-1 mt-sm-2">Album</p>
          <a
            class="link white--text"
            v-bind:href="'/#/album/' + this.album.collectionId"
          >
            <h1 class="font-weight-bold display-2 mb-3">
              {{ album.collectionName }}
            </h1>
          </a>
          <p class="body-2 grey--text darken-1 mb-1">
            By
            <a
              v-bind:href="'/#/artist/' + this.album.artistId"
              class="link white--text"
            >
              {{ album.artistName }}
            </a>
          </p>
          <p class="body-2 mb-1 grey--text darken-1">
            {{ this.getAlbumYear() }} • {{ album.trackCount }} songs
          </p>
          <p class="body-2 mb-1 grey--text darken-1">
            {{ album.primaryGenreName }}
          </p>
          <v-row class="justify-center">
            <v-col class="pa-0 d-flex justify-center justify-sm-start">
              <v-btn class="buy-btn ml-3" v-on:click="buyAlbumRedirect">
                <p class="mt-auto mb-auto">
                  $ {{ album.collectionPrice }} Buy
                </p>
              </v-btn>
              <a
                href="https://geo.music.apple.com/ca/album/high-road/1484385866?mt=1&app=music&ls=1"
                class="d-inline-block itunes-btn ml-2"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="song-list" fluid>
      <header class="songs-header">
        <v-row no-gutters>
          <v-col cols="1" class="d-flex justify-center pr-5">
            <span class="body-2 mb-1 grey--text lighten-2 font-weight-thin"
              >#</span
            >
          </v-col>
          <v-col cols="10">
            <span class="body-2 grey--text lighten-2 font-weight-thin"
              >TITLE</span
            >
          </v-col>
          <v-col cols="1" class="d-flex justify-center align-center pr-5">
            <v-icon>mdi-timer</v-icon>
          </v-col>
        </v-row>
      </header>
      <v-divider />
      <Track v-bind:key="track.trackId"
            v-bind:track="track"
            v-for="track in tracks"
            v-on:select-track="emitTrackIdUp"
            v-on:play-track="emitTrackUp"/>
    </v-container>
  </v-container>
</template>

<script>
import { getTracks } from "../api/api.js";
import Track from "./Track.vue";
import {emitTrackUp, emitTrackIdUp} from "../utils/emitUtils";

export default {
  name: "Album",
  props: ["album"],
  data: function() {
    return {
      tracks: [
        {
          "wrapperType": "track",
          "kind": "song",
          "artistId": 0,
          "collectionId": 0,
          "trackId": 0,
          "artistName": "",
          "collectionName": "",
          "trackName": "",
          "collectionCensoredName": "",
          "trackCensoredName": "",
          "artistViewUrl": "",
          "collectionViewUrl": "",
          "trackViewUrl": "",
          "previewUrl": "",
          "artworkUrl30": "",
          "artworkUrl60": "",
          "artworkUrl100": "",
          "collectionPrice": 0,
          "trackPrice": 0,
          "releaseDate": "",
          "collectionExplicitness": "",
          "trackExplicitness": "",
          "discCount": 0,
          "discNumber": 0,
          "trackCount": 0,
          "trackNumber": 0,
          "trackTimeMillis": 0,
          "country": "",
          "currency": "",
          "primaryGenreName": "",
          "contentAdvisoryRating": "",
          "isStreamable": true
        }
      ],
      transparent: "rgba(255, 255, 255, 0)",
      updated: 0,
    };
  },
  components: {
    Track: Track
  },
  //For the album component in AlbumList
  async created() {
    if (this.album.collectionId !== 0
      && this.album.collectionId !== undefined
      && !this.updated) {
      this.tracks = await this.getTracksInfo();
      this.updated = 1;
    }
  },
  //For the album view
  async updated() {
    if (this.album.collectionId !== 0
      && this.album.collectionId !== undefined
      && !this.updated) {
      this.tracks = await this.getTracksInfo();
      this.updated = 1;
    }
  },
  methods: {
    getAlbumYear: function() {
      const date = new Date(this.album.releaseDate);
      return date.getFullYear();
    },
    getTracksInfo: async function() {
      const albumId = this.album.collectionId;
      const tracks = await getTracks(albumId);
      return tracks.results;
    },
    buyAlbumRedirect() {
      let win = window.open(this.album.collectionViewUrl, "_blank");
      win.focus();
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
.show-btn {
  color: rgba(255, 255, 255, 1) !important;
}

.buy-btn {
  display: inline-block;
}

.album-genre {
  display: block;
}
.track-nb {
  display: inline-block;
}

.play-btn {
  display: none !important;
  height: 30px;
  width: 30px;
}
.track:hover {
  background: #212121;
}
.track:hover .track-nb {
  display: none;
}

.track:hover .play-btn {
  display: inline-block !important;
}
.selected-track {
  background: #313131 !important;
}
.play-btn:focus {
  display: inline-block;
}

.play-btn-active {
  display: inline-block !important;
}
.track-nb-hidden {
  display: none !important;
}

.link {
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}
.itunes-btn {
  width: 35px;
  overflow: hidden;
  height: 35px;
  background: url("https://linkmaker.itunes.apple.com/embed/v1/app-icon.svg")
    no-repeat;
}
</style>
