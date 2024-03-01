//for validating if 2 passwords match, accepting 2 string params
//>if 2 passwords match
//>has atleast 8 characters
//>has atleast 1 number, 1 uppercase, and 1 lowercase
//else, return false
function passValidation(pw1, pw2) {
	//check if matching
	if (pw1 != pw2){
		console.log("Passwords do not match.");
		return false;
	}

	//check each validity and report all missing reqs at once
	let errSTR = "Password must have at least";
	let err = 0;
	if(pw1.length<8){
		errSTR += " 8 characters";
		err = 1;
	}
	if(/[A-Z]/.test(pw1)==false){
		if (err == 1){
			errSTR += ","
		}
		errSTR += " 1 uppercase character";
		err = 1;
	}
	if(/[a-z]/.test(pw1)==false){
		if (err == 1){
			errSTR += ","
		}
		errSTR += " 1 lowercase character";
		err = 1;
	}
	if(/[0-9]/.test(pw1)==false){
		if (err == 1){
			errSTR += ","
		}
		errSTR += " 1 number";
		err = 1;
	}
	if (err == 1){
		console.log(errSTR+".");
		return false;
	}
	console.log("Valid Password.")
	return true;
}
//pass validation test cases
pvTestCases = [	["a","a"],["a","b"],["abaababa","abaababa"],["abaababa","abaababb"],
				["abaababA","abaababA"],["abaababA","abaababB"],["1baababA","1baababA"],
				["1baababA","1baababB"],["1baababA2","1baababA2"],["1baababA2","1baababB2"]]
// for (let i = 0; i<pvTestCases.length; i++){
// 	console.log(">>>"+pvTestCases[i][0]+" "+pvTestCases[i][1]);
// 	passValidation(pvTestCases[i][0],pvTestCases[i][1]);
// }

//returns the reversed string pw
function passReversion(pw) {
	let revPass = ""
	for(let i = pw.length-1; i > -1; i--){
		revPass += pw[i];
	}
	console.log(revPass);
	return revPass;
}
// for (let i = 0; i<pvTestCases.length; i++){
// 	console.log(">>>"+pvTestCases[i][0]);
// 	passReversion(pvTestCases[i][0]);
// }

//
function passChange(inputName, pw1, pw2) {
	let newPass = pw1;
	if (passValidation(pw1,pw2)){
		newPass = passReversion(pw1);
	}
	const account = {
		name: inputName,
		newpassword: newPass
	}
	return account;
}

for (let i = 0; i<pvTestCases.length; i++){
	console.log(">>>"+pvTestCases[i][0]+" "+pvTestCases[i][1]);
	console.log(passChange("AC",pvTestCases[i][0],pvTestCases[i][1]));
}

