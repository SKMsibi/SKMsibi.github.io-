---
Layout:    
Title:    "inventory-update"
Date:    2018-01-08 14:13:08 -0600
Categories:    
---

## What is the Inventory update task?
Given two 2D arrays of inventories. 
An individual is supposed to compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array.
e.g var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

## How i solved this task.
### first step.
I created a function called **updateInventory** that took in two arguments **arr1** and **arr2**, eg. updateInventory(arr1,arr2).
Given two arrays, I had to update one using the other arrays data.
I decided to always update arr1 using arr2. I introduced the forEach function on the arr2 that would execute the function on every element inside arr2.

### second step.
I created an if statement that checked if an element in arr2 was not present in arr1. If that element did not exist in arr1 meaning but existed in arr2 then that item would be pushed to array one.
This would result in all items in arr2 being pushed to arr1.

### Third step.
arr1 is now the primary array that contains everything even duplicated.
Now to solve the duplicate factor but still taking in the number of the item into consideration.
Inside the forEach that is iterating through the arr2, I created a for loop that iterated through arr1. Inside it I created an if statement that checked for elements with with matching word phrases in them. when a match is found the amount of the item would be added to one match and the other match that was not added on would be removed using the filter function. Thus solving the duplication factor.
This would now result in one array with all items in it, duplicates removed.
### fourth step.
Now that arr1 has been updated and modified, I created a sort function that sorted the arr1 array according to the item title in each item.