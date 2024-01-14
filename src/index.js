const cardList = document.querySelector(".js-tasks");
const formElem = document.querySelector(".js-form");
console.log(cardList);
console.log(formElem);
formElem.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const task = {
    title: formElem.elements.title.value,
    image:
      formElem.elements.image.value ||
      "https://blog.logrocket.com/wp-content/uploads/2023/01/css-full-page-background.png",
    desk: formElem.elements.description.value,
    userPriority: formElem.elements.priority.value,
  };
  cardList.insertAdjacentHTML("afterbegin", cardTemplate(task));
}
function cardTemplate({ title, image, desk, userPriority }) {
  return `<li class="box task ${userPriority}">
            <h3>${title}</h3>
            <h5>Priority - ${userPriority}</h5>
            <div class="fb">
              <p class="task-desc">
                ${desk}
              </p>
              <img
                src="${image}"
                alt=""
              />
            </div>

            <button class="form-control" data-type="show">SHOW MORE</button>
            <button class="form-control" data-type="delete">DELETE</button>
          </li>`;
}
cardList.addEventListener("click", onDeleteBtnClick);

function onDeleteBtnClick(e) {
  if (e.target.dataset.type === "delete") {
    e.target.parentNode.remove();
  }
}
