function gotoTop() {
  window.scrollTo(0, 0);
}

function showSubmenu() {
  let sub = document.getElementById("submenu");
  sub.classList.toggle("show");
}

document.ondblclick = function () {
  let sub = document.getElementById("submenu");
  sub.classList.remove("show");
};

// lay id cua body de catch chu de
const subj = document.querySelector("body");

fetch("./database.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {}
  });

// fetch("./database.json")
//   .then((res) => res.json())
//   .then((data) => {})
