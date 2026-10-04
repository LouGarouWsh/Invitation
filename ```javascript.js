```javascript
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const questionPage = document.getElementById("question");
const datesPage = document.getElementById("dates");
const confirmationPage = document.getElementById("confirmation");

const selectedDate = document.getElementById("selectedDate");


// ===============================
// BOUTON NON QUI FUIT
// ===============================

function moveNoButton() {

    const maxX = window.innerWidth - noButton.offsetWidth - 30;
    const maxY = window.innerHeight - noButton.offsetHeight - 30;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noButton.style.position = "fixed";

    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}


// Sur ordinateur
noButton.addEventListener("mouseenter", moveNoButton);

// Sur téléphone
noButton.addEventListener("touchstart", function(event) {

    event.preventDefault();

    moveNoButton();

});


// Si elle réussit quand même à cliquer
noButton.addEventListener("click", function(event) {

    event.preventDefault();

    moveNoButton();

});


// ===============================
// BOUTON OUI
// ===============================

yesButton.addEventListener("click", function() {

    questionPage.classList.remove("active");

    datesPage.classList.add("active");

});


// ===============================
// CHOIX DU CRÉNEAU
// ===============================

const dateButtons = document.querySelectorAll(".date");

dateButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const date = button.dataset.date;

        selectedDate.textContent = date;

        datesPage.classList.remove("active");

        confirmationPage.classList.add("active");

    });

});
```
