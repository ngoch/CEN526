/**
 * Created by tatocaster on 10/24/15.
 */
module.exports = function (req, res, db) {
    var cursor = db.collection('lectures').find();

    cursor.toArray(function (err, docs) {
        console.log("retrieved records:");
        console.log(docs);

        return res.render('lectures', {'pagenam': 'Lectures list', 'lectures': docs});

    })
};
