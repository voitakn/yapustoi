/**
 * Created by voita on 22.10.2016.
 */
'use strict';

var Sequelize = require('sequelize');
var config = require('../config/config');
var fs = require('fs');
var path = require('path');
var db = {};
var sequelize = new Sequelize(config.development.url);

fs.readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js');
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
