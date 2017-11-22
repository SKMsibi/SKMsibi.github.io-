---
Layout:	
Title:	"Binary Agents"
Date:	2017-11-15 14:07:06 -0600
---

# Binary Agents task.
What is binary code?
A coding system using the binary digits 0 and 1 to represent a letter, digit, or other characters in a computer or other electronic device.

A binary code represents text, computer processor instructions, or other data using any two-symbol system, the binary number system's 0 and 1.
 
## Creating an algorithm that converts.
Given a string with binary digits separated by spaces, I split the given string.
I then accessed every split binary digit and used the parseInt method to change the string binary values to an integer.
Inside the parseInt method, I used radix to specify which numeral system to be used.

What is Radix?
The parseInt() function parses a string and returns an integer. The radix parameter is used to specify which numeral system to be used, for example, a radix of 16 (hexadecimal) indicates that the number in the string should be parsed from a hexadecimal number to a decimal number.

After using parseInt to change the string binary digits to an integer I used the radix code base 2 to change from hexadecimal to a decimal number.
I then used fromcharCode() method to change the integer to a character.
Thus resulting in an array containing all the characters obtained by converting binary digits to characters.
I then joined the array together to form a sentence that happened to be to finalAnswer of the algorithm.
