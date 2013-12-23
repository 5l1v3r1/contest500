import java.util.Scanner;

public class Test {
    
    public static int parseInt(char a) {
        int num = (int)a;
        if (num < (int)'0' || num > (int)'9') {
            throw new RuntimeException("Parse error");
        }
        return num - (int)'0';
    }
    
    public static boolean is_solution(String key) {
        if (key.length() != 11) return false;
        int a = parseInt(key.charAt(0));
        int b = parseInt(key.charAt(1));
        int c = parseInt(key.charAt(2));
        int d = parseInt(key.charAt(3));
        int e = parseInt(key.charAt(4));
        int f = parseInt(key.charAt(5));
        int g = parseInt(key.charAt(6));
        int h = parseInt(key.charAt(7));
        int i = parseInt(key.charAt(8));
        int j = parseInt(key.charAt(9));
        int k = parseInt(key.charAt(10));
        if (j / b != f) return false;
        if (c / i != b) return false;
        if (d / e != a) return false;
        if (h / e != b) return false;
        if (b % c != e) return false;
        if (f % d != j / d) return false;
        if (k % i != j) return false;
        if (k % d != a * b) return false;
        if (e - g != i) return false;
        if (d - g != c) return false;
        if (k + a != d) return false;
        if (a * b != e * i) return false;
        return true;
    }
    
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        while (true) {
            try {
                if (is_solution(s.nextLine())) {
                    System.out.println("correct key!");
                    return;
                } else {
                    System.out.println("invalid key :(");
                }
            } catch (RuntimeException e) {
                System.out.println("string must be numeric!");
            }
        }
    }
    
}