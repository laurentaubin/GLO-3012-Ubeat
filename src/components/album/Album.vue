<template>
  <v-container class="px-0">
    <album-header
      v-bind:album="album"
      v-bind:artworkUrl300="artworkUrl300"
      v-bind:albumYear="this.getAlbumYear()"
    />
    <v-container class="d-flex justify-end">
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn dark icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <album-menu v-bind:tracks="tracks" />
      </v-menu>
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
      <Track
        v-bind:key="track.trackId"
        v-bind:track="track"
        v-bind:trackNumber="tracks.indexOf(track) + 1"
        v-for="track in tracks"
        v-on:select-track="emitTrackIdUp"
        v-on:play-track="emitTrackUp"
        v-bind:inPlaylist="false"
      />
    </v-container>
  </v-container>
</template>

<script>
import { getTracks } from "../../api/api.js";
import Track from "../track/Track.vue";
import { emitTrackUp, emitTrackIdUp } from "../../utils/emitUtils";
import { getHighResArtwork } from "../../utils/imageUtils.js";
import AlbumHeader from "./AlbumHeader";
import AlbumMenu from "./AlbumMenu";

export default {
  name: "Album",
  props: ["album"],
  data: function() {
    return {
      tracks: [
        {
          wrapperType: "track",
          kind: "song",
          artistId: 0,
          collectionId: 0,
          trackId: 0,
          artistName: "",
          collectionName: "",
          trackName: "",
          collectionCensoredName: "",
          trackCensoredName: "",
          artistViewUrl: "",
          collectionViewUrl: "",
          trackViewUrl: "",
          previewUrl: "",
          artworkUrl30: "",
          artworkUrl60: "",
          artworkUrl100: "",
          collectionPrice: 0,
          trackPrice: 0,
          releaseDate: "",
          collectionExplicitness: "",
          trackExplicitness: "",
          discCount: 0,
          discNumber: 0,
          trackCount: 0,
          trackNumber: 0,
          trackTimeMillis: 0,
          country: "",
          currency: "",
          primaryGenreName: "",
          contentAdvisoryRating: "",
          isStreamable: true
        }
      ],
      transparent: "rgba(255, 255, 255, 0)",
      updated: 0,
      artworkUrl300: ""
    };
  },
  components: {
    Track: Track,
    AlbumHeader: AlbumHeader,
    AlbumMenu: AlbumMenu
  },
  //For the album component in AlbumList
  async created() {
    if (
      this.album.collectionId !== 0 &&
      this.album.collectionId !== undefined &&
      !this.updated
    ) {
      this.tracks = await this.getTracksInfo();
      this.artworkUrl300 = this.getArtworkUrl300();
      this.updated = 1;
    }
  },
  //For the album view
  async updated() {
    if (
      this.album.collectionId !== 0 &&
      this.album.collectionId !== undefined &&
      !this.updated
    ) {
      this.tracks = await this.getTracksInfo();
      this.artworkUrl300 = this.getArtworkUrl300();
      this.updated = 1;
    }
  },
  methods: {
    getArtworkUrl300: function() {
      return getHighResArtwork(this.album.artworkUrl60, [300, 300]);
    },
    getAlbumYear: function() {
      const date = new Date(this.album.releaseDate);
      return date.getFullYear();
    },
    getTracksInfo: async function() {
      const albumId = this.album.collectionId;
      const tracks = await getTracks(albumId);
      return tracks.results;
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
