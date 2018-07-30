'use strict';

module.exports = app => {
    const {
        STRING, INTEGER, DATE
    } = app.Sequelize;

    const News = app.model.define('news', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: STRING,
        content: STRING,
    });

    return News;
}