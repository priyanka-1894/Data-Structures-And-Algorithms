#include <iostream>
#include <limits.h>

using namespace std;

string isPalindrome(int number) {
    int rev = 0;
    int temp = number;

    while(temp != 0) {
        int ld = temp % 10;
        rev = rev * 10 + ld;
        temp = temp / 10;
    }

    if (rev == number) {
        return std::to_string(number) + " is Palindrome!";
    } else {
        return std::to_string(number) + " is not Palindrome!";
    }
}

int main() {
    cout << isPalindrome(123454321) << "\n";
    cout << isPalindrome(1231) << "\n";
}