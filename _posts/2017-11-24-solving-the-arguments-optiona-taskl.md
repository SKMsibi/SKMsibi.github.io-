---
Layout:	
Title:	"solving the arguments optional task"
Date:	2017-11-24 14:07:06 -0600
---

# solving the arguments optional task.
Solving the arguments optional tasks.
The challenge asked for an algorithm that is able to add two arguments.
The trick in the challenge was that in other cases the argument types would not be the same type.

Two arguments are passed in the and are to be added together despite being of what type.

## My first step
 I created a function titled addTogether, with two parameters.
 Inside the function I declared two variable one called args that contained both arguments accessed through the use of the method Array.from(arguments) and the other called finalAnswer containing the value 0.
## second step 
I then introduced an if statement that checked if the the sum of the two argument was of type number is so then return the addition of the two arguments and if not then return undefined.
 outside the if else statement i returned a function that took in the second argument as a parameter and checked the type of the second argument and returning undefined if it was of type string either returning the addition of the second and the first argument