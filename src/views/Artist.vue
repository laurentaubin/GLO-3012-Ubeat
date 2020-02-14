<template>
  <v-container>
    <!-- Artist header -->
    <v-container>
      <v-row
        :class="{
          'pl-0': $vuetify.breakpoint.xs,
          'pl-12': $vuetify.breakpoint.smAndUp
        }"
      >
        <v-col
          cols="12"
          xs="12"
          sm="4"
          md="4"
          lg="3"
          class="d-flex align-center"
        >
          <!--- TODO replace hardcoded image with some sort of api call -->
          <v-img
            contain
            src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
            height="300px"
            width="300px"
          />
        </v-col>
        <v-col xm="12" sm="8" md="6" class="d-flex align-center">
          <v-row class="align-center">
            <v-col class="pt-md-12 text-center text-sm-start">
              <p class="font-weight-regular subtitle-1 ml-md-1">
                {{ this.artist.primaryGenreName }}
              </p>
              <h1 class="font-weight-bold display-4">
                {{ this.artist.artistName }}
              </h1>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <!-- Artist albums -->
    <v-container
      :class="{
        'pl-0': $vuetify.breakpoint.xs,
        'px-12': $vuetify.breakpoint.smAndUp
      }"
    >
      <v-divider />
      <h1 class="title font-weight-bold">Albums</h1>
      <albumList v-bind:albums="albums" class="px-0" />
    </v-container>
  </v-container>
</template>

<script>
import AlbumList from "../components/AlbumList.vue";

const API_URL = "http://ubeat.herokuapp.com/unsecure";

export default {
  name: "Artist",
  components: {
    albumList: AlbumList
  },
  data: function() {
    return {
      artist: [],
      albums: []
    };
  },
  created: async function () {
    this.artist = await this.getArtistInfo();
    this.albums = await this.getAlbumsInfo();
  },
  methods: {
    getArtist: async function() {
      const path = `${API_URL}/artists/${this.$route.params.id}`;
      try {
        const response = await fetch(path);
        const data = await response.json();
        return data;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    getArtistInfo: async function() {
      const artist = await this.getArtist();
      this.artist = artist.results[0];
      return this.artist;
    },
    getAlbums: async function() {
      const path = `${API_URL}/artists/${this.$route.params.id}/albums`;
      try {
        const response = await fetch(path);
        const data = await response.json();
        return data;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    getAlbumsInfo: async function() {
      const albums = await this.getAlbums();
      return albums.results;
    }
  }
};
</script>

<style />
