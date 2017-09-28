---
Layout:	
Title:	"Jsonp and AJAX callbacks."
Date:	2017-09-15 08:18:03 -0600
---

### JSONP.
JSON with padding.
JSONP is used to request data from a server residing in a different domain than the client.
This method is commonly used to bypass the cross-domain policies in web browsers.
JSON and JSONP behave differently on the client and the server.
JSONP is a simple way to overcome browser restrictions when sending JSON responses from different domains from the client.

### AJAX callbacks.
Success - This function run when the URL request is successful.
Error - This function runs when the URL request is unsuccessful.
Time-out - Specifies how long to allow the URL request to tun before an error message pops up.
BeforeSend - Runs before the AJAX request, this is a good place to put a spinner.
Complete - Runs after the success and error, this is also a good place to put a spinner.