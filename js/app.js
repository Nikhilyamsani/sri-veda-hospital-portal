const loginForm = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("Login form submitted");
});
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
if (emailValue === "") {
    emailError.innerText = "Email address is required.";
}

if (passwordValue === "") {
    passwordError.innerText = "Password is required";
}
