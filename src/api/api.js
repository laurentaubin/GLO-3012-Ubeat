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
