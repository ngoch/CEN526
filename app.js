var express = require('express'),
    app = express(),
    cons = require('consolidate'),
    MongoClient = require('mongodb').MongoClient;

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

MongoClient.connect('mongodb://localhost:27017/CEN526', function (err, db) {
    if (err) throw err;

    app.get('/', function (req, res) {
        db.collection('lectures').find().limit(1).next(function (err, doc) {
            if (err) {
                console.log(err);
            } else {
                return res.render('index', {'name': doc.name});
            }
        });
    });

    var server = app.listen(8000, function () {
        var host = server.address().address;
        var port = server.address().port;

        console.log('Express server listening at http://%s:%s', host, port);
    });
});
