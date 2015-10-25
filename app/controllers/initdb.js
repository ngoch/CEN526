/**
 * Created by tatocaster on 10/24/15.
 */
module.exports = function (req, res, db) {

    //init lectures
    var lecturesCollection = db.collection('lectures');

    lecturesCollection.drop(function () {
        console.log('dropped lectures collection');
    });

    var cen526 = {
        'name': 'CEN526', 'comment': 'Web Technologies Ph.D. Mikheil Rukhaia 19:00 - 22:00 B301'
    };
    var cen525 = {
        'name': 'CEN525',
        'comment': 'CEN525 Advanced Database Systems Prof.Dr. Nodar Momtselidze 18:30-21:30 B301'
    };
    var cen533 = {
        'name': 'CEN533', 'comment': 'CEN 533 Research Methodology Ph.D Besik Dundua 19:00 - 22:00 B304'
    };

    lecturesCollection.insertMany([cen526, cen525, cen533], function (err, r) {
        if (err) {
            console.log(err);
        } else {
            console.log('inserted count: ');
            console.log(r.insertedCount);
        }
        return res.render('initdb', {'result': r.insertedCount});
    });

    //Init courses
    var coursesCollection = db.collection('courses');

    var course = {
        'name': 'Faculty of Computer Technologies & Engineering',
        'definition': '2015/2016 Academic Year. Fall Semester'
    };

    coursesCollection.insertOne(course, function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            console.log('Insert course ');
            console.log(doc);
        }
    });

    //Init students
    //TODO
};
