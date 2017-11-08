---
Layout:	
Title:	"Spinal Tap Case solution"
Date:	2017-11-08 13:18:03 -0600
---

## Spinal tap casing.

Previously I had written a blog post describing my challenges and difficulties I had been experiencing while trying to solve the challenge.
Writing the blog post really helped in getting me to evaluate any nuance I had come across, come up with a way to beat and overcome it.
It helped in getting me to change my approach towards the challenge, have an open minded focus and decide to change any method I had been using before and come up with new and better ways of solving the challenge.

In so doing I came up with a better solution that way more understandable code that worked even better.
A well and clean code.

 ### Writing the code.
 - I created a function that took in a string as a parameter and converted all upper-case character to lower case. The function also replaced any blank spaces with dashes(-) and any underscores with dashes(-);
 - I then separated the function into three functions. 
 - One changing any upperCase character to lowerCase.
 - The next function replaced any blank spaces and underscores with dashes.
 - The last function would take results from bothe functions and return them.
 
function spinalCase(str) {
  var finalAnswer = "";
  for(var i = 0; i < str.length;i++){
      var validSentence = changeToLowerCase(str);
      finalAnswer = replaceWithDashes(validSentence);
  }
  return finalAnswer;
}

function changeToLowerCase(str){
  str= str.replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase();
   return str;
}

function replaceWithDashes(validSentence){
  var temp = validSentence.replace(/\s+|_/gi,"-");
  return temp;
}

spinalCase("thisIsSpinalTap");