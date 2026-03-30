import axios from "axios";

// function getNewsList() {}
// function createNews() {}
// function getNewsById() {}
// function updateNewsById() {}
// function deleteNewsById() {}

//!=========================================

// async function getRandomCocktails() {
//   const baseUrl = "https://drinkify.b.goit.study/api/v1";
//   const endPoint = "/cocktails/";
//   const url = baseUrl + endPoint;

//   const params = {
//     r: 25,
//   };

//   const res = await axios.get(url, { params });
//   return res.data;
// }

// const response = await getRandomCocktails();
// console.log(response);

//!=========================================

const formElem = document.querySelector(".js-cocktails-form");
const cocktailsList = document.querySelector(".js-cocktails-list");

formElem.addEventListener("submit", async (e) => {
  e.preventDefault();

  const borys = new FormData(e.target);
  const count = borys.get("count");

  const res = await getRandomCocktails(count);

  const markup = cocktailsTemplate(res);
  cocktailsList.innerHTML = markup;

  e.target.reset();
});

async function getRandomCocktails(randomCount) {
  const baseUrl = "https://drinkify.b.goit.study/api/v1";
  const endPoint = "/cocktails/";
  const url = baseUrl + endPoint;
  const params = {
    r: randomCount,
  };
  const res = await axios.get(url, { params });
  return res.data;
}

function cocktailTemplate(item) {
  return `<li>${item.drink}</li>`;
}

function cocktailsTemplate(arr) {
  return arr.map(cocktailTemplate).join("\n");
}
