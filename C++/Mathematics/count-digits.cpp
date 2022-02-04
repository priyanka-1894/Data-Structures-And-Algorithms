#include <iostream>

using namespace std;

int CountDigits(int x) {
    int res = 0;
    while(x > 0) {
        x = x/10;
        res++;
    }
    return res;
}

int main() {
    cout << CountDigits(12345);    
}