import java.io.*;
import java.util.*;

class FactorialOfANumberIterative {
    static int fact(int num) {
        int res = 1;

		for(int i=2; i<=num; i++) {
			res = res * i;
		}
		return res;
    }

    public static void main(String[] args) {
        System.out.println(fact(5));
    }
}