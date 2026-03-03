import axios from "axios";

const formElem = document.querySelector(".js-student-form");

const elemList = document.querySelector(".js-student-ul");

async function getStudent(lastname) {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = "/public/students";
  const url = baseUrl + endPoint;

  const params = {
    lastName: lastname,
    perPage: 150,
  };

  const res = await axios.get(url, { params });
  return res.data;
}

function itemStudent(item) {
  return `<div>${item.firstName} ${item.lastName}</div>`;
}

function itemsStudents(items) {
  return items.map(itemStudent).join("");
}

formElem.addEventListener("submit", async (e) => {
  e.preventDefault();

  const borys = new FormData(formElem);
  const lastName = borys.get("lastname");

  const res = await getStudent(lastName);
  console.log(res);

  const markup = itemsStudents(res.items);
  elemList.innerHTML = markup;
});
