function reverseJsonArray(str) {
    let arr;
    try {
        arr = JSON.stringify(JSON.parse(str).reverse());
    } catch (error) {
        return false;
    }
    return arr;
};

console.log(reverseJsonArray(JSON.stringify(['a', 'b', 'c'])));