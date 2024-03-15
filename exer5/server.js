import express from 'express';
import { appendFile, existsSync, writeFile } from 'node:fs';

// instantiate the server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let bookList = []
let books = {
	bookname: "",
	isbn: "",
	author: "",
	pubyear: "",
}

function invalidReq(res, remarks) {
	// console.log();
	
	res.send({
		success: false,
	});
	console.log(remarks);
}

app.post('/add-book', (req, res) => {
	console.log();
	
	let request = req.body;
	if (!request.bookname){
		invalidReq(res, "Invalid Book name.")
		return;
	}
	if (!request.isbn){
		invalidReq(res, "Invalid ISBN.")
		return;
	}
	if (!request.author){
		invalidReq(res, "Invalid Author.")
		return;
	}
	if (!request.pubyear){
		invalidReq(res, "Invalid Publication year.")
		return;
	}
	
	for(let i = 0; i<bookList.length; i++){
		if(bookList[i].isbn==request.isbn){
			invalidReq(res, "Duplicate ISBN.")
			return;
		}
	}

	console.log(request.bookname);
	console.log(request.isbn);
	console.log(request.author);
	console.log(request.pubyear);
	

	let book = {
		bookname: request.bookname,
		isbn: request.isbn,
		author: request.author,
		pubyear: request.pubyear,
	}
	bookList.push(book);

	//set the log, user.txt
	const file = "./books.txt";
	let data =  request.bookname+","+
				request.isbn+","+
				request.author+","+
				request.pubyear.toString();

	//check if the log exists
	if (!existsSync(file)){

		//rewrite if true
		writeFile(file, data, (err) => {
			if (err) throw err;
			console.log('The request has been saved!');
		  });
	}else{

		//file exists, we can append
		appendFile(file, data+"\n", (err) => {
			if (err) throw err;
			console.log('The request has been saved!');
		}); 
	}

	res.send({
		success: true,
	});
});

app.get('/find-by-isbn-author',(req,res)=>{
	
	let request = req.query;
	console.log(request);

	if(!request.isbn){
		invalidReq(res, "Invalid ISBN.");
		return;
	}
	if(!request.author){
		invalidReq(res, "Invalid Author.")
		return;
	}

	let exists = false;

	for(let i = 0; i<bookList.length; i++){
		if(bookList[i].isbn==request.isbn&&bookList[i].author==request.author){
			res.send(bookList[i]);
			exists = true;
		}
	}

	if(!exists){
		res.send("Book entry with ISBN: "+request.isbn+" and Author: "+request.author+" does not exist.");
	}

});

app.get('/find-by-author',(req,res)=>{
	
	let request = req.query;
	console.log(request);

	if(!request.author){
		invalidReq(res, "Invalid Author.")
		return;
	}

	let exists = false; 

	for(let i = 0; i<bookList.length; i++){
		if(bookList[i].author==request.author){
			res.send(bookList[i]);
			exists = true;
		}
	}

	if(!exists){
		res.send("Book entry with author: "+request.author+" does not exist.");
	}

});
// this tells our server to listen to the port 3000
// we can also pass an optional callback function to execute after the server starts
app.listen(3000, () => { console.log('Server started at port 3000')} );