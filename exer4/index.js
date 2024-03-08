import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFile, existsSync, writeFile, statSync } from 'node:fs';
// import { Buffer } from 'node:buffer';

const generateUniqueID = (firstName, lastName) => {
	return (firstName[0]+lastName).toLowerCase()+uuidv4().substring(0,8)
}

const addAccount = (inArr) => {
	let data = "";
	if (inArr.length != 4){
		console.log("Invalid number of addAccount inputs.");
		return false;
	}
	const fieldTypes = ["string", "string", "string", "number"];
	for (let i=0; i<inArr.length; i++){
		if (typeof inArr[i]!=fieldTypes[i]){
			console.log("Invalid type of input, "+typeof inArr[i]+".");
			return false;
		}
		if (inArr[i].length<1){
			console.log("Input "+(i+1)+" must not be empty.");
			return false;
		}
		data += inArr[i]+",";
	}
	if (!validator.isEmail(inArr[2])){
		console.log("Invalid email, "+inArr[2]);
		return false;
	}
	if (inArr[3]<18){
		console.log("User must at least be of a certain age to add an account");
		return false;
	}
	const file = "./user.txt";
	data+=generateUniqueID(inArr[0],inArr[1]);
	if (!existsSync(file) || statSync(file).size == 0){
		writeFile(file, data, (err) => {
			if (err) throw err;
			console.log('The file has been saved!');
		  });
	}else{
		appendFile(file, "\n"+data, (err) => {
			if (err) throw err;
			console.log('The file has been saved!');
		}); 
	}
	return true;
}

export {generateUniqueID, addAccount} 