<template>
  <v-card class="playlist-card" color="rgb(88,86,214)">
    <v-card-text class="text-center fon">
      <a
        v-bind:href="'/#/playlist/' + playlist.id"
        class="link white--text font-weight-bold"
      >
        {{ playlist.name }}
      </a>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "PlaylistCard",
  props: ["playlist"]
};
</script>

<style scoped>
.playlist-card {
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
}
</style>
