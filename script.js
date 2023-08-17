function gotoTop() {
  var move = setInterval(function () {
    document.documentElement.scrollTop -= 100;
    if (document.documentElement.scrollTop <= 0) {
      clearInterval(move);
    }
  }, 20);
}

$(document).ready(function () {
  $("#submenu-trigger").click(function (event) {
    event.stopPropagation();
    $("#submenu").toggleClass("show");
  });

  $(document).click(function () {
    $("#submenu").removeClass("show");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");
  body.classList.add("show");
});

// Lấy tham chiếu đến các phần tử cần thao tác
const toggleButton = document.getElementById("toggleContent1");
const content = document.querySelector(".content");

// Lấy tham chiếu đến ảnh và trạng thái hiện tại
const oldImageSrc = "gif/dentat.png";
const newImageSrc = "gif/denbat.gif"; // Đường dẫn của ảnh mới

// Thêm sự kiện click cho ảnh(bóng 1)
toggleButton.addEventListener("click", () => {
  content.classList.toggle("show");

  const currentState = toggleButton.getAttribute("data-state");
  var con = document.querySelector(".container");

  if (currentState === "old") {
    toggleButton.src = newImageSrc;
    toggleButton.setAttribute("data-state", "new");
    con.classList.add("changebg");
  } else {
    toggleButton.src = oldImageSrc;
    toggleButton.setAttribute("data-state", "old");
    con.classList.remove("changebg");
  }
});

const toggleButton2 = document.getElementById("toggleContent2");
const content2 = document.querySelector("section > div:nth-child(2) .content");

// Thêm sự kiện click cho ảnh(bóng 2)
toggleButton2.addEventListener("click", () => {
  content2.classList.toggle("show");
  const currentState = toggleButton2.getAttribute("data-state");
  var con2 = document.querySelector("section > div:nth-child(2) .container");
  if (currentState === "old") {
    toggleButton2.src = newImageSrc;
    toggleButton2.setAttribute("data-state", "new");
    con2.classList.add("changebg");
  } else {
    toggleButton2.src = oldImageSrc;
    toggleButton2.setAttribute("data-state", "old");
    con2.classList.remove("changebg");
  }
});
