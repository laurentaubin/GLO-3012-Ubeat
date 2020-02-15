<template>
  <v-row v-bind:id="track.trackId"
         :class="{
          'track mx-0 px-0': $vuetify.breakpoint.xs,
          track: $vuetify.breakpoint.smAndUp
        }"
        v-on:click="$emit('select-track', track.trackId)">
    <v-col cols="1" class="d-flex align-center justify-center">
      <span class="track-nb">{{ track.trackNumber }}</span>
      <v-btn class="play-btn" icon v-on:click="$emit('play-track', track)">
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
    };
  },
  methods: {
    millisToMinutesAndSeconds(millis) {
      const minutes = Math.floor((millis / 1000 / 60) << 0);
      let seconds = Math.floor((millis / 1000) % 60);

      // To avoid times like 4:0 and 3:2
      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      return minutes + ":" + seconds;
    }
  }
};
</script>

<style scoped>

</style>
