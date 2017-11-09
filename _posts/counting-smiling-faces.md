---
Layout:	
Title:	"solving the count smiles tasks from freecodecamp"
Date:	2017-11-09 13:08:03 -0600
---

# Counting Smiling faces.

In the technology field smiles also exists, in emoji format or in symbol format. Which ever format individual like using one of the two or both as a representation of a smile.

With over a thousand symbols that exists in the world only specific symbols can be accepted to make up a smile, also in an acceptable sequence.

## Using symbols to create smiles.
   list of symbols used for smiles.
    - A closing apostrophe  ")" and an upper-case "D" are used to represent the mouth.
    - A dash "-" and a tilde "~" are used to represent the nose.
    - A colon ":" and a semicolon ";" are used to represent the eyes.

   For a combination of symbols to be identified as a smiley face, the should be any combination of representations of eyes, mouth and the nose is not appropriate but it can be included or not.

## Possible combination for smiley faces.
    - ":)"
    - ";)"
    - ":-)"
    - ";-)"
    - ":~)"
    - ";~)"
    - ":D"
    - ";D"
    - ";-D"
    - ":-D"
    - ":~D"
    - ";~D"

## Solving the tasks.
    Given an array with a list of different symbol sequences, I had to create a algorithm that would count the number of smiley sequences in the array.
        - The forEach method is what I decided to use to iterate through the array to compare each sequence with all passible smiley face symbol sequence. - If there is a match i than pushed the match element to an empty array.
        - I then return the length of the new array that contained all smiley faces from the given array.

        function countSmileys(arr) {
    var valid = [];
    arr.forEach(function(element){
        if(element == ":)" || element == ":D" || element == ";-D" || element == ":~)" || element == ";~D" || element == ";D" || element == ";)" || element == ";~)" || element == ":-D" || element == ":-)" || element == ";-)" || element == ":~D"){
        valid.push(element);
        }
    });
    return valid.length;
    }

Once done with solving the task, I had a choice to refactor, remove repartition or find a better simpler and shorter way to solve task.
I decided to leave my face attempt as is and have my other better attempt of the task in a different file.