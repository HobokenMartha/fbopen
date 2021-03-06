// Create config.js, in this directory, based on this sample file.

fs = require('fs');

var config = {};

config.app = {};

// allow or prohibit write operations (POST, PUT, DELETE)?
config.app.read_only = true;

// http
config.app.listen_http = true;
config.app.port = process.env.FBOPEN_API_PORT || 3000;

// https
config.app.listen_https = false;
config.ssl = {
	port: process.env.FBOPEN_API_SSL_PORT || 3001
	, key: fs.readFileSync('SERVER_PRIVATE_KEY').toString()
	, cert: fs.readFileSync('SERVER_CERTIFICATE').toString()
	, ca: fs.readFileSync('CA_CERTIFICATE').toString()
	, passphrase: 'PASSPHRASE' // (if any)
	, requestCert: true
	, rejectUnauthorized: false
};

config.solr = {};
config.solr.base_url = 'http://fbopen.gsa.gov:8983/solr/collection1/select';

module.exports = config;
