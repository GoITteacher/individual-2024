const ref = {
    form: document.querySelector(".js-form"),
    list: document.querySelector(".js-items"),
    backdrop: document.querySelector(".js-backdrop"),
    modalka: document.querySelector(".js-modal")

}
const arrObj = [];
ref.form.addEventListener("submit", e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const color = e.target.elements.color.value;
    const colorObj = {
        name: name, 
        color:color,
    }
    
    const colorElems = createElems(colorObj)
    arrObj.push(colorObj); 
    ref.list.insertAdjacentHTML("afterbegin", colorElems);
})


function createElems({name,}) {
    return` <li class="box item hight">
            <p class="js-name">${name} </p>
            <button class="form-control" data-name ="${name}" data-type="show">SHOW MORE</button>
            <button class="form-control" data-type="delete">DELETE</button>
          </li>`
}
ref.list.addEventListener("click", e => {
    if (e.target.dataset.type !== "show") return;
    const currentName = e.target.dataset.name;
    const colorObj = arrObj.find(elem => elem.name === currentName);
    ref.modalka.style.backgroundColor = colorObj.color;
    openModal();

})
function openModal() {
   ref.backdrop.classList.remove("hidden")
};
function closeModal() {
    ref.backdrop.classList.add("hidden")
}