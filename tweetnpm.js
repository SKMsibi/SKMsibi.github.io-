const express = require("express");
var app = express();
const request = require('request');
const url = "https://api.twitter.com/1.1/statuses/update.json";

var oauth = {
    consumer_key: 'xtSkoYS1EdICn488D0k5w5rrN',
    consumer_secret: '27QiiOaQDueOERNiPX5ImDusAYAKWQqwW4wffpZL6Yz2Ramzg1',
    access_token_key: '940168325195280385-99ZNHBPGnlbPiG7gorqaUbV4DmRy9q0',
    access_token_secret: 'NKCHDxXyeV5vVLcuEho9MLTeAY7usYZ4qKNGlPpBtZK67'
};
var options = {
    url: url,
    oauth: oauth,
    qs: { status: "stay rooted to your roots." }
};

request.post(options,
    function (err, httpResponse, body) {
        if (err) {
            console.log(err);
        } else if (httpResponse) {
            console.log(httpResponse);
        } else if (body) {
            console.log(httpResponse.body);
        }
    });
app.get("/", function (request, httpResponse) {
    res.send("stay rooted to your roots.")
});
app.listen(3000, () => console.log("stay rooted to your roots."));