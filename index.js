"use-strict";

const submitButton = document.querySelector(".subscribeButton");
const dismissButton = document.querySelector(".dismissButton");
const formContainer = document.querySelector(".formWrapper");
const successContainer = document.querySelector(".successWrapper");
const inputEl = document.querySelector("form input");
const errorMsg = document.querySelector(".error p");

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitButton.addEventListener("click", (event) => {

    const email = inputEl.value.trim();
    if (email === "") {
        errorMsg.textContent = "Email cannot be empty";
        inputEl.style.borderColor = "hsl(4, 100%, 67%)";
    } 
    else if (!isValidEmail(email)) {
        errorMsg.textContent = "Valid email required";
        inputEl.style.borderColor = "hsl(4, 100%, 67%)";
    } 
    else{
        formContainer.classList.add("hide");
        successContainer.classList.remove("hide");  
    }
})

dismissButton.addEventListener("click", (event) => {
    successContainer.classList.add("hide");
    formContainer.classList.remove("hide");
    inputEl.value = "";
    errorMsg.textContent = "";
})