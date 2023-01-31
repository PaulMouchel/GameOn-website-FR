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
const formData = document.querySelectorAll(".formData");
const closeModalBtns = document.querySelectorAll(".close")

const form = document.getElementById('form');
const controls = document.querySelectorAll(".text-control")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtns.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

form.addEventListener("submit", validate)

function validate(e) {
  e.preventDefault()

  let isValidate = true
  isValidate = validateName("first") && isValidate
  isValidate = validateName("last") && isValidate
  isValidate = validateEmail() && isValidate
  isValidate = validateBirthdate() && isValidate
  isValidate = validateQuantity() && isValidate
  isValidate = validateRadio() && isValidate
  isValidate = validateCheckboxes() && isValidate
  
}

function setError(htmlElement, message) {
  htmlElement.parentElement.setAttribute('data-error-visible', 'true');
  htmlElement.parentElement.setAttribute('data-error', message);
  return false
}

function resetError(htmlElement) {
  htmlElement.parentElement.setAttribute('data-error-visible', 'false');
  htmlElement.parentElement.setAttribute('data-error', '');
  return true
}

function validateName(id) {
  const htmlElement = document.getElementById(id)
  const value = htmlElement.value.trim()
  if (value.length < 2) return setError(htmlElement, 'Le champ doit contenir au moins 2 caractères');
  return resetError(htmlElement)
}

function validateEmail() {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const htmlElement = document.getElementById("email")
  const value = htmlElement.value.trim()
  if (!value.match(regex)) return setError(htmlElement, 'Email incorrect');
  return resetError(htmlElement)
}

function validateBirthdate() {
  const htmlElement = document.getElementById("birthdate")
  if (!htmlElement.value) return setError(htmlElement, 'Veuillez renseigner la date');
  return resetError(htmlElement)
}

function validateQuantity() {
  const htmlElement = document.getElementById("quantity")
  const value = htmlElement.value
  if (!value) return setError(htmlElement, 'La quantité doit être un nombre entier entre 0 et 99');
  const intValue = parseInt(value, 10)
  if (intValue < 0 || intValue > 99) return setError(htmlElement, 'La quantité doit être un nombre entier entre 0 et 99');
  return resetError(htmlElement)
}

function validateRadio() {
  const firstRadio = document.getElementById("location1")
  const htmlElement = document.querySelector('input[name="location"]:checked')
  if (!htmlElement) return setError(firstRadio, 'Veuillez selectionner un élément');
  return resetError(firstRadio)
}

function validateCheckboxes() {
  const checkbox = document.getElementById("checkbox1")
  if (!checkbox.checked) return setError(checkbox, "Veuillez accepter les conditions d'utilisation");
  return resetError(checkbox)
}