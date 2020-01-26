var http = require('http');
var fs = require('fs');

fs.readFile('./cool.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8001);
    if(5 === 5) {
    	console.log ("Eshaan is very intelligent and smart!!!!!!!!");
    }
    else {
    	console.log("What is up!!!!!!");
    }
});