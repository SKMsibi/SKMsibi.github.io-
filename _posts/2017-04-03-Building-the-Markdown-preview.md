---
Layout :
Title : "Building the Markdown preview"
Date : 2018-03-21 14:03:04 -0600
--- 

## What is Markdown.
Markdown is a lightweight markup language with plain text formatting syntax.
### The Markdown pre-view.
The *markdown* pre-view is a model is  a model designed to show how data written in plain text will be displayed when its converted to *markdown*.

When writing a *markdown* pre-view in react, I considered how it will be displayed.
The first thing was that a typing area would be needed, the second thing would be the *markdown* pre-view display that would show the now changed plain text.
I then considered how the plain text would be converted to *markdown*.

### Building the Markdown pre-view.
I downloaded a package called **marked** that converts plain text to *markdown* text.
I created a react component that displayed a text-area. Whenever a user typed in this text-area the text in the text-area would be taken and placed inside state.
I then created another component titled **markedText** that displayed a div with the text taken from state. The magic happened inside the **markedText** component. Whenever text from state was passed into it,  the component would use the **marked** package to convert the plain text to *markdown* and display the *markdown* text inside a div that will be displayed.