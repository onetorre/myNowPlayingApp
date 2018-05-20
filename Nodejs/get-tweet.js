console.log("Juan is awesome");

const Twit = require('twit');

const T = new Twit({
  consumer_key:         'CXVNsTDohsJaIxl0cjpuLKXYr',
  consumer_secret:      'Y49dNi2NPN9vJaPS95QnRLslOqisEuC7v934lHOfN05cVjbtDB',
  access_token:         '2834545563-QYQqm8hnLPiU3eFyAD8SGtKhfIYW7gMp8fGh8Xd',
  access_token_secret:  'SUquQt3XC2ve3IIa8JbwMa4bsRCpZSJuCVKYAXLUTDBBT',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

//  get user location


/*function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log('You have messed up');
  }
};

function showPosition(){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
};
*/

let latitude = '4.704238';
let longitude = '-74.057785';
let userCity = latitude + ',' + longitude + ',' + '100km';

//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//

let params = {
  q: '#nowplaying url:youtube',
  result_type: 'recent',
  geocode: userCity,
  count: 5
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  let tweets = data.statuses;
  for (let i = 0; i < tweets.length; i++) {
    console.log(tweets[i].user['screen_name'] + ' tweeted: ' + tweets[i].text);
  }
};
