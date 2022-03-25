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
    var response = "Success!" + count + " " +item +"(s) added to your order."
    console.log(response);
    res.send(response);
});


//testing on 3021
app.listen(3025, () =>
  console.log('Example app listening on port 3025!'),
);
process.on('uncaughtException', function(err) {
    // handle the error safely
    console.log(err)
    // Note: after client disconnect, the subprocess will cause an Error EPIPE, which can only be caught this way.
});