const incBtn = document.querySelector(".increment");
const decBtn = document.querySelector(".decrement");
const reset = document.querySelector(".reset");
const sp = document.querySelector("span");

let count = 0;

incBtn.addEventListener("click", () => {
	if (count >= 20) {
		alert("You dont go more 20 onword")
		return;
	}
	count++;
	sp.textContent = count;
})

decBtn.addEventListener("click", () => {
	if (count <= 0) {
		alert("You dont go less 00 onword")
		return;
	}
	count--;
	sp.textContent = count;
})

reset.addEventListener("click", () => {
	sp.textContent = 0;
})