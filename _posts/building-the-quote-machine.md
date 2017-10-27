---
Layout:	
Title:	"building the quote machine"
Date:	2017-10-27 09:08:03 -0600
---

## Building the quote machine.

While learning about JavaScript on free code camp, a couple of tasks were give based on JSON, APIs and Ajax.
These concepts opened me up to a whole new world filled with possibilities I didn't know even existed.
Being alert of new concepts and methods made me wonder the possibilities,limitations and origins of these new discoveries.

While in the route of searching for the answers I had about the discoveries I had made, freeCodeCamp gave me project to test my knowledge of what I had learned from so far.
The project was mainly testing me on the JSON, APIs and Ajax. It requested that i build a Wikipedia viewer.
At first I found this challenge very impossible I frequently kept on comparing my Wikipedia viewer to the Wikipedia official website and I didn't notice but i was trying to imitate the Wikipedia official website.

I had jumped on the project too quick and not long after I had started working on it,  I was stuck.
This gave me time to think and reflect, I noticed i needed a plan and to give this project my own touch and stop trying to imitate something else.

I started planning my approach to this project and breaking down the project into small tasks to track my acts, faults and successes.
I had planned to create a search-box and a search button, where users would input their desired search term and click the search button to search.
In the background i would have JavaScript that would use an API that was provided by free code camp, and the users input and make an Ajax request.
The request would return a definition of the users input and a number of possible search terms the user may have wanted to search for might be interested in looking at.
The request also returns a link to the search result Wikipedia webpage of the users input.

Now that I have the results I wanted, the challenge was on viewing them in an HTML page.
I decided to display them in a div element and show them separately.
As soon as the user clicks on the search button and the Ajax script has return the results, then first show the main definition, then hide the other possible search terms in a div that is only displayed when the button of show other results is clicked on.