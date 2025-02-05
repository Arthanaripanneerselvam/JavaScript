// // /*
// //     Arrays
// //         - Arrays are used to store multiple values in a single variable.
// //         - Arrays are built in data structure in JavaScript.
// //         - Values in the array are stored contihuously in memory.
// //         - Arrays are zero based index.The first element is at index 0, the second element is at index 1, and so on.
// //         - Arrays are mutable.
// //         - The elements of an array can be changed.
// // */



// // //console.log(numbers, typeof(numbers));

// // //index [0]

// // // console.log(numbers[0]);
// // // we can change index

// // // numbers[2] = 20;

// // // console.log(numbers);

// // // console.log(numbers.length);
// // let numbers = [1, 2, 3, 4, 5];

// // numbers.push(10, 11);
// // numbers.push(20, 30);

// // let count = numbers.push(13, 14);
// // // numbers.pop();
// // // numbers.pop();
// // // numbers.unshift(-1, -2); to add a number at beginning of array
// // // console.log(numbers);

// // // console.log('count:', count);
// // numbers.shift(); // to remove a number from beginning of array
// // numbers.shift();
// // numbers.shift();
// // numbers.splice(4, 0, 15);
// // numbers.splice(5, 2, 1234); // to remove and add a number at a specific index in a array
// // numbers.splice(5, 2);

// //             0  1   2  3   4   5   6   7   8    (0,2) 7, 3,18, 25 50
// // let numbers = [7, 10, 3, 13, 18, 20, 25, 42, 50, 45, 5000];

// // for (let i = 1; i <= 3; i++){
// //     numbers.splice(i, 2);
// // }

// // console.log(numbers.indexOf(20));

// // console.log(numbers[5]);
// //             0  1   2  3   4   5   6   7   8    (0,2) 7, 3,18, 25 50
// let numbers = [7, 10, 3, 13, 18, 20, 25, 42];

// console.log(numbers.slice(3, 7));


// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// // console.log(animals.slice(2));
// console.log(animals.slice(-5));

// let numbers = [7, 10, 3, 13, 18, 20, 25, 42]; // array declaration

// let index = 0;

// for (; index < numbers.length;);
// {
//     console.log(numbers[index]);
//     i++;
// }
// numbers.length usage  to get the length of array

//While Loop

// let numbers = [7, 10, 3, 13, 18, 20, 25, 42];

// index = 1;

// while (index < numbers.length) {
//     console.log(numbers[index]);
//     index++;
// }

//for in loop

// for (let index in numbers) {
//     console.log(numbers[index]);
// }
  
// //for of loop

// for (value of numbers) {
//     console.log(value);
// }

// for each

// numbers.forEach((value) => {
//     console.log(value);
// });
// forEach loop
// numbers.forEach((index) => {
//     console.log(index);
// });

let numbers = [7, 10, 3, 13, 18, 20, 25, 42];


// for (let number of numbers) {
//     console.log(number);
// }

numbers.forEach((value) => {
    console.log(value);
});