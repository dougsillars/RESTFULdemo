require('dotenv').config();
//import express from 'express';
const express = require('express');
//express for the website and pug to create the pages
const app = express();
bodyParser = require('body-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine','pug');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/'),(req,res)=>{
    res.sendStatus(200);
}


app.post('/appendorder', (req,res) => {
	console.log("request body",req.body);
	
	
	var item = req.body.item;
	var count = req.body.count;
    var failure = 0.1;
    var response="";
    if(Math.random() < failure){
        //order failed
        response = "Order failed.";
    }
    else{
        response = "Success!" + count + " " +item +"(s) added to your order."
    }
    
    console.log(response);
    res.send(response);
});


app.post('/USPS', (req,res) => {
	console.log("request body",req.body);
	
	var fourdigit1 = (int)(Math.floor(Math.random()*1000));
    var fourdigit2 = (int)(Math.floor(Math.random()*1000));
    var fourdigit3 = (int)(Math.floor(Math.random()*1000));
    var fourdigit4 = (int)(Math.floor(Math.random()*1000));
    var twodigit = (int)(Math.floor(Math.random()*10));
	var trackingNumber = fourdigit1 + " " + fourdigit2 + " " + fourdigit3 + " " + fourdigit4 + " " + twodigit;

    response = "USPS Tracking number " + trackingNumber + " is ready to be shipped.";
   
    console.log(response);
    res.send(response);
});

app.post('/UPS', (req,res) => {
	console.log("request body",req.body);
	
	var sixstring = Math.random().toString(36).substr(2,6);
    var fourdigit2 = (int)(Math.floor(Math.random()*1000));
    var fourdigit3 = (int)(Math.floor(Math.random()*1000));
    var twodigit = (int)(Math.floor(Math.random()*10));
	var trackingNumber = "1Z " + sixstring + " " + twodigit + " " + fourdigit2 + fourdigit3;
 
  

    response = "UPS Tracking number " + trackingNumber + " is ready to be shipped.";
   
    console.log(response);
    res.send(response);
});

app.post('/FedEx', (req,res) => {
	console.log("request body",req.body);
	
    var fourdigit1 = (int)(Math.floor(Math.random()*1000));
    var fourdigit2 = (int)(Math.floor(Math.random()*1000));
    var fourdigit3 = (int)(Math.floor(Math.random()*1000));
	var trackingNumber =  fourdigit1 + " " + fourdigit2 + " " + fourdigit3;

    response = "FedEx Tracking number " + trackingNumber + " is ready to be shipped.";
   
    console.log(response);
    res.send(response);
});

//testing on 3021
app.listen(process.env.PORT || 3025, () =>
  console.log('Example app listening on port 3025!'),
);
process.on('uncaughtException', function(err) {
    // handle the error safely
    console.log(err)
    // Note: after client disconnect, the subprocess will cause an Error EPIPE, which can only be caught this way.
});