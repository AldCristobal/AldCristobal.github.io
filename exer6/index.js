import mongoose from 'mongoose';

// connection string
await mongoose.connect('mongodb://127.0.0.1:27017/StudentDatabase', { useNewUrlParser: true, useUnifiedTopology: true });
console.log("Connection success");

// Subject model
const Student = mongoose.model('Student', {
	stdnum: String,
	fname: String,
	lname: String,
	age: Number
  });

//   POST /save-student
//   Main feature of this endpoint is to save a new student in the database, if success then returns an object {inserted:true}, otherwise {inserted:false}
//   Assume that the user inputs the complete details of the student.
//   Create 5 different students including Mary Jane Watson.


//   POST /update
//   Search for an existing student’s fname (e.g. “Mary Jane”)
//   Update the student’s fname using the .updateOne() method.
//   Update her last name to Parker


//   POST /remove-user
//   Removes a specific user using deleteOne method.
//   Example: await Student.deleteOne({stdnum: ‘8051495845’})


//   POST /remove-all-user
//   Removes all users using deleteMany method.
//   If successful, send an object {deleted:true}, otherwise {deleted:false}, check the return object of the model (acknowledge/deleteCount)


//   GET /user
//   Searches user by the username. It should return an array of JSON objects containing the user. otherwise an empty array.
//   Example: http://localhost:3000/user?stdnum=‘8051495845’


//   GET /members
//   returns an array of JSON objects containing all users, otherwise an empty array.
  


