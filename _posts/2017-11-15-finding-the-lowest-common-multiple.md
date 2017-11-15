---
Layout:	
Title:	"finding the lowest common multiple"
Date:	2017-11-15 14:07:06 -0600
---

# Finding the lowest common multiple.
What is meant by finding the lowest common multiple and what is the lowest common multiple.
The lowest common multiple is the smallest positive integer that is divisible by both given numbers (a and b).
In this case finding the lowest common multiple means find the least divisible positive number of two given numbers.

The trick in the given challenge was the the least divisible number of both numbers should also be divisible by all sequential numbers in the range between the two given numbers.
The two given numbers are given in an array and not necessarily in numerical order.

## Steps in completing the challenge.
 - I created a function titled findSmallestMultiple that took in the given array as a parameter.
 - Due to the given numbers in the array not being in numerical order, I created a variable title sortedGivenNumbers that contained a sorted version of the given array.
 - Now that the array was sorted, fact is the first number in the array will always be the lowest and the last number in the array will always be the highest. In this case I created two variable titled smallest and highest that contained numbers that related to their titles.
 - I then created a for Loop that took the smallest variable as a start off point and incremented it by one then pushing that value to a new variable titled range. The for Loop would increment until it reaches the same number as the highest number, resulting in a range being created.
 - I then created another function outside the findSmallestMultiple function, titled checkValidity that took in two parameters-: NextNum and range.
 - Inside the checkValidity function I introduced the every method that checked if the nextNum is divisible by all the elements in the range array, if so it returns true and if not it returns false.
 - Back inside the findSmallestMultiple function I created a variable titled nextNum that contained highest variable.
 - I then created a while loop called the checkValidity function in its condition area.
 - The while loop checked if the nextNum number is divisible all numbers in the range if not then then the nextNum would be incremented by the highest num, then it would check again and so on.
 - Once the nextNum was a value that was divisible by all numbers in the range then nextNum would be returned.

## The solution.
   - function smallestCommons(arr) {
   - var sortedList = arr.sort();
   - var range = [];

   - var smallest = sortedList[0];
   - var highest = sortedList[1];

   - var nextNum = highest;

   - for (var index = smallest; index <= highest; index++) {
   -     range.push(index);
   - }

   - while(!checkValidity(nextNum, range)){

   -     nextNum += highest;
   - }
   - return nextNum;
   - }

   - function checkValidity(nextNum, range){
   -     return range.every(function(range){
   -         return nextNum % range  == 0;
   -     });
   - }