const mainDiv = document.querySelector("#main");
const box = document.querySelector(".box");
const body = document.body;

document.addEventListener("mousemove", () => {
    box.style.transition = translateX(100);
})

