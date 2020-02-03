<template>
  <div id="app">
    <nav-menu></nav-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import VuetifyTest from "./components/VuetifyTest";
export default {
  name: "app",
  components: {
    "nav-menu": VuetifyTest
  }
};
</script>

<style></style>
