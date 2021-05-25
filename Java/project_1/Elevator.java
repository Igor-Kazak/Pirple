public class Elevator {
    char name;
    int floorStart, floorEnd, currentFloor;
    boolean busy, doorsOpen, inEmergency;
        public Elevator(char name, int start, int end) {
            this.name = name;
            this.floorStart = start;
            this.floorEnd = end;
            this.currentFloor = 0;
            this.busy = false;
            this.doorsOpen = false;
            this.inEmergency = false;
        }
        public void goUp() {
            if (this.currentFloor < this.floorEnd) {
                this.currentFloor++;
                System.out.println("Elevator " + this.name + " is on the " + this.currentFloor + " floor");
            }
            else {
                System.out.println("Elevator " + this.name + " can't go up further");
            }
        }
        public void goDown() {
            if (this.currentFloor > this.floorStart) {
                this.currentFloor--;
                System.out.println("Elevator " + this.name + " is on the " + this.currentFloor + " floor");
            }
            else {
                System.out.println("Elevator " + this.name + " can't go down further");
            }
        }
    public void openTheDoors() {
            if (!this.doorsOpen) {
                this.doorsOpen = true;
                System.out.println("Elevator " + this.name + " opened the doors");
            }
            else {
                System.out.println("Elevator " + this.name + " already has the doors opened");
            }
        }
    public void closeTheDoors() {
            if (this.doorsOpen) {
                this.doorsOpen = false;
                System.out.println("Elevator " + this.name + " closed the doors");
            }
            else {
                System.out.println("Elevator " + this.name + " already has the doors closed");
            }
        }

}
