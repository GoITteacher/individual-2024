import { getSongs } from "../../services/songs";

const songsForm = document.querySelector(".js-songs-form");
const ulElem = document.querySelector(".js-songs-list");
const loader = document.querySelector(".js-loader");

songsForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  showLoading();

  const borys = new FormData(songsForm);
  const title = borys.get("title");
  const artist = borys.get("artist");

  const res = await getSongs(title, artist);
  const markup = itemsTemplate(res.items);
  ulElem.innerHTML = markup;

  hideLoading();
});

function itemTemplate(item) {
  return `<li>
          <p>${item.title} - ${item.artist}</p>
          <p>${item.genre}</p>
        </li>`;
}

function itemsTemplate(items) {
  return items.map(itemTemplate).join("");
}

function showLoading() {
  loader.classList.remove("hidden");
}

function hideLoading() {
  loader.classList.add("hidden");
}
