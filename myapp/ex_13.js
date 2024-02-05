var x = "global";

function foo() {
  console.log(x);
  var x = "local"; // (1)
}

foo();
console.log(x); // (2)
