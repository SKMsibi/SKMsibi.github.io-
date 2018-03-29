---
Layout :
Title : "The simple calculator"
Date : 2018-02-14 13:03:04 -0600
--- 

## Creating a simple calculator.
A calculator is one of the most common used tools, and because of technology development and the need for daily calculations the calculator is now accessed through most electronic digital devices.e,g computers, cell phones,watches ect.

This means programs have to be written to make calculators be available in all listed devices.

### How I wrote the calculator code.
Having an HTML layout of the calculator I considered the number buttons first as those are the core building blocks of the calculator.
I had number buttons from 0 - 9 and each number button called a function that would input the number that was clicked to the input box.

I also had four extra buttons that where based on mathematic actions/operations. 
Each button would input their mathematical sign operations to the input box.

Now that the code could put in what ever numbers and mathematical operations to the input box, what was left was to execute the operation and get the result.
I created a function called *getAnswer* that retrieved what ever was present in the input box and it would use regex to evaluate wether the operation was subtraction,addition,multiplication or division. Once the operation was evaluated the function would carry out the operation on the numbers retrieved from the input box.
The *getAnswer* function was called by a button that acted as an *equals to* button and had an *equals to* sign.

The calculator also had buttons for canceling the current worked on calculation and a dot button to accommodate for decimal numbers.
