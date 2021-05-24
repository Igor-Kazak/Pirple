public class Cars extends Vehicle{
    boolean isDriving = false;
    public void Drive(){
        this.isDriving = true;
    }
    public void Stop(){
        if (this.isDriving) {
            this.tripsSinceMaintenance++;
        }
        this.isDriving = false;
        if (this.tripsSinceMaintenance >= 100) {
            this.needsMaintenance = true;
        }
    }
}
