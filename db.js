// import fs from 'fs';
// import path from 'path';
// import Sequelize from 'sequelize';
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');

let db = null;

module.exports = app => {
    if (!db) {
        // const config = app.libs.config;
        const sequelize = new Sequelize('MyBlog', 'tourists', '1qaz@Wsx', {
            host: '103.80.28.19',
            dialect: 'mysql'
        });
        db = {
            sequelize,
            Sequelize,
            models: {},
        };
        const dir = path.join(__dirname, 'models');
        fs.readdirSync(dir).forEach(file => {
            const modelDir = path.join(dir, file);
            const model = sequelize.import(modelDir);
            db.models[model.name] = model;
        });
        // Object.keys(db.models).forEach(key => {
        //     db.models[key].associate(db.models);
        // });
    }
    return db;
};
