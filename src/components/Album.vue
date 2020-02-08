<template>
  <div class="full-width">
    <header class="album-header">
      <v-row>
        <v-col>
          <!-- TODO Replace hardcoded image with image in api response -->
          <v-img
            class="album-image"
            src="https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/100x100bb.jpg"
            height="300px"
            width="300px"
            clear="left"
          ></v-img>
        </v-col>
        <v-col class="album-info">
          <h1 class="album-name">{{ this.albumInfo.collectionName }}</h1>
          <!-- TODO Replace /#/artist ref by ref to actual artist ID -->
          <p>
            By <a href="/#/artist">{{ this.albumInfo.artistName }}</a>
          </p>
          <p class="album-year">
            {{ this.getAlbumYear() }} • {{ this.albumInfo.trackCount }} songs
          </p>
          <p class="album-genre">
            {{ this.albumInfo.primaryGenreName }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn class="buy-btn" v-on:click="buyAlbumRedirect">
            <p>$ {{ this.albumInfo.collectionPrice }} Buy </p>
          </v-btn>
        </v-col>
        <v-col>
          <v-img
            class="buy-btn"
            v-on:click="buyAlbumRedirect"
            src="https://linkmaker.itunes.apple.com/embed/v1/app-icon.svg"
            height="40px"
            width="40px"
            clear="left"
          ></v-img>

        </v-col>
      </v-row>
    </header>

    <div class="song-list">
      <header class="songs-header">
        <v-row>
          <v-col cols="1">
            <span>#</span>
          </v-col>
          <v-col cols="10">
            <span>Title</span>
          </v-col>
          <v-col cols="1" alignEnd>
            <span>Duration</span>
          </v-col>
        </v-row>
      </header>

      <!-- TODO Add effect and play button on hover -->
      <v-row v-bind:id="track.trackId" v-bind:key="track.trackId" v-for="track in tracks">
        <v-col cols="1" class="track">
          <span class="track-nb">{{ track.trackNumber }}</span>
          <v-btn class="play-btn" v-on:click="playAudio(track)">play</v-btn>
        </v-col>
        <v-col cols="10">
          {{ track.trackName }}
        </v-col>
        <v-col cols="1" alignEnd>
          {{ millisToMinutesAndSeconds(track.trackTimeMillis) }}
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import tracks from "../JSON/tracks.json";

export default {
  name: "Album",
  props: ["album"],
  data: function() {
    return {
      tracks: this.getTracksInfo(),
      albumInfo: this.getAlbumInfo(),
      transparent: "rgba(255, 255, 255, 0)",
      audio: null,
      currentTrack: null
    };
  },
  methods: {
    getAlbumInfo: function(albumId) {
      const album = this.getAlbum(albumId);
      return album.results[0];
    },
    getAlbum: function(albumId) {
      // To avoid eslint error
      if (albumId == 0) {
        return 0;
      }
      // Will eventually be api call
      return {
        resultCount: 1,
        results: [
          {
            wrapperType: "collection",
            collectionType: "Album",
            artistId: 334854763,
            collectionId: 1484385866,
            amgArtistId: 2035613,
            artistName: "Kesha",
            collectionName: "High Road",
            collectionCensoredName: "High Road",
            artistViewUrl:
              "https://music.apple.com/us/artist/kesha/334854763?uo=4",
            collectionViewUrl:
              "https://music.apple.com/us/album/high-road/1484385866?uo=4",
            artworkUrl60:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/60x60bb.jpg",
            artworkUrl100:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/100x100bb.jpg",
            collectionPrice: 10.99,
            collectionExplicitness: "explicit",
            contentAdvisoryRating: "Explicit",
            trackCount: 15,
            copyright: "℗ 2019 Kemosabe Records",
            country: "USA",
            currency: "USD",
            releaseDate: "2020-01-10T08:00:00Z",
            primaryGenreName: "Pop"
          }
        ]
      };
    },
    getAlbumYear: function() {
      const date = new Date(this.albumInfo.releaseDate);
      return date.getFullYear();
    },
    getTracksInfo: function() {
      // const albumId = this.albumInfo.collectionId;
      const albumId = 1;
      const tracks = this.getTracks(albumId);
      return tracks.results;
    },
    getTracks: function(albumId) {
      // To avoid eslint error
      if (albumId == 0) {
        return 0;
      }

      // Will evetually be api call
      return tracks;
    },
    millisToMinutesAndSeconds(millis) {
      const minutes = Math.floor((millis / 1000 / 60) << 0);
      const seconds = Math.floor((millis / 1000) % 60);
      let timeInMinutesAndSeconds = minutes + ":" + seconds;

      // To avoid times like 4:0
      if (seconds === 0) {
        timeInMinutesAndSeconds += "0";
      }

      return timeInMinutesAndSeconds;
    },
    buyAlbumRedirect() {
      let win = window.open(this.albumInfo.collectionViewUrl, "_blank");
      win.focus();
    },
    playAudio(track) {
      if (this.audio !== null && !this.audio.paused) {
        this.togglePlayButton(this.currentTrack);
        this.audio.pause();
      }
      let currentTrack = document.getElementById(track.trackId);
      if (currentTrack !== this.currentTrack) {
        this.currentTrack = currentTrack;
        this.togglePlayButton(currentTrack)
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
        playButton.innerText = "play";
      } else {
        trackNumber.classList.add("track-nb-hidden");
        playButton.classList.add("play-btn-active");
        playButton.innerText = "playing";
      }
    }
  }
};
</script>

<style>
.full-width {
  width: 100%;
}
.album-header {
  margin-bottom: 12px;
  margin-top: 32px;
}
.album-header p {
  color: darkgrey;
  margin-bottom: 0 !important;
}
.album-header a {
  color: white !important;
  text-decoration: none;
}
.album-header a:hover {
  text-decoration: underline;
}
.album-info {
  text-align: left;
}
.album-name {
  display: inline-block;
}
.show-btn {
  color: rgba(255, 255, 255, 1) !important;
}
.buy-btn {
  display: inline-block;
}
.album-genre {
  display: block;
}
.track-nb {
  display: inline-block;
}
.play-btn {
  display: none !important;
  height: 30px;
  width: 30px;
}
.track:hover .track-nb {
  display: none;
}
.track:hover .play-btn {
  display: inline-block !important;
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
