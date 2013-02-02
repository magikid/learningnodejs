/****************************************************
 * 
 * Following the quick start at http://mongoosejs.com/docs/index.html
 * 
 **************************************************/

var mongoose = require("mongoose");
mongoose.connect('mongodb://magikid:mongodb@linus.mongohq.com:10032/learningnodejs');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback(){ 
    
    var mySchema = mongoose.Schema({
        name: String
    });
    
    mySchema.methods.speak = function(){
        var greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
        
        console.log(greeting);
    };
    
    var myModel = mongoose.model('Norm', mySchema);
    
    var silence = new myModel({ name: 'Silence' });
    console.log(silence.name);
    silence.save(function(err, silence){
        silence.speak();
    });
    
    var speaky = new myModel({ name: 'speaky' });
    speaky.speak();
    speaky.save(function(err, speaky){
        speaky.speak();
    });
    
    myModel.find(function(err, kittens) {
        console.log(kittens);
    });
    
    
    });
    