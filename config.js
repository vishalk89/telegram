/**
 * Notification System (NFS) config file
 * /config.js
 **/

'use strict';

var path = require('path'),
    _ = require('lodash');

module.exports = function (configDir) {
    if (!_.isString(configDir)) { configDir = '.'; }
    console.log('Config dir : ' + configDir);
    process.env.NODE_ENV = process.env.NODE_ENV || 'development';

    var configPath = path.join(path.normalize(configDir), process.env.NODE_ENV);
    console.log('Config Path : ' + configPath);
    return require('./' + configPath);
};