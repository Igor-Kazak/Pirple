public class Solution {

    private static void carHasBeenSold(Cars car) {
        int km = (int)(Math.random() * 200);
        for (int i = 1; i <= km; i++) {
            car.Drive();
            car.Stop();
        }
        System.out.println("New car has been sold: " + car.make + " " + car.model + " " + car.year);
        goToService(car);
    }

    private static void goToService(Cars car) {
        if (car.needsMaintenance) {
            System.out.println(car.tripsSinceMaintenance + "km " + car.make + " " + car.model + " needs service");
            car.Repair();
            System.out.println(car.make + " " + car.model + " has been repaired");
        }
        else {
            System.out.println(car.tripsSinceMaintenance + "km, no service need");
        }
    }


    public static void main(String[] args){
        Cars car1 = new Cars();
        car1.Make("Peugeot");
        car1.Model("406");
        car1.Year(2005);
        car1.Weight(1760);
        carHasBeenSold(car1);

        Cars car2 = new Cars();
        car2.Make("UAZ");
        car2.Model("Hunter");
        car2.Year(2016);
        car2.Weight(2210);
        carHasBeenSold(car2);

        Cars car3 = new Cars();
        car3.Make("VW");
        car3.Model("Beetle");
        car3.Year(1988);
        car3.Weight(1450);
        carHasBeenSold(car3);

    }
}
