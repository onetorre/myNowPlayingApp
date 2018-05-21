# Juan Colmenares' nowplaying app:


The main purpose of this application is to showcase my HTML, CSS and JavaScript skills. The application was first built locally through NodeJS and a package called 'Twit' which allowed me to connect and authenticate with Twitter's API in a more easier way. While I could post and get data through the @BInowplaying account through my terminal, the single biggest problem I encountered was when running the application from a browser. Due to my lack of experience/knowledge, I didn't realize my application was a server-side script and wasn't able to run on a browser (through an HTML file -- index.html).

I managed to hack a way to post tweets from the index.html site by creating a script that'd run a localhost:8080 server when creating a tweet and posting it, which effectively posts the tweet. However, the same wasn't possible to retrieve the most recent tweets. Below, a more detailed description on the tools used, the different sections of the application, and the steps in order to run the sections accordingly.

## Tools/Frameworks used:

+ [Nodejs](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
+ [Twit](https://github.com/ttezel/twit) - Twitter API Client for node. Supports both the REST and Streaming API.
+ [Github](https://github.com/) - GitHub is a web-based hosting service for version control using git. It is mostly used for computer code. It offers all of the distributed version control and source code management functionality of Git as well as adding its own features.
+ [Material Kit](http://demos.creative-tim.com/material-kit/index.html) - Material Kit is a Free Bootstrap 4 UI Kit with a fresh, new design inspired by Google's material design.
+ [Twitter API documentation](https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-statuses-update) - Publish and analyze Tweets, optimize ads, and create unique customer experiences.

## Sections:

The web app contains these sections:

- index.html - The Home and visual representation of the application on a browser.
- Get user geolocation - script that gets the browsing user's latitude and longitude coordinates to establish its location.
- Post a tweet - allows a user browsing the site to submit a URL, tweet, and post it under the #nowplaying hashtag.
- Recent tweets - lists the 5 most recent tweets posted in a 100km radius of the user's geolocation.


### Steps to use the application:

- index.html:
  Download from its [Github repository](https://github.com/onetorre/myNowPlayingApp) along with the rest of the folders in the repository (clone), and open in a browser (preferably on Chrome). Pretty straightforward section.

- Get user geolocation:
  Using a ``navigator.geolocation`` function, we're able to obtain the user's location (if he/she allows the page to know their location through a notification). There's code in the ``get-tweet-browser.js`` file to try and translate the user's location coordinates into a city, but I failed to make it work.

- Post a tweet:
  This section isn't as intuitive to use as it seems. I managed to make the function to tweet the content from user inputs in the form by creating a script (server.js) that creates a localhost server in which the application will run. This is by far not the most secure option as anyone who'll be able to execute the script and post a tweet will be able to see the Twitter API authentication details through a browser's console. However, for the purpose of this exercise, it worked. Note that server.js must be run by the user using the application on its terminal by locating itself in the downloaded repository's folder and running ``node server.js`` after writing their video URL and tweet content in the index.html form. Otherwise, a user can run ``node post-tweet.js``from their terminal, modifying the fields of the message to be sent with the URL and content to tweet, and it should post on @BInowplaying's timeline on Twitter.

- Recent tweets:
  This is clearly a fake timeline on the index.html file. In practice, it's only a few tweets (most recent in Bogota with the #nowplaying hashtag and a YouTube URL) embedded with their YouTube videos embedded on the side. This fake version is the result of not knowing how to pull the information from Twitter on a client-side script. I could've attempted to recreate the server.js script I created for the Post Tweet section, however there wasn't enough time for a novice JavaScript coder like me to do so in the required timeframe. Therefore I went ahead with this fake version.

  HOWEVER (and this is a big however), I did manage to create a node script which retrieves the information as required which you can run on your terminal by positioning yourself in the Nodejs directory and running ``node get-tweet.js``. This will utilize the manually typed coordinates (currently set to Twitter HQ's coordinates) in the script, and look for the most recent tweets using the #nowplaying hashtag, including a YouTube video, and within a 100km radius of the selected coordinates. This was an interesting challenge as it required understanding Twitter API's documentation to select the right query parameters.



## Useful Links:


+ [Twitter Live Tutorial by The Coding Train](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6atTSxoRiVnSuOn6JHnq2yV) - This playlist covers all the steps you need to know to make a twitter image bot using node.js and Processing.  Topics include: node.js basics, unix commands in terminal, node package manager, OAuth, Twitter API basics, setIntervalI(), and triggering Processing from the command line.   Still to come are videos about how to create a bot that replies to tweets and how to deploy your bot to a server to run forever and ever!
