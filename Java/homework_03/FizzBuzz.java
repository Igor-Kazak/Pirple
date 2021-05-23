import java.util.ArrayList;

public class FizzBuzz {

        static void fizzBuzzPrime (int first, int last){
            if (first > 0 && last > 0 && first < last) {
                ArrayList<String> result = new ArrayList<String>();
                for (int i = first; i <= last; i++) {
                    if (i % 3 == 0 && i % 5 != 0) {
                        result.add("Fizz");
                    } else if (i % 5 == 0 && i % 3 != 0) {
                        result.add("Buzz");
                    } else if (i % 3 == 0 && i % 5 == 0) {
                        result.add("FizzBuzz");
                    } else {
                        result.add(prime(i));
                    }
                }
                System.out.println(result);
            } else
                System.out.println("invalid input data");
        }

    private static String prime(int num) {
        if (num > 1) {
            for (int i = 2; i < num; i++) {
                if (num % i == 0) {
                    return String.valueOf(num);
                }
            }
            return "Prime";
        } else {
            return String.valueOf(num);
        }
    }

    public static void main(String[] args) {
        fizzBuzzPrime(1, 100);
    }
}
