function numSquare(num, callback){
    let start = new Date();
    if (!Number.isInteger(num) || num < 1 || num > 1000){
        return console.log('Num should be int from 1 to 1000');
    }
    else {
    console.log('square: ' + num**2);
    setTimeout(() => {
        callback(num, start, numPrime);        
    }, num);
    }
}

function numSqrt(num, time, callback) {
    console.log('sqrt: ' + Math.sqrt(num));
    callback(num, time);
}

function numPrime(num, start) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return numPrime(num-1, start);
        }
    }
    let end = new Date();
    return console.log('prime: ' + num + '\ntotal time: ' + (end - start) + 'ms');
}

numSquare(Math.floor(Math.random()*1000), numSqrt)
