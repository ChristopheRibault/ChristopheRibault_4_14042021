function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData > input");
const validTag = document.querySelector(".form-validated");
const form = document.querySelector(".modal-body > form")

// Set data-error-visible
function toggleDataError(input){
  input.parentElement.setAttribute("data-error-visible", !input.checkValidity())
}

// formData validation
function showValidation(e) {
  toggleDataError(e.target)
}
formData.forEach((el) => el.addEventListener("blur", showValidation));

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Submit form
function validate(e) {
  e.preventDefault();

  let formIsValid = true;
  
  for (const input of document.forms.reserve.elements) {
    toggleDataError(input);
    if (!input.checkValidity()) {
      formIsValid = false;
    }
  }

  if (formIsValid) {
    validTag.style.display = "block";
    return true;
  }

  return false;
}

