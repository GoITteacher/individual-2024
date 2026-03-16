import axios from "axios";

//js-songs-form
const songForm = document.querySelector(".js-songs-form");
const songCreateForm = document.querySelector(".js-create-songs-form");
const songList = document.querySelector(".js-songs-list");

//!=========================================
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
async function deleteSong(songId) {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = `/public/songs/${songId}`;
  const url = baseUrl + endPoint;

  const res = await axios.delete(url);
  return res.data;
}

async function createSong(song) {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = "/public/songs";
  const url = baseUrl + endPoint;

  const res = await axios.post(url, song);
  return res.data.item;
}

async function updateSong(id, song) {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = `/public/songs/${id}`;
  const url = baseUrl + endPoint;

  const res = await axios.put(url, song);
  return res.data.item;
}

songCreateForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const borys = new FormData(songCreateForm);

  const newSong = {
    title: borys.get("title"),
    artist: borys.get("artist"),
    genre: borys.get("genre"),
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
  const borys = new FormData(songCreateForm);

  const id = borys.get("id");

  const newSong = {
    title: borys.get("title"),
    artist: borys.get("artist"),
    genre: borys.get("genre"),
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
  const song = borys.get("title");
  const res = await getData(song);

  const markup = songsTemplate(res.items);
  songList.innerHTML = markup;
});

songList.addEventListener("click", async (e) => {
  console.dir(e.target);
  if (e.target.dataset.type !== "delete") {
    return;
  }
  const songId = e.target.dataset.id;
  deleteSong(songId);
  e.target.closest("li").remove();
});

//!=========================================
function songTemplate(song) {
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

function songsTemplate(songs) {
  return songs.map(songTemplate).join("");
}

document.addEventListener("DOMContentLoaded", async () => {
  const res = await getData("");
  const markup = songsTemplate(res.items);
  songList.innerHTML = markup;
});
