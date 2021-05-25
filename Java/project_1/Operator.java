import java.util.concurrent.TimeUnit;

public class Operator {
    public static final int FLOORMIN = -1;
    public static final int FLOORMAX = 10;
    public static ElevatorA a = new ElevatorA();
    public static ElevatorB b = new ElevatorB();

    public static void buttonPress(int callFloor, String direction, Pax pax) throws InterruptedException {
        direction = callFloor == FLOORMIN ? "up" : direction;
        direction = callFloor == FLOORMAX ? "down" : direction;
        System.out.println("The " + direction +"-button was pressed on the " + callFloor + " floor");
        Elevator currentElevator = null;
        int steps = 0;
        if (a.busy && !b.busy) {
            currentElevator = b;
            steps = callFloor - b.currentFloor;
        }
        if (b.busy && !a.busy) {
            currentElevator = a;
            steps = callFloor - a.currentFloor;
        }
        if (!a.busy && !b.busy) {
            int stepsA = callFloor - a.currentFloor;
            stepsA = stepsA > 0 ? stepsA : stepsA * (-1);
            int stepsB = callFloor - b.currentFloor;
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

        System.out.println("Elevator " + currentElevator.name + " is on the " + currentElevator.currentFloor + " floor");

        if (currentElevator.currentFloor <= callFloor) {
            currentElevator.busy = true;
            elevatorMove(currentElevator, steps, pax);
        }
        else {
            currentElevator.busy = true;
            elevatorMove(currentElevator, steps * (-1), pax);
        }
    }

    public static void elevatorMove(Elevator elevator, int steps, Pax pax) throws InterruptedException {
        while (steps > 0 || steps < 0) {
            TimeUnit.SECONDS.sleep(1);
            if (steps > 0) {
                elevator.goUp();
                steps--;
            } else if (steps < 0) {
                elevator.goDown();
                steps++;
            }
        }
            if (steps == 0) {
                elevator.openTheDoors();
                TimeUnit.SECONDS.sleep(2);
                elevator.closeTheDoors();
                rideElevator(elevator, pax);
            }
    }

    public static void rideElevator(Elevator elevator, Pax pax) throws InterruptedException {
        pax.getInElevator(elevator.currentFloor);
        int steps = pax.iWantThere - elevator.currentFloor;
        while (steps > 0 || steps < 0) {
            TimeUnit.SECONDS.sleep(1);
            if (steps > 0) {
                elevator.goUp();
                steps--;
            } else if (steps < 0) {
                elevator.goDown();
                steps++;
            }
        }
        if (steps == 0) {
                elevator.openTheDoors();
                pax.getOutElevator(elevator.currentFloor);
                TimeUnit.SECONDS.sleep(2);
                elevator.closeTheDoors();
                elevator.busy = false;
            }
    }

    public void emergency(Elevator elevator) throws InterruptedException {
        System.out.println("Elevator " + elevator.name + " is on the " + elevator.currentFloor + " floor");
        if (!elevator.inEmergency) {
            elevator.inEmergency = true;
            elevator.busy = true;
            while (elevator.currentFloor != elevator.floorStart) {
                TimeUnit.SECONDS.sleep(1);
                elevator.goDown();
                }
            elevator.openTheDoors();
        }
        else {
            elevator.inEmergency = false;
            elevator.busy = false;
            elevator.closeTheDoors();
        }
    }


    public static void main(String[] args) throws InterruptedException {
        // Next part is for testing:
        buttonPress((int)(Math.random() * 11 - 1), "up", new Pax(2));
    }

}
