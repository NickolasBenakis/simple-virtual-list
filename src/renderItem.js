export default index => {
	// let child = document.createElement("div");
	// child.innerHTML = `I am the ${index} Element`;
	// child.id = index;
	// child.classList.add("card");
	// child.style.height = "450px";
	// child.style.width = "300px";
	// return child;
	return `<div id=${index} style="height:450px;width:350px;">I am the ${index} Element</div>`;
};
