const express = require('express');

var app = express();

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

app.get('/download', function(req, res){
  var file = './node.pdf';
  res.download(file); // Set disposition and send it.
});

app.listen(3000);
