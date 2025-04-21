const AccountId= 100;
var accountName ="State Bank of India";
let accountHolderName = "ajit";
let accountType; // value will undefined because you didn't initalize/doesn't defined;
// accountId = 200; can't overwrite a value in const type variable;
console.table([AccountId,accountName, accountHolderName,accountType]);

if(true){
 var a=10;
 var a=20
 console.log(a);
}
console.log(a); 
/* Don't Declare Variables with var Keyword. Because it has functional scope. and redeclaration and initialization issues. 
*/

if(true){
    let b=10;
    let a=100;
    //var b=200; SyntaxError: Identifier 'b' has already been declared
    // let b=200 SyntaxError: Identifier 'b' has already been declared
    console.log(a);
    console.log(b);
    
}
// console.log(b); ReferenceError: b is not defined

//instead use let keyword it has functional scope and can't declare same variable name again