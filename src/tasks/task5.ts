import axios from "axios";
import {
  GetListSongResponse,
  PostSongsBody,
  Song,
  UpdateSongsBody,
} from "../types/songs";
//js-songs-form
const songForm = document.querySelector(".js-songs-form") as HTMLFormElement;
const songCreateForm = document.querySelector(
  ".js-create-songs-form",
) as HTMLFormElement;
const songList = document.querySelector(".js-songs-list") as HTMLUListElement;

//!=========================================
async function getData(title: string) {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = "/public/songs";
  const url = baseUrl + endPoint;

  const params = {
    title,
  };

  const res = await axios.get<GetListSongResponse>(url, { params });
  return res.data;
}

async function deleteSong(songId: string) {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = `/public/songs/${songId}`;
  const url = baseUrl + endPoint;

  const res = await axios.delete<null>(url);
  return res.data;
}

async function createSong(song: PostSongsBody) {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = "/public/songs";
  const url = baseUrl + endPoint;

  const res = await axios.post<Song>(url, song);
  return res.data;
}

async function updateSong(id: string, song: UpdateSongsBody) {
  const baseUrl: string =
    "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint: string = `/public/songs/${id}`;
  const url: string = baseUrl + endPoint;

  const res = await axios.put<Song>(url, song);
  return res.data;
}

songCreateForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const borys = new FormData(songCreateForm);

  const newSong: PostSongsBody = {
    title: borys.get("title") as string,
    artist: borys.get("artist") as string,
    genre: borys.get("genre") as string,
    album: borys.get("album") as string,
    label: borys.get("label") as string,
    language: borys.get("language") as string,
    releaseYear: Number(borys.get("releaseYear")),
    durationSeconds: Number(borys.get("durationSeconds")),
  };
  const res = await createSong(newSong);
  const markup = songTemplate(res);
  songList.insertAdjacentHTML("beforeend", markup);
  songCreateForm.reset();
});

songCreateForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const borys = new FormData(e.target as HTMLFormElement);

  const id = borys.get("id") as string;

  const newSong = {
    title: borys.get("title") as string,
    artist: borys.get("artist") as string,
    genre: borys.get("genre") as string,
    releaseYear: Number(borys.get("releaseYear")),
    durationSeconds: Number(borys.get("durationSeconds")),
  };
  const res = await updateSong(id, newSong);

  // const markup = songTemplate(res);
  // songList.insertAdjacentHTML("beforeend", markup);
  songCreateForm.reset();
});

songForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const borys = new FormData(songForm);
  const song = borys.get("title") as string;
  const res = await getData(song);

  const markup = songsTemplate(res.items);
  songList.innerHTML = markup;
});

songList.addEventListener("click", async (e) => {
  const songList = e.target as HTMLFormElement;

  if (songList.dataset.type !== "delete") {
    return;
  }
  const songId = songList.dataset.id;
  deleteSong(songId as string);
  const liElem = songList.closest("li") as HTMLLIElement;

  liElem.remove();
});

//!=========================================
function songTemplate(song: Song) {
  return `<li class="song-item">
    <p>${song.title}</p>
    <p>${song._id}</p>
    <div>
      <div>
      </div>
      <div>
       <button data-type="delete" data-id="${song._id}">delete</button>
      </div>
    </div>
  </li>`;
}

function songsTemplate(songs: Song[]) {
  return songs.map(songTemplate).join("");
}

document.addEventListener("DOMContentLoaded", async () => {
  const res = await getData("");
  const markup = songsTemplate(res.items);
  songList.innerHTML = markup;
});
