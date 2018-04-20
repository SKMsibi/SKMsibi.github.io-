---
Layout :
Title : "Building the Simon Game"
Date : 2018-02-27 14:03:04 -0600
--- 

### What is the Simon Game.
Simon is an electronic game of memory skill.
The game creates a series of tones and random lights and requires a user to repeat the sequence.
If the user succeeds, the series becomes progressively longer and more complex. Once the user fails, the game is over.

### Building the Simon Game.
when Building the Simon game I first build a simple user interface with four large buttons with different colors, two smaller buttons for the start and stop features, a small points display and a strict on or of button.
I then created a function called addToColorSequence that generated a random number from 1-4, that random number would be used to access any random color  by index in an array containing four different colors. The color that was accessed would be pushed to a different array called colorSequence, this array contained all colors that are displayed in the game.
Each color had its own button in the user interface.
The addToColorSequence function also would add a random color to the colorSequence array and then display one color at a time at its related button until all colors in the array where once displayed.
I had another function called strictModeHandling that handled the strict on or off feature.
The function would check a variable called strictStatus, wether its true or false. when the variable is true that meant the strict feature was on and whenever the user got the sequence wrong, the strictModeHandling function would remove all colors in the colorSequence array so that the user would start afresh. When the strictStatus variable is false then the strictModeHandling function would not remove any colors from the colorSequence array but allow the user to have another attempt at the sequence they where at.