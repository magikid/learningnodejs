/*
 * Following these tutorials some (in order of use):
 * http://clock.co.uk/tech-blogs/a-simple-website-in-nodejs-with-express-jade-and-stylus
 * http://bengourley.co.uk/using-stylus
 * http://shapeshed.com/creating-a-basic-site-with-node-and-express/
 *
 */
 

var express = require('express')
    , stylus = require("stylus")
    , nib = require("nib");
    
var app = express();
function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .use(nib());
}

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(stylus.middleware({
    src: __dirname + '/public'
    , compile: compile
}));
