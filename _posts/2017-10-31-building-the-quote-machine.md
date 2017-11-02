---
Layout:	
Title:	"Building the Quote machine"
Date:	2017-10-31 10:25:08 -0600
Categories:	
---

## Building the Quote machine.

Building the Quote machine was the first project felt like was a complete give away treat by freecodecamp.
Yes it had a significant impact towards testing me about the methods I had just learnt.
Feeling this way, I took it  upon myself that if I ever felt like building the quote machine was starting to be simple I would find a way to make it more challenging to myself.

Building a quote machine sounded like fun at first, but because I had built it before I decided to change how I previously built it. Thus I came up with missions based on the projects.

 - Have a quote displayed with the Author.
 - Use a different api than I did before.
 - Use the api to access quotes and quote authors.
 - Have a generate button that would allow users to display a different quote whenever they felt like they wanted to.
 - Have a tweet button that would allow users to share the currently viewed quote to their tweet account.

My approach was to attempt each mission at a time and once complete then I can move on to the next one.
While attempting any set missions one of the key aspects I has to keep in mind was that try at best to complete the mission without tempering with the previous missions results.

### First mission.
I created a container where any quote was to be displayed, I then hard quoted  a quote along with the quote author to test how any quote would be desplayed.

### Second mission.
I then searched for recommended api when working with quotes, out of many api's I went with one that was used by a German website ("https://api.forismatic.com/api/1.0/").
I decided to select this api as I was curious if it was possible of making it work on my own Englished based website.

### Third mission.
As the api was from a German quote website I used it in a manner that would allow me to access any quote that website was able to access.
I used Ajax to make the https request, the data was in jsonp format and set to english.
I then used the success callback to display / replace any currently viewed quote  with the retrieved data from the webserver.
As the quotes was being accessed it was not being displayed because my function wasn't being called.

### Fourth mission.
I created a button tittle generate that would call my callback function thus displaying the newly retrieved quote where the currently viewed one is therefor replacing it.
That means only one quote can be displayed per click at the generate button.

### last mission.
Now the only thing left was to create a tweet button that would enable the users to share the currently viewed quote on their tweeter account.
I created a function that copied any text on the container that the quotes where located, then using a link to twitter/account/tweet that was in the function.
I also created a button titled tweet that called the function that enabled the user to share the quote on twitter.