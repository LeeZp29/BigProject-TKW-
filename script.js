$(document).ready(function () {
  $("#submenu-trigger").click(function (event) {
    event.stopPropagation(); // Ngăn chặn sự kiện click đi đến các phần tử cha
    $("#submenu").toggleClass("show");
  });

  $(document).click(function () {
    $("#submenu").removeClass("show");
  });
});

//Hiệu ứng load trang
document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");
  body.classList.add("show");
});

// Lấy tham chiếu đến các phần tử cần thao tác
const toggleButton = document.getElementById("toggleContent1");
const content = document.querySelector(".content");

const oldImageSrc = "gif/dentat.png";
const newImageSrc = "gif/denbat.gif";
if (toggleButton !== null || content !== null) {
  // Thêm sự kiện click cho ảnh(bóng 1)
  toggleButton.addEventListener("click", () => {
    content.classList.toggle("show");

    const currentState = toggleButton.getAttribute("data-state");
    var con1 = document.querySelector(".container");

    if (currentState === "old") {
      toggleButton.src = newImageSrc;
      toggleButton.setAttribute("data-state", "new");
      con1.classList.add("changebg");
    } else {
      toggleButton.src = oldImageSrc;
      toggleButton.setAttribute("data-state", "old");
      con1.classList.remove("changebg");
    }
  });
}

const toggleButton2 = document.getElementById("toggleContent2");
const content2 = document.querySelector("section > div:nth-child(2) .content");
if (toggleButton2 !== null || content2 !== null) {
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
}

// Tạo hiệu ứng hiện ảnh hướng dẫn
document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");
  body.classList.add("show");

  const toggleButton = document.getElementById("toggleContent1");
  const hiddenImage = document.getElementById("hd");
  let clicked = false; // Cờ để theo dõi xem nút đã được nhấp hay chưa
  let timer;
  let opacity = 0; // Đặt mức opacity ban đầu là 0

  // Hàm để hiển thị ảnh từ từ
  function fadeInHiddenImage() {
    if (opacity < 1) {
      opacity += 0.1; // Tăng opacity từ từ
      hiddenImage.style.opacity = opacity;
      requestAnimationFrame(fadeInHiddenImage); // Lặp lại một cách mượt mà cho đến khi opacity đạt 1
    }
  }

  // Hàm để ẩn ảnh từ từ
  function fadeOutHiddenImage() {
    if (opacity > 0) {
      opacity -= 0.1; // Giảm opacity từ từ
      hiddenImage.style.opacity = opacity;
      requestAnimationFrame(fadeOutHiddenImage); // Lặp lại một cách mượt mà cho đến khi opacity đạt 0
    }
  }

  // Hàm để hiển thị ảnh ẩn và sau đó ẩn đi từ từ
  function showHiddenImage() {
    opacity = 0; // Đặt lại opacity về 0 trước khi hiển thị từ từ
    fadeInHiddenImage(); // Gọi hàm để hiển thị từ từ

    setTimeout(function () {
      fadeOutHiddenImage(); // Gọi hàm để ẩn đi từ từ sau 3 giây
    }, 5000);
  }

  // Bắt đầu hẹn giờ sau 5 giây
  timer = setTimeout(function () {
    showHiddenImage();
    // Đặt hẹn giờ lặp lại sau mỗi 10 giây (5s hiện, 5s ẩn)
    timer = setInterval(showHiddenImage, 10000);
  }, 5000);

  // Thêm lắng nghe sự kiện nhấp vào nút chuyển đổi
  toggleButton.addEventListener("click", function () {
    clicked = true;
    clearTimeout(timer); // Xóa hẹn giờ
    fadeOutHiddenImage(); // Ẩn ảnh từ từ khi nhấp vào "dentat"
  });
});

// lay id cua body de catch chu de
const subj = document.querySelector("body");
// tim kiem va in ra man hinh
document.querySelector(".find input").onchange = function () {
  const inputVal = document.querySelector("input").value;
  let output = "";
  fetch("./database.json")
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].content.length; j++) {
          if (data[i].content[j].name.search(inputVal) !== -1) {
            output += `
            <div class="flex">
              <div class="side">
                <img src="image/${data[i].id}.jpg" />
              </div>
              <div class="container-research">
                <div class="content-research">
                  <a
                    href="${data[i].content[j].link}" target = "blank"
                    >${data[i].content[j].name}</a>
                  <div>${data[i].content[j].author}</div>
                  <div>${data[i].content[j].article}</div>
                  <div>${data[i].content[j].day}</div>
                  <a
                    href="${data[i].content[j].pdf}" target = "blank"
                    >view PDF</a>
                    </div>
                </div>
            </div>
            `;
          }
        }
      }
      // let contentfind = document.querySelector("contaier")
      // contentfind.classList.toggle("show");
      if (output === "") {
        output = `            <div class="container-research">
            <p class="content-research"> <strong>Không thể tìm thấy bài báo !!!</strong></p>
          </div>
`;
      }
      document.getElementById("research").innerHTML = output;
    });
};

// ham in cac bai bao moi khi tai cac trang con chu de
window.onload = function () {
  if (subj !== undefined) {
    let output = "";
    fetch("./database.json")
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].content.length; j++) {
            if (data[i].id === subj.id) {
              output += `
            <div class="flex">
              <div class="side">
                <img src="image/${data[i].id}.jpg" />
              </div>
              <div class="container-research">
                <div class="content-research">
                  <a
                    href="${data[i].content[j].link}" target = "blank"
                    >${data[i].content[j].name}</a>
                  <div>${data[i].content[j].author}</div>
                  <div>${data[i].content[j].article}</div>
                  <div>${data[i].content[j].day}</div>
                  <a
                    href="${data[i].content[j].pdf}" target = "blank"
                    >view PDF</a>
                    </div>
                </div>
            </div>
            `;
            }
          }
        }
        document.getElementById("research-show").innerHTML = output;
      });
  }
};
