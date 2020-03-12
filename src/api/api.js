const API_URL = "http://ubeat.herokuapp.com/unsecure";

export const getTracks = async albumId => {
  const path = `${API_URL}/albums/${albumId}/tracks`;
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const getArtist = async artistId => {
  const path = `${API_URL}/artists/${artistId}`;
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const getAlbums = async artistId => {
  const path = `${API_URL}/artists/${artistId}/albums`;
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const getAlbum = async albumId => {
  const path = `${API_URL}/albums/${albumId}`;
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const getPlaylists = async () => {
  const path = `${API_URL}/playlists`;
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
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
  const path = `${API_URL}/playlists/${playlistId}`;
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};
