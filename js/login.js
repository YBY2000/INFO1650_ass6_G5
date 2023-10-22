<<<<<<< HEAD

// 如果验证不通过禁止提交表单
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // 获取表单验证样式
        var forms = document.getElementsByClassName('needs-validation');
        // 循环并禁止提交
        var validation = Array.prototype.filter.call(forms, function (form) {
            // 获取表单内的所有输入元素
            var inputs = form.getElementsByTagName('input');
            for (var i = 0; i < inputs.length; i++) {
                // 为每个输入元素添加input事件监听器
                inputs[i].addEventListener('input', function () {
                    // 如果输入无效，则添加was-validated类，这将触发Bootstrap的验证样式
                    form.classList.add('was-validated');
                });
            }
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    handleLogIn()
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
var users;

const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        '<div class="alert alert-' + type + ' alert-dismissible" role="alert">',
        '   <div>' + message + '</div>',
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper);
};
// Define handleLogIn function
function handleLogIn() {
    event.preventDefault();
    const account = document.getElementById("inputEmail3").value;
    const passcode = document.getElementById("inputPassword3").value;

=======
var users;

// Define handleLogIn function
function handleLogIn() {
    const account = document.getElementById("inputEmail3").value;
    const passcode = document.getElementById("inputPassword3").value;
    console.log(account);
    console.log(passcode);
    console.log("passcode");
>>>>>>> 6988b9ba7c572059f4c5f8ea54f77d4ee89bba01
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
<<<<<<< HEAD
        appendAlert('Invalid account or password.', 'danger');
=======
        alert("Invalid account or password.");
>>>>>>> 6988b9ba7c572059f4c5f8ea54f77d4ee89bba01
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