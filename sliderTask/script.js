const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const img = document.querySelector("img");

const images = [
	"https://plus.unsplash.com/premium_photo-1676070096139-66df1c816625?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyJTIwd2FsbHBhcGVyJTIwaGR8ZW58MHx8MHx8fDA%3D",
	"https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlciUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9c2CRA2nQLz_lBrUlpOoAishBSwQJJ9XnGOEuJO0n5hLKQ47R4CbLhMQ&s",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsydVlrKFnDpui2ZU_3cAgDrDSI-Flkis3zQ&s",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsydVlrKFnDpui2ZU_3cAgDrDSI-Flkis3zQ&s",
	"https://img.freepik.com/free-photo/closeup-shot-purple-flower_181624-25863.jpg?semt=ais_hybrid&w=740",
]


const randomIndex = () => {
	let index = Math.floor(Math.random() * images.length);
	return index;
}

prev.addEventListener("click", () => {
	let indexValue = randomIndex();
	img.src = `${images[indexValue]}`
})

next.addEventListener("click", () => {
	let indexValue = randomIndex();
	img.src = `${images[indexValue]}`
})