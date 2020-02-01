<template>
  <div>
    <header>
      <div>
        <form>
          <input type="search" placeholder="Search...">
        </form>
      </div>
    </header>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/album">Album</router-link>
        </li>
        <li>
          <router-link to="/artist">Artist</router-link>
        </li>
        <li>
          <router-link to="/playlist">Playlist</router-link>
        </li>
        <li>
          <router-link to="/user">User</router-link>
        </li>
        <li>
          <router-link to="/settings">Settings</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
  input {
    font-size: 1.05rem;
    border: 0;
    outline: 0;
    box-shadow: none;
  }

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    padding: 2px 8px;
    border: 1px solid #000000;
    border-radius: 20px;
    min-width: 80px;
    background-color: white;
  }

  header {
    background-color: rgb(142,142,147);
    margin-inside: 0;
  }

  body {
    margin: 0;
  }
</style>
