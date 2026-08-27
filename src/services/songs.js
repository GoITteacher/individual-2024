import { serverApi } from "./serverConfig";

export const getSongs = async (title, artist) => {
  const params = { title: title, artist: artist };
  const res = await serverApi.get("/public/songs", { params });
  return res.data;
};

export const createSong = async () => {
  const res = await serverApi.get("/public/songs");
};

export const getSongById = async () => {
  const res = await serverApi.get("/public/songs");
};

export const updateSong = async () => {
  const res = await serverApi.get("/public/songs");
};

export const deleteSong = async () => {
  const res = await serverApi.get("/public/songs");
};
