/*  Spread is used to divide collections into separate elements, 
    and rest, on the contrary, to join individual values into an array.
*/

// SPREAD
const log1 = function (a, b, c) {
    console.log(a, b, c);
};

log1(...['yellow', 'red', 'green']);

//REST
const log2 = function (a, b, ...rest) {
    console.log(a, b, rest);
};

log2('one', 'two', 'three', 'four');