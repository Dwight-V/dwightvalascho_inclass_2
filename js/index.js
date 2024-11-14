let btnA = document.querySelector("#btn-a");
let btnB = document.querySelector("#btn-b");
let btnC = document.querySelector("#btn-c");

let btnHideA = document.querySelector("#btn-hide-a");
let btnHideB = document.querySelector("#btn-hide-b");
let btnHideC = document.querySelector("#btn-hide-c");

let imgA = document.querySelector("#img-a");
let imgB = document.querySelector("#img-b");
let imgC = document.querySelector("#img-c");

btnA.addEventListener("click", (e) => {
    imgA.style.visibility="visible";
});

btnB.addEventListener("click", (e) => {
    imgB.style.visibility="visible";
});

btnC.addEventListener("click", (e) => {
    imgC.style.visibility="visible";
});


btnHideA.addEventListener("click", (e) => {
    imgA.style.visibility="hidden";
});

btnHideB.addEventListener("click", (e) => {
    imgB.style.visibility="hidden";
});

btnHideC.addEventListener("click", (e) => {
    imgC.style.visibility="hidden";
});