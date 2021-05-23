/*
 * song
 * just one song
 * nothing else
 */
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Song {

    public static void main(String[] args) {

        String song = "The Zoo";
        String[] writers = {"Rudolf Schenker", "Klaus Meine"};
        String artist = "Scorpions";
        LocalDate myDateObj = LocalDate.of(1980, 4, 1);
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        String dateReleased = myDateObj.format(myFormatObj);
        String album = "Animal Magnetism";
        String[] genre = {"Hard rock", "Heavy metal", "Pop-metal"};
        int lengthSeconds = 328;
        String url = "https://youtu.be/X27IfAgzhTY";
        boolean wasInCharts = false;
        System.out.println("Title: " + song);
        System.out.println("Artist: " + artist);
        System.out.println("Album: " + album);
        System.out.println("Length: " + lengthSeconds + "sec");
        System.out.println("Url: " + url);
        System.out.println("Was In Charts? " + wasInCharts);
        System.out.println("Date release: " + dateReleased);
        System.out.println("Writers:");
        for (int i = 0; i < writers.length; i++) {
            System.out.println("-"+writers[i]);
        }
        System.out.println("Genres:");
        for (int i = 0; i < genre.length; i++) {
            System.out.println("-"+genre[i]);
        }
    }
}
