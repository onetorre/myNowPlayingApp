// var connect = require('connect');
// var serveStatic = require('serve-static');
// var fs = require("fs");

var express = require('express');
var app = express();
var Twit = require('twit');
var T = new Twit({
    consumer_key: 'CXVNsTDohsJaIxl0cjpuLKXYr',
    consumer_secret: 'Y49dNi2NPN9vJaPS95QnRLslOqisEuC7v934lHOfN05cVjbtDB',
    access_token: '2834545563-QYQqm8hnLPiU3eFyAD8SGtKhfIYW7gMp8fGh8Xd',
    access_token_secret: 'SUquQt3XC2ve3IIa8JbwMa4bsRCpZSJuCVKYAXLUTDBBT',
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
});

var getTweetObject = function (tweetContent, tweetMediaURL) {
    return {
        status: tweetContent + ' ' + tweetMediaURL + ' ' + '#nowplaying',
    };
}

var tweetMyTweetButton = function (tweetContent, tweetMediaURL) {
    T.post('statuses/update', getTweetObject(tweetContent, tweetMediaURL));
}

app.get('/tweet', function (req, res) {
    console.log(req.query.message + ' ' + req.query.url);
    tweetMyTweetButton(req.query.message,req.query.url);
    res.end('{ result:ok }');
});

app.use(express.static(__dirname));

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});