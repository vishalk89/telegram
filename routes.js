'use strict';
var telegram = require('./controllers/api/telegram');

module.exports.register = function( router ) {
    //router.route('/sendSampleMail').get(emailEventHandler.sendSampleMail);
    //router.route('/onDelivered').post(emailEventHandler.onDelivered);
    //router.route('/onOpened').post(emailEventHandler.onOpened);
    router.route('/onOpened').post(telegram.reply);
};