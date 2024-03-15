import needle from 'needle';
let sampleTestsPOST = [
	["Harry Potter and the Philosopher’s Stone",	"978-0-7475-3269-9",	"J.K Rowling",				1997],
	["Harry Potter and the Chamber of Secrets",		"0-7475-3849-2",		"J.K Rowling",				1998],
	["The Little Prince",							"978-0156012195",		"Antoine Saint-Exupery",	1943],
	
	["",											"978-0-7475-3269-9",	"J.K Rowling",				1997],
	["Harry Potter and the Chamber of Secrets",		"",						"J.K Rowling",				1998],
	["The Little Prince",							"978-0156012195",		"",							1943],
	["The Little Prince",							"978-0156012195",		"Antoine Saint-Exupery",	],
	
]

let sampleTestsGETia = [
	["978-0-7475-3269-9",	"J.K Rowling"],
	["0-7475-3849-2",		"J.K Rowling"],
	["978-0156012195",		"Antoine Saint-Exupery"],
	
	["",					"J.K Rowling"],
	["978-0156012195",		""],
	["978-0156012195",		"Antoine Saint-Exuperys"],
	
]

for (let i=0; i<sampleTestsPOST.length; i++){
	needle.post(
		'http://localhost:3000/add-book',
		{
			bookname:sampleTestsPOST[i][0],
			isbn:sampleTestsPOST[i][1],
			author:sampleTestsPOST[i][2],
			pubyear:sampleTestsPOST[i][3],
		}, (err, res) =>{
			console.log(res.body);
		}
	);
	
}

for (let i=0; i<sampleTestsGETia.length; i++){
	needle.get(
		'http://localhost:3000/find-by-isbn-author?isbn='+sampleTestsGETia[i][0]+"&author="+sampleTestsGETia[i][1],
		(err, res) =>{
			console.log(res.body);
		}
	);
	
}

for (let i=0; i<sampleTestsGETia.length; i++){
	needle.get(
		'http://localhost:3000/find-by-author?author='+sampleTestsGETia[i][1],
		(err, res) =>{
			console.log(res.body);
		}
	);
	
}