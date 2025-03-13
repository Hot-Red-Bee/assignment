/* string literals are sequences of characters enclosed in single quotes ('), double quotes ("), or backticks (`).
let singleQuote = 'Hello, World!'; // single quote
let doubleQuote = "Hello, World!"; // double quote

let multiLine = `This is a
multi-line string!`;
 console.log(multiLine); //multiLine string

 let name = "Alice";
let greeting = `Hello, ${name}!`;  // String interpolation
console.log(greeting); // "Hello, Alice!"



//The switch statement provides an alternative to multiple  statements
// when evaluating a single expression against multiple possible values

let day = 'Monday'; 
switch (day) { 
case 'Monday': 
 console.log('It\'s the start of the week.'); //display "It\'s the start of the week." if the value of day is Monday .
break;  // Stops execution after this case

case 'Friday': 
console.log('It\'s almost the weekend!'); //display "It\'s almost the weekend!" if the value of day is Friday .
break; // Stops execution after this case
default: 
 console.log('It\'s a regular day.');// display "It\'s a regular day." if the value of day is not Monday or Friday.
}
g


// Loops allow the program to execute a code block repeatedly until a specific
// condition is met. The two main types of loops in JavaScript are for and while.g

//for loop
// A for loop is used when you know how many times you want to repeat an action.
for (let i = 0; i < 5; i++) {
 console.log(i); // 0, 1, 2, 3, 4
} 
for (let i = 5; i > 0; i--) {
 console.log(i); // 5, 4, 3, 2, 1
}
/*Initialization: Runs once before the loop starts (e.g., let i = 0;).
Condition: The loop continues as long as this is true (e.g., i < 5).
Increment/Decrement: Updates the loop variable after each iteration (e.g., i++, i--). */

//while loop
// A while loop is used when you don't know how many times you want to repeat an action.
// let i = 0;
// while (i < 5) {
//  console.log(i); // 0, 1, 2, 3, 4
//  i++;
// } 
// let a = 5;
// while (a > 0) {
//  console.log(a); // 5, 4, 3, 2, 1
//  a--;
// }
//  function sumOfNumbers(a,b){
//         return a+b;
//  } console.log(sumOfNumbers(3,3)) traditional function

//  const sumOfNumbers=(a,b)=>{
//     return a+b;
//  }; console.log(sumOfNumbers(3,3)) Basic arrow function
 
// const sumOfNumbers=(a,b) => a*b;
//   console.log(sumOfNumbers(3,4)) shorter syntax
// let myname = "Britney";
// let nameof= () => `Hello, ${myname}!`
//   console.log( nameof())
// let fruits = ["Apple", "Banana", "Cherry"];

// const retailCompaies = companies.filter(company => company.category === 'Retail' );
// console.log(retailCompaies);


// const testMap = companies.map( company=>(`${company.name} [${comapany.start} - ${company.end}]`));
// ? tenery condition (if) : else
// const totalYears = companies.reduce((total, company)=> total + (company.end - company.start),0);
// console.log(totalYears);
const items=[
    {name: 'Bike',     price: 100 },
    {name: 'TV',       price: 200 },
    {name: 'Album',    price: 10  },
    {name: 'Book',     price: 5   },
    {name: 'Phone',    price: 500 },
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25  }
]

// // const filterItems = items.filter(items => items.price <= 100);
// console.log(filterItems)

// const itemsNames = items.map(items => items.name);
// console.log(itemsNames)

// const findItems= items.find(items=> items.name === 'Keyboard');
// console.log(findItems)

//  items.forEach((items)=>
// console.log(items.name)
// );

// const cheapItems= items.some(items => items.price <= 100);
// console.log(cheapItems)

// const cheapItems= items.every(items => items.price <= 1000);
// console.log(cheapItems) 

 const totalPrice= items.reduce((currentTotal, items)=> items.price + currentTotal,0);
console.log(totalPrice) 
