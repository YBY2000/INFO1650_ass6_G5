var users;

// Define handleLogIn function
function handleLogIn() {
    const account = document.getElementById("inputEmail3").value;
    const passcode = document.getElementById("inputPassword3").value;
    console.log(account);
    console.log(passcode);
    console.log("passcode");
    // users里有用户信息
    // 遍历users，判断是否有匹配的用户
    if (users.some(user => user.account === account && user.passcode === passcode)) {
        // 登录成功
        // 保存用户信息
        localStorage.setItem("user", JSON.stringify(users.find(user => user.account === account && user.passcode === passcode)));
        // 页面跳转
        // window.location.href = "./home.html";
        window.location.href = "test.html";
    } else {
        // 登录失败 显示错误信息
        alert("Invalid account or password.");
    }
}

(async function () {
    try {
        var response = await fetch("../mock/user.json");
        users = await response.json();
        // 判断登录
        if (!localStorage.getItem("user")) {
            // 一些dom操作
            // 未登录逻辑 -- 显示需要登录的提示
        } else {
            // 已登录逻辑 -- 显示用户信息
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
})();