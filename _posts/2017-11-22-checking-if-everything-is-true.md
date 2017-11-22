---
Layout:	
Title:	"everything-be-true"
Date:	2017-11-15 14:07:06 -0600
---

# Check if truthy.
What is a truthy.
A truthy value is a value that is considered  true when evaluated.
All values are truthy unless they are defined as falsy except for the following:
 - false
 - 0
 - ""
 - null
 - undefined
 - NaN

Checking wether a property is truthy or not is simply checking wether it has a valid value of not.
If it has a valid valued then true is returned and if otherwise then false is returned.

## Steps in creating the algorithm.
### first step.
I created a function called truthChecker taking in two arguments, first one being an array consisting of more than one object.
The second arguments is a string that will be used to check for a property name matching with the string and checking if it truthy or not.

### second step.
I created a for loop that iterates through the given array consisting of objects.
Inside the for loop I introduced an if statement that checks for a property with matching with the string and checking if it has a valid value or not.

### third step.
The last step was to return false if a non-valid property was found and if not the function would return true.
