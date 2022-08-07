"use strict";

var navLi = document.querySelectorAll("nav li");
var path_name = window.location.pathname.slice(1, -5);
var index = document.querySelector(".index");
var admin = document.querySelector(".admin");
navLi.forEach(function (e) {
  e.addEventListener("click", function (e) {
    navLi.forEach(function (nav) {
      return nav.classList.remove("active");
    });
    this.classList.add("active");
  });
});

if (path_name === "" || path_name === "index" || path_name === "assignment-reply") {
  index.classList.add("active");
} else if (path_name === "admin") {
  admin.classList.add("active");
}
//# sourceMappingURL=all.js.map
