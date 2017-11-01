var express = require('express');
var router = express.Router();

var Contact = require('../models/contacts');


//retrieving data
router.get('/contacts', (req, res) => {
    Contact.find(function(err,contacts){
        res.json(contacts)
    });
});

//add contacts
router.post('/contacts',(req, res) => {
    //logic of adding contact
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err, contact) => {
        if(err){
            res.json({msg: 'Fail to add contact!'});
        }
        else{
            res.json({msg: 'Contact added successfully!'});
        }
    });
});

//delete
router.delete('/contacts/:id',(req, res) => {
    //logic of adding contact
    Contact.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

//router middleware
module.exports = router;
