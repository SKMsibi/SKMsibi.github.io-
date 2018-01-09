---
Layout:    
Title:    "symmetric different"
Date:    2017-12-06 13:03:08 -0600
Categories:    
---

# The symmetric difference task.
Given two or more list with a set of numbers, the task requested for an algorithm that returned the symmetric difference of the given lists.
Any given list can have a different amount of numbers and can also have duplicates of numbers.

# Steps in solving the task.
   ## first step.
        Any given list can have duplicates and when solving the task only one value is considered not its identical duplicate, therefore I created a function called **removeDuplicates()** that took in each list as an argument and returned a new array containing all numbers from the array passed in as an argument but without any repartition of any numbers.
        The function **removeDuplicates()** removed duplicates using a for loop in it and a variable containing an empty array.
        The for loop iterated inside the passed in array and checked if each number in the array existed in the empty array if not then the number would be pushed to the empty array and if it did exist then it would not be pushed.
        This resulted in the removal of any duplicate number but one of the of the duplicates would be pushed to the empty array.
   ## second step.
   I created a second function called **getSymmetricDiff()** that took in two lists as parameters and joined the two lists to make one list through the use of a javascript function called **concat()** that joins two arrays.
   I used the **sort()** function to sort the array, then assigned the joined array in a variable called joinedArray.
   Next step in the function was to use a for loop that removed any numbers that appeared more than once in the joinedArray.
   This resulted in the joinedArray variable containing numbers that are present in one of both arrays but never in both arrays.

   ## third step.
   I created a third function called **symmetricDifference()**. The function took in two or more arrays.
   I then created a **forEach()** function that iterated through every array. Inside the forEach() function I called the removeDuplicates() function on each array and pushed the results to an empty array called argumentsWithoutDuplicates.
   After I then called the reduce() function on the argmumentsWithoutDuplicates array and inside the reduce function I called the getSymmetricDiff() function passing the two arguments of the reduce function to the getSymmetricDiff function.
   Finally, I returned the results of the reduce function being one array containing symmetric difference of all the array passed into the symmetricDifference function.

   
   Used a **reduce()** function to iterate through every array.
   Inside the reduce() function, I called the 