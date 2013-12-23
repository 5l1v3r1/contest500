if (process.argv.length != 3) {
    console.log('Usage: node server.js port');
    process.exit();
}

var port = parseInt(process.argv[2]);
if (!port) {
    console.log('Invalid port number');
    process.exit();
}

var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname + '/assets'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret: 'abcd' + Math.random()}));
app.get('/submit', function(req, res) {
    if (typeof req.query.key != 'string') {
        res.writeHead(302, {'Location': 'invreq.html'});
        res.end();
    } else {
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.readFile('assets/submit.html', function(err, data) {
            var str = data.toString().replace('%key%', req.query.key);
            res.end(str);
        });
    }
});
app.post('/submit', function(req, res) {
    if (typeof req.body.key != 'string' || 
        typeof req.body.youtube != 'string' || 
        typeof req.body.email != 'string') {
        res.writeHead(302, {'Location': 'invreq.html'});
        res.end();
    } else {
        res.writeHead(200, {'Content-type': 'text/html'});
        req.body.timestamp = new Date();
        fs.appendFile('submissions.txt', JSON.stringify(req.body) + '\n', function (err) {
            if (err) {
                res.end('The server could not record your submission. Please try again later.');
            } else {
                res.end('Your submission has been recorded. <a href="/">Go back</a>');
            }
        });
    }
});

app.listen(port);