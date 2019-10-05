export function makeElements() {
	//const root = document.getElementById("content");
	const data = [];
	for (let i = 0; i < 25; i++) {
		const child = document.createElement("div");
		child.innerHTML = `I am the ${i} Element`;
		child.classList.add("card");
		child.style.height = "450px";
		child.style.width = "300px";
		data.push(child);
	}
	return data;
}
