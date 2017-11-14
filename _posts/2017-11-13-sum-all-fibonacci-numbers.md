---
Layout:	
Title:	"Sum all Odd Fibonacci numbers."
Date:	2017-11-13 01:08:03 -0600
---

#Summing all Odd Fibonacci numbers.
Given a challenge to sum all odd fibonacci numbers that are less than the given number.
The first thing I had to make sure I took into consideration was the pattern of Fibonacci numbers.

pattern =  1,\;1,\;2,\;3,\;5,\;8,\;13,\;21,\;34,\;55,\;89,\;144...

The challenge was to come up an algorithm that would create the fibonacci number sequence.

## Steps in creating the algorithm.
 - I created a variable called currentNumber that contained the integer 1 in it.
 - I then created two other variable that have the integer 0 in them. previousNumber and finalAnswer.
 - Created a while loop that would if the currentNumber is lower than or equal to the given number.
 - If true then a if statement inside the while loop would check if the currentNumber is devisable by 2 and the remainder is not 0.
 - If true then finalAnswer would be the currentNumber that had been just obtained from the while loop, added to the finalAnswer.
 - Outside the if statement i added the currentNumber with the previous number in every iteration and also reassigned the previous number variable with the currentNumber minus the previous number in every iteration.
 - Finally I return the finalAnswer that contained all the fibonacci numbers obtained using the while loop, 