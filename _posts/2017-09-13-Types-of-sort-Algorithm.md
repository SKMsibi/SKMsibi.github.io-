---
Layout:	
Title:	"Different types of sort Algorithms."
Date:	2017-09-13 09:08:03 -0600
---
### What is to sort.
To arrange a list of items in a prefered order.

### Types of sort Algorithms.
More than once in a while, individuals writing a program come across a challange that requires a sorting effect.
This means many people might know how to solve the problem of sorting and solve it in many different ways but do they know other possible ways of doing the same thing.
This blog post is addressing the types of sort algorithms, how they work and how best they might be used in different scenarios.
Given a list of values and a function that compares two values, order the values in the list from smallest to largest.

The following are the types of sort algorithms...

## Selection sort.
The selection sort relies on repeated selection of the next smallest item.
To arrange a given list using selection sort, we repeatedly select the smallest remaining element and move it to the end of a growing sorted list.
The selection sort in an unorderd list first searches for the smallest value in the list, once found it is moved to the beginning of the list.
Then the second smallest value is the searched for, then moved to the second place of the list.
This method continues till the are no other values to work with.

## Merge sort.
The Merge sort relies on repeated merging of sections of the list that are already sorted.
Merge sort requires significantly fewer operations than selection sort.
This type of sorting system is called merge sort because it devides or separates all the values in the list, then each an every value is compered with the rest and place in the correct location.
Finally when all the elements are sorted they are then merged to recreate the list that was devided but now in an orderd.

## Insertion sort.
Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. 
It is much less efficient on large lists than more advanced algorithms such as merge sort.

## Bubble sort.
Bubble sort relies on adjacent items.
Repeatedly goes through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order.

## Heap sort.
This sort system splits the list into two sectors, the unsorted sector and the sorted sector.
It iteratively shrinks the unsorted region by extracting the largest element and moving that to the sorted region.

These are the main most well known and used sorting techniques that are effecient in different scenarios.
With this information an individual should now know witch Algorithm to use in different challenges and why.