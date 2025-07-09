const div = document.querySelector(".container");
const btnShow = document.querySelector(".disappear");
const btnHide = document.querySelector(".appear");

btnHide.addEventListener("click", () => {
	div.style.display = "none";
})

btnShow.addEventListener("click", () => {
	div.style.display = "block";
})