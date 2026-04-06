import axios from "axios";
import {
  Book,
  CreateBookBody,
  GetBooksResponse,
  UpdateBookBody,
} from "../types/books";

const bookList = document.querySelector(".js-books") as HTMLUListElement;

const bookForm = document.querySelector(".js-book-form") as HTMLFormElement;
const bookUpdateForm = document.querySelector(
  ".js-update-book-form",
) as HTMLFormElement;

const loading = document.querySelector(".js-loading") as HTMLElement;

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
  const booksData: CreateBookBody = {
    title: borys.get("title") as string,
    author: borys.get("author") as string,
    desc: borys.get("desc") as string,
  };
  const respons = await createBook(booksData);
  const markup = bookTemplate(respons);
  bookList.insertAdjacentHTML("beforeend", markup);
  hideLoading();
});

bookUpdateForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  showLoading();
  const borys = new FormData(e.target as HTMLFormElement);

  const booksData: UpdateBookBody = {
    _id: borys.get("id") as string,
    title: borys.get("title") as string,
    author: borys.get("author") as string,
    desc: borys.get("desc") as string,
  };

  const res = await updateBook(booksData);
  const markup = bookTemplate(res);
  const liElem = bookList.querySelector(
    `[data-id="${res._id}"]`,
  ) as HTMLElement;
  console.log(liElem);

  liElem.outerHTML = markup;
  hideLoading();
});

async function createBook(booksData: CreateBookBody) {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = "/public/books";

  const url = baseUrl + endPoint;

  const res = await axios.post<Book>(url, booksData);

  return res.data;
}

async function updateBook(booksData: UpdateBookBody) {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = `/public/books/${booksData._id}`;

  const url = baseUrl + endPoint;

  const res = await axios.put<Book>(url, booksData);

  return res.data;
}

document.addEventListener("DOMContentLoaded", async (e) => {
  showLoading();
  const res = await getBooks();
  const marcup = booksTemplate(res.items);
  bookList.insertAdjacentHTML("beforeend", marcup);
  hideLoading();
});

bookList.addEventListener("click", async (e) => {
  const btnElem = e.target as HTMLElement;
  if (btnElem.dataset.type !== "delete") {
    return;
  }
  showLoading();
  const bookId = btnElem.dataset.id as string;
  const res = await deleteBook(bookId);
  const liElem = btnElem.closest("li") as HTMLLIElement;
  liElem.remove();
  hideLoading();
});

function bookTemplate(item: Book) {
  return `<li data-id="${item._id}">
        <p class="" src="" >${item._id}</p>
      <p>${item.author}</p>
      <p>${item.title}</p>
      <p>${item.desc}</p>
      <button data-type="delete" data-id="${item._id}">delete</button>
    </li>`;
}

function booksTemplate(items: Book[]) {
  return items.map(bookTemplate).join("");
}
async function getBooks() {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = "/public/books";

  const url = baseUrl + endPoint;

  const params = {
    perPage: 50,
  };
  const res = await axios.get<GetBooksResponse>(url, { params });

  return res.data;
}

async function deleteBook(bookId: string) {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = `/public/books/${bookId}`;
  const url = baseUrl + endPoint;

  const res = await axios.delete<null>(url);
  return res.data;
}
