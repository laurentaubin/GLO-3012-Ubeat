<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app clipped>
        <nav-menu v-on:playlists-ready="updatePlaylists" />
      </v-navigation-drawer>

      <v-navigation-drawer v-model="playlistDrawer" :right="true" app disable-resize-watcher>
        <playlist-drawer v-bind:playlists="playlists" v-bind:tracks="trackMenuTracks" v-on:close-playlist-drawer="closePlaylistDrawer"/>
      </v-navigation-drawer>

      <Header v-on:close-navigation-drawer="closeNavigationDrawer"/>

      <v-content class="align-content-center">
        <v-container class="fill-height" fluid>
          <router-view
            v-on:select-track="trackClicked"
            v-on:play-track="playTrack"
            :key="$route.fullPath"
          />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import PlaylistDrawer from "./components/playlist/PlaylistDrawer";
import Header from "./components/Header";

export default {
  name: "app",
  components: {
    "nav-menu": Navigation,
    "playlist-drawer": PlaylistDrawer,
    "Header" : Header
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    playlistDrawer: false,
    selectedTrack: null,
    audio: null,
    currentTrack: null,
    currentSelectedTrack: null,
    playlists: [],
    trackMenuTracks: []
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
    showPlaylistDrawer(track) {
      this.playlistDrawer = !this.playlistDrawer;
      if (Array.isArray(track)) {
        this.trackMenuTracks = track;
      } else {
        this.trackMenuTracks = [track];
      }
    },
    updatePlaylists(playlists) {
      this.playlists = playlists;
    },
    closePlaylistDrawer() {
      this.playlistDrawer = !this.playlistDrawer;
    },
    closeNavigationDrawer() {
      this.drawer = !this.drawer;
    }
  }
};
</script>

<style>
* {
  user-select: none;
}
</style>
