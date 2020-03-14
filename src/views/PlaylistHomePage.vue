<template>
  <v-container id="mainContainer">
    <v-container>
      <h1 class="font-weight-bold display-2 mb-3">Playlist</h1>
    </v-container>
    <v-divider />
    <v-container>
      <v-text-field solo-inverted flat hide-details dense label="Filter">
        <v-icon slot="prepend-inner" color="#fff" class="hidden-xs-only">
          mdi-magnify
        </v-icon>
      </v-text-field>
      <v-container>
        <p class="body-1 font-weight-bold mb-0 mt-5"> Your playlists</p>
      </v-container>
      <v-divider />
    </v-container>
      <playlist-home-page-content />
  </v-container>
</template>

<script>
import PlaylistHomePageContent from "../components/playlist/PlaylistHomePageContent";

export default {
  name: "PlaylistHomePage",
  components: {
    playlistHomePageContent: PlaylistHomePageContent
  }
};
</script>

<style scoped>
#mainContainer {
  align-self: baseline;
  padding: 0;
}

  .playlist-container {

    padding: 0;
  }
</style>
