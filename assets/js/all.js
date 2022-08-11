"use strict";

var navLi = document.querySelectorAll("nav li");
var path_name = window.location.pathname.split("/").pop().slice(0, -5);
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

if (path_name === "" || path_name === "index") {
  index.classList.add("active");
} else if (path_name === "admin") {
  admin.classList.add("active");
}

var someoneReplay = document.querySelector(".someoneReplay");
var replyBtn = document.querySelector(".replyBtn");
var bottomBtn = document.querySelector(".bottomBtn");
var newReply = document.querySelector(".newReply");
replyBtn.addEventListener("click", function () {
  someoneReplay.classList.add("d-none");
  bottomBtn.classList.add("d-none");
  newReply.classList.remove("d-none");
});
//# sourceMappingURL=all.js.map
