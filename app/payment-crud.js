var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'); //parses information from POST
var mongoose = require('mongoose');


var paymentSchema = mongoose.Schema({
  bankName          : String,
  accountHolder     : String,
  cardNumber        : String,
  cardCVV           : String,
  expMonth          : String,
  expYear           : String

});

var Payment = mongoose.model('Payment', paymentSchema, 'payment');


router.get('/getPayment', function(req, res){
  console.log("Reached Get Function of Payment on server.");
  Payment.find({}, function(err, docs){
    res.json(docs);
  });
  });

router.get('/getPayment/:id', function(req, res){
  console.log("Reaches Get ID of payment on server...");
  Payment.find({_id: teq.params.id}, function(err, docs){
    res.json(docs);
  });
});

router.post('/addPayment', function(req, res){
  console.log(req.body);
  console.log(req.body.bankName);
  console.log(req.body.accountHolder);
  console.log(req.body.cardNumber);
  console.log(req.body.cardCVV);
  console.log(req.body.expMonth);
  console.log(req.body.expYear);

var bank          = req.body.bankName;
var customer      = req.body.accountHolder;
var cardNo        = req.body.cardNumber;
var cvv           = req.body.cardCVV;
var month         = req.body.expMonth;
var year          = req.body.expYear;

var payment = new Payment({

  bankName         :   bank,
  accountHolder    :   customer,
  cardNumber       :   cardNo,
  cardCVV          :   cvv,
  expMonth         :   month,
  expYear          :   year

});

  payment.save(function(err, docs){
    if (err) throw err;
    console.log("Payment Details are saved Successfully...");
    res.json(docs);
  });
});
module.exports = router;
