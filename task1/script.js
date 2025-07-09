const div = document.querySelector(".container");
const changeColor = document.querySelector(".ChangeColor");



changeColor.addEventListener("click", () => {
	const randomColor = Math.ceil(Math.random() * 1000000);
	console.log(randomColor);
	div.style.background = `#${randomColor}`;
	document.body.style.background = `#${randomColor * 7}`;
	div.style.border = `1px solid #${randomColor * 8}`;
})