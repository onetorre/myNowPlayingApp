console.log("Juan is awesome");

const Twit = require('twit');

const T = new Twit({
  consumer_key:         'CXVNsTDohsJaIxl0cjpuLKXYr',
  consumer_secret:      'Y49dNi2NPN9vJaPS95QnRLslOqisEuC7v934lHOfN05cVjbtDB',
  access_token:         '2834545563-QYQqm8hnLPiU3eFyAD8SGtKhfIYW7gMp8fGh8Xd',
  access_token_secret:  'SUquQt3XC2ve3IIa8JbwMa4bsRCpZSJuCVKYAXLUTDBBT',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

///  tweet 'hello world!'
//

/*let tweetContent = {
  getElementByID('userInputContent');
}

let tweetMediaURL = {
  getElementByID('userInputURL');
}

tweetMyTweetButton = () => {
  T.post('statuses/update', tweet, tweeted);
}*/

let tweetContent = '[Test by JC] Soul-reaching song';

let tweetMediaURL = 'https://www.youtube.com/watch?v=eiDiKwbGfIY';

let tweet = {
  status: tweetContent + ' ' + tweetMediaURL + ' ' + '#nowplaying',

}

tweetMyTweetButton = () => {
  T.post('statuses/update', tweet, tweeted);
}

function tweeted(err, data, response) {
  if (err) {
    console.log('Your tweet messed up. Sincerely, JC.')
  } else {
    console.log(data)
  }
}
