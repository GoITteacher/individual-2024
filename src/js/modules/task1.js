//!======================================================

function fetchCoctails(coctailName) {
  const BASE_URL = "https://drinkify.b.goit.study/api/v1";
  const END_POINT = "/cocktails/search/";
  const params = new URLSearchParams({
    s: coctailName,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url).then((res) => res.json());
}

//!======================================================

function coctailTemplate(coctail) {
  return "<li></li>";
}
function coctailsTemplate(arr) {
  return arr.map(coctailTemplate).join("");
}

//!======================================================

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const title = formData.get("title");

  fetchCoctails(title).then((arr) => {
    const markup = coctailsTemplate(arr);
    listelem.innerHTML = markup;
  });
});
