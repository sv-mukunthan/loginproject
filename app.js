    var express = require('express');
    var app = express();
    var loginController = require('./controller/loginController');
    loginController(app);
    var port=8000; 
    var server=app.listen(port,function(){
          console.log('Listening on port %d',port);
    });

    var path=__dirname+'/view/';

      app.get('/', function(req,res){
        res.sendFile(path+'index.html');
      });