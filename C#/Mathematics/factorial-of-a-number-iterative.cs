using System;

namespace FactorialOfANumberIterativeNameSpace {
    class FactorialOfANumberIterative {
        public int fact(int num) {
            int res = 1;

            for (int i=2; i<=num; i++) {
                res = res * i;
            }

            return res;
        }

        static void Main(string[] args) {
            FactorialOfANumberIterative factorialOfANumberIterative = new FactorialOfANumberIterative();
            Console.WriteLine(factorialOfANumberIterative.fact(5));
        }
    }
}