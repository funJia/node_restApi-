module.exports = (sequelize, DataType) => {
    const Project = sequelize.define('project', {      
        Name: DataType.STRING,
        Des: DataType.STRING
    }, {
            'freezeTableName': true,
            'timestamps': false,
        });
    return Project;
};
