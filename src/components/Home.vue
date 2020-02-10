<template>
  <v-container>
    <v-container>
      <h1 class="font-weight-bold display-2 mb-3 pb-10">Home</h1>
    </v-container>

    <v-container>
      <v-row no-gutters>
        <h1 class="title font-weight-bold">Recently played</h1>
      </v-row>
      <v-divider class="pb-3"/>
      <v-row no-gutters>
        <v-col class="mx-3 my-1">
          <v-img
            contain
            src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
            height="200px"
            width="200px"
          />
        </v-col>
        <v-col class="mx-3 my-1">
          <v-img
            contain
            src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
            height="200px"
            width="200px"
          />
        </v-col>
        <v-col class="mx-3 my-1">
          <v-img
            contain
            src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
            height="200px"
            width="200px"
          />
        </v-col>
        <v-col class="mx-3 my-1">
          <v-img
            contain
            src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
            height="200px"
            width="200px"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row no-gutters>
        <h1 class="title font-weight-bold">Artists</h1>
      </v-row>
      <v-divider class="pb-3"/>
      <v-row no-gutters class="d-flex">
        <v-col class="mx-3 my-1">
          <v-img
            contain
            src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
            height="200px"
            width="200px"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row no-gutters>
        <h1 class="title font-weight-bold">Albums</h1>
      </v-row>
      <v-divider class="pb-3"/>
      <v-row no-gutters class="d-flex">
        <v-col class="mx-3 my-1">
          <v-img
            contain
            src="https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/52/0a/df/520adf4c-36e7-5d7d-114d-c5682df53b98/886447918104.jpg/939x0w.jpg"
            height="200px"
            width="200px"
          />
        </v-col>
        <v-col class="mx-3 my-1">
          <v-img
            contain
            src="https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/52/0a/df/520adf4c-36e7-5d7d-114d-c5682df53b98/886447918104.jpg/939x0w.jpg"
            height="200px"
            width="200px"
          />
        </v-col>
        <v-col class="mx-3 my-1">
          <v-img
            contain
            src="https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/52/0a/df/520adf4c-36e7-5d7d-114d-c5682df53b98/886447918104.jpg/939x0w.jpg"
            height="200px"
            width="200px"
          />
        </v-col>
        <v-col class="mx-3 my-1">
          <v-img
            contain
            src="https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/52/0a/df/520adf4c-36e7-5d7d-114d-c5682df53b98/886447918104.jpg/939x0w.jpg"
            height="200px"
            width="200px"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
// import HouseMusicCard from "./HomeMusicCard";
export default {
  name: "Home",
  components: ["HomeMusicCardList"] // voir comment on veut envoyer les données à la liste des cards
  // playAudio: function() {
  //   // if (this.audio !== null && !this.audio.paused) {
  //   //   this.togglePlayButton(this.currentTrack);
  //   //   this.audio.pause();
  //   // }
  //   // let currentTrack = document.getElementById(track.trackId);
  //   let audio = new Audio(
  //     "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/b0/4a/3c/b04a3c05-d38d-9183-ef34-04c9b7fa8c84/mzaf_12378437392253983796.plus.aac.p.m4a"
  //   );
  //   audio.play();
  // }
};
</script>

<style>
.ArtistsSeparator {
  position: relative;
  top: 130px;
  width: 80%;
  align-content: center;
  left: 1%;
  opacity: 80%;
}

.Artists {
  position: relative;
  top: 140px;
  left: 2%;
}

.Artists p {
  font-size: 25px;
  opacity: 80%;
}

.all-in {
  height: 1000px;
}

.imageShakira {
  width: 100%;
  height: auto;
}

.boutonshakira {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: black;
  color: white;
  font-size: 10px;
  padding: 12px 14px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  opacity: 50%;
}

.boutonshakira:hover {
  opacity: 100%;
}

.scrollmenu {
  /* background-color: #333; */
  position: relative;
  top: 100px;
  overflow: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  max-width: 1650px;
  max-height: 400px;
}

.scrollmenu span {
  position: relative;
  left: -50px;
  display: inline-block;
  color: white;
  text-align: center;
  margin: 60px;
  padding: 2px;
  text-decoration: none;
}

/* marche pas?? overlay sur la photo de l'artiste */
.scrollmenu img:hover > .overlay {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #000;
  opacity: 0.5;
  /* border-radius: 30px; */
}

.scrollmenu2 {
  /* background-color: #333; */
  position: relative;
  top: 100px;
  overflow: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  max-width: 1650px;
  max-height: 400px;
}

.scrollmenu2 span {
  position: relative;
  left: -50px;
  display: inline-block;
  color: white;
  text-align: center;
  margin: 60px;
  padding: 2px;
  text-decoration: none;
}

.scrollmenu2 img:hover {
  background-color: #ffffff;
}

.scrollmenu3 {
  /* background-color: #333; */
  overflow: scroll;
  white-space: nowrap;
  max-width: 1650px;
}

.scrollmenu3 img {
  position: relative;
  top: 200px;
  left: -50px;
  display: inline-block;
  color: white;
  text-align: center;
  margin: 60px;
  padding: 2px;
  text-decoration: none;
}

.scrollmenu3 img:hover {
  background-color: #ffffff;
}

.premierDiv {
  position: absolute;
  top: 60px;
}

.premierDiv p {
  font-family: "Courier New", Courier, monospace;
  padding-left: 20%;
}

.recentlyPlayed {
  position: relative;
  top: 140px;
  left: 2%;
  opacity: 80%;
}

.recentlyPlayed p {
  /* font-family: "Courier New", Courier, monospace; */
  font-size: 25px;
  opacity: 80%;
}

.deuxiemeDiv {
  position: absolute;
  top: 180px;
  left: 3.2%;
}

.deuxiemeDiv v-card-title {
  color: orange;
}

.listeBandit {
  position: relative;
  top: -200px;
  overflow-y: auto;
  overflow-x: auto;
  min-height: 300px;
  min-width: 1000;
}

.homeSeparator {
  position: relative;
  top: 130px;
  width: 80%;
  align-content: center;
  left: 1%;
  opacity: 80%;
}
</style>
