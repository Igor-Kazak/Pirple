// Global variables declared outside a function and can be used anywhere.
var b = 1;
function add() {
    return ++b;
}
console.log(add());

// Local variables declared inside a function and can be used only inside it.
function just() {
    var b = 1;
}
console.log(b); //b is not defined

// Var variables can be used outside a block,
{
    var c = 1;
}

// but let variables don't.
{
    let c = 1;
}

// consts are the same like let, except they can't be reassigned.\
const z = 0;
z = 1; //error

// Hoisting means that JS moves all declarations to the top, so variable can be used before it has been declared.
a = 2;
console.log(a);
var a;