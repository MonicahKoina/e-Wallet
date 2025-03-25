document.querySelector(".login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedUser = JSON.parse(localStorage.getItem("key"));

    if (!storedUser) {
        alert("User not found, Enter the right credentials");
        return;
    }
    if (email === storedUser.email && password === storedUser.password) {
        alert("Login Successfull")
        window.location.href = "../index.html"
    } else {
        alert("invalid email or password, please try again")
    }
})