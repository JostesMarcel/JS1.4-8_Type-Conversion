// 1.4
console.log(typeof "John")
console.log(typeof 3.14)
console.log(typeof NaN)
console.log(typeof false)
console.log(typeof [1,2,3,4])
console.log(typeof {name: 'John', age:34})
console.log(typeof new Date())
console.log(typeof function(){})
console.log(typeof null)
console.log(typeof "")
console.log(typeof 3+2==5)
console.log(typeof 3 + "3")

// 1.8 / Aufgabenstellung 1
let x = 20;
let y = 30;
let z = 10;

console.log(x + y)
console.log(y - x)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x * y / z)
let resultOne = x * y / z;
console.log(resultOne)

// 1.8 / Aufgabenstellung 2
let a = 15;
let b = 9;
let c = 20;

console.log(a % b);
let resultTwo = a + b;
console.log(resultTwo * c);

a++
console.log(a)
b--
console.log(b)
let resultThree = a - b;
console.log(resultThree)
console.log(resultOne % resultTwo)