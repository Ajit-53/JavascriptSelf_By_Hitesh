// function test(){
//     console.log("inside test");
    
// }
// test();

// function addTwoNumber(number1, number2){
//     console.log(number1+number2);
//     console.log(number1-number2);
 
    
// }
// addTwoNumber(3,4) //7,-1
// addTwoNumber(3,"a")// 3a, + is used here as concatenation. But - will try to convert string to number if possible. it will return response. otherwise gives NaN. not a number
// addTwoNumber("3",4) // 34, -1

// function addTwoNumber(number1, number2){
    
//     return number1+number2;
    
// }

// const result= addTwoNumber(10,20);
// console.log(result);


// 

// function restoperator(nums, nums2,...nums3){
//     console.log(nums);
//     console.log(nums2);
    
//     return nums3;
// }
// console.log(restoperator(1,2,3,4,5));

// let obj1={
//     name:"ajit",
//     Address:"Bhatni"
// }
// function objectpass(obj){
//  console.log(`obj data is ${obj.name} and price ${obj.Address}`);
 
// }
// objectpass(obj1)

// function passArray(myarray){
//     return myarray[1];
// }
// let arr=[1,2,3];
// console.log(passArray(arr));
// console.log(passArray([0,111,2]));

//=======BY Hitesh==============================

// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// // sayMyName()

// // function addTwoNumbers(number1, number2){

// //     console.log(number1 + number2);
// // }

// function addTwoNumbers(number1, number2){

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }

// const result = addTwoNumbers(3, 5)

// // console.log("Result: ", result);


// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// // console.log(loginUserMessage("hitesh"))
// // console.log(loginUserMessage("hitesh"))


// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// // console.log(calculateCartPrice(200, 400, 500, 2000))

// const user = {
//     username: "hitesh",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// // handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// // console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));