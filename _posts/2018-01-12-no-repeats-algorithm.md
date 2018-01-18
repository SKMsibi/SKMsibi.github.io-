---
Layout:    
Title:    "No repeats please"
Date:    2018-01-11 14:00:08 -0600
Categories:    
---

## what is the No repeats please algorithm.
Given a string, the algorithm requires an individual to return the number of total permutations of the provided string that don't have repeated consecutive letters.
Its instructions also state that "assume that all characters in the provided string are each unique."

## Writing the No repeats please algorithm.
first thing was to create a function called permAlone, that took in two parameters being the given string and the other being a default parameter being the count and also the length of the given string.
Inside the permAlone function I created two variables titled **newArray** and **countArray**.
 
I then created a for loop that iterated using the default count parameter. The for loop would push the number zero for every iteration to the countArray.

Outside the for loop, I pushed the passed in string to the newArray as it is the first permutation I have to consider.
I then created a while with a condition of I which is the count for the while loop, is less than count.

Inside the while loop, I created an if statement that checked if countArray index I was less than I itself, if so then the code would run another if statement created inside the if statement.
This if statement checked if I was odd or even and swapping the different position of the string, based on I being odd or even.
after every swap, a new permutation would be created and so I pushed every swap to the newArray array.
outside the if statement I increase the value of countArray[i] by one and change I back to zero.

This would result in a unique permutation being created at every iteration of the while loop.

`
function permAlone(str, count = str.length) {
    var newArray = [];
    var c = [];
    for (var index = 0; index < count; index++) {
        c.push(0);
    }
    newArray.push(str);

    var i = 0;
    while (i < count) {
        if (c[i] < i) {
            if (i % 2 === 0) {
                var splitted = str.split("");
                const char1 = splitted[0];
                const char2 = splitted[i];
                splitted[0] = char2;
                splitted[i] = char1;
                str = splitted.join("");
                console.log(str);
            } else {
                var splitted = str.split("");
                const char1 = splitted[c[i]];
                const char2 = splitted[i];
                splitted[c[i]] = char2;
                splitted[i] = char1;
                str = splitted.join("");
                console.log(str);
            }
            c[i]++;
            i = 0;
            newArray.push(str);
        } else {
            c[i] = 0;
            i++;
        }
    }
`
Now that newArray contained all possible permutations. I had to write code that would remove any permutations with repeating characters consecutively, and return the number of existing permutations without those repeating characters.

I created a for each function on the newArray that checked each permutation and removing any of those that had repeating characters and I then returned the length of that array.

`
    var repeatsOnly = [];
    var NoRepeats = [];
    newArray.forEach(function (element) {
        for (var index = 0; index < element.length; index++) {
            if (element[index] === element[index + 1]) {
                repeatsOnly.push(element);
                continue;
            }
        }
    });

    newArray.forEach(function (element1) {
        if (repeatsOnly.indexOf(element1) === -1) {
            NoRepeats.push(element1);
        }
    });
    return NoRepeats.length;
`
