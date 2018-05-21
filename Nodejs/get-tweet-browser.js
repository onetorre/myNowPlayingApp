console.log("Juan is awesome");

const Twit = require('twit');

//const gmaps = require('maps.js')

const T = new Twit({
  consumer_key:         'CXVNsTDohsJaIxl0cjpuLKXYr',
  consumer_secret:      'Y49dNi2NPN9vJaPS95QnRLslOqisEuC7v934lHOfN05cVjbtDB',
  access_token:         '2834545563-QYQqm8hnLPiU3eFyAD8SGtKhfIYW7gMp8fGh8Xd',
  access_token_secret:  'SUquQt3XC2ve3IIa8JbwMa4bsRCpZSJuCVKYAXLUTDBBT',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

//Find my geolocation from browser
function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var lat  = position.coords.latitude;
    var lng = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + lat + '° Longitude is ' + lng + '°</p>';

}


  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}


//set twitter API search params

let userCity = lat + ',' + lng + ',' + '100km';

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

// //get city
// function initialize() {
//     geocoder = new google.maps.Geocoder();
//
//
//
//   }
//
//   function codeLatLng(lat, lng) {
//
//     var latlng = new google.maps.LatLng(lat, lng);
//     geocoder.geocode({'latLng': latlng}, function(results, status) {
//       if (status == google.maps.GeocoderStatus.OK) {
//       console.log(results)
//         if (results[1]) {
//          //formatted address
//          alert(results[0].formatted_address)
//         //find country name
//              for (var i=0; i<results[0].address_components.length; i++) {
//             for (var b=0;b<results[0].address_components[i].types.length;b++) {
//
//             //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
//                 if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
//                     //this is the object you are looking for
//                     city= results[0].address_components[i];
//                     break;
//                 }
//             }
//         }
//         //city data
//         alert(city.short_name + " " + city.long_name)
//
//
//         } else {
//           alert("No results found");
//         }
//       } else {
//         alert("Geocoder failed due to: " + status);
//       }
//     });
//   }
// //testing coords to city
//
// function myLocatedCity() {
//   var output2 = document.getElementById("out2");
//     output2.innerHTML = city.long_name;
//
// }
