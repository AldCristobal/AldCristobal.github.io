import { addAccount, generateUniqueID } from "./index.js";

//laboratory specifications example
console.log("Test Alan, Turing, aturing@w3c.vcom, 58");
console.log(addAccount(["Alan","Turing","aturing@w3c.vcom",58]));

console.log("Test Tim, Berners-Lee, tim@w3c.com, 25")
console.log(addAccount(["Tim","Berners-Lee","tim@w3c.com",25]))

console.log("Test Ted, Nelson,  ted.n@w3c.com, 43")
console.log(addAccount(["Ted","Nelson","ted.n@w3c.com",43]))