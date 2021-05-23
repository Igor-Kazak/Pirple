//No explanation is required. The rest is in the Bible/Koran/etc.

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.head = 1;
        this.body = 1;
        this.legs = 2;
        this.arms = 2;
        this.tail = 0;
    }
}

class Man extends Human {
    constructor(name, age) {
        super(name, age);
        this.maleGenitalia = true;
        this.testosteron = 400;
    }
    haveSex(human) {
        if (human instanceof Woman && human.age > 18) {
            human.haveSex(this);
        }
        else {
            console.log('just sex');
        }
    }
}

class Woman extends Human {
    constructor(name, age) {
        super(name, age);
        this.femaleGenitalia = true;
        this.testosteron = 100;
    }
    haveSex(human) {
        if (human instanceof Man && human.age > 18) {
            console.log('insemination completed');
            let myVar = setInterval(myTimer, 1000);
            let month = 0;
            function myTimer() {
                console.log('Month: ' + ++month)
                if (month >= 9) {
                    clearInterval(myVar);
                    let sex = Math.floor(Math.random() * 2);
                    sex == 0 ? console.log(new Man('unnamed', 0)) : console.log(new Woman('unnamed', 0));
                }
            }
            console.log(this.name + ' got pregnant');
        }
        else {
            console.log('just sex');
        }
    }
}

let woman = new Woman('Alla', 20);
let man = new Man('Georg', 25);

man.haveSex(woman);
