<template>
  <v-row>
    <v-col>
      <album
        v-bind:album="album"
        v-bind:key="album.collectionId"
        v-for="album in shownAlbums"
        v-on:select-track="emitTrackIdUp"
        v-on:play-track="emitTrackUp"
      >
      </album>
      <v-btn
        class="see-more-btn"
        rounder
        x-large
        v-if="albumsToShow < albums.length"
        @click="showMoreAlbums()"
      >
        See more
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import Album from "./Album.vue";
import { emitTrackIdUp, emitTrackUp } from "../../utils/emitUtils";

export default {
  name: "AlbumList",
  props: ["albums"],
  data: function() {
    return {
      shownAlbums: [
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
      albumsToShow: 5,
      updated: 0
    };
  },
  components: {
    album: Album
  },
  async updated() {
    if (this.albums[0].artistId !== 0 && !this.updated) {
      this.shownAlbums = this.albums.slice(0, 5);
      this.updated = 1;
    }
  },
  methods: {
    showMoreAlbums: function() {
      this.albumsToShow += 5;
      this.shownAlbums = this.albums.slice(0, this.albumsToShow);
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

<style scoped>
button {
  margin-top: 16px;
}
</style>
