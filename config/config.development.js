var config = require('./config.global');

config.env = 'development';
config.hostname = 'dev.node.ilimturan.com';
config.mongo.db = 'node_dev_db';

module.exports = config;