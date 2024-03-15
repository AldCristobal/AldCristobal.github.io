import needle from 'needle';
let sampleTests = [
	["Harry Potter and the Philosopher’s Stone",	"978-0-7475-3269-9",	"J.K Rowling",				1997],
	["Harry Potter and the Chamber of Secrets",		"0-7475-3849-2",		"J.K Rowling",				1998],
	["The Little Prince",							"978-0156012195",		"Antoine Saint-Exupery",	1943],
	
	["",											"978-0-7475-3269-9",	"J.K Rowling",				1997],
	["Harry Potter and the Chamber of Secrets",		"",						"J.K Rowling",				1998],
	["The Little Prince",							"978-0156012195",		"",							1943],
	["The Little Prince",							"978-0156012195",		"Antoine Saint-Exupery",	],
	
]

for (let i=0; i<sampleTests.length; i++){
	needle.post(
		'http://localhost:3000/add-book',
		{
			bookname:sampleTests[i][0],
			isbn:sampleTests[i][1],
			author:sampleTests[i][2],
			pubyear:sampleTests[i][3],
		}, (err, res) =>{
			console.log(res.body);
		}
	);
	
}