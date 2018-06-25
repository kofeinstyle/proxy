var proxy = require('express-http-proxy');
var app = require('express')();
var getRawBody = require('raw-body')

var host = 'http://159.224.199.76:8000';

app.use('/proxy', proxy(host, {
    parseReqBody: true,


    proxyReqPathResolver: function(req) {

        return '/api/test/test1';
    }
}));

app.listen(433, function () {
    console.log('Example app listening on port 3000!');
});