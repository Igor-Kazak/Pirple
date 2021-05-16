function fizzBuzzPrime(first, last) {
    if (first > 0 && last > 0 && first < last) {
        let result = [];
        for (let i = first; i <= last; i++) {
            if (i % 3 === 0 && i % 5 != 0) {
                result.push('Fizz');
            }
            else if (i % 5 === 0 && i % 3 != 0) {
                result.push('Buzz');
            }
            else if (i % 3 === 0 && i % 5 === 0) {
                result.push('FizzBuzz');
            }
            else {
                result.push(prime(i));
            }
        }
        function prime(num) {
            if (num > 1) {
                for (let i = 2; i < num; i++) {
                    if (num % i === 0) {
                        return num;
                    }
                }
                return 'Prime';
            }
            else {
                return num;
            }
        }
        console.log(result);
    }
    else
        console.log('invalid input data');
}

fizzBuzzPrime(1, 100);