const submitButton = document.getElementById("submit-foodcard");


const validateForm = () => {
	const foodname = document.getElementById("foodname").value;
	const desc = document.getElementById("desc").value;
	const imagelink = document.getElementById("imagelink").value;
	const ranking = document.getElementById("ranking").value;
	let alertmsg = "Invalid value/s found:";

	const valid_foodname = foodname != "";
	if(!valid_foodname){
		alertmsg += "\n >Food name must not be empty."
	}

	const valid_desc = desc != "";
	if(!valid_desc){
		alertmsg += "\n >Description must not be empty."
	}

	const valid_imagelink = imagelink != "";
	if(!valid_imagelink){
		alertmsg += "\n >Image URL must not be empty."
	}

	let valid_ranking = false;
	if (ranking == "") {
		alertmsg += "\n >Food name must not be empty."
	}
	else{
		valid_ranking = Number(ranking) > 0;
		if(!valid_ranking){
			alertmsg += "\n >Food name must be a non-zero positive integer."
		}
	}
	
	if(alertmsg != "Invalid value/s found:"){
		alert(alertmsg);
	}
	else{
		alert("Valid");
	}

	console.log({foodname, valid_foodname});
	console.log({desc, valid_desc});
	console.log({imagelink, valid_imagelink});
	console.log({ranking, valid_ranking});

	// alert("Form Validated");
} 

submitButton.addEventListener("click", validateForm);