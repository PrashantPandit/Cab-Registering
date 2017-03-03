var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'); //parses information from POST
var mongoose = require('mongoose');


var contactSchema = mongoose.Schema({
  contactName     : String,
  contactMessage  : String
});

var Contact = mongoose.model('Contact', contactSchema, 'contact');


router.get('/getContact', function(req, res){
  console.log("Reached Get Function of contact on server.");
  Contact.find({}, function(err, docs){
    res.json(docs);
  });
  });

router.get('/getContact/:id', function(req, res){
  console.log("Reaches Get ID of Contact on server...");
  Contact.find({_id: teq.params.id}, function(err, docs){
    res.json(docs);
  });
});

router.post('/addContact', function(req, res){
  console.log(req.body);
  console.log(req.body.contactName);

  console.log(req.body.contactMessage);

var name     = req.body.contactName;
var message  = req.body.contactMessage;

var contact = new Contact({

  contactName     : name,
  contactMessage  : message
});

  contact.save(function(err, docs){
    if (err) throw err;
    console.log("Contact Details are saved Successfully...");
    res.json(docs);
  });
});
module.exports = router;
