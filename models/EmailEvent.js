/*
 * server/models/CampaignEmail.js
 */

'use strict';

var mongoose = require('mongoose');

// Schema
var schema = new mongoose.Schema({
    'messageId': {type: String},
    'emailId': {type: String},
    'emailText': {type: String},
    'eventDate': {type: Date, default: Date.now},
    'eventType': {type: String}
});

if (!schema.options.toObject){
    schema.options.toObject = {};
}

// Model
var model = mongoose.model('EmailEvent', schema);

// Public API
module.exports = model;
