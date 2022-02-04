#include <iostream>
#include <limits.h>

using namespace std;

int fact(int num) {
    int res = 1;

    for (int i=2; i<=num; i++) {
        res = res * i;
    }

    return res;
}

int main() {
    cout << fact(5);
}