#include <iostream>
#include <limits.h>

using namespace std;

int countTrailingZeros(int number) {
    int res = 0;
    for(int i = 5; i <= number; i = i * 5) {
        res = res + (number / i);
    }
    return res;
}

int main() {
    cout << countTrailingZeros(251);
}