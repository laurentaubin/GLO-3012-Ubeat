<template>
  <v-row>
    <v-col>
      <album
        v-bind:albumInfo="album"
        v-bind:key="album.collectionId"
        v-for="album in shownAlbums"
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

export default {
  name: "AlbumList",
  props: ["albums"],
  data: function() {
    return {
      shownAlbums: this.albums.slice(0, 5),
      albumsToShow: 5
    };
  },
  components: {
    album: Album
  },
  methods: {
    showMoreAlbums: function() {
      this.albumsToShow += 5;
      this.shownAlbums = this.albums.slice(0, this.albumsToShow);
    }
  }
};
</script>

<style scoped>
.album-list {
  text-align: center;
}
button {
  margin-top: 16px;
}
</style>
