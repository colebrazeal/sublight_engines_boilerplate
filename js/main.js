const toggleButton = document.getElementsByClassName("toggle-button")[0];
const nav = document.getElementsByClassName("nav")[0];

toggleButton.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const nname = document.getElementById("request_fullname");
const email = document.getElementById("request_email");
const phone_number = document.getElementById("phone_number");
const form = document.getElementById("form");
const nameError = document.getElementById("name_error");
const emailError = document.getElementById("email_error");
const phoneError = document.getElementById("phone_error");
const submit = document.getElementById("submit");

form.addEventListener("submit", function (e) {
  let pattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
  let currentValue = nname.value;
  let valid = pattern.test(currentValue);

  let email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let emailValue = email.value;
  let validEmail = email_pattern.test(emailValue);

  let phone_pattern = /\d{3}[ -]?\d{3}[ -]?\d{4}/;
  let phoneValue = phone_number.value;
  let validNumber = phone_pattern.test(phoneValue);

  if (valid && validEmail && validNumber) {
    console.log("reset");
    nameError.style.visibility = "hidden";
    emailError.style.visibility = "hidden";
    phoneError.style.visibility = "hidden";
    alert("FORM SUCCESSFULLY SUBMITTED!!!");
    return true;
  }

  if (!valid) {
    nameError.style.visibility = "visible";
    console.log("name");
    e.preventDefault();
  } 

  if (!validEmail) {
      emailError.style.visibility = "visible";
    console.log("email");
    e.preventDefault();
  }

  if (!validNumber) {
    phoneError.style.visibility = "visible";
    e.preventDefault();
    return false;
  }

});

// HIDE ON INPUT 
nname.addEventListener("input", function () {
  let pattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
  let currentValue = nname.value;
  let valid = pattern.test(currentValue);

  if (valid) {
    console.log("input");
    nameError.style.visibility = "hidden";
  }

});

email.addEventListener("input", function() {
    let email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let emailValue = email.value;
  let validEmail = email_pattern.test(emailValue);

    if (validEmail) {
        emailError.style.visibility = "hidden";
    }
});

phone_number.addEventListener("input", function() {
    let phone_pattern = /\d{3}[ -]?\d{3}[ -]?\d{4}/;
  let phoneValue = phone_number.value;
  let validNumber = phone_pattern.test(phoneValue);

  if (validNumber) {
      phoneError.style.visibility = "hidden";
  }
});
