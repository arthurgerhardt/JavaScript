// Estritamente igual a (tipo e valor)
let one = 1;
let oneString = '1';
let two = 2;
let twoString = '2';

console.log(one)
console.log(two)
console.log(one === oneString); // false
console.log(one === 1); // true
console.log(one === two); // false
console.log(one === twoString); // false

// Estritamente diferente de (tipo e valor)
console.log(one !== oneString); // true
console.log(one !== 1); // false
console.log(one !== two); // true
console.log(one !== twoString); // true
