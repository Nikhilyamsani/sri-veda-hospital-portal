
const loginForm = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const loginMessage = document.getElementById("loginMessage");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailValue = email.value.trim();
    const passwordValue = password.value;

    // Validate email
    if (emailValue === "") {
        emailError.innerText = "Email address is required.";
        email.classList.add("input-error");
    } else if (!emailPattern.test(emailValue)) {
        emailError.innerText = "Enter a valid email address.";
        email.classList.add("input-error");
    } else {
        emailError.innerText = "";
        email.classList.remove("input-error");
    }

    // Validate password
    if (passwordValue.trim() === "") {
        passwordError.innerText = "Password is required.";
        password.classList.add("input-error");
    } else if (passwordValue.length < 6) {
        passwordError.innerText =
            "Password must be at least 6 characters.";
        password.classList.add("input-error");
    } else {
        passwordError.innerText = "";
        password.classList.remove("input-error");
    }

    const emailValid =
        emailValue !== "" && emailPattern.test(emailValue);

    const passwordValid =
        passwordValue.trim() !== "" && passwordValue.length >= 6;

    if (emailValid && passwordValid) {
        loginMessage.innerText = "Form validation successful.";
        loginMessage.style.color = "green";
    } else {
        loginMessage.innerText = "";
    }
});
