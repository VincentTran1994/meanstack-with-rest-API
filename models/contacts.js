
var mongoose = require('mongoose');

var ContactSchema = mongoose.Schema({
    first_name:{
        type: String,
        required : true
    },
    last_name:{
        type: String,
        required : true
    },
    phone:{
        type: String,
        required : true
    }
});

//mogoose schema middleware in oder to export to node_module
var Contact = module.exports = mongoose.model('Contact', ContactSchema);
