let z = 1;

if (true) {
  var f = 10;
  let a = 10;
  b = 4;
  let z = 5;
}

const d = {};
d['a'] = 10;
d = { ...d };

console.log(a); // ReferenceError
console.log(b); // 4
console.log(z); // 1
console.log(d); // { a: 10 }
console.log(f); // 10
