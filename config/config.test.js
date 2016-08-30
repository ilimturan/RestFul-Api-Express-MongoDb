var config = require('./config.global');

config.env = 'test';
config.hostname = 'test.node.ilimturan.com';
config.mongo.db = 'node_test_db';

module.exports = config;