var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require('cors');
var path = require("path");

//iniliazed the express app
var app = express();

//connecting to mongodb
var database = mongoose.connect('mongodb://localhost:27017/contactlist', function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("The database is connected!!");
    }
});

//on connection
mongoose.connection.on('connecte',()=>{
    console.log("Connected to database mongodb @ 27017");
});
mongoose.connection.on('error',(err)=>{
    if(error){
        console.log("Somthing went wrongs : " + error);
    }
});

//settting up route 
var route = require('./routes/route');


//adding middleware
app.use(cors());
//body-parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//static folder
app.use(express.static(path.join(__dirname, 'public')));
//route
app.use('/api', route);


//testing server
app.get('/', function(req, res){
    res.send("server is working!");
});

//setting port # = 300 and litenning
var port = 3000;
app.listen(port,()=>{
    console.log("server is started at post : " + port);
});