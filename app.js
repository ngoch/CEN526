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

    app.get('/initdb', function (req, res) {
        var lecturesCollection = db.collection('lectures');

        lecturesCollection.drop(function () {
            console.log('droped lectures collection');
        });

        var cen526 = {'name': 'CEN526', 'comment': 'Web Technologies Ph.D. Mikheil Rukhaia 19:00 - 22:00 B301'};

        lecturesCollection.insertOne(cen526, function (err, doc) {
            if (err) {
                console.log(err);
            } else {
                console.log('insert document');
                console.log(doc.ops);
            }
            return res.render('initdb', {'result': doc.result.ok});
        });
    });

    app.get('/lectures', function (req, res) {

        var cursor = db.collection('lectures').find();

        cursor.toArray(function (err, docs) {
            console.log("retrieved records:");
            console.log(docs);

            return res.render('lectures', {'pagenam': 'Lectures list', 'lectures': docs});

        });

    });

    var server = app.listen(8000, function () {
        var host = server.address().address;
        var port = server.address().port;

        console.log('Express server listening at http://%s:%s', host, port);
    });
});