const request = require('request');
var express = require('express')
var tweetExp = express()
 
const url = "https://api.twitter.com/1.1/statuses/update.json";

var oauth = {
    consumer_key: 'xtSkoYS1EdICn488D0k5w5rrN',
    consumer_secret: '27QiiOaQDueOERNiPX5ImDusAYAKWQqwW4wffpZL6Yz2Ramzg1',
    token_key: '940168325195280385-99ZNHBPGnlbPiG7gorqaUbV4DmRy9q0',
    token_secret: 'NKCHDxXyeV5vVLcuEho9MLTeAY7usYZ4qKNGlPpBtZK67'
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
tweetExp.get('/', function (request, httpResponse) {
  res.send('"stay rooted to your roots."')
})
 
tweetExp.listen(3000);