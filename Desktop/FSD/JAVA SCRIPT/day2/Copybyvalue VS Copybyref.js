/*
    Copy by value vs Copy by reference

*/

// let a = 1

// let b = 10

// console.log(a, b);

// b = a;

// console.log(a, b);

// copy by reference

let a = [1, 2, 3];

b = a;

console.log(a, b); 


a.push(1);
a.pop(2);

console.log(a, b);
//pop
b.pop();