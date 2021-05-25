public class TimeAdder {
    private static int total = 0;

    public static String timeAdder(int value1, String label1, int value2, String label2) {
        total = 0;
        if (toSeconds(value1, label1) < 0 || toSeconds(value2, label2) < 0) {
            return "incorrect singular/plural in label";
        }
        if (total % 86400 == 0) {
            return (total / 86400) + " " + (total == 86400 ? "day" : "days");
        } else if (total % 3600 == 0) {
            return (total / 3600) + " " + (total == 3600 ? "hour" : "hours");
        } else if (total % 60 == 0) { //minutes
            return (total / 60) + " " + (total == 60 ? "minute" : "minutes");
        } else {
            return total + " " + (total == 1 ? "second" : "seconds");
        }
    }

    public static int toSeconds(int value, String label) {
        switch (label.toLowerCase()) {
            case "second":
                if (value == 1) {
                    total += value;
                    break;
                } else {
                    return -1;
                }
            case "seconds":
                if (value > 1) {
                    total += value;
                    break;
                } else {
                    return -2;
                }
            case "minute":
                if (value == 1) {
                    total += value * 60;
                    break;
                } else {
                    return -3;
                }
            case "minutes":
                if (value > 1) {
                    total += value * 60;
                    break;
                } else {
                    return -4;
                }
            case "hour":
                if (value == 1) {
                    total += value * 60 * 60;
                    break;
                } else {
                    return -5;
                }
            case "hours":
                if (value > 1) {
                    total += value * 60 * 60;
                    break;
                } else {
                    return -6;
                }
            case "day":
                if (value == 1) {
                    total += value * 60 * 60 * 24;
                    break;
                } else {
                    return -7;
                }
            case "days":
                if (value > 1) {
                    total += value * 60 * 60 * 24;
                    break;
                } else {
                    return -8;
                }
        }
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(timeAdder(1, "minute", 3, "minutes"));
        System.out.println(timeAdder(5, "days", 24, "hours"));
        System.out.println(timeAdder(3, "minutes", 240, "seconds"));
        System.out.println(timeAdder(5, "hour", 5, "minutes"));
    }
}
