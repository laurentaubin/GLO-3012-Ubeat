<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app clipped>
        <nav-menu />
      </v-navigation-drawer>

      <v-app-bar app clipped-left elevate-on-scroll>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-row no-gutters>
          <v-col
            offset-md="0"
            class="d-flex justify-center justify-sm-start justify-md-start justify-lg-start flex-grow-0"
          >
            <v-toolbar-title class="title ml-3 mr-5">Ubeat</v-toolbar-title>
          </v-col>
          <v-spacer class="hidden-xs-only" />
          <v-col sm="5" md="3" class="justify-end">
            <v-text-field
              solo-inverted
              flat
              hide-details
              dense
              rounded
              label="Search"
            >
              <v-icon slot="prepend-inner" color="#fff" class="hidden-xs-only">
                mdi-magnify
              </v-icon>
            </v-text-field>
          </v-col>
        </v-row>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn depressed class="mx-2" fab v-on="on">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <avatar-menu />
        </v-menu>
      </v-app-bar>

      <v-content class="align-content-center">
        <v-container class="fill-height" fluid>
          <router-view
            v-on:select-track="trackClicked"
            v-on:play-track="playTrack"
          />
        </v-container>
      </v-content>

      <playlist-drawer right showDrawer="playlistDrawer" />
    </v-app>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import AvatarMenu from "./components/AvatarMenu";
import PlaylistDrawer from "./components/PlaylistDrawer";

export default {
  name: "app",
  components: {
    "nav-menu": Navigation,
    "avatar-menu": AvatarMenu,
    "playlist-drawer": PlaylistDrawer
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    playlistDrawer: null,
    selectedTrack: null,
    audio: null,
    currentTrack: null,
    currentSelectedTrack: null
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
  methods: {
    trackClicked(trackId) {
      const lastSelectedTrack = document.getElementById(this.selectedTrack);
      if (lastSelectedTrack != null) {
        this.removeSelectedTrackBackground(lastSelectedTrack);
        this.selectedTrack = null;
      }
      const currentSelectedTrack = document.getElementById(trackId);
      if (currentSelectedTrack != lastSelectedTrack) {
        this.addSelectedTrackBackground(currentSelectedTrack);
        this.selectedTrack = trackId;
      }
    },
    removeSelectedTrackBackground(trackElement) {
      trackElement.classList.remove("selected-track");
    },
    addSelectedTrackBackground(trackElement) {
      trackElement.classList.add("selected-track");
    },
    playTrack(track) {
      if (this.audio !== null && !this.audio.paused) {
        this.togglePlayButton(this.currentTrack);
        this.audio.pause();
      }
      let currentTrack = document.getElementById(track.trackId);
      if (currentTrack !== this.currentTrack) {
        this.currentTrack = currentTrack;
        this.togglePlayButton(currentTrack);
        let audio = new Audio(track.previewUrl);
        audio.play();
        audio.onended = () => {
          this.togglePlayButton(currentTrack);
          this.currentTrack = null;
        };
        this.audio = audio;
      } else {
        this.currentTrack = null;
      }
    },
    togglePlayButton(track) {
      let children = track.childNodes[0].childNodes;
      let trackNumber = children[0];
      let playButton = children[1];
      if (trackNumber.classList.contains("track-nb-hidden")) {
        playButton.classList.remove("play-btn-active");
        trackNumber.classList.remove("track-nb-hidden");
        playButton.childNodes[0].innerHTML =
          "<i aria-hidden='true' class='v-icon notranslate mdi mdi-play theme--dark'>";
      } else {
        trackNumber.classList.add("track-nb-hidden");
        playButton.classList.add("play-btn-active");
        playButton.childNodes[0].innerHTML =
          "<i aria-hidden='true' class='v-icon notranslate mdi mdi-pause'>";
      }
    },
    showPlaylistDrawer() {
      this.playlistDrawer = true;
    }
  }
};
</script>

<style>
* {
  user-select: none;
}
</style>
