---
Layout:	
Title:	"solving the steam roller challenge"
Date:	2017-11-20 14:07:06 -0600
---
# Steam roller challenge.

What is a steam roller.
A steam roller is a heavy, slow-moving vehicle with a roller, used to flatten the surfaces of roads during construction.
The same concept is used in this challenge in a way that a multi-dimensional/nested array is given and the instructions of the challenge is to flatten the array into one array with all the values that existed in all the arrays.

The nested array is passed in as an argument.
The values in the nested array varier, they can be numbers, alphabets, objects and arrays themselves.

## How I solved the challenge.
I created a function called steamrollerArray that had one parameter.
In the function I declared and initialized an empty array. Then created a for loop that iterated through the given array.
I then introduced the recursion concept in an if statement, where if the for loop came across an array type when checking the elements type then it would call the same function is it **steamrollerArray(arr)** and step inside the array to access its elements.
If inside the array within the given array there is another array then the function will be called again on that array until the elements are accessed and pushed to the new array.
Then I created an else statement that pushed any element that wasn't in an array to the empty array declared at the beginning of the function.
I then returned the empty array that contained all elements obtained from the given array.

## Conclusion.
I realised that the aim this challenge wasn't about getting to know how to access multi-dimensional array but to learn what is recursion, how to use it and in which cases to use it.