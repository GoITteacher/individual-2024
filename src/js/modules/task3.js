import axios from "axios";
const formEl = document.querySelector(".js-recept-form");
const eleList = document.querySelector(".js-recept-list");

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();

  const borys = new FormData(formEl);

  const titleRecipes = borys.get("title");
  const categoryRecipes = borys.get("category");
  const timeRecipes = borys.get("time");

  const res = await fetcRecipes(titleRecipes, categoryRecipes, timeRecipes);

  const markup = recipesTemplate(res.results);
  eleList.innerHTML = markup;
});

async function fetcRecipes(title, category, time) {
  const baseURL = "https://tasty-treats-backend.p.goit.global/api";
  const endPoint = "/recipes/";
  const url = baseURL + endPoint;

  const params = {
    title: title,
    category: category,
    time: time,
  };

  const res = await axios.get(url, { params });
  return res.data;
}

function recipeTemplate(item) {
  return `<li>
      ${item.category}
      ${item.title}
      ${item.description}
    </li>`;
}
function recipesTemplate(arr) {
  return arr.map(recipeTemplate).join("");
}
