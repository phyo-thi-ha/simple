var  fs = require('fs')
var https = require("https");

fs.writeFile(__dirname + "/index.html" , "<h1>HTML is great</h1>" , function(error){
    if(error){
        return console.log(error);
    } else {
        return console.log("Congracts");
    }
});

var photolocation = "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg.webp"
https.get(photolocation,function(response){
response.pipe(fs.createWriteStream(__dirname + "/dog.jpg"));
})