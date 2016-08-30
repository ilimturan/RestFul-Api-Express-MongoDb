var config = require('./config.global');

config.env = 'production';
config.hostname = 'node.ilimturan.com';
config.mongo.db = 'node_production_db';

module.exports = config;