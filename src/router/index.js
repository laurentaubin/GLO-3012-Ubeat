import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Album from "@/views/Album";
import Artist from "@/views/Artist";
import Playlist from "@/views/Playlist";
import User from "@/views/User";
import Settings from "@/views/Settings";
import AccountSettings from "@/views/AccountSettings";
import ArtistHomePage from "../views/ArtistHomePage";
import AlbumHomePage from "../views/AlbumHomePage";
import PlaylistHomePage from "../views/PlaylistHomePage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/artist/:id",
      name: "Artist",
      component: Artist
    },
    {
      path: "/album/:id",
      name: "Album",
      component: Album
    },
    {
      path: "/playlist/:id",
      name: "Playlist",
      component: Playlist
    },
    {
      path: "/user/:id",
      name: "User",
      component: User
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings
    },
    {
      path: "/accountsettings",
      name: "AccountSettings",
      component: AccountSettings
    },
    {
      path: "/artist",
      name: "ArtisteHomePage",
      component: ArtistHomePage
    },
    {
      path: "/album",
      name: "AlbumHomePage",
      component: AlbumHomePage
    },
    {
      path: "/playlist",
      name: "PlaylistHomePage",
      component: PlaylistHomePage
    }
  ]
});
