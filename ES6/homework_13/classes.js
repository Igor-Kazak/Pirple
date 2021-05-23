class Vehicle {
    constructor() {
        this.NeedsMaintenance = false;
        this.TripsSinceMaintenance = 0;
    }
    repair() {
        this.NeedsMaintenance = false;
        this.TripsSinceMaintenance = 0;
    }
    setMake(make) {
        this.make = make;
    }
    setModel(model) {
        this.model = model;
    }
    setYear(year) {
        this.year = year;
    }
    setWeight(weight) {
        this.weight = weight;
    }
}

class Cars extends Vehicle {
    constructor() {
        super();
        this.isDriving = false;
    }
    drive() {
        this.isDriving = true;
    }
    stop() {
        this.isDriving ? this.TripsSinceMaintenance++ : null;
        this.isDriving = false;
        if (this.TripsSinceMaintenance >= 100) {
            this.NeedsMaintenance = true;
        }
    }
}

function carHasBeenSold(car) {
    let km = Math.floor(Math.random() * 200);
    for (let i = 1; i <= km; i++) {
        car.drive();
        car.stop();
    }
    console.log(car);
    goToService(car);
}

function goToService(car) {
    if (car.NeedsMaintenance) {
        car.repair();
        console.log(car.make + ' ' + car.model + ' has been repaired')
    }
    else {
        console.log(car.TripsSinceMaintenance + 'km, no service need')
    }
    console.log(car);
}

let car1 = new Cars;
car1.setMake('Peugeot');
car1.setModel('406');
car1.setYear(2005);
car1.setWeight(1760);
carHasBeenSold(car1);

let car2 = new Cars;
car2.setMake('UAZ');
car2.setModel('Hunter');
car2.setYear(2016);
car2.setWeight(2210);
carHasBeenSold(car2);

let car3 = new Cars;
car3.setMake('VW');
car3.setModel('Beetle');
car3.setYear(1988);
car3.setWeight(1450);
carHasBeenSold(car3);
