<template>
  <Album v-bind:album="album"/>
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
      album: {
        "wrapperType": "",
        "collectionType": "",
        "artistId": 0,
        "collectionId": 0,
        "amgArtistId": 0,
        "artistName": "",
        "collectionName": "",
        "collectionCensoredName": "",
        "artistViewUrl": "",
        "collectionViewUrl": "",
        "artworkUrl60": "",
        "artworkUrl100": "",
        "collectionPrice": 0,
        "collectionExplicitness": "",
        "contentAdvisoryRating": "",
        "trackCount": 0,
        "copyright": "",
        "country": "",
        "currency": "",
        "releaseDate": "",
        "primaryGenreName": ""
      }
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
      return album.results[0];
    }
  }
};
</script>

<style scoped>

</style>
