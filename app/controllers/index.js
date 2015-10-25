/**
 * Created by tatocaster on 10/24/15.
 */
module.exports = function (req, res, db) {
    db.collection('courses').find().limit(1).next(function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            return res.render('index', {"name": doc.name, 'page_name': 'home'});
        }
    })
};