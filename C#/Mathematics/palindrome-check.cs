using System;

namespace PalindromeCheckNameSpace {
    class PalindromeCheck {
        public string isPalindrome(int number) {
            int res = 0;
            int temp = number;
            
            while(temp != 0) {
                int ld = temp % 10;
                res = res * 10 + ld;
                temp = temp / 10;
            }

            if (res == number) {
                return number + " is Palindrome!";
            } else {
                return number + " is not Palindrome!";
            }
        }

        static void Main(String[] args) {
            PalindromeCheck palindromeCheck = new PalindromeCheck(); // Creating Object  
			Console.WriteLine(palindromeCheck.isPalindrome(12321));
        }
    }
}