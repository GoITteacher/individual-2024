const ref = {
    form: document.querySelector(".js-form"),
    list: document.querySelector(".js-items"),
    backdrop: document.querySelector(".js-backdrop"),
    modalka: document.querySelector(".js-modal"),
jsFilter: document.querySelector(".js-filters")
}
const arrObj = [];
ref.form.addEventListener("submit", e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const surname = e.target.elements.surname.value;
    const age = e.target.elements.age.value;
    const gender = e.target.elements.gender.value;
    const phone = e.target.elements["phone-number"].value;
    const email = e.target.elements.email.value;
    const objContacts = {
        name: name,
        surname: surname,
        age: age,
        gender: gender,
        phone: phone,
        email: email,
        
    }
    const paragraph = usertemplate(objContacts);
    ref.list.insertAdjacentHTML("afterbegin", paragraph);
    e.target.reset();
    arrObj.push(objContacts);
});

function usertemplate({ name, surname,email}) {
     return `<li class="box item hight">
            <p class="js-name">${name}</p>
            <p class="js-surname">${surname}</p>
            <button class="form-control" data-email="${email}" data-type="show">SHOW MORE</button>
            <button class="form-control" data-type="delete">DELETE</button>
          </li>`
    
}
function modalTemplate({name,surname,age,gender,phone,email}) {
    return`<li class="box item hight">
            <p class="js-name">${name}</p>
            <p class="js-surname">${surname}</p>
            <p class="js-surname">${age}</p>
            <p class="js-surname">${gender}</p>
            <p class="js-surname">${phone}</p>
            <p class="js-surname">${email}</p>
          </li>`
    
}
function getUsers(arr) {
    return arr.map(usertemplate).join("");

}
/////////////////////////////////////////
ref.list.addEventListener("click", e => {
    if (e.target.dataset.type !== "show") return;
    if (e.target.textContent !== "SHOW MORE") return;
    const uniqEmail = e.target.dataset.email;
    const userSearch = arrObj.find(user => user.email === uniqEmail);
    console.log(userSearch);
    const createElems = modalTemplate(userSearch);
    ref.modalka.innerHTML = createElems;
    openModal();
    

})

function openModal() {
    ref.backdrop.classList.remove("hidden")
};
function closeModal() {
   ref.backdrop.classList.add("hidden")  
};
ref.backdrop.addEventListener("click", e => {
    if (e.target !== ref.backdrop) return;
    closeModal();
})

ref.jsFilter.addEventListener("input", e => {
    const inputValue = e.target.value;
    console.log(inputValue);
    const arrUsers = arrObj.filter(user => user.name.includes(inputValue));
    const markup = getUsers(arrUsers);
    ref.list.innerHTML = markup;
    
})