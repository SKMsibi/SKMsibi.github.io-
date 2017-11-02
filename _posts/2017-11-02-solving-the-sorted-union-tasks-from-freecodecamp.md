---
Layout:	
Title:	"solving the sorted union tasks from freecodecamp"
Date:	2017-11-02 13:08:03 -0600
---

## solving the sorted union task from freecodecamp.
This task was one of the most challenging task I had come across on freecodecamp, and I happen to have learned how to overcome one of my biggest set back when trying to solve a task.
What made this task very challenging wasn't the fact that it sounded very intimidating or it was hard to solve, what made it very challenging was the fact that it asked me to perform something I once did before but only difference that it was being asked to be done differently but I was stuck on wanting to do it the way I knew how to and get through with it.

## What was asked of me to do.
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

## breaking the task into smaller missions.
    - Convert all arguments into an array.
    - Be able to iterate and access each an every element in the array.
    - Be able to compare any values within the array at any given index.
    - Filter out any duplicates of elements.
    - return the array without duplicates and with elements in an order they were passed in.

## challenges I came across and how i solved them.
    - Changing any amount of arguments passed in, into one array. The challenge was there was only one parameter.
        *I declared a function and inside it I also declared a variable titled argsArray that contained the method (Array.from(arguments)) that would take in any amount of arguments passed in and put them in an array.*

    - Converting the multi-dimensional array in the argsArray into one non-multi-dimensional array.
        *Then used a for loop to iterate through the multi-dimensional array. Inside the for loop  I introduced the concat method that allowed me to join all existing arrays with an empty array titled concatedArray I had declared outside the for loop.*

    - Removing any duplicates within the concatedArray.
        *After the for loop I initialized a filter method that iterated through the concatedArray and removed any duplicates of any elements it would come in contact with.*

## conclusion.
Now there was only one thing left for me to do and it was to return the finalArray containing the required answer.
I realized that sometimes when individuals attempt to solve a challenge they get edicted on solving it one way and always that way not finding new ways to tackle the challenge and when the challenge is brought through in a disguise, deceiving and asked in a different way the individuals turn to not know what to do.
Due to me solving this challenge in a different way I usually do, it felt good return the expected results.