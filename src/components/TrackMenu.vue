<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <a class="white--text" v-on="on">
          <p v-if="hover" class="py-0 my-0">
            •••
          </p>
        </a>
      </template>

      <v-list width="175">
        <v-list-item v-on:click="goToArtist()">
          <v-list-item-title>Go to artist</v-list-item-title>
        </v-list-item>
        <v-list-item v-on:click="goToAlbum()">
          <v-list-item-title>Go to album</v-list-item-title>
        </v-list-item>
        <v-list-item v-on:click="showDrawer()">
          <v-list-item-title>Add to playlist </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import router from "../router/index.js";
import { addTrackToPlaylist } from "../api/api.js";

export default {
  name: "TrackMenu",
  props: ["hover", "artistId", "collectionId"],
  methods: {
    showDrawer() {
      this.$root.$children[0].showPlaylistDrawer();
    },
    goToArtist() {
      router.push(`/artist/${this.artistId}`);
    },
    goToAlbum() {
      router.push(`/album/${this.collectionId}`);
    },
    addToPlaylist(track, playlistId) {
      addTrackToPlaylist(track, playlistId);
    }
  }
};
</script>

<style></style>
