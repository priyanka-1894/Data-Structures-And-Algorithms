import java.io.*;
import java.util.*;
import static java.lang.System.out;

class PalindromeClass {
    static boolean isPalindrome(int number) {
        int rev = 0;
        int temp = number;

        while(temp != 0) {
            int ld = temp % 10;
            rev = rev * 10 + ld;
            temp = temp / 10;
        }

        return rev == number;
    }

    public static void main(String[] args) {
        int number = 12321;
        boolean result = isPalindrome(number);

        if (result) {
            System.out.println(number + " is Palindrome!");
        } else {
            System.out.println(number + " is not Palindrome!");
        }

        
    }
}