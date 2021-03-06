const express = require('express');
const {generatePDF} = require('./generatePDF.js');
var app = express();
var cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser());

var pdf = require('pdfkit');
var fs = require('fs');

app.get('/', (req, res) => {
    // res.send('Hellow fuckin express!');
    res.send({
      name : "Natan",
      likes : ['biking', 'fishing']
    });
});

app.get('/about', (req, res) => {
    res.send("About page");
});

app.get('/bad', (req, res) => {
    res.send({
      errorMessage: 'Unable to handle request'
    });
});

app.post('/download', function(req, res){
  var file = './node.pdf';
  generatePDF(req.body);
  setTimeout(function () {
    res.download(file);
  }, 1500)
  // res.download('./node.pdf'); // Set disposition and send it.
});

app.listen(3000);
