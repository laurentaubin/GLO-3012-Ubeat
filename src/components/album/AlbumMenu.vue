<template>
  <v-list>
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      @click="addAlbumToPlaylist"
    >
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "AlbumMenu",
  props: ["tracks"],
  data: () => ({
    items: [{ title: "Add to playlist" }]
  }),
  methods: {
    addAlbumToPlaylist() {
      this.$root.$children[0].showPlaylistDrawer(this.tracks);
    }
  }
};
</script>

<style scoped></style>
