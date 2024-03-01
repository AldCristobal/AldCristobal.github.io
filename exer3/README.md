**Name:** Cristobal, Aldrine Drebb L.<br/>
**Section:** UV-3L <br/>

## Code Description

Simulation of a password validation program using JavaScript.

## Functionalities
**Functions:** <br/>
*passValidation(pw1, pw2)*<br/>
A function for validating a password by going through three checks. Accepts two strings representing the password and its reentry value. Passwords must match, a password must have at least 8 characters, and a password must have at least one number, lowercase and uppercase character. Returns a boolean value.<br/>

*passReversion(pw)*<br/>
Returns the reversed form of a password. Accepts a string to be treated as the password to reverse. The function iterates from the last index to the first to generate the desired output. Returns the reversed password. <br/>

*passChange(inputName, pw1, pw2)*<br/>
A function that returns an object containing two attributes, name and newpassword. Validates the input passwords using *passValidation*. If valid, sets the newpassword value to the output of *passReversion(pw1)*. Else, sets the newpassword to the value of pw1. inputName is used as the value of name attribute.  <br/>

## Commit Log

1. *added exer folder partitions* - reorganized repository as exercise submission bin
2. *added README*
3. *added passValidation, passReversion, and passChange functions and their test cases* - functions required for the exercise
4. *rename try.js to index.js*
5. *changed passValidation from RegEx to iterated checking* - missed a specification banning the use of Regular Expressions
6. *added README for /exer3*

## References

JavaScript Basics pt1 - https://docs.google.com/document/d/1vI3SFppFYUlfzgcS6nzlT2yQIhmHV3B_ATDw23ppJzA/edit <br/>