import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.io.IOException;
import java.io.FileWriter;

public class FileInOut {
    public static void main(String[] args) {

        try {
            File inputFile = new File("C://123/data.csv");
            FileWriter myWriter = new FileWriter("C://123/fifa-tab.tsv");
            Scanner myReader = new Scanner(inputFile);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                //System.out.println(data);
                String result = data.replace(',', '\t');
                myWriter.write(result);
            }
            System.out.println("Successfully done.");
            myReader.close();
            myWriter.close();
        } catch (FileNotFoundException e) {
            System.out.println("Reader: An error occurred.");
            e.printStackTrace();
        } catch (IOException e) {
            System.out.println("Writer: An error occurred.");
            e.printStackTrace();
        }

    }
}