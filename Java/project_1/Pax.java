public class Pax {
    int iWantThere;

    public Pax(int iWantThere) {
        this.iWantThere = iWantThere;
    }
    public void getInElevator(int floor) {
        System.out.println("Pax: I got in the elevator on the " + floor + " floor!");
    }
    public void getOutElevator(int floor) {
        System.out.println("Pax: I got out the elevator on the " + floor + " floor!");
    }

}
