var config = module.exports = {};

config.env = 'development';
config.hostname = 'dev.node.ilimturan.com';

//mongo database
config.mongo = {};
config.mongo.uri = process.env.MONGO_URI || 'localhost';
config.mongo.db = 'node_dev_db';