'use strict';
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();
var routes = require('./routes');

// -- db settings


            app.use(bodyParser.urlencoded({'extended': true}));// utf-8 encoding, url encoded bodies - true uses qs library
            app.use(bodyParser.json());

            var port = process.env.PORT || 3113 ;

            router.get('/', function(req, resp) {// default get
                console.log(JSON.stringify(req.body));
                resp.json({'message': 'Welcome to Telegram_bot'});
            });

            routes.register(router);
            app.use('/api/163095425:AAHLEU6VzXi5mnqqbaq1sWUd6dC988KwhXw', router);
            app.listen(port);
            console.log('server started for Email-Tracking. -- ' + port);
