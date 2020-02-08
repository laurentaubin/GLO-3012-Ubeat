<template>
  <div>
    <div class="premierDiv">
      <p class="display-3" font-family="proxima-nova">Home</p>
    </div>
    <div class="scrollmenu">
      <img
        style="max-width: 300px"
        src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
      />
      <img
        style="max-width: 300px"
        src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
      />
      <img
        style="max-width: 300px"
        src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
      />
      <img
        style="max-width: 300px"
        src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
      />
      <img
        style="max-width: 300px"
        src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
      />
      <img
        style="max-width: 300px"
        src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
      />
      <img
        style="max-width: 300px"
        src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
      />
      <img
        style="max-width: 300px"
        src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
      />
    </div>
    <div class="scrollmenu2">
      <img
        style="max-width: 300px"
        src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
      />
      <img
        style="max-width: 300px"
        src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
      />
      <img
        style="max-width: 300px"
        src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
      />
      <img
        style="max-width: 300px"
        src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
      />
      <img
        style="max-width: 300px"
        src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
      />
    </div>
    <div class="scrollmenu3">
      <img
        style="max-width: 300px"
        src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
      />
      <img
        style="max-width: 300px"
        src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
      />
      <img
        style="max-width: 300px"
        src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
      />
      <img
        style="max-width: 300px"
        src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
      />
      <img
        style="max-width: 300px"
        src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
      />
    </div>
  </div>
</template>

<script>
import HouseMusicCard from "./HomeMusicCard";
export default {
  name: "Home",
  components: ["HomeMusicCardList"] // voir comment on veut envoyer les données à la liste des cards
};
</script>


<style>
.scrollmenu {
  /* background-color: #333; */
  overflow: scroll;
  white-space: nowrap;
  max-width: 1650px;
}
.scrollmenu img {
  position: relative;
  top: 70px;
  left: -50px;
  display: inline-block;
  color: white;
  text-align: center;
  margin: 60px;
  padding: 2px;
  text-decoration: none;
}
.scrollmenu img:hover {
  background-color: #ffffff;
}

.scrollmenu2 {
  /* background-color: #333; */
  overflow: scroll;
  white-space: nowrap;
  max-width: 1650px;
}

.scrollmenu2 img {
  position: relative;
  top: 2px;
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
  top: -px;
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
  top: 40px;
}
.premierDiv p {
  font-family: "Courier New", Courier, monospace;
  padding-left: 20%;
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
</style>
