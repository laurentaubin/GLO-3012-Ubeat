<template>
  <v-row v-bind:id="track.trackId"
         v-bind:key="track.trackId"
         :class="{
          'track mx-0 px-0': $vuetify.breakpoint.xs,
          track: $vuetify.breakpoint.smAndUp
        }"
         @click="trackClicked(track.trackId)">
    <v-col cols="1" class="d-flex align-center justify-center">
      <span class="track-nb">{{ track.trackNumber }}</span>
      <v-btn class="play-btn" icon v-on:click="playAudio(track)">
        <v-icon>mdi-play</v-icon>
      </v-btn>
    </v-col>
    <v-col cols="10" class="d-flex align-center">
      <span>{{ track.trackName }}</span>
    </v-col>
    <v-col cols="1" class="d-flex align-center">{{
      millisToMinutesAndSeconds(track.trackTimeMillis)
      }}</v-col>
  </v-row>
</template>

<script>
export default {
  name: "Track",
  props: ["track"],
  data: function() {
    return {
      audio: null,
      currentTrack: null,
      currentSelectedTrack: null
    };
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
    playAudio(track) {
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
    millisToMinutesAndSeconds(millis) {
      const minutes = Math.floor((millis / 1000 / 60) << 0);
      let seconds = Math.floor((millis / 1000) % 60);

      // To avoid times like 4:0 and 3:2
      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      return minutes + ":" + seconds;
    },
    removeSelectedTrackBackground(trackElement) {
      trackElement.classList.remove("selected-track");
    },
    addSelectedTrackBackground(trackElement) {
      trackElement.classList.add("selected-track");
    }
  }
};
</script>

<style scoped>
.track-nb {
  display: inline-block;
}

.play-btn {
  display: none !important;
  height: 30px;
  width: 30px;
}
.track:hover {
  background: #212121;
}
.track:hover .track-nb {
  display: none;
}

.track:hover .play-btn {
  display: inline-block !important;
}
.selected-track {
  background: #313131 !important;
}
.play-btn:focus {
  display: inline-block;
}

.play-btn-active {
  display: inline-block !important;
}
.track-nb-hidden {
  display: none !important;
}
</style>
