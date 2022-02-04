using System;

namespace TrailingZerosInFactorialNameSpace {
    class TrailingZeros {
        public int countTrailingZeros(int number) {
            int res = 0;
            for(int i = 5; i <= number; i = i * 5) {
                res = res + (number / i);
            }
            return res;
        }

        static void Main(string[] args) {
            TrailingZeros trailingZeros = new TrailingZeros();
            Console.WriteLine(trailingZeros.countTrailingZeros(251));
        }
    }
}