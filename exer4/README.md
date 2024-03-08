
**Name:** Cristobal, Aldrine Drebb L. <br/>
**Section:** UV-3L

## Code Description
Simulation of a password validation program using JavaScript.

## Code Specifications
The exercise objective is to make two JavaScript files, **index.js** and **test.js**. test.js will be used for testing index.js. ***Note****: use of RegEx is prohibited*  <br/><br/>

## Functionalities
***generateUniqueID(firstName, lastName)*** <br/>
Accepts two string inputs, treated as first name and last name of the user. Returns a unique id by concatenating, as lowercase, the firstName's first character, the lastName, and a random alphanumeric string of length 8 generated using *uuid* package. <br/>

***addAccount([firstName, lastName, email, age])*** <br/> 
Accepts an array containing the user's first name, last name, email and age respectively. The input must adhere to the following restrictions: 
- All fields must be present and filled
- Fields must follow the data type assigned to them, [string, string, string, number]
- String fields must not be empty
- Email must pass validation through *validator* package
- User must be of at least age 18

When conditions are met, the data is saved in a text file, *users.txt*, using the format: *firstName, lastName, email, age, uniqueID*. The function then returns true, else return false.<br/>

## Commit Log

1.  *added addAccount() and generateUniqueID()* - implementation of the program specifications
2.  *updated exer4 README and documentation* 
3.  *added inline documentation in index.js and test.js*

## References
 - https://www.npmjs.com/package/validator - validator module
 - https://www.npmjs.com/package/uuid - uuid module
 - https://nodejs.org/api/fs.html - built-in fs module
 - https://docs.google.com/document/d/14iRqiE95o2RrhcnYKAcvKl-5iCk9vT3dE-wpihHQryA/ - laboratory manual 
 - https://docs.google.com/document/d/1lc5O0y6C85ttEVF9bTq0oSv3nmEW3xEfusG7pdxi-aA/ - laboratory exercise specifications
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring - JavaScript substring method