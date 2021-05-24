import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Sphere {
    float radius;
    private static final float PI = 3.1415926535f;

    public Sphere(float rad) {
        radius = rad;
    }

    public float diameter() {
        return radius * 2;
    }

    public float circumference() {
        return radius * 2 * PI;
    }

    public float surfacearea() {
        return (float) (Math.pow(radius, 2) * 2 * PI);
    }

    public float volume() {
        return (float) (Math.pow(radius, 3) * 4 * PI) / 3;
    }

    public static void main(String[] args) throws IOException {
        float rad = 0;
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        try {
            rad = Float.parseFloat(reader.readLine());
        } catch (NumberFormatException e) {
            System.out.println("incorrect input");
            return;
        }
        Sphere myObj = new Sphere(rad);
        System.out.println("diameter: " + myObj.diameter());
        System.out.println("circumference: " + myObj.circumference());
        System.out.println("surface area: " + myObj.surfacearea());
        System.out.println("volume: " + myObj.volume());
    }
}
