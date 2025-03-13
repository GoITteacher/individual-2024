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

// const newImages = document.querySelector(".js-image-new");
// function muImage() {
//   const radnomId = Math.round(Math.random() * 100);
//   newImages.setAttribute(
//     "src",
//     `https://picsum.photos/id/${radnomId}/720/1280`
//   );
// }
// muButton.setAttribute('disabled', 'true');

// setInterval(muImage, 5000)

// const newImages = document.querySelector('.js-image-new');
// const image10 = newImages.getAttribute('data-hello')
// console.log(image10);

// const newId = newImages.getAttribute('data-id');
// console.log(newId);
// console.log(newImages.dataset.id);
// newImages.dataset.good = "Good day";



//////////////////////////////////////////////////////////////
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

// const array = [];
// const ulElem = document.querySelector(".js-tasks");

// const formJs = document.querySelector(".js-form");
// formJs.addEventListener("submit", handleFormSubmit);

// function handleFormSubmit(e) {
//   e.preventDefault();

//   const data = {
//     title: formJs.elements["input-value"].value,
//     images: formJs.elements["image"].value,
//     discription: formJs.elements["description"].value,
//   };
//   const markup = createData(data);
//   ulElem.insertAdjacentHTML("beforeend", markup);
//   array.push(data);
//   console.log(array);
//   formJs.reset();
// }


// function createData(dataInfo) {
//   return `<li class="box task hight">
//             <h3>${dataInfo.title}</h3>
//             <h5>Priority - HIGHT</h5>
//             <div class="fb">
//               <p class="task-desc">
//                 ${dataInfo.discription}
//               </p>
//               <img class="js-image-new"
//                 src="${dataInfo.images}"
//                 alt=""
//                 data-hello="world"
//                 data-id="1234"
//                 data-size="45"
//               />
//             </div>

//             <button class="form-control" data-type="show">SHOW MORE</button>
//             <button class="form-control" data-type="delete">DELETE</button>
//           </li>`;
// }

//////////////////////////////////////////////////////

// const elemUl = document.querySelector(".js-items");

// elemUl.addEventListener("click", handelElemClick);

// function handelElemClick(e){
// const elem = e.target

// // if(elem.textContent !== "DELETE"){
// // return;
// // }
// // if(elem.dataset.type !== "delete"){
// // return;
// // }

// // if(elem.nodeName !== "LI"){
// // return;
// // }
// // if(!elem.classList.contains("item")){
// // return;
// // }
// // console.log(elem.dataset.type)
// // console.log(elem.nodeName);
// // console.log(e.target.dataset);
// }

// function handelElemClick(e) {
//   if (e.target.dataset.type !== "delete") {
//     return;
//   }
//  const liElem = e.target.closest('.item');
//  liElem.remove();

// }



const elBody = document.querySelector('body');

elBody.addEventListener("click", handelClickBody);

const list1 = document.querySelector('.js-list-1');
const list2 = document.querySelector('.js-list-2');
const jsForm = document.querySelector('.js-form');
const fbElem = document.querySelector('.fb');
const jsFormSubmit = document.querySelector('.js-form');
const jsTasks = document.querySelector('.js-tasks');


jsFormSubmit.addEventListener('submit', handelFormSubmit);
 
// function handelClickBody(e){

// // if(e.target.textContent !== "testButton" ){
// //   return;
// // }

// // if(e.target.nodeName !== "BUTTON"){                 копка button  
// // return;
// // }
// // if(!e.target.classList.contains("fb-v")){          контейнер div
// //   return;
// // }

// // if(list1.contains(e.target)){                                  li1 in ul 
// //   console.log("Клік ВНУТРІШНІЙ в .js-list-1", e.target);
// // }

// // if(list2.contains(e.target)){
// //   console.log("Клік ВНУТРІШНІЙ в .js-list-2", e.target);      li2 in ul 
// // }
// // if(e.target.nodeName !==  "P"){                        paragraph
// //   return;
// // }
// // console.log("hello");

// // if(!jsForm.contains(e.target)){                   в формі
// //   return;
// // }
// // console.log("hello");


// // if(e.target === jsForm){                      форма
// //   console.log("hello");

// // }

// // if(!e.target.classList.contains("form-control")){
// //   return;
// // }
// // console.log("hello");

// // if(e.target.type !== "radio"){
// //   return;
// // }
// // console.log("hello");
// } 
// if(e.target.nodeName !== 'H3'){
//   return;
// }


// if(e.target.nodeName !== 'H5'){
//   return;
// }


// if(e.target.nodeName !== 'DIV'){
//   return;
// }
// if(!e.target.classList.contains('fb')){
//   return;
// }

// if(e.target.nodeName !== 'IMG'){
//   return;
// }


// if(!e.target.classList.contains('js-image-new')){
//   return;
// }

// if(e.target.dataset.type !== 'show'){
//     return;
// }

// if(!e.target.classList.contains('delete')){
//     return;
// }
// console.log("hello");

// }

// function handelFormSubmit(e){
// e.preventDefault();

// if(e.target.type !== "submit"){
//   console.log("hello"); 
// }

// }





// console.log("hello");
































// Атрибут data-type	           elem.dataset.type === "delete"
// Будь-який атрибут	           elem.getAttribute("href") === "#top"
// Текст	                       elem.textContent === "DELETE"
// HTML-код	                     elem.innerHTML.includes("<strong>")
// Введене значення	             inputElem.value === ""
// Тег елемента	                 elem.nodeName === "BUTTON"
// Клас елемента	               elem.classList.contains("active")
// Інлайновий стиль	             elem.style.display === "none"
// CSS-стиль	                   getComputedStyle(elem).display === "none"
// Батьківський елемент	         elem.parentElement.nodeName === "UL"
// Перевірка вкладеності	       elem.closest(".container")
// Тип поля вводу	               inputElem.type === "checkbox"