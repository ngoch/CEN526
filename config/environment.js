/**
 * Created by tatocaster on 10/24/15.
 */
module.exports = function (app, cons) {
    app.engine('html', cons.swig);
    app.set('view engine', 'html');
    app.set('views', appRoot + '/views');
};