document.addEventListener("DOMContentLoaded", function () {
  // 检查是否已登录的标识
  // 你需要根据你的后端来设定这个值
  let isLoggedIn = false;

  // 获取nav-profile元素
  const navProfile = document.querySelector(".nav-profile");

  // 根据是否已登录来更改nav-profile的内容
  if (isLoggedIn) {
    // 如果用户已登录，显示现有的nav-profile（或者不做任何事情）
  } else {
    // 如果用户未登录，显示"Login/SignUp"按钮
    navProfile.innerHTML =
      '<a href="#" class="d-block link-body-emphasis text-decoration-none">LOGIN/SIGNUP</a>';
  }
});
