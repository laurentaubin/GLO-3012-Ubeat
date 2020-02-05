import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Album from '@/components/Album';
import Artist from '@/components/Artist';
import Playlist from "@/components/Playlist";
import User from "@/components/User";
import Settings from "@/components/Settings";
import AccountSettings from "@/components/AccountSettings";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, {
      path: '/artist',
      name: 'Artist',
      component: Artist
    }, {
      path: '/album',
      name: 'Album',
      component: Album
    }, {
      path: '/playlist',
      name: 'Playlist',
      component: Playlist
    }, {
      path: '/user',
      name: 'User',
      component: User
    }, {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }, {
      path: '/accountsettings',
      name: 'AccountSettings',
      component: AccountSettings
    }
  ],
});
