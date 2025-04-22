let namea ="ajit";
// console.log(name[0]);
// console.log(typeof(name));
console.log(`hi this is me ${namea}`);

let url1="https://github.com/Ajit-53/JavascriptSelf_By_Hitesh/tree/main/01_Basics";
// console.log(url1.replace('_','#'));
// console.log(url1);

let Name ="Ajit";
for(let i=Name.length-1; i>=0; i--){
    console.log(Name[i]);
}

console.log(Name.split('').reverse().join(''));
// Name.split('') → converts "Ajit" into ["A", "j", "i", "t"]
// .reverse() → reverses the array → ["t", "i", "j", "A"]
// .join('') → joins them into a string → "tijA"


const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
