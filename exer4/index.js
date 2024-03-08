
//uses ES modules
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFile, existsSync, writeFile, statSync } from 'node:fs';

//returns a uniqueID using firstname[0] + lastname + random string of length 8
const generateUniqueID = (firstName, lastName) => {
	return (firstName[0]+lastName).toLowerCase()+uuidv4().substring(0,8)
}

//logs a valid account in users.txt after series of validations
const addAccount = (inArr) => {
	
	//account details
	let data = "";

	//check if all fields are present
	if (inArr.length != 4){
		console.log("Invalid number of addAccount inputs.");
		return false;
	}

	//reference for field data types
	const fieldTypes = ["string", "string", "string", "number"];

	//cross check the data type of each fields/indices of the input array
	for (let i=0; i<inArr.length; i++){

		//data type mismatch
		if (typeof inArr[i]!=fieldTypes[i]){
			console.log("Invalid type of input, "+typeof inArr[i]+".");
			return false;
		}

		//string fields must not be empty
		if (inArr[i].length<1){
			console.log("Input "+(i+1)+" must not be empty.");
			return false;
		}

		//if pass, add to the string of data
		data += inArr[i]+",";
	}

	//use validator module for email verification
	if (!validator.isEmail(inArr[2])){
		console.log("Invalid email, "+inArr[2]);
		return false;
	}

	//age must be at least 18 years old
	if (inArr[3]<18){
		console.log("User must at least be of a certain age to add an account");
		return false;
	}

	//set the log, user.txt
	const file = "./user.txt";

	//generate and add the unique id
	data+=generateUniqueID(inArr[0],inArr[1]);

	//check if the log exists or is empty
	if (!existsSync(file) || statSync(file).size == 0){

		//rewrite if true
		writeFile(file, data, (err) => {
			if (err) throw err;
			console.log('The file has been saved!');
		  });
	}else{

		//file exists and is not empty, we can append
		appendFile(file, "\n"+data, (err) => {
			if (err) throw err;
			console.log('The file has been saved!');
		}); 
	}
	return true;
}

export {generateUniqueID, addAccount} 