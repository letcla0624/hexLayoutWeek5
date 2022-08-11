const navLi = document.querySelectorAll("nav li");
const path_name = window.location.pathname.split("/").pop().slice(0, -5);
const index = document.querySelector(".index");
const admin = document.querySelector(".admin");

navLi.forEach((e) => {
  e.addEventListener("click", function (e) {
    navLi.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

if (path_name === "" || path_name === "index") {
  index.classList.add("active");
} else if (path_name === "admin") {
  admin.classList.add("active");
}

const someoneReplay = document.querySelector(".someoneReplay");
const replyBtn = document.querySelector(".replyBtn");
const bottomBtn = document.querySelector(".bottomBtn");
const newReply = document.querySelector(".newReply");

replyBtn.addEventListener("click", () => {
  someoneReplay.classList.add("d-none");
  bottomBtn.classList.add("d-none");
  newReply.classList.remove("d-none");
});
