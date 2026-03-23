import axios from "axios";

const bookList = document.querySelector(".js-books");

const bookForm = document.querySelector(".js-book-form");
const bookUpdateForm = document.querySelector(".js-update-book-form");

const loading = document.querySelector(".js-loading");

function showLoading() {
  loading.classList.remove("hidden");
}
function hideLoading() {
  loading.classList.add("hidden");
}
bookForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  showLoading();
  const borys = new FormData(bookForm);
  const booksData = {
    title: borys.get("title"),
    author: borys.get("author"),
    desc: borys.get("desc"),
  };
  const respons = await createBook(booksData);
  const markup = bookTemplate(respons.item);
  bookList.insertAdjacentHTML("beforeend", markup);
  hideLoading();
});

bookUpdateForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  showLoading();
  const borys = new FormData(e.target);

  const booksData = {
    _id: borys.get("id"),
    title: borys.get("title"),
    author: borys.get("author"),
    desc: borys.get("desc"),
  };

  const res = await updateBook(booksData);
  const markup = bookTemplate(res);
  const liElem = bookList.querySelector(`[data-id="${res._id}"]`);
  console.log(liElem);

  liElem.outerHTML = markup;
  hideLoading();
});

async function createBook(booksData) {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = "/public/books";

  const url = baseUrl + endPoint;

  const res = await axios.post(url, booksData);

  return res.data;
}

async function updateBook(booksData) {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = `/public/books/${booksData._id}`;

  const url = baseUrl + endPoint;

  const res = await axios.put(url, booksData);

  return res.data.item;
}

document.addEventListener("DOMContentLoaded", async (e) => {
  showLoading();
  const res = await getBooks();
  const marcup = booksTemplate(res.items);
  bookList.insertAdjacentHTML("beforeend", marcup);
  hideLoading();
});

bookList.addEventListener("click", async (e) => {
  if (e.target.dataset.type !== "delete") {
    return;
  }
  showLoading();
  const bookId = e.target.dataset.id;
  const res = await deleteBook(bookId);
  e.target.closest("li").remove();
  hideLoading();
});

function bookTemplate(item) {
  return `<li data-id="${item._id}">
        <p class="" src="" >${item._id}</p>
      <p>${item.author}</p>
      <p>${item.title}</p>
      <p>${item.desc}</p>
      <button data-type="delete" data-id="${item._id}">delete</button>
    </li>`;
}

function booksTemplate(items) {
  return items.map(bookTemplate).join("");
}
async function getBooks() {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = "/public/books";

  const url = baseUrl + endPoint;

  const params = {
    perPage: 50,
  };
  const res = await axios.get(url, { params });

  return res.data;
}

async function deleteBook(bookId) {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = `/public/books/${bookId}`;
  const url = baseUrl + endPoint;

  const res = await axios.delete(url);
  return res.data;
}
