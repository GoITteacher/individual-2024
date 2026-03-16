import axios from "axios";

const formElem = document.querySelector(".js-student-form");

const elemList = document.querySelector(".js-student-ul");

const formCreate = document.querySelector(".js-create-student-form");

//!=========================================
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

formElem.addEventListener("submit", async (e) => {
  e.preventDefault();

  const borys = new FormData(formElem);
  const lastName = borys.get("lastname");

  const res = await getStudent(lastName);
  console.log(res);

  const markup = itemsStudents(res.items);
  elemList.innerHTML = markup;
});

//!=========================================

async function createStudent(student) {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = "/public/students";
  const url = baseUrl + endPoint;

  const res = await axios.post(url, student);
  return res.data.item;
}

formCreate.addEventListener("submit", async (e) => {
  e.preventDefault();

  const borys = new FormData(formCreate);

  const res = {
    firstName: borys.get("firstName"),
    lastName: borys.get("lastName"),
    major: borys.get("major"),
    cohortYear: +borys.get("cohortYear"),
    gpa: +borys.get("gpa"),
    enrolled: Boolean(borys.get("enrolled")),
  };

  const result = await createStudent(res);
  const markup = itemStudent(result);
  elemList.insertAdjacentHTML("beforeend", markup);
});

//!=========================================
function itemStudent(item) {
  return `<div>${item.firstName} ${item.lastName}</div>`;
}

function itemsStudents(items) {
  return items.map(itemStudent).join("");
}
