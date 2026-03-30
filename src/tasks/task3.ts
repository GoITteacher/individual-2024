import axios from "axios";
const formEl = document.querySelector(".js-recept-form") as HTMLFormElement;
const eleList = document.querySelector(".js-recept-list") as HTMLUListElement;

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();

  const borys = new FormData(formEl);

  const titleRecipes = borys.get("title") as string;
  const categoryRecipes = borys.get("category") as string;
  const timeRecipes = borys.get("time") as string;

  const res = await fetcRecipes(titleRecipes, categoryRecipes, timeRecipes);

  const markup = recipesTemplate(res.results);
  eleList.innerHTML = markup;
});

async function fetcRecipes(title: string, category: string, time: string) {
  const baseURL = "https://tasty-treats-backend.p.goit.global/api";
  const endPoint = "/recipes/";
  const url = baseURL + endPoint;

  const params = {
    title: title,
    category: category,
    time: time,
  };

  const res = await axios.get<GetRecipeResponse>(url, { params });
  return res.data;
}

function recipeTemplate(item: Recipe) {
  return `<li>
      ${item.category}
      ${item.title}
      ${item.description}
    </li>`;
}

function recipesTemplate(arr: Recipe[]) {
  return arr.map(recipeTemplate).join("");
}

interface Recipe {
  _id: string;
  title: string;
  category: string;
  description: string;
  preview: string;
  rating: number;
}

interface GetRecipeResponse {
  page: 1;
  perPage: 6;
  totalPages: 1;
  results: Recipe[];
}
/* 
{
      "_id": "6467fb9d3d8125271a59219e",
      "title": "Oatmeal Cookies With Peanuts",
      "category": "Dessert",
      "description": "Cookies are seasonless, do you agree with me? You can cook them whenever you want and feel the same cheerful warmth inside the body. Today I recommend you to cook oatmeal cookies with peanuts. Trust me, you’ll fall in love with them.",
      "preview": "https://klopotenko.com/wp-content/uploads/2021/09/oatmeal-cookies-with-peanuts_web_eng-630x517.jpg",
      "rating": 0.1
    }
*/
