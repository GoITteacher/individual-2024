import axios from "axios";

//js-songs-form
const songForm = document.querySelector(".js-songs-form");
const songList = document.querySelector(".js-songs-list");

async function getData(title) {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = "/public/songs";
  const url = baseUrl + endPoint;

  const params = {
    title,
  };

  const res = await axios.get(url, { params });
  return res.data;
}

function songTemplate(song) {
  return `<div>${song.title}</div>`;
}

function songsTemplate(songs) {
  return songs.map(songTemplate).join("");
}

songForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const borys = new FormData(songForm);
  const song = borys.get("title");
  const res = await getData(song);

  const markup = songsTemplate(res.items);
  songList.innerHTML = markup;
});

document.addEventListener("DOMContentLoaded", async () => {
  const res = await getData("");
  const markup = songsTemplate(res.items);
  songList.innerHTML = markup;
});
