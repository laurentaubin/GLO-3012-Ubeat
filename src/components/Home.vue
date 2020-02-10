<template>
  <v-container>
    <v-container>
      <h1 class="font-weight-bold display-2 mb-3 pb-10">Home</h1>
    </v-container>

    <v-container>
      <v-row no-gutters>
        <h1 class="title font-weight-bold">Recently played</h1>
      </v-row>
      <v-divider class="pb-3" />
      <v-row no-gutter class="d-flex">
        <v-card class="mr-3 mb-3">
          <v-row>
            <v-col class="d-flex mx-3 my-sm-1">
              <v-img
                contain
                src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
                height="200px"
                width="200px"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-center">
              <a href="/#/artist" class="link white--text">
                Kesha
              </a>
            </v-col>
          </v-row>
        </v-card>
        <v-card class="mr-3 mb-3">
          <v-row>
            <v-col class="d-flex justify-start mx-3 my-sm-1">
              <v-img
                contain
                src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
                height="200px"
                width="200px"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-center">
              <a href="/#/artist" class="link white--text">
                Kesha
              </a>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
    <v-container>
      <v-row no-gutters>
        <h1 class="title font-weight-bold">Artists</h1>
      </v-row>
      <v-divider class="pb-3"/>
      <v-row no-gutters class="d-flex align-center">
        <v-card class="mr-3 mb-3">
          <v-row>
            <v-col class="d-flex justify-start mx-3 my-sm-1">
              <v-img
                contain
                src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
                height="200px"
                width="200px"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-center">
              <a href="/#/artist" class="link white--text">
                Kesha
              </a>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
    <v-container>
      <v-row no-gutters>
        <h1 class="title font-weight-bold">Albums</h1>
      </v-row>
      <v-divider class="pb-3"/>
      <v-row no-gutters class="d-flex align-center">
        <v-card class="mr-3 mb-3">
          <v-row>
            <v-col class="d-flex justify-start mx-3 my-sm-1">
              <v-img
                contain
                src="https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/52/0a/df/520adf4c-36e7-5d7d-114d-c5682df53b98/886447918104.jpg/939x0w.jpg"
                height="200px"
                width="200px"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-center">
              <a href="/#/album" class="link white--text">
                High road
              </a>
            </v-col>
          </v-row>
        </v-card>
        <v-card class="mr-3 mb-3">
          <v-row>
            <v-col class="d-flex justify-start mx-3 my-sm-1">
              <v-img
                contain
                src="https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/52/0a/df/520adf4c-36e7-5d7d-114d-c5682df53b98/886447918104.jpg/939x0w.jpg"
                height="200px"
                width="200px"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-center">
              <a href="/#/album" class="link white--text">
                High road
              </a>
            </v-col>
          </v-row>
        </v-card>
        <v-card class="mr-3 mb-3">
          <v-row>
            <v-col class="d-flex justify-start mx-3 my-sm-1">
              <v-img
                contain
                src="https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/52/0a/df/520adf4c-36e7-5d7d-114d-c5682df53b98/886447918104.jpg/939x0w.jpg"
                height="200px"
                width="200px"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-center">
              <a href="/#/album" class="link white--text">
                High road
              </a>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: ["HomeMusicCardList"]
};
</script>

<style />
