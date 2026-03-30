import axios from "axios";
import type {
  CreateStudentBody,
  GetStudentsResponse,
  Student,
} from "../types/students";

const formElem = document.querySelector(".js-student-form") as HTMLFormElement;

const elemList = document.querySelector(".js-student-ul") as HTMLUListElement;

const formCreate = document.querySelector(
  ".js-create-student-form",
) as HTMLFormElement;

//!=========================================
async function getStudent(lastname: string) {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = "/public/students";
  const url = baseUrl + endPoint;

  const params = {
    lastName: lastname,
    perPage: 150,
  };

  const res = await axios.get<GetStudentsResponse>(url, { params });
  return res.data;
}

formElem.addEventListener("submit", async (e) => {
  e.preventDefault();

  const borys = new FormData(formElem);
  const lastName = borys.get("lastname") as string;

  const res = await getStudent(lastName);
  console.log(res);

  const markup = itemsStudents(res.items);
  elemList.innerHTML = markup;
});

//!=========================================

async function createStudent(student: CreateStudentBody) {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = "/public/students";
  const url = baseUrl + endPoint;

  const res = await axios.post(url, student);
  return res.data.item;
}

formCreate.addEventListener("submit", async (e) => {
  e.preventDefault();

  const borys = new FormData(formCreate);

  const res: CreateStudentBody = {
    firstName: borys.get("firstName") as string,
    lastName: borys.get("lastName") as string,
    major: borys.get("major") as string,
    cohortYear: Number(borys.get("cohortYear")),
    gpa: Number(borys.get("gpa")),
    enrolled: Boolean(borys.get("enrolled")),
  };

  const result = await createStudent(res);
  const markup = itemStudent(result);
  elemList.insertAdjacentHTML("beforeend", markup);
});

//!=========================================
function itemStudent(item: Student) {
  return `<div>${item.firstName} ${item.lastName}</div>`;
}

function itemsStudents(items: Student[]) {
  return items.map(itemStudent).join("");
}
