using System;

namespace FactorialOfANumberRecursiveNameSpace {
    class FactorialOfANumberRecursiveName {
        public int fact(int num) {
            if(num == 0)
                return 1;
            return num * fact(num - 1); 
        }

        static void Main(String[] args) {
            FactorialOfANumberRecursiveName factorialOfANumberRecursiveName = new FactorialOfANumberRecursiveName();
            Console.WriteLine(factorialOfANumberRecursiveName.fact(5));
        }
    }
}