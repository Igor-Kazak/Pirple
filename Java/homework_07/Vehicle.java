public class Vehicle {
    String make, model;
    int year, weight, tripsSinceMaintenance=0;
    boolean needsMaintenance = false;

    public void Make(String make){
        this.make = make;
    }
    public void Model(String model){
        this.model = model;
    }
    public void Year(int year){
        this.year = year;
    }
    public void Weight(int weight){
        this.weight = weight;
    }
    public void Repair(){
        this.needsMaintenance = false;
        this.tripsSinceMaintenance = 0;
    }

}
