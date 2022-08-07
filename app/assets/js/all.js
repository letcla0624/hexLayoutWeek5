const navLi = document.querySelectorAll("nav li");
const path_name = window.location.pathname.slice(1, -5);
const index = document.querySelector(".index");
const admin = document.querySelector(".admin");

navLi.forEach((e) => {
  e.addEventListener("click", function (e) {
    navLi.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

if (
  path_name === "" ||
  path_name === "index" ||
  path_name === "assignment-reply"
) {
  index.classList.add("active");
} else if (path_name === "admin") {
  admin.classList.add("active");
}
