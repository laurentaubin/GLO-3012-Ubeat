<template>
  <Album v-bind:album="this.album"/>
</template>

<script>
import Album from "../components/Album";
const API_URL = "http://ubeat.herokuapp.com/unsecure";

export default {
  name: "Album.vue",
  components: {
    Album: Album
  },
  data() {
    return {
      album: this.getAlbumInfo()
    };
  },
  async created() {
    this.album = await this.getAlbumInfo();
  },
  methods: {
    getAlbum: async function() {
      const path = `${API_URL}/albums/${this.$route.params.id}`;
      try {
        const response = await fetch(path);
        const data = await response.json();
        return data;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    getAlbumInfo: async function() {
      let album = await this.getAlbum();
      console.log(album.results[0])
      return album.results[0];
    }
  }
};
</script>

<style scoped>

</style>
