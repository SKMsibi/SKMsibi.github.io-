---
Layout:	
Title:	"Solving the valid US numbers task."
Date:	2017-11-28 14:07:06 -0600
---

# How I solved the validate US telephone number task.
Since the number is given in a string I decided to use regex and only regex to solve the task.

I used the .test() function to on the regex.
In my regex function, I used the star character to search for one or none "1 " or "1" at the beginning of the string.
I then had a grouping containing escaped brackets, \d and {}. e.g // ((\(\d{3}\)).
Then had a pipe character representing an or, followed by a digit searcher \d with the specification of three in length.
all the separations I had them grouped together and placed where they could potentially be present in the string for any possible US telephone number sequence.
At the end of my regex, I had another group that had a \d and a pair of curly braces specifying the length of the group.

I then place the entire regex function in a variable called finalAnswer and I returned that variable in the main function.

