---
Layout:	
Title:	"building the Local weather viewer"
Date:	2017-11-01 09:08:03 -0600
---

## building the Local weather viewer.

One of the most interesting projects supplied by the freecodecamp platform, is about building a local weather viewer.
Wether the project was simple or complex it had to view the weather forecast for any user at their location, tricky but also very interesting.
Like I usually do with any other project I set to complete, I break down the entire project into missions that when all done correctly they build the entire project.

## missions for completing the project.
 - Use the user's browser to get their location.
 - Use the given api to retrieve information about the location.
 - Access and retrieve necessary data and display it to the user.
 - Be able to convert temperature units.
 - Have different background images based on the temperature.

### first mission.
I decided to use Geolocation that enabled me to identifying the geographical location of the Browser.
The Geolocation gave me the longitude and latitude of the browser.

### second mission.
Freecodecamp had already supplied an api to anyone who attempted the project although they specified that any other preferred api can be used.
With the use of the given api and the geographical location of the browser ("https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}"), I was able to make an https request through Ajax that returned an object containing data about the location.

### Third mission.
I then used the Success callback to access the data that I wanted to display e.g temperature, pressure, wind speed, weather-icon, city name etc.

### fourth mission.
I then created a function that would convert Fahrenheit to Celsius.
I then created a button titled convert that would call the function.

### fifth mission.
I accessed different images viewing different weather environments and created a function that would display specific images in relation to the temperature.