---
Layout:    
Title:    "Map the debris"
Date:    2018-01-16 14:00:08 -0600
Categories:    
---

## The Map the debris algorithm.
### what is the map debris algorithm about.
The Map the debris algorithm is an algorithm that calculates the orbital period using **GM** , **averageAltitude** and **earthRadius**.
### What is the orbital period.
The orbital period is the time a given astronomical object takes to complete one orbit around another object.
### How I wrote the algorithm.

I created a function called **orbitalPeriod** that took in one parameter **arr** an array that contained an object or multiple objects with a name and average altitude.
Inside the function I created for loop that itarated through the arr and performing certain tasks on each object.

---
Layout:    
Title:    "Map the debris"
Date:    2018-01-16 14:00:08 -0600
Categories:    
---

## The Map the debris algorithm.
### what is the map debris algorithm about.
The Map the debris algorithm is an algorithm that calculates the orbital period using **GM** , **averageAltitude** and **earthRadius**.
### What is the orbital period.
The orbital period is the time a given astronomical object takes to complete one orbit around another object.
### How I wrote the algorithm.

I created a function called **orbitalPeriod** that took in one parameter **arr** an array that contained an object or multiple objects with a name and average altitude.
Inside the function, I created for loop that iterated through the arr and performing certain tasks on each object.

Outside the for loop, I created variables that a that where to be used inside the for loop.
The following are the variables and what they contained.
 - results: empty array.
 - T: the number zero.
 - cube root : the number zero.
 - orbitPeriod: the number zero.
 - GM: A fixed given number of 398600.4418.
 - pie: the number of pie 3.1415926535898.
 - earth radius : A fixed given number of 6367.4447.
 - sum: the number zero.

Most of the variables contained 0 because a number was to be assigned there for every iteration and the number is not constant.

Inside the for loop, I re-assigned earthRadius added with the value of averageAltitude inside the arr array.
I then re-assigned cubeRoot with the cubeRoot of sum.

Using cubeRoot and sum that now contained values, I re-assigned orbitPeriod with pie multiplied by two and multiplied that answer with the square root of cubeRoot divided by GM;

The answer received from those calculations is the orbitalPeriod. It then pushed to the results array.

`
function orbitalPeriod(arr) {
    var results = [];
    var T = 0;
    var cubeRoot = 0;
    var orbitPeriod = 0;
    var GM = 398600.4418;
    var pie = 3.1415926535898;
    var earthRadius = 6367.4447;
    var sum = 0;
    for (var index = 0; index < arr.length; index++) {
        sum = earthRadius + arr[index].avgAlt;
        cubeRoot = sum * sum * sum;
        orbitPeriod = (2 * pie) * Math.sqrt(cubeRoot / GM);
        T = Math.round(orbitPeriod);
        results.push({ name: arr[index].name, orbitalPeriod: T });
    }

    return results;
}
`