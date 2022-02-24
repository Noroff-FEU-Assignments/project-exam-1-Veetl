const Username = document.querySelector(".username");
const Email = document.querySelector(".email");
const Subject = document.querySelector(".subject");
const Content = document.querySelector(".content");


const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");
const error3 = document.querySelector(".error3");
const error4 = document.querySelector(".error4");





function validName() {
    if (Username.value.length >= 5) {
        error1.style.display = "none"
    } else {
        error1.style.display = "block"
    }
};
function validEmail(){
    if (Email.value.includes("@") && (Email.value.includes("."))) {
        error2.style.display ="none"
    } else {
        error2.style.display ="block"
    }
};
function validSubject() {
    if (Subject.value.length >= 15) {
        error3.style.display = "none"
    } else {
        error3.style.display = "block"
    }
};
function validContent() {
    if (Content.value.length >= 25) {
        error4.style.display = "none"
    } else {
        error4.style.display = "block"
    }
};
