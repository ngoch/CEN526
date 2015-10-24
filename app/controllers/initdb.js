/**
 * Created by tatocaster on 10/24/15.
 */
module.exports = function (req, res, db) {
    var lecturesCollection = db.collection('lectures');

    lecturesCollection.drop(function () {
        console.log('dropped lectures collection');
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
};
