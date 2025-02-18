// console.log(document);
// console.log(document.body.textContent);
// document.body.textContent = "Hello";
// const muUl = document.body.querySelector(".js-list-1");
// muUl.textContent = "Hello world"
// muUl.style.color = "blue";
// muUl.style.fontSize = "24px";
// muUl.style.backgroundColor = "red";
// console.log(muUl);

// const muUl2 = document.body.querySelector(".js-list-2");
// console.log(muUl2);

// muUl2.children
// console.log(muUl2.children);
// for(const forLi of muUl2.children){
//     forLi.style.color = "red";
// }

// for(let i = 0; i < muUl2.children.length; i++ ){
//     muUl2.children[i].style.color = "green"
//     muUl2.children[i].textContent = i + 1
// }

// const liElems = muUl2.querySelectorAll("li")
// console.log(liElems);

// const liArr = [...liElems]
// console.log(liArr);

// const muImage = document.querySelector('.js-input[name="image"]')
// console.log(muImage);

// muImage.value = "Hello world";
// muImage.remove()

// const muul2 = document.querySelector('.js-list-2');
// muul2.classList.add("listItems")

// const muUl1 = document.querySelector('.js-list-1');
// muUl1.classList.add("low")

// const muBox = document.querySelector('.js-tasks');
// const taskHtml = `<ul class="js-tasks list">
//           <li class="box task hight">
//             <h3>Title</h3>
//             <h5>Priority - HIGHT</h5>
//             <div class="fb">
//               <p class="task-desc">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
//                 et accusamus reiciendis, dolorem sint doloremque ad deleniti
//                 nulla aliquid maiores explicabo perspiciatis officiis optio quo
//                 cumque, eligendi eum ea aliquam?
//               </p>
//               <img
//                 src="https://blog.logrocket.com/wp-content/uploads/2023/01/css-full-page-background.png"
//                 alt=""
//               />`

// muBox.innerHTML = taskHtml;
// muBox.insertAdjacentHTML('beforebegin', taskHtml);
// muBox.insertAdjacentHTML('afterend', taskHtml);
// const newLi = document.createElement('li');

// newLi.classList.add('box', 'task', 'hight');
// newLi.innerHTML = `
//   <h3>Title</h3>
//   <h5>Priority - HIGHT</h5>
//   <div class="fb">
//     <p class="task-desc">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//     </p>
//     <img src="https://blog.logrocket.com/wp-content/uploads/2023/01/css-full-page-background.png" alt=""/>
//   </div>
// `;
// muBox.appendChild(newLi);

// // const newTitle = document.querySelector('h3');
// // newTitle.textContent = "Good day";

// const titleAll = document.querySelectorAll('h3');
// titleAll.forEach(title => {
//   title.textContent = "Good day";
// });

// function gethello(name){
//     return `<h1>Hello ${name}</h1>`
// }
// const str = gethello("Max");
// muBox.insertAdjacentHTML('beforeend', str);

// muBox.insertAdjacentHTML('afterbegin', gethello("Bohdan"));

// const muButton = document.querySelector('.js-form-button');
// muButton.setAttribute('src', "Hello");

const newImages = document.querySelector(".js-image-new");
function muImage() {
  const radnomId = Math.round(Math.random() * 100);
  newImages.setAttribute(
    "src",
    `https://picsum.photos/id/${radnomId}/720/1280`
  );
}
// muButton.setAttribute('disabled', 'true');

// setInterval(muImage, 5000)

// const newImages = document.querySelector('.js-image-new');
// const image10 = newImages.getAttribute('data-hello')
// console.log(image10);

// const newId = newImages.getAttribute('data-id');
// console.log(newId);
// console.log(newImages.dataset.id);
// newImages.dataset.good = "Good day";

/*
-textContent
-innerHTML
-style
-classList
-children
-value

-insertAjuncentHTML()
-querySelecor()
-quearySelectorAll()
*/

///////////////////////////////////////////////////////////////////////////////////

// const jsButton = document.querySelector('.js-muButton-ul');
// jsButton.addEventListener('click', muImage)

// const image23 = document.querySelector('.js-image-new');
// image23.addEventListener('mouseenter', muImage);

const array = [];
const ulElem = document.querySelector(".js-tasks");

const formJs = document.querySelector(".js-form");
formJs.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();

  const data = {
    title: formJs.elements["input-value"].value,
    images: formJs.elements["image"].value,
    discription: formJs.elements["description"].value,
  };
  const markup = createData(data);
  ulElem.insertAdjacentHTML("beforeend", markup);
  array.push(data);
  console.log(array);
  formJs.reset();
}


function createData(dataInfo) {
  return `<li class="box task hight">
            <h3>${dataInfo.title}</h3>
            <h5>Priority - HIGHT</h5>
            <div class="fb">
              <p class="task-desc">
                ${dataInfo.discription}
              </p>
              <img class="js-image-new"
                src="${dataInfo.images}"
                alt=""
                data-hello="world"
                data-id="1234"
                data-size="45"
              />
            </div>

            <button class="form-control" data-type="show">SHOW MORE</button>
            <button class="form-control" data-type="delete">DELETE</button>
          </li>`;
}
