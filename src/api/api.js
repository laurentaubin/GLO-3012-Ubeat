import Cookies from "js-cookie";

const API_URL = "https://ubeat.herokuapp.com/unsecure";

const makeApiRequest = async (url, options) => {
    const requestUrl = `${API_URL}/${url}`;
    if (options === null) {
      options = {};
    }
    try {
      const data = await fetch(requestUrl, options);
      return data.json();
    } catch (err) {
      return err;
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
  return [];
};

export const createPlaylist = async (name, owner) => {
  const path = `playlists`;
  const body = {
    name: name,
    owner: owner
  };
  const options = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  };
  return await makeApiRequest(path, options);
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
  const path = `playlists/${playlistId}`;
  const options = {
    method: "DELETE",
    headers: {}
  };
  return await makeApiRequest(path, options);
};

export const editPlaylistName = async (playlistId, playlist, newName) => {
  const path = `playlists/${playlistId}`;
  const body = { ...playlist };
  body.name = newName;
  const options = {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  };
  return await makeApiRequest(path, options);
};

export const addTrackToPlaylist = async (track, playlistId) => {
  const path = `playlists/${playlistId}/tracks`;
  const body = track;
  const options = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  };
  return await makeApiRequest(path, options);
};

export const deleteTrackFromPlaylist = async (track, playlistId) => {
  const path = `playlists/${playlistId}/tracks/${track.trackId}`;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  };
  return await makeApiRequest(path, options);
};

export const unfollowUserWithID = async ID => {
  const path = `follow/${ID}`;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  };
  return await makeApiRequest(path, options);
};

export const followUserWithID = async ID => {
  const path = `follow`;
  const body = {
    id: ID
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };
  return await makeApiRequest(path, options);
};

export const signUp = async (name, email, password) => {
  const path = `http://ubeat.herokuapp.com/signup`;
  let body = new URLSearchParams();
  body.append("name", name);
  body.append("email", email);
  body.append("password", password);

  try {
    const response = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: body
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const searchArtists = async query => {
  const path = `search/artists?q=${query}&limit=20`;
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
  };
  return await makeApiRequest(path, options);
};

export const searchAlbums = async query => {
  const path = `search/albums?q=${query}&limit=20`;
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
  };
  return await makeApiRequest(path, options);
};

export const searchTracks = async query => {
  const path = `search/tracks?q=${query}&limit=40`;
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
  };
  return await makeApiRequest(path, options);
};

export const getAllUsers = async () => {
  const path = `users`;
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
  };
  return await makeApiRequest(path, options);
};

export const searchAll = async query => {
  const path = `search/?q=${query}`;
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
  };
  return await makeApiRequest(path, options);
};

export const login = async (email, password) => {
  const path = `http://ubeat.herokuapp.com/login`;
  let body = new URLSearchParams();
  body.append("email", email);
  body.append("password", password);
  try {
    const response = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      },
      body: body
    });
    const data = await response.json();
    if (response.status === 200 || response.status === 401) {
      let date = new Date();
      const minutes = 60;
      date.setTime(date.getTime() + minutes * 60 * 1000);
      Cookies.set("token", data.token, { expires: date });
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
    await fetch(path, options);
  } catch (err) {
    return err;
  }
};

export const getCurrentUserTokenInfo = async () => {
  return {
    "email": "john.smith@mail.com",
    "name": "John Smith",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1M2VjMWVhMmQ3N2FhZmU3N2Q4YzM3YjgiLCJleHAiOjE0MDg2NzI4ODI4ODV9.5wLLC8kqaQyPGWKAidYZpsMz5XJtwk2Np1KmYEusizY",
    "id": "53ec1ea2d7121fe77d8c37b8"
  }.json()
};

export const getUserById = async userId => {
  const path = `users/${userId}`;
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
  };
  return await makeApiRequest(path, options);
};

export const getUserPlaylists = async userId => {
  const playlists = await getPlaylists();
  if (playlists !== null) {
    const userPlaylists = playlists.filter(
      playlist => playlist.owner.id === userId
    );
    return userPlaylists;
  }
};

export const getArtists = async () => {
  let query = "a&limit=100";
  return await searchArtists(query);
};
