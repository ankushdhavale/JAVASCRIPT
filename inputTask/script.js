const titleInp = document.querySelector(".title");
const imgInp = document.querySelector(".img");
const addBtn = document.querySelector("button");
const mainDiv = document.querySelector("#main");

addBtn.addEventListener("click", () => {
	if (imgInp.value === "" && titleInp.value === "") {
		alert("Please put the Input Value");
		alert("Please put the Input Value");
		return;
	}
	const para = document.createElement("p");
	const img = document.createElement("img");
	const div = document.createElement("div");
	img.src = `${imgInp.value}`;
	console.log(imgInp.value);
	div.classList = "sub-div";
	img.alt = "Please can Add correct img Url";
	para.classList = "para";
	para.textContent = titleInp.value;
	mainDiv.appendChild(para);
	div.append(para, img);
	mainDiv.appendChild(div);
	imgInp.value = "";
	titleInp.value = "";
})

