import axios from "axios";

const refs = {
    form: document.querySelector(".js-third-form"),
    list: document.querySelector(".js-third-list"),
    button: document.querySelector(".js-random-button")
}

refs.form.addEventListener("submit", async e => {
    e.preventDefault();
  
    const name = e.target.elements.query.value;
    const description = e.target.elements.desc.value;
    const result = await getInf(name, description);
    const markup = getCoctailsTemplate(result);
    refs.list.innerHTML = markup;
    
})


async function getInf(name, desc){
    const basic = "https://drinkify.b.goit.study/api/v1"
    const endPoint = "/cocktails/search/"
    const url = basic + endPoint;
    const params = {
        s: name,
        d: desc,
    }
    const getRes = await axios.get(url, { params })
    return getRes.data;
}
async function getRandomCoctails() {
     const basic = "https://drinkify.b.goit.study/api/v1"
    const endPoint = "/cocktails/"
    const url = basic + endPoint;
    const params = {
        r: 5,
      
    }
    const getRes = await axios.get(url, { params })
    return getRes.data;
}
refs.button.addEventListener("click", async e => {
    const randomCockteils = await getRandomCoctails();
    const markupCoctails = getCoctailsTemplate(randomCockteils);
    refs.list.innerHTML = markupCoctails;
})

function getCoclailTemplait({drink,category,description,drinkThumb}) {
    return ` <li>
    <p>${drink}</p>
    <p>${category}</p>
   
    <img src="${drinkThumb}" alt="">
   </li>
    `
}

function getCoctailsTemplate(arrDrinks) {
    return arrDrinks.map(getCoclailTemplait).join("");
}