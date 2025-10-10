import axios from "axios";
const res = {
    form: document.querySelector(".js-second-form"),
    list: document.querySelector(".js-second-list"),

}
res.form.addEventListener("submit", async e => {
    e.preventDefault();
    const name = e.target.elements.query.value;
    const result = await getPokemon(name);
    console.log(result);
    const markup = getPokemonTemplate(result)
    res.list.insertAdjacentHTML("afterbegin", markup);
})
//!===================
async function getPokemon(name) {
    const baseUrl = "https://pokeapi.co/api/v2";
    const endPoint = `/pokemon/${name}`;
    const url = baseUrl + endPoint;
    const res = await axios.get(url);
    return res.data;
  
}
function getPokemonTemplate(pok) {
    return `
    <li>
    <p>${pok.name}</p>
     <img src="${pok.sprites.front_default}" alt="">
    </li>`
}
//!==================