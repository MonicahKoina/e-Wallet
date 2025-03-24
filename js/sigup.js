document.getElementById("signup").addEventListener("submit", function (event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (confirmPassword !== password) {
        alert("Password do not match!")
        return;
    }

    console.log("Firn name : ", firstName);
    console.log("Last name : ", lastName);
    console.log("Email address : ", email);
    console.log("User Password : ", password)
    alert("Account created successfully!")

})