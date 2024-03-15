import needle from 'needle';

needle.get('http://localhost:3000/', (err, res) => {
    console.log(res.body);   // prints the body of the response message. In this case, “Hello”
});
