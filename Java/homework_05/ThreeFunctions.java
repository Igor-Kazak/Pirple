public class ThreeFunctions {
    public static void main(String[] args) {
        System.out.println(randBetween(22,90));
        System.out.println(reverseString("just a simple string"));
        System.out.println(isPalindrome("racecar"));
    }

    private static String reverseString(String str){
        return new StringBuilder(str).reverse().toString();
    }

    private static boolean isPalindrome(String str){
        String firstHalf = str.substring(0, str.length()/2);
        String lastHalf = str.substring(str.length()/2+1);
        System.out.println(firstHalf);
        System.out.println(lastHalf);
        System.out.println(reverseString(lastHalf));
        if (firstHalf.equals(reverseString(lastHalf))) {
            return true;
        }
        else {
            return false;
        }
    }

    private static int randBetween(int a, int b){
        int c;
        if (a > b) {
            c = (int) (Math.random() * (a - b + 1)) + b;
        }
        else if (b > a){
            c = (int) (Math.random() * (b - a + 1)) + a;
        }
        else {
            return 0;
        }
        return c;
    }

}
