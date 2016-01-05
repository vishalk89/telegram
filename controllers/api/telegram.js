'use strict';
var _ = require('lodash');
var request = require('request');

// 1
function reply(req, resp, cb) {
    console.log( req.body );

    resp.send('OK');
    cb();
}

module.exports.reply = reply;