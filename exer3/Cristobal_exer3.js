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
	let uc = 0, lc = 0, num = 0
	for(let i = 0; i < pw1.length; i++){
		if(!isNaN(pw1[i] * 1)){
			//number
			num = 1;	
		}
		else if(pw1[i] == pw1[i].toLowerCase()){
			//lowercase
			lc = 1;
		}else if(pw1[i] == pw1[i].toUpperCase()){
			//uppercase
			uc = 1;
		}
	}//error message
	if(uc==0){
		if (err == 1){
			errSTR += ","
		}
		errSTR += " 1 uppercase character";
		err = 1;
	}
	if(lc==0){
		if (err == 1){
			errSTR += ","
		}
		errSTR += " 1 lowercase character";
		err = 1;
	}
	if(num==0){
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
				["1baababA","1baababB"],["Pass1234","Pass1234"],["Pass1234","Pass12345"]]
pvtcDescription = [	"|| SAME PASSWORD, INSUFFICIENT LENGTH, W/O NUMBER AND UPPERCASE ||",
					"|| DIFF PASSWORD, INSUFFICIENT LENGTH, W/O NUMBER AND UPPERCASE ||",
					"|| SAME PASSWORD, SUFFICIENT LENGTH, W/O NUMBER AND UPPERCASE ||",
					"|| DIFF PASSWORD, SUFFICIENT LENGTH, W/O NUMBER AND UPPERCASE ||",
					"|| SAME PASSWORD, SUFFICIENT LENGTH, W/O NUMBER ||",
					"|| DIFF PASSWORD, SUFFICIENT LENGTH, W/O NUMBER ||",
					"|| SAME PASSWORD, SUFFICIENT LENGTH ||",
					"|| DIFF PASSWORD, SUFFICIENT LENGTH ||",
					"|| SAMPLE TEST CASE 1 ||",
					"|| SAMPLE TEST CASE 2 ||"]
// for (let i = 0; i<pvTestCases.length; i++){
// 	console.log(">>>"+pvTestCases[i][0]+" "+pvTestCases[i][1]);
// 	passValidation(pvTestCases[i][0],pvTestCases[i][1]);
// }

//returns the reversed string pw
function passReversion(pw) {
	//iterate from last char to first char of input pw
	let revPass = ""
	for(let i = pw.length-1; i > -1; i--){
		revPass += pw[i];
	}
	console.log("--Reversed: "+revPass);
	return revPass;
}
//passReversion test cases
// for (let i = 0; i<pvTestCases.length; i++){
// 	console.log(">>>"+pvTestCases[i][0]);
// 	passReversion(pvTestCases[i][0]);
// }

//accepts 3 string params, name, password 1 and 2
//validate the passwords, if validated, reverse the password 
//else, use the first password
//they are to be used for the newpassword value of an object with the name as name attribute
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
//passChange test cases
for (let i = 0; i<pvTestCases.length; i++){
	console.log(pvtcDescription[i]);
	console.log(">>>"+pvTestCases[i][0]+" "+pvTestCases[i][1]);
	console.log(passChange("John",pvTestCases[i][0],pvTestCases[i][1]));
	console.log("\n");
}