var express = require('express'),
    app = express(),
    cons = require('consolidate'),
    MongoClient = require('mongodb').MongoClient;

var path = require('path');

global.appRoot = path.resolve(__dirname);
global.controllersPath = path.resolve(__dirname + "/app/controllers");
global.modelsPath = path.resolve(__dirname + "/app/models");

require(__dirname + '/config/environment.js')(app, cons);
require(__dirname + '/config/routes.js')(app, express, MongoClient);
