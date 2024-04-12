const submitButton = document.getElementById("submit-foodcard");
const foodname = document.getElementById("foodname");
const desc = document.getElementById("desc");
const imagelink = document.getElementById("imagelink");
const ranking = document.getElementById("ranking");

const validateForm = () => {
	console.log(foodname);
	console.log(desc);
	console.log(imagelink);
	console.log(ranking);
} 

submitButton.addEventListener("click", validateForm);