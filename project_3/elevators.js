// For interface engineers: just call a function buttonPress with 
// three arguments: floor number, desired direction (up/down), 
// and an Object Pax with params (number of desired floor).
// For example: buttonPress(7, 'down', new Pax(0));

// Emergency executed by calling 'emergency' function with elevator as an argument
// For example: emergency(a);

const ELEVATORSPEED = 1000;
const DOORSDELAY = 2000;
const FLOORMIN = -1;
const FLOORMAX = 10;

class Elevator {
    constructor(name, start, end) {
        this.name = name;
        this.floorStart = start;
        this.floorEnd = end;
        this.currentFloor = 0;
        this.busy = false;
        this.doorsOpen = false;
        this.inEmergency = false;
    }
    goUp() {
        if (this.currentFloor < this.floorEnd) {
            this.currentFloor++;
            console.log(`Elevator ${this.name} is on the ${this.currentFloor} floor`);
        }
        else {
            console.log(`Elevator ${this.name} can't go up further`);
        }
    }
    goDown() {
        if (this.currentFloor > this.floorStart) {
            this.currentFloor--;
            console.log(`Elevator ${this.name} is on the ${this.currentFloor} floor`);
        }
        else {
            console.log(`Elevator ${this.name} can't go down further`);
        }
    }
    openTheDoors() {
        if (!this.doorsOpen) {
            this.doorsOpen = true;
            console.log(`Elevator ${this.name} opened the doors`);
        }
        else {
            console.log(`Elevator ${this.name} already has the doors opened`);
        }
    }
    closeTheDoors() {
        if (this.doorsOpen) {
            this.doorsOpen = false;
            console.log(`Elevator ${this.name} closed the doors`);
        }
        else {
            console.log(`Elevator ${this.name} already has the doors closed`);
        }
    }
}

class ElevatorA extends Elevator {
    constructor() {
        super('A', FLOORMIN, 9);
    }
}

class ElevatorB extends Elevator {
    constructor() {
        super('B', 0, FLOORMAX);
    }
}

class Pax {
    constructor(iWantThere) {
        this.iWantThere = iWantThere;
    }
    getInElevator(floor) {
        console.log(`Pax: I got in the elevator on the ${floor} floor!`)
    }
    getOutElevator(floor) {
        console.log(`Pax: I got out the elevator on the ${floor} floor!`)
    }
}

function buttonPress(callFloor, direction, pax) {
    console.log(pax)
    direction = callFloor == FLOORMIN ? 'up' : direction;
    direction = callFloor == FLOORMAX ? 'down' : direction;
    console.log(`The ${direction}-button was pressed on the ${callFloor} floor`);
    let currentElevator;
    let steps = 0;
    if (a.busy && !b.busy) {
        currentElevator = b;
        steps = callFloor - b.currentFloor;
    }
    if (b.busy && !a.busy) {
        currentElevator = a;
        steps = callFloor - a.currentFloor;
    }
    if (!a.busy && !b.busy) {
        let stepsA = callFloor - a.currentFloor;
        stepsA = stepsA > 0 ? stepsA : stepsA * (-1);
        let stepsB = callFloor - b.currentFloor;
        stepsB = stepsB > 0 ? stepsB : stepsB * (-1);
        if (callFloor < a.floorStart || callFloor > a.floorEnd || pax.iWantThere > a.floorEnd || pax.iWantThere < a.floorStart) {
            steps = stepsB;
            currentElevator = b;
        }
        else if (callFloor < b.floorStart || callFloor > b.floorEnd || pax.iWantThere > b.floorEnd || pax.iWantThere < b.floorStart) {
            steps = stepsA;
            currentElevator = a;
        }
        else {
            steps = stepsA < stepsB ? stepsA : stepsB;
            currentElevator = stepsA < stepsB ? a : b;
        }
    }
    if (a.busy && b.busy) {

    }

    console.log(`Elevator ${currentElevator.name} is on the ${currentElevator.currentFloor} floor`);

    if (currentElevator.currentFloor <= callFloor) {
        currentElevator.busy = true;
        elevatorMove(currentElevator, steps, pax);
    }
    else {
        currentElevator.busy = true;
        elevatorMove(currentElevator, steps * (-1), pax);
    }
}

function elevatorMove(elevator, steps, pax) {
    let myVar = setInterval(myTimer, ELEVATORSPEED);
    function myTimer() {
        switch (true) {
            case (steps > 0):
                elevator.goUp();
                steps--;
                break;
            case (steps < 0):
                elevator.goDown();
                steps++;
                break;
            case (steps == 0):
                clearInterval(myVar);
                elevator.openTheDoors();
                setTimeout(doorsCloseDelay, DOORSDELAY);
                function doorsCloseDelay() {
                    rideElevator(elevator, pax);
                    elevator.closeTheDoors();
                    //elevator.busy = false;
                }
                break;
        }
    }
}

function rideElevator(elevator, pax) {
    pax.getInElevator(elevator.currentFloor);
    let steps = pax.iWantThere - elevator.currentFloor;
    let myVar = setInterval(myTimer, ELEVATORSPEED);
    function myTimer() {
        switch (true) {
            case (steps > 0):
                elevator.goUp();
                steps--;
                break;
            case (steps < 0):
                elevator.goDown();
                steps++;
                break;
            case (steps == 0):
                clearInterval(myVar);
                elevator.openTheDoors();
                setTimeout(doorsCloseDelay, DOORSDELAY);
                function doorsCloseDelay() {
                    pax.getOutElevator(elevator.currentFloor);
                    elevator.closeTheDoors();
                    elevator.busy = false;
                }
                break;
        }
    }
}

function emergency(elevator) {
    console.log(`Elevator ${elevator.name} is on the ${elevator.currentFloor} floor`);
    if (!elevator.inEmergency) {
        elevator.inEmergency = true;
        elevator.busy = true;
        let myVar = setInterval(myTimer, ELEVATORSPEED);
        function myTimer() {
            if (elevator.currentFloor != elevator.floorStart) {
                elevator.goDown();
            }
            else {
                clearInterval(myVar);
                elevator.openTheDoors();
            }
        }
    }
    else {
        elevator.inEmergency = false;
        elevator.busy = false;
        elevator.closeTheDoors();
    }
}

let a = new ElevatorA();
let b = new ElevatorB();

// Next part is for testing:

buttonPress(Math.floor(Math.random() * 11 - 1), 'up', new Pax(-1));
