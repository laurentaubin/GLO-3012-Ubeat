import Cookies from "js-cookie";
import Router from "../router/index";

const API_URL = "http://ubeat.herokuapp.com";

const makeApiRequest = async (url, options) => {
  const token = getToken();
  if (token !== null) {
    const requestUrl = `${API_URL}/${url}`;
    if (options === null) {
      options = {};
    }
    options.headers.Authorization = token;
    try {
      const data = await fetch(requestUrl, options);
      return data.json();
    } catch (err) {
      return err;
    }
  } else {
    // eslint-disable-next-line no-unused-vars
    await Router.push("/login").catch(err => {});
    return null;
  }
};

export const getToken = () => {
  const token = Cookies.get("token");
  if (!token) {
    return null;
  }
  return token;
};

export const isConnected = () => {
  const token = Cookies.get("token");
  return !!token;
};

export const getTracks = async albumId => {
  const path = `albums/${albumId}/tracks`;
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
  };
  return await makeApiRequest(path, options);
};

export const getArtist = async artistId => {
  const path = `artists/${artistId}`;
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
  };
  return await makeApiRequest(path, options);
};

export const getAlbums = async artistId => {
  const path = `artists/${artistId}/albums`;
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
  };
  return await makeApiRequest(path, options);
};

export const getAlbum = async albumId => {
  const path = `albums/${albumId}`;
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
  };
  return await makeApiRequest(path, options);
};

export const getPlaylists = async () => {
  const path = `playlists`;
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
  };
  return await makeApiRequest(path, options);
};

export const createPlaylist = async (name, owner) => {
  const path = `${API_URL}/playlists`;
  const body = {
    name: name,
    owner: owner
  };
  try {
    const response = await fetch(path, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const getPlaylist = async playlistId => {
  const path = `playlists/${playlistId}`;
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
  };
  return await makeApiRequest(path, options);
};

export const deletePlaylist = async playlistId => {
  const path = `${API_URL}/playlists/${playlistId}`;
  try {
    const response = await fetch(path, {
      method: "DELETE"
    });
    const data = response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const editPlaylistName = async (playlistId, playlist, newName) => {
  const path = `${API_URL}/playlists/${playlistId}`;
  const body = { ...playlist };
  body.name = newName;
  try {
    const response = await fetch(path, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response.json();
  } catch (err) {
    return err;
  }
};

export const addTrackToPlaylist = async (track, playlistId) => {
  const path = `${API_URL}/playlists/${playlistId}/tracks`;
  const body = track;
  try {
    const response = await fetch(path, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const deleteTrackFromPlaylist = async (track, playlistId) => {
  const path = `${API_URL}/playlists/${playlistId}/tracks/${track.trackId}`;
  try {
    const response = await fetch(path, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const signUp = async (name, email, password) => {
  const path = `http://ubeat.herokuapp.com/signup?name=${name}&email=${email}&password=${password}`;
  try {
    const response = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "x-www-form-urlencoded;charset=utf-8"
      }
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const searchArtists = async query => {
  const path = `${API_URL}/search/artists?q=${query}`;
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data.results;
  } catch (err) {
    return err;
  }
};

export const searchAlbums = async query => {
  const path = `${API_URL}/search/albums?q=${query}`;
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data.results;
  } catch (err) {
    return err;
  }
};

export const login = async (email, password) => {
  const path = `http://ubeat.herokuapp.com/login?email=${email}&password=${password}`;
  try {
    const response = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "x-www-form-urlencoded;charset=utf-8"
      }
    });
    const data = await response.json();
    if (response.status === 200 || response.status === 401) {
      Cookies.set("token", data.token);
      return {
        data: data,
        status: response.status
      };
    }
  } catch (err) {
    return err;
  }
};

export const logout = async () => {
  const path = `http://ubeat.herokuapp.com/logout`;
  const options = {
    method: "POST",
    headers: {}
  };
  try {
    Cookies.remove("token");
    await Router.push("/login");
    await fetch(path, options);
  } catch (err) {
    return err;
  }
};
