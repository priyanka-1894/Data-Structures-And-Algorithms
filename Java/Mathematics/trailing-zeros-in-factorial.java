import java.io.*;
import java.util.*;
import static java.lang.System.out;

class TrailingZerosInFactorial {
    static int countTrailingZeros(int number) {
        int res = 0;
        for(int i = 5; i <= number; i = i * 5) {
            res = res + (number / i);
        }
        return res;
    }

    public static void main(String[] args) {
        System.out.println(countTrailingZeros(251));
    }
}