// const express = require('express');
var pdf = require('pdfkit');
// var app = express();
var fs = require('fs');

var myDoc = new pdf;

myDoc.pipe(fs.createWriteStream('node.pdf'));

myDoc.font('Times-Roman')
    .fontSize(48)
    .text('NodeJS PDF Document',100,100);

myDoc.end();

// app.listen(3000);
