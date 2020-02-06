<template>
  <v-row>
    <v-col>
      <album
        v-bind:albumInfo="album"
        v-bind:key="album.collectionId"
        v-for="album in albums"
      >
      </album>
    </v-col>
  </v-row>
</template>

<script>
import Album from "./Album.vue";

export default {
  name: "AlbumList",
  props: ["albums"],
  components: {
    album: Album
  }
};
</script>
