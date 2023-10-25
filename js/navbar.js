var nav_bar = new Vue({
  el: '#navbar',
  data: {
    isLoggedIn : window.localStorage.getItem("user") ? true : false,
    user: window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")) : null
  }
});

function handleLogOut() {
  window.localStorage.removeItem("user");
  window.location.href = 'login.html';
}

