<template>
  <v-container>
    <playlist
      v-bind:playlist="playlist"
      v-on:select-track="emitTrackIdUp"
      v-on:play-track="emitTrackUp"
    />
  </v-container>
</template>

<script>
import Playlist from "../components/playlist/Playlist";
import { getPlaylist } from "../api/api.js";
import { emitTrackIdUp, emitTrackUp } from "../utils/emitUtils";

export default {
  name: "Playlist",

  components: {
    playlist: Playlist
  },
  data: function() {
    return {
      playlist: {
        owner: {
          email: "",
          name: "",
          id: 0
        },
        name: "",
        tracks: [],
        id: 0
      }
    };
  },
  created: async function() {
    this.playlist = await this.getPlaylist();
  },
  methods: {
    getPlaylist: async function() {
      return await getPlaylist(this.$route.params.id);
    },
    emitTrackUp: function(track) {
      emitTrackUp(this, track);
    },
    emitTrackIdUp: function(trackId) {
      emitTrackIdUp(this, trackId);
    }
  }
};
</script>

<style scoped></style>
