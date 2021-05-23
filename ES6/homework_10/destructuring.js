//The main difference between array and object destructuring is that 
//array destructuring occurs by position in array, but object destructuring
////occurs by key.

let myArr = [ 1, 2, 3, 4, 5 ];
let [ , , a, b, c ] = myArr; // a=3, b=4, c=5

let myObj = { a: 1, b: 2, c: 3, d: 4, e: 5};
let { b, d:s } = myObj; // b=2; s=4