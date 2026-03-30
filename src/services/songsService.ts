import axios from "axios";
import type { PostSongsBody, Song } from "../types/songs";

async function postSongs(body: PostSongsBody) {
  const baseUrl = "";
  const endPoint = "";
  const url = baseUrl + endPoint;

  const res = await axios.post<Song>(url, body);
  return res.data;
}
