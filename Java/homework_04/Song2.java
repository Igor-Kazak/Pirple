/*
 * song
 * just one song
 * nothing else
 */
import java.util.HashMap;

public class Song2 {

    public static void main(String[] args) {
        HashMap<String, String> songObject = new HashMap<String, String>();
        songObject.put("Title", "The Zoo");
        songObject.put("Writers", "Rudolf Schenker, Klaus Meine");
        songObject.put("Artist", "Scorpions");
        songObject.put("Date release", "01/04/1984");
        songObject.put("Album", "Animal Magnetism");
        songObject.put("Genres", "Hard rock, Heavy metal, Pop-metal");
        songObject.put("Length", "328");
        songObject.put("Url", "https://youtu.be/X27IfAgzhTY");
        songObject.put("Was In Charts?", "false");
        for (String i : songObject.keySet()) {
            System.out.println(i + ": " + songObject.get(i));
        }
    }
}
