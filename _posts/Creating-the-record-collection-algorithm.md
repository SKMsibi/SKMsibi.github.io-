---
Layout:	
Title:	"Record collection."
Date:	2017-11-04 13:03:08 -0600
Categories:	
---

# Record collection.
## what is it about ?
Given a collection of properties that contain information about artists,albums and tracks.
given three details, the algorithm is supposed to edited the collection based on the given details either update or remove items.

## creating the algorithm.
I created function called updateRecords taking in three arguments. **id**, **prop** and **value** are the parameters the function had.
The first statement in the function was creating an if statement that checked if argument passed at **prop** is identical to **tracks** and it also checked if the collection does not have a property titled **tracks**.
If the if statement passes then an empty array will be created in **prop** property and **value** will be pushed to the array.
Outside the if statement existed another if statement checking if the argument passed in at **prop** was not identical the **tracks** and if **value** was not an empty string.If the if statement passed then the **value** is assigned to the **prop** property in collection.
outside the if statement, I created another if statement that checked if the **prop** argument was identical to **tracks** and if value was not an empty string. If so then value would be pushed to the **prop** array.
At the end of the function I had an if statement that checked if the argument passed in at **value** is an empty string, if so then the property in collection that has the same title as the argument passed in at **prop** would be deleted.
Then lastly the edited version of the collection would be returned.