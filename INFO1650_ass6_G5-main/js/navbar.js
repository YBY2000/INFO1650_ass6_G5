var nav_bar = new Vue({
  el: "#navbar",
  data: {
    isLoggedIn: window.localStorage.getItem("user") ? true : false,
    user: window.localStorage.getItem("user")
      ? JSON.parse(window.localStorage.getItem("user"))
      : null,
  },
});

function handleLogOut() {
  window.localStorage.removeItem("user");
  window.location.href = "login.html";
}

function pageSwitch(id) {
  window.location.href = "detail.html?id=" + id;
}

//
//

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-form");
  const searchButton = document.querySelector(".search-button");
  const dropdown = document.getElementById("dropdown");

  // 清空下拉列表
  function clearDropdown() {
    dropdown.innerHTML = "";
  }

  // 为搜索按钮添加功能
  searchButton.addEventListener("click", function () {
    const query = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".card");
    cards.forEach(function (card) {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      if (title.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  // 实时搜索并填充下拉列表
  searchInput.addEventListener("input", function (e) {
    const query = e.target.value.toLowerCase();
    const cards = document.querySelectorAll(".card");
    clearDropdown();

    cards.forEach(function (card, index) {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      if (title.includes(query)) {
        const dropdownItem = document.createElement("a");
        dropdownItem.classList.add("dropdown-item");
        dropdownItem.href = "#";
        dropdownItem.textContent = title;
        dropdownItem.addEventListener("click", function () {
          card.click(); // 触发卡片的点击事件
        });
        dropdown.appendChild(dropdownItem);
      }
    });
  });
});

//储存页面title
document.addEventListener("DOMContentLoaded", function () {
  // 获取所有的 .card-title 元素
  const cardTitles = document.querySelectorAll(".card-title");
  const titlesArray = [];

  // 将所有的标题存储在 titlesArray 数组中
  cardTitles.forEach((card) => {
    titlesArray.push(card.textContent);
  });

  // 将 titlesArray 存储在 localStorage
  localStorage.setItem("cardTitles", JSON.stringify(titlesArray));
});
