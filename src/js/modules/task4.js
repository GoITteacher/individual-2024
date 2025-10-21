import axios from "axios";
const refs = {
    form: document.querySelector(".js-form-recipies"),
    list: document.querySelector(".js-forth-list"),
  
};
const arr = [];
refs.form.addEventListener("submit", async e => {
    e.preventDefault();
    const title = e.target.elements.name.value;
    const res = await getRecipe(title);
    const markup = getResipeTemplate(res)
    refs.list.insertAdjacentHTML("afterbegin", markup)
    

})
async function getRecipe(title, category, time, ingredient) {
    const firstPart = "https://tasty-treats-backend.p.goit.global/api";
    const endPart = "/recipes"
    const url = firstPart + endPart;
    const getResip = await axios.get(url)
    return getResip.data;
}
function getResipeTemplate({name,category,time,ingredient, thumb}) {
    return `
     <li>
    <p>${name}</p>
    <p>${category}</p>
    <p>${time}</p>
    <p>${ingredient}</p>
    <img src="${thumb}" alt="">
  </li>
    `
}
