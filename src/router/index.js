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
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import UserHomePage from "../views/UserHomePage";
import AlbumResultPage from "../views/AlbumResultPage.vue";
import ArtistResultPage from "../views/ArtistResultPage.vue";
import GlobalResultPage from "../views/GlobalResultPage.vue";
import UserSearchResult from "../views/UserSearchResult";

Vue.use(Router);

export default new Router({
  mode: "history",
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
    },
    {
      path: "/signup",
      name: "SignUpPage",
      component: SignUp
    },
    {
      path: "/login",
      name: "LoginPage",
      component: Login
    },
    {
      path: "/user",
      name: "UserHomePage",
      component: UserHomePage
    },
    {
      path: "/userSearchResults",
      name: "UserSearchResultsPage",
      component: UserSearchResult,
      props: true
    },
    {
      path: "/search/albums/:query",
      name: "AlbumResultPage",
      component: AlbumResultPage
    },
    {
      path: "/search/artists/:query",
      name: "ArtistResultPage",
      component: ArtistResultPage
    },
    {
      path: "/search/global/:query",
      name: "GlobalResultPage",
      component: GlobalResultPage
    },
    {
      path: "/userSearchResults",
      name: "UserSearchResultsPage",
      component: UserSearchResult,
      props: true
    }
  ]
});
