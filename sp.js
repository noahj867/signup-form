let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");

let inputs = document.querySelectorAll("input");

inputs.forEach(input => input.addEventListener("input", checkPassword));

let passwordError = document.createElement("div");
password.parentNode.appendChild(passwordError);



function checkPassword() {
    if (password.value === "" && confirmPassword.value === "" ) {
        passwordError.textContent = ""
    }
    if (password.value !== confirmPassword.value) {
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
        passwordError.textContent = "* passwords don't match";
        passwordError.style.color = "red";
        passwordError.style.fontSize = "10px";
    } 
    else if (password.value === confirmPassword.value) {
        password.style.borderColor = "black";
        confirmPassword.style.borderColor = "black";
    } 
}