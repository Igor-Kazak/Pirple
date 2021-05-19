function promiseFunction(num) {
    let myPromise1 = new Promise(function (myResolve, myReject) {
        start = new Date();
        if (!Number.isInteger(num) || num < 1 || num > 1000) {
            myReject('Num should be int from 1 to 1000');
        }
        else {
            console.log('square: ' + num ** 2);
            setTimeout(() => {
                myResolve(num)
            }, num);
        }
    });

    myPromise1.then(
        function (num) {
            new Promise(function (myResolve, myReject) {
                num < 0 ? myReject('Can not extract sqrt from negative value') : null;
                console.log('sqrt: ' + Math.sqrt(num));
                myResolve(num);
            })
                .then(num => {
                    new Promise(function (myResolve, myReject) {
                        let state = true;
                        while (state) {
                            for (let i = 2; i < num; i++) {
                                if (num % i === 0) {
                                    num -= 1;
                                }
                                else {
                                    state = false;
                                }
                            }
                        }
                        let end = new Date();
                        myResolve('prime: ' + num + '\ntotal time: ' + (end - start) + 'ms');
                    })
                        .then(value => console.log(value))
                        .catch(error => console.log(error))
                })
                .catch(error => console.log(error))
        },
        function (error) { console.log(error); }
    );
}

promiseFunction(Math.floor(Math.random() * 1000))
