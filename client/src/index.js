let body = document.querySelector("body");
let vertically = document.querySelector(".horizontally");
let horizontally = document.querySelector(".vertically");

body.onmousemove = (a) => {
    let clientX = a.clientX
    let clientY = a.clientY
    vertically.style.left = `${clientX-3}px`;
    vertically.style.top = `${clientY-24}px`;
    horizontally.style.left = `${clientX-26}px`;
    horizontally.style.top = `${clientY-3}px`;
}