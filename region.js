
var fetchURL = require('fetch').fetchUrl;

var Twit = require('twit');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var T = new Twit({
  consumer_key:         'f7bKqVfXMT9zucaEaDsiuz9We',
  consumer_secret:  'tnnDE5gy1b7Cs5CMpU9sLNXQcLREHIT86SiNdOAIDI3CG2LqfU',
  access_token:         '1237052010278588416-QhLg81fYpWaOk6SSqLwm5ZRSmLYhB1',
  access_token_secret:  'C8NJfhcgnZjBgr1d8rv92qzXJJu4Jao6kvsV2XYTxMu4V',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
});


var link = 'https://coronavirus-19-api.herokuapp.com/countries';

fetchURL(link, function(error,meta,body){
        tt = JSON.parse(body.toString());
        
        
        var random = Math.floor(Math.random() * Math.floor(tt.length));
        var txt = "Pays : "+tt[random]['country']+"\n\n" +tt[random]['cases'] +" malades du Covid-19\n"+tt[random]['todayCases']+" nouveaux cas aujourd'hui\n"+tt[random]['active'] +" personnes actuellement malade dont "+tt[random]['critical'] + " en soins intensifs\n"+tt[random]['recovered']+" soignées du Covid-19 \n#COVID19france #COVID19 #CoronavirusFrance #coronavirus";
        console.log(txt);
        console.log(random);
//        T.post('statuses/update', { status: txt }, function(err, data, response) {
//        
//        })
        
    
    });