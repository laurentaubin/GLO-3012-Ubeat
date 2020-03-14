<template>
  <v-container>
    <v-container class="d-block d-md-flex">
      <div class="d-flex justify-center justify-md-start">
        <img v-bind:src="artworkUrl300" class="album-image" />
      </div>
      <div class="d-block align-self-center header-informations ml-0 ml-md-8">
        <p
          class="body-2 font-weight-thin mb-0 pl-1 mt-sm-2 text-center text-md-start"
        >
          Album
        </p>
        <a
          class="link white--text text-center text-md-start"
          v-bind:href="'/#/album/' + album.collectionId"
        >
          <p
            class="font-weight-bold"
            v-bind:class="[
              $vuetify.breakpoint.smAndUp ? 'display-1' : 'headline'
            ]"
          >
            {{ album.collectionName }}
          </p>
        </a>
        <p class="body-2 grey--text darken-1 mb-1 text-center text-md-start">
          By
          <a
            v-bind:href="'/#/artist/' + album.artistId"
            class="link white--text"
          >
            {{ album.artistName }}
          </a>
        </p>
        <p class="body-2 mb-1 grey--text darken-1 text-center text-md-start">
          {{ albumYear }} • {{ album.trackCount }} songs
        </p>
        <p class="body-2 mb-1 grey--text darken-1 text-center text-md-start">
          {{ album.primaryGenreName }}
        </p>
      </div>
    </v-container>
    <div class="d-flex">
      <v-container class="d-flex">
        <v-btn class="buy-btn ml-3" v-on:click="buyAlbumRedirect">
          <p class="mt-auto mb-auto">$ {{ album.collectionPrice }} Buy</p>
        </v-btn>
        <v-btn text icon>
          <a
            v-bind:href="album.collectionViewUrl"
            class="d-inline-block itunes-btn ml-2"
          />
        </v-btn>
      </v-container>
      <v-container class="d-flex justify-end">
        <track-menu
          :hover="true"
          :artistId="album.artistId"
          :collectionId="album.collectionId"
          :tracks="tracks"
          class="track-menu"
        />
      </v-container>
    </div>
  </v-container>
</template>

<script>
import TrackMenu from "../track/TrackMenu";

export default {
  name: "AlbumHeader",
  props: ["album", "artworkUrl300", "albumYear"],
  methods: {
    buyAlbumRedirect() {
      let win = window.open(this.album.collectionViewUrl, "_blank");
      win.focus();
    }
  },
  components: {
    trackMenu: TrackMenu
  }
};
</script>

<style scoped>
.album-image {
  max-height: 200px;
  max-width: 200px;
  position: center;
  vertical-align: middle;
}
.header-informations {
  margin-left: 10px;
}

.track-menu {
  margin-left: 10px;
}
</style>
