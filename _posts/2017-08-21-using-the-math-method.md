---
Layout:	
Title:	"Using the math. method"
Date:	2017-08-21 09:08:04 -0600
---

### The math. method.
The Math. method can be used for different reasons in different cases. It is only used on Numbers.
The Math. method can be used to generate random decimal numbers, whole numbers or even round down decimals.

### Using Math().random to generate a decimal number.
When the math().random method is used to generate a random number, the random number can be 0 but never 1.
That means the outcome of the Math().random can range from 0 to 0,99...
e.g var number = math.random();
    return number;
    number = 0,01011482.

### using Math.floor() to round down decimal numbers.
The math.floor() can be used to round down the decimal to its nearest whole number.
e.g var randomNumber = (math.random() * 10);
    var roundDown = math.floor(random);
    return roundDown;

### Using the math.random() method to generate a whole number.
When using the math.random to generate a random whole number with a range, perimeters of max and min have to be passed through to the function.
The max and min perimeters are used to create the range.
The whole number can generated using both math.floor and math.random. 
e.g var randomNumber = math.random();
    var minMax = (max - min);
    var floor = math.floor(randomNumber * minMax);
    return floor + min;
