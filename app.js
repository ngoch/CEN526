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
        var name = 'CEN526 Web Technologies';
        return res.render('hello', {"name": name});
    });

    app.get('*', function (req, res) {
        return res.send(404).send('Page Not Found');
    });

    app.listen(8000);

    console.log('Express server started on port 80');
});
