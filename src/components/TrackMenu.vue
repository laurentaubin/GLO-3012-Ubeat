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

export default {
  name: "TrackMenu",
  props: ["hover", "artistId", "collectionId", "track", "tracks"],
  methods: {
    showDrawer() {
      if (this.tracks === undefined) {
        this.$root.$children[0].showPlaylistDrawer(this.track);
      } else {
        this.$root.$children[0].showPlaylistDrawer(this.tracks);
      }
    },
    goToArtist() {
      router.push(`/artist/${this.artistId}`);
    },
    goToAlbum() {
      router.push(`/album/${this.collectionId}`);
    }
  }
};
</script>

<style></style>
