const arr = [1, 2, 3];

arr.forEach(console.log);

// 6.3 template literals

var template = `Template literal
 in ES6`;

console.log(template); // Template literal in ES6
// can do multi-line strings

// 6.4 string interpolation
var first = "Jane";
var last = "Doe";

// ES6 : string interpolation
console.log("my name is " + first + " " + last + "."); // my name is Jane Doe.

console.log(`1 + 2 = ${1 + 2}`); // 1 + 2 = 3
console.log("1 + 2 = ${1 + 2}"); // 1 + 2 = ${1 + 2}

// typeof
var foo;
console.log(typeof foo);
