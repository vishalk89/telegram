/*
 * server/models/CampaignEmail.js
 */

'use strict';

var mongoose = require('mongoose');

// Schema
var schema = new mongoose.Schema({
    campaignId: {type: mongoose.Schema.Types.ObjectId},
    businessId: {type: mongoose.Schema.Types.ObjectId},
    emailId: {type: String},
    emailText: {type: String},
    messageId: {type: String},
    eventId: {type: Number},
    status: {type: String}
});

if (!schema.options.toObject){
    schema.options.toObject = {};
}

// Model
var model = mongoose.model('CampaignEmail', schema);

// Public API
module.exports = model;
