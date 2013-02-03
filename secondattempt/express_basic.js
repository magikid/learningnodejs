/*********************************
 * 
 * Following the express quick start located here: http://expressjs.com/guide.html
 * 
 *********************************/
 
var express = require('express');
var app = express();

app.get('/hello.txt', function(req, res){
        res.send('Hello world');
    })
    
app.listen(process.env.PORT);
console.log('Listening on port ' + process.env.PORT);