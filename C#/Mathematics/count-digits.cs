// C# program to print Hello World!
using System;

// namespace declaration
namespace CountDigitsClass {
	
	// Class declaration
	class CountDigits {
		
        public int count(int x) {
            int res = 0;
            while(x > 0) {
                x = x/10;
                res++;
            }
            return res;
        }

		// Main Method
		static void Main(string[] args) {
		    CountDigits countDigits = new CountDigits(); // Creating Object  
			Console.WriteLine(countDigits.count(123));
		}
	}
}