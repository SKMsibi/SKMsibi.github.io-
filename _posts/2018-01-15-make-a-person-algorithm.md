---
Layout:    
Title:    "Make a person"
Date:    2018-01-15 14:00:08 -0600
Categories:    
---

## The make a person Algorithm.
Given a variable with an object in it and a function that creates a new person Name inside the object.
The algorithm requires an individual to make a few given function names to work for the objects on the name inside the object.

## writing the algorithm.
The given function names that where meant to be created by the user are as follows:
 - getFullName();
 - getFirstName();
 - getLastName();
 - setFirstName();
 - setLastName();
 - setFullName();

Within the main function called person(), I a function for each of the given function names.
Each function had a this statement that enabled the function to use their parent scoping, this meant anything that was inside the main function or outside the function I could access it within the created functions.

## What I did for each function.
 - **getFullName** : The main function has a parameter called firstAndLast that contains the full name that will be passed to the object.so I just return the parameter firstAndLast in the getFullName() function.
 `
 this.getFullName = function () {
    return firstAndLast;
  };
 `
 - **getFirstName** : Using the firstAndLast parameter, i split the parameter into two parts and accessed the first part being the first name.
 `
   this.getFirstName = function () {
    return firstAndLast.split(" ")[0];
  };
 `
 - **getLastName** : also using the firstAndLast parameter, I split the parameter into two parts and accessed the second part being the last name.
 `
   this.getLastName = function () {
    return firstAndLast.split(" ")[1];
 `
 - **setFirstName** : In this case, I had to edit the name being passed into the object. The setFirstName function had a parameter called first that contained the new first name. I re-asigned the firstAndLast argument with the argument called first and the second part of the firstAndLast argument.
 `
 this.setFirstName = function (first) {
    firstAndLast = first + " " + firstAndLast.split(" ")[1];
  };
 `
 - **setLastName** : similar to the setFirstName function, but accessing different parts of the firstAndLast argument.
 `
  this.setLastName = function (last) {
    firstAndLast = firstAndLast.split(" ")[0] + " " + last;
  };
 `
 - **setFullName** : Now the entire name had to be edited and changed. so I just replaced the entire firstAndLast argument, with the argument passed in the setFullName function.
 `
   this.setFullName = function (firstAndLast1) {
    firstAndLast = firstAndLast1;
  };
 `
The following is the entire algorithm.
`
var Person = function (firstAndLast) {
  this.getFullName = function () {
    return firstAndLast;
  };
  this.getFirstName = function () {
    var fullName = firstAndLast;
    return firstAndLast.split(" ")[0];
  };
  this.getLastName = function () {
    var fullName = firstAndLast;
    return firstAndLast.split(" ")[1];
  };

  this.setFirstName = function (first) {
    firstAndLast = first + " " + firstAndLast.split(" ")[1];
  };
  this.setLastName = function (last) {
    firstAndLast = firstAndLast.split(" ")[0] + " " + last;
  };
  this.setFullName = function (firstAndLast1) {
    firstAndLast = firstAndLast1;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
console.log(bob.getFullName());

`