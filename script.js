let ctaForm = document.querySelector("form");

let email = document.querySelector("#email");

let emailParent = email.parentElement;

const regexTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

ctaForm.onsubmit = function validateEmail(e) {
    let emailValue = email.value;
    let errorMessage = document.createTextNode("Please enter a valid email address!");

    if (emailValue.trim() === "") {
        emailParent.querySelector("p").innerHTML = "";
        emailParent.querySelector("p").appendChild(errorMessage);
        e.preventDefault();
    } else if (regexTest.test(emailValue.trim()) === false) {
        emailParent.querySelector("p").innerHTML = "";
        emailParent.querySelector("p").appendChild(errorMessage);
        e.preventDefault();
    } else if (regexTest.test(emailValue.trim())) {
        // do nothing
    } else {
        emailParent.querySelector("p").innerHTML = "";
        emailParent.querySelector("p").appendChild(errorMessage);
        e.preventDefault();
    }
}

email.addEventListener("click", function() {
    removeErrorAlert();
});

function removeErrorAlert() {
    emailParent.querySelector("p").innerHTML = "";
}