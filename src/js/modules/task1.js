import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css'
import iziToast from "izitoast"
import 'izitoast/dist/css/iziToast.min.css'
iziToast.show({
    title: 'Hey',
    message: 'What would you like to add?'
});
const formEl = document.querySelector(".js-first-form");
formEl.addEventListener("submit", e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const age = e.target.elements.age.value;
    const phone = e.target.elements.phone.value;
    const instance = basicLightbox.create(`
	<div class="modal">
    <p>${name}</p>
    <p>${age}</p>
    <p>${phone}</p>
  </div>
`)
    instance.show();
})

