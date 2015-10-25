var express = require('express'),
    app = express(),
    cons = require('consolidate'),
    MongoClient = require('mongodb').MongoClient;

var path = require('path');

global.rootPath = path.resolve(__dirname);
global.appRoot = path.resolve(__dirname + "/app");
global.controllersPath = path.resolve(__dirname + "/app/controllers");
global.modelsPath = path.resolve(__dirname + "/app/models");

require(__dirname + '/app/config/environment.js')(app, cons);
require(__dirname + '/app/config/routes.js')(app, express, MongoClient);
