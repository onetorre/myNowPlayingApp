var globalState = {

  postTweet : function(message, url)
  {
      jQuery.get('http://localhost:8081/tweet?url='+url+'&message='+message);
  }
};