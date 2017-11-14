---
Layout:	
Title:	"suming all primes."
Date:	2017-11-14 01:10:03 -0600
---

# Sum all primes.
What are prime Numbers?
A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

The challenge was to sum all prime numbers that are less than the given number.
If the given number is 10 then prime numbers less then 10 are (2,3,5,7) and the challenge was to sum all these numbers.

## Steps in completing the challenge.
 - I created a function titled sumPrimes that took in the given number as an argument.
 - Inside the function I had a variable titled listOfPrimes that had an array consisting of the number 2.
 - I then created a for loop that would push every number that is less than the given number starting from 3 up to the given number itself.
 - Inside the for loop I had an if statement that checked if the current number that was to be push to the listOfPrimes array could be divided by any number in the listOfPrimes.
 - This was possible in using the every method on the listOfPrimes the checked if any of the elements in the array could divide the current number to be pushed by the for loop, if so then the number would not be push and if not then the number met the requirements of being a prime number and would be pushed.
 - Now that I had an array consisting of all primes that are less than the given number, I used the reduce method on the array to add all elements in the array giving me the sum in the array.
 - I then returned the results from the reduce method.