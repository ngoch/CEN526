/**
 * Created by tatocaster on 10/24/15.
 */
module.exports = function (app, express, MongoClient) {
    // serve static content
    app.use('/public', express.static(appRoot + '/public'));

    MongoClient.connect('mongodb://localhost:27017/CEN526', function (err, db) {
        if (err) throw err;

        app.get('/', function (req, res) {
            require(controllersPath + "/index")(req, res, db);
        });

        app.get('/initdb', function (req, res) {
            require(controllersPath + "/initdb")(req, res, db);
        });

        app.get('/lectures', function (req, res) {
            require(controllersPath + "/lectures")(req, res, db);
        });

        // catch errors
        app.use(function (req, res, next) {
            res.render('errors/404', {});
            //res.status(404).send('Sorry cant find that!');
        });

        var server = app.listen(8000, function () {
            var host = server.address().address;
            var port = server.address().port;
            console.log('Express server listening at http://%s:%s', host, port);
        });
    })
};