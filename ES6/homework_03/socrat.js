class Human {
    constructor(sex, name) {
        this.sex = sex;
        this.isMortal = name == 'Elvis' ? false : true;
    }
}

class Man extends Human {
    constructor(name) {
        super('man', name);
        this.name = name;
    }
}

const socrat = new Man('Socrat');

if (socrat instanceof Human) {
    if (socrat instanceof Man) {
        console.log('isMortal? ' + (socrat.isMortal === true));
    }
}

class Cake {
    constructor(sharp, weight) {
        this.sharp = sharp;
        this.weight = weight
    }
}

class VanillaCake extends Cake {
    constructor(sharp, weight) {
        super(sharp, weight);
        this.taste = 'vanilla';
    }
}

class ChocolateCake extends Cake {
    constructor(sharp, weight) {
        super(sharp, weight);
        this.taste = 'chocolate';
    }
}

const myCake = new VanillaCake('square', '2kg');

if (myCake instanceof VanillaCake || myCake instanceof ChocolateCake) {
    if (myCake instanceof ChocolateCake) {
        console.log('chocolate? ' + (myCake.taste === 'chocolate'));
    }
    else {
        console.log('vanilla? ' + (myCake.taste === 'vanilla'));
    }
}